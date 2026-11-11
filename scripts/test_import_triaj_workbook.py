"""Offline regression tests for the ExcelMaster transfer format."""

from datetime import datetime
from pathlib import Path
from tempfile import TemporaryDirectory
import unittest

from openpyxl import Workbook
from openpyxl.utils.datetime import CALENDAR_MAC_1904

from import_triaj_workbook import build_package


class WorkbookTransferTests(unittest.TestCase):
    def setUp(self):
        self.temp = TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.file = Path(self.temp.name) / "source.xlsx"
        self.book = Workbook()
        self.book.epoch = CALENDAR_MAC_1904
        self.plan = self.book.active
        self.plan.title = "Tekrar_Plani"
        self.plan["K4"] = "Konu ID"

    def export(self):
        self.book.save(self.file)
        before = self.file.read_bytes()
        payload, summary = build_package(self.file)
        self.assertEqual(self.file.read_bytes(), before)
        return payload["records"], summary

    def test_distinguishes_formulas_zero_and_date_serials(self):
        for index in (5, 6, 7):
            self.plan[f"A{index}"] = "ANATOMI (10 Ünite)"
            self.plan[f"B{index}"] = "Ünite 01 - Kemikler"
            self.plan[f"K{index}"] = f"K{index}"
        self.plan["E5"] = "=D5+7"
        self.plan["C6"] = 1
        self.plan["E6"] = 0
        self.plan["E7"] = datetime(2026, 11, 4)

        records, summary = self.export()

        self.assertEqual(summary["ignored_t3Correct_formula"], 1)
        self.assertEqual([entry["sourceId"] for entry in records], ["K6", "K7"])
        self.assertEqual(records[0]["data"]["t0Date"], "1904-01-02")
        self.assertEqual(records[0]["data"]["sourceInputs"]["t3Correct"], 0)
        self.assertNotIn("t3Score", records[1]["data"])
        self.assertIn("issue", records[1])

    def test_exam_branches_follow_workbook_header_meaning_and_keep_missing_markers(self):
        sheet = self.book.create_sheet("Deneme_Analiz")
        sheet["U1"], sheet["V1"], sheet["W1"], sheet["X1"], sheet["Y1"], sheet["Z1"] = (
            "Çocuk Diş Hekimliği", "Endodonti", "Ortodonti", "Periodontoloji", "Protetik Diş Tedavisi", "Restoratif Diş Tedavisi",
        )
        sheet["A2"], sheet["B2"], sheet["C2"] = "DENEME-01", datetime(2026, 11, 4), "Kaynak"
        sheet["U2"], sheet["V2"], sheet["W2"], sheet["X2"], sheet["Y2"], sheet["Z2"] = 0, 2, 3, 4, 5, 6

        records, _ = self.export()

        data = records[0]["data"]
        self.assertEqual([data["branchNets"][f"B{i}"] for i in range(11, 17)], [4, 3, 0, 2, 6, 5])
        self.assertEqual(data["missingBranches"], [f"B{i:02}" for i in range(1, 11)])
        self.assertEqual(data["clinicalNet"], 20)

    def test_review_log_uses_actual_date_without_inventing_score_breakdown(self):
        self.plan["A5"], self.plan["B5"], self.plan["K5"] = "Anatomi", "Ünite 01 - Kemikler", "K0001"
        self.plan["C5"] = datetime(2026, 11, 1)
        self.plan["O5"] = datetime(2026, 11, 20)
        log = self.book.create_sheet("Tekrar_Kaydi")
        log["A2"], log["B2"], log["C2"], log["D2"] = 1, "K0001 | Ünite 01 - Kemikler", datetime(2026, 11, 4), "Sarı Kova"

        records, _ = self.export()

        topic, review = records
        self.assertEqual(topic["data"]["lastStudiedDate"], "2026-11-04")
        self.assertEqual(topic["data"]["manualDueDate"], "2026-11-20")
        self.assertEqual(topic["data"]["currentBucket"], "YELLOW")
        self.assertNotIn("t3Score", topic["data"])
        self.assertEqual(review["data"]["bucket"], "YELLOW")
        self.assertIn("issue", review)

    def test_percentage_style_distinguishes_full_retention_from_ambiguous_one(self):
        sheet = self.book.create_sheet("Konu_Matrisi")
        for row in (2, 3):
            for column, value in enumerate((f"KM-{row}", "Anatomi", "Konu", f"S{row}", 1, 10, 5, 1), 1):
                sheet.cell(row=row, column=column, value=value)
        sheet["H2"].number_format = "0%"

        records, _ = self.export()

        self.assertEqual(records[0]["data"]["fsrsRetrievabilityR"], 100)
        self.assertNotIn("fsrsRetrievabilityR", records[1]["data"])


if __name__ == "__main__":
    unittest.main()
