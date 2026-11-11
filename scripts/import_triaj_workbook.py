# /// script
# requires-python = ">=3.10"
# dependencies = ["openpyxl>=3.1,<4"]
# ///
"""Produce an offline TRİAJ transfer package from one ExcelMaster workbook."""

import argparse
from collections import Counter, defaultdict
from datetime import date, datetime
import json
import math
from pathlib import Path
import re
import unicodedata

try:
    from openpyxl import load_workbook
    from openpyxl.utils.datetime import from_excel
except ImportError as exc:
    raise SystemExit("openpyxl gerekli: uv run --script scripts/import_triaj_workbook.py --help") from exc


BRANCH_LABELS = (
    ("Anatomi", ("anatomi",)),
    ("Histoloji ve Embriyoloji", ("histoloji", "histoloji ve embriyoloji", "histoloji & embriyoloji")),
    ("Fizyoloji", ("fizyoloji",)),
    ("Tıbbi Biyokimya", ("biyokimya", "tibbi biyokimya")),
    ("Tıbbi Mikrobiyoloji", ("mikrobiyoloji", "tibbi mikrobiyoloji")),
    ("Tıbbi Patoloji", ("patoloji", "tibbi patoloji")),
    ("Tıbbi Farmakoloji", ("farmakoloji", "tibbi farmakoloji")),
    ("Tıbbi Biyoloji ve Genetik", ("biyoloji ve genetik", "tibbi biyoloji ve genetik")),
    ("Ağız, Diş ve Çene Cerrahisi", ("cerrahi", "agiz dis ve cene cerrahisi")),
    ("Ağız, Diş ve Çene Radyolojisi", ("radyoloji", "agiz dis ve cene radyolojisi")),
    ("Periodontoloji", ("periodontoloji",)),
    ("Ortodonti", ("ortodonti",)),
    ("Çocuk Diş Hekimliği", ("pedodonti", "cocuk dis hekimligi")),
    ("Endodonti", ("endodonti",)),
    ("Restoratif Diş Tedavisi", ("restoratif", "restoratif dis tedavisi")),
    ("Protetik Diş Tedavisi", ("protez", "protetik", "protetik dis tedavisi")),
)
BRANCH_QUOTAS = (6, 4, 4, 6, 6, 4, 6, 4, 10, 10, 10, 10, 10, 10, 10, 10)
BRANCH_BY_LABEL = {
    alias: (f"B{index:02}", label)
    for index, (label, aliases) in enumerate(BRANCH_LABELS, 1)
    for alias in aliases
}
BUCKETS = {
    "yesil kova": ("GREEN", "P4_LOW"),
    "sari kova": ("YELLOW", "P2_HIGH"),
    "kirmizi kova": ("RED", "P1_CRITICAL"),
    "t+3 bekliyor": ("NONE", "P3_MEDIUM"),
}
PROTOCOL_CATEGORIES = {1: "Dikkat", 2: "Çeldirici", 3: "Bilgi", 4: "Muhakeme", 5: "Muhakeme"}
OLD_CATEGORIES = ("Bilgi", "Muhakeme", "Dikkat", "Çeldirici")


def normalized(value):
    plain = unicodedata.normalize("NFD", str(value or "").casefold()).replace("ı", "i")
    return " ".join("".join(char for char in plain if not unicodedata.combining(char)).replace(",", "").split())


def branch(value):
    return BRANCH_BY_LABEL.get(normalized(value))


def raw(cell):
    """Read authored cells only. Date-typed numbers cannot become scores."""
    return None if getattr(cell, "data_type", None) in ("f", "e") else cell.value


def numeric(value, minimum=None, maximum=None):
    if type(value) not in (int, float) or not math.isfinite(value):
        return None
    if (minimum is not None and value < minimum) or (maximum is not None and value > maximum):
        return None
    return value


def count(value, maximum=None):
    number = numeric(value, 0, maximum)
    return int(number) if number is not None and int(number) == number else None


def calendar(value, epoch=None):
    if isinstance(value, datetime):
        return value.date().isoformat()
    if isinstance(value, date):
        return value.isoformat()
    if isinstance(value, str):
        try:
            return date.fromisoformat(value.strip()).isoformat()
        except ValueError:
            return None
    serial = count(value, 2_958_465)
    if not epoch or serial is None or serial < 1:
        return None
    try:
        converted = from_excel(serial, epoch=epoch)
    except (ValueError, OverflowError):
        return None
    return converted.date().isoformat() if isinstance(converted, datetime) else None


