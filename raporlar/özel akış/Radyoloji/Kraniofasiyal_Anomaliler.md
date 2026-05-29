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

**Soru 1 (ID: 0189ede7-ff54-4b9c-8cc2-b84e121535ad)**
Soru Kökü: Apert sendromunun klinik bulguları ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Gelişim geriliğine rağmen normal zeka seviyesi beklenir.
Açıklama: Apert sendromunda gelişim geriliğinin yanı sıra mental retardasyon (zeka geriliği) karakteristik bir bulgudur, dolayısıyla normal zeka seviyesi beklenmez. Hipertelorizm, sendaktili, kraniyosinostoz ve maksiller hipoplazi sendromun diğer temel tanıyıcı özellikleridir. Carpenter ve Pfeiffer gibi diğer kraniyosinostozlardan ekstremite bulgularının ağırlığı ve zeka geriliği ile ayırt edilir.

**Soru 2 (ID: 5a7b0efd-8b5e-40ef-acda-3793b67e0c01)**
Soru Kökü: Apert sendromunda karşılaşılan nörolojik ve gelişimsel bulgular ile ilgili aşağıda verilen ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Hastaların günlük aktivitelerinde belirgin hipoaktivite izlenir.
Açıklama: Apert sendromu olgularında gelişim geriliği ve mental retardasyonla birlikte klinikte 'hiperaktivite' görülmesi tipiktir, hipoaktivite izlenmez. Beyin dokusunun erken kapanan süturlar içinde sıkışması mental kapasiteyi düşürürken, sekonder olarak körlük tablosunu da doğurabilmektedir.

---

### ÇİFT 2 (Benzerlik: 0.86)

**Soru 1 (ID: 574c2a0e-3504-403a-88ec-629bf9c71a00)**
Soru Kökü: Turner sendromlu hastaların kraniyofasiyal ve dental özellikleri incelendiğinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (C): Dental yaşın hastanın kronolojik yaşından daha geride kalması
Açıklama: Turner sendromunda spesifik ve ayırıcı bir bulgu olarak hastaların dental yaşı kronolojik yaşından geride değil, tam tersine daha ileridedir. Bu durum Down sendromu veya hipotiroidizm gibi gecikme yapan hastalıklardan ayrımını sağlar. Hastalarda ince mine, kısa kökler, mikrodonti ve kök rezorpsiyonu riski yüksek diğer geçerli bulgulardır.

**Soru 2 (ID: 88eae9bc-46e6-4164-83db-dae0f0c317b8)**
Soru Kökü: Turner sendromlu hastalarda görülen dental ve kraniyofasiyal bulgularla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Diş hareketleri sırasında kök rezorpsiyonuna karşı yüksek direnç gösterirler
Açıklama: Turner sendromlu hastalarda görülen kısa kök yapısı, ortodontik diş hareketleri sırasında şiddetli rezorpsiyon riski (eğilimi) oluşturur, dolayısıyla dirence değil hassasiyete neden olur. Hastaların genel sistemik gelişim geriliği beklentisinin aksine, bu sendromda dental yaşın kronolojik yaşından belirgin şekilde ileride olması sınav açısından kritik bir istisnadır. İnce mine oluşumu, dar palatal yapı ve lateral çapraz kapanış ise eşlik eden diğer dentofasiyal anomalilerdendir.

---

### ÇİFT 3 (Benzerlik: 0.82)

**Soru 1 (ID: 2635abd8-1431-4f84-a51d-bef305673c20)**
Soru Kökü: Crouzon Sendromu'nu diğer kraniyofasiyal dizostozlardan klinik olarak ayırt etmek için tarif edilen '3 ana bozukluk' (triad) içerisinde aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (D): Mental retardasyon
Açıklama: Crouzon sendromunun klinik triadı kafatası deformitesi, yüz deformitesi ve ekzoftalmidir (gözlerin dışarı fırlaması). Zeka geriliği (mental retardasyon) bu triadda yer almaz; Apert veya Prader-Willi gibi diğer sendromların aksine Crouzon hastalarında zeka genellikle normaldir. Bu triad, hekimin tanısal kurguyu sindaktili / zeka geriliği sarmalından çıkarması için temel bir kılavuzdur.

**Soru 2 (ID: 73fac152-8f61-4ca8-b6d7-a541928bfe3b)**
Soru Kökü: Crouzon tarafından tanımlanan ve sendromun klasik üçlüsünü oluşturan temel bozukluklar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (A): Kafatası deformitesi, Yüz deformitesi, Ekzoftalmi
Açıklama: Crouzon sendromunun patognomonik triadını; süturların erken kapanmasına bağlı kafatası deformitesi, maksiller hipoplazinin eşlik ettiği yüz deformitesi ve sığ orbitalara bağlı gelişen ekzoftalmi oluşturur. Apert sendromunun belirleyici bulgusu olan el-ayak sindaktilisi güçlü bir çeldirici olsa da Crouzon triadında kesinlikle bulunmaz. Bu üçlü klinik bulgu, sendromun teşhisinde ve çok aşamalı rekonstrüktif tedavi planlamasında altın standarttır.

---

### ÇİFT 4 (Benzerlik: 0.82)

**Soru 1 (ID: bf25340b-c3e6-4290-ac8a-bf3aa837aa85)**
Soru Kökü: Doğum sonrası muayenesi yapılan bir yenidoğanda gözlerde mikroftalmi, oftalmik kolobom ve konjonktiva üzerinde epibulbar lipodermoid malformasyonlar saptanmıştır. Ekokardiyografide konjenital kalp defekti de izlenen bu hastada en olası kraniofasiyal sendrom aşağıdakilerden hangisidir?
Doğru Şık (D): Goldenhar Sendromu
Açıklama: Mikroftalmi, oküler kolobom ve özellikle epibulbar dermoid/lipodermoid tümöral oluşumlar Goldenhar sendromunun okülo-aurikülo-vertebral spektrumuna ait spesifik göz bulgularıdır. Konjenital kalp ve vertebral anomaliler bu göz bulgularına sıklıkla eşlik eder.

**Soru 2 (ID: ffe75723-3db5-486f-919e-dabda1ee7ec1)**
Soru Kökü: Yenidoğan yoğun bakım ünitesinde değerlendirilen bir bebekte, mikrotia, dudak-damak yarığı ve fasiyal asimetri tespit edilmiştir. İleri muayenede gözlerde epibulbar dermoid malformasyonlar ve vertebral kord defektleri de izlenmiştir. Bu klinik tabloyu açıklayan en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Goldenhar Sendromu
Açıklama: Goldenhar sendromunun klasik triadı göz bulguları (epibulbar dermoid/lipodermoid, kolobom), kulak anomalileri (mikroti, atrezi) ve vertebral anomalilerdir. Hemifasiyal mikrozomi benzer yüz asimetrisi yapsa da epibulbar dermoid ve vertebral anomaliler Goldenhar'ı ayırt eden ekstra bulgulardır. Dermoid kistler oküler tutulumda patognomonik değere sahiptir.

---

### ÇİFT 5 (Benzerlik: 0.80)

**Soru 1 (ID: 53732977-55ee-4672-b7e4-660e261eb3d5)**
Soru Kökü: Ailesel geçişli kraniyofasiyal anomali öyküsü olan 6 yaşındaki erkek hasta, orta yüz bölgesindeki şiddetli çöküklük şikayetiyle kliniğe başvuruyor. Alınan anamnezde hastanın 5 aylıkken kafatası ve üst orbital bölge düzeltme cerrahisi geçirdiği öğreniliyor. Ağız içi muayenede maksillada V şekilli ark, ektopik sürme ve şiddetli ön açık kapanış izleniyor. Bu hastanın tedavisinde orta yüz cerrahisinin planlanması için en uygun zamanlama aşağıdakilerden hangisidir?
Doğru Şık (A): Hemen (6-7 yaş dönemi)
Açıklama: Crouzon sendromunda kafatası ve üst orbital bölgenin cerrahi düzeltilmesi 4-6. aylarda yapılırken, orta yüzün cerrahi düzeltilmesi 6-7 yaşlarında gerçekleştirilmelidir. Büyüme ve gelişimin bitmesinden sonra yapılan işlem ise Sınıf III maloklüzyonun düzeltilmesidir. Hastanın mevcut yaşı (6) tam olarak orta yüz cerrahisi endikasyon dönemine denk gelmektedir.

**Soru 2 (ID: 6e1ccf57-a70b-4477-a0a3-8198c73530e4)**
Soru Kökü: Crouzon sendromu tanısı almış bir erkek bebekte, kafatası ve üst orbital bölgedeki deformitelerin düzeltilmesi amacıyla planlanacak ilk cerrahi müdahalenin yapılması gereken en uygun zaman aralığı aşağıdakilerden hangisidir?
Doğru Şık (D): 4-6. ay
Açıklama: Crouzon sendromunda kafa içi basıncın artmasını önlemek ve beynin normal gelişimine izin vermek için kafatası ve üst orbital bölgedeki prematür sinostozların ilk cerrahi düzeltmesi 4-6. aylar arasında yapılmalıdır. Sıklıkla karıştırılan 6-7. yaş dönemi ise üst çene gelişim eksikliğine bağlı oluşan orta yüz retrüzyonunun düzeltildiği daha geç bir cerrahi aşamadır. Büyüme ve gelişimin bitmesi ise yalnızca sekonder olarak gelişen Sınıf III maloklüzyonun ortognatik cerrahi onarımı için beklenir.

---

### ÇİFT 6 (Benzerlik: 0.79)

**Soru 1 (ID: 0dd9b336-4c2c-40ab-80f0-a40767921736)**
Soru Kökü: Down sendromu (Trizomi 21) olgularının kraniofasiyal özellikleri incelendiğinde aşağıdakilerden hangisi **doğru değildir**?
Doğru Şık (B): Kafa kaidesindeki süturların kapanmasında prematür hızlanma izlenir.
Açıklama: Down sendromunda kafa iskeletindeki süturların erken kapanması değil, tam tersine kapanmasında gecikme (geç kapanma) yaşanır. Kraniyosinostoz (sütur erken kapanması) Apert, Crouzon gibi sendromlara özgüdür. Down sendromunda pnömatizasyon zayıf olduğu için sfenoid/frontal sinüs yokluğu ve diş sürme gecikmeleri tablonun doğrusunu oluşturur.

**Soru 2 (ID: 1b43a5c6-c20e-453f-898e-b7816567bb00)**
Soru Kökü: Down sendromlu (Trizomi 21) bireylerin kraniofasiyal iskelet özellikleri radyografik olarak değerlendirildiğinde, kafatası boyutlarındaki tipik değişim aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (C): Ön-arka yön uzunluğu kısa, transversal yön boyutu geniş
Açıklama: Down sendromlu hastalarda kafatası iskeletinin genel şekli brakiyosefalik morfolojiye yatkın olup; ön-arka yön uzunluğu (sagital çap) kısa, buna karşılık transversal yön boyutu belirgin şekilde geniştir. Bu yapısal değişim, sendromda sıklıkla izlenen orta yüz gelişim eksikliği ve frontal-sfenoid sinüslerin aplazisi ile yakından entegredir. Ayrıca bu hastalarda ağzın küçük olmasına sekonder olarak gelişen pseudo-makroglossi tablosu klinikte sıkça gözlenir.

---

### ÇİFT 7 (Benzerlik: 0.79)

**Soru 1 (ID: 10115d37-a4a9-4031-ab2a-e719df8e6e23)**
Soru Kökü: Yenidoğan muayenesinde kafatasında kraniosinostoz tespit edilen hastanın ekstremite değerlendirmesinde, özellikle el ve ayak başparmaklarının geniş olduğu ve elde kısmi yumuşak doku sindaktilisi bulunduğu izlenmiştir. Klinik ve radyolojik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Pfeiffer Sendromu
Açıklama: Geniş el ve ayak başparmağı ile kısmi yumuşak doku sindaktilisi Pfeiffer sendromunun patognomonik ekstremite bulgularıdır. Apert sendromunda parmakların tümünü içerebilen şiddetli (bazen kemiksel) sindaktili görülürken; Carpenter sendromunda genellikle ayakta polisindaktili ve kısa parmaklar mevcuttur.

**Soru 2 (ID: 4ef768c3-8f35-4339-94b8-ed468ad42d94)**
Soru Kökü: Pediatrik ortodonti kliniğine başvuran 6 yaşındaki erkek çocuğun muayenesinde; kraniyal süturların erken kapanmasına bağlı ciddi kafatası şekil bozukluğu, mental retardasyon ve görme kaybı (körlük) saptanmıştır. Ekstremite muayenesinde ellerde ve ayaklarda parmakların yapışık olduğu (sindaktili) gözlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Apert Sendromu
Açıklama: Kafatasında ciddi şekil bozukluğu, mental retardasyon, körlük ve özellikle el-ayak deformiteleri (sindaktili) Apert sendromunun klasik fiziksel bulgularıdır. Crouzon sendromunda genellikle sindaktili ve mental retardasyon beklenmez; Pfeiffer sendromunda ise geniş başparmak izlenir ancak körlük/mental retardasyon tablosu Apert kadar ağır karakterize edilmemiştir.

---

### ÇİFT 8 (Benzerlik: 0.79)

**Soru 1 (ID: 24716381-c334-4092-aa26-3fdda71ed536)**
Soru Kökü: On dört yaşındaki kız hasta, dişlerini kapatamama (iskeletsel açık kapanış) şikayetiyle başvuruyor. Yüz incelemesinde gözlerin dış uçlarının aşağı doğru sarktığı görülüyor. Alınan lateral sefalometrik radyografide mandibulanın yatay ramusunun alt sınırında belirgin bir içbükey (konkav) eğrilik izleniyor. Bu radyografik bulgu aşağıdaki sendromlardan hangisi için patognomoniktir?
Doğru Şık (A): Mandibulofasiyal Dizostoz
Açıklama: Mandibulanın yatay ramusunun alt sınırında izlenen patognomonik içbükey (konkav) eğrilik ve sekonder gonial açı büyümesi, Mandibulofasiyal dizostoz (Treacher Collins sendromu) için kesin radyografik işarettir. Göz kapaklarındaki aşağı sarkma, kondil hipoplazisine sekonder açık kapanış ve "kuş yüzü" görünümü bu spesifik birinci/ikinci ark anomalisini doğrular.

**Soru 2 (ID: 9ee9dd5d-1220-43c5-ade0-d5350b4f8e7f)**
Soru Kökü: Ortodonti kliniğine başvuran 9 yaşındaki kız çocuğunda ciddi iskeletsel açık kapanış (open-bite) saptanmıştır. Yüz profili incelendiğinde çene ucunun aşırı geride (retrognati) ve küçük (mikrognati) olduğu, 'kuş yüzü' görünümünün tabuloya eşlik ettiği görülmüştür. Ağız yapısının normalden geniş (makrostomi) olduğu bu hastada en olası teşhis nedir?
Doğru Şık (A): Treacher Collins Sendromu
Açıklama: Şiddetli retrognati, mikrognati, iskeletsel açık kapanış, makrostomi (geniş ağız) ve tipik 'kuş yüzü' profili Treacher Collins sendromunun (Mandibulofasiyal dizostoz) klasik çene ve yüz bulgularıdır. Down sendromunda ve Akondroplazide tipik olarak Sınıf III (mandibular protrüzyon eğilimi) görülür.

---

### ÇİFT 9 (Benzerlik: 0.79)

**Soru 1 (ID: a668b6ec-1bb9-41d9-9913-15901f64beab)**
Soru Kökü: On yaşındaki erkek hastanın kliniğe başvurusunda; belirgin bir alın bombesi, çökük bir orta yüz ve ekstremitelerinde kısalık (cücelik) tespit ediliyor. İntraoral muayenede ise makroglossi, anterior açık kapanış ve Sınıf III maloklüzyon saptanıyor. Bu hastadaki kraniofasiyal anomalinin temel etyopatogenezi aşağıdakilerden hangisidir?
Doğru Şık (C): Epifizde ve kafa tabanı kıkırdağında kalsifikasyon bozukluğu
Açıklama: Senaryoda tarif edilen cücelik, alın bombesi, orta yüz çöküklüğü ve kısa kafa kaidesi tablosu Akondroplazi sendromuna aittir. Akondroplazinin temel patogenezi kıkırdak tabanlı endokondral ossifikasyon yetersizliğidir; kafa tabanı kıkırdağında kalsifikasyonun bozulması orta yüzün büyümesini kısıtlayarak relatif prognati ve Sınıf III maloklüzyona yol açar.

**Soru 2 (ID: d43a4723-f4cc-4511-b2fe-f6c1369529bb)**
Soru Kökü: Pediatri kliniğinden konsülte edilen 6 yaşındaki erkek hastada; gövde uzunluğunun normal olduğu ancak ekstremitelerin belirgin şekilde kısa kaldığı, kafa kaidesinin kısaldığı, orta yüzün çökük ve alın bölgesinin bombeli olduğu rapor edilmiştir. Bu iskeletsel bulgular ışığında hastanın en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Akondroplazi
Açıklama: Epifizde ve kafa tabanı kıkırdağında kalsifikasyon bozulması ile karakterize Akondroplazide; gövde uzunluğunun normal kalmasına rağmen kolların ve bacakların kısa kaldığı tipik cücelik tablosu izlenir. Kafa tabanındaki yetersiz büyüme orta yüz çöküklüğü ve bombeli alın (frontal bossing) gibi telafi edici kraniyal morfolojiler yaratır ki bu da, mental retardasyon veya diğer kromozomal cücelik tiplerinden (örn. Prader-Willi) net şekilde ayırıcıdır. Hastaların dar maksillası sıklıkla açık kapanışla sonuçlanır.

---

### ÇİFT 10 (Benzerlik: 0.77)

**Soru 1 (ID: 0ded0894-bdc6-4495-89da-c84c0da25429)**
Soru Kökü: Treacher Collins sendromunun (Mandibulofasiyal dizostoz) patogenezi ve klinik yansımaları dikkate alındığında aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Alt çenedeki kondiler ve koronoid proçesler şiddetli hiperplazi gösterir.
Açıklama: Treacher Collins sendromunda (Mandibulofasiyal dizostoz) birinci brankial ark eksikliği sebebiyle mandibula ileri derecede gelişmemiş (retrognati/mikrognati) kalır. Dolayısıyla alt çenedeki kondiler ve koronoid proçeslerde aşırı büyüme (hiperplazi) değil, tam tersine belirgin hipoplazi veya tam aplazi izlenir. Konkav ramus sınırı ve kuş yüzü profili sendromu doğrular.

**Soru 2 (ID: ffff72e6-0313-47d9-b324-99fdaae9f9d3)**
Soru Kökü: Treacher Collins sendromuna sahip bir hastanın kraniyofasiyal kemik anatomisi BT (Bilgisayarlı Tomografi) ile incelendiğinde, orta yüz bölgesinde aşağıdaki bulgulardan hangisi ile karşılaşılması **en olasıdır**?
Doğru Şık (E): Zigomatik kemiklerin oluşmaması veya ark yapmaması
Açıklama: Treacher Collins sendromunda zigomatik (elmacık) kemikler ya hiç oluşmamıştır ya da tam gelişmemiş olup temporal kemikle birleşerek oluşturdukları 'zigomatik ark' anatomik olarak yoktur veya defektiftir. Klavikula yokluğu Kleidokranial displazinin; wormian kemikleri yine aynı displazinin bulgusudur.

---

### ÇİFT 11 (Benzerlik: 0.77)

**Soru 1 (ID: 0189ede7-ff54-4b9c-8cc2-b84e121535ad)**
Soru Kökü: Apert sendromunun klinik bulguları ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Gelişim geriliğine rağmen normal zeka seviyesi beklenir.
Açıklama: Apert sendromunda gelişim geriliğinin yanı sıra mental retardasyon (zeka geriliği) karakteristik bir bulgudur, dolayısıyla normal zeka seviyesi beklenmez. Hipertelorizm, sendaktili, kraniyosinostoz ve maksiller hipoplazi sendromun diğer temel tanıyıcı özellikleridir. Carpenter ve Pfeiffer gibi diğer kraniyosinostozlardan ekstremite bulgularının ağırlığı ve zeka geriliği ile ayırt edilir.

**Soru 2 (ID: 750e38fa-41f4-438a-9964-3f6a681efed4)**
Soru Kökü: Apert sendromunun fasiyal ve kraniyal özelliklerini değerlendiren bir hekim, aşağıdaki bulgulardan hangisinin bu sendroma ait **olmadığını** bilmelidir?
Doğru Şık (B): Mandibular prognati
Açıklama: Apert sendromunda orta yüz hipoplazisine bağlı olarak görece (rölatif) bir mandibula çıkıklığı yanılgısı oluşabilse de, gerçek bir kemiksel 'mandibular prognati' sendromun temel patolojilerinden biri değildir. Hipertelorizm (gözlerin birbirinden uzak olması), ekzoftalmi ve maksillanın hipoplazik gelişimi sendromun tipik yüz karakteristiğidir.

---

### ÇİFT 12 (Benzerlik: 0.76)

