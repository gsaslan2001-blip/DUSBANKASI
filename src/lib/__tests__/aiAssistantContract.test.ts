// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { DEFAULT_MODELS, generateGemini, getKeys } from '../../../api/_lib/gemini';
import { buildUserPrompt } from '../../../api/_lib/prompt';
import { handler } from '../../../api/explain';
import { explainWithAI } from '../ai';
import type { Question } from '../../data';

const input = {
  question: 'Hangisi doğrudur?',
  options: { A: 'Alfa', B: 'Beta', C: 'Gama', D: 'Delta', E: 'Epsilon' },
};
const complete = (text = 'Tam çözüm') => Response.json({
  candidates: [{ finishReason: 'STOP', content: { parts: [{ text }] } }],
});

beforeEach(() => vi.stubEnv('SMARTDEDUP_GEMINI_KEYS', 'key-one,key-two'));
afterEach(() => { vi.unstubAllGlobals(); vi.unstubAllEnvs(); vi.useRealTimers(); });

describe('Doğrudan Gemini soru çözümü', () => {
  it('model sırası sabittir; eski ortam sıralaması bunu değiştiremez', () => {
    expect([...DEFAULT_MODELS]).toEqual([
      'gemini-3.8-flash', 'gemini-3.7-flash', 'gemini-3.6-flash',
      'gemini-3.5-flash', 'gemini-3.5-flash-lite',
      'gemini-3.1-flash-lite', 'gemini-3-flash-preview',
    ]);
  });
  it('Smart Dedup havuzunu kullanır ve tekrarlanan anahtarları ayıklar', () => {
    vi.stubEnv('SMARTDEDUP_GEMINI_KEYS', ' key-one, key-two,key-one ');
    expect(getKeys()).toEqual(['key-one', 'key-two']);
  });
  it('takılan anahtar çalışan anahtarı engellemez; kazanan diğer çağrıyı iptal eder', async () => {
    const abort = new AbortController();
    const timer = setTimeout(() => abort.abort(), 500);
    let firstSignal: AbortSignal | undefined;
    const fetcher = vi.fn().mockImplementationOnce((_url, init) => {
      firstSignal = init.signal;
      return new Promise((_resolve, reject) => {
        init.signal.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')));
      });
    }).mockResolvedValue(complete());
    vi.stubGlobal('fetch', fetcher);
    try {
      await expect(generateGemini('sys', 'user', abort.signal)).resolves.toBe('Tam çözüm');
      expect(firstSignal?.aborted).toBe(true);
      expect(fetcher).toHaveBeenCalledTimes(2);
    } finally { clearTimeout(timer); }
  });
  it('her modelde tüm anahtarları denedikten sonra alt modele geçer', async () => {
    const fetcher = vi.fn().mockImplementation(() => Promise.resolve(new Response('', { status: 429 })));
    fetcher.mockImplementationOnce(() => Promise.resolve(new Response('', { status: 403 })));
    vi.stubGlobal('fetch', fetcher);
    await expect(generateGemini('sys', 'user')).rejects.toThrow('Tüm Gemini');
    expect(fetcher.mock.calls).toHaveLength(14);
    expect(fetcher.mock.calls.map(([url, init]) => [
      url.split('/models/')[1].split(':')[0], init.headers['x-goog-api-key'],
    ])).toEqual(DEFAULT_MODELS.flatMap(model => [[model, 'key-one'], [model, 'key-two']]));
  });
  it('takılan modelin süresi dolunca sonraki modele geçer', async () => {
    vi.useFakeTimers();
    const fetcher = vi.fn().mockImplementation((url, init) => {
      if (!url.includes('gemini-3.8-flash')) return Promise.resolve(complete());
      return new Promise((_resolve, reject) => {
        init.signal.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')));
      });
    });
    vi.stubGlobal('fetch', fetcher);
    const result = generateGemini('sys', 'user');
    await vi.advanceTimersByTimeAsync(5_000 - 1);
    expect(fetcher).toHaveBeenCalledTimes(2);
    await vi.advanceTimersByTimeAsync(1);
    expect(await result).toBe('Tam çözüm');
    expect(fetcher).toHaveBeenCalledTimes(4);
  });
  it('üç erişilemeyen üst model çalışan 3.5 modelini 15 saniyeden fazla bekletmez', async () => {
    vi.useFakeTimers();
    const fetcher = vi.fn().mockImplementation((url, init) => {
      if (url.includes('gemini-3.5-flash:')) return Promise.resolve(complete());
      return new Promise((_resolve, reject) => {
        init.signal.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')));
      });
    });
    vi.stubGlobal('fetch', fetcher);
    let answer: string | undefined;
    const pending = generateGemini('sys', 'user').then(text => { answer = text; });
    await vi.advanceTimersByTimeAsync(15_000);
    try {
      expect(answer).toBe('Tam çözüm');
      expect(fetcher).toHaveBeenCalledTimes(8);
    } finally {
      await vi.runAllTimersAsync();
      await pending;
    }
  });
  it('503 gövdesinin kapanmasını bekleyerek fallback zincirini kilitlemez', async () => {
    const fetcher = vi.fn().mockImplementation((url) => {
      if (!url.includes('gemini-3.8-flash')) return Promise.resolve(complete());
      return Promise.resolve(new Response(new ReadableStream({
        cancel: () => new Promise(() => {}),
      }), { status: 503 }));
    });
    vi.stubGlobal('fetch', fetcher);
    expect(await generateGemini('sys', 'user')).toBe('Tam çözüm');
    expect(fetcher).toHaveBeenCalledTimes(4);
  });
  it('kesik ve boş yanıtları bırakır, yalnızca tam sonucu döndürür', async () => {
    const fetcher = vi.fn()
      .mockResolvedValueOnce(Response.json({ candidates: [{
        finishReason: 'MAX_TOKENS', content: { parts: [{ text: 'KESİK' }] },
      }] }))
      .mockResolvedValueOnce(complete(''))
      .mockResolvedValue(complete('Tam çözüm'));
    vi.stubGlobal('fetch', fetcher);
    expect(await generateGemini('sys', 'user')).toBe('Tam çözüm');
    expect(fetcher).toHaveBeenCalledTimes(4);
  });
  it('iptal edilen istekte diğer anahtarları tüketmez', async () => {
    const abort = new AbortController();
    const fetcher = vi.fn().mockImplementation(() => {
      abort.abort();
      throw new DOMException('Aborted', 'AbortError');
    });
    vi.stubGlobal('fetch', fetcher);
    await expect(generateGemini('sys', 'user', abort.signal)).rejects.toThrow();
    expect(fetcher).toHaveBeenCalledTimes(1);
  });
  it('eski istemcinin anahtar/açıklama/bağlam alanlarını modelden yalıtır', async () => {
    vi.stubEnv('SMARTDEDUP_GEMINI_KEYS', 'key-one');
    const contaminated = { ...input, correctAnswer: 'SECRET_ANSWER',
      explanation: 'SECRET_EXPLANATION', context: [{ text: 'SECRET_CONTEXT' }],
      lesson: 'SECRET_LESSON',
      options: { ...input.options, explanation: 'SECRET_OPTION' } };
    expect(JSON.parse(buildUserPrompt(contaminated))).toEqual(input);
    const fetcher = vi.fn().mockResolvedValue(complete());
    vi.stubGlobal('fetch', fetcher);
    const response = await handler(new Request('https://local/api/explain', {
      method: 'POST', body: JSON.stringify(contaminated),
    }));
    expect(response.status).toBe(200);
    expect(await response.text()).toBe('Tam çözüm');
    expect(fetcher).toHaveBeenCalledTimes(1);
    expect(fetcher.mock.calls[0][0]).toMatch(/^https:\/\/generativelanguage.googleapis.com\//);
    expect(fetcher.mock.calls[0][1].body).not.toContain('SECRET');
    expect(response.headers.has('X-RAG-Namespace')).toBe(false);
  });
  it('tarayıcı sadece soru ve beş şıkkı gönderir', async () => {
    const fetcher = vi.fn().mockResolvedValue(new Response('Tam çözüm'));
    vi.stubGlobal('fetch', fetcher);
    await explainWithAI({ ...input, correctAnswer: 'B', explanation: 'GİZLİ' } as Question);
    expect(JSON.parse(fetcher.mock.calls[0][1].body)).toEqual(input);
  });
  it('eksik şıklarda sağlayıcıyı çağırmaz', async () => {
    const fetcher = vi.fn();
    vi.stubGlobal('fetch', fetcher);
    const response = await handler(new Request('https://local/api/explain', {
      method: 'POST', body: JSON.stringify({ ...input, options: { A: 'A' } }),
    }));
    expect(response.status).toBe(400);
    expect(fetcher).not.toHaveBeenCalled();
  });
  it('tüm denemeler başarısızsa 502 verir ve sırları dışarı taşımaz', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('key-one SECRET')));
    const response = await handler(new Request('https://local/api/explain', {
      method: 'POST', body: JSON.stringify(input),
    }));
    expect(response.status).toBe(502);
    expect(await response.text()).not.toMatch(/key-one|SECRET/);
  });
});
