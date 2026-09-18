import { expect, test } from '@playwright/test';
import { CURRICULUM_ORDER } from '../src/config/curriculum';

function sprintQuestion(id: string, index: number, overrides: Record<string, unknown> = {}) {
  return {
      id,
      lesson: CURRICULUM_ORDER[index % CURRICULUM_ORDER.length],
      unit: `Ünite ${(index % 5) + 1}`,
      question: `Sprint sorusu ${id}`,
      option_a: 'Seçenek A',
      option_b: 'Seçenek B',
      option_c: 'Seçenek C',
      option_d: 'Seçenek D',
      option_e: 'Seçenek E',
      correct_answer: 'A',
      explanation: `Açıklama ${id}`,
      created_at: '2026-08-19T00:00:00Z',
      updated_at: '2026-08-19T00:00:00Z',
      is_favorite: false,
      flagged: false,
      flag_reason: null,
      quality_flag: null,
      image_url: null,
      ...overrides,
    };
}

const unseenQuestions = Array.from({ length: 150 }, (_, index) =>
  sprintQuestion(`unseen-${index + 1}`, index),
);
const wrongQuestions = Array.from({ length: 40 }, (_, index) =>
  sprintQuestion(`wrong-${index + 1}`, index + 150),
);
const favoriteCorrectQuestions = Array.from({ length: 10 }, (_, index) =>
  sprintQuestion(`favorite-correct-${index + 1}`, index + 190, { is_favorite: true }),
);
const labelOnlyQuestions = [
  sprintQuestion('unseen-high-yield', 200, { quality_flag: 'high_yield' }),
  sprintQuestion('unseen-past-exam', 201, { lesson: 'ÇIKMIŞ SORULAR', quality_flag: 'cikmis' }),
];
const sprintQuestions = [...unseenQuestions, ...wrongQuestions, ...favoriteCorrectQuestions, ...labelOnlyQuestions];
const sprintStats = {
  ...Object.fromEntries(wrongQuestions.map((question) => [question.id, {
    attempts: 1,
    corrects: 0,
    lastSeen: '2026-08-18T00:00:00.000Z',
  }])),
  ...Object.fromEntries(favoriteCorrectQuestions.map((question) => [question.id, {
    attempts: 1,
    corrects: 1,
    lastSeen: '2026-08-18T00:00:00.000Z',
  }])),
};

test('70 Gün Sprint aynı 200 ID ile açılır ve yenileme sonrası ikinci sorudan devam eder', async ({ page }) => {
  let fetchedContentIds: string[] = [];
  let savedSession: { questionIds: string[]; answers: unknown[]; currentIndex: number } | null = null;

  await page.route('**/rest/v1/questions*', async (route) => {
    const url = new URL(route.request().url());
    const idFilter = url.searchParams.get('id');
    if (route.request().method() === 'GET' && idFilter?.startsWith('in.(')) {
      fetchedContentIds = idFilter.slice(4, -1).split(',').filter(Boolean);
      const selected = sprintQuestions.filter((question) => fetchedContentIds.includes(question.id));
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(selected) });
      return;
    }
    if (route.request().method() === 'GET') {
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(sprintQuestions) });
      return;
    }
    await route.fulfill({ status: 200, contentType: 'application/json', body: '[]' });
  });
  await page.route('**/rest/v1/rpc/save_active_session*', async (route) => {
    const body = route.request().postDataJSON() as { p_session_data?: typeof savedSession };
    savedSession = body.p_session_data ?? null;
    await route.fulfill({ status: 200, contentType: 'application/json', body: 'null' });
  });
  await page.route('**/rest/v1/active_sessions*', async (route) => {
    if (route.request().method() === 'DELETE') {
      savedSession = null;
      await route.fulfill({ status: 200, contentType: 'application/json', body: '[]' });
      return;
    }
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: savedSession ? JSON.stringify({ session_data: savedSession }) : 'null',
    });
  });
  await page.route('**/rest/v1/question_stats*', (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: '[]' }),
  );
  await page.route('**/auth/v1/**', (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: '{}' }),
  );
  await page.addInitScript((stats) => {
    localStorage.setItem('dus_question_stats', JSON.stringify(stats));
  }, sprintStats);

  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Ayarlar' }).click();
  const settingsDialog = page.getByRole('dialog', { name: 'Ayarlar' });
  await expect(settingsDialog.getByRole('button', { name: '100' })).toBeVisible();
  await expect(settingsDialog.getByRole('button', { name: '150' })).toBeVisible();
  await expect(settingsDialog.getByRole('button', { name: '200' })).toBeVisible();
  await settingsDialog.getByRole('button', { name: '100' }).click();
  await settingsDialog.getByRole('button', { name: 'Kapat' }).click();
  await expect(page.getByRole('button', { name: "70 Gün Sprint — Bugünün 100'ü" })).toBeVisible();

  await page.getByRole('button', { name: 'Ayarlar' }).click();
  await page.getByRole('dialog', { name: 'Ayarlar' }).getByRole('button', { name: '200' }).click();
  await page.getByRole('dialog', { name: 'Ayarlar' }).getByRole('button', { name: 'Kapat' }).click();
  await expect(page.getByText('150 yeni · 40 yanlış · 10 doğru favori', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: "70 Gün Sprint — Bugünün 200'ü" }).click();

  await expect.poll(() => fetchedContentIds.length).toBe(200);
  const rawManifest = await page.evaluate(() => {
    const key = Object.keys(localStorage).find((value) => value.startsWith('dus_sprint_manifest_v2:') && value.endsWith(':200'));
    return key ? localStorage.getItem(key) : null;
  });
  expect(rawManifest).not.toBeNull();
  const manifest = JSON.parse(rawManifest!) as {
    questionIds: string[];
    breakdown: { unseen: number; wrong: number; favoriteCorrect: number };
  };
  expect(manifest.breakdown).toEqual(expect.objectContaining({ unseen: 150, wrong: 40, favoriteCorrect: 10 }));
  expect(manifest.questionIds).not.toContain('unseen-high-yield');
  expect(manifest.questionIds).not.toContain('unseen-past-exam');
  expect(manifest.questionIds).toEqual(fetchedContentIds);
  await expect(page.getByText(`Sprint sorusu ${manifest.questionIds[0]}`, { exact: true })).toBeVisible();

  await page.getByRole('button', { name: /A Seçenek A/ }).click();
  await page.getByRole('button', { name: 'SONRAKİ' }).click();
  await expect.poll(() => savedSession?.answers.length ?? 0).toBe(1);

  await page.reload({ waitUntil: 'domcontentloaded' });
  await expect(page.getByText('1 / 200 · Devam et', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: "70 Gün Sprint — Bugünün 200'ü" }).click();

  await expect(page.getByText(`Sprint sorusu ${manifest.questionIds[1]}`, { exact: true })).toBeVisible();
  await expect(page.getByText('2 / 200', { exact: true })).toBeVisible();
});
