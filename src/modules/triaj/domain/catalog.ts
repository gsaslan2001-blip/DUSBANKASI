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
