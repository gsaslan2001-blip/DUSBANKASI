import { escapeCsvCell, generateCsvString } from '../csvExport';
import { describe, it, expect } from 'vitest';
import {
  computeLessonPriority,
  computeDailyRecommendation,
  selectRemedyQuestionsForLesson,
  selectUnitQuestions,
  selectSpeedAccuracyRemedyQuestions,
} from '../recommendations';
import { computeOverviewStats } from '../overview';
import {
  generateKpiAlerts,
  normalizeActivity,
  computeTrend,
  type StatsMap,
  type StreakData,
  type ActivityPoint,
} from '../stats';
import {
  computeExamTrend,
  computeSpeedAccuracyTradeoff,
  aggregateSpeedAccuracyByLesson,
  buildExamResults,
} from '../examAnalytics';
import type { Question } from '../../data';
import type { ExamResult } from '../../types/app';

// ─── Mock Veri Üreteçleri ──────────────────────────────────────────────────

function makeQuestion(id: string, lesson = 'Endodonti', unit = 'Kök Kanalı'): Question {
  return {
    id,
    lesson,
    unit,
    question: `Soru metni ${id}`,
    options: { A: 'A şıkkı', B: 'B şıkkı', C: 'C şıkkı', D: 'D şıkkı', E: 'E şıkkı' },
    correctAnswer: 'A',
    explanation: `Açıklama ${id}`,
  };
}

function makeExamResult(overrides: Partial<ExamResult> = {}): ExamResult {
  return {
    examId: overrides.examId ?? 'exam-1',
    examName: overrides.examName ?? 'Deneme 1',
    examDate: overrides.examDate ?? '2026-05-01',
    totalQuestions: overrides.totalQuestions ?? 100,
    correct: overrides.correct ?? 70,
    incorrect: overrides.incorrect ?? 25,
    blank: overrides.blank ?? 5,
    score: overrides.score ?? 70,
    timeSpent: overrides.timeSpent ?? 5400,
    lessonBreakdown: overrides.lessonBreakdown ?? {
      Endodonti: { correct: 18, total: 20 },
      Periodontoloji: { correct: 15, total: 20 },
    },
  };
}

// ─── SUITE 1: Boş Soru Bankası ve Sıfır Çözümlü Kullanıcı Durumu ─────────────

describe('FAZ 0 Regresyon: Boş Banka & Sıfır Çözümlü Kullanıcı (Uç Durumlar)', () => {
  it('1.1. Soru bankası tamamen boşken computeOverviewStats sıfıra bölünme hatası vermez', () => {
    const stats = computeOverviewStats([], {});

    expect(stats.bankTotal).toBe(0);
    expect(stats.solvedUnique).toBe(0);
    expect(stats.unsolvedUnique).toBe(0);
    expect(stats.totalAttempts).toBe(0);
    expect(stats.accuracy).toBe(0);
    expect(stats.coverage).toBe(0);
    expect(stats.dusWeightedAccuracy).toBe(0);
    expect(stats.topLessonBySolved).toBeNull();
    expect(stats.topUnitBySolved).toBeNull();
    expect(stats.byLesson).toEqual([]);
    expect(stats.mastery).toEqual({ untouched: 0, weak: 0, learning: 0, mastered: 0 });
  });

  it('1.2. Bankada sorular var ama kullanıcı sıfır soru çözmüşse sayaçlar tutarlı kalır', () => {
    const questions: Question[] = [
      makeQuestion('q1', 'Endodonti'),
      makeQuestion('q2', 'Endodonti'),
      makeQuestion('q3', 'Periodontoloji'),
    ];

    const stats = computeOverviewStats(questions, {});

    expect(stats.bankTotal).toBe(3);
    expect(stats.solvedUnique).toBe(0);
    expect(stats.unsolvedUnique).toBe(3);
    expect(stats.totalAttempts).toBe(0);
    expect(stats.accuracy).toBe(0);
    expect(stats.coverage).toBe(0);
    expect(stats.mastery.untouched).toBe(3);
    expect(stats.topLessonBySolved).toBeNull();
    expect(stats.byLesson).toHaveLength(2);
    expect(stats.byLesson.every(l => l.solved === 0 && l.attempts === 0)).toBe(true);
  });

  it('1.3. Sıfır çözümlü kullanıcıda generateKpiAlerts kriz alarmı üretmez (nötr bilgilendirme döner)', () => {
    const emptyOverview = computeOverviewStats([makeQuestion('q1')], {});
    const emptyStreak: StreakData = { currentStreak: 0, lastStudyDate: '', longestStreak: 0 };
    const emptyActivity: ActivityPoint[] = [];

    const alerts = generateKpiAlerts(emptyOverview, emptyStreak, emptyActivity);

    // Kriz alarmları (critical) basılmamalı
    const criticalAlerts = alerts.filter(a => a.level === 'critical');
    expect(criticalAlerts).toHaveLength(0);

    // Yanıltıcı panik metrikleri içermemeli
    const metrics = alerts.map(a => a.metric);
    expect(metrics).not.toContain('daily_target');
    expect(metrics).not.toContain('accuracy');
    expect(metrics).not.toContain('coverage');
    expect(metrics).not.toContain('streak');

    // Bilgilendirici nötr onboarding durumu
    expect(alerts.length).toBe(1);
    expect(alerts[0].level).toBe('info');
    expect(alerts[0].metric).toBe('onboarding');
  });
});

