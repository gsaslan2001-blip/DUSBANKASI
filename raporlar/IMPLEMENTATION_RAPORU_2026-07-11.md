# DUSBANKASI — IMPLEMENTATION RAPORU (Devir Talimatı)

> **Tarih:** 2026-07-11 · **Hazırlayan:** PAI (denetim oturumu)
> **Hedef okuyucu:** Bu raporu uygulayacak ajan. Talimatlar sıralı, atomik ve doğrulama adımlıdır.
> **ALTIN KURALLAR (her fazda geçerli):**
> 1. Fazları SIRAYLA uygula. Bir fazın DOĞRULAMA adımı geçmeden sonrakine geçme.
> 2. Satır numaraları kayabilir — her zaman verilen **ANCHOR** (birebir aranacak kod parçası) ile konum bul. Anchor'ı `Grep` ile bulamazsan DUR ve kullanıcıya sor.
> 3. Supabase SQL'lerini `mcp supabase execute_sql / apply_migration` ile, proje ID `vblndoyjmkgaeuihydyd` üzerinde çalıştır. DDL için `apply_migration` kullan.
> 4. Her fazın sonunda `npx vitest run` çalıştır; 199 aktif test yeşil kalmalı (Faz 1 sonrası 201).
> 5. Bu repo'da e2e testleri (`e2e/`) PROD veritabanına yazar. Faz 6 tamamlanmadan `npx playwright test` ÇALIŞTIRMA.

---

## MEVCUT DURUM ÖZETİ (kanıtlı)

| Alan | Durum |
|---|---|
| Frontend | Vite + React 19 + TS. Router yok (`appState` string state machine, `src/App.tsx`). Grafikler custom **d3**. |
| Supabase projesi | `DUSBANK` / `vblndoyjmkgaeuihydyd` (ap-southeast-2, PG 17), DB boyutu **219 MB** |
| Sorular | 20.604 satır (`questions`); ders dağılımı: Radyoloji 3901, Protez 3745, Histoloji 2680, Ortodonti 2075, Pedodonti 1943, Endodonti 1727, Fizyoloji 1582, Periodontoloji 1533, Patoloji 1157, ÇIKMIŞ 193, Yanlışlarım 68 |
| quality_flag | null: 19.892 · high_yield: 440 · cikmis: 193 · auto_deleted: 79 |
| Embedding eksiği | 241 soruda stem/explanation embedding NULL |
| Silinmiş kayıt | `deleted_records`: 4.615 (hepsi questions) |
| Edge Function | `manage-questions` v3 (soru ekleme + OpenAI embedding, service-role insert) |
| Cron | 3 iş: `cleanup-old-sessions` (02:00), `auto-delete-flagged-questions` (Paz 03:00), `gunun-denemesi-daily` (21:01 UTC = 00:01 TR) |
| Custom DB fonksiyonları | `generate_daily_exam`, `save_active_session`, `upsert_stats_batch`, `merge_device_stats_to_user`, `merge_question_stat_on_conflict`, `find_candidate_pairs`, `log_deleted_record`, `update_modified_column` |
| Testler | Vitest: **199 aktif test geçiyor** (13+1 dosya, `resumeContentIntegrity.test.ts` bu denetimde eklendi). Playwright: 5 spec var ama prod DB'ye karşı koşuyor — script bile tanımlı değil. |

---

# FAZ 0 — HAZIRLIK VE TABAN DOĞRULAMA

**Amaç:** Değişiklik öncesi yeşil taban kanıtı.

1. `cd C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI`
2. Çalıştır: `npx vitest run`
   - **DOĞRULAMA:** Çıktıda `Tests  199 passed | 2 skipped` (veya daha fazlası) görülmeli. Kırmızı varsa DUR, kullanıcıya bildir.
3. Çalıştır: `npm run build`
   - **DOĞRULAMA:** `tsc -b` ve vite build hatasız bitmeli.

---

# FAZ 1 — BUG 1: ESKİ SEASON RESUME → SİYAH EKRAN (KRİTİK)

## Kök neden (iki katman, kanıtlı)

