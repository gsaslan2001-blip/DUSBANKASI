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

### ÇİFT 1 (Benzerlik: 0.84)

**Soru 1 (ID: 3718e432-d036-4e5e-ba32-a503e4541675)**
Soru Kökü: Yedi yaşındaki konjenital siyanotik kalp hastası bir çocuk için süt dişi çekimi planlanmıştır. Çocuğun bilinen herhangi bir ilaç alerjisi yoktur ve oral yoldan ilaç alabilmektedir. AHA 2008 kılavuzuna göre bu hastaya uygulanması gereken standart profilaksi rejimi aşağıdakilerden hangisidir?
Doğru Şık (A): Oral Amoksisilin 50 mg/kg
Açıklama: Siyanotik konjenital kalp hastası çocuklar, yüksek enfektif endokardit morbidite riski nedeniyle mutlaka profilaksi şemsiyesi altına alınmalıdır. Penisilin alerjisi olmayan ve yutma fonksiyonu normal olan çocuklarda AHA'nın birinci basamak ilacı, kilogram başına 50 mg dozunda uygulanan oral Amoksisilindir.

**Soru 2 (ID: 5de2aaa0-a8a9-451b-80d5-a87bf8459754)**
Soru Kökü: Dokuz yaşındaki kız hastaya diş çekimi planlanmaktadır. Anamnezinde onarılmış ancak yerleştirilen materyallerin komşu alanlarında residüel defekt kalmış konjenital kalp hastalığı ve penisilin alerjisi olduğu öğrenilmektedir. Hastanın ilaç yutmasında bir problemi yoktur. AHA 2008 kılavuzuna göre uygulanması gereken profilaktik ilaç ve dozu aşağıdakilerden hangisidir?
Doğru Şık (B): Klindamisin 20 mg/kg
Açıklama: Ameliyat edilmiş ancak onarılan bölgenin komşuluğunda rezidüel defekt barındıran konjenital kalp anomaliesi olan çocuklar AHA yüksek risk grubundadır. Hasta oral yoldan ilaç alabildiğinden ve penisiline alerjisi bulunduğundan; tercih edilecek alternatif oral antibiyotik, çocuk dozu spesifik olarak kilogram başına 20 mg olan Klindamisindir.

---

### ÇİFT 2 (Benzerlik: 0.81)

**Soru 1 (ID: 0c92f4a4-6eb6-44d9-b386-87949da50ff9)**
Soru Kökü: Subakut enfektif endokardit riski taşıyan bir hastada aşağıdaki dental prosedürlerden hangisi öncesinde antibiyotik profilaksisi yapılması mutlak endikasyon taşır?
Doğru Şık (D): Intraligamenter lokal anestezi uygulanması
Açıklama: İntraligamenter lokal anestezi, iğnenin doğrudan periodontal ligament aralığına girmesiyle yoğun bakteriyemi yaratan invaziv bir işlemdir ve endokardit riski taşıyan hastalarda kesinlikle profilaksi gerektirir. Rutin lokal anestezi, flor tatbiki, ölçü alımı veya radyografi çekimi gibi kanama yaratmayan minimal invaziv işlemler profilaksi gerektirmez.

**Soru 2 (ID: 5b85eac7-f7e7-4420-afb6-cfde23c59e4c)**
Soru Kökü: Enfektif endokardit riski taşıyan bir hastada, bakteriyemiye yol açma potansiyeli değerlendirildiğinde aşağıdaki dental prosedürlerden hangisi öncesinde antibiyotik profilaksisi yapılması tavsiye **edilmez**?
Doğru Şık (E): Operasyon sonrası dikiş alınması
Açıklama: Profilaksi rejimi, periodontal dokuların zedelendiği, belirgin kanama oluşan ve bakterilerin direkt vasküler yatağa girdiği durumlarda gereklidir. Operasyon sonrası dikiş alınması, mukoza bütünlüğünü derinlemesine bozmayan yüzeysel bir işlem olduğundan AHA tarafından profilaksi tavsiye edilmeyen uygulamalar kategorisinde sınıflandırılmıştır.

---

### ÇİFT 3 (Benzerlik: 0.79)

**Soru 1 (ID: 351c6e40-2413-40e9-b212-863ee6033ad9)**
Soru Kökü: Hipertansiyon hastalarının medikal tedavisinde kullanılan antihipertansif ajanların ağız içi yan etkileri göz önüne alındığında, aşağıdakilerden hangisi bu ilaçlara bağlı beklenen bir yan etki **değildir**?
Doğru Şık (A): Artmış tükürük akışına bağlı sialore
Açıklama: Antihipertansif ilaçların (özellikle diüretikler ve beta blokerler) dental pratikte en sık karşılaşılan yan etkisi sekresyon azalmasına bağlı ağız kuruluğu (kserostomi) ve buna sekonder gelişen yanma/parestezi şikayetleridir; tükürük artışı (sialore) görülmez. Ayrıca kalsiyum kanal blokerleri gingival hiperplaziye, bazı ajanlar ise likenoid lezyonlara sebep olabilir.

**Soru 2 (ID: 3946e4b0-dd7a-4ffa-b55a-356e9d298bc2)**
Soru Kökü: Antihipertansif ilaç kullanan hastalarda dental pratik sırasında pek çok oral ve sistemik yan etkiyle karşılaşılabilir. Aşağıdakilerden hangisi hipertansiyon tedavisi için kullanılan ilaçların neden olduğu oral bulgulardan biri **değildir**?
Doğru Şık (C): Tükürük bezi atrofisi
Açıklama: Antihipertansif ajanların (özellikle kalsiyum kanal blokerleri ve diüretikler) farmakolojik etkileri oral mukozada sekonder doku yanıtlarına neden olur. Tükürük bezlerinde atrofi değil, aksine ilaca bağlı büyüme ve ağrı; diş etlerinde ise (özellikle nifedipin kaynaklı) gingival hiperplazi tablosu beklenir.

