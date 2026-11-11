import { expect, test } from '@playwright/test';
import dotenv from 'dotenv';
import { emptyTriajState } from '../src/modules/triaj/domain/defaults';
import { planUnit, rescheduleTask } from '../src/modules/triaj/domain/state';
import type { TriajState } from '../src/modules/triaj/types';

dotenv.config({ path: '.env.local', quiet: true });

const today = '2026-11-11';
const userId = '0cb42891-6e8e-45cc-b3fb-191db0fcb914';
const project = new URL(process.env.VITE_SUPABASE_URL ?? 'https://localhost').hostname.split('.')[0];
const lesson = 'Anatomi';
const units = ['1. Ünite - Kemikler', '2. Ünite - Eklemler', '3. Ünite - Kaslar'];
const questions = Array.from({ length: 33 }, (_, i) => ({
  id: `test-triaj-${i}`, lesson, unit: i < 30 ? units[0] : units[1],
  question: `TRİAJ test sorusu ${i}`, option_a: 'Seçenek A', option_b: 'Seçenek B',
  option_c: 'Seçenek C', option_d: 'Seçenek D', option_e: 'Seçenek E', correct_answer: 'A',
  explanation: 'Test açıklaması', created_at: '2026-08-19T00:00:00Z', updated_at: '2026-08-19T00:00:00Z',
  quality_flag: null, is_favorite: false,
}));

function seededPlan() {
  const planned = units.reduce((state, unit) => planUnit(state, lesson, unit, today), emptyTriajState());
  return rescheduleTask(planned, planned.tasks[2].id, '2026-11-12');
}

