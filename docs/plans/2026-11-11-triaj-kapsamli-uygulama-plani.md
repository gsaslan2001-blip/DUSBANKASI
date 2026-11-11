# TRİAJ kapsamlı düzeltme ve tamamlama uygulama planı

**Amaç:** DUSBANKASI TRİAJ modülünü kullanıcının belirlediği ilk tekrar düzenine, elle planlanabilir bir aylık takvime ve güvenilir hesap bazlı dış bağlantılara kavuşturmak; mevcut çalışma geçmişini korumak.

**Mimari:** Kanonik ders/ünite kataloğu ve sürümlü `triaj_state` tek plan kaynağıdır. İlk tekrar, konu çalışması ve en az 20 sorunun istatistiğini içeren tek oturumdur; bundan sonra ayrı T+3 testi kova kararını verir. Takvim, günlük plan ve Bugünün Konusu aynı görevleri farklı görünümde sunar. Tarayıcıdaki dış servis çağrıları oturum doğrulamalı sunucu uçlarına gider; servis kapalıyken temel çalışma sürer.

**Teknoloji:** React 19, TypeScript, Vite, Supabase Auth/Postgres/RLS, Vercel API, Vitest, Playwright. Önceki [entegrasyon planı](./2026-11-11-triaj-entegrasyon-plani.md) kural referansıdır; kullanıcı talebindeki ilk tekrar sırası o planın T+0 başlangıcından önceliklidir.

## 1. Kanıtlar ve belirsizlikler

| Konu | Kodda doğrulanan durum | Henüz doğrulanmamış |
| --- | --- | --- |
| İlk tekrar | `domain/state.ts` `planUnit`, doğrudan `T0_SAMPLING` ve 10 soruluk görev açıyor; `TriageModal` test akışı. | Kullanıcının mevcut kişisel kayıtlarının hangi aşamada olduğu. |
| Tarih/kayıt | `NotificationCalendarView` ve `SubjectDatabaseView` tarih ve kayıt kontrollerine sahip; `TriajViewContext` bunları `planUnit`/`rescheduleTask` ile Supabase revizyonuna yazıyor. | Gerçek hesapta hatanın kayıt, yetki, katalog, tarih kontrolü veya dağıtılmış sürüm kaynaklı olup olmadığı. |
| Günlük öneri | `App.tsx` eski `DailyPlanView` bileşenini `TriajModule` içine `recommendations` olarak geçiriyor; bu görünüm zayıf soru ve `nextUntouchedUnit` istatistiklerinden türetiliyor. | Kullanıcının verisindeki belirli önerilerin hangi kayıtlarla üretildiği. |
| DeepSeek | `integrations/deepseek.ts` önce `/api/ai/*` çağırıyor; bu uçlar `api/triaj/ai/*` aksine oturum/kota kontrolü yapmıyor. Fallback'te de oturum başlığı eklenmiyor, durum hatası `configured: true` olarak maskeleniyor. Vite yerel middleware farklı uygulama içeriyor. | Canlıda kapalı mesajının kesin nedeni, sağlayıcı anahtarı/model geçerliliği ve dağıtılan sürüm. |
| TickTick | OAuth ve şifreli hesap bağlantısı mevcut. Önceki turdaki **yerel, henüz dağıtılmamış** değişiklik ortam token'ıyla oturumsuz erişim yolunu kaldırdı. | OAuth uygulaması/callback, hesap bağlantısı, token geçerliliği ve odak uç noktasının canlı yanıtı. Ortam değişkenlerinin varlığı bunları ispatlamaz. |
| Tema/takvim | Koyu temada slate renkleri tersine çevriliyor; sarı girişlerin bazılarında açık metin miras alınıyor. Önceki turda yerel kontrast ve takvim düzeni değişiklikleri yapıldı. | Her tema, durum ve ekran boyutunda görsel/klavye doğrulaması. |
| Veri modeli | `taskSchema` bütün görevlerde `questionCount >= 1` bekliyor; `get_triaj_tasks` ve `prepare_triaj_question_sets` SQL işlevleri soru görevleri için yazılmış. Depo yalnız `schema_version = 1` kabul ediyor. | Canlı şemanın migration dosyalarıyla birebir uyumu; eski cihazların sürüm dağılımı. |

