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

**Soru 1 (ID: 53240fab-06de-4f3c-8363-0198f48a8b49)**
Soru Kökü: Oral liken planus lezyonlarından alınan biyopsi örneklerinin direkt immünofloresan incelemesinde, bazal membran bölgesinde gözlenen ve hastalık için tipik olan birikim aşağıdakilerden hangisidir?
Doğru Şık (B): Shaggy konfigürasyonlu fibrinojen
Açıklama: Liken planusun immünofloresan incelemesinde bazal membranda 'shaggy' (kabarık/pürüzlü) konfigürasyona sahip fibrinojen birikimi diagnostiktir. Lineer IgG birikimi pemfigoidde, bant şeklinde T-lenfosit infiltrasyonu ise immünofloresan incelemede değil rutin histopatolojik H&E boyamasında izlenen bir bulgudur.

**Soru 2 (ID: 6ecc8a09-4480-4915-b036-1c98c47a0563)**
Soru Kökü: Oral liken planus lezyonlarından alınan biyopsi örneklerinin direkt immünofloresan incelemesinde, bazal membran bölgesinde gözlenen ve hastalık için tipik olan birikim aşağıdakilerden hangisidir?
Doğru Şık (B): Shaggy konfigürasyonlu fibrinojen
Açıklama: Liken planusun immünofloresan incelemesinde bazal membranda 'shaggy' (kabarık/pürüzlü) konfigürasyona sahip fibrinojen birikimi diagnostiktir. Lineer IgG birikimi pemfigoidde, bant şeklinde T-lenfosit infiltrasyonu ise immünofloresan incelemede değil rutin histopatolojik H&E boyamasında izlenen bir bulgudur.

---

### ÇİFT 2 (Benzerlik: 1.00)

**Soru 1 (ID: 926a040a-21f5-4770-99f0-b5b3a4910d1f)**
Soru Kökü: Kırk yaşında bir hastanın endodontik tedavisi sırasında, seanslar arasında kök kanalına yerleştirilen bir medikamanda sızıntı olmuş ve marjinal gingival dokuda şiddetli bir inflamasyon ve lokal doku nekrozu gözlenmiştir. Bu klinik duruma neden olan ve diş hekimliği uygulamalarında spesifik kimyasal yanık sebebi olarak bilinen ajan aşağıdakilerden hangisidir?
Doğru Şık (D): Paraformaldehit
Açıklama: Endodontik tedavilerde mumyalayıcı/devitalizan olarak kullanılabilen paraformaldehit içerikli patlar, dişi çevreleyen dokulara sızdığında toksik etkileri nedeniyle gingival bağ dokusunda şiddetli inflamasyon ve nekroza (kimyasal yaralanma) yol açarlar.

**Soru 2 (ID: cd48b7a0-7b5e-4854-af26-48d1a4a3d5ab)**
Soru Kökü: Kırk yaşında bir hastanın endodontik tedavisi sırasında, seanslar arasında kök kanalına yerleştirilen bir medikamanda sızıntı olmuş ve marjinal gingival dokuda şiddetli bir inflamasyon ve lokal doku nekrozu gözlenmiştir. Bu klinik duruma neden olan ve diş hekimliği uygulamalarında spesifik kimyasal yanık sebebi olarak bilinen ajan aşağıdakilerden hangisidir?
Doğru Şık (D): Paraformaldehit
Açıklama: Endodontik tedavilerde mumyalayıcı/devitalizan olarak kullanılabilen paraformaldehit içerikli patlar, dişi çevreleyen dokulara sızdığında toksik etkileri nedeniyle gingival bağ dokusunda şiddetli inflamasyon ve nekroza (kimyasal yaralanma) yol açarlar.

---

### ÇİFT 3 (Benzerlik: 1.00)

**Soru 1 (ID: 26b117e1-816a-44a2-bf10-b86ab8448954)**
Soru Kökü: Sert diş fırçası kullanımı veya kuvvetli horizontal fırçalamaya bağlı gelişen fiziksel dişeti travmalarını, nekrotizan gingivitis gibi mikrobiyal doku kayıplarından ayıran en karakteristik klinik muayene bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): İnterdental papil tepelerinin hasar görmemiş olması
Açıklama: Fırça travmasında yaralanma dişeti kenarının birkaç milimetre altında gerçekleşir ve hastanın oral hijyeni genelde çok iyidir; diş kolesinde abrazyon izlenir ancak papil tepeleri korunur. Nekrotizan gingivitiste ise yıkım spesifik olarak interdental papilden başlar ve papil nekrotik, krater formundadır.

**Soru 2 (ID: 7106eae9-7da9-4575-b24b-375b794bb3fc)**
Soru Kökü: Sert diş fırçası kullanımı veya kuvvetli horizontal fırçalamaya bağlı gelişen fiziksel dişeti travmalarını, nekrotizan gingivitis gibi mikrobiyal doku kayıplarından ayıran en karakteristik klinik muayene bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): İnterdental papil tepelerinin hasar görmemiş olması
Açıklama: Fırça travmasında yaralanma dişeti kenarının birkaç milimetre altında gerçekleşir ve hastanın oral hijyeni genelde çok iyidir; diş kolesinde abrazyon izlenir ancak papil tepeleri korunur. Nekrotizan gingivitiste ise yıkım spesifik olarak interdental papilden başlar ve papil nekrotik, krater formundadır.

---

### ÇİFT 4 (Benzerlik: 1.00)

**Soru 1 (ID: 6658ba61-e14e-4bb8-bdc7-9809d09e24c5)**
Soru Kökü: Eritema multiformenin şiddetli varyantları olarak bilinen Stevens Johnson sendromu ve toksik epidermal nekroz (TEN) tablolarının gelişiminde, tetikleyici ana etiyolojik faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Sistemik ilaç kullanımları
Açıklama: Stevens Johnson sendromu ve toksik epidermal nekroz (TEN), genellikle penisilin, sülfonamid veya NSAİ gibi sistemik spesifik ilaçlara karşı oluşan şiddetli sitotoksik (T hücre aracılı) immün yanıt sonucu ortaya çıkan masif mukokutanöz epitel nekrozlarıdır.

**Soru 2 (ID: 79e4d996-3ff6-4193-9f19-3c4870d464e3)**
Soru Kökü: Eritema multiformenin şiddetli varyantları olarak bilinen Stevens Johnson sendromu ve toksik epidermal nekroz (TEN) tablolarının gelişiminde, tetikleyici ana etiyolojik faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Sistemik ilaç kullanımları
Açıklama: Stevens Johnson sendromu ve toksik epidermal nekroz (TEN), genellikle penisilin, sülfonamid veya NSAİ gibi sistemik spesifik ilaçlara karşı oluşan şiddetli sitotoksik (T hücre aracılı) immün yanıt sonucu ortaya çıkan masif mukokutanöz epitel nekrozlarıdır.

---

### ÇİFT 5 (Benzerlik: 1.00)

**Soru 1 (ID: 065a792a-4ac6-470e-a27c-df064cf90b2d)**
Soru Kökü: Ağız mukozasında gelişen kimyasal yaralanmalarla ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Etiyolojilerinde sadece diş hekimliği klinik uygulamalarında kullanılan pat ve solüsyonlar bulunur.
Açıklama: Kimyasal yaralanmalar sadece klinik ortamında (örn. paraformaldehit sızıntısı) değil; hastanın bizzat kullandığı kokain, klorheksidin, asetilsalisilik asit ve diş macunu deterjanları gibi evsel/bireysel temaslar sonucu da sıklıkla meydana gelir.

**Soru 2 (ID: c5bc8a6a-d0f0-4e56-a6a8-180ec988f97f)**
Soru Kökü: Ağız mukozasında gelişen kimyasal yaralanmalarla ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Etiyolojilerinde sadece diş hekimliği klinik uygulamalarında kullanılan pat ve solüsyonlar bulunur.
Açıklama: Kimyasal yaralanmalar sadece klinik ortamında (örn. paraformaldehit sızıntısı) değil; hastanın bizzat kullandığı kokain, klorheksidin, asetilsalisilik asit ve diş macunu deterjanları gibi evsel/bireysel temaslar sonucu da sıklıkla meydana gelir.

---

### ÇİFT 6 (Benzerlik: 1.00)

**Soru 1 (ID: 073af172-0730-498f-a7e9-0dda48b4ed97)**
Soru Kökü: Oral liken planus olgularında en sık karşılaşılan, Wickham çizgileri olarak adlandırılan beyaz papüler ve ağsı lezyonlar, hastalığın ağırlıklı olarak hangi klinik formunda izlenmektedir?
Doğru Şık (A): Retiküler
Açıklama: Wickham çizgileri, oral liken planusun keratotik bir formu olan retiküler tipinde en belirgin şekilde izlenir. Eroziv, atrofik ve ülseratif tiplerde epitel bütünlüğü bozulduğu için daha çok eritem ve ağrılı ülserasyonlar ön plandadır. Retiküler form genelde asemptomatiktir ve dental muayenede tesadüfen saptanır.

**Soru 2 (ID: bc21148b-eb5f-4f01-a8fb-5656a96c4e2c)**
Soru Kökü: Oral liken planus olgularında en sık karşılaşılan, Wickham çizgileri olarak adlandırılan beyaz papüler ve ağsı lezyonlar, hastalığın ağırlıklı olarak hangi klinik formunda izlenmektedir?
Doğru Şık (A): Retiküler
Açıklama: Wickham çizgileri, oral liken planusun keratotik bir formu olan retiküler tipinde en belirgin şekilde izlenir. Eroziv, atrofik ve ülseratif tiplerde epitel bütünlüğü bozulduğu için daha çok eritem ve ağrılı ülserasyonlar ön plandadır. Retiküler form genelde asemptomatiktir ve dental muayenede tesadüfen saptanır.

---

### ÇİFT 7 (Benzerlik: 1.00)

**Soru 1 (ID: 2e040413-2e8d-49dd-b393-b6485142e7b8)**
Soru Kökü: Ağız mukozasından alınan bir biyopsinin mikroskobik incelemesinde; epitel içi büller, yapısal bağlantılarını kaybetmiş serbest epitel hücreleri ve bazal membranda tek sıralı 'mezar taşı' dizilimi gösteren hücreler saptanmıştır. Bu tabloya neden olan primer patofizyolojik olay aşağıdakilerden hangisidir?
Doğru Şık (C): Akantolizis ile desmozom yıkımı
Açıklama: Tarif edilen 'mezar taşı' dizilimi ve Tzanck hücreleri Pemfigus vulgarisin klasik histopatolojisidir. Patofizyolojisinde, otoantikorların desmoglein proteinlerini hedef alarak desmozomları yıkması ve keratinositler arası bağların kopması (akantolizis) yatar.

**Soru 2 (ID: b011a8a0-6dc9-4ed7-97ea-52c077bb6e0a)**
Soru Kökü: Ağız mukozasından alınan bir biyopsinin mikroskobik incelemesinde; epitel içi büller, yapısal bağlantılarını kaybetmiş serbest epitel hücreleri ve bazal membranda tek sıralı 'mezar taşı' dizilimi gösteren hücreler saptanmıştır. Bu tabloya neden olan primer patofizyolojik olay aşağıdakilerden hangisidir?
Doğru Şık (C): Akantolizis ile desmozom yıkımı
Açıklama: Tarif edilen 'mezar taşı' dizilimi ve Tzanck hücreleri Pemfigus vulgarisin klasik histopatolojisidir. Patofizyolojisinde, otoantikorların desmoglein proteinlerini hedef alarak desmozomları yıkması ve keratinositler arası bağların kopması (akantolizis) yatar.

---

### ÇİFT 8 (Benzerlik: 1.00)

**Soru 1 (ID: 2ada0e2d-6b4e-4dbd-b287-a6be21160ef7)**
Soru Kökü: Reaktif, akut ve vezikülobüllöz karakterde bir hastalık olan Eritema multiformenin etiyolojisinde birçok farklı faktör rol oynamaktadır. Aşağıdakilerden hangisi bu hastalığın patogenezini tetikleyen ajan veya durumlardan biri **değildir**?
Doğru Şık (B): Beta bloker ilaçlar
Açıklama: Eritema multiformeyi tetikleyen ana faktörler HSV, COVID-19, sülfonamidler, penisilinler, NSAİ'ler ve antikonvülsanlardır. Beta blokerler bu sendromun spesifik tetikleyicilerinden biri olarak tanımlanmaz.

**Soru 2 (ID: f992d690-260b-43b4-997d-edaa6e78bdcd)**
Soru Kökü: Reaktif, akut ve vezikülobüllöz karakterde bir hastalık olan Eritema multiformenin etiyolojisinde birçok farklı faktör rol oynamaktadır. Aşağıdakilerden hangisi bu hastalığın patogenezini tetikleyen ajan veya durumlardan biri **değildir**?
Doğru Şık (B): Beta bloker ilaçlar
Açıklama: Eritema multiformeyi tetikleyen ana faktörler HSV, COVID-19, sülfonamidler, penisilinler, NSAİ'ler ve antikonvülsanlardır. Beta blokerler bu sendromun spesifik tetikleyicilerinden biri olarak tanımlanmaz.

---

### ÇİFT 9 (Benzerlik: 1.00)

**Soru 1 (ID: 5c449d1e-3366-46cc-ae99-dd46fd9f5c32)**
Soru Kökü: Kadın hastalarda daha sık izlenen ve bazen ilaçlara bağlı tetiklenebilen Lineer IgA hastalığının (LAD) mikroskobik incelemesinde elde edilen histopatolojik doku bulguları, spesifik olarak aşağıdaki oral lezyonların hangisine büyük benzerlik gösterir?
Doğru Şık (C): Eroziv liken planus
Açıklama: LAD'ın mikroskobik doku özellikleri, histopatolojik olarak eroziv liken planusta gözlenen bulgularla büyük ölçüde örtüşür. Retiküler formda epitel bütünlüğü korunduğu için veziküler/eroziv süreçlere benzemezken, eroziv OLP ve LAD mikroskobik olarak ayırt edilmesi zor konfigürasyonlar yaratır.

**Soru 2 (ID: ede5df34-fbf7-44de-b30d-87fff6ef536e)**
Soru Kökü: Kadın hastalarda daha sık izlenen ve bazen ilaçlara bağlı tetiklenebilen Lineer IgA hastalığının (LAD) mikroskobik incelemesinde elde edilen histopatolojik doku bulguları, spesifik olarak aşağıdaki oral lezyonların hangisine büyük benzerlik gösterir?
Doğru Şık (C): Eroziv liken planus
Açıklama: LAD'ın mikroskobik doku özellikleri, histopatolojik olarak eroziv liken planusta gözlenen bulgularla büyük ölçüde örtüşür. Retiküler formda epitel bütünlüğü korunduğu için veziküler/eroziv süreçlere benzemezken, eroziv OLP ve LAD mikroskobik olarak ayırt edilmesi zor konfigürasyonlar yaratır.

---

### ÇİFT 10 (Benzerlik: 1.00)

**Soru 1 (ID: 19b53010-7574-4889-aef3-16bf8d40c085)**
Soru Kökü: Yirmi beş yaşında erkek hasta, dudaklarında kalın sarımsı fibrinöz kabuklanmalar ve ağız içinde geniş ülserlerle kliniğe başvuruyor. Deri muayenesinde kollarında eritematöz bir alan içinde beyaz halka ile çevrili santral bül içeren 'zambak (hedef)' benzeri lezyonlar izleniyor. Bu klinik tabloya yol açan en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Eritema multiforme
Açıklama: Hedef derisi veya zambak görünümlü deri lezyonları ile dudaklarda yaygın hemorajik/fibrinöz kabuklanma eritema multiformenin (EM) en karakteristik klinik belirtisidir. Diğer vezikülobüllöz hastalıklarda (pemfigus/pemfigoid) bu spesifik konsantrik halkalı zambak görünümü izlenmez.

**Soru 2 (ID: d62f88c3-2f09-4137-8aab-f87d845fb082)**
Soru Kökü: Yirmi beş yaşında erkek hasta, dudaklarında kalın sarımsı fibrinöz kabuklanmalar ve ağız içinde geniş ülserlerle kliniğe başvuruyor. Deri muayenesinde kollarında eritematöz bir alan içinde beyaz halka ile çevrili santral bül içeren 'zambak (hedef)' benzeri lezyonlar izleniyor. Bu klinik tabloya yol açan en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Eritema multiforme
Açıklama: Hedef derisi veya zambak görünümlü deri lezyonları ile dudaklarda yaygın hemorajik/fibrinöz kabuklanma eritema multiformenin (EM) en karakteristik klinik belirtisidir. Diğer vezikülobüllöz hastalıklarda (pemfigus/pemfigoid) bu spesifik konsantrik halkalı zambak görünümü izlenmez.

---

### ÇİFT 11 (Benzerlik: 1.00)

**Soru 1 (ID: 02ee3cd6-c625-46df-946c-5d3522c94188)**
Soru Kökü: Hastaların kullandıkları ilaçların lokal veya sistemik uygulamalarına bağlı olarak ağız mukozasında eritem, ülserasyon ve genel mukozit tablosu ile seyreden spesifik alerjik aşırı duyarlılık reaksiyonlarına ne ad verilir?
Doğru Şık (B): Stomatitis medikamentoza
Açıklama: İlaç kaynaklı gelişen oral mukoza hipersensitiviteleri (eritem, ülserasyon, mukozit) genel olarak 'stomatitis medikamentoza' terimiyle ifade edilir. Bu tablo ilacın kesilmesiyle geriler, düzelmezse topikal steroid veya takrolimus kullanılır.

**Soru 2 (ID: ae4dd532-d042-46e2-8f83-d579f8cbb9a8)**
Soru Kökü: Hastaların kullandıkları ilaçların lokal veya sistemik uygulamalarına bağlı olarak ağız mukozasında eritem, ülserasyon ve genel mukozit tablosu ile seyreden spesifik alerjik aşırı duyarlılık reaksiyonlarına ne ad verilir?
Doğru Şık (B): Stomatitis medikamentoza
Açıklama: İlaç kaynaklı gelişen oral mukoza hipersensitiviteleri (eritem, ülserasyon, mukozit) genel olarak 'stomatitis medikamentoza' terimiyle ifade edilir. Bu tablo ilacın kesilmesiyle geriler, düzelmezse topikal steroid veya takrolimus kullanılır.

---

### ÇİFT 12 (Benzerlik: 1.00)

**Soru 1 (ID: 45bcd5fa-ef83-4e1d-b119-d389b0bfccbf)**
Soru Kökü: Oral liken planus vakalarında hastanın lezyonlarının karakterine göre medikal yaklaşım değişir. Özellikle atrofik ve ülseratif tipte olan, şiddetli ağrı şikayeti bulunan ve epitelde kalınlaşma izlenen vakalarda, kortikosteroid tedavisine direnç gösteren sekonder tablonun ana etkeni aşağıdakilerden hangisidir?
Doğru Şık (E): Candida albicans
Açıklama: OLP olgularının (özellikle hiperkeratozlu, atrofik ve eroziv tiplerin) %37'sinde lezyonların zeminine Candida albicans (mantar) enfeksiyonu eklenir. Steroid tedavisi immüniteyi baskıladığından mantar çoğalmasını artırabilir, bu nedenle yanıt vermeyen ağrılı vakalarda antifungal tedavi kombinasyonu hayati öneme sahiptir.

**Soru 2 (ID: 6ebb7b79-e224-47aa-9c92-7cd93792aa99)**
Soru Kökü: Oral liken planus vakalarında hastanın lezyonlarının karakterine göre medikal yaklaşım değişir. Özellikle atrofik ve ülseratif tipte olan, şiddetli ağrı şikayeti bulunan ve epitelde kalınlaşma izlenen vakalarda, kortikosteroid tedavisine direnç gösteren sekonder tablonun ana etkeni aşağıdakilerden hangisidir?
Doğru Şık (E): Candida albicans
Açıklama: OLP olgularının (özellikle hiperkeratozlu, atrofik ve eroziv tiplerin) %37'sinde lezyonların zeminine Candida albicans (mantar) enfeksiyonu eklenir. Steroid tedavisi immüniteyi baskıladığından mantar çoğalmasını artırabilir, bu nedenle yanıt vermeyen ağrılı vakalarda antifungal tedavi kombinasyonu hayati öneme sahiptir.

---

### ÇİFT 13 (Benzerlik: 1.00)

**Soru 1 (ID: 85ac36c1-1829-4e3c-afd6-97bc04f560a9)**
Soru Kökü: Pemfigus vulgaris patogenezinde, hücreler arası bağlantıdan sorumlu desmozomal kaderin proteinlerine karşı Tip 2 aşırı duyarlılık reaksiyonu gelişir. Bu hastalıkta özellikle **ağız içi** lezyonların ortaya çıkmasından sorumlu olan ana otoantikor hedefi aşağıdakilerden hangisidir?
Doğru Şık (C): Desmoglein 3
Açıklama: Pemfigus vulgariste ağız mukozasındaki hücre ayrışmasından sorumlu ana kaderin proteini desmoglein 3'tür. BP1 ve BP2 antijenleri büllöz pemfigoidde bazal membran hedefiyken, desmoglein 1 derideki lezyonların primer hedefidir.

**Soru 2 (ID: b62295cd-c56a-4a0a-8726-3041915c1a61)**
Soru Kökü: Pemfigus vulgaris patogenezinde, hücreler arası bağlantıdan sorumlu desmozomal kaderin proteinlerine karşı Tip 2 aşırı duyarlılık reaksiyonu gelişir. Bu hastalıkta özellikle **ağız içi** lezyonların ortaya çıkmasından sorumlu olan ana otoantikor hedefi aşağıdakilerden hangisidir?
Doğru Şık (C): Desmoglein 3
Açıklama: Pemfigus vulgariste ağız mukozasındaki hücre ayrışmasından sorumlu ana kaderin proteini desmoglein 3'tür. BP1 ve BP2 antijenleri büllöz pemfigoidde bazal membran hedefiyken, desmoglein 1 derideki lezyonların primer hedefidir.

---

### ÇİFT 14 (Benzerlik: 1.00)

**Soru 1 (ID: 467f300c-231b-4247-80d1-cb68f200912b)**
Soru Kökü: Kırk beş yaşında kadın hasta, yanak mukozasında iki taraflı yerleşim gösteren, ağrısız, ağ şeklinde beyaz çizgilenmeler şikayetiyle başvuruyor. Hastanın klinik muayenesinde saptanan bu karakteristik bulgunun, aşağıdaki mukokutanöz hastalıkların hangisinin teşhisinde temel kaynak olması en olasıdır?
Doğru Şık (C): Oral liken planüs
Açıklama: Oral liken planüsün (OLP) en karakteristik klinik görüntüsü ve teşhis kaynağı, genellikle bilateral yerleşim gösteren beyaz Wickham çizgileridir. Pemfigus ve pemfigoid vezikülobüllöz karakterde olup bül rüptürü sonrası erozyonlarla seyrederken, OLP'deki retiküler form semptomsuz keratotik bir ağ yapısı sergiler. Bu spesifik beyaz papül/çizgi konfigürasyonu OLP için patognomoniktir.

**Soru 2 (ID: d6b506f9-6b09-4144-ad8d-09cf96f5d3c4)**
Soru Kökü: Kırk beş yaşında kadın hasta, yanak mukozasında iki taraflı yerleşim gösteren, ağrısız, ağ şeklinde beyaz çizgilenmeler şikayetiyle başvuruyor. Hastanın klinik muayenesinde saptanan bu karakteristik bulgunun, aşağıdaki mukokutanöz hastalıkların hangisinin teşhisinde temel kaynak olması en olasıdır?
Doğru Şık (C): Oral liken planüs
Açıklama: Oral liken planüsün (OLP) en karakteristik klinik görüntüsü ve teşhis kaynağı, genellikle bilateral yerleşim gösteren beyaz Wickham çizgileridir. Pemfigus ve pemfigoid vezikülobüllöz karakterde olup bül rüptürü sonrası erozyonlarla seyrederken, OLP'deki retiküler form semptomsuz keratotik bir ağ yapısı sergiler. Bu spesifik beyaz papül/çizgi konfigürasyonu OLP için patognomoniktir.

---

