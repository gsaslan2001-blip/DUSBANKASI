/**
 * Gemini — Edge-uyumlu streaming istemcisi (çoklu key + model fallback).
 *
 * Öncelik sırası (varsayılan, ENV ile override edilebilir):
 *   1) gemini-3.7-flash
 *   2) gemini-3.6-flash
 *   3) gemini-3.5-flash
 *   4) gemini-3.1-flash-lite
 *   5) gemini-3-flash-preview
 *
 * Key havuzu (sırayla denenir):
 *   GEMINI_API_KEY_1, GEMINI_API_KEY_2, GEMINI_API_KEY_3, ...
 *   (geriye uyum: GEMINI_API_KEY)
 *
 * Fallback mantığı: her (model, key) ikilisi denenir; 429/403/503 ya da
 * stream içi hata olursa sıradakine geçilir. İlk başarılı stream tüketilir.
 */

export const DEFAULT_MODELS = [
  'gemini-3.7-flash',
  'gemini-3.6-flash',
  'gemini-3.5-flash',
  'gemini-3.1-flash-lite',
  'gemini-3-flash-preview',
] as const;
const BASE = 'https://generativelanguage.googleapis.com/v1beta';

function getModels(): string[] {
  const env = process.env.GEMINI_MODELS_AI ?? process.env.GEMINI_MODEL_AI;
  if (env && env.trim()) return env.split(',').map((s) => s.trim()).filter(Boolean);
  return [...DEFAULT_MODELS];
}

function getKeys(): string[] {
  const keys: string[] = [];
  for (let i = 1; i <= 10; i++) {
    const k = process.env[`GEMINI_API_KEY_${i}`];
    if (k && k.trim()) keys.push(k.trim());
  }
  const legacy = process.env.GEMINI_API_KEY;
  if (legacy && legacy.trim() && !keys.includes(legacy.trim())) keys.push(legacy.trim());
  return keys;
}

/** Tek bir (model, key) için stream başlat — başarısızsa hata fırlatır. */
async function openStream(
  model: string,
  apiKey: string,
  systemInstruction: string,
  userText: string,
): Promise<ReadableStreamDefaultReader<Uint8Array>> {
  const url = `${BASE}/models/${model}:streamGenerateContent?alt=sse`;
  const body = {
    systemInstruction: { parts: [{ text: systemInstruction }] },
    contents: [{ role: 'user', parts: [{ text: userText }] }],
    generationConfig: {
      maxOutputTokens: 8192,
      // Tıbbi soru denetiminde hızdan çok gerekçe kalitesi önceliklidir.
      // Gemini 3.x'te eski temperature/topP yerine thinkingLevel kullanılır.
      thinkingConfig: { thinkingLevel: 'high' },
    },
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': apiKey,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok || !res.body) {
    const errText = await res.text().catch(() => '');
    throw new Error(`Gemini ${res.status} (${model}): ${errText.slice(0, 300)}`);
  }
  return res.body.getReader();
}

export async function* streamGemini(
  systemInstruction: string,
  userText: string,
): AsyncGenerator<string, void, unknown> {
  const models = getModels();
  const keys = getKeys();
  if (keys.length === 0) {
    throw new Error('Gemini API key yok: GEMINI_API_KEY_1 / GEMINI_API_KEY ortam değişkenlerini ayarlayın.');
  }

  const decoder = new TextDecoder();

  function findSeparator(s: string): { idx: number; len: number } | null {
    const i1 = s.indexOf('\r\n\r\n');
    const i2 = s.indexOf('\n\n');
    if (i1 === -1 && i2 === -1) return null;
    if (i1 === -1) return { idx: i2, len: 2 };
    if (i2 === -1) return { idx: i1, len: 4 };
    return i1 < i2 ? { idx: i1, len: 4 } : { idx: i2, len: 2 };
  }

  function* parseEvent(raw: string): Generator<string> {
    for (const line of raw.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed.startsWith('data:')) continue;
      const payload = trimmed.slice(5).trim();
      if (!payload || payload === '[DONE]') continue;
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const obj: any = JSON.parse(payload);
        const parts = obj?.candidates?.[0]?.content?.parts ?? [];
        for (const p of parts) {
          if (typeof p?.text === 'string' && p.text) yield p.text;
        }
      } catch {
        /* partial */
      }
    }
  }

  const errors: string[] = [];

  // Her model için sırayla tüm key'leri dene; ilk başarılı stream'i tüket.
  outer: for (const model of models) {
    for (let i = 0; i < keys.length; i++) {
      const apiKey = keys[i];
      let reader: ReadableStreamDefaultReader<Uint8Array>;
      try {
        reader = await openStream(model, apiKey, systemInstruction, userText);
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        errors.push(`[${model}#key${i + 1}] ${msg}`);
        continue; // bir sonraki key
      }

      // Stream açıldı; tüketmeye başla. Stream içinde hata olursa
      // büyük olasılıkla zaten bir miktar token aktı — bu noktadan
      // sonra fallback yapmak UI'da tutarsızlık yaratır, hatayı fırlatırız.
      let buf = '';
      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buf += decoder.decode(value, { stream: true });
          let sep = findSeparator(buf);
          while (sep) {
            const raw = buf.slice(0, sep.idx);
            buf = buf.slice(sep.idx + sep.len);
            for (const text of parseEvent(raw)) yield text;
            sep = findSeparator(buf);
          }
        }
        buf += decoder.decode();
        if (buf.trim()) {
          for (const text of parseEvent(buf)) yield text;
        }
        return; // başarı
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        errors.push(`[${model}#key${i + 1} stream] ${msg}`);
        // Stream ortasında koptu — kullanıcıya kısmi yanıt verildi; yine de
        // tamamen başarısızlık olarak değerlendirip sıradakine geçmek yerine
        // dışarı çıkıyoruz. (Sıradaki model çağrısı yanıtı baştan üretirdi.)
        continue outer;
      }
    }
  }

  throw new Error(`Tüm Gemini model/key kombinasyonları başarısız: ${errors.join(' | ')}`);
}