// ─── SUITE 2: Eski Aktivite Kaydı Formatları ─────────────────────────────────

describe('FAZ 0 Regresyon: Eski Aktivite Kaydı ve Eksik Alanlar', () => {
  it('2.1. normalizeActivity düz sayı formatındaki eski aktiviteyi doğru parse eder', () => {
    const normalized = normalizeActivity(45);

    expect(normalized).toEqual({
      total: 45,
      correct: 0,
      incorrect: 0,
      byLesson: {},
    });
  });

  it('2.2. normalizeActivity eksik alanlı (correct/incorrect olmayan) objeleri normalize eder', () => {
    const rawLegacy = { total: 30 } as any;
    const normalized = normalizeActivity(rawLegacy);

    expect(normalized.total).toBe(30);
    expect(normalized.correct).toBe(0);
    expect(normalized.incorrect).toBe(0);
    expect(normalized.byLesson).toEqual({});
  });

  it('2.3. normalizeActivity undefined ve null girdileri sıfır nesnesine çevirir', () => {
    expect(normalizeActivity(undefined)).toEqual({ total: 0, correct: 0, incorrect: 0, byLesson: {} });
    expect(normalizeActivity(null as any)).toEqual({ total: 0, correct: 0, incorrect: 0, byLesson: {} });
  });

  it('2.4. computeTrend sıfır veya eksik geçmişte NaN üretmez', () => {
    const trendZero = computeTrend(0, 0);
    expect(trendZero).toEqual({ direction: 'flat', delta: 0, deltaPct: 0 });

    const trendNew = computeTrend(20, 0);
    expect(trendNew).toEqual({ direction: 'up', delta: 20, deltaPct: 100 });
  });
});

// ─── SUITE 3: Tek Dersi Çözülmüş Öğrenci Durumu ──────────────────────────────

