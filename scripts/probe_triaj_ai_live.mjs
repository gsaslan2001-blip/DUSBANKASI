import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 }
  });
  const page = await context.newPage();

  console.log('1. Navigating to http://localhost:5173 ...');
  await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  // Ekranda Giriş Yap modalı varsa Escape ile kapat
  console.log('2. Dismissing login modal if present...');
  await page.keyboard.press('Escape');
  await page.waitForTimeout(1000);

  const artifactDir = 'C:/Users/FURKAN/.gemini/antigravity/brain/fef2239a-e3dd-4147-a02a-c5dc12c58b4f';

  // TRİAJ butonuna tıkla
  console.log('3. Clicking TRİAJ button...');
  const triajBtn = page.getByRole('button', { name: /TRİAJ Günün planı ve tekrar takvimi/i }).first();
  await triajBtn.click();
  await page.waitForTimeout(2000);

  await page.screenshot({ path: `${artifactDir}/02_triaj_view.png` });
  console.log('Saved 02_triaj_view.png');

  // TRİAJ içindeki butonları listele
  const buttons = await page.locator('button').allInnerTexts();
  console.log('Buttons found in TRIAJ view:', buttons);

  // Yapay Zekâ butonuna tıkla
  console.log('4. Clicking Yapay Zekâ button...');
  const aiBtn = page.getByRole('button', { name: /Yapay Zekâ/i }).first();
  await aiBtn.click();
  await page.waitForTimeout(2000);

  // Modal açık halinin ekran görüntüsünü al
  await page.screenshot({ path: `${artifactDir}/03_ai_modal_open_live.png` });
  console.log('Saved 03_ai_modal_open_live.png');

  const dialog = page.locator('[role="dialog"]');
  const modalText = await dialog.innerText();
  console.log('=== MODAL CONTENT IN REAL BROWSER ===\n', modalText);

  // DeepSeek v4.1 Flash ile Üret butonuna tıkla
  const submitBtn = dialog.getByRole('button', { name: /DeepSeek v4.1 Flash ile Üret/i });
  const isDisabled = await submitBtn.isDisabled();
  console.log('Is button disabled?:', isDisabled);

  if (!isDisabled) {
    console.log('5. Clicking DeepSeek v4.1 Flash ile Üret button...');
    await submitBtn.click();
    console.log('Waiting 10 seconds for real AI generation from Deploy.com...');
    await page.waitForTimeout(10000);

    await page.screenshot({ path: `${artifactDir}/04_ai_modal_generated_live.png` });
    console.log('Saved 04_ai_modal_generated_live.png');

    const resultText = await dialog.innerText();
    console.log('=== AI RESULT CONTENT ===\n', resultText);
  }

  await browser.close();
}

run().catch(err => {
  console.error('Fatal probe error:', err);
  process.exit(1);
});