### ÇİFT 15 (Benzerlik: 1.00)

**Soru 1 (ID: 394361de-98eb-404c-8bb7-601364d76eea)**
Soru Kökü: Sistemik lupus eritematozus (SLE) hastalarının serolojik değerlendirmesinde, vakaların %50'sinden fazlasında DNA antikorlarına eşlik ederek klinik teşhisi destekleyen spesifik antikor aşağıdakilerden hangisidir?
Doğru Şık (E): ENA (Extractable nuclear antigen)
Açıklama: SLE hastalarında antinükleer antikor (ANA) %95 oranında bulunurken, spesifik olarak DNA ve ENA (Extractable nuclear antigen) antikorları vakaların yarısından fazlasında saptanarak tanıyı güçlendirir. Anti-doku transglutaminaz dermatitis herpetiformiste, anti-desmozom ise pemfigusta saptanır.

**Soru 2 (ID: f3ba7d06-6c06-415b-bf5e-3d46be608766)**
Soru Kökü: Sistemik lupus eritematozus (SLE) hastalarının serolojik değerlendirmesinde, vakaların %50'sinden fazlasında DNA antikorlarına eşlik ederek klinik teşhisi destekleyen spesifik antikor aşağıdakilerden hangisidir?
Doğru Şık (E): ENA (Extractable nuclear antigen)
Açıklama: SLE hastalarında antinükleer antikor (ANA) %95 oranında bulunurken, spesifik olarak DNA ve ENA (Extractable nuclear antigen) antikorları vakaların yarısından fazlasında saptanarak tanıyı güçlendirir. Anti-doku transglutaminaz dermatitis herpetiformiste, anti-desmozom ise pemfigusta saptanır.

---

### ÇİFT 16 (Benzerlik: 1.00)

**Soru 1 (ID: 8fe5492f-f88c-4f0b-8697-e02a3919c273)**
Soru Kökü: Pemfigus hastalığının alt tipleri incelendiğinde, epitel dokusundaki ayrılmanın (akantolizis) stratum spinosum yerine daha yüzeyel bir tabaka olan stratum corneum düzeyinde gerçekleştiği, nispeten daha hafif seyirli form aşağıdakilerden hangisidir?
Doğru Şık (D): Pemfigus foliaceus
Açıklama: Pemfigus foliaceusta otoantikorlar sadece cildin üst tabakalarındaki desmoglein-1'e saldırdığı için ayrılma en üstteki stratum corneum tabakasında olur ve hastalık daha hafif seyreder. Pemfigus vulgariste ise ayrılma daha derindeki stratum spinosum tabakasında gerçekleşerek intraepitelyal ağır lezyonlar yaratır.

**Soru 2 (ID: a1fae126-c635-4a5e-83a2-5bea7a5b8e77)**
Soru Kökü: Pemfigus hastalığının alt tipleri incelendiğinde, epitel dokusundaki ayrılmanın (akantolizis) stratum spinosum yerine daha yüzeyel bir tabaka olan stratum corneum düzeyinde gerçekleştiği, nispeten daha hafif seyirli form aşağıdakilerden hangisidir?
Doğru Şık (D): Pemfigus foliaceus
Açıklama: Pemfigus foliaceusta otoantikorlar sadece cildin üst tabakalarındaki desmoglein-1'e saldırdığı için ayrılma en üstteki stratum corneum tabakasında olur ve hastalık daha hafif seyreder. Pemfigus vulgariste ise ayrılma daha derindeki stratum spinosum tabakasında gerçekleşerek intraepitelyal ağır lezyonlar yaratır.

---

### ÇİFT 17 (Benzerlik: 1.00)

**Soru 1 (ID: 402a770b-ae4c-4d9a-a170-c7ea29f1e4b2)**
Soru Kökü: Termal yaralanmalara bağlı gelişen mukozal lezyonların klinik doğrulamasında anamnez büyük önem taşır çünkü lezyonlar vezikülobüllöz hastalıkları taklit edebilir. Sıcak gıda veya içecek tüketimine bağlı gelişen bu tip termal yaralanmalar ağız boşluğunda en sık hangi bölgelerde izlenir?
Doğru Şık (E): Palatinal ve labial mukoza
Açıklama: Ağız mukozasında karşılaşılan termal yanıklar (sıcak yiyecek, mum veya koter yanığı) en sık sert damağın anterior/orta palatinal bölgesi ile yiyeceğin/içeceğin ilk temas ettiği labial (dudak içi) mukozada yerleşir. Koagüle, ağrılı ve soyulmuş bir doku yüzeyi karakteristiktir.

**Soru 2 (ID: 647549dd-0a08-456d-b003-e7b867794a72)**
Soru Kökü: Termal yaralanmalara bağlı gelişen mukozal lezyonların klinik doğrulamasında anamnez büyük önem taşır çünkü lezyonlar vezikülobüllöz hastalıkları taklit edebilir. Sıcak gıda veya içecek tüketimine bağlı gelişen bu tip termal yaralanmalar ağız boşluğunda en sık hangi bölgelerde izlenir?
Doğru Şık (E): Palatinal ve labial mukoza
Açıklama: Ağız mukozasında karşılaşılan termal yanıklar (sıcak yiyecek, mum veya koter yanığı) en sık sert damağın anterior/orta palatinal bölgesi ile yiyeceğin/içeceğin ilk temas ettiği labial (dudak içi) mukozada yerleşir. Koagüle, ağrılı ve soyulmuş bir doku yüzeyi karakteristiktir.

---

### ÇİFT 18 (Benzerlik: 1.00)

**Soru 1 (ID: 0fd49ff0-120f-4ba0-9ab4-807aca92dc9a)**
Soru Kökü: Stomatitis medikamentoza teşhisi konmuş bir hastada, etken olan sistemik ilacın hasta sağlığı açısından kesilmesi veya değiştirilmesi mümkün olmadığında, oral mukozadaki ağrılı lezyonları baskılamak için uygulanması önerilen lokal medikal ajan aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (E): Topikal kortikosteroid veya takrolimus
Açıklama: İlaca bağlı hipersensitivitelerde asıl tedavi etkenin eliminasyonudur. Ancak hastanın genel durumu ilacın kesilmesine izin vermiyorsa, bölgedeki aşırı bağışıklık reaksiyonunu lokal olarak baskılayabilen topikal kortikosteroidler veya takrolimus (immünosüpresan) pomadlar reçete edilir.

**Soru 2 (ID: 396a8789-317c-47c5-bd02-d401ef9ea4eb)**
Soru Kökü: Stomatitis medikamentoza teşhisi konmuş bir hastada, etken olan sistemik ilacın hasta sağlığı açısından kesilmesi veya değiştirilmesi mümkün olmadığında, oral mukozadaki ağrılı lezyonları baskılamak için uygulanması önerilen lokal medikal ajan aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (E): Topikal kortikosteroid veya takrolimus
Açıklama: İlaca bağlı hipersensitivitelerde asıl tedavi etkenin eliminasyonudur. Ancak hastanın genel durumu ilacın kesilmesine izin vermiyorsa, bölgedeki aşırı bağışıklık reaksiyonunu lokal olarak baskılayabilen topikal kortikosteroidler veya takrolimus (immünosüpresan) pomadlar reçete edilir.

---

### ÇİFT 19 (Benzerlik: 1.00)

**Soru 1 (ID: 2c86eb6f-1def-4cfe-a527-a1885323cd1c)**
Soru Kökü: Eritema multiformenin patogenezi ile ilişkili olup, klinik olarak çok daha şiddetli ve yaygın mukokutanöz epitel nekrozu ile karakterize olan iki hastalık formu aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (B): Stevens Johnson sendromu - Toksik epidermal nekroz
Açıklama: Stevens Johnson sendromu ve toksik epidermal nekroz (TEN), eritema multiformenin (EM) en şiddetli ve hayati tehlike yaratan formlarıdır. Genellikle ilaç reaksiyonları (sülfonamid, NSAİ vb.) ile tetiklenirler ve damar duvarlarında lökositoklastik hasar sonucu masif iskemik nekrozlara yol açarlar.

**Soru 2 (ID: 30fabb0b-dd56-4905-be86-68b6929bfc9d)**
Soru Kökü: Eritema multiformenin patogenezi ile ilişkili olup, klinik olarak çok daha şiddetli ve yaygın mukokutanöz epitel nekrozu ile karakterize olan iki hastalık formu aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (B): Stevens Johnson sendromu - Toksik epidermal nekroz
Açıklama: Stevens Johnson sendromu ve toksik epidermal nekroz (TEN), eritema multiformenin (EM) en şiddetli ve hayati tehlike yaratan formlarıdır. Genellikle ilaç reaksiyonları (sülfonamid, NSAİ vb.) ile tetiklenirler ve damar duvarlarında lökositoklastik hasar sonucu masif iskemik nekrozlara yol açarlar.

---

### ÇİFT 20 (Benzerlik: 1.00)

**Soru 1 (ID: a7d3efb2-ef0c-48a2-b760-33a6798d1feb)**
Soru Kökü: Pemfigus vulgaris hastalığında Tzanck hücrelerinin oluşumuna neden olan epitel içi ayrılma, epitelin hangi spesifik histolojik katmanında gerçekleşmektedir?
Doğru Şık (C): Stratum spinosum
Açıklama: Pemfigus vulgariste hedef alınan desmoglein 3 proteini, skuamöz epitelin stratum spinosum tabakasında yoğun olarak bulunur. Ayrılma bu tabakada gerçekleşir, altta kalan bazal tabaka hücreleri 'mezar taşı' görünümüyle bağ dokusuna yapışık kalır.

**Soru 2 (ID: f0863f2b-c2ba-4085-ab63-4d8233f67159)**
Soru Kökü: Pemfigus vulgaris hastalığında Tzanck hücrelerinin oluşumuna neden olan epitel içi ayrılma, epitelin hangi spesifik histolojik katmanında gerçekleşmektedir?
Doğru Şık (C): Stratum spinosum
Açıklama: Pemfigus vulgariste hedef alınan desmoglein 3 proteini, skuamöz epitelin stratum spinosum tabakasında yoğun olarak bulunur. Ayrılma bu tabakada gerçekleşir, altta kalan bazal tabaka hücreleri 'mezar taşı' görünümüyle bağ dokusuna yapışık kalır.

---

### ÇİFT 21 (Benzerlik: 1.00)

**Soru 1 (ID: 0f12f0f2-fa31-4a52-9cb3-f90ac6487361)**
Soru Kökü: Yirmi iki yaşında erkek hasta, kliniğe sağ alt çenesindeki şiddetli bir ağrı ve ilgili dişin vestibül mukozasında beyaz, yüzeyi kolay soyulan, ağrılı bir nekroz alanıyla başvuruyor. Hastanın anamnezinden ağrısını hafifletmek amacıyla evde bir analjezik tableti doğrudan dişeti üzerine yerleştirdiği anlaşılıyor. Bu spesifik kimyasal yanık tablosunun etkeni aşağıdakilerden hangisidir?
Doğru Şık (C): Asetilsalisilik asit
Açıklama: Ağrıyan dişin üzerine topikal olarak ağrı kesici (aspirin) yerleştirilmesi diş hekimliğinde çok sık karşılaşılan 'asetilsalisilik asit yanığı' tablosudur. Asidik yapısı nedeniyle epitelde kimyasal koagülasyon nekrozu oluşturarak beyaz, kolay soyulan ağrılı bir doku yanıtı oluşturur.

**Soru 2 (ID: 6c69405c-ef61-45fb-a382-0dbdec673318)**
Soru Kökü: Yirmi iki yaşında erkek hasta, kliniğe sağ alt çenesindeki şiddetli bir ağrı ve ilgili dişin vestibül mukozasında beyaz, yüzeyi kolay soyulan, ağrılı bir nekroz alanıyla başvuruyor. Hastanın anamnezinden ağrısını hafifletmek amacıyla evde bir analjezik tableti doğrudan dişeti üzerine yerleştirdiği anlaşılıyor. Bu spesifik kimyasal yanık tablosunun etkeni aşağıdakilerden hangisidir?
Doğru Şık (C): Asetilsalisilik asit
Açıklama: Ağrıyan dişin üzerine topikal olarak ağrı kesici (aspirin) yerleştirilmesi diş hekimliğinde çok sık karşılaşılan 'asetilsalisilik asit yanığı' tablosudur. Asidik yapısı nedeniyle epitelde kimyasal koagülasyon nekrozu oluşturarak beyaz, kolay soyulan ağrılı bir doku yanıtı oluşturur.

---

### ÇİFT 22 (Benzerlik: 1.00)

**Soru 1 (ID: 0ca98d5c-682e-45a7-930e-aee3e1538a90)**
Soru Kökü: Otuz beş yaşında kadın hasta, 15 gün önce alt posterior dişlerine uygulanan amalgam restorasyonlar sonrası komşu yanak mukozasında kırmızı/beyaz renkte, yer yer ülsere lezyonlar şikayetiyle başvurmuştur. Civa alerjisine bağlı dental restoratif materyal hipersensitivitesi tanısı alan bu hastadaki lezyonların, klinikte en çok hangi hastalıklarla karıştırılması olasıdır?
Doğru Şık (E): Oral liken planus ve Lökoplaki
Açıklama: Civa, nikel veya akrilik gibi dental restoratif materyallere bağlı gelişen temas alerjileri mukozada kırmızı, beyaz ve ülsere formlar yaratır. Bu 'likenoid reaksiyon' adı da verilen tablo klinik görüntü olarak en çok oral liken planüs ve lökoplakiye benzer.

**Soru 2 (ID: df9632a4-5a8b-4919-9d7a-bb7346baa5ea)**
Soru Kökü: Otuz beş yaşında kadın hasta, 15 gün önce alt posterior dişlerine uygulanan amalgam restorasyonlar sonrası komşu yanak mukozasında kırmızı/beyaz renkte, yer yer ülsere lezyonlar şikayetiyle başvurmuştur. Civa alerjisine bağlı dental restoratif materyal hipersensitivitesi tanısı alan bu hastadaki lezyonların, klinikte en çok hangi hastalıklarla karıştırılması olasıdır?
Doğru Şık (E): Oral liken planus ve Lökoplaki
Açıklama: Civa, nikel veya akrilik gibi dental restoratif materyallere bağlı gelişen temas alerjileri mukozada kırmızı, beyaz ve ülsere formlar yaratır. Bu 'likenoid reaksiyon' adı da verilen tablo klinik görüntü olarak en çok oral liken planüs ve lökoplakiye benzer.

---

### ÇİFT 23 (Benzerlik: 1.00)

**Soru 1 (ID: 3b0c9c3e-6a18-4241-bd39-b548cbb8f326)**
Soru Kökü: Pemfigus vulgaris tablosunda mukoza lezyonlarına ek olarak deride de yaygın büller izlenmektedir. Bu tablonun deri komponentini oluşturan ve keratinositler arası tutunmayı engelleyen otoantikorlar primer olarak hangi molekülü hedefler?
Doğru Şık (A): Desmoglein 1
Açıklama: Pemfigus vulgariste deri bulgularının gelişiminden sorumlu ana antijenik hedef desmoglein 1'dir. Ağızda desmoglein 3 hedef alınırken, antikorların her iki proteine de reaksiyon göstermesi mukokutanöz yaygın yıkım tablosunu oluşturur.

**Soru 2 (ID: 8e5f25dc-ca24-4d82-a796-8b3eb1409c3a)**
Soru Kökü: Pemfigus vulgaris tablosunda mukoza lezyonlarına ek olarak deride de yaygın büller izlenmektedir. Bu tablonun deri komponentini oluşturan ve keratinositler arası tutunmayı engelleyen otoantikorlar primer olarak hangi molekülü hedefler?
Doğru Şık (A): Desmoglein 1
Açıklama: Pemfigus vulgariste deri bulgularının gelişiminden sorumlu ana antijenik hedef desmoglein 1'dir. Ağızda desmoglein 3 hedef alınırken, antikorların her iki proteine de reaksiyon göstermesi mukokutanöz yaygın yıkım tablosunu oluşturur.

---

### ÇİFT 24 (Benzerlik: 1.00)

**Soru 1 (ID: ebad8a9a-f28b-427d-91b5-beebce5ce55d)**
Soru Kökü: Oral liken planus hastalarından alınan biyopsilerin histopatolojik incelemesinde, epitel ve bağ dokusunun birleşiminde izlenen spesifik eozinofilik yapıların (Civatte cisimcikleri) biyolojik kökeni aşağıdakilerden hangisidir?
Doğru Şık (A): Apoptoz geçiren keratinositler
Açıklama: Liken planusun karakteristik histolojik bulgusu olan Civatte cisimcikleri, T-hücre aracılı sitotoksik saldırı nedeniyle bazal tabakada hidropik dejenerasyona uğrayarak apoptoz geçiren keratinositlerin kalıntılarıdır.

**Soru 2 (ID: f836da24-abe1-4371-b340-61627b305275)**
Soru Kökü: Oral liken planus hastalarından alınan biyopsilerin histopatolojik incelemesinde, epitel ve bağ dokusunun birleşiminde izlenen spesifik eozinofilik yapıların (Civatte cisimcikleri) biyolojik kökeni aşağıdakilerden hangisidir?
Doğru Şık (A): Apoptoz geçiren keratinositler
Açıklama: Liken planusun karakteristik histolojik bulgusu olan Civatte cisimcikleri, T-hücre aracılı sitotoksik saldırı nedeniyle bazal tabakada hidropik dejenerasyona uğrayarak apoptoz geçiren keratinositlerin kalıntılarıdır.

---

### ÇİFT 25 (Benzerlik: 1.00)

**Soru 1 (ID: 39f01922-9f2a-4179-aa45-e66d913d3a05)**
Soru Kökü: Dişeti dokusunda meydana gelen fiziksel yaralanmalar sonucu ortaya çıkabilen yüzeyel deskuamasyon ve ülseratif doku lezyonlarının, spesifik periodontal hastalıklarla ayırıcı tanısının yapılması şarttır. Bu bağlamda fırça travmalarına bağlı oluşan lezyonlar klinik özellikleri gereği en sık hangi dişeti hastalığı ile karıştırılarak ayırıcı tanı gerektirir?
Doğru Şık (D): Nekrotizan gingivitis
Açıklama: Sert fırçalamanın neden olduğu ülserasyonlar ve marjinal yırtılmalar, akut doku yıkımı ve nekroz görünümü verebildiğinden doğrudan nekrotizan gingivitis (NUG/NUP) ile ayırıcı tanıya girer. Papil tepelerinin sağlam olması travmayı gösteren en büyük kanıttır.

**Soru 2 (ID: 4811adbe-e1f2-446f-a672-20e622d7c1bf)**
Soru Kökü: Dişeti dokusunda meydana gelen fiziksel yaralanmalar sonucu ortaya çıkabilen yüzeyel deskuamasyon ve ülseratif doku lezyonlarının, spesifik periodontal hastalıklarla ayırıcı tanısının yapılması şarttır. Bu bağlamda fırça travmalarına bağlı oluşan lezyonlar klinik özellikleri gereği en sık hangi dişeti hastalığı ile karıştırılarak ayırıcı tanı gerektirir?
Doğru Şık (D): Nekrotizan gingivitis
Açıklama: Sert fırçalamanın neden olduğu ülserasyonlar ve marjinal yırtılmalar, akut doku yıkımı ve nekroz görünümü verebildiğinden doğrudan nekrotizan gingivitis (NUG/NUP) ile ayırıcı tanıya girer. Papil tepelerinin sağlam olması travmayı gösteren en büyük kanıttır.

---

### ÇİFT 26 (Benzerlik: 1.00)

**Soru 1 (ID: 35331ff6-465d-4421-bd2b-dbc2d4946c79)**
Soru Kökü: Pemfigus hastalığı ve alt tiplerinin klinik ve histopatolojik özellikleriyle ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Pemfigus foliaceusta otoimmün yıkıma bağlı bül oluşumu subepitelyal düzeyde gerçekleşir.
Açıklama: Tüm pemfigus tiplerinde bül oluşumu intraepitelyaldir; Pemfigus foliaceusta bu ayrılma spesifik olarak epitelin en üst tabakası olan stratum corneumda gerçekleşir. Subepitelyal ayrılma (epitelin bağ dokusundan bazal membran düzeyinde tamamen kalkması) pemfigoid grubunun (sikatrisyel ve büllöz pemfigoid) karakteristik özelliğidir.

**Soru 2 (ID: 79722cb5-dd0c-4953-9d0f-bbfdb6be68bb)**
Soru Kökü: Pemfigus hastalığı ve alt tiplerinin klinik ve histopatolojik özellikleriyle ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Pemfigus foliaceusta otoimmün yıkıma bağlı bül oluşumu subepitelyal düzeyde gerçekleşir.
Açıklama: Tüm pemfigus tiplerinde bül oluşumu intraepitelyaldir; Pemfigus foliaceusta bu ayrılma spesifik olarak epitelin en üst tabakası olan stratum corneumda gerçekleşir. Subepitelyal ayrılma (epitelin bağ dokusundan bazal membran düzeyinde tamamen kalkması) pemfigoid grubunun (sikatrisyel ve büllöz pemfigoid) karakteristik özelliğidir.

---

### ÇİFT 27 (Benzerlik: 1.00)

**Soru 1 (ID: 3abbabec-24b6-45db-8a07-f645686a3e7a)**
Soru Kökü: Sistemik lupus eritematozus (SLE) hastalarının mukozal veya kutanöz dokularından alınan biyopsilerin direkt immünofloresan incelenmesinde 'Lupus bant testi' pozitif olarak değerlendirilmektedir. Bu testi pozitif yapan spesifik immünopatolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (D): Bazal membranda IgG, C3 ve IgM birikimi
Açıklama: Lupus bant testi, lezyon olan veya olmayan deri ve mukozaların immünofloresan incelemesinde bazal membran bölgesinde granüler bant tarzında IgG, C3 ve IgM moleküllerinin birikiminin gösterilmesidir.

**Soru 2 (ID: 64470ffe-3f74-4f9f-baa8-5784a0a1c5cc)**
Soru Kökü: Sistemik lupus eritematozus (SLE) hastalarının mukozal veya kutanöz dokularından alınan biyopsilerin direkt immünofloresan incelenmesinde 'Lupus bant testi' pozitif olarak değerlendirilmektedir. Bu testi pozitif yapan spesifik immünopatolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (D): Bazal membranda IgG, C3 ve IgM birikimi
Açıklama: Lupus bant testi, lezyon olan veya olmayan deri ve mukozaların immünofloresan incelemesinde bazal membran bölgesinde granüler bant tarzında IgG, C3 ve IgM moleküllerinin birikiminin gösterilmesidir.

---

### ÇİFT 28 (Benzerlik: 1.00)

**Soru 1 (ID: 1ce3cde6-9d8b-4ea2-af13-4b535f14ca1b)**
Soru Kökü: Klinik muayenede yapışık dişetinde yaygın eritem tablosu saptanan bir hastanın anamnezinde, yoğun pirofosfat ve aromasını baskılamak için tarçın içeren diş macunu kullanımı belirlenmiştir. Alerjik etyolojiye dayanan bu tablonun spesifik adı aşağıdakilerden hangisidir?
Doğru Şık (D): Plazma hücreli gingivitis
Açıklama: Tarçın aromaları ve pirofosfat içeren diş macunlarının reaksiyonu, yapışık dişetinde eritemli, klinik olarak spesifik bir histolojik doku infiltrasyonuna neden olan 'plazma hücreli gingivitis'e yol açar. Bu ajanların kullanımı kesildiğinde dişeti normal mercan pembesi rengine döner.

**Soru 2 (ID: b0d4b692-e594-499e-b366-5d61360688c6)**
Soru Kökü: Klinik muayenede yapışık dişetinde yaygın eritem tablosu saptanan bir hastanın anamnezinde, yoğun pirofosfat ve aromasını baskılamak için tarçın içeren diş macunu kullanımı belirlenmiştir. Alerjik etyolojiye dayanan bu tablonun spesifik adı aşağıdakilerden hangisidir?
Doğru Şık (D): Plazma hücreli gingivitis
Açıklama: Tarçın aromaları ve pirofosfat içeren diş macunlarının reaksiyonu, yapışık dişetinde eritemli, klinik olarak spesifik bir histolojik doku infiltrasyonuna neden olan 'plazma hücreli gingivitis'e yol açar. Bu ajanların kullanımı kesildiğinde dişeti normal mercan pembesi rengine döner.

