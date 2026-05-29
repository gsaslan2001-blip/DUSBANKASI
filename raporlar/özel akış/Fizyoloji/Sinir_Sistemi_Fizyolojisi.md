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

### ÇİFT 1 (Benzerlik: 0.89)

**Soru 1 (ID: 916a8758-654d-4dd1-8d90-7b4ac10fc6b2)**
Soru Kökü: Aşağıdaki nöroglia hücrelerinden hangisi merkezi sinir sisteminin (MSS) fizyolojik ortamını destekleyen hücre grubuna ait **değildir**?
Doğru Şık (C): Schwann hücresi
Açıklama: Schwann hücreleri periferik sinir sisteminin (PSS) glia hücreleridir ve akson miyelinasyonundan sorumludurlar. Astrosit, ependim hücresi, oligodendrosit ve mikroglia merkezi sinir sistemi (MSS) nörogliasıdır. Ependim hücreleri ventrikül iç yüzeyini döşerken, oligodendrositler MSS'de miyelinasyon sağlar.

**Soru 2 (ID: d4bf1f7a-76a9-4438-9b6d-63b3061a3611)**
Soru Kökü: Aşağıdaki glia hücrelerinden hangisi merkezi sinir sistemi (MSS) destek hücrelerinden biri **değildir**?
Doğru Şık (D): Satellit hücresi
Açıklama: Satellit hücreleri, periferik sinir sistemindeki gangliyonlarda nöron gövdelerini (perikaryon) çevreleyerek izolasyon ve destek sağlayan nöroglia hücreleridir. Astrosit, oligodendrosit ve ependim hücreleri ektodermal, mikroglia ise mezodermal kökenli olmak üzere tümü merkezi sinir sistemine aittir. MSS ile PSS glia hücrelerinin lokasyon ayrımı, sinir histolojisinin temel ayırıcı bilgisidir.

---

### ÇİFT 2 (Benzerlik: 0.88)

**Soru 1 (ID: d033a9d6-b4b3-474b-8e5e-327133e902a0)**
Soru Kökü: Periferik sinir miyelinizasyonunun embriyolojik gelişiminde, nöral krista hücrelerinin Schwann hücrelerine doğru farklılaşması için eksprese etmeleri gereken temel transkripsiyon faktörü aşağıdakilerden hangisidir?
Doğru Şık (B): Sox10
Açıklama: Embriyolojik gelişim sırasında nöral krista hücrelerinin Schwann hücresi yönünde farklılaşmasını (diferansiyasyonunu) sağlayan genetik belirteç Sox10 transkripsiyon faktörüdür. Neuroregulin 1 ise daha sonraki aşamada farklılaşmış hücreye miyelinleme sinyalini veren faktördür.

**Soru 2 (ID: e7d75337-46a5-49c8-acaa-ad68403a49d2)**
Soru Kökü: Periferik sinir sisteminde miyelin kılıf oluşumu ve aksonların izolasyonu Schwann hücreleri tarafından sağlanır. Nöral krista hücrelerinin Schwann hücrelerine doğru farklılaşmasını indükleyen temel transkripsiyon faktörü aşağıdakilerden hangisidir?
Doğru Şık (A): Sox10
Açıklama: Periferik sinir sisteminde glia gelişiminde nöral krista hücreleri, Sox10 transkripsiyon faktörünü eksprese ederek miyelin yapıcı Schwann hücrelerine farklılaşırlar. Neuroregulin 1 farklılaşmadan ziyade miyelinizasyon kalınlığını düzenleyen bir büyüme faktörüyken, kinezin ve dynein aksoplazmik taşınımda görevli motor proteinlerdir. Nöroksin ise sinaptik veziküllerin zarına özgü yapısal bir adezyon proteinidir.

---

### ÇİFT 3 (Benzerlik: 0.87)

**Soru 1 (ID: 5c053cf4-636a-409b-b7c3-bd2533d4e62a)**
Soru Kökü: Presinaptik membranda vezikül zarı (v-SNARE) ile hedef membranın (t-SNARE) kalsiyum varlığında etkileşime girdiği bilinmektedir. Bu süreçte vezikül ve hücre membranları tam olarak kaynaşmadan, arada geçici bir delik oluşması yoluyla nörotransmitter salınımı gerçekleşmesi mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): Porositoz
Açıklama: Porositoz, presinaptik membrandaki v-SNARE ile hedef zardaki t-SNARE proteinlerinin etkileşimi sonucu membranlar tam kaynaşmadan arada açılan geçici bir delikten (por) nörotransmitter salınmasıdır. Klasik ekzositozda vezikül zarı hücre zarı ile tamamen birleşirken, porositozda vezikül yapısı korunarak hızlı bir salınım ve geri alım döngüsü sağlanır. Bu mekanizma sinaptik iletim hızını ve membran dengesini optimize eder.

**Soru 2 (ID: 63c66a5c-0da9-48eb-969f-ba1fed29737b)**
Soru Kökü: Presinaptik alanda, hedef membrana kalsiyum varlığında tutunan nörotransmitter vezikülünün membranla tam kaynaşmadan sadece arada bir delik oluşturarak içeriğini sinaptik yarığa salması mekanizması aşağıdakilerden hangisidir?
Doğru Şık (B): Porositoz
Açıklama: Porositoz, vezikülün hedef membrana tam olarak kaynaşmadan (füzyon olmadan) geçici bir por/delik oluşturarak nörotransmitter salgılaması mekanizmasıdır. SNARE kompleksi membranların birbirini tanımasını sağlar ancak tam kaynaşma olmadan por açılması spesifik olarak porositoz olarak adlandırılır. Sıçramalı iletim ise miyelinli aksonlarda elektriksel taşınımı tanımlar.

---

### ÇİFT 4 (Benzerlik: 0.86)

**Soru 1 (ID: 4fab6a76-eaf4-4a26-be42-77928612dc6c)**
Soru Kökü: Akson boyunca nörotransmitter veziküllerinin retrograd (geriye doğru) taşınımından sorumlu olan kargo proteini aşağıdakilerden hangisidir?
Doğru Şık (D): Sitoplazmik dynein
Açıklama: Nöronlarda mikrotübüller üzerinden gerçekleşen retrograd (terminalden gövdeye) taşınımda sitoplazmik dynein görev alır. Kinezin ise anterograd (gövdeden terminale) taşınımı sağlayan motor proteindir. SNARE ve Nöroksin sinaptik vezikül ekzositozu ve bağlanmasında rol alan farklı mekanizmalardır.

**Soru 2 (ID: d8543edd-88c3-4700-b5a6-03ad6c7f1b78)**
Soru Kökü: Nöronlarda sentezlenen proteinlerin ve nörotransmitter dolu veziküllerin akson terminaline taşınması, spesifik motor proteinler aracılığıyla mikrotübüller üzerinden gerçekleşir. Hücre gövdesinden (somadan) akson terminaline doğru gerçekleşen anterograd taşınımda görev alan temel kargo proteini aşağıdakilerden hangisidir?
Doğru Şık (C): Kinezin
Açıklama: Kinezin motor proteinleri, akson boyunca mikrotübüller üzerinde yürüyerek somadan akson terminaline doğru (anterograd) vezikül ve kargo taşınımını sağlarlar. Sitoplazmik dynein ise terminalden hücre gövdesine doğru olan retrograd taşınımdan sorumludur. Nöroksin sinapsın yapısal adezyon proteini, v-SNARE ise presinaptik membrandaki vezikül kaynaşma reseptörüdür.

---

### ÇİFT 5 (Benzerlik: 0.85)

**Soru 1 (ID: a17ecba5-ed54-47e8-a4ad-2ae778547386)**
Soru Kökü: Periferik bir sinirin travma sonrası rejenerasyon sürecini tamamlayarak kası tekrar innerve etmesiyle sonuçlanan dönem değerlendirildiğinde, rejenere olmuş yeni aksonun fizyolojik ve morfolojik özellikleri hakkında aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): İnce yapı ve kısa boğumlar nedeniyle ileti hızı orijinal aksona göre daha yüksektir.
Açıklama: Rejenerasyon tamamlandığında yeni oluşan aksonun çapı eski aksona göre daha incedir ve Schwann hücrelerinin oluşturduğu Ranvier boğum aralıkları daha kısadır. Elektrofizyolojik prensipler gereği, akson çapının incelmesi ve boğum aralığının kısalması izolasyon verimini düşürür; bu nedenle rejenere sinirlerin ileti hızı orijinal sağlıklı sinirlere göre daima DAHA YAVAŞTIR.

**Soru 2 (ID: a452ebce-df10-47f7-8848-2e39ab7f4584)**
Soru Kökü: Periferik sinir hasarı sonrası gelişen aksonal rejenerasyon ve yeniden miyelinlenme süreci ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Rejenere olan yeni aksonun çapı, hasardan önceki aksona göre daha kalın ve ileti hızı daha yüksektir.
Açıklama: Rejenerasyon tamamlandığında oluşan yeni akson çapı eskisine göre daha incedir, miyelin segmentleri (Ranvier boğum aralıkları) daha kısadır ve bu nedenlerle elektriksel ileti hızı eskisinden daha yavaştır. Endonöryumun varlığı, Schwann hücre proliferasyonu ve Nissl onarımı doğru rejenerasyon adımlarıdır.

---

### ÇİFT 6 (Benzerlik: 0.85)

**Soru 1 (ID: 8bc763b1-c18b-4d2e-a67e-eb139d139137)**
Soru Kökü: Kırk beş yaşında erkek hastanın beyin parankiminden alınan biyopsi örneğinde, fagositoz aktivitesi gösteren ve enfeksiyon bölgesinde yoğunlaşan destek hücreleri izlenmektedir. Bu klinik tabloda izlenen glia hücrelerinin embriyolojik kökeni aşağıdakilerden hangisidir?
Doğru Şık (D): Mezoderm
Açıklama: Mikroglia hücreleri, fagositik aktivitelerinden dolayı ektodermden değil, monosit-makrofaj serisinden yani mezodermden köken alan tek merkezi sinir sistemi destek hücresidir. En güçlü çeldirici olan nöral krista, periferik glia hücrelerinin kaynağı olduğu için bu klinik tabloda yanlıştır. Astrosit ve oligodendrosit gibi diğer merkezi sinir sistemi glia hücreleri ise doğrudan ektoderm kökenlidir.

**Soru 2 (ID: f3727a8c-b055-43f7-b5a3-56ee04a1081b)**
Soru Kökü: 45 yaşında erkek hasta, geçirdiği serebrovasküler olay (iskemi) nedeniyle takip edilmektedir. İskemik hasar bölgesinde ölü dokuyu temizlemek üzere fagositik aktivite gösteren nöroglia hücrelerinin sayısında belirgin artış saptanmıştır. Bu hücresel infiltrasyondan sorumlu glia hücrelerinin embriyolojik kökeni aşağıdakilerden hangisidir?
Doğru Şık (D): Mezoderm
Açıklama: Mikroglia hücreleri merkezi sinir sisteminin immün yanıtından sorumlu makrofajlarıdır ve diğer nörogliaların aksine ektodermden değil, mezodermden (monosit-makrofaj serisinden) köken alırlar. Nöral tüp ektodermal bir yapı olup astrosit, oligodendrosit ve ependim hücrelerini oluştururken nöral krista periferik sistem glia hücrelerini (Schwann) yapar. İskemik hasar bölgesinde izlenen fagositik aktivite doğrudan mezodermal kökenli bu mikroglialara aittir.

---

### ÇİFT 7 (Benzerlik: 0.85)

**Soru 1 (ID: 63c66a5c-0da9-48eb-969f-ba1fed29737b)**
Soru Kökü: Presinaptik alanda, hedef membrana kalsiyum varlığında tutunan nörotransmitter vezikülünün membranla tam kaynaşmadan sadece arada bir delik oluşturarak içeriğini sinaptik yarığa salması mekanizması aşağıdakilerden hangisidir?
Doğru Şık (B): Porositoz
Açıklama: Porositoz, vezikülün hedef membrana tam olarak kaynaşmadan (füzyon olmadan) geçici bir por/delik oluşturarak nörotransmitter salgılaması mekanizmasıdır. SNARE kompleksi membranların birbirini tanımasını sağlar ancak tam kaynaşma olmadan por açılması spesifik olarak porositoz olarak adlandırılır. Sıçramalı iletim ise miyelinli aksonlarda elektriksel taşınımı tanımlar.

**Soru 2 (ID: aa7fae9d-56c2-48ec-ae6f-5dff3a6c4edb)**
Soru Kökü: Hedef membrana kalsiyum varlığında tutunan vezikülün, membranla tamamen kaynaşmadan sadece arada bir delik oluşturarak nörotransmitter içeriğini ekstraselüler alana boşaltması işlemine ne ad verilir?
Doğru Şık (A): Porositoz
Açıklama: Porositoz, veziküllerin presinaptik membranla tam bir füzyona girmeden, kalsiyum varlığında geçici bir por (delik) oluşturarak içeriklerini salgılama mekanizmasıdır. Klasik ekzositozda vezikül zarı hücre zarına tamamen katılırken, porositozda bu durum yaşanmaz. Kromatolizis ise sinir hasarı sonrası nöron gövdesindeki Nissl cisimciklerinin kaybını ifade eden patolojik bir hücresel yanıttır.

---

### ÇİFT 8 (Benzerlik: 0.84)

**Soru 1 (ID: 87415384-a6c2-40a5-8c81-6aca36157cf7)**
Soru Kökü: Nöronlarda akson terminalleri genellikle organel yönünden fakir olup protein sentezi yeteneğinden yoksundur. Ancak retinanın bazı akson terminallerinde poliribozomlar bulunur ve aktif protein sentezi izlenir. Nöronal hafıza formasyonunda görev aldığı düşünülen bu yapısal bölgeye ne ad verilir?
Doğru Şık (B): Periaksoplazmik plak
Açıklama: Periaksoplazmik plaklar, aksonların terminal bölgelerinde (özellikle retinada) lokalize poliribozom içeren ve istisnai olarak protein sentezinin yapıldığı, nöronal hafızada kritik role sahip özel mikro-yapılardır. Telodendron aksonun distalindeki fiziki dallanmayı ifade ederken, hücresel düzeydeki bu ribozomal farklılaşmayı tanımlamaz. Bu alan, nöronun uç kısmında sinaptik plastisite için gerekli proteinleri hızlıca üretmesine imkan tanır.

**Soru 2 (ID: 99f78028-f8ab-46cd-a881-f75856181c11)**
Soru Kökü: Vertebralıların retinasında yer alan bazı nöronların akson terminallerinde poliribozomlar ve aktif protein sentezi süreci izlenir. Nöronal hafızada işlevi olduğu düşünülen bu özelleşmiş bölgeye ne ad verilir?
Doğru Şık (A): Periaksoplazmik plak
Açıklama: Periaksoplazmik plak, retinanın bazı vertebral akson terminallerinde bulunan ve nöronal hafıza için lokal protein sentezinin yapıldığı özelleşmiş alanlardır. Bungner bandı rejenerasyonda rol oynarken, Ranvier boğumu SSS ve PSS'de elektriksel iletimin atladığı miyelinsiz aralıklardır. Bu plakların varlığı, akson terminalinde ribozom bulunmaz genel kuralının bir istisnasıdır.

---

### ÇİFT 9 (Benzerlik: 0.83)

**Soru 1 (ID: 30822cd9-e7d9-4c1c-8ddd-fef8a0b204d1)**
Soru Kökü: Nöronal mikrotübüller boyunca gerçekleşen transport mekanizmasında, sentezlenen nörotransmitter veziküllerinin hücre gövdesinden (soma) telodendrona (akson ucu) doğru anterograd taşınmasını sağlayan spesifik moleküler motor protein aşağıdakilerden hangisidir?
Doğru Şık (D): Kinezin
Açıklama: Kinezin, vezikül ve organelleri nöron gövdesinden akson terminaline doğru (anterograd) mikrotübül iskeleti üzerinden taşıyan temel kargo proteindir. Sitoplazmik dynein ise tam ters yönde, terminalden gövdeye doğru (retrograd) taşıma yaptığı için bu işlevde rol almaz. Bu transport mekanizmasının blokajı (örneğin kemoterapötiklerle) mikrotübül işlevini durdurarak periferik nöropatiye neden olur.

