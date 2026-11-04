import type { QuestionSkeleton } from '../data';
import { compareByCurriculumOrder, getCurriculumWeight } from '../config/curriculum';
import type { StatsMap } from './stats';

export type PickReason = 'unseen' | 'previous_wrong' | 'favorite_correct';

export type StudyQueuePick = {
  questionId: string;
  lesson: string;
  unit: string;
  reason: PickReason;
};

export type StudyQueueManifest = {
  version: 2;
  date: string;
  budget: number;
  questionIds: string[];
  picks: StudyQueuePick[];
  breakdown: {
    unseen: number;
    wrong: number;
    favoriteCorrect: number;
    byLesson: Record<string, number>;
    byUnit: Record<string, number>;
  };
};

export type DailyManifestStore = Pick<Storage, 'getItem' | 'setItem'>;

export type DailyStudyQueueInput = {
  questions: QuestionSkeleton[];
  stats: StatsMap;
  date: string;
  budget: number;
};

export type UnitQuestionSelection =
  | { kind: 'count'; count: number }
  | { kind: 'all' };

const ELIGIBLE_QUALITY_FLAGS = new Set([null, 'reviewed_keep', 'high_yield', 'cikmis']);

type SprintBucket = 'unseen' | 'wrong' | 'favoriteCorrect';

const DAILY_MIX: Record<SprintBucket, number> = {
  unseen: 0.75,
  wrong: 0.20,
  favoriteCorrect: 0.05,
};

function normalizeLesson(value: string): string {
  return value
    .trim()
    .toLocaleLowerCase('tr')
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/ı/g, 'i')
    .replace(/[^a-z0-9]+/g, ' ');
}

function isPastExam(question: QuestionSkeleton): boolean {
  const lesson = normalizeLesson(question.lesson);
  return question.quality_flag === 'cikmis'
    || lesson.includes('cikmis sorular')
    || lesson.includes('pedodonti cikmis');
}

function isWrongLane(question: QuestionSkeleton): boolean {
  return normalizeLesson(question.lesson).includes('yanlislarim');
}

function sprintBucketFor(question: QuestionSkeleton, stats: StatsMap): SprintBucket | null {
  const stat = stats[question.id];
  const attempted = !!stat && stat.attempts > 0;
  if (isWrongLane(question) || (attempted && stat.corrects < stat.attempts)) return 'wrong';
  if (attempted && stat.corrects === stat.attempts && question.is_favorite) return 'favoriteCorrect';
  if (!attempted && question.quality_flag !== 'high_yield' && !isPastExam(question)) return 'unseen';
  return null;
}

function reasonFor(bucket: SprintBucket): PickReason {
  return bucket === 'favoriteCorrect'
    ? 'favorite_correct'
    : bucket === 'wrong'
      ? 'previous_wrong'
      : 'unseen';
}

function lessonWeakness(candidates: QuestionSkeleton[], stats: StatsMap): number {
  let attempts = 0;
  let corrects = 0;
  for (const question of candidates) {
    const stat = stats[question.id];
    if (!stat || stat.attempts === 0) continue;
    attempts += stat.attempts;
    corrects += stat.corrects;
  }
  if (attempts === 0) return 0;
  return Math.max(0, Math.min(1, 1 - (corrects / attempts)));
}

type UnitCoverage = Map<string, { total: number; solved: number }>;

function buildUnitCoverage(candidates: QuestionSkeleton[], stats: StatsMap): UnitCoverage {
  const coverage: UnitCoverage = new Map();
  for (const question of candidates) {
    const key = `${question.lesson}|||${question.unit}`;
    const current = coverage.get(key) ?? { total: 0, solved: 0 };
    current.total += 1;
    if (stats[question.id]?.attempts > 0) current.solved += 1;
    coverage.set(key, current);
  }
  return coverage;
}

function orderByUnitCoverage(
  candidates: QuestionSkeleton[],
  unitCoverage: UnitCoverage,
): QuestionSkeleton[] {
  const byUnit = new Map<string, QuestionSkeleton[]>();
  for (const question of candidates) {
    const unitQuestions = byUnit.get(question.unit) ?? [];
    unitQuestions.push(question);
    byUnit.set(question.unit, unitQuestions);
  }
  for (const [unit, unitQuestions] of byUnit) {
    byUnit.set(unit, [...unitQuestions].sort((a, b) => a.id.localeCompare(b.id)));
  }
  const offsets = new Map<string, number>();
  const projected = new Map<string, number>();
  const ordered: QuestionSkeleton[] = [];

  while (ordered.length < candidates.length) {
    const available = [...byUnit.keys()].filter(
      (unit) => (offsets.get(unit) ?? 0) < (byUnit.get(unit)?.length ?? 0),
    );
    if (available.length === 0) break;
    available.sort((a, b) => {
      const aQuestion = byUnit.get(a)?.[0];
      const bQuestion = byUnit.get(b)?.[0];
      if (!aQuestion || !bQuestion) return a.localeCompare(b, 'tr');
      const aCoverage = unitCoverage.get(`${aQuestion.lesson}|||${a}`) ?? { total: 1, solved: 0 };
      const bCoverage = unitCoverage.get(`${bQuestion.lesson}|||${b}`) ?? { total: 1, solved: 0 };
      const aRatio = (aCoverage.solved + (projected.get(a) ?? 0)) / aCoverage.total;
      const bRatio = (bCoverage.solved + (projected.get(b) ?? 0)) / bCoverage.total;
      return aRatio - bRatio || a.localeCompare(b, 'tr');
    });
    const unit = available[0];
    const offset = offsets.get(unit) ?? 0;
    const question = byUnit.get(unit)?.[offset];
    offsets.set(unit, offset + 1);
    projected.set(unit, (projected.get(unit) ?? 0) + 1);
    if (question) ordered.push(question);
  }
  return ordered;
}