---

### ÇİFT 29 (Benzerlik: 1.00)

**Soru 1 (ID: 1b8d65ed-2cf8-4760-bbd8-4ceb730d5d99)**
Soru Kökü: Oral mukozada karşılaşılan kimyasal yaralanmalar değerlendirildiğinde, hekim kontrolü dışında uzun süreli veya yoğun kullanılması durumunda spesifik olarak mukozal deskuamasyon (soyulma) tablosu yarattığı bilinen topikal ajan aşağıdakilerden hangisidir?
Doğru Şık (A): Klorheksidin
Açıklama: Klorheksidin bazlı gargaralar antiseptik amaçla yaygın kullanılsa da, yoğun ve uygunsuz kullanımı toksik etki yaratarak mukozal deskuamasyona (yüzeyel soyulmaya) sebep olur. Bu durum asetilsalisilik asit yanığı gibi bir kimyasal yaralanma formudur.

**Soru 2 (ID: bf12c5cd-b7f3-40b4-9980-bac09ce80ae9)**
Soru Kökü: Oral mukozada karşılaşılan kimyasal yaralanmalar değerlendirildiğinde, hekim kontrolü dışında uzun süreli veya yoğun kullanılması durumunda spesifik olarak mukozal deskuamasyon (soyulma) tablosu yarattığı bilinen topikal ajan aşağıdakilerden hangisidir?
Doğru Şık (A): Klorheksidin
Açıklama: Klorheksidin bazlı gargaralar antiseptik amaçla yaygın kullanılsa da, yoğun ve uygunsuz kullanımı toksik etki yaratarak mukozal deskuamasyona (yüzeyel soyulmaya) sebep olur. Bu durum asetilsalisilik asit yanığı gibi bir kimyasal yaralanma formudur.

---

### ÇİFT 30 (Benzerlik: 1.00)

**Soru 1 (ID: 8f69e4a5-4e4d-4ebe-9de3-8813bc7599d9)**
Soru Kökü: Lineer IgA hastalığı (LAD) ile ilgili klinik özellikler değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (A): Klinik insidansı erkeklerde kadınlara oranla belirgin düzeyde daha yüksektir.
Açıklama: Lineer IgA dermatozu (LAD), erkekleri değil ağırlıklı olarak kadınları daha çok tutan nadir bir mukokutanöz bozukluktur. Hastalığın diğer tüm seçeneklerde belirtilen ilaç etkileşimi ve deskuamatif klinik seyri kaynak metinle birebir uyumludur.

**Soru 2 (ID: 9fa933ad-6779-44aa-a7eb-10c997da5280)**
Soru Kökü: Lineer IgA hastalığı (LAD) ile ilgili klinik özellikler değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (A): Klinik insidansı erkeklerde kadınlara oranla belirgin düzeyde daha yüksektir.
Açıklama: Lineer IgA dermatozu (LAD), erkekleri değil ağırlıklı olarak kadınları daha çok tutan nadir bir mukokutanöz bozukluktur. Hastalığın diğer tüm seçeneklerde belirtilen ilaç etkileşimi ve deskuamatif klinik seyri kaynak metinle birebir uyumludur.

---

### ÇİFT 31 (Benzerlik: 0.86)

**Soru 1 (ID: c2b4be82-3ab3-4b6f-8432-390fdf9eb242)**
Soru Kökü: Plağa bağlı gingivitis gelişiminin ilk klinik belirtisi olan sondlamada kanamanın temel hücresel ve dokusal mekanizması aşağıdakilerden hangisidir?
Doğru Şık (B): Kapillerlerde dilatasyon ve dolgunluk ile sulkus epitelinin incelmesi ve ülserasyonu
Açıklama: Gingival kanamanın temel nedeni, enflamasyon sürecinde kapiller damarlarda meydana gelen dilatasyon ve dolgunluk ile koruyucu sulkus epitelinin incelerek ülsere olmasıdır. Distraktör olan bağ dokusu fibrozisi, kanamayı artırmak yerine dokuyu daha sert hale getirerek kanamayı maskeler ve kronik yapıcı (fibrotik) yanıtta görülür. İncelen ve koruyucu özelliğini kaybeden epitelden dış uyaranlar kolayca geçerek dilate kapillerleri rüptüre eder.

**Soru 2 (ID: c5184b1b-5a56-44ee-889d-d9b5ed56a656)**
Soru Kökü: Gingival inflamasyonun ilk klinik belirtisi olan sondlamada kanamanın hücresel ve dokusal düzeydeki primer mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Sulkus epitelinin incelmesi ve ülserasyonu
Açıklama: Gingival kanamanın mikroskobik temeli, enflamasyona bağlı olarak kapillerlerde dilatasyon/dolgunluk oluşması ile birlikte sulkus epitelinin incelmesi ve mikroskobik ülserasyonudur. İncelen ve koruyuculuğunu yitiren epitel yüzeyine temas eden periodontal sonda, genişlemiş kapillerlerin kolayca rüptüre olmasına ve kanamaya neden olur. Birleşim epitelinin apikale göçü ise gingivitisin değil, ataşman kaybı ile karakterize periodontitisin hücresel bulgusudur.

---

### ÇİFT 32 (Benzerlik: 0.80)

**Soru 1 (ID: a308c6fe-8b22-4b1d-af05-fdf962e0c9a9)**
Soru Kökü: Sistemik olarak emilen ağır metallerin dişeti renklenmesi oluşturmasındaki temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Metalik sülfidlerin subepitelyal bağ dokusunda çökelmesi
Açıklama: Sistemik olarak absorbe edilen ağır metaller (bizmut, kurşun vb.), artan kan akımına bağlı olarak inflamasyonlu dokulara taşınır ve subepitelyal bağ dokusunda metalik sülfidler halinde çökelerek mavi/siyah renklenmeler oluşturur. Melanin birikimi fizyolojik bir pigmentasyon olup, ağır metal toksikokinetiğiyle ilgisi olmadığından en güçlü distraktör elenir. Bu renklenmeler sistemik toksisite sonucu değil, lokal inflamasyon alanlarındaki vasküler artışla tetiklenir.

**Soru 2 (ID: c6fbd437-df01-41dd-b41f-cc76ebb40fbb)**
Soru Kökü: Sistemik olarak emilen bismut, cıva veya arsenik gibi ağır metallere bağlı gelişen metalik pigmentasyonlar, ağız mukozasının her yerinde eşit dağılmaz; sıklıkla marjinal dişetinde ve inflamasyonlu alanlarda sınırlandırılmış koyu renkli çizgiler şeklinde izlenir.
Bu renklenmenin **sadece inflamasyon olan bölgelerde** lokalize olmasının temel fizyopatolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Artan kan akımına bağlı olarak metallerin doku içine taşınması
Açıklama: Sistemik dolaşıma katılan ağır metaller, dişeti inflamasyonunun yarattığı artmış lokal kapiller permeabilite ve yoğunlaşan kan akımı sayesinde gingival bağ dokusuna taşınırlar ve burada metalik sülfid formunda subepitelyal çökelirler. Bu reaksiyon sistemik toksisitenin değil, dokudaki mevcut gingivitisin (artan kan debisi) fiziksel bir yan sonucudur. Melanosit aktivitesi fizyolojik melanin pigmentasyonunu açıklar, ağır metal sülfid çökellerini değil.

---

### ÇİFT 33 (Benzerlik: 0.80)

**Soru 1 (ID: 15d93677-670a-4acc-a009-271c86becb7d)**
Soru Kökü: 38 yaşında kadın hasta, diş fırçalarken kanama ve dişetlerinde şişlik şikayeti ile kliniğe başvuruyor. Yapılan intraoral muayenede dişeti kenarlarında kırmızımsı mavi renk değişikliği, marjinal dişetinde yumuşak kıvam ve presel ile üzerine basıldığında çukurlaşma (pitting) bulgusu saptanıyor.
Bu hastanın dişetinde gözlenen yumuşak kıvam ve çukurlaşmanın temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (E): Belirgin gingival eksuda ve ödem
Açıklama: Gingivitis gelişiminde dokunun sıkı ve rezilient kıvamı bozulur, yerine belirgin şekilde artan gingival eksuda ve ödemin yarattığı yumuşak, çukurlaşan bir doku karakteri gelir. Fibrotik yapım kronik inflamasyonun ileriki evrelerinde dokuyu daha sert ve nodüler hale getirirken, ödem fazında sıvı toplanması direkt olarak 'pitting' bulgusuna yol açar. Keratinizasyon artışı ise dokuyu soluk renkli ve sert hale getiren savunma odaklı bir hücresel tepkidir.

**Soru 2 (ID: 2ac49cab-b418-41b2-a6d7-d39fb006e252)**
Soru Kökü: 28 yaşında erkek hasta, dişetlerinde büyüme, fırçalarken kanama ve pürtüklü yapının kaybolduğu şikayeti ile başvuruyor. Muayenede yapışık ve marjinal dişetlerinin kırmızı-mavi tonda, son derece yumuşak ve ödemli olduğu izleniyor.
Bu hastada gözlenen stippling (portakal kabuğu) kaybı ve dokudaki çukurlaşan (pitting) ödem tablosunun birincil hücresel kaynağı aşağıdakilerden hangisidir?
Doğru Şık (B): Subepitelyal bağ dokusunda artan gingival eksuda ve kapiller dilatasyon
Açıklama: Sağlıklı dokudaki pürtüklü yüzey (stippling) bağ dokusunun epiteli içeriye doğru çektiği subpapiller bağlantıların bir sonucudur. Gingival inflamasyon ilerledikçe epitelin altındaki bağ dokusu alanında belirgin kapiller dilatasyon gelişir ve yoğun gingival eksuda (ödem sıvısı) toplanır, bu sıvı birikimi epitelin gerilmesine ve pürtüklü yapının maskelenerek düz, parlak, yumuşak bir hal almasına yol açar. Stratum corneum deskuamasyonu yüzeyin soyulmasına neden olur ancak pitting ödem ve kontur bozulmasının fiziksel nedeni bağ dokusundaki sıvıdır.

---

### ÇİFT 34 (Benzerlik: 0.79)

**Soru 1 (ID: 4d4429c6-93d8-4ccc-bc5f-f467b72fe4d9)**
Soru Kökü: Müköz Membran Pemfigoidi (Benign Müköz Membran Pemfigoidi) ile ilgili olarak aşağıdaki özelliklerden hangisi **yanlıştır**?
Doğru Şık (A): Veziküller karakteristik olarak stratum spinosum tabakasındaki intraepitelyal ayrılma sonucu gelişir.
Açıklama: Müköz Membran Pemfigoidi'nde otoantikorlar bazal membran bölgesindeki hemidesmozomlara saldırdığı için ayrılma epitelyum ile bağ dokusu arasında (subepitelyal) gerçekleşir; intraepitelyal ayrılma ise Pemfigus Vulgaris'in temel özelliğidir. Bu subepitelyal ayrılma desmozomların sağlam kalmasını sağlar, bu nedenle pemfigoide kıyasla daha dirençli ve parçalanmamış büller görülür. Lineer IgG birikimi ve semblefaron riski hastalığın diğer kritik belirteçleridir.

**Soru 2 (ID: 79722cb5-dd0c-4953-9d0f-bbfdb6be68bb)**
Soru Kökü: Pemfigus hastalığı ve alt tiplerinin klinik ve histopatolojik özellikleriyle ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Pemfigus foliaceusta otoimmün yıkıma bağlı bül oluşumu subepitelyal düzeyde gerçekleşir.
Açıklama: Tüm pemfigus tiplerinde bül oluşumu intraepitelyaldir; Pemfigus foliaceusta bu ayrılma spesifik olarak epitelin en üst tabakası olan stratum corneumda gerçekleşir. Subepitelyal ayrılma (epitelin bağ dokusundan bazal membran düzeyinde tamamen kalkması) pemfigoid grubunun (sikatrisyel ve büllöz pemfigoid) karakteristik özelliğidir.

---

### ÇİFT 35 (Benzerlik: 0.79)

**Soru 1 (ID: 35331ff6-465d-4421-bd2b-dbc2d4946c79)**
Soru Kökü: Pemfigus hastalığı ve alt tiplerinin klinik ve histopatolojik özellikleriyle ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Pemfigus foliaceusta otoimmün yıkıma bağlı bül oluşumu subepitelyal düzeyde gerçekleşir.
Açıklama: Tüm pemfigus tiplerinde bül oluşumu intraepitelyaldir; Pemfigus foliaceusta bu ayrılma spesifik olarak epitelin en üst tabakası olan stratum corneumda gerçekleşir. Subepitelyal ayrılma (epitelin bağ dokusundan bazal membran düzeyinde tamamen kalkması) pemfigoid grubunun (sikatrisyel ve büllöz pemfigoid) karakteristik özelliğidir.

**Soru 2 (ID: 4d4429c6-93d8-4ccc-bc5f-f467b72fe4d9)**
Soru Kökü: Müköz Membran Pemfigoidi (Benign Müköz Membran Pemfigoidi) ile ilgili olarak aşağıdaki özelliklerden hangisi **yanlıştır**?
Doğru Şık (A): Veziküller karakteristik olarak stratum spinosum tabakasındaki intraepitelyal ayrılma sonucu gelişir.
Açıklama: Müköz Membran Pemfigoidi'nde otoantikorlar bazal membran bölgesindeki hemidesmozomlara saldırdığı için ayrılma epitelyum ile bağ dokusu arasında (subepitelyal) gerçekleşir; intraepitelyal ayrılma ise Pemfigus Vulgaris'in temel özelliğidir. Bu subepitelyal ayrılma desmozomların sağlam kalmasını sağlar, bu nedenle pemfigoide kıyasla daha dirençli ve parçalanmamış büller görülür. Lineer IgG birikimi ve semblefaron riski hastalığın diğer kritik belirteçleridir.

---

### ÇİFT 36 (Benzerlik: 0.78)

**Soru 1 (ID: 3b0c9c3e-6a18-4241-bd39-b548cbb8f326)**
Soru Kökü: Pemfigus vulgaris tablosunda mukoza lezyonlarına ek olarak deride de yaygın büller izlenmektedir. Bu tablonun deri komponentini oluşturan ve keratinositler arası tutunmayı engelleyen otoantikorlar primer olarak hangi molekülü hedefler?
Doğru Şık (A): Desmoglein 1
Açıklama: Pemfigus vulgariste deri bulgularının gelişiminden sorumlu ana antijenik hedef desmoglein 1'dir. Ağızda desmoglein 3 hedef alınırken, antikorların her iki proteine de reaksiyon göstermesi mukokutanöz yaygın yıkım tablosunu oluşturur.

**Soru 2 (ID: 85ac36c1-1829-4e3c-afd6-97bc04f560a9)**
Soru Kökü: Pemfigus vulgaris patogenezinde, hücreler arası bağlantıdan sorumlu desmozomal kaderin proteinlerine karşı Tip 2 aşırı duyarlılık reaksiyonu gelişir. Bu hastalıkta özellikle **ağız içi** lezyonların ortaya çıkmasından sorumlu olan ana otoantikor hedefi aşağıdakilerden hangisidir?
Doğru Şık (C): Desmoglein 3
Açıklama: Pemfigus vulgariste ağız mukozasındaki hücre ayrışmasından sorumlu ana kaderin proteini desmoglein 3'tür. BP1 ve BP2 antijenleri büllöz pemfigoidde bazal membran hedefiyken, desmoglein 1 derideki lezyonların primer hedefidir.

---

### ÇİFT 37 (Benzerlik: 0.78)

**Soru 1 (ID: 3b0c9c3e-6a18-4241-bd39-b548cbb8f326)**
Soru Kökü: Pemfigus vulgaris tablosunda mukoza lezyonlarına ek olarak deride de yaygın büller izlenmektedir. Bu tablonun deri komponentini oluşturan ve keratinositler arası tutunmayı engelleyen otoantikorlar primer olarak hangi molekülü hedefler?
Doğru Şık (A): Desmoglein 1
Açıklama: Pemfigus vulgariste deri bulgularının gelişiminden sorumlu ana antijenik hedef desmoglein 1'dir. Ağızda desmoglein 3 hedef alınırken, antikorların her iki proteine de reaksiyon göstermesi mukokutanöz yaygın yıkım tablosunu oluşturur.

**Soru 2 (ID: b62295cd-c56a-4a0a-8726-3041915c1a61)**
Soru Kökü: Pemfigus vulgaris patogenezinde, hücreler arası bağlantıdan sorumlu desmozomal kaderin proteinlerine karşı Tip 2 aşırı duyarlılık reaksiyonu gelişir. Bu hastalıkta özellikle **ağız içi** lezyonların ortaya çıkmasından sorumlu olan ana otoantikor hedefi aşağıdakilerden hangisidir?
Doğru Şık (C): Desmoglein 3
Açıklama: Pemfigus vulgariste ağız mukozasındaki hücre ayrışmasından sorumlu ana kaderin proteini desmoglein 3'tür. BP1 ve BP2 antijenleri büllöz pemfigoidde bazal membran hedefiyken, desmoglein 1 derideki lezyonların primer hedefidir.

---

### ÇİFT 38 (Benzerlik: 0.78)

**Soru 1 (ID: 8e5f25dc-ca24-4d82-a796-8b3eb1409c3a)**
Soru Kökü: Pemfigus vulgaris tablosunda mukoza lezyonlarına ek olarak deride de yaygın büller izlenmektedir. Bu tablonun deri komponentini oluşturan ve keratinositler arası tutunmayı engelleyen otoantikorlar primer olarak hangi molekülü hedefler?
Doğru Şık (A): Desmoglein 1
Açıklama: Pemfigus vulgariste deri bulgularının gelişiminden sorumlu ana antijenik hedef desmoglein 1'dir. Ağızda desmoglein 3 hedef alınırken, antikorların her iki proteine de reaksiyon göstermesi mukokutanöz yaygın yıkım tablosunu oluşturur.

**Soru 2 (ID: b62295cd-c56a-4a0a-8726-3041915c1a61)**
Soru Kökü: Pemfigus vulgaris patogenezinde, hücreler arası bağlantıdan sorumlu desmozomal kaderin proteinlerine karşı Tip 2 aşırı duyarlılık reaksiyonu gelişir. Bu hastalıkta özellikle **ağız içi** lezyonların ortaya çıkmasından sorumlu olan ana otoantikor hedefi aşağıdakilerden hangisidir?
Doğru Şık (C): Desmoglein 3
Açıklama: Pemfigus vulgariste ağız mukozasındaki hücre ayrışmasından sorumlu ana kaderin proteini desmoglein 3'tür. BP1 ve BP2 antijenleri büllöz pemfigoidde bazal membran hedefiyken, desmoglein 1 derideki lezyonların primer hedefidir.

---

### ÇİFT 39 (Benzerlik: 0.78)

**Soru 1 (ID: 85ac36c1-1829-4e3c-afd6-97bc04f560a9)**
Soru Kökü: Pemfigus vulgaris patogenezinde, hücreler arası bağlantıdan sorumlu desmozomal kaderin proteinlerine karşı Tip 2 aşırı duyarlılık reaksiyonu gelişir. Bu hastalıkta özellikle **ağız içi** lezyonların ortaya çıkmasından sorumlu olan ana otoantikor hedefi aşağıdakilerden hangisidir?
Doğru Şık (C): Desmoglein 3
Açıklama: Pemfigus vulgariste ağız mukozasındaki hücre ayrışmasından sorumlu ana kaderin proteini desmoglein 3'tür. BP1 ve BP2 antijenleri büllöz pemfigoidde bazal membran hedefiyken, desmoglein 1 derideki lezyonların primer hedefidir.

**Soru 2 (ID: 8e5f25dc-ca24-4d82-a796-8b3eb1409c3a)**
Soru Kökü: Pemfigus vulgaris tablosunda mukoza lezyonlarına ek olarak deride de yaygın büller izlenmektedir. Bu tablonun deri komponentini oluşturan ve keratinositler arası tutunmayı engelleyen otoantikorlar primer olarak hangi molekülü hedefler?
Doğru Şık (A): Desmoglein 1
Açıklama: Pemfigus vulgariste deri bulgularının gelişiminden sorumlu ana antijenik hedef desmoglein 1'dir. Ağızda desmoglein 3 hedef alınırken, antikorların her iki proteine de reaksiyon göstermesi mukokutanöz yaygın yıkım tablosunu oluşturur.

---

### ÇİFT 40 (Benzerlik: 0.78)

**Soru 1 (ID: 1ce3cde6-9d8b-4ea2-af13-4b535f14ca1b)**
Soru Kökü: Klinik muayenede yapışık dişetinde yaygın eritem tablosu saptanan bir hastanın anamnezinde, yoğun pirofosfat ve aromasını baskılamak için tarçın içeren diş macunu kullanımı belirlenmiştir. Alerjik etyolojiye dayanan bu tablonun spesifik adı aşağıdakilerden hangisidir?
Doğru Şık (D): Plazma hücreli gingivitis
Açıklama: Tarçın aromaları ve pirofosfat içeren diş macunlarının reaksiyonu, yapışık dişetinde eritemli, klinik olarak spesifik bir histolojik doku infiltrasyonuna neden olan 'plazma hücreli gingivitis'e yol açar. Bu ajanların kullanımı kesildiğinde dişeti normal mercan pembesi rengine döner.

**Soru 2 (ID: 25498dab-54d2-4043-a2d9-6b6bb5014a47)**
Soru Kökü: Pirofosfat ve tadını baskılamak için kullanılan tarçın gibi katkı maddeleri içeren diş macunlarının kullanımı sonucu dişetinde gelişen, eritemli yapışık dişeti görünümü ile karakterize aşırı duyarlılık lezyonu aşağıdakilerden hangisidir?
Doğru Şık (C): Plazma hücreli gingivitis
Açıklama: Tarçın bileşenleri veya pirofosfat gibi diş macunu katkı maddelerine karşı gelişen lokalize aşırı duyarlılık (alerjik) reaksiyonu dokuda spesifik olarak yoğun plazma hücresi infiltrasyonu yaratır ve bu tablo Plazma Hücreli Gingivitis olarak adlandırılır. Likenoid reaksiyon distraktörü genellikle amalgam veya altın gibi metallerle ilişkili beyaz-kırmızı lezyonlar oluşturur. Plazma hücreli gingivitiste ateş kırmızısı, sınırları belli, ödematöz ve parlak bir yapışık dişeti tablosu izlenir.

---

### ÇİFT 41 (Benzerlik: 0.78)

**Soru 1 (ID: 25498dab-54d2-4043-a2d9-6b6bb5014a47)**
Soru Kökü: Pirofosfat ve tadını baskılamak için kullanılan tarçın gibi katkı maddeleri içeren diş macunlarının kullanımı sonucu dişetinde gelişen, eritemli yapışık dişeti görünümü ile karakterize aşırı duyarlılık lezyonu aşağıdakilerden hangisidir?
Doğru Şık (C): Plazma hücreli gingivitis
Açıklama: Tarçın bileşenleri veya pirofosfat gibi diş macunu katkı maddelerine karşı gelişen lokalize aşırı duyarlılık (alerjik) reaksiyonu dokuda spesifik olarak yoğun plazma hücresi infiltrasyonu yaratır ve bu tablo Plazma Hücreli Gingivitis olarak adlandırılır. Likenoid reaksiyon distraktörü genellikle amalgam veya altın gibi metallerle ilişkili beyaz-kırmızı lezyonlar oluşturur. Plazma hücreli gingivitiste ateş kırmızısı, sınırları belli, ödematöz ve parlak bir yapışık dişeti tablosu izlenir.

