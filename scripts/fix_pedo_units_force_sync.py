import urllib.request
import json
import sys
import re
from datetime import datetime, timezone
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

# Explicit unit mapping for ALL possible variations found in DB / UI
RAW_UNIT_MAP = {
    # Unit 1
    "Ünite 1 - Dişlerin Oluşum Dönemleri": "1 DİŞLERİN OLUŞUM DÖNEMLERİ",
    "1 DİŞLERİN OLUŞUM DÖNEMLERİ": "1 DİŞLERİN OLUŞUM DÖNEMLERİ",
    
    # Unit 2
    "2 DİŞ SÜRME EVRELERİ": "2 DİŞ SÜRME EVRELERİ",
    
    # Unit 3
    "3 DİŞLERİN GELİŞİM ANOMALİLERİ": "3 DİŞLERİN GELİŞİM ANOMALİLERİ",
    
    # Unit 4
    "4 SÜT DENTİSYONDA ÇÜRÜK": "4 SÜT DENTİSYONDA ÇÜRÜK",
    
    # Unit 5
    "5. Ünite": "5. Ünite",
    
    # Unit 6
    "6 SÜT DİŞİ PULPA HASTALIKLARININ TEDAVİSİNDEKİ AMAÇ": "6 SÜT DİŞİ PULPA HASTALIKLARININ TEDAVİSİNDEKİ AMAÇ",
    
    # Unit 7
    "7. Ünite": "7. Ünite",
    
    # Unit 8
    "8. Ünite": "8. Ünite",
    
    # Unit 9
    "9 BESLENME ve ÇÜRÜK ARASINDAKİ İLİŞKİLER": "9 BESLENME ve ÇÜRÜK ARASINDAKİ İLİŞKİLER",
    "9. Ünite": "9 BESLENME ve ÇÜRÜK ARASINDAKİ İLİŞKİLER",
    
    # Unit 10
    "10 TATLANDIRICILAR": "10 TATLANDIRICILAR",
    "10. Ünite": "10 TATLANDIRICILAR",
    
    # Unit 11
    "11 ÇÜRÜK PROFİLAKSİSİNDE FLORİDLER": "11 ÇÜRÜK PROFİLAKSİSİNDE FLORİDLER",
    
    # Unit 12
    "12 FİSSÜR ÖRTÜCÜLER": "12 FİSSÜR ÖRTÜCÜLER",
    "12. Ünite": "12 FİSSÜR ÖRTÜCÜLER",
    
    # Unit 13
    "13 ÇOCUKLARDA KAPANIŞ İLİŞKİLERİ ve OKLUZAL REHBERLİK": "13 ÇOCUKLARDA KAPANIŞ İLİŞKİLERİ ve OKLUZAL REHBERLİK",
    "13. Ünite": "13 ÇOCUKLARDA KAPANIŞ İLİŞKİLERİ ve OKLUZAL REHBERLİK",
    
    # Unit 14
    "14 DİŞ YARALANMALARININ ETİYOLOJİSİ, GÖRÜLME SIKLIĞI VE DAĞILIMI": "14 DİŞ YARALANMALARI VE TRAVMA",
    "14 SÜT ve SÜREKLİ DİŞLERDE DİŞ ve DESTEK DOKU YARALANMALARI": "14 DİŞ YARALANMALARI VE TRAVMA",
    "14 DİŞ YARALANMALARI VE TRAVMA": "14 DİŞ YARALANMALARI VE TRAVMA",
    
    # Unit 15
    "15 ÇOCUKLARDA GÖRÜLEN GİNGİVAL ve PERODONTAL HASTALIKLAR": "15 ÇOCUKLARDA PERİODONSİYUM VE GİNGİVAL HASTALIKLAR",
    "15 ÇOCUKLARDA PERİODONSİYUMUN ÖZELLİKLERİ": "15 ÇOCUKLARDA PERİODONSİYUM VE GİNGİVAL HASTALIKLAR",
    "15 ÇOCUKLARDA PERİODONSİYUM VE GİNGİVAL HASTALIKLAR": "15 ÇOCUKLARDA PERİODONSİYUM VE GİNGİVAL HASTALIKLAR",
    
    # Unit 16
    "16 ÇOCUKLUK DÖNEMİ HASTALIKLARININ AĞIZ İÇİ BELİRTİLERİ": "16 ÇOCUKLUK DÖNEMİ HASTALIKLARININ AĞIZ İÇİ BELİRTİLERİ",
    "16. Ünite": "16 ÇOCUKLUK DÖNEMİ HASTALIKLARININ AĞIZ İÇİ BELİRTİLERİ",
    
    # Unit 17
    "17 KONJENİTAL KALP HASTALIKLARI": "17 ÇOCUKLARDA SİSTEMİK HASTALIKLAR VE AĞIZ İÇİ BULGULARI",
    "17 ÇOCUKLARDA SİSTEMATİK HASTALIKLARIN AĞIZ İÇİ BULGULARI": "17 ÇOCUKLARDA SİSTEMİK HASTALIKLAR VE AĞIZ İÇİ BULGULARI",
    "17 ÇOCUKLARDA SİSTEMİK HASTALIKLAR VE AĞIZ İÇİ BULGULARI": "17 ÇOCUKLARDA SİSTEMİK HASTALIKLAR VE AĞIZ İÇİ BULGULARI",
    
    # Unit 18
    "18 ANTİBİYOTİKLER": "18 ÇOCUK DİŞ HEKİMLİĞİNDE İLAÇ KULLANIMI VE ANTİBİYOTİKLER",
    "18 ÇOCUK DİŞ HEKİMLİĞİNDE İLAÇ KULLANIMI": "18 ÇOCUK DİŞ HEKİMLİĞİNDE İLAÇ KULLANIMI VE ANTİBİYOTİKLER",
    "18 ÇOCUK DİŞ HEKİMLİĞİNDE İLAÇ KULLANIMI VE ANTİBİYOTİKLER": "18 ÇOCUK DİŞ HEKİMLİĞİNDE İLAÇ KULLANIMI VE ANTİBİYOTİKLER",
    
    # Unit 19
    "19 ÇOCUK HASTADA PSİKOLOJİK YAKLAŞIM ve DAVRANIŞ YÖNLENDİRMESİ": "19 ÇOCUK HASTADA PSİKOLOJİK YAKLAŞIM VE DAVRANIŞ YÖNLENDİRMESİ",
    "19 ÇOCUK HASTADA PSİKOLOJİK YAKLAŞIM VE DAVRANIŞ YÖNLENDİRMESİ": "19 ÇOCUK HASTADA PSİKOLOJİK YAKLAŞIM VE DAVRANIŞ YÖNLENDİRMESİ",
    "19. Ünite": "19 ÇOCUK HASTADA PSİKOLOJİK YAKLAŞIM VE DAVRANIŞ YÖNLENDİRMESİ",
    
    # Unit 20
    "20 ENGELLİ ÇOCUKLARDA SINIFLAMALAR": "20 ENGELLİ ÇOCUKLARDA SINIFLAMA VE TEDAVİ YAKLAŞIMLARI",
    "20 ENGELLİ ÇOCUKLARDA TEDAVİ YAKLAŞIMLARI": "20 ENGELLİ ÇOCUKLARDA SINIFLAMA VE TEDAVİ YAKLAŞIMLARI",
    "20 ENGELLİ ÇOCUKLARDA SINIFLAMA VE TEDAVİ YAKLAŞIMLARI": "20 ENGELLİ ÇOCUKLARDA SINIFLAMA VE TEDAVİ YAKLAŞIMLARI",
    
    # Unit 21
    "21 ÇOCUK DİŞ HEKİMLİĞİNDE LOKAL ANESTEZİ": "21 ÇOCUK DİŞ HEKİMLİĞİNDE LOKAL ANESTEZİ",
    "21. Ünite": "21 ÇOCUK DİŞ HEKİMLİĞİNDE LOKAL ANESTEZİ",
    
    # Unit 22
    "22 SEDASYON ve GENEL ANESTEZİ": "22 SEDASYON ve GENEL ANESTEZİ",
    "22. Ünite": "22 SEDASYON ve GENEL ANESTEZİ",
    
    # Unit 23
    "23. Ünite": "23. Ünite",
    
    # Unit 24
    "24 SÜT DİŞLERİNİN MORFOLOJİK VE HİSTOLOJİK ÖZELLİKLERİ": "24 SÜT DİŞLERİNİN MORFOLOJİK VE HİSTOLOJİK ÖZELLİKLERİ",
    "24. Ünite": "24 SÜT DİŞLERİNİN MORFOLOJİK VE HİSTOLOJİK ÖZELLİKLERİ",
    
    # Unit 25
    "25 1. MİNE": "25 MİNE, DENTİN VE PULPANIN YAPISAL ÖZELLİKLERİ",
    "25 MİNE DENTİN ve PULPANIN YAPISAL ÖZELLİKLERİ": "25 MİNE, DENTİN VE PULPANIN YAPISAL ÖZELLİKLERİ",
    "25 MİNE, DENTİN VE PULPANIN YAPISAL ÖZELLİKLERİ": "25 MİNE, DENTİN VE PULPANIN YAPISAL ÖZELLİKLERİ",
    
    # Unit 26
    "26 BLACK PRENSİPLERİ": "26 SÜT DİŞLERİNDE KAVİTE HAZIRLAMA VE BLACK PRENSİPLERİ",
    "26 SÜT DİŞLERİNDE KAVİTE HAZIRLAMA PRENSİPLERİ": "26 SÜT DİŞLERİNDE KAVİTE HAZIRLAMA VE BLACK PRENSİPLERİ",
    "26 SÜT DİŞLERİNDE KAVİTE HAZIRLAMA VE BLACK PRENSİPLERİ": "26 SÜT DİŞLERİNDE KAVİTE HAZIRLAMA VE BLACK PRENSİPLERİ",
    
    # Unit 27
    "27 ÇOCUK DİŞ HEKİMLİĞİNDE KULLANILAN RESTORATİF MATERYALLER": "27 ÇOCUK DİŞ HEKİMLİĞİNDE KULLANILAN RESTORATİF MATERYALLER",
    
    # Unit 28
    "28 ANTERIOR ve POSTERİOR SÜT DİŞLERİNİN RESTORASYONLARI": "28 ANTERİOR VE POSTERİOR SÜT DİŞLERİNİN RESTORASYONLARI",
    "28 ANTERİOR VE POSTERİOR SÜT DİŞLERİNİN RESTORASYONLARI": "28 ANTERİOR VE POSTERİOR SÜT DİŞLERİNİN RESTORASYONLARI",
    "28. Ünite": "28 ANTERİOR VE POSTERİOR SÜT DİŞLERİNİN RESTORASYONLARI",
    
    # Unit 29
    "29 SÜT DİŞLERİ ÇEKİM ENDİKASYONLARI ve KONTRENDİKASYONLARI": "29 SÜT DİŞLERİ ÇEKİM ENDİKASYONLARI VE KONTRENDİKASYONLARI",
    "29 SÜT DİŞLERİ ÇEKİM ENDİKASYONLARI VE KONTRENDİKASYONLARI": "29 SÜT DİŞLERİ ÇEKİM ENDİKASYONLARI VE KONTRENDİKASYONLARI"
}

