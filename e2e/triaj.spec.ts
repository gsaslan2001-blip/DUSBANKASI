import { expect, test, type BrowserContext } from '@playwright/test';
import dotenv from 'dotenv';
import { emptyTriajState } from '../src/modules/triaj/domain/defaults';
import { planUnit, rescheduleTask } from '../src/modules/triaj/domain/state';
import type { TriajState } from '../src/modules/triaj/types';
import type { CompactSessionInfo } from '../src/types/app';

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

function backend(initial: TriajState) {
  const db = {
    state: initial, revision: 1, session: null as CompactSessionInfo | null,
    contentRequests: [] as string[][], failedDelivery: false, rejectNextDelivery: false,
  };
  async function install(context: BrowserContext) {
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
    await context.route('**/auth/v1/**', route => route.fulfill({ json: { id: userId, aud: 'authenticated' } }));
    await context.route('**/rest/v1/**', async route => {
      const req = route.request();
      const url = new URL(req.url());
      const resource = url.pathname.split('/').at(-1);
      const method = req.method();
      if (resource === 'questions') {
        const idFilter = url.searchParams.get('id');
        if (idFilter?.startsWith('in.(')) {
          const ids = idFilter.slice(4, -1).split(',');
          db.contentRequests.push(ids);
          return route.fulfill({ json: questions.filter(question => ids.includes(question.id)).reverse() });
        }
        return route.fulfill({ json: questions });
      }
      if (resource === 'get_triaj_tasks' || resource === 'prepare_triaj_question_sets') {
        const { p_today: date, p_preparations: preparations } = req.postDataJSON() as {
          p_today: string; p_preparations?: Record<string, string[]>;
        };
        let changed = false;
        db.state.tasks = db.state.tasks.map(task => {
          const ids = preparations?.[task.id];
          if (!ids || task.setId || task.status !== 'open' || task.dueDate > date || task.availableCount === ids.length) return task;
          changed = true;
          return ids.length === task.questionCount
            ? { ...task, availableCount: ids.length, questionIds: ids, setId: `set-${db.revision}` }
            : { ...task, availableCount: ids.length };
        });
        if (changed) db.revision++;
        return route.fulfill({ json: db.state.tasks.filter(task =>
          (task.status === 'open' && task.dueDate <= date) || task.completedDate === date) });
      }
      if (resource === 'triaj_state') {
        if (method === 'GET') return route.fulfill({ json: [{ payload: db.state, schema_version: 1, revision: db.revision }] });
        const change = req.postDataJSON() as { payload: TriajState; revision: number };
        if (db.rejectNextDelivery && change.payload.triageHistory.length > db.state.triageHistory.length) {
          db.rejectNextDelivery = false;
          db.failedDelivery = true;
          return route.fulfill({ status: 503, json: { message: 'Test ağ hatası' } });
        }
        if (url.searchParams.get('revision') !== `eq.${db.revision}`) return route.fulfill({ json: [] });
        db.state = change.payload;
        db.revision = change.revision;
        return route.fulfill({ json: [{ revision: db.revision }] });
      }
      if (resource === 'save_active_session') {
        db.session = req.postDataJSON().p_session_data;
        return route.fulfill({ json: null });
      }
      if (resource === 'active_sessions') {
        if (method === 'DELETE') db.session = null;
        return route.fulfill({ json: db.session ? [{ session_data: db.session }] : [] });
      }
      return route.fulfill({ json: [] });
    });
  }
  return { db, install };
}

test('takvimden yeniden planlama kayıtlı alt başlıkları korur', async ({ page, context }) => {
  const initial = seededPlan();
  initial.topics[0].subtopics = ['Korunacak alt başlık'];
  const { db, install } = backend(initial);
  await install(context);
  await page.clock.setFixedTime(new Date('2026-11-11T12:00:00Z'));
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: /TRİAJ Günün planı ve tekrar takvimi/ }).click();
  const triaj = page.getByRole('region', { name: 'TRİAJ', exact: true });
  await triaj.getByRole('navigation', { name: 'TRİAJ sekmeleri' }).getByRole('button', { name: 'Takvim', exact: true }).click();
  await triaj.getByRole('button', { name: 'Bu Güne İlk Tekrar Planla' }).click();
  await triaj.getByLabel('Ders seçin').selectOption('B01');
  await triaj.getByLabel('Kanonik ünite seçin').selectOption(units[0]);
  await triaj.getByLabel('T+0 Başlangıç Tarihi').fill('2026-11-12');
  await triaj.getByRole('button', { name: 'Takvime Ekle (T+0 Planla)' }).click();
  await expect.poll(() => db.state.tasks.find(task => task.unit === units[0])?.dueDate).toBe('2026-11-12');
  expect(db.state.topics.find(topic => topic.title === units[0])?.subtopics).toEqual(['Korunacak alt başlık']);
});

