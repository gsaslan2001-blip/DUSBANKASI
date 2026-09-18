# -*- coding: utf-8 -*-
import os
import requests
import urllib.parse
from config import SUPABASE_URL, SUPABASE_KEY

headers = {
    'apikey': SUPABASE_KEY,
    'Authorization': f'Bearer {SUPABASE_KEY}',
    'Prefer': 'return=minimal'
}

units = [
    '10 - Gram Pozitif Koklar',
    '11 - Gram Pozitif Basiller',
    '12 - Mikobakteriler',
    '13 - Gram Negatif Bakteriler',
    '14 - Laktoz Negatif Gram Negatif Enterik Basiller',
    '15 - Gram Negatif Kıvrık Bakteriler',
    '16 - Diğer Gram Negatif Basiller',
    '17 - Zorunlu Hücre İçiler (Klamidya, Riketsiya)'
]

for unit in units:
    url = f'{SUPABASE_URL}/rest/v1/questions?select=id,question&lesson=eq.Mikrobiyoloji&unit=eq.{urllib.parse.quote(unit)}'
    resp = requests.get(url, headers=headers)
    if resp.status_code == 200:
        data = resp.json()
        seen = {}
        to_delete = []
        for row in data:
            q = row['question'].strip()
            if q in seen:
                to_delete.append(row['id'])
            else:
                seen[q] = row['id']
                
        if to_delete:
            print(f'{unit}: deleting {len(to_delete)} duplicates...')
            chunk_size = 50
            for i in range(0, len(to_delete), chunk_size):
                chunk = to_delete[i:i+chunk_size]
                ids_str = ",".join(map(str, chunk))
                del_url = f'{SUPABASE_URL}/rest/v1/questions?id=in.({ids_str})'
                del_resp = requests.delete(del_url, headers=headers)
                if del_resp.status_code in [200, 204]:
                    print(f'Deleted chunk of {len(chunk)}')
                else:
                    print(f'Failed to delete: {del_resp.text}')
        else:
            print(f'{unit}: no duplicates found.')
    else:
        print(f'{unit}: Error {resp.status_code}')