**Soru 2 (ID: d8543edd-88c3-4700-b5a6-03ad6c7f1b78)**
Soru Kökü: Nöronlarda sentezlenen proteinlerin ve nörotransmitter dolu veziküllerin akson terminaline taşınması, spesifik motor proteinler aracılığıyla mikrotübüller üzerinden gerçekleşir. Hücre gövdesinden (somadan) akson terminaline doğru gerçekleşen anterograd taşınımda görev alan temel kargo proteini aşağıdakilerden hangisidir?
Doğru Şık (C): Kinezin
Açıklama: Kinezin motor proteinleri, akson boyunca mikrotübüller üzerinde yürüyerek somadan akson terminaline doğru (anterograd) vezikül ve kargo taşınımını sağlarlar. Sitoplazmik dynein ise terminalden hücre gövdesine doğru olan retrograd taşınımdan sorumludur. Nöroksin sinapsın yapısal adezyon proteini, v-SNARE ise presinaptik membrandaki vezikül kaynaşma reseptörüdür.

---

### ÇİFT 10 (Benzerlik: 0.82)

**Soru 1 (ID: 9cdb70e0-0a39-4139-8eb0-1588feb85b09)**
Soru Kökü: Deri ve derin dokularda bulunan mekanoreseptörlerin uyarana karşı gösterdikleri adaptasyon hızları değerlendirildiğinde, aşağıdaki reseptör tiplerinden hangisinin yavaş adapte olan (tonik) grupta yer alması **değildir**?
Doğru Şık (A): Pacinian cisimciği
Açıklama: Pacinian ve Meissner cisimcikleri ile kıl dibi organları sabit bir uyarana karşı çok hızlı adaptasyon gösteren fazik reseptörlerdir ve vibrasyon ile dokunmanın hızlı değişimlerini kodlarlar. Ruffini, Merkel, eklem kapsülü gerim reseptörleri ve ağrı reseptörleri ise uyaran ortamda olduğu sürece deşarj üretmeye devam eden yavaş adapte olan (tonik) reseptörlerdir.

**Soru 2 (ID: ddff6c69-1e87-439d-80a7-ef829364e228)**
Soru Kökü: Deri yüzeyinde sürekli ve değişmeyen bir basınç uyaranı uygulandığında, bazı mekanoreseptörlerin uyarıya verdikleri yanıt hızla söner (Fazik), bazıları ise uyarı sürdükçe ateşlemeye devam eder (Tonik). Buna göre, aşağıdakilerden hangisi yavaş adapte olan (Tonik) bir reseptör **değildir**?
Doğru Şık (E): Pacinian cisimciği
Açıklama: Pacinian cisimciği (Paccini korpüskülü) çok hızlı (fazik) adapte olan bir reseptördür ve derin, yüksek frekanslı vibrasyon ile anlık dokunmaları algılar. Sürekli basınca yanıt vermez. Merkel, Ruffini ve ağrı reseptörleri ise uyaran ortamda olduğu sürece ateşlemeye devam eden yavaş adapte olan (tonik) reseptörlerdir.

---

### ÇİFT 11 (Benzerlik: 0.82)

**Soru 1 (ID: 5c053cf4-636a-409b-b7c3-bd2533d4e62a)**
Soru Kökü: Presinaptik membranda vezikül zarı (v-SNARE) ile hedef membranın (t-SNARE) kalsiyum varlığında etkileşime girdiği bilinmektedir. Bu süreçte vezikül ve hücre membranları tam olarak kaynaşmadan, arada geçici bir delik oluşması yoluyla nörotransmitter salınımı gerçekleşmesi mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): Porositoz
Açıklama: Porositoz, presinaptik membrandaki v-SNARE ile hedef zardaki t-SNARE proteinlerinin etkileşimi sonucu membranlar tam kaynaşmadan arada açılan geçici bir delikten (por) nörotransmitter salınmasıdır. Klasik ekzositozda vezikül zarı hücre zarı ile tamamen birleşirken, porositozda vezikül yapısı korunarak hızlı bir salınım ve geri alım döngüsü sağlanır. Bu mekanizma sinaptik iletim hızını ve membran dengesini optimize eder.

**Soru 2 (ID: aa7fae9d-56c2-48ec-ae6f-5dff3a6c4edb)**
Soru Kökü: Hedef membrana kalsiyum varlığında tutunan vezikülün, membranla tamamen kaynaşmadan sadece arada bir delik oluşturarak nörotransmitter içeriğini ekstraselüler alana boşaltması işlemine ne ad verilir?
Doğru Şık (A): Porositoz
Açıklama: Porositoz, veziküllerin presinaptik membranla tam bir füzyona girmeden, kalsiyum varlığında geçici bir por (delik) oluşturarak içeriklerini salgılama mekanizmasıdır. Klasik ekzositozda vezikül zarı hücre zarına tamamen katılırken, porositozda bu durum yaşanmaz. Kromatolizis ise sinir hasarı sonrası nöron gövdesindeki Nissl cisimciklerinin kaybını ifade eden patolojik bir hücresel yanıttır.

---

### ÇİFT 12 (Benzerlik: 0.82)

**Soru 1 (ID: 706133ab-4963-4e74-9ef1-ba1d308dd00a)**
Soru Kökü: Beslenme davranışını ve vücut kitle endeksini düzenleyen nörohormonal ağlar incelendiğinde, aşağıdakilerden hangisi hipotalamus üzerinde oroksojenik (iştah artırıcı) etki gösteren biyomoleküllerden biri **değildir**?
Doğru Şık (D): Kolesistokinin (CCK)
Açıklama: Kolesistokinin (CCK), bağırsaklardan salgılanan ve vagus siniri aracılığıyla beyne doygunluk sinyali ileten güçlü bir anoreksojenik (iştah kesici) hormondur. NPY, AGRP, MCH ve mideden salgılanan Ghrelin ise iştahı şiddetle artıran oroksojenik moleküllerdir. Nöroendokrin obezite tedavilerinde oroksojenlerin inhibisyonu hedeflenir.

**Soru 2 (ID: c8bd6240-6c3c-49e6-b8c2-be236b2c61be)**
Soru Kökü: Hipotalamusun arkuat nükleusu ve diğer çekirdekleri üzerinde etki göstererek yeme davranışını module eden nöropeptidler incelendiğinde, aşağıdakilerden hangisi iştahı azaltan (anoreksijenik) sinyallerden biri **değildir**?
Doğru Şık (D): Galanin
Açıklama: Galanin, Nöropeptid-Y (NPY), Ghrelin, MCH ve Oreksinler iştahı güçlü şekilde uyaran (oreksijenik) ajanlardır. CART, CCK, CRH, a-MSH, insülin, GLP ve leptin ise doygunluk hissini artırarak iştahı baskılayan (anoreksijenik) mediatörlerdir. Distraktör olan Galanin oreksijeniktir, dolayısıyla anoreksijenik grupta yer almaz.

---

### ÇİFT 13 (Benzerlik: 0.82)

**Soru 1 (ID: 352e262f-8497-48e3-93d3-e8e8c558e6bd)**
Soru Kökü: Enfeksiyöz durumlarda makrofajlardan salınan IL-1, IL-6 ve TNF-alfa gibi endojen pirojenik sitokinlerin, kan-beyin bariyerini by-pass ederek hipotalamusta ateşin set-point ayarını yükseltmek için doğrudan etkiledikleri spesifik sirkümventriküler organ aşağıdakilerden hangisidir?
Doğru Şık (C): Organum vasculosum of the lamina terminalis (OVLT)
Açıklama: Sistemik dolaşımdaki dev makromoleküllü sitokinler kan-beyin bariyerini geçemezler. Ateşi tetiklemek için, kan-beyin bariyerinin bulunmadığı özel bir yapı olan OVLT (Organum vasculosum of the lamina terminalis) bölgesine etki ederler. Bu etki OVLT'de PGE2 sentezine yol açar, o da hipotalamik preoptik alanda vücut ısısı set-pointini yukarı çeker.

**Soru 2 (ID: e514adad-6e5d-4d4b-97e7-cb8d91611f50)**
Soru Kökü: Bakteriyel enfeksiyonlara yanıt olarak salgılanan IL-1, IL-6 ve TNF-alfa gibi sitokinlerin, kan-beyin bariyerinin olmadığı OVLT (Organum Vasculosum of the Lamina Terminalis) bölgesi üzerinden hipotalamik preoptik alana etki ederek 'vücut termostatını' yükseltmesinde, nöral sinyali ileten temel aracı molekül aşağıdakilerden hangisidir?
Doğru Şık (C): Prostaglandin E2 (PGE2)
Açıklama: Sistemik inflamasyonda dolaşımdaki pirojen sitokinler kan-beyin bariyerini geçemez; bu nedenle OVLT üzerinden endotel hücrelerini uyararak araşidonik asit yolağından Prostaglandin E2 (PGE2) sentezletirler. Sentezlenen PGE2 difüzyonla preoptik hipotalamusa ulaşarak termostat noktasını (set-point) yukarı çeker ve ateş oluşur. Antipiretik ilaçlar (Asetaminofen, NSAİİ) bu aşamada PGE2 sentezini baskılar.

---

### ÇİFT 14 (Benzerlik: 0.81)

**Soru 1 (ID: 68d53201-2881-4175-86dc-df3d2744fe67)**
Soru Kökü: Aşağıdakilerden hangisi periferik sinir sisteminin glia hücreleri (periferal nöroglia) arasında **yer almaz**?
Doğru Şık (D): Ependim hücresi
Açıklama: Ependim hücreleri MSS boşluklarını döşeyen merkezi sinir sistemi glia hücreleridir. Schwann, satellit, terminal nöroglia ve enterik nöroglia ise periferik sinir sistemi elemanlarıdır. Ependim hücreleri nöroektoderm kaynaklı olup periferde görev almazlar.

**Soru 2 (ID: d4bf1f7a-76a9-4438-9b6d-63b3061a3611)**
Soru Kökü: Aşağıdaki glia hücrelerinden hangisi merkezi sinir sistemi (MSS) destek hücrelerinden biri **değildir**?
Doğru Şık (D): Satellit hücresi
Açıklama: Satellit hücreleri, periferik sinir sistemindeki gangliyonlarda nöron gövdelerini (perikaryon) çevreleyerek izolasyon ve destek sağlayan nöroglia hücreleridir. Astrosit, oligodendrosit ve ependim hücreleri ektodermal, mikroglia ise mezodermal kökenli olmak üzere tümü merkezi sinir sistemine aittir. MSS ile PSS glia hücrelerinin lokasyon ayrımı, sinir histolojisinin temel ayırıcı bilgisidir.

---

### ÇİFT 15 (Benzerlik: 0.81)

**Soru 1 (ID: 68d53201-2881-4175-86dc-df3d2744fe67)**
Soru Kökü: Aşağıdakilerden hangisi periferik sinir sisteminin glia hücreleri (periferal nöroglia) arasında **yer almaz**?
Doğru Şık (D): Ependim hücresi
Açıklama: Ependim hücreleri MSS boşluklarını döşeyen merkezi sinir sistemi glia hücreleridir. Schwann, satellit, terminal nöroglia ve enterik nöroglia ise periferik sinir sistemi elemanlarıdır. Ependim hücreleri nöroektoderm kaynaklı olup periferde görev almazlar.

**Soru 2 (ID: 916a8758-654d-4dd1-8d90-7b4ac10fc6b2)**
Soru Kökü: Aşağıdaki nöroglia hücrelerinden hangisi merkezi sinir sisteminin (MSS) fizyolojik ortamını destekleyen hücre grubuna ait **değildir**?
Doğru Şık (C): Schwann hücresi
Açıklama: Schwann hücreleri periferik sinir sisteminin (PSS) glia hücreleridir ve akson miyelinasyonundan sorumludurlar. Astrosit, ependim hücresi, oligodendrosit ve mikroglia merkezi sinir sistemi (MSS) nörogliasıdır. Ependim hücreleri ventrikül iç yüzeyini döşerken, oligodendrositler MSS'de miyelinasyon sağlar.

---

### ÇİFT 16 (Benzerlik: 0.81)

**Soru 1 (ID: 352e262f-8497-48e3-93d3-e8e8c558e6bd)**
Soru Kökü: Enfeksiyöz durumlarda makrofajlardan salınan IL-1, IL-6 ve TNF-alfa gibi endojen pirojenik sitokinlerin, kan-beyin bariyerini by-pass ederek hipotalamusta ateşin set-point ayarını yükseltmek için doğrudan etkiledikleri spesifik sirkümventriküler organ aşağıdakilerden hangisidir?
Doğru Şık (C): Organum vasculosum of the lamina terminalis (OVLT)
Açıklama: Sistemik dolaşımdaki dev makromoleküllü sitokinler kan-beyin bariyerini geçemezler. Ateşi tetiklemek için, kan-beyin bariyerinin bulunmadığı özel bir yapı olan OVLT (Organum vasculosum of the lamina terminalis) bölgesine etki ederler. Bu etki OVLT'de PGE2 sentezine yol açar, o da hipotalamik preoptik alanda vücut ısısı set-pointini yukarı çeker.

**Soru 2 (ID: ce08b808-c567-4c7d-8615-42f34944607a)**
Soru Kökü: Endotoksin ve inflamasyona sekonder olarak makrofajlardan salınan endojen pirojenlerin (IL-1, TNF-alfa), kan-beyin bariyeri bulunmayan sirkümventriküler organlardan geçerek ateş set noktasını yükselttiği mekanik yolağın sıralaması aşağıdakilerden hangisinde doğru olarak verilmiştir?
Doğru Şık (A): OVLT ➔ PGE2 sentezi ➔ Preoptik alan uyarımı
Açıklama: İnflamatuar sitokinler (IL-1, IL-6, TNF), kan beyin bariyerinin olmadığı OVLT (Organum Vasculosum Lamina Terminalis) bölgesine etki eder. Bu bölgeden siklooksijenaz enzimi aracılığıyla PGE2 sentezlenir. Serbestleşen PGE2, hipotalamusun ön bölgesindeki preoptik alana difüze olarak termostat eşik değerini daha yüksek bir sıcaklığa (set-point) ayarlar ve sonuçta titremeyle ateş yükselir.

---

### ÇİFT 17 (Benzerlik: 0.81)

**Soru 1 (ID: 08bcd626-734b-4ee7-8873-e5a3b4c32bbd)**
Soru Kökü: Snapslarda vezikül ve hedef zarların birbirine tutunması özelleşmiş protein kompleksleriyle sağlanır. İki nöron zarının birbirine kenetlenmesinde presinaptik membranda yer alan ve postsinaptik membrandaki reseptörüne bağlanan protein ailesi aşağıdakilerden hangisidir?
Doğru Şık (C): Nöroksin
Açıklama: Nöroksin protein ailesi presinaptik membranda yer alır ve postsinaptik membrandaki reseptörlerine bağlanarak iki zarın yapısal olarak bir arada tutulmasını (kenetlenmesini) sağlar. t-SNARE hedef zardaki vezikül kaynaşma proteinidir. Neuroregulin 1 ise Schwann hücrelerinin miyelinizasyonunu uyaran büyüme faktörüdür.

**Soru 2 (ID: 53af6e7a-99e9-4976-88d3-299e851a88aa)**
Soru Kökü: İki nöronun sinaps yaptığı bölgede, presinaptik membranda bulunup postsinaptik membrandaki reseptörüne bağlanarak iki zarı yapısal olarak bir arada tutan protein ailesi aşağıdakilerden hangisidir?
Doğru Şık (C): Nöroksin
Açıklama: Nöroksin ailesi üyesi proteinler presinaptik membranda yer alır ve postsinaptik membrandaki reseptörlerine bağlanarak sinaptik yarığın genişliğini korur ve iki membranı bir arada tutar. v-SNARE proteinleri güçlü bir çeldiricidir ancak onlar nöronlar arası bağlantıyı değil, nörotransmitter vezikülünün presinaptik zara tutunmasını sağlar. Kinezin ve dynein ise aksondaki mikrotübül kargo taşınımından sorumludur.