**Güvenlik önceliği:** Ortak ortam token'ı hiçbir anonim veya diğer kullanıcı isteğine düşmemeli. `/api/ai/deepseek` kimlik doğrulamasız ve kotasız olduğundan üretimde erişilebilirliği hemen kontrollü olarak sınanmalı; erişilebiliyorsa hesap bazlı koruma ilk dağıtımda kapatılmalı. Sırları, JWT'leri, kişisel kayıtları ve sağlayıcı ham yanıtlarını loga veya plana yazma. Eski kaynakta bulunmuş kimlik bilgileri için yenileme durumunu kontrol et; değerleri yeniden kullanma varsayımı yapma.

## 2. Hedef kullanıcı davranışı ve varsayımlar

1. Kullanıcı herhangi bir güne, kanonik ders ve ünite seçerek **İlk tekrar** planlar. Bu eylem test çözümü veya kova ataması yapmaz.
2. İlk tekrar tek oturumdur: kullanıcı konuyu çalışır, **en az 20 soru** çözer, doğru/yanlış/boş sayılarını ve fiili tarihi kaydeder. 20 üst sınır değildir; 20, 25, 40 veya daha fazla soru gerçek toplamıyla kaydedilebilir. İlk tekrarın başarısı istatistik olarak saklanır, kova kararı vermez.
3. İlk tekrar tamamlanınca T+3 doğrudan ilk tekrarın fiili tarihinden üç takvim günü sonrasına açılır. Arada ayrıca 10 soruluk görev veya ikinci bir T+0 oturumu yoktur. T+3'te esas test çözülür; sonucu yeşil/sarı/kırmızı kararını verir. Mevcut 40 soru ve 34/28 eşikleri, kullanıcı farklı bir kural belirtmediğinden korunur; T+14 ve Cumartesi onarımı da özgün plandaki kuralları korur.
4. Gelecek/geçmiş tarihler planlanabilir. Fiili tamamlama tarihi geleceğe yazılamaz; kullanıcı bir tarihi değiştirirken plan ve tamamlanma ayrımı görünür. Tamamlanmış geçmiş sessizce yeniden hesaplanmaz.
5. Aynı ünite için sürmekte olan döngü varsa yeni bir döngü otomatik açılmaz: kullanıcı mevcut görevi görür, tarihini düzenler veya açıkça iptal eder. İptal geçmişi silmez.
6. İlk tekrar soruları DUSBANKASI'nda çözülebilir veya başka kaynaktan çözülüp elle girilebilir. Banka oturumunda kullanıcı başlangıçta en az 20 olacak şekilde soru sayısını seçer; teslim seçilen tüm sorular üzerinden doğrulanır. Elle girişte toplam doğru + yanlış + boş olup en az 20'dir; soru ID'si uydurulmaz. T+3 setinden yalnız gerçekten bilinen ilk tekrar soru ID'leri çıkarılır. Tarihler `Europe/Istanbul` takvim günleriyle hesaplanır.
7. İlk tekrar istatistiği günlük toplama ve geçmişe bir kez yansır; elle girilen sonuç tek tek banka soru istatistiği oluşturmaz. Çalışma süresi yalnız gerçekten girilmiş veya ölçülmüşse gösterilir; uydurulmuş süre üretilmez.

**Kaynak çelişkisi:** Eski planın 50 sorudan 10 + 40 ayırma kuralı artık yeni ilk tekrar için uygulanmaz. 20 veya daha fazla ilk tekrar sorusundan sonra T+3 için ayrıca 40 uygun, tekrar edilmeyen soru bulunmayabilir; kullanıcıya gerçek uygun sayıyı göster, eksik havuzda elle tam sonuç girişini sun. Eksik sayıyı 40 soruluk tam test gibi puanlama; soru tekrarını veya T+3 kotasını sessizce değiştirme. İlk tekrar dış kaynakta çözülmüş ve soru ID'leri bilinmiyorsa soruların tekrarlanmadığı garanti edilemez; bu sınırlama görünür olmalı.

### Modül taraması: etki ve kapsam