**Katman A — Frontend (birincil):** Oturum buluta *kompakt* kaydediliyor (yalnız soru ID'leri — `toCompact`, `src/hooks/useResumableSession.ts`). Geri yüklerken `fromCompact(compact, pool)` çağrısındaki `pool`, `App.tsx`'ten gelen **SKELETON** listesidir (`QuestionSkeleton`: yalnız `id, lesson, unit, quality_flag, is_favorite` — `src/data.ts`; soru metni/şıklar YOK). `handleResumeSession` (App.tsx) bu içeriksiz objeleri **tam soru içeriğini fetch etmeden** doğrudan quiz'e sokuyor. `QuestionCard.tsx` içinde `question.question.split('\n')` ve `Object.entries(question.options)` `undefined` üzerinde TypeError fırlatıyor. Projede **hiç ErrorBoundary yok** → React 19 tüm ağacı unmount ediyor → **siyah ekran**.

**Katman B — Veritabanı (ikincil):** Eski denemeler silinmiş soru ID'leri içeriyor (kanıt SQL'i Ek-A'da):
- 2026-05-26 denemesi: 199 ID'nin **26'sı artık `questions`'ta yok**
- 2026-05-12: 22/100 kayıp · 2026-05-13: 4/100 · 2026-05-11: 6/100
ID'ye göre fetch eksik liste döndürünce sayaç/indeks kaymaları ve boş içerik oluşuyor.

## Adım 1.1 — `ensureFullContent` yardımcı fonksiyonu

Yeni dosya oluştur: `src/lib/resumeGuards.ts` — içerik birebir:

```ts
import type { Question } from '../data';

/** Soru objesi quiz'de render edilebilir tam içeriğe sahip mi? */
export function hasFullContent(q: Partial<Question> | undefined | null): q is Question {
  return !!q && typeof q.question === 'string' && q.question.length > 0
    && !!q.options && typeof q.options === 'object';
}

/**
 * Resume edilen soru listesinde içeriği eksik olanları ID ile yeniden getirir.
 * fetchByIds: mevcut fetchQuestionsByIds fonksiyonu enjekte edilir (test edilebilirlik).
 * Dönen liste yalnız TAM içerikli soruları içerir; getirilemeyenler elenir.
 */
export async function ensureFullContent(
  questions: Array<Partial<Question> & { id: string }>,
  fetchByIds: (ids: string[]) => Promise<Question[]>,
): Promise<Question[]> {
  const incompleteIds = questions.filter(q => !hasFullContent(q)).map(q => q.id);
  if (incompleteIds.length === 0) return questions as Question[];
  const fetched = await fetchByIds(incompleteIds);
  const byId = new Map(fetched.map(q => [q.id, q]));
  const result: Question[] = [];
  for (const q of questions) {
    if (hasFullContent(q)) { result.push(q); continue; }
    const full = byId.get(q.id);
    if (full && hasFullContent(full)) result.push(full);
    // bulunamayan (silinmiş) ID sessizce elenir — çağıran taraf sayı farkını raporlar
  }
  return result;
}
```

## Adım 1.2 — `handleResumeSession`'ı asenkron doldurmalı yap

Dosya: `src/App.tsx`
**ANCHOR (Grep ile bul):** `const handleResumeSession = () => {`

Mevcut blok (bugün):
```ts
const handleResumeSession = () => {
  if (resumeSessionData) {
    setExamQuestions(resumeSessionData.questions);
    ...
    setAppState('quiz');
  }
};
```

Şu şekle getir (yalnız bu fonksiyonu değiştir; `fetchQuestionsByIds` zaten `src/lib/supabase.ts`'ten import ediliyor — App.tsx'te başka yerlerde kullanılıyor, import satırını kontrol et, yoksa ekle; `ensureFullContent`'i `./lib/resumeGuards`'tan import et; `toast` için mevcut `sonner` importunu kullan):

```ts
const handleResumeSession = async () => {
  if (!resumeSessionData) return;
  try {
    const hydrated = await ensureFullContent(
      resumeSessionData.questions,
      fetchQuestionsByIds,
    );
    if (hydrated.length === 0) {
      toast.error('Bu oturumdaki sorular artık mevcut değil. Oturum temizlendi.');
      await clearResumableSession();
      return;
    }
    if (hydrated.length < resumeSessionData.questions.length) {
      toast.warning(`${resumeSessionData.questions.length - hydrated.length} soru silinmiş; oturum kalanlarla devam ediyor.`);
    }
    setExamQuestions(hydrated);
    if (resumeSessionData.dailyExamId) {
      setActiveExam({ variant: 'daily', dailyExamId: resumeSessionData.dailyExamId });
    } else if (resumeSessionData.simTotalSeconds) {
      setActiveExam({ variant: 'simulation', simTotalSeconds: resumeSessionData.simTotalSeconds });
    } else {
      setActiveExam({ variant: 'normal' });
    }
    setAppState('quiz');
  } catch (e) {
    console.error('Resume başarısız', e);
    toast.error('Oturum yüklenemedi. İnternet bağlantını kontrol et.');
  }
};
```

**DİKKAT:** `currentIndex` `resumeSessionData.currentIndex`'ten geliyorsa ve soru sayısı azaldıysa taşabilir. `setExamQuestions(hydrated)` sonrasında quiz'e geçen kod `currentIndex`'i nereden alıyorsa (Grep: `resumeSessionData.currentIndex`) `Math.min(idx, hydrated.length - 1)` ile sınırla.

## Adım 1.3 — QuestionCard'a savunma bariyeri

Dosya: `src/components/quiz/QuestionCard.tsx`
**ANCHOR:** `const cleanedQuestion = useMemo(() => {`

Bu satırın HEMEN ÜSTÜNE (component gövdesinin başına, hook'lardan ÖNCE DEĞİL — hook kuralları! `cleanedQuestion` useMemo'sunun içine guard koy):

`useMemo` içindeki ilk satırı şöyle değiştir:
```ts
const cleanText = (question.question ?? '').split('\n').filter(l => !OPTION_LINE_RE.test(l.trim())).join('\n');
```
ve **ANCHOR:** `Object.entries(question.options)` satırını:
```ts
() => Object.entries(question.options ?? {}) as [string, string][],
```
Ayrıca component return'ünden önce (tüm hook'lardan SONRA) ekle:
```ts
if (!question.question || !question.options) {
  return <div className="p-6 text-center text-sm opacity-70">Soru içeriği yüklenemedi. Ana menüye dönüp tekrar deneyin.</div>;
}
```

