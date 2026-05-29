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

### ÇİFT 1 (Benzerlik: 0.78)

**Soru 1 (ID: 74d29ad0-8a94-42d9-bd7e-1ce13adb252a)**
Soru Kökü: Akciğer gelişim evrelerinde, laringotrakeal oluktan ileri dallanmalar sonucunda bronş tomurcuğunun ilk kez meydana geldiği embriyolojik dönem aşağıdakilerden hangisidir?
Doğru Şık (B): 5. hafta
Açıklama: Bronş tomurcuğu intrauterin 5. haftada, akciğer tomurcuğunun ileri dallanması ile primer olarak şekillenir. 4. hafta solunum divertikülünün (laringotrakeal oluk) belirdiği hafta iken, 7. haftada segmental bronşlar izlenmeye başlanır. Bu kronolojik hiyerarşi dallanma morfogenezinin temelini oluşturur.

**Soru 2 (ID: c24fab80-9b1c-4641-9556-03d6a514e13c)**
Soru Kökü: Fetal akciğer gelişimi sırasında, dallanma morfogenezinin ilerlemesiyle segmental bronşların şekillenmeye başladığı embriyolojik hafta aşağıdakilerden hangisidir?
Doğru Şık (C): 7. hafta
Açıklama: Segmental (tersiyer) bronşlar bronşiyal ağacın gelişiminde intrauterin 7. haftada oluşmaya başlar. 5. haftada ana bronş tomurcukları varken, ardışık dallanmalarla 7. haftada bronkopulmoner segmentlerin temeli atılmış olur. Bu evredeki bir gelişimsel duraklama direkt olarak segment anomalilerine neden olur.

---

### ÇİFT 2 (Benzerlik: 0.77)

**Soru 1 (ID: ac12fc81-b75e-45cd-afb9-70b5a0a0de6b)**
Soru Kökü: I. Kornikulat kıkırdak
II. Krikoid kıkırdak
III. Epiglot kıkırdak

Yukarıdaki larinks kıkırdaklarından hangileri 6. faringeal ark kökenli yapılar arasında yer alır?
Doğru Şık (B): I ve II
Açıklama: Kornikulat ve krikoid kıkırdaklar (arytenoid ve kuneiform ile birlikte) 6. faringeal arktan (veya bazı kaynaklara göre 4-6 füzyonundan) gelişirken, epiglot kıkırdak 3. ve 4. ark kökenli hipofaringeal eminensten gelişir. Epiglotun köken farklılığı, yutma refleksinin embriyolojik entegrasyonunda 4. arkın izole vagal ve glossofaringeal otonom uyarım sınırlarını çizer. Bu nedenle epiglot 6. ark türevi değildir.

**Soru 2 (ID: dee7df0c-5fc6-46e0-a3b2-836ef82b927a)**
Soru Kökü: Aşağıdaki kıkırdak yapılarından hangisi embriyolojik köken olarak farengeal ark kıkırdaklarından geliştiği halde, köken aldığı ark diğerlerinden farklıdır?
Doğru Şık (B): Epiglot kıkırdak
Açıklama: Epiglot kıkırdak 3. ve 4. faringeal ark kökenli hipofaringeal eminensten gelişirken; kornikulat, arytenoid, krikoid ve kuneiform kıkırdakların tamamı 6. faringeal arktan (veya 4-6. ark kaynaşmasından) gelişir. Laringeal kıkırdakların solunum yolunu koruyan ana destek mekanizması olan epiglotun faringeal kökene daha yakın olması, yutma sırasında hava yolunun kapatılması refleksinin otonom organizasyonunu yansıtır.

---

