# DUSBANKASI — 70 Günlük Yüksek Çarpanlı İmplementasyon / Devir Teslim Planı

**Tarih:** 2026-08-19  
**Hedef sınav:** 2026-DUS 2. Dönem — 01.11.2026  
**Uygulama yaklaşımı:** Küçük, hızlı devreye alınabilir, çalışma başına puan getirisi yüksek değişiklikler  
**Bu belgenin rolü:** Yeni sohbette uygulanacak kaynak plan ve kabul sözleşmesi

---

## 0. Yeni sohbet için ilk talimat

Yeni sohbet bu dosyayı ve mevcut çalışma ağacını okumadan kod değiştirmemeli.

1. `git status --short` ile mevcut kullanıcı değişikliklerini kaydet; **reset/checkout/clean yapma**.
2. Özellikle aşağıdaki mevcut WIP dosyalarını koru ve üstüne dikkatli çalış:
   - `src/components/quiz/QuizHeader.tsx`
   - `src/components/quiz/QuizView.tsx`
   - `src/App.tsx`
   - `src/hooks/useQuestions.ts`
   - `e2e/quiz-delete-selection.spec.ts`
3. İlk teslim yalnız **Faz P0** olsun. P1 semantic ranking veya Supabase şema yazımına P0 testleri geçmeden başlanmasın.
4. Her küçük değişiklikten sonra hedefli test, sonra `npm test -- --run`, sonra `npm run build` çalıştır.
5. Kullanıcı onayı olmadan kalıcı toplu soru silme, curation flag değişikliği veya production deploy yapma.

---

## 1. Karar özeti

Bu dönemde amaç 24 bin soruyu bitirmek değildir. Amaç, 14 bin çözüm bütçesine:

- mümkün olan en geniş **benzersiz kavram kapsamını**,
- DUS ağırlığı yüksek ve kullanıcının zayıf olduğu konuları,
- yanlış/boş/yavaş doğru yapılan soruların kısa tekrarını,
- çıkmış ve doğrulanmış high-yield soruları

sığdırmaktır.

Ana ürün kararı:

> **Rastgele 14.000 soru yerine, ünite genişliğini koruyan ve semantik tekrarı baskılayan 14.000 yüksek marjinal değerli çözüm.**

Önerilen küçük özellikler, öncelik sırasıyla:

1. **Evrensel `BİTİR | SİL` + ünite soru adedi presetleri**
2. **70 Gün Sınav Sprinti — günlük 200 soruluk tek kuyruk**
3. **Radyoloji/Protez için semantik temsilci seçimi**
4. **Yanlış/işaretli sorular için Anki Outbox**
5. **Hız Modu — doğruysa hızlı geç, yanlışsa açıklamada kal**

---

## 2. 2026-08-19 canlı durum fotoğrafı

### 2.1 Soru havuzu

| Ölçüm | Canlı değer |
|---|---:|
| Veritabanındaki toplam soru | 24.335 |
| Uygulamada aktif/görünür soru | 23.930 |
| Kalite flag'i nedeniyle dışarıda | 405 |
| Ana profilde en az bir kez görülmüş benzersiz soru | 3.213 |
| Ana profilde toplam deneme | 3.636 |
| Ana profil doğruluğu | %70,5 |
| Şu an görülmemiş aktif soru | 20.717 |

70 gün × 200 soru = **14.000 çözüm**.

- Hiç tekrar yapılmasa bile 23.930 - (3.213 + 14.000) = **6.717 aktif soru görülmez**.
- Mevcut %80 yeni / %15 yanlış / %5 doğru karması 70 gün boyunca sabit kalırsa en fazla 11.200 yeni soru görülür; mevcut 3.213 ile benzersiz kapsam yaklaşık 14.413'e çıkar ve yaklaşık **9.517 aktif soru görülmeden kalır**.
- Bu yüzden başarının ölçüsü “bankanın yüzde kaçı bitti?” değil, “çözülen her soru yeni ve sınav-değerli bir öğrenme atomu ekledi mi?” olmalıdır.

