/**
 * DUS Bankası — Hedef Yönetimi (saf modül)
 *
 * localStorage tabanlı hedef CRUD, ilerleme takibi, milestone tespiti.
 * Zustand store ile değil doğrudan localStorage ile çalışır —
 * store katmanı bunu sarmalar.
 */

import type {
  UserGoals, GoalProgress, Milestone, GoalAlert, CustomGoal,
} from '../types/app';
import type { OverviewStats, ActivityPoint } from './stats';

const GOALS_KEY = 'dus_user_goals';
const MILESTONE_KEY = 'dus_milestones_seen';

export const DEFAULT_GOALS: UserGoals = {
  dailyQuestions: 200,
  weeklyQuestions: 1400,
  targetAccuracy: 80,
  targetCoverage: 90,
  targetMastered: 5000,
  targetStreak: 150,
  targetDusNet: 95,
  customGoals: [],
};

// ─── CRUD ──────────────────────────────────────────────────────────────────

export function loadGoals(): UserGoals {
  try {
    const raw = localStorage.getItem(GOALS_KEY);
    if (!raw) return { ...DEFAULT_GOALS };
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_GOALS, ...parsed, customGoals: parsed.customGoals ?? [] };
  } catch {
    return { ...DEFAULT_GOALS };
  }
}

export function saveGoals(goals: UserGoals): void {
  try {
    localStorage.setItem(GOALS_KEY, JSON.stringify(goals));
  } catch {
    console.warn('[goals] localStorage yazma hatası');
  }
}

export function addCustomGoal(goals: UserGoals, goal: CustomGoal): UserGoals {
  return { ...goals, customGoals: [...goals.customGoals, goal] };
}

export function updateCustomGoal(goals: UserGoals, id: string, current: number): UserGoals {
  return {
    ...goals,
    customGoals: goals.customGoals.map(g => g.id === id ? { ...g, current } : g),
  };
}

export function removeCustomGoal(goals: UserGoals, id: string): UserGoals {
  return { ...goals, customGoals: goals.customGoals.filter(g => g.id !== id) };
}

// ─── İlerleme Hesaplama ───────────────────────────────────────────────────

export function computeGoalProgress(
  goals: UserGoals,
  overview: OverviewStats,
  activity: ActivityPoint[],
): GoalProgress[] {
  const today = activity[activity.length - 1];
  const todayCount = today?.count ?? 0;
  const weekCount = activity.slice(-7).reduce((s, a) => s + a.count, 0);
  const streak = loadStreakForProgress();

  const progress: GoalProgress[] = [
    {
      goalKey: 'dailyQuestions',
      label: 'Günlük Soru',
      current: todayCount,
      target: goals.dailyQuestions,
      pct: Math.min(100, Math.round((todayCount / goals.dailyQuestions) * 100)),
      onTrack: todayCount >= goals.dailyQuestions * 0.8,
      icon: 'Target',
    },
    {
      goalKey: 'weeklyQuestions',
      label: 'Haftalık Soru',
      current: weekCount,
      target: goals.weeklyQuestions,
      pct: Math.min(100, Math.round((weekCount / goals.weeklyQuestions) * 100)),
      onTrack: weekCount >= goals.weeklyQuestions * 0.7,
      icon: 'Stack',
    },
    {
      goalKey: 'targetAccuracy',
      label: 'Doğruluk',
      current: overview.accuracy,
      target: goals.targetAccuracy,
      pct: Math.min(100, Math.round((overview.accuracy / goals.targetAccuracy) * 100)),
      onTrack: overview.accuracy >= goals.targetAccuracy * 0.9,
      icon: 'CheckCircle',
    },
    {
      goalKey: 'targetCoverage',
      label: 'Kapsama',
      current: overview.coverage,
      target: goals.targetCoverage,
      pct: Math.min(100, Math.round((overview.coverage / goals.targetCoverage) * 100)),
      onTrack: overview.coverage >= goals.targetCoverage * 0.8,
      icon: 'BookOpen',
    },
    {
      goalKey: 'targetMastered',
      label: 'Uzmanlaşma',
      current: overview.masteredUnique,
      target: goals.targetMastered,
      pct: Math.min(100, Math.round((overview.masteredUnique / goals.targetMastered) * 100)),
      onTrack: overview.masteredUnique >= goals.targetMastered * 0.7,
      icon: 'Crown',
    },
    {
      goalKey: 'targetStreak',
      label: 'Seri',
      current: streak,
      target: goals.targetStreak,
      pct: Math.min(100, Math.round((streak / goals.targetStreak) * 100)),
      onTrack: streak >= goals.targetStreak * 0.8,
      icon: 'Flame',
    },
  ];

  // Custom goals
  for (const cg of goals.customGoals) {
    progress.push({
      goalKey: `custom_${cg.id}`,
      label: cg.title,
      current: cg.current,
      target: cg.target,
      pct: Math.min(100, Math.round((cg.current / cg.target) * 100)),
      onTrack: cg.current >= cg.target * 0.7,
      icon: 'GitBranch',
    });
  }

  return progress;
}

