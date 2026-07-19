"""DUSBANKASI UI V2 — automated walkthrough test script."""
import asyncio
import json
import os
import sys
from datetime import datetime

OUTPUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "test_output")
os.makedirs(OUTPUT_DIR, exist_ok=True)

REPORT = {
    "test": "DUSBANKASI UI V2 Walkthrough",
    "date": datetime.now().isoformat(),
    "url": "http://localhost:5173",
    "screenshots": [],
    "console_errors": [],
    "visual_issues": [],
    "results": {}
}


def report(label, status, details=None):
    REPORT["results"][label] = {
        "status": status,
        "details": details or ""
    }
    icon = "PASS" if status == "PASS" else "FAIL"
    print(f"  [{icon}] {label}" + (f" — {details}" if details else ""))


async def main():
    from playwright.async_api import async_playwright

    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=["--no-sandbox", "--disable-setuid-sandbox"]
        )
        context = await browser.new_context(
            viewport={"width": 1440, "height": 900},
            device_scale_factor=2,
        )
        page = await context.new_page()

        # Collect console errors
        console_errors = []
        page.on("console", lambda msg: (
            console_errors.append({"type": msg.type, "text": msg.text})
            if msg.type == "error" else None
        ))
        page.on("pageerror", lambda err: console_errors.append({"type": "pageerror", "text": str(err)}))

        def ss(name):
            path = os.path.join(OUTPUT_DIR, f"{name}.png")
            asyncio.create_task(page.screenshot(path=path))
            REPORT["screenshots"].append(path)
            return path

        # ═══════════════════════════════════
        # 1. LANDING PAGE
        # ═══════════════════════════════════
        print("\n=== 1. LANDING PAGE ===")
        await page.goto("http://localhost:5173", wait_until="networkidle")
        await asyncio.sleep(2)

        # Check page loaded
        title = await page.title()
        report("Page title", "PASS" if "DUSBANKASI" in title else "FAIL", f"Title: {title}")

        # Check root has content
        root_html = await page.inner_html("#root")
        has_content = len(root_html) > 100
        report("Root rendered", "PASS" if has_content else "FAIL", f"Root HTML length: {len(root_html)}")

        # Check for visual glitches - look for blank areas
        body_text = await page.inner_text("body")
        has_text = len(body_text.strip()) > 0
        report("Body has text", "PASS" if has_text else "FAIL")

        screenshot_landing = ss("01_landing_page")
        await asyncio.sleep(1)

        # ═══════════════════════════════════
        # 2. THEME TOGGLE
        # ═══════════════════════════════════
        print("\n=== 2. THEME TOGGLE ===")

        # Look for theme toggle button - try common selectors
        theme_btn = None
        for sel in [
            'button[aria-label*="tema"]',
            'button[aria-label*="theme"]',
            'button[aria-label*="Tema"]',
            'button[aria-label*="karanl"]',
            '[data-testid*="theme"]',
            'button svg[class*="sun"]',
            'button svg[class*="moon"]',
            '.theme-toggle',
            'button:has(svg)',
            'header button',
            'nav button',
            '[class*="theme"] button',
            'button',
        ]:
            try:
                btn = await page.query_selector(sel)
                if btn:
                    theme_btn = btn
                    print(f"    Found potential theme button: {sel}")
                    break
            except:
                pass

        if theme_btn:
            theme_text = await theme_btn.inner_text()
            theme_html = await theme_btn.inner_html()
            print(f"    Theme button text: '{theme_text}', HTML len: {len(theme_html)}")
            # Try clicking it (likely in settings/Settings)
            await theme_btn.click()
            await asyncio.sleep(1.5)
            ss("02_after_theme_toggle_click")
        else:
            # Try finding settings panel or sidebar
            print("    No theme button found directly, trying settings panels...")
            # Look for settings icon or gear
            for sel in ['svg', '[class*="gear"]', '[class*="setting"]', '[class*="Setting"]']:
                try:
                    el = await page.query_selector(sel)
                    if el:
                        await el.click()
                        await asyncio.sleep(1)
                        ss("02_settings_clicked")
                        break
                except:
                    pass

        # Check what's actually visible on the page
        print("\n    Page structure analysis:")
        # Get all interactive elements
        buttons = await page.query_selector_all("button")
        print(f"    Total buttons: {len(buttons)}")
        for i, btn in enumerate(buttons):
            try:
                txt = (await btn.inner_text()).strip()[:50]
                print(f"      Button {i}: '{txt}'")
            except:
                pass

        links = await page.query_selector_all("a")
        print(f"    Total links: {len(links)}")
        for i, link in enumerate(links):
            try:
                txt = (await link.inner_text()).strip()[:50]
                href = await link.get_attribute("href") or ""
                print(f"      Link {i}: '{txt}' -> {href[:60]}")
            except:
                pass

        # ═══════════════════════════════════
        # 3. QUIZ EXPERIENCE
        # ═══════════════════════════════════
        print("\n=== 3. QUIZ EXPERIENCE ===")

        # Find and click lesson cards
        lesson_cards = await page.query_selector_all('[class*="card"], [class*="Card"], [class*="lesson"], [class*="Lesson"]')
        print(f"    Found {len(lesson_cards)} potential cards")

        # Try clicking the first lesson link
        for link in links:
            href = await link.get_attribute("href") or ""
            if "endodonti" in href.lower() or "Endodonti" in href:
                print(f"    Clicking Endodonti link: {href}")
                await link.click()
                await asyncio.sleep(2)
                break

        current_url = page.url
        print(f"    Current URL after navigation: {current_url}")
        ss("03_after_lesson_click")

        # Look for unit selection or quiz start
        unit_buttons = await page.query_selector_all("button, a, [role='button']")
        print(f"    Interactive elements on page: {len(unit_buttons)}")
        for i, btn in enumerate(unit_buttons[:20]):
            try:
                txt = (await btn.inner_text()).strip()[:60]
                if txt:
                    print(f"      Element {i}: '{txt}'")
            except:
                pass

        # Check for quiz-related elements
        quiz_elements = await page.query_selector_all('[class*="quiz"], [class*="Quiz"], [class*="soru"], [class*="Soru"]')
        print(f"    Quiz-related elements: {len(quiz_elements)}")

        # ═══════════════════════════════════
        # 4. STATISTICS PAGE
        # ═══════════════════════════════════
        print("\n=== 4. STATISTICS PAGE ===")

        # Look for stats/analytics link
        stats_found = False
        for link in await page.query_selector_all("a, button, [role='tab'], [role='menuitem']"):
            try:
                txt = (await link.inner_text()).strip().lower()
                if any(word in txt for word in ["istatistik", "analiz", "grafik", "chart", "stats", "statistics", "analytics", "dashboard"]):
                    print(f"    Found stats link: '{txt}'")
                    await link.click()
                    await asyncio.sleep(2)
                    stats_found = True
                    ss("04_statistics_page")

                    # Check for D3 charts
                    svgs = await page.query_selector_all("svg")
                    print(f"    SVGs on page: {len(svgs)}")
                    report("D3 charts render", "PASS" if len(svgs) >= 2 else "WARN",
                           f"Found {len(svgs)} SVG elements")

                    # Check for animated counters
                    counters = await page.query_selector_all('[class*="counter"], [class*="Counter"], [class*="count"]')
                    if counters:
                        report("Animated counters", "PASS", f"Found {len(counters)} counter elements")
                    else:
                        # Check for numbers that might be counters
                        numbers = await page.query_selector_all("text, span, div")
                        num_count = 0
                        for n in numbers:
                            try:
                                t = await n.inner_text()
                                if t.strip().isdigit():
                                    num_count += 1
                            except:
                                pass
                        report("Numeric values visible", "PASS" if num_count > 0 else "WARN",
                               f"Found {num_count} numeric text elements")

                    # Check for contribution heat map
                    heat = await page.query_selector_all('[class*="heat"], [class*="Heat"], [class*="contribution"], [class*="grid"]')
                    report("Heat map elements", "PASS" if heat else "WARN",
                           f"Found {len(heat)} heatmap-related elements")

                    # Check for progress bars
                    progress = await page.query_selector_all('[class*="progress"], [class*="Progress"]')
                    report("Progress bars", "PASS" if progress else "WARN",
                           f"Found {len(progress)} progress elements")

                    # Check lesson progress bars specifically
                    lesson_bars = await page.query_selector_all('[class*="lesson"] [class*="progress"], [class*="progress"]')
                    print(f"    Progress elements: {len(lesson_bars)}")
                    break
            except Exception as e:
                pass

        if not stats_found:
            report("Statistics page navigation", "SKIP", "Could not find statistics link")

        # ═══════════════════════════════════
        # 5. DASHBOARD VIEWS
        # ═══════════════════════════════════
        print("\n=== 5. DASHBOARD VIEWS ===")

        # Try navigating to DailyPlan
        for link in await page.query_selector_all("a, button, [role='tab'], [role='menuitem']"):
            try:
                txt = (await link.inner_text()).strip().lower()
                if any(word in txt for word in ["plan", "gunluk", "daily", "simulasyon", "simulation"]):
                    print(f"    Found dashboard link: '{txt}'")
                    await link.click()
                    await asyncio.sleep(2)
                    ss("05_dashboard_view")
                    break
            except:
                pass

        # ═══════════════════════════════════
        # REPORT CONSOLE ERRORS
        # ═══════════════════════════════════
        print("\n=== CONSOLE ERRORS ===")
        if console_errors:
            REPORT["console_errors"] = console_errors
            for err in console_errors[:10]:
                print(f"  [{err['type']}] {err['text'][:150]}")
        else:
            print("  No console errors detected")
            REPORT["console_errors"] = []

        # ═══════════════════════════════════
        # FINAL SUMMARY
        # ═══════════════════════════════════
        print("\n" + "=" * 60)
        passed = sum(1 for r in REPORT["results"].values() if r["status"] == "PASS")
        failed = sum(1 for r in REPORT["results"].values() if r["status"] == "FAIL")
        skipped = sum(1 for r in REPORT["results"].values() if r["status"] == "SKIP")
        warned = sum(1 for r in REPORT["results"].values() if r["status"] == "WARN")
        print(f"RESULTS: {passed} passed, {failed} failed, {warned} warnings, {skipped} skipped")
        print(f"Screenshots: {len(REPORT['screenshots'])}")
        print(f"Console errors: {len(console_errors)}")

        # Save report
        report_path = os.path.join(OUTPUT_DIR, "test_report.json")
        with open(report_path, "w", encoding="utf-8") as f:
            json.dump(REPORT, f, ensure_ascii=False, indent=2)
        print(f"\nReport saved to: {report_path}")

        await browser.close()

    return REPORT


if __name__ == "__main__":
    result = asyncio.run(main())
    # Print final summary
    print(f"\nTotal screenshots: {len(result['screenshots'])}")
    print("Screenshot files:")
    for s in result["screenshots"]:
        print(f"  {s}")
