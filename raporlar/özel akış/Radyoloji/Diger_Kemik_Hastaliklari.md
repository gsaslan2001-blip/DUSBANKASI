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

### ÇİFT 1 (Benzerlik: 0.82)

**Soru 1 (ID: 25948a5c-30c9-4fd8-9103-e7f3861bddb7)**
Soru Kökü: Fibröz displazi spektrumunda izlenen McCune-Albright sendromuna eşlik edebilen endokrin bozukluklar ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): En yaygın izlenen endokrinopati erkek çocuklarda ortaya çıkan ve tekrarlayan ataklarla seyreden erken ergenlik tablosudur.
Açıklama: McCune-Albright sendromunda en yaygın endokrinopati kesinlikle kızlarda (%85) tekrarlayan östrojen üreten over kistleriyle ortaya çıkan prekoks pubertedir (erken ergenlik); bu durum erkek çocuklarda nadirdir (%10-15). Hipertiroidizm, akromegali ve bebeklik dönemi Cushing sendromu bu tabloya eşlik edebilen diğer ciddi endokrin bozukluklar arasındadır. Ayrıca displastik dokudan artan FGF-23 salgısı da fosfat regülasyonunu bozar.

**Soru 2 (ID: c28040ae-bfb3-48f9-9c0a-30e97c5b423d)**
Soru Kökü: Poliostotik fibröz displazi, cafe au lait lekeleri ve endokrin bozukluklarla karakterize McCune-Albright sendromunda en sık karşılaşılan endokrinopati aşağıdakilerden hangisidir?
Doğru Şık (A): Prekoks puberte
Açıklama: McCune-Albright sendromunda en sık görülen endokrin anormallik, kızlarda %85 oranında tekrarlayan östrojen üreten kistlerle ortaya çıkan erken ergenliktir (prekoks puberte). Hipertiroidizm veya akromegali gibi diğer endokrinopatiler de görülebilmekle birlikte oranları (%10-33) prekoks puberteye kıyasla daha düşüktür. Hastalığın temel mekanizması GNAS gen mutasyonu sonucu otonomik endokrin hiperfonksiyonudur.

---

### ÇİFT 2 (Benzerlik: 0.82)

**Soru 1 (ID: 90859fbd-240d-4432-874a-d0fe742da79f)**
Soru Kökü: Langerhans hücreli histiositozis kompleksinin kronik dissemine formu olan Hand-Schüller-Christian hastalığının klasik tanısında temel alınan dört önemli majör bulgudan biri aşağıdakilerden hangisi **değildir**?
Doğru Şık (A): Erken puberte (Prekoks puberte)
Açıklama: Hand-Schüller-Christian hastalığının karakteristik tanısal dörtlüsü; kemiklerde zımba deliği tarzı litik lezyonlar, ekzoftalmi, hipofiz sapı tutulumuna bağlı diabetes insipidus ve lenforetiküler sistem hiperplazisidir. Erken puberte (prekoks puberte) ise histiositozis grubunun değil, poliostotik fibröz displazinin bir varyantı olan McCune-Albright sendromunun tipik endokrin bulgusudur.

**Soru 2 (ID: 9c3d2f11-3c01-43ad-a14a-4d7634af15e0)**
Soru Kökü: Hand-Schüller-Christian hastalığı, Langerhans Hücreli Histiositozis kompleksinin bir parçasıdır. Bu hastalığın klinik tablosunu tanımlayan klasik triadda kemiklerde litik lezyonlar ve ekzoftalmiye ek olarak aşağıdaki bulgulardan hangisi yer alır?
Doğru Şık (C): Diabetes insipidus
Açıklama: Hand-Schüller-Christian hastalığının klasik tanısal triadı; kafatası/kemiklerde litik lezyonlar, hipofiz sapının tutulumuna bağlı diabetes insipidus ve orbita tutulumuna bağlı ekzoftalmidir. Prekoks puberte veya işitme kaybı Albright sendromu veya fibröz displazi ile ilişkili olabilecek bulgularken, diyabetes insipidus histiositozis X kompleksi için patognomonik sistemik belirteçlerden biridir.

---

### ÇİFT 3 (Benzerlik: 0.78)

**Soru 1 (ID: 1359522f-452f-4470-8404-5108136e7fb6)**
Soru Kökü: Periapikal semental displazi (PSD) ile radyografik olarak benzerlik gösterebilen İdiyopatik Osteoskleroz (Dens Kemik Adası) lezyonunu ayırmada hekimin dikkate alması gereken en spesifik radyografik farklılık aşağıdakilerden hangisidir?
Doğru Şık (A): İdiyopatik osteosklerozun etrafında lezyonu çevreleyen hiçbir radyolüsent sınır/kapsül bulunmaması
Açıklama: İdiyopatik osteoskleroz (dens kemik adası) çevre kemik yapısıyla doğrudan kaynaşmış asimetrik skleroz odaklarıdır, etraflarında bağ dokusuna ait radyolüsent bir çizgi (kapsül) bulunmaz. Periapikal semental displazinin kalsifiye (3.) fazında ise kitlenin etrafında daima ince, net bir radyolüsent halo yer alır.

**Soru 2 (ID: 309e0d0e-ea78-467f-a531-d200b6907970)**
Soru Kökü: Periapikal semental displazinin (PSD) mikst veya kalsifiye (radyoopak) dönem lezyonları, özellikle genç yetişkinlerde odontoma ile karışabilir. Bir odontomanın radyografik görüntüsünü PSD'nin üçüncü dönem (kalsifiye) lezyonlarından kesin olarak ayırt etmeyi sağlayan bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): İnternal kalsifiye yapının diş benzeri (dentikül) formasyonlara veya belirgin dentin/mine yoğunluğuna sahip olması
Açıklama: Kompound odontomalar, embriyolojik olarak ektodermal/mezodermal orijinli olup radyografide mine ve dentin anatomik yoğunluğuna sahip, minyatür diş benzeri yapılardan (dentikül) oluşur. PSD'nin üçüncü dönemindeki kalsifiye (radyoopak) odaklar ise mine radyoopasitesine veya anatomik diş formuna sahip olmayan tamamen amorf displastik çimento-kemik birikimleridir. İnce radyolüsent kapsül PSD'de de izlenebilir.

---

### ÇİFT 4 (Benzerlik: 0.77)

**Soru 1 (ID: 1fbdfc73-f0fe-458e-8706-66099028caf3)**
Soru Kökü: 3 yaşındaki çocuk hasta, yanaklarının alt kısmında her iki tarafta simetrik olarak gelişen, ağrısız ve tombul bir yüz görünümü oluşturan kemik şişlikleri nedeniyle başvurmuştur. Radyografik muayenede angulus bölgesinde bilateral masif multiloküler radyolüsensiler izlenen bu hastanın klinik muayenesinde boyun bölgesinde saptanan sertliklerin **en olası** sebebi aşağıdakilerden hangisidir?
Doğru Şık (A): Bilateral olarak genişlemiş reaktif submandibular lenf nodları
Açıklama: Otozomal dominant kalıtımlı Cherubism (melek yüzlü çocuk) hastalığında mandibulanın angulus/ramus bölgesindeki bilateral (simetrik) ekspansif fibroosseöz lezyonların yanı sıra, klinik olarak palpe edilebilen ağrısız submandibular reaktif lenf nodu büyümeleri oldukça klasik bir eşlikçi bulgudur. Bu nodlar metastatik veya enfektif bir malignitenin değil, doğrudan sendromik tablonun bağışıklık yanıtı uzantısıdır.

**Soru 2 (ID: c5bf3e73-1e71-41bf-b0cc-cd7b2bae3d3d)**
Soru Kökü: Dört yaşındaki erkek çocuğun annesi, hastanın alt yüzünde iki taraflı ağrısız şişlik şikayetiyle kliniğe başvurmuştur. Klinik muayenede yanaklarda dolgunluk ve melek yüzlü bir görünüm saptanmıştır. Radyografik incelemede mandibula ramusu ve angulusunu tutan, daimi diş germlerini deplase etmiş bilateral multiloküler radyolüsensiler izlenmiştir. Bu tablonun beklenen klinik seyri aşağıdakilerden hangisidir?
Doğru Şık (D): Adolesan ve erişkin yaşa gelindiğinde lezyonlar gerileme ve statik hale geçme eğilimi gösterir.
Açıklama: Tarif edilen olgu, bilateral çene tutulumu ve 'melek yüzlü çocuk' (cherub) görünümü ile Cherubism'dir. Cherubism neoplastik bir süreç değil, gelişimsel fibroosseöz bir durumdur ve en karakteristik özelliği ergenlik ve erişkinlik döneminde kendi kendini sınırlayarak gerileme (regresyon) göstermesidir. Bu nedenle kural olarak cerrahi müdahale lezyonlar statik hale gelene kadar ertelenir.

---

### ÇİFT 5 (Benzerlik: 0.77)

**Soru 1 (ID: 723498ff-c08b-4368-af23-ae45ab8785c0)**
Soru Kökü: Fibröz displazi lezyonlarının radyolojik olarak çenelerde genişleme yapması durumunda, bu görünümün kronik osteomiyelitten ayrımını sağlayan en güvenilir radyolojik ipucu aşağıdakilerden hangisidir?
Doğru Şık (E): Osteomiyelitte yeni kemiğin periosttan gelmesi nedeniyle orijinal korteksin hala seçilebilmesi
Açıklama: Kronik osteomiyelitte çenede genişleme periosteal yeni kemik yapımı (soğan zarı görünümü) ile olur, bu nedenle alttaki orijinal kortikal sınır genellikle radyografide hala izlenebilir. Fibröz displazide ise genişleme içten (trabeküler kemikten) dışa doğrudur ve orijinal korteks yerini displastik kemik dokusuna bırakarak incelir.

**Soru 2 (ID: aef39701-fd5c-4661-9c50-6fa0c84dbc12)**
Soru Kökü: Fibröz displazi lezyonunun olgunlaşma evresinde, fibröz bağ dokusu zemininde eşit büyüklükte displastik kemik trabeküllerinin sayısının ve hacminin artmasıyla oluşan, özellikle üst çenedeki lezyonun spesifik tanınmasını sağlayan karakteristik radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Portakal kabuğu (orange peel) görünümü
Açıklama: Fibröz displazide histopatolojik düzeyde birbirine eşit büyüklükteki C şeklinde kemik trabeküllerinin hücresel fibröz stroma içine yerleşmesi, makroskobik radyografide 'buzlu cam' ya da klasik 'portakal kabuğu' (orange peel) pütürlü görünümünü oluşturur. Atılmış pamuk görünümü Paget hastalığında kalsifiye kitleler nedeniyle görülürken; güneş ışını ve güve yeniği manzaraları sırasıyla osteosarkom ve osteomiyelit/malignite göstergesidir.

---

### ÇİFT 6 (Benzerlik: 0.76)

**Soru 1 (ID: 4c806a00-be46-4e52-94a9-21e76a3134a6)**
Soru Kökü: İskelet sisteminde anormal kemik yapımı ve yıkımı döngüleriyle karakterize Paget hastalığında (osteitis deformans) çene tutulumuna ilişkin aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Alt çene, üst çeneye göre daha fazla etkilenir.
Açıklama: Paget hastalığında kafa ve çene kemikleri etkilendiğinde üst çene (maksilla), alt çeneye (mandibula) göre daha fazla tutulma eğilimi gösterir. Hastalığın aşırı fazında üst yüzün genişlemesi 'aslan yüz' (lion-like) deformitesine neden olur. Diğer şıklardaki hipersementoz, diastema oluşumu ve yüksek alkalen fosfataz (normal kalsiyum ve fosfor ile birlikte) hastalığın tipik karakteristikleridir.

**Soru 2 (ID: 648586f5-c67d-42cf-b2d7-7f4aaad89db5)**
Soru Kökü: İleri yaşlarda çene ve kafa kemiklerinde belirgin deformitelerle seyreden Paget hastalığının oral bulguları arasında birçok anatomik değişim yer alır. Aşağıdakilerden hangisi Paget hastalarının radyografik incelemesinde saptanabilecek dental/periodontal bulgulardan biri **değildir**?
Doğru Şık (D): Mandibular kanalda soğan zarı tarzı yeni kemik tabakalanması
Açıklama: Paget hastalığının oral bulguları arasında çene büyümesine bağlı diastemalar, diş göçleri, kök rezorpsiyonları, pulpa kalsifikasyonları, lamina dura kaybı ve hipersementoz bulunur. Soğan zarı (onion skin) tarzı periost reaksiyonu ise Paget hastalığına değil, özellikle çocuk/gençlerdeki proliferatif periostit (Garrè osteomiyeliti) veya Ewing sarkomuna özgü bir radyolojik bulgudur.

---

### ÇİFT 7 (Benzerlik: 0.76)

**Soru 1 (ID: c5bf3e73-1e71-41bf-b0cc-cd7b2bae3d3d)**
Soru Kökü: Dört yaşındaki erkek çocuğun annesi, hastanın alt yüzünde iki taraflı ağrısız şişlik şikayetiyle kliniğe başvurmuştur. Klinik muayenede yanaklarda dolgunluk ve melek yüzlü bir görünüm saptanmıştır. Radyografik incelemede mandibula ramusu ve angulusunu tutan, daimi diş germlerini deplase etmiş bilateral multiloküler radyolüsensiler izlenmiştir. Bu tablonun beklenen klinik seyri aşağıdakilerden hangisidir?
Doğru Şık (D): Adolesan ve erişkin yaşa gelindiğinde lezyonlar gerileme ve statik hale geçme eğilimi gösterir.
Açıklama: Tarif edilen olgu, bilateral çene tutulumu ve 'melek yüzlü çocuk' (cherub) görünümü ile Cherubism'dir. Cherubism neoplastik bir süreç değil, gelişimsel fibroosseöz bir durumdur ve en karakteristik özelliği ergenlik ve erişkinlik döneminde kendi kendini sınırlayarak gerileme (regresyon) göstermesidir. Bu nedenle kural olarak cerrahi müdahale lezyonlar statik hale gelene kadar ertelenir.