---

### ÇİFT 4 (Benzerlik: 0.78)

**Soru 1 (ID: 474c3bf1-1453-41e6-ad66-312cc79de0a6)**
Soru Kökü: Otuz beş yaşındaki kadın hasta, kalp kapağı protezi taşıdığını ve gastrointestinal bir rahatsızlık nedeniyle geçici olarak ağızdan hiçbir ilaç (oral yolla) alamadığını belirtmiştir. Herhangi bir antibiyotik alerjisi bulunmayan bu hastaya, planlanan diş çekimi öncesi uygulanması gereken en uygun profilaksi ajanı ve yolu aşağıdakilerden hangisidir?
Doğru Şık (A): Ampisilin 2 gram IM veya IV
Açıklama: Oral yoldan ilaç alamayan ve penisilin alerjisi olmayan erişkin hastalarda profilaksi intravenöz (IV) veya intramüsküler (IM) yolla yapılır. Standart parenteral tercih Ampisilin 2 gram veya Sefazolin/Seftriakson 1 gramdır. Klindamisin IV/IM yolu sadece hastanın penisilin alerjisi olması durumunda tercih edilir.

**Soru 2 (ID: da7e3b7b-a4c4-4e22-9fe6-ba4ca50a46a8)**
Soru Kökü: Yetişkin bir hastada enfektif endokardit profilaksisi planlanmaktadır. Hastanın penisilin alerjisi olduğu ve gastrointestinal bir problem sebebiyle ilaçları oral yoldan alamadığı bildirilmiştir. AHA 2008 kılavuzuna göre bu hastaya uygulanması gereken intravenöz (IV) profilaksi rejimi aşağıdakilerden hangisidir?
Doğru Şık (A): Sefazolin 1 g veya Klindamisin 600 mg
Açıklama: Gastrointestinal emilim problemi olan ve penisilin grubu ilaçlara karşı alerji reaksiyonu potansiyeli taşıyan yetişkinlerde parenteral (IV/IM) yol tercih edilmelidir. Bu durumda 1 gram Sefazolin IV veya linkozamid grubundan 600 mg Klindamisin IV uygulanması AHA protokollerinin standart alternatifleridir.

---

### ÇİFT 5 (Benzerlik: 0.78)

**Soru 1 (ID: 5ed9f176-311c-4bd6-b353-0ebf14310171)**
Soru Kökü: Altmış beş yaşındaki kronik kalp yetmezliği olan kadın hasta, dinlenme esnasında tamamen rahat olduğunu ancak günlük hafif seviye aktivitelerde dahi (kısa yürüyüş gibi) semptomatik hale geldiğini belirtmektedir. Bu hastanın konjestif kalp yetmezliği şiddet sınıflandırması aşağıdakilerden hangisidir?
Doğru Şık (A): Sınıf III
Açıklama: Konjestif kalp yetmezliği sınıflamasında Sınıf I asemptomatik; Sınıf II orta seviye aktivitede semptomatik/dinlenmede rahat; Sınıf III hafif seviye aktivitede semptomatik/dinlenmede rahat; Sınıf IV ise dinlenmede bile semptomatik olarak tanımlanır. Hastanın hafif aktivitede zorlanması Sınıf III'ü işaret eder.

**Soru 2 (ID: a1068f88-f963-4289-8c3c-f38c67785118)**
Soru Kökü: Konjestif kalp yetmezliği olan hastalar, efor ve istirahat sırasındaki semptomlarına göre sınıflandırılmaktadır. Dinlenme halindeyken bile semptomatik olan, günlük aktivitelerini dahi yerine getiremeyen bir kalp yetmezliği hastası hangi sınıfa dahildir?
Doğru Şık (C): Sınıf IV
Açıklama: Konjestif kalp yetmezliğindeki sınıflandırma skalası, kalbin efor tolerans kapasitesine dayanır. İstirahat halindeyken dahi doku perfüzyonunun yeterli sağlanamaması ve hastanın günlük rutini dışında yatakta otururken bile semptomatik olması, hastalığın son ve en ağır dönemi olan Sınıf IV tablosunu tanımlar.

---

### ÇİFT 6 (Benzerlik: 0.76)

**Soru 1 (ID: 0e558c80-6236-42c2-a14a-4edf9f8f12e3)**
Soru Kökü: Akut eklem romatizması (AER) anamnezi bulunan ve kardit sonrası kapak defekti geliştiği bilinen bir çocuk hastaya restoratif diş tedavisi planlanmıştır. Bu hastanın klinik yönetiminde aşağıdaki yaklaşımlardan hangisi temel prensiplerden biridir?
Doğru Şık (E): Lokal anestezik tercihinde adrenalinsiz ajanların kullanılması
Açıklama: AER sonrası kardit ve kapak defekti olan hastalarda otonomik dengesizliği ve miyokardiyal stresi tetiklememek adına adrenalinsiz lokal anestezik kullanımı temel kuraldır. Ayrıca bu hastalarda genel anestezi kontrendikedir ve kullanılan aspirin dozları kanama zamanını uzatacağı için işlem öncesi aspirin kesilmeli/dikkatli değerlendirilmelidir. Kapak defekti olduğu için antibiyotik profilaksisi zorunludur.

**Soru 2 (ID: 9af4fd47-ca5c-436e-8f6f-5e614b9fa96b)**
Soru Kökü: Beş yıl önce akut eklem romatizması (AER) tanısı almış olan 14 yaşındaki erkek hastanın anamnezinde, hastalığı sekelsiz atlattığı ve güncel ekokardiyografisinde herhangi bir kapak defekti veya kardit bulgusu olmadığı öğrenilmiştir. Bu hasta için dental işlemler öncesinde uygulanması gereken en uygun yaklaşım aşağıdakilerden hangisidir?
Doğru Şık (B): Sadece kardit ve kapak defekti olanlarda profilaksi gerektiğinden antibiyotik verilmemelidir
Açıklama: Akut eklem romatizması (AER) geçiren her hastada kalıcı endokardiyal hasar oluşmaz. Profilaksi kararı hastanın AER geçmişine değil, kalbinde sekonder olarak gelişen kalıcı bir kardit veya kapak defekti bulunup bulunmamasına göre verilir; izole AER öyküsü tek başına antibiyotik profilaksisi endikasyonu doğurmaz.

