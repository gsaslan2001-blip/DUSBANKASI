import { expect, test } from '@playwright/test';

const largeUnitQuestions = Array.from({ length: 527 }, (_, index) => {
  const number = String(index + 1).padStart(4, '0');
  return {
    id: `unit-q-${number}`,
    lesson: 'Fizyoloji',
    unit: 'Büyük Ünite',
    question: `Büyük ünite sorusu ${number}`,
    option_a: 'A',
    option_b: 'B',
    option_c: 'C',
    option_d: 'D',
    option_e: 'E',
    correct_answer: 'A',
    explanation: `Açıklama ${number}`,
    created_at: '2026-08-19T00:00:00Z',
    updated_at: '2026-08-19T00:00:00Z',
    is_favorite: false,
    flagged: false,
    flag_reason: null,
    quality_flag: null,
    image_url: null,
  };
});

test('Standart 40 seçimi tam içerik isteğini 40 benzersiz ID ile sınırlar', async ({ page }) => {
  let fetchedContentIds: string[] = [];

  await page.addInitScript(() => {
    Math.random = () => 0.999_999;
  });
  await page.route('**/rest/v1/questions*', async (route) => {
    const url = new URL(route.request().url());
    const idFilter = url.searchParams.get('id');
    if (route.request().method() === 'GET' && idFilter?.startsWith('in.(')) {
      fetchedContentIds = idFilter.slice(4, -1).split(',').filter(Boolean);
      const selected = largeUnitQuestions.filter((question) => fetchedContentIds.includes(question.id));
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(selected) });
      return;
    }
    if (route.request().method() === 'GET') {
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(largeUnitQuestions) });
      return;
    }
    await route.fulfill({ status: 200, contentType: 'application/json', body: '[]' });
  });
  await page.route('**/rest/v1/question_stats*', (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: '[]' }),
  );
  await page.route('**/auth/v1/**', (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: '{}' }),
  );

  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('heading', { name: 'Fizyoloji' }).click();
  await page.getByText('Büyük Ünite', { exact: true }).click();

  await expect(page.getByRole('heading', { name: 'Soru Sayısını Seç' })).toBeVisible();
  expect(fetchedContentIds).toEqual([]);
  await expect(page.getByRole('button', { name: 'Hızlı 20' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Karma 100' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Hepsini çalış' })).toBeVisible();
  await expect(page.getByRole('spinbutton', { name: 'Özel soru sayısı' })).toBeVisible();
  await page.getByRole('button', { name: 'Standart 40' }).click();
  await page.getByRole('button', { name: /BAŞLA · 40 SORU/ }).click();

  await expect(page.getByText('Büyük ünite sorusu 0527', { exact: true })).toBeVisible();
  expect(fetchedContentIds).toHaveLength(40);
  expect(new Set(fetchedContentIds).size).toBe(40);
});

for (const all of [false, true]) {
  test(all ? 'Hepsini çalış doğru favorisizler dahil 527 soruyu açar' : 'Standart 40 gerçek seçim akışında 4/8/12/16 karışımını getirir', async ({ page }) => {
    const fetchedIds: string[] = [];
    // 20 doğru favori, 40 yanlış favorisiz, 60 yanlış favori,
    // 80 doğru favorisiz ve 327 görülmemiş soru.
    const questions = largeUnitQuestions.map((q, i) => ({ ...q, is_favorite: i < 20 || (i >= 60 && i < 120) }));
    const stats = Object.fromEntries(questions.slice(0, 200).map((q, i) => [q.id, {
      attempts: 2, corrects: i >= 20 && i < 120 ? 1 : 2,
      lastSeen: '2026-10-04T00:00:00Z',
    }]));
    await page.addInitScript((seed) => {
      Math.random = () => 0.999_999;
      localStorage.setItem('dus_question_stats', JSON.stringify(seed));
    }, stats);
    await page.route('**/rest/v1/questions*', async route => {
      const ids = new URL(route.request().url()).searchParams.get('id');
      if (route.request().method() === 'GET' && ids?.startsWith('in.(')) {
        const batch = ids.slice(4, -1).split(',').filter(Boolean);
        fetchedIds.push(...batch);
        // Ters DB sırası bile seçim sırasını bozmamalı.
        await route.fulfill({ json: questions.filter(q => batch.includes(q.id)).reverse() });
      } else {
        await route.fulfill({ json: route.request().method() === 'GET' ? questions : [] });
      }
    });
    await page.route('**/rest/v1/question_stats*', route => route.fulfill({ json: [] }));
    await page.route('**/auth/v1/**', route => route.fulfill({ json: {} }));
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.getByRole('heading', { name: 'Fizyoloji' }).click();
    await page.getByText('Büyük Ünite', { exact: true }).click();
    if (all) await page.getByRole('button', { name: 'Hepsini çalış' }).click();
    const count = all ? 527 : 40;
    await page.getByRole('button', { name: `BAŞLA · ${count} SORU` }).click();
    const first = all ? '0001' : '0527';
    await expect(page.getByText(`Büyük ünite sorusu ${first}`, { exact: true })).toBeVisible();
    expect(fetchedIds).toHaveLength(count);
    expect(new Set(fetchedIds).size).toBe(count);
    if (all) {
      expect(new Set(fetchedIds)).toEqual(new Set(questions.map(q => q.id)));
    } else {
      const group = (id: string) => {
        const i = Number(id.slice(-4)) - 1;
        return i < 20 ? 0 : i < 60 ? 1 : i < 120 ? 2 : i < 200 ? 4 : 3;
      };
      expect([0, 1, 2, 3, 4].map(g => fetchedIds.filter(id => group(id) === g).length)).toEqual([4, 8, 12, 16, 0]);
    }
  });
}
