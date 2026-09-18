import { describe, expect, it } from 'vitest';
import { DEFAULT_MODELS } from '../../../api/_lib/gemini';
import { SYSTEM_PROMPT, buildUserPrompt } from '../../../api/_lib/prompt';
import { buildSearchQuery, type ExplainBody } from '../../../api/explain';

const input: ExplainBody = {
  question: 'Hangisi doğrudur?',
  options: { A: 'Alfa', B: 'Beta', C: 'Gama', D: 'Delta', E: 'Epsilon' },
  lesson: 'Fizyoloji',
  unit: 'Test',
  correctAnswer: 'B',
};

describe('AI asistan sözleşmesi', () => {
  it('en yeni modelden başlayıp doğrulanmış fallback zincirini izler', () => {
    expect([...DEFAULT_MODELS]).toEqual([
      'gemini-3.7-flash',
      'gemini-3.6-flash',
      'gemini-3.5-flash',
      'gemini-3.1-flash-lite',
      'gemini-3-flash-preview',
    ]);
  });

  it('cevap anahtarını mutlak gerçek değil denetlenecek iddia olarak sunar', () => {
    const prompt = buildUserPrompt({ ...input, context: [] });
    expect(prompt).toContain('cevap anahtarı (denetlenecek; mutlak doğru kabul etme): B');
    expect(prompt).not.toContain('\nDoğru Cevap: B');
    expect(SYSTEM_PROMPT).toContain('Şıkların Objektif Analizi');
    expect(SYSTEM_PROMPT).toContain('HATALI GÖRÜNÜYOR');
    expect(SYSTEM_PROMPT).toContain('1 ile 5 arasında numaralı');
  });

  it('RAG sorgusunu cevap anahtarıyla yönlendirmez ve tüm şıkları taşır', () => {
    const query = buildSearchQuery(input);
    expect(query).not.toContain('Doğru:');
    expect(query).toContain('A) Alfa');
    expect(query).toContain('E) Epsilon');
  });
});