---

### ÇİFT 7 (Benzerlik: 0.76)

**Soru 1 (ID: 474c3bf1-1453-41e6-ad66-312cc79de0a6)**
Soru Kökü: Otuz beş yaşındaki kadın hasta, kalp kapağı protezi taşıdığını ve gastrointestinal bir rahatsızlık nedeniyle geçici olarak ağızdan hiçbir ilaç (oral yolla) alamadığını belirtmiştir. Herhangi bir antibiyotik alerjisi bulunmayan bu hastaya, planlanan diş çekimi öncesi uygulanması gereken en uygun profilaksi ajanı ve yolu aşağıdakilerden hangisidir?
Doğru Şık (A): Ampisilin 2 gram IM veya IV
Açıklama: Oral yoldan ilaç alamayan ve penisilin alerjisi olmayan erişkin hastalarda profilaksi intravenöz (IV) veya intramüsküler (IM) yolla yapılır. Standart parenteral tercih Ampisilin 2 gram veya Sefazolin/Seftriakson 1 gramdır. Klindamisin IV/IM yolu sadece hastanın penisilin alerjisi olması durumunda tercih edilir.

**Soru 2 (ID: 5de2aaa0-a8a9-451b-80d5-a87bf8459754)**
Soru Kökü: Dokuz yaşındaki kız hastaya diş çekimi planlanmaktadır. Anamnezinde onarılmış ancak yerleştirilen materyallerin komşu alanlarında residüel defekt kalmış konjenital kalp hastalığı ve penisilin alerjisi olduğu öğrenilmektedir. Hastanın ilaç yutmasında bir problemi yoktur. AHA 2008 kılavuzuna göre uygulanması gereken profilaktik ilaç ve dozu aşağıdakilerden hangisidir?
Doğru Şık (B): Klindamisin 20 mg/kg
Açıklama: Ameliyat edilmiş ancak onarılan bölgenin komşuluğunda rezidüel defekt barındıran konjenital kalp anomaliesi olan çocuklar AHA yüksek risk grubundadır. Hasta oral yoldan ilaç alabildiğinden ve penisiline alerjisi bulunduğundan; tercih edilecek alternatif oral antibiyotik, çocuk dozu spesifik olarak kilogram başına 20 mg olan Klindamisindir.

---

### ÇİFT 8 (Benzerlik: 0.76)

**Soru 1 (ID: 31c14927-dd82-4735-bc06-fc35f1049ed6)**
Soru Kökü: Diş tedavileri sırasında oluşan bakteriyeminin yoğunluğu ve süresi, işlemin türüne göre değişiklik gösterir. Enfektif endokardit riski taşıyan hastalarda bakteriyemi riski kıyaslandığında, diş çekiminin endodontik uygulamalara oranla yaklaşık kaç kat daha fazla bakteriyemiye yol açtığı kabul edilmektedir?
Doğru Şık (C): 7 kat
Açıklama: Diş çekimi sırasında hem periodontal ligament geniş çapta koparılır hem de zengin vasküler kemik içi soket direkt dış ortama açılarak dolaşıma yoğun bakteri hücumu başlar. Kök kanal sistemi anatomik olarak apikal foramen ile izole bir kompartman olduğundan, endodontik işlemlerde kana bakteri geçiş potansiyeli diş çekimine göre yedi kat daha azdır.

**Soru 2 (ID: cf948521-090f-4186-9bb2-032dae48dca6)**
Soru Kökü: Enfektif endokardit riski açısından dental işlemlerin kan akımına bakteri karıştırma (bakteriyemi) oranları kıyaslandığında, aşağıdaki işlemlerden hangisinin bakteriyemi oluşturma riski diğerlerine göre en yüksektir?
Doğru Şık (A): Çoklu diş çekimi
Açıklama: Diş çekimi, yoğun vaskülarize dokuların yırtılmasına neden olduğu için endodontik uygulamalara (apeksi aşmayan) oranla yedi kat daha fazla bakteriyemi yaratır. En emin tedaviler kök kanalı dışına çıkılmayan endodontik yaklaşımlardır. Dişeti oluğu içindeki bakterilerin dolaşıma girmesi çekim anında maksimum düzeye ulaşır.

---

### ÇİFT 9 (Benzerlik: 0.75)

**Soru 1 (ID: 0e558c80-6236-42c2-a14a-4edf9f8f12e3)**
Soru Kökü: Akut eklem romatizması (AER) anamnezi bulunan ve kardit sonrası kapak defekti geliştiği bilinen bir çocuk hastaya restoratif diş tedavisi planlanmıştır. Bu hastanın klinik yönetiminde aşağıdaki yaklaşımlardan hangisi temel prensiplerden biridir?
Doğru Şık (E): Lokal anestezik tercihinde adrenalinsiz ajanların kullanılması
Açıklama: AER sonrası kardit ve kapak defekti olan hastalarda otonomik dengesizliği ve miyokardiyal stresi tetiklememek adına adrenalinsiz lokal anestezik kullanımı temel kuraldır. Ayrıca bu hastalarda genel anestezi kontrendikedir ve kullanılan aspirin dozları kanama zamanını uzatacağı için işlem öncesi aspirin kesilmeli/dikkatli değerlendirilmelidir. Kapak defekti olduğu için antibiyotik profilaksisi zorunludur.

