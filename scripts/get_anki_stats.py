import sqlite3
import glob
import os
import sys
import time
import json
import shutil
import urllib.request
from datetime import datetime

# Reconfigure stdout to support UTF-8 (emojis/unicode)
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except:
        pass

def query_ankiconnect(port, action, params=None):
    payload = {"action": action, "version": 6}
    if params:
        payload["params"] = params
    try:
        req = urllib.request.Request(
            f"http://127.0.0.1:{port}",
            data=json.dumps(payload).encode("utf-8"),
            headers={"Content-Type": "application/json"},
            method="POST"
        )
        with urllib.request.urlopen(req, timeout=5) as r:
            return json.loads(r.read().decode("utf-8")).get("result")
    except Exception as e:
        return None

def main():
    appdata = os.environ.get("APPDATA")
    if not appdata:
        print("APPDATA env var not found")
        return
    
    anki_dir = os.path.join(appdata, "Anki2")
    pattern = os.path.join(anki_dir, "**", "collection.anki2")
    files = glob.glob(pattern, recursive=True)
    
    deck_map = query_ankiconnect(8765, "deckNamesAndIds")
    if not deck_map:
        deck_map = {}
        
    did_to_name = {int(v): k for k, v in deck_map.items()}

    now = time.time()
    midnight = datetime.now().replace(hour=4, minute=0, second=0, microsecond=0).timestamp()
    if now < midnight:
        midnight -= 86400
    midnight_ms = int(midnight * 1000)

    print(f"Querying reviews since local 4:00 AM: {datetime.fromtimestamp(midnight)}")

    for db_path in files:
        if "debug_scripts" in db_path:
            continue
        
        profile_name = os.path.basename(os.path.dirname(db_path))
        print(f"\n--- Checking Profile DB: {profile_name} ---")
        
        temp_db_path = f"temp_collection_{profile_name}.anki2"
        try:
            shutil.copy2(db_path, temp_db_path)
            for ext in ['-wal', '-shm']:
                if os.path.exists(db_path + ext):
                    shutil.copy2(db_path + ext, temp_db_path + ext)
            
            conn = sqlite3.connect(temp_db_path)
            cursor = conn.cursor()
            
            cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='revlog'")
            if not cursor.fetchone():
                print("No revlog table in this DB.")
                conn.close()
                continue
                
            cursor.execute("SELECT count(*), sum(time)/1000.0/60.0 FROM revlog WHERE id >= ?", (midnight_ms,))
            count, total_minutes = cursor.fetchone()
            if not count:
                print("No reviews recorded today in this profile.")
                conn.close()
                continue
                
            print(f"Total reviews today: {count} reviews, study time: {total_minutes:.1f} minutes")
            
            cursor.execute("""
                SELECT c.did, count(r.id), sum(r.time)/1000.0/60.0 
                FROM revlog r
                JOIN cards c ON r.cid = c.id
                WHERE r.id >= ?
                GROUP BY c.did
                ORDER BY count(r.id) DESC
            """, (midnight_ms,))
            
            results = cursor.fetchall()
            print("Breakdown by Deck:")
            for did, cnt, mins in results:
                deck_name = did_to_name.get(did, f"Unknown (ID: {did})")
                print(f" - {deck_name}: {cnt} reviews ({mins:.1f} min)")
                
            conn.close()
        except Exception as e:
            print(f"Error reading {profile_name}: {e}")
        finally:
            for ext in ['', '-wal', '-shm']:
                f_to_rem = temp_db_path + ext
                if os.path.exists(f_to_rem):
                    try:
                        os.remove(f_to_rem)
                    except:
                        pass

if __name__ == "__main__":
    main()