**Soru 2 (ID: b0d4b692-e594-499e-b366-5d61360688c6)**
Soru Kökü: Klinik muayenede yapışık dişetinde yaygın eritem tablosu saptanan bir hastanın anamnezinde, yoğun pirofosfat ve aromasını baskılamak için tarçın içeren diş macunu kullanımı belirlenmiştir. Alerjik etyolojiye dayanan bu tablonun spesifik adı aşağıdakilerden hangisidir?
Doğru Şık (D): Plazma hücreli gingivitis
Açıklama: Tarçın aromaları ve pirofosfat içeren diş macunlarının reaksiyonu, yapışık dişetinde eritemli, klinik olarak spesifik bir histolojik doku infiltrasyonuna neden olan 'plazma hücreli gingivitis'e yol açar. Bu ajanların kullanımı kesildiğinde dişeti normal mercan pembesi rengine döner.

---

### ÇİFT 42 (Benzerlik: 0.78)

**Soru 1 (ID: 468e0f96-333b-4fde-b5c7-81217063fc3c)**
Soru Kökü: Oral Liken Planus (OLP) hastalığının histopatolojik tanısında, epitel ve bağ dokusunun birleşiminde izlenen ve apoptoz geçiren keratinositlerden köken alan karakteristik eozinofilik globüller aşağıdakilerden hangisidir?
Doğru Şık (B): Civatte cisimcikleri
Açıklama: Oral Liken Planus histolojisinde, bazal hücrelerin yoğun T hücre aracılı immün saldırıya uğrayarak hidropik dejenerasyona ve apoptoza gitmesi sonucu epitel-bağ dokusu sınırında Civatte cisimcikleri (eozinofilik globüller) oluşur. Tzanck hücreleri distraktörü viral enfeksiyonlar (HSV) ve pemfigus vulgaris akantolizisinde görülürken, Civatte cisimcikleri likenoid doku reaksiyonlarının temel belirtecidir. Ayrıca testere dişi retepeler de bu patolojiyi destekleyen spesifik morfolojik değişimdir.

**Soru 2 (ID: f836da24-abe1-4371-b340-61627b305275)**
Soru Kökü: Oral liken planus hastalarından alınan biyopsilerin histopatolojik incelemesinde, epitel ve bağ dokusunun birleşiminde izlenen spesifik eozinofilik yapıların (Civatte cisimcikleri) biyolojik kökeni aşağıdakilerden hangisidir?
Doğru Şık (A): Apoptoz geçiren keratinositler
Açıklama: Liken planusun karakteristik histolojik bulgusu olan Civatte cisimcikleri, T-hücre aracılı sitotoksik saldırı nedeniyle bazal tabakada hidropik dejenerasyona uğrayarak apoptoz geçiren keratinositlerin kalıntılarıdır.

---

### ÇİFT 43 (Benzerlik: 0.78)

**Soru 1 (ID: 468e0f96-333b-4fde-b5c7-81217063fc3c)**
Soru Kökü: Oral Liken Planus (OLP) hastalığının histopatolojik tanısında, epitel ve bağ dokusunun birleşiminde izlenen ve apoptoz geçiren keratinositlerden köken alan karakteristik eozinofilik globüller aşağıdakilerden hangisidir?
Doğru Şık (B): Civatte cisimcikleri
Açıklama: Oral Liken Planus histolojisinde, bazal hücrelerin yoğun T hücre aracılı immün saldırıya uğrayarak hidropik dejenerasyona ve apoptoza gitmesi sonucu epitel-bağ dokusu sınırında Civatte cisimcikleri (eozinofilik globüller) oluşur. Tzanck hücreleri distraktörü viral enfeksiyonlar (HSV) ve pemfigus vulgaris akantolizisinde görülürken, Civatte cisimcikleri likenoid doku reaksiyonlarının temel belirtecidir. Ayrıca testere dişi retepeler de bu patolojiyi destekleyen spesifik morfolojik değişimdir.

**Soru 2 (ID: ebad8a9a-f28b-427d-91b5-beebce5ce55d)**
Soru Kökü: Oral liken planus hastalarından alınan biyopsilerin histopatolojik incelemesinde, epitel ve bağ dokusunun birleşiminde izlenen spesifik eozinofilik yapıların (Civatte cisimcikleri) biyolojik kökeni aşağıdakilerden hangisidir?
Doğru Şık (A): Apoptoz geçiren keratinositler
Açıklama: Liken planusun karakteristik histolojik bulgusu olan Civatte cisimcikleri, T-hücre aracılı sitotoksik saldırı nedeniyle bazal tabakada hidropik dejenerasyona uğrayarak apoptoz geçiren keratinositlerin kalıntılarıdır.

---

### ÇİFT 44 (Benzerlik: 0.77)

**Soru 1 (ID: 85ac36c1-1829-4e3c-afd6-97bc04f560a9)**
Soru Kökü: Pemfigus vulgaris patogenezinde, hücreler arası bağlantıdan sorumlu desmozomal kaderin proteinlerine karşı Tip 2 aşırı duyarlılık reaksiyonu gelişir. Bu hastalıkta özellikle **ağız içi** lezyonların ortaya çıkmasından sorumlu olan ana otoantikor hedefi aşağıdakilerden hangisidir?
Doğru Şık (C): Desmoglein 3
Açıklama: Pemfigus vulgariste ağız mukozasındaki hücre ayrışmasından sorumlu ana kaderin proteini desmoglein 3'tür. BP1 ve BP2 antijenleri büllöz pemfigoidde bazal membran hedefiyken, desmoglein 1 derideki lezyonların primer hedefidir.

**Soru 2 (ID: e0a13c0a-d91b-4d2c-ae26-1cfa937a940a)**
Soru Kökü: Vezikülobüllöz hastalıkların patogenezinde hedef alınan otoantijenler hastalıkların lokalizasyonunu ve histolojik ayrımını belirler. 

Müköz Membran Pemfigoidi'nde hedeflenen otoantijen kompleksi ile Pemfigus Vulgaris'te akantolizise neden olan hücresel bağlantı proteini aşağıdakilerin hangisinde sırasıyla doğru verilmiştir?
Doğru Şık (B): BP1/BP2 (Hemidesmozom) — Desmoglein 3 (Kaderin proteinleri)
Açıklama: Müköz Membran Pemfigoidi'nde bazal membrandaki hemidesmozomal elemanlara (BP1-230kDa ve BP2-180kDa) karşı antikor gelişirken, Pemfigus Vulgaris'te epitel hücrelerini birbirine bağlayan desmozomlardaki kaderin proteinlerine (özellikle ağızda desmoglein 3) karşı antikor gelişir. Antijenlerin bu lokasyon farkı, pemfigoidde subepitelyal ayrılmaya (epitel bağ dokusundan kalkar) neden olurken, pemfigusta hücreler arası bağlantının koparak (akantoliz) intraepitelyal bül oluşumuna sebep olur.

---

### ÇİFT 45 (Benzerlik: 0.77)

**Soru 1 (ID: b62295cd-c56a-4a0a-8726-3041915c1a61)**
Soru Kökü: Pemfigus vulgaris patogenezinde, hücreler arası bağlantıdan sorumlu desmozomal kaderin proteinlerine karşı Tip 2 aşırı duyarlılık reaksiyonu gelişir. Bu hastalıkta özellikle **ağız içi** lezyonların ortaya çıkmasından sorumlu olan ana otoantikor hedefi aşağıdakilerden hangisidir?
Doğru Şık (C): Desmoglein 3
Açıklama: Pemfigus vulgariste ağız mukozasındaki hücre ayrışmasından sorumlu ana kaderin proteini desmoglein 3'tür. BP1 ve BP2 antijenleri büllöz pemfigoidde bazal membran hedefiyken, desmoglein 1 derideki lezyonların primer hedefidir.

**Soru 2 (ID: e0a13c0a-d91b-4d2c-ae26-1cfa937a940a)**
Soru Kökü: Vezikülobüllöz hastalıkların patogenezinde hedef alınan otoantijenler hastalıkların lokalizasyonunu ve histolojik ayrımını belirler. 

Müköz Membran Pemfigoidi'nde hedeflenen otoantijen kompleksi ile Pemfigus Vulgaris'te akantolizise neden olan hücresel bağlantı proteini aşağıdakilerin hangisinde sırasıyla doğru verilmiştir?
Doğru Şık (B): BP1/BP2 (Hemidesmozom) — Desmoglein 3 (Kaderin proteinleri)
Açıklama: Müköz Membran Pemfigoidi'nde bazal membrandaki hemidesmozomal elemanlara (BP1-230kDa ve BP2-180kDa) karşı antikor gelişirken, Pemfigus Vulgaris'te epitel hücrelerini birbirine bağlayan desmozomlardaki kaderin proteinlerine (özellikle ağızda desmoglein 3) karşı antikor gelişir. Antijenlerin bu lokasyon farkı, pemfigoidde subepitelyal ayrılmaya (epitel bağ dokusundan kalkar) neden olurken, pemfigusta hücreler arası bağlantının koparak (akantoliz) intraepitelyal bül oluşumuna sebep olur.

---

### ÇİFT 46 (Benzerlik: 0.77)

**Soru 1 (ID: edcb1ea1-0141-4ebc-9632-a2234fd89852)**
Soru Kökü: 45 yaşında erkek hasta, uzun yıllardır akü geri dönüşüm tesisinde çalıştığını ve son aylarda dişetlerinde koyu renkli bir hat fark ettiğini belirtiyor. Ağız içi muayenesinde marjinal dişeti boyunca uzanan ve kolede yoğunlaşan, dantel şeklinde mavimsi-siyah çizgilenmeler (Burton çizgileri) saptanıyor.
Sistemik absorpsiyona sekonder olarak gelişen bu spesifik klinik tablo aşağıdaki ağır metallerden hangisinin birikimi sonucudur?
Doğru Şık (B): Kurşun
Açıklama: Kurşun ve antimon intoksikasyonlarında veya uzun süreli maruziyetlerinde dişin kolesinde marjinal gingivayı takip eden, karakteristik dantel şeklindeki spesifik siyah/mavimsi çizgilere tıbbi literatürde 'Burton çizgileri' denir. Cıva, bizmut ve gümüş de metalik pigmentasyon yapmasına rağmen, akü sanayi öyküsü ve spesifik 'dantel şeklindeki kole birikimi' kurşun zehirlenmesinin (plumbizm) ayırıcı semptomudur. İlgili bölgedeki inflamasyonun giderilmesi, kanlanmayı azaltarak bu lekelerin yok edilmesini sağlar.

**Soru 2 (ID: fda119f3-ef0a-43ba-af55-c916132db940)**
Soru Kökü: Kırk beş yaşında erkek hasta, dişeti kenarlarında koyu renkli çizgilenme şikayetiyle başvuruyor. Anamnezinde akü fabrikasında çalıştığı ve son aylarda dişetlerinde kanama olduğu öğreniliyor. İntraoral muayenede sadece enflamasyonlu marjinal dişetini takip eden, tüm dişleri saran dantel şeklinde mavi-siyah bir çizgi (Burton çizgisi) tespit ediliyor. Bu renklenmenin patogenezinden sorumlu olan temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Sistemik absorbe edilen metallerin artan kan akımıyla taşınarak subepitelyal bağ dokusunda sülfid şeklinde çökelmesi
Açıklama: Sistemik olarak absorbe edilen kurşun ve antimon gibi ağır metaller, enflamasyonlu bölgelerdeki artan kan akımı sayesinde dokuya taşınır ve subepitelyal bağ dokusunda sülfidler halinde çökelerek 'Burton çizgileri'ni oluşturur. Amalgam tatuajı distraktörü (lokal travmatik gömülme) bu tablodan farklıdır; tüm dişleri saran bir çizgi değil izole lekeler yaratır. Bu renklenme sistemik toksisitenin doğrudan bir sonucu değil, sadece lokal enflamasyon varlığında metalin çökmesi durumudur.

---

### ÇİFT 47 (Benzerlik: 0.77)

**Soru 1 (ID: 64470ffe-3f74-4f9f-baa8-5784a0a1c5cc)**
Soru Kökü: Sistemik lupus eritematozus (SLE) hastalarının mukozal veya kutanöz dokularından alınan biyopsilerin direkt immünofloresan incelenmesinde 'Lupus bant testi' pozitif olarak değerlendirilmektedir. Bu testi pozitif yapan spesifik immünopatolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (D): Bazal membranda IgG, C3 ve IgM birikimi
Açıklama: Lupus bant testi, lezyon olan veya olmayan deri ve mukozaların immünofloresan incelemesinde bazal membran bölgesinde granüler bant tarzında IgG, C3 ve IgM moleküllerinin birikiminin gösterilmesidir.

**Soru 2 (ID: c52ad7d7-417c-4600-895b-0f1f88a68d8a)**
Soru Kökü: Otuz beş yaşında kadın hasta, yanak ve sert damağında kenarları dikey beyaz çizgili, hafif kabarık eritematöz plaklar ve yüzeyel ülserasyonlarla başvuruyor. Anamnezinde yanaklarında güneşe çıkınca artan kızarıklık olduğu saptanıyor. Hastadan alınan lezyonlu ve lezyonsuz mukoza biyopsilerinde, immünofloresan inceleme ile bazal membranda granüler IgG ve C3 birikimi tespit edilerek 'Lupus bant testi' pozitif bulunuyor.

Bu veriler ışığında en olası tanı ve serolojik belirteci aşağıdakilerden hangisidir?
Doğru Şık (C): Sistemik lupus eritematozus — Antinükleer antikor (ANA)
Açıklama: Yüzde güneşe duyarlı döküntü (kelebek döküntüsü potansiyeli), oral mukozada likenoid eritematöz plaklar ve hem lezyonlu hem lezyonsuz dokuda pozitif olan 'Lupus bant testi' Sistemik Lupus Eritematozus (SLE) patognomonik tablosudur. Liken planus distraktörü klinik olarak benzer beyaz çizgili/eritemli lezyonlar yapabilse de, lupus bant testi ve yüksek oranda pozitif çıkan Antinükleer antikor (ANA) profili SLE için spesifik teşhis kriterleridir. ANA, SLE vakalarının %95'inden fazlasında pozitiftir.

---

### ÇİFT 48 (Benzerlik: 0.77)

**Soru 1 (ID: 3abbabec-24b6-45db-8a07-f645686a3e7a)**
Soru Kökü: Sistemik lupus eritematozus (SLE) hastalarının mukozal veya kutanöz dokularından alınan biyopsilerin direkt immünofloresan incelenmesinde 'Lupus bant testi' pozitif olarak değerlendirilmektedir. Bu testi pozitif yapan spesifik immünopatolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (D): Bazal membranda IgG, C3 ve IgM birikimi
Açıklama: Lupus bant testi, lezyon olan veya olmayan deri ve mukozaların immünofloresan incelemesinde bazal membran bölgesinde granüler bant tarzında IgG, C3 ve IgM moleküllerinin birikiminin gösterilmesidir.

**Soru 2 (ID: c52ad7d7-417c-4600-895b-0f1f88a68d8a)**
Soru Kökü: Otuz beş yaşında kadın hasta, yanak ve sert damağında kenarları dikey beyaz çizgili, hafif kabarık eritematöz plaklar ve yüzeyel ülserasyonlarla başvuruyor. Anamnezinde yanaklarında güneşe çıkınca artan kızarıklık olduğu saptanıyor. Hastadan alınan lezyonlu ve lezyonsuz mukoza biyopsilerinde, immünofloresan inceleme ile bazal membranda granüler IgG ve C3 birikimi tespit edilerek 'Lupus bant testi' pozitif bulunuyor.

Bu veriler ışığında en olası tanı ve serolojik belirteci aşağıdakilerden hangisidir?
Doğru Şık (C): Sistemik lupus eritematozus — Antinükleer antikor (ANA)
Açıklama: Yüzde güneşe duyarlı döküntü (kelebek döküntüsü potansiyeli), oral mukozada likenoid eritematöz plaklar ve hem lezyonlu hem lezyonsuz dokuda pozitif olan 'Lupus bant testi' Sistemik Lupus Eritematozus (SLE) patognomonik tablosudur. Liken planus distraktörü klinik olarak benzer beyaz çizgili/eritemli lezyonlar yapabilse de, lupus bant testi ve yüksek oranda pozitif çıkan Antinükleer antikor (ANA) profili SLE için spesifik teşhis kriterleridir. ANA, SLE vakalarının %95'inden fazlasında pozitiftir.

---

### ÇİFT 49 (Benzerlik: 0.76)

**Soru 1 (ID: cc863892-34bc-40a5-a300-fe132385cd31)**
Soru Kökü: Otuz iki yaşında erkek hasta, dişetlerinde yeşil renkli çizgilenme şikayetiyle başvuruyor. Anamnezinde bir metal fabrikasında çalıştığı, muayenesinde marjinal dişetini takip eden belirgin yeşil bant izlendiği saptanıyor. Bu klinik tabloya neden olan en olası ajan aşağıdakilerden hangisidir?
Doğru Şık (D): Bakır
Açıklama: Bakır fabrikalarında çalışanlarda görülen mesleki maruziyet sonucunda dişetinde yeşil renkli karakteristik bir pigmentasyon meydana gelir. Kurşun ve bizmut tipik olarak mavi-siyah veya dantel tarzı renklenme yaparken, bakır yeşil renk yansımasıyla doğrudan ayrılır. Bu durum sistemik zehirlenmeyi değil, lokal bir çökelme reaksiyonunu ifade eder.

**Soru 2 (ID: edcb1ea1-0141-4ebc-9632-a2234fd89852)**
Soru Kökü: 45 yaşında erkek hasta, uzun yıllardır akü geri dönüşüm tesisinde çalıştığını ve son aylarda dişetlerinde koyu renkli bir hat fark ettiğini belirtiyor. Ağız içi muayenesinde marjinal dişeti boyunca uzanan ve kolede yoğunlaşan, dantel şeklinde mavimsi-siyah çizgilenmeler (Burton çizgileri) saptanıyor.
Sistemik absorpsiyona sekonder olarak gelişen bu spesifik klinik tablo aşağıdaki ağır metallerden hangisinin birikimi sonucudur?
Doğru Şık (B): Kurşun
Açıklama: Kurşun ve antimon intoksikasyonlarında veya uzun süreli maruziyetlerinde dişin kolesinde marjinal gingivayı takip eden, karakteristik dantel şeklindeki spesifik siyah/mavimsi çizgilere tıbbi literatürde 'Burton çizgileri' denir. Cıva, bizmut ve gümüş de metalik pigmentasyon yapmasına rağmen, akü sanayi öyküsü ve spesifik 'dantel şeklindeki kole birikimi' kurşun zehirlenmesinin (plumbizm) ayırıcı semptomudur. İlgili bölgedeki inflamasyonun giderilmesi, kanlanmayı azaltarak bu lekelerin yok edilmesini sağlar.

---

### ÇİFT 50 (Benzerlik: 0.76)

**Soru 1 (ID: 56bcc4d3-bd9f-42c9-ba56-b62eeac7d201)**
Soru Kökü: Aşağıdakilerden hangisi sağlıklı dişeti dokusunun tipik klinik parametrelerinden biri **değildir**?
Doğru Şık (B): Ödemde çukurlaşma izlenen yapı
Açıklama: Sağlıklı dişeti dokusu mercan pembesi renginde, bıçak sırtı formunda ile dişi saran, sıkı ve rezilient (esnek) bir kıvama sahiptir. Ödemde çukurlaşma (pitting) ve dokunun yumuşaması sağlıklı dişetinde değil, gingival inflamasyona bağlı olarak artan eksuda birikiminin izlendiği klinik gingivitis tablosunda ortaya çıkar. Dişeti kenarlarının dantela anahattı sağlıklı konturun klasik bir göstergesidir.

**Soru 2 (ID: d68e4ceb-2934-471f-8be0-85329d5939ef)**
Soru Kökü: Normal ve sağlıklı dişetinin histoklinik parametreleri ile ilgili aşağıdaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (A): Yüzey yapısı - Sıkı nodüler görünüm
Açıklama: Sağlıklı dişetinin yüzey yapısı 'sıkı nodüler' değil, mikroskobik girinti ve çıkıntılarla dolu olan ince taneli portakal kabuğu (stippling) manzarasındadır. Sıkı ve nodüler yüzey görünümü genellikle uzun süreli kronik inflamasyona yanıt olarak gelişen hücresel reaksiyonun (fibrotik değişikliklerin) veya ilaca bağlı bağ dokusu büyümelerinin baskın olduğu patolojik süreçlerde izlenir. Diğer tüm şıklar plağa bağlı inflamasyonun olmadığı mercan pembesi rengindeki sağlıklı dişetinin temel doğrularıdır.

---

### ÇİFT 51 (Benzerlik: 0.76)

**Soru 1 (ID: 3b0c9c3e-6a18-4241-bd39-b548cbb8f326)**
Soru Kökü: Pemfigus vulgaris tablosunda mukoza lezyonlarına ek olarak deride de yaygın büller izlenmektedir. Bu tablonun deri komponentini oluşturan ve keratinositler arası tutunmayı engelleyen otoantikorlar primer olarak hangi molekülü hedefler?
Doğru Şık (A): Desmoglein 1
Açıklama: Pemfigus vulgariste deri bulgularının gelişiminden sorumlu ana antijenik hedef desmoglein 1'dir. Ağızda desmoglein 3 hedef alınırken, antikorların her iki proteine de reaksiyon göstermesi mukokutanöz yaygın yıkım tablosunu oluşturur.

**Soru 2 (ID: e0a13c0a-d91b-4d2c-ae26-1cfa937a940a)**
Soru Kökü: Vezikülobüllöz hastalıkların patogenezinde hedef alınan otoantijenler hastalıkların lokalizasyonunu ve histolojik ayrımını belirler. 

Müköz Membran Pemfigoidi'nde hedeflenen otoantijen kompleksi ile Pemfigus Vulgaris'te akantolizise neden olan hücresel bağlantı proteini aşağıdakilerin hangisinde sırasıyla doğru verilmiştir?
Doğru Şık (B): BP1/BP2 (Hemidesmozom) — Desmoglein 3 (Kaderin proteinleri)
Açıklama: Müköz Membran Pemfigoidi'nde bazal membrandaki hemidesmozomal elemanlara (BP1-230kDa ve BP2-180kDa) karşı antikor gelişirken, Pemfigus Vulgaris'te epitel hücrelerini birbirine bağlayan desmozomlardaki kaderin proteinlerine (özellikle ağızda desmoglein 3) karşı antikor gelişir. Antijenlerin bu lokasyon farkı, pemfigoidde subepitelyal ayrılmaya (epitel bağ dokusundan kalkar) neden olurken, pemfigusta hücreler arası bağlantının koparak (akantoliz) intraepitelyal bül oluşumuna sebep olur.

---

### ÇİFT 52 (Benzerlik: 0.76)

**Soru 1 (ID: 8e5f25dc-ca24-4d82-a796-8b3eb1409c3a)**
Soru Kökü: Pemfigus vulgaris tablosunda mukoza lezyonlarına ek olarak deride de yaygın büller izlenmektedir. Bu tablonun deri komponentini oluşturan ve keratinositler arası tutunmayı engelleyen otoantikorlar primer olarak hangi molekülü hedefler?
Doğru Şık (A): Desmoglein 1
Açıklama: Pemfigus vulgariste deri bulgularının gelişiminden sorumlu ana antijenik hedef desmoglein 1'dir. Ağızda desmoglein 3 hedef alınırken, antikorların her iki proteine de reaksiyon göstermesi mukokutanöz yaygın yıkım tablosunu oluşturur.

**Soru 2 (ID: e0a13c0a-d91b-4d2c-ae26-1cfa937a940a)**
Soru Kökü: Vezikülobüllöz hastalıkların patogenezinde hedef alınan otoantijenler hastalıkların lokalizasyonunu ve histolojik ayrımını belirler. 

Müköz Membran Pemfigoidi'nde hedeflenen otoantijen kompleksi ile Pemfigus Vulgaris'te akantolizise neden olan hücresel bağlantı proteini aşağıdakilerin hangisinde sırasıyla doğru verilmiştir?
Doğru Şık (B): BP1/BP2 (Hemidesmozom) — Desmoglein 3 (Kaderin proteinleri)
Açıklama: Müköz Membran Pemfigoidi'nde bazal membrandaki hemidesmozomal elemanlara (BP1-230kDa ve BP2-180kDa) karşı antikor gelişirken, Pemfigus Vulgaris'te epitel hücrelerini birbirine bağlayan desmozomlardaki kaderin proteinlerine (özellikle ağızda desmoglein 3) karşı antikor gelişir. Antijenlerin bu lokasyon farkı, pemfigoidde subepitelyal ayrılmaya (epitel bağ dokusundan kalkar) neden olurken, pemfigusta hücreler arası bağlantının koparak (akantoliz) intraepitelyal bül oluşumuna sebep olur.