def text(value):
    return str(value).strip() if value is not None else ""


def authored(row, columns):
    return {key: raw(row[column - 1]) for key, column in columns.items()}


def record(kind, source_id, data, issue=None, source="excel-master"):
    item = {"kind": kind, "source": source, "sourceId": text(source_id), "data": data}
    if issue:
        item["issue"] = issue
    return item


def rows(book, sheet, start, width):
    if sheet in book:
        yield from book[sheet].iter_rows(min_row=start, max_col=width)


def topic_selection(value):
    topic_id, separator, title = text(value).partition(" | ")
    return (topic_id, title) if separator else ("", "")


def review_decisions(book):
    decisions = defaultdict(list)
    archived = []
    for row_index, row in enumerate(rows(book, "Tekrar_Kaydi", 2, 4), 2):
        source_id, selection, day, decision = map(raw, row)
        if not any(value is not None for value in (selection, day, decision)):
            continue
        topic_id, title = topic_selection(selection)
        date_value = calendar(day, book.epoch)
        bucket = BUCKETS.get(normalized(decision))
        if topic_id and date_value and bucket:
            decisions[topic_id].append((date_value, bucket))
        archived.append(record("reviewDecision", source_id if source_id is not None else f"row-{row_index}", {
            "topicId": topic_id, "topicTitle": title, "date": date_value,
            "bucket": bucket[0] if bucket else None, "originalDecision": decision, "originalSelection": selection, "originalDate": day,
        }, "Puan ayrıntısı bulunmayan özgün tekrar kararı."))
    return decisions, archived


def plan_entries(book, decisions, summary):
    columns = {
        "subjectId": 1, "title": 2, "t0Date": 3, "t3Correct": 5, "topicCode": 11,
        "manualDueDate": 15, "t14Correct": 20, "repairCorrect": 21,
    }
    for row in rows(book, "Tekrar_Plani", 5, 21):
        if not raw(row[10]):
            continue
        for key, column in (("t3Correct", 5), ("t14Correct", 20), ("repairCorrect", 21)):
            if getattr(row[column - 1], "data_type", None) == "f":
                summary[f"ignored_{key}_formula"] += 1
        fields = authored(row, columns)
        topic_id = text(fields["topicCode"])
        history = decisions.get(topic_id, [])
        if not history and all(fields[name] is None for name in ("t0Date", "manualDueDate", "t3Correct", "t14Correct", "repairCorrect")):
            continue

        t0 = calendar(fields["t0Date"], book.epoch)
        manual_due = calendar(fields["manualDueDate"], book.epoch)
        last_date = max((day for day, _ in history), default=None)
        latest = {bucket for day, bucket in history if day == last_date}
        conflicting = len(latest) > 1
        bucket, priority = next(iter(latest)) if len(latest) == 1 else ("NONE", "P3_MEDIUM")
        issue = None
        if conflicting:
            issue = "Aynı tarihte birbirini tutmayan tekrar kararları var."
        elif fields["t0Date"] is not None and not t0:
            issue = "T+0 giriş tarihi geçersiz."
        elif fields["manualDueDate"] is not None and not manual_due:
            issue = "Elle hedef tarihi geçersiz."
        if issue is None and not (t0 or last_date):
            issue = "Puanın gerçek test tarihi kaynakta doğrulanamadı."

        data = {
            "id": topic_id, "topicCode": topic_id, "subjectId": text(fields["subjectId"]), "title": text(fields["title"]),
            "subtopics": [], "currentBucket": bucket, "priority": priority,
            "status": "DISCHARGED" if bucket == "GREEN" else ("TRIAGED" if bucket != "NONE" else "T0_DONE"),
            "discharged": bucket == "GREEN", "createdAt": t0 or last_date or "", "updatedAt": last_date or t0 or "",
            "reviewCount": len(set(history)),
            "sourceInputs": {key: fields[key] for key in ("t0Date", "manualDueDate", "t3Correct", "t14Correct", "repairCorrect")},
        }
        for key, value in (("t0Date", t0), ("lastStudiedDate", last_date), ("manualDueDate", manual_due)):
            if value:
                data[key] = value
        # The review log has an actual day and bucket but no test stage or
        # breakdown. Keep worksheet scores as evidence without fabricating it.
        yield record("topic", topic_id, data, issue)