**Soru 1 (ID: 10115d37-a4a9-4031-ab2a-e719df8e6e23)**
Soru Kökü: Yenidoğan muayenesinde kafatasında kraniosinostoz tespit edilen hastanın ekstremite değerlendirmesinde, özellikle el ve ayak başparmaklarının geniş olduğu ve elde kısmi yumuşak doku sindaktilisi bulunduğu izlenmiştir. Klinik ve radyolojik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Pfeiffer Sendromu
Açıklama: Geniş el ve ayak başparmağı ile kısmi yumuşak doku sindaktilisi Pfeiffer sendromunun patognomonik ekstremite bulgularıdır. Apert sendromunda parmakların tümünü içerebilen şiddetli (bazen kemiksel) sindaktili görülürken; Carpenter sendromunda genellikle ayakta polisindaktili ve kısa parmaklar mevcuttur.

**Soru 2 (ID: a77e4bab-c438-4ef3-a798-df26899eb47f)**
Soru Kökü: Poliklinik muayenesine getirilen 4 yaşındaki kız çocuğunda; kafatasında belirgin asimetri, ayakta çoklu parmak ve yapışıklık (polisindaktili) ile parmak eğriliğine (klinodaktili) eşlik eden kısa el parmakları saptanmıştır. Bu klinik senaryoda tanısı konulan genetik anomali aşağıdakilerden hangisidir?
Doğru Şık (B): Carpenter Sendromu
Açıklama: Ayakta polisindaktili, klinodaktili (parmak kemiklerindeki kurvatür) ile birlikte seyreden kısa parmaklar ve kraniyal asimetri Carpenter sendromunu diğer kraniofasiyal anomalilerden ayıran en temel iskeletsel triad'dır. Apert sendromunda sindaktili şiddetlidir ancak klinodaktili tipik odak değildir.

---

### ÇİFT 13 (Benzerlik: 0.76)

**Soru 1 (ID: 8d42b838-a129-46d7-977d-10fb79c0ccec)**
Soru Kökü: Aşağıdakilerden hangisi Goldenhar sendromu tanısı almış bir bireyde eşlik etmesi beklenen kraniofasiyal ve sistemik anomalilerden biri **değildir**?
Doğru Şık (D): Omuzların önde birleştirilmesine izin veren klavikula aplazisi
Açıklama: Omuzların önde birleştirilmesine izin veren klavikula aplazisi/hipoplazisi, Goldenhar sendromunun değil Kleidokraniyal displazinin patognomonik iskeletsel bulgusudur. Goldenhar sendromu (oculo-auriculo-vertebral spektrum); göz, kulak, vertebra anomalileri ve birinci-ikinci ark gelişim defekti kaynaklı fasiyal asimetrileri kapsar.

**Soru 2 (ID: dcdd700d-f685-4f33-8819-fe19540ec3e9)**
Soru Kökü: Goldenhar sendromunun sistemik ve fasiyal-gelişimsel bulguları değerlendirildiğinde, aşağıdakilerden hangisinin hastada görülmesi **en az olasıdır**?
Doğru Şık (A): Mandibular prognati
Açıklama: Goldenhar sendromunda çene gelişiminde yetersizlik mevcuttur; tek veya çift taraflı mandibular 'hipoplazi' izlenir, bu nedenle alt çenenin önde konumlandığı 'mandibular prognati' tablosu beklenmez. Fasiyal asimetri, vertebral anomaliler ve mental retardasyon kliniğe eşlik edebilen yaygın anomalilerdir.

---

### ÇİFT 14 (Benzerlik: 0.76)

**Soru 1 (ID: 4ef768c3-8f35-4339-94b8-ed468ad42d94)**
Soru Kökü: Pediatrik ortodonti kliniğine başvuran 6 yaşındaki erkek çocuğun muayenesinde; kraniyal süturların erken kapanmasına bağlı ciddi kafatası şekil bozukluğu, mental retardasyon ve görme kaybı (körlük) saptanmıştır. Ekstremite muayenesinde ellerde ve ayaklarda parmakların yapışık olduğu (sindaktili) gözlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Apert Sendromu
Açıklama: Kafatasında ciddi şekil bozukluğu, mental retardasyon, körlük ve özellikle el-ayak deformiteleri (sindaktili) Apert sendromunun klasik fiziksel bulgularıdır. Crouzon sendromunda genellikle sindaktili ve mental retardasyon beklenmez; Pfeiffer sendromunda ise geniş başparmak izlenir ancak körlük/mental retardasyon tablosu Apert kadar ağır karakterize edilmemiştir.

**Soru 2 (ID: a77e4bab-c438-4ef3-a798-df26899eb47f)**
Soru Kökü: Poliklinik muayenesine getirilen 4 yaşındaki kız çocuğunda; kafatasında belirgin asimetri, ayakta çoklu parmak ve yapışıklık (polisindaktili) ile parmak eğriliğine (klinodaktili) eşlik eden kısa el parmakları saptanmıştır. Bu klinik senaryoda tanısı konulan genetik anomali aşağıdakilerden hangisidir?
Doğru Şık (B): Carpenter Sendromu
Açıklama: Ayakta polisindaktili, klinodaktili (parmak kemiklerindeki kurvatür) ile birlikte seyreden kısa parmaklar ve kraniyal asimetri Carpenter sendromunu diğer kraniofasiyal anomalilerden ayıran en temel iskeletsel triad'dır. Apert sendromunda sindaktili şiddetlidir ancak klinodaktili tipik odak değildir.

---

### ÇİFT 15 (Benzerlik: 0.76)

**Soru 1 (ID: 24716381-c334-4092-aa26-3fdda71ed536)**
Soru Kökü: On dört yaşındaki kız hasta, dişlerini kapatamama (iskeletsel açık kapanış) şikayetiyle başvuruyor. Yüz incelemesinde gözlerin dış uçlarının aşağı doğru sarktığı görülüyor. Alınan lateral sefalometrik radyografide mandibulanın yatay ramusunun alt sınırında belirgin bir içbükey (konkav) eğrilik izleniyor. Bu radyografik bulgu aşağıdaki sendromlardan hangisi için patognomoniktir?
Doğru Şık (A): Mandibulofasiyal Dizostoz
Açıklama: Mandibulanın yatay ramusunun alt sınırında izlenen patognomonik içbükey (konkav) eğrilik ve sekonder gonial açı büyümesi, Mandibulofasiyal dizostoz (Treacher Collins sendromu) için kesin radyografik işarettir. Göz kapaklarındaki aşağı sarkma, kondil hipoplazisine sekonder açık kapanış ve "kuş yüzü" görünümü bu spesifik birinci/ikinci ark anomalisini doğrular.

**Soru 2 (ID: fb2ee2ec-5e19-466b-b447-866c7022ecfb)**
Soru Kökü: Şiddetli kondil/ramus aplazisine sekonder gelişen iskeletsel açık kapanış, aşağı kaymış göz kapakları ve makrostominin birleşimiyle 'kuş yüzü' profilini oluşturan kraniyofasiyal anomali aşağıdakilerden hangisidir?
Doğru Şık (E): Treacher Collins Sendromu
Açıklama: Mandibulofasiyal dizostoz (Treacher Collins sendromu) hastalarında şiddetli mandibula hipoplazisi, yatay ramus ve kondilin defektine sekonder olarak mandibulada ciddi rotasyon ve iskeletsel açık kapanış yaratır. Alt göz kapaklarının dış aşağı sarkması, elmacık kemiklerinin yokluğu ve bu açık kapanışın birleşimi, sendromun vizüel markeri olan tipik 'kuş yüzü' profilini oluşturur.

---

### ÇİFT 16 (Benzerlik: 0.75)

**Soru 1 (ID: 2f6ee290-f528-4042-999f-2545df8c20d0)**
Soru Kökü: Ortodontik muayene sırasında şiddetli Sınıf III maloklüzyon, Sınıf III iskeletsel yapı, anterior crossbite ve maksiller hipoplaziye bağlı konkav profil tespit edilen 9 yaşındaki erkek hastanın anamnezinde konjenital sendrom öyküsü bulunmamaktadır. Ancak hastanın doğuştan gelen izole bir anomalisi mevcuttur. Bu hastanın Sınıf III gelişim paternine neden olan **en olası** birincil etyolojik faktör aşağıdakilerden hangisidir?
Doğru Şık (A): Dudak-damak yarığı onarımı sekeli
Açıklama: Dudak-damak yarığına sahip hastalarda, üst çenenin sagital ve transversal yönde yetersiz gelişimi sonucu sekonder olarak mikrognati superior, Angle Sınıf III ilişki ve anterior crossbite tablosu oluşur. Bilateral kondiler hipoplazi Sınıf II (retrognati) profiline yol açar, Sınıf III'e değil. Cerrahi onarımların yarattığı skar dokusu maksillanın ileri büyümesini kısıtlayarak bu iskeletsel anomalinin temel sebebini oluşturur.

**Soru 2 (ID: d36dd9d1-5465-4e55-94f8-a53c91270035)**
Soru Kökü: Beş yaşındaki dudak-damak yarığı bulunan hastanın ortodontik değerlendirmesinde maksillada ciddi hipoplazi saptanıyor. Maksillanın her üç boyuttaki gelişim yetersizliği dikkate alındığında, posterior (transversal) ve anterior (sagital) bölgelerde sırasıyla hangi tip oklüzal düzensizliklerin gelişmesi en olasıdır?
Doğru Şık (D): Yan çapraz kapanış (Crossbite) - Anterior çapraz kapanış
Açıklama: Dudak-damak yarıklarında cerrahi gerilim ve skar dokusu etkisiyle maksillanın transversal daralması, yarığın olduğu tarafta spesifik yan çapraz kapanışa (posterior crossbite) neden olur. Maksillanın sagital yön (ön-arka) geriliği ise iskeletsel Sınıf III ve buna sekonder anterior çapraz kapanış tablosunu yaratır.

---

### ÇİFT 17 (Benzerlik: 0.75)

**Soru 1 (ID: c3929dad-26c2-4cf6-811d-4bc0353e8a4d)**
Soru Kökü: Fasiyal asimetri ve kulak kepçesinde atrezi ile başvuran hastanın ortodontik sefalometrik tetkikinde; mandibula alt sınırında belirgin eğilme ve gonial açıda aşırı büyüme tespit edilmiştir. Ancak tek taraflı kondil eksikliği **izlenmemektedir**. Hastanın göz yapısında aşağı sarkma mevcutsa bu klinik tablo öncelikle hangi kraniofasiyal anomaliyi düşündürür?
Doğru Şık (B): Treacher Collins Sendromu
Açıklama: Kulak deformitesi, göz dış uçlarında aşağı sarkma, mandibula alt sınırının belirgin eğilmesi ve gonial açıda büyüme Treacher Collins Sendromunun iskeletsel otonomisini tanımlar. Hemifasiyal mikrozomide tek taraflı ramus/kondil yokluğu beklenir, burada eksiklik olmadığı özellikle belirtilmiştir. Hastanın makrostomi potansiyeli taşıyan bu Sınıf II/Sınıf III geçişli (açık kapanış + kuş yüzü) tablosu cerrahi-ortodontik kombine vakadır.

**Soru 2 (ID: fb2ee2ec-5e19-466b-b447-866c7022ecfb)**
Soru Kökü: Şiddetli kondil/ramus aplazisine sekonder gelişen iskeletsel açık kapanış, aşağı kaymış göz kapakları ve makrostominin birleşimiyle 'kuş yüzü' profilini oluşturan kraniyofasiyal anomali aşağıdakilerden hangisidir?
Doğru Şık (E): Treacher Collins Sendromu
Açıklama: Mandibulofasiyal dizostoz (Treacher Collins sendromu) hastalarında şiddetli mandibula hipoplazisi, yatay ramus ve kondilin defektine sekonder olarak mandibulada ciddi rotasyon ve iskeletsel açık kapanış yaratır. Alt göz kapaklarının dış aşağı sarkması, elmacık kemiklerinin yokluğu ve bu açık kapanışın birleşimi, sendromun vizüel markeri olan tipik 'kuş yüzü' profilini oluşturur.

---

### ÇİFT 18 (Benzerlik: 0.75)

**Soru 1 (ID: 0189ede7-ff54-4b9c-8cc2-b84e121535ad)**
Soru Kökü: Apert sendromunun klinik bulguları ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Gelişim geriliğine rağmen normal zeka seviyesi beklenir.
Açıklama: Apert sendromunda gelişim geriliğinin yanı sıra mental retardasyon (zeka geriliği) karakteristik bir bulgudur, dolayısıyla normal zeka seviyesi beklenmez. Hipertelorizm, sendaktili, kraniyosinostoz ve maksiller hipoplazi sendromun diğer temel tanıyıcı özellikleridir. Carpenter ve Pfeiffer gibi diğer kraniyosinostozlardan ekstremite bulgularının ağırlığı ve zeka geriliği ile ayırt edilir.

**Soru 2 (ID: 2635abd8-1431-4f84-a51d-bef305673c20)**
Soru Kökü: Crouzon Sendromu'nu diğer kraniyofasiyal dizostozlardan klinik olarak ayırt etmek için tarif edilen '3 ana bozukluk' (triad) içerisinde aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (D): Mental retardasyon
Açıklama: Crouzon sendromunun klinik triadı kafatası deformitesi, yüz deformitesi ve ekzoftalmidir (gözlerin dışarı fırlaması). Zeka geriliği (mental retardasyon) bu triadda yer almaz; Apert veya Prader-Willi gibi diğer sendromların aksine Crouzon hastalarında zeka genellikle normaldir. Bu triad, hekimin tanısal kurguyu sindaktili / zeka geriliği sarmalından çıkarması için temel bir kılavuzdur.

---

### ÇİFT 19 (Benzerlik: 0.74)

**Soru 1 (ID: 4ef768c3-8f35-4339-94b8-ed468ad42d94)**
Soru Kökü: Pediatrik ortodonti kliniğine başvuran 6 yaşındaki erkek çocuğun muayenesinde; kraniyal süturların erken kapanmasına bağlı ciddi kafatası şekil bozukluğu, mental retardasyon ve görme kaybı (körlük) saptanmıştır. Ekstremite muayenesinde ellerde ve ayaklarda parmakların yapışık olduğu (sindaktili) gözlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Apert Sendromu
Açıklama: Kafatasında ciddi şekil bozukluğu, mental retardasyon, körlük ve özellikle el-ayak deformiteleri (sindaktili) Apert sendromunun klasik fiziksel bulgularıdır. Crouzon sendromunda genellikle sindaktili ve mental retardasyon beklenmez; Pfeiffer sendromunda ise geniş başparmak izlenir ancak körlük/mental retardasyon tablosu Apert kadar ağır karakterize edilmemiştir.

**Soru 2 (ID: b4a64102-ddb6-4721-bc2b-64cd8adb2372)**
Soru Kökü: Kafatası süturlarının erken kapanması (kraniyosinostozis) ile karakterize olan, maksiller hipoplazi ve V şeklinde dental ark görülen, ancak ekstremite anomalisi (sindaktili) tanımlanmayan sendrom aşağıdakilerden hangisidir?
Doğru Şık (A): Crouzon Sendromu
Açıklama: Crouzon sendromunda kraniyosinostoz ve orta yüz hipoplazisi görülürken Apert sendromundan farklı olarak ekstremitelerde sindaktili bulunmaz. Apert sendromunda kraniyosinostoza ek olarak spesifik el ve ayak deformiteleri (sindaktili) eşlik eder. Diğer seçenekler de sütur anomalisi yapsa da tipik ekzoftalmi, V ark yapısı ve ekstremite tutulumsuz tablo Crouzon sendromunu ayırır.

---

### ÇİFT 20 (Benzerlik: 0.74)

**Soru 1 (ID: 0189ede7-ff54-4b9c-8cc2-b84e121535ad)**
Soru Kökü: Apert sendromunun klinik bulguları ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Gelişim geriliğine rağmen normal zeka seviyesi beklenir.
Açıklama: Apert sendromunda gelişim geriliğinin yanı sıra mental retardasyon (zeka geriliği) karakteristik bir bulgudur, dolayısıyla normal zeka seviyesi beklenmez. Hipertelorizm, sendaktili, kraniyosinostoz ve maksiller hipoplazi sendromun diğer temel tanıyıcı özellikleridir. Carpenter ve Pfeiffer gibi diğer kraniyosinostozlardan ekstremite bulgularının ağırlığı ve zeka geriliği ile ayırt edilir.

**Soru 2 (ID: 0dd9b336-4c2c-40ab-80f0-a40767921736)**
Soru Kökü: Down sendromu (Trizomi 21) olgularının kraniofasiyal özellikleri incelendiğinde aşağıdakilerden hangisi **doğru değildir**?
Doğru Şık (B): Kafa kaidesindeki süturların kapanmasında prematür hızlanma izlenir.
Açıklama: Down sendromunda kafa iskeletindeki süturların erken kapanması değil, tam tersine kapanmasında gecikme (geç kapanma) yaşanır. Kraniyosinostoz (sütur erken kapanması) Apert, Crouzon gibi sendromlara özgüdür. Down sendromunda pnömatizasyon zayıf olduğu için sfenoid/frontal sinüs yokluğu ve diş sürme gecikmeleri tablonun doğrusunu oluşturur.

---

### ÇİFT 21 (Benzerlik: 0.74)

**Soru 1 (ID: 24716381-c334-4092-aa26-3fdda71ed536)**
Soru Kökü: On dört yaşındaki kız hasta, dişlerini kapatamama (iskeletsel açık kapanış) şikayetiyle başvuruyor. Yüz incelemesinde gözlerin dış uçlarının aşağı doğru sarktığı görülüyor. Alınan lateral sefalometrik radyografide mandibulanın yatay ramusunun alt sınırında belirgin bir içbükey (konkav) eğrilik izleniyor. Bu radyografik bulgu aşağıdaki sendromlardan hangisi için patognomoniktir?
Doğru Şık (A): Mandibulofasiyal Dizostoz
Açıklama: Mandibulanın yatay ramusunun alt sınırında izlenen patognomonik içbükey (konkav) eğrilik ve sekonder gonial açı büyümesi, Mandibulofasiyal dizostoz (Treacher Collins sendromu) için kesin radyografik işarettir. Göz kapaklarındaki aşağı sarkma, kondil hipoplazisine sekonder açık kapanış ve "kuş yüzü" görünümü bu spesifik birinci/ikinci ark anomalisini doğrular.

**Soru 2 (ID: c3929dad-26c2-4cf6-811d-4bc0353e8a4d)**
Soru Kökü: Fasiyal asimetri ve kulak kepçesinde atrezi ile başvuran hastanın ortodontik sefalometrik tetkikinde; mandibula alt sınırında belirgin eğilme ve gonial açıda aşırı büyüme tespit edilmiştir. Ancak tek taraflı kondil eksikliği **izlenmemektedir**. Hastanın göz yapısında aşağı sarkma mevcutsa bu klinik tablo öncelikle hangi kraniofasiyal anomaliyi düşündürür?
Doğru Şık (B): Treacher Collins Sendromu
Açıklama: Kulak deformitesi, göz dış uçlarında aşağı sarkma, mandibula alt sınırının belirgin eğilmesi ve gonial açıda büyüme Treacher Collins Sendromunun iskeletsel otonomisini tanımlar. Hemifasiyal mikrozomide tek taraflı ramus/kondil yokluğu beklenir, burada eksiklik olmadığı özellikle belirtilmiştir. Hastanın makrostomi potansiyeli taşıyan bu Sınıf II/Sınıf III geçişli (açık kapanış + kuş yüzü) tablosu cerrahi-ortodontik kombine vakadır.

---

### ÇİFT 22 (Benzerlik: 0.74)

**Soru 1 (ID: 574c2a0e-3504-403a-88ec-629bf9c71a00)**
Soru Kökü: Turner sendromlu hastaların kraniyofasiyal ve dental özellikleri incelendiğinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (C): Dental yaşın hastanın kronolojik yaşından daha geride kalması
Açıklama: Turner sendromunda spesifik ve ayırıcı bir bulgu olarak hastaların dental yaşı kronolojik yaşından geride değil, tam tersine daha ileridedir. Bu durum Down sendromu veya hipotiroidizm gibi gecikme yapan hastalıklardan ayrımını sağlar. Hastalarda ince mine, kısa kökler, mikrodonti ve kök rezorpsiyonu riski yüksek diğer geçerli bulgulardır.

**Soru 2 (ID: ca2a8fb4-125a-4139-8fd7-64de0cce10bd)**
Soru Kökü: On iki yaşındaki kız çocuğunun sefalometrik analizinde kısa kafa kaidesi ve retrognatik çeneler saptanıyor. Radyolojik incelemede diş köklerinin normalden kısa olduğu, klinik muayenede diş minesinin ince olduğu izleniyor. Hastanın dental gelişim yaşının kronolojik yaşından daha ileride tespit edilmesi aşağıdaki sendromlardan hangisine işaret eder?
Doğru Şık (D): Turner Sendromu
Açıklama: Turner sendromunda kız çocuklarında (45,X) mikrodonti, ince mine, kısa diş kökleri ve dental yaşın kronolojik yaşa göre paradoksal biçimde daha ileride olması patognomoniğe yakın çok değerli bulgulardır. Down sendromunda veya Akondroplazi'de dental gelişim hızlanmaz, tam tersine sürme süreçlerinde belirgin gerilik ve gecikmeler saptanır.