---

### ÇİFT 18 (Benzerlik: 0.81)

**Soru 1 (ID: 6586a0bb-58a3-4b7b-8ef6-a5c35d9db0a9)**
Soru Kökü: 45 yaşında erkek hastada meydana gelen mekanik sinir hasarının ardından, periferik sinir rejenerasyon süreci başlamıştır. Rejenerasyon sırasında proksimal uçtan gelişen büyüme konisinin distale doğru ilerlemesi ve kası tekrar innerve etmesi için Schwann hücrelerinin longitudinal eksternal lamina bandları yaparak oluşturduğu kılavuz yapıya ne ad verilir?
Doğru Şık (C): Bungner bandları
Açıklama: Periferik sinir rejenerasyonunda, Schwann hücreleri bölgeyi temizledikten sonra düzenlenerek filopodların (nöritlerin) ilerlemesi için longitudinal Bungner bandları oluşturur. Bu bandlar eksternal lamina yapısında olup aksonun doğru yönde büyümesi için fiziksel bir tüp (kılavuz) görevi görür.

**Soru 2 (ID: e3a33654-8cb6-4bd9-ac9e-57f3961f20ab)**
Soru Kökü: Periferik sinirlerin başarılı bir şekilde rejenere olabilmesi için, Schwann hücrelerinin dediferansiye olarak çoğalması ve filizlenen akson uçlarına fiziksel bir kılavuz oluşturması gereklidir. Schwann hücrelerinin oluşturduğu bu longitudinal eksternal lamina tüplerine ne ad verilir?
Doğru Şık (B): Bungner bandları
Açıklama: Rejenerasyon evresinde Schwann hücreleri dediferansiye olup dizilerek Bungner bandları adı verilen longitudinal eksternal lamina bandları (tüpleri) oluşturur ve rejenere olan aksona yol gösterir. Schmitt-Lanterman yarıkları sağlıklı miyelin kılıfta kalan sitoplazmik atıklardır. Nöropil ise SSS'de akson, dendrit ve glia uzantılarının yoğunlaştığı karmaşık ağ bölgesidir.

---

### ÇİFT 19 (Benzerlik: 0.81)

**Soru 1 (ID: 754d87c4-3fac-476e-8978-a5f0971318d5)**
Soru Kökü: Nöroglia hücrelerinin embriyolojik kökenleri ve fagositoz yetenekleri dikkate alındığında, santral sinir sisteminde doku hasarı sonrası debris temizliğinden sorumlu olan ve mezodermden gelişen hücre tipi aşağıdakilerden hangisidir?
Doğru Şık (C): Mikroglialar
Açıklama: Mikroglialar, ektoderm kökenli diğer glia hücrelerinden farklı olarak mezodermden gelişen ve beyin makrofajları olarak işlev gören en küçük glial hücrelerdir. Astrositler gliozis (skar) oluşturarak doku onarımına katılır ancak temel fagositik temizliği yapan yapı mikroglialardır. MSS hasarında inflamatuar yanıt ve hücresel döküntülerin fagositozu doğrudan bu hücrelerin görevidir.

**Soru 2 (ID: c71aea58-8b4d-405b-a15a-a0231e6ef410)**
Soru Kökü: Merkezi sinir dokusunda yer alan glia hücrelerinin embriyolojik kökenleri incelendiğinde, monosit-makrofaj sisteminden gelişerek mezoderm kökenli olan hücre aşağıdakilerden hangisidir?
Doğru Şık (C): Mikroglia
Açıklama: Mikroglia hücreleri merkezi sinir sisteminde fagositozdan sorumlu makrofajlar olup, ektoderm kökenli diğer MSS glia hücrelerinin aksine mezodermden (monosit-makrofaj serisinden) gelişirler. Ependim hücreleri, astrositler ve oligodendrositler nöroektodermal kökenlidir. Bu spesifik embriyolojik farklılık, mikrogliayı MSS'nin immün savunma hattı yapar.

---

### ÇİFT 20 (Benzerlik: 0.81)

**Soru 1 (ID: 88d8363e-23b5-4eec-9df5-6009b865272e)**
Soru Kökü: Santral ve periferik sinir sistemindeki nöroglia hücrelerinin histolojik ve embriyolojik özellikleri ile ilgili aşağıdaki hücresel eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (A): Mikroglia - Ektoderm kökenli doku makrofajları olmaları
Açıklama: Mikroglialar beyin immün sisteminin temel makrofajlarıdır; ancak ektodermden değil, diğer tüm glial hücrelerden farklı olarak mezodermden (yolk sac makrofajlarından) gelişirler. Astrosit ve oligodendrosit (makroglia) ektoderm kökenlidir. Schwann ve Oligodendrosit arasındaki "tek akson - çoklu akson" miyelinizasyon ayrımı da temel nörohistoloji prensibidir.

**Soru 2 (ID: 92383ce9-991a-41b3-8035-cef7c67218bc)**
Soru Kökü: Santral sinir sistemini oluşturan embriyolojik yapılar incelendiğinde, aşağıdaki nöroglia hücrelerinden hangisinin kökeni ektodermal **değildir**?
Doğru Şık (B): Mikroglia
Açıklama: Mikroglialar beyin makrofajlarıdır ve diğer tüm glial hücrelerden farklı olarak ektodermden değil mezodermden gelişirler. Astrositler, oligodendrositler ve ependim hücreleri nöral tüp ektoderminden farklılaşır. Bu embriyolojik fark, mikrogliaların kemik iliği kökenli monosit benzeri immün fonksiyonlarını açıklar.

---

### ÇİFT 21 (Benzerlik: 0.81)

**Soru 1 (ID: 0a5782f8-1894-4025-9374-a8c5c3f49367)**
Soru Kökü: Derideki mekanik bir travma veya tahriş sonrası ağrı sinyallerini taşıyan C liflerinin terminal uçlarından anti-dromik (ters yönde) yayılan uyarının komşu damarları genişletmesi ve bölgede kızarıklık oluşturması akson refleksi ile açıklanır. Bu lokal vazodilatasyondan ve plazma ekstravazasyonundan sorumlu temel nöropeptidler aşağıdakilerden hangisidir?
Doğru Şık (C): P Maddesi ve CGRP
Açıklama: Akson refleksi, yavaş ağrı sinyallerini merkeze taşıyan C liflerinin çatallanan diğer periferik dallarından dokuya P maddesi (Substance P) ve Kalsitonin Gen İlişkili Peptid (CGRP) salgılanması olayıdır. Bu neuropeptidler, lokal kan damarlarında şiddetli düz kas gevşemesine neden olarak kızarma ve damar geçirgenliğinin artmasıyla (şişme) seyreden nörojenik inflamasyonu başlatır.

**Soru 2 (ID: d723d541-644b-4168-9800-ff0a42453733)**
Soru Kökü: Deri yaralanmalarında ağrı duyusu medulla spinalise taşınırken, afferent C liflerinin periferik kollaterallerinden geriye doğru (antidromik) salınarak lokal vazodilatasyona, plazma ekstravazasyonuna ve ödeme (akson refleksi) yol açan medyatör peptid aşağıdakilerden hangisidir?
Doğru Şık (E): P maddesi (Substance P)
Açıklama: Ağrıyı taşıyan C tipi lifler, sadece omuriliğe uyarı götürmekle kalmaz, aynı zamanda akson refleksi ile geriye doğru P maddesi (Substance P) ve CGRP salgılayarak yaralanma bölgesinde 'nörojenik inflamasyon' (kızarıklık ve şişlik) oluştururlar. Bradikinin doku hasarıyla lokal üretilen bir aljezik olup nöron ucundan salgılanmaz; glutamat ise omurilikteki ilk sinapsta (A-delta liflerinden) santral iletim için salınır.

---

### ÇİFT 22 (Benzerlik: 0.81)

**Soru 1 (ID: ce08b808-c567-4c7d-8615-42f34944607a)**
Soru Kökü: Endotoksin ve inflamasyona sekonder olarak makrofajlardan salınan endojen pirojenlerin (IL-1, TNF-alfa), kan-beyin bariyeri bulunmayan sirkümventriküler organlardan geçerek ateş set noktasını yükselttiği mekanik yolağın sıralaması aşağıdakilerden hangisinde doğru olarak verilmiştir?
Doğru Şık (A): OVLT ➔ PGE2 sentezi ➔ Preoptik alan uyarımı
Açıklama: İnflamatuar sitokinler (IL-1, IL-6, TNF), kan beyin bariyerinin olmadığı OVLT (Organum Vasculosum Lamina Terminalis) bölgesine etki eder. Bu bölgeden siklooksijenaz enzimi aracılığıyla PGE2 sentezlenir. Serbestleşen PGE2, hipotalamusun ön bölgesindeki preoptik alana difüze olarak termostat eşik değerini daha yüksek bir sıcaklığa (set-point) ayarlar ve sonuçta titremeyle ateş yükselir.

**Soru 2 (ID: e514adad-6e5d-4d4b-97e7-cb8d91611f50)**
Soru Kökü: Bakteriyel enfeksiyonlara yanıt olarak salgılanan IL-1, IL-6 ve TNF-alfa gibi sitokinlerin, kan-beyin bariyerinin olmadığı OVLT (Organum Vasculosum of the Lamina Terminalis) bölgesi üzerinden hipotalamik preoptik alana etki ederek 'vücut termostatını' yükseltmesinde, nöral sinyali ileten temel aracı molekül aşağıdakilerden hangisidir?
Doğru Şık (C): Prostaglandin E2 (PGE2)
Açıklama: Sistemik inflamasyonda dolaşımdaki pirojen sitokinler kan-beyin bariyerini geçemez; bu nedenle OVLT üzerinden endotel hücrelerini uyararak araşidonik asit yolağından Prostaglandin E2 (PGE2) sentezletirler. Sentezlenen PGE2 difüzyonla preoptik hipotalamusa ulaşarak termostat noktasını (set-point) yukarı çeker ve ateş oluşur. Antipiretik ilaçlar (Asetaminofen, NSAİİ) bu aşamada PGE2 sentezini baskılar.

---

### ÇİFT 23 (Benzerlik: 0.80)

**Soru 1 (ID: 0354725f-9783-474b-b278-040a9599eacc)**
Soru Kökü: 35 yaşında erkek hasta, periferik sinir kesisine bağlı onarım cerrahisi geçiriyor. Rejenerasyon sürecinde Schwann hücreleri mitoza girerek remyelinizasyon aşamasına geçmektedir. Schwann hücrelerinin bu mitozunu ve myelinlenme sürecini düzenleyen, akson membranında eksprese edilen sinyal proteini aşağıdakilerden hangisidir?
Doğru Şık (A): Neuroregulin 1
Açıklama: Neuroregulin 1, akson membranında eksprese edilen epidermal büyüme faktörü (EGF) ailesi üyesi bir proteindir ve glia hücrelerindeki MAPK yolaklarını uyararak hem Schwann hücre mitozunu hem de myelinlenme miktarını düzenler. Sox10 embriyolojik farklılaşmada görev alırken, neuroregulin 1 olgun aksonun glial hücreye "beni myelinle" mesajını ileten ana moleküldür. Sinir onarımında akson-glia iletişiminin merkezinde yer alır.

**Soru 2 (ID: ff70cc96-564d-45b7-ba3b-cf588581e4f2)**
Soru Kökü: Periferik sinir hasarı sonrası Schwann hücrelerinin mitoza girerek çoğalmasını ve miyelin yapısının bozulması üzerine dediferansiye olmasını tetikleyen epidermal büyüme faktörü üyesi protein ile uyardığı hücresel sinyal yolağı aşağıdakilerden hangisidir?
Doğru Şık (E): Nöroregulin - MAPK yolağı
Açıklama: Nöroregulinler, Schwann hücreleri ve oligodendrositlerde bulunan epidermal büyüme faktörü (EGF) üyesi proteinlerdir ve mitojenle aktifleşen protein kinaz (MAPK) yolağını uyararak Schwann hücresi mitozunu tetiklerler. Sox10 Schwann hücre farklanmasında etkili bir transkripsiyon faktörü olsa da travma sonrası tetikleyici akut sinyal yolağı Nöroregulin/MAPK ikilisidir. Nöroksin ve SNARE proteinleri ise sinaptik vezikül iletiminden sorumludur.

---

### ÇİFT 24 (Benzerlik: 0.80)

**Soru 1 (ID: 30822cd9-e7d9-4c1c-8ddd-fef8a0b204d1)**
Soru Kökü: Nöronal mikrotübüller boyunca gerçekleşen transport mekanizmasında, sentezlenen nörotransmitter veziküllerinin hücre gövdesinden (soma) telodendrona (akson ucu) doğru anterograd taşınmasını sağlayan spesifik moleküler motor protein aşağıdakilerden hangisidir?
Doğru Şık (D): Kinezin
Açıklama: Kinezin, vezikül ve organelleri nöron gövdesinden akson terminaline doğru (anterograd) mikrotübül iskeleti üzerinden taşıyan temel kargo proteindir. Sitoplazmik dynein ise tam ters yönde, terminalden gövdeye doğru (retrograd) taşıma yaptığı için bu işlevde rol almaz. Bu transport mekanizmasının blokajı (örneğin kemoterapötiklerle) mikrotübül işlevini durdurarak periferik nöropatiye neden olur.

**Soru 2 (ID: 4fab6a76-eaf4-4a26-be42-77928612dc6c)**
Soru Kökü: Akson boyunca nörotransmitter veziküllerinin retrograd (geriye doğru) taşınımından sorumlu olan kargo proteini aşağıdakilerden hangisidir?
Doğru Şık (D): Sitoplazmik dynein
Açıklama: Nöronlarda mikrotübüller üzerinden gerçekleşen retrograd (terminalden gövdeye) taşınımda sitoplazmik dynein görev alır. Kinezin ise anterograd (gövdeden terminale) taşınımı sağlayan motor proteindir. SNARE ve Nöroksin sinaptik vezikül ekzositozu ve bağlanmasında rol alan farklı mekanizmalardır.

---

### ÇİFT 25 (Benzerlik: 0.80)

**Soru 1 (ID: 199cd03a-b80e-4e27-a4e5-7c3a58fde93e)**
Soru Kökü: Ciddi yanık travması ile acil servise getirilen hastanın ağrı yönetiminde morfin kullanılmıştır. Morfin ve benzeri opioidlerin arka boynuzdaki nosiseptif iletimi durdururken kullandıkları spesifik iyonik mekanizma aşağıdakilerden hangisinde doğru ve eksiksiz verilmiştir?
Doğru Şık (C): Presinaptik kalsiyum girişini azaltırken, postsinaptik potasyum çıkışını artırırlar.
Açıklama: Opioidler ağrı inhibisyonunu ikili (dual) mekanizma ile sağlar: Presinaptik membranda voltaj kapılı Ca++ kanallarını kapatarak P maddesi ve glutamat salınımını engellerler (presinaptik inhibisyon), postsinaptik membranda ise K+ kanallarını açıp K+ çıkışını uyararak membranı hiperpolarize ederler (postsinaptik inhibisyon).

**Soru 2 (ID: f9ce448c-ae9a-4b3c-a18f-aa9fa28a21ad)**
Soru Kökü: Opioid analjeziklerin (örn. morfin) medulla spinalis arka boynuz düzeyindeki ağrı iletimini engelleme mekanizmalarıyla ilgili aşağıdaki hücresel açıklamalardan hangisi **yanlıştır**?
Doğru Şık (E): Analjezik etkilerini yalnızca presinaptik membranda gösterir, postsinaptik ikinci sıra nöron reseptörlerini etkilemezler.
Açıklama: Opioidler (morfin), analjezik etkinliklerini sağlamak için hem pre-sinaptik hem de post-sinaptik inhibisyon yaparlar (Çift yönlü blokaj). Presinaptik uçta kalsiyum kanal blokesi ile nörotransmitter (P maddesi, glutamat) salınımını durdururken, postsinaptik uçta potasyum kanallarını açarak hiperpolarizasyon yaratırlar ve impulsun spinotalamik traktusa geçmesini çift bariyerle engellerler.

---