**Soru 2 (ID: 91760797-6793-4b82-a696-c2ba3b5b8f12)**
Soru Kökü: Akut eklem romatizması (AER) sekeli olarak gelişen kalp anomalisi olan hastalarda dental işlemler sırasında dikkat edilmesi gereken kısıtlamalar mevcuttur. Bu hastaların tedavisinde aşağıdaki anestezi ve ilaç yaklaşımlarından hangisi kesinlikle **kontrendikedir**?
Doğru Şık (B): Genel anestezi uygulaması
Açıklama: AER sekeli kardiyak anomalisi olan hastalarda vazokonstrüktör maddeler stres kontrolü için lokal anesteziklerde dikkatli kullanılmalı, adrenalinsiz ajanlar tercih edilmelidir. Ancak kalp debisindeki ani düşüşler ve solunum depresyonu riski nedeniyle, bu hastalarda genel anestezi uygulanması yaşamsal fonksiyonları riske atacağından mutlak kontrendikedir.

---

### ÇİFT 10 (Benzerlik: 0.75)

**Soru 1 (ID: b317d576-e84e-4b98-b584-a51d2c33ea8c)**
Soru Kökü: Bakteriyel endokardit vakalarında, patolojik immün kompleks birikimi sonucu oluşan ve göz dibi muayenesinde saptanan etrafı eritemli oval, soluk renkli lezyonlar aşağıdakilerden hangisi ile isimlendirilir?
Doğru Şık (B): Roth lekeleri
Açıklama: Roth lekeleri (%5 görülme oranıyla), retinada oluşan soluk merkezli oval hemorajik infarkt alanlarıdır. Diğer lezyonlardan Janeway lekeleri avuç içi/ayak tabanında, Osler nodülleri parmak uçlarında ve splinter kanamalar tırnak yataklarında konumlanarak tanıya yardımcı olur.

**Soru 2 (ID: f19dadfa-babe-4e76-83f6-748542a141aa)**
Soru Kökü: Subakut enfektif endokardit şüphesiyle konsülte edilen hastanın fizik muayenesinde, avuç içlerinde ve ayak tabanlarında maküler yapıda, kırmızı renkli ve ağrısız lekeler saptanmıştır. Bu klinik bulgu aşağıdakilerden hangisi ile isimlendirilir?
Doğru Şık (B): Janeway lekeleri
Açıklama: Enfektif endokarditte septik mikroembolilerin kapiller yatağı tıkaması sonucu çeşitli kutanöz belirtiler ortaya çıkar. Avuç içi ve ayak tabanında görülen, basmakla solmayan, maküler ve ağrısız hemorajik lezyonlar spesifik olarak Janeway lekeleri olarak adlandırılırken; Osler nodülleri parmak uçlarında ağrılı şişlikler olarak izlenir.

---

### ÇİFT 11 (Benzerlik: 0.74)

**Soru 1 (ID: 3718e432-d036-4e5e-ba32-a503e4541675)**
Soru Kökü: Yedi yaşındaki konjenital siyanotik kalp hastası bir çocuk için süt dişi çekimi planlanmıştır. Çocuğun bilinen herhangi bir ilaç alerjisi yoktur ve oral yoldan ilaç alabilmektedir. AHA 2008 kılavuzuna göre bu hastaya uygulanması gereken standart profilaksi rejimi aşağıdakilerden hangisidir?
Doğru Şık (A): Oral Amoksisilin 50 mg/kg
Açıklama: Siyanotik konjenital kalp hastası çocuklar, yüksek enfektif endokardit morbidite riski nedeniyle mutlaka profilaksi şemsiyesi altına alınmalıdır. Penisilin alerjisi olmayan ve yutma fonksiyonu normal olan çocuklarda AHA'nın birinci basamak ilacı, kilogram başına 50 mg dozunda uygulanan oral Amoksisilindir.

**Soru 2 (ID: 474c3bf1-1453-41e6-ad66-312cc79de0a6)**
Soru Kökü: Otuz beş yaşındaki kadın hasta, kalp kapağı protezi taşıdığını ve gastrointestinal bir rahatsızlık nedeniyle geçici olarak ağızdan hiçbir ilaç (oral yolla) alamadığını belirtmiştir. Herhangi bir antibiyotik alerjisi bulunmayan bu hastaya, planlanan diş çekimi öncesi uygulanması gereken en uygun profilaksi ajanı ve yolu aşağıdakilerden hangisidir?
Doğru Şık (A): Ampisilin 2 gram IM veya IV
Açıklama: Oral yoldan ilaç alamayan ve penisilin alerjisi olmayan erişkin hastalarda profilaksi intravenöz (IV) veya intramüsküler (IM) yolla yapılır. Standart parenteral tercih Ampisilin 2 gram veya Sefazolin/Seftriakson 1 gramdır. Klindamisin IV/IM yolu sadece hastanın penisilin alerjisi olması durumunda tercih edilir.

---

### ÇİFT 12 (Benzerlik: 0.73)

**Soru 1 (ID: 768e1899-8720-4b04-8ceb-7bab33210734)**
Soru Kökü: Diş tedavisi sonrası bakteriyemi riskini azaltmak amacıyla tedavi öncesi ve sırasında antiseptik ağız gargaralarının kullanımı kritik öneme sahiptir. Literatüre göre, diş çekiminden hemen önce gargaranın ağızda ne kadar süre tutulması bakteriyemi olasılığını önemli ölçüde azaltmaktadır?
Doğru Şık (C): 30 saniye
Açıklama: Bakteriyeminin primer kaynağı dişeti oluğu içindeki mikroorganizmalardır. Diş çekiminden önce antiseptik bir gargara ile ağzın spesifik olarak 30 saniye süre ile çalkalanması, lokal bakteri yükünü azaltarak çekim sonrası gelişecek bakteriyemi şiddetini klinik olarak anlamlı düzeyde düşürür.