---

### ÇİFT 23 (Benzerlik: 0.74)

**Soru 1 (ID: 0bee6ff5-24af-4e56-a138-819657aa0fd4)**
Soru Kökü: Dudak ve damak yarıklarının etiyolojisinde genetik, çevresel ve beslenme kaynaklı birçok faktör suçlanmaktadır. Anne adayının gebelik döneminde maruz kaldığı aşağıdaki faktörlerden hangisi konjenital dudak-damak yarığı oluşumuyla doğrudan ilişkilendirilmiş etkenlerden biri **değildir**?
Doğru Şık (E): Gestasyonel diyabet tablosu
Açıklama: Kaynak metinde dudak-damak yarığı etiyolojisi olarak kalıtım, akraba evliliği, kortizon, oligohidroamniozis (sıvı azalması), avitaminoz A ve B2, viral enfeksiyonlar, x-ışınları, psikolojik stres ve Tolidon kullanımı açıkça listelenmiştir; gestasyonel diyabet spesifik bir etken olarak belirtilmemiştir. Oligohidroamniozis mekanik kısıtlama yaparak füzyon defektine yol açarken, B2/A vitamini eksikliği epitelizasyon süreçlerini bozar.

**Soru 2 (ID: 6dd71be7-c25f-478d-9ca5-256f4e44874a)**
Soru Kökü: Dudak-damak yarıklarının etiyolojisinde yer alan sistemik ve çevresel faktörler incelendiğinde; 
I. Oligohidroamniozis (amniyon sıvısının azalması)
II. Avitaminoz (A ve B2 vitamin eksikliği)
III. Kortizon kullanımı
faktörlerinden hangileri etken olarak suçlanmaktadır?
Doğru Şık (A): I, II ve III
Açıklama: Dudak-damak yarıklarının etiyolojisi multifaktöryel olup; gebelik sırasındaki kortizon kullanımı, oligohidroamniozis (mekanik bası ve gelişim kısıtlılığı) ve spesifik olarak A ve B2 avitaminozu kanıtlanmış teratojenik mekanizmalardır. Yalnızca genetik geçişin değil, dolaşım sistemi bozuklukları ve anne adayının ilk trimestirdeki maruziyetlerinin (radyasyon, stres, virütik hastalık) embriyogenezi bozduğu bilinmektedir. Dolayısıyla verilen öncüllerin tümü kliniğin oluşumunda pay sahibidir.

---

### ÇİFT 24 (Benzerlik: 0.74)

**Soru 1 (ID: 0e25408a-2ea0-47c3-a7e1-530d14fec1d6)**
Soru Kökü: Akondroplazi olgularında kafa tabanı kıkırdağındaki kalsifikasyon bozukluğuna ve orta yüz hipoplazisine bağlı olarak aşağıdaki ortodontik ve fasiyal bulgulardan hangisinin görülmesi **beklenmez**?
Doğru Şık (C): Genişlemiş ve direnci azalmış nazal pasaj
Açıklama: Akondroplazide maksillanın hem sagital hem de transversal yönde hipoplazik kalması (dar maksilla) nedeniyle nazal pasaj genişlemez, tam tersine oldukça dar ve kısıtlıdır. Orta yüzün yetersiz büyümesi mandibulayı göreceli olarak önde konumlandırarak (Sınıf III maloklüzyon ve anterior cross-bite) ve göreceli makroglossi tablosu oluşturarak sendromun intraoral zeminini hazırlar. Diş sürme gecikmeleri ve erken süt dişi kayıpları da vakalarda sıkça izlenen oklüzal düzensizlik kaynaklarıdır.

**Soru 2 (ID: e51d4721-263f-4285-a0f9-a9e482c96ce5)**
Soru Kökü: Kleidokraniyal displazi tanısı doğrulanan bir hastanın stomatognatik ve kraniyal incelemelerinde aşağıdaki klinik/radyografik bulgulardan hangisinin saptanması **beklenmez**?
Doğru Şık (B): Maksiller gelişimin alt çeneye kıyasla hiperplastik konumda olması
Açıklama: Kleidokraniyal displazide üst yüz, paranazal sinüsler ve üst çene gelişimi ileri derecede yetersizdir. Buna bağlı olarak maksilla hiperplastik değil, tam tersine hipoplastiktir. Süt dişlerinin dökülmemesi, daimi dişlerin sürmemesi (hiperdonti ve mekanik obstrüksiyon kaynaklı), kemik yoğunluğundaki artış ve Wormian kemikleri iskeletsel kilit bulgulardır.

---

### ÇİFT 25 (Benzerlik: 0.73)

**Soru 1 (ID: 20fa1395-95fe-469d-a90d-c45cd5e13bdd)**
Soru Kökü: Aşağıdaki radyografik sefalometrik bulgulardan hangisi Treacher Collins sendromunun patognomonik mandibular özelliklerinden biridir?
Doğru Şık (B): Mandibulanın yatay ramusunun içbükey eğriliği
Açıklama: Treacher Collins sendromunda mandibuladaki kondiler ve koronoid proçeslerin hipoplazisi/aplazisine ek olarak; mandibula alt sınırının belirgin eğilmesi ve mandibulanın yatay ramusunun 'içbükey eğriliği' (ante-gonial notch benzeri derinleşme) patognomonik radyografik işarettir. Gonial açı küçülmez, aksine büyür.

**Soru 2 (ID: ffff72e6-0313-47d9-b324-99fdaae9f9d3)**
Soru Kökü: Treacher Collins sendromuna sahip bir hastanın kraniyofasiyal kemik anatomisi BT (Bilgisayarlı Tomografi) ile incelendiğinde, orta yüz bölgesinde aşağıdaki bulgulardan hangisi ile karşılaşılması **en olasıdır**?
Doğru Şık (E): Zigomatik kemiklerin oluşmaması veya ark yapmaması
Açıklama: Treacher Collins sendromunda zigomatik (elmacık) kemikler ya hiç oluşmamıştır ya da tam gelişmemiş olup temporal kemikle birleşerek oluşturdukları 'zigomatik ark' anatomik olarak yoktur veya defektiftir. Klavikula yokluğu Kleidokranial displazinin; wormian kemikleri yine aynı displazinin bulgusudur.

---

### ÇİFT 26 (Benzerlik: 0.73)

**Soru 1 (ID: f4a23f5b-cb95-497f-91f9-218c5646613b)**
Soru Kökü: Treacher Collins sendromunda göz çevresi dokularında meydana gelen patognomonik gelişimsel defekt aşağıdakilerden hangisidir?
Doğru Şık (D): Alt göz kapaklarının dış üçte birinde yarık
Açıklama: Treacher Collins (Mandibulofasiyal dizostoz) sendromunda yüzün aşağı ve dışarı doğru çekilmiş (kuş yüzü) görünümüne, alt göz kapaklarının dış (lateral) üçte birinde görülen konjenital yarık (kolobom) eşlik eder. Epibulbar dermoid kistler ise Goldenhar sendromunda gözlenen oftalmik malformasyonlardır.

**Soru 2 (ID: ffff72e6-0313-47d9-b324-99fdaae9f9d3)**
Soru Kökü: Treacher Collins sendromuna sahip bir hastanın kraniyofasiyal kemik anatomisi BT (Bilgisayarlı Tomografi) ile incelendiğinde, orta yüz bölgesinde aşağıdaki bulgulardan hangisi ile karşılaşılması **en olasıdır**?
Doğru Şık (E): Zigomatik kemiklerin oluşmaması veya ark yapmaması
Açıklama: Treacher Collins sendromunda zigomatik (elmacık) kemikler ya hiç oluşmamıştır ya da tam gelişmemiş olup temporal kemikle birleşerek oluşturdukları 'zigomatik ark' anatomik olarak yoktur veya defektiftir. Klavikula yokluğu Kleidokranial displazinin; wormian kemikleri yine aynı displazinin bulgusudur.

---

### ÇİFT 27 (Benzerlik: 0.73)

**Soru 1 (ID: 8969ced2-6af8-49b4-b173-1919d0e2b673)**
Soru Kökü: Kraniofasiyal sendromların ayırıcı tanısında, hastanın ekstremiteleri ve boy uzunluğu kritik rol oynar. Sadece iskelet yapısına bakılarak 'gövdenin normal, ekstremitelerin kısa' olduğu orantısız cücelik tablosu aşağıdaki sendromlardan hangisinde tipiktir?
Doğru Şık (B): Akondroplazi
Açıklama: Akondroplazi orantısız bir cücelik türüdür; kıkırdak kalsifikasyonunun bozulması nedeniyle ekstremiteler (kollar ve bacaklar) kısa kalırken gövde boyutu normaldir. Prader-Willi ve Turner sendromlarında orantılı bir kısa boy (gelişim geriliği) görülür; Marfan sendromunda ise orantısız uzun boy mevcuttur. Gövde/ekstremite oranındaki bu zıtlık akondroplazinin kıkırdak spesifik patolojisini yansıtır.

**Soru 2 (ID: d43a4723-f4cc-4511-b2fe-f6c1369529bb)**
Soru Kökü: Pediatri kliniğinden konsülte edilen 6 yaşındaki erkek hastada; gövde uzunluğunun normal olduğu ancak ekstremitelerin belirgin şekilde kısa kaldığı, kafa kaidesinin kısaldığı, orta yüzün çökük ve alın bölgesinin bombeli olduğu rapor edilmiştir. Bu iskeletsel bulgular ışığında hastanın en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Akondroplazi
Açıklama: Epifizde ve kafa tabanı kıkırdağında kalsifikasyon bozulması ile karakterize Akondroplazide; gövde uzunluğunun normal kalmasına rağmen kolların ve bacakların kısa kaldığı tipik cücelik tablosu izlenir. Kafa tabanındaki yetersiz büyüme orta yüz çöküklüğü ve bombeli alın (frontal bossing) gibi telafi edici kraniyal morfolojiler yaratır ki bu da, mental retardasyon veya diğer kromozomal cücelik tiplerinden (örn. Prader-Willi) net şekilde ayırıcıdır. Hastaların dar maksillası sıklıkla açık kapanışla sonuçlanır.

---

### ÇİFT 28 (Benzerlik: 0.73)

**Soru 1 (ID: 0ded0894-bdc6-4495-89da-c84c0da25429)**
Soru Kökü: Treacher Collins sendromunun (Mandibulofasiyal dizostoz) patogenezi ve klinik yansımaları dikkate alındığında aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Alt çenedeki kondiler ve koronoid proçesler şiddetli hiperplazi gösterir.
Açıklama: Treacher Collins sendromunda (Mandibulofasiyal dizostoz) birinci brankial ark eksikliği sebebiyle mandibula ileri derecede gelişmemiş (retrognati/mikrognati) kalır. Dolayısıyla alt çenedeki kondiler ve koronoid proçeslerde aşırı büyüme (hiperplazi) değil, tam tersine belirgin hipoplazi veya tam aplazi izlenir. Konkav ramus sınırı ve kuş yüzü profili sendromu doğrular.

**Soru 2 (ID: 20fa1395-95fe-469d-a90d-c45cd5e13bdd)**
Soru Kökü: Aşağıdaki radyografik sefalometrik bulgulardan hangisi Treacher Collins sendromunun patognomonik mandibular özelliklerinden biridir?
Doğru Şık (B): Mandibulanın yatay ramusunun içbükey eğriliği
Açıklama: Treacher Collins sendromunda mandibuladaki kondiler ve koronoid proçeslerin hipoplazisi/aplazisine ek olarak; mandibula alt sınırının belirgin eğilmesi ve mandibulanın yatay ramusunun 'içbükey eğriliği' (ante-gonial notch benzeri derinleşme) patognomonik radyografik işarettir. Gonial açı küçülmez, aksine büyür.

---

### ÇİFT 29 (Benzerlik: 0.73)

**Soru 1 (ID: 0ded0894-bdc6-4495-89da-c84c0da25429)**
Soru Kökü: Treacher Collins sendromunun (Mandibulofasiyal dizostoz) patogenezi ve klinik yansımaları dikkate alındığında aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Alt çenedeki kondiler ve koronoid proçesler şiddetli hiperplazi gösterir.
Açıklama: Treacher Collins sendromunda (Mandibulofasiyal dizostoz) birinci brankial ark eksikliği sebebiyle mandibula ileri derecede gelişmemiş (retrognati/mikrognati) kalır. Dolayısıyla alt çenedeki kondiler ve koronoid proçeslerde aşırı büyüme (hiperplazi) değil, tam tersine belirgin hipoplazi veya tam aplazi izlenir. Konkav ramus sınırı ve kuş yüzü profili sendromu doğrular.

**Soru 2 (ID: f4a23f5b-cb95-497f-91f9-218c5646613b)**
Soru Kökü: Treacher Collins sendromunda göz çevresi dokularında meydana gelen patognomonik gelişimsel defekt aşağıdakilerden hangisidir?
Doğru Şık (D): Alt göz kapaklarının dış üçte birinde yarık
Açıklama: Treacher Collins (Mandibulofasiyal dizostoz) sendromunda yüzün aşağı ve dışarı doğru çekilmiş (kuş yüzü) görünümüne, alt göz kapaklarının dış (lateral) üçte birinde görülen konjenital yarık (kolobom) eşlik eder. Epibulbar dermoid kistler ise Goldenhar sendromunda gözlenen oftalmik malformasyonlardır.

---

### ÇİFT 30 (Benzerlik: 0.73)

**Soru 1 (ID: b3d05769-df69-459d-bbab-8f204500b09d)**
Soru Kökü: Panoramik radyografisinde çok sayıda süpernümerer diş ve diş sürme gecikmesi saptanan 14 yaşındaki hastanın sefalometrik incelemesinde kafatasının sagital yönde daralmış, transversal yönde ise genişlemiş olduğu görülüyor. Omuzlarını orta hatta birleştirebildiği gözlemlenen bu hastanın kranial sütur bölgelerinde izlenmesi beklenen spesifik radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Wormian kemikçikleri
Açıklama: Klavikula yokluğu/hipoplazisi nedeniyle omuzları birleştirebilme ve hiperdonti bulguları Kleidokraniyal Displazi (Dizostoz) için tipiktir; bu hastalarda sütür bölgelerinde çok sayıda küçük kemik adacığı olan 'Wormian Kemikçikleri' izlenir. Sütürlerin prematür kapanması kraniyosinostoz sendromlarında (Crouzon, Apert) görülür. Sagital darlık ve transversal genişleme bu sendromun karakteristik kranial boyut deformasyonudur.

**Soru 2 (ID: e51d4721-263f-4285-a0f9-a9e482c96ce5)**
Soru Kökü: Kleidokraniyal displazi tanısı doğrulanan bir hastanın stomatognatik ve kraniyal incelemelerinde aşağıdaki klinik/radyografik bulgulardan hangisinin saptanması **beklenmez**?
Doğru Şık (B): Maksiller gelişimin alt çeneye kıyasla hiperplastik konumda olması
Açıklama: Kleidokraniyal displazide üst yüz, paranazal sinüsler ve üst çene gelişimi ileri derecede yetersizdir. Buna bağlı olarak maksilla hiperplastik değil, tam tersine hipoplastiktir. Süt dişlerinin dökülmemesi, daimi dişlerin sürmemesi (hiperdonti ve mekanik obstrüksiyon kaynaklı), kemik yoğunluğundaki artış ve Wormian kemikleri iskeletsel kilit bulgulardır.

---

### ÇİFT 31 (Benzerlik: 0.73)

**Soru 1 (ID: 2ebb83e9-704a-49b8-b76c-ee19ec3a40ab)**
Soru Kökü: Maksillofasiyal cerrahi konsültasyonunda, hastanın dudak ve damak yarığı etiyolojisinde genetik, çevresel faktörler ve maternal dolaşım bozukluklarının etkili olduğu saptanmıştır. Özellikle gebeliğin ilk 3 ayında (1. trimester) anne adayının geçirdiği hangi enfeksiyöz durum yarık oluşumu açısından direkt risk taşır?
Doğru Şık (B): Virütik hastalıklar
Açıklama: Gebeliğin ilk 3 ayında (organogenez evresi) anne adayının geçirdiği virütik hastalıklar dudak-damak yarığı formasyonu için spesifik ve kanıtlanmış bir risk faktörüdür. Paraziter veya lokal fungal enfeksiyonlar doğrudan yarık oluşturucu mutajenik/teratojenik etki yelpazesinde primer kaynak metin tarafından sayılmaz. Teratojenik spektrumda Tolidon ilaç maruziyeti ve viral ajanlar özellikle organogenez kopmalarına yol açar.

**Soru 2 (ID: 9accdc20-d565-4df8-92d4-88e2520a8aa7)**
Soru Kökü: Dudak-damak yarıklarının etiyolojisinde, gebeliğin embriyonik gelişim dönemini kapsayan ilk üç ayında anne adayının maruz kaldığı aşağıdaki teratojenik ilaçlardan hangisi spesifik olarak suçlanmaktadır?
Doğru Şık (C): Tolidon
Açıklama: Tolidon, gebeliğin ilk üç ayında anne adayı tarafından kullanıldığında dudak-damak yarığı etiyolojisinde suçlanan spesifik bir teratojenik ajandır. Antikonvülzan olan fenitoin genel fasiyal kleftlerle ilişkilendirilse de, kaynak metinde doğrudan ve majör farmakolojik etken olarak özellikle 'tolidon' vurgulanmaktadır. Gebelik sürecinde maruz kalınan bu tip teratojenler, maksiller ve nazal proçeslerin fizyolojik füzyonunu mekanik ve hücresel düzeyde baskılar.

---

### ÇİFT 32 (Benzerlik: 0.73)

**Soru 1 (ID: 5e19ed04-5e1b-4f22-a27c-8eea2c548ed8)**
Soru Kökü: Kız çocuk hastada izlenen lateral çapraz kapanış, artmış overjet ile distal molar kapanış ilişkisi ve omuz hizasında kısalık varlığında Turner Sendromu şüphelenilmektedir. Bu hastada ortodontik tedavi (diş hareketi) planlanırken **en çok** dikkat edilmesi gereken hücresel/kök riski aşağıdakilerden hangisidir?
Doğru Şık (C): Diş hareketleri sırasında şiddetli kök rezorpsiyonu eğilimi
Açıklama: Turner sendromunda dişlerin kökleri kısadır, mine incedir ve dentin anormaldir; bu morfolojik yapı diş hareketleri sırasında rezorpsiyona şiddetli bir eğilim yaratır. Ankiloz veya hipersementoz sendromun klasik mekanizmaları arasında yer almaz. Kısa ve zayıf kök yapısına sahip bu dişlere uygulanacak ağır ortodontik kuvvetler iyatrojenik diş kayıplarıyla sonuçlanabilir.

**Soru 2 (ID: 88eae9bc-46e6-4164-83db-dae0f0c317b8)**
Soru Kökü: Turner sendromlu hastalarda görülen dental ve kraniyofasiyal bulgularla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Diş hareketleri sırasında kök rezorpsiyonuna karşı yüksek direnç gösterirler
Açıklama: Turner sendromlu hastalarda görülen kısa kök yapısı, ortodontik diş hareketleri sırasında şiddetli rezorpsiyon riski (eğilimi) oluşturur, dolayısıyla dirence değil hassasiyete neden olur. Hastaların genel sistemik gelişim geriliği beklentisinin aksine, bu sendromda dental yaşın kronolojik yaşından belirgin şekilde ileride olması sınav açısından kritik bir istisnadır. İnce mine oluşumu, dar palatal yapı ve lateral çapraz kapanış ise eşlik eden diğer dentofasiyal anomalilerdendir.

---

### ÇİFT 33 (Benzerlik: 0.73)

**Soru 1 (ID: 0bee6ff5-24af-4e56-a138-819657aa0fd4)**
Soru Kökü: Dudak ve damak yarıklarının etiyolojisinde genetik, çevresel ve beslenme kaynaklı birçok faktör suçlanmaktadır. Anne adayının gebelik döneminde maruz kaldığı aşağıdaki faktörlerden hangisi konjenital dudak-damak yarığı oluşumuyla doğrudan ilişkilendirilmiş etkenlerden biri **değildir**?
Doğru Şık (E): Gestasyonel diyabet tablosu
Açıklama: Kaynak metinde dudak-damak yarığı etiyolojisi olarak kalıtım, akraba evliliği, kortizon, oligohidroamniozis (sıvı azalması), avitaminoz A ve B2, viral enfeksiyonlar, x-ışınları, psikolojik stres ve Tolidon kullanımı açıkça listelenmiştir; gestasyonel diyabet spesifik bir etken olarak belirtilmemiştir. Oligohidroamniozis mekanik kısıtlama yaparak füzyon defektine yol açarken, B2/A vitamini eksikliği epitelizasyon süreçlerini bozar.

