import urllib.request, json
def req(action, params={}):
    data = json.dumps({'action': action, 'version': 6, 'params': params}).encode('utf-8')
    r = urllib.request.Request('http://127.0.0.1:8765', data=data)
    try:
        res = json.loads(urllib.request.urlopen(r).read().decode('utf-8'))
        return res.get('result')
    except Exception as e:
        print(f"Hata ({action}): {e}")
        return None

merges = [
    {
        'old_decks': ['DUS::🔬 Histoloji & Embriyoloji::02-Dokular::01-Epitel Doku', 'DUS::🔬 Histoloji & Embriyoloji::02-Dokular::02-Bağ Doku'],
        'target': 'DUS::🔬 Histoloji & Embriyoloji::02-Dokular::01-Epitel ve Bağ Dokusu'
    },
    {
        'old_decks': ['DUS::🔬 Histoloji & Embriyoloji::02-Dokular::03-Yağ Dokusu', 'DUS::🔬 Histoloji & Embriyoloji::02-Dokular::04-Kıkırdak Dokusu'],
        'target': 'DUS::🔬 Histoloji & Embriyoloji::02-Dokular::03-Yağ ve Kıkırdak Dokusu'
    }
]

for m in merges:
    target = m['target']
    req('createDeck', {'deck': target})
    for old in m['old_decks']:
        # Find cards in old deck
        cards = req('findCards', {'query': f'deck:"{old}"'})
        if cards:
            req('changeDeck', {'cards': cards, 'deck': target})
            print(f'Moved {len(cards)} cards from {old} to {target}')
        else:
            print(f'No cards in {old}')
        # Delete old deck
        req('deleteDecks', {'decks': [old], 'cardsToo': False})
        print(f'Deleted old deck: {old}')
print('Done!')