### 2.2 Büyük dersler

| Ders | Aktif soru | Ünite | Medyan ünite | En büyük ünite |
|---|---:|---:|---:|---:|
| Radyoloji | 3.899 | 48 | 62 | 215 |
| Protez | 3.611 | 44 | 64 | 237 |

Radyoloji + Protez = **7.510 aktif soru**, yani aktif havuzun yaklaşık **%31,4'ü**. Bunları soru sayıları oranında çözdürmek diğer derslerin kavram kapsamını boğar; tamamen kısmak ise iki önemli klinik alanı eksik bırakır. Çözüm: **her üniteye taban temsil kotası + zayıflığa göre ek kota**.

### 2.3 Kalite sinyalleri

| `quality_flag` | Sayı |
|---|---:|
| NULL | 22.810 |
| `high_yield` | 724 |
| `cikmis` | 366 |
| `aciklama_klonu` | 272 |
| `kavramsal_kopya` | 131 |
| `reviewed_keep` | 30 |
| `auto_deleted` | 2 |

High-yield kapsamı yalnız üç derste bulunuyor:

- Mikrobiyoloji: 284
- Ortodonti: 329
- Radyoloji: 111
- Protez: 0

Dolayısıyla mevcut `high_yield` bayrağı tek başına 70 günlük seçim motorunun kalite kaynağı olamaz.

### 2.4 Embedding uygunluğu

- Aktif 23.930 sorunun 23.583'ünde hem stem hem açıklama embedding'i var: **%98,55**.
- Radyoloji: 3.899 / 3.899 çift embedding.
- Protez: 3.611 / 3.611 çift embedding.

Sonuç: Radyoloji/Protez için semantik çeşitlilik seçimi teknik olarak hazırdır. Bu özellik **soru silmeyecek**, sadece çok benzer soruları aynı kısa kuyruğa birlikte almamaya çalışacaktır.

### 2.5 Mevcut modlar ve gerçek boşluklar

Mevcut güçlü parçalar:

- Tek ünite akışı görülmemiş soruları öne alıyor.
- Deneme/simülasyon havuzu %80 yeni, %15 daha önce yanlış, %5 doğru karışımı kullanıyor.
- Akıllı Çalışma 40 soruluk weakness + new-exploration kuyruğu kuruyor.
- Günün Denemesi Pazartesi–Cumartesi 4 ders × 25 = 100 soru; Pazar haftanın yanlışlarını getiriyor.
- Zayıf Halka, Favoriler, High-Yield, hata analizi, süre takibi ve oturum devamı mevcut.
- AnkiConnect canlı ve erişilebilir; API sürümü 6, `Cloze-MAXXİNG` modeli ile DUS desteleri mevcut.

Boşluklar:

1. Bu parçalar tek bir 70 günlük bütçe ve hedef altında birleşmiyor.
2. Standart ünite modunda 215–527 soruluk ünitenin tamamı seçiliyor; kullanıcı başlangıçta 20/40 soru seçemiyor.
3. Standart quiz başlığında erken `BİTİR` yok; büyük ünite oturumu doğal biçimde kapatılamıyor.
4. Akıllı Çalışma'daki `newExploration=0.30` açık bir kota değil; zayıf sorular yeni kapsamı kolayca bastırabilir.
5. Mevcut seçimler aynı ünite içindeki semantik benzerliği baskılamıyor.
6. Yanlış soruyu uygulamadan Anki'ye taşıyan mükerrersiz bir kullanıcı akışı yok.
7. Doğru ama çok yavaş cevap, seçim motorunda zayıflık sinyali olarak yeterince kullanılmıyor.

---

## 3. Başarı metrikleri

Ana KPI'lar:

1. **Yeni temsilci kavram / dakika**
2. **Son 7 günde tekrar yanlış yapılan soru sayısı**
3. **Ünite kapsam dengesi** — soru bankası büyüklüğünden bağımsız
4. **Yakın-kopya yoğunluğu** — 200 soruluk kuyrukta semantik tekrar oranı
5. **Aktif çözüm hızı** — medyan saniye/soru