**Soru 2 (ID: 2ebb83e9-704a-49b8-b76c-ee19ec3a40ab)**
Soru Kökü: Maksillofasiyal cerrahi konsültasyonunda, hastanın dudak ve damak yarığı etiyolojisinde genetik, çevresel faktörler ve maternal dolaşım bozukluklarının etkili olduğu saptanmıştır. Özellikle gebeliğin ilk 3 ayında (1. trimester) anne adayının geçirdiği hangi enfeksiyöz durum yarık oluşumu açısından direkt risk taşır?
Doğru Şık (B): Virütik hastalıklar
Açıklama: Gebeliğin ilk 3 ayında (organogenez evresi) anne adayının geçirdiği virütik hastalıklar dudak-damak yarığı formasyonu için spesifik ve kanıtlanmış bir risk faktörüdür. Paraziter veya lokal fungal enfeksiyonlar doğrudan yarık oluşturucu mutajenik/teratojenik etki yelpazesinde primer kaynak metin tarafından sayılmaz. Teratojenik spektrumda Tolidon ilaç maruziyeti ve viral ajanlar özellikle organogenez kopmalarına yol açar.

---

### ÇİFT 34 (Benzerlik: 0.73)

**Soru 1 (ID: 2635abd8-1431-4f84-a51d-bef305673c20)**
Soru Kökü: Crouzon Sendromu'nu diğer kraniyofasiyal dizostozlardan klinik olarak ayırt etmek için tarif edilen '3 ana bozukluk' (triad) içerisinde aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (D): Mental retardasyon
Açıklama: Crouzon sendromunun klinik triadı kafatası deformitesi, yüz deformitesi ve ekzoftalmidir (gözlerin dışarı fırlaması). Zeka geriliği (mental retardasyon) bu triadda yer almaz; Apert veya Prader-Willi gibi diğer sendromların aksine Crouzon hastalarında zeka genellikle normaldir. Bu triad, hekimin tanısal kurguyu sindaktili / zeka geriliği sarmalından çıkarması için temel bir kılavuzdur.

**Soru 2 (ID: 91ab3f71-768e-45b6-929f-16f3ddb39246)**
Soru Kökü: Crouzon sendromunda kraniyal süturların prematür sinostozuna bağlı olarak aşağıdaki kafa şekillerinden hangisinin görülmesi **beklenmez**?
Doğru Şık (E): Dolikosefal
Açıklama: Crouzon sendromunda kafatası süturlarının erken kapanmasına bağlı olarak büyüme yönü değişir ve brakiyosefal (kısa kafa), skalosefal (kano şekli) veya trigonosefal (üçgen şekli) kafa yapıları ortaya çıkar. Dolikosefal kafa yapısı ise başın ön-arka çapının transvers çapına göre belirgin uzun olduğu durumu tanımlar ve bu sendromun karakteristik kraniyal spektrumunda yer almaz. Bu kafatası deformiteleri, hastanın cerrahi planlamasında primer belirleyicidir.

---

### ÇİFT 35 (Benzerlik: 0.73)

**Soru 1 (ID: 10115d37-a4a9-4031-ab2a-e719df8e6e23)**
Soru Kökü: Yenidoğan muayenesinde kafatasında kraniosinostoz tespit edilen hastanın ekstremite değerlendirmesinde, özellikle el ve ayak başparmaklarının geniş olduğu ve elde kısmi yumuşak doku sindaktilisi bulunduğu izlenmiştir. Klinik ve radyolojik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Pfeiffer Sendromu
Açıklama: Geniş el ve ayak başparmağı ile kısmi yumuşak doku sindaktilisi Pfeiffer sendromunun patognomonik ekstremite bulgularıdır. Apert sendromunda parmakların tümünü içerebilen şiddetli (bazen kemiksel) sindaktili görülürken; Carpenter sendromunda genellikle ayakta polisindaktili ve kısa parmaklar mevcuttur.

**Soru 2 (ID: b4a64102-ddb6-4721-bc2b-64cd8adb2372)**
Soru Kökü: Kafatası süturlarının erken kapanması (kraniyosinostozis) ile karakterize olan, maksiller hipoplazi ve V şeklinde dental ark görülen, ancak ekstremite anomalisi (sindaktili) tanımlanmayan sendrom aşağıdakilerden hangisidir?
Doğru Şık (A): Crouzon Sendromu
Açıklama: Crouzon sendromunda kraniyosinostoz ve orta yüz hipoplazisi görülürken Apert sendromundan farklı olarak ekstremitelerde sindaktili bulunmaz. Apert sendromunda kraniyosinostoza ek olarak spesifik el ve ayak deformiteleri (sindaktili) eşlik eder. Diğer seçenekler de sütur anomalisi yapsa da tipik ekzoftalmi, V ark yapısı ve ekstremite tutulumsuz tablo Crouzon sendromunu ayırır.

---

### ÇİFT 36 (Benzerlik: 0.72)

**Soru 1 (ID: a77e4bab-c438-4ef3-a798-df26899eb47f)**
Soru Kökü: Poliklinik muayenesine getirilen 4 yaşındaki kız çocuğunda; kafatasında belirgin asimetri, ayakta çoklu parmak ve yapışıklık (polisindaktili) ile parmak eğriliğine (klinodaktili) eşlik eden kısa el parmakları saptanmıştır. Bu klinik senaryoda tanısı konulan genetik anomali aşağıdakilerden hangisidir?
Doğru Şık (B): Carpenter Sendromu
Açıklama: Ayakta polisindaktili, klinodaktili (parmak kemiklerindeki kurvatür) ile birlikte seyreden kısa parmaklar ve kraniyal asimetri Carpenter sendromunu diğer kraniofasiyal anomalilerden ayıran en temel iskeletsel triad'dır. Apert sendromunda sindaktili şiddetlidir ancak klinodaktili tipik odak değildir.

**Soru 2 (ID: b4a64102-ddb6-4721-bc2b-64cd8adb2372)**
Soru Kökü: Kafatası süturlarının erken kapanması (kraniyosinostozis) ile karakterize olan, maksiller hipoplazi ve V şeklinde dental ark görülen, ancak ekstremite anomalisi (sindaktili) tanımlanmayan sendrom aşağıdakilerden hangisidir?
Doğru Şık (A): Crouzon Sendromu
Açıklama: Crouzon sendromunda kraniyosinostoz ve orta yüz hipoplazisi görülürken Apert sendromundan farklı olarak ekstremitelerde sindaktili bulunmaz. Apert sendromunda kraniyosinostoza ek olarak spesifik el ve ayak deformiteleri (sindaktili) eşlik eder. Diğer seçenekler de sütur anomalisi yapsa da tipik ekzoftalmi, V ark yapısı ve ekstremite tutulumsuz tablo Crouzon sendromunu ayırır.

---

### ÇİFT 37 (Benzerlik: 0.72)

**Soru 1 (ID: 9ee9dd5d-1220-43c5-ade0-d5350b4f8e7f)**
Soru Kökü: Ortodonti kliniğine başvuran 9 yaşındaki kız çocuğunda ciddi iskeletsel açık kapanış (open-bite) saptanmıştır. Yüz profili incelendiğinde çene ucunun aşırı geride (retrognati) ve küçük (mikrognati) olduğu, 'kuş yüzü' görünümünün tabuloya eşlik ettiği görülmüştür. Ağız yapısının normalden geniş (makrostomi) olduğu bu hastada en olası teşhis nedir?
Doğru Şık (A): Treacher Collins Sendromu
Açıklama: Şiddetli retrognati, mikrognati, iskeletsel açık kapanış, makrostomi (geniş ağız) ve tipik 'kuş yüzü' profili Treacher Collins sendromunun (Mandibulofasiyal dizostoz) klasik çene ve yüz bulgularıdır. Down sendromunda ve Akondroplazide tipik olarak Sınıf III (mandibular protrüzyon eğilimi) görülür.

**Soru 2 (ID: fb2ee2ec-5e19-466b-b447-866c7022ecfb)**
Soru Kökü: Şiddetli kondil/ramus aplazisine sekonder gelişen iskeletsel açık kapanış, aşağı kaymış göz kapakları ve makrostominin birleşimiyle 'kuş yüzü' profilini oluşturan kraniyofasiyal anomali aşağıdakilerden hangisidir?
Doğru Şık (E): Treacher Collins Sendromu
Açıklama: Mandibulofasiyal dizostoz (Treacher Collins sendromu) hastalarında şiddetli mandibula hipoplazisi, yatay ramus ve kondilin defektine sekonder olarak mandibulada ciddi rotasyon ve iskeletsel açık kapanış yaratır. Alt göz kapaklarının dış aşağı sarkması, elmacık kemiklerinin yokluğu ve bu açık kapanışın birleşimi, sendromun vizüel markeri olan tipik 'kuş yüzü' profilini oluşturur.

---

### ÇİFT 38 (Benzerlik: 0.72)

**Soru 1 (ID: 2f6ee290-f528-4042-999f-2545df8c20d0)**
Soru Kökü: Ortodontik muayene sırasında şiddetli Sınıf III maloklüzyon, Sınıf III iskeletsel yapı, anterior crossbite ve maksiller hipoplaziye bağlı konkav profil tespit edilen 9 yaşındaki erkek hastanın anamnezinde konjenital sendrom öyküsü bulunmamaktadır. Ancak hastanın doğuştan gelen izole bir anomalisi mevcuttur. Bu hastanın Sınıf III gelişim paternine neden olan **en olası** birincil etyolojik faktör aşağıdakilerden hangisidir?
Doğru Şık (A): Dudak-damak yarığı onarımı sekeli
Açıklama: Dudak-damak yarığına sahip hastalarda, üst çenenin sagital ve transversal yönde yetersiz gelişimi sonucu sekonder olarak mikrognati superior, Angle Sınıf III ilişki ve anterior crossbite tablosu oluşur. Bilateral kondiler hipoplazi Sınıf II (retrognati) profiline yol açar, Sınıf III'e değil. Cerrahi onarımların yarattığı skar dokusu maksillanın ileri büyümesini kısıtlayarak bu iskeletsel anomalinin temel sebebini oluşturur.

**Soru 2 (ID: 9ee9dd5d-1220-43c5-ade0-d5350b4f8e7f)**
Soru Kökü: Ortodonti kliniğine başvuran 9 yaşındaki kız çocuğunda ciddi iskeletsel açık kapanış (open-bite) saptanmıştır. Yüz profili incelendiğinde çene ucunun aşırı geride (retrognati) ve küçük (mikrognati) olduğu, 'kuş yüzü' görünümünün tabuloya eşlik ettiği görülmüştür. Ağız yapısının normalden geniş (makrostomi) olduğu bu hastada en olası teşhis nedir?
Doğru Şık (A): Treacher Collins Sendromu
Açıklama: Şiddetli retrognati, mikrognati, iskeletsel açık kapanış, makrostomi (geniş ağız) ve tipik 'kuş yüzü' profili Treacher Collins sendromunun (Mandibulofasiyal dizostoz) klasik çene ve yüz bulgularıdır. Down sendromunda ve Akondroplazide tipik olarak Sınıf III (mandibular protrüzyon eğilimi) görülür.

---

### ÇİFT 39 (Benzerlik: 0.72)

**Soru 1 (ID: 9f71e252-6257-42c3-bdd9-e9444166cc7c)**
Soru Kökü: Aşağıdaki kraniofasiyal sendromların hangisinin etiyopatogenezinde epifizde ve kafa tabanı kıkırdağında kalsifikasyon bozulması yatmaktadır?
Doğru Şık (B): Akondroplazi
Açıklama: Akondroplazinin temel mekanizması epifiz ve kafa tabanı kıkırdağındaki endokondral kalsifikasyonun (kemikleşmenin) bozulmasıdır, bu da kısa kafa kaidesi ve çökük orta yüze neden olur. Apert, Crouzon, Carpenter ve Pfeiffer sendromları ise kraniyal süturların erken kapanması (kraniyosinostoz) kaynaklı patolojilerdir. Kemikleşme tipindeki bu mekanizma farkı, kıkırdak kaynaklı cücelik ile sütür kaynaklı deformiteleri birbirinden ayırır.

**Soru 2 (ID: a668b6ec-1bb9-41d9-9913-15901f64beab)**
Soru Kökü: On yaşındaki erkek hastanın kliniğe başvurusunda; belirgin bir alın bombesi, çökük bir orta yüz ve ekstremitelerinde kısalık (cücelik) tespit ediliyor. İntraoral muayenede ise makroglossi, anterior açık kapanış ve Sınıf III maloklüzyon saptanıyor. Bu hastadaki kraniofasiyal anomalinin temel etyopatogenezi aşağıdakilerden hangisidir?
Doğru Şık (C): Epifizde ve kafa tabanı kıkırdağında kalsifikasyon bozukluğu
Açıklama: Senaryoda tarif edilen cücelik, alın bombesi, orta yüz çöküklüğü ve kısa kafa kaidesi tablosu Akondroplazi sendromuna aittir. Akondroplazinin temel patogenezi kıkırdak tabanlı endokondral ossifikasyon yetersizliğidir; kafa tabanı kıkırdağında kalsifikasyonun bozulması orta yüzün büyümesini kısıtlayarak relatif prognati ve Sınıf III maloklüzyona yol açar.

---

### ÇİFT 40 (Benzerlik: 0.72)

**Soru 1 (ID: 9f71e252-6257-42c3-bdd9-e9444166cc7c)**
Soru Kökü: Aşağıdaki kraniofasiyal sendromların hangisinin etiyopatogenezinde epifizde ve kafa tabanı kıkırdağında kalsifikasyon bozulması yatmaktadır?
Doğru Şık (B): Akondroplazi
Açıklama: Akondroplazinin temel mekanizması epifiz ve kafa tabanı kıkırdağındaki endokondral kalsifikasyonun (kemikleşmenin) bozulmasıdır, bu da kısa kafa kaidesi ve çökük orta yüze neden olur. Apert, Crouzon, Carpenter ve Pfeiffer sendromları ise kraniyal süturların erken kapanması (kraniyosinostoz) kaynaklı patolojilerdir. Kemikleşme tipindeki bu mekanizma farkı, kıkırdak kaynaklı cücelik ile sütür kaynaklı deformiteleri birbirinden ayırır.

**Soru 2 (ID: a78873e2-a400-4ab3-8fe8-cb836181f6dc)**
Soru Kökü: Crouzon sendromunun patogenezinde yatan temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Kraniyal süturlarda prematür sinostoz
Açıklama: Crouzon sendromu en sık karşılaşılan kraniofasiyal sendromlardan olup, temel mekanizması kraniyal süturların prematür (zamanından erken) sinostozudur. Kafa tabanı kıkırdağında kalsifikasyon bozukluğu akondroplazinin mekanizmasıdır. Zigomatik ark yokluğu ise Treacher Collins sendromunda izlenen bir bulgudur.

---

### ÇİFT 41 (Benzerlik: 0.72)

**Soru 1 (ID: 0dd9b336-4c2c-40ab-80f0-a40767921736)**
Soru Kökü: Down sendromu (Trizomi 21) olgularının kraniofasiyal özellikleri incelendiğinde aşağıdakilerden hangisi **doğru değildir**?
Doğru Şık (B): Kafa kaidesindeki süturların kapanmasında prematür hızlanma izlenir.
Açıklama: Down sendromunda kafa iskeletindeki süturların erken kapanması değil, tam tersine kapanmasında gecikme (geç kapanma) yaşanır. Kraniyosinostoz (sütur erken kapanması) Apert, Crouzon gibi sendromlara özgüdür. Down sendromunda pnömatizasyon zayıf olduğu için sfenoid/frontal sinüs yokluğu ve diş sürme gecikmeleri tablonun doğrusunu oluşturur.

**Soru 2 (ID: 574c2a0e-3504-403a-88ec-629bf9c71a00)**
Soru Kökü: Turner sendromlu hastaların kraniyofasiyal ve dental özellikleri incelendiğinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (C): Dental yaşın hastanın kronolojik yaşından daha geride kalması
Açıklama: Turner sendromunda spesifik ve ayırıcı bir bulgu olarak hastaların dental yaşı kronolojik yaşından geride değil, tam tersine daha ileridedir. Bu durum Down sendromu veya hipotiroidizm gibi gecikme yapan hastalıklardan ayrımını sağlar. Hastalarda ince mine, kısa kökler, mikrodonti ve kök rezorpsiyonu riski yüksek diğer geçerli bulgulardır.

---

### ÇİFT 42 (Benzerlik: 0.72)

**Soru 1 (ID: 20fa1395-95fe-469d-a90d-c45cd5e13bdd)**
Soru Kökü: Aşağıdaki radyografik sefalometrik bulgulardan hangisi Treacher Collins sendromunun patognomonik mandibular özelliklerinden biridir?
Doğru Şık (B): Mandibulanın yatay ramusunun içbükey eğriliği
Açıklama: Treacher Collins sendromunda mandibuladaki kondiler ve koronoid proçeslerin hipoplazisi/aplazisine ek olarak; mandibula alt sınırının belirgin eğilmesi ve mandibulanın yatay ramusunun 'içbükey eğriliği' (ante-gonial notch benzeri derinleşme) patognomonik radyografik işarettir. Gonial açı küçülmez, aksine büyür.

**Soru 2 (ID: 24716381-c334-4092-aa26-3fdda71ed536)**
Soru Kökü: On dört yaşındaki kız hasta, dişlerini kapatamama (iskeletsel açık kapanış) şikayetiyle başvuruyor. Yüz incelemesinde gözlerin dış uçlarının aşağı doğru sarktığı görülüyor. Alınan lateral sefalometrik radyografide mandibulanın yatay ramusunun alt sınırında belirgin bir içbükey (konkav) eğrilik izleniyor. Bu radyografik bulgu aşağıdaki sendromlardan hangisi için patognomoniktir?
Doğru Şık (A): Mandibulofasiyal Dizostoz
Açıklama: Mandibulanın yatay ramusunun alt sınırında izlenen patognomonik içbükey (konkav) eğrilik ve sekonder gonial açı büyümesi, Mandibulofasiyal dizostoz (Treacher Collins sendromu) için kesin radyografik işarettir. Göz kapaklarındaki aşağı sarkma, kondil hipoplazisine sekonder açık kapanış ve "kuş yüzü" görünümü bu spesifik birinci/ikinci ark anomalisini doğrular.

---

### ÇİFT 43 (Benzerlik: 0.72)

**Soru 1 (ID: 750e38fa-41f4-438a-9964-3f6a681efed4)**
Soru Kökü: Apert sendromunun fasiyal ve kraniyal özelliklerini değerlendiren bir hekim, aşağıdaki bulgulardan hangisinin bu sendroma ait **olmadığını** bilmelidir?
Doğru Şık (B): Mandibular prognati
Açıklama: Apert sendromunda orta yüz hipoplazisine bağlı olarak görece (rölatif) bir mandibula çıkıklığı yanılgısı oluşabilse de, gerçek bir kemiksel 'mandibular prognati' sendromun temel patolojilerinden biri değildir. Hipertelorizm (gözlerin birbirinden uzak olması), ekzoftalmi ve maksillanın hipoplazik gelişimi sendromun tipik yüz karakteristiğidir.

**Soru 2 (ID: dcdd700d-f685-4f33-8819-fe19540ec3e9)**
Soru Kökü: Goldenhar sendromunun sistemik ve fasiyal-gelişimsel bulguları değerlendirildiğinde, aşağıdakilerden hangisinin hastada görülmesi **en az olasıdır**?
Doğru Şık (A): Mandibular prognati
Açıklama: Goldenhar sendromunda çene gelişiminde yetersizlik mevcuttur; tek veya çift taraflı mandibular 'hipoplazi' izlenir, bu nedenle alt çenenin önde konumlandığı 'mandibular prognati' tablosu beklenmez. Fasiyal asimetri, vertebral anomaliler ve mental retardasyon kliniğe eşlik edebilen yaygın anomalilerdir.

---

### ÇİFT 44 (Benzerlik: 0.72)

**Soru 1 (ID: 574c2a0e-3504-403a-88ec-629bf9c71a00)**
Soru Kökü: Turner sendromlu hastaların kraniyofasiyal ve dental özellikleri incelendiğinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (C): Dental yaşın hastanın kronolojik yaşından daha geride kalması
Açıklama: Turner sendromunda spesifik ve ayırıcı bir bulgu olarak hastaların dental yaşı kronolojik yaşından geride değil, tam tersine daha ileridedir. Bu durum Down sendromu veya hipotiroidizm gibi gecikme yapan hastalıklardan ayrımını sağlar. Hastalarda ince mine, kısa kökler, mikrodonti ve kök rezorpsiyonu riski yüksek diğer geçerli bulgulardır.

**Soru 2 (ID: 5e19ed04-5e1b-4f22-a27c-8eea2c548ed8)**
Soru Kökü: Kız çocuk hastada izlenen lateral çapraz kapanış, artmış overjet ile distal molar kapanış ilişkisi ve omuz hizasında kısalık varlığında Turner Sendromu şüphelenilmektedir. Bu hastada ortodontik tedavi (diş hareketi) planlanırken **en çok** dikkat edilmesi gereken hücresel/kök riski aşağıdakilerden hangisidir?
Doğru Şık (C): Diş hareketleri sırasında şiddetli kök rezorpsiyonu eğilimi
Açıklama: Turner sendromunda dişlerin kökleri kısadır, mine incedir ve dentin anormaldir; bu morfolojik yapı diş hareketleri sırasında rezorpsiyona şiddetli bir eğilim yaratır. Ankiloz veya hipersementoz sendromun klasik mekanizmaları arasında yer almaz. Kısa ve zayıf kök yapısına sahip bu dişlere uygulanacak ağır ortodontik kuvvetler iyatrojenik diş kayıplarıyla sonuçlanabilir.