### ÇİFT 26 (Benzerlik: 0.80)

**Soru 1 (ID: 4b95fca2-5d27-4db6-92e9-d0b8dcc0c7ca)**
Soru Kökü: Kırk iki yaşında kadın hasta, brakial pleksus hasarı sonrasında motor fonksiyon kaybı yaşamaktadır. Hastanın hasarlı sinirlerini besleyen motor nöron gövdelerinde granüllü endoplazmik retikulumların kaybolduğu, nöronun soluklaşıp şiştiği ve çekirdeğin perifere doğru itildiği hücresel adaptasyon süreci tespit ediliyor. Bu morfolojik değişim aşağıdakilerden hangisidir?
Doğru Şık (D): Kromatolizis
Açıklama: Sinir hasarı sonrasında nöron gövdesinin aşırı protein sentezi hazırlığına girmesi sonucu Nissl cisimciklerinin (GER) kaybı, sitoplazmanın soluklaşması, hücrenin şişmesi ve çekirdeğin perifere itilmesi kromatolizis olarak adlandırılır. Wallerian ve retrograd dejenerasyonlar akson boyunca gerçekleşen iskelet yıkımını ifade ederken; kromatolizis doğrudan nöron gövdesi (soma) bulgusudur.

**Soru 2 (ID: daa457dc-58a9-4d92-b3ef-9f46ff4c1c95)**
Soru Kökü: 28 yaşında erkek hasta trafik kazası sonrası alt ekstremitesinde motor kayıp yaşar. Olaydan birkaç gün sonra spinal kord ön boynuz motor nöronlarından alınan deneysel kesitte; hücre gövdesinde şişme, çekirdeğin perifere itilmesi, sitoplazmada granüllü endoplazma retikulumu yıkımına bağlı renk açılması izlenmiştir. Bu hücresel morfolojik tabloya ne ad verilir?
Doğru Şık (C): Kromatolizis
Açıklama: Nöron gövdesinde hasara yanıt olarak gelişen, Nissl cisimciklerinin (GER) kaybı, hücresel şişme ve çekirdeğin perifere yer değiştirmesiyle karakterize tabloya kromatolizis denir. Wallerian dejenerasyon aksonun distal kısmındaki iskelet yıkımıdır. Kromatolizis, nöronun rejenerasyon için protein sentezi şablonunu değiştirmesinin morfolojik yansımasıdır.

---

### ÇİFT 27 (Benzerlik: 0.79)

**Soru 1 (ID: 88d8363e-23b5-4eec-9df5-6009b865272e)**
Soru Kökü: Santral ve periferik sinir sistemindeki nöroglia hücrelerinin histolojik ve embriyolojik özellikleri ile ilgili aşağıdaki hücresel eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (A): Mikroglia - Ektoderm kökenli doku makrofajları olmaları
Açıklama: Mikroglialar beyin immün sisteminin temel makrofajlarıdır; ancak ektodermden değil, diğer tüm glial hücrelerden farklı olarak mezodermden (yolk sac makrofajlarından) gelişirler. Astrosit ve oligodendrosit (makroglia) ektoderm kökenlidir. Schwann ve Oligodendrosit arasındaki "tek akson - çoklu akson" miyelinizasyon ayrımı da temel nörohistoloji prensibidir.

**Soru 2 (ID: b32c419c-2e99-4d91-8d8d-1d8132633261)**
Soru Kökü: Sinir sistemi glia hücrelerinin embriyolojik kökenleri bulundukları anatomik bölgeye ve fonksiyonlarına göre birbirinden farklılık gösterir. Aşağıdaki glia hücresi ve embriyolojik köken eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (B): Satellit hücresi – Mezoderm
Açıklama: Satellit hücreleri periferik sinir sisteminin (PSS) gangliyonlarını destekleyen glia hücreleridir ve mikroglia gibi mezodermden değil, diğer PSS glia hücreleri (Schwann) gibi ektodermal bir yapı olan nöral kristadan köken alırlar. Merkezi sinir sistemi glialarından astrosit, oligodendrosit ve ependim nöral tüpten (ektoderm) köken alır. Mezodermden köken alan tek sinir dokusu elemanı immün fonksiyonlu mikroglialardır.

---

### ÇİFT 28 (Benzerlik: 0.79)

**Soru 1 (ID: 8bc763b1-c18b-4d2e-a67e-eb139d139137)**
Soru Kökü: Kırk beş yaşında erkek hastanın beyin parankiminden alınan biyopsi örneğinde, fagositoz aktivitesi gösteren ve enfeksiyon bölgesinde yoğunlaşan destek hücreleri izlenmektedir. Bu klinik tabloda izlenen glia hücrelerinin embriyolojik kökeni aşağıdakilerden hangisidir?
Doğru Şık (D): Mezoderm
Açıklama: Mikroglia hücreleri, fagositik aktivitelerinden dolayı ektodermden değil, monosit-makrofaj serisinden yani mezodermden köken alan tek merkezi sinir sistemi destek hücresidir. En güçlü çeldirici olan nöral krista, periferik glia hücrelerinin kaynağı olduğu için bu klinik tabloda yanlıştır. Astrosit ve oligodendrosit gibi diğer merkezi sinir sistemi glia hücreleri ise doğrudan ektoderm kökenlidir.

**Soru 2 (ID: c71aea58-8b4d-405b-a15a-a0231e6ef410)**
Soru Kökü: Merkezi sinir dokusunda yer alan glia hücrelerinin embriyolojik kökenleri incelendiğinde, monosit-makrofaj sisteminden gelişerek mezoderm kökenli olan hücre aşağıdakilerden hangisidir?
Doğru Şık (C): Mikroglia
Açıklama: Mikroglia hücreleri merkezi sinir sisteminde fagositozdan sorumlu makrofajlar olup, ektoderm kökenli diğer MSS glia hücrelerinin aksine mezodermden (monosit-makrofaj serisinden) gelişirler. Ependim hücreleri, astrositler ve oligodendrositler nöroektodermal kökenlidir. Bu spesifik embriyolojik farklılık, mikrogliayı MSS'nin immün savunma hattı yapar.

---

### ÇİFT 29 (Benzerlik: 0.79)

**Soru 1 (ID: b28ef9c2-a3b7-4190-b5da-f1c028dd87ba)**
Soru Kökü: 35 yaşında erkek hasta, geçirdiği bir iş kazası sonucu koldaki periferik sinir kesisi nedeniyle ameliyata alınıyor. Mikroskobik incelemede, sinir fasiküllerini çevreleyen ve kan-sinir bariyerini oluşturan, aralarında sıkı bağlantılar (tight junction) izlenen hücresel katmanın hasar gördüğü tespit ediliyor. Tanımlanan bu bağ dokusu kılıfı aşağıdakilerden hangisidir?
Doğru Şık (C): Perinöryum
Açıklama: Perinöryum, sinir fasiküllerini saran ve sahip olduğu sıkı bağlantılar (tight junction) sayesinde kan-sinir bariyerini oluşturan özel bir bağ dokusudur. Endonöryum tek tek aksonları saran gevşek bağ dokusuyken, epinöryum tüm siniri saran dış düzensiz bağ dokusudur. Perinöryumun kontraktil ve transporter özellikleri de onu diğerlerinden ayırır.

**Soru 2 (ID: effd8a60-b959-4f98-8a23-ba83d4a70cab)**
Soru Kökü: 45 yaşında erkek hasta, mandibular travma sonrası alt dudakta hissizlik şikayetiyle başvuruyor. Çekilen radyografide inferior alveolar sinir kanalında kompresyon saptanıyor. Lokal anestezi uygulanması planlanan bu hastada, anesteziğin sinir lifine ulaşabilmesi için kan-sinir bariyerini geçmesi gerekmektedir. Bu bariyeri oluşturan ve hücreleri arasında sıkı bağlantılar (tight junction) içeren özel bağ dokusu kılıfı aşağıdakilerden hangisidir?
Doğru Şık (B): Perinöryum
Açıklama: Perinöryum, birkaç kat yassı hücre ve bağ dokusu ara maddesinden oluşan, hücreleri arasındaki sıkı bağlantılar sayesinde kan-sinir bariyerini sağlayan özel kılıftır. En güçlü çeldirici olan epinöryum düzensiz sıkı bağ dokusu yapısında olup bariyer özelliği göstermez, aksine damar ve yağ hücreleri içerir. İlaçların veya patojenlerin sinir içine penetrasyonunu engelleyen ana mekanizma perinöryal sıkı bağlantılardır.

---

### ÇİFT 30 (Benzerlik: 0.79)

**Soru 1 (ID: 0121cf9f-cf73-474a-b55c-b9bfafa5b01b)**
Soru Kökü: Aksonal hasar sonrası perikaryonda (nöron gövdesinde) gerçekleşen kromatolizis tablosu sırasında aşağıdaki morfolojik değişikliklerden hangisi **izlenmez**?
Doğru Şık (E): Granüllü endoplazma retikulumu (GER) yoğunluğunda ani artış
Açıklama: Kromatolizis, nöronun aksanal hasar sonrası verdiği strese bağlı yeniden yapılanma yanıtıdır. Bu süreçte granüllü endoplazma retikulumu (Nissl cisimcikleri) yıkılır ve azalır; bu nedenle artış görülmesi yanlıştır. GER kaybı nedeniyle hücre daha soluk boyanır, ödem nedeniyle şişer ve çekirdek perifere itilir.

**Soru 2 (ID: 7b53d86e-48db-4b98-aab8-305c348e5664)**
Soru Kökü: Periferik bir sinirin kesilmesi sonrasında perikaryonda (soma) meydana gelen 'kromatolizis' süreci ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Hücre çekirdeği (nükleus) somanın tam merkezine doğru göç eder.
Açıklama: Kromatolizis sürecinde nöron hücresinin çekirdeği merkeze değil, tam aksine ortadan perifere (kenara) doğru kayar. Bu süreçte Nissl cisimcikleri (granüllü endoplazmik retikulum) ayrışır ve protein sentezi yeniden yapılandırma için hızlanır. Çekirdeğin merkeze gelmesi kromatolizisin değil, hücresel iyileşmenin (rejenerasyon) ilerleyen safhalarındaki bir bulgudur.

---

### ÇİFT 31 (Benzerlik: 0.79)

**Soru 1 (ID: 92383ce9-991a-41b3-8035-cef7c67218bc)**
Soru Kökü: Santral sinir sistemini oluşturan embriyolojik yapılar incelendiğinde, aşağıdaki nöroglia hücrelerinden hangisinin kökeni ektodermal **değildir**?
Doğru Şık (B): Mikroglia
Açıklama: Mikroglialar beyin makrofajlarıdır ve diğer tüm glial hücrelerden farklı olarak ektodermden değil mezodermden gelişirler. Astrositler, oligodendrositler ve ependim hücreleri nöral tüp ektoderminden farklılaşır. Bu embriyolojik fark, mikrogliaların kemik iliği kökenli monosit benzeri immün fonksiyonlarını açıklar.

**Soru 2 (ID: c71aea58-8b4d-405b-a15a-a0231e6ef410)**
Soru Kökü: Merkezi sinir dokusunda yer alan glia hücrelerinin embriyolojik kökenleri incelendiğinde, monosit-makrofaj sisteminden gelişerek mezoderm kökenli olan hücre aşağıdakilerden hangisidir?
Doğru Şık (C): Mikroglia
Açıklama: Mikroglia hücreleri merkezi sinir sisteminde fagositozdan sorumlu makrofajlar olup, ektoderm kökenli diğer MSS glia hücrelerinin aksine mezodermden (monosit-makrofaj serisinden) gelişirler. Ependim hücreleri, astrositler ve oligodendrositler nöroektodermal kökenlidir. Bu spesifik embriyolojik farklılık, mikrogliayı MSS'nin immün savunma hattı yapar.

---

### ÇİFT 32 (Benzerlik: 0.79)

**Soru 1 (ID: 36ce4460-78f2-49b9-9437-e05fc1f7edcc)**
Soru Kökü: Aşağıdaki nöroglia hücrelerinden hangisi nöral krista kökenli olup periferik sinir sisteminde yer alır?
Doğru Şık (E): Schwann hücresi
Açıklama: Periferik sinir sisteminin temel glia hücresi olan Schwann hücreleri nöral krista kökenlidir. Oligodendrositler ve astrositler ektoderm, mikroglia ise mezoderm kökenli MSS hücreleridir. Schwann hücrelerinin nöral kristadan göçerek perifere yerleşmesi, bu farklılığı yaratan temel mekanizmadır.

**Soru 2 (ID: 68d53201-2881-4175-86dc-df3d2744fe67)**
Soru Kökü: Aşağıdakilerden hangisi periferik sinir sisteminin glia hücreleri (periferal nöroglia) arasında **yer almaz**?
Doğru Şık (D): Ependim hücresi
Açıklama: Ependim hücreleri MSS boşluklarını döşeyen merkezi sinir sistemi glia hücreleridir. Schwann, satellit, terminal nöroglia ve enterik nöroglia ise periferik sinir sistemi elemanlarıdır. Ependim hücreleri nöroektoderm kaynaklı olup periferde görev almazlar.

---

### ÇİFT 33 (Benzerlik: 0.79)

**Soru 1 (ID: 0354725f-9783-474b-b278-040a9599eacc)**
Soru Kökü: 35 yaşında erkek hasta, periferik sinir kesisine bağlı onarım cerrahisi geçiriyor. Rejenerasyon sürecinde Schwann hücreleri mitoza girerek remyelinizasyon aşamasına geçmektedir. Schwann hücrelerinin bu mitozunu ve myelinlenme sürecini düzenleyen, akson membranında eksprese edilen sinyal proteini aşağıdakilerden hangisidir?
Doğru Şık (A): Neuroregulin 1
Açıklama: Neuroregulin 1, akson membranında eksprese edilen epidermal büyüme faktörü (EGF) ailesi üyesi bir proteindir ve glia hücrelerindeki MAPK yolaklarını uyararak hem Schwann hücre mitozunu hem de myelinlenme miktarını düzenler. Sox10 embriyolojik farklılaşmada görev alırken, neuroregulin 1 olgun aksonun glial hücreye "beni myelinle" mesajını ileten ana moleküldür. Sinir onarımında akson-glia iletişiminin merkezinde yer alır.

**Soru 2 (ID: 98dc7cad-e201-4678-89c5-85e1b0a4d01c)**
Soru Kökü: Periferik sinir sisteminde miyelinlenme sürecinin başlaması ve Schwann hücrelerinin miyelin kılıfı oluşturma kararı, akson membranında eksprese edilen spesifik bir sinyal proteini tarafından düzenlenir. MAPK yolağını da uyararak hücre mitozunu tetikleyen bu faktör aşağıdakilerden hangisidir?
Doğru Şık (A): Neuroregulin 1
Açıklama: Miyelinlenme mekanizması, akson membranı üzerinde eksprese edilen bir epidermal büyüme faktörü olan Neuroregulin 1 tarafından düzenlenir ve Schwann mitozunu başlatır. Sox10 ise nöral kristadan Schwann hücrelerinin ilk farklılaşmasını sağlayan transkripsiyon faktörüdür. Neuroregulin 1 miyelin yapma sürecinin doğrudan uyarıcısıdır.

---

### ÇİFT 34 (Benzerlik: 0.79)

**Soru 1 (ID: 33f70c89-9227-49d5-859b-02b964f41523)**
Soru Kökü: Merkezi sinir sisteminde (MSS) aksonların etrafında myelin kılıf sentezinden sorumlu olan ve embriyolojik olarak ektodermden köken alan glia hücresi aşağıdakilerden hangisidir?
Doğru Şık (E): Oligodendrosit
Açıklama: Santral sinir sisteminin birincil myelin yapıcı hücreleri oligodendrositlerdir. Schwann hücreleri periferik sinir sisteminde (PSS) myelin sentezinden sorumlu olup embriyolojik olarak nöral krista kökenlidir. Mikroglia mezoderm kökenliyken, oligodendrosit ektodermal nöral tüpten gelişerek MSS'de birden fazla aksonu tek başına myelinleyebilir.