print("=== SUPABASE PEDODONTİ ÜNİTE BİRLEŞTİRME VE DELTA SYNC ZAMAN DAMGASI GÜNCELLEMESİ ===\n")

# 1. Fetch ALL Pedodonti questions from Supabase
all_questions = []
offset = 0
step = 1000

while True:
    url = f'https://vblndoyjmkgaeuihydyd.supabase.co/rest/v1/questions?select=id,unit,lesson&lesson=ilike.Pedodonti&offset={offset}&limit={step}'
    req = urllib.request.Request(url, headers={'apikey': headers['apikey'], 'Authorization': headers['Authorization']})
    with urllib.request.urlopen(req) as resp:
        batch = json.loads(resp.read())
    if not batch:
        break
    all_questions.extend(batch)
    offset += step
    if len(batch) < step:
        break

print(f"Toplam Pedodonti Sorusu Çekildi: {len(all_questions)}")

# Group questions by target unit
now_iso = datetime.now(timezone.utc).isoformat()
target_to_ids = defaultdict(list)

for q in all_questions:
    current_u = q.get('unit', '')
    # Match unit number using regex fallback if string not in RAW_UNIT_MAP
    if current_u in RAW_UNIT_MAP:
        target_u = RAW_UNIT_MAP[current_u]
    else:
        m = re.search(r'^(?:Ünite\s+)?(\d+)', current_u)
        if m:
            num = int(m.group(1))
            # Find matching target
            matches = [v for k, v in RAW_UNIT_MAP.items() if re.search(rf'^(?:Ünite\s+)?{num}\b', k)]
            target_u = matches[0] if matches else current_u
        else:
            target_u = current_u
    target_to_ids[target_u].append(q['id'])