**Soru 2 (ID: baa5fbea-9be7-4986-b83e-d5cfd276fff0)**
Soru Kökü: Diş eti oluğu içindeki bakteriler, dental işlemler sırasında oluşan bakteriyeminin en önemli kaynağını oluşturur. Diş çekimi sonrası bakteriyemi olasılığını önemli ölçüde azaltmak için işlem öncesinde rutin olarak uygulanması önerilen yöntem aşağıdakilerden hangisidir?
Doğru Şık (E): Antiseptik ağız gargarası ile ağzın 30 saniye süre ile çalkalanması
Açıklama: Dental işlemler sırasında veya hemen sonrasında izlenen bakteriyeminin birincil biyolojik kaynağı, diş eti oluğunda (gingival sulkus) kolonize olmuş bakteriyel plaktır. Çekim işleminden hemen önce ağzın antiseptik bir gargara ile 30 saniye boyunca çalkalanması, lokal mukoza yüzeyindeki bakteri sayısını hızla düşürerek dolaşıma girecek patojen miktarını istatistiksel olarak anlamlı ölçüde azaltır.

---

### ÇİFT 13 (Benzerlik: 0.72)

**Soru 1 (ID: 6eab6a4a-4b76-4202-ac2f-a4e1b2f2371a)**
Soru Kökü: Subakut enfektif endokarditin tanısında lokal ve sistemik belirtilerin yanı sıra karakteristik periferik belirtiler de önem taşır. I. Tırnak yatağının proksimalinde düzlemsel, kırmızı-kahverengi çizgiler 
II. El ve ayak parmaklarının ön yüzünde küçük, kırmızımsı ağrılı şişlikler 
III. Etrafı eritemli oval, soluk renkli retinal lezyonlar Yukarıda tanımlanan belirtilerin isimlendirmesi sırasıyla hangi seçenekte doğru verilmiştir?
Doğru Şık (E): Splinter kanamalar - Osler nodülleri - Roth lekeleri
Açıklama: Bakteriyel endokardit embolilerinin periferik yansımaları spesifik lokalizasyonlar gösterir. Tırnak altı mikro-hemorajiler Splinter kanamalar olarak, immün kompleks birikimine bağlı el/ayak ön yüzündeki ağrılı şişlikler Osler nodülleri olarak ve retinadaki eritemli oval eksüdalar Roth lekeleri olarak adlandırılır.

**Soru 2 (ID: f19dadfa-babe-4e76-83f6-748542a141aa)**
Soru Kökü: Subakut enfektif endokardit şüphesiyle konsülte edilen hastanın fizik muayenesinde, avuç içlerinde ve ayak tabanlarında maküler yapıda, kırmızı renkli ve ağrısız lekeler saptanmıştır. Bu klinik bulgu aşağıdakilerden hangisi ile isimlendirilir?
Doğru Şık (B): Janeway lekeleri
Açıklama: Enfektif endokarditte septik mikroembolilerin kapiller yatağı tıkaması sonucu çeşitli kutanöz belirtiler ortaya çıkar. Avuç içi ve ayak tabanında görülen, basmakla solmayan, maküler ve ağrısız hemorajik lezyonlar spesifik olarak Janeway lekeleri olarak adlandırılırken; Osler nodülleri parmak uçlarında ağrılı şişlikler olarak izlenir.

---

### ÇİFT 14 (Benzerlik: 0.72)

**Soru 1 (ID: 5de2aaa0-a8a9-451b-80d5-a87bf8459754)**
Soru Kökü: Dokuz yaşındaki kız hastaya diş çekimi planlanmaktadır. Anamnezinde onarılmış ancak yerleştirilen materyallerin komşu alanlarında residüel defekt kalmış konjenital kalp hastalığı ve penisilin alerjisi olduğu öğrenilmektedir. Hastanın ilaç yutmasında bir problemi yoktur. AHA 2008 kılavuzuna göre uygulanması gereken profilaktik ilaç ve dozu aşağıdakilerden hangisidir?
Doğru Şık (B): Klindamisin 20 mg/kg
Açıklama: Ameliyat edilmiş ancak onarılan bölgenin komşuluğunda rezidüel defekt barındıran konjenital kalp anomaliesi olan çocuklar AHA yüksek risk grubundadır. Hasta oral yoldan ilaç alabildiğinden ve penisiline alerjisi bulunduğundan; tercih edilecek alternatif oral antibiyotik, çocuk dozu spesifik olarak kilogram başına 20 mg olan Klindamisindir.

**Soru 2 (ID: da7e3b7b-a4c4-4e22-9fe6-ba4ca50a46a8)**
Soru Kökü: Yetişkin bir hastada enfektif endokardit profilaksisi planlanmaktadır. Hastanın penisilin alerjisi olduğu ve gastrointestinal bir problem sebebiyle ilaçları oral yoldan alamadığı bildirilmiştir. AHA 2008 kılavuzuna göre bu hastaya uygulanması gereken intravenöz (IV) profilaksi rejimi aşağıdakilerden hangisidir?
Doğru Şık (A): Sefazolin 1 g veya Klindamisin 600 mg
Açıklama: Gastrointestinal emilim problemi olan ve penisilin grubu ilaçlara karşı alerji reaksiyonu potansiyeli taşıyan yetişkinlerde parenteral (IV/IM) yol tercih edilmelidir. Bu durumda 1 gram Sefazolin IV veya linkozamid grubundan 600 mg Klindamisin IV uygulanması AHA protokollerinin standart alternatifleridir.

---

### ÇİFT 15 (Benzerlik: 0.72)

