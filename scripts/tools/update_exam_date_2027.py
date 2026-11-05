from pathlib import Path

# 1. Update src/App.tsx
p_app = Path('src/App.tsx')
with open(p_app, 'r', encoding='utf-8') as f:
    text_app = f.read()

text_app_norm = text_app.replace('\r\n', '\n')
text_app_norm = text_app_norm.replace('DUS 2026/2', 'DUS 2027')

with open(p_app, 'w', encoding='utf-8') as f:
    f.write(text_app_norm)

print("App.tsx updated to DUS 2027!")

# 2. Update src/lib/__tests__/projections.test.ts
p_test = Path('src/lib/__tests__/projections.test.ts')
with open(p_test, 'r', encoding='utf-8') as f:
    text_test = f.read()

# 2026-05-30'dan 2027-10-24'e gün farkı:
# 2026-05-30 -> 2026-10-27: 150 gün
# 2026-10-27 -> 2027-10-27: 365 gün -> 2027-10-24: 365 - 3 = 362 gün
# Toplam: 150 - 3 (Ekim 27->24) + 365 = 512 gün!

text_test_norm = text_test.replace('\r\n', '\n')
text_test_norm = text_test_norm.replace("expect(DUS_EXAM_DATE).toBe('2026-10-27')", "expect(DUS_EXAM_DATE).toBe('2027-10-24')")
text_test_norm = text_test_norm.replace("examDate: '2026-10-27'", "examDate: '2027-10-24'")
text_test_norm = text_test_norm.replace("// 2026-05-30 → 2026-10-27\n    expect(p.daysUntilExam).toBe(150)", "// 2026-05-30 → 2027-10-24\n    expect(p.daysUntilExam).toBe(512)")
# 10000 / 512 = 19.53 -> 20
text_test_norm = text_test_norm.replace("// 10000 / 150 = 66.66 → 67\n    expect(p.requiredDailySolved).toBe(67)", "// 10000 / 512 = 19.53 → 20\n    expect(p.requiredDailySolved).toBe(20)")
text_test_norm = text_test_norm.replace("expect(p.requiredDailySolved).toBe(67);", "expect(p.requiredDailySolved).toBe(20);")
# 1000 + 50 * 512 = 26600
text_test_norm = text_test_norm.replace("// 1000 + 50 * 150 = 8500\n    expect(p.projectedSolvedAtExam).toBe(8500)", "// 1000 + 50 * 512 = 26600\n    expect(p.projectedSolvedAtExam).toBe(26600)")

with open(p_test, 'w', encoding='utf-8') as f:
    f.write(text_test_norm)

print("projections.test.ts updated for 2027-10-24!")