print(f"Hedef Benzersiz Ünite Sayısı: {len(target_to_ids)}")

# Update EVERY question in batches with target unit AND new updated_at timestamp!
total_processed = 0

for target_unit, ids in target_to_ids.items():
    print(f"🚀 '{target_unit}' ({len(ids)} soru) -> unit + updated_at güncelleniyor...")
    chunk_size = 50
    for i in range(0, len(ids), chunk_size):
        chunk = ids[i:i + chunk_size]
        ids_str = ",".join(str(qid) for qid in chunk)
        url = f"https://vblndoyjmkgaeuihydyd.supabase.co/rest/v1/questions?id=in.({ids_str})"
        
        payload = json.dumps({
            "unit": target_unit,
            "updated_at": now_iso
        }).encode("utf-8")
        
        req = urllib.request.Request(url, data=payload, headers=headers, method='PATCH')
        try:
            with urllib.request.urlopen(req) as resp:
                total_processed += len(chunk)
        except Exception as e:
            print(f"  ❌ HATA (Batch {i}): {e}")

print(f"\n✅ BAŞARIYLA İŞLENDİ: {total_processed} sorunun unit ve updated_at alanları güncellendi!")

print("\n" + "="*60)
print("=== CANLI DB SON DURUM KONTROLÜ (PROBE) ===")
print("="*60)

all_questions_after = []
offset = 0
while True:
    url = f'https://vblndoyjmkgaeuihydyd.supabase.co/rest/v1/questions?select=unit&lesson=ilike.Pedodonti&offset={offset}&limit={step}'
    req = urllib.request.Request(url, headers={'apikey': headers['apikey'], 'Authorization': headers['Authorization']})
    with urllib.request.urlopen(req) as resp:
        batch = json.loads(resp.read())
    if not batch:
        break
    all_questions_after.extend(batch)
    offset += step
    if len(batch) < step:
        break

counts = Counter(d.get('unit') for d in all_questions_after if d.get('unit'))

print(f"Toplam Pedodonti Sorusu: {len(all_questions_after)}")
print(f"Güncel Benzersiz Ünite Sayısı: {len(counts)}\n")

for u_name, c in sorted(counts.items(), key=lambda x: [int(s) if s.isdigit() else s for s in re.split(r'(\d+)', str(x[0]))]):
    print(f"  • {u_name}: {c} soru")