def exam_entries(book, parameters):
    source_rows = iter(rows(book, "Deneme_Analiz", 1, 26))
    header = next(source_rows, ())
    if not header:
        return
    columns = [(idx, branch(raw(cell))) for idx, cell in enumerate(header[10:], 10)]
    for row_index, row in enumerate(source_rows, 2):
        source_id, day, institution, difficulty = map(raw, row[:4])
        entered = [(info, raw(row[idx])) for idx, info in columns if raw(row[idx]) is not None]
        if day is None and institution is None and difficulty is None and not entered:
            continue
        date_value = calendar(day, book.epoch)
        branch_nets = {}
        invalid_branch = False
        for info, value in entered:
            if not info:
                invalid_branch = True
                continue
            code, _ = info
            quota = BRANCH_QUOTAS[int(code[1:]) - 1]
            if code in branch_nets or numeric(value, -quota / 4, quota) is None:
                invalid_branch = True
                continue
            branch_nets[code] = value
        missing = [f"B{idx:02}" for idx in range(1, 17) if f"B{idx:02}" not in branch_nets]
        basic = sum(value for code, value in branch_nets.items() if int(code[1:]) <= 8)
        clinical = sum(value for code, value in branch_nets.items() if int(code[1:]) > 8)
        total = basic + clinical
        all_nets = {f"B{idx:02}": branch_nets.get(f"B{idx:02}", 0) for idx in range(1, 17)}
        data = {
            "id": text(source_id), "date": date_value, "institution": text(institution),
            "branchNets": all_nets, "missingBranches": missing,
            "basicNet": basic, "clinicalNet": clinical, "totalNet": total,
            "targetDiff": total - parameters.get("targetTotalNet", 108),
            "accuracyPercent": round(total / 120 * 100, 1),
            "adccStatus": "ELİT" if total >= parameters.get("adccEliteThreshold", 100) else "GELİŞİM",
            "sourceDifficulty": difficulty, "originalDate": day,
            "sourceBranches": {text(raw(header[idx])): raw(row[idx]) for idx, _ in columns if raw(row[idx]) is not None},
        }
        issue = None if source_id and date_value and entered and not invalid_branch else "Deneme kimliği, tarihi veya analitik branş girdileri doğrulanamadı."
        yield record("exam", source_id or f"row-{row_index}", data, issue)


def ratio(cell):
    value = numeric(raw(cell), 0, 100)
    if value is None:
        return None
    if "%" in cell.number_format:
        return value * 100 if value <= 1 else None
    # A literal 1 in an unformatted input can be either 1% or 100%.
    return value if value > 1 or value == 0 else None


def error_entries(book, cached):
    columns = {
        "id": 1, "date": 2, "source": 3, "questionSummary": 4, "branch": 5, "semanticCode": 6,
        "errorType": 7, "distractorAnalysis": 8, "ankiClozeText": 9, "sourceR": 10,
        "mockExamId": 16, "topicSelection": 17, "sourceOutcome": 22,
    }
    cached_rows = rows(cached, "Semantik_Hata_Analizi", 2, 14)
    for row_index, (row, cached_row) in enumerate(zip(rows(book, "Semantik_Hata_Analizi", 2, 22), cached_rows, strict=True), 2):
        fields = authored(row, columns)
        if all(value is None for key, value in fields.items() if key != "id"):
            continue
        source_id = text(fields["id"])
        date_value = calendar(fields["date"], book.epoch)
        branch_info = branch(fields["branch"])
        error_label = text(fields["errorType"])
        tip = re.match(r"^tip\s*([1-5])(?:\b|:)", error_label, flags=re.I)
        protocol_type = int(tip.group(1)) if tip else None
        error_type = PROTOCOL_CATEGORIES.get(protocol_type) or next((label for label in OLD_CATEGORIES if normalized(label) == normalized(error_label)), None)
        topic_id, topic_title = topic_selection(fields["topicSelection"])
        legacy_score = numeric(cached_row[13].value)
        cloze = text(fields["ankiClozeText"])
        data = {
            **fields, "id": source_id, "date": date_value, "questionSummary": text(fields["questionSummary"]),
            "source": text(fields["source"]), "branchCode": branch_info[0] if branch_info else None,
            "branchName": branch_info[1] if branch_info else text(fields["branch"]),
            "subtopic": topic_title, "topicTitle": topic_title, "subjectName": text(fields["branch"]),
            "semanticCode": text(fields["semanticCode"]), "errorType": error_type,
            "distractorAnalysis": text(fields["distractorAnalysis"]), "ankiClozeStatus": "Eklendi" if cloze else "Bekliyor",
            "swspsScore": legacy_score if legacy_score is not None else 0,
            "scoreVersion": "legacy", "scoreUnavailable": legacy_score is None,
            "originalErrorType": error_label, "originalDate": fields["date"],
        }
        for key, value in (("topicId", topic_id), ("protocolType", protocol_type), ("ankiClozeText", cloze),
                           ("mockExamId", text(fields["mockExamId"])), ("legacyScore", legacy_score),
                           ("legacyScoreSource", "ExcelMaster Semantik_Hata_Analizi!N" if legacy_score is not None else None)):
            data.pop(key, None)
            if value is not None and value != "":
                data[key] = value
        issue = None if source_id and date_value and branch_info and error_type and data["questionSummary"] else "Hata kaydının kimliği, tarihi, branşı, türü veya soru özeti eksik."
        yield record("error", source_id or f"row-{row_index}", data, issue)


