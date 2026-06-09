# Evals Skill Entegrasyon Raporu — DUSBANKASI Projesi

**Tarih:** 2026-05-30
**Hazırlayan:** Marcus Webb — Principal Engineer
**Proje:** DUSBANKASI (DUS Hazırlık Uygulaması)
**Referans:** Anthropic "Demystifying Evals" Framework, Evals Skill (3 grader, 2 eval tipi, pass@k/pass^k)

---

## 1. Mevcut Durum Analizi

### 1.1 Test Altyapısı Mevcut Durumu

| Metrik | Değer |
|--------|-------|
| Test framework | Vitest 3.2 (mevcut, `package.json` script'lerde tanımlı) |
| Mevcut test dosyası sayısı | **2** (`shuffle.test.ts`, `adaptive.test.ts`) |
| Test kapsamı | Fisher-Yates shuffle (7 test), adaptive engine (22 test — yalnızca havuz kurma fonksiyonları) |
| Test edilmeyen modüller | AI kalitesi, stats motoru (14 saf fonksiyon + 8 async), session sync, quiz logic, KPI alert, streak, aktivite logu |
| CI pipeline | Yok |
| Model-based eval | Yok |
| Regression suite | Yok |

### 1.2 Değerlendirilmesi Gereken Kritik Sistemler

Projenin core mimarisi incelendiğinde aşağıdaki 5 sistem değerlendirme kapsamına alınmalıdır:

| # | Sistem | Dosya | Risk Seviyesi | Hata Tipi |
|---|--------|-------|---------------|-----------|
| 1 | **AI Açıklama Kalitesi** | `api/explain.ts`, `api/_lib/prompt.ts`, `src/lib/ai.ts` | Kritik | Kalite/nüans — yanlış tıbbi bilgi, format ihlali |
| 2 | **Quiz Motoru** | `src/types/app.ts` (QuizStatsType), `src/hooks/useResumableSession.ts` | Yüksek | Mantık hatası — yanlış doğru/yanlış/boş sayımı |
| 3 | **Adaptive Engine** | `src/lib/adaptive.ts` | Yüksek | Sıralama/skoring hatası — yanlış önceliklendirme |
| 4 | **Stats Hesaplamaları** | `src/lib/stats.ts` | Yüksek | Sayısal hata — yanlış accuracy, coverage, mastery |
| 5 | **Session Sync** | `src/hooks/useResumableSession.ts`, `src/lib/supabase.ts` (session bölümleri) | Kritik | State kaybı — cross-device veri tutarsızlığı |

---

## 2. Evals Skill Mimarisi

### 2.1 Grader Tipleri ve DUSBANKASI'nda Kullanım Gerekçeleri

| Grader Tipi | Ne Zaman Kullanılır | DUSBANKASI'nda Nerede |
|-------------|---------------------|-----------------------|
| **Code-based** | Deterministik, doğrulanabilir çıktılar. Sayısal hesaplamalar, flag kontrolleri, boolean assertions. Hızlı, tekrarlanabilir, sıfır maliyet. | Quiz logic, stats hesaplamaları, adaptive skoring, session state validasyonu |
| **Model-based** | Nüanslı, subjektif değerlendirme gerektiren çıktılar. Doğal dil kalitesi, format uygunluğu, tıbbi doğruluk. Yavaş, maliyetli. | AI açıklama kalitesi (Gemini çıktıları), prompt format uygunluğu |
| **Human** | Altın standart referans seti oluşturma. Model-based grader'ların kalibrasyonu için ground-truth. | AI çıktılarının tıbbi doğruluk referans kümesi (bir kerelik, periyodik örnekleme) |

### 2.2 Eval Tipleri ve Threshold Seçim Gerekçeleri

| Eval Tipi | Threshold | Kullanım Amacı | DUSBANKASI'nda Uygulama |
|-----------|-----------|----------------|-------------------------|
| **Capability** | ~%70 pass | Sistemin bir yeteneğe sahip olup olmadığını ölçer. Ürün geliştirme, özellik ekleme. | Yeni özellikler, AI prompt değişiklikleri, adaptive weight güncellemeleri |
| **Regression** | ~%99 pass | Mevcut davranışın korunduğunu garanti eder. Refactor, deploy öncesi. | CI/CD pipeline, merge öncesi, production deploy öncesi |

### 2.3 Metrik Seçimi: pass@k vs pass^k

```
pass@k  → "k denemede en az 1 başarı" (Capability eval için)
pass^k  → "k denemenin tümü başarı" (Regression eval için)
```

DUSBANKASI için önerilen: **pass@3** (capability) ve **pass^1** (regression). Stats ve quiz logic tamamen deterministik olduğundan tek trial yeterlidir. AI kalitesi non-deterministik olduğundan 3 trial ile değerlendirilir.

---

## 3. Eval Suite Tasarımları

### 3.1 Suite: `ai-explain-quality`

**Domain:** `conversational` (yapılandırılmış metin çıktısı)
**Eval Tipi:** Capability (pass@3, threshold %70) + Regression (pass^1, threshold %99)
**Tetikleyici:** Prompt değişikliği, model değişikliği, RAG pipeline değişikliği

**Değerlendirilen:** Gemini 2.5 Flash'ın ürettiği DUS açıklama metni

**Grader Konfigürasyonu:**

| Task ID | Grader Tipi | Değerlendirme Kriteri | Açıklama |
|---------|-------------|----------------------|----------|
| `format-compliance` | Code-based | Çıktıda 7 zorunlu bölüm var mı? (emoji+başlık regex) | `✅ Doğru Cevap`, `🧠 Adım Adım Çözüm`, `🎯 Ayırıcı Tanı`, `🪤 Klasik Tuzak`, `🧩 Kavram Sözlüğü`, `🔑 Hatırlatıcı`, `📌 DUS Spot Bilgisi` |
| `correct-answer-match` | Code-based | `✅ Doğru Cevap:` satırındaki harf, gönderilen correctAnswer ile eşleşiyor mu? | Regex: `/✅ Doğru Cevap:\s*([A-E])/` |
| `no-intro-forbidden` | Code-based | Giriş yasağı ihlali var mı? | "Merhaba", "Tabii", "İşte" kelimeleri ilk 50 karakterde aranmaz |
| `elimination-count` | Code-based | 4 yanlış şık tek tek elenmiş mi? | Bullet sayısı (A-E arası, doğru şık hariç) >= 4 |
| `source-reference` | Code-based | Kaynak bağlam verildiyse `(kaynak: ...)` referansı var mı? | Kaynak varsa regex match |
| `turkish-language` | Model-based | Çıktının tamamı Türkçe mi? (Latin tıbbi terminoloji hariç) | LLM değerlendirmesi |
| `medical-accuracy` | Model-based | Tıbbi açıklama doğru mu? Temel kavram hatası var mı? | LLM değerlendirmesi — en pahalı grader |
| `negative-question-detection` | Code-based | Negatif soru tespiti yapılmış ve uyarı eklenmiş mi? | Negatif tetikleyici içeren sorularda `**(Negatif soru — istisna/yanlış olan aranıyor.)**` varlığı |
| `no-hedging` | Code-based | Belirsizlik ifadesi var mı? | "Muhtemelen", "sanırım", "olabilir" regex |
| `length-bounds` | Code-based | Çıktı makul uzunlukta mı? | 300-3000 karakter arası (aşırı kısa/uzun cevap) |

**Örnek YAML Task Tanımı:**

```yaml
suite: ai-explain-quality
version: 1
domain: conversational
eval_type: capability
trials: 3
pass_threshold: 0.70

tasks:
  - id: format-compliance
    description: "AI çıktısı 7 zorunlu bölümü eksiksiz içermeli"
    grader: code-based
    metric: pass@3
    assertion: |
      const sections = ['✅ Doğru Cevap', '🧠 Adım Adım Çözüm', '🎯 Ayırıcı Tanı',
                        '🪤 Klasik Tuzak', '🧩 Kavram Sözlüğü', '🔑 Hatırlatıcı',
                        '📌 DUS Spot Bilgisi'];
      return sections.every(s => output.includes(s));

  - id: correct-answer-match
    description: "AI doğru cevap harfini tutturmalı"
    grader: code-based
    metric: pass@3
    assertion: |
      const match = output.match(/✅ Doğru Cevap:\s*([A-E])/);
      return match && match[1] === expected.correctAnswer;

  - id: no-intro-forbidden
    description: "Giriş cümlesi (Merhaba, Tabii, İşte) içermemeli"
    grader: code-based
    metric: pass@3
    assertion: |
      const first50 = output.slice(0, 50);
      return !/(Merhaba|Tabii|İşte)/i.test(first50);

  - id: turkish-language
    description: "Çıktı Türkçe olmalı (Latin tıbbi terminoloji hariç)"
    grader: model-based
    metric: pass@3
    prompt: |
      Aşağıdaki metnin Türkçe yazılıp yazılmadığını değerlendir.
      Latin tıbbi/anatomik terimler (ör. "foramen apicale", "lamina dura") Türkçe ihlali sayılmaz.
      Sadece EVET veya HAYIR cevabı ver.

  - id: medical-accuracy
    description: "Tıbbi açıklama doğru ve literatürle uyumlu"
    grader: model-based
    metric: pass@3
    prompt: |
      Soru: {question}
      Doğru Cevap: {correctAnswer}
      AI Açıklaması: {output}

      Bu açıklamada tıbbi olarak yanlış veya DUS literatürüyle çelişen bir ifade var mı?
      Sadece EVET (hata var) veya HAYIR (doğru) cevabı ver.
```

### 3.2 Suite: `quiz-logic`

**Domain:** `coding` (deterministik iş mantığı)
**Eval Tipi:** Regression (pass^1, threshold %99)
**Tetikleyici:** Quiz state machine değişikliği, her commit

**Değerlendirilen:** QuizStatsType hesaplamaları — doğru/yanlış/boş sayımı, AnswerDetail state geçişleri

**Grader Konfigürasyonu:**

| Task ID | Grader Tipi | Değerlendirme Kriteri |
|---------|-------------|----------------------|
| `correct-count` | Code-based | Doğru cevaplanan soru sayısı doğru hesaplanıyor mu? |
| `incorrect-count` | Code-based | Yanlış cevaplanan soru sayısı doğru hesaplanıyor mu? |
| `blank-count` | Code-based | Boş bırakılan soru sayısı doğru hesaplanıyor mu? |
| `total-consistency` | Code-based | correct + incorrect + blank === total? |
| `detail-state-match` | Code-based | Her AnswerDetail.state, seçime ve correctAnswer'a göre doğru mu? |
| `time-tracking` | Code-based | timeSpent > 0 kontrolü |
| `session-completion` | Code-based | Tüm sorular cevaplandığında session tamamlanmış sayılıyor mu? |
| `partial-empty-session` | Code-based | Hiç cevap verilmemiş session'da correct=incorrect=0, blank=total? |

**Örnek YAML Task Tanımı:**

```yaml
suite: quiz-logic
version: 1
domain: coding
eval_type: regression
trials: 1
pass_threshold: 0.99

tasks:
  - id: correct-count
    description: "Doğru cevaplanan soru sayısı hesaplaması"
    grader: code-based
    metric: pass^1
    assertion: |
      const stats = computeQuizStats(answers, questions);
      const expectedCorrect = answers.filter(a => a.state === 'correct').length;
      return stats.correct === expectedCorrect;

  - id: total-consistency
    description: "correct + incorrect + blank toplamı total'e eşit olmalı"
    grader: code-based
    metric: pass^1
    assertion: |
      const stats = computeQuizStats(answers, questions);
      return (stats.correct + stats.incorrect + stats.blank) === stats.total;
```

### 3.3 Suite: `adaptive-engine`

**Domain:** `coding` (deterministik sıralama algoritmaları)
**Eval Tipi:** Regression (pass^1, threshold %99) + Capability (pass@3, threshold %70)
**Tetikleyici:** Adaptive weight değişikliği, yeni skoring stratejisi

**Değerlendirilen:** `buildSmartQueue`, `buildUnitQueue`, `buildSimulationPool`, `buildExamPool`, `pickByExposureMix`, `getWeakestUnits`, `getCurriculumProgress`

**Mevcut Test Durumu:** 22 test var (adaptive.test.ts) — bunlar korunacak ve aşağıdakilerle genişletilecek.

**Yeni Eklenecek Task'lar:**

| Task ID | Grader Tipi | Değerlendirme Kriteri |
|---------|-------------|----------------------|
| `exposure-mix-ratio` | Code-based | 80/15/5 oranı tolerance dahilinde tutturuluyor mu? |
| `no-duplicate-ids` | Code-based | buildExamPool, buildSimulationPool çıktısında tekrar eden ID yok |
| `interleaving-lesson-diversity` | Code-based | Ardışık sorular farklı derslerden mi geliyor? |
| `priority-monotonicity` | Code-based | Düşük doğruluklu soru, yüksek doğrulukludan önce mi sıralanıyor? |
| `unseen-first-ordering` | Code-based | buildUnitQueue'de görülmemiş sorular görülmüşlerden önce mi? |
| `weakest-unit-sort` | Code-based | getWeakestUnits accuracy asc sıralı mı? |
| `curriculum-completion` | Code-based | Tüm soruları çözülmüş ünite completed sayılıyor mu? |
| `limit-respected` | Code-based | Tüm queue fonksiyonlarında limit aşılmıyor mu? |
| `sim-exclusion-filter` | Code-based | "YANLIŞLARIM" dersi simülasyon havuzundan hariç tutuluyor mu? |
| `empty-input-safety` | Code-based | Boş dizi girişlerde hata fırlatmak yerine boş dizi dönüyor mu? |

**Örnek YAML Task Tanımı:**

```yaml
suite: adaptive-engine
version: 1
domain: coding
eval_type: regression
trials: 1
pass_threshold: 0.99

tasks:
  - id: exposure-mix-ratio
    description: "EXPOSURE_MIX 80/15/5 oranı tolerance dahilinde tutturulmalı"
    grader: code-based
    metric: pass^1
    assertion: |
      const result = pickByExposureMix(testQuestions, 100, testStats);
      // Her sorunun görülme durumunu say
      let unseen = 0, wrong = 0, correct = 0;
      for (const q of result) {
        const s = testStats[q.id];
        if (!s || s.attempts === 0) unseen++;
        else if (s.corrects < s.attempts) wrong++;
        else correct++;
      }
      // %5 tolerance
      return Math.abs(unseen/100 - 0.80) < 0.05
          && Math.abs(wrong/100 - 0.15) < 0.05
          && Math.abs(correct/100 - 0.05) < 0.05;
```

### 3.4 Suite: `stats-calculation`

**Domain:** `coding` (saf fonksiyonlar, sayısal hesaplamalar)
**Eval Tipi:** Regression (pass^1, threshold %99)
**Tetikleyici:** Her commit, özellikle stats.ts değişikliklerinde

**Değerlendirilen:** `computeOverviewStats`, `computeTrend`, `computeActivityTrend`, `generateKpiAlerts`, `accuracyToDifficulty`, `saveQuestionStat` yan etkileri

**Grader Konfigürasyonu:**

| Task ID | Grader Tipi | Değerlendirme Kriteri |
|---------|-------------|----------------------|
| `overview-bank-total` | Code-based | bankTotal, questions.length'e eşit mi? |
| `overview-consistency` | Code-based | solvedUnique + unsolvedUnique === bankTotal? |
| `overview-attempts-consistency` | Code-based | totalCorrects + totalIncorrects === totalAttempts? |
| `coverage-calculation` | Code-based | coverage % = Math.round((solvedUnique / bankTotal) * 100)? |
| `accuracy-calculation` | Code-based | accuracy % = Math.round((totalCorrects / totalAttempts) * 100)? |
| `mastery-threshold` | Code-based | accuracy >= 0.8 olan sorular masteredUnique'a dahil mi? |
| `weak-threshold` | Code-based | accuracy < 0.5 olan sorular weakCount'a dahil mi? |
| `difficulty-distribution` | Code-based | easy + medium + hard === solvedUnique? |
| `mastery-distribution` | Code-based | untouched + weak + learning + mastered === bankTotal? |
| `trend-direction` | Code-based | delta > 0 ise 'up', delta < 0 ise 'down', delta === 0 ise 'flat'? |
| `trend-delta-pct` | Code-based | deltaPct = Math.round((delta / previous) * 100) (previous > 0)? |
| `kpi-alert-critical` | Code-based | accuracy < 40 ise critical alert üretiliyor mu? |
| `kpi-alert-daily-target` | Code-based | todayCount < 100 ise warning, 0 ise critical alert? |
| `kpi-max-count` | Code-based | En fazla 5 alert dönüyor mu? |
| `difficulty-label-bounds` | Code-based | d < 4 → easy, d < 7 → medium, else → hard? |
| `wrong-choice-recording` | Code-based | Yanlış cevapta selectedOption wrongChoices'a ekleniyor mu? |
| `correct-no-wrong-record` | Code-based | Doğru cevapta wrongChoices'a kayıt eklenmiyor mu? |
| `time-history-limit` | Code-based | timeSpentHistory en fazla 50 kayıt mı tutuyor? |

**Örnek YAML Task Tanımı:**

```yaml
suite: stats-calculation
version: 1
domain: coding
eval_type: regression
trials: 1
pass_threshold: 0.99

tasks:
  - id: overview-consistency
    description: "solvedUnique + unsolvedUnique bankTotal'a eşit olmalı"
    grader: code-based
    metric: pass^1
    assertion: |
      const overview = computeOverviewStats(testQuestions, testStats);
      return overview.solvedUnique + overview.unsolvedUnique === overview.bankTotal;

  - id: mastery-threshold
    description: "accuracy >= 0.8 olan sorular masteredUnique'a dahil edilmeli"
    grader: code-based
    metric: pass^1
    assertion: |
      const overview = computeOverviewStats(testQuestions, testStats);
      let expectedMastered = 0;
      for (const q of testQuestions) {
        const s = testStats[q.id];
        if (s && s.attempts > 0 && (s.corrects / s.attempts) >= 0.8) expectedMastered++;
      }
      return overview.masteredUnique === expectedMastered;
```

### 3.5 Suite: `session-sync`

**Domain:** `coding` (state machine + async I/O)
**Eval Tipi:** Regression (pass^1, threshold %99)
**Tetikleyici:** Session management değişiklikleri, Supabase RPC değişiklikleri

**Değerlendirilen:** `useResumableSession`, `toCompact`, `fromCompact`, `isValidCompact`, `isValidLegacy`, `saveSessionToCloud`, `loadSessionFromCloud`

**Grader Konfigürasyonu:**

| Task ID | Grader Tipi | Değerlendirme Kriteri |
|---------|-------------|----------------------|
| `compact-roundtrip` | Code-based | ActiveSessionInfo → CompactSessionInfo → ActiveSessionInfo dönüşümü identity mi? |
| `compact-validation-complete` | Code-based | Tüm sorular cevaplanmış session geçersiz sayılıyor mu? |
| `compact-validation-empty` | Code-based | questionIds boş dizi ise geçersiz sayılıyor mu? |
| `compact-validation-mode` | Code-based | mode 'quiz' veya 'exam' değilse geçersiz sayılıyor mu? |
| `compact-validation-index` | Code-based | currentIndex sınır dışı ise geçersiz sayılıyor mu? |
| `legacy-validation-rules` | Code-based | Legacy format aynı doğrulama kurallarına tabi mi? |
| `missing-question-recovery` | Code-based | fromCompact'te questionPool'da olmayan soru graceful handle ediliyor mu? |
| `index-clamp` | Code-based | currentIndex questionPool sınırını aşamaz (Math.min ile clamp) |
| `auto-clear-on-complete` | Code-based | answers.length >= questions.length ise session cloud'dan siliniyor mu? |
| `error-serialization` | Code-based | PostgrestError (instanceof Error değil) düzgün serialize ediliyor mu? |

**Örnek YAML Task Tanımı:**

```yaml
suite: session-sync
version: 1
domain: coding
eval_type: regression
trials: 1
pass_threshold: 0.99

tasks:
  - id: compact-roundtrip
    description: "Compact ↔ Active dönüşümü soru havuzu tamken identity olmalı"
    grader: code-based
    metric: pass^1
    assertion: |
      const original = createTestSession();
      const compact = toCompact(original);
      const restored = fromCompact(compact, questionPool);
      return restored !== null
          && restored.currentIndex === original.currentIndex
          && restored.mode === original.mode
          && restored.answers.length === original.answers.length;

  - id: compact-validation-complete
    description: "Tüm sorular tamamlandığında session geçersiz"
    grader: code-based
    metric: pass^1
    assertion: |
      const compact = { questionIds: ['q1','q2'], answers: [
        { questionId:'q1', state:'correct' },
        { questionId:'q2', state:'incorrect' }
      ], currentIndex: 0, mode: 'quiz' };
      return !isValidCompact(compact); // answers >= questions → false
```

---

## 4. CI/CD Entegrasyon Stratejisi

### 4.1 Pipeline Aşamaları

```
┌─────────┐    ┌──────────────┐    ┌─────────────────┐    ┌──────────┐
│ Commit  │───▶│ Capability   │───▶│ Regression Eval │───▶│ Deploy   │
│ Push    │    │ Eval (hızlı) │    │ (tam suite)     │    │ Ready    │
└─────────┘    └──────────────┘    └─────────────────┘    └──────────┘
                    30sn                 2-5dk
```

### 4.2 Tetikleyici Matrisi

| Tetikleyici | Çalışan Suite'ler | Eval Tipi |
|-------------|-------------------|-----------|
| **Her commit (pre-commit hook)** | `quiz-logic`, `stats-calculation` (code-based only) | Regression |
| **PR açma / push** | `quiz-logic`, `stats-calculation`, `adaptive-engine`, `session-sync` | Regression |
| **Prompt değişikliği** (`api/_lib/prompt.ts`) | `ai-explain-quality` | Capability |
| **Model değişikliği** (Gemini versiyon) | `ai-explain-quality` | Capability |
| **Adaptive weight değişikliği** | `adaptive-engine` | Capability + Regression |
| **Production deploy öncesi** | Tüm suite'ler | Regression |
| **Haftalık periyodik** (Pazartesi 09:00) | `ai-explain-quality` (50 soruluk örneklem) | Capability |

### 4.3 GitHub Actions Önerisi (`.github/workflows/evals.yml`)

```yaml
name: Evals Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: '0 6 * * 1'  # Her Pazartesi 09:00 TR

jobs:
  regression-evals:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run evals:regression

  ai-capability-evals:
    if: contains(github.event.head_commit.modified, 'api/_lib/prompt.ts')
    runs-on: ubuntu-latest
    env:
      GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
      PINECONE_API_KEY: ${{ secrets.PINECONE_API_KEY }}
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run evals:ai-capability
```

### 4.4 package.json Script'leri

```json
{
  "scripts": {
    "evals:regression": "vitest run --config vitest.evals.config.ts",
    "evals:ai-capability": "vitest run --config vitest.evals.ai.config.ts",
    "evals:all": "bun run evals:regression && bun run evals:ai-capability",
    "evals:new-suite": "tsx scripts/create-eval-suite.ts"
  }
}
```

---

## 5. Uygulama Planı (5 Faz)

### Faz 1: Altyapı Kurulumu (1 gün)

**Hedef:** Evals framework'ünün projeye eklenmesi, temel CLI araçlarının kurulumu.

**Adımlar:**
1. `src/evals/` dizin yapısını oluştur:
   ```
   src/evals/
   ├── suites/           # YAML task tanımları
   │   ├── ai-explain-quality.yaml
   │   ├── quiz-logic.yaml
   │   ├── adaptive-engine.yaml
   │   ├── stats-calculation.yaml
   │   └── session-sync.yaml
   ├── graders/          # Grader implementasyonları
   │   ├── code-based.ts
   │   ├── model-based.ts
   │   └── human.ts
   ├── runner/           # Eval çalıştırma motoru
   │   ├── SuiteManager.ts
   │   ├── AlgorithmBridge.ts
   │   └── FailureToTask.ts
   ├── fixtures/         # Test veri setleri
   │   ├── questions.json # 50 soruluk temsili set
   │   ├── stats-fixtures.json
   │   └── ai-responses/   # Kaydedilmiş AI çıktıları
   └── utils/
       └── assert.ts
   ```
2. Vitest config'ini genişlet (`vitest.evals.config.ts`):
   - `include: ['src/evals/**/*.test.ts']`
   - `testTimeout: 60000` (AI eval için)
3. `SuiteManager` CLI aracını yaz:
   - YAML suite dosyasını oku
   - Task'ları parse et
   - Grader'ları task'lara bağla
   - Sonuç raporu üret (pass/fail, pass@k skoru)

### Faz 2: Code-Based Suitelerin İlk Uygulaması (2 gün)

**Hedef:** En yüksek RoI'li suitelerin implementasyonu.

**Öncelik sırası:**
1. **`stats-calculation`** — En çok saf fonksiyon, en kolay test, en yüksek hata riski (kullanıcıya gösterilen tüm metrikler buradan geliyor). 18 task.
2. **`quiz-logic`** — Quiz state machine doğruluğu. 8 task.
3. **`adaptive-engine`** — Mevcut 22 test + 10 yeni task. Skoring ve sıralama.
4. **`session-sync`** — 10 task. Cross-device veri bütünlüğü.

**Her suite için yapılacaklar:**
- YAML task tanımını oluştur
- Test fixture'larını hazırla (50-100 soruluk gerçekçi veri seti)
- Code-based grader assertion fonksiyonlarını yaz
- `SuiteManager` ile çalıştır ve pass threshold'ları doğrula

### Faz 3: Model-Based AI Eval (1 gün)

**Hedef:** `ai-explain-quality` suite'inin implementasyonu.

**Adımlar:**
1. 10-20 gerçek sorudan oluşan referans seti hazırla (farklı derslerden, pozitif/negatif soru tipleri)
2. Her soru için kaydedilmiş Gemini çıktısını `fixtures/ai-responses/` altına kaydet
3. Model-based grader için Gemini API çağrısı yapan `grader-llm.ts` yaz
4. Code-based assertion'ları uygula (format, regex kontrolleri — hızlı/ucuz)
5. Model-based assertion'ları uygula (Türkçe kontrolü, tıbbi doğruluk — yavaş/pahalı)
6. Human grader için 5 soruluk altın standart referans seti oluştur

### Faz 4: CI/CD Entegrasyonu (0.5 gün)

**Hedef:** Evals'in otomatik pipeline'a bağlanması.

**Adımlar:**
1. GitHub Actions workflow dosyasını oluştur
2. Supabase ve Gemini secret'larını ekle
3. Pre-commit hook: `bun run evals:regression` (code-based only, <30sn)
4. PR check: tam regression suite
5. Prompt değişikliğinde AI capability suite otomatik tetikleme

### Faz 5: Kalibrasyon ve İyileştirme (Sürekli)

**Hedef:** Eval kalitesinin sürekli iyileştirilmesi.

**Aktiviteler:**
1. İlk 2 hafta: Her failure'ı incele, false-positive'leri düzelt
2. Aylık: Human grader ile 5 soruluk kalibrasyon örneklemi
3. Yeni özellik eklenince: İlgili suite'e yeni task ekle
4. Adaptive weights değişince: `adaptive-engine` capability eval çalıştır

---

## 6. Beklenen Etki Analizi

### 6.1 Önleyeceği Hata Sınıfları

| Hata Sınıfı | Örnek Senaryo | İlgili Suite | Şiddet |
|-------------|--------------|-------------|--------|
| **Stats Regresyonu** | Coverage hesaplamasında `/0` hatası, NaN gösterimi | `stats-calculation` | Yüksek — tüm dashboard yanlış |
| **Quiz State Bozulması** | Boş soru "doğru" sayılıyor, yanlış istatistik | `quiz-logic` | Kritik — öğrenci yanıltılır |
| **Adaptive Skoring Kayması** | Ağırlık değişikliği sonrası hep aynı dersin soruları geliyor | `adaptive-engine` | Orta — çalışma verimsizleşir |
| **Session Kaybı** | Cross-device geçişte 50 soruluk ilerleme sıfırlanıyor | `session-sync` | Kritik — kullanıcı güven kaybı |
| **AI Prompt Bozulması** | Prompt değişikliği sonrası AI Türkçe yerine İngilizce cevap veriyor | `ai-explain-quality` | Orta — kullanıcı deneyimi düşer |
| **AI Tıbbi Hata** | Model halüsinasyonu — yanlış kontrendikasyon bilgisi | `ai-explain-quality` | Kritik — hasta güvenliği riski (dolaylı) |

### 6.2 Kalite Metrikleri Öngörüsü

| Metrik | Entegrasyon Öncesi | 1 Ay Sonra Hedef | 3 Ay Sonra Hedef |
|--------|-------------------|------------------|------------------|
| Code-based test kapsamı (lib/) | ~%15 | ~%85 | ~%95 |
| Regression suite pass rate | N/A | %99 | %99.5 |
| AI prompt değişikliği sonrası hata yakalama | 0% (manuel) | %80 | %95 |
| Deploy öncesi güven skoru | Subjektif | Veriye dayalı | Veriye dayalı + trend |
| Haftalık production hatası | Bilinmiyor | <1 | <0.2 |

### 6.3 Maliyet Tahmini

| Kaynak | Aylık Tahmini Kullanım | Aylık Maliyet |
|--------|------------------------|--------------|
| Model-based grader (Gemini 2.5 Flash) | ~200 değerlendirme (haftalık 50 soru + PR başına ~10) | ~$0.10 |
| CI dakika (GitHub Actions) | ~500 dk/ay | Ücretsiz limit dahilinde |
| Human grader zamanı | 30 dk/ay (5 soru kalibrasyon) | 30 dk mühendis zamanı |
| **Toplam** | | **İhmal edilebilir** |

---

## 7. Riskler ve Azaltma Stratejileri

| Risk | Olasılık | Etki | Azaltma |
|------|----------|------|---------|
| Model-based grader'ın kendisi halüsinasyon yapabilir | Orta | Orta | Human grader ile aylık kalibrasyon; yalnızca "EVET/HAYIR" binary soruları sor |
| Yanlış pozitif (false positive) — iyi kod başarısız görünür | Düşük | Orta | İlk 2 hafta manuel failure review; threshold'ları kalibre et |
| AI eval süresi CI'da timeout'a neden olur | Düşük | Düşük | AI eval yalnızca prompt/model değişikliğinde tetiklenir; periyodik çalışır |
| Test fixture'ları production verisini yansıtmaz | Orta | Yüksek | Aylık fixture güncellemesi; production'dan anonimleştirilmiş örneklem |

---

## 8. Sonraki Adımlar (Hemen Uygulanabilir)

1. **Bugün:** `src/evals/suites/stats-calculation.yaml` oluştur ve ilk 5 task'ı tanımla
2. **Yarın:** `stats-calculation` code-based grader'larını yaz ve `bun run evals:regression` ile çalıştır
3. **Bu hafta:** `quiz-logic` ve `session-sync` suitelerini ekle
4. **Gelecek hafta:** `ai-explain-quality` suite'i için 10 soruluk referans seti hazırla, model-based grader'ı implemente et
5. **2 hafta içinde:** GitHub Actions CI entegrasyonunu tamamla

---

## Ek A: Mevcut Kodun Eval Edilebilirlik Haritası

Aşağıdaki tablo, `src/lib/` altındaki her fonksiyonun eval edilebilirliğini ve önceliğini gösterir:

| Fonksiyon | Dosya | Saf mı? | Deterministik mi? | Eval Tipi | Öncelik |
|-----------|-------|---------|-------------------|-----------|---------|
| `computeOverviewStats` | stats.ts | Evet | Evet | Code-based | P0 |
| `accuracyToDifficulty` | stats.ts | Evet | Evet | Code-based | P0 |
| `difficultyLabel` | stats.ts | Evet | Evet | Code-based | P0 |
| `computeTrend` | stats.ts | Evet | Evet | Code-based | P1 |
| `computeActivityTrend` | stats.ts | Evet | Evet | Code-based | P1 |
| `generateKpiAlerts` | stats.ts | Evet | Evet | Code-based | P0 |
| `getUnitProgress` | stats.ts | Hayır (localStorage) | Evet | Code-based (mock) | P1 |
| `getWeakQuestionIds` | stats.ts | Hayır (localStorage) | Evet | Code-based (mock) | P1 |
| `normalizeActivity` | stats.ts | Evet | Evet | Code-based | P1 |
| `mergeWrongChoices` | stats.ts | Evet | Evet | Code-based | P2 |
| `mergeTimeSpentHistory` | stats.ts | Evet | Evet | Code-based | P2 |
| `loadStreak` | stats.ts | Hayır (localStorage) | Evet | Code-based (mock) | P2 |
| `saveQuestionStat` | stats.ts | Hayır (localStorage) | Evet (side-effect) | Code-based (mock) | P0 |
| `buildSmartQueue` | adaptive.ts | Evet | Math.random ile değil (mock ile evet) | Code-based | P0 |
| `buildUnitQueue` | adaptive.ts | Evet | Math.random ile değil (mock ile evet) | Code-based | P1 |
| `pickByExposureMix` | adaptive.ts | Evet | Math.random ile değil (mock ile evet) | Code-based | P0 |
| `buildSimulationPool` | adaptive.ts | Evet | Math.random ile değil (mock ile evet) | Code-based | P0 |
| `buildExamPool` | adaptive.ts | Evet | Math.random ile değil (mock ile evet) | Code-based | P0 |
| `getWeakestUnits` | adaptive.ts | Evet | Evet | Code-based | P1 |
| `getCurriculumProgress` | adaptive.ts | Evet | Evet | Code-based | P1 |
| `fisherYates` | shuffle.ts | Evet | Hayır (random) | Code-based (istatistiksel) | P2 |
| `explainWithAIStream` | ai.ts | Hayır (fetch) | Hayır (stream) | Integration | P2 |
| `toCompact` / `fromCompact` | useResumableSession.ts | Evet | Evet | Code-based | P0 |
| `isValidCompact` / `isValidLegacy` | useResumableSession.ts | Evet | Evet | Code-based | P0 |
| `syncStatsUp` / `syncStatsDown` | stats.ts | Hayır (Supabase) | Hayır (network) | Integration | P1 |

---

## Ek B: Önerilen Dizin Yapısı

```
src/evals/
├── suites/
│   ├── ai-explain-quality.yaml
│   ├── quiz-logic.yaml
│   ├── adaptive-engine.yaml
│   ├── stats-calculation.yaml
│   └── session-sync.yaml
├── graders/
│   ├── code-based.ts        # Regex, assertion, sayısal kontroller
│   ├── model-based.ts       # Gemini çağrısı ile LLM değerlendirmesi
│   └── human.ts             # Manuel değerlendirme için veri toplama
├── runner/
│   ├── SuiteManager.ts      # YAML → Task → Grader → Report pipeline
│   ├── AlgorithmBridge.ts   # pass@k ve pass^k hesaplama motoru
│   └── FailureToTask.ts     # Başarısız eval'lerden yeni task üretme
├── fixtures/
│   ├── questions.json       # 50 soruluk temsili test seti
│   ├── stats-fixtures.json  # Çeşitli istatistik senaryoları
│   └── ai-responses/        # Kaydedilmiş Gemini çıktıları (model-based eval için)
│       ├── pozitif-soru-1.txt
│       ├── negatif-soru-1.txt
│       └── ...
├── utils/
│   └── assert.ts            # Özel assertion yardımcıları
└── __tests__/               # Evals'in kendi testleri (meta-testing)
    └── graders.test.ts
```

---

**Raporu Hazırlayan:** Marcus Webb, Principal Engineer
**Onay Durumu:** İncelenmeyi bekliyor
**Bir Sonraki Gözden Geçirme:** İlk suite implementasyonundan sonra (1 hafta)