test('Bugünün Konusu aynı setle iki cihazda devam eder, hatalı teslimi yeniden dener ve takvimi eşitler', async ({ browser }) => {
  test.setTimeout(90_000);
  const { db, install } = backend(seededPlan());
  const device1 = await browser.newContext();
  const device2 = await browser.newContext();
  try {
    await Promise.all([install(device1), install(device2)]);
    const [first, second] = await Promise.all([device1.newPage(), device2.newPage()]);
    await Promise.all([first.clock.setFixedTime(new Date('2026-11-11T12:00:00Z')), second.clock.setFixedTime(new Date('2026-11-11T12:00:00Z'))]);
    const initialNetwork: string[] = [];
    first.on('request', request => initialNetwork.push(request.url()));
    await Promise.all([first.goto('/', { waitUntil: 'domcontentloaded' }), second.goto('/', { waitUntil: 'domcontentloaded' })]);
    const topics = first.getByRole('region', { name: 'Bugünün Konusu' });
    await expect(topics.getByRole('button', { name: 'İlk tekrarı aç' }).first()).toBeVisible({ timeout: 15_000 });

    await expect(topics.getByText(units[2], { exact: false })).toHaveCount(0);
    expect(initialNetwork.some(url => /TriajModule|ticktick|deepseek/.test(url))).toBe(false);
    expect(initialNetwork.some(url => /\/rest\/v1\/triaj_state/.test(url))).toBe(false);
    expect(db.contentRequests).toEqual([]);
    await expect(first.getByText('Günün Denemesi', { exact: true })).toBeVisible();
    await topics.getByRole('button', { name: 'İlk tekrarı aç' }).first().click();
    const modal = first.getByRole('dialog', { name: 'TRİAJ test görevi' });
    await modal.getByRole('checkbox').check();
    await modal.getByLabel('Banka soru sayısı (20–120)').fill('25');
    await modal.getByRole('button', { name: 'Soru Bankasında Başlat' }).click();
    await expect(first.getByRole('button', { name: /A Seçenek A/ })).toBeVisible();
    const persistedSet = db.state.tasks[0].questionIds;
    expect(persistedSet).toHaveLength(25);
    await first.getByRole('button', { name: /A Seçenek A/ }).click();
    await first.getByRole('button', { name: 'SONRAKİ' }).click();
    await expect.poll(() => db.session?.answers.length).toBe(1);
    expect(db.session?.questionIds).toEqual(persistedSet);
    await first.getByRole('button', { name: 'Oturumdan Çık' }).click();
    await expect(topics.getByRole('button', { name: 'Devam et' })).toBeVisible();
    expect(db.state.tasks[0].status).toBe('open');

    await second.reload({ waitUntil: 'domcontentloaded' });
    const secondTopics = second.getByRole('region', { name: 'Bugünün Konusu' });
    await secondTopics.getByRole('button', { name: 'Devam et' }).click();
    await expect(second.getByText(`TRİAJ test sorusu ${persistedSet?.[1].split('-').at(-1)}`, { exact: true })).toBeVisible();
    expect(db.contentRequests.at(-1)).toEqual(persistedSet);
    db.rejectNextDelivery = true;
    for (let index = 1; index < 25; index++) {
      await second.getByRole('button', { name: 'A Seçenek A', disabled: false, exact: true }).last().click();
      await second.getByRole('button', { name: index < 24 ? 'SONRAKİ' : 'BİTİR' }).last().click();
    }
    await expect(second.getByText(/TRİAJ sonucu kaydedilemedi/)).toBeVisible();
    expect(db.failedDelivery).toBe(true);
    expect(db.state.tasks[0].status).toBe('open');
    await second.getByRole('button', { name: 'BİTİR' }).click();
    await expect.poll(() => db.state.tasks[0].status).toBe('completed');
    expect(db.state.triageHistory).toHaveLength(1);
    expect(db.state.triageHistory[0]).toMatchObject({ correct: 25, wrong: 0, empty: 0, questionIds: persistedSet });
    await first.reload({ waitUntil: 'domcontentloaded' });
    await expect(topics.getByText('Tamamlandı', { exact: true })).toBeVisible();
    await topics.getByRole('button', { name: 'TRİAJ takvimi' }).click();
    await expect(first.getByText(/2026-11-11 · Tamamlandı/).first()).toBeVisible();
  } finally {
    await Promise.all([device1.close(), device2.close()]);
  }
});

test('İstanbul gece yarısında yeni vadeyi gösterir', async ({ page, context }) => {
  test.setTimeout(60_000);
  const { install } = backend(planUnit(emptyTriajState(), lesson, units[0], today));
  await install(context);
  await page.clock.install({ time: new Date('2026-11-10T20:50:00Z') });
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  const topics = page.getByRole('region', { name: 'Bugünün Konusu' });
  await expect(topics.getByText('Bugün vadesi gelen soru görevi yok.')).toBeVisible();
  await page.clock.fastForward(660_000);
  await expect(topics.getByRole('button', { name: 'İlk tekrarı aç' })).toBeVisible();
});

