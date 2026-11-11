import { CANONICAL_UNITS } from '../../../config/canonicalUnits';

export function unitKey(lesson: string, unit: string): string {
  return `v1/${encodeURIComponent(lesson)}/${encodeURIComponent(unit)}`;
}

export function isCanonicalUnit(lesson: string, unit: string): boolean {
  return Object.hasOwn(CANONICAL_UNITS, lesson) && CANONICAL_UNITS[lesson].includes(unit);
}

export function canonicalUnitNumber(lesson: string, unit: string): number {
  if (!isCanonicalUnit(lesson, unit)) throw new Error('Kanonik ders ve ünite seçin.');
  return CANONICAL_UNITS[lesson].indexOf(unit) + 1;
}

/** TopicUnit.subjectId ders ADINI taşır (CANONICAL_UNITS anahtarıyla aynı uzay).
 *  Eski kayıtlar ders KODU (B01) taşıyabildiği için çözücü ikisini de kabul eder.
 *  Ders aramaları doğrudan `s.id === subjectId` yerine bu yardımcıyı kullanmalıdır. */
export function subjectForTopic<T extends { id: string; name: string }>(
  subjects: readonly T[],
  subjectRef: string | undefined | null,
): T | undefined {
  if (!subjectRef) return undefined;
  return subjects.find(subject => subject.name === subjectRef)
    ?? subjects.find(subject => subject.id === subjectRef);
}