İkincil KPI'lar:

- Günlük 200 hedefinin tamamlanma oranı
- Çıkmış/high-yield kapsama oranı
- Anki outbox'tan başarıyla, mükerrersiz aktarılan kart sayısı
- Hızlı silme sırasında yanlış soruya seçim taşınması regresyonu = 0

Gösterilmemesi gereken yanıltıcı ana metrik:

- Salt “23.930 sorunun yüzde kaçı bitti?” yüzdesi. Bu değer bankanın üretim hacmine bağımlıdır ve puan getirisini doğrudan ölçmez.

---

## 4. Faz P0 — en küçük, en yüksek çarpanlı teslim

Tahmini kapsam: 1–2 odaklı çalışma günü. Yeni Supabase tablosu gerektirmemeli.

### P0.1 — Evrensel `BİTİR | SİL`

Mevcut çalışma ağacında `SİL` düğmesini overflow menüden çıkarıp quiz başlığına alan WIP zaten var. Bu çalışma **korunacak ve tamamlanacak**.

İstenen kesin düzen:

```text
[ BİTİR ] [ SİL ] [ … ]
```

Kurallar:

- `BİTİR`, yalnız `exam` modunda değil standart ünite quizinde de görünür.
- `SİL`, `BİTİR` düğmesinin hemen sağında; mobilde de overflow menünün dışında kalır.
- Silme sonrası sıradaki soruya önceki seçili şık taşınmaz.
- Soru aktif listeden anında çıkar; DB yazımı mevcut `pendingDeletes` kuyruğuyla güvenli biçimde ertelenir.
- İlk teslimde mevcut onay modalı korunabilir. Bir sonraki küçük iyileştirmede modal yerine 6 saniyelik **Geri Al** toast'ı değerlendirilir; bu değişim ayrı test ve ayrı commit olmalıdır.
- `Shift+D` isteğe bağlı klavye kısayolu ancak Geri Al mevcutsa eklenir.

Kabul kriterleri:

- Exam ve standart quizde görsel sıra `BİTİR | SİL | …`.
- Silinen mevcut soru anında kaybolur, indeks sınır içinde kalır.
- Yeni soruda hiçbir şık otomatik seçili değildir.
- Son sorunun silinmesi boş/sonuç durumunu hata vermeden yönetir.
- `e2e/quiz-delete-selection.spec.ts` Chromium tek worker ile geçer.

### P0.2 — Ünite başlangıcında soru adedi seçimi

Mevcut `handleUnitSelect`, ünite içindeki tüm soru içeriklerini çekiyor. Büyük ünitelerde bu hem oturumu şişiriyor hem başlangıç gecikmesini artırıyor.

Yeni küçük ara ekran/preset:

- **Hızlı 20**
- **Standart 40** — varsayılan
- **Görülmemişlerden 100**
- **Tüm görülmemişler**
- İsteğe bağlı özel sayı

Seçim, tam içerik çekilmeden önce skeleton ID'leri üzerinde yapılmalı; sadece seçilen N sorunun içeriği `fetchQuestionsByIds()` ile çekilmeli.

Varsayılan seçim:

- O ünite içinde görülmemişler önce.
- Yetersizse yanlış/boş/yavaş doğru.
- En son hızlı ve sürekli doğru çözülenler.

Kabul kriterleri:

- 527 soruluk ünite için “40” seçildiğinde en fazla 40 tam soru çekilir.
- Aynı oturum içinde ID tekrarı yoktur.
- Görülmemiş havuz varken sürekli doğru çözülen soru seçilmez.
- Başlatma overlay'i ve etkileşim bekleme süresi mevcut tam-ünite akışından kötü olmaz.

### P0.3 — `70 Gün Sprint` ana menü kartı

Ana ekrana tek bir birincil kart eklenir:

