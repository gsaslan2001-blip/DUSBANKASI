/**
 * DUS Bankası — Akıllı Öneri Motoru (saf modül)
 *
 * Kullanıcının mevcut istatistiklerinden:
 * 1. Ders öncelik sıralaması (DUS ağırlığı x zayıflık x hacim açığı)
 * 2. Ünite odak listesi (en zayıf ve unutulmaya yüz tutmuş üniteler)
 * 3. Günlük reçete (hedefe kalan + odak dersi)
 * 4. 1-Click CTA için soru ID üreticileri
 */

import type { OverviewStats, StatsMap } from './stats';
import type { Question } from '../data';
import type { LessonConsistency } from './metrics';
import type {
  LessonPriority, UnitFocusItem, DailyRecommendation, ErrorPattern, UserGoals,
} from '../types/app';
import { getLessonWeight } from './dusScoring';
import { buildSmartQueue, scoreQuestion } from './adaptive';

// ─── Ders Öncelik Sıralaması ──────────────────────────────────────────────

export function computeLessonPriority(
  overview: OverviewStats,
  consistency: LessonConsistency[] = [],
): LessonPriority[] {
  const result: LessonPriority[] = [];

  for (const item of overview.byLesson) {
    const weight = getLessonWeight(item.lesson);
    const accuracyDeficit = Math.max(0, 75 - item.accuracy) / 75;
    const coverageDeficit = Math.max(0, 80 - item.coverage) / 80;

    const constEntry = consistency.find(c => c.lesson === item.lesson);
    const instability = constEntry ? (100 - constEntry.consistency) / 100 : 0.5;

    const priorityScore = (
      weight * 0.35 +
      accuracyDeficit * 0.30 +
      coverageDeficit * 0.20 +
      instability * 0.15
    ) * 100;

    let reason: string;
    if (item.solved < 20) {
      reason = 'Henüz yeterince taranmadı';
    } else if (item.accuracy < 50) {
      reason = 'Kritik doğruluk açığı';
    } else if (item.coverage < 40) {
      reason = 'Kapsama çok düşük';
    } else if (instability > 0.6) {
      reason = 'Dalgalı performans';
    } else {
      reason = 'Puan ağırlığı yüksek';
    }

    result.push({
      lesson: item.lesson,
      priority: Math.round(priorityScore),
      reason,
      suggestedDailyQuestions: Math.max(10, Math.round(weight * 25)),
    });
  }

  result.sort((a, b) => b.priority - a.priority);
  return result;
}

// ─── 1-Click CTA Soru Seçicileri (Saf Fonksiyonlar) ─────────────────────────

/**
 * Belirtilen ders için telafi sorularını seçer (önce zayıf ve görülmemiş sorular).
 * 1-Click CTA butonları tarafından doğrudan çağrılır.
 */
export function selectRemedyQuestionsForLesson(
  lesson: string,
  questions: Question[],
  stats: StatsMap = {},
  limit = 20,
): string[] {
  if (!questions || questions.length === 0 || !lesson) return [];
  const lessonQuestions = questions.filter(q => q.lesson === lesson);
  if (lessonQuestions.length === 0) return [];

  const queue = buildSmartQueue(lessonQuestions, stats, { limit, lesson });
  if (queue.questions.length > 0) {
    return queue.questions.map(q => q.id);
  }
  return lessonQuestions.slice(0, limit).map(q => q.id);
}

/**
 * Belirli bir ünitenin sorularını seçer (UnitHeatMap 1-click CTA için: 10 soru).
 * Zayıf ve yeni sorular önceliklendirilir.
 */
export function selectUnitQuestions(
  lesson: string,
  unit: string,
  questions: Question[],
  stats: StatsMap = {},
  limit = 10,
): string[] {
  if (!questions || questions.length === 0 || !lesson || !unit) return [];
  const unitQuestions = questions.filter(q => q.lesson === lesson && q.unit === unit);
  if (unitQuestions.length === 0) return [];

  const scored = unitQuestions.map(q => scoreQuestion(q, stats));
  scored.sort((a, b) => b.priority - a.priority);

  return scored.slice(0, limit).map(s => s.question.id);
}

/**
 * Hız-Doğruluk kadranında kırmızı bölgede (yavaş + hatalı) yer alan ders için
 * öncelikli hatalı soruları seçer.
 */
export function selectSpeedAccuracyRemedyQuestions(
  lesson: string,
  questions: Question[],
  stats: StatsMap = {},
  limit = 20,
): string[] {
  if (!questions || questions.length === 0 || !lesson) return [];
  const lessonQuestions = questions.filter(q => q.lesson === lesson);
  if (lessonQuestions.length === 0) return [];

  const wrongFirst = [...lessonQuestions].sort((a, b) => {
    const sA = stats[a.id];
    const sB = stats[b.id];
    const wrongsA = sA ? Math.max(0, sA.attempts - sA.corrects) : 0;
    const wrongsB = sB ? Math.max(0, sB.attempts - sB.corrects) : 0;
    if (wrongsB !== wrongsA) return wrongsB - wrongsA;
    const accA = sA && sA.attempts > 0 ? sA.corrects / sA.attempts : 1;
    const accB = sB && sB.attempts > 0 ? sB.corrects / sB.attempts : 1;
    return accA - accB;
  });

  return wrongFirst.slice(0, limit).map(q => q.id);
}

