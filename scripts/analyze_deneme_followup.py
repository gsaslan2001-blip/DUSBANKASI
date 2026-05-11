import os
import sys
import json
from datetime import datetime, timezone
from pathlib import Path
from typing import List, Dict, Any
from supabase import create_client, Client
from dotenv import load_dotenv

# Absolute path — CWD'den bağımsız çalışır
_ENV_PATH = Path(__file__).parent.parent / ".env.local"
load_dotenv(_ENV_PATH)

SUPABASE_URL = os.environ.get("SUPABASE_URL") or os.environ.get("VITE_SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY") or os.environ.get("VITE_SUPABASE_ANON_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    print("Error: SUPABASE_URL or SUPABASE_KEY not found in .env.local")
    sys.exit(1)

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)


def get_today_mistakes(detailed=False) -> List[Dict[str, Any]]:
    """
    Supabase'den bugün (UTC) yapılan yanlışları çeker.
    question_id bazlı deduplicate edilir; null join kayıtları atlanır.
    """
    today_utc = datetime.now(timezone.utc).strftime("%Y-%m-%d")

    try:
        select_query = "question_id, wrong_choices, questions(id, lesson, unit, question)"

        response = (
            supabase.table("question_stats")
            .select(select_query)
            .gte("updated_at", f"{today_utc} 00:00:00")
            .execute()
        )

        data = response.data
        if not data:
            return []

        mistakes: List[Dict[str, Any]] = []
        seen_ids: set = set()

        for item in data:
            wrong_choices = item.get("wrong_choices") or []
            if not wrong_choices:
                continue

            # UTC timestamp karşılaştırması
            today_wrongs = [
                wc
                for wc in wrong_choices
                if isinstance(wc, dict) and wc.get("timestamp", "").startswith(today_utc)
            ]
            if not today_wrongs:
                continue

            # Null-guard: Supabase join None dönebilir
            q_info = item.get("questions") or {}
            question_id = q_info.get("id") or item.get("question_id")
            lesson = q_info.get("lesson")
            unit = q_info.get("unit")
            question_text = q_info.get("question")

            # Kritik alanlar eksikse atla
            if not question_id or not lesson or not unit or not question_text:
                continue

            # Deduplication
            if question_id in seen_ids:
                continue
            seen_ids.add(question_id)

            if detailed:
                mistakes.append(
                    {
                        "question_id": question_id,
                        "lesson": lesson,
                        "unit": unit,
                        "question_text": question_text,
                        "mistake_count": len(today_wrongs),
                    }
                )
            else:
                mistakes.append(
                    {
                        "question_id": question_id,
                        "lesson": lesson,
                        "unit": unit,
                        "count": len(today_wrongs),
                    }
                )

        return mistakes

    except Exception as e:
        print(f"Database error: {e}")
        return []


def group_mistakes(mistakes: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    grouped: Dict[tuple, int] = {}
    for m in mistakes:
        key = (m["lesson"], m["unit"])
        grouped[key] = grouped.get(key, 0) + m.get("count", m.get("mistake_count", 1))

    result = [{"lesson": k[0], "unit": k[1], "count": v} for k, v in grouped.items()]
    result.sort(key=lambda x: x["count"], reverse=True)
    return result


def main():
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--detailed", action="store_true", help="Return detailed individual mistake info"
    )
    args = parser.parse_args()

    mistakes = get_today_mistakes(detailed=args.detailed)
    if not mistakes:
        print(json.dumps({"status": "no_mistakes", "topics": []}, ensure_ascii=False))
        return

    if args.detailed:
        print(
            json.dumps(
                {
                    "status": "success",
                    "total_mistakes": len(mistakes),
                    "mistakes": mistakes,
                    "analysis_time": datetime.now(timezone.utc).isoformat(),
                },
                ensure_ascii=False,
                indent=2,
            )
        )
    else:
        summary = group_mistakes(mistakes)
        print(
            json.dumps(
                {
                    "status": "success",
                    "total_mistakes": sum(m["count"] for m in summary),
                    "topics": summary,
                    "analysis_time": datetime.now(timezone.utc).isoformat(),
                },
                ensure_ascii=False,
                indent=2,
            )
        )


if __name__ == "__main__":
    main()