describe('FAZ 0 Regresyon: Tek Dersi Çözülmüş Öğrenci Durumu', () => {
  it('3.1. Çok dersli bankada yalnızca tek ders çözüldüğünde ders sıralaması ve ağırlık doğru hesaplanır', () => {
    const questions: Question[] = [
      makeQuestion('e1', 'Endodonti', 'Kanal 1'),
      makeQuestion('e2', 'Endodonti', 'Kanal 2'),
      makeQuestion('p1', 'Periodontoloji', 'Gingiva 1'),
      makeQuestion('p2', 'Periodontoloji', 'Gingiva 2'),
    ];

    const statsMap: StatsMap = {
      e1: { attempts: 2, corrects: 2, lastSeen: '2026-05-01T10:00:00Z' },
      e2: { attempts: 1, corrects: 1, lastSeen: '2026-05-01T10:05:00Z' },
    };

    const overview = computeOverviewStats(questions, statsMap);

    expect(overview.solvedUnique).toBe(2);
    expect(overview.topLessonBySolved?.lesson).toBe('Endodonti');
    expect(overview.topLessonBySolved?.accuracy).toBe(100);
    expect(overview.topLessonBySolved?.coverage).toBe(100);

    const perio = overview.byLesson.find(l => l.lesson === 'Periodontoloji');
    expect(perio?.solved).toBe(0);
    expect(perio?.coverage).toBe(0);
    expect(perio?.accuracy).toBe(0);

    // Tek ders çözüldüğü için DUS ağırlıklı doğruluk tam olarak o dersin doğruluğuna eşitlenmeli
    expect(overview.dusWeightedAccuracy).toBe(100);
  });

  it('3.2. Tek dersli denemede hız-doğruluk kadranı çökmeden tek ders için nokta üretir', () => {
    const singleExam = makeExamResult({
      lessonBreakdown: { Endodonti: { correct: 18, total: 20 } },
      timeSpent: 1200,
      totalQuestions: 20,
    });

    const points = computeSpeedAccuracyTradeoff([singleExam]);
    expect(points).toHaveLength(1);
    expect(points[0].lesson).toBe('Endodonti');
    expect(points[0].accuracy).toBe(90);
    expect(points[0].timeSpent).toBe(60);

    const aggregated = aggregateSpeedAccuracyByLesson(points);
    expect(aggregated).toHaveLength(1);
    expect(aggregated[0].lesson).toBe('Endodonti');
    expect(aggregated[0].avgTimeSpent).toBe(60);
  });
});

// ─── SUITE 4: 6'dan Fazla Denemesi Olan Kullanıcı & Sıralama Durumu ────────────

describe('FAZ 0 Regresyon: 6+ Denemesi Olan Kullanıcı ve Sıralama Davranışı', () => {
  it('4.1. computeExamTrend 7 denemede ilk yarı ve ikinci yarıyı doğru bölerek trend üretir', () => {
    const exams: ExamResult[] = [
      makeExamResult({ examId: '1', examDate: '2026-01-01', score: 50 }),
      makeExamResult({ examId: '2', examDate: '2026-01-08', score: 55 }),
      makeExamResult({ examId: '3', examDate: '2026-01-15', score: 60 }),
      makeExamResult({ examId: '4', examDate: '2026-01-22', score: 65 }),
      makeExamResult({ examId: '5', examDate: '2026-01-29', score: 70 }),
      makeExamResult({ examId: '6', examDate: '2026-02-05', score: 75 }),
      makeExamResult({ examId: '7', examDate: '2026-02-12', score: 80 }),
    ];

    const trend = computeExamTrend(exams);

    expect(trend.exams).toHaveLength(7);
    expect(trend.bestScore).toBe(80);
    expect(trend.avgScore).toBe(65);
    expect(trend.trend).toBe('up');
    expect(trend.improvement).toBeGreaterThan(0);
  });

  it('4.2. Karakterizasyon: ExamHistoryTimeline slice(-5).reverse() sıralama hassasiyeti', () => {
    // Tarihleri karışık gelen 7 deneme
    const unsortedExams: ExamResult[] = [
      makeExamResult({ examId: 'e7', examDate: '2026-07-01', examName: 'Deneme 7' }),
      makeExamResult({ examId: 'e1', examDate: '2026-01-01', examName: 'Deneme 1' }),
      makeExamResult({ examId: 'e2', examDate: '2026-02-01', examName: 'Deneme 2' }),
      makeExamResult({ examId: 'e3', examDate: '2026-03-01', examName: 'Deneme 3' }),
      makeExamResult({ examId: 'e4', examDate: '2026-04-01', examName: 'Deneme 4' }),
      makeExamResult({ examId: 'e5', examDate: '2026-05-01', examName: 'Deneme 5' }),
      makeExamResult({ examId: 'e6', examDate: '2026-06-01', examName: 'Deneme 6' }),
    ];

    // Mevcut slice(-5).reverse() davranışı sıralanmamış dizide en yeni denemeyi (e7) kaçırabilir
    const currentBehavior = unsortedExams.slice(-5).reverse();
    expect(currentBehavior.map(e => e.examId)).not.toContain('e7');

    // Faz 1B'de uygulanacak beklenen doğru sıralama
    const chronologicallySorted = [...unsortedExams]
      .sort((a, b) => a.examDate.localeCompare(b.examDate))
      .slice(-5)
      .reverse();

    expect(chronologicallySorted.map(e => e.examId)).toEqual(['e7', 'e6', 'e5', 'e4', 'e3']);
  });
});

