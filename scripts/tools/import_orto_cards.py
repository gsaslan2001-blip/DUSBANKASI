import os
import json
import urllib.request
import sys

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

def anki_request(action, params=None):
    payload = {"action": action, "version": 6}
    if params:
        payload["params"] = params
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request("http://127.0.0.1:8765", data=data, headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req) as resp:
            res = json.loads(resp.read().decode())
            if res.get("error"):
                # We won't flood the stdout if it's just a duplicate error
                err_msg = res["error"]
                if "duplicate" not in str(err_msg).lower():
                    print(f"Anki error ({action}): {err_msg}")
                return None
            return res.get("result")
    except Exception as e:
        print(f"Anki connection error: {e}")
        return None

def main():
    file_path = r"C:\Users\FURKAN\Desktop\orto.txt"
    deck_name = "DUS::🧲 Ortodonti"
    tags = ["ortodonti", "kıyas"]
    
    if not os.path.exists(file_path):
        print(f"Error: File not found at {file_path}")
        sys.exit(1)
        
    print(f"Reading file: {file_path}")
    notes = []
    with open(file_path, "r", encoding="utf-8") as f:
        for idx, line in enumerate(f, 1):
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            
            parts = line.split("\t")
            if len(parts) < 2:
                print(f"Line {idx} does not have at least 2 columns: {line}")
                continue
                
            text = parts[0].strip()
            extra = parts[2].strip() if len(parts) > 2 else ""
            
            notes.append({
                "deckName": deck_name,
                "modelName": "Cloze-MAXXİNG",
                "fields": {
                    "Text": text,
                    "Başlık": "Ortodonti",
                    "Terimler": extra,
                    "Keywords": "",
                    "Görsel": "",
                    "Hikayeleştirme": "",
                    "Mekanizma işleyişi": "",
                    "One by one": "",
                    "Extra": ""
                },
                "tags": tags
            })
            
    print(f"Parsed {len(notes)} notes from file.")
    if not notes:
        print("No notes parsed. Exiting.")
        sys.exit(0)
        
    # Ensure deck exists
    print(f"Ensuring deck exists: {deck_name}")
    create_res = anki_request("createDeck", {"deck": deck_name})
    if create_res is None:
        print("Failed to ensure deck exists. Proceeding anyway.")
        
    # Add notes one by one
    print("Uploading notes to Anki...")
    added_count = 0
    duplicate_count = 0
    
    for idx, note in enumerate(notes, 1):
        # Call addNote for each
        res = anki_request("addNote", {
            "note": {
                "deckName": note["deckName"],
                "modelName": note["modelName"],
                "fields": note["fields"],
                "tags": note["tags"]
            }
        })
        if res:
            added_count += 1
        else:
            duplicate_count += 1
            
    print("\n--- Summary ---")
    print(f"Total parsed: {len(notes)}")
    print(f"Total successfully added: {added_count}")
    print(f"Total duplicates/skipped: {duplicate_count}")

if __name__ == "__main__":
    main()