**Soru 2 (ID: c6b1517e-16ee-46ce-9961-6e85d14a2b5a)**
Soru Kökü: 14 yaşında erkek hasta, son bir yıldır üst çenesinin sağ tarafında yavaşça büyüyen ve hiç ağrı yapmayan bir şişlik şikayetiyle muayeneye gelmiştir. Yapılan muayenede alveolar proçeste bukkal ve linguale doğru genişleme, belirgin fasiyal asimetri ve panoramik radyografide maksiller sinüsü dolduran, iyi sınırlı tekil 'buzlu cam' manzarası saptanmıştır. İnce bir kortikal kemiğin daima sağlam kaldığı bu tabloda **en olası** teşhis aşağıdakilerden hangisidir?
Doğru Şık (E): Monostotik fibröz displazi
Açıklama: Genç hastalarda fibröz displazinin çenelerdeki en erken belirtisi alveolar proçeste asimetri yaratan, yavaş büyüyen ve ağrısız deformitedir; radyografideki homojen buzlu cam görüntüsü ve monostotik yapısı bu tanıyı kesinleştirir. Santral dev hücreli granüloma ve anevrizmal kemik kisti buzlu cam değil, ekspansif multiloküler/litik radyolüsensi şeklinde izlenir. Cherubism ise sadece çeneleri tutsa da klinik olarak tamamen bilateral (çift taraflı) bir asimetri ile karakterizedir.

---

### ÇİFT 8 (Benzerlik: 0.75)

**Soru 1 (ID: 191cd0c6-da5b-4e2a-b50c-c0935704ea3e)**
Soru Kökü: Paget hastalığına sahip hastalarda diş çekimi planlanırken, sistemik komplikasyonlar dışında cerrahi işlemi mekanik olarak en çok zorlaştıran dental/oral doku değişikliği aşağıdakilerden hangisidir?
Doğru Şık (A): Diş köklerinde görülen yoğun hipersementozis
Açıklama: Paget hastalığı (Osteitis deformans) ilerleyen evrelerinde kemik yapım-yıkım döngüsündeki düzensizlikle birlikte diş köklerinde yoğun kalsifik apozisyonlara, yani şiddetli 'hipersementoza' yol açar. Diş kökünün ucunun veya etrafının anormal derecede kalınlaşması ve lamina duranın etraftaki dens kemikle bütünleşmesi, rutin diş çekimi işlemlerini imkansız hale getirebilir ve çoğunlukla cerrahi çekim gerektirir.

**Soru 2 (ID: 648586f5-c67d-42cf-b2d7-7f4aaad89db5)**
Soru Kökü: İleri yaşlarda çene ve kafa kemiklerinde belirgin deformitelerle seyreden Paget hastalığının oral bulguları arasında birçok anatomik değişim yer alır. Aşağıdakilerden hangisi Paget hastalarının radyografik incelemesinde saptanabilecek dental/periodontal bulgulardan biri **değildir**?
Doğru Şık (D): Mandibular kanalda soğan zarı tarzı yeni kemik tabakalanması
Açıklama: Paget hastalığının oral bulguları arasında çene büyümesine bağlı diastemalar, diş göçleri, kök rezorpsiyonları, pulpa kalsifikasyonları, lamina dura kaybı ve hipersementoz bulunur. Soğan zarı (onion skin) tarzı periost reaksiyonu ise Paget hastalığına değil, özellikle çocuk/gençlerdeki proliferatif periostit (Garrè osteomiyeliti) veya Ewing sarkomuna özgü bir radyolojik bulgudur.

---

### ÇİFT 9 (Benzerlik: 0.75)

**Soru 1 (ID: 15b6e728-1d00-4f97-af87-b8d395fd1161)**
Soru Kökü: Fibröz displazi tanısı almış ve lezyona bağlı kranial sinir basısı (optik kanal daralması) gelişen bir hastada hekim cerrahi müdahale planlamaktadır. Bu hastanın tedavi sürecinde aşağıdaki yaklaşımlardan hangisi, lezyonun doğası gereği kesinlikle **kontrendikedir**?
Doğru Şık (D): Büyümeyi durdurmak için lezyona radyoterapi uygulanması
Açıklama: Fibröz displazi iyi huylu bir kemik lezyonudur. Radyasyon tedavisi (radyoterapi) uygulanması, lezyonun radyasyona bağlı osteosarkom gibi malign tümörlere dönüşüm riskini dramatik şekilde artırdığından kesinlikle kontrendikedir.

**Soru 2 (ID: 80a3b581-3941-49fb-8e33-25fae74280d4)**
Soru Kökü: Fibröz displazi lezyonlarının yönetimi ve tedavi stratejileriyle ilgili olarak aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Maksillofasiyal lezyonların agresif büyümesini durdurmak amacıyla radyoterapi (ışın tedavisi) standart yaklaşımdır.
Açıklama: Fibröz displazideki benign displastik kemik dokusunun üzerine uygulanan radyoterapi, hücrelerin mutasyona uğrayarak çok daha agresif malign sarkomlara (osteosarkom vb.) dönüşme riskini dramatik şekilde artırdığı için radyoterapi kesinlikle kontrendikedir. Standart yaklaşım iskelet büyümesi bitene kadar izlem yapmak, nörolojik foramen basısı varsa lokal cerrahi uygulamaktır.

---

### ÇİFT 10 (Benzerlik: 0.75)

**Soru 1 (ID: 838f016e-8297-4c83-8ab7-7383003c949f)**
Soru Kökü: Langerhans hücreli histiositozis (Histiositozis X) hastalık kompleksi, klinik prognozlarına göre en iyiden en kötüye (fatal) doğru sıralandığında aşağıdaki seçeneklerden hangisi doğru olur?
Doğru Şık (C): Eozinofil granülom -> Hand-Schüller-Christian -> Letterer-Siwe
Açıklama: Eozinofil granülom sadece lokalize kemik lezyonları yaptığı için prognozu en iyi olandır. Hand-Schüller-Christian hastalığı kemik ve yumuşak dokuyu birlikte tutan, DI ile seyreden orta ağırlıkta ve genellikle kronik bir formdur. Letterer-Siwe hastalığı ise infantil çağda başlayan, lenf düğümü, dalak ve karaciğer gibi iç organları masif şekilde infiltre edip ölüme götüren en kötü prognozlu formdur.

**Soru 2 (ID: a99f8ff1-63c1-4706-b9fe-067d651a17f6)**
Soru Kökü: Histiositozis X kompleksi içerisindeki lezyonlar klinik şiddetine göre sınıflandırılır. Sıklıkla üç yaşın altındaki çocuklarda görülen, lenfadenomegali, splenomegali ve hepatomegali ile seyrederek kemik iliği dahil yaygın iç organ infiltrasyonuna neden olan ve prognozu oldukça kötü (sıklıkla fatal) seyreden hastalık formu aşağıdakilerden hangisidir?
Doğru Şık (E): Letterer-Siwe hastalığı
Açıklama: Histiositozis X grubunun en şiddetli, akut ve yaygın dissemine formu Letterer-Siwe hastalığıdır. İç organlar (karaciğer, dalak vb.) hızlıca infiltre olur, tedaviye genellikle yanıtsızdır ve hastalar çoğunlukla çocukluk yaşlarında kaybedilir.

---

### ÇİFT 11 (Benzerlik: 0.74)

**Soru 1 (ID: 05d47df3-a39d-46bd-a8c9-d6a15a755ee5)**
Soru Kökü: Poliostotik fibröz displazi hastalarında aşırı fibroblast büyüme faktörü 23 (FGF-23) üretimine bağlı olarak böbreklerden proksimal tübül fosfat atılımının artması, hastada klinik olarak hangi sekonder iskelet probleminin gelişmesine zemin hazırlar?
Doğru Şık (D): Hipofosfatemiye bağlı çocuklarda raşitizm, yetişkinlerde osteomalazi
Açıklama: Fibröz displazide displastik fibröz doku otonom olarak aşırı FGF-23 salgılayarak böbreklerden masif fosfat kaybına ve şiddetli hipofosfatemiye neden olur. Bu hipofosfatemik durum iskeletin mineralizasyonunu bozarak çocuklarda raşitizme, yetişkinlerde ise osteomalaziye yol açıp kemik sonuçlarını daha da kötüleştirir. Hiperparatiroidizm ise serum kalsiyum regülasyonuyla ilgili farklı bir yolaktır ve FGF-23 mekanizmasından bağımsızdır.

**Soru 2 (ID: 99e1103e-361c-407c-b5a7-ad3f322ec006)**
Soru Kökü: Poliostotik fibröz displazinin bir formunda erken ergenlik, guatr veya hipofosfatemi gibi bulgulara rastlanabilir. Kemik mineralizasyonunu etkileyen hipofosfateminin, bu sendrom içerisindeki oluşum mekanizması aşağıdakilerden hangisi ile doğrudan ilişkilidir?
Doğru Şık (A): Artan fibroblast büyüme faktörü-23 (FGF-23) üretimi
Açıklama: McCune-Albright sendromuna (poliostotik fibröz displazi sendromu) eşlik eden hipofosfatemi, tipik olarak lezyon bölgesindeki fibröz doku içindeki hücrelerden aşırı miktarda Fibroblast Büyüme Faktörü-23 (FGF-23) salınmasına bağlıdır. FGF-23 böbreklerden fosfat atılımını aşırı uyarır (fosfatüri), kanda fosfat düşer; sonuç olarak osteomalazi, raşitizm benzeri klinik tablo ve iskeletsel komplikasyonlar meydana gelir. Bu durum onkojenik osteomalaziye mekanizma olarak çok benzer.

---

### ÇİFT 12 (Benzerlik: 0.74)

**Soru 1 (ID: 5b16ec2c-f0e0-4437-a527-e6b97c7731c8)**
Soru Kökü: 45 yaşındaki erkek hastanın panoramik radyografisinde sağ alt 2. ve 3. molar dişler etrafında, korteksi ekspansiyona uğratan çok odacıklı (multiloküler) geniş bir radyolüsensi saptanmıştır. Lezyonun Santral Dev Hücreli Granüloma (SDHG) yerine Ameloblastoma olarak teşhis edilmesinde, hekimi ameloblastomaya yönlendiren **en güçlü** radyolojik ve klinik veri çifti aşağıdakilerden hangisidir?
Doğru Şık (B): Hastanın yaşının ileri (4. dekad ve üstü) olması, lezyonun posterior yerleşimi ve iç septalarının daha kalın/kaba kortike yapıda olması
Açıklama: Her iki lezyon da mandibulanın multiloküler ekspansif radyolüsensileridir. Ancak ameloblastoma SDHG'den farklı olarak daha yaşlı hastalarda (3-5. dekad) izlenir, lezyon anteriora değil sıklıkla posterior ramusa lokalizedir ve radyolojik olarak lezyonu bölen septalar ameloblastomada SDHG'nin zarif fibriler yapısına kıyasla çok daha kalın, kaba ve lezyonun dış çevresi daha iyi kortike (sklerotik) yapıdadır.

**Soru 2 (ID: d7f9654d-25ac-43aa-a43f-fbcd25627753)**
Soru Kökü: Aşağıdaki lezyonlardan hangisi, histopatolojik olarak birbirlerine çok benzemelerine rağmen, hastanın yaşı ve radyografik özellikleriyle birbirinden ayrılır; biri daha çok 20 yaş altında, mandibula anteriorunda multiloküler litik lezyon yaparken, diğeri genellikle 30-50 yaş arası erişkinlerde ve mandibula posteriorunda korteks ekspansiyonu yapar?
Doğru Şık (B): Santral dev hücreli granülom - Ameloblastoma
Açıklama: Santral Dev Hücreli Granülom (SDHG) genellikle gençlerde/adölesanlarda mandibulanın 1. molarının anteriorunda ekspansiyon ve septalarla karakterizedir. Ayırıcı tanısında ilk akla gelen Ameloblastoma ise histolojik paterni farklı olsa da radyografik olarak karışabilir; ancak ameloblastoma 3-5. dekatta ve daha ziyade mandibula posterior (ramus/angulus) yerleşimlidir. SDHG'nin ince, dış kortekse dik açılı septaları varken ameloblastomanın septaları daha kaba ve hücresel dağılımı farklıdır.

---

### ÇİFT 13 (Benzerlik: 0.74)

**Soru 1 (ID: 10d9fae4-b246-497a-be3e-19a7e12dfc37)**
Soru Kökü: On yaşında bir çocuk hastada, yüzünde maksiller bölgeden başlayan yavaş büyüyen bir deformite tespit edilmiştir. İntraoral ve radyografik muayenede maksillanın bukkal ve linguale doğru ekspansiyon yaptığı, maksiller sinüsün bir 'buzlu cam' görünümüyle dolduğu saptanmıştır. Ağrı veya patolojik fraktür bulgusu yoktur. Radyografik inceleme sırasında bu lezyonun sınırları hakkında yapılabilecek en doğru yorum aşağıdakilerden hangisidir?
Doğru Şık (B): Lezyon çevre dokularla kademeli olarak karışır ve sınırları normal kemikten net olarak ayırt edilemez.
Açıklama: Bu vaka tipik bir monostotik fibröz displazi olgusudur (10 yaş, yavaş büyüme, asimetri, buzlu cam). Fibröz displazinin en karakteristik radyografik bulgusu, lezyon kemiğinin çevreleyen normal sağlam medüller kemik ile net bir hat çizmeden kademeli olarak birbirine karışmasıdır (blend borders). Lezyon çevresinde radyolüsent rim veya osteosarkomdaki gibi güneş ışını görünümü kesinlikle beklenmez.