// ─── SUITE 5: Eksik Süre (timeSpent null/undefined) İçeren Denemeler ──────────

describe('FAZ 0 Regresyon: Eksik Süre İçeren Denemeler', () => {
  it('5.1. buildExamResults answers içinde timeSpent null veya undefined olduğunda 0 toplar', () => {
    const rawExams = [
      {
        id: 'exam-missing-time',
        name: 'Süresiz Deneme',
        exam_date: '2026-05-01',
        question_ids: ['q1', 'q2'],
        answers: [
          { questionId: 'q1', isCorrect: true, timeSpent: undefined, selectedAnswer: 'A' },
          { questionId: 'q2', isCorrect: false, selectedAnswer: 'B' }, // timeSpent hiç yok, şık işaretlenmiş (yanlış)
        ],
      },
    ];

    const results = buildExamResults(rawExams);

    expect(results).toHaveLength(1);
    expect(results[0].timeSpent).toBe(0);
    expect(results[0].correct).toBe(1);
    expect(results[0].incorrect).toBe(1);
    expect(results[0].score).toBe(50);
  });

  it('5.2. computeSpeedAccuracyTradeoff süresi 0 olan denemede NaN vermez', () => {
    const zeroTimeExam = makeExamResult({
      timeSpent: 0,
      totalQuestions: 10,
      lessonBreakdown: { Endodonti: { correct: 8, total: 10 } },
    });

    const points = computeSpeedAccuracyTradeoff([zeroTimeExam]);
    expect(points).toHaveLength(1);
    expect(points[0].timeSpent).toBe(0);
    expect(Number.isNaN(points[0].timeSpent)).toBe(false);

    const aggregated = aggregateSpeedAccuracyByLesson(points);
    expect(aggregated).toHaveLength(1);
    expect(aggregated[0].avgTimeSpent).toBe(0);
    expect(Number.isNaN(aggregated[0].avgTimeSpent)).toBe(false);
  });
});

// ─── SUITE 6: FAZ 1B Deneme Veri Zinciri & Net Güvenliği ─────────────────────

