/**
 * DUS Bankası — Adaptive Soru Seçim Motoru
 *
 * Priority queue — 2 sinyal birleştirme:
 *   Sinyal 1 — Weakness Score:      Hata pattern + doğruluk oranı düşük sorulara ağırlık.
 *   Sinyal 2 — New Exploration:     Hiç görülmemiş sorular keşif önceliği alır.
 *   + Interleaving:                 Ardışık sorular farklı derslerden seçilir (discriminative learning).
 *
 * NOT: Uygulama tamamen istatistik bazlıdır — vade/urgency/scheduling YOKTUR.
 */

import type { Question } from '../data';
import type { StatsMap } from './stats';
import { fisherYates } from './shuffle';
import { DEFAULT_ADAPTIVE_WEIGHTS, type AdaptiveWeights } from '../config/learning';

// ─── Sabitler ──────────────────────────────────────────────────────────────
// Ağırlıklar src/config/learning.ts'ten gelir — runtime'da override edilebilir.
let _weights: AdaptiveWeights = { ...DEFAULT_ADAPTIVE_WEIGHTS };

/** Adaptive ağırlıkları runtime'da günceller (Dinamik Kalibrasyon için). */
export function setAdaptiveWeights(w: Partial<AdaptiveWeights>): void {
  _weights = { ..._weights, ...w };
}

/** Mevcut ağırlıkları döner (debug / test için). */
export function getAdaptiveWeights(): AdaptiveWeights {
  return { ..._weights };
}

// ─── Priority Hesaplama ────────────────────────────────────────────────────

interface ScoredQuestion {
  question: Question;
  priority: number;
  reason: 'weak' | 'new';
}

/**
 * Yakın tarihte yapılan yanlışlar için recency bonusu hesaplar.
 * Son 3 gün: +0.30, son 7 gün: +0.22, son 14 gün: +0.15, son 30 gün: +0.08.
 */
function getRecencyBonus(lastSeenStr?: string, nowMs = Date.now()): number {
  if (!lastSeenStr) return 0;
  const dateMs = Date.parse(lastSeenStr);
  if (Number.isNaN(dateMs)) return 0;
  const daysDiff = Math.max(0, (nowMs - dateMs) / (1000 * 60 * 60 * 24));
  if (daysDiff <= 3) return 0.30;
  if (daysDiff <= 7) return 0.22;
  if (daysDiff <= 14) return 0.15;
  if (daysDiff <= 30) return 0.08;
  return 0.02;
}

/**
 * Soru öncelik puanı hesaplama:
 * - Temel/klinik ayrımı YOKTUR; tüm derslerin ağırlığı eşittir (1.0).
 * - Favorilenmiş sorular: +0.35 öncelik bonusu.
 * - En az 2 kez yanlış yapılmış sorular (kronik hata): +0.30 öncelik bonusu.
 * - Yeni tarihte yanlış yapılmış sorular: Recency bonusu (+0.08 .. +0.30).
 */
