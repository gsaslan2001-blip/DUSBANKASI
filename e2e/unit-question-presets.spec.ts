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
  await expect(page.getByRole('button', { name: 'Görülmemişlerden 100' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Tüm görülmemişler' })).toBeVisible();
  await expect(page.getByRole('spinbutton', { name: 'Özel soru sayısı' })).toBeVisible();
  await page.getByRole('button', { name: 'Standart 40' }).click();
  await page.getByRole('button', { name: /BAŞLA · 40 SORU/ }).click();

  await expect(page.getByText('Büyük ünite sorusu 0001', { exact: true })).toBeVisible();
  expect(fetchedContentIds).toHaveLength(40);
  expect(new Set(fetchedContentIds).size).toBe(40);
});
