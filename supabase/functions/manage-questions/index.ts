// Supabase Edge Function — manage-questions
//
// App içi "Soru Ekle" akışının kanonik backend'i. Kalite filtreleri scripts/shared.py
// (_validate_single_question) ile BİREBİR aynıdır; kabul edilen sorulara OpenAI
// text-embedding-3-large (1536-dim) ile stem_embedding + explanation_embedding üretir
// (combined/legacy 'embedding' sütunu DB'den düşürüldü, v4.33) ve questions tablosuna
// 10'arlık chunk'lar hâlinde yazar.
//
// OPENAI_API_KEY yalnızca Edge secret'tan okunur — frontend bundle'ına asla girmez.
//   npx supabase secrets set OPENAI_API_KEY=sk-...
//
// Girdi:  { questions: KanonikSoru[] }
// Çıktı:  { accepted: number, written: number, rejected: {index, reason}[] }

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// ─── Kalite eşikleri (scripts/config.py ile aynı) ───
const MIN_STEM_WORDS = 3;
const MIN_EXPL_WORDS = 5;
const MAX_ANSWER_OVERLAP_RATIO = 0.6;
const MAX_EXPL_OVERLAP_RATIO = 0.6;
const WRITE_CHUNK = 10;

const AI_FILLER_PHRASES = [
  "tebrikler", "bu önemli", "unutulmamalıdır", "unutmayın",
  "akılda tutulmalıdır", "harika bir soru", "harika bir dus",
  "önemli bir ipucu", "dikkat edilmelidir", "başarılar",
  "kolay gelsin", "çalışmaya devam", "endişelenme", "merak etme",
];

const MOJIBAKE_SIGNATURES = [
  "Ã", "Ä", "Å", "â€", "Ð", "þ", "ÿ", "�",
  "ÅŸ", "Ã§", "Ã¼", "Ã¶", "Ä±", "ÄŸ", "Ã‡", "Ã–", "Ãœ",
];

const STOPWORDS = new Set<string>([
  // _TR_STOPWORDS
  "bir","ve","ile","bu","da","de","ki","için","olan","şu","o","ne","en","daha","çok","az","gibi",
  "kadar","sonra","önce","göre","biri","her","hiç","hem","ya","veya","ama","fakat","ancak","değil",
  "mi","mı","mu","mü","var","yok","ise","iken","tarafından","üzerinde","altında","içinde","dışında",
  "arasında","hangi","nasıl","neden","nerede","kim","kimin","buna","bunu","bunda","bunun","bunlar",
  "şuna","şunu","ona","onu","bunları","şunları","onları","aşağıdaki","aşağıda","yukarıdaki","hangisi",
  "birinde","birini","birinin","hepsi","tüm","tamamı",
  "i","ii","iii","iv","v","vi","vii","viii","ix","x",
  // _TR_STOPWORDS_EK
  "olur","olmuş","olmaz","oluşur","oluşan","oluşmaz","edilir","edilmiş","edilmez","edilmektedir",
  "edilmelidir","yapılır","yapılmış","yapılmaz","yapılmaktadır","yapılmalıdır","görülür","görülmüş",
  "görülmez","görülmektedir","alınır","verilir","geçer","gider","gelir","alınmaktadır","verilmektedir",
  "geçmektedir","tutulmaktadır","taşımaktadır","sürmektedir","kabul","tanımlanır","bilinir","sayılır",
  "ifade","belirtilen","vurgulanan","yardır","izlenir","saptanır","tespit","meydana","ortaya","çıkar",
  "yer","alır","söz","konusudur","bilinmektedir","düşünülmektedir","belirtilmektedir","vurgulanmaktedir",
  "öngörülmektedir","gerektirir","sağlar","içerir","olmaktadır","olunmaktadır","artık","hâlâ","henüz",
  "zaten","çoktan","yalnızca","sadece","yani","işte","aslında","esasen","özünde","temelde","itibaren",
  "başlayarak","süresince","sırasında","sürecinde","esnasında","boyunca","oldukça","epey","hayli","pek",
  "son","derece","fazlasıyla","gayet","nispeten","görece","kısmen","tamamen","tümüyle","büsbütün",
  "kesinlikle","mutlaka","zorunlu","ağırlıklı","büyük","ölçüde","karşın","rağmen","öte","yandan",
  "yanında","yanı","sıra","ek","açıdan","bağlamda","doğrultuda","şekilde","biçimde","çünkü","dolayısıyla",
  "sonucu","sonucunda","nedeniyle","yoluyla","olup","olmak","temel","ana","asıl","esas","başlıca",
  "önemli","kritik","ciddi","belirgin","belirli","spesifik","ilgili","uygun","bazı","birkaç","birçok",
  "çeşitli","sayıda","çoğunluğu","kısmı","bölümü","diğer",
]);