function selectAcrossLessons(
  candidates: QuestionSkeleton[],
  count: number,
  stats: StatsMap,
  excludedIds: Set<string>,
  unitCoverage: UnitCoverage,
): QuestionSkeleton[] {
  if (count <= 0) return [];
  const byLesson = new Map<string, QuestionSkeleton[]>();
  for (const question of candidates) {
    if (excludedIds.has(question.id)) continue;
    const lessonQuestions = byLesson.get(question.lesson) ?? [];
    lessonQuestions.push(question);
    byLesson.set(question.lesson, lessonQuestions);
  }
  for (const [lesson, lessonQuestions] of byLesson) {
    byLesson.set(lesson, orderByUnitCoverage(lessonQuestions, unitCoverage));
  }
  const lessons = [...byLesson.keys()].sort(compareByCurriculumOrder);
  const selectedCounts = new Map<string, number>();
  const offsets = new Map<string, number>();
  const weights = new Map(lessons.map((lesson) => [
    lesson,
    getCurriculumWeight(lesson) * (1 + lessonWeakness(byLesson.get(lesson) ?? [], stats)),
  ]));
  const selected: QuestionSkeleton[] = [];

  while (selected.length < count) {
    const available = lessons.filter((lesson) => (offsets.get(lesson) ?? 0) < (byLesson.get(lesson)?.length ?? 0));
    if (available.length === 0) break;
    available.sort((a, b) => {
      const aScore = (selectedCounts.get(a) ?? 0) / (weights.get(a) ?? 1);
      const bScore = (selectedCounts.get(b) ?? 0) / (weights.get(b) ?? 1);
      return aScore - bScore || compareByCurriculumOrder(a, b);
    });
    const lesson = available[0];
    const offset = offsets.get(lesson) ?? 0;
    const question = byLesson.get(lesson)?.[offset];
    offsets.set(lesson, offset + 1);
    if (!question) continue;
    selected.push(question);
    selectedCounts.set(lesson, (selectedCounts.get(lesson) ?? 0) + 1);
  }

  return selected;
}

function storageKey(date: string, budget: number): string {
  return `dus_sprint_manifest_v2:${date}:${budget}`;
}

function isStoredManifest(value: unknown, input: DailyStudyQueueInput, eligibleIds: Set<string>): value is StudyQueueManifest {
  if (!value || typeof value !== 'object') return false;
  const manifest = value as StudyQueueManifest;
  return manifest.version === 2
    && manifest.date === input.date
    && manifest.budget === input.budget
    && Array.isArray(manifest.questionIds)
    && new Set(manifest.questionIds).size === manifest.questionIds.length
    && manifest.questionIds.every((id) => eligibleIds.has(id));
}

export function selectUnitQuestionIds(
  candidates: QuestionSkeleton[],
  stats: StatsMap,
  selection: UnitQuestionSelection,
): string[] {
  const seenIds = new Set<string>();
  const uniqueCandidates = candidates.filter((question) => {
    if (seenIds.has(question.id)) return false;
    seenIds.add(question.id);
    return true;
  });
  if (selection.kind === 'all') return uniqueCandidates.map((question) => question.id);

  type Bucket = 'favoriteCorrect' | 'wrong' | 'favoriteWrong' | 'unseen' | 'correct';
  const buckets: Record<Bucket, QuestionSkeleton[]> = {
    favoriteCorrect: [], wrong: [], favoriteWrong: [], unseen: [], correct: [],
  };
  for (const question of uniqueCandidates) {
    const stat = stats[question.id];
    const bucket: Bucket = !stat || stat.attempts === 0
      ? 'unseen'
      : stat.corrects < stat.attempts
        ? question.is_favorite ? 'favoriteWrong' : 'wrong'
        : question.is_favorite ? 'favoriteCorrect' : 'correct';
    buckets[bucket].push(question);
  }
  // Her başlangıçta havuz içinden rastgele, tekrarsız seçim.
  for (const bucket of Object.values(buckets)) {
    for (let i = bucket.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [bucket[i], bucket[j]] = [bucket[j], bucket[i]];
    }
  }

  // Her tam onluda 1 doğru favori / 2 yanlış / 3 yanlış favori / 4 yeni.
  // Kısmi onlularda da aynı dağılıma yakın, iç içe bir sıra kullanılır.
  const pattern: Bucket[] = [
    'unseen', 'favoriteWrong', 'wrong', 'unseen', 'favoriteCorrect',
    'favoriteWrong', 'unseen', 'wrong', 'favoriteWrong', 'unseen',
  ];
  const count = Math.min(uniqueCandidates.length, Math.max(0, Math.floor(selection.count)));
  const slots = Array.from({ length: count }, (_, i) => buckets[pattern[i % 10]].pop());

  // Önce kontenjanları ayır; eksik bir grup başka grubun kontenjanını çalmasın.
  const fallback = [
    ...buckets.favoriteWrong,
    ...buckets.favoriteCorrect,
    ...buckets.unseen.filter(q => q.is_favorite),
    ...buckets.wrong,
    ...buckets.unseen.filter(q => !q.is_favorite),
    ...buckets.correct,
  ];
  let offset = 0;
  return slots.map(q => q ?? fallback[offset++]).filter((q): q is QuestionSkeleton => !!q).map(q => q.id);
}