**Soru 2 (ID: c71aea58-8b4d-405b-a15a-a0231e6ef410)**
Soru Kökü: Merkezi sinir dokusunda yer alan glia hücrelerinin embriyolojik kökenleri incelendiğinde, monosit-makrofaj sisteminden gelişerek mezoderm kökenli olan hücre aşağıdakilerden hangisidir?
Doğru Şık (C): Mikroglia
Açıklama: Mikroglia hücreleri merkezi sinir sisteminde fagositozdan sorumlu makrofajlar olup, ektoderm kökenli diğer MSS glia hücrelerinin aksine mezodermden (monosit-makrofaj serisinden) gelişirler. Ependim hücreleri, astrositler ve oligodendrositler nöroektodermal kökenlidir. Bu spesifik embriyolojik farklılık, mikrogliayı MSS'nin immün savunma hattı yapar.

---

### ÇİFT 35 (Benzerlik: 0.78)

**Soru 1 (ID: 98dc7cad-e201-4678-89c5-85e1b0a4d01c)**
Soru Kökü: Periferik sinir sisteminde miyelinlenme sürecinin başlaması ve Schwann hücrelerinin miyelin kılıfı oluşturma kararı, akson membranında eksprese edilen spesifik bir sinyal proteini tarafından düzenlenir. MAPK yolağını da uyararak hücre mitozunu tetikleyen bu faktör aşağıdakilerden hangisidir?
Doğru Şık (A): Neuroregulin 1
Açıklama: Miyelinlenme mekanizması, akson membranı üzerinde eksprese edilen bir epidermal büyüme faktörü olan Neuroregulin 1 tarafından düzenlenir ve Schwann mitozunu başlatır. Sox10 ise nöral kristadan Schwann hücrelerinin ilk farklılaşmasını sağlayan transkripsiyon faktörüdür. Neuroregulin 1 miyelin yapma sürecinin doğrudan uyarıcısıdır.

**Soru 2 (ID: ff70cc96-564d-45b7-ba3b-cf588581e4f2)**
Soru Kökü: Periferik sinir hasarı sonrası Schwann hücrelerinin mitoza girerek çoğalmasını ve miyelin yapısının bozulması üzerine dediferansiye olmasını tetikleyen epidermal büyüme faktörü üyesi protein ile uyardığı hücresel sinyal yolağı aşağıdakilerden hangisidir?
Doğru Şık (E): Nöroregulin - MAPK yolağı
Açıklama: Nöroregulinler, Schwann hücreleri ve oligodendrositlerde bulunan epidermal büyüme faktörü (EGF) üyesi proteinlerdir ve mitojenle aktifleşen protein kinaz (MAPK) yolağını uyararak Schwann hücresi mitozunu tetiklerler. Sox10 Schwann hücre farklanmasında etkili bir transkripsiyon faktörü olsa da travma sonrası tetikleyici akut sinyal yolağı Nöroregulin/MAPK ikilisidir. Nöroksin ve SNARE proteinleri ise sinaptik vezikül iletiminden sorumludur.

---

### ÇİFT 36 (Benzerlik: 0.78)

**Soru 1 (ID: 4b95fca2-5d27-4db6-92e9-d0b8dcc0c7ca)**
Soru Kökü: Kırk iki yaşında kadın hasta, brakial pleksus hasarı sonrasında motor fonksiyon kaybı yaşamaktadır. Hastanın hasarlı sinirlerini besleyen motor nöron gövdelerinde granüllü endoplazmik retikulumların kaybolduğu, nöronun soluklaşıp şiştiği ve çekirdeğin perifere doğru itildiği hücresel adaptasyon süreci tespit ediliyor. Bu morfolojik değişim aşağıdakilerden hangisidir?
Doğru Şık (D): Kromatolizis
Açıklama: Sinir hasarı sonrasında nöron gövdesinin aşırı protein sentezi hazırlığına girmesi sonucu Nissl cisimciklerinin (GER) kaybı, sitoplazmanın soluklaşması, hücrenin şişmesi ve çekirdeğin perifere itilmesi kromatolizis olarak adlandırılır. Wallerian ve retrograd dejenerasyonlar akson boyunca gerçekleşen iskelet yıkımını ifade ederken; kromatolizis doğrudan nöron gövdesi (soma) bulgusudur.

**Soru 2 (ID: 9fb94b27-8b7f-4f44-b9f6-a91e32fbd618)**
Soru Kökü: Otuz beş yaşında erkek hasta, iş kazası sonucu ön kolunda derin kesi şikayetiyle acil servise başvuruyor. Median sinir tam kesisi saptanan hastada, hasar bölgesinden distal uca (kaslara) doğru ilerleyen hücre iskeleti granüler disintegrasyonu gözlemleniyor. Bu patofizyolojik süreç aşağıdakilerden hangisiyle adlandırılır?
Doğru Şık (C): Wallerian dejenerasyon
Açıklama: Sinir hasarı sonrası, lezyon bölgesinden distal uca doğru iskelet elemanlarının depolimerize olarak granüler parçalanmasına Wallerian (anterograd) dejenerasyon adı verilir. Retrograd dejenerasyon lezyondan nöron gövdesine (proksimale) doğru olan yıkımı ifade eder. Kromatolizis ise hasar sonrası nöron gövdesinde meydana gelen sentetik organel kaybı ve şişmedir.

---

### ÇİFT 37 (Benzerlik: 0.78)

**Soru 1 (ID: 9fb94b27-8b7f-4f44-b9f6-a91e32fbd618)**
Soru Kökü: Otuz beş yaşında erkek hasta, iş kazası sonucu ön kolunda derin kesi şikayetiyle acil servise başvuruyor. Median sinir tam kesisi saptanan hastada, hasar bölgesinden distal uca (kaslara) doğru ilerleyen hücre iskeleti granüler disintegrasyonu gözlemleniyor. Bu patofizyolojik süreç aşağıdakilerden hangisiyle adlandırılır?
Doğru Şık (C): Wallerian dejenerasyon
Açıklama: Sinir hasarı sonrası, lezyon bölgesinden distal uca doğru iskelet elemanlarının depolimerize olarak granüler parçalanmasına Wallerian (anterograd) dejenerasyon adı verilir. Retrograd dejenerasyon lezyondan nöron gövdesine (proksimale) doğru olan yıkımı ifade eder. Kromatolizis ise hasar sonrası nöron gövdesinde meydana gelen sentetik organel kaybı ve şişmedir.

**Soru 2 (ID: aaa5975e-a2a2-4b18-977b-c8abccc598f2)**
Soru Kökü: 42 yaşında kadın hastada periferik sinir kesisi sonrası iyileşme süreci takip edilmektedir. Histolojik kesitlerde hasarlı bölgeden başlayarak distal uca (ileriye) doğru aksonal iskeletin granüler disintegrasyona uğradığı izlenmiştir. Bu hücresel yıkım sürecine ne ad verilir?
Doğru Şık (B): Wallerian dejenerasyon
Açıklama: Sinir kesisinde hasarlı bölgeden distal uca doğru izlenen anterograd akson iskeleti yıkımına Wallerian dejenerasyon adı verilir. Retrograd dejenerasyon proksimale (gövdeye) doğru ilerlerken, kromatolizis doğrudan nöron gövdesindeki Nissl kaybıdır. Gliozis ise MSS'de hasar sonrası oluşan skar dokusudur.

---

### ÇİFT 38 (Benzerlik: 0.78)

**Soru 1 (ID: 98dc7cad-e201-4678-89c5-85e1b0a4d01c)**
Soru Kökü: Periferik sinir sisteminde miyelinlenme sürecinin başlaması ve Schwann hücrelerinin miyelin kılıfı oluşturma kararı, akson membranında eksprese edilen spesifik bir sinyal proteini tarafından düzenlenir. MAPK yolağını da uyararak hücre mitozunu tetikleyen bu faktör aşağıdakilerden hangisidir?
Doğru Şık (A): Neuroregulin 1
Açıklama: Miyelinlenme mekanizması, akson membranı üzerinde eksprese edilen bir epidermal büyüme faktörü olan Neuroregulin 1 tarafından düzenlenir ve Schwann mitozunu başlatır. Sox10 ise nöral kristadan Schwann hücrelerinin ilk farklılaşmasını sağlayan transkripsiyon faktörüdür. Neuroregulin 1 miyelin yapma sürecinin doğrudan uyarıcısıdır.

**Soru 2 (ID: fcd46d69-78fa-439e-9bac-c3817679b920)**
Soru Kökü: Periferik sinirlerde miyelinizasyon süreci, akson ile glia hücresi arasındaki sıkı moleküler sinyalizasyona bağlıdır. Akson membranı üzerinde eksprese edilerek miyelinlenme kalınlığını, sürecini ve gelişimini doğrudan düzenleyen temel büyüme faktörü aşağıdakilerden hangisidir?
Doğru Şık (D): Neuroregulin 1
Açıklama: Neuroregulin 1, akson membranında sentezlenen ve miyelin yapıcı hücreleri (Schwann ve oligodendrosit) uyararak miyelin kılıfın gelişimini ve kalınlığını düzenleyen kritik bir büyüme faktörüdür. Sox10 embriyolojik farklılaşmayı başlatırken, Neuroregulin 1 matürasyon ve miyelin kaplama sürecini yönetir. Nöroksinler ise presinaptik membranda bulunarak sinaps yapısının stabilize edilmesini sağlayan proteinlerdir.

---

### ÇİFT 39 (Benzerlik: 0.78)

**Soru 1 (ID: b32c419c-2e99-4d91-8d8d-1d8132633261)**
Soru Kökü: Sinir sistemi glia hücrelerinin embriyolojik kökenleri bulundukları anatomik bölgeye ve fonksiyonlarına göre birbirinden farklılık gösterir. Aşağıdaki glia hücresi ve embriyolojik köken eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (B): Satellit hücresi – Mezoderm
Açıklama: Satellit hücreleri periferik sinir sisteminin (PSS) gangliyonlarını destekleyen glia hücreleridir ve mikroglia gibi mezodermden değil, diğer PSS glia hücreleri (Schwann) gibi ektodermal bir yapı olan nöral kristadan köken alırlar. Merkezi sinir sistemi glialarından astrosit, oligodendrosit ve ependim nöral tüpten (ektoderm) köken alır. Mezodermden köken alan tek sinir dokusu elemanı immün fonksiyonlu mikroglialardır.

**Soru 2 (ID: d4bf1f7a-76a9-4438-9b6d-63b3061a3611)**
Soru Kökü: Aşağıdaki glia hücrelerinden hangisi merkezi sinir sistemi (MSS) destek hücrelerinden biri **değildir**?
Doğru Şık (D): Satellit hücresi
Açıklama: Satellit hücreleri, periferik sinir sistemindeki gangliyonlarda nöron gövdelerini (perikaryon) çevreleyerek izolasyon ve destek sağlayan nöroglia hücreleridir. Astrosit, oligodendrosit ve ependim hücreleri ektodermal, mikroglia ise mezodermal kökenli olmak üzere tümü merkezi sinir sistemine aittir. MSS ile PSS glia hücrelerinin lokasyon ayrımı, sinir histolojisinin temel ayırıcı bilgisidir.

---

### ÇİFT 40 (Benzerlik: 0.78)

**Soru 1 (ID: 681c0ad6-4591-4c58-aa74-c3d13a5cf02e)**
Soru Kökü: 12 yaşında kız hasta, nörolojik gelişim geriliği ve periferik kas güçsüzlüğü şikayetiyle değerlendiriliyor. Yapılan genetik analizde ve sinir biyopsisinde, nöral krista hücrelerinin periferik glia hücrelerine (Schwann hücreleri) farklanamadığı tespit ediliyor. Bu gelişimsel defektin hücresel mekanizmasında, aşağıdaki transkripsiyon faktörlerinden hangisinin ekspresyon eksikliği en olasıdır?
Doğru Şık (C): Sox10
Açıklama: Schwann hücreleri, nöral krista hücrelerinin Sox10 transkripsiyon faktörü eksprese ederek glia serisine farklanmasıyla meydana gelir. Neuroregulin 1 güçlü bir çeldiricidir ancak embriyolojik farklılaşmayı değil, farklılaşmış Schwann hücresinin akson etrafında yapacağı myelinlenme miktarını düzenleyen aksonal bir sinyaldir. Periferik glial hücre öncüllerinin kaderini tayin eden temel regülatör Sox10'dur.

**Soru 2 (ID: d033a9d6-b4b3-474b-8e5e-327133e902a0)**
Soru Kökü: Periferik sinir miyelinizasyonunun embriyolojik gelişiminde, nöral krista hücrelerinin Schwann hücrelerine doğru farklılaşması için eksprese etmeleri gereken temel transkripsiyon faktörü aşağıdakilerden hangisidir?
Doğru Şık (B): Sox10
Açıklama: Embriyolojik gelişim sırasında nöral krista hücrelerinin Schwann hücresi yönünde farklılaşmasını (diferansiyasyonunu) sağlayan genetik belirteç Sox10 transkripsiyon faktörüdür. Neuroregulin 1 ise daha sonraki aşamada farklılaşmış hücreye miyelinleme sinyalini veren faktördür.

---

### ÇİFT 41 (Benzerlik: 0.78)

**Soru 1 (ID: 33f70c89-9227-49d5-859b-02b964f41523)**
Soru Kökü: Merkezi sinir sisteminde (MSS) aksonların etrafında myelin kılıf sentezinden sorumlu olan ve embriyolojik olarak ektodermden köken alan glia hücresi aşağıdakilerden hangisidir?
Doğru Şık (E): Oligodendrosit
Açıklama: Santral sinir sisteminin birincil myelin yapıcı hücreleri oligodendrositlerdir. Schwann hücreleri periferik sinir sisteminde (PSS) myelin sentezinden sorumlu olup embriyolojik olarak nöral krista kökenlidir. Mikroglia mezoderm kökenliyken, oligodendrosit ektodermal nöral tüpten gelişerek MSS'de birden fazla aksonu tek başına myelinleyebilir.

**Soru 2 (ID: 36ce4460-78f2-49b9-9437-e05fc1f7edcc)**
Soru Kökü: Aşağıdaki nöroglia hücrelerinden hangisi nöral krista kökenli olup periferik sinir sisteminde yer alır?
Doğru Şık (E): Schwann hücresi
Açıklama: Periferik sinir sisteminin temel glia hücresi olan Schwann hücreleri nöral krista kökenlidir. Oligodendrositler ve astrositler ektoderm, mikroglia ise mezoderm kökenli MSS hücreleridir. Schwann hücrelerinin nöral kristadan göçerek perifere yerleşmesi, bu farklılığı yaratan temel mekanizmadır.

---

### ÇİFT 42 (Benzerlik: 0.77)

**Soru 1 (ID: 33f70c89-9227-49d5-859b-02b964f41523)**
Soru Kökü: Merkezi sinir sisteminde (MSS) aksonların etrafında myelin kılıf sentezinden sorumlu olan ve embriyolojik olarak ektodermden köken alan glia hücresi aşağıdakilerden hangisidir?
Doğru Şık (E): Oligodendrosit
Açıklama: Santral sinir sisteminin birincil myelin yapıcı hücreleri oligodendrositlerdir. Schwann hücreleri periferik sinir sisteminde (PSS) myelin sentezinden sorumlu olup embriyolojik olarak nöral krista kökenlidir. Mikroglia mezoderm kökenliyken, oligodendrosit ektodermal nöral tüpten gelişerek MSS'de birden fazla aksonu tek başına myelinleyebilir.

**Soru 2 (ID: 916a8758-654d-4dd1-8d90-7b4ac10fc6b2)**
Soru Kökü: Aşağıdaki nöroglia hücrelerinden hangisi merkezi sinir sisteminin (MSS) fizyolojik ortamını destekleyen hücre grubuna ait **değildir**?
Doğru Şık (C): Schwann hücresi
Açıklama: Schwann hücreleri periferik sinir sisteminin (PSS) glia hücreleridir ve akson miyelinasyonundan sorumludurlar. Astrosit, ependim hücresi, oligodendrosit ve mikroglia merkezi sinir sistemi (MSS) nörogliasıdır. Ependim hücreleri ventrikül iç yüzeyini döşerken, oligodendrositler MSS'de miyelinasyon sağlar.