---

### ÇİFT 53 (Benzerlik: 0.75)

**Soru 1 (ID: 69554bf2-9599-4a8f-9910-5005cc8fff00)**
Soru Kökü: Ağız içine kazayla batan amalgam veya metal parçalarının oluşturduğu lokalize 'amalgam tatuajı' ile sistemik olarak absorbe edilen bizmut ve kurşun gibi ağır metallerin oluşturduğu 'metalik pigmentasyon' tablosu klinik olarak karışabilmektedir.
Sistemik absorpsiyona bağlı metalik pigmentasyonu amalgam tatuajından ayıran en kritik klinik ve hücresel özellik aşağıdakilerden hangisidir?
Doğru Şık (E): Sistemik pigmentasyonun spesifik olarak kanlanmanın arttığı inflamasyon alanlarında çökelme eğilimi göstermesi
Açıklama: Sistemik olarak alınan ağır metaller (bismut, kurşun vb.) kana karışarak dokulara taşınır, ancak dişetinde çökelmeleri için vasküler geçirgenliğin ve kan akımının yüksek olduğu inflamasyonlu bölgelere (gingivitis odaklarına) ihtiyaç duyarlar. Amalgam tatuajı ise restoratif işlemler sırasında metalik parçacıkların travmatik olarak mekanik yolla direkt doku içine gömülmesi (yabancı cisim reaksiyonu) olup inflamasyon ön koşulu aranmaksızın her bölgede görülebilir. Sistemik birikimlerde inflamasyonun tedavi edilmesi (plak kontrolü) ile artan kanlanma duracağı için lekeler de zamanla kaybolabilir.

**Soru 2 (ID: c6fbd437-df01-41dd-b41f-cc76ebb40fbb)**
Soru Kökü: Sistemik olarak emilen bismut, cıva veya arsenik gibi ağır metallere bağlı gelişen metalik pigmentasyonlar, ağız mukozasının her yerinde eşit dağılmaz; sıklıkla marjinal dişetinde ve inflamasyonlu alanlarda sınırlandırılmış koyu renkli çizgiler şeklinde izlenir.
Bu renklenmenin **sadece inflamasyon olan bölgelerde** lokalize olmasının temel fizyopatolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Artan kan akımına bağlı olarak metallerin doku içine taşınması
Açıklama: Sistemik dolaşıma katılan ağır metaller, dişeti inflamasyonunun yarattığı artmış lokal kapiller permeabilite ve yoğunlaşan kan akımı sayesinde gingival bağ dokusuna taşınırlar ve burada metalik sülfid formunda subepitelyal çökelirler. Bu reaksiyon sistemik toksisitenin değil, dokudaki mevcut gingivitisin (artan kan debisi) fiziksel bir yan sonucudur. Melanosit aktivitesi fizyolojik melanin pigmentasyonunu açıklar, ağır metal sülfid çökellerini değil.

---

### ÇİFT 54 (Benzerlik: 0.75)

**Soru 1 (ID: 90dd4b28-3d3d-4a36-84a0-64badc1cc1e1)**
Soru Kökü: Elli yaşında kadın hasta, ağzında çıkan ve kolayca patlayarak yerini çok ağrılı geniş yaralara bırakan su dolu kabarcıklar şikayetiyle başvuruyor. Muayenede yanak, yumuşak damak ve dişetinde yaygın erozyonlar ile sağlam görünen mukozaya yatay bası uygulandığında epitelin kolayca sıyrılarak ayrıldığı (Nikolsky pozitif) saptanıyor. Alınan biyopsinin mikroskobik incelemesinde hücreler arası bağlantılarını kaybeden hücreler ve bazal tabakada tek sıralı mezar taşı görünümü tespit ediliyor.

Bu vakadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Pemfigus vulgaris
Açıklama: Vakada tarif edilen akantolizis (hücreler arası bağlantı kaybı), Nikolsky pozitifliği ve bazal hücrelerin lamina propriaya bağlı kalarak mezar taşı dizilimi oluşturması Pemfigus Vulgaris'in patognomonik histolojik tablolarıdır. Skatrisyel pemfigoid distraktörü de Nikolsky pozitif olabilir ancak onda ayrılma subepitelyaldir ve mezar taşı görünümü izlenmez. Pemfigus vulgaris otoimmün olarak desmoglein 3'e karşı gelişen antikorlarla stratum spinosumda (intraepitelyal) ayrılma yaratır ve vezikülobüllöz hastalıklar içinde en yüksek mortalite riskine sahip olandır.

**Soru 2 (ID: b011a8a0-6dc9-4ed7-97ea-52c077bb6e0a)**
Soru Kökü: Ağız mukozasından alınan bir biyopsinin mikroskobik incelemesinde; epitel içi büller, yapısal bağlantılarını kaybetmiş serbest epitel hücreleri ve bazal membranda tek sıralı 'mezar taşı' dizilimi gösteren hücreler saptanmıştır. Bu tabloya neden olan primer patofizyolojik olay aşağıdakilerden hangisidir?
Doğru Şık (C): Akantolizis ile desmozom yıkımı
Açıklama: Tarif edilen 'mezar taşı' dizilimi ve Tzanck hücreleri Pemfigus vulgarisin klasik histopatolojisidir. Patofizyolojisinde, otoantikorların desmoglein proteinlerini hedef alarak desmozomları yıkması ve keratinositler arası bağların kopması (akantolizis) yatar.

---

### ÇİFT 55 (Benzerlik: 0.75)

**Soru 1 (ID: 2e040413-2e8d-49dd-b393-b6485142e7b8)**
Soru Kökü: Ağız mukozasından alınan bir biyopsinin mikroskobik incelemesinde; epitel içi büller, yapısal bağlantılarını kaybetmiş serbest epitel hücreleri ve bazal membranda tek sıralı 'mezar taşı' dizilimi gösteren hücreler saptanmıştır. Bu tabloya neden olan primer patofizyolojik olay aşağıdakilerden hangisidir?
Doğru Şık (C): Akantolizis ile desmozom yıkımı
Açıklama: Tarif edilen 'mezar taşı' dizilimi ve Tzanck hücreleri Pemfigus vulgarisin klasik histopatolojisidir. Patofizyolojisinde, otoantikorların desmoglein proteinlerini hedef alarak desmozomları yıkması ve keratinositler arası bağların kopması (akantolizis) yatar.

**Soru 2 (ID: 90dd4b28-3d3d-4a36-84a0-64badc1cc1e1)**
Soru Kökü: Elli yaşında kadın hasta, ağzında çıkan ve kolayca patlayarak yerini çok ağrılı geniş yaralara bırakan su dolu kabarcıklar şikayetiyle başvuruyor. Muayenede yanak, yumuşak damak ve dişetinde yaygın erozyonlar ile sağlam görünen mukozaya yatay bası uygulandığında epitelin kolayca sıyrılarak ayrıldığı (Nikolsky pozitif) saptanıyor. Alınan biyopsinin mikroskobik incelemesinde hücreler arası bağlantılarını kaybeden hücreler ve bazal tabakada tek sıralı mezar taşı görünümü tespit ediliyor.

Bu vakadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Pemfigus vulgaris
Açıklama: Vakada tarif edilen akantolizis (hücreler arası bağlantı kaybı), Nikolsky pozitifliği ve bazal hücrelerin lamina propriaya bağlı kalarak mezar taşı dizilimi oluşturması Pemfigus Vulgaris'in patognomonik histolojik tablolarıdır. Skatrisyel pemfigoid distraktörü de Nikolsky pozitif olabilir ancak onda ayrılma subepitelyaldir ve mezar taşı görünümü izlenmez. Pemfigus vulgaris otoimmün olarak desmoglein 3'e karşı gelişen antikorlarla stratum spinosumda (intraepitelyal) ayrılma yaratır ve vezikülobüllöz hastalıklar içinde en yüksek mortalite riskine sahip olandır.

---

### ÇİFT 56 (Benzerlik: 0.74)

**Soru 1 (ID: 0a767f56-9c86-437e-98a6-0dce1db0906b)**
Soru Kökü: Sağlıklı dişetinde gözlenen portakal kabuğu (stipling) görünümü, dokunun en yoğun olarak hangi anatomik lokalizasyonunda bulunur?
Doğru Şık (C): Yapışık dişetinde baskın olarak subpapiller alanda
Açıklama: Stipling (pürtüklü yapı) karakteristiği yapışık dişetinde, özellikle de subpapiller alanda izlenen fibrotik girinti-çıkıntıları ifade eder. Serbest marjinal dişetinde ve sement-mine birleşimi altındaki esnek alveolar mukozada bu pürtüklü yapı görülmez. Gingivitisin erken döneminde ödemin baskısıyla bu subpapiller çöküntüler silinir.

**Soru 2 (ID: a05bffdd-e4b1-496f-ab40-6397f16e4f20)**
Soru Kökü: Sağlıklı dişetinde görülen portakal kabuğu (stippling) manzarası ve oluk ısısı ile ilgili aşağıdaki ifadelerden hangisi doğrudur?
Doğru Şık (C): Normal dişeti oluk ısısı 34 derece civarındadır.
Açıklama: Sağlıklı bireylerde periodontal oluk ısısı ortalama 34 derece civarındadır ve gingival inflamasyon başladığında bu ısıda hafif bir artış kaydedilir. Stippling (pürtüklülük) kaybı gingivitisin geç değil, aksine en erken klinik belirtilerinden biridir ve bağ dokusundaki eksüda artışı pürtüklü yapıyı silerek dokuyu düz-parlak hale getirir. Ayrıca pürtüklülük baskın olarak yapışık dişetinde (subpapiller alanda) bulunur, yaşa ve kişiye göre değişiklik gösterir.

---

### ÇİFT 57 (Benzerlik: 0.74)

**Soru 1 (ID: 770e0ea0-cfc3-4a7f-90de-4b5e09de52cb)**
Soru Kökü: Sistemik absorbsiyon sonucu subepitelyal bağ dokusunda sülfid formunda çökerek dişeti ve ağız mukozasını boyayan ve karakteristik olarak siyah/mavimsi bir çizgi oluşturan metal toksisiteleri mevcuttur.
Aşağıdakilerden hangisi terapötik veya mesleki maruziyet sonucu bu tip spesifik marjinal metalik pigmentasyona yol açan elementlerden biri **değildir**?
Doğru Şık (D): Titanyum
Açıklama: Bizmut, arsenik, cıva, kurşun ve gümüş gibi ağır metaller dolaşımla geldikleri inflamasyonlu dişeti marjininde metalik sülfid formunda çökelerek mavi/siyah patolojik hatlar oluştururlar. Titanyum ise dental implantolojide yoğun olarak kullanılan, vücut dokularıyla yüksek biyouyumluluğa sahip, sistemik emilimle marjinal dişetinde patolojik sülfid birikim hattı oluşturmayan bir inert geçiş metalidir. Bahsi geçen renklenme doğrudan metal toksisitesi göstergesi olmayıp lokal dişeti inflamasyonunun yansımasıdır.

**Soru 2 (ID: c6fbd437-df01-41dd-b41f-cc76ebb40fbb)**
Soru Kökü: Sistemik olarak emilen bismut, cıva veya arsenik gibi ağır metallere bağlı gelişen metalik pigmentasyonlar, ağız mukozasının her yerinde eşit dağılmaz; sıklıkla marjinal dişetinde ve inflamasyonlu alanlarda sınırlandırılmış koyu renkli çizgiler şeklinde izlenir.
Bu renklenmenin **sadece inflamasyon olan bölgelerde** lokalize olmasının temel fizyopatolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Artan kan akımına bağlı olarak metallerin doku içine taşınması
Açıklama: Sistemik dolaşıma katılan ağır metaller, dişeti inflamasyonunun yarattığı artmış lokal kapiller permeabilite ve yoğunlaşan kan akımı sayesinde gingival bağ dokusuna taşınırlar ve burada metalik sülfid formunda subepitelyal çökelirler. Bu reaksiyon sistemik toksisitenin değil, dokudaki mevcut gingivitisin (artan kan debisi) fiziksel bir yan sonucudur. Melanosit aktivitesi fizyolojik melanin pigmentasyonunu açıklar, ağır metal sülfid çökellerini değil.

---

### ÇİFT 58 (Benzerlik: 0.73)

**Soru 1 (ID: 2c86eb6f-1def-4cfe-a527-a1885323cd1c)**
Soru Kökü: Eritema multiformenin patogenezi ile ilişkili olup, klinik olarak çok daha şiddetli ve yaygın mukokutanöz epitel nekrozu ile karakterize olan iki hastalık formu aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (B): Stevens Johnson sendromu - Toksik epidermal nekroz
Açıklama: Stevens Johnson sendromu ve toksik epidermal nekroz (TEN), eritema multiformenin (EM) en şiddetli ve hayati tehlike yaratan formlarıdır. Genellikle ilaç reaksiyonları (sülfonamid, NSAİ vb.) ile tetiklenirler ve damar duvarlarında lökositoklastik hasar sonucu masif iskemik nekrozlara yol açarlar.

**Soru 2 (ID: 6658ba61-e14e-4bb8-bdc7-9809d09e24c5)**
Soru Kökü: Eritema multiformenin şiddetli varyantları olarak bilinen Stevens Johnson sendromu ve toksik epidermal nekroz (TEN) tablolarının gelişiminde, tetikleyici ana etiyolojik faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Sistemik ilaç kullanımları
Açıklama: Stevens Johnson sendromu ve toksik epidermal nekroz (TEN), genellikle penisilin, sülfonamid veya NSAİ gibi sistemik spesifik ilaçlara karşı oluşan şiddetli sitotoksik (T hücre aracılı) immün yanıt sonucu ortaya çıkan masif mukokutanöz epitel nekrozlarıdır.

---

### ÇİFT 59 (Benzerlik: 0.73)

**Soru 1 (ID: 2c86eb6f-1def-4cfe-a527-a1885323cd1c)**
Soru Kökü: Eritema multiformenin patogenezi ile ilişkili olup, klinik olarak çok daha şiddetli ve yaygın mukokutanöz epitel nekrozu ile karakterize olan iki hastalık formu aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (B): Stevens Johnson sendromu - Toksik epidermal nekroz
Açıklama: Stevens Johnson sendromu ve toksik epidermal nekroz (TEN), eritema multiformenin (EM) en şiddetli ve hayati tehlike yaratan formlarıdır. Genellikle ilaç reaksiyonları (sülfonamid, NSAİ vb.) ile tetiklenirler ve damar duvarlarında lökositoklastik hasar sonucu masif iskemik nekrozlara yol açarlar.

**Soru 2 (ID: 79e4d996-3ff6-4193-9f19-3c4870d464e3)**
Soru Kökü: Eritema multiformenin şiddetli varyantları olarak bilinen Stevens Johnson sendromu ve toksik epidermal nekroz (TEN) tablolarının gelişiminde, tetikleyici ana etiyolojik faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Sistemik ilaç kullanımları
Açıklama: Stevens Johnson sendromu ve toksik epidermal nekroz (TEN), genellikle penisilin, sülfonamid veya NSAİ gibi sistemik spesifik ilaçlara karşı oluşan şiddetli sitotoksik (T hücre aracılı) immün yanıt sonucu ortaya çıkan masif mukokutanöz epitel nekrozlarıdır.

---

### ÇİFT 60 (Benzerlik: 0.73)

**Soru 1 (ID: 30fabb0b-dd56-4905-be86-68b6929bfc9d)**
Soru Kökü: Eritema multiformenin patogenezi ile ilişkili olup, klinik olarak çok daha şiddetli ve yaygın mukokutanöz epitel nekrozu ile karakterize olan iki hastalık formu aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (B): Stevens Johnson sendromu - Toksik epidermal nekroz
Açıklama: Stevens Johnson sendromu ve toksik epidermal nekroz (TEN), eritema multiformenin (EM) en şiddetli ve hayati tehlike yaratan formlarıdır. Genellikle ilaç reaksiyonları (sülfonamid, NSAİ vb.) ile tetiklenirler ve damar duvarlarında lökositoklastik hasar sonucu masif iskemik nekrozlara yol açarlar.

**Soru 2 (ID: 6658ba61-e14e-4bb8-bdc7-9809d09e24c5)**
Soru Kökü: Eritema multiformenin şiddetli varyantları olarak bilinen Stevens Johnson sendromu ve toksik epidermal nekroz (TEN) tablolarının gelişiminde, tetikleyici ana etiyolojik faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Sistemik ilaç kullanımları
Açıklama: Stevens Johnson sendromu ve toksik epidermal nekroz (TEN), genellikle penisilin, sülfonamid veya NSAİ gibi sistemik spesifik ilaçlara karşı oluşan şiddetli sitotoksik (T hücre aracılı) immün yanıt sonucu ortaya çıkan masif mukokutanöz epitel nekrozlarıdır.

---

### ÇİFT 61 (Benzerlik: 0.73)

**Soru 1 (ID: 30fabb0b-dd56-4905-be86-68b6929bfc9d)**
Soru Kökü: Eritema multiformenin patogenezi ile ilişkili olup, klinik olarak çok daha şiddetli ve yaygın mukokutanöz epitel nekrozu ile karakterize olan iki hastalık formu aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (B): Stevens Johnson sendromu - Toksik epidermal nekroz
Açıklama: Stevens Johnson sendromu ve toksik epidermal nekroz (TEN), eritema multiformenin (EM) en şiddetli ve hayati tehlike yaratan formlarıdır. Genellikle ilaç reaksiyonları (sülfonamid, NSAİ vb.) ile tetiklenirler ve damar duvarlarında lökositoklastik hasar sonucu masif iskemik nekrozlara yol açarlar.

**Soru 2 (ID: 79e4d996-3ff6-4193-9f19-3c4870d464e3)**
Soru Kökü: Eritema multiformenin şiddetli varyantları olarak bilinen Stevens Johnson sendromu ve toksik epidermal nekroz (TEN) tablolarının gelişiminde, tetikleyici ana etiyolojik faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Sistemik ilaç kullanımları
Açıklama: Stevens Johnson sendromu ve toksik epidermal nekroz (TEN), genellikle penisilin, sülfonamid veya NSAİ gibi sistemik spesifik ilaçlara karşı oluşan şiddetli sitotoksik (T hücre aracılı) immün yanıt sonucu ortaya çıkan masif mukokutanöz epitel nekrozlarıdır.

---

### ÇİFT 62 (Benzerlik: 0.72)

**Soru 1 (ID: 53ee2956-bba5-4f60-8b78-a555099125f4)**
Soru Kökü: Sağlıklı bir periodonsiyum ile plağa bağlı inflamasyonun erken fazları klinik muayenede karşılaştırıldığında, aşağıdaki parametrelerden hangisinin gingivitis lehine artış göstermesi **beklenmez**?
Doğru Şık (C): Dişeti yüzeyindeki portakal kabuğu (stippling) görünümü
Açıklama: Plağa bağlı gingivitis gelişiminde damarsal yanıtlar artar; bu nedenle sulkus ısısı, kapiller dilatasyon, eritem ve dişeti oluğu sıvısı (DOS) artışı patolojinin bariz ve erken göstergeleridir. Ancak stippling (portakal kabuğu pürtüklü görünüm), inflamasyon sonucu subepitelyal bağ dokusunda toplanan ödemin (sıvının) dokuyu germesiyle silikleşir ve azalır, artış göstermez. Pürtüklülüğün kaybolup yüzeyin düz-parlak hale gelmesi eksudatif değişikliğin doğrudan fiziksel kanıtıdır.

**Soru 2 (ID: 7f89493a-ccda-4cc9-9f30-180be89663f3)**
Soru Kökü: Sadece dental plağa bağlı gelişen gingivitisin teşhisini koyarken kullanılan klinik ve radyografik parametreler düşünüldüğünde, aşağıdakilerden hangisi plağa bağlı gingivitis tablosu ile **uyumsuzdur**?
Doğru Şık (B): Destekleyici yapıların ve alveolar kemiğin yıkımının radyografik olarak izlenmesi
Açıklama: Gingivitis, dişetine sınırlı bir enflamatuar yanıttır; radyografik analiz ve sondlanabilen ataşman düzeyi ölçümlerinde destekleyici yapıların (alveolar kemik ve periodontal ligament) kaybının izlenmemesi gingivitisin altın standart teşhis kriteridir. Kemik kaybı izleniyorsa bu tablo artık gingivitis değil, periodontitistir. Plağa bağlı gingivitiste bağ dokusu enflamasyonu, mikrobiyal uyarana karşı gelişir ve kemik sağlamken sadece pseudo cep oluşumuna yol açabilir.

---

### ÇİFT 63 (Benzerlik: 0.72)

**Soru 1 (ID: 770e0ea0-cfc3-4a7f-90de-4b5e09de52cb)**
Soru Kökü: Sistemik absorbsiyon sonucu subepitelyal bağ dokusunda sülfid formunda çökerek dişeti ve ağız mukozasını boyayan ve karakteristik olarak siyah/mavimsi bir çizgi oluşturan metal toksisiteleri mevcuttur.
Aşağıdakilerden hangisi terapötik veya mesleki maruziyet sonucu bu tip spesifik marjinal metalik pigmentasyona yol açan elementlerden biri **değildir**?
Doğru Şık (D): Titanyum
Açıklama: Bizmut, arsenik, cıva, kurşun ve gümüş gibi ağır metaller dolaşımla geldikleri inflamasyonlu dişeti marjininde metalik sülfid formunda çökelerek mavi/siyah patolojik hatlar oluştururlar. Titanyum ise dental implantolojide yoğun olarak kullanılan, vücut dokularıyla yüksek biyouyumluluğa sahip, sistemik emilimle marjinal dişetinde patolojik sülfid birikim hattı oluşturmayan bir inert geçiş metalidir. Bahsi geçen renklenme doğrudan metal toksisitesi göstergesi olmayıp lokal dişeti inflamasyonunun yansımasıdır.

**Soru 2 (ID: a308c6fe-8b22-4b1d-af05-fdf962e0c9a9)**
Soru Kökü: Sistemik olarak emilen ağır metallerin dişeti renklenmesi oluşturmasındaki temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Metalik sülfidlerin subepitelyal bağ dokusunda çökelmesi
Açıklama: Sistemik olarak absorbe edilen ağır metaller (bizmut, kurşun vb.), artan kan akımına bağlı olarak inflamasyonlu dokulara taşınır ve subepitelyal bağ dokusunda metalik sülfidler halinde çökelerek mavi/siyah renklenmeler oluşturur. Melanin birikimi fizyolojik bir pigmentasyon olup, ağır metal toksikokinetiğiyle ilgisi olmadığından en güçlü distraktör elenir. Bu renklenmeler sistemik toksisite sonucu değil, lokal inflamasyon alanlarındaki vasküler artışla tetiklenir.

---

### ÇİFT 64 (Benzerlik: 0.72)

**Soru 1 (ID: 35331ff6-465d-4421-bd2b-dbc2d4946c79)**
Soru Kökü: Pemfigus hastalığı ve alt tiplerinin klinik ve histopatolojik özellikleriyle ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Pemfigus foliaceusta otoimmün yıkıma bağlı bül oluşumu subepitelyal düzeyde gerçekleşir.
Açıklama: Tüm pemfigus tiplerinde bül oluşumu intraepitelyaldir; Pemfigus foliaceusta bu ayrılma spesifik olarak epitelin en üst tabakası olan stratum corneumda gerçekleşir. Subepitelyal ayrılma (epitelin bağ dokusundan bazal membran düzeyinde tamamen kalkması) pemfigoid grubunun (sikatrisyel ve büllöz pemfigoid) karakteristik özelliğidir.

