/**
 * DUS Bankası — Akıllı Çalışma Öneri Motoru (saf modül)
 *
 * İstatistik verisinden ders/ünite önceliklendirme, günlük öneri
 * ve hata pattern analizi üretir. Tüm fonksiyonlar SAF'tır.
 */

import type { Question } from '../data';
import type { OverviewStats, StatsMap } from './stats';
import type { LessonConsistency } from './metrics';
import type {
  LessonPriority, UnitFocusItem, DailyRecommendation, ErrorPattern, UserGoals,
} from '../types/app';
import { getLessonWeight } from './dusScoring';

// ─── Ders Öncelik Sıralaması ──────────────────────────────────────────────

/**
 * (zayıflık × kapsama açığı × DUS ağırlığı) formülüyle dersleri öncelik sıralar.
 * Yüksek priority = acil çalışılması gereken ders.
 */
export function computeLessonPriority(
  overview: OverviewStats,
  consistency: LessonConsistency[],
): LessonPriority[] {
  const result: LessonPriority[] = [];

  for (const l of overview.byLesson) {
    const dusWeight = getLessonWeight(l.lesson) * 20; // 0-1 arası → 0-20 ölçeği
    const weakness = 100 - l.accuracy; // 0-100
    const coverageGap = 100 - l.coverage; // 0-100
    const consistencyBonus = consistency.find(c => c.lesson === l.lesson)?.consistency ?? 50;

    // Tutarsızlık bonusu: varyans yüksekse öncelik artar (zayıf üniteler var demek)
    const inconsistencyPenalty = (100 - consistencyBonus) * 0.3;

    const priority = Math.round(
      (weakness * 0.4 + coverageGap * 0.3 + dusWeight * 1.5 + inconsistencyPenalty) / 10
    );

    let reason = '';
    if (weakness > 50) reason = `Doğruluk düşük (%${l.accuracy})`;
    else if (coverageGap > 50) reason = `Kapsama düşük (%${l.coverage})`;
    else if (dusWeight > 1.5) reason = 'DUS ağırlığı yüksek';
    else reason = 'Performans dengelenmeli';

    result.push({
      lesson: l.lesson,
      priority: Math.max(1, priority),
      reason,
      suggestedDailyQuestions: Math.max(20, Math.round(coverageGap * 2)),
    });
  }

  return result.sort((a, b) => b.priority - a.priority);
}

// ─── Ünite Odak Listesi ───────────────────────────────────────────────────

export function computeUnitFocusList(
  questions: Question[],
  stats: StatsMap,
  topN: number = 5,
): UnitFocusItem[] {
  const unitMap = new Map<string, { lesson: string; unit: string; total: number; corrects: number; attempts: number }>();

  for (const q of questions) {
    const key = `${q.lesson}::${q.unit}`;
    let entry = unitMap.get(key);
    if (!entry) {
      entry = { lesson: q.lesson, unit: q.unit, total: 0, corrects: 0, attempts: 0 };
      unitMap.set(key, entry);
    }
    entry.total++;

    const s = stats[q.id];
    if (s && s.attempts > 0) {
      entry.corrects += s.corrects;
      entry.attempts += s.attempts;
    }
  }

  const items: UnitFocusItem[] = [];
  for (const [, e] of unitMap) {
    const coverage = e.total > 0 ? (e.attempts > 0 ? 100 : 0) : 0;
    const accuracy = e.attempts > 0 ? Math.round((e.corrects / e.attempts) * 100) : 0;
    const dusWeight = getLessonWeight(e.lesson) * 20;
    const priority = Math.round(((100 - accuracy) * 0.5 + (100 - coverage) * 0.3 + dusWeight) / 10);

    if (e.attempts > 0) {
      items.push({ lesson: e.lesson, unit: e.unit, coverage, accuracy, priority: Math.max(1, priority) });
    }
  }

  return items.sort((a, b) => b.priority - a.priority).slice(0, topN);
}

// ─── Günlük Öneri ─────────────────────────────────────────────────────────

export function computeDailyRecommendation(
  overview: OverviewStats,
  activity: import('./stats').ActivityPoint[],
  goals: UserGoals,
): DailyRecommendation {
  const today = activity[activity.length - 1];
  const todayCount = today?.count ?? 0;
  const remaining = Math.max(0, goals.dailyQuestions - todayCount);

  // En yüksek öncelikli dersi bul
  const priorities = computeLessonPriority(overview, []);
  const topLesson = priorities[0];

  // En acil üniteler
  const focusUnits: string[] = [];

  if (topLesson && overview.byLesson.length > 0) {
    focusUnits.push(topLesson.lesson);
  }

  let message: string;
  if (remaining <= 0) {
    message = `Günlük hedef tamamlandı (${todayCount} soru). Seriyi koru!`;
  } else if (topLesson) {
    message = `${remaining} soru kaldı. ${topLesson.lesson} dersine odaklan — ${topLesson.reason.toLowerCase()}.`;
  } else {
    message = `${remaining} soru kaldı. Hemen başla!`;
  }

  return {
    focusLesson: topLesson?.lesson ?? '',
    suggestedQuestionCount: remaining,
    focusUnits,
    message,
  };
}

// ─── Hata Pattern Analizi ─────────────────────────────────────────────────

/**
 * Yanlış cevap şıklarında tekrarlayan desen arar.
 * Örn: Endodonti'de sürekli B şıkkı işaretlemiş ama cevap C.
 */
export function detectErrorPatterns(stats: StatsMap): ErrorPattern[] {
  const byLesson: Record<string, Record<string, number>> = {};
  const totalWrongByLesson: Record<string, number> = {};
  let totalWrong = 0;

  for (const [, stat] of Object.entries(stats)) {
    for (const w of stat.wrongChoices ?? []) {
      totalWrong++;
      // Lesson bilgisi wrongChoices'ta yok, global analiz yap
      const key = `choice_${w.selected}`;
      if (!byLesson['*']) byLesson['*'] = {};
      byLesson['*'][key] = (byLesson['*'][key] ?? 0) + 1;
      totalWrongByLesson['*'] = (totalWrongByLesson['*'] ?? 0) + 1;
    }
  }

  const patterns: ErrorPattern[] = [];
  const global = byLesson['*'];
  const globalTotal = totalWrongByLesson['*'] ?? 1;

  if (global) {
    for (const [choice, count] of Object.entries(global)) {
      const pct = Math.round((count / globalTotal) * 100);
      if (pct > 22) { // Her şık eşit olsa ~20%
        const letter = choice.replace('choice_', '');
        patterns.push({
          lesson: 'Genel',
          pattern: `${letter} şıkkına eğilim`,
          frequency: count,
          description: `Yanlış cevapların %${pct}'i ${letter} şıkkı — bold prediction tuzağı olabilir.`,
        });
      }
    }
  }

  return patterns.sort((a, b) => b.frequency - a.frequency).slice(0, 5);
}