---

### ÇİFT 45 (Benzerlik: 0.72)

**Soru 1 (ID: 0dd9b336-4c2c-40ab-80f0-a40767921736)**
Soru Kökü: Down sendromu (Trizomi 21) olgularının kraniofasiyal özellikleri incelendiğinde aşağıdakilerden hangisi **doğru değildir**?
Doğru Şık (B): Kafa kaidesindeki süturların kapanmasında prematür hızlanma izlenir.
Açıklama: Down sendromunda kafa iskeletindeki süturların erken kapanması değil, tam tersine kapanmasında gecikme (geç kapanma) yaşanır. Kraniyosinostoz (sütur erken kapanması) Apert, Crouzon gibi sendromlara özgüdür. Down sendromunda pnömatizasyon zayıf olduğu için sfenoid/frontal sinüs yokluğu ve diş sürme gecikmeleri tablonun doğrusunu oluşturur.

**Soru 2 (ID: 88eae9bc-46e6-4164-83db-dae0f0c317b8)**
Soru Kökü: Turner sendromlu hastalarda görülen dental ve kraniyofasiyal bulgularla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Diş hareketleri sırasında kök rezorpsiyonuna karşı yüksek direnç gösterirler
Açıklama: Turner sendromlu hastalarda görülen kısa kök yapısı, ortodontik diş hareketleri sırasında şiddetli rezorpsiyon riski (eğilimi) oluşturur, dolayısıyla dirence değil hassasiyete neden olur. Hastaların genel sistemik gelişim geriliği beklentisinin aksine, bu sendromda dental yaşın kronolojik yaşından belirgin şekilde ileride olması sınav açısından kritik bir istisnadır. İnce mine oluşumu, dar palatal yapı ve lateral çapraz kapanış ise eşlik eden diğer dentofasiyal anomalilerdendir.

---

### ÇİFT 46 (Benzerlik: 0.71)

**Soru 1 (ID: 479a3844-d64a-4505-8e9c-f7d226a4cde4)**
Soru Kökü: Ektodermal displazi tanısı almış bir hastada aşağıdaki bulgulardan hangisinin görülmesi **en az olasıdır**?
Doğru Şık (E): Süt ve daimi dentisyonda hiperdonti
Açıklama: Ektodermal displazide dental laminanın gelişememesine bağlı olarak hipodonti (yaygın diş eksikliği) görülür; hiperdonti beklenmez. Ter bezlerinin etkilendiği hipohidrozis/anhidrozis, hipotrikoz ve anterior dişlerin konikleşmesi ektodermal kökenli gelişim kusurlarının direkt sonucudur. Konjenital kalp defekti ve dudak-damak yarığı da tabloya eşlik edebilen iskeletsel/sistemik sorunlar arasındadır.

**Soru 2 (ID: 77b6fae6-7c7a-4c9f-a48b-bd8a6a7165ae)**
Soru Kökü: Saç ve tırnak displazisi bulguları gösteren 7 yaşındaki kız çocuk hasta, dişlerindeki şekil bozuklukları nedeniyle değerlendiriliyor. Ağız içi muayenesinde çoklu diş eksikliği (hipodonti) ve mevcut anterior dişlerin 'konik' formda olduğu saptanıyor. Bu sistemik sendromun deri eklerine yönelik fizik muayenesinde aşağıdaki bulgulardan hangisinin varlığı karakteristik bir tanıdır?
Doğru Şık (B): Anhidrozis
Açıklama: Tarif edilen ektodermal eklenti defektleri (saç, tırnak, konik diş, hipodonti) Ektodermal Displazi sendromunu işaret eder ve bu hastalardaki en ölümcül/karakteristik deri bulgusu ter bezlerinin yokluğuna bağlı hipohidrozis veya anhidrozisdir. Asteatoz (seboreik bez eksikliği) da eşlik eder. Hipertelorizm kraniyosinostozlarda, polisindaktili Carpenter'da görülürken, anhidroz vücut ısısı regülasyonunu bozduğu için acil klinik öneme sahiptir.

---

### ÇİFT 47 (Benzerlik: 0.71)

**Soru 1 (ID: c3929dad-26c2-4cf6-811d-4bc0353e8a4d)**
Soru Kökü: Fasiyal asimetri ve kulak kepçesinde atrezi ile başvuran hastanın ortodontik sefalometrik tetkikinde; mandibula alt sınırında belirgin eğilme ve gonial açıda aşırı büyüme tespit edilmiştir. Ancak tek taraflı kondil eksikliği **izlenmemektedir**. Hastanın göz yapısında aşağı sarkma mevcutsa bu klinik tablo öncelikle hangi kraniofasiyal anomaliyi düşündürür?
Doğru Şık (B): Treacher Collins Sendromu
Açıklama: Kulak deformitesi, göz dış uçlarında aşağı sarkma, mandibula alt sınırının belirgin eğilmesi ve gonial açıda büyüme Treacher Collins Sendromunun iskeletsel otonomisini tanımlar. Hemifasiyal mikrozomide tek taraflı ramus/kondil yokluğu beklenir, burada eksiklik olmadığı özellikle belirtilmiştir. Hastanın makrostomi potansiyeli taşıyan bu Sınıf II/Sınıf III geçişli (açık kapanış + kuş yüzü) tablosu cerrahi-ortodontik kombine vakadır.

**Soru 2 (ID: ffff72e6-0313-47d9-b324-99fdaae9f9d3)**
Soru Kökü: Treacher Collins sendromuna sahip bir hastanın kraniyofasiyal kemik anatomisi BT (Bilgisayarlı Tomografi) ile incelendiğinde, orta yüz bölgesinde aşağıdaki bulgulardan hangisi ile karşılaşılması **en olasıdır**?
Doğru Şık (E): Zigomatik kemiklerin oluşmaması veya ark yapmaması
Açıklama: Treacher Collins sendromunda zigomatik (elmacık) kemikler ya hiç oluşmamıştır ya da tam gelişmemiş olup temporal kemikle birleşerek oluşturdukları 'zigomatik ark' anatomik olarak yoktur veya defektiftir. Klavikula yokluğu Kleidokranial displazinin; wormian kemikleri yine aynı displazinin bulgusudur.

---

### ÇİFT 48 (Benzerlik: 0.71)

**Soru 1 (ID: 9e5b984f-6908-48c1-b65b-e506d14a6e16)**
Soru Kökü: Yirmi bir yaşındaki sendromik bir erkek hasta, dişeti çekilmesi ve yaygın periodontal kemik kaybı ile başvuruyor. Radyografisinde ön-arka yönde kısa kafa kaidesi ve frontal/sfenoid sinüslerin gelişmediği saptanıyor. Alt çenesi protruziv konumda olan ve zeka geriliği öyküsü olan bu hastanın üst lateral dişlerinin form analizi yapıldığında en olası beklenen anomalili yapı hangisidir?
Doğru Şık (D): Konik diş formu
Açıklama: Sefalometrik ön-arka kraniyal kısalık, protruziv mandibula, pnömatizasyon zayıflığı (sinüs yokluğu), yüksek periodontal yıkım ve zeka geriliği Down sendromunu (Trizomi 21) tartışmasız olarak tarif etmektedir. Down sendromunda üst lateral kesici dişlerin yapısal olarak 'konik' veya kama şeklinde gelişmesi karakteristik bir dentofasiyal malformasyon bulgusudur.

**Soru 2 (ID: ca2a8fb4-125a-4139-8fd7-64de0cce10bd)**
Soru Kökü: On iki yaşındaki kız çocuğunun sefalometrik analizinde kısa kafa kaidesi ve retrognatik çeneler saptanıyor. Radyolojik incelemede diş köklerinin normalden kısa olduğu, klinik muayenede diş minesinin ince olduğu izleniyor. Hastanın dental gelişim yaşının kronolojik yaşından daha ileride tespit edilmesi aşağıdaki sendromlardan hangisine işaret eder?
Doğru Şık (D): Turner Sendromu
Açıklama: Turner sendromunda kız çocuklarında (45,X) mikrodonti, ince mine, kısa diş kökleri ve dental yaşın kronolojik yaşa göre paradoksal biçimde daha ileride olması patognomoniğe yakın çok değerli bulgulardır. Down sendromunda veya Akondroplazi'de dental gelişim hızlanmaz, tam tersine sürme süreçlerinde belirgin gerilik ve gecikmeler saptanır.

---

### ÇİFT 49 (Benzerlik: 0.71)

**Soru 1 (ID: 0ded0894-bdc6-4495-89da-c84c0da25429)**
Soru Kökü: Treacher Collins sendromunun (Mandibulofasiyal dizostoz) patogenezi ve klinik yansımaları dikkate alındığında aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Alt çenedeki kondiler ve koronoid proçesler şiddetli hiperplazi gösterir.
Açıklama: Treacher Collins sendromunda (Mandibulofasiyal dizostoz) birinci brankial ark eksikliği sebebiyle mandibula ileri derecede gelişmemiş (retrognati/mikrognati) kalır. Dolayısıyla alt çenedeki kondiler ve koronoid proçeslerde aşırı büyüme (hiperplazi) değil, tam tersine belirgin hipoplazi veya tam aplazi izlenir. Konkav ramus sınırı ve kuş yüzü profili sendromu doğrular.

**Soru 2 (ID: c3929dad-26c2-4cf6-811d-4bc0353e8a4d)**
Soru Kökü: Fasiyal asimetri ve kulak kepçesinde atrezi ile başvuran hastanın ortodontik sefalometrik tetkikinde; mandibula alt sınırında belirgin eğilme ve gonial açıda aşırı büyüme tespit edilmiştir. Ancak tek taraflı kondil eksikliği **izlenmemektedir**. Hastanın göz yapısında aşağı sarkma mevcutsa bu klinik tablo öncelikle hangi kraniofasiyal anomaliyi düşündürür?
Doğru Şık (B): Treacher Collins Sendromu
Açıklama: Kulak deformitesi, göz dış uçlarında aşağı sarkma, mandibula alt sınırının belirgin eğilmesi ve gonial açıda büyüme Treacher Collins Sendromunun iskeletsel otonomisini tanımlar. Hemifasiyal mikrozomide tek taraflı ramus/kondil yokluğu beklenir, burada eksiklik olmadığı özellikle belirtilmiştir. Hastanın makrostomi potansiyeli taşıyan bu Sınıf II/Sınıf III geçişli (açık kapanış + kuş yüzü) tablosu cerrahi-ortodontik kombine vakadır.

---

### ÇİFT 50 (Benzerlik: 0.71)

**Soru 1 (ID: 0189ede7-ff54-4b9c-8cc2-b84e121535ad)**
Soru Kökü: Apert sendromunun klinik bulguları ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Gelişim geriliğine rağmen normal zeka seviyesi beklenir.
Açıklama: Apert sendromunda gelişim geriliğinin yanı sıra mental retardasyon (zeka geriliği) karakteristik bir bulgudur, dolayısıyla normal zeka seviyesi beklenmez. Hipertelorizm, sendaktili, kraniyosinostoz ve maksiller hipoplazi sendromun diğer temel tanıyıcı özellikleridir. Carpenter ve Pfeiffer gibi diğer kraniyosinostozlardan ekstremite bulgularının ağırlığı ve zeka geriliği ile ayırt edilir.

**Soru 2 (ID: 1640789a-d325-49df-9563-9ebd9414433c)**
Soru Kökü: Apert sendromlu bireylerde görülen intraoral ve dental anormallikler dikkate alındığında, aşağıdakilerden hangisi bu hastalarda beklenen oral bulgulardan biri **değildir**?
Doğru Şık (D): Ağız mukozasında şarap rengi hemanjiomlar
Açıklama: Apert sendromunun ağız içi bulguları arasında derin damak, maksiller hipoplazi ve buna bağlı şiddetli dişsel çapraşıklıklar yer alır. Yüzde veya ağız mukozasında şarap rengi (port-wine) lekelenmeler ve hemanjiomlar Apert sendromunda değil, Sturge-Weber sendromunda görülen vasküler anomalilerdir.

---

### ÇİFT 51 (Benzerlik: 0.71)

**Soru 1 (ID: 0189ede7-ff54-4b9c-8cc2-b84e121535ad)**
Soru Kökü: Apert sendromunun klinik bulguları ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Gelişim geriliğine rağmen normal zeka seviyesi beklenir.
Açıklama: Apert sendromunda gelişim geriliğinin yanı sıra mental retardasyon (zeka geriliği) karakteristik bir bulgudur, dolayısıyla normal zeka seviyesi beklenmez. Hipertelorizm, sendaktili, kraniyosinostoz ve maksiller hipoplazi sendromun diğer temel tanıyıcı özellikleridir. Carpenter ve Pfeiffer gibi diğer kraniyosinostozlardan ekstremite bulgularının ağırlığı ve zeka geriliği ile ayırt edilir.

**Soru 2 (ID: 4ef768c3-8f35-4339-94b8-ed468ad42d94)**
Soru Kökü: Pediatrik ortodonti kliniğine başvuran 6 yaşındaki erkek çocuğun muayenesinde; kraniyal süturların erken kapanmasına bağlı ciddi kafatası şekil bozukluğu, mental retardasyon ve görme kaybı (körlük) saptanmıştır. Ekstremite muayenesinde ellerde ve ayaklarda parmakların yapışık olduğu (sindaktili) gözlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Apert Sendromu
Açıklama: Kafatasında ciddi şekil bozukluğu, mental retardasyon, körlük ve özellikle el-ayak deformiteleri (sindaktili) Apert sendromunun klasik fiziksel bulgularıdır. Crouzon sendromunda genellikle sindaktili ve mental retardasyon beklenmez; Pfeiffer sendromunda ise geniş başparmak izlenir ancak körlük/mental retardasyon tablosu Apert kadar ağır karakterize edilmemiştir.

---

### ÇİFT 52 (Benzerlik: 0.71)

**Soru 1 (ID: 6da0eaff-bcaf-41db-9c6a-365da0ebacd2)**
Soru Kökü: Hemifasiyal mikrozomi sendromunda defektten primer olarak (en fazla) etkilenen kraniyofasiyal yapı triadı aşağıdaki seçeneklerin hangisinde doğru eşleştirilmiştir?
Doğru Şık (D): Kulak, ağız ve mandibula
Açıklama: Hemifasiyal mikrozomi primer olarak birinci ve ikinci brankial ark yapılarından gelişen 'kulak, ağız ve mandibula' üçlüsünü etkiler. Etkilenen tarafta kulak kepçesi anomalisi, makrostomi veya ağız köşesi distorsiyonu ile ramus ve kondilin olmayışı en tipik bulgularıdır.

**Soru 2 (ID: ac0f0b2e-d9ba-492c-9a60-3c81b2796dda)**
Soru Kökü: Embriyolojik gelişim sürecinde yüzün sadece bir tarafındaki dokuların (yumuşak doku ve kemik) yeterli gelişememesi sonucu ortaya çıkan, bilateral simetrinin şiddetle bozulduğu asimetrik kraniofasiyal anomali aşağıdakilerden hangisidir?
Doğru Şık (C): Hemifasiyal Mikrozomi
Açıklama: Hemifasiyal mikrozomi, patogenezinde yüzün bir yarısındaki dokuların (kemik, kas, sinir, cilt) tam kapasiteyle gelişememesi veya rudimenter kalması yatan asimetrik bir hastalıktır. Diğer sayılan hastalıkların tamamı (Down, Akondroplazi, Ektodermal Displazi) kraniofasiyal bölgeyi simetrik ve iki taraflı olarak etkiler.

---

### ÇİFT 53 (Benzerlik: 0.71)

**Soru 1 (ID: 2635abd8-1431-4f84-a51d-bef305673c20)**
Soru Kökü: Crouzon Sendromu'nu diğer kraniyofasiyal dizostozlardan klinik olarak ayırt etmek için tarif edilen '3 ana bozukluk' (triad) içerisinde aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (D): Mental retardasyon
Açıklama: Crouzon sendromunun klinik triadı kafatası deformitesi, yüz deformitesi ve ekzoftalmidir (gözlerin dışarı fırlaması). Zeka geriliği (mental retardasyon) bu triadda yer almaz; Apert veya Prader-Willi gibi diğer sendromların aksine Crouzon hastalarında zeka genellikle normaldir. Bu triad, hekimin tanısal kurguyu sindaktili / zeka geriliği sarmalından çıkarması için temel bir kılavuzdur.

**Soru 2 (ID: 750e38fa-41f4-438a-9964-3f6a681efed4)**
Soru Kökü: Apert sendromunun fasiyal ve kraniyal özelliklerini değerlendiren bir hekim, aşağıdaki bulgulardan hangisinin bu sendroma ait **olmadığını** bilmelidir?
Doğru Şık (B): Mandibular prognati
Açıklama: Apert sendromunda orta yüz hipoplazisine bağlı olarak görece (rölatif) bir mandibula çıkıklığı yanılgısı oluşabilse de, gerçek bir kemiksel 'mandibular prognati' sendromun temel patolojilerinden biri değildir. Hipertelorizm (gözlerin birbirinden uzak olması), ekzoftalmi ve maksillanın hipoplazik gelişimi sendromun tipik yüz karakteristiğidir.

---

### ÇİFT 54 (Benzerlik: 0.71)

**Soru 1 (ID: 2f6ee290-f528-4042-999f-2545df8c20d0)**
Soru Kökü: Ortodontik muayene sırasında şiddetli Sınıf III maloklüzyon, Sınıf III iskeletsel yapı, anterior crossbite ve maksiller hipoplaziye bağlı konkav profil tespit edilen 9 yaşındaki erkek hastanın anamnezinde konjenital sendrom öyküsü bulunmamaktadır. Ancak hastanın doğuştan gelen izole bir anomalisi mevcuttur. Bu hastanın Sınıf III gelişim paternine neden olan **en olası** birincil etyolojik faktör aşağıdakilerden hangisidir?
Doğru Şık (A): Dudak-damak yarığı onarımı sekeli
Açıklama: Dudak-damak yarığına sahip hastalarda, üst çenenin sagital ve transversal yönde yetersiz gelişimi sonucu sekonder olarak mikrognati superior, Angle Sınıf III ilişki ve anterior crossbite tablosu oluşur. Bilateral kondiler hipoplazi Sınıf II (retrognati) profiline yol açar, Sınıf III'e değil. Cerrahi onarımların yarattığı skar dokusu maksillanın ileri büyümesini kısıtlayarak bu iskeletsel anomalinin temel sebebini oluşturur.

**Soru 2 (ID: c3929dad-26c2-4cf6-811d-4bc0353e8a4d)**
Soru Kökü: Fasiyal asimetri ve kulak kepçesinde atrezi ile başvuran hastanın ortodontik sefalometrik tetkikinde; mandibula alt sınırında belirgin eğilme ve gonial açıda aşırı büyüme tespit edilmiştir. Ancak tek taraflı kondil eksikliği **izlenmemektedir**. Hastanın göz yapısında aşağı sarkma mevcutsa bu klinik tablo öncelikle hangi kraniofasiyal anomaliyi düşündürür?
Doğru Şık (B): Treacher Collins Sendromu
Açıklama: Kulak deformitesi, göz dış uçlarında aşağı sarkma, mandibula alt sınırının belirgin eğilmesi ve gonial açıda büyüme Treacher Collins Sendromunun iskeletsel otonomisini tanımlar. Hemifasiyal mikrozomide tek taraflı ramus/kondil yokluğu beklenir, burada eksiklik olmadığı özellikle belirtilmiştir. Hastanın makrostomi potansiyeli taşıyan bu Sınıf II/Sınıf III geçişli (açık kapanış + kuş yüzü) tablosu cerrahi-ortodontik kombine vakadır.

---

### ÇİFT 55 (Benzerlik: 0.71)

**Soru 1 (ID: 1640789a-d325-49df-9563-9ebd9414433c)**
Soru Kökü: Apert sendromlu bireylerde görülen intraoral ve dental anormallikler dikkate alındığında, aşağıdakilerden hangisi bu hastalarda beklenen oral bulgulardan biri **değildir**?
Doğru Şık (D): Ağız mukozasında şarap rengi hemanjiomlar
Açıklama: Apert sendromunun ağız içi bulguları arasında derin damak, maksiller hipoplazi ve buna bağlı şiddetli dişsel çapraşıklıklar yer alır. Yüzde veya ağız mukozasında şarap rengi (port-wine) lekelenmeler ve hemanjiomlar Apert sendromunda değil, Sturge-Weber sendromunda görülen vasküler anomalilerdir.