---

### ÇİFT 43 (Benzerlik: 0.77)

**Soru 1 (ID: 9fb94b27-8b7f-4f44-b9f6-a91e32fbd618)**
Soru Kökü: Otuz beş yaşında erkek hasta, iş kazası sonucu ön kolunda derin kesi şikayetiyle acil servise başvuruyor. Median sinir tam kesisi saptanan hastada, hasar bölgesinden distal uca (kaslara) doğru ilerleyen hücre iskeleti granüler disintegrasyonu gözlemleniyor. Bu patofizyolojik süreç aşağıdakilerden hangisiyle adlandırılır?
Doğru Şık (C): Wallerian dejenerasyon
Açıklama: Sinir hasarı sonrası, lezyon bölgesinden distal uca doğru iskelet elemanlarının depolimerize olarak granüler parçalanmasına Wallerian (anterograd) dejenerasyon adı verilir. Retrograd dejenerasyon lezyondan nöron gövdesine (proksimale) doğru olan yıkımı ifade eder. Kromatolizis ise hasar sonrası nöron gövdesinde meydana gelen sentetik organel kaybı ve şişmedir.

**Soru 2 (ID: daa457dc-58a9-4d92-b3ef-9f46ff4c1c95)**
Soru Kökü: 28 yaşında erkek hasta trafik kazası sonrası alt ekstremitesinde motor kayıp yaşar. Olaydan birkaç gün sonra spinal kord ön boynuz motor nöronlarından alınan deneysel kesitte; hücre gövdesinde şişme, çekirdeğin perifere itilmesi, sitoplazmada granüllü endoplazma retikulumu yıkımına bağlı renk açılması izlenmiştir. Bu hücresel morfolojik tabloya ne ad verilir?
Doğru Şık (C): Kromatolizis
Açıklama: Nöron gövdesinde hasara yanıt olarak gelişen, Nissl cisimciklerinin (GER) kaybı, hücresel şişme ve çekirdeğin perifere yer değiştirmesiyle karakterize tabloya kromatolizis denir. Wallerian dejenerasyon aksonun distal kısmındaki iskelet yıkımıdır. Kromatolizis, nöronun rejenerasyon için protein sentezi şablonunu değiştirmesinin morfolojik yansımasıdır.

---

### ÇİFT 44 (Benzerlik: 0.77)

**Soru 1 (ID: 91e63ecc-efd8-4bbb-ab82-1c1cf6fb3265)**
Soru Kökü: Yirmi beş yaşında erkek hasta, 6 ay önce el bileğinde oluşan cam kesisi sonrası bölgesel his kaybı şikayetiyle başvuruyor. Kesi hattı üzerinde dokunmakla son derece ağrılı, nodüler bir kitle palpe ediliyor. Biyopside Schwann hücreleri arasında hedefini bulamamış ve kendi endonöryal kanalına giremeyerek yumak haline gelmiş çok sayıda disorganize nörit saptanıyor. Bu klinik tablonun tanısı aşağıdakilerden hangisidir?
Doğru Şık (C): Travmatik nöroma
Açıklama: Hasar bölgesinde endonöryal kanalın devamlılığı kaybolduğunda, filizlenen nöritler doğru yolu bulamaz ve bağ dokusu elemanlarıyla birlikte kontrolsüz bir şekilde çoğalarak şiddetli ağrılı bir kitle olan travmatik (amputasyon) nöromayı oluşturur. Schwannom ve Nörofibrom gerçek neoplastik tümörlerdir. Gliozis ise MSS'de izlenen skar dokusudur.

**Soru 2 (ID: fd3231db-368e-4a7c-9187-61c4fdbb4aeb)**
Soru Kökü: 50 yaşında kadın hasta, aylar önce el bileğinden kesici aletle yaralanmış olup, sinir tamiri gecikmiştir. Şiddetli ve lokalize ağrı şikayetiyle başvuran hastadan alınan biyopside, endonöryum kılıfının yokluğu nedeniyle Schwann hücresi kılavuzluğundan yoksun kalmış akson uzantılarının (nöritlerin) karmaşık, disorganize bir yumak oluşturduğu gözlenir. Bu patolojik yapı aşağıdakilerden hangisidir?
Doğru Şık (A): Travmatik nöroma
Açıklama: Periferik sinir hasarında endonöryal kanalların sağlam olmaması durumunda, büyüyen nöritler kendi tüplerini bulamaz ve disorganize bir şekilde gelişerek travmatik nöroma adı verilen ağrılı kitleyi oluştururlar. Gliozis SSS hasarında astrositlerin oluşturduğu skardır. Sağlam bir endonöryum rejenerasyonun anahtarıdır.

---

### ÇİFT 45 (Benzerlik: 0.77)

**Soru 1 (ID: 36ce4460-78f2-49b9-9437-e05fc1f7edcc)**
Soru Kökü: Aşağıdaki nöroglia hücrelerinden hangisi nöral krista kökenli olup periferik sinir sisteminde yer alır?
Doğru Şık (E): Schwann hücresi
Açıklama: Periferik sinir sisteminin temel glia hücresi olan Schwann hücreleri nöral krista kökenlidir. Oligodendrositler ve astrositler ektoderm, mikroglia ise mezoderm kökenli MSS hücreleridir. Schwann hücrelerinin nöral kristadan göçerek perifere yerleşmesi, bu farklılığı yaratan temel mekanizmadır.

**Soru 2 (ID: 916a8758-654d-4dd1-8d90-7b4ac10fc6b2)**
Soru Kökü: Aşağıdaki nöroglia hücrelerinden hangisi merkezi sinir sisteminin (MSS) fizyolojik ortamını destekleyen hücre grubuna ait **değildir**?
Doğru Şık (C): Schwann hücresi
Açıklama: Schwann hücreleri periferik sinir sisteminin (PSS) glia hücreleridir ve akson miyelinasyonundan sorumludurlar. Astrosit, ependim hücresi, oligodendrosit ve mikroglia merkezi sinir sistemi (MSS) nörogliasıdır. Ependim hücreleri ventrikül iç yüzeyini döşerken, oligodendrositler MSS'de miyelinasyon sağlar.

---

### ÇİFT 46 (Benzerlik: 0.77)

**Soru 1 (ID: 030fe399-3b16-4822-a02d-f98ab378679b)**
Soru Kökü: Miyelin kılıfın ince yapısı incelendiğinde, glia hücresi sitoplazmasının aksonu kat kat sarmaladığı görülür. Bu sarmal yapı içerisinde, miyelin kılıfın doğrudan akson yüzeyine temas eden (içe bakan) plazma membranı bölümüne ne ad verilir?
Doğru Şık (E): Adaxonal membran
Açıklama: Miyelin kılıfın aksonu kat kat sarmaladığı yapıda, glia hücresinin doğrudan içte kalan akson yüzeyine temas eden plazma membranı kısmına adaxonal (periaksonal) membran adı verilir. Abaxonal membran dış ortama ve eksternal laminaya bakan yüzeydir. Mesaxon ise aksonu saran bu iki zar yapısının birbiriyle karşılaşıp kaynaştığı anatomik geçiş bölgesidir.

**Soru 2 (ID: 3690f7cc-91b3-4a50-a317-36a27f42b061)**
Soru Kökü: Schwann hücresi akson etrafında miyelin kılıfı oluşturduğunda, bu hücrenin en dış sitoplazmik tabakası endonöryal bağ dokusu ve eksternal lamina ile doğrudan komşuluk yapar. Miyelin yapıcı hücrenin dış ortama (endonöryuma) bakan bu en dış yüzeyine ne ad verilir?
Doğru Şık (E): Abaxonal membran
Açıklama: Abaxonal membran, Schwann hücresi sitoplazmasının endonöryum bağ dokusuna ve hücrenin kendi eksternal laminasına (dış ortama) bakan en dış yüzeyidir ve buna nörilemma da denir. Adaxonal membran aksona bakan iç yüzeyken, mesaxon bu iki zarın birbirine kavuştuğu yerdir. Perikaryon hücrenin sitoplazmik gövdesini ifade eder.

---

### ÇİFT 47 (Benzerlik: 0.77)

**Soru 1 (ID: ef728b28-b92e-4297-ac20-ba80daee9f17)**
Soru Kökü: Periferik sinir kesilerinde, proksimalden büyüyen nöritlerin hedefe doğru doğru yönlenmesi ve rejenerasyonun durmadan ilerleyebilmesi için hasar bölgesi çevresinde varlığı kritik olan ve kılavuzluk yapan bağ dokusu kılıfı aşağıdakilerden hangisidir?
Doğru Şık (A): Endonöryum
Açıklama: Sinir rejenerasyonunda endonöryumun varlığı aksonların distale doğru yolunu bulması için zorunlu olan en içteki kılavuz yapı olup, yokluğu akson büyümesini başlatır ancak devamlılığının kopması rejenerasyonun disorganize olmasına yol açar. Perinöryum fasikülleri sarar ve kan-sinir bariyerini oluşturur; epinöryum ise siniri tamamen dıştan saran en kalın bağ dokusudur, mikro-kılavuzluk görevi endonöryal kanala aittir.

**Soru 2 (ID: f8f435a0-3676-4784-9609-038e305eae70)**
Soru Kökü: 25 yaşında erkek hasta, ön kolda derin cam kesisi sonrası tam kat sinir kesisi (Wallerian dejenerasyon) bulgularıyla opere ediliyor. Cerrahi onarım sırasında, proksimal uçtan gelişen büyüme konisinin (nörit) doğru şekilde hedefe ilerleyebilmesi için sağlam dokuda kalmış olması gereken hücresel rehber kanal yapısı değerlendiriliyor. Rejenerasyonun devamı için mutlak gerekli olan ve Schwann hücrelerinin Bungner bandları oluşturduğu bu bağ dokusu kanalı aşağıdakilerden hangisidir?
Doğru Şık (B): Endonöryum
Açıklama: Endonöryum, aksonu çevreleyen gevşek bağ dokusudur ve travma sonrası rejenerasyonda nöritlerin kas dokusuna ulaşması için hayati bir kılavuz tüp (endonöryal kanal) görevi görür. En güçlü çeldirici olan miyelin kılıf dejenerasyon sırasında Schwann hücreleri ve makrofajlarca temizlenir ve fiziksel bir kanal oluşturmaz. Sağlam bölgelerde endonöryumun yokluğu rejenerasyonu tamamen durdurur ve disorganize nöroma gelişimine neden olur.

---

### ÇİFT 48 (Benzerlik: 0.77)

**Soru 1 (ID: 3690f7cc-91b3-4a50-a317-36a27f42b061)**
Soru Kökü: Schwann hücresi akson etrafında miyelin kılıfı oluşturduğunda, bu hücrenin en dış sitoplazmik tabakası endonöryal bağ dokusu ve eksternal lamina ile doğrudan komşuluk yapar. Miyelin yapıcı hücrenin dış ortama (endonöryuma) bakan bu en dış yüzeyine ne ad verilir?
Doğru Şık (E): Abaxonal membran
Açıklama: Abaxonal membran, Schwann hücresi sitoplazmasının endonöryum bağ dokusuna ve hücrenin kendi eksternal laminasına (dış ortama) bakan en dış yüzeyidir ve buna nörilemma da denir. Adaxonal membran aksona bakan iç yüzeyken, mesaxon bu iki zarın birbirine kavuştuğu yerdir. Perikaryon hücrenin sitoplazmik gövdesini ifade eder.

**Soru 2 (ID: 8c5c67aa-c3b3-44ca-b731-88d6694297ea)**
Soru Kökü: Periferik sinir sisteminde myelinlenme, Schwann hücresinin akson etrafında özel bir düzende sarılmasıyla oluşur. Bu sarılımın en dışında kalan ve Schwann hücre gövdesini de içeren yapıya ne ad verilir?
Doğru Şık (A): Nörilemma
Açıklama: PSS'de myelinlenme aksonun Schwann hücresi tarafından kat kat sarılmasıdır. Bu sarılımın en dışında kalan, Schwann hücresi sitoplazmasını ve çekirdeğini barındıran kılıfa Schwann kılıfı veya nörilemma denir. Endonöryum nörilemmanın dışındaki bağ dokusu kılıfıdır; mesakson ise sarılım membranlarının birbirine değdiği kavşak noktasıdır.

---

### ÇİFT 49 (Benzerlik: 0.77)

**Soru 1 (ID: fcd46d69-78fa-439e-9bac-c3817679b920)**
Soru Kökü: Periferik sinirlerde miyelinizasyon süreci, akson ile glia hücresi arasındaki sıkı moleküler sinyalizasyona bağlıdır. Akson membranı üzerinde eksprese edilerek miyelinlenme kalınlığını, sürecini ve gelişimini doğrudan düzenleyen temel büyüme faktörü aşağıdakilerden hangisidir?
Doğru Şık (D): Neuroregulin 1
Açıklama: Neuroregulin 1, akson membranında sentezlenen ve miyelin yapıcı hücreleri (Schwann ve oligodendrosit) uyararak miyelin kılıfın gelişimini ve kalınlığını düzenleyen kritik bir büyüme faktörüdür. Sox10 embriyolojik farklılaşmayı başlatırken, Neuroregulin 1 matürasyon ve miyelin kaplama sürecini yönetir. Nöroksinler ise presinaptik membranda bulunarak sinaps yapısının stabilize edilmesini sağlayan proteinlerdir.

**Soru 2 (ID: ff70cc96-564d-45b7-ba3b-cf588581e4f2)**
Soru Kökü: Periferik sinir hasarı sonrası Schwann hücrelerinin mitoza girerek çoğalmasını ve miyelin yapısının bozulması üzerine dediferansiye olmasını tetikleyen epidermal büyüme faktörü üyesi protein ile uyardığı hücresel sinyal yolağı aşağıdakilerden hangisidir?
Doğru Şık (E): Nöroregulin - MAPK yolağı
Açıklama: Nöroregulinler, Schwann hücreleri ve oligodendrositlerde bulunan epidermal büyüme faktörü (EGF) üyesi proteinlerdir ve mitojenle aktifleşen protein kinaz (MAPK) yolağını uyararak Schwann hücresi mitozunu tetiklerler. Sox10 Schwann hücre farklanmasında etkili bir transkripsiyon faktörü olsa da travma sonrası tetikleyici akut sinyal yolağı Nöroregulin/MAPK ikilisidir. Nöroksin ve SNARE proteinleri ise sinaptik vezikül iletiminden sorumludur.

---

### ÇİFT 50 (Benzerlik: 0.77)

**Soru 1 (ID: 957f6acc-f34b-4fe2-9efc-29397ee6f7d3)**
Soru Kökü: Merkezi sinir sistemi (SSS) ve periferik sinir sistemindeki (PSS) myelinlenme stratejileri arasındaki en temel işlevsel kapasite farkı aşağıdakilerden hangisidir?
Doğru Şık (A): Oligodendrositin tek başına birden çok aksonu myelinleyebilmesi
Açıklama: SSS'de tek bir oligodendrosit hücre gövdesinden çıkardığı uzantılar ile 50'ye yakın farklı aksonu aynı anda myelinleyebilir. Buna karşılık PSS'deki bir Schwann hücresi hayatı boyunca sadece tek bir aksonu myelinler. SSS'de Ranvier boğumlarına uzantı sokan hücre oligodendrosit değil astrosittir. Schwann hücresi sadece myelinsiz değil aynı zamanda myelinli aksonları da sarar.

**Soru 2 (ID: adf15747-e00e-4586-b9ab-1738f123d950)**
Soru Kökü: Santral (SSS) ve periferik (PSS) sinir sistemlerindeki myelin yapıları ve hücreleri arasındaki farklar incelendiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): PSS'de Schwann hücresinin gövdesi (soması) miyelin kılıf yapısının dışarısında yer alır.
Açıklama: PSS'de miyelin kılıfı oluşturan Schwann hücresinin gövdesi bizzat miyelin kılıf yapısının içindedir; SSS'de ise oligodendrositin gövdesi kılıfın dışındadır ve sadece uzantılarını gönderir. Diğer tüm şıklar (astrosit teması, bazal lamina eksikliği) SSS-PSS miyelinizasyonunun doğru histolojik farklılıklarıdır.