## Adım 1.4 — Global ErrorBoundary

Yeni dosya: `src/components/ErrorBoundary.tsx`:
```tsx
import { Component, type ReactNode } from 'react';

type Props = { children: ReactNode };
type State = { error: Error | null };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };
  static getDerivedStateFromError(error: Error): State { return { error }; }
  componentDidCatch(error: Error) { console.error('[ErrorBoundary]', error); }
  render() {
    if (this.state.error) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, padding: 24, textAlign: 'center' }}>
          <h1 style={{ fontSize: 20, fontWeight: 700 }}>Bir şeyler ters gitti</h1>
          <p style={{ opacity: 0.7, maxWidth: 420 }}>{this.state.error.message}</p>
          <button onClick={() => { this.setState({ error: null }); window.location.href = '/'; }}
            style={{ padding: '8px 20px', borderRadius: 8, border: '1px solid currentColor' }}>
            Ana sayfaya dön
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
```
Dosya: `src/main.tsx` — `<App />` render edilen yerde `<ErrorBoundary><App /></ErrorBoundary>` ile sar (import ekle).

## Adım 1.5 — DB temizliği: eski denemelerdeki ölü ID'ler

`apply_migration` ile (isim: `prune_dead_question_ids_from_daily_exams`):
```sql
UPDATE daily_exams d
SET question_ids = sub.alive
FROM (
  SELECT d2.id,
         array_agg(e ORDER BY ord) FILTER (WHERE q.id IS NOT NULL) AS alive
  FROM daily_exams d2
  CROSS JOIN LATERAL unnest(d2.question_ids) WITH ORDINALITY AS t(e, ord)
  LEFT JOIN questions q ON q.id = t.e
  GROUP BY d2.id
) sub
WHERE d.id = sub.id
  AND cardinality(sub.alive) < cardinality(d.question_ids);
```
**DOĞRULAMA SQL'i** (0 satır dönmeli):
```sql
SELECT d.id FROM daily_exams d
WHERE EXISTS (SELECT 1 FROM unnest(d.question_ids) e LEFT JOIN questions q ON q.id=e WHERE q.id IS NULL);
```

## Adım 1.6 — Regresyon testlerini aç ve koş

Dosya: `src/lib/__tests__/resumeContentIntegrity.test.ts`
1. `describe.skip('FAZ-1 SONRASI: ...` → `describe(` yap.
2. İçindeki iki placeholder testi gerçek hale getir: `ensureFullContent`'i `../resumeGuards`'tan import et; mock `fetchByIds` ile (a) skeletonların tamamlandığını, (b) bulunamayan ID'nin elendiğini assert et.
3. `npx vitest run` → **DOĞRULAMA:** tümü yeşil (≥201 test).
4. `npm run build` → hatasız.
5. **CANLI DOĞRULAMA:** `npm run dev` başlat; bir quiz başlat, birkaç soru çöz, sekmeyi kapat; yeniden aç → "Devam et" → sorular İÇERİKLİ yüklenmeli (siyah ekran yok).

