# -*- coding: utf-8 -*-
import os
import requests
import urllib.parse
from config import SUPABASE_URL, SUPABASE_KEY

headers = {
    'apikey': SUPABASE_KEY,
    'Authorization': f'Bearer {SUPABASE_KEY}',
    'Content-Type': 'application/json'
}

# Update all 1x units to 01x in Supabase
updates = {
    '10 - Gram Pozitif Koklar': '010 - Gram Pozitif Koklar',
    '11 - Gram Pozitif Basiller': '011 - Gram Pozitif Basiller',
    '12 - Mikobakteriler': '012 - Mikobakteriler',
    '13 - Gram Negatif Bakteriler': '013 - Gram Negatif Bakteriler',
    '14 - Laktoz Negatif Gram Negatif Enterik Basiller': '014 - Laktoz Negatif Gram Negatif Enterik Basiller',
    '15 - Gram Negatif Kıvrık Bakteriler': '015 - Gram Negatif Kıvrık Bakteriler',
    '16 - Diğer Gram Negatif Basiller': '016 - Diğer Gram Negatif Basiller',
    '17 - Zorunlu Hücre İçiler (Klamidya, Riketsiya)': '017 - Zorunlu Hücre İçiler (Klamidya, Riketsiya)'
}

for old, new in updates.items():
    url = f'{SUPABASE_URL}/rest/v1/questions?lesson=eq.Mikrobiyoloji&unit=eq.{urllib.parse.quote(old)}'
    data = {'unit': new}
    resp = requests.patch(url, headers=headers, json=data)
    if resp.status_code in [200, 204]:
        print(f"Updated {old} -> {new}")
    else:
        print(f"Error updating {old}: {resp.status_code} {resp.text}")