function tokenize(text: string): Set<string> {
  let t = (text || "").toLowerCase();
  t = t.replace(/[^\p{L}\p{N}\s]/gu, " "); // noktalama → boşluk
  t = t.replace(/\d+/g, " "); // rakamları temizle
  const out = new Set<string>();
  for (const w of t.split(/\s+/)) {
    if (w && !STOPWORDS.has(w)) out.add(w);
  }
  return out;
}

function intersectCount(a: Set<string>, b: Set<string>): number {
  let n = 0;
  for (const x of a) if (b.has(x)) n++;
  return n;
}

type Canonical = {
  question?: string;
  options?: Record<string, string>;
  correctAnswer?: string;
  explanation?: string;
  lesson?: string;
  unit?: string;
};

// scripts/shared.py::_validate_single_question ile birebir
function validateOne(q: Canonical): string | null {
  const opts = q.options || {};
  // 1.a — 5 şık tam mı?
  for (const k of ["A", "B", "C", "D", "E"]) {
    const v = opts[k];
    if (typeof v !== "string" || !v.trim()) return "eksik_sik";
  }
  // 1.b — correctAnswer A-E mi?
  const ca = (q.correctAnswer || "").trim().toUpperCase();
  if (!["A", "B", "C", "D", "E"].includes(ca)) return `gecersiz_correctAnswer:${q.correctAnswer}`;

  // 1.c — soru kökü min kelime
  const stem = (q.question || "").trim();
  const stemWords = stem ? stem.split(/\s+/) : [];
  if (stemWords.length < MIN_STEM_WORDS) return `kisa_stem:${stemWords.length}kelime`;

  // 1.d — explanation
  const expl = (q.explanation || "").trim();
  if (!expl) return "bos_explanation";
  const explWords = expl.split(/\s+/);
  if (explWords.length < MIN_EXPL_WORDS) return `kisa_explanation:${explWords.length}kelime`;

  // 1.e — AI dolgu cümlesi
  const explLower = expl.toLowerCase();
  if (AI_FILLER_PHRASES.some((p) => explLower.includes(p))) return "ai_dolgu_cumlesi";

  // 1.f — mojibake
  const blob = stem + " " + expl + " " + Object.values(opts).join(" ");
  if (MOJIBAKE_SIGNATURES.some((s) => blob.includes(s))) return "bozuk_karakter";

  // Filtre 3 — bilgi sızıntısı
  const stemTokens = tokenize(stem);
  const caTokens = tokenize(opts[ca] || "");
  if (caTokens.size >= 3) {
    const ratio = intersectCount(caTokens, stemTokens) / caTokens.size;
    if (ratio > MAX_ANSWER_OVERLAP_RATIO) return `bilgi_sizintisi:overlap_${ratio.toFixed(2)}`;
  }

  // Filtre 4 — zayıf açıklama (totoloji)
  const explTokens = tokenize(expl);
  if (explTokens.size >= 5) {
    const ratio = intersectCount(explTokens, stemTokens) / explTokens.size;
    if (ratio > MAX_EXPL_OVERLAP_RATIO) return `zayif_aciklama:overlap_${ratio.toFixed(2)}`;
  }

  // Ders/ünite zorunlu (CLAUDE.md: lesson/unit NOT NULL)
  if (!(q.lesson || "").trim() || !(q.unit || "").trim()) return "eksik_ders_unite";

  return null;
}