| Alan | İncelenecek ve güncellenecek sözleşme |
| --- | --- |
| Modül kabuğu ve üst gezinme | `TriajModule.tsx`, `TriajHeader.tsx`: sekmeler, geri dönüş, modal ve bildirimler; mevcut tüm işlevleri koru. |
| Günlük plan ve odak | `DailyPlannerView.tsx`, `domain/focus.ts`: dört blok, planlanmış görevler, TickTick ve manuel süre; eski 10 soru, 5'in katları, kalan 40 ifadelerini kaldır. 7 takvim günü ortalaması ve seçili geçmiş günün bugünü değiştirmemesi test edilsin. |
| Dersler ve üniteler | `SubjectDatabaseView.tsx`, `data/subjectProtocols.ts`, `domain/catalog.ts`: kartlar, filtreler, tekrar planı, matris, katalog kimlikleri ve tüm ders protokol metinleri. İlk tekrarın plan tarihi, gerçek sonucu ve T+3 vadesi ayrılmalı. |
| Takvim ve geçmiş | `NotificationCalendarView.tsx`, `domain/state.ts`: aylık düzen, tarih ekleme/taşıma, kuyruk, tamamlanan görev ve denetim geçmişi; birden fazla görev ve Cumartesi kısıtı. |
| Test ve AI diyalogları | `TriageModal.tsx`, `DeepSeekModal.tsx`, `SystemModals.tsx`: ilk tekrar girişleri ve doğru kota; T+3 kova önizlemesi; AI ve rehberde eski 10/40 anlatımını düzelt; tüm formların tema kontrastını test et. |
| Rapor | `KovaTriageReportView.tsx`, `domain/triage.ts`: ilk tekrar puanını kova sayma; T+3 ve sonraki aşamaların skorlarını, bekleyen ve taburcu sayımlarını kontrol et. |
| Deneme ve hata analizi | `ExamAndErrorAnalyticsView.tsx`, `domain/analytics.ts`, `domain/simulation.ts`: 16 branş girişi, hata/protokol, simülasyon bağlantısı, gerçek eksik branşlar, Anki, kaynak soru günlükleri ve koyu tema. İlk tekrar istatistiği deneme skoru değildir. |
| Banka bağlantısı | `TodayTopics.tsx`, `App.tsx`, `domain/questionTasks.ts`, `src/types/app.ts`, `useResumableSession.ts`: değişken ilk tekrar kotası, ilk tekrar/T+3 setleri, devam, tam teslim, eksik havuz, soru kimliği ve çift sayım. |
| Kalıcılık ve yedek | `TriajProvider.tsx`, `persistence/`, `migration/`, `BackupDialog.tsx`, `scripts/import_triaj_workbook.py`: eski 10 soruluk sonuç, açık set, kullanıcı ayarları, çözülmemiş eşleme, revizyon, içe aktarma ve yedek. |
| Sunucu ve harici bağlantılar | `api/triaj/`, `api/ai/`, `integrations/`, `vite.config.ts`: oturum/kota, OAuth, Deploy çağrıları ve yerel/üretim davranışının eşitliği. |
| Veritabanı | `supabase/migrations/20261111072015_triaj_state.sql`, `20261111072031_triaj_integrations.sql` ve takip eden yeni migration: soru sayısı/set hazırlama, RLS, kilit, sürüm uyumluluğu; uygulama ve RPC birlikte sınanır. |

Bu tablo bir kod taramasından çıkan uygulama envanteridir; her ekranın gerçek hesapta çalıştığına veya canlı altyapının doğrulandığına dair bir test sonucu değildir.

## 3. Uygulama sırası ve bağımlılıklar

### A. Başlangıç durumunu sabitle ve gerçek belirtileri çoğalt

**Dosyalar:** `e2e/triaj.spec.ts`, `e2e/triaj-ui-walkthrough.spec.ts`, `src/modules/triaj/integrations/routes.test.ts`, `playwright.config.ts`.

