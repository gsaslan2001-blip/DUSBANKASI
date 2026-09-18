"""Retry API-failsafe Protez curation pairs with Gemini only.

Reads the latest curation Markdown report, extracts pairs that were preserved due
to provider failure, re-evaluates them through smart_dedup_addon's Gemini router,
applies the addon's structured-evidence gate, and flags newly eliminated rows.
"""

from __future__ import annotations

import asyncio
import concurrent.futures
import json
import re
import sys
import time
from pathlib import Path
from urllib.parse import quote
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[2]
SCRIPTS = ROOT / "scripts"
ADDON = Path(r"C:\Users\FURKAN\AppData\Roaming\Anki2\addons21\smart_dedup_addon")
sys.path.insert(0, str(SCRIPTS))
sys.path.insert(0, str(ADDON))

from config import SUPABASE_KEY, SUPABASE_URL  # noqa: E402
from lib.db_layer import batch_flag  # noqa: E402
import funnel  # noqa: E402
import providers  # noqa: E402


def latest_report() -> Path:
    reports = sorted(
        (ROOT / "raporlar").glob("curation_summary_Protez_*.md"),
        key=lambda p: p.stat().st_mtime,
        reverse=True,
    )
    if not reports:
        raise RuntimeError("Protez curation raporu bulunamadı")
    return reports[0]


def extract_failed_pairs(report: Path) -> list[tuple[str, str, float]]:
    text = report.read_text(encoding="utf-8")
    pairs: list[tuple[str, str, float]] = []
    for section in re.split(r"\n---\n", text):
        if "api-hata-failsafe" not in section:
            continue
        ids = re.findall(r"\*\*SORU [12]\*\* · `([0-9a-f-]{36})`", section)
        sim = re.search(r"\*\*Benzerlik:\*\* (\d+)%", section)
        if len(ids) == 2:
            pairs.append((ids[0], ids[1], int(sim.group(1)) / 100 if sim else 0.0))
    return pairs


def fetch_questions(ids: set[str]) -> dict[str, dict]:
    headers = {"apikey": SUPABASE_KEY, "Authorization": f"Bearer {SUPABASE_KEY}"}
    rows: list[dict] = []
    id_list = sorted(ids)
    for start in range(0, len(id_list), 80):
        chunk = id_list[start : start + 80]
        fields = (
            "id,lesson,unit,question,explanation,correct_answer,quality_flag,"
            "option_a,option_b,option_c,option_d,option_e"
        )
        endpoint = (
            f"{SUPABASE_URL}/rest/v1/questions?select={fields}"
            f"&id=in.({','.join(chunk)})"
        )
        with urlopen(Request(endpoint, headers=headers), timeout=60) as response:
            rows.extend(json.loads(response.read().decode("utf-8")))
    return {row["id"]: row for row in rows}


def main() -> None:
    report = latest_report()
    failed = extract_failed_pairs(report)
    print(f"Rapor: {report.name}", flush=True)
    print(f"Gemini ile yeniden değerlendirilecek çift: {len(failed)}", flush=True)
    if not failed:
        return

    questions = fetch_questions({qid for pair in failed for qid in pair[:2]})
    config = json.loads((ADDON / "config.json").read_text(encoding="utf-8"))
    keys = config.get("gemini_api_keys", [])
    models = config.get("gemini_models", [])

    def decide_one(item: tuple[int, tuple[str, str, float]]) -> tuple[int, dict]:
        index, (id1, id2, sim) = item
        q1, q2 = questions.get(id1), questions.get(id2)
        if not q1 or not q2:
            return index, {"verdict": "keep_both", "confidence": 0.0,
                           "source": "missing-question", "reason": "soru eksik"}
        primary = index % len(models)
        ordered_models = models[primary:] + models[:primary]
        for model in ordered_models:
            for attempt in range(3):
                key = keys[(index + attempt) % len(keys)]
                decision, status, _retry_after = providers.call_gemini_decision(
                    q1, q2, key, model, sim=sim, timeout=90
                )
                if status == "ok" and decision:
                    return index, decision
                if status == "quota":
                    break
                if status == "rate":
                    time.sleep(12 if "3.6" in model or "3.5-flash" == model else 4)
        return index, {"verdict": "keep_both", "confidence": 0.0,
                       "source": "router-bos", "reason": "Gemini şeritleri başarısız"}

    with concurrent.futures.ThreadPoolExecutor(max_workers=len(models)) as pool:
        future_map = {
            pool.submit(decide_one, (index, pair)): index
            for index, pair in enumerate(failed)
        }
        decisions_by_index: dict[int, dict] = {}
        done = 0
        for future in concurrent.futures.as_completed(future_map):
            index, decision = future.result()
            decisions_by_index[index] = decision
            done += 1
            print(
                f"[API {done}/{len(failed)}] {decision.get('source')} "
                f"{decision.get('verdict')} conf={decision.get('confidence', 0):.2f}",
                flush=True,
            )

    actions: list[dict] = []
    log: list[dict] = []
    seen: set[str] = set()
    provider_failures = 0
    for index, (id1, id2, sim) in enumerate(failed, 1):
        q1, q2 = questions.get(id1), questions.get(id2)
        if not q1 or not q2:
            print(f"[{index}/{len(failed)}] soru eksik; atlandı", flush=True)
            continue
        decision = decisions_by_index[index - 1]
        if decision.get("source") == "router-bos":
            provider_failures += 1
        pair = {"q1": q1, "q2": q2, "sim": sim, "flag_type": "kavramsal_kopya"}
        funnel._apply_decision(pair, decision, seen, actions, log)
        print(
            f"[{index}/{len(failed)}] {decision.get('source')} "
            f"{decision.get('verdict')} conf={decision.get('confidence', 0):.2f} "
            f"yeni_ele={len(actions)}",
            flush=True,
        )

    ids_to_action = [
        {
            "id": action["loser_id"],
            "text": action.get("loser_text", ""),
            "text_short": action.get("loser_text_short", ""),
            "explanation": action.get("loser_expl", ""),
            "reason": action.get("reason", "Gemini retry"),
            "flag_type": "kavramsal_kopya",
            "winner_id": action.get("winner_id", ""),
            "winner_text": action.get("winner_text", ""),
            "winner_text_short": action.get("winner_text_short", ""),
        }
        for action in actions
        if questions.get(action["loser_id"], {}).get("quality_flag") != "kavramsal_kopya"
    ]
    ok = err = 0
    if ids_to_action:
        ok, err = asyncio.run(
            batch_flag("Protez", ids_to_action, str(SCRIPTS / "logs" / "flagged_questions.jsonl"))
        )
    print(
        f"TAMAMLANDI failed_pairs={len(failed)} provider_failures={provider_failures} "
        f"new_flags={ok} errors={err}",
        flush=True,
    )


if __name__ == "__main__":
    main()