// ─── Ünite Odak Listesi ───────────────────────────────────────────────────

export function computeUnitFocusList(
  overview: OverviewStats,
  forgettingRisks: { unit: string; risk: number }[],
  limit = 5,
): UnitFocusItem[] {
  const result: UnitFocusItem[] = [];

  for (const lesson of overview.byLesson) {
    const riskEntry = forgettingRisks.find(r => r.unit === lesson.lesson);
    const forgettingRisk = riskEntry ? riskEntry.risk : 20;

    const priority = Math.round((100 - lesson.accuracy) * 0.6 + forgettingRisk * 0.4);

    result.push({
      lesson: lesson.lesson,
      unit: lesson.lesson,
      coverage: lesson.coverage,
      accuracy: lesson.accuracy,
      priority,
    });
  }

  result.sort((a, b) => b.priority - a.priority || a.accuracy - b.accuracy);
  return result.slice(0, limit);
}

// ─── Günlük Öneri ─────────────────────────────────────────────────────────

export function computeDailyRecommendation(
  overview: OverviewStats,
  activity: import('./stats').ActivityPoint[],
  goals: UserGoals,
  consistency: LessonConsistency[] = [],
  questions: Question[] = [],
  stats: StatsMap = {},
): DailyRecommendation {
  const today = activity[activity.length - 1];
  const todayCount = today?.count ?? 0;
  const remaining = Math.max(0, goals.dailyQuestions - todayCount);

  // Tekil Öneri Motoru: Aynı tutarlı önceliklendirme algoritması
  const priorities = computeLessonPriority(overview, consistency);
  const topLesson = priorities[0];

  // En acil üniteler
  const focusUnits: string[] = [];

  if (topLesson && overview.byLesson.length > 0) {
    focusUnits.push(topLesson.lesson);
  }

  // 1-Click CTA için önerilen soru ID'lerini belirle
  const sessionQuestionCount = 20;
  let questionIds: string[] = [];

  if (questions.length > 0) {
    if (topLesson?.lesson) {
      questionIds = selectRemedyQuestionsForLesson(topLesson.lesson, questions, stats, sessionQuestionCount);
    }
    if (questionIds.length === 0) {
      const generalQueue = buildSmartQueue(questions, stats, { limit: sessionQuestionCount });
      questionIds = generalQueue.questions.map(q => q.id);
    }
  }

  let message: string;
  if (overview.totalAttempts === 0 && overview.solvedUnique === 0) {
    message = topLesson
      ? `Güne güçlü başla: ${topLesson.lesson} dersinden ${sessionQuestionCount} soruyla ilk adımı at.`
      : 'Güne başlamak için önerilen quiz\'i başlat.';
  } else if (remaining <= 0) {
    message = `Günlük hedef tamamlandı (${todayCount} soru). ${topLesson ? `Seriyi korumak için ${topLesson.lesson} telafi setini çöz.` : 'Harika tempo!'}`;
  } else if (topLesson) {
    message = `${remaining} soru kaldı. ${topLesson.lesson} dersine odaklan — ${topLesson.reason.toLowerCase()}.`;
  } else {
    message = `${remaining} soru kaldı. Hemen başla!`;
  }

  return {
    focusLesson: topLesson?.lesson ?? '',
    suggestedQuestionCount: remaining > 0 ? remaining : sessionQuestionCount,
    focusUnits,
    message,
    questionIds,
  };
}

// ─── Hata Kalıpları Analizi ───────────────────────────────────────────────

export function analyzeErrorPatterns(overview: OverviewStats): ErrorPattern[] {
  const patterns: ErrorPattern[] = [];

  for (const lesson of overview.byLesson) {
    if (lesson.attempts < 10) continue;

    if (lesson.accuracy < 40) {
      patterns.push({
        lesson: lesson.lesson,
        pattern: 'Temel kavram eksikliği',
        frequency: Math.round((1 - lesson.accuracy / 100) * lesson.attempts),
        description: `${lesson.lesson} dersinde doğruluk %40'ın altında. Konu tekrarı önerilir.`,
      });
    } else if (lesson.accuracy < 60 && lesson.solved > 30) {
      patterns.push({
        lesson: lesson.lesson,
        pattern: 'Çeldiriciye düşme',
        frequency: Math.round((1 - lesson.accuracy / 100) * lesson.attempts),
        description: `${lesson.lesson} dersinde orta düzey doğruluk (%${lesson.accuracy}). Çeldirici analizi faydalı olabilir.`,
      });
    }
  }

  return patterns;
}
