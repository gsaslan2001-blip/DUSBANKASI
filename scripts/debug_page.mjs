import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3000);

  const artifactDir = 'C:/Users/FURKAN/.gemini/antigravity/brain/fef2239a-e3dd-4147-a02a-c5dc12c58b4f';
  await page.screenshot({ path: `${artifactDir}/initial_landing.png`, fullPage: true });

  const buttons = await page.locator('button, a, [role="button"]').allInnerTexts();
  console.log('Visible clickable elements:', buttons);

  const text = await page.innerText('body');
  console.log('Body Text Preview:\n', text.slice(0, 400));

  await browser.close();
}

run().catch(e => console.error(e));