describe('FAZ 1B Regresyon: Deneme Veri Zinciri, Boş vs Yanlış & Ders Hızı', () => {
  it('6.1. buildExamResults boş bırakılan soruları (selectedAnswer null/undefined/empty) yanlış saymaz ve neti düşürmez', () => {
    const rawExam = [
      {
        id: 'exam-blank-test',
        name: 'Boş Soru Denemesi',
        exam_date: '2026-05-01',
        question_ids: ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'],
        answers: [
          // 6 Doğru
          { questionId: 'q1', isCorrect: true, selectedAnswer: 'A', correctAnswer: 'A' },
          { questionId: 'q2', isCorrect: true, selectedAnswer: 'B', correctAnswer: 'B' },
          { questionId: 'q3', isCorrect: true, selectedAnswer: 'C', correctAnswer: 'C' },
          { questionId: 'q4', isCorrect: true, selectedAnswer: 'D', correctAnswer: 'D' },
          { questionId: 'q5', isCorrect: true, selectedAnswer: 'A', correctAnswer: 'A' },
          { questionId: 'q6', isCorrect: true, selectedAnswer: 'B', correctAnswer: 'B' },
          // 2 Gerçek Yanlış (şık işaretlenmiş)
          { questionId: 'q7', isCorrect: false, selectedAnswer: 'C', correctAnswer: 'A' },
          { questionId: 'q8', isCorrect: false, selectedAnswer: 'D', correctAnswer: 'B' },
          // 2 Boş Soru (selectedAnswer null veya undefined)
          { questionId: 'q9', isCorrect: false, selectedAnswer: null, correctAnswer: 'C' },
          { questionId: 'q10', isCorrect: false, selectedAnswer: undefined, correctAnswer: 'D' },
        ],
      },
    ];

    const results = buildExamResults(rawExam);
    expect(results).toHaveLength(1);
    const r = results[0];

    expect(r.correct).toBe(6);
    expect(r.incorrect).toBe(2); // Boşlar yanlış sayılmamalı!
    expect(r.blank).toBe(2);
    expect(r.totalQuestions).toBe(10);
    // 4 yanlış 1 doğru kuralı: 6 - (2 / 4) = 5.5 net. (Eski bug'da 6 - 4/4 = 5.0 net çıkıyordu!)
    expect(r.net).toBe(5.5);
  });

  it('6.2. buildExamResults kaydı hiç oluşturulmamış eksik soruları da boş kabul eder', () => {
    const rawExamMissing = [
      {
        id: 'exam-missing-test',
        name: 'Eksik Cevap Denemesi',
        exam_date: '2026-05-02',
        question_ids: ['q1', 'q2', 'q3', 'q4', 'q5'], // 5 soru var
        answers: [
          // Sadece 3 cevap kaydı var (2 soruya hiç dokunulmamış)
          { questionId: 'q1', isCorrect: true, selectedAnswer: 'A', correctAnswer: 'A' },
          { questionId: 'q2', isCorrect: false, selectedAnswer: 'B', correctAnswer: 'A' },
          { questionId: 'q3', isCorrect: false, selectedAnswer: null, correctAnswer: 'A' },
        ],
      },
    ];

    const results = buildExamResults(rawExamMissing);
    const r = results[0];

    expect(r.totalQuestions).toBe(5);
    expect(r.correct).toBe(1);
    expect(r.incorrect).toBe(1);
    expect(r.blank).toBe(3); // 1 işaretlenmemiş + 2 hiç kaydı olmayan = 3 boş
    expect(r.net).toBe(0.75); // 1 - 1/4 = 0.75 net
  });

  it('6.3. computeSpeedAccuracyTradeoff ders hızlarını sınav genel ortalaması yerine soru bazlı gerçek sürelerden hesaplar', () => {
    const lessonMap: Record<string, string> = {
      q1: 'Endodonti',
      q2: 'Endodonti',
      q3: 'Periodontoloji',
      q4: 'Periodontoloji',
    };

    const rawExam = [
      {
        id: 'exam-speed-test',
        name: 'Hız Denemesi',
        exam_date: '2026-05-03',
        question_ids: ['q1', 'q2', 'q3', 'q4'],
        answers: [
          // Endodonti: 2 soru, toplam 60 sn (ort. 30 sn)
          { questionId: 'q1', isCorrect: true, timeSpent: 30, selectedAnswer: 'A' },
          { questionId: 'q2', isCorrect: true, timeSpent: 30, selectedAnswer: 'A' },
          // Periodontoloji: 2 soru, toplam 180 sn (ort. 90 sn)
          { questionId: 'q3', isCorrect: true, timeSpent: 90, selectedAnswer: 'A' },
          { questionId: 'q4', isCorrect: false, timeSpent: 90, selectedAnswer: 'B' },
        ],
      },
    ];

    const results = buildExamResults(rawExam, id => lessonMap[id]);
    const points = computeSpeedAccuracyTradeoff(results);

    const endoPoint = points.find(p => p.lesson === 'Endodonti');
    const perioPoint = points.find(p => p.lesson === 'Periodontoloji');

    expect(endoPoint).toBeDefined();
    expect(perioPoint).toBeDefined();

    // Soru bazlı gerçek süre doğrulaması:
    // Sınavın genel soru başı ortalaması (240 / 4 = 60 sn) ile ezilmemeli!
    expect(endoPoint!.timeSpent).toBe(30);
    expect(perioPoint!.timeSpent).toBe(90);

    const aggregated = aggregateSpeedAccuracyByLesson(points);
    const endoAgg = aggregated.find(a => a.lesson === 'Endodonti');
    const perioAgg = aggregated.find(a => a.lesson === 'Periodontoloji');

    expect(endoAgg!.avgTimeSpent).toBe(30);
    expect(endoAgg!.hasRealTimeData).toBe(true);
    expect(perioAgg!.avgTimeSpent).toBe(90);
    expect(perioAgg!.hasRealTimeData).toBe(true);
  });

  it('6.4. Süre verisi bulunmayan denemelerde hasRealTimeData false döner ve çökme yaşanmaz', () => {
    const rawExamNoTime = [
      {
        id: 'exam-notime-test',
        name: 'Süresiz Deneme',
        exam_date: '2026-05-04',
        question_ids: ['q1'],
        answers: [{ questionId: 'q1', isCorrect: true, selectedAnswer: 'A' }], // timeSpent yok
      },
    ];

    const results = buildExamResults(rawExamNoTime);
    const points = computeSpeedAccuracyTradeoff(results);
    const aggregated = aggregateSpeedAccuracyByLesson(points);

    expect(aggregated[0].avgTimeSpent).toBe(0);
    expect(aggregated[0].hasRealTimeData).toBe(false);
  });
});