---

### ÇİFT 51 (Benzerlik: 0.77)

**Soru 1 (ID: 86fc22a0-8290-4714-bc74-8b70a49ff329)**
Soru Kökü: Periferik ve santral sinir sistemi miyelin kılıflarının yapısal özellikleri karşılaştırıldığında, aşağıdakilerden hangisi yalnızca periferik sinir sistemine (PSS) özgü bir bulgudur?
Doğru Şık (D): Miyelinli aksonların bağ dokusuyla desteklenmiş olması
Açıklama: Periferik sinir sisteminde miyelinli aksonlar endonöryum başta olmak üzere bağ dokusu kılıflarıyla izole ve desteklenmiş haldedir, SSS'de ise miyelinli aksonlar bağ dokusu desteğinden yoksundur. Santral sinir sisteminde miyelin kılıfta bazal lamina bulunmazken, tek bir oligodendrosit çok sayıda aksonu miyelinler. PSS'de ise miyelin kılıfın eksternal laminası bulunur ve her Schwann hücresi sadece bir akson segmentini sararak destekler.

**Soru 2 (ID: adf15747-e00e-4586-b9ab-1738f123d950)**
Soru Kökü: Santral (SSS) ve periferik (PSS) sinir sistemlerindeki myelin yapıları ve hücreleri arasındaki farklar incelendiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): PSS'de Schwann hücresinin gövdesi (soması) miyelin kılıf yapısının dışarısında yer alır.
Açıklama: PSS'de miyelin kılıfı oluşturan Schwann hücresinin gövdesi bizzat miyelin kılıf yapısının içindedir; SSS'de ise oligodendrositin gövdesi kılıfın dışındadır ve sadece uzantılarını gönderir. Diğer tüm şıklar (astrosit teması, bazal lamina eksikliği) SSS-PSS miyelinizasyonunun doğru histolojik farklılıklarıdır.

---

### ÇİFT 52 (Benzerlik: 0.77)

**Soru 1 (ID: 4b95fca2-5d27-4db6-92e9-d0b8dcc0c7ca)**
Soru Kökü: Kırk iki yaşında kadın hasta, brakial pleksus hasarı sonrasında motor fonksiyon kaybı yaşamaktadır. Hastanın hasarlı sinirlerini besleyen motor nöron gövdelerinde granüllü endoplazmik retikulumların kaybolduğu, nöronun soluklaşıp şiştiği ve çekirdeğin perifere doğru itildiği hücresel adaptasyon süreci tespit ediliyor. Bu morfolojik değişim aşağıdakilerden hangisidir?
Doğru Şık (D): Kromatolizis
Açıklama: Sinir hasarı sonrasında nöron gövdesinin aşırı protein sentezi hazırlığına girmesi sonucu Nissl cisimciklerinin (GER) kaybı, sitoplazmanın soluklaşması, hücrenin şişmesi ve çekirdeğin perifere itilmesi kromatolizis olarak adlandırılır. Wallerian ve retrograd dejenerasyonlar akson boyunca gerçekleşen iskelet yıkımını ifade ederken; kromatolizis doğrudan nöron gövdesi (soma) bulgusudur.

**Soru 2 (ID: aaa5975e-a2a2-4b18-977b-c8abccc598f2)**
Soru Kökü: 42 yaşında kadın hastada periferik sinir kesisi sonrası iyileşme süreci takip edilmektedir. Histolojik kesitlerde hasarlı bölgeden başlayarak distal uca (ileriye) doğru aksonal iskeletin granüler disintegrasyona uğradığı izlenmiştir. Bu hücresel yıkım sürecine ne ad verilir?
Doğru Şık (B): Wallerian dejenerasyon
Açıklama: Sinir kesisinde hasarlı bölgeden distal uca doğru izlenen anterograd akson iskeleti yıkımına Wallerian dejenerasyon adı verilir. Retrograd dejenerasyon proksimale (gövdeye) doğru ilerlerken, kromatolizis doğrudan nöron gövdesindeki Nissl kaybıdır. Gliozis ise MSS'de hasar sonrası oluşan skar dokusudur.

---

### ÇİFT 53 (Benzerlik: 0.77)

**Soru 1 (ID: 86fc22a0-8290-4714-bc74-8b70a49ff329)**
Soru Kökü: Periferik ve santral sinir sistemi miyelin kılıflarının yapısal özellikleri karşılaştırıldığında, aşağıdakilerden hangisi yalnızca periferik sinir sistemine (PSS) özgü bir bulgudur?
Doğru Şık (D): Miyelinli aksonların bağ dokusuyla desteklenmiş olması
Açıklama: Periferik sinir sisteminde miyelinli aksonlar endonöryum başta olmak üzere bağ dokusu kılıflarıyla izole ve desteklenmiş haldedir, SSS'de ise miyelinli aksonlar bağ dokusu desteğinden yoksundur. Santral sinir sisteminde miyelin kılıfta bazal lamina bulunmazken, tek bir oligodendrosit çok sayıda aksonu miyelinler. PSS'de ise miyelin kılıfın eksternal laminası bulunur ve her Schwann hücresi sadece bir akson segmentini sararak destekler.

**Soru 2 (ID: 9b859d78-c96a-4239-9e80-6ba4bb115d85)**
Soru Kökü: SSS ve PSS myelin kılıf yapıları ince mikroskobik düzeyde karşılaştırıldığında, periferik myelin kılıfta bulunmasına rağmen santral myelin kılıfta yapısal olarak **bulunmayan** spesifik katman aşağıdakilerden hangisidir?
Doğru Şık (B): Eksternal (bazal) lamina
Açıklama: PSS'de Schwann hücresinin oluşturduğu myelin kılıfın çevresinde ve endonöryal kanalda eksternal (bazal) lamina yapısı izlenir. SSS'de oligodendrositlerin oluşturduğu myelin kılıfta ise bazal lamina yapısı kesinlikle bulunmaz. Adaxonal ve abaxonal membranlar myelinin aksona ve dışa bakan yüzlerini tanımlar ve her iki sistemde de bulunur.

---

### ÇİFT 54 (Benzerlik: 0.76)

**Soru 1 (ID: 27def68b-deb3-4725-a6a3-bec977e33031)**
Soru Kökü: 32 yaşında kadın hastadan alınan beyin dokusu biyopsisi incelenmektedir. Patolog, nöropil alanındaki nöronların genel yapısını, uzantılarını ve aralarındaki sinaps bölgelerini detaylı olarak görünür kılmak istemektedir. Bu amaçla aşağıdaki boyama veya inceleme yöntemlerinden hangisinin kullanılması en uygundur?
Doğru Şık (B): Golgi gümüşleme yöntemi
Açıklama: Golgi gümüşleme yöntemi, nöropil adı verilen karmaşık ağ içerisindeki akson, dendrit uzantılarını ve bunlar arasındaki sinapsları detaylı olarak boyayarak görünür kılan spesifik bir histolojik tekniktir. Thionin ve toluidin mavisi gibi boyalar Nissl taneciklerini (GER) metakromatik olarak gösterirken ince uzantıları boyamaz. Hematoksilen-Eozin ise sinir dokusunun ince uzantı ve sinaptik detaylarını hücresel düzeyde ayırt etmede yetersizdir.

**Soru 2 (ID: 94654efa-7c4b-4181-8a1a-0b60972b64b2)**
Soru Kökü: Nöroanatomi laboratuvarında merkezi sinir sistemine ait bir doku kesitinde, nöronların tüm yapısal uzantılarını ve özellikle sinaps bölgelerini detaylı olarak incelemek isteyen bir araştırmacının aşağıdaki histolojik yöntemlerden hangisini kullanması en uygundur?
Doğru Şık (B): Golgi gümüşleme yöntemi
Açıklama: Golgi gümüşleme yöntemi, sinir hücrelerinin gövdeleriyle birlikte akson ve dendrit gibi tüm ince uzantılarını ve sinaps yapılarını üç boyutlu bir ağ şeklinde siyah renkte görünür kılan spesifik bir nörohistolojik tekniktir. Nissl ve thionin boyamaları güçlü çeldiricilerdir ancak bu yöntemler granüllü endoplazmik retikulumu (Nissl taneciklerini) boyayarak hücre gövdesini gösterir, uzantıları ve sinapsları göstermede yetersiz kalır. Sinaps mimarisi için altın standart Golgi yöntemidir.

---

### ÇİFT 55 (Benzerlik: 0.76)

**Soru 1 (ID: af941a32-871f-446f-8298-6c621e05bc2c)**
Soru Kökü: Yirmi sekiz yaşında erkek hasta trafik kazasına bağlı komplet spinal kord kesisi (T10 seviyesi) tanısıyla izlenmektedir. Bu hastada santral sinir sistemi içindeki dejenere akson ve miyelin kalıntılarını ortamdan temizleyerek skar formasyonuna zemin hazırlayan temel glia hücresi aşağıdakilerden hangisidir?
Doğru Şık (C): Mikroglia
Açıklama: Santral sinir sisteminde (beyin ve spinal kord) dejenere miyelin ve akson artıklarının fagositozundan monosit/makrofaj sisteminden köken alan mikroglia hücreleri sorumludur. PSS hasarlarında bu görevi Schwann hücreleri ve makrofajlar yapar. Astrositler fagositozdan ziyade bölgede gliozis oluşturarak skar dokusu yapımında ana rol oynar.

**Soru 2 (ID: f3727a8c-b055-43f7-b5a3-56ee04a1081b)**
Soru Kökü: 45 yaşında erkek hasta, geçirdiği serebrovasküler olay (iskemi) nedeniyle takip edilmektedir. İskemik hasar bölgesinde ölü dokuyu temizlemek üzere fagositik aktivite gösteren nöroglia hücrelerinin sayısında belirgin artış saptanmıştır. Bu hücresel infiltrasyondan sorumlu glia hücrelerinin embriyolojik kökeni aşağıdakilerden hangisidir?
Doğru Şık (D): Mezoderm
Açıklama: Mikroglia hücreleri merkezi sinir sisteminin immün yanıtından sorumlu makrofajlarıdır ve diğer nörogliaların aksine ektodermden değil, mezodermden (monosit-makrofaj serisinden) köken alırlar. Nöral tüp ektodermal bir yapı olup astrosit, oligodendrosit ve ependim hücrelerini oluştururken nöral krista periferik sistem glia hücrelerini (Schwann) yapar. İskemik hasar bölgesinde izlenen fagositik aktivite doğrudan mezodermal kökenli bu mikroglialara aittir.

---

### ÇİFT 56 (Benzerlik: 0.76)

**Soru 1 (ID: 0354725f-9783-474b-b278-040a9599eacc)**
Soru Kökü: 35 yaşında erkek hasta, periferik sinir kesisine bağlı onarım cerrahisi geçiriyor. Rejenerasyon sürecinde Schwann hücreleri mitoza girerek remyelinizasyon aşamasına geçmektedir. Schwann hücrelerinin bu mitozunu ve myelinlenme sürecini düzenleyen, akson membranında eksprese edilen sinyal proteini aşağıdakilerden hangisidir?
Doğru Şık (A): Neuroregulin 1
Açıklama: Neuroregulin 1, akson membranında eksprese edilen epidermal büyüme faktörü (EGF) ailesi üyesi bir proteindir ve glia hücrelerindeki MAPK yolaklarını uyararak hem Schwann hücre mitozunu hem de myelinlenme miktarını düzenler. Sox10 embriyolojik farklılaşmada görev alırken, neuroregulin 1 olgun aksonun glial hücreye "beni myelinle" mesajını ileten ana moleküldür. Sinir onarımında akson-glia iletişiminin merkezinde yer alır.

**Soru 2 (ID: fcd46d69-78fa-439e-9bac-c3817679b920)**
Soru Kökü: Periferik sinirlerde miyelinizasyon süreci, akson ile glia hücresi arasındaki sıkı moleküler sinyalizasyona bağlıdır. Akson membranı üzerinde eksprese edilerek miyelinlenme kalınlığını, sürecini ve gelişimini doğrudan düzenleyen temel büyüme faktörü aşağıdakilerden hangisidir?
Doğru Şık (D): Neuroregulin 1
Açıklama: Neuroregulin 1, akson membranında sentezlenen ve miyelin yapıcı hücreleri (Schwann ve oligodendrosit) uyararak miyelin kılıfın gelişimini ve kalınlığını düzenleyen kritik bir büyüme faktörüdür. Sox10 embriyolojik farklılaşmayı başlatırken, Neuroregulin 1 matürasyon ve miyelin kaplama sürecini yönetir. Nöroksinler ise presinaptik membranda bulunarak sinaps yapısının stabilize edilmesini sağlayan proteinlerdir.

---

### ÇİFT 57 (Benzerlik: 0.76)

**Soru 1 (ID: 9b859d78-c96a-4239-9e80-6ba4bb115d85)**
Soru Kökü: SSS ve PSS myelin kılıf yapıları ince mikroskobik düzeyde karşılaştırıldığında, periferik myelin kılıfta bulunmasına rağmen santral myelin kılıfta yapısal olarak **bulunmayan** spesifik katman aşağıdakilerden hangisidir?
Doğru Şık (B): Eksternal (bazal) lamina
Açıklama: PSS'de Schwann hücresinin oluşturduğu myelin kılıfın çevresinde ve endonöryal kanalda eksternal (bazal) lamina yapısı izlenir. SSS'de oligodendrositlerin oluşturduğu myelin kılıfta ise bazal lamina yapısı kesinlikle bulunmaz. Adaxonal ve abaxonal membranlar myelinin aksona ve dışa bakan yüzlerini tanımlar ve her iki sistemde de bulunur.

**Soru 2 (ID: adf15747-e00e-4586-b9ab-1738f123d950)**
Soru Kökü: Santral (SSS) ve periferik (PSS) sinir sistemlerindeki myelin yapıları ve hücreleri arasındaki farklar incelendiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): PSS'de Schwann hücresinin gövdesi (soması) miyelin kılıf yapısının dışarısında yer alır.
Açıklama: PSS'de miyelin kılıfı oluşturan Schwann hücresinin gövdesi bizzat miyelin kılıf yapısının içindedir; SSS'de ise oligodendrositin gövdesi kılıfın dışındadır ve sadece uzantılarını gönderir. Diğer tüm şıklar (astrosit teması, bazal lamina eksikliği) SSS-PSS miyelinizasyonunun doğru histolojik farklılıklarıdır.

---

### ÇİFT 58 (Benzerlik: 0.76)

**Soru 1 (ID: 754d87c4-3fac-476e-8978-a5f0971318d5)**
Soru Kökü: Nöroglia hücrelerinin embriyolojik kökenleri ve fagositoz yetenekleri dikkate alındığında, santral sinir sisteminde doku hasarı sonrası debris temizliğinden sorumlu olan ve mezodermden gelişen hücre tipi aşağıdakilerden hangisidir?
Doğru Şık (C): Mikroglialar
Açıklama: Mikroglialar, ektoderm kökenli diğer glia hücrelerinden farklı olarak mezodermden gelişen ve beyin makrofajları olarak işlev gören en küçük glial hücrelerdir. Astrositler gliozis (skar) oluşturarak doku onarımına katılır ancak temel fagositik temizliği yapan yapı mikroglialardır. MSS hasarında inflamatuar yanıt ve hücresel döküntülerin fagositozu doğrudan bu hücrelerin görevidir.

**Soru 2 (ID: af941a32-871f-446f-8298-6c621e05bc2c)**
Soru Kökü: Yirmi sekiz yaşında erkek hasta trafik kazasına bağlı komplet spinal kord kesisi (T10 seviyesi) tanısıyla izlenmektedir. Bu hastada santral sinir sistemi içindeki dejenere akson ve miyelin kalıntılarını ortamdan temizleyerek skar formasyonuna zemin hazırlayan temel glia hücresi aşağıdakilerden hangisidir?
Doğru Şık (C): Mikroglia
Açıklama: Santral sinir sisteminde (beyin ve spinal kord) dejenere miyelin ve akson artıklarının fagositozundan monosit/makrofaj sisteminden köken alan mikroglia hücreleri sorumludur. PSS hasarlarında bu görevi Schwann hücreleri ve makrofajlar yapar. Astrositler fagositozdan ziyade bölgede gliozis oluşturarak skar dokusu yapımında ana rol oynar.