1. `git status --short` ve `git diff` ile mevcut kullanıcı değişikliklerini ve önceki turdaki yerel değişiklikleri ayır; değiştirmeden koru. Önceki takvim/kontrast yamasını başlangıç kabul etme, görsel testle değerlendir.
2. Test hesabında başlangıç durumu/yedek, çalışan dağıtım commit'i ve kullanıcıya ait olmayan örnek verilerle ölçüm al. Canlı kişisel veriyi değiştiren test yapma.
3. E2E fixture'a boş hesap, planlı ilk tekrar, tamamlanmış eski T+0, gecikmiş T+3 ve iki cihaz durumu ekle. Tarih seçme → ünite seçme → kaydetme → yenileme → diğer cihazda görme testini kur; önce mevcut davranışta arızayı çoğalt ve hata kodunu sınıflandır.
4. DeepSeek ve TickTick için uygulama üzerinden ağ zincirini ayır: isteğin URL'si, HTTP durumu, kimlik doğrulama, yapılandırma, kota, sağlayıcı. Anahtar/token içermeyen korelasyon kimliği ve sınırlı hata kodları kullan. Kaynak DusTriaj ile aynı girdileri ve tarih aralığını karşılaştır; kişisel veriyi loglama.
5. `npm test`, `npm run build`, `npx --no-install tsc -p tsconfig.api.json --noEmit` ve ilgili Playwright senaryolarıyla başlangıç sonuçlarını kaydet. Mock testleri canlı sağlayıcı testi olarak raporlama.

**Kabul:** Her kullanıcı belirtisi için tekrarlanabilir test veya kesin erişim engeli ve kanıt bulunur; değişen üretim verisi yoktur.

### B. Güvenli ve tutarlı DeepSeek / TickTick bağlantıları

**Dosyalar:** `src/modules/triaj/integrations/{deepseek,request,ticktick}.ts`, `src/modules/triaj/components/{DeepSeekModal,DailyPlannerView,TriageModal}.tsx`, `api/ai/{status,deepseek}.ts`, `api/triaj/ai/{status,deepseek}.ts`, `api/triaj/ticktick/*.ts`, `api/_lib/triaj/{deepseek,ticktick,focus,http}.ts`, `vite.config.ts`, `src/modules/triaj/integrations/routes.test.ts`.

1. Önce başarısız testler: anonim DeepSeek/TickTick isteği 401; iki kullanıcı birbirinin TickTick verisini alamaz; token ortamda bulunsa da hesap bağlantısız kişi veriye ulaşamaz; AI isteği kotayı kullanır; durum hatası `configured: true` dönmez.
2. TRİAJ istemcisini `triajRequest` ile yalnız oturum başlığı taşıyan `api/triaj/ai/*` sözleşmesine geçir. `api/ai/*` için başka tüketicileri `rg` ile kontrol et; varsa aynı auth/kota korumasına yönlendir, yoksa kaldır. Yanlış URL’ye sessiz fallback yapma. Süre aşımı/iptal ve 401, 429, 503, sağlayıcı reddi için ayrı kullanıcı mesajları göster.
3. `vite.config.ts` içindeki ayrı AI uygulamasını kaldırıp yerel istekleri gerçek handler ile aynı doğrulama ve davranışa yönlendir. Üretim ve yerel davranışı aynı istek fixture'larıyla karşılaştır.
4. TickTick bağlantısında doğru origin/callback, OAuth state, popup, şifreli hesap kaydı, disconnect ve süre dolumunu kontrol et. Geçerli sağlayıcı sözleşmesi destekliyorsa eşzamanlı yenileme yarışını engelleyerek refresh uygula; doğrulanamıyorsa açık yeniden bağlanma durumunu göster. Paylaşılan env token'ını otomatik fallback olarak kullanma. Eski token yalnız kullanıcı kimliği kesin eşleşen, sunucu tarafı bir defalık güvenli aktarım yolu tasarlanırsa kullanılabilir.
5. Deploy.com yapılandırmasını çalışan kaynakla karşılaştır: anahtarın varlığı, izinli origin, model, istek/yanıt şeması ve timeout. Sadece yapılandırma durumunu göster; gerçek sağlayıcı sağlığını yapılandırma varlığından türetme.
6. Preview'da oturumlu test hesabıyla dört AI görevinden en az bir gerçek istek, TickTick bağla → odak verisi → bağlantı kes → yeniden bağla akışını doğrula. 401/429/timeout/süresi dolmuş token senaryoları otomatik mock testte tekrar edilir.