// ─── SUITE 7: FAZ 2 1-Click Çalışma Akışı (CTA) ve Tekil Öneri Motoru ────────

describe('FAZ 2 Regresyon: 1-Click Çalışma Akışı ve Tekil Öneri Motoru', () => {
  const questions: Question[] = [
    makeQuestion('e1', 'Endodonti', 'Kök Kanalı'),
    makeQuestion('e2', 'Endodonti', 'Kök Kanalı'),
    makeQuestion('e3', 'Endodonti', 'Apeks'),
    makeQuestion('p1', 'Periodontoloji', 'Gingiva'),
    makeQuestion('p2', 'Periodontoloji', 'Gingiva'),
  ];

  const stats: StatsMap = {
    e1: { attempts: 4, corrects: 1, wrongChoices: [{ selected: 'B', count: 3 }] }, // Düşük doğruluk: %25
    e2: { attempts: 2, corrects: 0, wrongChoices: [{ selected: 'C', count: 2 }] }, // Düşük doğruluk: %0
    p1: { attempts: 2, corrects: 2 }, // Yüksek doğruluk: %100
  };

  const overview = computeOverviewStats(questions, stats);
  const goals = { dailyQuestions: 50, targetAccuracy: 80, targetCoverage: 90, targetMastered: 5000, targetStreak: 150 };
  const activity = [{ date: '2026-05-01', count: 10, correct: 5, incorrect: 5, byLesson: {} }];

  it('7.1. computeDailyRecommendation ve computeLessonPriority aynı öncelik sırasını kullanır (çelişki yok)', () => {
    const priorities = computeLessonPriority(overview, []);
    const dailyRec = computeDailyRecommendation(overview, activity, goals, [], questions, stats);

    expect(priorities.length).toBeGreaterThan(0);
    expect(dailyRec.focusLesson).toBe(priorities[0].lesson);
    expect(dailyRec.focusLesson).toBe('Endodonti');
  });

  it('7.2. computeDailyRecommendation 1-click CTA için soru ID dizisi (questionIds) üretir', () => {
    const dailyRec = computeDailyRecommendation(overview, activity, goals, [], questions, stats);

    expect(dailyRec.questionIds).toBeDefined();
    expect(dailyRec.questionIds!.length).toBeGreaterThan(0);
    expect(dailyRec.questionIds).toContain('e1');
    expect(dailyRec.questionIds).toContain('e2');
  });

  it('7.3. selectRemedyQuestionsForLesson belirtilen dersin zayıf sorularını öncelikli seçer', () => {
    const remedyIds = selectRemedyQuestionsForLesson('Endodonti', questions, stats, 2);

    expect(remedyIds).toHaveLength(2);
    remedyIds.forEach(id => {
      const q = questions.find(item => item.id === id);
      expect(q?.lesson).toBe('Endodonti');
    });
  });

  it('7.4. selectUnitQuestions belirtilen ünitenin sorularını döner', () => {
    const unitIds = selectUnitQuestions('Endodonti', 'Kök Kanalı', questions, stats, 10);

    expect(unitIds.length).toBe(2);
    expect(unitIds).toContain('e1');
    expect(unitIds).toContain('e2');
    expect(unitIds).not.toContain('e3'); // Farklı ünite dahil edilmemeli
  });

  it('7.5. selectSpeedAccuracyRemedyQuestions yavaş+hatalı soruları en başa alır', () => {
    const speedRemedyIds = selectSpeedAccuracyRemedyQuestions('Endodonti', questions, stats, 20);

    expect(speedRemedyIds.length).toBeGreaterThan(0);
    // En çok hata yapılan (e1 ve e2) sorular en başta olmalı
    expect(speedRemedyIds[0]).toBe('e1');
  });

  it('7.6. Boş havuz ve geçersiz parametre durumunda CTA fonksiyonları çökmez ve boş dizi döner', () => {
    expect(selectRemedyQuestionsForLesson('', [], {}, 20)).toEqual([]);
    expect(selectRemedyQuestionsForLesson('BilinmeyenDers', questions, stats, 20)).toEqual([]);
    expect(selectUnitQuestions('', '', [], {}, 10)).toEqual([]);
    expect(selectSpeedAccuracyRemedyQuestions('', [], {}, 20)).toEqual([]);

    const emptyRec = computeDailyRecommendation(
      computeOverviewStats([], {}),
      [],
      goals,
      [],
      [],
      {},
    );
    expect(emptyRec.questionIds).toEqual([]);
    expect(emptyRec.focusLesson).toBe('');
  });

  it('7.7. generateKpiAlerts ders bazlı alarmlara lesson ve actionLabel iliştirir', () => {
    const endoQuestions = Array.from({ length: 15 }, (_, i) => makeQuestion(`e_alert_${i}`, 'Endodonti'));
    const endoStats: StatsMap = {};
    for (let i = 0; i < 15; i++) {
      endoStats[`e_alert_${i}`] = { attempts: 2, corrects: 0 }; // %0 doğruluk, 15 soru çözülmüş (solved > 10)
    }
    const weakOverview = computeOverviewStats(endoQuestions, endoStats);
    const alerts = generateKpiAlerts(weakOverview, { currentStreak: 5, lastStudyDate: '2026-05-01', longestStreak: 10 }, activity);
    const endoAlert = alerts.find(a => a.lesson === 'Endodonti');

    expect(endoAlert).toBeDefined();
    expect(endoAlert?.actionLabel).toBe('Bu Dersi Telafi Et (20 Soru)');
    expect(endoAlert?.level).toBe('critical');
  });
});



