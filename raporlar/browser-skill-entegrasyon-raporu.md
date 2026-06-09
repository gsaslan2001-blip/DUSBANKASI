# Browser Skill Entegrasyon Raporu — DUSBANKASI Projesi

**Tarih:** 2026-05-30
**Skill Versiyonu:** Browser v3.3.0 (playwright-cli tabanlı)
**Proje:** DUSBANKASI — DUS Hazırlık Uygulaması
**Hazırlayan:** Atlas (Marcus Webb — Battle-Scarred Leader)

---

## İçindekiler

1. [Mevcut Durum Analizi](#1-mevcut-durum-analizi)
2. [Risk Haritası](#2-risk-haritasi)
3. [Kritik Test Senaryoları](#3-kritik-test-senaryoları)
4. [Stories YAML Tasarımı](#4-stories-yaml-tasarımı)
5. [Recipes Tasarımı](#5-recipes-tasarımı)
6. [CI/CD Entegrasyon Planı](#6-cicd-entegrasyon-plani)
7. [Uygulama Adımları](#7-uygulama-adımları)
8. [Beklenen Etki](#8-beklenen-etki)

---

## 1. Mevcut Durum Analizi

### 1.1 Proje Envanteri

| Kategori | Sayı | Detay |
|----------|------|-------|
| Toplam Bileşen | 50+ TSX dosyası | Quiz, admin, AI, istatistik, chart, UI |
| Chart Bileşenleri | 40+ | D3.js tabanlı karmaşık görselleştirmeler |
| Custom Hook | 7 | useQuestions, useAuth, useExamTimer, useAIAssistant, useResumableSession, useRealtimeStats, useKeyboardShortcuts |
| Ana Uygulama Dosyası | 1 | App.tsx (~2500 satır monolitik state makinesi) |
| Backend | Supabase | Auth, soru CRUD, realtime stats, daily exam |
| Dev Server | Vite (port 5173) | Proxy: /api -> localhost:5175 (Vercel dev) |
| **Mevcut Testler** | **2 adet** | shuffle.test.ts, adaptive.test.ts (sadece lib/ birim testleri) |
| **Browser/E2E Test** | **0 (SIFIR)** | Hiçbir tarayıcı otomasyon testi yok |

### 1.2 Test Edilmemiş UI Akışları

Aşağıdaki tüm akışlar şu anda **yalnızca manuel insan gözüyle** doğrulanmaktadır. Hiçbirinin otomatik browser testi mevcut değildir:

| Akış | Bileşen(ler) | Kritiklik | Mevcut Doğrulama |
|------|-------------|-----------|-----------------|
| Quiz çözme (tekil soru) | QuizView, QuestionCard, QuizNavigation | ÇOK YÜKSEK | Manuel |
| Sınav modu (zamanlı) | QuizView (exam mode), useExamTimer | ÇOK YÜKSEK | Manuel |
| Simülasyon sonuç ekranı | SimulationResultView | YÜKSEK | Manuel (`?preview=sim`) |
| Auth (Google + Email) | AuthModal, useAuth | YÜKSEK | Manuel |
| AI Asistan paneli | AIAssistantPanel, useAIAssistant | ORTA | Manuel |
| İstatistik dashboard (3 tier) | StatisticsView + 40 chart | YÜKSEK | Manuel |
| Soru ekleme (tekil/toplu) | AddQuestionView | ORTA | Manuel |
| Kaynak kitap görünümü | SourceBooksView | DÜŞÜK | Manuel |
| Hata analitiği | ErrorAnalyticsView | ORTA | Manuel |
| Günlük plan | DailyPlanView | ORTA | Manuel |
| Favori/flag/delete soru | QuestionCard aksiyonları | ORTA | Manuel |
| Ders/ünite seçimi | App.tsx selector state | YÜKSEK | Manuel |
| Karanlık/aydınlık tema geçişi | Theme toggle | DÜŞÜK | Manuel |
| Cross-device senkronizasyon | SyncManager, useRealtimeStats | YÜKSEK | Manuel |
| DUS sayacı | CountdownWidget | DÜŞÜK | Manuel |

### 1.3 Mevcut Test Altyapısı Zayıflıkları

```
src/lib/__tests__/
  shuffle.test.ts     — Sadece Fisher-Yates shuffle algoritması
  adaptive.test.ts    — Sadece adaptive motor (kuyruk oluşturma)
```

- **Vitest** kurulu fakat sadece 2 birim test için kullanılıyor
- **jsdom** kurulu fakat browser etkileşim testi için kullanılmıyor
- **Hiçbir React bileşen render testi yok**
- **Hiçbir kullanıcı etkileşimi testi yok** (click, fill, navigation)
- **Hiçbir görsel regresyon testi yok**
- **Hiçbir API mock/integration testi yok**

---

## 2. Risk Haritası

```
┌─────────────────────────────────────────────────────────────────┐
│ ETKİ (YIKICI)                                                   │
│                                                                 │
│  Kritik-1: Quiz çözme state bozulması                           │
│  (currentIndex, answers, selectedOption senkronizasyonu)        │
│                                                                 │
│  Kritik-2: Sınav süresi dolunca cevapların kaybolması           │
│  (useExamTimer closure + answersRef)                            │
│                                                                 │
│  Kritik-3: Auth sonrası device merge hatası                     │
│  (istatistik kaybı, kullanıcı verisi tutarsızlığı)              │
│                                                                 │
│  Kritik-4: Supabase bağlantı kopmasında UI çökmesi              │
│  (fetchQuestions, realtime subscription)                        │
│                                                                 │
│  Kritik-5: Chart render hataları (40+ D3 bileşeni)              │
│  (eksik/bozuk veride SVG hatası, beyaz ekran)                   │
├─────────────────────────────────────────────────────────────────┤
│ OLASILIK (YÜKSEK)                                               │
│                                                                 │
│  - Her yeni özellik regression riski taşıyor                    │
│  - Monolitik App.tsx değişiklikleri tüm state'i etkiliyor       │
│  - 40+ chart bileşeninin her biri edge-case'te çökebilir        │
│  - Supabase API şeması değişiklikleri sessizce kırılabilir      │
│  - Tailwind 4 / Vite 8 sürüm güncellemeleri CSS kırabilir       │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. Kritik Test Senaryoları

### 15 Spesifik Test Senaryosu

| # | Senaryo Adı | Akış | Tier (Token) | Assertion |
|---|------------|------|-------------|-----------|
| **S1** | Quiz Temel Akış | Ders seç > Ünite seç > Quiz başlat > 5 soru çöz > Sonuç gör | Tier 1 (0) | 5 cevap detail kaydı, correct/incorrect sayımı |
| **S2** | Sınav Modu Zamanlı | Sınav başlat > 10 soru > Süre bitsin > Otomatik tamamlama | Tier 2 (30K) | Süre dolunca onComplete tetiklenir, cevaplar kaydedilir |
| **S3** | Sınavı Erken Bitir | Sınav başlat > 3 soru çöz > "Bitir" butonu > Onay dialog | Tier 1 (0) | QuizStats doğru hesaplanır, dialog gösterilir |
| **S4** | AI Asistan Aç/Kapat | Quiz'deyken AI butonuna tıkla > Panel açılsın > Sor > Cevap gelsin > Kapat | Tier 2 (30K) | AI paneli slide-in, markdown render, sanitize HTML |
| **S5** | Auth — Google Giriş | Auth modal aç > Google ile giriş > Kullanıcı bilgisi görünsün | Tier 2 (30K) | user state null değil, merge tetiklenir |
| **S6** | Auth — Email Kayıt | Auth modal > Register tab > Email/şifre gir > Kayıt ol | Tier 1 (0) | Başarılı mesajı, login tab'a geçiş |
| **S7** | Auth — Hatalı Giriş | Auth modal > Login > Yanlış şifre > Hata mesajı | Tier 1 (0) | Hata mesajı görünür, form temizlenmez |
| **S8** | İstatistik Dashboard Render | Ana sayfa > İstatistikler > 3 tier scroll > Tüm chart'lar yüklensin | Tier 1 (0) | En az 20 chart DOM'da, console'da hata yok |
| **S9** | Simülasyon Sonuç Ekranı | Simülasyon tamamlanınca > Sonuç sayfası > Skor animasyonu > Ders dağılımı | Tier 1 (0) | Doğru/yanlış/boş sayıları, bar chart, zayıf ünite kartları |
| **S10** | Admin — Tekil Soru Ekle | Admin panel > Single tab > Ders/ünite/soru/şıklar doldur > Gönder | Tier 1 (0) | Başarılı mesajı, form alanları temizlenir |
| **S11** | Admin — Toplu JSON Ekle | Admin panel > Bulk tab > JSON yapıştır > Gönder | Tier 1 (0) | written/skipped sayıları gösterilir |
| **S12** | Soru Favorileme/Flag | Quiz'de > Favori butonu > Yıldız dolsun > Flag butonu > Dialog | Tier 1 (0) | is_favorite true, flag_reason kaydedilir |
| **S13** | Tema Değiştirme | Ayarlar > Dark/Light toggle > Tüm sayfa tema değişsin | Tier 1 (0) | document.documentElement.className değişir |
| **S14** | Günlük Plan Görünümü | Ana sayfa > Günlük Plan > Zayıf ünite kartları > CTA butonları | Tier 1 (0) | En az 1 zayıf ünite, "Çalışmaya Başla" butonu |
| **S15** | Hata Durumu — Supabase Bağlantısız | Supabase offline > Sayfa yükle > Hata mesajı > Retry | Tier 2 (30K) | loadError state, "Tekrar Dene" butonu |

---

## 4. Stories YAML Tasarımı

### 4.1 Story Dosyaları Haritası

```
skills/Utilities/Browser/Stories/DUSBANKASI/
  QuizFlow.yaml          — Quiz çözme temel akışı (3 story)
  ExamFlow.yaml          — Sınav modu ve zaman yönetimi (2 story)
  AuthFlow.yaml          — Kimlik doğrulama akışları (3 story)
  AIAssistant.yaml       — AI Asistan panel etkileşimi (2 story)
  StatisticsDashboard.yaml — İstatistik dashboard render (2 story)
  AdminPanel.yaml        — Soru yönetimi (2 story)
  SimulationResult.yaml  — Simülasyon sonuç ekranı (1 story)
  ThemeSettings.yaml     — Tema ve ayarlar (1 story)
  DailyPlan.yaml         — Günlük çalışma planı (1 story)
  SmokeTest.yaml         — Kritik sayfa yüklemeleri (3 story)
```

### 4.2 QuizFlow.yaml

```yaml
name: DUSBANKASI Quiz Flow
url: http://localhost:5173
stories:
  - name: Quiz temel akış - 5 soru çöz ve sonuç gör
    steps:
      - action: wait
        description: Sayfa yüklendi, ders listesi görünür
      - action: click
        target: "İlk ders butonu veya ders seçim kartı"
      - action: wait
        description: Ünite listesi görünür
      - action: click
        target: "İlk ünite butonu"
      - action: wait
        description: Quiz başlangıç görünümü yüklendi
      - action: click
        target: "Quiz Başlat veya benzeri başlangıç butonu"
      - action: wait
        description: İlk soru kartı görünür
      - action: click
        target: "A seçeneği butonu"
      - action: wait
        description: Cevap sonrası açıklama paneli görünür
      - action: click
        target: "Sonraki soru butonu veya ilerleme oku"
    assertions:
      - type: snapshot_contains
        text: "Soru"
      - type: element_visible
        description: "Seçenek butonları (A, B, C, D, E)"
      - type: element_visible
        description: "Açıklama paneli"

  - name: Quiz navigasyon - ileri/geri ok tuşları
    steps:
      - action: wait
        description: Quiz aktif, soru görünür durumda
      - action: click
        target: "A seçeneği butonu"
      - action: click
        target: "İleri oku veya Sonraki butonu"
      - action: wait
        description: İkinci soru yüklendi
      - action: click
        target: "Geri oku veya Önceki butonu"
      - action: wait
        description: İlk soruya dönüldü, cevap korundu
    assertions:
      - type: snapshot_contains
        text: "Soru 1"
      - type: element_visible
        description: "Önceki cevap seçeneği işaretli"

  - name: Quiz tamamlama - tüm sorular bitince sonuç
    steps:
      - action: wait
        description: Quiz aktif
      - action: click
        target: "Tüm soruları cevapla ve sonuca ulaş"
      - action: wait
        description: Quiz tamamlandı mesajı veya sonuç özeti
    assertions:
      - type: snapshot_contains
        text: "Doğru"
      - type: snapshot_contains
        text: "Yanlış"
```

### 4.3 ExamFlow.yaml

```yaml
name: DUSBANKASI Exam Flow
url: http://localhost:5173
stories:
  - name: Sınav modu başlatma ve süre sayacı
    steps:
      - action: wait
        description: Ders listesi görünür
      - action: click
        target: "Sınav modu seçeneği veya toggle"
      - action: wait
        description: Sınav başlangıç ekranı
      - action: click
        target: "Sınavı Başlat butonu"
      - action: wait
        description: İlk soru ve geri sayım sayacı görünür
    assertions:
      - type: element_visible
        description: "Geri sayım sayacı (dakika:saniye formatı)"
      - type: element_visible
        description: "Soru kartı ve seçenekler"

  - name: Sınavı erken bitirme ve onay dialog'u
    steps:
      - action: wait
        description: Sınav modunda, en az 1 soru cevaplanmış
      - action: click
        target: "Sınavı Bitir veya erken bitirme butonu"
      - action: wait
        description: Onay dialog'u görünür
      - action: click
        target: "Onayla veya Evet butonu"
      - action: wait
        description: Sonuç ekranına yönlendirme
    assertions:
      - type: snapshot_contains
        text: "Emin misiniz"
      - type: element_visible
        description: "Onay dialog butonları"
```

### 4.4 AuthFlow.yaml

```yaml
name: DUSBANKASI Auth Flow
url: http://localhost:5173
stories:
  - name: Auth modal açma ve email giriş formu
    steps:
      - action: wait
        description: Ana sayfa yüklendi
      - action: click
        target: "Kullanıcı ikonu veya Giriş Yap butonu"
      - action: wait
        description: Auth modal açıldı
      - action: fill
        target: "Email input alanı"
        value: "test@example.com"
      - action: fill
        target: "Şifre input alanı"
        value: "wrongpassword"
      - action: click
        target: "Giriş Yap butonu"
      - action: wait
        description: Hata mesajı görünür
    assertions:
      - type: snapshot_contains
        text: "Email"
      - type: snapshot_contains
        text: "Şifre"
      - type: element_visible
        description: "Hata mesajı (kırmızı metin)"

  - name: Kayıt formuna geçiş
    steps:
      - action: wait
        description: Auth modal açık
      - action: click
        target: "Kayıt Ol sekmesi veya linki"
      - action: wait
        description: Kayıt formu görünür
    assertions:
      - type: snapshot_contains
        text: "Kayıt"
      - type: element_visible
        description: "Email ve şifre input alanları"

  - name: Auth modal kapatma
    steps:
      - action: wait
        description: Auth modal açık
      - action: click
        target: "Kapat (X) butonu"
      - action: wait
        description: Modal kapandı, ana sayfa görünür
    assertions:
      - type: element_absent
        description: "Auth modal dialog"
```

### 4.5 AIAssistant.yaml

```yaml
name: DUSBANKASI AI Asistan
url: http://localhost:5173
stories:
  - name: AI panel açma ve soru sorma
    steps:
      - action: wait
        description: Quiz modunda bir soru görüntüleniyor
      - action: click
        target: "AI Asistan butonu (Sparkle ikonu)"
      - action: wait
        description: AI panel slide-in animasyonu tamamlandı
      - action: click
        target: "Sor veya AI'a danış butonu"
      - action: wait
        description: AI cevabı yükleniyor veya geldi
    assertions:
      - type: element_visible
        description: "AI panel içeriği"
      - type: element_visible
        description: "AI header (indigo gradyan çizgi)"

  - name: AI panel kapatma
    steps:
      - action: wait
        description: AI panel açık
      - action: click
        target: "AI panel kapat (X) butonu"
      - action: wait
        description: AI panel kapandı
    assertions:
      - type: element_absent
        description: "AI panel içerik alanı"
```

### 4.6 StatisticsDashboard.yaml

```yaml
name: DUSBANKASI İstatistik Dashboard
url: http://localhost:5173
stories:
  - name: Dashboard Tier 1 - Big 4 KPI kartları
    steps:
      - action: wait
        description: Ana sayfa yüklendi
      - action: click
        target: "İstatistikler navigasyon öğesi"
      - action: wait
        description: Dashboard yüklendi, KPI kartları görünür
    assertions:
      - type: element_visible
        description: "En az 4 KPI kartı (Toplam Soru, Doğru, Yanlış, Doğruluk)"
      - type: element_visible
        description: "KPI alert banner"

  - name: Dashboard Tier 3 - Chart kategorileri açılır
    steps:
      - action: wait
        description: Dashboard yüklendi
      - action: click
        target: "İlk CollapsibleSection başlığı"
      - action: wait
        description: Chart kategorisi açıldı, içerik görünür
    assertions:
      - type: element_visible
        description: "Açılan kategoride en az 1 chart"
```

### 4.7 AdminPanel.yaml

```yaml
name: DUSBANKASI Admin Panel
url: http://localhost:5173
stories:
  - name: Tekil soru ekleme formu
    steps:
      - action: wait
        description: Admin panele erişildi
      - action: click
        target: "Single sekmesi"
      - action: fill
        target: "Ders adı input"
        value: "Fizyoloji"
      - action: fill
        target: "Ünite adı input"
        value: "Sinir-Kas Fizyolojisi"
      - action: fill
        target: "Soru metni textarea"
        value: "Aksiyon potansiyeli hangi iyonun hücre içine girişiyle başlar?"
      - action: fill
        target: "A seçeneği input"
        value: "Kalsiyum"
      - action: fill
        target: "B seçeneği input"
        value: "Sodyum"
      - action: fill
        target: "C seçeneği input"
        value: "Potasyum"
      - action: fill
        target: "D seçeneği input"
        value: "Klor"
      - action: fill
        target: "E seçeneği input"
        value: "Magnezyum"
      - action: click
        target: "Doğru cevap seçimi (B)"
      - action: fill
        target: "Açıklama textarea"
        value: "Depolarizasyon sodyum girişiyle başlar."
      - action: click
        target: "Soruyu Ekle butonu"
      - action: wait
        description: Başarılı mesajı görünür
    assertions:
      - type: snapshot_contains
        text: "Başarılı"
      - type: snapshot_contains
        text: "eklendi"

  - name: Toplu JSON soru ekleme
    steps:
      - action: wait
        description: Admin panel açık
      - action: click
        target: "Bulk sekmesi"
      - action: wait
        description: JSON textarea görünür
      - action: fill
        target: "JSON veri textarea"
        value: '[{"lesson":"Test","unit":"Test Ünite","question":"Test sorusu?","options":{"A":"a","B":"b","C":"c","D":"d","E":"e"},"correctAnswer":"A","explanation":"Test açıklama"}]'
      - action: click
        target: "Toplu Ekle butonu"
      - action: wait
        description: Sonuç raporu görünür
    assertions:
      - type: snapshot_contains
        text: "yazıldı"
```

### 4.8 SmokeTest.yaml

```yaml
name: DUSBANKASI Smoke Test
url: http://localhost:5173
stories:
  - name: Ana sayfa yüklenme kontrolü
    steps:
      - action: wait
        description: Sayfa tamamen yüklendi
    assertions:
      - type: snapshot_contains
        text: "DUS"
      - type: element_visible
        description: "Logo"
      - type: element_visible
        description: "Ders listesi veya ana navigasyon"

  - name: Sayfa yüklemede console hatası kontrolü
    steps:
      - action: wait
        description: Sayfa yüklendi, tüm ağ istekleri tamamlandı
    assertions:
      - type: element_visible
        description: "Ders seçim grid veya liste"
      - type: element_absent
        description: "Beyaz ekran veya hata mesajı"

  - name: Tüm navigasyon öğeleri tıklanabilir
    steps:
      - action: wait
        description: Ana sayfa yüklendi
      - action: click
        target: "İstatistikler navigasyon öğesi"
      - action: wait
        description: Dashboard yüklendi
      - action: click
        target: "Ders seçimine dönüş navigasyon öğesi"
      - action: wait
        description: Ders listesi tekrar görünür
    assertions:
      - type: element_visible
        description: "Ders kartları veya liste öğeleri"
```

---

## 5. Recipes Tasarımı

### 5.1 Recipe Dosyaları

```
skills/Utilities/Browser/Recipes/DUSBANKASI/
  QuizRegression.md         — Quiz akış regression testi (playwright-cli)
  DashboardHealthCheck.md   — Dashboard+chart sağlık kontrolü (BrowserAgent)
  SmokeDeploy.md            — Deploy sonrası duman testi (playwright-cli)
  VisualDiff.md             — Before/after screenshot karşılaştırma (playwright-cli)
```

### 5.2 QuizRegression.md

```markdown
---
name: DUSBANKASI Quiz Regression
description: Quiz akışının uçtan uca regression testi — her deploy sonrası çalıştırılır
tool: playwright-cli
defaults:
  DEV_SERVER: http://localhost:5173
  SESSION: dus-regression
  SCREENSHOT_DIR: /tmp/dusbankasi-regression
---

# DUSBANKASI Quiz Regression Test

1. `playwright-cli -s={SESSION} open {DEV_SERVER} --persistent`
2. `playwright-cli -s={SESSION} snapshot` → ders listesini al, ilk ders ref'ini kaydet
3. `playwright-cli -s={SESSION} click <ilk_ders_ref>`
4. `sleep 2`
5. `playwright-cli -s={SESSION} snapshot` → ünite listesini al, ilk ünite ref'ini kaydet
6. `playwright-cli -s={SESSION} click <ilk_ünite_ref>`
7. `sleep 3`
8. `playwright-cli -s={SESSION} screenshot --filename={SCREENSHOT_DIR}/quiz-start.png`
9. `playwright-cli -s={SESSION} snapshot` → A seçeneği ref'ini bul
10. `playwright-cli -s={SESSION} click <a_secenegi_ref>`
11. `sleep 1`
12. `playwright-cli -s={SESSION} screenshot --filename={SCREENSHOT_DIR}/quiz-answered.png`
13. `playwright-cli -s={SESSION} snapshot` → İleri ok ref'ini bul
14. `playwright-cli -s={SESSION} click <ileri_ok_ref>`
15. `sleep 1`
16. `playwright-cli -s={SESSION} screenshot --filename={SCREENSHOT_DIR}/quiz-next.png`
17. `playwright-cli -s={SESSION} close`

{PROMPT}
```

### 5.3 DashboardHealthCheck.md

```markdown
---
name: DUSBANKASI Dashboard Health Check
description: İstatistik dashboard'un tam sağlık kontrolü — chart render, console hatası, KPI doğrulama
tool: BrowserAgent
defaults:
  DEV_SERVER: http://localhost:5173
---

# DUSBANKASI Dashboard Health Check

Navigate to {DEV_SERVER}.
Click on the statistics/dashboard navigation item.
Wait for the dashboard to fully load (all charts rendered).

Take a full-page screenshot.
Check the browser console for JavaScript errors (especially D3/SVG errors).
Verify that at least 4 KPI stat cards are visible (Toplam Soru, Doğru, Yanlış, Doğruluk).
Verify that the KPI alert banner is visible.
Scroll down and check that at least 5 chart components are rendered.
Click on one CollapsibleSection header and verify it expands.

Report: screenshot path, total charts rendered, console errors (if any), KPI card count, overall health status (PASS/FAIL).

{PROMPT}
```

### 5.4 SmokeDeploy.md

```markdown
---
name: DUSBANKASI Smoke Deploy
description: Vercel deploy sonrası hızlı duman testi
tool: playwright-cli
defaults:
  PROD_URL: https://dusbankasi.vercel.app
  SESSION: dus-smoke
  SCREENSHOT_DIR: /tmp/dusbankasi-smoke
---

# DUSBANKASI Deploy Smoke Test

1. `curl -sf {PROD_URL} > /dev/null && echo "UP" || echo "DOWN"`
2. `playwright-cli -s={SESSION} open {PROD_URL} --persistent`
3. `sleep 3`
4. `playwright-cli -s={SESSION} screenshot --filename={SCREENSHOT_DIR}/homepage.png`
5. `playwright-cli -s={SESSION} snapshot` → "DUS" metni var mı kontrol et
6. `playwright-cli -s={SESSION} close`

{PROMPT}
```

### 5.5 VisualDiff.md

```markdown
---
name: DUSBANKASI Visual Diff
description: İki ortam (dev/prod) arasında görsel karşılaştırma
tool: playwright-cli
defaults:
  URL_A: http://localhost:5173
  URL_B: https://dusbankasi.vercel.app
  DIFF_DIR: /tmp/dusbankasi-diff
---

# DUSBANKASI Visual Diff

1. `playwright-cli -s=diff-a open {URL_A} --persistent`
2. `sleep 3`
3. `playwright-cli -s=diff-a screenshot --filename={DIFF_DIR}/dev.png`
4. `playwright-cli -s=diff-a close`
5. `playwright-cli -s=diff-b open {URL_B} --persistent`
6. `sleep 3`
7. `playwright-cli -s=diff-b screenshot --filename={DIFF_DIR}/prod.png`
8. `playwright-cli -s=diff-b close`

{PROMPT}
```

---

## 6. CI/CD Entegrasyon Planı

### 6.1 Pipeline Aşamaları

```
┌──────────────────────────────────────────────────────────────────────┐
│                        CI/CD PIPELINE                                │
│                                                                      │
│  [PUSH] → [Lint] → [TypeCheck] → [Unit Test] → [BUILD] → [DEPLOY]  │
│                                           │                         │
│                                           ▼                         │
│                              ┌──────────────────────┐               │
│                              │  BROWSER TEST SUITE   │               │
│                              │                       │               │
│                              │  Tier 1 (0 token):    │               │
│                              │  ├─ SmokeTest (3 st)  │               │
│                              │  ├─ QuizFlow (3 st)   │               │
│                              │  └─ ThemeSettings     │               │
│                              │                       │               │
│                              │  Tier 2 (30K token):  │               │
│                              │  ├─ ExamFlow (2 st)   │               │
│                              │  └─ DashboardCheck    │               │
│                              │                       │               │
│                              │  [ALL PASS?]          │               │
│                              │    ├─ YES → MERGE     │               │
│                              │    └─ NO  → BLOCK     │               │
│                              └──────────────────────┘               │
└──────────────────────────────────────────────────────────────────────┘
```

### 6.2 Çalışma Sıklığı ve Komutlar

| Tetikleyici | Hangi Testler | Komut | Süre (yaklaşık) |
|------------|--------------|-------|-----------------|
| **Her push (pre-commit)** | SmokeTest (3 story) | `bun test:e2e:smoke` | ~15s |
| **PR açıldığında** | Tier 1 tüm story'ler (10 story) | `bun test:e2e:tier1` | ~60s |
| **Main branch merge** | Tier 1 + Tier 2 tüm story'ler (15+ story) | `bun test:e2e:full` | ~3dk |
| **Vercel deploy sonrası** | SmokeDeploy recipe | `bun test:e2e:deploy` | ~10s |
| **Haftalık (Pazartesi 09:00)** | Full suite + DashboardHealthCheck | `bun test:e2e:weekly` | ~5dk |
| **Manuel (geliştirici)** | VisualDiff recipe | `bun test:e2e:visual` | ~15s |

### 6.3 package.json Script'leri

```json
{
  "scripts": {
    "test:e2e:smoke": "playwright-cli -s=dus-smoke open http://localhost:5173 --persistent && playwright-cli -s=dus-smoke screenshot --filename=/tmp/smoke.png && playwright-cli -s=dus-smoke close",
    "test:e2e:tier1": "bun run scripts/run-stories.ts --tier 1",
    "test:e2e:full": "bun run scripts/run-stories.ts --tier all",
    "test:e2e:deploy": "bun run scripts/smoke-deploy.ts",
    "test:e2e:weekly": "bun run scripts/weekly-health.ts",
    "test:e2e:visual": "bun run scripts/visual-diff.ts"
  }
}
```

### 6.4 GitHub Actions Workflow (öneri)

```yaml
name: E2E Browser Tests
on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  browser-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run dev &
      - run: sleep 5
      - run: bun test:e2e:tier1
      - name: Upload screenshots
        if: failure()
        uses: actions/upload-artifact@v4
        with:
          name: e2e-screenshots
          path: /tmp/dusbankasi-*/
```

---

## 7. Uygulama Adımları

### Adım 1: Gereksinim Kurulumu

```bash
# Playwright CLI kurulumu (global)
bun install -g @playwright/cli@latest
bun install -g playwright

# Playwright tarayıcılarını indir
bunx playwright install chromium

# Kurulum doğrulama
playwright-cli --version
bunx playwright --version
```

### Adım 2: Proje Dizin Yapısını Oluştur

```bash
# DUSBANKASI proje kökünde
mkdir -p e2e/stories
mkdir -p e2e/recipes
mkdir -p e2e/scripts
mkdir -p e2e/screenshots
```

### Adım 3: Story Dosyalarını Yerleştir

Yukarıda tasarlanan 8 YAML story dosyasını `e2e/stories/` dizinine kopyala:
- `QuizFlow.yaml`
- `ExamFlow.yaml`
- `AuthFlow.yaml`
- `AIAssistant.yaml`
- `StatisticsDashboard.yaml`
- `AdminPanel.yaml`
- `SmokeTest.yaml`
- `ThemeSettings.yaml`

### Adım 4: Recipe Dosyalarını Yerleştir

4 recipe şablonunu `e2e/recipes/` dizinine kopyala:
- `QuizRegression.md`
- `DashboardHealthCheck.md`
- `SmokeDeploy.md`
- `VisualDiff.md`

### Adım 5: İlk Manuel Test — Dev Server ile

```bash
# Terminal 1: Dev server başlat
cd C:/Users/FURKAN/Desktop/Projeler/DUSBANKASI
bun run dev

# Terminal 2: İlk smoke test
playwright-cli -s=dus-first open http://localhost:5173 --persistent
playwright-cli -s=dus-first snapshot
playwright-cli -s=dus-first screenshot --filename=e2e/screenshots/first-run.png
playwright-cli -s=dus-first close
```

### Adım 6: İlk Story Çalıştırma

```bash
# Smoke test story'lerini çalıştır
# (ReviewStories workflow'u manuel tetikleme veya script ile)
bun run e2e/scripts/run-stories.ts --file SmokeTest.yaml
```

### Adım 7: CI/CD Entegrasyonu

```bash
# GitHub Actions workflow dosyasını oluştur
mkdir -p .github/workflows
# e2e-tests.yml dosyasını yukarıdaki gibi oluştur
```

### Adım 8: Pre-commit Hook (opsiyonel)

```bash
# .husky/pre-commit
bun test:e2e:smoke
```

---

## 8. Beklenen Etki

### 8.1 Yakalanacak Hata Kategorileri

| Hata Kategorisi | Örnek | Tier 1 ile Yakalama | Tier 2 ile Yakalama |
|----------------|-------|-------------------|-------------------|
| **Render çökmesi** | D3 chart boş veride SVG hatası verip beyaz ekran | Anında (snapshot) | Konsol hatası + screenshot |
| **State bozulması** | Quiz'de geri gidince cevap kaybolması | Anında (multi-step) | Detaylı assertion |
| **Regresyon** | Yeni özellik eski butonu kırar | Anında (smoke test) | Tam flow testi |
| **Auth hatası** | Supabase session expire sonrası UI çökmesi | Anında (form testi) | Gerçek auth flow |
| **Zamanlama hatası** | Sınav süresi dolunca cevaplar kaydedilmez | — | BrowserAgent ile |
| **CSS kırılması** | Tailwind güncellemesi sonrası buton görünmez | Anında (snapshot) | Görsel diff |
| **API bağlantı kopması** | Supabase offline, UI donar | Anında (hata mesajı) | Network request analizi |
| **Performans regresyonu** | Chart render 5 saniyeye çıkar | — | BrowserAgent timing |

### 8.2 Zaman Kazanımı

| Aktivite | Manuel (dakika) | Otomatik (dakika) | Kazanım |
|----------|----------------|-------------------|---------|
| Her PR sonrası regression testi | 15-20 dk | 1 dk (otomatik) | **%95** |
| Deploy sonrası smoke test | 10 dk | 0.2 dk (otomatik) | **%98** |
| Haftalık tam UI denetimi | 45-60 dk | 5 dk (otomatik) | **%90** |
| Görsel regresyon tespiti | 20 dk | 0.3 dk (otomatik) | **%99** |
| **Aylık toplam geliştirici zamanı** | **~12 saat** | **~1 saat** | **%92 tasarruf** |

### 8.3 Token Bütçesi (Aylık Tahmin)

| Aktivite | Sıklık | Token/Çalıştırma | Aylık Token |
|----------|--------|-----------------|-------------|
| Tier 1 story (10 adet) | 20 PR/ay | 0 token | 0 |
| Tier 2 story (5 adet) | 20 PR/ay | ~30K x 5 | ~3M |
| DashboardHealthCheck | 4/ay | ~30K | ~120K |
| SmokeDeploy | 8 deploy/ay | 0 token | 0 |
| **TOPLAM** | | | **~3.1M token/ay** |

Tier 1 testleri 0 (sıfır) token ile çalışır. Tier 2 testleri yalnızca AI kararı gerektiren akışlarda devreye girer. Aylık token maliyeti yaklaşık 3M token (~$9-10) civarındadır.

---

## Sonuç ve Öneriler

### Kısa Vadeli (1. Hafta)
1. `playwright-cli` kurulumu ve ilk smoke test
2. 3 adet Tier 1 story dosyasının yazılıp çalıştırılması (SmokeTest, QuizFlow, ThemeSettings)
3. Manuel çalıştırma akışının belgelenmesi

### Orta Vadeli (2-4. Hafta)
1. Tüm 8 story dosyasının tamamlanması
2. 4 recipe şablonunun hazırlanması
3. GitHub Actions CI/CD entegrasyonu
4. Pre-commit hook kurulumu

### Uzun Vadeli (2-3. Ay)
1. Tier 2 testlerin (BrowserAgent ile) eklenmesi
2. Görsel regresyon testlerinin haftalık periyoda alınması
3. Dashboard sağlık kontrolünün otomasyonu
4. Test coverage raporlaması

### Kritik Uyarı
- **Supabase auth akışı Tier 2 testlerde gerçek kimlik bilgisi KULLANILMAMALIDIR.** Test için özel bir test kullanıcısı oluşturulmalı veya auth mock'lanmalıdır.
- **Tier 1 testler dev server bağımlıdır** — CI'da `bun run dev &` ile arka planda başlatılmalıdır.
- **Screenshot artifact'ları** CI'da saklanmalı, başarısız testlerde hata ayıklama için kritiktir.

---

**Rapor Sonu.** Entegrasyon planı tüm katmanlarıyla hazırdır. Uygulama adımları takip edilerek sıfır browser testinden tam kapsamlı CI/CD entegre browser test altyapısına geçiş yapılabilir.