test('TRİAJ beş sekmeyi, parametre kaydını, yedek geri yüklemeyi ve odak tarihini destekler', async ({ page, context }) => {
  test.setTimeout(90_000);
  const { db, install } = backend(seededPlan());
  await install(context);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.clock.setFixedTime(new Date('2026-11-11T12:00:00Z'));
  const { buildTickTickFocusSummary } = await import('../src/modules/triaj/domain/focus');
  const historical = '2026-11-10';
  await context.route('**/api/triaj/ticktick/focus?**', route => {
    const date = new URL(route.request().url()).searchParams.get('date') ?? today;
    return route.fulfill({ json: buildTickTickFocusSummary([
      { type: 0, startTime: `${today}T08:00:00Z`, endTime: `${today}T08:30:00Z`, duration: 30 * 60_000 },
      { type: 0, startTime: `${historical}T08:00:00Z`, endTime: `${historical}T10:00:00Z`, duration: 120 * 60_000 },
    ], today, date) });
  });
  await context.route('**/api/triaj/ai/status', route => route.fulfill({ json: { configured: false } }));

  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: /TRİAJ Günün planı ve tekrar takvimi/ }).click();
  const triaj = page.getByRole('region', { name: 'TRİAJ', exact: true });
  const tabs = triaj.getByRole('navigation', { name: 'TRİAJ sekmeleri' });
  await expect(tabs.getByRole('button')).toHaveCount(5);
  await expect(triaj.getByText('Günlük 4 Bilişsel Blok Akışı')).toBeVisible();

  await triaj.getByRole('button', { name: 'Parametreler', exact: true }).click();
  const parameters = page.getByRole('dialog', { name: 'Parametreler' });
  await parameters.getByLabel('Çalışma düzeni').selectOption('clinical');
  await parameters.getByLabel('Günlük ünite kapasitesi').fill('9');
  await parameters.getByRole('button', { name: 'Parametreleri Kaydet' }).click();
  await expect(parameters).toHaveCount(0);
  expect(db.state.parameters).toMatchObject({ studyMode: 'clinical', dailyUnitCapacity: 9 });
  await expect(triaj.getByText('2,5 saat', { exact: true })).toBeVisible();

  await triaj.getByRole('button', { name: 'TickTick Senkronize Et' }).click();
  await expect.poll(() => db.state.dailyGoals[today]?.completedStudyMinutes).toBe(30);
  const focusDate = triaj.getByLabel('TickTick Çalışma Günü Seç');
  const historyResponse = page.waitForResponse(response => new URL(response.url()).searchParams.get('date') === historical);
  await focusDate.selectOption(historical);
  await historyResponse;
  await expect(triaj.getByText('2026-11-05 – 2026-11-11').first()).toBeVisible();
  expect(db.state.dailyGoals[today].completedStudyMinutes).toBe(30);

  for (const tab of ['Dersler ve Üniteler', 'Takvim', 'Deneme ve Hata Analizi', 'Kova Raporu']) {
    await tabs.getByRole('button', { name: tab, exact: true }).click();
    await expect(tabs.getByRole('button', { name: tab, exact: true })).toHaveAttribute('aria-current', 'page');
  }
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth)).toBe(390);

  await triaj.getByRole('button', { name: 'Yapay Zekâ', exact: true }).click();
  const ai = page.getByRole('dialog', { name: /DeepSeek|Yapay zekâ/i });
  await expect(ai.getByText(/DUS 2027 Bilişsel AI Motoru/i)).toBeVisible();
  await ai.getByRole('button', { name: 'Kapat' }).click();

  await triaj.getByRole('button', { name: 'Veri ve Yedek' }).click();
  const backup = page.getByRole('dialog', { name: 'Veri ve yedek' });
  const download = page.waitForEvent('download');
  await backup.getByRole('button', { name: 'JSON Yedeği İndir' }).click();
  expect((await download).suggestedFilename()).toBe(`TRIAJ-${today}.json`);

  const restored = { ...db.state, parameters: { ...db.state.parameters, dailyUnitCapacity: 11 } };
  await backup.getByLabel('Yedek veya Excel aktarım JSON’u').setInputFiles({
    name: 'triaj-test.json', mimeType: 'application/json',
    buffer: Buffer.from(JSON.stringify({ version: 1, payload: restored })),
  });
  await expect(backup.getByRole('heading', { name: 'Aktarım Önizlemesi' })).toBeVisible();
  await backup.getByRole('button', { name: 'Geri Yükle' }).click();
  await expect(backup.getByText('Aktarım kaydedildi.')).toBeVisible();
  expect(db.state.parameters.dailyUnitCapacity).toBe(11);
  expect(db.state.tasks).toHaveLength(3);
});
