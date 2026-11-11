import { describe, expect, test } from 'vitest';
import { CANONICAL_DUS_SUBJECTS } from '../data/subjectProtocols';
import { CANONICAL_16_BRANCHES } from '../data/branchSpecs';
import { PLANNER_TO_EXAM_BRANCHES, examBranchesForPlannerCode } from './subjectCodes';

const normalize = (value: string) => value.toLocaleLowerCase('tr')
  .replace(/ı/g, 'i').replace(/ş/g, 's').replace(/ğ/g, 'g')
  .replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ç/g, 'c')
  .replace(/[^a-z]/g, '');

/** Planlayıcı ders adı ile deneme branş adı aynı dersi göstermeli. */
function sameSubject(plannerName: string, examName: string): boolean {
  const planner = normalize(plannerName);
  const exam = normalize(examName);
  return exam.includes(planner) || planner.includes(exam) || (planner === 'protez' && exam.includes('protetik'));
}

describe('Ders kodu ad alanları', () => {
  test('her planlayıcı dersinin deneme branşı eşlemesi var', () => {
    for (const subject of CANONICAL_DUS_SUBJECTS) {
      expect(examBranchesForPlannerCode(subject.code), `${subject.code} ${subject.name}`).not.toHaveLength(0);
    }
  });

  test('eşleme yanlış derse bağlanmamış (B11–B16 kayması regresyonu)', () => {
    for (const subject of CANONICAL_DUS_SUBJECTS) {
      const examNames = examBranchesForPlannerCode(subject.code)
        .map(code => CANONICAL_16_BRANCHES.find(branch => branch.code === code)?.name ?? '');
      expect(
        examNames.some(name => sameSubject(subject.name, name)),
        `${subject.code} ${subject.name} -> ${examNames.join(', ')}`,
      ).toBe(true);
    }
  });

  test('planlayıcıda karşılığı olmayan deneme branşı yalnız B08 olabilir', () => {
    const mapped = new Set(Object.values(PLANNER_TO_EXAM_BRANCHES).flat());
    const missing = CANONICAL_16_BRANCHES.filter(branch => !mapped.has(branch.code)).map(branch => branch.code);
    // B08 Tıbbi Biyoloji ve Genetik: kanonik ünite kataloğunda dersi yok.
    // Planlayıcıya eklenene kadar deneme analizinde 4 soruluk hedef net taşır (rapor: M3).
    expect(missing).toEqual(['B08']);
  });

  test('bilinmeyen kod boş dizi döndürür', () => {
    expect(examBranchesForPlannerCode('B08')).toEqual([]);
    expect(examBranchesForPlannerCode(undefined)).toEqual([]);
  });
});
