import { describe, expect, it } from 'vitest';
import { isDenemeBankQuestion, isNormalQuestion } from '../../config/canonicalUnits';

describe('Denemeler soru havuzu', () => {
  it('Deneme sorularını normal ders ünitelerinden ayırır', () => {
    const question = { lesson: 'Anatomi', unit: 'Deneme', quality_flag: null };
    expect(isDenemeBankQuestion(question)).toBe(true);
    expect(isNormalQuestion(question)).toBe(false);
    expect(isNormalQuestion({ ...question, unit: 'Baş ve Boyun' })).toBe(true);
  });

  it('çıkmış soruları deneme havuzuna katmaz', () => {
    expect(isDenemeBankQuestion({ unit: 'Deneme', quality_flag: 'cikmis' })).toBe(false);
  });
});