export function scoreQuestion(q: Question, stats: StatsMap, nowMs = Date.now()): ScoredQuestion {
  const stat = stats[q.id];

  // 1. Yeni soru (hiç çözülmemiş)
  if (!stat || stat.attempts === 0) {
    let p = _weights.newExploration * (0.3 + Math.random() * 0.2);
    if (q.is_favorite) {
      p += 0.35; // Henüz çözülmemiş olsa dahi favorilenmiş soru öncelik alır
    }
    return { question: q, priority: p, reason: 'new' };
  }

  // 2. Çözülmüş soru analizi
  const wrongCount = Math.max(0, stat.attempts - stat.corrects);
  const correctRate = stat.corrects / stat.attempts;
  const isWrongAtLeastTwice = wrongCount >= 2;

  // Temel zayıflık skoru (0-1)
  const weaknessBase = 1 - correctRate;
  const wrongChoicesBonus = Math.min(0.2, (stat.wrongChoices?.length ?? 0) * 0.04);

  // Kronik hata bonusu: En az 2 kez yanlış yapılmış sorular
  const chronicWrongBonus = isWrongAtLeastTwice ? 0.30 : (wrongCount === 1 ? 0.10 : 0);

  // Recency bonusu: Daha yeni tarihte yanlış yapılmış sorular
  const recencyBonus = wrongCount > 0 ? getRecencyBonus(stat.lastSeen, nowMs) : 0;

  // Favori bonusu: Favorilenmiş sorular
  const favoriteBonus = q.is_favorite ? 0.35 : 0;

  // Toplam zayıflık önceliği (tüm dersler eşit ağırlıklıdır)
  const priority = (_weights.weakness * (weaknessBase * 0.5 + wrongChoicesBonus))
    + chronicWrongBonus
    + recencyBonus
    + favoriteBonus
    + (Math.random() * 0.02); // tiny tie-break jitter

  return { question: q, priority, reason: 'weak' };
}

// ─── Interleaving Filter ───────────────────────────────────────────────────

/**
 * Rohrer & Taylor (2007) interleaving: ardışık soruların dersleri farklı olmalı.
 * Algoritma: Greedy — her slotta kalan soruların en yüksek skorlusunu seç,
 * bir önceki soruyla aynı dersten geliyorsa o dersi atla (alternatif yoksa kabul et).
 */
function applyInterleaving(scored: ScoredQuestion[], limit: number): Question[] {
  const sorted = [...scored].sort((a, b) => b.priority - a.priority);
  const result: Question[] = [];
  let lastLesson = '';

  while (result.length < limit && sorted.length > 0) {
    // Farklı dersten ilk adayı bul
    const idx = sorted.findIndex(s => s.question.lesson !== lastLesson);
    const pick = idx !== -1 ? sorted.splice(idx, 1)[0] : sorted.splice(0, 1)[0];
    result.push(pick.question);
    lastLesson = pick.question.lesson;
  }

  return result;
}

// ─── Public API ────────────────────────────────────────────────────────────

export type SmartQueueOptions = {
  limit?: number;          // max soru sayısı (default 40)
  includeWeak?: boolean;   // zayıf sorular dahil et (default true)
  includeNew?: boolean;    // yeni sorular dahil et (default true)
  lesson?: string;         // belirli bir ders seçilmişse yalnız o dersin soruları (ders bazlı mod)
  nowMs?: number;          // test edilebilir timestamp
};

export type SmartQueueStats = {
  weakCount: number;
  newCount: number;
  totalSelected: number;
};

/**
 * Adaptive soru kuyruğu oluşturur.
 * Döner: seçilen sorular (interleaved sırada veya ders bazlı) + özet istatistikler.
 */
export function buildSmartQueue(
  questions: Question[],
  stats: StatsMap,
  options: SmartQueueOptions = {}
): { questions: Question[]; breakdown: SmartQueueStats } {
  const { limit = 40, includeWeak = true, includeNew = true, lesson, nowMs } = options;

  const scored: ScoredQuestion[] = [];

  for (const q of questions) {
    // Eğer belirli bir ders seçildiyse diğer dersleri atla
    if (lesson && q.lesson !== lesson) continue;

    const s = scoreQuestion(q, stats, nowMs);

    // Filtre: kullanıcı tercihleri
    if (s.reason === 'weak' && !includeWeak) continue;
    if (s.reason === 'new' && !includeNew) continue;

    scored.push(s);
  }

  // Belirli bir ders seçilmişse interleaving yerine doğrudan priority sıralı al
  const selectedQuestions = lesson
    ? scored.sort((a, b) => b.priority - a.priority).slice(0, limit).map(s => s.question)
    : applyInterleaving(scored, limit);

  // Breakdown hesapla
  const inSet = new Set(selectedQuestions.map(q => q.id));
  const selected = scored.filter(s => inSet.has(s.question.id));
  const breakdown: SmartQueueStats = {
    weakCount: selected.filter(s => s.reason === 'weak').length,
    newCount: selected.filter(s => s.reason === 'new').length,
    totalSelected: selectedQuestions.length,
  };

  return { questions: selectedQuestions, breakdown };
}