**Soru 2 (ID: 8fe5492f-f88c-4f0b-8697-e02a3919c273)**
Soru Kökü: Pemfigus hastalığının alt tipleri incelendiğinde, epitel dokusundaki ayrılmanın (akantolizis) stratum spinosum yerine daha yüzeyel bir tabaka olan stratum corneum düzeyinde gerçekleştiği, nispeten daha hafif seyirli form aşağıdakilerden hangisidir?
Doğru Şık (D): Pemfigus foliaceus
Açıklama: Pemfigus foliaceusta otoantikorlar sadece cildin üst tabakalarındaki desmoglein-1'e saldırdığı için ayrılma en üstteki stratum corneum tabakasında olur ve hastalık daha hafif seyreder. Pemfigus vulgariste ise ayrılma daha derindeki stratum spinosum tabakasında gerçekleşerek intraepitelyal ağır lezyonlar yaratır.

---

### ÇİFT 65 (Benzerlik: 0.72)

**Soru 1 (ID: 35331ff6-465d-4421-bd2b-dbc2d4946c79)**
Soru Kökü: Pemfigus hastalığı ve alt tiplerinin klinik ve histopatolojik özellikleriyle ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Pemfigus foliaceusta otoimmün yıkıma bağlı bül oluşumu subepitelyal düzeyde gerçekleşir.
Açıklama: Tüm pemfigus tiplerinde bül oluşumu intraepitelyaldir; Pemfigus foliaceusta bu ayrılma spesifik olarak epitelin en üst tabakası olan stratum corneumda gerçekleşir. Subepitelyal ayrılma (epitelin bağ dokusundan bazal membran düzeyinde tamamen kalkması) pemfigoid grubunun (sikatrisyel ve büllöz pemfigoid) karakteristik özelliğidir.

**Soru 2 (ID: a1fae126-c635-4a5e-83a2-5bea7a5b8e77)**
Soru Kökü: Pemfigus hastalığının alt tipleri incelendiğinde, epitel dokusundaki ayrılmanın (akantolizis) stratum spinosum yerine daha yüzeyel bir tabaka olan stratum corneum düzeyinde gerçekleştiği, nispeten daha hafif seyirli form aşağıdakilerden hangisidir?
Doğru Şık (D): Pemfigus foliaceus
Açıklama: Pemfigus foliaceusta otoantikorlar sadece cildin üst tabakalarındaki desmoglein-1'e saldırdığı için ayrılma en üstteki stratum corneum tabakasında olur ve hastalık daha hafif seyreder. Pemfigus vulgariste ise ayrılma daha derindeki stratum spinosum tabakasında gerçekleşerek intraepitelyal ağır lezyonlar yaratır.

---

### ÇİFT 66 (Benzerlik: 0.72)

**Soru 1 (ID: 79722cb5-dd0c-4953-9d0f-bbfdb6be68bb)**
Soru Kökü: Pemfigus hastalığı ve alt tiplerinin klinik ve histopatolojik özellikleriyle ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Pemfigus foliaceusta otoimmün yıkıma bağlı bül oluşumu subepitelyal düzeyde gerçekleşir.
Açıklama: Tüm pemfigus tiplerinde bül oluşumu intraepitelyaldir; Pemfigus foliaceusta bu ayrılma spesifik olarak epitelin en üst tabakası olan stratum corneumda gerçekleşir. Subepitelyal ayrılma (epitelin bağ dokusundan bazal membran düzeyinde tamamen kalkması) pemfigoid grubunun (sikatrisyel ve büllöz pemfigoid) karakteristik özelliğidir.

**Soru 2 (ID: 8fe5492f-f88c-4f0b-8697-e02a3919c273)**
Soru Kökü: Pemfigus hastalığının alt tipleri incelendiğinde, epitel dokusundaki ayrılmanın (akantolizis) stratum spinosum yerine daha yüzeyel bir tabaka olan stratum corneum düzeyinde gerçekleştiği, nispeten daha hafif seyirli form aşağıdakilerden hangisidir?
Doğru Şık (D): Pemfigus foliaceus
Açıklama: Pemfigus foliaceusta otoantikorlar sadece cildin üst tabakalarındaki desmoglein-1'e saldırdığı için ayrılma en üstteki stratum corneum tabakasında olur ve hastalık daha hafif seyreder. Pemfigus vulgariste ise ayrılma daha derindeki stratum spinosum tabakasında gerçekleşerek intraepitelyal ağır lezyonlar yaratır.

---

### ÇİFT 67 (Benzerlik: 0.72)

**Soru 1 (ID: 79722cb5-dd0c-4953-9d0f-bbfdb6be68bb)**
Soru Kökü: Pemfigus hastalığı ve alt tiplerinin klinik ve histopatolojik özellikleriyle ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Pemfigus foliaceusta otoimmün yıkıma bağlı bül oluşumu subepitelyal düzeyde gerçekleşir.
Açıklama: Tüm pemfigus tiplerinde bül oluşumu intraepitelyaldir; Pemfigus foliaceusta bu ayrılma spesifik olarak epitelin en üst tabakası olan stratum corneumda gerçekleşir. Subepitelyal ayrılma (epitelin bağ dokusundan bazal membran düzeyinde tamamen kalkması) pemfigoid grubunun (sikatrisyel ve büllöz pemfigoid) karakteristik özelliğidir.

**Soru 2 (ID: a1fae126-c635-4a5e-83a2-5bea7a5b8e77)**
Soru Kökü: Pemfigus hastalığının alt tipleri incelendiğinde, epitel dokusundaki ayrılmanın (akantolizis) stratum spinosum yerine daha yüzeyel bir tabaka olan stratum corneum düzeyinde gerçekleştiği, nispeten daha hafif seyirli form aşağıdakilerden hangisidir?
Doğru Şık (D): Pemfigus foliaceus
Açıklama: Pemfigus foliaceusta otoantikorlar sadece cildin üst tabakalarındaki desmoglein-1'e saldırdığı için ayrılma en üstteki stratum corneum tabakasında olur ve hastalık daha hafif seyreder. Pemfigus vulgariste ise ayrılma daha derindeki stratum spinosum tabakasında gerçekleşerek intraepitelyal ağır lezyonlar yaratır.

---

### ÇİFT 68 (Benzerlik: 0.72)

**Soru 1 (ID: cc863892-34bc-40a5-a300-fe132385cd31)**
Soru Kökü: Otuz iki yaşında erkek hasta, dişetlerinde yeşil renkli çizgilenme şikayetiyle başvuruyor. Anamnezinde bir metal fabrikasında çalıştığı, muayenesinde marjinal dişetini takip eden belirgin yeşil bant izlendiği saptanıyor. Bu klinik tabloya neden olan en olası ajan aşağıdakilerden hangisidir?
Doğru Şık (D): Bakır
Açıklama: Bakır fabrikalarında çalışanlarda görülen mesleki maruziyet sonucunda dişetinde yeşil renkli karakteristik bir pigmentasyon meydana gelir. Kurşun ve bizmut tipik olarak mavi-siyah veya dantel tarzı renklenme yaparken, bakır yeşil renk yansımasıyla doğrudan ayrılır. Bu durum sistemik zehirlenmeyi değil, lokal bir çökelme reaksiyonunu ifade eder.

**Soru 2 (ID: fda119f3-ef0a-43ba-af55-c916132db940)**
Soru Kökü: Kırk beş yaşında erkek hasta, dişeti kenarlarında koyu renkli çizgilenme şikayetiyle başvuruyor. Anamnezinde akü fabrikasında çalıştığı ve son aylarda dişetlerinde kanama olduğu öğreniliyor. İntraoral muayenede sadece enflamasyonlu marjinal dişetini takip eden, tüm dişleri saran dantel şeklinde mavi-siyah bir çizgi (Burton çizgisi) tespit ediliyor. Bu renklenmenin patogenezinden sorumlu olan temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Sistemik absorbe edilen metallerin artan kan akımıyla taşınarak subepitelyal bağ dokusunda sülfid şeklinde çökelmesi
Açıklama: Sistemik olarak absorbe edilen kurşun ve antimon gibi ağır metaller, enflamasyonlu bölgelerdeki artan kan akımı sayesinde dokuya taşınır ve subepitelyal bağ dokusunda sülfidler halinde çökelerek 'Burton çizgileri'ni oluşturur. Amalgam tatuajı distraktörü (lokal travmatik gömülme) bu tablodan farklıdır; tüm dişleri saran bir çizgi değil izole lekeler yaratır. Bu renklenme sistemik toksisitenin doğrudan bir sonucu değil, sadece lokal enflamasyon varlığında metalin çökmesi durumudur.

---

### ÇİFT 69 (Benzerlik: 0.72)

**Soru 1 (ID: 69554bf2-9599-4a8f-9910-5005cc8fff00)**
Soru Kökü: Ağız içine kazayla batan amalgam veya metal parçalarının oluşturduğu lokalize 'amalgam tatuajı' ile sistemik olarak absorbe edilen bizmut ve kurşun gibi ağır metallerin oluşturduğu 'metalik pigmentasyon' tablosu klinik olarak karışabilmektedir.
Sistemik absorpsiyona bağlı metalik pigmentasyonu amalgam tatuajından ayıran en kritik klinik ve hücresel özellik aşağıdakilerden hangisidir?
Doğru Şık (E): Sistemik pigmentasyonun spesifik olarak kanlanmanın arttığı inflamasyon alanlarında çökelme eğilimi göstermesi
Açıklama: Sistemik olarak alınan ağır metaller (bismut, kurşun vb.) kana karışarak dokulara taşınır, ancak dişetinde çökelmeleri için vasküler geçirgenliğin ve kan akımının yüksek olduğu inflamasyonlu bölgelere (gingivitis odaklarına) ihtiyaç duyarlar. Amalgam tatuajı ise restoratif işlemler sırasında metalik parçacıkların travmatik olarak mekanik yolla direkt doku içine gömülmesi (yabancı cisim reaksiyonu) olup inflamasyon ön koşulu aranmaksızın her bölgede görülebilir. Sistemik birikimlerde inflamasyonun tedavi edilmesi (plak kontrolü) ile artan kanlanma duracağı için lekeler de zamanla kaybolabilir.

**Soru 2 (ID: a308c6fe-8b22-4b1d-af05-fdf962e0c9a9)**
Soru Kökü: Sistemik olarak emilen ağır metallerin dişeti renklenmesi oluşturmasındaki temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Metalik sülfidlerin subepitelyal bağ dokusunda çökelmesi
Açıklama: Sistemik olarak absorbe edilen ağır metaller (bizmut, kurşun vb.), artan kan akımına bağlı olarak inflamasyonlu dokulara taşınır ve subepitelyal bağ dokusunda metalik sülfidler halinde çökelerek mavi/siyah renklenmeler oluşturur. Melanin birikimi fizyolojik bir pigmentasyon olup, ağır metal toksikokinetiğiyle ilgisi olmadığından en güçlü distraktör elenir. Bu renklenmeler sistemik toksisite sonucu değil, lokal inflamasyon alanlarındaki vasküler artışla tetiklenir.

---

### ÇİFT 70 (Benzerlik: 0.72)

**Soru 1 (ID: 53ee2956-bba5-4f60-8b78-a555099125f4)**
Soru Kökü: Sağlıklı bir periodonsiyum ile plağa bağlı inflamasyonun erken fazları klinik muayenede karşılaştırıldığında, aşağıdaki parametrelerden hangisinin gingivitis lehine artış göstermesi **beklenmez**?
Doğru Şık (C): Dişeti yüzeyindeki portakal kabuğu (stippling) görünümü
Açıklama: Plağa bağlı gingivitis gelişiminde damarsal yanıtlar artar; bu nedenle sulkus ısısı, kapiller dilatasyon, eritem ve dişeti oluğu sıvısı (DOS) artışı patolojinin bariz ve erken göstergeleridir. Ancak stippling (portakal kabuğu pürtüklü görünüm), inflamasyon sonucu subepitelyal bağ dokusunda toplanan ödemin (sıvının) dokuyu germesiyle silikleşir ve azalır, artış göstermez. Pürtüklülüğün kaybolup yüzeyin düz-parlak hale gelmesi eksudatif değişikliğin doğrudan fiziksel kanıtıdır.

**Soru 2 (ID: 56bcc4d3-bd9f-42c9-ba56-b62eeac7d201)**
Soru Kökü: Aşağıdakilerden hangisi sağlıklı dişeti dokusunun tipik klinik parametrelerinden biri **değildir**?
Doğru Şık (B): Ödemde çukurlaşma izlenen yapı
Açıklama: Sağlıklı dişeti dokusu mercan pembesi renginde, bıçak sırtı formunda ile dişi saran, sıkı ve rezilient (esnek) bir kıvama sahiptir. Ödemde çukurlaşma (pitting) ve dokunun yumuşaması sağlıklı dişetinde değil, gingival inflamasyona bağlı olarak artan eksuda birikiminin izlendiği klinik gingivitis tablosunda ortaya çıkar. Dişeti kenarlarının dantela anahattı sağlıklı konturun klasik bir göstergesidir.

---

### ÇİFT 71 (Benzerlik: 0.71)

**Soru 1 (ID: 26b117e1-816a-44a2-bf10-b86ab8448954)**
Soru Kökü: Sert diş fırçası kullanımı veya kuvvetli horizontal fırçalamaya bağlı gelişen fiziksel dişeti travmalarını, nekrotizan gingivitis gibi mikrobiyal doku kayıplarından ayıran en karakteristik klinik muayene bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): İnterdental papil tepelerinin hasar görmemiş olması
Açıklama: Fırça travmasında yaralanma dişeti kenarının birkaç milimetre altında gerçekleşir ve hastanın oral hijyeni genelde çok iyidir; diş kolesinde abrazyon izlenir ancak papil tepeleri korunur. Nekrotizan gingivitiste ise yıkım spesifik olarak interdental papilden başlar ve papil nekrotik, krater formundadır.

**Soru 2 (ID: 72d0eb54-e9b3-4cd0-be96-dfae381410c4)**
Soru Kökü: Otuz yaşında, yüksek estetik beklentisi olan ve oral hijyenine aşırı dikkat ettiğini belirten bir hasta, sol üst kanin ve küçük azı dişlerinin kole bölgesinde son haftalarda beliren ülserler ve hassasiyet şikayetiyle başvuruyor. Muayenede hastanın genel oral hijyeninin çok iyi olduğu, ilgili bölgede papil tepelerinin hasar görmediği, ancak dişeti kenarının birkaç milimetre altında çizgisel laserasyonlar ve kole bölgesinde minede abrazyon bulunduğu izleniyor.

Bu vakada tespit edilen fiziksel yaralanmanın (fırça travması) klinik görünümünün, Nekrotizan Gingivitis (NG) tablosundan en güvenilir ayırıcı tanısı aşağıdakilerden hangisidir?
Doğru Şık (B): NG'de karakteristik olarak interdental papillerin nekrotik, fırça travmasında ise papil tepelerinin sağlam olması
Açıklama: Sert yatay (horizontal) fırçalamaya bağlı travmatik lezyonlar, dişin en çıkıntılı olduğu kole bölgesi ve marjinal dişeti hizasında yoğunlaşırken, komşu dişler arasındaki anatomik boşluğa gizlenen interdental papiller bu fiziksel travmadan korunur ve sağlam kalır. Nekrotizan Gingivitis (NG) distraktörü ise patolojisine tam olarak interdental papillerden ('zımbalanmış papil' nekrozu) başlayarak marjine yayılan bir enfeksiyondur, bu nedenle papil nekrozu varlığı kesin ayırıcı tanıdır. Travma lezyonlarında lenfadenopati beklenmez.

---

### ÇİFT 72 (Benzerlik: 0.71)

**Soru 1 (ID: 7106eae9-7da9-4575-b24b-375b794bb3fc)**
Soru Kökü: Sert diş fırçası kullanımı veya kuvvetli horizontal fırçalamaya bağlı gelişen fiziksel dişeti travmalarını, nekrotizan gingivitis gibi mikrobiyal doku kayıplarından ayıran en karakteristik klinik muayene bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): İnterdental papil tepelerinin hasar görmemiş olması
Açıklama: Fırça travmasında yaralanma dişeti kenarının birkaç milimetre altında gerçekleşir ve hastanın oral hijyeni genelde çok iyidir; diş kolesinde abrazyon izlenir ancak papil tepeleri korunur. Nekrotizan gingivitiste ise yıkım spesifik olarak interdental papilden başlar ve papil nekrotik, krater formundadır.

**Soru 2 (ID: 72d0eb54-e9b3-4cd0-be96-dfae381410c4)**
Soru Kökü: Otuz yaşında, yüksek estetik beklentisi olan ve oral hijyenine aşırı dikkat ettiğini belirten bir hasta, sol üst kanin ve küçük azı dişlerinin kole bölgesinde son haftalarda beliren ülserler ve hassasiyet şikayetiyle başvuruyor. Muayenede hastanın genel oral hijyeninin çok iyi olduğu, ilgili bölgede papil tepelerinin hasar görmediği, ancak dişeti kenarının birkaç milimetre altında çizgisel laserasyonlar ve kole bölgesinde minede abrazyon bulunduğu izleniyor.

Bu vakada tespit edilen fiziksel yaralanmanın (fırça travması) klinik görünümünün, Nekrotizan Gingivitis (NG) tablosundan en güvenilir ayırıcı tanısı aşağıdakilerden hangisidir?
Doğru Şık (B): NG'de karakteristik olarak interdental papillerin nekrotik, fırça travmasında ise papil tepelerinin sağlam olması
Açıklama: Sert yatay (horizontal) fırçalamaya bağlı travmatik lezyonlar, dişin en çıkıntılı olduğu kole bölgesi ve marjinal dişeti hizasında yoğunlaşırken, komşu dişler arasındaki anatomik boşluğa gizlenen interdental papiller bu fiziksel travmadan korunur ve sağlam kalır. Nekrotizan Gingivitis (NG) distraktörü ise patolojisine tam olarak interdental papillerden ('zımbalanmış papil' nekrozu) başlayarak marjine yayılan bir enfeksiyondur, bu nedenle papil nekrozu varlığı kesin ayırıcı tanıdır. Travma lezyonlarında lenfadenopati beklenmez.

---

### ÇİFT 73 (Benzerlik: 0.70)

**Soru 1 (ID: a308c6fe-8b22-4b1d-af05-fdf962e0c9a9)**
Soru Kökü: Sistemik olarak emilen ağır metallerin dişeti renklenmesi oluşturmasındaki temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Metalik sülfidlerin subepitelyal bağ dokusunda çökelmesi
Açıklama: Sistemik olarak absorbe edilen ağır metaller (bizmut, kurşun vb.), artan kan akımına bağlı olarak inflamasyonlu dokulara taşınır ve subepitelyal bağ dokusunda metalik sülfidler halinde çökelerek mavi/siyah renklenmeler oluşturur. Melanin birikimi fizyolojik bir pigmentasyon olup, ağır metal toksikokinetiğiyle ilgisi olmadığından en güçlü distraktör elenir. Bu renklenmeler sistemik toksisite sonucu değil, lokal inflamasyon alanlarındaki vasküler artışla tetiklenir.

**Soru 2 (ID: fda119f3-ef0a-43ba-af55-c916132db940)**
Soru Kökü: Kırk beş yaşında erkek hasta, dişeti kenarlarında koyu renkli çizgilenme şikayetiyle başvuruyor. Anamnezinde akü fabrikasında çalıştığı ve son aylarda dişetlerinde kanama olduğu öğreniliyor. İntraoral muayenede sadece enflamasyonlu marjinal dişetini takip eden, tüm dişleri saran dantel şeklinde mavi-siyah bir çizgi (Burton çizgisi) tespit ediliyor. Bu renklenmenin patogenezinden sorumlu olan temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Sistemik absorbe edilen metallerin artan kan akımıyla taşınarak subepitelyal bağ dokusunda sülfid şeklinde çökelmesi
Açıklama: Sistemik olarak absorbe edilen kurşun ve antimon gibi ağır metaller, enflamasyonlu bölgelerdeki artan kan akımı sayesinde dokuya taşınır ve subepitelyal bağ dokusunda sülfidler halinde çökelerek 'Burton çizgileri'ni oluşturur. Amalgam tatuajı distraktörü (lokal travmatik gömülme) bu tablodan farklıdır; tüm dişleri saran bir çizgi değil izole lekeler yaratır. Bu renklenme sistemik toksisitenin doğrudan bir sonucu değil, sadece lokal enflamasyon varlığında metalin çökmesi durumudur.

---

### ÇİFT 74 (Benzerlik: 0.70)

**Soru 1 (ID: 69554bf2-9599-4a8f-9910-5005cc8fff00)**
Soru Kökü: Ağız içine kazayla batan amalgam veya metal parçalarının oluşturduğu lokalize 'amalgam tatuajı' ile sistemik olarak absorbe edilen bizmut ve kurşun gibi ağır metallerin oluşturduğu 'metalik pigmentasyon' tablosu klinik olarak karışabilmektedir.
Sistemik absorpsiyona bağlı metalik pigmentasyonu amalgam tatuajından ayıran en kritik klinik ve hücresel özellik aşağıdakilerden hangisidir?
Doğru Şık (E): Sistemik pigmentasyonun spesifik olarak kanlanmanın arttığı inflamasyon alanlarında çökelme eğilimi göstermesi
Açıklama: Sistemik olarak alınan ağır metaller (bismut, kurşun vb.) kana karışarak dokulara taşınır, ancak dişetinde çökelmeleri için vasküler geçirgenliğin ve kan akımının yüksek olduğu inflamasyonlu bölgelere (gingivitis odaklarına) ihtiyaç duyarlar. Amalgam tatuajı ise restoratif işlemler sırasında metalik parçacıkların travmatik olarak mekanik yolla direkt doku içine gömülmesi (yabancı cisim reaksiyonu) olup inflamasyon ön koşulu aranmaksızın her bölgede görülebilir. Sistemik birikimlerde inflamasyonun tedavi edilmesi (plak kontrolü) ile artan kanlanma duracağı için lekeler de zamanla kaybolabilir.

**Soru 2 (ID: 770e0ea0-cfc3-4a7f-90de-4b5e09de52cb)**
Soru Kökü: Sistemik absorbsiyon sonucu subepitelyal bağ dokusunda sülfid formunda çökerek dişeti ve ağız mukozasını boyayan ve karakteristik olarak siyah/mavimsi bir çizgi oluşturan metal toksisiteleri mevcuttur.
Aşağıdakilerden hangisi terapötik veya mesleki maruziyet sonucu bu tip spesifik marjinal metalik pigmentasyona yol açan elementlerden biri **değildir**?
Doğru Şık (D): Titanyum
Açıklama: Bizmut, arsenik, cıva, kurşun ve gümüş gibi ağır metaller dolaşımla geldikleri inflamasyonlu dişeti marjininde metalik sülfid formunda çökelerek mavi/siyah patolojik hatlar oluştururlar. Titanyum ise dental implantolojide yoğun olarak kullanılan, vücut dokularıyla yüksek biyouyumluluğa sahip, sistemik emilimle marjinal dişetinde patolojik sülfid birikim hattı oluşturmayan bir inert geçiş metalidir. Bahsi geçen renklenme doğrudan metal toksisitesi göstergesi olmayıp lokal dişeti inflamasyonunun yansımasıdır.

---

### ÇİFT 75 (Benzerlik: 0.70)

**Soru 1 (ID: 815de92f-40e0-4309-9934-531eb26c6c4d)**
Soru Kökü: Antikonvülsan, immünsupresif veya kalsiyum kanal blokörlerine bağlı gelişen dişeti büyümelerinde, epitelde mikroskobik olarak gözlenen tipik histopatolojik bulgu kombinasyonu aşağıdakilerden hangisidir?
Doğru Şık (A): Akantoz ve parakeratoz
Açıklama: İlaç etkileşimli dişeti büyümelerinin histopatolojisinde epitel dokusunda kalınlaşma (akantoz) ve yüzeyel hücrelerde çekirdek varlığının devam etmesi (parakeratoz) saptanır. Akantoliz ve Tzanck hücreleri viral veya otoimmün (Pemfigus) hastalıklarda görülürken, ilaca bağlı doku artışlarında fibrotik elemanlarla birlikte karakteristik olarak akantoz tablosu hakimdir.

**Soru 2 (ID: da734d8b-654a-4fd7-b5bb-70fe7b24068e)**
Soru Kökü: İlaca bağlı gelişen dişeti büyümeleri (antikonvülsanlar, immünsüpresifler, kalsiyum kanal blokörleri) ile ilgili;

