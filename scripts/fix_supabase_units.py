# -*- coding: utf-8 -*-
import os
import requests
import urllib.parse
from config import SUPABASE_URL, SUPABASE_KEY

rename_map = {
    '01 GRAM POZİTİF KOKLAR': '10 - Gram Pozitif Koklar',
    '02 - GRAM POZİTİF BASİLLER': '11 - Gram Pozitif Basiller',
    'MİKOBAKTERİLER': '12 - Mikobakteriler',
    'GRAM NEGATİF BAKTERİLER': '13 - Gram Negatif Bakteriler',
    '05 - LAKTOZ NEGATİF GRAM NEGATİF ENTERİK BASİLLER': '14 - Laktoz Negatif Gram Negatif Enterik Basiller',
    '05 LAKTOZ NEGATİF GRAM NEGATİF ENTERİK BASİLLER': '14 - Laktoz Negatif Gram Negatif Enterik Basiller',
    '06 GRAM NEGATİF KIVRIK BAKTERİLER': '15 - Gram Negatif Kıvrık Bakteriler',
    '07 - DİĞER GRAM NEGATİF BASİLLER': '16 - Diğer Gram Negatif Basiller',
    '08 - ZORUNLU HÜCRE İÇİLER (KLAMİDYA, RİKETSİYA)': '17 - Zorunlu Hücre İçiler (Klamidya, Riketsiya)',
}

headers = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json",
    "Prefer": "return=minimal"
}

lesson = "Mikrobiyoloji"

for old_name, new_name in rename_map.items():
    print(f"Renaming '{old_name}' -> '{new_name}'")
    url = f"{SUPABASE_URL}/rest/v1/questions?lesson=eq.{urllib.parse.quote(lesson)}&unit=eq.{urllib.parse.quote(old_name)}"
    payload = {"unit": new_name}
    resp = requests.patch(url, headers=headers, json=payload)
    if resp.status_code in [200, 204]:
        print(f"Success!")
    else:
        print(f"Failed: {resp.status_code} {resp.text}")