**Soru 2 (ID: c6b1517e-16ee-46ce-9961-6e85d14a2b5a)**
Soru Kökü: 14 yaşında erkek hasta, son bir yıldır üst çenesinin sağ tarafında yavaşça büyüyen ve hiç ağrı yapmayan bir şişlik şikayetiyle muayeneye gelmiştir. Yapılan muayenede alveolar proçeste bukkal ve linguale doğru genişleme, belirgin fasiyal asimetri ve panoramik radyografide maksiller sinüsü dolduran, iyi sınırlı tekil 'buzlu cam' manzarası saptanmıştır. İnce bir kortikal kemiğin daima sağlam kaldığı bu tabloda **en olası** teşhis aşağıdakilerden hangisidir?
Doğru Şık (E): Monostotik fibröz displazi
Açıklama: Genç hastalarda fibröz displazinin çenelerdeki en erken belirtisi alveolar proçeste asimetri yaratan, yavaş büyüyen ve ağrısız deformitedir; radyografideki homojen buzlu cam görüntüsü ve monostotik yapısı bu tanıyı kesinleştirir. Santral dev hücreli granüloma ve anevrizmal kemik kisti buzlu cam değil, ekspansif multiloküler/litik radyolüsensi şeklinde izlenir. Cherubism ise sadece çeneleri tutsa da klinik olarak tamamen bilateral (çift taraflı) bir asimetri ile karakterizedir.

---

### ÇİFT 14 (Benzerlik: 0.74)

**Soru 1 (ID: 9419f937-b6ed-4746-8835-cf357917fdbe)**
Soru Kökü: İnfantil kortikal hiperostozis (Caffey Hastalığı) teşhisi konulmuş bir hastada, mandibula dışındaki iskelet bölgelerinde çekilen radyografilerde öncelikle hangi kemik çiftinde karakteristik kalınlaşma saptanması beklenir?
Doğru Şık (C): Klavikula ve Ulna
Açıklama: Caffey hastalığında (infantil kortikal hiperostozis) yumuşak doku şişliklerinin ardından kortikal kemik yapımıyla karakterize olarak en fazla etkilenen kemikler sırasıyla mandibula, klavikula ve ulnadır. Maksilla ve kafatası kemikleri hastalığın klasik tutulum paterninde yer almaz. Sistemik teşhiste bu spesifik kemiklerin radyolojik olarak periostit ve kalınlaşma göstermesi aranır.

**Soru 2 (ID: cc1efda8-d0ca-42cf-9bab-9bb20831c3c1)**
Soru Kökü: Radyografik muayenede çenelerde genel sklerotik reaksiyon izlenen bir çocuk hastada, tanının sklerosteozis veya osteopetrozis yerine infantil kortikal hiperostozise (Caffey Hastalığı) yönelmesi için en güçlü ayırıcı ipucu aşağıdakilerden hangisidir?
Doğru Şık (D): Yumuşak doku şişliği ile başlayıp belirli kemiklerde sınırlı kalınlaşma yapması
Açıklama: İnfantil kortikal hiperostozisin (Caffey) osteopetrozis gibi jeneralize sklerotik tablolardan ayrılan en temel farkı; ateş ve lokal yumuşak doku şişliği ile başlayıp, mandibula, klavikula ve ulna gibi izole kemiklerde dışarıdan belli olan lokal kortikal hipertrofi yapmasıdır. Osteopetroziste ise yumuşak doku iltihabı olmaksızın tüm iskelette sessiz, simetrik ve diffüz bir medüller skleroz vardır. Caffey'nin sistemik belirtileri (ateş/sedimentasyon) tabloyu belirgin şekilde ayırır.

---

### ÇİFT 15 (Benzerlik: 0.74)

**Soru 1 (ID: 1fbdfc73-f0fe-458e-8706-66099028caf3)**
Soru Kökü: 3 yaşındaki çocuk hasta, yanaklarının alt kısmında her iki tarafta simetrik olarak gelişen, ağrısız ve tombul bir yüz görünümü oluşturan kemik şişlikleri nedeniyle başvurmuştur. Radyografik muayenede angulus bölgesinde bilateral masif multiloküler radyolüsensiler izlenen bu hastanın klinik muayenesinde boyun bölgesinde saptanan sertliklerin **en olası** sebebi aşağıdakilerden hangisidir?
Doğru Şık (A): Bilateral olarak genişlemiş reaktif submandibular lenf nodları
Açıklama: Otozomal dominant kalıtımlı Cherubism (melek yüzlü çocuk) hastalığında mandibulanın angulus/ramus bölgesindeki bilateral (simetrik) ekspansif fibroosseöz lezyonların yanı sıra, klinik olarak palpe edilebilen ağrısız submandibular reaktif lenf nodu büyümeleri oldukça klasik bir eşlikçi bulgudur. Bu nodlar metastatik veya enfektif bir malignitenin değil, doğrudan sendromik tablonun bağışıklık yanıtı uzantısıdır.

**Soru 2 (ID: c6b1517e-16ee-46ce-9961-6e85d14a2b5a)**
Soru Kökü: 14 yaşında erkek hasta, son bir yıldır üst çenesinin sağ tarafında yavaşça büyüyen ve hiç ağrı yapmayan bir şişlik şikayetiyle muayeneye gelmiştir. Yapılan muayenede alveolar proçeste bukkal ve linguale doğru genişleme, belirgin fasiyal asimetri ve panoramik radyografide maksiller sinüsü dolduran, iyi sınırlı tekil 'buzlu cam' manzarası saptanmıştır. İnce bir kortikal kemiğin daima sağlam kaldığı bu tabloda **en olası** teşhis aşağıdakilerden hangisidir?
Doğru Şık (E): Monostotik fibröz displazi
Açıklama: Genç hastalarda fibröz displazinin çenelerdeki en erken belirtisi alveolar proçeste asimetri yaratan, yavaş büyüyen ve ağrısız deformitedir; radyografideki homojen buzlu cam görüntüsü ve monostotik yapısı bu tanıyı kesinleştirir. Santral dev hücreli granüloma ve anevrizmal kemik kisti buzlu cam değil, ekspansif multiloküler/litik radyolüsensi şeklinde izlenir. Cherubism ise sadece çeneleri tutsa da klinik olarak tamamen bilateral (çift taraflı) bir asimetri ile karakterizedir.

---

### ÇİFT 16 (Benzerlik: 0.73)

**Soru 1 (ID: 4791e764-d221-43a8-b28c-87cb609c9287)**
Soru Kökü: Genetik iskelet displazileri araştırılan bir çocuk hastanın uzun kemik radyografilerinde medüller boşluğun aşırı radyoopak olduğu, kemiğin çapında artma olduğu ve metafizik bölgelerde çan şeklini andıran 'Erlanmayer deformitesi' saptanmıştır. Bu hastanın diş hekimliği klinik muayenesinde aşağıdaki bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (A): Sürme gecikmesi, lamina dura kalınlaşması ve çürüğe yatkınlık
Açıklama: Uzun kemiklerdeki artmış dansite ve Erlanmayer deformitesi osteopetrozisin klasik bulgularıdır. Osteopetrozis hastalarında kemik remodelingi kusurlu olduğu için dişlerin sürmesi gecikir, lamina dura kalınlaşır (ileri safhada kaybolur), diş formasyonu bozulur ve dişler çürüğe yatkın hale gelir.

**Soru 2 (ID: 7818dca5-0586-4fc2-8359-a175c6bb09d1)**
Soru Kökü: Çenelerde kemik dansitesi artışı şüphesiyle muayene edilen 15 yaşındaki bir hastada, osteopetrozis lehine yorumlanacak radyografik bulgulardan biri aşağıdakilerden hangisi **olamaz**?
Doğru Şık (A): Dişlerde erken sürme ve köklerde hiperkalsifikasyon
Açıklama: Osteopetrozis hastalarında kemiğin aşırı yoğunlaşmasına bağlı olarak dişlerde erken değil, aksine gecikmiş erüpsiyon, malforme kökler ve kalsifikasyon eksikliği görülür. Lamina dura ve mandibular kanal duvarı gibi kortikal yapılar karakteristik olarak belirginleşip kalınlaşır. Hastalığın terminal evrelerinde bu yapılar çevredeki masif sklerotik kemik dokusuyla birleşerek radyografik olarak ayırt edilemez hale gelir.

---

### ÇİFT 17 (Benzerlik: 0.73)

**Soru 1 (ID: b729d749-33c3-4679-b8fb-97bc502bb43c)**
Soru Kökü: Radyografik olarak çenelerde yaygın radyoopasite artışı, artmış kemik dansitesi ve lamina dura değişiklikleri saptanan bir hastada; hekim ayırıcı tanıda osteopetrozis ile birlikte aşağıdaki hastalık gruplarından öncelikli olarak hangilerini değerlendirmelidir?
Doğru Şık (B): Sklerosteozis ve infantil kortikal hiperostozis
Açıklama: Çenelerde yaygın skleroz ve artmış kemik dansitesi tablosu ile karşılaşıldığında osteopetrozis için en güçlü ayırıcı tanılar sklerosteozis ve infantil kortikal hiperostozistir. Fibröz displazi buzlu cam manzarası, anevrizmal kemik kisti ise sabun köpüğü şeklinde radyolüsent genişleme yapar. Osteopetroziste spongiyoz ile kortikal kemik ayrılamayacak derecede homojen bir densite artışı sergiler.

**Soru 2 (ID: cc1efda8-d0ca-42cf-9bab-9bb20831c3c1)**
Soru Kökü: Radyografik muayenede çenelerde genel sklerotik reaksiyon izlenen bir çocuk hastada, tanının sklerosteozis veya osteopetrozis yerine infantil kortikal hiperostozise (Caffey Hastalığı) yönelmesi için en güçlü ayırıcı ipucu aşağıdakilerden hangisidir?
Doğru Şık (D): Yumuşak doku şişliği ile başlayıp belirli kemiklerde sınırlı kalınlaşma yapması
Açıklama: İnfantil kortikal hiperostozisin (Caffey) osteopetrozis gibi jeneralize sklerotik tablolardan ayrılan en temel farkı; ateş ve lokal yumuşak doku şişliği ile başlayıp, mandibula, klavikula ve ulna gibi izole kemiklerde dışarıdan belli olan lokal kortikal hipertrofi yapmasıdır. Osteopetroziste ise yumuşak doku iltihabı olmaksızın tüm iskelette sessiz, simetrik ve diffüz bir medüller skleroz vardır. Caffey'nin sistemik belirtileri (ateş/sedimentasyon) tabloyu belirgin şekilde ayırır.

---

### ÇİFT 18 (Benzerlik: 0.73)

**Soru 1 (ID: 6c0fce86-5001-49d8-b3b7-075a04c7e378)**
Soru Kökü: Osteopetrozis hastalarında iskelet sisteminde görülen yaygın osteoskleroz, diş hekimliği klinik pratiğinde önemli zorluklar yaratır. Bu hastalarda diş çekimi sonrası rutin vakalara göre daha yüksek osteomiyelit riski bulunmasının temel hücresel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): Osteoklast disfonksiyonuna bağlı medüller kanlanma kaybı
Açıklama: Osteopetrozisin mekanizması osteoklast yetersizliği ve buna bağlı kemik rezorpsiyonunun durmasıdır. Sürekli apozisyon devam ettiği için spongioz kemik iliği boşlukları kapanır (obliterasyon). Kan damarlarını ve immun hücreleri barındıran medüller yapı ortadan kalktığı için kemik tamamen avasküler ve iskemiğe eğilimli bir yapıya dönüşür. Bu durum minimal bir travmada (diş çekimi) iyileşememe ve pürülan osteomiyelit gelişimi riskini tırmandırır.

**Soru 2 (ID: 7d288068-7869-4862-aa48-5e514ecc6947)**
Soru Kökü: Osteopetrozis teşhisi konmuş bir hastanın kemik yapısındaki aşırı yoğunlaşmanın ve medüller obliterasyonun temelinde yatan patofizyolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (E): Osteoklast yetersizliğine bağlı fizyolojik kemik rezorpsiyonunun olmaması
Açıklama: Osteopetroziste temel patofizyolojik mekanizma, osteoklastların yetersizliği nedeniyle fizyolojik kemik yıkımının gerçekleşememesidir. Fibröz displazide kemik iliği yerini fibröz dokuya bırakırken, osteopetroziste mevcut kemik dokusu eritilemediği için sürekli birikir ve aşırı yoğunlaşır. Kemiğin organizasyonu bozuk olduğu için patolojik kırıklara yatkınlık son derece yüksektir.

---

### ÇİFT 19 (Benzerlik: 0.72)