**Soru 1 (ID: 4aaaadbb-5c04-490a-a175-779f146b4fc9)**
Soru Kökü: Altmış beş yaşındaki kadın hastanın rutin dental muayenesi öncesi alınan kan basıncı değerleri sistolik 185 mmHg, diastolik 110 mmHg olarak ölçülmüştür. Hipertansiyon sınıflandırma kriterlerine göre bu hasta hangi kategoriye girmektedir?
Doğru Şık (E): Sınıf III
Açıklama: Sistemik kan basıncı ölçümlerinde sistolik ve diastolik değerlerden yüksek olan kademe baz alınarak evreleme yapılır. Sistolik basıncın 180 mmHg ve üzerinde (veya diastolik >100 mmHg) ölçülmesi, hastayı doğrudan hipertansif kriz riski taşıyan Sınıf III kategorisine sokar.

**Soru 2 (ID: ea39e001-9ec2-4b2a-b78e-caa904986b27)**
Soru Kökü: Elli beş yaşındaki erkek hastanın kliniğe rutin muayene için gelişinde kan basıncı 165/105 mmHg olarak ölçülmüştür. Bu ölçüm değerlerine göre hasta JNC (Joint National Committee) hipertansiyon sınıflamasına göre hangi grupta yer almaktadır?
Doğru Şık (B): Sınıf II hipertansiyon
Açıklama: JNC kılavuzuna göre Sınıf I (140-159 / 90-99), Sınıf II (160-179 / 100-109), Sınıf III ise (>180 / >110) şeklindedir. Hastanın 165 sistolik ve 105 diyastolik değeri Sınıf II hipertansiyon ile tam uyumludur.

---

### ÇİFT 16 (Benzerlik: 0.71)

**Soru 1 (ID: 57cd291f-02cc-4487-817e-9b1826244119)**
Soru Kökü: Miyokard infarktüsü (MI) geçiren bir hastada dental koltukta gelişebilecek akut göğüs ağrısı atağının yönetiminde ağrının azaltılması için tercih edilen ideal gaz karışımı aşağıdakilerden hangisidir?
Doğru Şık (E): %35 nitröz oksit ve oksijen karışımı
Açıklama: MI tablosunda doku perfüzyonunu bozmamak ve ağrıyı kontrol altına almak için yüksek oksijen içeren kontrollü bir aneljezi sağlanmalıdır. Metne göre %35’lik nitröz oksit ve oksijen karışımı ağrının azaltılmasında optimal ve etkili kabul edilmektedir. Daha yüksek nitröz oksit konsantrasyonları anoksiyi tetikleyebileceğinden kontrendikedir.

**Soru 2 (ID: 770b5847-7e67-4d44-9611-8a634abdab8f)**
Soru Kökü: Altmış yaşında, iskemik kalp hastalığı öyküsü olan bir hasta, dental tedavi sırasında stres ve ağrıya bağlı göğüs ağrısı hissetmiş, ancak ağrı solkola yayılmamıştır. Bu hastada otonomik stresi kırmak ve iskemiyi derinleştirmemek amacıyla ağrının kontrol altına alınmasında kullanılabilecek en güvenli inhalasyon ajanı aşağıdakilerden hangisidir?
Doğru Şık (E): %35'lik nitröz oksit ve oksijen karışımı
Açıklama: Miyokard infarktüsü riski taşıyan veya anjina öyküsü olan iskemik kalp hastalarında, oksijen satürasyonunu yüksek tutarken aynı zamanda anksiyete ve ağrıyı minimalize etmek hayati önem taşır. Bu amaçla %35'lik nitröz oksit ve oksijen karışımı kullanımı, hem oksijenizasyonu sağlar hem de vazodilatör ve sedatif etkileriyle miyokardiyal stresi baskılamada oldukça etkilidir. Halotan gibi ajanlar ise aritmi (özellikle bradikardi/fibrilasyon) riskini artırdığı için tercih edilmez.

---

### ÇİFT 17 (Benzerlik: 0.70)

**Soru 1 (ID: 38a67f49-4422-494e-9dcd-4a6769815e27)**
Soru Kökü: Amerikan Kalp Derneği (AHA 2008) kriterlerine göre, non-kardiyak nedenlere bağlı olarak sekonder immünsupresyon gelişen hastalarda da dental işlemler öncesi antibiyotik profilaksisi önerilmektedir. Aşağıdakilerden hangisi bu kapsamda profilaksi yapılması gereken durumlardan biri **değildir**?
Doğru Şık (D): Tip II diyabet hastaları
Açıklama: İmmün sistemin baskılandığı kronik hastalıklarda (HIV, nötropeni, radyoterapi, bifosfonat kullanımı), oral floradaki fırsatçı patojenlerin sistemik dolaşıma katılarak lokal veya uzak organ enfeksiyonu yaratma riski yüksektir. Tip I diyabet bu hücresel ve immün yetmezlik tablosuna dahil edilerek profilaksi endikasyonu sayılırken, Tip II diyabette sekonder immünsupresyon kaynaklı rutin profilaksi zorunluluğu kaynağa göre belirtilmemiştir.

**Soru 2 (ID: bbc82ed9-e171-4158-9643-2591667d308e)**
Soru Kökü: Aşağıdaki sistemik hastalıkların hangisinde, kardiyak bir anomali olmamasına rağmen, sekonder immünsupresyon veya enfeksiyona yatkınlık nedeniyle diş hekimliğinde non-kardiyak profilaksi rejimi uygulanması gereklidir?
Doğru Şık (D): Tip 1 Diabetes Mellitus
Açıklama: Non-kardiyak profilaksi endikasyonları, hastanın sistemik enfeksiyonla mücadele yeteneğinin düştüğü veya yabancı cisim reaksiyonu riskinin arttığı durumlardır. Bu grupta Tip 1 Diabet, HIV, nötropeni, kanser kemoterapisi, kronik steroid kullanımı ve splenektomi (dalak yokluğu) yer alır. Hipertansiyon veya astım immün sistemi doğrudan baskılayarak bakteriyemi riskini ölümcül boyuta taşımaz.

---

### ÇİFT 18 (Benzerlik: 0.70)

