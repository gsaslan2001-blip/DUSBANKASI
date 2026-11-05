from pathlib import Path

p_test = Path('src/lib/__tests__/projections.test.ts')
with open(p_test, 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace("new Date('2026-12-01T00:00:00')", "new Date('2027-11-01T00:00:00')")

with open(p_test, 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated past date in projections test successfully!")
