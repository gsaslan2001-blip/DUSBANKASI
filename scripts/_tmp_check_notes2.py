import urllib.request, json

req = urllib.request.Request('http://127.0.0.1:8765', data=json.dumps({'action': 'findNotes', 'version': 6, 'params': {'query': 'deck:"DUS::🧲 Ortodonti::002-DENTAL YAPILARIN GELİŞİMİ"'}}).encode())
res = json.loads(urllib.request.urlopen(req).read().decode())
notes = res['result']
if len(notes) > 1:
    req2 = urllib.request.Request('http://127.0.0.1:8765', data=json.dumps({'action': 'notesInfo', 'version': 6, 'params': {'notes': notes[:5]}}).encode())
    info = json.loads(urllib.request.urlopen(req2).read().decode())
    for n in info['result']:
        print(f"Text: {n['fields']['Text']['value'][:30]}... - Extra: {n['fields']['Extra']['value'][:30]}...")