export function getOrCreateDailyStudyQueue(
  input: DailyStudyQueueInput,
  store: DailyManifestStore,
): StudyQueueManifest {
  const seenIds = new Set<string>();
  const eligible = input.questions.filter((question) => {
    if (seenIds.has(question.id) || !ELIGIBLE_QUALITY_FLAGS.has(question.quality_flag ?? null)) return false;
    seenIds.add(question.id);
    return true;
  });
  const eligibleIds = new Set(eligible.map((question) => question.id));
  const key = storageKey(input.date, input.budget);

  try {
    const raw = store.getItem(key);
    if (raw) {
      const stored: unknown = JSON.parse(raw);
      if (isStoredManifest(stored, input, eligibleIds)) return stored;
    }
  } catch {
    // Bozuk local manifest yeniden üretilir.
  }

  const unitCoverage = buildUnitCoverage(eligible, input.stats);
  const buckets: Record<SprintBucket, QuestionSkeleton[]> = {
    unseen: [],
    wrong: [],
    favoriteCorrect: [],
  };
  for (const question of eligible) {
    const bucket = sprintBucketFor(question, input.stats);
    if (bucket) buckets[bucket].push(question);
  }

  const unseenQuota = Math.round(input.budget * DAILY_MIX.unseen);
  const wrongQuota = Math.round(input.budget * DAILY_MIX.wrong);
  const quotas: Record<SprintBucket, number> = {
    unseen: unseenQuota,
    wrong: wrongQuota,
    favoriteCorrect: Math.max(0, input.budget - unseenQuota - wrongQuota),
  };
  const selected: Array<{ question: QuestionSkeleton; bucket: SprintBucket }> = [];
  const selectedIds = new Set<string>();

  for (const bucket of ['unseen', 'wrong', 'favoriteCorrect'] as const) {
    const bucketSelection = selectAcrossLessons(buckets[bucket], quotas[bucket], input.stats, selectedIds, unitCoverage);
    selected.push(...bucketSelection.map((question) => ({ question, bucket })));
    bucketSelection.forEach((question) => selectedIds.add(question.id));
  }
  for (const bucket of ['unseen', 'wrong', 'favoriteCorrect'] as const) {
    const fallback = selectAcrossLessons(
      buckets[bucket],
      input.budget - selected.length,
      input.stats,
      selectedIds,
      unitCoverage,
    );
    selected.push(...fallback.map((question) => ({ question, bucket })));
    fallback.forEach((question) => selectedIds.add(question.id));
  }

  const picks: StudyQueuePick[] = selected.map(({ question, bucket }) => ({
    questionId: question.id,
    lesson: question.lesson,
    unit: question.unit,
    reason: reasonFor(bucket),
  }));
  const byLesson: Record<string, number> = {};
  const byUnit: Record<string, number> = {};
  for (const pick of picks) {
    byLesson[pick.lesson] = (byLesson[pick.lesson] ?? 0) + 1;
    const unitKey = `${pick.lesson}|||${pick.unit}`;
    byUnit[unitKey] = (byUnit[unitKey] ?? 0) + 1;
  }

  const manifest: StudyQueueManifest = {
    version: 2,
    date: input.date,
    budget: input.budget,
    questionIds: picks.map((pick) => pick.questionId),
    picks,
    breakdown: {
      unseen: picks.filter((pick) => pick.reason === 'unseen').length,
      wrong: picks.filter((pick) => pick.reason === 'previous_wrong').length,
      favoriteCorrect: picks.filter((pick) => pick.reason === 'favorite_correct').length,
      byLesson,
      byUnit,
    },
  };

  try {
    store.setItem(key, JSON.stringify(manifest));
  } catch {
    // Storage dolu/kapalıysa manifest yine bellekte kullanılabilir.
  }
  return manifest;
}