// ─── SUITE 8: Faz 4 — CSV Kaçışlama, UTF-8 BOM ve Tipografi Testleri ──────────

describe('FAZ 4 Regresyon: CSV Kaçışlama ve Dışa Aktarma Güvenceleri', () => {
  it('8.1. Normal metin ve sayıları kaçışlamadan döndürür', () => {
    expect(escapeCsvCell('Endodonti')).toBe('Endodonti');
    expect(escapeCsvCell(120)).toBe('120');
    expect(escapeCsvCell(null)).toBe('');
    expect(escapeCsvCell(undefined)).toBe('');
  });

  it('8.2. Noktalı virgül (;) veya virgül (,) içeren hücreleri çift tırnağa alır', () => {
    expect(escapeCsvCell('Periodontoloji; Cerrahi')).toBe('"Periodontoloji; Cerrahi"');
    expect(escapeCsvCell('Ortodonti, Pedodonti')).toBe('"Ortodonti, Pedodonti"');
  });

  it('8.3. Çift tırnak içeren hücreleri RFC 4180 standardına göre ("") çiftler', () => {
    expect(escapeCsvCell('Apex "Locators"')).toBe('"Apex ""Locators"""');
  });

  it('8.4. Satır sonu (\n, \r) içeren hücreleri çift tırnakla korur', () => {
    expect(escapeCsvCell('Satır 1\nSatır 2')).toBe('"Satır 1\nSatır 2"');
  });

  it('8.5. generateCsvString UTF-8 BOM (\uFEFF) ile başlar ve Türkçe karakterleri korur', () => {
    const headers = ['Ders', 'Doğruluk (%)'];
    const rows = [
      ['Ağız, Diş ve Çene Cerrahisi', 85],
      ['Diş Hastalıkları ve Tedavisi', 92],
    ];
    const csv = generateCsvString(headers, rows, ';');
    expect(csv.startsWith('\uFEFF')).toBe(true);
    expect(csv).toContain('"Ağız, Diş ve Çene Cerrahisi";85');
    expect(csv).toContain('Diş Hastalıkları ve Tedavisi;92');
  });
});