I. Büyüme ilk olarak interdental papil bölgesinde belirginleşir.
II. İlaç kullanımına başlandıktan sonra genellikle ilk 3 ay içinde büyüme başlangıcı izlenir.
III. Artan doku kitlesinin histolojisinde temel olarak kollajen olmayan matriks ve ana madde artışı gözlenir.

ifadelerinden hangileri doğrudur?
Doğru Şık (D): I, II ve III
Açıklama: İlaca bağlı dişeti büyümeleri hücresel hiperplaziden ziyade matriks döngüsünün bozulması sonucu, bağ dokusu içerisinde büyük oranda kollajen olmayan matriks ve ana madde artışıyla karakterizedir (III doğru). Bu büyümeler anterior bölgeye ve interdental papile daha çok eğilimlidir (I doğru). Klinik tablo tipik olarak ilacın alımını takiben ilk 3 ay içinde klinik belirti vermeye başlar (II doğru).

---

### ÇİFT 76 (Benzerlik: 0.70)

**Soru 1 (ID: 770e0ea0-cfc3-4a7f-90de-4b5e09de52cb)**
Soru Kökü: Sistemik absorbsiyon sonucu subepitelyal bağ dokusunda sülfid formunda çökerek dişeti ve ağız mukozasını boyayan ve karakteristik olarak siyah/mavimsi bir çizgi oluşturan metal toksisiteleri mevcuttur.
Aşağıdakilerden hangisi terapötik veya mesleki maruziyet sonucu bu tip spesifik marjinal metalik pigmentasyona yol açan elementlerden biri **değildir**?
Doğru Şık (D): Titanyum
Açıklama: Bizmut, arsenik, cıva, kurşun ve gümüş gibi ağır metaller dolaşımla geldikleri inflamasyonlu dişeti marjininde metalik sülfid formunda çökelerek mavi/siyah patolojik hatlar oluştururlar. Titanyum ise dental implantolojide yoğun olarak kullanılan, vücut dokularıyla yüksek biyouyumluluğa sahip, sistemik emilimle marjinal dişetinde patolojik sülfid birikim hattı oluşturmayan bir inert geçiş metalidir. Bahsi geçen renklenme doğrudan metal toksisitesi göstergesi olmayıp lokal dişeti inflamasyonunun yansımasıdır.

**Soru 2 (ID: edcb1ea1-0141-4ebc-9632-a2234fd89852)**
Soru Kökü: 45 yaşında erkek hasta, uzun yıllardır akü geri dönüşüm tesisinde çalıştığını ve son aylarda dişetlerinde koyu renkli bir hat fark ettiğini belirtiyor. Ağız içi muayenesinde marjinal dişeti boyunca uzanan ve kolede yoğunlaşan, dantel şeklinde mavimsi-siyah çizgilenmeler (Burton çizgileri) saptanıyor.
Sistemik absorpsiyona sekonder olarak gelişen bu spesifik klinik tablo aşağıdaki ağır metallerden hangisinin birikimi sonucudur?
Doğru Şık (B): Kurşun
Açıklama: Kurşun ve antimon intoksikasyonlarında veya uzun süreli maruziyetlerinde dişin kolesinde marjinal gingivayı takip eden, karakteristik dantel şeklindeki spesifik siyah/mavimsi çizgilere tıbbi literatürde 'Burton çizgileri' denir. Cıva, bizmut ve gümüş de metalik pigmentasyon yapmasına rağmen, akü sanayi öyküsü ve spesifik 'dantel şeklindeki kole birikimi' kurşun zehirlenmesinin (plumbizm) ayırıcı semptomudur. İlgili bölgedeki inflamasyonun giderilmesi, kanlanmayı azaltarak bu lekelerin yok edilmesini sağlar.

---

### ÇİFT 77 (Benzerlik: 0.70)

**Soru 1 (ID: 379b8d18-19b9-4d38-bece-ec0c649be6b3)**
Soru Kökü: C vitamini eksikliğine (Skorbüt) bağlı dişeti kanamalarında, aşağıdaki histolojik ve hücresel mekanizmalardan hangisinin rolü **yoktur**?
Doğru Şık (E): Koagülasyon kaskadında faktör eksikliği sonucu pıhtılaşmanın uzaması
Açıklama: C vitamini (askorbik asit) eksikliğinde prolinin hidroksilasyonu bozulur ve sağlam kollajen sentezi yetersiz kalır, bu durum damar çeperi bütünlüğünü bozarak vasküler anomali tipi kanamaya yol açar. Koagülasyon kaskadı bozuklukları (ör. Faktör VIII eksikliği) hemofilinin patogenezidir ve skorbüt mekanizmasıyla ilişkisizdir. Skorbütte bozulan ve ödem toplayan bağ dokusu, endotoksin geçirgenliğini artırarak klinik kanama ve doku frajilitesini şiddetlendirir.

**Soru 2 (ID: aa5fa0aa-1136-4aba-ad7c-60c6bc520594)**
Soru Kökü: Düzensiz beslenme alışkanlığı olan kırk beş yaşında erkek hasta, dişetlerinde spontan kanama, parlak ve kırılgan mavimsi kırmızı görünüm şikayetiyle başvuruyor. Alınan anamnezde diyetinin taze sebze ve meyveden yoksun olduğu belirleniyor. Bu hastanın dişeti dokularındaki klinik tablonun hücresel temelini oluşturan mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): Prolin hidroksilasyonunun bozulması ve PMNL hareketliliğinin azalması
Açıklama: C vitamini (askorbik asit) eksikliği olan skorbüt hastalığında, kollajen sentezi için şart olan prolin hidroksilasyonu gerçekleşemez. Bu durum vasküler frajiliteye ve kanamalara yol açar. Ayrıca PMNL hareketliliğinin (kemotaksis) bozulmasıyla koruyucu mekanizmalar çöker ve mukozada endotoksin permeabilitesi artarak inflamasyonun yayılımını hızlandırır.

---

### ÇİFT 78 (Benzerlik: 0.70)

**Soru 1 (ID: 0babf1a1-9bb8-433d-b1bd-29e7386742fb)**
Soru Kökü: Eritema Multiforme (EM) hastalığının etyopatogenezinde immün kompleks vasküliti önemli bir rol oynamaktadır. Literatürde EM patogenezini tetiklediği düşünülen faktörler arasında;

I. Herpes Simplex Virüs (HSV) enfeksiyonu
II. COVID-19 enfeksiyonu
III. Sülfonamidler ve NSAİ gibi çeşitli ilaçlar