**Kabul:** Gizli bilgi istemciye çıkmaz; anonim erişim engellenir, hata mesajları gerçek durumu ayırır; canlı sağlayıcı smoke testleri başarılıdır veya somut dış bağımlılık engeli kaydedilir.

### C. İlk tekrar ve veri uyumluluğu

**Dosyalar:** `src/modules/triaj/{types.ts,domain/state.ts,domain/questionTasks.ts,domain/state.test.ts,persistence/recordSchemas.ts,persistence/triajRepository.ts,components/TriajViewContext.tsx,components/TriageModal.tsx,TodayTopics.tsx}`, `supabase/migrations/`, `e2e/triaj.spec.ts`.

1. Saf durum geçiş testlerini önce yaz: 19 soru reddedilir; 20/25/40 ve geçerli daha büyük toplamlar kabul edilir; doğru/yanlış/boş negatif veya toplamla uyumsuz olamaz. Başarı ne olursa olsun ilk tekrar kova atamaz; fiili tarihten üç gün sonrasına tek T+3 açılır, tekrarlı teslim ikinci görev veya istatistik üretmez. Geçmiş/gelecek ve Türkiye gece yarısı deterministiktir.
2. Mevcut `T0_SAMPLING` görev/sonuç altyapısını koruyup yeni oturumları sürümlü bir **ilk tekrar** kuralıyla ayırt et; legacy 10 soruluk kayıtları yeni en az 20 kuralı altında yeniden doğrulama. Yeni bir ayrı ön görev ya da ikinci T+0 açma. Başlangıç hedefi 20, banka oturumunda seçilen kesin set büyüklüğü en az 20; elle giriş toplamı da en az 20'dir. Şema üst sınırlarını ve gerçek ürün sınırını kontrol edip kullanıcıya bildir; keyfi 20–25 sınırı uygulama.
3. `planUnit` ilk tekrar için görev oluşturur. `recordTaskResult` bu görevin tek oturum olarak tesliminde gerçek tarih, doğru/yanlış/boş, toplam, kaynak, varsa gerçek soru ID'leri ve notu atomik saklar; görevi kapatıp aynı revizyonda tek `T3_MAIN` oluşturur. T+3 öncesi kova `NONE` kalır. El ile girilen 25 soru ile bankada önceden seçilmiş 25 sorunun doğrulaması ayrı test edilir.
4. `recordSchemas.ts`, `triajRepository.ts`, `types.ts`, `legacyBackup.ts` ve workbook aktarımı için sürümlü kuralı ve eski format uyumluluğunu uygula. **Geçmiş 10 soruluk sonuçları değiştirme veya 20'ye tamamlanmış gösterme**; eski açık görevleri/aktif soru setlerini sessizce dönüştürme: kullanıcıya eski görev ve yeni ilk tekrar arasında açık, veri kaybı yaratmayan geçiş sun. Eski istemcinin yeni veriyi ezmesini önle; yedek, içe alma ve rollback testlerini yap.
5. `get_triaj_tasks`, `prepare_triaj_question_sets`, `App.tsx`, `domain/questionTasks.ts` ve `useResumableSession.ts` değişken ama oturum başlangıcında sabitlenmiş ilk tekrar soru sayısını desteklesin. T+3 için bilinen ilk tekrar ID'leri dışlansın; elle sonuçta ID bilinmiyorsa bulunmuş gibi davranılmasın. SQL ve istemci set boyutunda aynı kuralları uygulasın. Migration, RLS, revizyon kilidi ve iki cihazda aynı seti koru.
6. `TriageModal` ilk tekrar için en az 20 sayıyı ve istatistiği girişe açsın; konu çalışması ve soru çözümünü tek oturum olarak anlatsın. Bankada eksik havuzda gerçek sayı ve elle giriş seçeneği gösterilsin. Yarım test, başarısız kayıt ve tekrarlı gönderim görevi erken kapatmasın. Günlük soru toplamı ve genel soru istatistiği doğru kaynakla yalnız bir kez güncellensin; `recordTaskResult` içindeki tahmini süreyi gerçek süre gibi kaydetme.