def taxonomy_entries(book):
    for row in rows(book, "Konu_Matrisi", 2, 10):
        source_id, lesson, topic, semantic_code, weight, stability, difficulty, _, solved, correct = map(raw, row)
        if not source_id and not semantic_code:
            continue
        info = branch(lesson)
        data = {
            "id": text(source_id), "branchCode": info[0] if info else None,
            "branchName": info[1] if info else text(lesson), "mainTopic": text(topic), "subtopic": "",
            "semanticCode": text(semantic_code), "dusWeight": numeric(weight, 0),
            "fsrsStabilityS": numeric(stability, 0), "fsrsDifficultyD": numeric(difficulty, 1, 10),
            "sourceSolved": solved, "sourceCorrect": correct, "sourceR": raw(row[7]),
        }
        retention = ratio(row[7])
        if retention is not None:
            data["fsrsRetrievabilityR"] = retention
        issue = None if info and semantic_code and all(data[key] is not None for key in ("dusWeight", "fsrsStabilityS", "fsrsDifficultyD")) else "Taksonomi kaydının branşı veya FSRS girdisi doğrulanamadı."
        yield record("taxonomy", source_id or semantic_code, data, issue)


def focus_entries(book):
    for row_index, row in enumerate(rows(book, "TickTick_Pomodoro", 6, 8), 6):
        day, _, pomodoros, stopwatch, minutes, _, _, notes = map(raw, row)
        if day is None and minutes is None:
            continue
        date_value = calendar(day, book.epoch)
        focus_minutes = numeric(minutes, 0)
        issue = None if date_value and focus_minutes is not None else "Odak kaydının tarihi veya süresi geçersiz."
        yield record("focus", date_value or f"row-{row_index}", {
            "date": date_value, "minutes": focus_minutes, "sourcePomodoros": pomodoros,
            "sourceStopwatch": stopwatch, "notes": notes, "originalDate": day, "originalMinutes": minutes,
        }, issue)


def question_entries(book):
    question_formats = ("Klinik Vaka / Senaryo", "Öncüllü / Ayrım Sorusu", "Spot / Bilgi Sorusu",
                        "ÖSYM Çıkmış Sorular", "Komplikasyon Yönetimi")
    for row_index, row in enumerate(rows(book, "Gunluk_Log", 2, 14), 2):
        source_id, day, area, lesson, topic, source, total, correct, wrong, empty, _, _, minutes, _ = map(raw, row)
        if all(value is None for value in (day, area, lesson, topic, source, total, correct, wrong, empty, minutes)):
            continue
        date_value = calendar(day, book.epoch)
        info = branch(lesson)
        source_inputs = {
            "date": day, "total": total, "correct": correct, "wrong": wrong, "empty": empty, "minutes": minutes,
        }
        total, correct, wrong, empty = (count(value) for value in (total, correct, wrong, empty))
        duration = numeric(minutes, 0)
        fmt = next((label for label in question_formats if normalized(label) == normalized(area)), None)
        complete_counts = total and None not in (correct, wrong, empty) and correct + wrong + empty == total
        data = {
            "id": text(source_id), "date": date_value, "sourceBook": text(source), "branchCode": info[0] if info else None,
            "branchName": info[1] if info else text(lesson), "semanticCode": "", "questionFormat": fmt,
            "totalQuestions": total, "correct": correct, "wrong": wrong, "empty": empty,
            "net": correct - wrong / 4 if complete_counts else None,
            "accuracyPercent": round(correct / total * 100, 1) if complete_counts else None,
            "durationMinutes": duration, "speedSecondsPerQuestion": round(duration * 60 / total, 1) if total and duration is not None else None,
            "notes": text(topic), "sourceArea": area, "sourceInputs": source_inputs,
        }
        issue = None if source_id is not None and date_value and info and fmt and complete_counts and duration is not None else "Soru günlüğünün kimliği, branşı, soru biçimi, sayıları veya süresi doğrulanamadı."
        yield record("questionLog", source_id if source_id is not None else f"row-{row_index}", data, issue)