```text
70 GÜN SPRINT
Bugünün 200'ü
170 yeni temsilci · 30 hata/slow recall
```

Bu kart yeni bir dev sistem değil; mevcut skeleton + stats + `fetchQuestionsByIds` altyapısının tek orkestrasyon noktasıdır.

İlk P0 algoritması — şemasız ve deterministik:

1. Uygulamada aktif olan 14 ana dersi kullan.
2. `ÇIKMIŞ SORULAR`, `Pedodonti Cikmis`, `Yanlışlarım` için açık ve testli özel lane oluştur; isim/mojibake eşleşmesini normalize et.
3. Günlük bütçe varsayılan 200, ayarlardan 100/150/200 seçilebilir.
4. İlk 42 gün: %85 yeni, %15 yanlış/boş/yavaş doğru.
5. Sonraki 18 gün: %70 yeni, %25 yanlış/boş/yavaş, %5 kalibrasyon.
6. Son 10 gün: %30 yalnız yüksek değerli yeni, %60 yanlış/boş/yavaş, %10 kalibrasyon/çıkmış.
7. Ders kotasını bankadaki soru sayısına göre değil, DUS ağırlığı + kullanıcı zayıflığına göre dağıt.
8. Her ders içinde en az kapsanan üniteyi öne al; aynı büyük ünitenin kuyruğu yutmasına izin verme.
9. Seçilen 200 ID'yi gün boyunca sabit tut; yeniden açınca kaldığı yerden devam et.

Not: İlk P0 sürümünde semantik embedding kullanılmaz. Önce açık kota, unit round-robin ve doğru kalıcılık sağlanır.

Kabul kriterleri:

- Bütçe 200 ise uygun havuz bulunduğunda tam 200 benzersiz ID.
- Aynı gün yeniden üretim aynı manifesti döndürür; “rastgele yenile” ile kolay soru avcılığı olmaz.
- En az kapsanan ünite, daha çok çözülmüş ünitelerden önce gelir.
- Radyoloji/Protez soru sayıları nedeniyle toplamın orantısız kısmını alamaz; buna karşın ünite genişlikleri korunur.
- High-yield ve çıkmış sorular görünür bir breakdown içinde raporlanır.
- Pazar “sınırsız yanlış” yerine günlük bütçeyi aşmayacak şekilde önceliklendirilir.

### P0.4 — Seçim motorunu tek kaynakta toplama

Yeni derin modül önerisi:

```text
src/lib/studyQueue.ts
```

Bu modül:

- exposure kovalarını,
- yanlış/boş/yavaş doğru önceliğini,
- ders ve ünite kotalarını,
- sınava kalan gün fazlarını,
- breakdown/açıklama nedenlerini

tek yerde yönetir.

`App.tsx` yalnız ID manifestini ister ve içeriği yükler. SQL günlük deneme, manuel deneme ve Smart Study algoritmalarının birbirinden farklı görünme kuralları üretmesi aşamalı olarak azaltılır.

Her seçilen soru için debug nedeni bulunmalı:

```ts
type PickReason =
  | 'unseen_unit_coverage'
  | 'previous_wrong'
  | 'slow_correct'
  | 'high_yield'
  | 'past_exam'
  | 'calibration';
```

Bu nedenler kullanıcıya kısa breakdown olarak gösterilir; gizli skorla açıklanamaz bir kuyruk oluşturulmaz.

---

## 5. Faz P1 — semantik “Temsilci Kapsama”

P0 en az birkaç gerçek oturumda stabil olmadan açılmamalı. Önce Radyoloji ve Protez'de feature flag ile çalışır.

### 5.1 Amaç

Aynı ünitedeki çok benzer soru varyasyonlarının kısa günlük kuyruğu doldurmasını engellemek. Bu özellik:

- soru silmez,
- quality flag değiştirmez,
- farklı üniteleri birbirine karşı dedup etmez,
- benzersiz bilgi taşıyan bir soruyu kalıcı olarak dışlamaz.