**Soru 2 (ID: 750e38fa-41f4-438a-9964-3f6a681efed4)**
Soru Kökü: Apert sendromunun fasiyal ve kraniyal özelliklerini değerlendiren bir hekim, aşağıdaki bulgulardan hangisinin bu sendroma ait **olmadığını** bilmelidir?
Doğru Şık (B): Mandibular prognati
Açıklama: Apert sendromunda orta yüz hipoplazisine bağlı olarak görece (rölatif) bir mandibula çıkıklığı yanılgısı oluşabilse de, gerçek bir kemiksel 'mandibular prognati' sendromun temel patolojilerinden biri değildir. Hipertelorizm (gözlerin birbirinden uzak olması), ekzoftalmi ve maksillanın hipoplazik gelişimi sendromun tipik yüz karakteristiğidir.

---

### ÇİFT 56 (Benzerlik: 0.71)

**Soru 1 (ID: 9ee9dd5d-1220-43c5-ade0-d5350b4f8e7f)**
Soru Kökü: Ortodonti kliniğine başvuran 9 yaşındaki kız çocuğunda ciddi iskeletsel açık kapanış (open-bite) saptanmıştır. Yüz profili incelendiğinde çene ucunun aşırı geride (retrognati) ve küçük (mikrognati) olduğu, 'kuş yüzü' görünümünün tabuloya eşlik ettiği görülmüştür. Ağız yapısının normalden geniş (makrostomi) olduğu bu hastada en olası teşhis nedir?
Doğru Şık (A): Treacher Collins Sendromu
Açıklama: Şiddetli retrognati, mikrognati, iskeletsel açık kapanış, makrostomi (geniş ağız) ve tipik 'kuş yüzü' profili Treacher Collins sendromunun (Mandibulofasiyal dizostoz) klasik çene ve yüz bulgularıdır. Down sendromunda ve Akondroplazide tipik olarak Sınıf III (mandibular protrüzyon eğilimi) görülür.

**Soru 2 (ID: d36dd9d1-5465-4e55-94f8-a53c91270035)**
Soru Kökü: Beş yaşındaki dudak-damak yarığı bulunan hastanın ortodontik değerlendirmesinde maksillada ciddi hipoplazi saptanıyor. Maksillanın her üç boyuttaki gelişim yetersizliği dikkate alındığında, posterior (transversal) ve anterior (sagital) bölgelerde sırasıyla hangi tip oklüzal düzensizliklerin gelişmesi en olasıdır?
Doğru Şık (D): Yan çapraz kapanış (Crossbite) - Anterior çapraz kapanış
Açıklama: Dudak-damak yarıklarında cerrahi gerilim ve skar dokusu etkisiyle maksillanın transversal daralması, yarığın olduğu tarafta spesifik yan çapraz kapanışa (posterior crossbite) neden olur. Maksillanın sagital yön (ön-arka) geriliği ise iskeletsel Sınıf III ve buna sekonder anterior çapraz kapanış tablosunu yaratır.

---

### ÇİFT 57 (Benzerlik: 0.71)

**Soru 1 (ID: 91ab3f71-768e-45b6-929f-16f3ddb39246)**
Soru Kökü: Crouzon sendromunda kraniyal süturların prematür sinostozuna bağlı olarak aşağıdaki kafa şekillerinden hangisinin görülmesi **beklenmez**?
Doğru Şık (E): Dolikosefal
Açıklama: Crouzon sendromunda kafatası süturlarının erken kapanmasına bağlı olarak büyüme yönü değişir ve brakiyosefal (kısa kafa), skalosefal (kano şekli) veya trigonosefal (üçgen şekli) kafa yapıları ortaya çıkar. Dolikosefal kafa yapısı ise başın ön-arka çapının transvers çapına göre belirgin uzun olduğu durumu tanımlar ve bu sendromun karakteristik kraniyal spektrumunda yer almaz. Bu kafatası deformiteleri, hastanın cerrahi planlamasında primer belirleyicidir.

**Soru 2 (ID: 9ba43fd9-c252-44ad-a164-1144d232c509)**
Soru Kökü: Carpenter sendromuna sahip bir hastanın kraniyal morfolojisi incelendiğinde, aşağıdaki kafatası deformitelerinden hangisinin görülmesi en tipiktir?
Doğru Şık (A): Kafatası asimetrileri ve brakiosefali
Açıklama: Carpenter sendromunda kraniosinostoza bağlı olarak kafatasında asimetriler ve sıklıkla brakiosefali (kısa kafa) tablosu izlenir. Wormian kemikçikleri Kleidokranial displazide görülürken, kafa kaidesi kısalığına eşlik eden bombeli alın ve cücelik Akondroplazinin karakteristik iskelet bulgusudur.

---

### ÇİFT 58 (Benzerlik: 0.71)

**Soru 1 (ID: c3929dad-26c2-4cf6-811d-4bc0353e8a4d)**
Soru Kökü: Fasiyal asimetri ve kulak kepçesinde atrezi ile başvuran hastanın ortodontik sefalometrik tetkikinde; mandibula alt sınırında belirgin eğilme ve gonial açıda aşırı büyüme tespit edilmiştir. Ancak tek taraflı kondil eksikliği **izlenmemektedir**. Hastanın göz yapısında aşağı sarkma mevcutsa bu klinik tablo öncelikle hangi kraniofasiyal anomaliyi düşündürür?
Doğru Şık (B): Treacher Collins Sendromu
Açıklama: Kulak deformitesi, göz dış uçlarında aşağı sarkma, mandibula alt sınırının belirgin eğilmesi ve gonial açıda büyüme Treacher Collins Sendromunun iskeletsel otonomisini tanımlar. Hemifasiyal mikrozomide tek taraflı ramus/kondil yokluğu beklenir, burada eksiklik olmadığı özellikle belirtilmiştir. Hastanın makrostomi potansiyeli taşıyan bu Sınıf II/Sınıf III geçişli (açık kapanış + kuş yüzü) tablosu cerrahi-ortodontik kombine vakadır.

**Soru 2 (ID: d5580598-a807-4a5e-b0cb-f5956d36d4e4)**
Soru Kökü: Yüzün orta hattında asimetri, ramus ve kondilin tek taraflı olarak bulunmaması ile birlikte etkilenen taraftaki kulak kepçesi anomalisinin tipik iki bulguyu oluşturduğu hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Hemifasiyal Mikrozomi
Açıklama: Tek taraflı ramus/kondil agenezisi ve beraberinde kulak kepçesi anomalisi, birinci ve ikinci faringeal arkın unilateral asimetrik gelişim geriliği olan hemifasiyal mikrozominin doğrudan en tipik iki iskeletsel/yumuşak doku bulgusudur. Goldenhar sendromu bu tablonun daha geniş sistemik versiyonu olsa da, tanımda "tipik iki bulgu" olarak spesifik çerçevelenen durum hemifasiyal mikrozomidir.

---

### ÇİFT 59 (Benzerlik: 0.70)

**Soru 1 (ID: 24716381-c334-4092-aa26-3fdda71ed536)**
Soru Kökü: On dört yaşındaki kız hasta, dişlerini kapatamama (iskeletsel açık kapanış) şikayetiyle başvuruyor. Yüz incelemesinde gözlerin dış uçlarının aşağı doğru sarktığı görülüyor. Alınan lateral sefalometrik radyografide mandibulanın yatay ramusunun alt sınırında belirgin bir içbükey (konkav) eğrilik izleniyor. Bu radyografik bulgu aşağıdaki sendromlardan hangisi için patognomoniktir?
Doğru Şık (A): Mandibulofasiyal Dizostoz
Açıklama: Mandibulanın yatay ramusunun alt sınırında izlenen patognomonik içbükey (konkav) eğrilik ve sekonder gonial açı büyümesi, Mandibulofasiyal dizostoz (Treacher Collins sendromu) için kesin radyografik işarettir. Göz kapaklarındaki aşağı sarkma, kondil hipoplazisine sekonder açık kapanış ve "kuş yüzü" görünümü bu spesifik birinci/ikinci ark anomalisini doğrular.

**Soru 2 (ID: 2f6ee290-f528-4042-999f-2545df8c20d0)**
Soru Kökü: Ortodontik muayene sırasında şiddetli Sınıf III maloklüzyon, Sınıf III iskeletsel yapı, anterior crossbite ve maksiller hipoplaziye bağlı konkav profil tespit edilen 9 yaşındaki erkek hastanın anamnezinde konjenital sendrom öyküsü bulunmamaktadır. Ancak hastanın doğuştan gelen izole bir anomalisi mevcuttur. Bu hastanın Sınıf III gelişim paternine neden olan **en olası** birincil etyolojik faktör aşağıdakilerden hangisidir?
Doğru Şık (A): Dudak-damak yarığı onarımı sekeli
Açıklama: Dudak-damak yarığına sahip hastalarda, üst çenenin sagital ve transversal yönde yetersiz gelişimi sonucu sekonder olarak mikrognati superior, Angle Sınıf III ilişki ve anterior crossbite tablosu oluşur. Bilateral kondiler hipoplazi Sınıf II (retrognati) profiline yol açar, Sınıf III'e değil. Cerrahi onarımların yarattığı skar dokusu maksillanın ileri büyümesini kısıtlayarak bu iskeletsel anomalinin temel sebebini oluşturur.

---

### ÇİFT 60 (Benzerlik: 0.70)

**Soru 1 (ID: 24716381-c334-4092-aa26-3fdda71ed536)**
Soru Kökü: On dört yaşındaki kız hasta, dişlerini kapatamama (iskeletsel açık kapanış) şikayetiyle başvuruyor. Yüz incelemesinde gözlerin dış uçlarının aşağı doğru sarktığı görülüyor. Alınan lateral sefalometrik radyografide mandibulanın yatay ramusunun alt sınırında belirgin bir içbükey (konkav) eğrilik izleniyor. Bu radyografik bulgu aşağıdaki sendromlardan hangisi için patognomoniktir?
Doğru Şık (A): Mandibulofasiyal Dizostoz
Açıklama: Mandibulanın yatay ramusunun alt sınırında izlenen patognomonik içbükey (konkav) eğrilik ve sekonder gonial açı büyümesi, Mandibulofasiyal dizostoz (Treacher Collins sendromu) için kesin radyografik işarettir. Göz kapaklarındaki aşağı sarkma, kondil hipoplazisine sekonder açık kapanış ve "kuş yüzü" görünümü bu spesifik birinci/ikinci ark anomalisini doğrular.

**Soru 2 (ID: ca2a8fb4-125a-4139-8fd7-64de0cce10bd)**
Soru Kökü: On iki yaşındaki kız çocuğunun sefalometrik analizinde kısa kafa kaidesi ve retrognatik çeneler saptanıyor. Radyolojik incelemede diş köklerinin normalden kısa olduğu, klinik muayenede diş minesinin ince olduğu izleniyor. Hastanın dental gelişim yaşının kronolojik yaşından daha ileride tespit edilmesi aşağıdaki sendromlardan hangisine işaret eder?
Doğru Şık (D): Turner Sendromu
Açıklama: Turner sendromunda kız çocuklarında (45,X) mikrodonti, ince mine, kısa diş kökleri ve dental yaşın kronolojik yaşa göre paradoksal biçimde daha ileride olması patognomoniğe yakın çok değerli bulgulardır. Down sendromunda veya Akondroplazi'de dental gelişim hızlanmaz, tam tersine sürme süreçlerinde belirgin gerilik ve gecikmeler saptanır.

---

### ÇİFT 61 (Benzerlik: 0.70)

**Soru 1 (ID: 88eae9bc-46e6-4164-83db-dae0f0c317b8)**
Soru Kökü: Turner sendromlu hastalarda görülen dental ve kraniyofasiyal bulgularla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Diş hareketleri sırasında kök rezorpsiyonuna karşı yüksek direnç gösterirler
Açıklama: Turner sendromlu hastalarda görülen kısa kök yapısı, ortodontik diş hareketleri sırasında şiddetli rezorpsiyon riski (eğilimi) oluşturur, dolayısıyla dirence değil hassasiyete neden olur. Hastaların genel sistemik gelişim geriliği beklentisinin aksine, bu sendromda dental yaşın kronolojik yaşından belirgin şekilde ileride olması sınav açısından kritik bir istisnadır. İnce mine oluşumu, dar palatal yapı ve lateral çapraz kapanış ise eşlik eden diğer dentofasiyal anomalilerdendir.

**Soru 2 (ID: ca2a8fb4-125a-4139-8fd7-64de0cce10bd)**
Soru Kökü: On iki yaşındaki kız çocuğunun sefalometrik analizinde kısa kafa kaidesi ve retrognatik çeneler saptanıyor. Radyolojik incelemede diş köklerinin normalden kısa olduğu, klinik muayenede diş minesinin ince olduğu izleniyor. Hastanın dental gelişim yaşının kronolojik yaşından daha ileride tespit edilmesi aşağıdaki sendromlardan hangisine işaret eder?
Doğru Şık (D): Turner Sendromu
Açıklama: Turner sendromunda kız çocuklarında (45,X) mikrodonti, ince mine, kısa diş kökleri ve dental yaşın kronolojik yaşa göre paradoksal biçimde daha ileride olması patognomoniğe yakın çok değerli bulgulardır. Down sendromunda veya Akondroplazi'de dental gelişim hızlanmaz, tam tersine sürme süreçlerinde belirgin gerilik ve gecikmeler saptanır.

---

### ÇİFT 62 (Benzerlik: 0.70)

**Soru 1 (ID: 0dd9b336-4c2c-40ab-80f0-a40767921736)**
Soru Kökü: Down sendromu (Trizomi 21) olgularının kraniofasiyal özellikleri incelendiğinde aşağıdakilerden hangisi **doğru değildir**?
Doğru Şık (B): Kafa kaidesindeki süturların kapanmasında prematür hızlanma izlenir.
Açıklama: Down sendromunda kafa iskeletindeki süturların erken kapanması değil, tam tersine kapanmasında gecikme (geç kapanma) yaşanır. Kraniyosinostoz (sütur erken kapanması) Apert, Crouzon gibi sendromlara özgüdür. Down sendromunda pnömatizasyon zayıf olduğu için sfenoid/frontal sinüs yokluğu ve diş sürme gecikmeleri tablonun doğrusunu oluşturur.

**Soru 2 (ID: 5a7b0efd-8b5e-40ef-acda-3793b67e0c01)**
Soru Kökü: Apert sendromunda karşılaşılan nörolojik ve gelişimsel bulgular ile ilgili aşağıda verilen ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Hastaların günlük aktivitelerinde belirgin hipoaktivite izlenir.
Açıklama: Apert sendromu olgularında gelişim geriliği ve mental retardasyonla birlikte klinikte 'hiperaktivite' görülmesi tipiktir, hipoaktivite izlenmez. Beyin dokusunun erken kapanan süturlar içinde sıkışması mental kapasiteyi düşürürken, sekonder olarak körlük tablosunu da doğurabilmektedir.

---

### ÇİFT 63 (Benzerlik: 0.70)

**Soru 1 (ID: 24716381-c334-4092-aa26-3fdda71ed536)**
Soru Kökü: On dört yaşındaki kız hasta, dişlerini kapatamama (iskeletsel açık kapanış) şikayetiyle başvuruyor. Yüz incelemesinde gözlerin dış uçlarının aşağı doğru sarktığı görülüyor. Alınan lateral sefalometrik radyografide mandibulanın yatay ramusunun alt sınırında belirgin bir içbükey (konkav) eğrilik izleniyor. Bu radyografik bulgu aşağıdaki sendromlardan hangisi için patognomoniktir?
Doğru Şık (A): Mandibulofasiyal Dizostoz
Açıklama: Mandibulanın yatay ramusunun alt sınırında izlenen patognomonik içbükey (konkav) eğrilik ve sekonder gonial açı büyümesi, Mandibulofasiyal dizostoz (Treacher Collins sendromu) için kesin radyografik işarettir. Göz kapaklarındaki aşağı sarkma, kondil hipoplazisine sekonder açık kapanış ve "kuş yüzü" görünümü bu spesifik birinci/ikinci ark anomalisini doğrular.

**Soru 2 (ID: 9e5b984f-6908-48c1-b65b-e506d14a6e16)**
Soru Kökü: Yirmi bir yaşındaki sendromik bir erkek hasta, dişeti çekilmesi ve yaygın periodontal kemik kaybı ile başvuruyor. Radyografisinde ön-arka yönde kısa kafa kaidesi ve frontal/sfenoid sinüslerin gelişmediği saptanıyor. Alt çenesi protruziv konumda olan ve zeka geriliği öyküsü olan bu hastanın üst lateral dişlerinin form analizi yapıldığında en olası beklenen anomalili yapı hangisidir?
Doğru Şık (D): Konik diş formu
Açıklama: Sefalometrik ön-arka kraniyal kısalık, protruziv mandibula, pnömatizasyon zayıflığı (sinüs yokluğu), yüksek periodontal yıkım ve zeka geriliği Down sendromunu (Trizomi 21) tartışmasız olarak tarif etmektedir. Down sendromunda üst lateral kesici dişlerin yapısal olarak 'konik' veya kama şeklinde gelişmesi karakteristik bir dentofasiyal malformasyon bulgusudur.

---

### ÇİFT 64 (Benzerlik: 0.70)

**Soru 1 (ID: 9ee9dd5d-1220-43c5-ade0-d5350b4f8e7f)**
Soru Kökü: Ortodonti kliniğine başvuran 9 yaşındaki kız çocuğunda ciddi iskeletsel açık kapanış (open-bite) saptanmıştır. Yüz profili incelendiğinde çene ucunun aşırı geride (retrognati) ve küçük (mikrognati) olduğu, 'kuş yüzü' görünümünün tabuloya eşlik ettiği görülmüştür. Ağız yapısının normalden geniş (makrostomi) olduğu bu hastada en olası teşhis nedir?
Doğru Şık (A): Treacher Collins Sendromu
Açıklama: Şiddetli retrognati, mikrognati, iskeletsel açık kapanış, makrostomi (geniş ağız) ve tipik 'kuş yüzü' profili Treacher Collins sendromunun (Mandibulofasiyal dizostoz) klasik çene ve yüz bulgularıdır. Down sendromunda ve Akondroplazide tipik olarak Sınıf III (mandibular protrüzyon eğilimi) görülür.

**Soru 2 (ID: c3929dad-26c2-4cf6-811d-4bc0353e8a4d)**
Soru Kökü: Fasiyal asimetri ve kulak kepçesinde atrezi ile başvuran hastanın ortodontik sefalometrik tetkikinde; mandibula alt sınırında belirgin eğilme ve gonial açıda aşırı büyüme tespit edilmiştir. Ancak tek taraflı kondil eksikliği **izlenmemektedir**. Hastanın göz yapısında aşağı sarkma mevcutsa bu klinik tablo öncelikle hangi kraniofasiyal anomaliyi düşündürür?
Doğru Şık (B): Treacher Collins Sendromu
Açıklama: Kulak deformitesi, göz dış uçlarında aşağı sarkma, mandibula alt sınırının belirgin eğilmesi ve gonial açıda büyüme Treacher Collins Sendromunun iskeletsel otonomisini tanımlar. Hemifasiyal mikrozomide tek taraflı ramus/kondil yokluğu beklenir, burada eksiklik olmadığı özellikle belirtilmiştir. Hastanın makrostomi potansiyeli taşıyan bu Sınıf II/Sınıf III geçişli (açık kapanış + kuş yüzü) tablosu cerrahi-ortodontik kombine vakadır.

---

### ÇİFT 65 (Benzerlik: 0.70)

**Soru 1 (ID: ac0f0b2e-d9ba-492c-9a60-3c81b2796dda)**
Soru Kökü: Embriyolojik gelişim sürecinde yüzün sadece bir tarafındaki dokuların (yumuşak doku ve kemik) yeterli gelişememesi sonucu ortaya çıkan, bilateral simetrinin şiddetle bozulduğu asimetrik kraniofasiyal anomali aşağıdakilerden hangisidir?
Doğru Şık (C): Hemifasiyal Mikrozomi
Açıklama: Hemifasiyal mikrozomi, patogenezinde yüzün bir yarısındaki dokuların (kemik, kas, sinir, cilt) tam kapasiteyle gelişememesi veya rudimenter kalması yatan asimetrik bir hastalıktır. Diğer sayılan hastalıkların tamamı (Down, Akondroplazi, Ektodermal Displazi) kraniofasiyal bölgeyi simetrik ve iki taraflı olarak etkiler.

**Soru 2 (ID: d5580598-a807-4a5e-b0cb-f5956d36d4e4)**
Soru Kökü: Yüzün orta hattında asimetri, ramus ve kondilin tek taraflı olarak bulunmaması ile birlikte etkilenen taraftaki kulak kepçesi anomalisinin tipik iki bulguyu oluşturduğu hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Hemifasiyal Mikrozomi
Açıklama: Tek taraflı ramus/kondil agenezisi ve beraberinde kulak kepçesi anomalisi, birinci ve ikinci faringeal arkın unilateral asimetrik gelişim geriliği olan hemifasiyal mikrozominin doğrudan en tipik iki iskeletsel/yumuşak doku bulgusudur. Goldenhar sendromu bu tablonun daha geniş sistemik versiyonu olsa da, tanımda "tipik iki bulgu" olarak spesifik çerçevelenen durum hemifasiyal mikrozomidir.

---

### ÇİFT 66 (Benzerlik: 0.70)

