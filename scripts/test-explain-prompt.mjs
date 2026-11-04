// Gerçek Gemini smoke testi; aynı üretim handler'ını ve master prompt'u kullanır.
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { config } from 'dotenv';
import { handler } from '../api/explain.ts';
import { getKeys } from '../api/_lib/gemini.ts';

config({ path: '.env.local', quiet: true });
const samples = JSON.parse(await readFile('eklenecek/Radyoloji_30.json', 'utf8'));
const sample = samples[0];
const request = new Request('http://localhost/api/explain', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ question: sample.question, options: sample.options }),
});
const originalFetch = globalThis.fetch;
const attempts = [];
const keys = getKeys();
globalThis.fetch = async (url, init) => {
  const model = String(url).split('/models/')[1]?.split(':')[0];
  const key = keys.indexOf(init.headers['x-goog-api-key']) + 1;
  const started = Date.now();
  const record = { model, key };
  attempts.push(record);
  console.log(JSON.stringify({ model, key, phase: 'start' }));
  try {
    const response = await originalFetch(url, init);
    Object.assign(record, { status: response.status, seconds: (Date.now() - started) / 1000 });
    console.log(JSON.stringify(record));
    const readJSON = response.json.bind(response);
    response.json = async () => {
      const data = await readJSON();
      record.finish = data.candidates?.[0]?.finishReason;
      return data;
    };
    return response;
  } catch (error) {
    Object.assign(record, { error: error.name, seconds: (Date.now() - started) / 1000 });
    console.log(JSON.stringify(record));
    throw error;
  }
};
const start = Date.now();
const response = await handler(request);
const text = await response.text();
await mkdir('scratch', { recursive: true });
await writeFile('scratch/ai-explanation-smoke.md', text);
const result = {
  status: response.status, elapsedSeconds: (Date.now() - start) / 1000,
  characters: text.length, attempts,
  optionsExplained: ['A', 'B', 'C', 'D', 'E'].every(letter => text.includes(letter + ')')),
};
console.log(JSON.stringify(result, null, 2));
await writeFile('scratch/ai-explanation-smoke.json', JSON.stringify(result, null, 2));
if (response.status !== 200 || !result.optionsExplained) process.exitCode = 1;
