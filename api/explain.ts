/**
 * DUS Bankası — AI Özel Ders API (Vercel Edge runtime)
 *
 * Akış:
 *  1) Tarayıcı: { question, options, lesson, unit, correctAnswer } gönderir (~1 KB).
 *  2) Bu fonksiyon: lesson → Pinecone `myppdfs` namespace.
 *  3) Pinecone Integrated Inference (E5 1024) + bge-reranker-v2-m3 → en alakalı 5 pasaj.
 *  4) Gemini 2.5 Flash'a sadece pasajlar + soru gönderilir (PDF YOK).
 *  5) Yanıt SSE-benzeri text/plain stream olarak tarayıcıya akar.
 */

import { lessonToNamespace } from './_lib/lesson-namespace.js';
import { searchContext, type Chunk } from './_lib/pinecone.js';
import { streamGemini } from './_lib/gemini.js';
import { SYSTEM_PROMPT, buildUserPrompt } from './_lib/prompt.js';

export const config = { runtime: 'edge' };

type Body = {
  question: string;
  options: { A: string; B: string; C: string; D: string; E: string };
  lesson: string;
  unit: string;
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
};

function buildSearchQuery(b: Body): string {
  const correctText = b.options[b.correctAnswer] ?? '';
  return `${b.question}\nDoğru: ${correctText}`;
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return new Response('Geçersiz JSON gövde.', { status: 400 });
  }

  if (!body?.question || !body?.options || !body?.lesson) {
    return new Response('Eksik alan: question / options / lesson zorunludur.', {
      status: 400,
    });
  }

  const hasAnyKey =
    !!process.env.GEMINI_API_KEY ||
    !!process.env.GEMINI_API_KEY_1 ||
    !!process.env.GEMINI_API_KEY_2 ||
    !!process.env.GEMINI_API_KEY_3;
  if (!hasAnyKey) {
    return new Response('Sunucu yapılandırılmamış: GEMINI_API_KEY_* yok.', { status: 500 });
  }

  // 1) Pinecone bağlamı — namespace eşleşmesi yoksa boş geçer (model genel bilgiden cevap verir).
  let context: Chunk[] = [];
  const ns = lessonToNamespace(body.lesson);
  if (ns) {
    try {
      context = await searchContext(buildSearchQuery(body), ns, { topK: 15, topN: 5 });
    } catch (e) {
      console.warn('[explain] Pinecone arama hatası, RAG atlanıyor:', e);
    }
  }

  // 2) Gemini stream (manuel SSE)
  const userPrompt = buildUserPrompt({ ...body, context });
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        for await (const piece of streamGemini(SYSTEM_PROMPT, userPrompt)) {
          controller.enqueue(encoder.encode(piece));
        }
        controller.close();
      } catch (e) {
        controller.error(e);
      }
    },
  });

  return new Response(stream, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-RAG-Namespace': ns ?? 'none',
      'X-RAG-Chunks': String(context.length),
    },
  });
}
