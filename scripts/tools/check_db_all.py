import os
import urllib.request
import json
import sys
from collections import Counter

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
from config import SUPABASE_URL, SUPABASE_KEY

sys.stdout.reconfigure(encoding='utf-8')

url = f"{SUPABASE_URL}/rest/v1/questions?select=lesson,unit"
headers = {'apikey': SUPABASE_KEY, 'Authorization': f"Bearer {SUPABASE_KEY}"}

data = []
fr = 0
limit = 1000

while True:
    req = urllib.request.Request(f"{url}", headers=headers)
    req.add_header('Range', f"{fr}-{fr+limit-1}")
    res = json.loads(urllib.request.urlopen(req).read())
    data.extend(res)
    if len(res) < limit: break
    fr += limit

print(f"Genel Toplam Soru Sayısı: {len(data)}\n")

c_lessons = Counter([d.get('lesson') for d in data])
for lesson, count in c_lessons.items():
    print(f"📚 {lesson}: {count} Soru")

print("\n(Script bitimi)")