**Kabul:** Boş hesapta ünite → konu çalışması + en az 20 soruluk tek ilk tekrar/istatistik → üç gün sonra 40 soruluk T+3 → kova akışı; 19/20/25 sınırları, eski 10 soruluk v1 kayıtları, iki cihaz, yedek geri yükleme ve tekrarlı istek testleri geçer.

### D. Ders ve ünite tarihleri / aylık takvim

**Dosyalar:** `components/NotificationCalendarView.tsx`, `components/SubjectDatabaseView.tsx`, `components/TriajViewContext.tsx`, `TriajProvider.tsx`, `triaj.css`, `e2e/triaj.spec.ts`, `e2e/triaj-ui-walkthrough.spec.ts`.

1. Kayıt hatasının A'daki gerçek nedenini düzelt. Ders seçimi değişince ünite listesini temizle; birleşik Fizyoloji/Histoloji ID'sini ve katalog dışı dersleri açıkça ele al. Geçersiz tarih veya kayıt hatasını form yanında göster, girdileri koru; başarılı Supabase onayından önce formu kapatma.
2. Ders kartı, tekrar tablosu ve takvim aynı planlama eylemini kullansın. Seçilen herhangi bir gün için bir veya birden çok farklı ünite ekle; aynı ünitenin aktif döngüsüne ilişkin çakışmayı açıklayıp mevcut göreve götür. Tarih değiştirme geçmişini koru; Cumartesi onarım kuralını uygulamaya devam et.
3. Aylık takvimde Pazartesi başlangıçlı 7 sütun, önceki/sonraki ay ve bugün, ay dışı gün ayrımı, seçili ve bugünün görünür durumu, her hücrede alan elverdiğince görev adı/evresi ve `+N` göster. Gün ayrıntısında planlama, açma, tarih değiştirme ve durumları sun. Çok sayıda görev hücre boyutunu bozmasın.
4. Masaüstünde gerçek takvim ızgarası; mobilde okunabilir hücreler ve seçili günün liste görünümü. Sürükleme ek kolaylık olsun; tarih alanı ve klavye ile aynı işlem yapılabilsin. Odak görünürlüğü, ekran okuyucu etiketleri ve seçili güne geri dönüş test edilsin.
5. Hata senaryolarını kapsa: ilk kayıt, sonraki kayıt, yeniden yükleme, farklı ay, 29 Şubat, aynı günde çoklu ünite, iki cihaz revizyon çakışması, ağ kesintisi ve tekrar deneme.

**Kabul:** Kullanıcı istediği tarihi seçip dersi/üniteyi kaydeder, yenileme ve başka cihazda aynı günü görür; aylık görünüm ve klavye/mobil akışları doğrulanır.

### E. Günlük plan ve önerilerin anlamlı hale getirilmesi

**Dosyalar:** `src/App.tsx`, `src/components/DailyPlanView.tsx`, `src/modules/triaj/{TodayTopics.tsx,TriajProvider.tsx,domain/questionTasks.ts,components/DailyPlannerView.tsx,TriajModule.tsx}`.

1. Eski `DailyPlanView`'in soru istatistiği önerilerini TRİAJ görevleriyle karıştırma. `recommendations` bağlantısını kaldır veya ayrı ve açıkça etiketli isteğe bağlı analitik olarak taşı; TRİAJ ana planı tek kaynaktan gelsin.
2. Saf bir günlük plan seçicisi yaz: gecikmiş ve bugün vadesi gelen açık görevler, seçilmiş tarihteki ilk tekrarlar, tamamlananlar ve uygun sonraki adım. Sıra: gecikmiş kritik test/onarım, bugünkü tekrarlar, kullanıcı planladığı ilk tekrarlar. Eşitlikte tarih ve kararlı görev ID'si. Kaynağı/evreyi ve neden gösterildiğini belirt.
3. Kullanıcı planı yoksa boş durum ve takvime ekleme eylemi göster. Rastgele katalog ünitesi veya yetersiz kanıttan zayıf alan üretme. Gelecek planlı üniteleri bugüne taşıma; kapasite ve kırmızı kova uyarılarını gerçek açık kayıtlardan hesapla.
4. Bugünün Konusu ilk tekrarın konu çalışması ve soru çözümünü aynı görevde gösterir; seçilen soru sayısıyla set hazırlar veya elle sonuç girişine götürür. Takvim ve ana ekran aynı görev kimliğini kullanır; tamamlandıktan sonra iki görünüm aynı revizyonda güncellenir.
5. Boş veri, çoklu ünite, gecikmiş test, ertelenmiş görev, gelecekte planlanan ünite, tamamlanan görev ve iki cihaz testleriyle önerilerin gerçekten plan verisini yansıttığını kanıtla.

