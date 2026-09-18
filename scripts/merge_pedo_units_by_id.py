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

headers = {
    'apikey': 'sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3',
    'Authorization': 'Bearer sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3',
    'Content-Type': 'application/json',
    'Prefer': 'return=minimal'
}

TARGET_UNIT_MAP = {
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

print("=== CANLI SUPABASE PEDODONTİ ÜNİTE BİRLEŞTİRME (ID BAZLI BATCH) BAŞLIYOR ===\n")

# 1. Fetch all Pedodonti question IDs and units
all_data = []
offset = 0
step = 1000

while True:
    url = f'https://vblndoyjmkgaeuihydyd.supabase.co/rest/v1/questions?select=id,unit&lesson=ilike.Pedodonti&offset={offset}&limit={step}'
    req = urllib.request.Request(url, headers={'apikey': headers['apikey'], 'Authorization': headers['Authorization']})
    with urllib.request.urlopen(req) as resp:
        batch = json.loads(resp.read())
    if not batch:
        break
    all_data.extend(batch)
    offset += step
    if len(batch) < step:
        break

print(f"Toplam Pedodonti Sorusu Çekildi: {len(all_data)}")

# Group question IDs by old unit name
unit_to_ids = defaultdict(list)
for d in all_data:
    unit_to_ids[d['unit']].append(d['id'])

total_updated = 0

for old_unit, ids in unit_to_ids.items():
    new_unit = TARGET_UNIT_MAP.get(old_unit, old_unit)
    if old_unit == new_unit:
        continue

    print(f"🔄 '{old_unit}' ({len(ids)} soru) ➡️ '{new_unit}' güncellemesi yapılıyor...")
    
    # Process in batches of 50 IDs
    chunk_size = 50
    for i in range(0, len(ids), chunk_size):
        chunk = ids[i:i + chunk_size]
        ids_str = ",".join(str(qid) for qid in chunk)
        url = f"https://vblndoyjmkgaeuihydyd.supabase.co/rest/v1/questions?id=in.({ids_str})"
        
        payload = json.dumps({"unit": new_unit}).encode("utf-8")
        req = urllib.request.Request(url, data=payload, headers=headers, method='PATCH')
        
        try:
            with urllib.request.urlopen(req) as resp:
                total_updated += len(chunk)
        except Exception as e:
            print(f"❌ HATA ({old_unit} Batch {i}): {e}")

print(f"\n✅ Toplam Güncellenen Soru Sayısı: {total_updated}")

print("\n" + "="*60)
print("=== GÜNCELLEME SONRASI CANLI VERİTABANI KONTROLÜ (PROBE) ===")
print("="*60)

all_data_after = []
offset = 0
while True:
    url = f'https://vblndoyjmkgaeuihydyd.supabase.co/rest/v1/questions?select=unit&lesson=ilike.Pedodonti&offset={offset}&limit={step}'
    req = urllib.request.Request(url, headers={'apikey': headers['apikey'], 'Authorization': headers['Authorization']})
    with urllib.request.urlopen(req) as resp:
        batch = json.loads(resp.read())
    if not batch:
        break
    all_data_after.extend(batch)
    offset += step
    if len(batch) < step:
        break

counts = Counter(d.get('unit') for d in all_data_after if d.get('unit'))

print(f"Toplam Pedodonti Sorusu: {len(all_data_after)}")
print(f"Güncel Benzersiz Ünite Sayısı: {len(counts)}\n")

for u_name, c in sorted(counts.items(), key=lambda x: [int(s) if s.isdigit() else s for s in re.split(r'(\d+)', str(x[0]))]):
    print(f"  • {u_name}: {c} soru")