**Soru 1 (ID: 0e25408a-2ea0-47c3-a7e1-530d14fec1d6)**
Soru Kökü: Akondroplazi olgularında kafa tabanı kıkırdağındaki kalsifikasyon bozukluğuna ve orta yüz hipoplazisine bağlı olarak aşağıdaki ortodontik ve fasiyal bulgulardan hangisinin görülmesi **beklenmez**?
Doğru Şık (C): Genişlemiş ve direnci azalmış nazal pasaj
Açıklama: Akondroplazide maksillanın hem sagital hem de transversal yönde hipoplazik kalması (dar maksilla) nedeniyle nazal pasaj genişlemez, tam tersine oldukça dar ve kısıtlıdır. Orta yüzün yetersiz büyümesi mandibulayı göreceli olarak önde konumlandırarak (Sınıf III maloklüzyon ve anterior cross-bite) ve göreceli makroglossi tablosu oluşturarak sendromun intraoral zeminini hazırlar. Diş sürme gecikmeleri ve erken süt dişi kayıpları da vakalarda sıkça izlenen oklüzal düzensizlik kaynaklarıdır.

**Soru 2 (ID: 750e38fa-41f4-438a-9964-3f6a681efed4)**
Soru Kökü: Apert sendromunun fasiyal ve kraniyal özelliklerini değerlendiren bir hekim, aşağıdaki bulgulardan hangisinin bu sendroma ait **olmadığını** bilmelidir?
Doğru Şık (B): Mandibular prognati
Açıklama: Apert sendromunda orta yüz hipoplazisine bağlı olarak görece (rölatif) bir mandibula çıkıklığı yanılgısı oluşabilse de, gerçek bir kemiksel 'mandibular prognati' sendromun temel patolojilerinden biri değildir. Hipertelorizm (gözlerin birbirinden uzak olması), ekzoftalmi ve maksillanın hipoplazik gelişimi sendromun tipik yüz karakteristiğidir.

---

### ÇİFT 67 (Benzerlik: 0.70)

**Soru 1 (ID: 1333d02b-49c8-4d1d-93f4-787425bdcc01)**
Soru Kökü: Aşağıdakilerden hangisi Carpenter sendromunda izlenen fasiyal veya dental bulgular arasında **yer almaz**?
Doğru Şık (C): Makrodonti
Açıklama: Carpenter sendromunda gecikmiş diş gelişimi, eksik dişler (hipodonti) ve 'küçük kron boyutlu dişler' (mikrodonti) görülür, makrodonti (büyük diş yapısı) beklenmez. Ayrıca fasiyal muayenede düz burun köprüsü ve malforme kulaklar sendromun klasik eksternal belirtilerindendir.

**Soru 2 (ID: 574c2a0e-3504-403a-88ec-629bf9c71a00)**
Soru Kökü: Turner sendromlu hastaların kraniyofasiyal ve dental özellikleri incelendiğinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (C): Dental yaşın hastanın kronolojik yaşından daha geride kalması
Açıklama: Turner sendromunda spesifik ve ayırıcı bir bulgu olarak hastaların dental yaşı kronolojik yaşından geride değil, tam tersine daha ileridedir. Bu durum Down sendromu veya hipotiroidizm gibi gecikme yapan hastalıklardan ayrımını sağlar. Hastalarda ince mine, kısa kökler, mikrodonti ve kök rezorpsiyonu riski yüksek diğer geçerli bulgulardır.

---

### ÇİFT 68 (Benzerlik: 0.70)

**Soru 1 (ID: 8969ced2-6af8-49b4-b173-1919d0e2b673)**
Soru Kökü: Kraniofasiyal sendromların ayırıcı tanısında, hastanın ekstremiteleri ve boy uzunluğu kritik rol oynar. Sadece iskelet yapısına bakılarak 'gövdenin normal, ekstremitelerin kısa' olduğu orantısız cücelik tablosu aşağıdaki sendromlardan hangisinde tipiktir?
Doğru Şık (B): Akondroplazi
Açıklama: Akondroplazi orantısız bir cücelik türüdür; kıkırdak kalsifikasyonunun bozulması nedeniyle ekstremiteler (kollar ve bacaklar) kısa kalırken gövde boyutu normaldir. Prader-Willi ve Turner sendromlarında orantılı bir kısa boy (gelişim geriliği) görülür; Marfan sendromunda ise orantısız uzun boy mevcuttur. Gövde/ekstremite oranındaki bu zıtlık akondroplazinin kıkırdak spesifik patolojisini yansıtır.

**Soru 2 (ID: 9f71e252-6257-42c3-bdd9-e9444166cc7c)**
Soru Kökü: Aşağıdaki kraniofasiyal sendromların hangisinin etiyopatogenezinde epifizde ve kafa tabanı kıkırdağında kalsifikasyon bozulması yatmaktadır?
Doğru Şık (B): Akondroplazi
Açıklama: Akondroplazinin temel mekanizması epifiz ve kafa tabanı kıkırdağındaki endokondral kalsifikasyonun (kemikleşmenin) bozulmasıdır, bu da kısa kafa kaidesi ve çökük orta yüze neden olur. Apert, Crouzon, Carpenter ve Pfeiffer sendromları ise kraniyal süturların erken kapanması (kraniyosinostoz) kaynaklı patolojilerdir. Kemikleşme tipindeki bu mekanizma farkı, kıkırdak kaynaklı cücelik ile sütür kaynaklı deformiteleri birbirinden ayırır.

---

### ÇİFT 69 (Benzerlik: 0.70)

**Soru 1 (ID: 0b118759-e986-4a76-b092-d14b8cfeae8a)**
Soru Kökü: Treacher Collins sendromunda, baş-boyun bölgesindeki yumuşak doku anomalileri kapsamında aşağıdaki majör tükürük bezlerinden hangisinin konjenital olarak yokluğu veya belirgin hipoplazisi beklenir?
Doğru Şık (C): Parotis bezi
Açıklama: Birinci ve ikinci brankial ark sendromu spektrumunda yer alan Treacher Collins sendromunda, bu embriyolojik taslaklardan gelişen dokularda defekt izlenir. Fasiyal sinir ilişkili parotis bezinin konjenital yokluğu, bu hastaların spesifik glandüler/yumuşak doku eksiklikleri arasında yer alır.

**Soru 2 (ID: f4a23f5b-cb95-497f-91f9-218c5646613b)**
Soru Kökü: Treacher Collins sendromunda göz çevresi dokularında meydana gelen patognomonik gelişimsel defekt aşağıdakilerden hangisidir?
Doğru Şık (D): Alt göz kapaklarının dış üçte birinde yarık
Açıklama: Treacher Collins (Mandibulofasiyal dizostoz) sendromunda yüzün aşağı ve dışarı doğru çekilmiş (kuş yüzü) görünümüne, alt göz kapaklarının dış (lateral) üçte birinde görülen konjenital yarık (kolobom) eşlik eder. Epibulbar dermoid kistler ise Goldenhar sendromunda gözlenen oftalmik malformasyonlardır.

---

### ÇİFT 70 (Benzerlik: 0.70)

**Soru 1 (ID: 0b118759-e986-4a76-b092-d14b8cfeae8a)**
Soru Kökü: Treacher Collins sendromunda, baş-boyun bölgesindeki yumuşak doku anomalileri kapsamında aşağıdaki majör tükürük bezlerinden hangisinin konjenital olarak yokluğu veya belirgin hipoplazisi beklenir?
Doğru Şık (C): Parotis bezi
Açıklama: Birinci ve ikinci brankial ark sendromu spektrumunda yer alan Treacher Collins sendromunda, bu embriyolojik taslaklardan gelişen dokularda defekt izlenir. Fasiyal sinir ilişkili parotis bezinin konjenital yokluğu, bu hastaların spesifik glandüler/yumuşak doku eksiklikleri arasında yer alır.

**Soru 2 (ID: ffff72e6-0313-47d9-b324-99fdaae9f9d3)**
Soru Kökü: Treacher Collins sendromuna sahip bir hastanın kraniyofasiyal kemik anatomisi BT (Bilgisayarlı Tomografi) ile incelendiğinde, orta yüz bölgesinde aşağıdaki bulgulardan hangisi ile karşılaşılması **en olasıdır**?
Doğru Şık (E): Zigomatik kemiklerin oluşmaması veya ark yapmaması
Açıklama: Treacher Collins sendromunda zigomatik (elmacık) kemikler ya hiç oluşmamıştır ya da tam gelişmemiş olup temporal kemikle birleşerek oluşturdukları 'zigomatik ark' anatomik olarak yoktur veya defektiftir. Klavikula yokluğu Kleidokranial displazinin; wormian kemikleri yine aynı displazinin bulgusudur.

---

### ÇİFT 71 (Benzerlik: 0.70)

**Soru 1 (ID: 5a7b0efd-8b5e-40ef-acda-3793b67e0c01)**
Soru Kökü: Apert sendromunda karşılaşılan nörolojik ve gelişimsel bulgular ile ilgili aşağıda verilen ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Hastaların günlük aktivitelerinde belirgin hipoaktivite izlenir.
Açıklama: Apert sendromu olgularında gelişim geriliği ve mental retardasyonla birlikte klinikte 'hiperaktivite' görülmesi tipiktir, hipoaktivite izlenmez. Beyin dokusunun erken kapanan süturlar içinde sıkışması mental kapasiteyi düşürürken, sekonder olarak körlük tablosunu da doğurabilmektedir.

**Soru 2 (ID: 750e38fa-41f4-438a-9964-3f6a681efed4)**
Soru Kökü: Apert sendromunun fasiyal ve kraniyal özelliklerini değerlendiren bir hekim, aşağıdaki bulgulardan hangisinin bu sendroma ait **olmadığını** bilmelidir?
Doğru Şık (B): Mandibular prognati
Açıklama: Apert sendromunda orta yüz hipoplazisine bağlı olarak görece (rölatif) bir mandibula çıkıklığı yanılgısı oluşabilse de, gerçek bir kemiksel 'mandibular prognati' sendromun temel patolojilerinden biri değildir. Hipertelorizm (gözlerin birbirinden uzak olması), ekzoftalmi ve maksillanın hipoplazik gelişimi sendromun tipik yüz karakteristiğidir.

---

### ÇİFT 72 (Benzerlik: 0.70)

**Soru 1 (ID: 0dd9b336-4c2c-40ab-80f0-a40767921736)**
Soru Kökü: Down sendromu (Trizomi 21) olgularının kraniofasiyal özellikleri incelendiğinde aşağıdakilerden hangisi **doğru değildir**?
Doğru Şık (B): Kafa kaidesindeki süturların kapanmasında prematür hızlanma izlenir.
Açıklama: Down sendromunda kafa iskeletindeki süturların erken kapanması değil, tam tersine kapanmasında gecikme (geç kapanma) yaşanır. Kraniyosinostoz (sütur erken kapanması) Apert, Crouzon gibi sendromlara özgüdür. Down sendromunda pnömatizasyon zayıf olduğu için sfenoid/frontal sinüs yokluğu ve diş sürme gecikmeleri tablonun doğrusunu oluşturur.

**Soru 2 (ID: 2635abd8-1431-4f84-a51d-bef305673c20)**
Soru Kökü: Crouzon Sendromu'nu diğer kraniyofasiyal dizostozlardan klinik olarak ayırt etmek için tarif edilen '3 ana bozukluk' (triad) içerisinde aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (D): Mental retardasyon
Açıklama: Crouzon sendromunun klinik triadı kafatası deformitesi, yüz deformitesi ve ekzoftalmidir (gözlerin dışarı fırlaması). Zeka geriliği (mental retardasyon) bu triadda yer almaz; Apert veya Prader-Willi gibi diğer sendromların aksine Crouzon hastalarında zeka genellikle normaldir. Bu triad, hekimin tanısal kurguyu sindaktili / zeka geriliği sarmalından çıkarması için temel bir kılavuzdur.

---

### ÇİFT 73 (Benzerlik: 0.70)

**Soru 1 (ID: e51d4721-263f-4285-a0f9-a9e482c96ce5)**
Soru Kökü: Kleidokraniyal displazi tanısı doğrulanan bir hastanın stomatognatik ve kraniyal incelemelerinde aşağıdaki klinik/radyografik bulgulardan hangisinin saptanması **beklenmez**?
Doğru Şık (B): Maksiller gelişimin alt çeneye kıyasla hiperplastik konumda olması
Açıklama: Kleidokraniyal displazide üst yüz, paranazal sinüsler ve üst çene gelişimi ileri derecede yetersizdir. Buna bağlı olarak maksilla hiperplastik değil, tam tersine hipoplastiktir. Süt dişlerinin dökülmemesi, daimi dişlerin sürmemesi (hiperdonti ve mekanik obstrüksiyon kaynaklı), kemik yoğunluğundaki artış ve Wormian kemikleri iskeletsel kilit bulgulardır.

**Soru 2 (ID: ffff72e6-0313-47d9-b324-99fdaae9f9d3)**
Soru Kökü: Treacher Collins sendromuna sahip bir hastanın kraniyofasiyal kemik anatomisi BT (Bilgisayarlı Tomografi) ile incelendiğinde, orta yüz bölgesinde aşağıdaki bulgulardan hangisi ile karşılaşılması **en olasıdır**?
Doğru Şık (E): Zigomatik kemiklerin oluşmaması veya ark yapmaması
Açıklama: Treacher Collins sendromunda zigomatik (elmacık) kemikler ya hiç oluşmamıştır ya da tam gelişmemiş olup temporal kemikle birleşerek oluşturdukları 'zigomatik ark' anatomik olarak yoktur veya defektiftir. Klavikula yokluğu Kleidokranial displazinin; wormian kemikleri yine aynı displazinin bulgusudur.

---

### ÇİFT 74 (Benzerlik: 0.70)

**Soru 1 (ID: 99da3443-f50c-43e7-b587-4c3a66820f2b)**
Soru Kökü: Tek taraflı dudak-damak yarığı sekeli ile ortodonti kliniğine yönlendirilen 8 yaşındaki erkek hastanın panoramik radyografisi incelenmektedir. Fasiyal defektin bulunduğu kadranda en yüksek insidansla karşılaşılması beklenen lokal dental anomali aşağıdakilerden hangisidir?
Doğru Şık (E): Yarık bölgesinde diş agenezisi veya süpernumerer diş varlığı
Açıklama: Dudak-damak yarığı hastalarında embriyolojik defekt hattında epiteliyal bariyerin bozulmasına bağlı olarak diş jermi gelişimi sekteye uğrar; bu nedenle yarık bölgesinde en çok lateral dişlerin agenezisi veya tam tersi olarak parçalanmış jermden köken alan süpernumerer dişler görülür. Diğer seçeneklerdeki taurodontizm veya kanin gömüklüğü sistemik yarık patogenezisinin primer lokal yansıması değildir. Bu hastalarda ayrıca üst çenenin sagital ve transversal daralmasına bağlı Sınıf III ve çapraz kapanış eğilimi sıktır.

**Soru 2 (ID: d36dd9d1-5465-4e55-94f8-a53c91270035)**
Soru Kökü: Beş yaşındaki dudak-damak yarığı bulunan hastanın ortodontik değerlendirmesinde maksillada ciddi hipoplazi saptanıyor. Maksillanın her üç boyuttaki gelişim yetersizliği dikkate alındığında, posterior (transversal) ve anterior (sagital) bölgelerde sırasıyla hangi tip oklüzal düzensizliklerin gelişmesi en olasıdır?
Doğru Şık (D): Yan çapraz kapanış (Crossbite) - Anterior çapraz kapanış
Açıklama: Dudak-damak yarıklarında cerrahi gerilim ve skar dokusu etkisiyle maksillanın transversal daralması, yarığın olduğu tarafta spesifik yan çapraz kapanışa (posterior crossbite) neden olur. Maksillanın sagital yön (ön-arka) geriliği ise iskeletsel Sınıf III ve buna sekonder anterior çapraz kapanış tablosunu yaratır.

---

### ÇİFT 75 (Benzerlik: 0.70)

**Soru 1 (ID: 73fac152-8f61-4ca8-b6d7-a541928bfe3b)**
Soru Kökü: Crouzon tarafından tanımlanan ve sendromun klasik üçlüsünü oluşturan temel bozukluklar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (A): Kafatası deformitesi, Yüz deformitesi, Ekzoftalmi
Açıklama: Crouzon sendromunun patognomonik triadını; süturların erken kapanmasına bağlı kafatası deformitesi, maksiller hipoplazinin eşlik ettiği yüz deformitesi ve sığ orbitalara bağlı gelişen ekzoftalmi oluşturur. Apert sendromunun belirleyici bulgusu olan el-ayak sindaktilisi güçlü bir çeldirici olsa da Crouzon triadında kesinlikle bulunmaz. Bu üçlü klinik bulgu, sendromun teşhisinde ve çok aşamalı rekonstrüktif tedavi planlamasında altın standarttır.

**Soru 2 (ID: a78873e2-a400-4ab3-8fe8-cb836181f6dc)**
Soru Kökü: Crouzon sendromunun patogenezinde yatan temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Kraniyal süturlarda prematür sinostoz
Açıklama: Crouzon sendromu en sık karşılaşılan kraniofasiyal sendromlardan olup, temel mekanizması kraniyal süturların prematür (zamanından erken) sinostozudur. Kafa tabanı kıkırdağında kalsifikasyon bozukluğu akondroplazinin mekanizmasıdır. Zigomatik ark yokluğu ise Treacher Collins sendromunda izlenen bir bulgudur.

---

### ÇİFT 76 (Benzerlik: 0.69)

**Soru 1 (ID: 9e5b984f-6908-48c1-b65b-e506d14a6e16)**
Soru Kökü: Yirmi bir yaşındaki sendromik bir erkek hasta, dişeti çekilmesi ve yaygın periodontal kemik kaybı ile başvuruyor. Radyografisinde ön-arka yönde kısa kafa kaidesi ve frontal/sfenoid sinüslerin gelişmediği saptanıyor. Alt çenesi protruziv konumda olan ve zeka geriliği öyküsü olan bu hastanın üst lateral dişlerinin form analizi yapıldığında en olası beklenen anomalili yapı hangisidir?
Doğru Şık (D): Konik diş formu
Açıklama: Sefalometrik ön-arka kraniyal kısalık, protruziv mandibula, pnömatizasyon zayıflığı (sinüs yokluğu), yüksek periodontal yıkım ve zeka geriliği Down sendromunu (Trizomi 21) tartışmasız olarak tarif etmektedir. Down sendromunda üst lateral kesici dişlerin yapısal olarak 'konik' veya kama şeklinde gelişmesi karakteristik bir dentofasiyal malformasyon bulgusudur.

**Soru 2 (ID: 9ee9dd5d-1220-43c5-ade0-d5350b4f8e7f)**
Soru Kökü: Ortodonti kliniğine başvuran 9 yaşındaki kız çocuğunda ciddi iskeletsel açık kapanış (open-bite) saptanmıştır. Yüz profili incelendiğinde çene ucunun aşırı geride (retrognati) ve küçük (mikrognati) olduğu, 'kuş yüzü' görünümünün tabuloya eşlik ettiği görülmüştür. Ağız yapısının normalden geniş (makrostomi) olduğu bu hastada en olası teşhis nedir?
Doğru Şık (A): Treacher Collins Sendromu
Açıklama: Şiddetli retrognati, mikrognati, iskeletsel açık kapanış, makrostomi (geniş ağız) ve tipik 'kuş yüzü' profili Treacher Collins sendromunun (Mandibulofasiyal dizostoz) klasik çene ve yüz bulgularıdır. Down sendromunda ve Akondroplazide tipik olarak Sınıf III (mandibular protrüzyon eğilimi) görülür.

---

### ÇİFT 77 (Benzerlik: 0.69)

**Soru 1 (ID: 10207307-ee3b-46db-b854-862f9dd1f605)**
Soru Kökü: Kraniofasiyal anomalilerin diş formları üzerindeki etkileri incelendiğinde; hem genetik sendromlardan Down sendromu vakalarında, hem de ektodermal gelişim bozukluğu olan Ektodermal displazide, üst anterior maksiller segmentte ortak izlenebilen morfolojik varyasyon aşağıdakilerden hangisidir?
Doğru Şık (C): Konik diş formu
Açıklama: Ektodermal displazide anterior diş germlerinin anomalilerine sekonder gelişen en belirgin yapısal marker dişlerin sivri/kama benzeri konik formda sürmesidir. Benzer mekanizma farklı genetik altyapıyla Down sendromunda da (Trizomi 21) üst lateral kesici dişlerde mikrodonti ile birlikte konik morfoloji olarak her iki grupta ortak fenotipik varyasyon yaratır.

