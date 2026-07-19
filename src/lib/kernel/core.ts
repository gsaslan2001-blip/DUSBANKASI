/**
 * DUS Bankası — Stats Kernel Çekirdeği (SAF — Faz 2)
 *
 * Tüm türetilmiş istatistik verisi tek saf fonksiyondan çıkar. Bu modül ve
 * import zinciri DOM / localStorage / Supabase İÇERMEZ — Web Worker'da çalışır.
 * (overview.ts, projections.ts, dusScoring.ts zinciri saftır; stats.ts'e yalnız
 * `import type` ile dokunulur.)
 *
 * FSRS YASAK (gemini.md §3.1): burada scheduling/retrievability kavramı yoktur;
 * tüm sinyaller doğruluk + hacim + tutarlılık + hata kaydından türetilir.
 */

import type { QuestionSkeleton, Question } from '../../data';
import type { StatsMap, ActivityPoint } from '../stats';
import type { UserGoals, DusScoreEstimate } from '../../types/app';
import { computeOverviewStats, type OverviewStats } from '../overview';
import { computeExamProjection, type ExamProjection } from '../projections';
import { estimateDusNet, getLessonWeight } from '../dusScoring';

// ─── Tipler ──────────────────────────────────────────────────────────────────

export type KernelInput = {
  questions: QuestionSkeleton[];
  stats: StatsMap;
  /** Kronolojik son 90 günlük aktivite. */
  activity: ActivityPoint[];
  goals: UserGoals | null;
  /** Test enjeksiyonu için (ISO). Varsayılan: şimdi. */
  nowIso?: string;
};

export type ParetoItem = {
  id: string;
  lesson: string;
  unit: string;
  /** 0-1 arası öncelik: weakness × DUS ders ağırlığı (normalize). */
  score: number;
  reason: 'weak' | 'new';
  /** Çözülmüşse 0-100 doğruluk, yeni soruda null. */
  accuracy: number | null;
  attempts: number;
};

export type VitalStatus = 'ok' | 'warn' | 'critical';

export type Vital = {
  key: 'accuracy' | 'volume' | 'consistency' | 'coverage';
  label: string;
  /** Gösterilecek ana değer. */
  value: number;
  /** Birim eki ("%", " soru/gün" vb.). */
  suffix: string;
  status: VitalStatus;
  /** Son 14 günlük mini seri (sparkline). */
  series: number[];
  /** Alarm eşikleri — `series` ile aynı birimde (sparkline eşik çizgisi için). */
  warnThreshold: number;
  criticalThreshold: number;
};

export type KernelSnapshot = {
  computedAt: number;
  durationMs: number;
  overview: OverviewStats;
  projection: ExamProjection;
  dusScore: DusScoreEstimate | null;
  vitals: Vital[];
  pareto: ParetoItem[];
};

// ─── Yardımcılar ─────────────────────────────────────────────────────────────

/** DUS simülasyonuyla aynı hariç-tutma: "YANLIŞLARIM" pseudo-dersi kuyruğa girmez. */
function isExcludedLesson(lesson: string): boolean {
  const n = lesson.trim().toLocaleLowerCase('tr');
  return n.includes('yanlışlar') || n.includes('yanlislar');
}

function statusOf(value: number, warnBelow: number, criticalBelow: number): VitalStatus {
  if (value < criticalBelow) return 'critical';
  if (value < warnBelow) return 'warn';
  return 'ok';
}

/**
 * Pareto kuyruğu: "dakika başına en çok DUS puanı kazandıran" soruların yaklaşımı.
 * Öncelik = weakness (adaptive.ts formülü) × ders DUS ağırlığı (normalize).
 * Yeni sorular sabit keşif skoru alır; deterministiktir (jitter YOK — UI'da
 * her recompute'ta liste zıplamasın).
 */