**Soru 1 (ID: 7818dca5-0586-4fc2-8359-a175c6bb09d1)**
Soru Kökü: Çenelerde kemik dansitesi artışı şüphesiyle muayene edilen 15 yaşındaki bir hastada, osteopetrozis lehine yorumlanacak radyografik bulgulardan biri aşağıdakilerden hangisi **olamaz**?
Doğru Şık (A): Dişlerde erken sürme ve köklerde hiperkalsifikasyon
Açıklama: Osteopetrozis hastalarında kemiğin aşırı yoğunlaşmasına bağlı olarak dişlerde erken değil, aksine gecikmiş erüpsiyon, malforme kökler ve kalsifikasyon eksikliği görülür. Lamina dura ve mandibular kanal duvarı gibi kortikal yapılar karakteristik olarak belirginleşip kalınlaşır. Hastalığın terminal evrelerinde bu yapılar çevredeki masif sklerotik kemik dokusuyla birleşerek radyografik olarak ayırt edilemez hale gelir.

**Soru 2 (ID: cc1efda8-d0ca-42cf-9bab-9bb20831c3c1)**
Soru Kökü: Radyografik muayenede çenelerde genel sklerotik reaksiyon izlenen bir çocuk hastada, tanının sklerosteozis veya osteopetrozis yerine infantil kortikal hiperostozise (Caffey Hastalığı) yönelmesi için en güçlü ayırıcı ipucu aşağıdakilerden hangisidir?
Doğru Şık (D): Yumuşak doku şişliği ile başlayıp belirli kemiklerde sınırlı kalınlaşma yapması
Açıklama: İnfantil kortikal hiperostozisin (Caffey) osteopetrozis gibi jeneralize sklerotik tablolardan ayrılan en temel farkı; ateş ve lokal yumuşak doku şişliği ile başlayıp, mandibula, klavikula ve ulna gibi izole kemiklerde dışarıdan belli olan lokal kortikal hipertrofi yapmasıdır. Osteopetroziste ise yumuşak doku iltihabı olmaksızın tüm iskelette sessiz, simetrik ve diffüz bir medüller skleroz vardır. Caffey'nin sistemik belirtileri (ateş/sedimentasyon) tabloyu belirgin şekilde ayırır.

---

### ÇİFT 20 (Benzerlik: 0.72)

**Soru 1 (ID: 3f7b3669-2570-4786-8200-c4d9b82bf8b2)**
Soru Kökü: Çene kemiklerini etkileyen gelişimsel bir patoloji olan Cherubism ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Etkilenen hastalarda süt dişlerinin gecikmiş erüpsiyonu ve daimi diş retansiyonu birincil bulgudur.
Açıklama: Cherubism, çene kemiklerinde bilateral genişlemeye yol açan kistik lezyonlara bağlı olarak daimi diş germlerinin itilmesine/deplase olmasına neden olur. Süt dişlerinde ise erüpsiyon gecikmesi değil, aksine kemik desteğinin displastik doku ile replase olmasına bağlı olarak 'erken düşme' (prematüre kayıp) karakteristiktir. Hastalık yalnız çenelere lokalizedir ve melek yüz görünümü ile bilinir.

**Soru 2 (ID: 57ff995d-08ac-4eaf-b8eb-715c8fc8a9b5)**
Soru Kökü: Cherubism ve fibröz displazinin çenelerdeki radyolojik görünümleri birbirine benzeyebilir. Her iki hastalıkta da ekspansif kemik lezyonları izlenir. Aşağıdakilerden hangisi Cherubism'i fibröz displaziden ayıran özelliklerden biri **değildir**?
Doğru Şık (D): Fibröz displazi lezyonlarının erişkinlikte gerileyerek (regrese) kaybolması
Açıklama: Cherubism ergenlik ve erişkinlik döneminde aktif büyümesini durdurur ve gerilemeye (regrese olmaya) başlar. Fibröz displazi ise erişkinlikte stabil hale gelir, ancak lezyon kendiliğinden regrese olup kaybolmaz. Diğer tüm şıklar iki lezyonu ayırmada doğru kriterlerdir.

---

### ÇİFT 21 (Benzerlik: 0.72)

**Soru 1 (ID: 1ecf62d9-bd89-449c-8242-c6a0378d07aa)**
Soru Kökü: Yetişkinlerde, özellikle kadınlarda daha sık görülen, maksillada hızlı bukkolingual kemik ekspansiyonuna ve dişlerde harekete yol açabilen anevrizmal kemik kistinin (AKK) klinik ve lokal bulgularıyla ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Etkilenen komşu dişlerde pulpa dokusunun dolaşımı sekteye uğrar ve yaygın devitalizasyon meydana gelir.
Açıklama: Anevrizmal kemik kisti (AKK) içi kanla dolu kavernöz boşluklardan oluşan ve kemiği baloncuk gibi şişiren devasa kistik bir lezyondur. Bu masif lokal genişlemeye rağmen, bölgede bulunan dişlerin mekanik olarak yeri değişebilir ve köklerinde dış resorpsiyon gelişebilir; ancak ilgili dişler canlılıklarını kaybetmezler (vitalite kaybı YOKTUR). Devitalizasyon malign tümör veya enfeksiyon kaynaklı osteolizlerin karakteristiğidir.

**Soru 2 (ID: 209e7074-9b9f-4822-b23d-edbb42581555)**
Soru Kökü: Anevrizmal kemik kistinin (AKK) 'olgun dönemi'ne ait klinik ve radyolojik özellikler değerlendirildiğinde, aşağıdakilerden hangisi bu evrenin karakteristik bulgularından biri **değildir**?
Doğru Şık (E): İlgili dişlerde vitalite kaybı
Açıklama: AKK, gelişimsel bir reaktif lezyondur ve kök rezorbsiyonu ile dişlerde yer değiştirmeye neden olabilmesine rağmen, etkilenen bölgedeki dişler vitalitelerini korurlar. İlgili dişlerde vitalite kaybı beklenmez; bu özellik apikal rarefying osteitis gibi inflamatuar lezyonlar için tipiktir.

---

### ÇİFT 22 (Benzerlik: 0.72)

**Soru 1 (ID: 209e7074-9b9f-4822-b23d-edbb42581555)**
Soru Kökü: Anevrizmal kemik kistinin (AKK) 'olgun dönemi'ne ait klinik ve radyolojik özellikler değerlendirildiğinde, aşağıdakilerden hangisi bu evrenin karakteristik bulgularından biri **değildir**?
Doğru Şık (E): İlgili dişlerde vitalite kaybı
Açıklama: AKK, gelişimsel bir reaktif lezyondur ve kök rezorbsiyonu ile dişlerde yer değiştirmeye neden olabilmesine rağmen, etkilenen bölgedeki dişler vitalitelerini korurlar. İlgili dişlerde vitalite kaybı beklenmez; bu özellik apikal rarefying osteitis gibi inflamatuar lezyonlar için tipiktir.

**Soru 2 (ID: 2de15905-4fcf-48e3-baf1-ca9cd311de6d)**
Soru Kökü: Anevrizmal kemik kistinin (AKK) kemik içerisindeki radyografik ve klinik serüveni üç aşamalı bir evreleme gösterir. Bu lezyonun 'başlangıç dönemi' adı verilen erken evresi, radyografik olarak aşağıdaki bulgulardan hangisiyle karakterizedir?
Doğru Şık (C): İçerisinde herhangi bir sınır kortikasyonu (belirginlik) barındırmayan saf litik alan
Açıklama: Anevrizmal kemik kistinin patolojik gelişiminde 1. evre (başlangıç) kemikte sınırları net çizilemeyen, tamamen osteolitik (litik) yıkım alanından ibarettir. 2. evre (büyüme dönemi) yıkımın artıp kemiği genişlettiği aşamadır. 3. evre (olgun dönem) ise lezyon sınırlarının kortikasyon gösterdiği ve lezyon içinde klasik 'sabun köpüğü' (soap bubble) septalarının belirdiği final aşamasıdır.

---

### ÇİFT 23 (Benzerlik: 0.72)

**Soru 1 (ID: 57ff995d-08ac-4eaf-b8eb-715c8fc8a9b5)**
Soru Kökü: Cherubism ve fibröz displazinin çenelerdeki radyolojik görünümleri birbirine benzeyebilir. Her iki hastalıkta da ekspansif kemik lezyonları izlenir. Aşağıdakilerden hangisi Cherubism'i fibröz displaziden ayıran özelliklerden biri **değildir**?
Doğru Şık (D): Fibröz displazi lezyonlarının erişkinlikte gerileyerek (regrese) kaybolması
Açıklama: Cherubism ergenlik ve erişkinlik döneminde aktif büyümesini durdurur ve gerilemeye (regrese olmaya) başlar. Fibröz displazi ise erişkinlikte stabil hale gelir, ancak lezyon kendiliğinden regrese olup kaybolmaz. Diğer tüm şıklar iki lezyonu ayırmada doğru kriterlerdir.

**Soru 2 (ID: 723498ff-c08b-4368-af23-ae45ab8785c0)**
Soru Kökü: Fibröz displazi lezyonlarının radyolojik olarak çenelerde genişleme yapması durumunda, bu görünümün kronik osteomiyelitten ayrımını sağlayan en güvenilir radyolojik ipucu aşağıdakilerden hangisidir?
Doğru Şık (E): Osteomiyelitte yeni kemiğin periosttan gelmesi nedeniyle orijinal korteksin hala seçilebilmesi
Açıklama: Kronik osteomiyelitte çenede genişleme periosteal yeni kemik yapımı (soğan zarı görünümü) ile olur, bu nedenle alttaki orijinal kortikal sınır genellikle radyografide hala izlenebilir. Fibröz displazide ise genişleme içten (trabeküler kemikten) dışa doğrudur ve orijinal korteks yerini displastik kemik dokusuna bırakarak incelir.

---

### ÇİFT 24 (Benzerlik: 0.72)

**Soru 1 (ID: 309e0d0e-ea78-467f-a531-d200b6907970)**
Soru Kökü: Periapikal semental displazinin (PSD) mikst veya kalsifiye (radyoopak) dönem lezyonları, özellikle genç yetişkinlerde odontoma ile karışabilir. Bir odontomanın radyografik görüntüsünü PSD'nin üçüncü dönem (kalsifiye) lezyonlarından kesin olarak ayırt etmeyi sağlayan bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): İnternal kalsifiye yapının diş benzeri (dentikül) formasyonlara veya belirgin dentin/mine yoğunluğuna sahip olması
Açıklama: Kompound odontomalar, embriyolojik olarak ektodermal/mezodermal orijinli olup radyografide mine ve dentin anatomik yoğunluğuna sahip, minyatür diş benzeri yapılardan (dentikül) oluşur. PSD'nin üçüncü dönemindeki kalsifiye (radyoopak) odaklar ise mine radyoopasitesine veya anatomik diş formuna sahip olmayan tamamen amorf displastik çimento-kemik birikimleridir. İnce radyolüsent kapsül PSD'de de izlenebilir.

**Soru 2 (ID: 324eda07-542b-4a3c-9b46-33783bfed3f4)**
Soru Kökü: Rutin kontrol sırasında diş hekimi, 40 yaşındaki bir kadın hastanın alt çene ön bölgesindeki dişlerin apekslerinde kalsifikasyon evresinde olan iyi sınırlı radyopasiteler tespit etmiştir. Lezyonun sementoblastom yerine periapikal semental displazi (sementoma) olarak değerlendirilmesinde radyografik incelemedeki **en güvenilir** ayırıcı kriter aşağıdakilerden hangisidir?
Doğru Şık (B): Sementoblastomda lezyonun doğrudan dişin kök yüzeyine tam bağlı (kaynaşmış) olması ve sıklıkla kökü rezorbe etmesi
Açıklama: Sementoblastom gerçek bir odontojenik neoplazm olup dişin sement dokusundan köken alır; bu nedenle radyografide lezyon doğrudan dişin kök yüzeyine bağlıdır (kök lezyonun içinde kaybolur) ve sıklıkla masif kök rezorpsiyonuna yol açar. Sementoma (periapikal semental displazi) ise reaktif displastik bir süreçtir, kalsifiye kitle ile vital diş kökü arasında yapısal bir kaynaşma bulunmaz ve kökü rezorbe etmez.

---

### ÇİFT 25 (Benzerlik: 0.71)

**Soru 1 (ID: 7811f576-4311-43d6-9c19-cd2aba8effea)**
Soru Kökü: İskelet sisteminde kemik yapım hızının arttığı veya yıkımın azaldığı dens kemik hastalıkları (osteoskleroz, osteopetrozis vb.) ile fibröz dokunun displastik kemik ürettiği (fibröz displazi vb.) patolojiler karşılaştırıldığında, her iki grupta da görülebilen ortak radyografik sekonder özellik aşağıdakilerden hangisidir?
Doğru Şık (A): Alveolar lamina dura çizgisinin takip edilemez hale gelmesi
Açıklama: Osteopetrozis gibi durumlarda spongioz kemik çok sklerotik bir yapıya dönüşerek lamina duradan daha radyoopak hale geldiği için lamina dura izlenemez (kemik içine gömülür). Fibröz displazide ve Paget hastalığında ise kemik medullası displastik bir fibröz dokuya dönüştüğü ve yapısal mimarisini kaybettiği için periodontal aralığı çevreleyen kortikal kemik sınırı (lamina dura) yine bütünlüğünü kaybederek radyografik olarak kaybolur. Bu bulgu, her iki uçtaki mekanizma için de ortak bir destrüksiyon sekresidir.