---

# FAZ 2 — BUG 2: İSTATİSTİK TOOLTIP'İ KOMŞU KARTIN ALTINDA KALIYOR

## Kök neden (kanıtlı)
Tüm grafik tooltip'leri `position: 'fixed'` + `zIndex: 100` ile grafik component'inin İÇİNDE render ediliyor (ör. `src/components/charts/TrendLineChart.tsx`, ANCHOR: `position: 'fixed'`). Ancak kartları saran framer-motion `motion.div`'leri `filter: blur(4px) → blur(0px)` animasyonu kullanıyor (`src/components/StatisticsView.tsx`, ANCHOR: `filter: 'blur(`). CSS kuralı: `none` olmayan `filter`/`transform`, `position:fixed` elemanın **containing block'unu** o elemana çevirir → tooltip artık viewport'a değil karta göre konumlanır ve `CollapsibleSection.tsx`'teki `overflow-hidden` (2 katman: dış kart + iç animasyon gövdesi) tooltip'i kırpar → komşu kutunun altında kalır.

## Çözüm: Tooltip'i portal ile `document.body`'ye taşı (kalıcı ve doğru çözüm)

### Adım 2.1 — Ortak portal bileşeni
Yeni dosya: `src/components/charts/TooltipPortal.tsx`:
```tsx
import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';

/** Grafik tooltip'lerini stacking-context/overflow tuzaklarından kurtarır. */
export function TooltipPortal({ children }: { children: ReactNode }) {
  return createPortal(children, document.body);
}
```

### Adım 2.2 — Her grafik dosyasında tooltip'i sar
Aşağıdaki dosyaların HER BİRİNDE `position: 'fixed'` anchor'ını Grep ile bul; tooltip'i üreten JSX bloğunu (o style'ı taşıyan `<div ...>` elemanının tamamını) `<TooltipPortal>...</TooltipPortal>` ile sar ve dosyanın başına `import { TooltipPortal } from './TooltipPortal';` ekle:

`TrendLineChart.tsx`, `AreaStreamGraph.tsx`, `BulletChart.tsx`, `DailyActivityChart.tsx`, `RadarChart.tsx`, `StudyTreemap.tsx`, `SlopeGraph.tsx`, `UnitHeatMap.tsx`, `DersScatterPlot.tsx`, `ParallelCoordinates.tsx`, `TimeHistogram.tsx`, `SunburstChart.tsx`, `WaterfallChart.tsx`, `AccuracySparkline.tsx` (hepsi `src/components/charts/` altında)

**NOT:** Tooltip JSX'i koşullu render ediliyorsa (`{tooltip && <div ...>}`) portal'ı koşulun İÇİNE koy: `{tooltip && <TooltipPortal><div ...>...</div></TooltipPortal>}`. `zIndex: 100` değerini `9999` yap (body'de artık kart z-index'leriyle yarışacak).

### Adım 2.3 — Doğrulama
1. `npx vitest run` yeşil; `npm run build` hatasız.
2. `npm run dev` → İstatistikler sayfası → trend grafiğinde bir günün üstüne gel → tooltip'in komşu kartların ÜZERİNDE, kırpılmadan göründüğünü ekran görüntüsüyle doğrula. Kartların kenarlarına yakın noktaları özellikle dene (kırpma orada oluyordu).

**Alternatif (portal istenmezse, daha zayıf):** `StatisticsView.tsx`'te tüm `filter: 'blur(4px)'` / `filter: 'blur(0px)'` animasyon anahtarlarını kaldır (5-6 yerde) VE `CollapsibleSection.tsx`'teki dış `overflow-hidden`'ı kaldır. Bu, animasyon estetiğini bozar ve gelecekte bir transform eklenirse bug geri gelir — portal çözümü tercih edilir.

---

# FAZ 3 — SUPABASE GÜVENLİK DÜZELTMELERİ

> Her SQL'i `apply_migration` ile, verilen isimle uygula. Sıra önemli.

## 3.1 (KRİTİK) `daily_exam_config` RLS kapalı
Tablo anon key ile tamamen okunur/yazılır durumda. `generate_daily_exam` SECURITY DEFINER olduğu için RLS açılınca da çalışmaya devam eder (RLS'yi bypass eder).
Migration `enable_rls_daily_exam_config`:
```sql
ALTER TABLE public.daily_exam_config ENABLE ROW LEVEL SECURITY;
CREATE POLICY "config_read_authenticated" ON public.daily_exam_config
  FOR SELECT TO authenticated USING (true);
```
**DOĞRULAMA:** `SELECT relrowsecurity FROM pg_class WHERE relname='daily_exam_config';` → `true`. Ardından uygulamada Günün Denemesi akışını test et (cron SECURITY DEFINER üzerinden ürettiği için etkilenmemeli).

## 3.2 Fonksiyonlarda mutable search_path (6 fonksiyon)
Migration `fix_function_search_paths`:
```sql
ALTER FUNCTION public.merge_device_stats_to_user(text, uuid) SET search_path = public;
ALTER FUNCTION public.find_candidate_pairs(text, double precision, double precision, text) SET search_path = public;
ALTER FUNCTION public.merge_question_stat_on_conflict() SET search_path = public;
ALTER FUNCTION public.save_active_session(text, uuid, jsonb) SET search_path = public;
ALTER FUNCTION public.update_modified_column() SET search_path = public;
ALTER FUNCTION public.log_deleted_record() SET search_path = public;
```
**DOĞRULAMA:** Supabase security advisors yeniden çek → `function_search_path_mutable` uyarıları kaybolmalı.

## 3.3 `generate_daily_exam`'ı anon'dan geri çek
Deneme üretimi yalnız cron (postgres) ve giriş yapmış kullanıcı içindir:
Migration `revoke_anon_generate_daily_exam`:
```sql
REVOKE EXECUTE ON FUNCTION public.generate_daily_exam(uuid, integer, integer, boolean, integer, date) FROM anon;
```
**DİKKAT:** `save_active_session` ve `upsert_stats_batch` anon'da KALMALI — uygulama cihaz-tabanlı (giriş öncesi) modda bunları kullanıyor. Onlara dokunma.
**DOĞRULAMA:** Uygulamada giriş yapmadan quiz çöz → istatistik kaydolmalı; giriş yaparak Günün Denemesi "yeniden üret" (varsa) çalışmalı.

## 3.4 Auth: Leaked Password Protection
SQL değil, Dashboard adımı: Supabase Dashboard → Authentication → Providers/Policies → "Leaked password protection" AÇ. (Kullanıcıya yaptırılabilir; ajan dashboard erişimi yoksa kullanıcıya tek cümleyle bildir.)

## 3.5 Public bucket listeleme (düşük öncelik)
`question-images` ve `study-resources` bucket'larında geniş SELECT politikası dosya LİSTELEMEYE izin veriyor. Public URL erişimi için listeleme gerekmez. İstenirse:
```sql
DROP POLICY "question_images_read" ON storage.objects;
DROP POLICY "Public Select study-resources" ON storage.objects;
```
**DİKKAT:** Uygulama bir yerde `storage.list()` çağırıyorsa bozulur — önce `Grep: .list(` ile `src/` tara. Çağrı varsa bu adımı ATLA ve rapora not düş.

## 3.6 Bilgi notu (aksiyon isteğe bağlı)
- `vector` extension public şemada (taşıma invaziv — dokunma, not olarak kalsın).
- `active_sessions`/`questions`/`question_stats`/`reference_sources` üzerindeki `USING (true)` yazma politikaları: uygulama anon-key + cihaz-tabanlı çalıştığı için bilinçli tasarım. Çok kullanıcılı yapılacaksa Faz 5'teki user_id-scoped politikalara geçilmeli (advisor çıktısı Ek-B).

---

# FAZ 4 — VERİ BÜTÜNLÜĞÜ VE `generate_daily_exam` DÜZELTMELERİ

## 4.1 (ÖNEMLİ) Sorusu olmayan dersler config'te
`daily_exam_config` şu dersleri içeriyor ama `questions`'ta HİÇ soru yok: **Biyokimya (Salı), Mikrobiyoloji (Perş+Cmt), Farmakoloji (Cuma), Restoratif (Cuma), Cerrahi (Cmt)**. Fonksiyon bunları sessizce atlıyor → o günlerin denemeleri planlanandan küçük çıkıyor (ör. Perşembe fiilen yalnız Radyoloji).
**KARAR KULLANICIYA AİT:** (a) bu derslerin soruları yüklenecek mi, (b) config'ten çıkarılacak mı? Kullanıcıya sor. Config'ten çıkarma SQL'i:
```sql
DELETE FROM daily_exam_config WHERE lesson IN ('Biyokimya','Mikrobiyoloji','Farmakoloji','Restoratif','Cerrahi');
```

## 4.2 (ÖNEMLİ) `high_yield` ve `cikmis` sorular günlük denemelerden dışlanıyor
`generate_daily_exam` filtresi: `quality_flag IS NULL OR quality_flag = 'reviewed_keep'`. DB'de `reviewed_keep` değeri HİÇ YOK; buna karşılık **440 high_yield + 193 cikmis** soru bu filtre yüzünden asla seçilmiyor. Bu büyük olasılıkla istenmeyen davranış (high_yield = yüksek verim!).
**KARAR KULLANICIYA AİT.** Onay gelirse migration `include_high_yield_in_daily_exam` ile fonksiyondaki ÜÇ filtre satırını (yeni havuz, hard havuz, fallback) şu hale getir:
```sql
and (q.quality_flag is null or q.quality_flag in ('reviewed_keep','high_yield','cikmis'))
```
(Fonksiyonun tam gövdesi: `SELECT pg_get_functiondef('public.generate_daily_exam'::regproc);` ile alınıp `CREATE OR REPLACE` edilir. NOT: 'ÇIKMIŞ SORULAR' ve 'Yanlışlarım' özel derslerini de kapsama almak İSTENMİYORSA lesson bazında zaten config dışılar — sorun yok.)

## 4.3 Eksik embedding'ler (241 soru)
Bu sorular semantik dedup/benzerlik aramasının dışında kalıyor. Listele:
```sql
SELECT id, lesson, unit FROM questions WHERE stem_embedding IS NULL LIMIT 250;
```
Backfill, `manage-questions` edge function'ının embed akışıyla aynı modelle (text-embedding-3-large, 1536d) yapılmalı — mevcut `scripts/` pipeline'ında backfill aracı var mı `Grep: embedding` ile bak; yoksa kullanıcıya "241 soru embeddingsiz, backfill script'i ister misin?" diye sor.

## 4.4 Performans indeksleri (advisor kanıtlı)
Migration `add_missing_fk_indexes`:
```sql
CREATE INDEX IF NOT EXISTS idx_exam_answers_question_id ON public.exam_answers(question_id);
CREATE INDEX IF NOT EXISTS idx_dus_ai_recommendations_journal_id ON public.dus_ai_recommendations(journal_id);
CREATE INDEX IF NOT EXISTS idx_dus_mentor_logs_linked_decision_id ON public.dus_mentor_logs(linked_decision_id);
```

## 4.5 RLS performans (auth_rls_initplan — 12 politika)
`question_stats`, `daily_exams`, `exam_answers`, `user_data`, `active_sessions` politikalarında `auth.uid()` satır başına yeniden hesaplanıyor. Düzeltme kalıbı: politikadaki `auth.uid()` → `(SELECT auth.uid())`. Örnek:
```sql
-- Her politika için: pg_policies'ten mevcut qual'i al, aynı adla DROP+CREATE ederek
-- auth.uid() ifadelerini (SELECT auth.uid()) ile değiştir.
SELECT policyname, tablename, qual, with_check FROM pg_policies
WHERE schemaname='public' AND (qual LIKE '%auth.uid()%' OR with_check LIKE '%auth.uid()%');
```
Satır sayıları küçükken (≤20K) etkisi sınırlı — DÜŞÜK öncelik, en sona bırakılabilir.

---

# FAZ 5 — SUPABASE'İ TAM KAPASİTE KULLANMA ÖNERİLERİ

> Öncelik sırasıyla; her biri bağımsız uygulanabilir. **Over-engineering uyarısı:** 5.1 ve 5.2 gerçek çalışma verimine doğrudan etki eder; 5.4+ ancak ihtiyaç somutlaşınca yapılmalı.

## 5.1 FSRS tabanlı günlük deneme seçimi (en yüksek değer)
`question_stats` zaten FSRS alanları taşıyor (`stability`, `difficulty`, `last_review`, `scheduled_days`, `fsrs_reps`) ama `generate_daily_exam` bunları yalnız `difficulty >= 7` için kullanıyor. "HARD 5" seçimini **vadesi geçmiş (due) sorulara** çevir:
```sql
-- hard havuz sıralamasına eklenecek anahtar:
-- (s.last_review + s.scheduled_days) <= current_date  → due önce
order by ((s.last_review + s.scheduled_days) <= current_date) desc, pool.is_hard desc, ...
```
Bu, Anki mantığını deneme seçimine taşır: unutulmak üzere olan soru tam zamanında karşına çıkar.

## 5.2 Yanlış analizi altyapısı (SQL view'ları)
`exam_answers` + `question_stats.wrong_choices` (jsonb) ham veriyi tutuyor ama DB tarafında hiçbir analiz nesnesi yok. İki view ekle (migration `wrong_answer_analysis_views`):
```sql
CREATE OR REPLACE VIEW v_wrong_by_unit AS
SELECT q.lesson, q.unit,
       count(*) FILTER (WHERE NOT ea.is_correct) AS wrong,
       count(*) AS total,
       round(100.0 * count(*) FILTER (WHERE NOT ea.is_correct) / count(*), 1) AS wrong_pct
FROM exam_answers ea JOIN questions q ON q.id = ea.question_id
GROUP BY q.lesson, q.unit
HAVING count(*) >= 5
ORDER BY wrong_pct DESC;

CREATE OR REPLACE VIEW v_tuzak_siklar AS  -- en çok seçilen yanlış şıklar
SELECT q.id, q.lesson, q.unit, left(q.question, 80) AS soru,
       kv.key AS secilen_yanlis, kv.value::int AS kez
FROM question_stats s
JOIN questions q ON q.id = s.question_id
CROSS JOIN LATERAL jsonb_each_text(s.wrong_choices) kv
WHERE s.wrong_choices IS NOT NULL AND kv.value::int >= 2
ORDER BY kez DESC;
```
Frontend'de Yanlış Analizi ekranı bu view'ları `select()` ile okur — istemci tarafı hesap kalkar.

## 5.3 Haftalık bakım cron'ları
- `deleted_records` sonsuz büyüyor (4.615). Ekle: `SELECT cron.schedule('purge-deleted-records','0 4 * * 0', $$DELETE FROM deleted_records WHERE deleted_at < now() - interval '90 days'$$);` (kolon adını `\d deleted_records` ile doğrula).
- Faz 1.5'teki ölü-ID temizliğini haftalık cron yap (aynı UPDATE gövdesi).

## 5.4 Supabase Realtime ile cihazlar arası oturum senkronu
`active_sessions` tek satır; iki cihaz açıkken `beforeunload` yarışı son yazanı kazandırıyor. Realtime channel ile `active_sessions` değişikliğini dinleyip UI'da "Başka cihazda oturum güncellendi — yenile?" göstermek yeterli. (Websocket maliyeti düşük; ama önce gerçek bir çok-cihaz sorunu yaşandıysa yap.)

## 5.5 pgTAP ile DB fonksiyon testleri
`pgtap` extension mevcut ama kurulu değil. `generate_daily_exam` gibi kritik fonksiyonlar için DB-içi test:
```sql
CREATE EXTENSION IF NOT EXISTS pgtap;
-- örnek: SELECT ok(cardinality(question_ids)>0,'deneme boş değil') ...
```
Testler `supabase/tests/` altında tutulup `supabase test db` ile koşulur (lokal stack gerektirir → Faz 6 ile birleşir).

## 5.6 Diğer (yalnız ihtiyaç doğarsa)
- `index_advisor` extension: yavaş sorgu çıkarsa hipotetik indeks önerisi al.
- `pg_stat_statements` zaten kurulu: `SELECT query, calls, mean_exec_time FROM pg_stat_statements ORDER BY mean_exec_time DESC LIMIT 10;` ile periyodik yavaş sorgu taraması.
- Storage `study-resources`: PDF/kaynak dosyaları için zaten hazır; Bilgi Bahçesi entegrasyonu düşünülüyorsa buradan servis edilebilir.

---

# FAZ 6 — TEST ALTYAPISI: GÜVENLİ E2E + KAPSAM GENİŞLETME

## 6.1 (ZORUNLU ÖN KOŞUL) e2e'yi prod'dan ayır
Bugün `playwright.config.ts` `npm run dev`'i başlatıyor ve dev server **prod Supabase'e** bağlanıyor (`VITE_SUPABASE_URL`). e2e koşmak gerçek istatistik/oturum verisini bozar. Seçenekler (kullanıcıya sor, önerilen: a):
- **(a) Lokal Supabase:** `npx supabase init` (repo'da `supabase/` zaten var) → `npx supabase start` → `supabase db reset` migration'ları uygular. `.env.test` dosyası: `VITE_SUPABASE_URL=http://127.0.0.1:54321`, `VITE_SUPABASE_ANON_KEY=<supabase start çıktısındaki anon key>`. `playwright.config.ts` `webServer.command` → `"npm run dev -- --mode test"` ve Vite `--mode test` `.env.test`'i okur. Seed script: `questions`'a 50 örnek soru insert eden SQL (`supabase/seed.sql`).
- **(b) Supabase branch:** MCP `create_branch` (ücretli olabilir — `get_cost` ile önce maliyet onayı al).

## 6.2 npm script'leri ekle
`package.json` scripts'e:
```json
"test:e2e": "playwright test --project=chromium",
"test:all": "vitest run && playwright test --project=chromium"
```

## 6.3 Yeni e2e senaryosu: resume-siyah-ekran regresyonu
Yeni dosya `e2e/resume-blackscreen.spec.ts` (6.1 tamamlandıktan sonra):
1. Quiz başlat, 2 soru cevapla.
2. `page.reload()`.
3. "Devam et" butonunu tıkla.
4. **Assert:** soru metni görünür (`locator('text=' + bilinen soru kökü)`), sayfa body'si boş değil, console'da uncaught error yok (`page.on('pageerror')` dinleyicisi 0 hata).

## 6.4 Tooltip görsel regresyonu
`e2e/stats-tooltip.spec.ts`: İstatistikler sayfasına git, trend grafiğinde `hover()` yap, tooltip elementinin `document.body`'nin doğrudan çocuğu olduğunu (portal kanıtı) ve `boundingBox()`'ının viewport içinde olduğunu assert et.

## 6.5 Koşu ve kabul
`npm run test:all` → tüm birim + chromium e2e yeşil. Bu, projenin "tüm fonksiyonlarını test edebilen" kapsamlı koşusudur: birim (istatistik hesapları, FSRS/adaptif, senkron/merge, resume, silme kuyruğu, markdown, shuffle, tarih) + uçtan uca (ana akış, soru yönetimi, cihazlar arası resume, kritik yol, kapsamlı akışlar + 2 yeni regresyon).

---

# KABUL KRİTERLERİ (rapor tamamlandı sayılması için)

| # | Kriter | Kanıt |
|---|---|---|
| 1 | Eski oturuma devam → soru içerikleri yükleniyor, siyah ekran yok | Faz 1.6 canlı doğrulama + e2e 6.3 |
| 2 | Tooltip tüm kartların üzerinde, kırpılmıyor | Faz 2.3 ekran görüntüsü + e2e 6.4 |
| 3 | Security advisors: ERROR 0, `function_search_path` 0 | MCP get_advisors çıktısı |
| 4 | Ölü soru ID'si içeren deneme yok | Faz 1.5 doğrulama SQL'i = 0 satır |
| 5 | Vitest ≥201 yeşil, build temiz | CI/terminal çıktısı |
| 6 | e2e izole ortamda yeşil | Faz 6.5 çıktısı |

---

# EK-A — KANIT: SİLİNMİŞ SORU ID'Lİ DENEMELER (2026-07-11 SELECT)

| exam_date | status | soru | kayıp |
|---|---|---|---|
| 2026-05-26 | pending | 199 | **26** |
| 2026-05-12 | pending | 100 | **22** |
| 2026-05-11 | completed | 100 | 6 |
| 2026-05-13 | pending | 100 | 4 |
| 2026-06-14 → 2026-07-10 | — | — | 0 (temiz) |

Aktif oturum (`active_sessions`, 1 satır): 25 ID'nin 25'i mevcut — bugünkü oturum sağlıklı; bug ESKİ oturum/denemelerde tetikleniyor.

# EK-B — GÜVENLİK ADVISOR ÖZETİ (2026-07-11)

- **ERROR:** `daily_exam_config` RLS kapalı (Faz 3.1)
- **WARN:** 6 fonksiyonda mutable search_path (Faz 3.2) · `generate_daily_exam`/`save_active_session`/`upsert_stats_batch`/`log_deleted_record` anon-çağrılabilir SECURITY DEFINER (Faz 3.3, kısmi) · 25+ `USING(true)` yazma politikası (bilinçli, tek kullanıcı — Faz 3.6) · 2 public bucket listelenebilir (Faz 3.5) · leaked password protection kapalı (Faz 3.4)
- **PERFORMANS:** 3 indekssiz FK (Faz 4.4) · 12 auth_rls_initplan (Faz 4.5) · 44 multiple_permissive_policies (tek kullanıcıda ihmal edilebilir) · 3 kullanılmayan indeks (izle, silme)

# EK-C — BU OTURUMDA YAPILANLAR

1. `src/lib/__tests__/resumeContentIntegrity.test.ts` eklendi (3 aktif yeşil test + 2 Faz-1-sonrası iskeleti). Suite: 199 aktif + 2 skip, tümü yeşil.
2. Prod DB'de YALNIZ SELECT çalıştırıldı; hiçbir veri değiştirilmedi.
3. e2e bilinçli olarak KOŞULMADI (prod veri riski — Faz 6.1 gerekçesi).
