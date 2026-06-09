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
const picks = [samples[0], samples[3], samples[4], samples[9]];

const MODEL = process.env.GEMINI_MODEL_AI ?? 'gemini-2.5-flash';
const KEY = process.env.GEMINI_API_KEY;
if (!KEY) throw new Error('GEMINI_API_KEY missing');

async function callGemini(systemInstruction, userText) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: systemInstruction }] },
      contents: [{ role: 'user', parts: [{ text: userText }] }],
      generationConfig: { temperature: 0.4, topP: 0.95 },
    }),
  });
  if (!res.ok) throw new Error(`Gemini ${res.status}: ${await res.text()}`);
  const j = await res.json();
  return j?.candidates?.[0]?.content?.parts?.map((p) => p.text).join('') ?? '';
}

for (let i = 0; i < picks.length; i++) {
  const q = picks[i];
  const userPrompt = buildUserPrompt({
    question: q.question,
    options: q.options,
    lesson: 'Kardiyoloji',
    unit: 'Acil',
    correctAnswer: q.correctAnswer,
    context: [],
  });
  process.stdout.write(`\n\n================ SORU ${i + 1} ================\n`);
  process.stdout.write(`Q: ${q.question.slice(0, 120)}...\nCorrect: ${q.correctAnswer}\n\n`);
  const out = await callGemini(SYSTEM_PROMPT, userPrompt);
  process.stdout.write(out);
  process.stdout.write('\n');
}