**Soru 2 (ID: aef39701-fd5c-4661-9c50-6fa0c84dbc12)**
Soru Kökü: Fibröz displazi lezyonunun olgunlaşma evresinde, fibröz bağ dokusu zemininde eşit büyüklükte displastik kemik trabeküllerinin sayısının ve hacminin artmasıyla oluşan, özellikle üst çenedeki lezyonun spesifik tanınmasını sağlayan karakteristik radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Portakal kabuğu (orange peel) görünümü
Açıklama: Fibröz displazide histopatolojik düzeyde birbirine eşit büyüklükteki C şeklinde kemik trabeküllerinin hücresel fibröz stroma içine yerleşmesi, makroskobik radyografide 'buzlu cam' ya da klasik 'portakal kabuğu' (orange peel) pütürlü görünümünü oluşturur. Atılmış pamuk görünümü Paget hastalığında kalsifiye kitleler nedeniyle görülürken; güneş ışını ve güve yeniği manzaraları sırasıyla osteosarkom ve osteomiyelit/malignite göstergesidir.

---

### ÇİFT 26 (Benzerlik: 0.71)

**Soru 1 (ID: aef39701-fd5c-4661-9c50-6fa0c84dbc12)**
Soru Kökü: Fibröz displazi lezyonunun olgunlaşma evresinde, fibröz bağ dokusu zemininde eşit büyüklükte displastik kemik trabeküllerinin sayısının ve hacminin artmasıyla oluşan, özellikle üst çenedeki lezyonun spesifik tanınmasını sağlayan karakteristik radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Portakal kabuğu (orange peel) görünümü
Açıklama: Fibröz displazide histopatolojik düzeyde birbirine eşit büyüklükteki C şeklinde kemik trabeküllerinin hücresel fibröz stroma içine yerleşmesi, makroskobik radyografide 'buzlu cam' ya da klasik 'portakal kabuğu' (orange peel) pütürlü görünümünü oluşturur. Atılmış pamuk görünümü Paget hastalığında kalsifiye kitleler nedeniyle görülürken; güneş ışını ve güve yeniği manzaraları sırasıyla osteosarkom ve osteomiyelit/malignite göstergesidir.

**Soru 2 (ID: bd65bae4-7cd9-4221-bc4b-59d3df122023)**
Soru Kökü: Fibröz displazinin radyografik bulguları ile ilgili olarak aşağıdakilerden hangisi **beklenmez**?
Doğru Şık (B): Lezyon sınırlarının radyografik olarak keskin, kortike ve net bir şekilde izlenebilmesi
Açıklama: Fibröz displazi (FD) lokalize bir kemik gelişimi anomalisidir ve lezyonun sınırları normal medüller kemik ile net bir geçiş yapmadan (blend into surrounding bone) karışır. Bu sınır belirsizliği, FD'yi iyi sınırlı ve kortike olan Ossifiye Fibroma'dan ayıran en kritik radyografik özelliktir. Buzlu cam görünümü, sinüs obliterasyonu ve lamina dura kaybı tipik FD özellikleridir.

---

### ÇİFT 27 (Benzerlik: 0.71)

**Soru 1 (ID: 93dbfbd9-a251-42ca-a334-7f1e59099a42)**
Soru Kökü: Kirk iki yaşında kadın hasta, rutin diş kontrolü sırasında çekilen panoramik radyografisinde bilateral mandibular kanalın üst kısmında çok sayıda pamuk atığı (cotton-wool) benzeri radyopak kitleler saptanması üzerine refere edilmiştir. İlgili bölgelerdeki dişler vitaldir ve hastanın iskeletsel başka bir semptomu yoktur. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Florid osseöz displazi
Açıklama: Florid osseöz displazi (FOD), özellikle 40 yaş civarı kadınlarda bilateral olarak çenelerde (çoğunlukla mandibular kanal üzerinde) görülen, vital dişlerle ilişkili pamuk atığı tarzı lezyonlardır. Paget hastalığı da benzer pamuk atığı görünümü verse de, FOD'un aksine sadece çenelerle sınırlı kalmaz, kafa kemikleri gibi diğer iskelet yapılarını da etkiler ve daha çok ileri yaş erkeklerde görülür. Dişlerin vital olması osteomiyelit ayrımında da yol göstericidir.

**Soru 2 (ID: fb156eba-335d-4ad1-895f-77678a0fca52)**
Soru Kökü: 43 yaşında kadın hasta, alt çenesinin sağ tarafında dönemsel olarak artan ağrı ve zaman zaman hissettiği nabız atar tarzdaki şişlik nedeniyle başvurmuştur. Klinik muayenede bölgedeki dişetinde pürülan akıntı sızan bir fistül yolu izlenmiştir. Panoramik grafisinde ise dişler vital olmasına rağmen, dört kadranı birden simetrik olarak etkileyen, amorf yapıda pamuk atığı görünümlü yaygın radyoopak lezyonlar saptanmıştır. Bu hastadaki fistül akıntısı ve enflamasyonun **en muhtemel** altında yatan nedeni aşağıdakilerden hangisidir?
Doğru Şık (E): Florid osseöz displazi zemininde gelişen avasküler yapının tetiklediği osteomiyelit
Açıklama: Dört kadranı da etkileyen amorf radyoopak (pamuk atığı) lezyonlar ve vital dişler Florid Osseöz Displazinin (FOD) karakteristik bulgusudur. FOD hastalarındaki bu yoğun sklerotik kemik bölgeleri ciddi düzeyde avaskülerdir, bu da dokuyu enfeksiyonlara karşı savunmasız kılar ve çekim veya travma olmadan bile sekonder olarak enfekte olup süpüratif kronik osteomiyelite (fistül yolu ile) dönüşmeye son derece eğilimlidir. Fibröz displazi veya Paget hastalığı bu lokalize spesifik fistülasyon paterninden ziyade fonksiyonel asimetri gösterir.

---

### ÇİFT 28 (Benzerlik: 0.71)