async function embedBatch(texts: string[], apiKey: string, dimensions = 1536, model = "text-embedding-3-small"): Promise<number[][]> {
  const resp = await fetch("https://api.openai.com/v1/embeddings", {
    method: "POST",
    headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ model, input: texts, dimensions }),
  });
  if (!resp.ok) throw new Error(`OpenAI embedding ${resp.status}: ${await resp.text()}`);
  const data = await resp.json();
  return data.data.map((d: { embedding: number[] }) => d.embedding);
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "POST bekleniyor" }), {
      status: 405, headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
  const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY") || "";

  let body: { questions?: Canonical[] };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Geçersiz JSON" }), {
      status: 400, headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  const questions = Array.isArray(body.questions) ? body.questions : [];
  if (questions.length === 0) {
    return new Response(JSON.stringify({ error: "questions boş" }), {
      status: 400, headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  // ── Doğrulama ──
  const accepted: Canonical[] = [];
  const rejected: { index: number; reason: string }[] = [];
  questions.forEach((q, i) => {
    const reason = validateOne(q);
    if (reason) rejected.push({ index: i, reason });
    else accepted.push(q);
  });

  if (accepted.length === 0) {
    return new Response(JSON.stringify({ accepted: 0, written: 0, rejected }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  // ── Embedding (kabul edilenler için — yalnızca audit vektörleri) ──
  let stemEmbeddings: number[][] = [];
  let explEmbeddings: number[][] = [];

  if (OPENAI_API_KEY) {
    try {
      const stemTexts = accepted.map((q) => q.question || "");
      const explTexts = accepted.map((q) => q.explanation || "");

      const [stemRes, explRes] = await Promise.all([
          embedBatch(stemTexts, OPENAI_API_KEY, 1536, "text-embedding-3-large"),
          embedBatch(explTexts, OPENAI_API_KEY, 1536, "text-embedding-3-large")
      ]);
      stemEmbeddings = stemRes;
      explEmbeddings = explRes;
    } catch (e) {
      console.error("Embedding hatası — sorular embeddingsiz yazılacak:", e);
    }
  }

  // ── Row'lar ──
  const rows = accepted.map((q, i) => {
    const opts = q.options || {};
    const ca = (q.correctAnswer || "").trim().toUpperCase();
    const row: Record<string, unknown> = {
      lesson: (q.lesson || "").trim(),
      unit: (q.unit || "").trim(),
      question: (q.question || "").trim(),
      option_a: opts.A, option_b: opts.B, option_c: opts.C, option_d: opts.D, option_e: opts.E,
      correct_answer: ca,
      explanation: (q.explanation || "").trim(),
    };
    if (stemEmbeddings.length > i) row.stem_embedding = stemEmbeddings[i];
    if (explEmbeddings.length > i) row.explanation_embedding = explEmbeddings[i];
    return row;
  });

  // ── Chunked insert (service role → RLS bypass) ──
  let written = 0;
  for (let start = 0; start < rows.length; start += WRITE_CHUNK) {
    const chunk = rows.slice(start, start + WRITE_CHUNK);
    const resp = await fetch(`${SUPABASE_URL}/rest/v1/questions`, {
      method: "POST",
      headers: {
        "apikey": SERVICE_KEY,
        "Authorization": `Bearer ${SERVICE_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=minimal",
      },
      body: JSON.stringify(chunk),
    });
    if (!resp.ok) {
      const txt = await resp.text();
      return new Response(
        JSON.stringify({ accepted: accepted.length, written, rejected, error: `insert ${resp.status}: ${txt}` }),
        { status: 502, headers: { ...cors, "Content-Type": "application/json" } },
      );
    }
    written += chunk.length;
  }

  return new Response(JSON.stringify({ accepted: accepted.length, written, rejected }), {
    headers: { ...cors, "Content-Type": "application/json" },
  });
});
