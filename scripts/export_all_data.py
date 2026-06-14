import json
import os
import shutil
import urllib.request
import sys
from datetime import datetime, timedelta

sys.path.append(os.path.join(os.path.dirname(__file__), ".."))
from scripts.config import SUPABASE_URL, SUPABASE_KEY

# Sorular için: embedding sütunları hariç — koşum başına ~25 MB (önceki: ~1.2 GB)
TABLE_COLUMNS = {
    "questions": (
        "id,lesson,unit,question,option_a,option_b,option_c,option_d,option_e,"
        "correct_answer,explanation,created_at,updated_at,is_favorite,flagged,"
        "flag_reason,quality_flag,image_url"
    ),
}

TABLES = [
    "questions",
    "question_stats",
    "reference_sources",
    "active_sessions",
    "daily_exams",
    "exam_answers",
    "user_data",
]

RETENTION_DAYS = 14


def fetch_all_from_table(table_name: str) -> list:
    print(f"Downloading {table_name}...")
    cols = TABLE_COLUMNS.get(table_name, "*")
    all_data = []
    offset = 0
    limit = 1000

    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
    }

    while True:
        url = (
            f"{SUPABASE_URL}/rest/v1/{table_name}"
            f"?select={cols}&limit={limit}&offset={offset}"
        )
        req = urllib.request.Request(url, headers=headers)
        try:
            with urllib.request.urlopen(req) as response:
                data = json.loads(response.read())
                all_data.extend(data)
                print(f"  {len(all_data)} rows fetched...")
                if len(data) < limit:
                    break
                offset += limit
        except Exception as e:
            print(f"  ERROR fetching {table_name}: {e}")
            break

    return all_data


def cleanup_old_exports(base_dir: str) -> None:
    cutoff = datetime.now() - timedelta(days=RETENTION_DAYS)
    if not os.path.isdir(base_dir):
        return
    for entry in os.listdir(base_dir):
        full = os.path.join(base_dir, entry)
        if not os.path.isdir(full):
            continue
        try:
            folder_date = datetime.strptime(entry, "%Y-%m-%d")
            if folder_date < cutoff:
                shutil.rmtree(full)
                print(f"  Removed old export: {entry}")
        except ValueError:
            pass  # tarih formatında değil, dokunma


def export_to_json() -> None:
    today = datetime.now().strftime("%Y-%m-%d")
    base_dir = os.path.join(os.getcwd(), "exports")
    export_dir = os.path.join(base_dir, today)
    os.makedirs(export_dir, exist_ok=True)

    for table in TABLES:
        data = fetch_all_from_table(table)
        file_path = os.path.join(export_dir, f"{table}_backup.json")
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        size_kb = os.path.getsize(file_path) / 1024
        print(f"✅ {file_path}  ({size_kb:.0f} KB, {len(data)} rows)")

    cleanup_old_exports(base_dir)
    print(f"\n✅ Export tamamlandı → exports/{today}/")


if __name__ == "__main__":
    if sys.platform == "win32":
        try:
            sys.stdout.reconfigure(encoding="utf-8")
        except Exception:
            pass
    export_to_json()