// ─── Milestone Tespiti ─────────────────────────────────────────────────────

const MILESTONE_DEFS: { key: string; thresholds: number[]; template: string }[] = [
  { key: 'solved', thresholds: [100, 500, 1000, 2500, 5000, 7500, 10000], template: '{n} soru çözüldü!' },
  { key: 'mastered', thresholds: [100, 500, 1000, 2500, 5000], template: '{n} soruda uzmanlaşıldı!' },
  { key: 'streak', thresholds: [7, 14, 30, 50, 100, 150], template: '{n} günlük seri!' },
  { key: 'coverage', thresholds: [25, 50, 75, 90, 100], template: 'Banka %{n} tarandı!' },
];

export function detectMilestones(overview: OverviewStats, streak: number): Milestone[] {
  const seen = loadSeenMilestones();
  const milestones: Milestone[] = [];
  const now = new Date().toISOString();

  for (const def of MILESTONE_DEFS) {
    let current = 0;
    if (def.key === 'solved') current = overview.solvedUnique;
    else if (def.key === 'mastered') current = overview.masteredUnique;
    else if (def.key === 'streak') current = streak;
    else if (def.key === 'coverage') current = overview.coverage;

    for (const t of def.thresholds) {
      const id = `${def.key}_${t}`;
      if (current >= t && !seen.has(id)) {
        milestones.push({
          type: def.key,
          message: def.template.replace('{n}', t.toLocaleString('tr-TR')),
          reachedAt: now,
        });
        seen.add(id);
      }
    }
  }

  saveSeenMilestones(seen);
  return milestones;
}

function loadSeenMilestones(): Set<string> {
  try {
    const raw = localStorage.getItem(MILESTONE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set<string>();
  } catch {
    return new Set();
  }
}

function saveSeenMilestones(seen: Set<string>): void {
  try {
    localStorage.setItem(MILESTONE_KEY, JSON.stringify([...seen]));
  } catch { /* noop */ }
}

// ─── Goal Alert'leri ──────────────────────────────────────────────────────

export function generateGoalAlerts(progress: GoalProgress[]): GoalAlert[] {
  const alerts: GoalAlert[] = [];

  for (const p of progress) {
    if (p.pct >= 100) {
      alerts.push({
        level: 'success',
        message: `${p.label} hedefi tamamlandı!`,
        goalKey: p.goalKey,
      });
    } else if (p.pct < 30 && p.current > 0) {
      alerts.push({
        level: 'warning',
        message: `${p.label}: hedefin %${p.pct}'indesin`,
        goalKey: p.goalKey,
      });
    }
  }

  return alerts.slice(0, 3);
}

// ─── Yardımcı ─────────────────────────────────────────────────────────────

function loadStreakForProgress(): number {
  try {
    const raw = localStorage.getItem('dus_study_streak');
    if (!raw) return 0;
    return JSON.parse(raw).currentStreak ?? 0;
  } catch {
    return 0;
  }
}