function buildPareto(questions: QuestionSkeleton[], stats: StatsMap, limit = 20): ParetoItem[] {
  const maxWeight = 0.0735; // en yüksek DUS ders ağırlığı — normalize için
  const items: ParetoItem[] = [];

  for (const q of questions) {
    if (isExcludedLesson(q.lesson)) continue;
    const w = getLessonWeight(q.lesson) / maxWeight; // 0-1
    const s = stats[q.id];

    if (!s || s.attempts === 0) {
      // Yeni soru: sabit keşif tabanı — zayıf sorulardan daha düşük öncelik
      items.push({ id: q.id, lesson: q.lesson, unit: q.unit, score: 0.25 * Math.max(0.4, w), reason: 'new', accuracy: null, attempts: 0 });
      continue;
    }

    const correctRate = s.corrects / s.attempts;
    const wrongChoiceCount = s.wrongChoices?.length ?? 0;
    const weakness = Math.min(1, (1 - correctRate) * 0.7 + Math.min(1, wrongChoiceCount / 10) * 0.3);
    if (weakness <= 0.05) continue; // ustalaşılmış — kuyruğa girmesin

    items.push({
      id: q.id,
      lesson: q.lesson,
      unit: q.unit,
      score: weakness * Math.max(0.4, w),
      reason: 'weak',
      accuracy: Math.round(correctRate * 100),
      attempts: s.attempts,
    });
  }

  // Deterministik sıralama + ders çeşitliliği: aynı dersten art arda en fazla 3 soru
  items.sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
  const result: ParetoItem[] = [];
  const lessonRun: { lesson: string; run: number } = { lesson: '', run: 0 };
  const deferred: ParetoItem[] = [];
  for (const it of items) {
    if (result.length >= limit) break;
    if (it.lesson === lessonRun.lesson && lessonRun.run >= 3) { deferred.push(it); continue; }
    if (it.lesson === lessonRun.lesson) lessonRun.run++;
    else { lessonRun.lesson = it.lesson; lessonRun.run = 1; }
    result.push(it);
  }
  for (const it of deferred) {
    if (result.length >= limit) break;
    result.push(it);
  }
  return result;
}

// ─── Ana Hesap ───────────────────────────────────────────────────────────────

export function computeKernelSnapshot(input: KernelInput): KernelSnapshot {
  const t0 = Date.now();
  const now = input.nowIso ? new Date(input.nowIso) : new Date();

  // Skeleton'lar computeOverviewStats için yeterli (id/lesson/unit kullanılır)
  const overview = computeOverviewStats(input.questions as unknown as Question[], input.stats);

  const projection = computeExamProjection({
    solvedUnique: overview.solvedUnique,
    bankTotal: overview.bankTotal,
    activity: input.activity,
    now,
  });

  const dusScore = overview.totalAttempts >= 10 ? estimateDusNet(overview, input.activity) : null;

  const goals = input.goals;
  const dailyTarget = Math.max(1, goals?.dailyQuestions ?? 200);
  const targetAccuracy = goals?.targetAccuracy ?? 80;

  const last14 = input.activity.slice(-14);
  const volumeSeries = last14.map(a => a.count);
  const accuracySeries = last14.map(a => (a.count > 0 ? Math.round((a.correct / Math.max(1, a.correct + a.incorrect)) * 100) : 0));
  const coverageSeries = [overview.coverage]; // kapsama günlük seri tutulmaz — tek nokta
  const consistencySeries = last14.map(a => (a.count > 0 ? 100 : 0));

  const todayCount = input.activity.length > 0 ? input.activity[input.activity.length - 1].count : 0;
  const volumePct = Math.round((todayCount / dailyTarget) * 100);

  const vitals: Vital[] = [
    {
      key: 'accuracy', label: 'Doğruluk', value: overview.accuracy, suffix: '%',
      status: statusOf(overview.accuracy, targetAccuracy * 0.85, 50), series: accuracySeries,
      warnThreshold: targetAccuracy * 0.85, criticalThreshold: 50,
    },
    {
      key: 'volume', label: 'Bugünkü Hacim', value: todayCount, suffix: ` / ${dailyTarget}`,
      status: statusOf(volumePct, 60, 25), series: volumeSeries,
      // volumeSeries ham soru sayısı, eşikler dailyTarget yüzdesi — aynı birime çevrilir.
      warnThreshold: 0.60 * dailyTarget, criticalThreshold: 0.25 * dailyTarget,
    },
    {
      key: 'consistency', label: 'Tutarlılık (30g)', value: projection.consistencyPct, suffix: '%',
      status: statusOf(projection.consistencyPct, 80, 55), series: consistencySeries,
      warnThreshold: 80, criticalThreshold: 55,
    },
    {
      key: 'coverage', label: 'Kapsama', value: overview.coverage, suffix: '%',
      status: statusOf(overview.coverage, 50, 20), series: coverageSeries,
      warnThreshold: 50, criticalThreshold: 20,
    },
  ];

  const pareto = buildPareto(input.questions, input.stats);

  return {
    computedAt: Date.now(),
    durationMs: Date.now() - t0,
    overview,
    projection,
    dusScore,
    vitals,
    pareto,
  };
}
