
import json, sys
from playwright.sync_api import sync_playwright

SCREENSHOT_DIR = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\raporlar\screenshots"
LOCAL_URL = "http://localhost:5176"

results = {"pass": [], "fail": [], "warn": [], "screenshots": [], "console_errors": [], "network_errors": []}

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(viewport={"width": 1440, "height": 900})
    page = context.new_page()
    page.on("console", lambda msg: results["console_errors"].append(msg.text) if msg.type == "error" else None)
    page.on("requestfailed", lambda req: results["network_errors"].append("FAILED: " + req.url[:150]))
    page.on("response", lambda resp: results["network_errors"].append(
        str(resp.status) + " " + resp.url[:120]) if resp.status >= 400 else None)

    page.goto(LOCAL_URL, wait_until="domcontentloaded", timeout=30000)
    page.wait_for_timeout(4000)

    page.screenshot(path=SCREENSHOT_DIR + "/14-lokal-tam-sayfa.png", full_page=True)
    results["screenshots"].append("14-lokal-tam-sayfa.png")

    title = page.title()
    results["pass"].append("Lokal sayfa basligi: " + title)

    page_text = page.inner_text("body")

    if "Hos Geldin" in page_text:
        results["pass"].append("Hos Geldin basligi mevcut")

    if "Gun Kaldi" in page_text:
        results["pass"].append("Geri sayim widget mevcut")

    if "soru" in page_text.lower():
        results["pass"].append("Soru sayisi gosteriliyor")

    for label in ["Gunluk Plan", "Deneme Modu", "Zayif Halka", "Akilli Calisma", "DUS Simulasyon", "Favoriler", "Istatistikler"]:
        if label in page_text:
            results["pass"].append("CTA kart metni: " + label)

    lessons = ["Histoloji", "Protez", "Radyoloji", "Endodonti", "Periodontoloji", "Patoloji", "Fizyoloji"]
    found = 0
    for l in lessons:
        if l in page_text:
            found += 1
    results["pass"].append("Dersler: " + str(found) + "/" + str(len(lessons)) + " goruntuleniyor")

    if results["console_errors"]:
        for err in results["console_errors"][:5]:
            results["warn"].append("Console: " + err[:120])
    else:
        results["pass"].append("Console hatasi yok")

    if results["network_errors"]:
        results["warn"].append(str(len(results['network_errors'])) + " network hatasi")
    else:
        results["pass"].append("Network hatasi yok")

    browser.close()

print(json.dumps(results, ensure_ascii=False))