def snapshot_data(day, reviews, retention, target, new, learning, young, mature, minutes):
    card_counts = (new, learning, young, mature)
    data = {
        "lastSyncDate": day, "dailyReviewCount": reviews,
        "source": "excelmaster", "targetRetentionPercent": target,
        "totalCards": sum(card_counts) if None not in card_counts else None,
        "newCards": new, "learningCards": learning, "youngCards": young, "matureCards": mature,
        "branchStats": [],
    }
    if retention is not None:
        data["overallRetentionPercent"] = retention
    if minutes is not None:
        data["sourceMinutes"] = minutes
        if reviews:
            data["averageTimeSecondsPerCard"] = minutes * 60 / reviews
    return data


def anki_branch(label, total, new, learning, young, mature):
    info = branch(label)
    counts = [count(value) for value in (total, new, learning, young, mature)]
    if not info or None in counts:
        return None
    code, name = info
    return dict(zip(
        ("branchCode", "branchName", "totalCards", "newCards", "learningCards", "youngCards", "matureCards"),
        (code, name, *counts),
    ))


def anki_workbook_entries(book):
    daily = []
    branches = []
    for row_index, row in enumerate(rows(book, "Anki_FSRS_Takip", 2, 19), 2):
        label, total, new, _, learning, young, mature = map(raw, row[12:19])
        branch_entry = anki_branch(label, total, new, learning, young, mature)
        if branch_entry is not None:
            branches.append(branch_entry)
        day, reviews, _, _, _, new, learning, mature, young, minutes = map(raw, row[:10])
        if day is None:
            continue
        date_value = calendar(day, book.epoch)
        values = snapshot_data(date_value, count(reviews), ratio(row[2]), ratio(row[3]), count(new), count(learning), count(young), count(mature), numeric(minutes, 0))
        issue = None if all(value is not None for value in values.values()) else "Anki kayıt tarihi, kart sayısı veya hedef oranı eksik."
        daily.append(record("ankiSnapshot", date_value or f"row-{row_index}", values, issue))
    latest = max((entry for entry in daily if "issue" not in entry), key=lambda entry: entry["sourceId"], default=None)
    if latest:
        latest["data"]["branchStats"] = sorted(branches, key=lambda item: item["branchCode"])
    yield from daily


def json_anki_entry(path, target):
    data = json.loads(path.read_text(encoding="utf-8-sig"))
    today, summary = data["today"], data["summary"]
    timestamp = text(data["timestamp"])
    timestamp_day, day = calendar(timestamp[:10]), calendar(today["date"])
    retention = numeric(today["retention"], 0, 1)
    values = snapshot_data(
        timestamp if day and day == timestamp_day else None,
        count(today["reviews"]), retention * 100 if retention is not None else None, target,
        count(summary["new"]), count(summary["learning"]), count(summary["young"]), count(summary["mature"]),
        numeric(today.get("minutes"), 0),
    )
    values["totalCards"] = count(summary["total"])
    branches = (anki_branch(item.get("branch"), item.get("total"), item.get("new"),
                            item.get("learning"), item.get("young"), item.get("mature")) for item in data.get("branches", []))
    values["branchStats"] = sorted((item for item in branches if item is not None), key=lambda item: item["branchCode"])
    values["sourcePayload"] = data
    issue = None if all(value is not None for value in values.values()) else "Anki JSON tarihi veya sayaçları doğrulanamadı."
    return record("ankiSnapshot", timestamp or "invalid-timestamp", values, issue, source="anki-snapshot")