**Soru 1 (ID: 2b4cbbe0-c286-490a-adeb-cdc1a656dd44)**
Soru Kökü: 52 yaşında kadın hastada radyografik olarak mandibula symphysis bölgesinde santral dev hücreli granüloma (SDHG) şüphesi uyandıran uniloküler litik bir kitle saptanmıştır. Alınan biyopsinin patolojik raporu 'Dev hücreli lezyon' olarak geldiği için hekim teşhisini hiperparatiroidizme sekonder gelişen 'Brown Tümörü' olarak güncellemek istemektedir. Hastada Brown tümörü şüphesini doğrulamak veya dışlamak için klinikte ilk olarak izlenmesi gereken spesifik laboratuvar belirteçleri aşağıdakilerden hangisidir?
Doğru Şık (C): Serum kalsiyum, fosfor ve alkalen fosfataz seviyeleri
Açıklama: Hiperparatiroidizme bağlı çene lezyonları (Brown Tümörleri), radyografik ve mikroskobik (histolojik dev hücreler) olarak SDHG ile tamamen aynıdır, ayrım yapılamaz. Ancak hasta profili genellikle daha yaşlıdır (50'ler). SDHG tanısı alan her hasta altta yatan bir paratiroid patolojisini atlamamak için mutlaka serum kalsiyum (artar), fosfor (düşer) ve alkalen fosfataz (artar) açısından rutin teste tabi tutulmalıdır.

**Soru 2 (ID: 9c035912-4231-494c-857d-f2df9d0c1139)**
Soru Kökü: Onaltı yaşındaki bir hastanın panoramik radyografisinde sağ mandibula 1. molar dişin anteriorunda lokalize, korteksi ekspanse eden ve ince kaba septaları bulunan multiloküler radyolüsent bir lezyon tespit edilmiştir. İlgili bölgedeki dişler vitaldir ancak mobilite mevcuttur. Biyopsi sonucu 'Santral Dev Hücreli Granülom' (SDHG) olarak raporlanan bu hastada, ayırıcı tanı için rutin olarak hangi sistemik hastalık yönünden tetkik istenmelidir?
Doğru Şık (B): Hiperparatiroidizm
Açıklama: SDHG ile hiperparatiroidizmin 'Brown Tümörü' histopatolojik ve radyografik olarak birbiriyle tamamen aynı görünümdedir. Santral dev hücreli granülom tanısı konan her hastada, altında yatan olası bir hiperparatiroidizmi dışlamak için serum kalsiyum, fosfor ve parathormon (PTH) düzeyleri rutin olarak kontrol edilmelidir. Ameloblastoma veya mikzoma radyografik olarak karışabilse de, sistemik test gerektiren patoloji hiperparatiroidizmdir.

---

### ÇİFT 29 (Benzerlik: 0.71)

**Soru 1 (ID: 723498ff-c08b-4368-af23-ae45ab8785c0)**
Soru Kökü: Fibröz displazi lezyonlarının radyolojik olarak çenelerde genişleme yapması durumunda, bu görünümün kronik osteomiyelitten ayrımını sağlayan en güvenilir radyolojik ipucu aşağıdakilerden hangisidir?
Doğru Şık (E): Osteomiyelitte yeni kemiğin periosttan gelmesi nedeniyle orijinal korteksin hala seçilebilmesi
Açıklama: Kronik osteomiyelitte çenede genişleme periosteal yeni kemik yapımı (soğan zarı görünümü) ile olur, bu nedenle alttaki orijinal kortikal sınır genellikle radyografide hala izlenebilir. Fibröz displazide ise genişleme içten (trabeküler kemikten) dışa doğrudur ve orijinal korteks yerini displastik kemik dokusuna bırakarak incelir.

**Soru 2 (ID: 956100d5-6df6-4910-badb-108126d78fbb)**
Soru Kökü: Çenelerin fibroosseöz lezyonlarından olan monostotik fibröz displazi ile santral ossifiye fibromanın ayırıcı tanısında, her iki lezyonun kemik içindeki büyüme ve genişleme paterni önemli bir kriterdir. Bu bağlamda, santral ossifiye fibromayı fibröz displaziden ayıran klinik/radyolojik büyüme karakteristiği aşağıdakilerden hangisidir?
Doğru Şık (C): Merkez üssü etrafında eş merkezli (konsantrik) ekspansiyon yapması
Açıklama: Santral ossifiye fibroma tümör benzeri bir doğaya sahiptir ve iyi sınırlı olup kendi merkez üssünden dışa doğru eş merkezli (konsantrik) olarak yavaş ekspansiyon yapar. Fibröz displazi ise çevredeki kemikle sınırları karışan, sınırları belirsiz, lineer ya da daha asimetrik şekilde medüller boşluğu doldurarak genişleyen bir hamartomatöz proliferasyondur.

---

### ÇİFT 30 (Benzerlik: 0.71)

**Soru 1 (ID: 715ffce4-1eb2-4afd-bc59-a62e99c1a1b6)**
Soru Kökü: Aşağıdaki kemik lezyonlarından hangisinin radyografik olarak internal yapısında ince, düz, granüler ve lezyonun periferik sınırına 'dik' açıyla yönlenmiş karakterize kaba olmayan septalar bulunması, tanıda belirgin bir yönlendiricidir?
Doğru Şık (D): Santral Dev Hücreli Granülom
Açıklama: Santral Dev Hücreli Granülom'un (SDHG) radyografisinde karakteristik özelliklerinden biri, korteksi ekspanse eden düzgün lezyon sınırından içeriye, kemiğin dış korteksine 'dik' açıyla uzanan ince, granüler görünümlü septalardır. Ameloblastoma daha kalın/kaba septalara sahipken, odontojenik mikzoma düz ve çok daha keskin ('X', 'Y' harfi benzeri) geometrik septalarla karakterizedir.

**Soru 2 (ID: d7f9654d-25ac-43aa-a43f-fbcd25627753)**
Soru Kökü: Aşağıdaki lezyonlardan hangisi, histopatolojik olarak birbirlerine çok benzemelerine rağmen, hastanın yaşı ve radyografik özellikleriyle birbirinden ayrılır; biri daha çok 20 yaş altında, mandibula anteriorunda multiloküler litik lezyon yaparken, diğeri genellikle 30-50 yaş arası erişkinlerde ve mandibula posteriorunda korteks ekspansiyonu yapar?
Doğru Şık (B): Santral dev hücreli granülom - Ameloblastoma
Açıklama: Santral Dev Hücreli Granülom (SDHG) genellikle gençlerde/adölesanlarda mandibulanın 1. molarının anteriorunda ekspansiyon ve septalarla karakterizedir. Ayırıcı tanısında ilk akla gelen Ameloblastoma ise histolojik paterni farklı olsa da radyografik olarak karışabilir; ancak ameloblastoma 3-5. dekatta ve daha ziyade mandibula posterior (ramus/angulus) yerleşimlidir. SDHG'nin ince, dış kortekse dik açılı septaları varken ameloblastomanın septaları daha kaba ve hücresel dağılımı farklıdır.

---

### ÇİFT 31 (Benzerlik: 0.71)

**Soru 1 (ID: 75576dd2-644f-4f11-b66c-f7f538d43ce2)**
Soru Kökü: Kronik tekrarlayan çene osteomiyeliti, bazı fibroosseöz kemik lezyonlarının sekonder bir komplikasyonu olarak ortaya çıkabilir. Aşağıdaki lezyonlardan hangisinde osteomiyelit geliştiğinde, radyografik olarak lezyonun kendi semental kitlelerinin sekestre kemik odaklarıyla karışması nedeniyle ayırıcı tanı büyük zorluk içerir?
Doğru Şık (D): Florid osseöz displazi
Açıklama: Florid osseöz displazi (FOD) evresi ilerledikçe sklerotik sement benzeri kitleler avasküler hale gelir ve lokal bir enfeksiyon varlığında hızla osteomiyelite ilerleyebilir. Osteomiyelit geliştiğinde, FOD'nin zaten var olan radyoopak semental kitleleri, osteomiyelitin nekrotik kemik parçaları olan 'sekestrlere' çok benzer. Bu durum radyolojik ve klinik ayrımı zorlaştırır. Fibröz displazi veya Cherubism gibi patolojiler litik/displastik zeminli olduklarından belirgin semental sekestr-benzeri kitleler üretmezler.

**Soru 2 (ID: 76e17fbe-712f-414d-aaa4-f014b51aa3e1)**
Soru Kökü: Sıklıkla orta yaşlı kadınlarda asemptomatik olarak tespit edilen Florid Osseöz Displazi (FOD) lezyonlarının, enfekte olduklarında kronik osteomiyelitten ayrımını yapmak zorlaşabilir. Aşağıdakilerden hangisi FOD lehine olan ayırıcı tanılardan biridir?
Doğru Şık (E): FOD'un sıklıkla çenelerde birden fazla kadranı eşzamanlı etkilemesi
Açıklama: FOD lezyonları tipik olarak bilateraldir ve sıklıkla her iki çenede 4 kadranı birden tutar. Kronik osteomiyelit ise genellikle tek taraflıdır ve çenenin sadece bir segmentinde sınırlı kalır. FOD sekonder olarak enfekte olduğunda sekestr benzeri kitleler görülebilir, bu nedenle yaygınlık durumu önemli bir ayırıcı kriterdir.

---

### ÇİFT 32 (Benzerlik: 0.70)

**Soru 1 (ID: 43616078-34fd-4e6a-bf31-c73b2c3bd527)**
Soru Kökü: Dört yaşındaki erkek çocuk, polidipsi ve poliüri şikayetleriyle pediatri kliniğine başvurmuştur. Fizik muayenede belirgin ekzoftalmi saptanan hastanın panoramik radyografisinde çenelerde kemik yıkımı alanları ve kökleri rezorbe olmuş 'yüzen dişler' izlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Hand-Schüller-Christian hastalığı
Açıklama: Hastadaki diyabetes insipidus (polidipsi/poliüri), ekzoftalmi ve litik kemik lezyonları (yüzen dişler) klasik Hand-Schüller-Christian hastalığı triadını oluşturur. Eozinofil granülomda sadece kemik lezyonu varken, Letterer-Siwe formunda akut yaygın viseral tutulum ve sıklıkla fatal seyir gözlenir.

**Soru 2 (ID: a1cebfb0-cdaf-4d0e-8d4b-4b39ca1954bf)**
Soru Kökü: Dört yaşındaki hasta, dişlerde sallanma şikayetiyle başvurmuştur. Anamnezden süt dişlerinde yakın zamanda nedensiz dökülmeler olduğu öğrenilmiştir. Radyografik incelemede alveoler proçeste kemik yıkımı ve boşlukta süzülen yüzen dişler izlenmektedir. Bu klinik tabloda öncelikli olarak şüphelenilmesi gereken patoloji aşağıdakilerden hangisidir?
Doğru Şık (E): Langerhans hücreli histiositozis
Açıklama: Süt dişlerinde enflamatuar bir neden olmaksızın açıklanamayan erken dökülmeler ve radyografide kemik desteğini kaybetmiş 'yüzen diş' manzarası çeneleri tutan Langerhans hücreli histiositozisin en klasik dental prezantasyonudur. Fibröz displazi dişi deplase edip kök rezorpsiyonu yapsa da litik yüzen diş tablosu oluşturmaz. Özellikle premolar bölgenin distalinde başlayan bu tip agresif alveoler harabiyet her zaman malign veya histiositik süreçleri düşündürmelidir.

---

### ÇİFT 33 (Benzerlik: 0.70)

**Soru 1 (ID: 03d71403-ab47-41e0-9b0c-e51f62c97f3f)**
Soru Kökü: Paget hastalığı ve Florid Osseöz Displazi (FOD) radyografik olarak pamuk atığı (cotton-wool) benzeri radyopasiteler oluşturabilir. Aşağıdaki radyografik veya klinik bulgulardan hangisi lezyonun Paget hastalığı **olmadığını**, FOD olduğunu destekler niteliktedir?
Doğru Şık (D): Radyopak lezyonların ince, düzgün bir radyolüsent kapsül ile çevrelenmiş olması
Açıklama: Florid Osseöz Displazi'de (FOD) semento-osseöz kitlelerin etrafını saran bir radyolüsent kapsül (fibroz bağ dokusu alanı) bulunurken, sistemik bir hastalık olan Paget'te kemik sınırları daha difüzdür ve böyle bir radyolüsent rim (kapsül) bulunmaz. Ayrıca Paget çeneleri genişletip diğer iskelet kemiklerini de etkilerken, FOD ekspansiyon yapmaz ve kafa dahil başka kemikleri tutmaz.

**Soru 2 (ID: 76e17fbe-712f-414d-aaa4-f014b51aa3e1)**
Soru Kökü: Sıklıkla orta yaşlı kadınlarda asemptomatik olarak tespit edilen Florid Osseöz Displazi (FOD) lezyonlarının, enfekte olduklarında kronik osteomiyelitten ayrımını yapmak zorlaşabilir. Aşağıdakilerden hangisi FOD lehine olan ayırıcı tanılardan biridir?
Doğru Şık (E): FOD'un sıklıkla çenelerde birden fazla kadranı eşzamanlı etkilemesi
Açıklama: FOD lezyonları tipik olarak bilateraldir ve sıklıkla her iki çenede 4 kadranı birden tutar. Kronik osteomiyelit ise genellikle tek taraflıdır ve çenenin sadece bir segmentinde sınırlı kalır. FOD sekonder olarak enfekte olduğunda sekestr benzeri kitleler görülebilir, bu nedenle yaygınlık durumu önemli bir ayırıcı kriterdir.

---

### ÇİFT 34 (Benzerlik: 0.70)

**Soru 1 (ID: 7811f576-4311-43d6-9c19-cd2aba8effea)**
Soru Kökü: İskelet sisteminde kemik yapım hızının arttığı veya yıkımın azaldığı dens kemik hastalıkları (osteoskleroz, osteopetrozis vb.) ile fibröz dokunun displastik kemik ürettiği (fibröz displazi vb.) patolojiler karşılaştırıldığında, her iki grupta da görülebilen ortak radyografik sekonder özellik aşağıdakilerden hangisidir?
Doğru Şık (A): Alveolar lamina dura çizgisinin takip edilemez hale gelmesi
Açıklama: Osteopetrozis gibi durumlarda spongioz kemik çok sklerotik bir yapıya dönüşerek lamina duradan daha radyoopak hale geldiği için lamina dura izlenemez (kemik içine gömülür). Fibröz displazide ve Paget hastalığında ise kemik medullası displastik bir fibröz dokuya dönüştüğü ve yapısal mimarisini kaybettiği için periodontal aralığı çevreleyen kortikal kemik sınırı (lamina dura) yine bütünlüğünü kaybederek radyografik olarak kaybolur. Bu bulgu, her iki uçtaki mekanizma için de ortak bir destrüksiyon sekresidir.

**Soru 2 (ID: bd65bae4-7cd9-4221-bc4b-59d3df122023)**
Soru Kökü: Fibröz displazinin radyografik bulguları ile ilgili olarak aşağıdakilerden hangisi **beklenmez**?
Doğru Şık (B): Lezyon sınırlarının radyografik olarak keskin, kortike ve net bir şekilde izlenebilmesi
Açıklama: Fibröz displazi (FD) lokalize bir kemik gelişimi anomalisidir ve lezyonun sınırları normal medüller kemik ile net bir geçiş yapmadan (blend into surrounding bone) karışır. Bu sınır belirsizliği, FD'yi iyi sınırlı ve kortike olan Ossifiye Fibroma'dan ayıran en kritik radyografik özelliktir. Buzlu cam görünümü, sinüs obliterasyonu ve lamina dura kaybı tipik FD özellikleridir.

---

### ÇİFT 35 (Benzerlik: 0.70)

**Soru 1 (ID: 7d288068-7869-4862-aa48-5e514ecc6947)**
Soru Kökü: Osteopetrozis teşhisi konmuş bir hastanın kemik yapısındaki aşırı yoğunlaşmanın ve medüller obliterasyonun temelinde yatan patofizyolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (E): Osteoklast yetersizliğine bağlı fizyolojik kemik rezorpsiyonunun olmaması
Açıklama: Osteopetroziste temel patofizyolojik mekanizma, osteoklastların yetersizliği nedeniyle fizyolojik kemik yıkımının gerçekleşememesidir. Fibröz displazide kemik iliği yerini fibröz dokuya bırakırken, osteopetroziste mevcut kemik dokusu eritilemediği için sürekli birikir ve aşırı yoğunlaşır. Kemiğin organizasyonu bozuk olduğu için patolojik kırıklara yatkınlık son derece yüksektir.

**Soru 2 (ID: e30a1f45-9e53-4417-8ed5-7814ef507a2b)**
Soru Kökü: Radyografik muayenede lamina dura sınırlarında ve mandibular kanal duvarında artmış radyopasite saptanan bir hastada, patolojinin ilerleyen evrelerinde bu yapıların yoğun kemik içinde kaybolduğu gözlenmiştir. Osteopetrozis ile uyumlu bu hastalıkta kemiğin yapısal direncindeki mekanik zafiyetin asıl sebebi aşağıdakilerden hangisidir?
Doğru Şık (B): Spongiyoz kemiğin aşırı kalsifiye olarak esnekliğini yitirmesi ve mermer gibi kırılganlaşması
Açıklama: Osteopetroziste osteoklastik rezorpsiyon yokluğu, süngerimsi kemiğin anormal kalsifiye olup kortikal kemikle fiziksel olarak birleşmesine neden olur. Kemik röntgende son derece dens ve sert (mermer gibi) görünse de, trabeküler fizyolojik esnekliğinden (organizasyonundan) tamamen yoksun olduğu için mekanik strese direnemez ve kolayca kırılır. Fibröz displazide kemik yerini bağ dokusuna bırakırken burada tamamen aşırı mineralize, inelastik bir kütle söz konusudur.

---

### ÇİFT 36 (Benzerlik: 0.70)

**Soru 1 (ID: 324eda07-542b-4a3c-9b46-33783bfed3f4)**
Soru Kökü: Rutin kontrol sırasında diş hekimi, 40 yaşındaki bir kadın hastanın alt çene ön bölgesindeki dişlerin apekslerinde kalsifikasyon evresinde olan iyi sınırlı radyopasiteler tespit etmiştir. Lezyonun sementoblastom yerine periapikal semental displazi (sementoma) olarak değerlendirilmesinde radyografik incelemedeki **en güvenilir** ayırıcı kriter aşağıdakilerden hangisidir?
Doğru Şık (B): Sementoblastomda lezyonun doğrudan dişin kök yüzeyine tam bağlı (kaynaşmış) olması ve sıklıkla kökü rezorbe etmesi
Açıklama: Sementoblastom gerçek bir odontojenik neoplazm olup dişin sement dokusundan köken alır; bu nedenle radyografide lezyon doğrudan dişin kök yüzeyine bağlıdır (kök lezyonun içinde kaybolur) ve sıklıkla masif kök rezorpsiyonuna yol açar. Sementoma (periapikal semental displazi) ise reaktif displastik bir süreçtir, kalsifiye kitle ile vital diş kökü arasında yapısal bir kaynaşma bulunmaz ve kökü rezorbe etmez.

**Soru 2 (ID: 5991947d-e430-478b-bba9-e49c743e94c8)**
Soru Kökü: Bir periapikal semental displazi olgusuyla, apikal rarefying osteitis (enfekte periapikal lezyon) olgusunu radyolojik ve klinik olarak ayırt etmede aşağıdaki yöntemlerden hangisi en kesin (gold-standard) teşhis verisini sağlar?
Doğru Şık (C): İlgili dişe vitalite (elektriksel pulpa veya soğuk) testi uygulanması
Açıklama: Periapikal semental displazinin (PSD) birinci (erken) dönemi tamamen radyolüsenttir ve apikal kök ucu enfeksiyonu (rarefying osteitis/granülom/kist) ile radyografik olarak tamamen aynı görünür. PSD gelişimsel bir anomali olup pulpa dokusu canlı kalırken, apikal osteitiste dişte çürük, travma veya derin restorasyon öyküsü bulunur ve diş nekrotiktir (devital). En kesin ayırıcı yöntem dişin vitalite durumudur.

---

### ÇİFT 37 (Benzerlik: 0.70)

**Soru 1 (ID: 5b16ec2c-f0e0-4437-a527-e6b97c7731c8)**
Soru Kökü: 45 yaşındaki erkek hastanın panoramik radyografisinde sağ alt 2. ve 3. molar dişler etrafında, korteksi ekspansiyona uğratan çok odacıklı (multiloküler) geniş bir radyolüsensi saptanmıştır. Lezyonun Santral Dev Hücreli Granüloma (SDHG) yerine Ameloblastoma olarak teşhis edilmesinde, hekimi ameloblastomaya yönlendiren **en güçlü** radyolojik ve klinik veri çifti aşağıdakilerden hangisidir?
Doğru Şık (B): Hastanın yaşının ileri (4. dekad ve üstü) olması, lezyonun posterior yerleşimi ve iç septalarının daha kalın/kaba kortike yapıda olması
Açıklama: Her iki lezyon da mandibulanın multiloküler ekspansif radyolüsensileridir. Ancak ameloblastoma SDHG'den farklı olarak daha yaşlı hastalarda (3-5. dekad) izlenir, lezyon anteriora değil sıklıkla posterior ramusa lokalizedir ve radyolojik olarak lezyonu bölen septalar ameloblastomada SDHG'nin zarif fibriler yapısına kıyasla çok daha kalın, kaba ve lezyonun dış çevresi daha iyi kortike (sklerotik) yapıdadır.

**Soru 2 (ID: 724c3482-743c-4479-b2ab-00029cfe86a5)**
Soru Kökü: Santral dev hücreli reperatif granüloma (SDHG) maksillofasiyal iskelette sıklıkla alt çenenin ön bölgesini etkileyen benign ancak kemik yıkan bir lezyondur. Bu lezyonun etkilediği lokal bölgedeki dişlerin durumuyla ilgili olarak aşağıdakilerden hangisi **en az olasıdır**?
Doğru Şık (C): Lezyon sahasındaki dişlerin vasküler dolaşımının bozulmasına bağlı olarak rutin devitalizasyon
Açıklama: Santral dev hücreli granüloma klinik olarak agresif, kemikte kortikal ekspansiyon yapan, dişlerde migrasyon (yer değiştirme) ve palpasyonda hassasiyet ile mobilite oluşturan bir tümör benzeri oluşumdur. Ancak bu mekanik yıkıma ve hızlı büyümeye rağmen, lezyon sahasındaki dişlerin pulpa hayatiyetlerini (vitalite) koruması bu hastalığın ayırıcı tanısında kritik öneme sahiptir. Dişlerde devitalizasyon SDHG'de rutin beklenen bir bulgu değildir.

---

### ÇİFT 38 (Benzerlik: 0.70)

**Soru 1 (ID: aef39701-fd5c-4661-9c50-6fa0c84dbc12)**
Soru Kökü: Fibröz displazi lezyonunun olgunlaşma evresinde, fibröz bağ dokusu zemininde eşit büyüklükte displastik kemik trabeküllerinin sayısının ve hacminin artmasıyla oluşan, özellikle üst çenedeki lezyonun spesifik tanınmasını sağlayan karakteristik radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Portakal kabuğu (orange peel) görünümü
Açıklama: Fibröz displazide histopatolojik düzeyde birbirine eşit büyüklükteki C şeklinde kemik trabeküllerinin hücresel fibröz stroma içine yerleşmesi, makroskobik radyografide 'buzlu cam' ya da klasik 'portakal kabuğu' (orange peel) pütürlü görünümünü oluşturur. Atılmış pamuk görünümü Paget hastalığında kalsifiye kitleler nedeniyle görülürken; güneş ışını ve güve yeniği manzaraları sırasıyla osteosarkom ve osteomiyelit/malignite göstergesidir.

**Soru 2 (ID: ebfd6153-9d1b-4163-845b-705a3f721a93)**
Soru Kökü: Langerhans hücreli histiositozis tutulumu gösteren bir çene radyografisinde karşılaşılabilecek en karakteristik lezyon morfolojisi aşağıdakilerden hangisidir?
Doğru Şık (E): Sklerotik bir sınırı olmayan ve içinde kökleri rezorbe olmuş dişlerin bulunduğu yıkım
Açıklama: Langerhans hücreli histiositoziste (Histiositozis X) kemikteki litik reaksiyon zımba ile delinmiş gibidir ve çevresinde koruyucu bir sklerotik kemik reaksiyon hattı bulunmaz. Anevrizmal kemik kistinde sabun köpüğü, Paget hastalığında ise atılmış pamuk görünümü izlenir. Litik alanın ortasında kemik desteğini kaybetmiş, kökleri rezorbe süzülen yüzen diş manzarası lezyonun patognomonik radyolojik yansımasıdır.

---

### ÇİFT 39 (Benzerlik: 0.70)

**Soru 1 (ID: 7811f576-4311-43d6-9c19-cd2aba8effea)**
Soru Kökü: İskelet sisteminde kemik yapım hızının arttığı veya yıkımın azaldığı dens kemik hastalıkları (osteoskleroz, osteopetrozis vb.) ile fibröz dokunun displastik kemik ürettiği (fibröz displazi vb.) patolojiler karşılaştırıldığında, her iki grupta da görülebilen ortak radyografik sekonder özellik aşağıdakilerden hangisidir?
Doğru Şık (A): Alveolar lamina dura çizgisinin takip edilemez hale gelmesi
Açıklama: Osteopetrozis gibi durumlarda spongioz kemik çok sklerotik bir yapıya dönüşerek lamina duradan daha radyoopak hale geldiği için lamina dura izlenemez (kemik içine gömülür). Fibröz displazide ve Paget hastalığında ise kemik medullası displastik bir fibröz dokuya dönüştüğü ve yapısal mimarisini kaybettiği için periodontal aralığı çevreleyen kortikal kemik sınırı (lamina dura) yine bütünlüğünü kaybederek radyografik olarak kaybolur. Bu bulgu, her iki uçtaki mekanizma için de ortak bir destrüksiyon sekresidir.

**Soru 2 (ID: e30a1f45-9e53-4417-8ed5-7814ef507a2b)**
Soru Kökü: Radyografik muayenede lamina dura sınırlarında ve mandibular kanal duvarında artmış radyopasite saptanan bir hastada, patolojinin ilerleyen evrelerinde bu yapıların yoğun kemik içinde kaybolduğu gözlenmiştir. Osteopetrozis ile uyumlu bu hastalıkta kemiğin yapısal direncindeki mekanik zafiyetin asıl sebebi aşağıdakilerden hangisidir?
Doğru Şık (B): Spongiyoz kemiğin aşırı kalsifiye olarak esnekliğini yitirmesi ve mermer gibi kırılganlaşması
Açıklama: Osteopetroziste osteoklastik rezorpsiyon yokluğu, süngerimsi kemiğin anormal kalsifiye olup kortikal kemikle fiziksel olarak birleşmesine neden olur. Kemik röntgende son derece dens ve sert (mermer gibi) görünse de, trabeküler fizyolojik esnekliğinden (organizasyonundan) tamamen yoksun olduğu için mekanik strese direnemez ve kolayca kırılır. Fibröz displazide kemik yerini bağ dokusuna bırakırken burada tamamen aşırı mineralize, inelastik bir kütle söz konusudur.

---

### ÇİFT 40 (Benzerlik: 0.70)

**Soru 1 (ID: 723498ff-c08b-4368-af23-ae45ab8785c0)**
Soru Kökü: Fibröz displazi lezyonlarının radyolojik olarak çenelerde genişleme yapması durumunda, bu görünümün kronik osteomiyelitten ayrımını sağlayan en güvenilir radyolojik ipucu aşağıdakilerden hangisidir?
Doğru Şık (E): Osteomiyelitte yeni kemiğin periosttan gelmesi nedeniyle orijinal korteksin hala seçilebilmesi
Açıklama: Kronik osteomiyelitte çenede genişleme periosteal yeni kemik yapımı (soğan zarı görünümü) ile olur, bu nedenle alttaki orijinal kortikal sınır genellikle radyografide hala izlenebilir. Fibröz displazide ise genişleme içten (trabeküler kemikten) dışa doğrudur ve orijinal korteks yerini displastik kemik dokusuna bırakarak incelir.

**Soru 2 (ID: 75576dd2-644f-4f11-b66c-f7f538d43ce2)**
Soru Kökü: Kronik tekrarlayan çene osteomiyeliti, bazı fibroosseöz kemik lezyonlarının sekonder bir komplikasyonu olarak ortaya çıkabilir. Aşağıdaki lezyonlardan hangisinde osteomiyelit geliştiğinde, radyografik olarak lezyonun kendi semental kitlelerinin sekestre kemik odaklarıyla karışması nedeniyle ayırıcı tanı büyük zorluk içerir?
Doğru Şık (D): Florid osseöz displazi
Açıklama: Florid osseöz displazi (FOD) evresi ilerledikçe sklerotik sement benzeri kitleler avasküler hale gelir ve lokal bir enfeksiyon varlığında hızla osteomiyelite ilerleyebilir. Osteomiyelit geliştiğinde, FOD'nin zaten var olan radyoopak semental kitleleri, osteomiyelitin nekrotik kemik parçaları olan 'sekestrlere' çok benzer. Bu durum radyolojik ve klinik ayrımı zorlaştırır. Fibröz displazi veya Cherubism gibi patolojiler litik/displastik zeminli olduklarından belirgin semental sekestr-benzeri kitleler üretmezler.

---

### ÇİFT 41 (Benzerlik: 0.70)

**Soru 1 (ID: 7d288068-7869-4862-aa48-5e514ecc6947)**
Soru Kökü: Osteopetrozis teşhisi konmuş bir hastanın kemik yapısındaki aşırı yoğunlaşmanın ve medüller obliterasyonun temelinde yatan patofizyolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (E): Osteoklast yetersizliğine bağlı fizyolojik kemik rezorpsiyonunun olmaması
Açıklama: Osteopetroziste temel patofizyolojik mekanizma, osteoklastların yetersizliği nedeniyle fizyolojik kemik yıkımının gerçekleşememesidir. Fibröz displazide kemik iliği yerini fibröz dokuya bırakırken, osteopetroziste mevcut kemik dokusu eritilemediği için sürekli birikir ve aşırı yoğunlaşır. Kemiğin organizasyonu bozuk olduğu için patolojik kırıklara yatkınlık son derece yüksektir.

**Soru 2 (ID: af9ac9dd-2798-4f56-8737-9b50f72594f9)**
Soru Kökü: Osteopetrozis hastalarında kemik iliği obliterasyonu sonucu gelişen ciddi hematolojik yetersizliklerin ve sistemik kemik yapım-yıkım anormalliğinin kökten çözümü için hedeflenen hücresel elementi (fonksiyonel osteoklastları) sağlamak amacıyla günümüzde uygulanan temel tedavi yöntemi aşağıdakilerden hangisidir?
Doğru Şık (A): Kemik iliği nakli
Açıklama: Osteopetrozis, osteoklastların fonksiyonel yetersizliğinden kaynaklanan genetik bir hastalıktır. Osteoklastlar hematopoetik kök hücre kaynaklı makrofaj/monosit serisinden farklılaşır. Bu nedenle fonksiyonel osteoklast oluşumunu uyarmak için tedavi protokolünün merkezinde kemik iliği (kök hücre) nakli yer alır.

---

### ÇİFT 42 (Benzerlik: 0.70)

**Soru 1 (ID: d7f9654d-25ac-43aa-a43f-fbcd25627753)**
Soru Kökü: Aşağıdaki lezyonlardan hangisi, histopatolojik olarak birbirlerine çok benzemelerine rağmen, hastanın yaşı ve radyografik özellikleriyle birbirinden ayrılır; biri daha çok 20 yaş altında, mandibula anteriorunda multiloküler litik lezyon yaparken, diğeri genellikle 30-50 yaş arası erişkinlerde ve mandibula posteriorunda korteks ekspansiyonu yapar?
Doğru Şık (B): Santral dev hücreli granülom - Ameloblastoma
Açıklama: Santral Dev Hücreli Granülom (SDHG) genellikle gençlerde/adölesanlarda mandibulanın 1. molarının anteriorunda ekspansiyon ve septalarla karakterizedir. Ayırıcı tanısında ilk akla gelen Ameloblastoma ise histolojik paterni farklı olsa da radyografik olarak karışabilir; ancak ameloblastoma 3-5. dekatta ve daha ziyade mandibula posterior (ramus/angulus) yerleşimlidir. SDHG'nin ince, dış kortekse dik açılı septaları varken ameloblastomanın septaları daha kaba ve hücresel dağılımı farklıdır.

**Soru 2 (ID: dd24d967-87be-4c3d-b6db-293f7854b0c9)**
Soru Kökü: Aşağıdaki fibröz veya kemik kaynaklı lezyonlardan hangisinde klinik seyir sırasında lezyonun tedavisiz bırakıldığında adolesan ve erişkin döneme gelindiğinde kendi kendini sınırlandırıp gerilemesi (regrese olması) **beklenmez**?
Doğru Şık (B): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülom (SDHG) genellikle yavaş veya zaman zaman hızlı büyüyen litik bir lezyondur ve kendiliğinden gerileme (involüsyon) göstermez; tedavi edilmezse lokal destrüksiyona devam eder (tedavisi küretajdır). Oysa Cherubism ve Caffey hastalığı kendiliğinden sınırlanan ve gerileyen süreçlerdir. Periapikal semental displazi de 3. döneme (radyopak) ulaşıp hayat boyu stabilize kalır, progresyon veya destrüksiyon yapmaz.

---

### ÇİFT 43 (Benzerlik: 0.70)

**Soru 1 (ID: 723498ff-c08b-4368-af23-ae45ab8785c0)**
Soru Kökü: Fibröz displazi lezyonlarının radyolojik olarak çenelerde genişleme yapması durumunda, bu görünümün kronik osteomiyelitten ayrımını sağlayan en güvenilir radyolojik ipucu aşağıdakilerden hangisidir?
Doğru Şık (E): Osteomiyelitte yeni kemiğin periosttan gelmesi nedeniyle orijinal korteksin hala seçilebilmesi
Açıklama: Kronik osteomiyelitte çenede genişleme periosteal yeni kemik yapımı (soğan zarı görünümü) ile olur, bu nedenle alttaki orijinal kortikal sınır genellikle radyografide hala izlenebilir. Fibröz displazide ise genişleme içten (trabeküler kemikten) dışa doğrudur ve orijinal korteks yerini displastik kemik dokusuna bırakarak incelir.

**Soru 2 (ID: bd65bae4-7cd9-4221-bc4b-59d3df122023)**
Soru Kökü: Fibröz displazinin radyografik bulguları ile ilgili olarak aşağıdakilerden hangisi **beklenmez**?
Doğru Şık (B): Lezyon sınırlarının radyografik olarak keskin, kortike ve net bir şekilde izlenebilmesi
Açıklama: Fibröz displazi (FD) lokalize bir kemik gelişimi anomalisidir ve lezyonun sınırları normal medüller kemik ile net bir geçiş yapmadan (blend into surrounding bone) karışır. Bu sınır belirsizliği, FD'yi iyi sınırlı ve kortike olan Ossifiye Fibroma'dan ayıran en kritik radyografik özelliktir. Buzlu cam görünümü, sinüs obliterasyonu ve lamina dura kaybı tipik FD özellikleridir.

---

### ÇİFT 44 (Benzerlik: 0.70)

**Soru 1 (ID: 1359522f-452f-4470-8404-5108136e7fb6)**
Soru Kökü: Periapikal semental displazi (PSD) ile radyografik olarak benzerlik gösterebilen İdiyopatik Osteoskleroz (Dens Kemik Adası) lezyonunu ayırmada hekimin dikkate alması gereken en spesifik radyografik farklılık aşağıdakilerden hangisidir?
Doğru Şık (A): İdiyopatik osteosklerozun etrafında lezyonu çevreleyen hiçbir radyolüsent sınır/kapsül bulunmaması
Açıklama: İdiyopatik osteoskleroz (dens kemik adası) çevre kemik yapısıyla doğrudan kaynaşmış asimetrik skleroz odaklarıdır, etraflarında bağ dokusuna ait radyolüsent bir çizgi (kapsül) bulunmaz. Periapikal semental displazinin kalsifiye (3.) fazında ise kitlenin etrafında daima ince, net bir radyolüsent halo yer alır.

**Soru 2 (ID: 324eda07-542b-4a3c-9b46-33783bfed3f4)**
Soru Kökü: Rutin kontrol sırasında diş hekimi, 40 yaşındaki bir kadın hastanın alt çene ön bölgesindeki dişlerin apekslerinde kalsifikasyon evresinde olan iyi sınırlı radyopasiteler tespit etmiştir. Lezyonun sementoblastom yerine periapikal semental displazi (sementoma) olarak değerlendirilmesinde radyografik incelemedeki **en güvenilir** ayırıcı kriter aşağıdakilerden hangisidir?
Doğru Şık (B): Sementoblastomda lezyonun doğrudan dişin kök yüzeyine tam bağlı (kaynaşmış) olması ve sıklıkla kökü rezorbe etmesi
Açıklama: Sementoblastom gerçek bir odontojenik neoplazm olup dişin sement dokusundan köken alır; bu nedenle radyografide lezyon doğrudan dişin kök yüzeyine bağlıdır (kök lezyonun içinde kaybolur) ve sıklıkla masif kök rezorpsiyonuna yol açar. Sementoma (periapikal semental displazi) ise reaktif displastik bir süreçtir, kalsifiye kitle ile vital diş kökü arasında yapısal bir kaynaşma bulunmaz ve kökü rezorbe etmez.

---

### ÇİFT 45 (Benzerlik: 0.70)

**Soru 1 (ID: 3f7b3669-2570-4786-8200-c4d9b82bf8b2)**
Soru Kökü: Çene kemiklerini etkileyen gelişimsel bir patoloji olan Cherubism ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Etkilenen hastalarda süt dişlerinin gecikmiş erüpsiyonu ve daimi diş retansiyonu birincil bulgudur.
Açıklama: Cherubism, çene kemiklerinde bilateral genişlemeye yol açan kistik lezyonlara bağlı olarak daimi diş germlerinin itilmesine/deplase olmasına neden olur. Süt dişlerinde ise erüpsiyon gecikmesi değil, aksine kemik desteğinin displastik doku ile replase olmasına bağlı olarak 'erken düşme' (prematüre kayıp) karakteristiktir. Hastalık yalnız çenelere lokalizedir ve melek yüz görünümü ile bilinir.

**Soru 2 (ID: 99be07c7-e59b-4408-b11a-ba7586729898)**
Soru Kökü: Cherubism sendromunda mandibula posteriorunda çift taraflı masif kemik genişlemesi meydana gelmesi o bölgedeki diş jenerasyonunu anatomik olarak olumsuz etkiler. Bu hastalıkta sıklıkla izlenen ve kalıcı dentisyonu doğrudan bozan **en spesifik** radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Daimi dentisyonda, özellikle mandibular 2. ve 3. molar diş germlerinin ve dental foliküllerinin yer değiştirmesi
Açıklama: Cherubism hastalığındaki devasa fibroosseöz kitleler, alt çenede angulus bölgesinden başlayıp öne doğru genişledikleri için o alanda gelişmekte olan daimi dentisyon germleri mekanik olarak normal büyüme hattından savrulur. Hastalığın doğası gereği, özellikle bölgedeki mandibular 2. ve 3. molarlara ait diş germlerinin ve dental foliküllerin masif şekilde yer değiştirdiği (migrasyon/gömülülük) izlenir. Pulpa taşı, taurodontizm veya sement anomalisi sendromun primer bulgusu değildir.

---

### ÇİFT 46 (Benzerlik: 0.69)

**Soru 1 (ID: b729d749-33c3-4679-b8fb-97bc502bb43c)**
Soru Kökü: Radyografik olarak çenelerde yaygın radyoopasite artışı, artmış kemik dansitesi ve lamina dura değişiklikleri saptanan bir hastada; hekim ayırıcı tanıda osteopetrozis ile birlikte aşağıdaki hastalık gruplarından öncelikli olarak hangilerini değerlendirmelidir?
Doğru Şık (B): Sklerosteozis ve infantil kortikal hiperostozis
Açıklama: Çenelerde yaygın skleroz ve artmış kemik dansitesi tablosu ile karşılaşıldığında osteopetrozis için en güçlü ayırıcı tanılar sklerosteozis ve infantil kortikal hiperostozistir. Fibröz displazi buzlu cam manzarası, anevrizmal kemik kisti ise sabun köpüğü şeklinde radyolüsent genişleme yapar. Osteopetroziste spongiyoz ile kortikal kemik ayrılamayacak derecede homojen bir densite artışı sergiler.

**Soru 2 (ID: e30a1f45-9e53-4417-8ed5-7814ef507a2b)**
Soru Kökü: Radyografik muayenede lamina dura sınırlarında ve mandibular kanal duvarında artmış radyopasite saptanan bir hastada, patolojinin ilerleyen evrelerinde bu yapıların yoğun kemik içinde kaybolduğu gözlenmiştir. Osteopetrozis ile uyumlu bu hastalıkta kemiğin yapısal direncindeki mekanik zafiyetin asıl sebebi aşağıdakilerden hangisidir?
Doğru Şık (B): Spongiyoz kemiğin aşırı kalsifiye olarak esnekliğini yitirmesi ve mermer gibi kırılganlaşması
Açıklama: Osteopetroziste osteoklastik rezorpsiyon yokluğu, süngerimsi kemiğin anormal kalsifiye olup kortikal kemikle fiziksel olarak birleşmesine neden olur. Kemik röntgende son derece dens ve sert (mermer gibi) görünse de, trabeküler fizyolojik esnekliğinden (organizasyonundan) tamamen yoksun olduğu için mekanik strese direnemez ve kolayca kırılır. Fibröz displazide kemik yerini bağ dokusuna bırakırken burada tamamen aşırı mineralize, inelastik bir kütle söz konusudur.

---

### ÇİFT 47 (Benzerlik: 0.69)

**Soru 1 (ID: 723498ff-c08b-4368-af23-ae45ab8785c0)**
Soru Kökü: Fibröz displazi lezyonlarının radyolojik olarak çenelerde genişleme yapması durumunda, bu görünümün kronik osteomiyelitten ayrımını sağlayan en güvenilir radyolojik ipucu aşağıdakilerden hangisidir?
Doğru Şık (E): Osteomiyelitte yeni kemiğin periosttan gelmesi nedeniyle orijinal korteksin hala seçilebilmesi
Açıklama: Kronik osteomiyelitte çenede genişleme periosteal yeni kemik yapımı (soğan zarı görünümü) ile olur, bu nedenle alttaki orijinal kortikal sınır genellikle radyografide hala izlenebilir. Fibröz displazide ise genişleme içten (trabeküler kemikten) dışa doğrudur ve orijinal korteks yerini displastik kemik dokusuna bırakarak incelir.

**Soru 2 (ID: 7818dca5-0586-4fc2-8359-a175c6bb09d1)**
Soru Kökü: Çenelerde kemik dansitesi artışı şüphesiyle muayene edilen 15 yaşındaki bir hastada, osteopetrozis lehine yorumlanacak radyografik bulgulardan biri aşağıdakilerden hangisi **olamaz**?
Doğru Şık (A): Dişlerde erken sürme ve köklerde hiperkalsifikasyon
Açıklama: Osteopetrozis hastalarında kemiğin aşırı yoğunlaşmasına bağlı olarak dişlerde erken değil, aksine gecikmiş erüpsiyon, malforme kökler ve kalsifikasyon eksikliği görülür. Lamina dura ve mandibular kanal duvarı gibi kortikal yapılar karakteristik olarak belirginleşip kalınlaşır. Hastalığın terminal evrelerinde bu yapılar çevredeki masif sklerotik kemik dokusuyla birleşerek radyografik olarak ayırt edilemez hale gelir.

---

### ÇİFT 48 (Benzerlik: 0.69)

**Soru 1 (ID: 956100d5-6df6-4910-badb-108126d78fbb)**
Soru Kökü: Çenelerin fibroosseöz lezyonlarından olan monostotik fibröz displazi ile santral ossifiye fibromanın ayırıcı tanısında, her iki lezyonun kemik içindeki büyüme ve genişleme paterni önemli bir kriterdir. Bu bağlamda, santral ossifiye fibromayı fibröz displaziden ayıran klinik/radyolojik büyüme karakteristiği aşağıdakilerden hangisidir?
Doğru Şık (C): Merkez üssü etrafında eş merkezli (konsantrik) ekspansiyon yapması
Açıklama: Santral ossifiye fibroma tümör benzeri bir doğaya sahiptir ve iyi sınırlı olup kendi merkez üssünden dışa doğru eş merkezli (konsantrik) olarak yavaş ekspansiyon yapar. Fibröz displazi ise çevredeki kemikle sınırları karışan, sınırları belirsiz, lineer ya da daha asimetrik şekilde medüller boşluğu doldurarak genişleyen bir hamartomatöz proliferasyondur.

**Soru 2 (ID: bd65bae4-7cd9-4221-bc4b-59d3df122023)**
Soru Kökü: Fibröz displazinin radyografik bulguları ile ilgili olarak aşağıdakilerden hangisi **beklenmez**?
Doğru Şık (B): Lezyon sınırlarının radyografik olarak keskin, kortike ve net bir şekilde izlenebilmesi
Açıklama: Fibröz displazi (FD) lokalize bir kemik gelişimi anomalisidir ve lezyonun sınırları normal medüller kemik ile net bir geçiş yapmadan (blend into surrounding bone) karışır. Bu sınır belirsizliği, FD'yi iyi sınırlı ve kortike olan Ossifiye Fibroma'dan ayıran en kritik radyografik özelliktir. Buzlu cam görünümü, sinüs obliterasyonu ve lamina dura kaybı tipik FD özellikleridir.

---

### ÇİFT 49 (Benzerlik: 0.69)

**Soru 1 (ID: 7818dca5-0586-4fc2-8359-a175c6bb09d1)**
Soru Kökü: Çenelerde kemik dansitesi artışı şüphesiyle muayene edilen 15 yaşındaki bir hastada, osteopetrozis lehine yorumlanacak radyografik bulgulardan biri aşağıdakilerden hangisi **olamaz**?
Doğru Şık (A): Dişlerde erken sürme ve köklerde hiperkalsifikasyon
Açıklama: Osteopetrozis hastalarında kemiğin aşırı yoğunlaşmasına bağlı olarak dişlerde erken değil, aksine gecikmiş erüpsiyon, malforme kökler ve kalsifikasyon eksikliği görülür. Lamina dura ve mandibular kanal duvarı gibi kortikal yapılar karakteristik olarak belirginleşip kalınlaşır. Hastalığın terminal evrelerinde bu yapılar çevredeki masif sklerotik kemik dokusuyla birleşerek radyografik olarak ayırt edilemez hale gelir.

**Soru 2 (ID: b729d749-33c3-4679-b8fb-97bc502bb43c)**
Soru Kökü: Radyografik olarak çenelerde yaygın radyoopasite artışı, artmış kemik dansitesi ve lamina dura değişiklikleri saptanan bir hastada; hekim ayırıcı tanıda osteopetrozis ile birlikte aşağıdaki hastalık gruplarından öncelikli olarak hangilerini değerlendirmelidir?
Doğru Şık (B): Sklerosteozis ve infantil kortikal hiperostozis
Açıklama: Çenelerde yaygın skleroz ve artmış kemik dansitesi tablosu ile karşılaşıldığında osteopetrozis için en güçlü ayırıcı tanılar sklerosteozis ve infantil kortikal hiperostozistir. Fibröz displazi buzlu cam manzarası, anevrizmal kemik kisti ise sabun köpüğü şeklinde radyolüsent genişleme yapar. Osteopetroziste spongiyoz ile kortikal kemik ayrılamayacak derecede homojen bir densite artışı sergiler.

---