// ─── Günlük Plan Orkestrasyon Yardımcıları ─────────────────────────────────
// Rapor §3.5

export type WeakUnit = {
  lesson: string;
  unit: string;
  accuracy: number;     // 0-100
  attempts: number;
  wrongChoiceCount: number;
};

/**
 * Hata pattern + düşük accuracy bazlı en zayıf N üniteyi döner.
 * DailyPlanView Bölüm 2 için kullanılır.
 */
export function getWeakestUnits(
  questions: Question[],
  stats: StatsMap,
  topN = 2,
  minAttempts = 5
): WeakUnit[] {
  const unitMap = new Map<string, { lesson: string; unit: string; attempts: number; corrects: number; wrongChoices: number }>();

  for (const q of questions) {
    const key = `${q.lesson}|||${q.unit}`;
    if (!unitMap.has(key)) unitMap.set(key, { lesson: q.lesson, unit: q.unit, attempts: 0, corrects: 0, wrongChoices: 0 });
    const u = unitMap.get(key)!;
    const s = stats[q.id];
    if (s && s.attempts > 0) {
      u.attempts += s.attempts;
      u.corrects += s.corrects;
      u.wrongChoices += s.wrongChoices?.length ?? 0;
    }
  }

  return Array.from(unitMap.values())
    .filter(u => u.attempts >= minAttempts)
    .map(u => ({
      lesson: u.lesson,
      unit: u.unit,
      accuracy: Math.round((u.corrects / u.attempts) * 100),
      attempts: u.attempts,
      wrongChoiceCount: u.wrongChoices,
    }))
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, topN);
}

// ─── Unutma Riski (Forgetting Risk) ────────────────────────────────────────
// Faz 3 §3.3 — FSRS/scheduling YOK (gemini.md §3.1); basit eşik kuralı:
// 30+ gündür görülmemiş VE accuracy < %80 olan sorular ders bazında gruplanır.

export type ForgettingRiskGroup = {
  lesson: string;
  count: number;
  questionIds: string[];
};

const FORGETTING_RISK_DAYS = 30;
const FORGETTING_RISK_MAX_ACCURACY = 0.8;

/**
 * "30+ gündür görülmemiş && accuracy < %80" sorularını ders bazında gruplar.
 * Her grup, `buildSmartQueue`'ya beslenecek soru ID listesiyle birlikte döner.
 */
