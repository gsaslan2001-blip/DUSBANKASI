import { describe, expect, it } from 'vitest';
import { appendAIExplanation } from '../questionExplanation';

describe('appendAIExplanation', () => {
  it('boş açıklamaya AI yanıtını doğrudan ekler', () => {
    expect(appendAIExplanation('', '  **AI çözümü**  ')).toBe('**AI çözümü**');
  });

  it('mevcut açıklamayı koruyup markdown ayıracıyla birleştirir', () => {
    expect(appendAIExplanation('Kısa açıklama', '**AI çözümü**'))
      .toBe('Kısa açıklama\n\n---\n\n**AI çözümü**');
  });

  it('aynı AI yanıtını ikinci kez eklemez', () => {
    const once = appendAIExplanation('Kısa açıklama', '**AI çözümü**');
    expect(appendAIExplanation(once, '**AI çözümü**')).toBe(once);
  });
});