### 5.2 Seçim mantığı

Önerilen sıralama:

1. Çıkmış / high-yield / daha önce yanlış yapılan adayları kilitle.
2. Kalan görülmemiş adaylar arasından ünite içi **Maximal Marginal Relevance / farthest-first** temsilciler seç.
3. Çok yakın aday aynı kısa manifestte ertelensin; gelecekteki manifestte seçilebilir.
4. Embedding'i eksik 347 aktif soru mevcut unit-round-robin fallback'ine düşsün.

Performans için 1536 boyutlu vektörler tarayıcıya taşınmamalı. İki makul uygulama seçeneği:

- **Tercih:** offline script ile ünite-içi `coverage_rank` manifesti üretmek ve küçük bir rank/cluster alanını sunmak.
- Alternatif: yalnız günlük manifest üretiminde sunucu tarafı RPC.

### 5.3 Kalite kapısı

Canlıya almadan önce Radyoloji ve Protez'de:

- rastgele 200 ile semantic-diverse 200'ün yakın-komşu yoğunluğu karşılaştırılır,
- her dersten en az 25 seçilmiş/ertelenmiş çift manuel incelenir,
- `high_yield`, `cikmis` ve daha önce yanlış soruların semantic suppression ile kaybolmadığı test edilir,
- aynı ünite dışına eşleştirme yapılmadığı doğrulanır.

Hedef: manuel kaliteyi düşürmeden kısa kuyruktaki yakın-kopya oranını en az %30 azaltmak. Bu hedef ölçülmeden “daha kaliteli” iddiası yapılmaz.

---

## 6. Faz P1 — Anki Outbox

### 6.1 Ürün kararı

Her yanlış soruyu otomatik Anki'ye atmak yeni bir iş yükü çığı yaratır. Bu nedenle:

- Yanlış/boş veya yavaş doğru sonrası **ANKİ'YE AL** düğmesi,
- sonuç ekranında **SEÇİLENLERİ ANKİ'YE AKTAR (N)**,
- ikinci aktarımda kart çoğaltmayan mükerrer kontrolü

uygulanır.

### 6.2 Kart biçimi

İlk sürüm AI ile yeniden soru yazmaz; kaynak soruyu ve doğru yanıtı deterministik taşır.

`Cloze-MAXXİNG` önerisi:

- `Text`: soru kökü + `Doğru yanıt: {{c1::<doğru şık metni>}}`
- `Başlık`: `<Ders> · <Ünite>`
- `Terimler`: açıklama + kullanıcının yanlış seçimi
- `Extra`: A–E seçenekleri + DUSBANKASI question ID
- Etiketler: `dusbankasi`, ders, ünite, `dusbankasi_qid_<uuid>`, `yanlis` veya `manuel`

Hedef deste:

- eşleşen mevcut `DUS::<Ders>::<Ünite>` destesi,
- eşleşme yoksa `DUS::<Ders>::DUSBANKASI Gelen Kutusu`.

### 6.3 Teknik davranış

1. `http://127.0.0.1:8765` için AnkiConnect `version` probe.
2. `findNotes` ile `dusbankasi_qid_<id>` dedup.
3. Yeni kartları tek `addNotes` batch'inde ekle.
4. Anki kapalı/CORS izni yoksa outbox kaybolmaz; TSV indir/clipboard fallback sunulur.
5. Outbox local-first tutulur. Buluta taşınırsa yeni tablo mutlaka `user_id` scoped RLS ile kurulmalı; public CRUD policy kullanılmamalı.

Kabul kriterleri:

- Aynı soru iki kez gönderildiğinde ikinci işlem 0 yeni not ekler.
- 20 kart batch aktarımı tek tek 20 HTTP isteği yapmaz.
- Anki kapalıyken kullanıcı seçimi kaybolmaz.
- Türkçe alan adları ve HTML güvenli biçimde aktarılır.
- Gerçek Anki profilinde kart açılır, cloze render edilir ve doğru destede görünür.

