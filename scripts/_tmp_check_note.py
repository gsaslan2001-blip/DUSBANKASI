import urllib.request, json

req = urllib.request.Request('http://127.0.0.1:8765', data=json.dumps({'action': 'findNotes', 'version': 6, 'params': {'query': 'deck:"DUS::🧲 Ortodonti::004-ANKRAJ"'}}).encode())
res = json.loads(urllib.request.urlopen(req).read().decode())
notes = res['result']
if notes:
    req2 = urllib.request.Request('http://127.0.0.1:8765', data=json.dumps({'action': 'notesInfo', 'version': 6, 'params': {'notes': [notes[0]]}}).encode())
    info = json.loads(urllib.request.urlopen(req2).read().decode())
    print(json.dumps(info['result'][0]['fields'], ensure_ascii=False, indent=2))
