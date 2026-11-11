import { chromium } from 'playwright';

async function test() {
  console.log('🚀 Launching real Chromium browser...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();

  const logs = [];
  page.on('console', msg => logs.push(`[${msg.type()}] ${msg.text()}`));
  page.on('pageerror', err => logs.push(`[PAGE ERROR] ${err.message}`));

  console.log('1. Navigating to http://localhost:5173 ...');
  await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' });

  // Giriş Yap modalı çıkarsa Escape ile kapat
  await page.waitForTimeout(1000);
  await page.keyboard.press('Escape');

  console.log('2. Waiting for TRİAJ button to become visible (waiting for questions to load)...');
  const triajBtn = page.getByRole('button', { name: /TRİAJ Günün planı ve tekrar takvimi/i }).first();
  await triajBtn.waitFor({ state: 'visible', timeout: 45000 });
  console.log('✓ TRİAJ button is now visible!');

  console.log('3. Clicking TRİAJ button...');
  await triajBtn.click();
  await page.waitForTimeout(2000);

  const artifactDir = 'C:/Users/FURKAN/.gemini/antigravity/brain/fef2239a-e3dd-4147-a02a-c5dc12c58b4f';
  await page.screenshot({ path: `${artifactDir}/web_triaj_open.png` });
  console.log('✓ Saved web_triaj_open.png');

  // TRİAJ ekranındaki 'Yapay Zekâ' butonunu bul ve tıkla
  console.log('4. Looking for Yapay Zekâ modal button...');
  const aiBtn = page.getByRole('button', { name: 'Yapay Zekâ', exact: true });
  await aiBtn.waitFor({ state: 'visible', timeout: 10000 });
  await aiBtn.click();
  await page.waitForTimeout(1500);

  // Modal açıkken screenshot al
  await page.screenshot({ path: `${artifactDir}/web_ai_modal_open.png` });
  console.log('✓ Saved web_ai_modal_open.png');

  const dialog = page.locator('[role="dialog"]');
  const modalText = await dialog.innerText();
  console.log('=== MODAL CONTENT IN REAL BROWSER ===\n', modalText);

  // Üret butonu disabled mı?
  const submitBtn = dialog.getByRole('button', { name: /DeepSeek v4.1 Flash ile Üret/i });
  const isDisabled = await submitBtn.isDisabled();
  console.log('Is DeepSeek button disabled?:', isDisabled);

  if (isDisabled) {
    console.error('❌ HATA: DeepSeek butonu kilitli!');
  } else {
    console.log('✓ DeepSeek butonu AKTİF! 5. Tıklanıyor...');
    await submitBtn.click();

    console.log('Deploy.com API yanıtı bekleniyor (15 saniye)...');
    await page.waitForTimeout(12000);

    await page.screenshot({ path: `${artifactDir}/web_ai_modal_result.png` });
    console.log('✓ Saved web_ai_modal_result.png');

    const resultText = await dialog.innerText();
    console.log('=== AI RESULT IN REAL BROWSER ===\n', resultText);
  }

  await browser.close();
  console.log('✓ Browser closed. Test completed!');
}

test().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