---

### ÇİFT 59 (Benzerlik: 0.76)

**Soru 1 (ID: c898c6da-f76c-4573-885c-b0418f7cf165)**
Soru Kökü: 28 yaşında erkek hasta, geçirdiği trafik kazası sonucu periferik sinir kesisi (Wallerian dejenerasyon) tanısıyla izlenmektedir. Hasar bölgesinde Schwann hücrelerinin mitoz geçirerek Bungner bandlarını oluşturması ve rejenerasyon köprüleri kurması beklenmektedir. Bu Schwann hücresi proliferasyonunu başlatan intraselüler sinyal yolağı ve tetikleyicisi aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (B): Nöroregulin – MAPK yolağı uyarımı
Açıklama: Sinir hasarı sonrası gelişen Wallerian dejenerasyonda, onarımın ilk adımı epidermal büyüme faktörü (EGF) üyesi olan Nöroregulinlerin Schwann hücrelerindeki MAPK yolağını uyararak mitozu tetiklemesidir. Bu uyarım hücre proliferasyonunu ve distale doğru uzanan Bungner bandlarının oluşmasını sağlar. Kalsiyum ve SNARE proteinleri dejenerasyon veya rejenerasyonda değil, sinaps düzeyindeki nörotransmitter ekzositozunda rol oynar.

**Soru 2 (ID: ff70cc96-564d-45b7-ba3b-cf588581e4f2)**
Soru Kökü: Periferik sinir hasarı sonrası Schwann hücrelerinin mitoza girerek çoğalmasını ve miyelin yapısının bozulması üzerine dediferansiye olmasını tetikleyen epidermal büyüme faktörü üyesi protein ile uyardığı hücresel sinyal yolağı aşağıdakilerden hangisidir?
Doğru Şık (E): Nöroregulin - MAPK yolağı
Açıklama: Nöroregulinler, Schwann hücreleri ve oligodendrositlerde bulunan epidermal büyüme faktörü (EGF) üyesi proteinlerdir ve mitojenle aktifleşen protein kinaz (MAPK) yolağını uyararak Schwann hücresi mitozunu tetiklerler. Sox10 Schwann hücre farklanmasında etkili bir transkripsiyon faktörü olsa da travma sonrası tetikleyici akut sinyal yolağı Nöroregulin/MAPK ikilisidir. Nöroksin ve SNARE proteinleri ise sinaptik vezikül iletiminden sorumludur.

---

### ÇİFT 60 (Benzerlik: 0.76)

**Soru 1 (ID: 754d87c4-3fac-476e-8978-a5f0971318d5)**
Soru Kökü: Nöroglia hücrelerinin embriyolojik kökenleri ve fagositoz yetenekleri dikkate alındığında, santral sinir sisteminde doku hasarı sonrası debris temizliğinden sorumlu olan ve mezodermden gelişen hücre tipi aşağıdakilerden hangisidir?
Doğru Şık (C): Mikroglialar
Açıklama: Mikroglialar, ektoderm kökenli diğer glia hücrelerinden farklı olarak mezodermden gelişen ve beyin makrofajları olarak işlev gören en küçük glial hücrelerdir. Astrositler gliozis (skar) oluşturarak doku onarımına katılır ancak temel fagositik temizliği yapan yapı mikroglialardır. MSS hasarında inflamatuar yanıt ve hücresel döküntülerin fagositozu doğrudan bu hücrelerin görevidir.

**Soru 2 (ID: 8bc763b1-c18b-4d2e-a67e-eb139d139137)**
Soru Kökü: Kırk beş yaşında erkek hastanın beyin parankiminden alınan biyopsi örneğinde, fagositoz aktivitesi gösteren ve enfeksiyon bölgesinde yoğunlaşan destek hücreleri izlenmektedir. Bu klinik tabloda izlenen glia hücrelerinin embriyolojik kökeni aşağıdakilerden hangisidir?
Doğru Şık (D): Mezoderm
Açıklama: Mikroglia hücreleri, fagositik aktivitelerinden dolayı ektodermden değil, monosit-makrofaj serisinden yani mezodermden köken alan tek merkezi sinir sistemi destek hücresidir. En güçlü çeldirici olan nöral krista, periferik glia hücrelerinin kaynağı olduğu için bu klinik tabloda yanlıştır. Astrosit ve oligodendrosit gibi diğer merkezi sinir sistemi glia hücreleri ise doğrudan ektoderm kökenlidir.

---

### ÇİFT 61 (Benzerlik: 0.76)

**Soru 1 (ID: 6586a0bb-58a3-4b7b-8ef6-a5c35d9db0a9)**
Soru Kökü: 45 yaşında erkek hastada meydana gelen mekanik sinir hasarının ardından, periferik sinir rejenerasyon süreci başlamıştır. Rejenerasyon sırasında proksimal uçtan gelişen büyüme konisinin distale doğru ilerlemesi ve kası tekrar innerve etmesi için Schwann hücrelerinin longitudinal eksternal lamina bandları yaparak oluşturduğu kılavuz yapıya ne ad verilir?
Doğru Şık (C): Bungner bandları
Açıklama: Periferik sinir rejenerasyonunda, Schwann hücreleri bölgeyi temizledikten sonra düzenlenerek filopodların (nöritlerin) ilerlemesi için longitudinal Bungner bandları oluşturur. Bu bandlar eksternal lamina yapısında olup aksonun doğru yönde büyümesi için fiziksel bir tüp (kılavuz) görevi görür.

**Soru 2 (ID: f8f435a0-3676-4784-9609-038e305eae70)**
Soru Kökü: 25 yaşında erkek hasta, ön kolda derin cam kesisi sonrası tam kat sinir kesisi (Wallerian dejenerasyon) bulgularıyla opere ediliyor. Cerrahi onarım sırasında, proksimal uçtan gelişen büyüme konisinin (nörit) doğru şekilde hedefe ilerleyebilmesi için sağlam dokuda kalmış olması gereken hücresel rehber kanal yapısı değerlendiriliyor. Rejenerasyonun devamı için mutlak gerekli olan ve Schwann hücrelerinin Bungner bandları oluşturduğu bu bağ dokusu kanalı aşağıdakilerden hangisidir?
Doğru Şık (B): Endonöryum
Açıklama: Endonöryum, aksonu çevreleyen gevşek bağ dokusudur ve travma sonrası rejenerasyonda nöritlerin kas dokusuna ulaşması için hayati bir kılavuz tüp (endonöryal kanal) görevi görür. En güçlü çeldirici olan miyelin kılıf dejenerasyon sırasında Schwann hücreleri ve makrofajlarca temizlenir ve fiziksel bir kanal oluşturmaz. Sağlam bölgelerde endonöryumun yokluğu rejenerasyonu tamamen durdurur ve disorganize nöroma gelişimine neden olur.

---

### ÇİFT 62 (Benzerlik: 0.76)

**Soru 1 (ID: 08da7147-e5d2-4974-8ffe-0ab5e9aa8b08)**
Soru Kökü: Ağrı sinyallerinin medulla spinalis dorsal boynuzunda kontrolü sırasında, enkefalinerjik nöronların ve opioidlerin hücresel düzeyde gösterdiği inhibisyon mekanizmaları aşağıdakilerden hangisini içerir?
I. Presinaptik kalsiyum kanallarının kapanması
II. Postsinaptik potasyum kanallarının açılması
III. Postsinaptik sodyum kanallarının uzamış inaktivasyonu
Doğru Şık (D): I ve II
Açıklama: Opioidler ağrı yollarında hem presinaptik hem de postsinaptik inhibisyon yaparlar. Presinaptik terminalde kalsiyum girişini azaltarak ağrı mediatörlerinin (P maddesi, glutamat) salınmasını engellerken, postsinaptik nöronda potasyum kanallarını açıp K+ çıkışını artırarak hücreyi hiperpolarize eder ve oluşan EPSP'nin genliğini düşürürler. Sodyum kanalı inaktivasyonu lokal anesteziklerin etki mekanizmasıdır.

**Soru 2 (ID: 9cbd1782-7c86-4c47-8246-3fde4fe3158a)**
Soru Kökü: Merkezi sinir sisteminde inen ağrı inhibitör yolakları ile ilgili;
I. Mezensefalondaki periaquaduktal gri madde (PAG) nöronları enkefalin salgılayarak alt merkezleri uyarır.
II. Locus coeruleus kaynaklı norepinefrin salgılayan nöronlar ağrı iletimini doğrudan baskılar.
III. Nükleus raphe magnus'tan inen serotonerjik lifler arka boynuzdaki nöronları hiperpolarize eder.
ifadelerinden hangileri doğrudur?
Doğru Şık (D): I, II ve III
Açıklama: Ağrının santral baskılanmasında (inen analjezik sistem) korteks ve PAG'dan başlayan uyarılar, serotonin (raphe çekirdeği) ve noradrenalin (locus coeruleus) üreten alt merkezleri tetikler. Bu inen lifler, omurilik arka boynuzunda lokal enkefalin ara nöronlarını aktive ederek gelen ağrı sinyallerini (C liflerini) hiperpolarize edip iletimi bloke ederler. Üç öncül de bu kaskadın fizyolojik basamaklarıdır.

---

### ÇİFT 63 (Benzerlik: 0.76)

**Soru 1 (ID: 01300ec5-bf7d-449d-ba8e-6652449b01f9)**
Soru Kökü: Klinik nöroanatomi değerlendirilmelerinde, duyusal (afferent) yollar ile motor (efferent) yollar arasındaki bilgi akışını modüle eden ve sayısal olarak sinir sistemindeki nöronların yaklaşık %99'unu oluşturan nöron tipi aşağıdakilerden hangisidir?
Doğru Şık (C): İnternöron (intercalated)
Açıklama: İnternöronlar (intercalated nöronlar), tamamen merkezi sinir sistemi içerisinde lokalize olarak duyusal ve motor nöronlar arasındaki refleks ve integrasyon bağlantılarını kuran ve toplam sinir ağının %99'unu kaplayan hücre grubudur. Visseral veya somatik yollar afferent/efferent olarak sadece perifer-merkez iletiminden sorumludur ve sistemin çok küçük bir yüzdesini kaplarlar. Sinir sisteminin kompleks problem çözme ve modülasyon yeteneği bu hücre sayısına dayanır.

**Soru 2 (ID: 300c08b4-caf8-40a7-9182-fb69c62b2bfd)**
Soru Kökü: Merkezi sinir sisteminde yer alan ve sayıca tüm nöron popülasyonunun %99'unu oluşturan, temel görevi diğer duyusal ve motor nöronlar arasında bağlantıyı ve entegrasyonu sağlamak olan hücre tipi aşağıdakilerden hangisidir?
Doğru Şık (B): İnternöron
Açıklama: İnternöronlar, merkezi sinir sistemindeki tüm nöronların %99'unu oluşturarak duyusal ve motor yollar arasında karmaşık entegrasyonu sağlarlar. Somatik motor nöronlar doğrudan iskelet kaslarına efferent uyarı taşırken, visseral afferentler iç organ ağrısını merkeze iletir. Pseudounipolar ve bipolar nöronlar genellikle afferent duyusal fonksiyonlara hizmet eden morfolojik tiplerdir.

---

### ÇİFT 64 (Benzerlik: 0.75)

**Soru 1 (ID: 36ce4460-78f2-49b9-9437-e05fc1f7edcc)**
Soru Kökü: Aşağıdaki nöroglia hücrelerinden hangisi nöral krista kökenli olup periferik sinir sisteminde yer alır?
Doğru Şık (E): Schwann hücresi
Açıklama: Periferik sinir sisteminin temel glia hücresi olan Schwann hücreleri nöral krista kökenlidir. Oligodendrositler ve astrositler ektoderm, mikroglia ise mezoderm kökenli MSS hücreleridir. Schwann hücrelerinin nöral kristadan göçerek perifere yerleşmesi, bu farklılığı yaratan temel mekanizmadır.

**Soru 2 (ID: c71aea58-8b4d-405b-a15a-a0231e6ef410)**
Soru Kökü: Merkezi sinir dokusunda yer alan glia hücrelerinin embriyolojik kökenleri incelendiğinde, monosit-makrofaj sisteminden gelişerek mezoderm kökenli olan hücre aşağıdakilerden hangisidir?
Doğru Şık (C): Mikroglia
Açıklama: Mikroglia hücreleri merkezi sinir sisteminde fagositozdan sorumlu makrofajlar olup, ektoderm kökenli diğer MSS glia hücrelerinin aksine mezodermden (monosit-makrofaj serisinden) gelişirler. Ependim hücreleri, astrositler ve oligodendrositler nöroektodermal kökenlidir. Bu spesifik embriyolojik farklılık, mikrogliayı MSS'nin immün savunma hattı yapar.

---

### ÇİFT 65 (Benzerlik: 0.75)

**Soru 1 (ID: 92383ce9-991a-41b3-8035-cef7c67218bc)**
Soru Kökü: Santral sinir sistemini oluşturan embriyolojik yapılar incelendiğinde, aşağıdaki nöroglia hücrelerinden hangisinin kökeni ektodermal **değildir**?
Doğru Şık (B): Mikroglia
Açıklama: Mikroglialar beyin makrofajlarıdır ve diğer tüm glial hücrelerden farklı olarak ektodermden değil mezodermden gelişirler. Astrositler, oligodendrositler ve ependim hücreleri nöral tüp ektoderminden farklılaşır. Bu embriyolojik fark, mikrogliaların kemik iliği kökenli monosit benzeri immün fonksiyonlarını açıklar.

**Soru 2 (ID: b32c419c-2e99-4d91-8d8d-1d8132633261)**
Soru Kökü: Sinir sistemi glia hücrelerinin embriyolojik kökenleri bulundukları anatomik bölgeye ve fonksiyonlarına göre birbirinden farklılık gösterir. Aşağıdaki glia hücresi ve embriyolojik köken eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (B): Satellit hücresi – Mezoderm
Açıklama: Satellit hücreleri periferik sinir sisteminin (PSS) gangliyonlarını destekleyen glia hücreleridir ve mikroglia gibi mezodermden değil, diğer PSS glia hücreleri (Schwann) gibi ektodermal bir yapı olan nöral kristadan köken alırlar. Merkezi sinir sistemi glialarından astrosit, oligodendrosit ve ependim nöral tüpten (ektoderm) köken alır. Mezodermden köken alan tek sinir dokusu elemanı immün fonksiyonlu mikroglialardır.

---

### ÇİFT 66 (Benzerlik: 0.75)

**Soru 1 (ID: 36ce4460-78f2-49b9-9437-e05fc1f7edcc)**
Soru Kökü: Aşağıdaki nöroglia hücrelerinden hangisi nöral krista kökenli olup periferik sinir sisteminde yer alır?
Doğru Şık (E): Schwann hücresi
Açıklama: Periferik sinir sisteminin temel glia hücresi olan Schwann hücreleri nöral krista kökenlidir. Oligodendrositler ve astrositler ektoderm, mikroglia ise mezoderm kökenli MSS hücreleridir. Schwann hücrelerinin nöral kristadan göçerek perifere yerleşmesi, bu farklılığı yaratan temel mekanizmadır.

**Soru 2 (ID: d4bf1f7a-76a9-4438-9b6d-63b3061a3611)**
Soru Kökü: Aşağıdaki glia hücrelerinden hangisi merkezi sinir sistemi (MSS) destek hücrelerinden biri **değildir**?
Doğru Şık (D): Satellit hücresi
Açıklama: Satellit hücreleri, periferik sinir sistemindeki gangliyonlarda nöron gövdelerini (perikaryon) çevreleyerek izolasyon ve destek sağlayan nöroglia hücreleridir. Astrosit, oligodendrosit ve ependim hücreleri ektodermal, mikroglia ise mezodermal kökenli olmak üzere tümü merkezi sinir sistemine aittir. MSS ile PSS glia hücrelerinin lokasyon ayrımı, sinir histolojisinin temel ayırıcı bilgisidir.

---