**Soru 1 (ID: 5b85eac7-f7e7-4420-afb6-cfde23c59e4c)**
Soru Kökü: Enfektif endokardit riski taşıyan bir hastada, bakteriyemiye yol açma potansiyeli değerlendirildiğinde aşağıdaki dental prosedürlerden hangisi öncesinde antibiyotik profilaksisi yapılması tavsiye **edilmez**?
Doğru Şık (E): Operasyon sonrası dikiş alınması
Açıklama: Profilaksi rejimi, periodontal dokuların zedelendiği, belirgin kanama oluşan ve bakterilerin direkt vasküler yatağa girdiği durumlarda gereklidir. Operasyon sonrası dikiş alınması, mukoza bütünlüğünü derinlemesine bozmayan yüzeysel bir işlem olduğundan AHA tarafından profilaksi tavsiye edilmeyen uygulamalar kategorisinde sınıflandırılmıştır.

**Soru 2 (ID: cf948521-090f-4186-9bb2-032dae48dca6)**
Soru Kökü: Enfektif endokardit riski açısından dental işlemlerin kan akımına bakteri karıştırma (bakteriyemi) oranları kıyaslandığında, aşağıdaki işlemlerden hangisinin bakteriyemi oluşturma riski diğerlerine göre en yüksektir?
Doğru Şık (A): Çoklu diş çekimi
Açıklama: Diş çekimi, yoğun vaskülarize dokuların yırtılmasına neden olduğu için endodontik uygulamalara (apeksi aşmayan) oranla yedi kat daha fazla bakteriyemi yaratır. En emin tedaviler kök kanalı dışına çıkılmayan endodontik yaklaşımlardır. Dişeti oluğu içindeki bakterilerin dolaşıma girmesi çekim anında maksimum düzeye ulaşır.

---

### ÇİFT 19 (Benzerlik: 0.70)

**Soru 1 (ID: 38a67f49-4422-494e-9dcd-4a6769815e27)**
Soru Kökü: Amerikan Kalp Derneği (AHA 2008) kriterlerine göre, non-kardiyak nedenlere bağlı olarak sekonder immünsupresyon gelişen hastalarda da dental işlemler öncesi antibiyotik profilaksisi önerilmektedir. Aşağıdakilerden hangisi bu kapsamda profilaksi yapılması gereken durumlardan biri **değildir**?
Doğru Şık (D): Tip II diyabet hastaları
Açıklama: İmmün sistemin baskılandığı kronik hastalıklarda (HIV, nötropeni, radyoterapi, bifosfonat kullanımı), oral floradaki fırsatçı patojenlerin sistemik dolaşıma katılarak lokal veya uzak organ enfeksiyonu yaratma riski yüksektir. Tip I diyabet bu hücresel ve immün yetmezlik tablosuna dahil edilerek profilaksi endikasyonu sayılırken, Tip II diyabette sekonder immünsupresyon kaynaklı rutin profilaksi zorunluluğu kaynağa göre belirtilmemiştir.

**Soru 2 (ID: 5b85eac7-f7e7-4420-afb6-cfde23c59e4c)**
Soru Kökü: Enfektif endokardit riski taşıyan bir hastada, bakteriyemiye yol açma potansiyeli değerlendirildiğinde aşağıdaki dental prosedürlerden hangisi öncesinde antibiyotik profilaksisi yapılması tavsiye **edilmez**?
Doğru Şık (E): Operasyon sonrası dikiş alınması
Açıklama: Profilaksi rejimi, periodontal dokuların zedelendiği, belirgin kanama oluşan ve bakterilerin direkt vasküler yatağa girdiği durumlarda gereklidir. Operasyon sonrası dikiş alınması, mukoza bütünlüğünü derinlemesine bozmayan yüzeysel bir işlem olduğundan AHA tarafından profilaksi tavsiye edilmeyen uygulamalar kategorisinde sınıflandırılmıştır.

---

### ÇİFT 20 (Benzerlik: 0.70)

**Soru 1 (ID: 0c92f4a4-6eb6-44d9-b386-87949da50ff9)**
Soru Kökü: Subakut enfektif endokardit riski taşıyan bir hastada aşağıdaki dental prosedürlerden hangisi öncesinde antibiyotik profilaksisi yapılması mutlak endikasyon taşır?
Doğru Şık (D): Intraligamenter lokal anestezi uygulanması
Açıklama: İntraligamenter lokal anestezi, iğnenin doğrudan periodontal ligament aralığına girmesiyle yoğun bakteriyemi yaratan invaziv bir işlemdir ve endokardit riski taşıyan hastalarda kesinlikle profilaksi gerektirir. Rutin lokal anestezi, flor tatbiki, ölçü alımı veya radyografi çekimi gibi kanama yaratmayan minimal invaziv işlemler profilaksi gerektirmez.

**Soru 2 (ID: cf948521-090f-4186-9bb2-032dae48dca6)**
Soru Kökü: Enfektif endokardit riski açısından dental işlemlerin kan akımına bakteri karıştırma (bakteriyemi) oranları kıyaslandığında, aşağıdaki işlemlerden hangisinin bakteriyemi oluşturma riski diğerlerine göre en yüksektir?
Doğru Şık (A): Çoklu diş çekimi
Açıklama: Diş çekimi, yoğun vaskülarize dokuların yırtılmasına neden olduğu için endodontik uygulamalara (apeksi aşmayan) oranla yedi kat daha fazla bakteriyemi yaratır. En emin tedaviler kök kanalı dışına çıkılmayan endodontik yaklaşımlardır. Dişeti oluğu içindeki bakterilerin dolaşıma girmesi çekim anında maksimum düzeye ulaşır.

---

### ÇİFT 21 (Benzerlik: 0.70)