test('TRİAJ modülü tüm bileşenleri, sekmeleri ve modalları UI seviyesinde hatasız render edilir', async ({ page, context }) => {
  test.setTimeout(90_000);
  await page.clock.setFixedTime(new Date('2026-11-11T12:00:00Z'));
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', error => {
    pageErrors.push(error.message);
  });

  await context.addInitScript(({ project, userId }) => {
    const expiry = Math.floor(Date.now() / 1000) + 86_400;
    const encode = (value: object) => btoa(JSON.stringify(value)).replaceAll('=', '');
    localStorage.setItem(`sb-${project}-auth-token`, JSON.stringify({
      access_token: `${encode({ alg: 'HS256' })}.${encode({ sub: userId, exp: expiry, role: 'authenticated' })}.c2ln`,
      refresh_token: 'playwright-fixture', expires_at: expiry, expires_in: 86_400,
      token_type: 'bearer', user: { id: userId, aud: 'authenticated', email: 'triaj@example.test', app_metadata: {}, user_metadata: {} },
    }));
    localStorage.setItem(`dus_merge_done_${userId}`, '1');
  }, { project, userId });

  const state = seededPlan();
  let revision = 1;

  await context.route('**/auth/v1/**', route => route.fulfill({ json: { id: userId, aud: 'authenticated' } }));
  await context.route('**/rest/v1/**', async route => {
    const req = route.request();
    const url = new URL(req.url());
    const resource = url.pathname.split('/').at(-1);
    const method = req.method();

    if (resource === 'questions') {
      return route.fulfill({ json: questions });
    }
    if (resource === 'get_triaj_tasks' || resource === 'prepare_triaj_question_sets') {
      return route.fulfill({ json: state.tasks.filter(task => task.status === 'open' && task.dueDate <= today) });
    }
    if (resource === 'triaj_state') {
      if (method === 'GET') {
        return route.fulfill({ json: [{ payload: state, schema_version: 1, revision }] });
      }
      return route.fulfill({ json: [{ revision: ++revision }] });
    }
    return route.fulfill({ json: [] });
  });

  await context.route('**/api/triaj/ticktick/focus?**', route => {
    return route.fulfill({
      json: {
        connected: true,
        lastSyncedAt: new Date().toISOString(),
        todayDate: today,
        activeDate: today,
        activeDayStats: {
          date: today,
          dayNameTR: 'Çarşamba',
          pomoCount: 3,
          pomoMinutes: 75,
          stopwatchCount: 2,
          stopwatchMinutes: 120,
          totalMinutes: 195,
          totalHours: 3.25,
          segment: '3-7 Saat',
          notes: ['Anatomi Tekrarı', 'Kemikler T+0'],
          sessionsCount: 5,
        },
        sevenDayStart: '2026-11-05',
        sevenDayTotalMinutes: 1420,
        sevenDayAvgHours: 3.38,
        periodStart: '2026-08-14',
        periodEnd: today,
        totalTrackedDays: 78,
        totalAllTimeHours: 783.4,
        segmentDistribution: {
          '0-3 Saat': 15,
          '3-7 Saat': 42,
          '8-10 Saat': 15,
          '10+ Saat': 6,
        },
        dailyLogs: [
          {
            date: today,
            dayNameTR: 'Çarşamba',
            pomoCount: 3,
            pomoMinutes: 75,
            stopwatchCount: 2,
            stopwatchMinutes: 120,
            totalMinutes: 195,
            totalHours: 3.25,
            segment: '3-7 Saat',
            notes: ['Anatomi Tekrarı'],
            sessionsCount: 5,
          },
          {
            date: '2026-10-31',
            dayNameTR: 'Cumartesi',
            pomoCount: 4,
            pomoMinutes: 120,
            stopwatchCount: 3,
            stopwatchMinutes: 180,
            totalMinutes: 300,
            totalHours: 5.0,
            segment: '3-7 Saat',
            notes: ['T+0 Seansı'],
            sessionsCount: 7,
          },
          {
            date: '2026-10-29',
            dayNameTR: 'Perşembe',
            pomoCount: 8,
            pomoMinutes: 240,
            stopwatchCount: 4,
            stopwatchMinutes: 360,
            totalMinutes: 600,
            totalHours: 10.0,
            segment: '10+ Saat',
            notes: ['Zirve Çalışma'],
            sessionsCount: 12,
          },
        ],
      },
    });
  });
  await context.route('**/api/triaj/ai/status', route => {
    return route.fulfill({ json: { configured: false } });
  });

  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  // 1. Ana sayfada Bugünün Konusu kartını kontrol et
  const todayRegion = page.getByRole('region', { name: 'Bugünün Konusu' });
  await expect(todayRegion).toBeVisible({ timeout: 15000 });
  await page.screenshot({ path: 'test-results/01-today-topics.png' });

  // 2. TRİAJ modülüne giriş yap
  await page.getByRole('button', { name: /TRİAJ Günün planı ve tekrar takvimi/i }).click();
  const triaj = page.getByRole('region', { name: 'TRİAJ', exact: true });
  await expect(triaj).toBeVisible();
  const tabs = triaj.getByRole('navigation', { name: 'TRİAJ sekmeleri' });
  await expect(tabs).toBeVisible();

  // 3. Günlük Plan Sekmesi
  await expect(triaj.getByText('Günlük 4 Bilişsel Blok Akışı')).toBeVisible();
  await page.screenshot({ path: 'test-results/02-tab-planner.png' });

  // 4. Dersler ve Üniteler Sekmesi
  await tabs.getByRole('button', { name: 'Dersler ve Üniteler' }).click();
  await expect(triaj.getByRole('heading', { name: /14 Ders Bloğu/i })).toBeVisible();
  await page.screenshot({ path: 'test-results/03-tab-subjects-cards.png' });

  // 4a. Tekrar Planı görünümü
  await triaj.getByRole('button', { name: /Tekrar_Plani/i }).click();
  await expect(triaj.getByText('UNITS.md · ExcelMaster Sekme 2')).toBeVisible();
  await page.screenshot({ path: 'test-results/03b-tab-subjects-tekrar.png' });

  // 4b. Konu Takip Matrisi görünümü
  await triaj.getByRole('button', { name: /Konu_Takip_Matrisi/i }).click();
  await expect(triaj.getByText('Gecikme Isı Haritası:')).toBeVisible();
  await page.screenshot({ path: 'test-results/03c-tab-subjects-matrix.png' });

  // 5. Takvim Sekmesi
  await tabs.getByRole('button', { name: 'Takvim' }).click();
  await expect(triaj.getByRole('heading', { name: /Tekrar Takvimi/i })).toBeVisible();
  await page.screenshot({ path: 'test-results/04-tab-calendar.png' });

  // 5a. Tekrar kuyruğu alt sekmesi
  await triaj.getByRole('button', { name: 'Tekrar kuyruğu' }).click();
  await page.screenshot({ path: 'test-results/04b-tab-calendar-queue.png' });

  // 5b. Denetim geçmişi alt sekmesi
  await triaj.getByRole('button', { name: 'Denetim geçmişi' }).click();
  await page.screenshot({ path: 'test-results/04c-tab-calendar-history.png' });

  // 6. Deneme ve Hata Analizi Sekmesi
  await tabs.getByRole('button', { name: 'Deneme ve Hata Analizi' }).click();
  await expect(triaj.getByRole('heading', { name: /16 Branş Deneme Analizi/i })).toBeVisible();
  await page.screenshot({ path: 'test-results/05-tab-analytics-mock.png' });

  // 6a. SWSPS Hata Analizi alt sekmesi
  await triaj.getByRole('button', { name: /SWSPS Hata Motoru/i }).click();
  await page.screenshot({ path: 'test-results/05b-tab-analytics-swsps.png' });

  // 6b. Soru Hızı ve Kronometre alt sekmesi
  await triaj.getByRole('button', { name: /Soru Günlüğü/i }).click();
  await page.screenshot({ path: 'test-results/05c-tab-analytics-speed.png' });

  // 6c. Anki FSRS Takip alt sekmesi
  await triaj.getByRole('button', { name: /Anki_FSRS_Takip/i }).click();
  await page.screenshot({ path: 'test-results/05d-tab-analytics-anki.png' });

  // 7. Kova Raporu Sekmesi
  await tabs.getByRole('button', { name: 'Kova Raporu' }).click();
  await expect(triaj.getByRole('heading', { name: /Bilişsel Kova Triyajı/i })).toBeVisible();
  await page.screenshot({ path: 'test-results/06-tab-report.png' });

  // 8. Modalların kontrolü
  // 8a. Parametreler Modalı
  await triaj.getByRole('button', { name: 'Parametreler', exact: true }).click();
  const paramsModal = page.getByRole('dialog', { name: 'Parametreler' });
  await expect(paramsModal).toBeVisible();
  await page.screenshot({ path: 'test-results/07-modal-parameters.png' });
  await paramsModal.getByRole('button', { name: 'Kapat' }).click();

  // 8b. Giriş Rehberi Modalı
  await triaj.getByRole('button', { name: 'Giriş Rehberi', exact: true }).click();
  const guideModal = page.getByRole('dialog', { name: 'Giriş Rehberi' });
  await expect(guideModal).toBeVisible();
  await page.screenshot({ path: 'test-results/08-modal-guide.png' });
  await guideModal.getByRole('button', { name: 'Kapat' }).click();

  // 8c. Yapay Zekâ Modalı
  await triaj.getByRole('button', { name: 'Yapay Zekâ', exact: true }).click();
  const aiModal = page.getByRole('dialog', { name: /DeepSeek|Yapay Zekâ/i });
  await expect(aiModal).toBeVisible();
  await page.screenshot({ path: 'test-results/09-modal-ai.png' });
  await aiModal.getByRole('button', { name: 'Kapat' }).click();

  // 8d. Veri ve Yedek Modalı
  await triaj.getByRole('button', { name: 'Veri ve Yedek', exact: true }).click();
  const backupModal = page.getByRole('dialog', { name: 'Veri ve yedek' });
  await expect(backupModal).toBeVisible();
  await page.screenshot({ path: 'test-results/10-modal-backup.png' });
  await backupModal.getByRole('button', { name: 'Kapat' }).click();

  console.log('CONSOLE ERRORS COUNT:', consoleErrors.length);
  console.log('PAGE ERRORS COUNT:', pageErrors.length);
  if (consoleErrors.length > 0) {
    console.log('CONSOLE ERRORS:', consoleErrors);
  }
  if (pageErrors.length > 0) {
    console.log('PAGE ERRORS:', pageErrors);
  }

  expect(pageErrors).toEqual([]);
});
