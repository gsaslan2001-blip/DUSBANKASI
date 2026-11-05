import { describe, expect, it } from 'vitest';
import { CURRICULUM_ORDER } from '../../config/curriculum';
import type { QuestionSkeleton } from '../../data';
import type { StatsMap } from '../stats';
import { getOrCreateDailyStudyQueue, type DailyManifestStore } from '../studyQueue';

function createMemoryStore(): DailyManifestStore {
  const values = new Map<string, string>();
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => { values.set(key, value); },
  };
}

function createQuestionPool(perLesson: number): QuestionSkeleton[] {
  return CURRICULUM_ORDER.flatMap((lesson) =>
    Array.from({ length: perLesson }, (_, index) => ({
      id: `${lesson}-${index + 1}`,
      lesson,
      unit: `Ünite ${(index % 4) + 1}`,
      quality_flag: null,
    })),
  );
}

describe('getOrCreateDailyStudyQueue', () => {
  it('uygun havuzda günlük bütçe kadar benzersiz ID üretir', () => {
    const manifest = getOrCreateDailyStudyQueue({
      questions: createQuestionPool(20),
      stats: {},
      date: '2026-08-23',
      budget: 200,
    }, createMemoryStore());

    expect(manifest.questionIds).toHaveLength(200);
    expect(new Set(manifest.questionIds).size).toBe(200);
  });

  it('200 soruyu 150 görülmemiş, 40 yanlış ve 10 doğru-favori olarak seçer', () => {
    const wrong = Array.from({ length: 100 }, (_, index) => ({
      id: `wrong-${index + 1}`,
      lesson: 'Fizyoloji',
      unit: `Yanlış Ünite ${(index % 5) + 1}`,
      quality_flag: null,
    }));
    const unseen = Array.from({ length: 200 }, (_, index) => ({
      id: `unseen-${index + 1}`,
      lesson: 'Protez',
      unit: `Yeni Ünite ${(index % 10) + 1}`,
      quality_flag: null,
    }));
    const favoriteCorrect = Array.from({ length: 100 }, (_, index) => ({
      id: `favorite-correct-${index + 1}`,
      lesson: 'Patoloji',
      unit: `Favori Ünite ${(index % 5) + 1}`,
      quality_flag: null,
      is_favorite: true,
    }));
    const stats: StatsMap = {
      ...Object.fromEntries(wrong.map((question) => [question.id, {
        attempts: 2,
        corrects: 1,
        lastSeen: '2026-08-18T00:00:00.000Z',
      }])),
      ...Object.fromEntries(favoriteCorrect.map((question) => [question.id, {
        attempts: 3,
        corrects: 3,
        lastSeen: '2026-08-18T00:00:00.000Z',
        timeSpentHistory: [20, 25, 22],
      }])),
    };

    const manifest = getOrCreateDailyStudyQueue({
      questions: [...wrong, ...favoriteCorrect, ...unseen],
      stats,
      date: '2026-08-23',
      budget: 200,
    }, createMemoryStore());

    expect(manifest.breakdown).toMatchObject({ unseen: 150, wrong: 40, favoriteCorrect: 10 });
  });

  it('ders kotasını soru bankası büyüklüğünden bağımsız dağıtır', () => {
    const lessonPool = (lesson: string, count: number) => Array.from({ length: count }, (_, index) => ({
      id: `${lesson}-${index + 1}`,
      lesson,
      unit: `${lesson} Ünite ${(index % 6) + 1}`,
      quality_flag: null,
    }));

    const manifest = getOrCreateDailyStudyQueue({
      questions: [
        ...lessonPool('Radyoloji', 300),
        ...lessonPool('Histoloji', 30),
        ...lessonPool('Fizyoloji', 30),
      ],
      stats: {},
      date: '2026-08-23',
      budget: 60,
    }, createMemoryStore());

    expect(manifest.breakdown.byLesson.Histoloji).toBeGreaterThan(0);
    expect(manifest.breakdown.byLesson.Fizyoloji).toBeGreaterThan(0);
    expect(manifest.breakdown.byLesson.Radyoloji).toBeLessThanOrEqual(30);
  });

  it('aynı derste daha az kapsanan üniteyi önce seçer', () => {
    const questions: QuestionSkeleton[] = [
      ...Array.from({ length: 10 }, (_, index) => ({
        id: `covered-unseen-${index + 1}`,
        lesson: 'Fizyoloji',
        unit: 'Daha Çok Kapsanan',
        quality_flag: null,
      })),
      ...Array.from({ length: 10 }, (_, index) => ({
        id: `covered-seen-${index + 1}`,
        lesson: 'Fizyoloji',
        unit: 'Daha Çok Kapsanan',
        quality_flag: null,
      })),
      ...Array.from({ length: 20 }, (_, index) => ({
        id: `untouched-${index + 1}`,
        lesson: 'Fizyoloji',
        unit: 'Hiç Kapsanmayan',
        quality_flag: null,
      })),
    ];
    const stats: StatsMap = Object.fromEntries(
      questions
        .filter((question) => question.id.startsWith('covered-seen-'))
        .map((question) => [question.id, {
          attempts: 1,
          corrects: 1,
          lastSeen: '2026-08-18T00:00:00.000Z',
        }]),
    );

    const manifest = getOrCreateDailyStudyQueue({
      questions,
      stats,
      date: '2026-08-23',
      budget: 5,
    }, createMemoryStore());

    expect(manifest.picks.map((pick) => pick.unit)).toEqual(Array(5).fill('Hiç Kapsanmayan'));
  });

  it('çıkmış etiketlerini tek başına seçmez; yalnız kullanıcı etkileşimi varsa alır', () => {
    const ordinary = Array.from({ length: 15 }, (_, index) => ({
      id: `ordinary-${index + 1}`,
      lesson: 'Fizyoloji',
      unit: 'Sinir Sistemi',
      quality_flag: null,
    }));
    const wrong = Array.from({ length: 3 }, (_, index) => ({
      id: `wrong-${index + 1}`,
      lesson: 'Fizyoloji',
      unit: 'Sinir Sistemi',
      quality_flag: null,
    }));
    const questions: QuestionSkeleton[] = [
      ...ordinary,
      ...wrong,
      {
        id: 'unseen-past-exam-flagged',
        lesson: 'Fizyoloji',
        unit: 'Sinir Sistemi',
        quality_flag: 'cikmis',
      },
      {
        id: 'unseen-past-exam',
        lesson: 'ÇIKMIŞ SORULAR',
        unit: 'ÖSYM',
        quality_flag: null,
      },
      {
        id: 'wrong-past-exam',
        lesson: 'Fizyoloji',
        unit: 'Sinir Sistemi',
        quality_flag: 'cikmis',
      },
      {
        id: 'favorite-correct-past-exam',
        lesson: 'ÇIKMIŞ SORULAR',
        unit: 'ÖSYM',
        quality_flag: 'cikmis',
        is_favorite: true,
      },
    ];
    const stats: StatsMap = {
      ...Object.fromEntries(wrong.map((question) => [question.id, {
        attempts: 1,
        corrects: 0,
        lastSeen: '2026-08-18T00:00:00.000Z',
      }])),
      'wrong-past-exam': {
        attempts: 2,
        corrects: 1,
        lastSeen: '2026-08-18T00:00:00.000Z',
      },
      'favorite-correct-past-exam': {
        attempts: 2,
        corrects: 2,
        lastSeen: '2026-08-18T00:00:00.000Z',
      },
    };

    const manifest = getOrCreateDailyStudyQueue({
      questions,
      stats,
      date: '2026-08-23',
      budget: 20,
    }, createMemoryStore());

    expect(manifest.breakdown).toMatchObject({ unseen: 15, wrong: 4, favoriteCorrect: 1 });
    expect(manifest.questionIds).toContain('wrong-past-exam');
    expect(manifest.questionIds).toContain('favorite-correct-past-exam');
    expect(manifest.questionIds).not.toContain('unseen-past-exam-flagged');
    expect(manifest.questionIds).not.toContain('unseen-past-exam');
  });

  it.each([
    [100, { unseen: 75, wrong: 20, favoriteCorrect: 5 }],
    [150, { unseen: 113, wrong: 30, favoriteCorrect: 7 }],
  ] as const)('%s soruluk bütçeyi sabit 75/20/5 oranında dağıtır', (budget, expected) => {
    const bucket = (prefix: string) => Array.from({ length: 200 }, (_, index) => ({
      id: `${prefix}-${index + 1}`,
      lesson: CURRICULUM_ORDER[index % CURRICULUM_ORDER.length],
      unit: `Ünite ${(index % 8) + 1}`,
      quality_flag: null,
    }));
    const wrong = bucket('wrong');
    const favoriteCorrect = bucket('favorite-correct').map((question) => ({ ...question, is_favorite: true }));
    const unseen = bucket('unseen');
    const stats: StatsMap = {
      ...Object.fromEntries(wrong.map((question) => [question.id, {
        attempts: 2,
        corrects: 1,
        lastSeen: '2026-08-18T00:00:00.000Z',
      }])),
      ...Object.fromEntries(favoriteCorrect.map((question) => [question.id, {
        attempts: 2,
        corrects: 2,
        lastSeen: '2026-08-18T00:00:00.000Z',
        timeSpentHistory: [20, 25],
      }])),
    };

    const manifest = getOrCreateDailyStudyQueue({
      questions: [...wrong, ...favoriteCorrect, ...unseen],
      stats,
      date: '2026-08-23',
      budget,
    }, createMemoryStore());

    expect(manifest.breakdown).toMatchObject(expected);
  });

  it('aynı gün ve bütçede istatistikler değişse de saklanan manifesti döndürür', () => {
    const store = createMemoryStore();
    const questions = createQuestionPool(20);
    const first = getOrCreateDailyStudyQueue({
      questions,
      stats: {},
      date: '2026-08-23',
      budget: 100,
    }, store);
    const changedStats: StatsMap = Object.fromEntries(first.questionIds.map((id) => [id, {
      attempts: 3,
      corrects: 0,
      lastSeen: '2026-08-23T12:00:00.000Z',
    }]));

    const reopened = getOrCreateDailyStudyQueue({
      questions: [...questions].reverse(),
      stats: changedStats,
      date: '2026-08-23',
      budget: 100,
    }, store);

    expect(reopened).toEqual(first);
  });

  it('kalite nedeniyle dışlanan soruları manifest dışında tutar', () => {
    const flags = [null, 'reviewed_keep', 'cikmis', 'kavramsal_kopya', 'aciklama_klonu', 'auto_deleted'] as const;
    const questions: QuestionSkeleton[] = flags.map((flag, index) => ({
      id: `flag-${index}`,
      lesson: 'Fizyoloji',
      unit: 'Kalite',
      quality_flag: flag,
    }));

    const manifest = getOrCreateDailyStudyQueue({
      questions,
      stats: {},
      date: '2026-08-23',
      budget: 10,
    }, createMemoryStore());

    expect(manifest.questionIds).toEqual(['flag-0', 'flag-1']);
  });

  it('Yanlışlarım özel laneini stats olmasa da review kotasında açıkça seçer', () => {
    const questions: QuestionSkeleton[] = [
      ...Array.from({ length: 20 }, (_, index) => ({
        id: `normal-${index + 1}`,
        lesson: 'Fizyoloji',
        unit: 'Normal',
        quality_flag: null,
      })),
      ...Array.from({ length: 2 }, (_, index) => ({
        id: `wrong-lane-${index + 1}`,
        lesson: 'Yanlışlarım',
        unit: 'Tekrar',
        quality_flag: null,
      })),
    ];

    const manifest = getOrCreateDailyStudyQueue({
      questions,
      stats: {},
      date: '2026-08-23',
      budget: 10,
    }, createMemoryStore());

    expect(manifest.breakdown.wrong).toBe(2);
    expect(manifest.picks.filter((pick) => pick.lesson === 'Yanlışlarım').map((pick) => pick.reason)).toEqual([
      'previous_wrong',
      'previous_wrong',
    ]);
  });
});