---

## 7. Faz P1 — Hız Modu

Küçük, ayarlanabilir davranış:

- Doğru cevap + kısa süre: 350–500 ms sonra otomatik sonraki soru.
- Yanlış/boş/yavaş doğru: açıklamada kal; kullanıcı Space ile ilerler.
- `1–5` veya `A–E` cevap, `Space` sonraki, `S` boş, `F` favori mevcut kısayollarla çakışmamalı.
- Hız Modu açıkken ağır giriş animasyonları azaltılır; `prefers-reduced-motion` korunur.
- Otomatik geçiş kapatılabilir; varsayılan ilk sürümde opt-in.

“Yavaş doğru” başlangıç eşiği:

- soru başına hedef 45 saniye,
- 75 saniye üzeri doğru cevap review lane'e aday,
- kullanıcı verisine göre daha sonra medyan bazlı kalibre edilebilir.

Kabul kriterleri:

- Otomatik ilerleme yalnız doğru cevapta çalışır.
- Kullanıcı açıklama paneli/AI paneli açtıysa otomatik ilerleme iptal olur.
- Yanlış cevap hiçbir zaman otomatik atlanmaz.
- Süre ve cevap istatistikleri sonraki soruya eksiksiz yazılır.

---

## 8. Bilinçli olarak yapılmayacaklar

Önümüzdeki 70 gün için düşük çarpanlı veya kapsamı büyük işler:

- Uygulama içine tam FSRS/spaced repetition motoru koymak — Anki zaten bunun kaynağı.
- 24 bin sorunun tümünü AI ile yeniden puanlamak/yazmak.
- Yeni kapsamlı gamification/rozet sistemi.
- Yeni mobil uygulama veya büyük UI yeniden tasarımı.
- Bütün veritabanını yeniden modellemek.
- Semantik benzerliği kalıcı silme kararı olarak kullanmak.
- Sırf bankayı “bitmiş” göstermek için rastgele soru silmek.

---

## 9. Test ve doğrulama sözleşmesi

### 9.1 Saf seçim motoru testleri

- Aynı seed + aynı gün + aynı stats = aynı manifest.
- Uygun havuz varsa 200 benzersiz ID.
- Görülmemiş quota tam veya en yakın mümkün değer.
- Bucket yetersizse açık deterministik sırayla kapanır.
- Ders/ünite kotalarında rounding farkı en fazla 1.
- Büyük soru bankası ders kotasını tek başına büyütmez.
- Yavaş doğru review lane'e girer; hızlı sürekli doğru en son kalır.
- Quality-excluded sorular hiçbir manifestte görünmez.

### 9.2 UI/E2E

- Exam ve quiz: `BİTİR | SİL | …` görünür.
- Silme regresyonu: seçili şık sonraki soruya taşınmaz.
- Ünite 40 presetinde yalnız 40 içerik çekilir.
- Sprint yarıda kapanıp açıldığında aynı yerden devam eder.
- Son soru/silinen soru/boş havuz sınırları.
- Hız Modu doğru/yanlış davranışı.
- Anki kapalı, Anki açık, tekrar gönderim senaryoları.

### 9.3 Komut kapıları

```powershell
npm test -- --run
npm run build
npx playwright test e2e/quiz-delete-selection.spec.ts --project=chromium --workers=1
```

Firefox/WebKit tarayıcıları bu makinede kurulu değilse tam-matris başarısı iddia edilmez. Tarayıcı kurulumu veya sadece Chromium kapsamı açıkça raporlanır.

### 9.4 Canlı doğrulama

Port/process yeterli kanıt değildir. Gerçek kullanıcı akışında:

1. Sprint manifesti açılır.
2. Bir soru cevaplanır.
3. Bir soru silinir, sıradaki soruda seçim temizliği görülür.
4. Oturum yenilenir ve devam eder.
5. Bir yanlış soru Anki outbox'a alınır.
6. Anki aktarılır ve kart gerçek destede açılır.