def calendar_json_entries(path):
    data = json.loads(path.read_text(encoding="utf-8-sig"))
    for plan in data["plans"]:
        for review in plan["reviews"]:
            day = calendar(review.get("completed_date"))
            decision = BUCKETS.get(normalized(review.get("result")))
            if not review.get("id") or not day or not decision:
                continue
            yield record("reviewDecision", f"{plan['id']}:{review['id']}", {
                "subjectName": plan["branch"], "topicTitle": plan["unit"], "date": day,
                "bucket": decision[0], "sourcePayload": review,
            }, "Takvim JSON kaydı puan ayrıntısı olmadan arşivlendi.", source="review-calendar")


def parameters_from_book(book):
    if "Parametreler_Ayar" not in book:
        return {}
    sheet = book["Parametreler_Ayar"]
    fields = {
        "targetBasicNet": numeric(raw(sheet["G2"]), 0, 40),
        "targetClinicalNet": numeric(raw(sheet["G3"]), 0, 80),
        "targetTotalNet": numeric(raw(sheet["G4"]), 0, 120),
        "targetFsrsRetention": ratio(sheet["G5"]),
        "examDate": calendar(raw(sheet["G6"]), book.epoch),
        "dailyUnitCapacity": count(raw(sheet["Q9"]), 100) or None,
    }
    return {key: value for key, value in fields.items() if value is not None}


def json_default(value):
    if isinstance(value, (datetime, date)):
        return value.isoformat()
    return str(value)


def build_package(path, review_calendar=None, anki_snapshot=None):
    book = load_workbook(path, read_only=True, data_only=False, keep_links=False)
    cached = None
    try:
        cached = load_workbook(path, read_only=True, data_only=True, keep_links=False)
        if "Tekrar_Plani" not in book or raw(book["Tekrar_Plani"]["K4"]) != "Konu ID":
            raise ValueError("ExcelMaster Tekrar_Plani/Konu ID başlığı bulunamadı.")
        summary = Counter()
        decisions, review_archive = review_decisions(book)
        parameters = parameters_from_book(book)
        entries = [
            *plan_entries(book, decisions, summary), *review_archive, *exam_entries(book, parameters),
            *error_entries(book, cached), *taxonomy_entries(book), *question_entries(book),
            *focus_entries(book), *anki_workbook_entries(book),
        ]
        if parameters:
            entries.append(record("parameters", "settings", parameters))
        if review_calendar:
            entries.extend(calendar_json_entries(review_calendar))
        if anki_snapshot:
            entries.append(json_anki_entry(anki_snapshot, parameters.get("targetFsrsRetention", 90)))
        counts = Counter(entry["kind"] for entry in entries)
        summary.update({"records": len(entries), "rows_needing_review": sum("issue" in entry for entry in entries)})
        return {"version": "excel-master-v1", "records": entries}, {"by_kind": dict(counts), **summary}
    finally:
        if cached is not None:
            cached.close()
        book.close()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("workbook", type=Path)
    output_mode = parser.add_mutually_exclusive_group(required=True)
    output_mode.add_argument("--dry-run", action="store_true", help="Yalnızca sayım, dosya yazılmaz.")
    output_mode.add_argument("--output", type=Path, help="Tarayıcıda açılacak yeni JSON dosyası.")
    parser.add_argument("--review-calendar", type=Path, help="İsteğe bağlı, özgün takvim JSON kaynağı.")
    parser.add_argument("--anki-snapshot", type=Path, help="İsteğe bağlı, özgün Anki snapshot JSON kaynağı.")
    args = parser.parse_args()
    try:
        payload, summary = build_package(args.workbook, args.review_calendar, args.anki_snapshot)
        if args.output:
            serialized = json.dumps(payload, ensure_ascii=False, indent=2, default=json_default, allow_nan=False)
            with args.output.open("x", encoding="utf-8") as stream:
                stream.write(serialized + "\n")
        print(json.dumps(summary, ensure_ascii=False, indent=2))
    except (ValueError, KeyError, TypeError, OSError) as exc:
        parser.exit(1, f"Aktarım hazırlanamadı: {exc}\n")


if __name__ == "__main__":
    main()
