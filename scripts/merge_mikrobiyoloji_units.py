# -*- coding: utf-8 -*-
"""
DUSBANKASI — Mikrobiyoloji Ünitelerini Birleştirme Scripti

Kullanıcı Direktifi:
1-2-3-4-5 -> 1 Temel Mikrobiyoloji
6-9       -> 2 İmmunoloji
10-17     -> 3 Bakteriler
18-23     -> 4 virüsler
"""
import sys
import json
import urllib.request
import urllib.parse
from collections import Counter

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

headers = {
    'apikey': 'sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3',
    'Authorization': 'Bearer sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3',
    'Content-Type': 'application/json',
    'Prefer': 'count=exact'
}

SUPABASE_URL = "https://vblndoyjmkgaeuihydyd.supabase.co"

# Eski ünite adlarından yeni ünite adlarına eşleme tablosu
TARGET_UNIT_MAP = {
    # 1-2-3-4-5 -> 1 Temel Mikrobiyoloji
    "01 - Bakteri Genel Özellikleri": "1 Temel Mikrobiyoloji",
    "02 - Bakterilerin Çoğalması ve Metabolizması": "1 Temel Mikrobiyoloji",
    "03 - Aşılar": "1 Temel Mikrobiyoloji",
    "04 - Mikroorganizmaları Boyama Yöntemleri": "1 Temel Mikrobiyoloji",
    "05 - Antimikrobiyaller": "1 Temel Mikrobiyoloji",

    # 6-9 -> 2 İmmunoloji
    "06 - İmmünoloji Giriş": "2 İmmunoloji",
    "07 - Kompleman Sistemi": "2 İmmunoloji",
    "08 - Aşırı Duyarlılık Reaksiyonları": "2 İmmunoloji",
    "09 - İmmünoloji ve Neoplazi": "2 İmmunoloji",

    # 10-17 -> 3 Bakteriler
    "010 - Gram Pozitif Koklar": "3 Bakteriler",
    "10 - Gram Pozitif Koklar": "3 Bakteriler",
    "011 - Gram Pozitif Basiller": "3 Bakteriler",
    "11 - Gram Pozitif Basiller": "3 Bakteriler",
    "012 - Mikobakteriler": "3 Bakteriler",
    "12 - Mikobakteriler": "3 Bakteriler",
    "013 - Gram Negatif Bakteriler": "3 Bakteriler",
    "13 - Gram Negatif Bakteriler": "3 Bakteriler",
    "014 - Laktoz Negatif Gram Negatif Enterik Basiller": "3 Bakteriler",
    "14 - Laktoz Negatif Gram Negatif Enterik Basiller": "3 Bakteriler",
    "015 - Gram Negatif Kıvrık Bakteriler": "3 Bakteriler",
    "15 - Gram Negatif Kıvrık Bakteriler": "3 Bakteriler",
    "016 - Diğer Gram Negatif Basiller": "3 Bakteriler",
    "16 - Diğer Gram Negatif Basiller": "3 Bakteriler",
    "017 - Zorunlu Hücre İçiler (Klamidya, Riketsiya)": "3 Bakteriler",
    "17 - Zorunlu Hücre İçiler (Klamidya, Riketsiya)": "3 Bakteriler",

    # 18-23 -> 4 virüsler
    "018 - Virüsler Genel Özellikleri": "4 virüsler",
    "18 - Virüsler Genel Özellikleri": "4 virüsler",
    "019 - DNA Virüsleri": "4 virüsler",
    "19 - DNA Virüsleri": "4 virüsler",
    "020 - RNA Virüsleri": "4 virüsler",
    "20 - RNA Virüsleri": "4 virüsler",
    "021 - Hepatit Virüsleri": "4 virüsler",
    "21 - Hepatit Virüsleri": "4 virüsler",
    "022 - Retrovirüsler": "4 virüsler",
    "22 - Retrovirüsler": "4 virüsler",
    "023 - Gastroenterit Etkeni Virüsler": "4 virüsler",
    "23 - Gastroenterit Etkeni Virüsler": "4 virüsler",
}

def main():
    print("═" * 60)
    print("=== MİKROBİYOLOJİ ÜNİTE BİRLEŞTİRME BAŞLIYOR ===")
    print("═" * 60)

    # 1. Güncelleme öncesi mevcut durumu kontrol et
    before_data = []
    start = 0
    step = 1000
    while True:
        req = urllib.request.Request(
            f"{SUPABASE_URL}/rest/v1/questions?select=id,unit&lesson=ilike.Mikrobiyoloji",
            headers={**headers, 'Range': f'{start}-{start+step-1}'}
        )
        with urllib.request.urlopen(req) as resp:
            batch = json.loads(resp.read().decode('utf-8'))
            if not batch:
                break
            before_data.extend(batch)
            if len(batch) < step:
                break
            start += step

    print(f"Toplam Mikrobiyoloji Soru Sayısı (Başlangıç): {len(before_data)}")
    before_counts = Counter(d.get('unit') for d in before_data)
    print("\n[ÖNCESİ] Mevcut Üniteler:")
    for u, c in sorted(before_counts.items(), key=lambda x: str(x[0])):
        print(f"  • {u}: {c} soru")

    print("\n" + "─" * 60)
    print("Güncelleme işlemi yürütülüyor...")
    print("─" * 60)

    # 2. PATCH işlemlerini yürüt
    for old_unit, new_unit in TARGET_UNIT_MAP.items():
        if old_unit not in before_counts:
            continue

        encoded_old = urllib.parse.quote(old_unit)
        url = f"{SUPABASE_URL}/rest/v1/questions?lesson=eq.Mikrobiyoloji&unit=eq.{encoded_old}"
        payload = json.dumps({"unit": new_unit}).encode("utf-8")
        req = urllib.request.Request(url, data=payload, headers=headers, method='PATCH')

        try:
            with urllib.request.urlopen(req) as resp:
                print(f"✅ GÜNCELLENDİ: '{old_unit}' ({before_counts[old_unit]} soru) ➡️ '{new_unit}'")
        except Exception as e:
            print(f"❌ HATA ({old_unit}): {e}")

    # 3. Güncelleme sonrası probe doğrulaması
    print("\n" + "═" * 60)
    print("=== CANLI SUPABASE DOĞRULAMA (PROBE) ===")
    print("═" * 60)

    after_data = []
    start = 0
    while True:
        req = urllib.request.Request(
            f"{SUPABASE_URL}/rest/v1/questions?select=id,unit&lesson=ilike.Mikrobiyoloji",
            headers={**headers, 'Range': f'{start}-{start+step-1}'}
        )
        with urllib.request.urlopen(req) as resp:
            batch = json.loads(resp.read().decode('utf-8'))
            if not batch:
                break
            after_data.extend(batch)
            if len(batch) < step:
                break
            start += step

    after_counts = Counter(d.get('unit') for d in after_data)
    print(f"Toplam Mikrobiyoloji Soru Sayısı (Bitiş): {len(after_data)}")
    print(f"Kayıp Soru Kontrolü: {'✅ SIFIR KAYIP' if len(before_data) == len(after_data) else '❌ KAYIP TESPİT EDİLDİ!'}")
    print(f"Güncel Benzersiz Ünite Sayısı: {len(after_counts)}\n")

    for u_name, c in sorted(after_counts.items(), key=lambda x: str(x[0])):
        print(f"  • {u_name}: {c} soru")

    print("\n" + "═" * 60)

if __name__ == "__main__":
    main()
