/**
 * Pinecone Integrated Inference — Edge-uyumlu manuel fetch istemcisi.
 * SDK kullanmaz (SDK Node built-in'lerine bağlı → Edge'de derlenmez).
 *
 * Endpoint: POST https://{INDEX_HOST}/records/namespaces/{ns}/search
 * Doküman: https://docs.pinecone.io/guides/inference/integrated-inference
 */

const INDEX_HOST =
  process.env.PINECONE_HOST ?? 'myppdfs-0crkhvy.svc.aped-4627-b74a.pinecone.io';
const RERANKER = process.env.RERANKER_MODEL ?? 'bge-reranker-v2-m3';
const API_VERSION = process.env.PINECONE_API_VERSION ?? '2025-04';

export type Chunk = { text: string; score: number; source?: string; page?: number };

export async function searchContext(
  query: string,
  namespace: string,
  opts: { topK?: number; topN?: number } = {},
): Promise<Chunk[]> {
  const apiKey = process.env.PINECONE_API_KEY;
  if (!apiKey) throw new Error('PINECONE_API_KEY ortam değişkeni eksik.');

  const { topK = 15, topN = 5 } = opts;
  const url = `https://${INDEX_HOST}/records/namespaces/${encodeURIComponent(namespace)}/search`;

  const body = {
    query: { inputs: { text: query }, top_k: topK },
    rerank: { model: RERANKER, top_n: topN, rank_fields: ['text'] },
    fields: ['text', 'source', 'file', 'page'],
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Api-Key': apiKey,
      'Content-Type': 'application/json',
      'X-Pinecone-API-Version': API_VERSION,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    throw new Error(`Pinecone search ${res.status}: ${errText.slice(0, 200)}`);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const json: any = await res.json();
  const hits = json?.result?.hits ?? [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return hits.map((h: any) => ({
    text: String(h.fields?.text ?? ''),
    score: Number(h._score ?? 0),
    source: h.fields?.source ?? h.fields?.file,
    page: h.fields?.page,
  }));
}
