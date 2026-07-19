# DUSBANKASI — Kapsamlı İmplementasyon & Denetim Raporu

> **Üretim tarihi:** 2026-06-24
> **Kapsam:** Uçtan uca kod analizi, hata tespiti, test kapsamı, güvenlik ve repo hijyeni denetimi.
> **Yöntem:** 4 paralel kod-okuma ajanı (frontend / iş-mantığı+test / backend+supabase / build+hijyen) + 2 kritik güvenlik bulgusunun manuel doğrulanması. Her bulgu okunmuş koda dayanır; spekülasyon yoktur.
> **Önemli kısıt:** Bu rapor hiçbir kaynak kod dosyasını DEĞİŞTİRMEMİŞTİR. Salt analiz çıktısıdır.

---

## ⚠️ ÖNCELİK GÜNCELLEMESİ (proje sahibi kararı — bağlayıcı)

DUSBANKASI **tek-kullanıcılı kişisel** bir projedir: yalnızca proje sahibi, aynı Google hesabıyla, telefon+bilgisayardan kullanır; adresi başkası bilmez. **Güvenlik/yetkilendirme bir endişe değildir.** Bu nedenle aşağıdaki **GÜVENLİK bulguları artık DÜŞÜK öncelik / opsiyoneldir** ve §7 Sprint 1'den çıkarılmıştır: **K1 (IDOR), K2 (public yazma), Y1 (edge auth), Y2 (rate-limit), O1 (prompt injection), O2 (anon claim), O4 (key header), O7 (XSS).**

**GERÇEK öncelikler (değişmez kurallar — tüm düzenlemeler bunlara göre):**
1. Supabase edge/egress sınırlarına takılmamak (kota-bilinçli mimari korunur)
2. Maksimum performans
3. Maksimum istatistik özellik + kapsam
4. Çok güçlü senkronizasyon / sıfır veri kaybı → **K3 + K4 burada KRİTİK kalır** (güvenlik değil, veri bütünlüğü)
5. Cross-device yarım oturuma devam
6. Tamamlanmamış oturumu sonra sürdürme
7. Soru düzenleme/silme
8. LLM ile soru ekleme

**Revize Sprint 1 (acil):** K3 (delta-sync timestamp), K4 (stats debounce yarışı), Y3 (examTimer resume), Y6/Y7 (idb perf + pagination), Y8 (zod veri doğrulama), O8 (simülasyon resume), O10 (dusPlacement). Güvenlik sıkılaştırması yukarıdaki özelliklerden birini kısıtlıyorsa **özellik kazanır.**

---

## 0. Bu Raporu Devralan LLM İçin Kullanım Kılavuzu

Bu doküman tek başına yeterli bağlam sağlar; ek soru sormadan aksiyona başlayabilirsin.

- **Önce §4 "Bulgular"a git** — önem sırasına göre dizilmiş (KRİTİK → DÜŞÜK). Her satırda `dosya:satır` referansı + neden önemli + somut öneri var.
- **Düzeltmeye başlarken §7 "Yol Haritası"nı izle** — bulgular sprint'lere bölünmüş, bağımlılık sırasıyla.
- **Mimariyi anlamak için §1'i oku** — stack, veri akışı, env değişkenleri, iki ayrı backend yığını.
- **Format konvansiyonu:** `[ÖNEM][GÜVENLİK?] dosya:satır — sorun — neden önemli — öneri`
- **Mutlak kural:** Düzeltme yaparken `src_backup/`, `scratch/`, `eklenecek/`, `brain/` dizinlerini DEĞİŞTİRME (ölü/çalışma alanı; bkz §6).

---

## 1. Mimari Genel Bakış

### 1.1 Teknoloji Yığını
- **Frontend:** Vite 8 + React 19 + TypeScript 5.9 + Tailwind v4 (vite-plugin) — **SPA** (tek sayfa, gerçek router YOK; `App.tsx` içinde string-union ile manuel ekran yönetimi).
- **State:** Zustand (`settingsStore`) + React `useState` (App.tsx ~25 adet) + localStorage + IndexedDB (offline-first).
- **Grafik:** D3 (imperative, 28 chart bileşeni) — `StatisticsView` dashboard.
- **Backend (2 ayrı yığın, ortak DB paylaşmaz):**
  1. **Vercel Edge** — `api/explain.ts`: AI "Özel Ders" RAG hattı (Pinecone retrieval + Gemini streaming).
  2. **Supabase** — PostgreSQL + pgvector, Auth, RLS, Edge Function (`manage-questions`), delta-sync RPC'ler.
