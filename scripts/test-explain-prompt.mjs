// Quick offline tester for SYSTEM_PROMPT / buildUserPrompt
// Calls Gemini directly (no Pinecone context). Streams to stdout.

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const envPath = path.join(ROOT, '.env.local');
const envText = await readFile(envPath, 'utf8').catch(() => '');
for (const line of envText.split(/\r?\n/)) {
  const m = /^([A-Z0-9_]+)\s*=\s*"?([^"\r\n]*)"?\s*$/.exec(line);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
}

const promptModule = await import(
  'file://' + path.join(ROOT, 'api', '_lib', 'prompt.ts').replace(/\\/g, '/')
).catch(async () => {
  // tsx not loaded — read & evaluate manually
  const ts = await readFile(path.join(ROOT, 'api', '_lib', 'prompt.ts'), 'utf8');
  const stripped = ts
    .replace(/export\s+const\s+SYSTEM_PROMPT\s*=\s*`/, 'globalThis.__SYS=`')
    .replace(/export\s+function\s+buildUserPrompt/, 'globalThis.__BUILD=function buildUserPrompt');
  eval(stripped);
  return { SYSTEM_PROMPT: globalThis.__SYS, buildUserPrompt: globalThis.__BUILD };
});

const { SYSTEM_PROMPT, buildUserPrompt } = promptModule;

const samples = JSON.parse(await readFile(path.join(ROOT, 'eklenecek', 'Radyoloji_30.json'), 'utf8'));

// pick a few distinct types
const sampleCount = Math.max(1, Math.min(4, Number(process.env.AI_PROMPT_SAMPLE_COUNT ?? 4)));
const picks = [samples[0], samples[3], samples[4], samples[9]].slice(0, sampleCount);

const models = (process.env.GEMINI_MODELS_AI ?? process.env.GEMINI_MODEL_AI ?? 'gemini-3.7-flash,gemini-3.6-flash,gemini-3.5-flash,gemini-3.1-flash-lite,gemini-3-flash-preview')
  .split(',').map((value) => value.trim()).filter(Boolean);
const keys = [];
for (let i = 1; i <= 10; i++) {
  const key = process.env[`GEMINI_API_KEY_${i}`];
  if (key && !keys.includes(key)) keys.push(key);
}
if (process.env.GEMINI_API_KEY && !keys.includes(process.env.GEMINI_API_KEY)) keys.push(process.env.GEMINI_API_KEY);
if (keys.length === 0) throw new Error('GEMINI_API_KEY_* missing');

async function callGemini(systemInstruction, userText) {
  const errors = [];
  for (const model of models) {
    for (let i = 0; i < keys.length; i++) {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': keys[i] },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemInstruction }] },
          contents: [{ role: 'user', parts: [{ text: userText }] }],
          generationConfig: { maxOutputTokens: 8192, thinkingConfig: { thinkingLevel: 'high' } },
        }),
      });
      if (!res.ok) {
        errors.push(`${model}#${i + 1}:${res.status}`);
        continue;
      }
      const j = await res.json();
      const text = j?.candidates?.[0]?.content?.parts?.map((p) => p.text ?? '').join('') ?? '';
      if (text.trim()) return { model, text };
      errors.push(`${model}#${i + 1}:empty`);
    }
  }
  throw new Error(`Tüm Gemini denemeleri başarısız: ${errors.join(', ')}`);
}

for (let i = 0; i < picks.length; i++) {
  const q = picks[i];
  const forcedKey = /^[A-E]$/.test(process.env.AI_PROMPT_FORCE_KEY ?? '')
    ? process.env.AI_PROMPT_FORCE_KEY
    : null;
  const answerKey = forcedKey ?? q.correctAnswer;
  const userPrompt = buildUserPrompt({
    question: q.question,
    options: q.options,
    lesson: 'Kardiyoloji',
    unit: 'Acil',
    correctAnswer: answerKey,
    context: [],
  });
  process.stdout.write(`\n\n================ SORU ${i + 1} ================\n`);
  process.stdout.write(`Q: ${q.question.slice(0, 120)}...\nAnswer key under audit: ${answerKey}\n\n`);
  const out = await callGemini(SYSTEM_PROMPT, userPrompt);
  process.stdout.write(`Model: ${out.model}\n\n`);
  process.stdout.write(out.text);
  process.stdout.write('\n');
}