unsurlarından hangileri yer almaktadır?
Doğru Şık (D): I, II ve III
Açıklama: Eritema Multiforme reaktif ve akut bir mukokutanöz hastalık olup, patogenezinde keratinositlere karşı sitotoksik bir immün reaksiyon vardır. Etkenler arasında en sık viral enfeksiyonlar (özellikle HSV ve son yıllarda COVID-19) ve farmakolojik ajanlar (sülfonamidler, penisilinler, NSAİ'ler, antikonvülzanlar) yer almaktadır (Tümü doğrudur). İmmün komplekslerin küçük damarları tıkaması sonucu iskemik nekroz gelişir ve bu durum karakteristik 'zambak' veya hedef lezyonlarına yol açar.

**Soru 2 (ID: f992d690-260b-43b4-997d-edaa6e78bdcd)**
Soru Kökü: Reaktif, akut ve vezikülobüllöz karakterde bir hastalık olan Eritema multiformenin etiyolojisinde birçok farklı faktör rol oynamaktadır. Aşağıdakilerden hangisi bu hastalığın patogenezini tetikleyen ajan veya durumlardan biri **değildir**?
Doğru Şık (B): Beta bloker ilaçlar
Açıklama: Eritema multiformeyi tetikleyen ana faktörler HSV, COVID-19, sülfonamidler, penisilinler, NSAİ'ler ve antikonvülsanlardır. Beta blokerler bu sendromun spesifik tetikleyicilerinden biri olarak tanımlanmaz.

---

### ÇİFT 79 (Benzerlik: 0.70)

**Soru 1 (ID: 0babf1a1-9bb8-433d-b1bd-29e7386742fb)**
Soru Kökü: Eritema Multiforme (EM) hastalığının etyopatogenezinde immün kompleks vasküliti önemli bir rol oynamaktadır. Literatürde EM patogenezini tetiklediği düşünülen faktörler arasında;

I. Herpes Simplex Virüs (HSV) enfeksiyonu
II. COVID-19 enfeksiyonu
III. Sülfonamidler ve NSAİ gibi çeşitli ilaçlar

unsurlarından hangileri yer almaktadır?
Doğru Şık (D): I, II ve III
Açıklama: Eritema Multiforme reaktif ve akut bir mukokutanöz hastalık olup, patogenezinde keratinositlere karşı sitotoksik bir immün reaksiyon vardır. Etkenler arasında en sık viral enfeksiyonlar (özellikle HSV ve son yıllarda COVID-19) ve farmakolojik ajanlar (sülfonamidler, penisilinler, NSAİ'ler, antikonvülzanlar) yer almaktadır (Tümü doğrudur). İmmün komplekslerin küçük damarları tıkaması sonucu iskemik nekroz gelişir ve bu durum karakteristik 'zambak' veya hedef lezyonlarına yol açar.

**Soru 2 (ID: 2ada0e2d-6b4e-4dbd-b287-a6be21160ef7)**
Soru Kökü: Reaktif, akut ve vezikülobüllöz karakterde bir hastalık olan Eritema multiformenin etiyolojisinde birçok farklı faktör rol oynamaktadır. Aşağıdakilerden hangisi bu hastalığın patogenezini tetikleyen ajan veya durumlardan biri **değildir**?
Doğru Şık (B): Beta bloker ilaçlar
Açıklama: Eritema multiformeyi tetikleyen ana faktörler HSV, COVID-19, sülfonamidler, penisilinler, NSAİ'ler ve antikonvülsanlardır. Beta blokerler bu sendromun spesifik tetikleyicilerinden biri olarak tanımlanmaz.

---

### ÇİFT 80 (Benzerlik: 0.69)

**Soru 1 (ID: 1c8b01f1-590a-4a2b-b608-27e6a4c915fa)**
Soru Kökü: Altmış beş yaşında bir hasta, sağ alt çenesinde diş kaynaklı olduğunu düşündüğü ancak diş hekimince lokalize edilemeyen şiddetli bir ağrı tarif ediyor. Üç gün sonra aynı taraftaki dişetleri ve dudak mukozası üzerinde, orta hattı geçmeyen küçük veziküller ve takiben ağrısız fibrin kaplı ülserler gelişiyor.

Bu klinik tabloyu oluşturan etkenin patogenezi için en olası açıklama aşağıdakilerden hangisidir?
Doğru Şık (C): Varicella zoster virüsünün latent kaldığı dorsal kök gangliyonundan reaktive olarak sinir trasesini takip etmesi
Açıklama: İleri yaşta, veziküllerden günler önce ortaya çıkan şiddetli prodromal ağrı ve lezyonların spesifik bir sinir trasesini takip ederek tek taraflı (unilateral) kalması, Herpes Zoster (Zona) hastalığının patognomonik tablosudur. HSV-1 distraktörü (uçuk) benzer intraoral veziküller yapsa da, sinir dağılımını izleyen bu tipik unilateral paterni ve şiddetli prodromal nevraljiyi göstermez. Varicella zoster, çocukluktaki primer enfeksiyondan sonra latent kalır ve hücresel immünitenin zayıflamasıyla reaktive olur.

**Soru 2 (ID: 5d0f4194-c3cc-4f4f-8963-25f6259bdc66)**
Soru Kökü: Dört yaşında erkek çocuk, ateşi 39 dereceye ulaştıktan iki gün sonra başlayan yaygın ağız içi yaralar nedeniyle kliniğe getiriliyor. Muayenede dudaklarda, dişetinde ve damakta birleşme eğiliminde olan çok sayıda fibrin kaplı ülser, marjinal dişetlerinde ateş kırmızısı bir eritem ve şiddetli lenfadenopati izleniyor. Anamnezden çocuğun ağrı nedeniyle sıvı alamadığı öğreniliyor.

Bu klinik tablonun etyolojisinden sorumlu patojen ve histolojik tanısında tespit edilen tipik hücresel yapı aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (D): Herpes simplex virüs tip 1 — Tzanck hücreleri
Açıklama: Bir-üç yaş arası çocuklarda yüksek ateş, lenfadenopati ve veziküllerin rüptüre olmasıyla karakterize fibrin kaplı yaygın ülserlerle seyreden hastalık, Herpes simplex virüs tip 1 kaynaklı Primer Herpetik Gingivostomatit'tir. En güçlü distraktör olan Varicella zoster, çocuklukta döküntülü su çiçeği yapar fakat bu denli spesifik gingival eritem ve ağrılı akut stomatit tablosu HSV-1'e aittir. Hastalığın histopatolojisinde viral sitopatik etkinin göstergesi olan Tzanck hücrelerine (multinükleer dev hücreler) rastlanır.

---

### ÇİFT 81 (Benzerlik: 0.69)

**Soru 1 (ID: 379b8d18-19b9-4d38-bece-ec0c649be6b3)**
Soru Kökü: C vitamini eksikliğine (Skorbüt) bağlı dişeti kanamalarında, aşağıdaki histolojik ve hücresel mekanizmalardan hangisinin rolü **yoktur**?
Doğru Şık (E): Koagülasyon kaskadında faktör eksikliği sonucu pıhtılaşmanın uzaması
Açıklama: C vitamini (askorbik asit) eksikliğinde prolinin hidroksilasyonu bozulur ve sağlam kollajen sentezi yetersiz kalır, bu durum damar çeperi bütünlüğünü bozarak vasküler anomali tipi kanamaya yol açar. Koagülasyon kaskadı bozuklukları (ör. Faktör VIII eksikliği) hemofilinin patogenezidir ve skorbüt mekanizmasıyla ilişkisizdir. Skorbütte bozulan ve ödem toplayan bağ dokusu, endotoksin geçirgenliğini artırarak klinik kanama ve doku frajilitesini şiddetlendirir.

**Soru 2 (ID: 942cdbd0-8caf-4c79-b30f-50168451bb43)**
Soru Kökü: Sistemik faktörlerin dişeti hastalıklarını modifiye etme potansiyelleri düşünüldüğünde, Askorbik asit (Vitamin C) eksikliği patogenezi için aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Lamina propriada karakteristik olarak bant şeklinde yoğun T-lenfosit infiltrasyonu oluşturur.
Açıklama: Lamina propriada bant şeklinde T-lenfosit infiltrasyonu C vitamini eksikliğinin değil, hücresel immünitenin aracılık ettiği Liken Planus patolojisinin karakteristik bulgusudur. Skorbütte prolin hidroksilasyonunun bozulması sonucu kollajen sentezi sekteye uğrar ve endotoksin permeabilitesi artar. PMNL disfonksiyonu ile birlikte dokunun plağa olan yanıtı dramatik şekilde şiddetlenir, spontan kanamaya yatkın frajil dişetleri ortaya çıkar.

---

### ÇİFT 82 (Benzerlik: 0.69)

**Soru 1 (ID: 20b6d9f5-013e-4581-9a14-2d7fdb21cc35)**
Soru Kökü: 12 yaşında erkek hasta, hafif bir elma ısırma travması sonrası iki saat boyunca durdurulamayan dişeti sızıntısı şikayeti ile kliniğe getiriliyor. Tıbbi anamnezinde pıhtılaşma kaskadında faktör IX eksikliği (Christmas hastalığı) olduğu saptanıyor.
Dişeti kanamasına yol açan bu hastalık aşağıdaki ana kategorilerden hangisinde sınıflandırılır?
Doğru Şık (C): Koagülasyon bozuklukları
Açıklama: Christmas hastalığı (Hemofili B), sekonder hemostazda görevli koagülasyon kaskadının faktör IX eksikliği kaynaklı spesifik bir bozukluğudur ve klasik hemofili ile birlikte 'Koagülasyon bozuklukları' başlığı altında incelenir. İdiyopatik trombositopenik purpura platelet fonksiyonlarını, Skorbüt (beslenme bozukluğu) ise damar çeperi sağlığını (vasküler anomali) etkiler. Sekonder hemostazı bozulan hastalarda minimal plak varlığı bile uzun süren ve durmayan koagülasyon kaynaklı kanamalara neden olur.

**Soru 2 (ID: 837abcb9-de40-45c4-8894-04388abed14d)**
Soru Kökü: 32 yaşında kadın hasta, yumuşak diş fırçası kullanımına rağmen uzun süren dişeti kanaması şikayeti ile başvuruyor. Muayenede dişetlerinde yaygın kırmızı-mor peteşiyel kanamalar izleniyor. Hastanın hematolojik laboratuvar testlerinde platelet tromboplastik faktör (PF3) eksikliği saptanıyor.
Bu hastanın kanama profili, anormal gingival kanamalar tablosunda aşağıdaki bozukluk kategorilerinden hangisine girer?
Doğru Şık (B): Platelet bozuklukları
Açıklama: Platelet tromboplastik faktör (PF3) eksikliği, primer hemostazın temel hücresel elemanı olan trombositlerin fonksiyonel bozukluğuna işaret eder ve doğrudan 'Platelet bozuklukları' sınıfında yer alır. Hemofili veya lösemi gibi sistemik durumlar koagülasyon (pıhtılaşma faktörleri) bozukluklarına, C vitamini eksikliği ise damar cidarını ilgilendiren vasküler anomalilere örnektir. Dişetindeki peteşiyel morarmalar, trombosit sayısının veya fonksiyonunun yetersiz kaldığı durumların klasik yansımasıdır.

---

### ÇİFT 83 (Benzerlik: 0.69)

**Soru 1 (ID: 6e1e2692-a183-493a-a0f7-32e9a2efd500)**
Soru Kökü: Vezikülobüllöz mukokutanöz hastalıkların fiziksel muayenesinde kullanılan Nikolsky belirtisi, sağlam görünen deriye veya mukozaya parmakla uygulanan yatay bası sonucu epitelin alttaki dokudan sıyrılarak ayrılması durumudur.

Klinik muayenede tipik olarak pozitif Nikolsky belirtisi vermesi beklenen hastalıklar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (E): Pemfigus vulgaris ve Müköz membran pemfigoidi
Açıklama: Nikolsky belirtisi, epitel içi (desmozom yıkımı) veya subepitelyal (hemidesmozom yıkımı) hücresel bağların zayıfladığı büllöz hastalıklarda görülen doku ayrılmasıdır. Pemfigus vulgaris'te akantolizise bağlı intraepitelyal ayrılma, Müköz membran pemfigoidinde ise otoimmün saldırıya bağlı subepitelyal ayrılma zemininde yatay friksiyonla epitelin kolayca sıyrılması gözlenir. Büllöz pemfigoid distraktöründe Nikolsky klinik olarak genellikle negatiftir.

**Soru 2 (ID: 90dd4b28-3d3d-4a36-84a0-64badc1cc1e1)**
Soru Kökü: Elli yaşında kadın hasta, ağzında çıkan ve kolayca patlayarak yerini çok ağrılı geniş yaralara bırakan su dolu kabarcıklar şikayetiyle başvuruyor. Muayenede yanak, yumuşak damak ve dişetinde yaygın erozyonlar ile sağlam görünen mukozaya yatay bası uygulandığında epitelin kolayca sıyrılarak ayrıldığı (Nikolsky pozitif) saptanıyor. Alınan biyopsinin mikroskobik incelemesinde hücreler arası bağlantılarını kaybeden hücreler ve bazal tabakada tek sıralı mezar taşı görünümü tespit ediliyor.

Bu vakadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Pemfigus vulgaris
Açıklama: Vakada tarif edilen akantolizis (hücreler arası bağlantı kaybı), Nikolsky pozitifliği ve bazal hücrelerin lamina propriaya bağlı kalarak mezar taşı dizilimi oluşturması Pemfigus Vulgaris'in patognomonik histolojik tablolarıdır. Skatrisyel pemfigoid distraktörü de Nikolsky pozitif olabilir ancak onda ayrılma subepitelyaldir ve mezar taşı görünümü izlenmez. Pemfigus vulgaris otoimmün olarak desmoglein 3'e karşı gelişen antikorlarla stratum spinosumda (intraepitelyal) ayrılma yaratır ve vezikülobüllöz hastalıklar içinde en yüksek mortalite riskine sahip olandır.

---

### ÇİFT 84 (Benzerlik: 0.69)

**Soru 1 (ID: 19b53010-7574-4889-aef3-16bf8d40c085)**
Soru Kökü: Yirmi beş yaşında erkek hasta, dudaklarında kalın sarımsı fibrinöz kabuklanmalar ve ağız içinde geniş ülserlerle kliniğe başvuruyor. Deri muayenesinde kollarında eritematöz bir alan içinde beyaz halka ile çevrili santral bül içeren 'zambak (hedef)' benzeri lezyonlar izleniyor. Bu klinik tabloya yol açan en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Eritema multiforme
Açıklama: Hedef derisi veya zambak görünümlü deri lezyonları ile dudaklarda yaygın hemorajik/fibrinöz kabuklanma eritema multiformenin (EM) en karakteristik klinik belirtisidir. Diğer vezikülobüllöz hastalıklarda (pemfigus/pemfigoid) bu spesifik konsantrik halkalı zambak görünümü izlenmez.

**Soru 2 (ID: 467f300c-231b-4247-80d1-cb68f200912b)**
Soru Kökü: Kırk beş yaşında kadın hasta, yanak mukozasında iki taraflı yerleşim gösteren, ağrısız, ağ şeklinde beyaz çizgilenmeler şikayetiyle başvuruyor. Hastanın klinik muayenesinde saptanan bu karakteristik bulgunun, aşağıdaki mukokutanöz hastalıkların hangisinin teşhisinde temel kaynak olması en olasıdır?
Doğru Şık (C): Oral liken planüs
Açıklama: Oral liken planüsün (OLP) en karakteristik klinik görüntüsü ve teşhis kaynağı, genellikle bilateral yerleşim gösteren beyaz Wickham çizgileridir. Pemfigus ve pemfigoid vezikülobüllöz karakterde olup bül rüptürü sonrası erozyonlarla seyrederken, OLP'deki retiküler form semptomsuz keratotik bir ağ yapısı sergiler. Bu spesifik beyaz papül/çizgi konfigürasyonu OLP için patognomoniktir.

---

### ÇİFT 85 (Benzerlik: 0.69)

**Soru 1 (ID: 19b53010-7574-4889-aef3-16bf8d40c085)**
Soru Kökü: Yirmi beş yaşında erkek hasta, dudaklarında kalın sarımsı fibrinöz kabuklanmalar ve ağız içinde geniş ülserlerle kliniğe başvuruyor. Deri muayenesinde kollarında eritematöz bir alan içinde beyaz halka ile çevrili santral bül içeren 'zambak (hedef)' benzeri lezyonlar izleniyor. Bu klinik tabloya yol açan en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Eritema multiforme
Açıklama: Hedef derisi veya zambak görünümlü deri lezyonları ile dudaklarda yaygın hemorajik/fibrinöz kabuklanma eritema multiformenin (EM) en karakteristik klinik belirtisidir. Diğer vezikülobüllöz hastalıklarda (pemfigus/pemfigoid) bu spesifik konsantrik halkalı zambak görünümü izlenmez.

**Soru 2 (ID: d6b506f9-6b09-4144-ad8d-09cf96f5d3c4)**
Soru Kökü: Kırk beş yaşında kadın hasta, yanak mukozasında iki taraflı yerleşim gösteren, ağrısız, ağ şeklinde beyaz çizgilenmeler şikayetiyle başvuruyor. Hastanın klinik muayenesinde saptanan bu karakteristik bulgunun, aşağıdaki mukokutanöz hastalıkların hangisinin teşhisinde temel kaynak olması en olasıdır?
Doğru Şık (C): Oral liken planüs
Açıklama: Oral liken planüsün (OLP) en karakteristik klinik görüntüsü ve teşhis kaynağı, genellikle bilateral yerleşim gösteren beyaz Wickham çizgileridir. Pemfigus ve pemfigoid vezikülobüllöz karakterde olup bül rüptürü sonrası erozyonlarla seyrederken, OLP'deki retiküler form semptomsuz keratotik bir ağ yapısı sergiler. Bu spesifik beyaz papül/çizgi konfigürasyonu OLP için patognomoniktir.

---

### ÇİFT 86 (Benzerlik: 0.69)

**Soru 1 (ID: 467f300c-231b-4247-80d1-cb68f200912b)**
Soru Kökü: Kırk beş yaşında kadın hasta, yanak mukozasında iki taraflı yerleşim gösteren, ağrısız, ağ şeklinde beyaz çizgilenmeler şikayetiyle başvuruyor. Hastanın klinik muayenesinde saptanan bu karakteristik bulgunun, aşağıdaki mukokutanöz hastalıkların hangisinin teşhisinde temel kaynak olması en olasıdır?
Doğru Şık (C): Oral liken planüs
Açıklama: Oral liken planüsün (OLP) en karakteristik klinik görüntüsü ve teşhis kaynağı, genellikle bilateral yerleşim gösteren beyaz Wickham çizgileridir. Pemfigus ve pemfigoid vezikülobüllöz karakterde olup bül rüptürü sonrası erozyonlarla seyrederken, OLP'deki retiküler form semptomsuz keratotik bir ağ yapısı sergiler. Bu spesifik beyaz papül/çizgi konfigürasyonu OLP için patognomoniktir.

**Soru 2 (ID: d62f88c3-2f09-4137-8aab-f87d845fb082)**
Soru Kökü: Yirmi beş yaşında erkek hasta, dudaklarında kalın sarımsı fibrinöz kabuklanmalar ve ağız içinde geniş ülserlerle kliniğe başvuruyor. Deri muayenesinde kollarında eritematöz bir alan içinde beyaz halka ile çevrili santral bül içeren 'zambak (hedef)' benzeri lezyonlar izleniyor. Bu klinik tabloya yol açan en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Eritema multiforme
Açıklama: Hedef derisi veya zambak görünümlü deri lezyonları ile dudaklarda yaygın hemorajik/fibrinöz kabuklanma eritema multiformenin (EM) en karakteristik klinik belirtisidir. Diğer vezikülobüllöz hastalıklarda (pemfigus/pemfigoid) bu spesifik konsantrik halkalı zambak görünümü izlenmez.

---

### ÇİFT 87 (Benzerlik: 0.69)

**Soru 1 (ID: d62f88c3-2f09-4137-8aab-f87d845fb082)**
Soru Kökü: Yirmi beş yaşında erkek hasta, dudaklarında kalın sarımsı fibrinöz kabuklanmalar ve ağız içinde geniş ülserlerle kliniğe başvuruyor. Deri muayenesinde kollarında eritematöz bir alan içinde beyaz halka ile çevrili santral bül içeren 'zambak (hedef)' benzeri lezyonlar izleniyor. Bu klinik tabloya yol açan en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Eritema multiforme
Açıklama: Hedef derisi veya zambak görünümlü deri lezyonları ile dudaklarda yaygın hemorajik/fibrinöz kabuklanma eritema multiformenin (EM) en karakteristik klinik belirtisidir. Diğer vezikülobüllöz hastalıklarda (pemfigus/pemfigoid) bu spesifik konsantrik halkalı zambak görünümü izlenmez.

**Soru 2 (ID: d6b506f9-6b09-4144-ad8d-09cf96f5d3c4)**
Soru Kökü: Kırk beş yaşında kadın hasta, yanak mukozasında iki taraflı yerleşim gösteren, ağrısız, ağ şeklinde beyaz çizgilenmeler şikayetiyle başvuruyor. Hastanın klinik muayenesinde saptanan bu karakteristik bulgunun, aşağıdaki mukokutanöz hastalıkların hangisinin teşhisinde temel kaynak olması en olasıdır?
Doğru Şık (C): Oral liken planüs
Açıklama: Oral liken planüsün (OLP) en karakteristik klinik görüntüsü ve teşhis kaynağı, genellikle bilateral yerleşim gösteren beyaz Wickham çizgileridir. Pemfigus ve pemfigoid vezikülobüllöz karakterde olup bül rüptürü sonrası erozyonlarla seyrederken, OLP'deki retiküler form semptomsuz keratotik bir ağ yapısı sergiler. Bu spesifik beyaz papül/çizgi konfigürasyonu OLP için patognomoniktir.

---

### ÇİFT 88 (Benzerlik: 0.69)

**Soru 1 (ID: 8e5f25dc-ca24-4d82-a796-8b3eb1409c3a)**
Soru Kökü: Pemfigus vulgaris tablosunda mukoza lezyonlarına ek olarak deride de yaygın büller izlenmektedir. Bu tablonun deri komponentini oluşturan ve keratinositler arası tutunmayı engelleyen otoantikorlar primer olarak hangi molekülü hedefler?
Doğru Şık (A): Desmoglein 1
Açıklama: Pemfigus vulgariste deri bulgularının gelişiminden sorumlu ana antijenik hedef desmoglein 1'dir. Ağızda desmoglein 3 hedef alınırken, antikorların her iki proteine de reaksiyon göstermesi mukokutanöz yaygın yıkım tablosunu oluşturur.

**Soru 2 (ID: a7d3efb2-ef0c-48a2-b760-33a6798d1feb)**
Soru Kökü: Pemfigus vulgaris hastalığında Tzanck hücrelerinin oluşumuna neden olan epitel içi ayrılma, epitelin hangi spesifik histolojik katmanında gerçekleşmektedir?
Doğru Şık (C): Stratum spinosum
Açıklama: Pemfigus vulgariste hedef alınan desmoglein 3 proteini, skuamöz epitelin stratum spinosum tabakasında yoğun olarak bulunur. Ayrılma bu tabakada gerçekleşir, altta kalan bazal tabaka hücreleri 'mezar taşı' görünümüyle bağ dokusuna yapışık kalır.

---

### ÇİFT 89 (Benzerlik: 0.69)

**Soru 1 (ID: 8e5f25dc-ca24-4d82-a796-8b3eb1409c3a)**
Soru Kökü: Pemfigus vulgaris tablosunda mukoza lezyonlarına ek olarak deride de yaygın büller izlenmektedir. Bu tablonun deri komponentini oluşturan ve keratinositler arası tutunmayı engelleyen otoantikorlar primer olarak hangi molekülü hedefler?
Doğru Şık (A): Desmoglein 1
Açıklama: Pemfigus vulgariste deri bulgularının gelişiminden sorumlu ana antijenik hedef desmoglein 1'dir. Ağızda desmoglein 3 hedef alınırken, antikorların her iki proteine de reaksiyon göstermesi mukokutanöz yaygın yıkım tablosunu oluşturur.

**Soru 2 (ID: f0863f2b-c2ba-4085-ab63-4d8233f67159)**
Soru Kökü: Pemfigus vulgaris hastalığında Tzanck hücrelerinin oluşumuna neden olan epitel içi ayrılma, epitelin hangi spesifik histolojik katmanında gerçekleşmektedir?
Doğru Şık (C): Stratum spinosum
Açıklama: Pemfigus vulgariste hedef alınan desmoglein 3 proteini, skuamöz epitelin stratum spinosum tabakasında yoğun olarak bulunur. Ayrılma bu tabakada gerçekleşir, altta kalan bazal tabaka hücreleri 'mezar taşı' görünümüyle bağ dokusuna yapışık kalır.

---

### ÇİFT 90 (Benzerlik: 0.69)

**Soru 1 (ID: 3b0c9c3e-6a18-4241-bd39-b548cbb8f326)**
Soru Kökü: Pemfigus vulgaris tablosunda mukoza lezyonlarına ek olarak deride de yaygın büller izlenmektedir. Bu tablonun deri komponentini oluşturan ve keratinositler arası tutunmayı engelleyen otoantikorlar primer olarak hangi molekülü hedefler?
Doğru Şık (A): Desmoglein 1
Açıklama: Pemfigus vulgariste deri bulgularının gelişiminden sorumlu ana antijenik hedef desmoglein 1'dir. Ağızda desmoglein 3 hedef alınırken, antikorların her iki proteine de reaksiyon göstermesi mukokutanöz yaygın yıkım tablosunu oluşturur.

**Soru 2 (ID: f0863f2b-c2ba-4085-ab63-4d8233f67159)**
Soru Kökü: Pemfigus vulgaris hastalığında Tzanck hücrelerinin oluşumuna neden olan epitel içi ayrılma, epitelin hangi spesifik histolojik katmanında gerçekleşmektedir?
Doğru Şık (C): Stratum spinosum
Açıklama: Pemfigus vulgariste hedef alınan desmoglein 3 proteini, skuamöz epitelin stratum spinosum tabakasında yoğun olarak bulunur. Ayrılma bu tabakada gerçekleşir, altta kalan bazal tabaka hücreleri 'mezar taşı' görünümüyle bağ dokusuna yapışık kalır.

---

### ÇİFT 91 (Benzerlik: 0.69)

**Soru 1 (ID: 3b0c9c3e-6a18-4241-bd39-b548cbb8f326)**
Soru Kökü: Pemfigus vulgaris tablosunda mukoza lezyonlarına ek olarak deride de yaygın büller izlenmektedir. Bu tablonun deri komponentini oluşturan ve keratinositler arası tutunmayı engelleyen otoantikorlar primer olarak hangi molekülü hedefler?
Doğru Şık (A): Desmoglein 1
Açıklama: Pemfigus vulgariste deri bulgularının gelişiminden sorumlu ana antijenik hedef desmoglein 1'dir. Ağızda desmoglein 3 hedef alınırken, antikorların her iki proteine de reaksiyon göstermesi mukokutanöz yaygın yıkım tablosunu oluşturur.

**Soru 2 (ID: a7d3efb2-ef0c-48a2-b760-33a6798d1feb)**
Soru Kökü: Pemfigus vulgaris hastalığında Tzanck hücrelerinin oluşumuna neden olan epitel içi ayrılma, epitelin hangi spesifik histolojik katmanında gerçekleşmektedir?
Doğru Şık (C): Stratum spinosum
Açıklama: Pemfigus vulgariste hedef alınan desmoglein 3 proteini, skuamöz epitelin stratum spinosum tabakasında yoğun olarak bulunur. Ayrılma bu tabakada gerçekleşir, altta kalan bazal tabaka hücreleri 'mezar taşı' görünümüyle bağ dokusuna yapışık kalır.

---

### ÇİFT 92 (Benzerlik: 0.69)

**Soru 1 (ID: a1fae126-c635-4a5e-83a2-5bea7a5b8e77)**
Soru Kökü: Pemfigus hastalığının alt tipleri incelendiğinde, epitel dokusundaki ayrılmanın (akantolizis) stratum spinosum yerine daha yüzeyel bir tabaka olan stratum corneum düzeyinde gerçekleştiği, nispeten daha hafif seyirli form aşağıdakilerden hangisidir?
Doğru Şık (D): Pemfigus foliaceus
Açıklama: Pemfigus foliaceusta otoantikorlar sadece cildin üst tabakalarındaki desmoglein-1'e saldırdığı için ayrılma en üstteki stratum corneum tabakasında olur ve hastalık daha hafif seyreder. Pemfigus vulgariste ise ayrılma daha derindeki stratum spinosum tabakasında gerçekleşerek intraepitelyal ağır lezyonlar yaratır.

**Soru 2 (ID: f0863f2b-c2ba-4085-ab63-4d8233f67159)**
Soru Kökü: Pemfigus vulgaris hastalığında Tzanck hücrelerinin oluşumuna neden olan epitel içi ayrılma, epitelin hangi spesifik histolojik katmanında gerçekleşmektedir?
Doğru Şık (C): Stratum spinosum
Açıklama: Pemfigus vulgariste hedef alınan desmoglein 3 proteini, skuamöz epitelin stratum spinosum tabakasında yoğun olarak bulunur. Ayrılma bu tabakada gerçekleşir, altta kalan bazal tabaka hücreleri 'mezar taşı' görünümüyle bağ dokusuna yapışık kalır.

---

### ÇİFT 93 (Benzerlik: 0.69)

**Soru 1 (ID: 8fe5492f-f88c-4f0b-8697-e02a3919c273)**
Soru Kökü: Pemfigus hastalığının alt tipleri incelendiğinde, epitel dokusundaki ayrılmanın (akantolizis) stratum spinosum yerine daha yüzeyel bir tabaka olan stratum corneum düzeyinde gerçekleştiği, nispeten daha hafif seyirli form aşağıdakilerden hangisidir?
Doğru Şık (D): Pemfigus foliaceus
Açıklama: Pemfigus foliaceusta otoantikorlar sadece cildin üst tabakalarındaki desmoglein-1'e saldırdığı için ayrılma en üstteki stratum corneum tabakasında olur ve hastalık daha hafif seyreder. Pemfigus vulgariste ise ayrılma daha derindeki stratum spinosum tabakasında gerçekleşerek intraepitelyal ağır lezyonlar yaratır.

**Soru 2 (ID: f0863f2b-c2ba-4085-ab63-4d8233f67159)**
Soru Kökü: Pemfigus vulgaris hastalığında Tzanck hücrelerinin oluşumuna neden olan epitel içi ayrılma, epitelin hangi spesifik histolojik katmanında gerçekleşmektedir?
Doğru Şık (C): Stratum spinosum
Açıklama: Pemfigus vulgariste hedef alınan desmoglein 3 proteini, skuamöz epitelin stratum spinosum tabakasında yoğun olarak bulunur. Ayrılma bu tabakada gerçekleşir, altta kalan bazal tabaka hücreleri 'mezar taşı' görünümüyle bağ dokusuna yapışık kalır.

---

### ÇİFT 94 (Benzerlik: 0.69)

**Soru 1 (ID: 8fe5492f-f88c-4f0b-8697-e02a3919c273)**
Soru Kökü: Pemfigus hastalığının alt tipleri incelendiğinde, epitel dokusundaki ayrılmanın (akantolizis) stratum spinosum yerine daha yüzeyel bir tabaka olan stratum corneum düzeyinde gerçekleştiği, nispeten daha hafif seyirli form aşağıdakilerden hangisidir?
Doğru Şık (D): Pemfigus foliaceus
Açıklama: Pemfigus foliaceusta otoantikorlar sadece cildin üst tabakalarındaki desmoglein-1'e saldırdığı için ayrılma en üstteki stratum corneum tabakasında olur ve hastalık daha hafif seyreder. Pemfigus vulgariste ise ayrılma daha derindeki stratum spinosum tabakasında gerçekleşerek intraepitelyal ağır lezyonlar yaratır.

**Soru 2 (ID: a7d3efb2-ef0c-48a2-b760-33a6798d1feb)**
Soru Kökü: Pemfigus vulgaris hastalığında Tzanck hücrelerinin oluşumuna neden olan epitel içi ayrılma, epitelin hangi spesifik histolojik katmanında gerçekleşmektedir?
Doğru Şık (C): Stratum spinosum
Açıklama: Pemfigus vulgariste hedef alınan desmoglein 3 proteini, skuamöz epitelin stratum spinosum tabakasında yoğun olarak bulunur. Ayrılma bu tabakada gerçekleşir, altta kalan bazal tabaka hücreleri 'mezar taşı' görünümüyle bağ dokusuna yapışık kalır.

---

### ÇİFT 95 (Benzerlik: 0.69)

**Soru 1 (ID: a1fae126-c635-4a5e-83a2-5bea7a5b8e77)**
Soru Kökü: Pemfigus hastalığının alt tipleri incelendiğinde, epitel dokusundaki ayrılmanın (akantolizis) stratum spinosum yerine daha yüzeyel bir tabaka olan stratum corneum düzeyinde gerçekleştiği, nispeten daha hafif seyirli form aşağıdakilerden hangisidir?
Doğru Şık (D): Pemfigus foliaceus
Açıklama: Pemfigus foliaceusta otoantikorlar sadece cildin üst tabakalarındaki desmoglein-1'e saldırdığı için ayrılma en üstteki stratum corneum tabakasında olur ve hastalık daha hafif seyreder. Pemfigus vulgariste ise ayrılma daha derindeki stratum spinosum tabakasında gerçekleşerek intraepitelyal ağır lezyonlar yaratır.

**Soru 2 (ID: a7d3efb2-ef0c-48a2-b760-33a6798d1feb)**
Soru Kökü: Pemfigus vulgaris hastalığında Tzanck hücrelerinin oluşumuna neden olan epitel içi ayrılma, epitelin hangi spesifik histolojik katmanında gerçekleşmektedir?
Doğru Şık (C): Stratum spinosum
Açıklama: Pemfigus vulgariste hedef alınan desmoglein 3 proteini, skuamöz epitelin stratum spinosum tabakasında yoğun olarak bulunur. Ayrılma bu tabakada gerçekleşir, altta kalan bazal tabaka hücreleri 'mezar taşı' görünümüyle bağ dokusuna yapışık kalır.

---

### ÇİFT 96 (Benzerlik: 0.69)

**Soru 1 (ID: 4811adbe-e1f2-446f-a672-20e622d7c1bf)**
Soru Kökü: Dişeti dokusunda meydana gelen fiziksel yaralanmalar sonucu ortaya çıkabilen yüzeyel deskuamasyon ve ülseratif doku lezyonlarının, spesifik periodontal hastalıklarla ayırıcı tanısının yapılması şarttır. Bu bağlamda fırça travmalarına bağlı oluşan lezyonlar klinik özellikleri gereği en sık hangi dişeti hastalığı ile karıştırılarak ayırıcı tanı gerektirir?
Doğru Şık (D): Nekrotizan gingivitis
Açıklama: Sert fırçalamanın neden olduğu ülserasyonlar ve marjinal yırtılmalar, akut doku yıkımı ve nekroz görünümü verebildiğinden doğrudan nekrotizan gingivitis (NUG/NUP) ile ayırıcı tanıya girer. Papil tepelerinin sağlam olması travmayı gösteren en büyük kanıttır.

**Soru 2 (ID: 7106eae9-7da9-4575-b24b-375b794bb3fc)**
Soru Kökü: Sert diş fırçası kullanımı veya kuvvetli horizontal fırçalamaya bağlı gelişen fiziksel dişeti travmalarını, nekrotizan gingivitis gibi mikrobiyal doku kayıplarından ayıran en karakteristik klinik muayene bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): İnterdental papil tepelerinin hasar görmemiş olması
Açıklama: Fırça travmasında yaralanma dişeti kenarının birkaç milimetre altında gerçekleşir ve hastanın oral hijyeni genelde çok iyidir; diş kolesinde abrazyon izlenir ancak papil tepeleri korunur. Nekrotizan gingivitiste ise yıkım spesifik olarak interdental papilden başlar ve papil nekrotik, krater formundadır.

---

### ÇİFT 97 (Benzerlik: 0.69)

**Soru 1 (ID: 26b117e1-816a-44a2-bf10-b86ab8448954)**
Soru Kökü: Sert diş fırçası kullanımı veya kuvvetli horizontal fırçalamaya bağlı gelişen fiziksel dişeti travmalarını, nekrotizan gingivitis gibi mikrobiyal doku kayıplarından ayıran en karakteristik klinik muayene bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): İnterdental papil tepelerinin hasar görmemiş olması
Açıklama: Fırça travmasında yaralanma dişeti kenarının birkaç milimetre altında gerçekleşir ve hastanın oral hijyeni genelde çok iyidir; diş kolesinde abrazyon izlenir ancak papil tepeleri korunur. Nekrotizan gingivitiste ise yıkım spesifik olarak interdental papilden başlar ve papil nekrotik, krater formundadır.

**Soru 2 (ID: 4811adbe-e1f2-446f-a672-20e622d7c1bf)**
Soru Kökü: Dişeti dokusunda meydana gelen fiziksel yaralanmalar sonucu ortaya çıkabilen yüzeyel deskuamasyon ve ülseratif doku lezyonlarının, spesifik periodontal hastalıklarla ayırıcı tanısının yapılması şarttır. Bu bağlamda fırça travmalarına bağlı oluşan lezyonlar klinik özellikleri gereği en sık hangi dişeti hastalığı ile karıştırılarak ayırıcı tanı gerektirir?
Doğru Şık (D): Nekrotizan gingivitis
Açıklama: Sert fırçalamanın neden olduğu ülserasyonlar ve marjinal yırtılmalar, akut doku yıkımı ve nekroz görünümü verebildiğinden doğrudan nekrotizan gingivitis (NUG/NUP) ile ayırıcı tanıya girer. Papil tepelerinin sağlam olması travmayı gösteren en büyük kanıttır.

---

### ÇİFT 98 (Benzerlik: 0.69)

**Soru 1 (ID: 39f01922-9f2a-4179-aa45-e66d913d3a05)**
Soru Kökü: Dişeti dokusunda meydana gelen fiziksel yaralanmalar sonucu ortaya çıkabilen yüzeyel deskuamasyon ve ülseratif doku lezyonlarının, spesifik periodontal hastalıklarla ayırıcı tanısının yapılması şarttır. Bu bağlamda fırça travmalarına bağlı oluşan lezyonlar klinik özellikleri gereği en sık hangi dişeti hastalığı ile karıştırılarak ayırıcı tanı gerektirir?
Doğru Şık (D): Nekrotizan gingivitis
Açıklama: Sert fırçalamanın neden olduğu ülserasyonlar ve marjinal yırtılmalar, akut doku yıkımı ve nekroz görünümü verebildiğinden doğrudan nekrotizan gingivitis (NUG/NUP) ile ayırıcı tanıya girer. Papil tepelerinin sağlam olması travmayı gösteren en büyük kanıttır.

**Soru 2 (ID: 7106eae9-7da9-4575-b24b-375b794bb3fc)**
Soru Kökü: Sert diş fırçası kullanımı veya kuvvetli horizontal fırçalamaya bağlı gelişen fiziksel dişeti travmalarını, nekrotizan gingivitis gibi mikrobiyal doku kayıplarından ayıran en karakteristik klinik muayene bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): İnterdental papil tepelerinin hasar görmemiş olması
Açıklama: Fırça travmasında yaralanma dişeti kenarının birkaç milimetre altında gerçekleşir ve hastanın oral hijyeni genelde çok iyidir; diş kolesinde abrazyon izlenir ancak papil tepeleri korunur. Nekrotizan gingivitiste ise yıkım spesifik olarak interdental papilden başlar ve papil nekrotik, krater formundadır.

---

### ÇİFT 99 (Benzerlik: 0.69)

**Soru 1 (ID: 26b117e1-816a-44a2-bf10-b86ab8448954)**
Soru Kökü: Sert diş fırçası kullanımı veya kuvvetli horizontal fırçalamaya bağlı gelişen fiziksel dişeti travmalarını, nekrotizan gingivitis gibi mikrobiyal doku kayıplarından ayıran en karakteristik klinik muayene bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): İnterdental papil tepelerinin hasar görmemiş olması
Açıklama: Fırça travmasında yaralanma dişeti kenarının birkaç milimetre altında gerçekleşir ve hastanın oral hijyeni genelde çok iyidir; diş kolesinde abrazyon izlenir ancak papil tepeleri korunur. Nekrotizan gingivitiste ise yıkım spesifik olarak interdental papilden başlar ve papil nekrotik, krater formundadır.

**Soru 2 (ID: 39f01922-9f2a-4179-aa45-e66d913d3a05)**
Soru Kökü: Dişeti dokusunda meydana gelen fiziksel yaralanmalar sonucu ortaya çıkabilen yüzeyel deskuamasyon ve ülseratif doku lezyonlarının, spesifik periodontal hastalıklarla ayırıcı tanısının yapılması şarttır. Bu bağlamda fırça travmalarına bağlı oluşan lezyonlar klinik özellikleri gereği en sık hangi dişeti hastalığı ile karıştırılarak ayırıcı tanı gerektirir?
Doğru Şık (D): Nekrotizan gingivitis
Açıklama: Sert fırçalamanın neden olduğu ülserasyonlar ve marjinal yırtılmalar, akut doku yıkımı ve nekroz görünümü verebildiğinden doğrudan nekrotizan gingivitis (NUG/NUP) ile ayırıcı tanıya girer. Papil tepelerinin sağlam olması travmayı gösteren en büyük kanıttır.

---

