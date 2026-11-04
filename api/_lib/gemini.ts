/** Doğrudan Gemini REST API; model sırası sabit, her modelde anahtar havuzu. */
export const DEFAULT_MODELS = [
  'gemini-3.8-flash',
  'gemini-3.7-flash',
  'gemini-3.6-flash',
  'gemini-3.5-flash',
  'gemini-3.5-flash-lite',
  'gemini-3.1-flash-lite',
  'gemini-3-flash-preview',
] as const;

// Yoğun üst modeller alt modelleri dakikalarca bekletmesin.
export const MODEL_TIMEOUT_MS = 20_000;
const PRIORITY_MODEL_TIMEOUT_MS = 5_000;

export function getKeys(): string[] {
  const shared = process.env.SMARTDEDUP_GEMINI_KEYS;
  const values = shared?.trim() ? shared.split(',') : [
    ...Object.keys(process.env)
      .filter((name) => /^GEMINI_API_KEY_\d+$/.test(name))
      .sort((a, b) => Number(a.slice('GEMINI_API_KEY_'.length)) - Number(b.slice('GEMINI_API_KEY_'.length)))
      .map((name) => process.env[name] ?? ''),
    process.env.GEMINI_API_KEY ?? '',
  ];
  return [...new Set(values.map((key) => key.trim()).filter(Boolean))];
}

async function attemptGemini(
  model: string, apiKey: string, body: string, signal: AbortSignal,
): Promise<string> {
  signal.throwIfAborted();
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
      signal, body,
    },
  );
  if (!response.ok) {
    // Hata gövdesinin kapanmasını beklemek diğer anahtarları engellememeli.
    void response.body?.cancel().catch(() => {});
    throw new Error(`HTTP ${response.status}`);
  }
  const data = await response.json();
  const candidate = data.candidates?.[0];
  const text = (candidate?.content?.parts ?? [])
    .filter((part: { text?: string; thought?: boolean }) => !part.thought && typeof part.text === 'string')
    .map((part: { text: string }) => part.text).join('').trim();
  if (candidate?.finishReason !== 'STOP' || !text) {
    throw new Error('Tamamlanmamış yanıt');
  }
  return text;
}

export async function generateGemini(
  systemInstruction: string,
  userText: string,
  signal?: AbortSignal,
): Promise<string> {
  const keys = getKeys();
  if (!keys.length) throw new Error('Gemini API anahtarı yapılandırılmamış.');
  const body = JSON.stringify({
    systemInstruction: { parts: [{ text: systemInstruction }] },
    contents: [{ role: 'user', parts: [{ text: userText }] }],
    generationConfig: { maxOutputTokens: 8192, thinkingConfig: { thinkingLevel: 'high' } },
  });
  for (const model of DEFAULT_MODELS) {
    signal?.throwIfAborted();
    const controller = new AbortController();
    const timeoutMs = DEFAULT_MODELS.indexOf(model) < 3 ? PRIORITY_MODEL_TIMEOUT_MS : MODEL_TIMEOUT_MS;
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
    const modelSignal = signal ? AbortSignal.any([signal, controller.signal]) : controller.signal;
    try {
      // Alt modele ancak bu modelin bütün anahtarları başarısız olduğunda geç.
      // İlk TAM yanıt kazanır; yarım yanıtlar birleştirilmez.
      return await Promise.any(keys.map(key => attemptGemini(model, key, body, modelSignal)));
    } catch {
      signal?.throwIfAborted();
    } finally {
      clearTimeout(timeout);
      controller.abort(); // Kazanan varsa kalan çağrıları da sonlandır.
    }
  }
  throw new Error('Tüm Gemini model/anahtar denemeleri başarısız.');
}
