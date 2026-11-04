/** Yalnızca soru + şıklar → Gemini. Harici arama veya veritabanı erişimi yok. */
import { generateGemini, getKeys } from './_lib/gemini.js';
import { SYSTEM_PROMPT, buildUserPrompt, type ExplainInput } from './_lib/prompt.js';

export type ExplainBody = ExplainInput;

export async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });
  let body: ExplainBody;
  try {
    body = await req.json();
  } catch {
    return new Response('Geçersiz JSON gövde.', { status: 400 });
  }
  if (typeof body?.question !== 'string' || !body.question.trim() ||
      !body.options || !(['A', 'B', 'C', 'D', 'E'] as const).every(
        (key) => typeof body.options[key] === 'string' && body.options[key].trim(),
      )) {
    return new Response('Soru ve A–E şıklarının tamamı zorunludur.', { status: 400 });
  }
  if (!getKeys().length) return new Response('Gemini API anahtarı yapılandırılmamış.', { status: 500 });
  try {
    const signal = AbortSignal.any([req.signal, AbortSignal.timeout(290_000)]);
    const answer = await generateGemini(SYSTEM_PROMPT, buildUserPrompt(body), signal);
    return new Response(answer, { headers: {
      'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store',
    } });
  } catch {
    return new Response('Gemini yanıt üretemedi. Lütfen tekrar deneyin.', { status: 502 });
  }
}

// Node Web Handler: model/anahtar denemeleri Edge'in ilk yanıt süresini aşabilir.
export default { fetch: handler };