- **Test:** Vitest 3 (unit, jsdom) + Playwright (e2e, CI'da koşmuyor).
- **CI:** GitHub Actions `quality-gate.yml` — `tsc -b` → vitest → vite build (bloklayıcı), lint (non-blocking).
- **Paket yöneticisi:** Bun (resmi) — ama `package-lock.json` artığı commit'li (bkz §4 YÜKSEK).

### 1.2 Veri Akışı (offline-first, local-authoritative)
1. **Açılış:** Sadece `QuestionSkeleton[]` çekilir (`id/lesson/unit/quality_flag`, ~250KB). Tam soru metni sınav anında `fetchQuestionsByIds()` ile lazy yüklenir (egress kotası optimizasyonu, "Skeleton + Content" mimarisi v4.31).
2. **Kalıcılık:** localStorage (stats, streak, settings, pending kuyruklar) + IndexedDB (`idb.ts`, soru içerik cache, offline).
3. **Senkronizasyon:** Delta-sync (`updated_at > lastSync` + `deleted_records` tombstone tablosu).
4. **Stats merge:** Cross-device **MAX-MERGE** (`stats.ts`) — `lastSeen` kazanır, `attempts/corrects` daima `Math.max`. Projenin en kritik invariant'ı; iyi test edilmiş.
5. **RAG akışı:** Tarayıcı `{question,options,lesson,unit,correctAnswer}` POST → `lessonToNamespace()` → Pinecone (E5-1024 + bge-reranker, topK15→topN5) → `buildUserPrompt()` → `streamGemini()` (çoklu key/model fallback) → `text/plain` SSE stream.

### 1.3 Beklenen Ortam Değişkenleri (isim — değer değil)
- **Vercel:** `GEMINI_API_KEY` veya `GEMINI_API_KEY_1..10`, `GEMINI_MODELS_AI`/`GEMINI_MODEL_AI`, `PINECONE_API_KEY`, `PINECONE_HOST`, `PINECONE_INDEX`, `RERANKER_MODEL`, `PINECONE_API_VERSION`.
- **Supabase Edge Function:** `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `OPENAI_API_KEY`.
- **Frontend (Vite):** `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`.
- Not: `VITE_GEMINI_API_KEY` artık kullanılmıyor (eski frontend sızıntı riski kapatılmış — doğru karar).

---

## 2. Bileşen Envanteri

### Frontend (`src/`)
| Katman | Dosya(lar) | Sorumluluk | Kalite |
|---|---|---|---|
| Orkestrasyon | `App.tsx` (**2176 satır, monolit**) | Tüm akış + 12 inline bileşen + PDF export inline | ⚠️ Bakım riski |
| Quiz döngüsü | `components/quiz/**` | Soru gösterimi, navigasyon, açıklama, AI panel | ✅ Örnek mimari (`memo` + hook ekstraksiyonu) |
| Grafik | `components/charts/**` (28 D3) | Dashboard görselleştirme | ◑ İyi ama animasyon yükü |
| View'lar | `StatisticsView` (889 satır), `ErrorAnalyticsView`, `SimulationResultView`, `SourceBooksView`, `DailyPlanView`, `AuthModal` | Ekranlar | ◑ Karışık |
| UI primitive | `components/ui/**`, `layout/PageTransition`, `ui/FluidNav` | Tasarım kütüphanesi | ❌ **Ölü kod — hiç import edilmiyor** |
| State | `store/useAppStore.ts` | Persist'li store | ❌ **Ölü — `settingsStore` kullanılıyor** |
| Hooks | `hooks/**` | auth, AI, questions, examTimer, shortcuts, resumableSession | ◑ resumableSession güçlü; examTimer hatalı |

### İş Mantığı (`src/lib/`)
| Modül | Sorumluluk | Risk |
|---|---|---|
| `supabase.ts` | Tüm uzak I/O, delta sync, session/stats cloud | 🔴 Yüksek (yarış koşulu, tip kaçağı) |
| `stats.ts` | Local stats, streak, activity, MAX-MERGE | 🔴 Yüksek (iyi test edilmiş ama debounce yarışı) |
| `adaptive.ts` | Soru seçim/havuz motoru (exposure mix 80/15/5) | 🟠 Orta (oran budama hatası) |
| `idb.ts` | IndexedDB skeleton/content cache + migration | 🟠 Orta (`getAll()` ölçeklenmiyor) |
| `schemas.ts` | Zod runtime validasyon | 🟠 Orta (**tanımlı ama hiç çağrılmıyor**) |
| `pendingDeletes.ts` | Deferred silme kuyruğu | 🟡 Düşük-Orta (`flushing` guard) |
| `projections.ts`, `metrics.ts` | Saf türetilmiş metrikler | 🟢 Düşük (sağlam) |
| `dusPlacement.ts` | Net→sıralama tablosu | 🟠 Orta (baraj/yuvarlama edge-case, testsiz) |
| `markdown.ts` | AI çıktısı markdown→HTML | 🟠 Orta (XSS yüzeyi) |
| `auth.ts` | OAuth/email + device merge | 🟢 Düşük |

### Backend
| Bileşen | Dosya | Sorumluluk |
|---|---|---|
| RAG endpoint | `api/explain.ts` | Edge, POST, RAG + Gemini stream |
| Gemini | `api/_lib/gemini.ts` | SSE parse, key×model fallback matrisi |
| Pinecone | `api/_lib/pinecone.ts` | Manuel fetch (Edge uyumlu), integrated inference |
| Prompt | `api/_lib/prompt.ts` | System + user prompt birleştirici |
| Namespace | `api/_lib/lesson-namespace.ts` | Türkçe normalize + sabit MAP |
| Edge Function | `supabase/functions/manage-questions/index.ts` | "Soru Ekle" — kalite filtresi + OpenAI embedding + service-role yazma |
| Şema/Migration | `supabase-schema.sql`, `migration-v2-auth.sql`, `supabase/migrations/*.sql` | Tablolar, RLS, RPC'ler |

---

## 3. Sistemik Temalar (bulgulardan önce oku)

Bireysel bulguların arkasındaki iki yapısal kök neden:

1. **Damga-tabanlı delta-sync, "sorgu-sonrası timestamp" yazımı nedeniyle KAYIP-GÜNCELLEME penceresine açık.** Skeleton, questions ve stats sync'lerinin üçü de aynı hatayı taşıyor. Bu, projenin offline-first vaadini (veri kaybetmeme) sessizce ihlal eden **en yüksek öncelikli yapısal kusur**.
2. **Güvenlik modeli "tek kullanıcı" varsayımından çıkamamış.** Auth eklenmiş ama RLS sıkılaştırması yarım: `questions` tablosu hâlâ tamamen public yazılabilir, `save_active_session` RPC IDOR'a açık, edge function kimliksiz. Veritabanı kamuya açık yazılabilir durumda.
3. **Zod validasyon katmanı yazılmış ama hiçbir giriş noktasına bağlanmamış** — savunma ağı mevcut, devre dışı.

---

## 4. Bulgular (önem sırasına göre)

### 🔴 KRİTİK (acil — veri bütünlüğü / güvenlik)

**K1. [GÜVENLİK] IDOR — oturum ele geçirme.**
`supabase/migrations/20260528235600_save_active_session_rpc.sql:6-32` + `src/lib/supabase.ts:508-512`
`save_active_session` `SECURITY DEFINER` ile RLS'i bypass eder; `p_user_id` **tamamen client'tan gelir** (`p_user_id: userId ?? null`) ve fonksiyon içinde `auth.uid() = p_user_id` kontrolü **yoktur** (manuel doğrulandı). `revoke/grant execute` kısıtı da yok → `anon` role'üne açık. Saldırgan başka kullanıcının `user_id`'sini göndererek o kullanıcının `active_sessions.session_data`'sını keyfi ezebilir. Kardeş RPC `upsert_stats_batch` doğru deseni (`auth.uid()` server-side) uyguluyor; burada atlanmış.
**Öneri:** Fonksiyon başına `if p_user_id is not null and p_user_id <> auth.uid() then raise exception ...`; `p_user_id` yerine `auth.uid()` kullan; `revoke all from public; grant execute to authenticated`.

**K2. [GÜVENLİK] `questions` tablosunda kimliksiz yazma/silme.**
`supabase-schema.sql:25-28` (manuel doğrulandı: `Public insert/update/delete on questions using(true)`)
Bu politikalar hiçbir migration tarafından kaldırılmamış (yalnızca stats/sessions sıkılaştırıldı). `VITE_SUPABASE_ANON_KEY` tarayıcı bundle'ında olduğundan **herkes tüm soru bankasını silebilir/zehirleyebilir**. `on delete cascade` ile `question_stats`/`exam_answers`/`deleted_records` de etkilenir. 9600+ soruluk ana varlık risk altında.
**Öneri:** `questions` için insert/update/delete politikalarını kaldır; yazmayı yalnızca service-role edge function'a bırak (veya authenticated + sahip kontrolü).

**K3. Delta-sync zaman damgası yarış koşulu → kalıcı veri kaybı.**
`src/lib/supabase.ts:148-151` (skeleton), `:287` (questions), `src/lib/stats.ts:680/748` (stats)
`last_sync` damgası sorgudan **sonra** `new Date().toISOString()` ile yazılıyor. Sorgu çalışırken (1-3sn) bir satır `updated_at` alırsa, o satır mevcut çekime girmez ama damga sorgu-sonrası zamana ayarlandığından **sonraki delta'da da yakalanmaz → kalıcı kaybolur**. (stats.ts:680'de `pullTimestamp` doğru alınmış; skeleton/questions tarafında yok.)
**Öneri:** Damgayı sorgu **öncesinde** al ve set et; veya sunucu `updated_at` max'ından türet.

**K4. Stats push debounce yarışı → cross-device cevap kaybı.**
`src/lib/stats.ts:818-833, 861-897, 585, 634`
`syncStatsUp` başarılıysa `_dirtyIds.clear()`. Push uçuştayken kullanıcı yeni soru çözerse, `_syncUpInFlight` guard aynı promise'i döndürdüğü için yeni dirty id'ler o turda gönderilmez ve sonra `clear()` ile **silinir** → o cevaplar local'de durur ama cloud'a gitmez (cihaz kapanırsa cross-device kaybı).
**Öneri:** `clear()` yerine "push'a alınan id set'i"ni kaydet, yalnızca onları düş: `_dirtyIds = diff`.

### 🟠 YÜKSEK

**Y1. [GÜVENLİK] `manage-questions` edge function kimliksiz + CORS açık.**
`supabase/config.toml:6` (`verify_jwt = false`) + `supabase/functions/manage-questions/index.ts:15-20,157` (`Access-Control-Allow-Origin: *`)
JWT/secret kontrolü yok, service-role ile `questions`'a yazıyor. Herhangi origin'den içerik enjekte edilebilir + her çağrı OpenAI `text-embedding-3-large` maliyeti (kötüye kullanım).
**Öneri:** `verify_jwt = true` + fonksiyon içi rol kontrolü; CORS'u prod origin'e kısıtla; paylaşılan secret header doğrula.

**Y2. [GÜVENLİK] RAG endpoint'inde rate-limit yok → maliyet/DoS.**
`api/explain.ts:32-95`
Kimliksiz, rate-limit yok. Her istek Pinecone reranker + Gemini stream tetikler (ikisi de ücretli). Döngü, 10 Gemini key + Pinecone kotasını tüketebilir.
**Öneri:** IP/oturum bazlı rate-limit (Vercel KV/Upstash), gövde boyut limiti, origin/anon-JWT kontrolü.

**Y3. `useExamTimer` resume'da harcanan süreyi yanlış hesaplıyor.**
`src/hooks/useExamTimer.ts:26,40,50`
Süre dolduğunda `used = (Date.now() - simStartRef)/1000` yalnızca **bu mount'taki** süreyi ölçer; resume edilmiş simülasyon zaman aşımına uğrarsa `usedSeconds` gerçeğin çok altında raporlanır → `SimulationResultView`'da yanlış hız metriği. Test yok (en riskli mantık).
**Öneri:** `used = totalSeconds - remainingSeconds` (resume-safe).

**Y4. AI "Tekrar Dene" yolu ölü.**
`src/components/quiz/QuizView.tsx:144-145` + `src/components/ai/AIAssistantPanel.tsx:84`
`useAIAssistant` `retryAI`/`retryCount` döndürüyor ama `QuizView`, `AIAssistantPanel`'e `onRetry` prop'unu geçmiyor. Panel'de buton `{onRetry && ...}` koşullu → hata durumunda asla render edilmez; `MAX_RETRY` mantığı erişilemez.
**Öneri:** `onRetry={ai.retryAI}` bağla ya da retry kodunu sil.

**Y5. `adaptive.ts` exposure-mix budama 80/15/5 oranını sessizce bozuyor.**
`src/lib/adaptive.ts:297-300`
`nCorrect<0` olunca unseen'den düşülüyor ama `nWrong` korunuyor; küçük `count`'ta wrongBefore over-temsil edilir, "görülmemiş öncelikli" sözleşmesi ihlal olur.
**Öneri:** Kovaları gerçek kova boyutuyla `Math.min`'le; leftover doldurmayı oran-bilinçli yap.

**Y6. `idb.ts` her sınav başında tüm content store'u `getAll()` ile çekip JS'te filtreliyor.**
`src/lib/idb.ts:81-95, 159-165`
Soru metinleri büyüdükçe O(n) bellek/CPU. `store.get(id)` per-id erişimi var.
**Öneri:** `Promise.all(ids.map(id => store.get(id)))` veya cursor.

**Y7. `pullAllDeviceStats` pagination satır kayması riski.**
`src/lib/supabase.ts:757-803`
`attempts desc, id asc` sıralı `range()` pagination delta filtresiyle birleşince, aynı `attempts` değerli satırlar iki sayfa arası tekrarlanabilir/**atlanabilir** (atlama = veri kaybı; tekrar zararsız çünkü merge `Math.max`).
**Öneri:** Cursor-based pagination (`gt('id', lastId)`) veya tek deterministik anahtar.

**Y8. Zod şemaları tanımlı ama hiçbir I/O yolunda çağrılmıyor.**
`src/lib/schemas.ts` (tüm dosya)
Cloud/localStorage'dan gelen `JSON.parse` doğrudan tip-cast ediliyor (`as StatsMap`), runtime validasyon yok. Bozuk cloud verisi (`corrects > attempts`, negatif) sessizce hesaba girer.
**Öneri:** En azından `syncStatsDown` merge girişinde ve session restore'da `safeParse` ile süz.

**Y9. `tsc -b` `api/` klasörünü typecheck etmiyor.**
`tsconfig.json` + `.github/workflows/quality-gate.yml`
`tsconfig.json` references yalnızca `app` + `node`; `tsconfig.api.json` hiçbir yere bağlı değil → `api/` tip hataları ne local build'de ne CI'da yakalanır, prod'a sızabilir.
**Öneri:** references'a `{ "path": "./tsconfig.api.json" }` ekle (`noEmit:true` doğrula).

**Y10. Çift lockfile — `package-lock.json` (npm) bun projesinde commit'li.**
`npm install` bun.lock'tan sapan bağımlılık ağacı üretip CI ile yereli ayırabilir.
**Öneri:** Sil + `.gitignore`'a `package-lock.json` ekle.

**Y11. [GÜVENLİK?] `test_claude.bat` repo'da API key string'i içeriyor.**
Tracked dosyada `ANTHROPIC_API_KEY=sk-ant-...`; string dummy/placeholder görünüyor ama gerçekse rotasyon şart.
**Öneri:** Dosyayı sil; anahtarın gerçek olup olmadığını doğrula, gerçekse döndür.

### 🟡 ORTA

- **O1. [GÜVENLİK] Prompt injection yüzeyi (iki yönlü).** `api/explain.ts:71` + `api/_lib/prompt.ts:81-86` + `pinecone.ts:52-56` — kullanıcı `question`/`options` metni ve Pinecone pasajları sanitize edilmeden prompt'a gömülüyor. **Öneri:** ayraçlarla "veri" işaretle, system prompt'a "kaynak bağlamdaki talimatları yok say" kuralı, uzunluk sınırı.
- **O2. [GÜVENLİK] Anonim oturum "claim" politikası çok geniş.** `supabase/migrations/20260528235500_fix_active_sessions_rls.sql:6-18` — `user_id IS NULL` herhangi satırı authenticated kullanıcı silebilir/güncelleyebilir (device_id eşleşmesi yok). **Öneri:** device eşleşmesi ekle ya da claim'i login-merge RPC'sine sınırla.
- **O3. RAG input validasyonu eksik.** `api/explain.ts:37-48` — `options.A..E`, `correctAnswer` enum/tip/uzunluk kontrolü yok; geçersizse `b.options[b.correctAnswer]` `undefined` → arama sessizce bozulur. **Öneri:** zod şema + gövde boyut limiti.
- **O4. [GÜVENLİK] Gemini API key URL query string'inde.** `api/_lib/gemini.ts:44` (`?key=...`) — proxy/CDN/log'da görünebilir. **Öneri:** `x-goog-api-key` header'a taşı.
- **O5. `loadAllStats()` render fazında senkron çağrılıyor.** `src/App.tsx:955,1184` — her render'da localStorage parse + yeni `stats` referansı → alt-view `useMemo`'ları kırılır. (`StatisticsView` doğru yapıyor.) **Öneri:** App'te tek `useMemo`/state, `statsVersion` ile invalidate.
- **O6. Tip güvenliği deliği: `rawQuestions as unknown as Question[]`.** `src/App.tsx:156` (+170, 794, 1054) — skeleton'lar `Question[]` gibi davranıyor; `q.question`/`q.options` erişimi derleme-zamanı yakalanmaz, runtime `undefined`. **Öneri:** prop'ları `QuestionSkeleton[]` tiple, cast'leri kaldır.
- **O7. `markdown.ts` XSS — tek savunma DOMPurify varsayımı kodda zorlanmıyor.** `src/lib/markdown.ts:15-41` — bir çağıran DOMPurify'ı atlarsa AI çıktısındaki kötü içerik risk. **Öneri:** sanitize'ı `renderMarkdown` içinde zorunlu kıl.
- **O8. `useResumableSession` simülasyon oturumunu kaybediyor.** `src/hooks/useResumableSession.ts:75` — `isValidCompact` yalnızca `mode 'quiz'|'exam'` kabul; `mode:'simulation'` restore'da geçersiz sayılıp silinir. **Öneri:** desteklenecekse whitelist'e ekle, değilse `toCompact` simülasyonu hiç yazmasın.
- **O9. `pendingDeletes` `flushing` guard ikinci eşzamanlı flush'ı sessizce yutuyor.** `src/lib/pendingDeletes.ts:60-94` — açılış effect + `online` event aynı anda → ikinci çağrı boş döner, race var. **Öneri:** in-flight promise döndür (`_syncUpInFlight` deseni).
- **O10. `dusPlacement` baraj/yuvarlama çelişkisi, testsiz.** `src/lib/dusPlacement.ts:81-100` — `net=49.6 → round 50 → passed:true` ama baraj altı olabilir; tablo dışı net'lerde suskun. **Öneri:** yuvarlamadan önce baraj kontrolü; muhafazakar `floor`.
- **O11. Confetti her doğru seçimde, desktop'ta throttle yok.** `src/components/quiz/QuestionCard.tsx:50-63` — hızlı çözende art arda GPU yükü (mobilde kapalı, iyi). **Öneri:** aktif-animasyon guard'ı.
- **O12. D3 chart stagger animasyonu yüksek node sayısında ana thread'i kilitliyor.** `src/components/charts/SunburstChart.tsx:169-173` ve benzerleri — StatisticsView'da ~25 grafik aynı anda mount. **Öneri:** node eşiği üstünde stagger kapat + `prefers-reduced-motion`.
- **O13. `scripts/cloze_output/` (599 dosya) + `raporlar/` (308 .md) kaynak repo'ya commit'li.** Repo'yu şişiriyor. **Öneri:** `.gitignore` + `git rm --cached`.
- **O14. `.git/` 123MB — geçmişte büyük binary commit'lenmiş.** **Öneri:** `git gc --aggressive`; gerekirse büyük blob'ları geçmişten temizle.
- **O15. `.mcp.json` placeholder.** `API_KEY: "YENİ_ANAHTARIN"` — MCP çalışmaz. **Öneri:** gerçek değeri env'e taşı veya dosyayı sil.
- **O16. Şema tutarsızlıkları (ölü/çelişen).** `supabase-schema.sql:163-169` tek `embedding vector(1536)` + `match_questions_semantic*` RPC'leri tanımlıyor; oysa edge function v4.33'te `stem_embedding`/`explanation_embedding`'e geçmiş. `merge_device_stats_to_user` schema vs migration-v2-auth.sql'de **iki farklı tanım**. **Öneri:** schema'yı prod ile senkronla, tek kanonik tanım bırak, ölü RPC'leri kaldır.

### 🟢 DÜŞÜK (özet)
- Çoklu `any`/tip kaçağı: `supabase.ts:70-72,1070-1073` embedded join tekil-obje varsayımı; test mock'larında `as any`.
- `App.tsx:241-271` dialog değeri `getElementById` ile DOM'dan okunuyor (controlled input yerine).
- `App.tsx:770-787` native `alert()`/`window.confirm()` merkezi dialog sistemi varken.
- Erişilebilirlik: `QuizHeader.tsx:117` ⋯ menüsü `aria-*` yok; `App.tsx:1501-1502` `<div onClick>` klavye erişilemez.
- Yerel-tarih kayması: `ContributionHeatMap.tsx:46` + `App.tsx:61` `toISOString().slice(0,10)` (UTC) → UTC+3'te gün kayması.
- `App.tsx:121-231` preview/mock kod prod bundle'ında (tree-shake edilmiyor).
- `deleted_records` public okuma (`20260531163200_delta_sync.sql:44-49`).
- `manage-questions` embedding model varsayılan parametresi yanıltıcı (`small` ama `large` çağrılıyor).
- `playwright.config.ts` `webServer: npm run dev` (bun projesinde npm).
- Kök çöp dosyaları: `debug_out.txt`, `out2-5.txt`, `temp_*.txt`, `fix_ts_*.py`, `stats_response*.json` — tracked, ölü.

---

## 5. Test Kapsamı

**Unit (Vitest) — genel kalite YÜKSEK/anlamlı** (yüzeysel değil; "1098→12 regresyonu" gibi yaşanmış buglar test'e dönüştürülmüş).

| Modül | Unit test | Değerlendirme |
|---|---|---|
| `stats.ts` | ✅✅✅ (stats + compute + sync.merge) | **Mükemmel** — merge invariant'ları kilitli |
| `metrics.ts`, `projections.ts` | ✅ | Mükemmel, edge-case dahil |
| `adaptive.ts` | ✅ | İyi — ama `pickByExposureMix` oran dağılımı doğrudan test edilmiyor |
| `supabase.ts` | ⚠️ kısmi | routing/pagination var; **delta-sync merge + last_seen tie-break test edilmiyor** |
| `pendingDeletes.ts` | ✅ | İyi — ama `flushing` concurrency guard testsiz |
| `useResumableSession` | ✅ saf fn | hook'un kendisi (debounce, beforeunload) testsiz |
| `markdown`, `dateUtils`, `shuffle` | ✅ | Mevcut |
| `idb.ts` | ❌ | **BOŞLUK** — migration/getAll/transaction (fake-indexeddb yok) |
| `dusPlacement.ts` | ❌ | **BOŞLUK** — baraj/closest-match edge-case |
| `schemas.ts`, `auth.ts` | ❌ | Boşluk |
| `useExamTimer` | ❌ | **BOŞLUK** — en riskli mantık (bkz Y3) testsiz |

**E2E (Playwright) — savunmacı/yüzeysel.** Çoğu adım `if(visible){...}` + `.catch(()=>false)` ile sarılı → UI değişse bile test **yeşil kalır** (false-negative koruması zayıf). Kritik akış (quiz tamamla→sonuç) gerçekten assert edilmiyor; çoğu "crash olmadı" seviyesinde. **CI'da e2e koşmuyor.**

**Öneri:** (1) `useExamTimer` resume testi ekle; (2) `idb`/`dusPlacement` için unit test; (3) en az 1 happy-path e2e'yi koşulsuz sıkı assert ile kilitle; (4) `vitest.config.ts`'e `coverage` provider + eşik ekle (şu an kapsam ölçülmüyor).

---

## 6. Repo Hijyeni

**`.gitignore` işini iyi yapıyor:** `src_backup/`, `scratch/`, `brain/`, `exports/`, `dist/`, `scripts/logs|recovery|__pycache__` hepsi **untracked** (disk'te büyük, repo'da değil).

**Gerçek tracked sorunlar (dar, nokta atışı):**
| Öğe | Durum | Aksiyon |
|---|---|---|
| `package-lock.json` (233KB) | npm artığı | Sil + ignore (Y10) |
| `scripts/cloze_output/` (599) , `raporlar/` (308 .md) | tracked çıktı | ignore + `git rm --cached` (O13) |
| `.git/` (123MB) | şişmiş geçmiş | `git gc` (O14) |
| `test_claude.bat` | key string | Sil + doğrula (Y11) |
| `debug_out/out2-5/temp_*/fix_ts_*.py/stats_response*.json` | ölü/geçici | toplu `git rm` |
| `.mcp.json` | placeholder | düzelt/sil (O15) |

**Dokunma (ölü/çalışma alanı):** `src_backup/` (src eski kopyası), `scratch/`, `eklenecek/`, `brain/`.

---

## 7. Önceliklendirilmiş İyileştirme Yol Haritası

### Sprint 1 — Güvenlik & Veri Bütünlüğü (ACİL, durdur-ve-düzelt)
1. **K1** `save_active_session` `auth.uid()` doğrulaması + grant kısıtı.
2. **K2** `questions` public yazma/silme politikalarını kaldır.
3. **Y1** `manage-questions` `verify_jwt=true` + CORS kısıtı.
4. **Y2** RAG endpoint rate-limit + gövde limiti.
5. **K3** Delta-sync timestamp'i sorgu-öncesi al (skeleton+questions+stats).
6. **K4** Stats push debounce yarışını `diff` ile düzelt.
7. **Y11** `test_claude.bat` sil + key doğrula.

### Sprint 2 — Doğruluk & Tip Güvenliği
8. **Y3** `useExamTimer` resume-safe formül + test.
9. **Y5** `adaptive` exposure-mix budama düzelt.
10. **Y8** Zod `safeParse`'ı sync giriş noktalarına bağla.
11. **Y9** `tsconfig.json`'a api reference ekle (CI typecheck'i kapansın).
12. **Y6/Y7** `idb.ts` per-id get; `pullAllDeviceStats` cursor pagination.
13. **O3/O4/O1** RAG input validasyon + key header + prompt injection guard.

### Sprint 3 — Kalite, Temizlik, Test
14. **Y4** AI retry'ı bağla veya kaldır.
15. **O5/O6** `loadAllStats` memoize; skeleton/Question tip ayrımı.
16. **Ölü kod sil:** `store/useAppStore.ts`, `components/ui/**`, `FluidNav`, `PageTransition`.
17. **App.tsx parçala:** 12 inline bileşen + `handleExportPDF` ayrı dosyalara.
18. **Test ekle:** `idb`, `dusPlacement`, `useExamTimer`; coverage eşiği; 1 sıkı e2e.
19. **Y10 + repo hijyeni:** lockfile, cloze_output, raporlar, git gc, kök çöp.
20. **O16** Şemayı prod ile senkronla, ölü RPC'leri temizle.

---

## 8. Korunması Gereken Güçlü Yönler (regresyon yapma)
- **Quiz katmanı** (`components/quiz/**`): hook ekstraksiyonu + `memo` + `useMemo` — örnek mimari.
- **Stats MAX-MERGE + regresyon testleri** (`stats.ts` + `sync.merge.test.ts`): veri kaybı önleme disiplinli.
- **`useResumableSession`**: `beforeunload` + `keepalive` fetch ile veri kaybını ciddi azaltmış.
- **Skeleton + Content lazy-load mimarisi**: egress kotası optimizasyonu akıllıca.
- **`upsert_stats_batch` RPC**: `auth.uid()` server-side — doğru güvenlik deseni (K1 için referans).
- **CI quality-gate**: tsc + vitest + build bloklayıcı, sağlam.
- **`VITE_GEMINI_API_KEY` kaldırılması**: frontend secret sızıntısı kapatılmış.