**Soru 1 (ID: 3718e432-d036-4e5e-ba32-a503e4541675)**
Soru Kökü: Yedi yaşındaki konjenital siyanotik kalp hastası bir çocuk için süt dişi çekimi planlanmıştır. Çocuğun bilinen herhangi bir ilaç alerjisi yoktur ve oral yoldan ilaç alabilmektedir. AHA 2008 kılavuzuna göre bu hastaya uygulanması gereken standart profilaksi rejimi aşağıdakilerden hangisidir?
Doğru Şık (A): Oral Amoksisilin 50 mg/kg
Açıklama: Siyanotik konjenital kalp hastası çocuklar, yüksek enfektif endokardit morbidite riski nedeniyle mutlaka profilaksi şemsiyesi altına alınmalıdır. Penisilin alerjisi olmayan ve yutma fonksiyonu normal olan çocuklarda AHA'nın birinci basamak ilacı, kilogram başına 50 mg dozunda uygulanan oral Amoksisilindir.

**Soru 2 (ID: da7e3b7b-a4c4-4e22-9fe6-ba4ca50a46a8)**
Soru Kökü: Yetişkin bir hastada enfektif endokardit profilaksisi planlanmaktadır. Hastanın penisilin alerjisi olduğu ve gastrointestinal bir problem sebebiyle ilaçları oral yoldan alamadığı bildirilmiştir. AHA 2008 kılavuzuna göre bu hastaya uygulanması gereken intravenöz (IV) profilaksi rejimi aşağıdakilerden hangisidir?
Doğru Şık (A): Sefazolin 1 g veya Klindamisin 600 mg
Açıklama: Gastrointestinal emilim problemi olan ve penisilin grubu ilaçlara karşı alerji reaksiyonu potansiyeli taşıyan yetişkinlerde parenteral (IV/IM) yol tercih edilmelidir. Bu durumda 1 gram Sefazolin IV veya linkozamid grubundan 600 mg Klindamisin IV uygulanması AHA protokollerinin standart alternatifleridir.

---

### ÇİFT 22 (Benzerlik: 0.70)

**Soru 1 (ID: 6eab6a4a-4b76-4202-ac2f-a4e1b2f2371a)**
Soru Kökü: Subakut enfektif endokarditin tanısında lokal ve sistemik belirtilerin yanı sıra karakteristik periferik belirtiler de önem taşır. I. Tırnak yatağının proksimalinde düzlemsel, kırmızı-kahverengi çizgiler 
II. El ve ayak parmaklarının ön yüzünde küçük, kırmızımsı ağrılı şişlikler 
III. Etrafı eritemli oval, soluk renkli retinal lezyonlar Yukarıda tanımlanan belirtilerin isimlendirmesi sırasıyla hangi seçenekte doğru verilmiştir?
Doğru Şık (E): Splinter kanamalar - Osler nodülleri - Roth lekeleri
Açıklama: Bakteriyel endokardit embolilerinin periferik yansımaları spesifik lokalizasyonlar gösterir. Tırnak altı mikro-hemorajiler Splinter kanamalar olarak, immün kompleks birikimine bağlı el/ayak ön yüzündeki ağrılı şişlikler Osler nodülleri olarak ve retinadaki eritemli oval eksüdalar Roth lekeleri olarak adlandırılır.

**Soru 2 (ID: b317d576-e84e-4b98-b584-a51d2c33ea8c)**
Soru Kökü: Bakteriyel endokardit vakalarında, patolojik immün kompleks birikimi sonucu oluşan ve göz dibi muayenesinde saptanan etrafı eritemli oval, soluk renkli lezyonlar aşağıdakilerden hangisi ile isimlendirilir?
Doğru Şık (B): Roth lekeleri
Açıklama: Roth lekeleri (%5 görülme oranıyla), retinada oluşan soluk merkezli oval hemorajik infarkt alanlarıdır. Diğer lezyonlardan Janeway lekeleri avuç içi/ayak tabanında, Osler nodülleri parmak uçlarında ve splinter kanamalar tırnak yataklarında konumlanarak tanıya yardımcı olur.

---

### ÇİFT 23 (Benzerlik: 0.69)

**Soru 1 (ID: 0c92f4a4-6eb6-44d9-b386-87949da50ff9)**
Soru Kökü: Subakut enfektif endokardit riski taşıyan bir hastada aşağıdaki dental prosedürlerden hangisi öncesinde antibiyotik profilaksisi yapılması mutlak endikasyon taşır?
Doğru Şık (D): Intraligamenter lokal anestezi uygulanması
Açıklama: İntraligamenter lokal anestezi, iğnenin doğrudan periodontal ligament aralığına girmesiyle yoğun bakteriyemi yaratan invaziv bir işlemdir ve endokardit riski taşıyan hastalarda kesinlikle profilaksi gerektirir. Rutin lokal anestezi, flor tatbiki, ölçü alımı veya radyografi çekimi gibi kanama yaratmayan minimal invaziv işlemler profilaksi gerektirmez.

**Soru 2 (ID: 38a67f49-4422-494e-9dcd-4a6769815e27)**
Soru Kökü: Amerikan Kalp Derneği (AHA 2008) kriterlerine göre, non-kardiyak nedenlere bağlı olarak sekonder immünsupresyon gelişen hastalarda da dental işlemler öncesi antibiyotik profilaksisi önerilmektedir. Aşağıdakilerden hangisi bu kapsamda profilaksi yapılması gereken durumlardan biri **değildir**?
Doğru Şık (D): Tip II diyabet hastaları
Açıklama: İmmün sistemin baskılandığı kronik hastalıklarda (HIV, nötropeni, radyoterapi, bifosfonat kullanımı), oral floradaki fırsatçı patojenlerin sistemik dolaşıma katılarak lokal veya uzak organ enfeksiyonu yaratma riski yüksektir. Tip I diyabet bu hücresel ve immün yetmezlik tablosuna dahil edilerek profilaksi endikasyonu sayılırken, Tip II diyabette sekonder immünsupresyon kaynaklı rutin profilaksi zorunluluğu kaynağa göre belirtilmemiştir.

---

