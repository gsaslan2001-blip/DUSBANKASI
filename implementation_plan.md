# High-Yield Çalış Modu Ekleme Planı

Bu plan, kullanıcının `quality_flag === 'high_yield'` olan soruları istatistiklerine etki etmeden çözebileceği özel bir çalışma modu eklemeyi hedefler.

## Open Questions

> [!WARNING]  
> "High-Yield Çalış" butonunu "Odaklan" ve "Akıllı Çalışma" gibi modların bulunduğu **LessonSelection** (ana kontrol paneli) ekranına, diğerlerine benzer bir kart olarak eklemeyi planlıyorum. Tasarım veya yerleşimle ilgili özel bir tercihiniz var mı? (Örn. simge olarak bir 'Kupa' veya 'Yıldırım' kullanabilirim).

> [!NOTE]  
> High-Yield modundayken de soru çözümünün ardından sınav özeti (sonuç) ekranı görünsün mü, yoksa doğrudan ana menüye mi dönülsün? Plan dahilinde klasik deneme sınavı gibi **Sonuç ekranının görünmesini** (fakat sonuçların istatistiklere kaydedilmemesini) öngörüyorum.

## Proposed Changes

### Frontend / Uygulama Durumu (State Management)

#### [MODIFY] `src/App.tsx`
- Yeni bir React state'i eklenecek: `const [isHighYieldMode, setIsHighYieldMode] = useState(false);`
- `LessonSelection` (Ana Menü) bileşenine `onHighYieldClick` prop'u eklenecek ve bu tetiklendiğinde `questions` içerisinden `quality_flag === 'high_yield'` olanlar filtrelenerek rastgele (fisher-yates) sıralanacak.
- Bulunan sorular `examQuestions` içerisine set edilecek, `mode='exam'` ve `isHighYieldMode=true` yapılarak `QuizView` başlatılacak.
- Geri dönüldüğünde veya sınav bittiğinde (`handleGoBack`, `handleReturnToHome`) `isHighYieldMode` kapatılacak (`false`).
- `QuizView` bileşenine `disableStats={isHighYieldMode}` prop'u geçilecek.
- High-yield modunda yarım kalan oturumları (resume/session) sisteme ve DB'ye yazmamak için `onSaveSession` prop'u koşullu hale getirilecek (`isHighYieldMode ? undefined : ...`).

### UI / Kullanıcı Arayüzü

#### [MODIFY] `src/components/quiz/QuizView.tsx`
- Yeni bir opsiyonel prop eklenecek: `disableStats?: boolean;`
- Kullanıcı şık işaretlediğinde (soruyu cevapladığında) çağrılan `saveQuestionStat` (soru bazlı istatistik kaydetme fonksiyonu), eğer `disableStats` true ise tamamen es geçilecek. Bu sayede soru veritabanı loglarına veya yerel istatistiklere işlenmeyecek.

#### [MODIFY] `src/App.tsx` (İçindeki `LessonSelection` bileşeni)
- `LessonSelection` fonksiyon argümanlarına `onHighYieldClick` ve `highYieldCount` eklenecek.
- "Odaklan" ve "Akıllı Çalışma" kartlarının yanına veya uygun bir boşluğa, yeni bir `High-Yield Çalış` kartı/butonu (gradient çerçeveli ve ikonlu) eklenecek. Kartta kaç adet High-Yield soru bulunduğu gösterilecek.

## Verification Plan

### Manual Verification
- Uygulama başlatılarak Ana Menüde "High-Yield Çalış" butonunun aktif olup olmadığı, sayaçta doğru sayının (toplam eklenen high-yield soruları) gösterilip gösterilmediği kontrol edilecek.
- Moda girilip bir soru çözülecek.
- Soru çözüldükten sonra "İstatistikler" ekranına veya bulut veri senkronizasyonuna (Supabase) gidilerek o sorunun çözülme (attempt) ya da doğruluk (corrects) değerlerinde herhangi bir artış olup olmadığı doğrulanacak.
- High-Yield modu sonrasında uygulamanın ana menüye dönüp eski stabil durumuna (normal quiz modu) geri döndüğü teyit edilecek.
