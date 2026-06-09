import os
import re
import json
import urllib.request

base_dir = r"C:\Users\FURKAN\Desktop\DUS\Ortodonti\Ortodonti Ünite PDF"
parent_deck = "DUS::🧲 Ortodonti"

def create_deck(deck_name):
    payload = {
        "action": "createDeck",
        "version": 6,
        "params": {
            "deck": deck_name
        }
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request("http://127.0.0.1:8765", data=data, headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read().decode())

# First, ensure parent deck exists
create_deck(parent_deck)

files = os.listdir(base_dir)
for f in files:
    if f.endswith(".pdf"):
        # Pattern: Ünite X - NAME.pdf
        m = re.match(r'Ünite\s+(\d+)\s*-\s*(.+)\.pdf', f, re.IGNORECASE)
        if m:
            unit_num = int(m.group(1))
            unit_name = m.group(2).strip()
            
            # Format unit number as 00X
            formatted_num = f"{unit_num:03d}"
            
            # Special case for "Ek Bilgiler" to match user's prompt capitalization if needed, 
            # but using the PDF name is safer.
            # Example: 001-BÜYÜME ve GELİŞİM
            deck_name = f"{parent_deck}::{formatted_num}-{unit_name}"
            
            print(f"Creating deck: {deck_name}")
            create_deck(deck_name)

print("All decks created successfully.")