**Kabul:** Ekrandaki her öneri kayıtlı göreve veya açıkça etiketli gerçek istatistiğe dayanır; boş hesapta alakasız ders önerilmez.

### F. Tema, erişilebilirlik ve görsel kalite

**Dosyalar:** `src/modules/triaj/triaj.css`, `components/ExamAndErrorAnalyticsView.tsx`, diğer TRİAJ formları, `e2e/triaj-ui-walkthrough.spec.ts`.

1. Açık/koyu/OLED için form yüzeyi, metin, placeholder, kenarlık, odak, devre dışı ve hata renklerini tanımla; sarı girişlerde `color-scheme` tek başına yeterli değildir. Date input simgesi ve tarayıcıya özgü metni kontrol et.
2. Deneme formu, tekrar tablosu, analitik, seçili görev ve takvimde tüm sarı/amber zeminlerin kontrastını ölç; normal metinde en az 4.5:1, büyük metinde 3:1 hedefle. Durum yalnız renkle anlatılmasın.
3. Görsel kontrolleri masaüstü ve mobil genişliklerde, üç temada, boş/dolu/hata/devre dışı hallerinde yap. İkinci bir tema sistemi icat etmeden mevcut tasarım token'larına bağla.

**Kabul:** Kullanıcının ekran görüntülerindeki formlarda girilen tarih ve netler okunur; ay görünümü taşmaz ve odak belirgindir.

### G. Kapsamlı regresyon, geçiş ve dağıtım

**Dosyalar:** `src/modules/triaj/**/*.test.ts`, `e2e/triaj.spec.ts`, `e2e/cross-device-resume.spec.ts`, `scripts/tests/triaj_rls.sql`, yeni migration ve ilgili dokümanlar.

1. `npm test`, `npm run build`, `npx --no-install tsc -p tsconfig.api.json --noEmit`, `npx playwright test e2e/triaj.spec.ts e2e/cross-device-resume.spec.ts` çalıştır. Yeni E2E senaryolarını ilgili dosyalara ekle; test verilerinin gerçek kullanıcı kaydına yazmadığını doğrula.
2. Staging'de iki hesapla RLS, aynı hesapta iki cihazla revizyon çakışması, oturum değişikliği, v1 yedek içe alma/dışa verme, rollback ve tekrar deneme testlerini çalıştır. Soru seti seçimi ve eşzamanlı teslim tek sonuç üretmeli.
3. Preview'da gerçek servis smoke testi ve mobil/koyu tema kontrolü yap. Gizli değerleri raporlama; eski sızmış anahtarların yenilendiğini doğrula. Ortam değişkenleri her ortamda doğrulanır, ama gereksiz yere yeniden yazılmaz.
4. Ayrı, mantıklı commit'ler oluştur; kullanıcıya ait mevcut değişiklikleri commit'e katma. Migration ve uygulama uyumlu dağıtım sırasını kanıtla; eski istemcilerin yeni şemayı ezmesi engellenmeden ilerleme.
5. Proje talimatına göre tüm testler ve build geçince `npx vercel --prod` ile dağıt; canlıda oturumlu kullanıcı akışı, API durumları ve takvimi yeniden doğrula. Canlı doğrulama için ayrı test hesabı/verisi kullan. Hata halinde uygulama sürümünü ve veri yedeğini geri alma adımlarını önceden hazırla.

**Teslim ölçütü:** İlk tekrardan kova sonucuna kadar kullanıcı akışı, manuel tarih planlama, ilgili günlük plan, tüm temalar ve iki dış bağlantı gerçek ortamda doğrulanmış; test sonuçları ve varsa kalan dış bağımlılık açıkça raporlanmış olmalı.