---

## 10. Mevcut doğrulama kanıtı ve bilinen engeller

Bu plan hazırlanırken:

- `npm test -- --run`: **16 dosya, 209 test geçti**.
- `npm run build`: **geçti**.
- Delete-selection Chromium tek-worker hedef testi: **1 geçti**.
- Tüm Playwright proje matrisi: Firefox ve WebKit binary'leri olmadığı için başarısız; paralel Chromium koşusunda hareketli kart tıklaması timeout verdi. Bu, hedef Chromium tek-worker geçişini geçersiz kılmaz ama tam E2E matrisinin temiz olduğu iddia edilmemelidir.

Mevcut `SİL` WIP'i:

- overflow menüden çıkarılmış,
- başlıkta doğrudan görünür,
- aktif listelerden optimistic düşürme ve stable question-ID cevabı üzerinde çalışılmış,
- henüz çalışma ağacında başka kullanıcı değişiklikleriyle birlikte bulunuyor; yeni sohbet bunları sahiplenmeden veya sıfırlamadan ilerlemeli.

---

## 11. Önerilen küçük commit sırası

Her commit geri alınabilir ve tek davranış taşımalı:

1. `test: characterize universal finish and quick delete flow`
2. `feat: show finish and delete together in every quiz mode`
3. `feat: add unit question-count presets before content fetch`
4. `test: define 70-day sprint queue quotas and fallbacks`
5. `feat: add deterministic 70-day sprint manifest`
6. `feat: expose sprint breakdown and resume state`
7. `test: define anki outbox dedup and offline behavior`
8. `feat: add local-first AnkiConnect outbox with TSV fallback`
9. `feat: add opt-in fast mode using response-time signal`
10. `experiment: semantic coverage ranking for Radyoloji and Protez`
11. `docs: record live acceptance results and handoff`

Semantic deney başarılı değilse 10. commit merge edilmez; P0/P1'in geri kalanı ondan bağımsız çalışmalıdır.

---

## 12. Supabase güvenlik / değişiklik sınırı

P0 mümkün olduğunca mevcut tablolarla çalışmalı. Yeni tablo gerekirse:

- exposed schema'da RLS zorunlu,
- `user_id = auth.uid()` sahiplik politikası,
- gerekli role'lere açık `GRANT`,
- update için select policy,
- service-role anahtarı browser'a asla verilmez,
- Advisor çıktısı ve gerçek test sorgusu olmadan migration tamamlandı sayılmaz.

Mevcut daily exam migration'larında public CRUD ve varsayılan kullanıcı ID'si gibi tek-kullanıcı odaklı kararlar bulunuyor. Bu plan onları genişletmemeli. Sprint manifesti ilk sürümde local-first tutulursa P0, güvenlik kapsamını büyütmeden teslim edilebilir.

---

## 13. Son ürün resmi

Kullanıcı uygulamayı açtığında karar vermek zorunda kalmamalı:

```text
70 GÜN SPRINT — BUGÜNÜN 200'Ü

170  Yeni temsilci kavram
 20  Önceki yanlış / boş
 10  Yavaş doğru / kalibrasyon

Radyoloji  24 · 12 ünite
Protez      22 · 11 ünite
Diğerleri 154 · DUS ağırlığı + zayıflık dengeli

[ BAŞLA ]
```

Soru ekranı:

```text
37 / 200   Radyoloji › Kistler        [ BİTİR ] [ SİL ] [ … ]
```

Yanlış cevap sonrası:

```text
[ ANKİ'YE AL ]   [ FAVORİ ]   [ AI AÇIKLAMA ]
```

Sonuç ekranı:

```text
Bugün: 200/200
Yeni temsilci kavram: 168
Tekrar hata: 7
Anki outbox: 11
[ SEÇİLENLERİ ANKİ'YE AKTAR ]
```

Bu tasarımın ana faydası yeni bir özellik kalabalığı değil; her gün tek doğru çalışma kararını otomatikleştirmesidir.