export function computeForgettingRisk(
  questions: Question[],
  stats: StatsMap,
  nowMs: number = Date.now(),
): ForgettingRiskGroup[] {
  const thresholdMs = FORGETTING_RISK_DAYS * 24 * 60 * 60 * 1000;
  const groups = new Map<string, { count: number; questionIds: string[] }>();

  for (const q of questions) {
    const s = stats[q.id];
    if (!s || s.attempts === 0 || !s.lastSeen) continue;

    const lastSeenMs = Date.parse(s.lastSeen);
    if (Number.isNaN(lastSeenMs) || nowMs - lastSeenMs < thresholdMs) continue;

    const accuracy = s.corrects / s.attempts;
    if (accuracy >= FORGETTING_RISK_MAX_ACCURACY) continue;

    if (!groups.has(q.lesson)) groups.set(q.lesson, { count: 0, questionIds: [] });
    const g = groups.get(q.lesson)!;
    g.count++;
    g.questionIds.push(q.id);
  }

  return Array.from(groups.entries())
    .map(([lesson, g]) => ({ lesson, count: g.count, questionIds: g.questionIds }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Müfredat ilerleme özeti: hangi ünitelerin hiç çözülmediğini döner.
 * DailyPlanView Bölüm 3 (yeni materyal önerisi) için kullanılır.
 */
export type CurriculumProgress = {
  totalUnits: number;
  solvedUnits: number;    // en az 1 soru çözülmüş
  completedUnits: number; // tüm soruları en az 1 kez çözülmüş
  nextUntouchedUnit: { lesson: string; unit: string; questionCount: number } | null;
};

export function getCurriculumProgress(questions: Question[], stats: StatsMap): CurriculumProgress {
  // Ünite → {total, solved}
  const unitMap = new Map<string, { lesson: string; unit: string; total: number; solved: number }>();

  for (const q of questions) {
    const key = `${q.lesson}|||${q.unit}`;
    if (!unitMap.has(key)) unitMap.set(key, { lesson: q.lesson, unit: q.unit, total: 0, solved: 0 });
    const u = unitMap.get(key)!;
    u.total++;
    const s = stats[q.id];
    if (s && s.attempts > 0) u.solved++;
  }

  const units = Array.from(unitMap.values());
  const solvedUnits = units.filter(u => u.solved > 0).length;
  const completedUnits = units.filter(u => u.solved >= u.total).length;

  // Hiç dokunulmamış ilk ünite (lesson alfabetik, unit alfabetik)
  const untouched = units
    .filter(u => u.solved === 0)
    .sort((a, b) => a.lesson.localeCompare(b.lesson) || a.unit.localeCompare(b.unit));

  return {
    totalUnits: units.length,
    solvedUnits,
    completedUnits,
    nextUntouchedUnit: untouched.length > 0
      ? { lesson: untouched[0].lesson, unit: untouched[0].unit, questionCount: untouched[0].total }
      : null,
  };
}

// ─── Soru Havuzu Kurma (Konsolide) ─────────────────────────────────────────
// App.tsx'te 3 yerde tekrar eden unseen-first + weighted + fisherYates + interleave
// mantığının tek yerden servis edilen halleri.

/**
 * Tek ünite için soru kuyruğu: unseen sorular önce, her grup kendi içinde Fisher-Yates.
 * (handleUnitSelect ve onStartWeakUnit callsite'larında kullanılır.)
 */
export function buildUnitQueue(
  allQuestions: Question[],
  lesson: string,
  unit: string,
  stats: StatsMap,
): Question[] {
  const unitQs = allQuestions.filter(q => q.unit === unit && q.lesson === lesson);
  const unseen = fisherYates(unitQs.filter(q => !stats[q.id] || stats[q.id].attempts === 0));
  const seen   = fisherYates(unitQs.filter(q => stats[q.id] && stats[q.id].attempts > 0));
  return [...unseen, ...seen];
}

// ─── Görülme Durumuna Göre Dağılım (80 / 15 / 5) ────────────────────────────
// Deneme, Favori, Simülasyon ve Günün Denemesi havuzları aynı seçim oranını paylaşır:
//   %80 hiç görülmemiş · %15 daha önce en az 1 kez yanlış · %5 doğru çözülmüş.
// Bir kova yetersizse açık, görülmemiş öncelikli olarak kalan sorulardan kapatılır.

export const EXPOSURE_MIX = { unseen: 0.8, wrongBefore: 0.15, correctBefore: 0.05 } as const;

/** DUS simülasyonunda havuz dışı bırakılan ders adları (normalize edilmiş). */
function isExcludedSimLesson(lesson: string): boolean {
  const n = lesson.trim().toLocaleLowerCase('tr');
  return n.includes('yanlışlar') || n.includes('yanlislar');
}

type ExposureBuckets = { unseen: Question[]; wrongBefore: Question[]; correctBefore: Question[] };

/** Soruları görülme/doğruluk durumuna göre 3 kovaya ayırır. */
function partitionByExposure(qs: Question[], stats: StatsMap): ExposureBuckets {
  const unseen: Question[] = [];
  const wrongBefore: Question[] = [];
  const correctBefore: Question[] = [];
  for (const q of qs) {
    const s = stats[q.id];
    if (!s || s.attempts === 0) unseen.push(q);
    else if (s.corrects < s.attempts) wrongBefore.push(q); // en az 1 kez yanlış
    else correctBefore.push(q);                             // çözülmüş ve hep doğru
  }
  return { unseen, wrongBefore, correctBefore };
}

/**
 * Bir soru havuzundan `count` adet soruyu EXPOSURE_MIX oranında seçer.
 * wrongBefore kovası en çok yanlış yapılan önce gelecek şekilde sıralanır;
 * diğer kovalar Fisher-Yates ile karıştırılır. Açık varsa görülmemiş → yanlış →
 * doğru sırasıyla kalan sorulardan doldurulur. Çıktı sırası bozulmaz (çağıran shuffle eder).
 */
export function pickByExposureMix(qs: Question[], count: number, stats: StatsMap): Question[] {
  if (count <= 0 || qs.length === 0) return [];

  const { unseen, wrongBefore, correctBefore } = partitionByExposure(qs, stats);

  const unseenShuffled = fisherYates(unseen);
  const wrongSorted = [...wrongBefore].sort((a, b) => {
    const sa = stats[a.id], sb = stats[b.id];
    const wa = sa.attempts - sa.corrects;
    const wb = sb.attempts - sb.corrects;
    if (wb !== wa) return wb - wa; // daha çok yanlış önce
    return (sa.corrects / sa.attempts) - (sb.corrects / sb.attempts); // doğruluk düşük önce
  });
  const correctShuffled = fisherYates(correctBefore);

  let nUnseen = Math.round(count * EXPOSURE_MIX.unseen);
  const nWrong = Math.round(count * EXPOSURE_MIX.wrongBefore);
  let nCorrect = count - nUnseen - nWrong;
  if (nCorrect < 0) { nUnseen += nCorrect; nCorrect = 0; }

  const selected = [
    ...unseenShuffled.slice(0, nUnseen),
    ...wrongSorted.slice(0, nWrong),
    ...correctShuffled.slice(0, nCorrect),
  ];

  if (selected.length < count) {
    const usedIds = new Set(selected.map(q => q.id));
    const leftovers = [
      ...unseenShuffled.slice(nUnseen),
      ...wrongSorted.slice(nWrong),
      ...correctShuffled.slice(nCorrect),
    ].filter(q => !usedIds.has(q.id));
    selected.push(...leftovers.slice(0, count - selected.length));
  }

  return selected;
}

/**
 * DUS Simülasyon soru havuzu:
 *   - "YANLIŞLARIM" dersi havuz dışı bırakılır.
 *   - Var olan derslerden eşit sayıda soru: Math.floor(amount / lessonCount) + remainder dağıtımı.
 *   - Her derste EXPOSURE_MIX (80/15/5) oranıyla seçim yapılır.
 *   - Bazı dersler yetersizse global açık, kalan (hariç tutulanlar dışındaki) sorulardan kapatılır.
 *   - Son global Fisher-Yates shuffle ile sıra tamamen random hale getirilir.
 */
export function buildSimulationPool(
  allQuestions: Question[],
  stats: StatsMap,
  amount: number,
): Question[] {
  const lessonMap = new Map<string, Question[]>();
  for (const q of allQuestions) {
    if (isExcludedSimLesson(q.lesson)) continue; // YANLIŞLARIM hariç
    if (!lessonMap.has(q.lesson)) lessonMap.set(q.lesson, []);
    lessonMap.get(q.lesson)!.push(q);
  }

  const lessons = Array.from(lessonMap.keys());
  if (lessons.length === 0) return [];

  const perLesson = Math.floor(amount / lessons.length);
  let remainder = amount - perLesson * lessons.length;
  const selected: Question[] = [];

  for (const [, qs] of lessonMap) {
    const take = perLesson + (remainder > 0 ? 1 : 0);
    if (remainder > 0) remainder--;
    selected.push(...pickByExposureMix(qs, take, stats));
  }

  // Bazı dersler yetersiz kaldıysa global açığı kapat
  if (selected.length < amount) {
    const usedIds = new Set(selected.map(q => q.id));
    const rest = allQuestions.filter(q => !isExcludedSimLesson(q.lesson) && !usedIds.has(q.id));
    selected.push(...pickByExposureMix(rest, amount - selected.length, stats));
  }

  return fisherYates(selected);
}

/**
 * Çoklu ünite sınav havuzu (Deneme / Favori modu):
 *   - Her üniteden eşit sayıda soru: Math.floor(amount / unitCount) + remainder dağıtımı.
 *   - Her ünitede EXPOSURE_MIX (80/15/5) oranıyla seçim yapılır.
 *   - Bazı üniteler yetersizse açık, kalan ünite sorularından kapatılır.
 *   - Son global Fisher-Yates shuffle ile sıra tamamen random hale getirilir.
 *   (handleStartExam callsite'ında kullanılır; filter ile favori havuzu daraltılabilir.)
 */
export function buildExamPool(
  allQuestions: Question[],
  units: Array<{ lesson: string; unit: string }>,
  stats: StatsMap,
  amount: number,
  filter?: (q: Question) => boolean,
): Question[] {
  if (units.length === 0) return [];
  const baseQuestions = filter ? allQuestions.filter(filter) : allQuestions;

  const unitPools = units.map(eu =>
    baseQuestions.filter(q => q.lesson === eu.lesson && q.unit === eu.unit)
  );

  const perUnit = Math.floor(amount / units.length);
  let remainder = amount - perUnit * units.length;
  const selected: Question[] = [];

  for (const qs of unitPools) {
    const take = perUnit + (remainder > 0 ? 1 : 0);
    if (remainder > 0) remainder--;
    selected.push(...pickByExposureMix(qs, take, stats));
  }

  // Bazı üniteler yetersiz kaldıysa açığı diğer ünitelerin kalan sorularından kapat
  if (selected.length < amount) {
    const usedIds = new Set(selected.map(q => q.id));
    const rest = unitPools.flat().filter(q => !usedIds.has(q.id));
    selected.push(...pickByExposureMix(rest, amount - selected.length, stats));
  }

  return fisherYates(selected);
}

// ─── Günün Denemesi Havuzu ─────────────────────────────────────────────────

export type DailyExamBreakdown = {
  totalPool: number;
  unseenCount: number;   // hiç görülmemiş
  wrongCount: number;    // daha önce en az 1 kez yanlış
  correctCount: number;  // daha önce doğru çözülmüş
};

/**
 * Günün Denemesi soru havuzu:
 *   Seçilen ünitelerden eşit dağılımla, EXPOSURE_MIX (80/15/5) oranında soru seçer
 *   (%80 görülmemiş · %15 en az 1 yanlış · %5 doğru çözülmüş). Yetersizse görülmemiş
 *   öncelikli olarak kalan sorulardan doldurulur.
 */
export function buildDailyExam(
  allQuestions: Question[],
  units: Array<{ lesson: string; unit: string }>,
  stats: StatsMap,
  count: number,
): { questions: Question[]; breakdown: DailyExamBreakdown } {
  const pool = allQuestions.filter(q =>
    units.some(u => u.lesson === q.lesson && u.unit === q.unit)
  );

  const questions = buildExamPool(allQuestions, units, stats, count);

  let unseenCount = 0, wrongCount = 0, correctCount = 0;
  for (const q of questions) {
    const s = stats[q.id];
    if (!s || s.attempts === 0) unseenCount++;
    else if (s.corrects < s.attempts) wrongCount++;
    else correctCount++;
  }

  return {
    questions,
    breakdown: { totalPool: pool.length, unseenCount, wrongCount, correctCount },
  };
}