**Soru 2 (ID: 9e5b984f-6908-48c1-b65b-e506d14a6e16)**
Soru Kökü: Yirmi bir yaşındaki sendromik bir erkek hasta, dişeti çekilmesi ve yaygın periodontal kemik kaybı ile başvuruyor. Radyografisinde ön-arka yönde kısa kafa kaidesi ve frontal/sfenoid sinüslerin gelişmediği saptanıyor. Alt çenesi protruziv konumda olan ve zeka geriliği öyküsü olan bu hastanın üst lateral dişlerinin form analizi yapıldığında en olası beklenen anomalili yapı hangisidir?
Doğru Şık (D): Konik diş formu
Açıklama: Sefalometrik ön-arka kraniyal kısalık, protruziv mandibula, pnömatizasyon zayıflığı (sinüs yokluğu), yüksek periodontal yıkım ve zeka geriliği Down sendromunu (Trizomi 21) tartışmasız olarak tarif etmektedir. Down sendromunda üst lateral kesici dişlerin yapısal olarak 'konik' veya kama şeklinde gelişmesi karakteristik bir dentofasiyal malformasyon bulgusudur.

---

### ÇİFT 78 (Benzerlik: 0.69)

**Soru 1 (ID: 1333d02b-49c8-4d1d-93f4-787425bdcc01)**
Soru Kökü: Aşağıdakilerden hangisi Carpenter sendromunda izlenen fasiyal veya dental bulgular arasında **yer almaz**?
Doğru Şık (C): Makrodonti
Açıklama: Carpenter sendromunda gecikmiş diş gelişimi, eksik dişler (hipodonti) ve 'küçük kron boyutlu dişler' (mikrodonti) görülür, makrodonti (büyük diş yapısı) beklenmez. Ayrıca fasiyal muayenede düz burun köprüsü ve malforme kulaklar sendromun klasik eksternal belirtilerindendir.

**Soru 2 (ID: 1640789a-d325-49df-9563-9ebd9414433c)**
Soru Kökü: Apert sendromlu bireylerde görülen intraoral ve dental anormallikler dikkate alındığında, aşağıdakilerden hangisi bu hastalarda beklenen oral bulgulardan biri **değildir**?
Doğru Şık (D): Ağız mukozasında şarap rengi hemanjiomlar
Açıklama: Apert sendromunun ağız içi bulguları arasında derin damak, maksiller hipoplazi ve buna bağlı şiddetli dişsel çapraşıklıklar yer alır. Yüzde veya ağız mukozasında şarap rengi (port-wine) lekelenmeler ve hemanjiomlar Apert sendromunda değil, Sturge-Weber sendromunda görülen vasküler anomalilerdir.

---

### ÇİFT 79 (Benzerlik: 0.69)

**Soru 1 (ID: 0dd9b336-4c2c-40ab-80f0-a40767921736)**
Soru Kökü: Down sendromu (Trizomi 21) olgularının kraniofasiyal özellikleri incelendiğinde aşağıdakilerden hangisi **doğru değildir**?
Doğru Şık (B): Kafa kaidesindeki süturların kapanmasında prematür hızlanma izlenir.
Açıklama: Down sendromunda kafa iskeletindeki süturların erken kapanması değil, tam tersine kapanmasında gecikme (geç kapanma) yaşanır. Kraniyosinostoz (sütur erken kapanması) Apert, Crouzon gibi sendromlara özgüdür. Down sendromunda pnömatizasyon zayıf olduğu için sfenoid/frontal sinüs yokluğu ve diş sürme gecikmeleri tablonun doğrusunu oluşturur.

**Soru 2 (ID: 750e38fa-41f4-438a-9964-3f6a681efed4)**
Soru Kökü: Apert sendromunun fasiyal ve kraniyal özelliklerini değerlendiren bir hekim, aşağıdaki bulgulardan hangisinin bu sendroma ait **olmadığını** bilmelidir?
Doğru Şık (B): Mandibular prognati
Açıklama: Apert sendromunda orta yüz hipoplazisine bağlı olarak görece (rölatif) bir mandibula çıkıklığı yanılgısı oluşabilse de, gerçek bir kemiksel 'mandibular prognati' sendromun temel patolojilerinden biri değildir. Hipertelorizm (gözlerin birbirinden uzak olması), ekzoftalmi ve maksillanın hipoplazik gelişimi sendromun tipik yüz karakteristiğidir.

---

### ÇİFT 80 (Benzerlik: 0.69)

**Soru 1 (ID: 1b43a5c6-c20e-453f-898e-b7816567bb00)**
Soru Kökü: Down sendromlu (Trizomi 21) bireylerin kraniofasiyal iskelet özellikleri radyografik olarak değerlendirildiğinde, kafatası boyutlarındaki tipik değişim aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (C): Ön-arka yön uzunluğu kısa, transversal yön boyutu geniş
Açıklama: Down sendromlu hastalarda kafatası iskeletinin genel şekli brakiyosefalik morfolojiye yatkın olup; ön-arka yön uzunluğu (sagital çap) kısa, buna karşılık transversal yön boyutu belirgin şekilde geniştir. Bu yapısal değişim, sendromda sıklıkla izlenen orta yüz gelişim eksikliği ve frontal-sfenoid sinüslerin aplazisi ile yakından entegredir. Ayrıca bu hastalarda ağzın küçük olmasına sekonder olarak gelişen pseudo-makroglossi tablosu klinikte sıkça gözlenir.

**Soru 2 (ID: 9ba43fd9-c252-44ad-a164-1144d232c509)**
Soru Kökü: Carpenter sendromuna sahip bir hastanın kraniyal morfolojisi incelendiğinde, aşağıdaki kafatası deformitelerinden hangisinin görülmesi en tipiktir?
Doğru Şık (A): Kafatası asimetrileri ve brakiosefali
Açıklama: Carpenter sendromunda kraniosinostoza bağlı olarak kafatasında asimetriler ve sıklıkla brakiosefali (kısa kafa) tablosu izlenir. Wormian kemikçikleri Kleidokranial displazide görülürken, kafa kaidesi kısalığına eşlik eden bombeli alın ve cücelik Akondroplazinin karakteristik iskelet bulgusudur.

---

### ÇİFT 81 (Benzerlik: 0.69)

**Soru 1 (ID: 24716381-c334-4092-aa26-3fdda71ed536)**
Soru Kökü: On dört yaşındaki kız hasta, dişlerini kapatamama (iskeletsel açık kapanış) şikayetiyle başvuruyor. Yüz incelemesinde gözlerin dış uçlarının aşağı doğru sarktığı görülüyor. Alınan lateral sefalometrik radyografide mandibulanın yatay ramusunun alt sınırında belirgin bir içbükey (konkav) eğrilik izleniyor. Bu radyografik bulgu aşağıdaki sendromlardan hangisi için patognomoniktir?
Doğru Şık (A): Mandibulofasiyal Dizostoz
Açıklama: Mandibulanın yatay ramusunun alt sınırında izlenen patognomonik içbükey (konkav) eğrilik ve sekonder gonial açı büyümesi, Mandibulofasiyal dizostoz (Treacher Collins sendromu) için kesin radyografik işarettir. Göz kapaklarındaki aşağı sarkma, kondil hipoplazisine sekonder açık kapanış ve "kuş yüzü" görünümü bu spesifik birinci/ikinci ark anomalisini doğrular.

**Soru 2 (ID: b3d05769-df69-459d-bbab-8f204500b09d)**
Soru Kökü: Panoramik radyografisinde çok sayıda süpernümerer diş ve diş sürme gecikmesi saptanan 14 yaşındaki hastanın sefalometrik incelemesinde kafatasının sagital yönde daralmış, transversal yönde ise genişlemiş olduğu görülüyor. Omuzlarını orta hatta birleştirebildiği gözlemlenen bu hastanın kranial sütur bölgelerinde izlenmesi beklenen spesifik radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Wormian kemikçikleri
Açıklama: Klavikula yokluğu/hipoplazisi nedeniyle omuzları birleştirebilme ve hiperdonti bulguları Kleidokraniyal Displazi (Dizostoz) için tipiktir; bu hastalarda sütür bölgelerinde çok sayıda küçük kemik adacığı olan 'Wormian Kemikçikleri' izlenir. Sütürlerin prematür kapanması kraniyosinostoz sendromlarında (Crouzon, Apert) görülür. Sagital darlık ve transversal genişleme bu sendromun karakteristik kranial boyut deformasyonudur.

---

### ÇİFT 82 (Benzerlik: 0.69)

**Soru 1 (ID: 9f71e252-6257-42c3-bdd9-e9444166cc7c)**
Soru Kökü: Aşağıdaki kraniofasiyal sendromların hangisinin etiyopatogenezinde epifizde ve kafa tabanı kıkırdağında kalsifikasyon bozulması yatmaktadır?
Doğru Şık (B): Akondroplazi
Açıklama: Akondroplazinin temel mekanizması epifiz ve kafa tabanı kıkırdağındaki endokondral kalsifikasyonun (kemikleşmenin) bozulmasıdır, bu da kısa kafa kaidesi ve çökük orta yüze neden olur. Apert, Crouzon, Carpenter ve Pfeiffer sendromları ise kraniyal süturların erken kapanması (kraniyosinostoz) kaynaklı patolojilerdir. Kemikleşme tipindeki bu mekanizma farkı, kıkırdak kaynaklı cücelik ile sütür kaynaklı deformiteleri birbirinden ayırır.

**Soru 2 (ID: d43a4723-f4cc-4511-b2fe-f6c1369529bb)**
Soru Kökü: Pediatri kliniğinden konsülte edilen 6 yaşındaki erkek hastada; gövde uzunluğunun normal olduğu ancak ekstremitelerin belirgin şekilde kısa kaldığı, kafa kaidesinin kısaldığı, orta yüzün çökük ve alın bölgesinin bombeli olduğu rapor edilmiştir. Bu iskeletsel bulgular ışığında hastanın en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Akondroplazi
Açıklama: Epifizde ve kafa tabanı kıkırdağında kalsifikasyon bozulması ile karakterize Akondroplazide; gövde uzunluğunun normal kalmasına rağmen kolların ve bacakların kısa kaldığı tipik cücelik tablosu izlenir. Kafa tabanındaki yetersiz büyüme orta yüz çöküklüğü ve bombeli alın (frontal bossing) gibi telafi edici kraniyal morfolojiler yaratır ki bu da, mental retardasyon veya diğer kromozomal cücelik tiplerinden (örn. Prader-Willi) net şekilde ayırıcıdır. Hastaların dar maksillası sıklıkla açık kapanışla sonuçlanır.

---

### ÇİFT 83 (Benzerlik: 0.69)

**Soru 1 (ID: 4ef768c3-8f35-4339-94b8-ed468ad42d94)**
Soru Kökü: Pediatrik ortodonti kliniğine başvuran 6 yaşındaki erkek çocuğun muayenesinde; kraniyal süturların erken kapanmasına bağlı ciddi kafatası şekil bozukluğu, mental retardasyon ve görme kaybı (körlük) saptanmıştır. Ekstremite muayenesinde ellerde ve ayaklarda parmakların yapışık olduğu (sindaktili) gözlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Apert Sendromu
Açıklama: Kafatasında ciddi şekil bozukluğu, mental retardasyon, körlük ve özellikle el-ayak deformiteleri (sindaktili) Apert sendromunun klasik fiziksel bulgularıdır. Crouzon sendromunda genellikle sindaktili ve mental retardasyon beklenmez; Pfeiffer sendromunda ise geniş başparmak izlenir ancak körlük/mental retardasyon tablosu Apert kadar ağır karakterize edilmemiştir.

**Soru 2 (ID: d43a4723-f4cc-4511-b2fe-f6c1369529bb)**
Soru Kökü: Pediatri kliniğinden konsülte edilen 6 yaşındaki erkek hastada; gövde uzunluğunun normal olduğu ancak ekstremitelerin belirgin şekilde kısa kaldığı, kafa kaidesinin kısaldığı, orta yüzün çökük ve alın bölgesinin bombeli olduğu rapor edilmiştir. Bu iskeletsel bulgular ışığında hastanın en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Akondroplazi
Açıklama: Epifizde ve kafa tabanı kıkırdağında kalsifikasyon bozulması ile karakterize Akondroplazide; gövde uzunluğunun normal kalmasına rağmen kolların ve bacakların kısa kaldığı tipik cücelik tablosu izlenir. Kafa tabanındaki yetersiz büyüme orta yüz çöküklüğü ve bombeli alın (frontal bossing) gibi telafi edici kraniyal morfolojiler yaratır ki bu da, mental retardasyon veya diğer kromozomal cücelik tiplerinden (örn. Prader-Willi) net şekilde ayırıcıdır. Hastaların dar maksillası sıklıkla açık kapanışla sonuçlanır.

---

### ÇİFT 84 (Benzerlik: 0.69)

**Soru 1 (ID: 9e5b984f-6908-48c1-b65b-e506d14a6e16)**
Soru Kökü: Yirmi bir yaşındaki sendromik bir erkek hasta, dişeti çekilmesi ve yaygın periodontal kemik kaybı ile başvuruyor. Radyografisinde ön-arka yönde kısa kafa kaidesi ve frontal/sfenoid sinüslerin gelişmediği saptanıyor. Alt çenesi protruziv konumda olan ve zeka geriliği öyküsü olan bu hastanın üst lateral dişlerinin form analizi yapıldığında en olası beklenen anomalili yapı hangisidir?
Doğru Şık (D): Konik diş formu
Açıklama: Sefalometrik ön-arka kraniyal kısalık, protruziv mandibula, pnömatizasyon zayıflığı (sinüs yokluğu), yüksek periodontal yıkım ve zeka geriliği Down sendromunu (Trizomi 21) tartışmasız olarak tarif etmektedir. Down sendromunda üst lateral kesici dişlerin yapısal olarak 'konik' veya kama şeklinde gelişmesi karakteristik bir dentofasiyal malformasyon bulgusudur.

**Soru 2 (ID: b3d05769-df69-459d-bbab-8f204500b09d)**
Soru Kökü: Panoramik radyografisinde çok sayıda süpernümerer diş ve diş sürme gecikmesi saptanan 14 yaşındaki hastanın sefalometrik incelemesinde kafatasının sagital yönde daralmış, transversal yönde ise genişlemiş olduğu görülüyor. Omuzlarını orta hatta birleştirebildiği gözlemlenen bu hastanın kranial sütur bölgelerinde izlenmesi beklenen spesifik radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Wormian kemikçikleri
Açıklama: Klavikula yokluğu/hipoplazisi nedeniyle omuzları birleştirebilme ve hiperdonti bulguları Kleidokraniyal Displazi (Dizostoz) için tipiktir; bu hastalarda sütür bölgelerinde çok sayıda küçük kemik adacığı olan 'Wormian Kemikçikleri' izlenir. Sütürlerin prematür kapanması kraniyosinostoz sendromlarında (Crouzon, Apert) görülür. Sagital darlık ve transversal genişleme bu sendromun karakteristik kranial boyut deformasyonudur.

---

### ÇİFT 85 (Benzerlik: 0.69)

**Soru 1 (ID: 16fc9f65-2329-450b-bfe9-394cba89bae7)**
Soru Kökü: Çocuk diş hekimliğine başvuran 9 yaşındaki dismorfik fasiyal özelliklere sahip hastanın intraoral muayenesinde, aşırı düzeyde artmış tükürük viskozitesi ve ağız genelinde şiddetli yaygın çürük lezyonları saptanmıştır. Anamnezinde bebeklik döneminde infantil hipotoni ile kısa boy ve küçük ekstremiteleri olduğu öğrenilen hastanın tanısı aşağıdakilerden hangisidir?
Doğru Şık (B): Prader-Willi Sendromu
Açıklama: İnfantil hipotoni öyküsü, küçük el/ayaklara eşlik eden artmış tükürük viskozitesi ve hızla yayılan rampant diş çürükleri Prader-Willi sendromunun multidisipliner kliniğinde kilit rol oynar. Ektodermal displazide de dişsel anomaliler olsa da, oradaki temel bulgu hipodonti, konik dişler ve ter bezi aplazisine bağlı hipohidrozdur (tükürük viskozitesinden ziyade). Bu sendromun hastalarında diş çürüklerine minede görülen yaygın hipoplaziler de güçlü bir zemin hazırlamaktadır.

**Soru 2 (ID: ca2a8fb4-125a-4139-8fd7-64de0cce10bd)**
Soru Kökü: On iki yaşındaki kız çocuğunun sefalometrik analizinde kısa kafa kaidesi ve retrognatik çeneler saptanıyor. Radyolojik incelemede diş köklerinin normalden kısa olduğu, klinik muayenede diş minesinin ince olduğu izleniyor. Hastanın dental gelişim yaşının kronolojik yaşından daha ileride tespit edilmesi aşağıdaki sendromlardan hangisine işaret eder?
Doğru Şık (D): Turner Sendromu
Açıklama: Turner sendromunda kız çocuklarında (45,X) mikrodonti, ince mine, kısa diş kökleri ve dental yaşın kronolojik yaşa göre paradoksal biçimde daha ileride olması patognomoniğe yakın çok değerli bulgulardır. Down sendromunda veya Akondroplazi'de dental gelişim hızlanmaz, tam tersine sürme süreçlerinde belirgin gerilik ve gecikmeler saptanır.

---

### ÇİFT 86 (Benzerlik: 0.69)

**Soru 1 (ID: 10207307-ee3b-46db-b854-862f9dd1f605)**
Soru Kökü: Kraniofasiyal anomalilerin diş formları üzerindeki etkileri incelendiğinde; hem genetik sendromlardan Down sendromu vakalarında, hem de ektodermal gelişim bozukluğu olan Ektodermal displazide, üst anterior maksiller segmentte ortak izlenebilen morfolojik varyasyon aşağıdakilerden hangisidir?
Doğru Şık (C): Konik diş formu
Açıklama: Ektodermal displazide anterior diş germlerinin anomalilerine sekonder gelişen en belirgin yapısal marker dişlerin sivri/kama benzeri konik formda sürmesidir. Benzer mekanizma farklı genetik altyapıyla Down sendromunda da (Trizomi 21) üst lateral kesici dişlerde mikrodonti ile birlikte konik morfoloji olarak her iki grupta ortak fenotipik varyasyon yaratır.

**Soru 2 (ID: 37ae6c8a-4135-4c64-80c1-895c58b14e85)**
Soru Kökü: Genetik temelli kraniofasiyal anomaliler ve bunlara eşlik eden diş sayısı varyasyonları eşleştirildiğinde, aşağıdaki sendromlardan hangisinde klinik muayenede hiperdonti (süpernümerer diş varlığı) saptanma ihtimali diğerlerinden daha yüksektir?
Doğru Şık (C): Kleidokraniyal Displazi
Açıklama: Kleidokraniyal displazi kemik yoğunluk defekti ve rezorpsiyon hatası nedeniyle, çenelerde süremeyen çok sayıda gömülü diş ve süpernümerer diş kümeleri (hiperdonti) ile karakterizedir. Buna karşılık Ektodermal displazi ve Ellis-Van Creveld sendromu primer olarak ter bezi/kıkırdak anomalisinin yanı sıra diş eksiklikleri (hipodonti) ile prezente olur.

---

### ÇİFT 87 (Benzerlik: 0.69)

**Soru 1 (ID: 2f6ee290-f528-4042-999f-2545df8c20d0)**
Soru Kökü: Ortodontik muayene sırasında şiddetli Sınıf III maloklüzyon, Sınıf III iskeletsel yapı, anterior crossbite ve maksiller hipoplaziye bağlı konkav profil tespit edilen 9 yaşındaki erkek hastanın anamnezinde konjenital sendrom öyküsü bulunmamaktadır. Ancak hastanın doğuştan gelen izole bir anomalisi mevcuttur. Bu hastanın Sınıf III gelişim paternine neden olan **en olası** birincil etyolojik faktör aşağıdakilerden hangisidir?
Doğru Şık (A): Dudak-damak yarığı onarımı sekeli
Açıklama: Dudak-damak yarığına sahip hastalarda, üst çenenin sagital ve transversal yönde yetersiz gelişimi sonucu sekonder olarak mikrognati superior, Angle Sınıf III ilişki ve anterior crossbite tablosu oluşur. Bilateral kondiler hipoplazi Sınıf II (retrognati) profiline yol açar, Sınıf III'e değil. Cerrahi onarımların yarattığı skar dokusu maksillanın ileri büyümesini kısıtlayarak bu iskeletsel anomalinin temel sebebini oluşturur.

**Soru 2 (ID: 9e5b984f-6908-48c1-b65b-e506d14a6e16)**
Soru Kökü: Yirmi bir yaşındaki sendromik bir erkek hasta, dişeti çekilmesi ve yaygın periodontal kemik kaybı ile başvuruyor. Radyografisinde ön-arka yönde kısa kafa kaidesi ve frontal/sfenoid sinüslerin gelişmediği saptanıyor. Alt çenesi protruziv konumda olan ve zeka geriliği öyküsü olan bu hastanın üst lateral dişlerinin form analizi yapıldığında en olası beklenen anomalili yapı hangisidir?
Doğru Şık (D): Konik diş formu
Açıklama: Sefalometrik ön-arka kraniyal kısalık, protruziv mandibula, pnömatizasyon zayıflığı (sinüs yokluğu), yüksek periodontal yıkım ve zeka geriliği Down sendromunu (Trizomi 21) tartışmasız olarak tarif etmektedir. Down sendromunda üst lateral kesici dişlerin yapısal olarak 'konik' veya kama şeklinde gelişmesi karakteristik bir dentofasiyal malformasyon bulgusudur.

---

