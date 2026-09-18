import { test, expect } from '@playwright/test';

const mockQuestions = [
  {
    id: 'delete-q-1',
    lesson: 'Fizyoloji',
    unit: 'Silme Regresyonu',
    question: 'Silinecek soru',
    option_a: 'İlk A',
    option_b: 'İlk B',
    option_c: 'İlk C',
    option_d: 'İlk D',
    option_e: 'İlk E',
    correct_answer: 'A',
    explanation: 'İlk açıklama',
    created_at: '2026-08-18T00:00:00Z',
    updated_at: '2026-08-18T00:00:00Z',
    is_favorite: false,
    flagged: false,
    flag_reason: null,
    quality_flag: null,
    image_url: null,
  },
  {
    id: 'delete-q-2',
    lesson: 'Fizyoloji',
    unit: 'Silme Regresyonu',
    question: 'Silmeden sonra gelen soru',
    option_a: 'Sonraki A',
    option_b: 'Sonraki B',
    option_c: 'Sonraki C',
    option_d: 'Sonraki D',
    option_e: 'Sonraki E',
    correct_answer: 'C',
    explanation: 'İkinci açıklama',
    created_at: '2026-08-18T00:00:00Z',
    updated_at: '2026-08-18T00:00:00Z',
    is_favorite: false,
    flagged: false,
    flag_reason: null,
    quality_flag: null,
    image_url: null,
  },
];

async function mockQuestionApi(page: import('@playwright/test').Page) {
  await page.addInitScript(() => {
    Math.random = () => 0.999_999;
  });
  await page.route('**/rest/v1/questions*', async (route) => {
    if (route.request().method() === 'GET') {
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockQuestions) });
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
}

async function expectFinishDeleteMenuOrder(page: import('@playwright/test').Page) {
  const actionNames = await page.getByRole('button').evaluateAll((buttons) =>
    buttons.map((button) => button.getAttribute('aria-label') ?? button.textContent?.trim() ?? ''),
  );
  const finishIndex = actionNames.indexOf('BİTİR');
  const deleteIndex = actionNames.indexOf('Soruyu sil');
  const menuIndex = actionNames.indexOf('Soru işlemleri menüsü');

  expect(finishIndex).toBeGreaterThan(-1);
  expect(deleteIndex).toBeGreaterThan(finishIndex);
  expect(menuIndex).toBeGreaterThan(deleteIndex);
}

test('silinen sorunun seçimi aynı indexe gelen soruya taşınmaz', async ({ page }) => {
  await mockQuestionApi(page);

  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('heading', { name: 'Fizyoloji' }).click();
  await page.getByText('Silme Regresyonu', { exact: true }).click();
  await page.getByRole('button', { name: /BAŞLA · 2 SORU/ }).click();

  await expect(page.getByText('Silinecek soru', { exact: true })).toBeVisible();
  await expectFinishDeleteMenuOrder(page);
  await page.getByRole('button', { name: /B İlk B/ }).click();
  await page.getByRole('button', { name: 'Soruyu sil' }).click();
  await page.getByRole('button', { name: 'Onayla' }).click();

  await expect(page.getByText('Silmeden sonra gelen soru', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: /B Sonraki B/ })).toBeEnabled();
  await expect(page.getByText('YANLIŞ: C')).toHaveCount(0);
});

test('deneme modunda başlık eylemleri BİTİR, SİL ve menü sırasındadır', async ({ page }) => {
  await mockQuestionApi(page);

  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.getByText('Deneme Modu', { exact: true }).click();
  await page.getByRole('button', { name: 'Tümü' }).click();
  await page.getByRole('button', { name: /Soru Sayısına Geç/ }).click();
  await page.getByRole('button', { name: 'BAŞLAT' }).click();

  await expect(page.getByText('Silinecek soru', { exact: true })).toBeVisible();
  await expectFinishDeleteMenuOrder(page);
});

test('tamamlanan AI yanıtı açıklamaya tek tıkla eklenir', async ({ page }) => {
  await page.addInitScript(() => {
    Math.random = () => 0.999_999;
  });

  let updateBody: Record<string, unknown> | null = null;
  await page.route('**/rest/v1/questions*', async (route) => {
    if (route.request().method() === 'GET') {
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockQuestions) });
      return;
    }
    if (route.request().method() === 'PATCH') {
      updateBody = route.request().postDataJSON() as Record<string, unknown>;
    }
    await route.fulfill({ status: 200, contentType: 'application/json', body: '[]' });
  });
  await page.route('**/rest/v1/question_stats*', (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: '[]' }),
  );
  await page.route('**/auth/v1/**', (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: '{}' }),
  );
  await page.route('**/api/explain', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'text/plain; charset=utf-8',
      body: '**🧭 Soru Ne Soruyor?**\n\nObjektif açıklama\n\n**📌 Spot Bilgiler (1 adet):**\n\n1. X\'te var, Y\'de yoktur.',
    }),
  );

  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('heading', { name: 'Fizyoloji' }).click();
  await page.getByText('Silme Regresyonu', { exact: true }).click();
  await page.getByRole('button', { name: /BAŞLA · 2 SORU/ }).click();
  await expect(page.getByText('Silinecek soru', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: /A İlk A/ }).click();
  await page.getByRole('button', { name: 'AI AÇIKLAMA' }).click();

  await expect(page.getByText('Objektif açıklama', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'AÇIKLAMAYA EKLE' }).click();

  await expect(page.getByRole('button', { name: 'AÇIKLAMAYA EKLENDİ' })).toBeVisible();
  expect(updateBody).not.toBeNull();
  expect(String(updateBody?.explanation)).toContain('İlk açıklama');
  expect(String(updateBody?.explanation)).toContain('Objektif açıklama');
  expect(String(updateBody?.explanation)).toContain('X\'te var, Y\'de yoktur.');
});
