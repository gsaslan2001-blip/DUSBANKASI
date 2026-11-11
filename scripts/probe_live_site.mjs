import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 }
  });
  const page = await context.newPage();

  const consoleLogs = [];
  page.on('console', msg => consoleLogs.push(`[${msg.type()}] ${msg.text()}`));
  page.on('pageerror', err => consoleLogs.push(`[PAGE ERROR] ${err.message}`));

  console.log('Navigating to https://dusbankasi.vercel.app ...');
  try {
    const res = await page.goto('https://dusbankasi.vercel.app', { waitUntil: 'networkidle', timeout: 35000 });
    console.log('HTTP Status:', res?.status());
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'prod_homepage.png', fullPage: true });
    console.log('Homepage screenshot saved: prod_homepage.png');

    // Sayfa başlığı ve butonları incele
    const title = await page.title();
    console.log('Page Title:', title);

    // TRİAJ sekmesine tıkla
    const triajBtn = page.getByRole('button', { name: /TRİAJ|Triyaj/i });
    if (await triajBtn.isVisible()) {
      console.log('Clicking TRİAJ tab...');
      await triajBtn.click();
      await page.waitForTimeout(2000);
      await page.screenshot({ path: 'prod_triaj_tab.png', fullPage: true });
      console.log('TRİAJ tab screenshot saved: prod_triaj_tab.png');

      // AI Asistan butonunu bul
      const aiBtn = page.getByRole('button', { name: /AI Asistan|Yapay Zekâ|DeepSeek/i }).first();
      if (await aiBtn.isVisible()) {
        console.log('Clicking AI Assistant button...');
        await aiBtn.click();
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'prod_ai_modal.png' });
        console.log('AI Modal screenshot saved: prod_ai_modal.png');

        // Modal içeriğini incele
        const modalText = await page.locator('[role="dialog"]').innerText().catch(() => '');
        console.log('=== MODAL TEXT ===\n', modalText.slice(0, 500));
      } else {
        console.log('AI Assistant button not found directly, looking for buttons:');
        const buttons = await page.locator('button').allInnerTexts();
        console.log('Buttons:', buttons.slice(0, 20));
      }
    } else {
      console.log('TRİAJ button not visible, visible buttons:');
      const buttons = await page.locator('button').allInnerTexts();
      console.log('Buttons:', buttons.slice(0, 20));
    }

  } catch (e) {
    console.error('Probe Error:', e.message);
  }

  console.log('--- RECENT CONSOLE LOGS ---');
  console.log(consoleLogs.slice(-15).join('\n'));

  await browser.close();
}

run();
