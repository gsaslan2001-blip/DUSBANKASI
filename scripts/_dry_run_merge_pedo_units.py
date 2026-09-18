import urllib.request
import json
import sys
import re
from collections import defaultdict, Counter

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

# 1. Fetch all Pedodonti questions
headers = {
    'apikey': 'sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3',
    'Authorization': 'Bearer sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3'
}

all_data = []
offset = 0
step = 1000

while True:
    url = f'https://vblndoyjmkgaeuihydyd.supabase.co/rest/v1/questions?select=id,unit&lesson=ilike.Pedodonti&offset={offset}&limit={step}'
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as resp:
        batch = json.loads(resp.read())
    if not batch:
        break
    all_data.extend(batch)
    offset += step
    if len(batch) < step:
        break

counts = Counter(d.get('unit') for d in all_data if d.get('unit'))

# Standard Target Mapping for Pedodonti Units 1..29
TARGET_UNIT_MAP = {
    # Existing Old String -> Target Standardized String
    "Ünite 1 - Dişlerin Oluşum Dönemleri": "1 DİŞLERİN OLUŞUM DÖNEMLERİ",
    "2 DİŞ SÜRME EVRELERİ": "2 DİŞ SÜRME EVRELERİ",
    "3 DİŞLERİN GELİŞİM ANOMALİLERİ": "3 DİŞLERİN GELİŞİM ANOMALİLERİ",
    "4 SÜT DENTİSYONDA ÇÜRÜK": "4 SÜT DENTİSYONDA ÇÜRÜK",
    "5. Ünite": "5. Ünite",
    "6 SÜT DİŞİ PULPA HASTALIKLARININ TEDAVİSİNDEKİ AMAÇ": "6 SÜT DİŞİ PULPA HASTALIKLARININ TEDAVİSİNDEKİ AMAÇ",
    "7. Ünite": "7. Ünite",
    "8. Ünite": "8. Ünite",
    "9 BESLENME ve ÇÜRÜK ARASINDAKİ İLİŞKİLER": "9 BESLENME ve ÇÜRÜK ARASINDAKİ İLİŞKİLER",
    "9. Ünite": "9 BESLENME ve ÇÜRÜK ARASINDAKİ İLİŞKİLER",
    "10 TATLANDIRICILAR": "10 TATLANDIRICILAR",
    "10. Ünite": "10 TATLANDIRICILAR",
    "11 ÇÜRÜK PROFİLAKSİSİNDE FLORİDLER": "11 ÇÜRÜK PROFİLAKSİSİNDE FLORİDLER",
    "12 FİSSÜR ÖRTÜCÜLER": "12 FİSSÜR ÖRTÜCÜLER",
    "12. Ünite": "12 FİSSÜR ÖRTÜCÜLER",
    "13 ÇOCUKLARDA KAPANIŞ İLİŞKİLERİ ve OKLUZAL REHBERLİK": "13 ÇOCUKLARDA KAPANIŞ İLİŞKİLERİ ve OKLUZAL REHBERLİK",
    "13. Ünite": "13 ÇOCUKLARDA KAPANIŞ İLİŞKİLERİ ve OKLUZAL REHBERLİK",
    "14 DİŞ YARALANMALARININ ETİYOLOJİSİ, GÖRÜLME SIKLIĞI VE DAĞILIMI": "14 DİŞ YARALANMALARI VE TRAVMA",
    "14 SÜT ve SÜREKLİ DİŞLERDE DİŞ ve DESTEK DOKU YARALANMALARI": "14 DİŞ YARALANMALARI VE TRAVMA",
    "15 ÇOCUKLARDA GÖRÜLEN GİNGİVAL ve PERODONTAL HASTALIKLAR": "15 ÇOCUKLARDA PERİODONSİYUM VE GİNGİVAL HASTALIKLAR",
    "15 ÇOCUKLARDA PERİODONSİYUMUN ÖZELLİKLERİ": "15 ÇOCUKLARDA PERİODONSİYUM VE GİNGİVAL HASTALIKLAR",
    "16 ÇOCUKLUK DÖNEMİ HASTALIKLARININ AĞIZ İÇİ BELİRTİLERİ": "16 ÇOCUKLUK DÖNEMİ HASTALIKLARININ AĞIZ İÇİ BELİRTİLERİ",
    "16. Ünite": "16 ÇOCUKLUK DÖNEMİ HASTALIKLARININ AĞIZ İÇİ BELİRTİLERİ",
    "17 KONJENİTAL KALP HASTALIKLARI": "17 ÇOCUKLARDA SİSTEMİK HASTALIKLAR VE AĞIZ İÇİ BULGULARI",
    "17 ÇOCUKLARDA SİSTEMATİK HASTALIKLARIN AĞIZ İÇİ BULGULARI": "17 ÇOCUKLARDA SİSTEMİK HASTALIKLAR VE AĞIZ İÇİ BULGULARI",
    "18 ANTİBİYOTİKLER": "18 ÇOCUK DİŞ HEKİMLİĞİNDE İLAÇ KULLANIMI VE ANTİBİYOTİKLER",
    "18 ÇOCUK DİŞ HEKİMLİĞİNDE İLAÇ KULLANIMI": "18 ÇOCUK DİŞ HEKİMLİĞİNDE İLAÇ KULLANIMI VE ANTİBİYOTİKLER",
    "19 ÇOCUK HASTADA PSİKOLOJİK YAKLAŞIM ve DAVRANIŞ YÖNLENDİRMESİ": "19 ÇOCUK HASTADA PSİKOLOJİK YAKLAŞIM VE DAVRANIŞ YÖNLENDİRMESİ",
    "19. Ünite": "19 ÇOCUK HASTADA PSİKOLOJİK YAKLAŞIM VE DAVRANIŞ YÖNLENDİRMESİ",
    "20 ENGELLİ ÇOCUKLARDA SINIFLAMALAR": "20 ENGELLİ ÇOCUKLARDA SINIFLAMA VE TEDAVİ YAKLAŞIMLARI",
    "20 ENGELLİ ÇOCUKLARDA TEDAVİ YAKLAŞIMLARI": "20 ENGELLİ ÇOCUKLARDA SINIFLAMA VE TEDAVİ YAKLAŞIMLARI",
    "21 ÇOCUK DİŞ HEKİMLİĞİNDE LOKAL ANESTEZİ": "21 ÇOCUK DİŞ HEKİMLİĞİNDE LOKAL ANESTEZİ",
    "21. Ünite": "21 ÇOCUK DİŞ HEKİMLİĞİNDE LOKAL ANESTEZİ",
    "22 SEDASYON ve GENEL ANESTEZİ": "22 SEDASYON ve GENEL ANESTEZİ",
    "22. Ünite": "22 SEDASYON ve GENEL ANESTEZİ",
    "23. Ünite": "23. Ünite",
    "24 SÜT DİŞLERİNİN MORFOLOJİK VE HİSTOLOJİK ÖZELLİKLERİ": "24 SÜT DİŞLERİNİN MORFOLOJİK VE HİSTOLOJİK ÖZELLİKLERİ",
    "24. Ünite": "24 SÜT DİŞLERİNİN MORFOLOJİK VE HİSTOLOJİK ÖZELLİKLERİ",
    "25 1. MİNE": "25 MİNE, DENTİN VE PULPANIN YAPISAL ÖZELLİKLERİ",
    "25 MİNE DENTİN ve PULPANIN YAPISAL ÖZELLİKLERİ": "25 MİNE, DENTİN VE PULPANIN YAPISAL ÖZELLİKLERİ",
    "26 BLACK PRENSİPLERİ": "26 SÜT DİŞLERİNDE KAVİTE HAZIRLAMA VE BLACK PRENSİPLERİ",
    "26 SÜT DİŞLERİNDE KAVİTE HAZIRLAMA PRENSİPLERİ": "26 SÜT DİŞLERİNDE KAVİTE HAZIRLAMA VE BLACK PRENSİPLERİ",
    "27 ÇOCUK DİŞ HEKİMLİĞİNDE KULLANILAN RESTORATİF MATERYALLER": "27 ÇOCUK DİŞ HEKİMLİĞİNDE KULLANILAN RESTORATİF MATERYALLER",
    "28 ANTERIOR ve POSTERİOR SÜT DİŞLERİNİN RESTORASYONLARI": "28 ANTERİOR VE POSTERİOR SÜT DİŞLERİNİN RESTORASYONLARI",
    "28. Ünite": "28 ANTERİOR VE POSTERİOR SÜT DİŞLERİNİN RESTORASYONLARI",
    "29 SÜT DİŞLERİ ÇEKİM ENDİKASYONLARI ve KONTRENDİKASYONLARI": "29 SÜT DİŞLERİ ÇEKİM ENDİKASYONLARI VE KONTRENDİKASYONLARI"
}

print("=== DRY RUN: ÜNİTE BİRLEŞTİRME PLANI ===\n")

target_counts = defaultdict(int)
changed_rows = 0

for old_unit, count in counts.items():
    new_unit = TARGET_UNIT_MAP.get(old_unit, old_unit)
    target_counts[new_unit] += count
    if old_unit != new_unit:
        changed_rows += count
        print(f"🔄 '{old_unit}' ({count} soru) ➡️ '{new_unit}'")
    else:
        print(f"✅ '{old_unit}' ({count} soru) [Değişiklik Yok]")

print("\n" + "="*60)
print(f"GÜNCELLENECEK TOPLAM SORU SAYISI: {changed_rows}")
print(f"BİRLEŞTİRME SONRASI TOPLAM BENZERSİZ ÜNİTE SAYISI: {len(target_counts)}")
print("="*60)

for u_name, c in sorted(target_counts.items(), key=lambda x: [int(s) if s.isdigit() else s for s in re.split(r'(\d+)', str(x[0]))]):
    print(f"  • {u_name}: {c} soru")
