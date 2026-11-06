import { describe, it, expect, beforeEach } from 'vitest';
import {
  DUS_SUBJECT_QUOTAS,
  TOTAL_SIMULATION_QUESTIONS,
  TEMEL_BILIMLER_COUNT,
  KLINIK_BILIMLER_COUNT,
  resolveCanonicalLesson,
  getMasteredSimulationIds,
  addMasteredSimulationIds,
  getSimulationRetrySchedule,
  saveSimulationRetrySchedule,
  scheduleSimulationRetries,
  popNextSimulationRetryBatch,
  buildDusSimulationPool,
  isExcludedFromDusSimulation,
  computeSimulationNet,
  computeSimulationBranchStats,
  computeSimulationUnitStats,
  savePastSimulation,
  getPastSimulations,
  updatePastSimulationDetails,
  deletePastSimulation,
  computeAggregateSimulationStats,
  SIM_MASTERED_KEY,
  SIM_RETRY_SCHEDULE_KEY,
} from '../simulationEngine';
import type { Question } from '../../data';
import type { AnswerDetail } from '../../types/app';
import type { QuestionStat } from '../stats';

function createMockQuestion(id: string, lesson: string, unit = '1. Ünite'): Question {
  return {
    id,
    lesson,
    unit,
    question: `Soru metni ${id}`,
    options: {
      A: 'A şıkkı',
      B: 'B şıkkı',
      C: 'C şıkkı',
      D: 'D şıkkı',
      E: 'E şıkkı',
    },
    correctAnswer: 'A',
    explanation: `Açıklama ${id}`,
    is_favorite: false,
  };
}

describe('simulationEngine', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('DUS sınav yapısı 120 soru, 40 Temel, 80 Klinik dağılımını eksiksiz tanımlar', () => {
    expect(TOTAL_SIMULATION_QUESTIONS).toBe(120);
    expect(TEMEL_BILIMLER_COUNT).toBe(40);
    expect(KLINIK_BILIMLER_COUNT).toBe(80);

    const temelQuotas = DUS_SUBJECT_QUOTAS.filter(q => q.category === 'temel');
    const klinikQuotas = DUS_SUBJECT_QUOTAS.filter(q => q.category === 'klinik');

    const temelSum = temelQuotas.reduce((acc, q) => acc + q.count, 0);
    const klinikSum = klinikQuotas.reduce((acc, q) => acc + q.count, 0);

    expect(temelSum).toBe(40);
    expect(klinikSum).toBe(80);
    expect(temelSum + klinikSum).toBe(120);

    // Birebir branş adetleri
    expect(temelQuotas.find(q => q.key === 'Anatomi')?.count).toBe(6);
    expect(temelQuotas.find(q => q.key === 'Histoloji')?.count).toBe(4);
    expect(temelQuotas.find(q => q.key === 'Fizyoloji')?.count).toBe(6);
    expect(temelQuotas.find(q => q.key === 'Biyokimya')?.count).toBe(10);
    expect(temelQuotas.find(q => q.key === 'Mikrobiyoloji')?.count).toBe(6);
    expect(temelQuotas.find(q => q.key === 'Patoloji')?.count).toBe(4);
    expect(temelQuotas.find(q => q.key === 'Farmakoloji')?.count).toBe(4);

    // Klinik derslerin hepsi 10'ar soru
    for (const kq of klinikQuotas) {
      expect(kq.count).toBe(10);
    }
    expect(klinikQuotas.length).toBe(8);
  });

  it('resolveCanonicalLesson alias ve küçük/büyük harf eşlemesini doğru yapar', () => {
    expect(resolveCanonicalLesson('anatomi')).toBe('Anatomi');
    expect(resolveCanonicalLesson('Tıbbi Biyokimya')).toBe('Biyokimya');
    expect(resolveCanonicalLesson('Protetik Diş Tedavisi')).toBe('Protez');
    expect(resolveCanonicalLesson('Çocuk Diş Hekimliği')).toBe('Pedodonti');
    expect(resolveCanonicalLesson('Pedodonti Cikmis')).toBe('Pedodonti');
    expect(resolveCanonicalLesson('Histoloji ve Embriyoloji')).toBe('Histoloji');
  });

  it('Doğru yapılan soruları mastered havuzuna ekler ve okur', () => {
    expect(getMasteredSimulationIds().size).toBe(0);
    addMasteredSimulationIds(['q1', 'q2']);
    const ids = getMasteredSimulationIds();
    expect(ids.has('q1')).toBe(true);
    expect(ids.has('q2')).toBe(true);
    expect(ids.size).toBe(2);
  });

  it('Boş ve yanlış soruları sonraki 5 denemeye dengeli dağıtır (ör. 40 soru -> her denemeye 8)', () => {
    // 40 yanlış soru üretelim (farklı branşlarda)
    const mistakes: Array<{ id: string; lesson: string }> = [];
    const lessons = ['Anatomi', 'Biyokimya', 'Protez', 'Endodonti'];
    for (let i = 0; i < 40; i++) {
      mistakes.push({ id: `m-${i}`, lesson: lessons[i % lessons.length] });
    }

    scheduleSimulationRetries(mistakes);

    const schedule = getSimulationRetrySchedule();
    expect(schedule.length).toBe(5);

    // Her slota 8 soru düşmeli
    for (let i = 0; i < 5; i++) {
      expect(schedule[i].length).toBe(8);
    }

    // popNextSimulationRetryBatch ilk slotu döner ve kaydırır
    const batch1 = popNextSimulationRetryBatch();
    expect(batch1.length).toBe(8);
    const updated = getSimulationRetrySchedule();
    expect(updated.length).toBe(5);
    expect(updated[0].length).toBe(8); // eski 1. slot şimdi 0. oldu
    expect(updated[4].length).toBe(0); // son slot boşaldı
  });

  it('buildDusSimulationPool tam 120 soruyu gerçek DUS sıralamasında seçer', () => {
    // Her branştan yeterli soru oluştur
    const mockQuestions: Question[] = [];
    for (const q of DUS_SUBJECT_QUOTAS) {
      for (let i = 0; i < 20; i++) {
        mockQuestions.push(createMockQuestion(`${q.key}-${i}`, q.key, `${q.key} Ünite 1`));
      }
    }

    const pool = buildDusSimulationPool(mockQuestions, { consumeRetryBatch: false });
    expect(pool.length).toBe(120);

    // DUS 2020 Orijinal Kitapçık Sıralaması Birebir Kontrolü:
    // 1-6: Anatomi (6)
    expect(pool.slice(0, 6).every(q => q.lesson === 'Anatomi')).toBe(true);
    // 7-10: Histoloji (4)
    expect(pool.slice(6, 10).every(q => q.lesson === 'Histoloji')).toBe(true);
    // 11-16: Fizyoloji (6)
    expect(pool.slice(10, 16).every(q => q.lesson === 'Fizyoloji')).toBe(true);
    // 17-22: Biyokimya 1. Blok (6)
    expect(pool.slice(16, 22).every(q => q.lesson === 'Biyokimya')).toBe(true);
    // 23-28: Mikrobiyoloji (6)
    expect(pool.slice(22, 28).every(q => q.lesson === 'Mikrobiyoloji')).toBe(true);
    // 29-32: Patoloji (4)
    expect(pool.slice(28, 32).every(q => q.lesson === 'Patoloji')).toBe(true);
    // 33-36: Farmakoloji (4)
    expect(pool.slice(32, 36).every(q => q.lesson === 'Farmakoloji')).toBe(true);
    // 37-40: Biyokimya 2. Blok (Tıbbi Biyoloji & Genetik) (4)
    expect(pool.slice(36, 40).every(q => q.lesson === 'Biyokimya')).toBe(true);

    // Klinik Bilimler (41 - 120):
    // 41-50: Restoratif (10)
    expect(pool.slice(40, 50).every(q => q.lesson === 'Restoratif')).toBe(true);
    // 51-60: Protez (10)
    expect(pool.slice(50, 60).every(q => q.lesson === 'Protez')).toBe(true);
    // 61-70: Cerrahi (10)
    expect(pool.slice(60, 70).every(q => q.lesson === 'Cerrahi')).toBe(true);
    // 71-80: Radyoloji (10)
    expect(pool.slice(70, 80).every(q => q.lesson === 'Radyoloji')).toBe(true);
    // 81-90: Periodontoloji (10)
    expect(pool.slice(80, 90).every(q => q.lesson === 'Periodontoloji')).toBe(true);
    // 91-100: Ortodonti (10)
    expect(pool.slice(90, 100).every(q => q.lesson === 'Ortodonti')).toBe(true);
    // 101-110: Endodonti (10)
    expect(pool.slice(100, 110).every(q => q.lesson === 'Endodonti')).toBe(true);
    // 111-120: Pedodonti (10)
    expect(pool.slice(110, 120).every(q => q.lesson === 'Pedodonti')).toBe(true);
  });

  it('isExcludedFromDusSimulation: son 1 haftada çözülmüş, >=2 kez doğru ve 0 yanlış olan soruları hariç tutar', () => {
    const now = Date.now();
    const twoDaysAgo = new Date(now - 2 * 24 * 3600 * 1000).toISOString();
    const tenDaysAgo = new Date(now - 10 * 24 * 3600 * 1000).toISOString();

    // 1. Son 2 gün önce çözülmüş, 2 kez doğru, 0 yanlış -> HARİÇ TUTULUR (true)
    expect(isExcludedFromDusSimulation('q1', {
      attempts: 2,
      corrects: 2,
      lastSeen: twoDaysAgo,
    }, now)).toBe(true);

    // 2. 10 gün önce çözülmüş (1 haftadan eski), 2 kez doğru, 0 yanlış -> DAHİL EDİLİR (false)
    expect(isExcludedFromDusSimulation('q2', {
      attempts: 2,
      corrects: 2,
      lastSeen: tenDaysAgo,
    }, now)).toBe(false);

    // 3. 2 gün önce çözülmüş ama 1 yanlışı var -> DAHİL EDİLİR (false)
    expect(isExcludedFromDusSimulation('q3', {
      attempts: 3,
      corrects: 2,
      lastSeen: twoDaysAgo,
    }, now)).toBe(false);

    // 4. 2 gün önce çözülmüş ama sadece 1 kez çözülüp doğru yapılmış -> DAHİL EDİLİR (false)
    expect(isExcludedFromDusSimulation('q4', {
      attempts: 1,
      corrects: 1,
      lastSeen: twoDaysAgo,
    }, now)).toBe(false);

    // 5. Hiç çözülmemiş soru -> DAHİL EDİLİR (false)
    expect(isExcludedFromDusSimulation('q5', null, now)).toBe(false);
  });

  it('buildDusSimulationPool: hariç tutulan soruları havuzdan eler ve 120 soruluk DUS kotalarını doldurur', () => {
    const mockQuestions: Question[] = [];
    for (const q of DUS_SUBJECT_QUOTAS) {
      for (let i = 0; i < 20; i++) {
        mockQuestions.push(createMockQuestion(`${q.key}-${i}`, q.key));
      }
    }

    const now = Date.now();
    const twoDaysAgo = new Date(now - 2 * 24 * 3600 * 1000).toISOString();

    // Anatomi-0 ve Anatomi-1: son 2 günde 2 kez doğru yapılmış, 0 yanlış
    const mockStats: Record<string, QuestionStat> = {
      'Anatomi-0': { attempts: 2, corrects: 2, lastSeen: twoDaysAgo },
      'Anatomi-1': { attempts: 3, corrects: 3, lastSeen: twoDaysAgo },
    };

    const pool = buildDusSimulationPool(mockQuestions, {
      consumeRetryBatch: false,
      stats: mockStats,
      nowMs: now,
    });
    expect(pool.length).toBe(120);

    const selectedIds = new Set(pool.map(q => q.id));
    expect(selectedIds.has('Anatomi-0')).toBe(false);
    expect(selectedIds.has('Anatomi-1')).toBe(false);
  });

  it('DUS Net hesaplama formülü Doğru - Yanlış / 4 olarak hesaplar', () => {
    expect(computeSimulationNet(100, 20)).toBe(95);
    expect(computeSimulationNet(80, 40)).toBe(70);
    expect(computeSimulationNet(95, 5)).toBe(93.75);
    expect(computeSimulationNet(0, 4)).toBe(-1);
  });

  it('Fizyoloji ve Histoloji analiz istatistiği bir tutulur ayrılmaz', () => {
    const details: AnswerDetail[] = [
      { question: createMockQuestion('h1', 'Histoloji'), state: 'correct', selectedOptionKey: 'A' },
      { question: createMockQuestion('h2', 'Histoloji'), state: 'incorrect', selectedOptionKey: 'B' },
      { question: createMockQuestion('f1', 'Fizyoloji'), state: 'correct', selectedOptionKey: 'A' },
      { question: createMockQuestion('f2', 'Fizyoloji'), state: 'correct', selectedOptionKey: 'A' },
      { question: createMockQuestion('a1', 'Anatomi'), state: 'correct', selectedOptionKey: 'A' },
    ];

    const stats = computeSimulationBranchStats(details);
    const fizyoHisto = stats.find(s => s.branch === 'Fizyoloji - Histoloji');
    expect(fizyoHisto).toBeDefined();
    expect(fizyoHisto?.total).toBe(4); // 2 Histo + 2 Fizyo
    expect(fizyoHisto?.correct).toBe(3); // 1 Histo + 2 Fizyo
    expect(fizyoHisto?.incorrect).toBe(1);
    expect(fizyoHisto?.net).toBe(2.75); // 3 - 0.25

    // Ayrı ayrı Histoloji veya Fizyoloji kalmamış olmalı
    expect(stats.find(s => s.branch === 'Histoloji')).toBeUndefined();
    expect(stats.find(s => s.branch === 'Fizyoloji')).toBeUndefined();
  });

  it('Ünite bilgisi olmayan sorularda ünite istatistiği null döner', () => {
    const detailsNoUnits: AnswerDetail[] = [
      { question: createMockQuestion('c1', 'Cerrahi', 'Genel Çıkmış Sorular'), state: 'correct' },
      { question: createMockQuestion('c2', 'Cerrahi', 'Genel Çıkmış Sorular'), state: 'incorrect' },
      { question: createMockQuestion('p1', 'Protez', 'Deneme'), state: 'correct' },
    ];

    const unitStats = computeSimulationUnitStats(detailsNoUnits);
    expect(unitStats).toBeNull();
  });

  it('savePastSimulation denemeyi kaydeder, getPastSimulations listeler ve computeAggregateSimulationStats kümülatif analizi doğru hesaplar', () => {
    const details: AnswerDetail[] = [
      { question: createMockQuestion('a1', 'Anatomi'), state: 'correct' },
      { question: createMockQuestion('a2', 'Anatomi'), state: 'incorrect' },
      { question: createMockQuestion('h1', 'Histoloji'), state: 'correct' },
      { question: createMockQuestion('f1', 'Fizyoloji'), state: 'correct' },
      { question: createMockQuestion('p1', 'Protez'), state: 'blank' },
    ];

    const rec = savePastSimulation({
      title: 'DUS Simülasyonu #1',
      details,
      totalSeconds: 9000,
      usedSeconds: 7200,
    });

    expect(rec.id).toBeDefined();
    expect(rec.correct).toBe(3);
    expect(rec.incorrect).toBe(1);
    expect(rec.blank).toBe(1);
    expect(rec.net).toBe(2.75);

    const history = getPastSimulations();
    expect(history.length).toBe(1);
    expect(history[0].id).toBe(rec.id);

    const agg = computeAggregateSimulationStats(history);
    expect(agg.totalSimulations).toBe(1);
    expect(agg.avgNet).toBe(2.75);
    expect(agg.bestNet).toBe(2.75);
    expect(agg.netTrend.length).toBe(1);
    expect(agg.branchSummary.length).toBe(14); // 14 branş (Fizyo-Histo birleşik)

    // Soru silinmesi durumunda deneme istatistiklerinin yeniden hesaplanması
    const updatedDetails = details.filter(d => d.question.id !== 'a2'); // yanlış soruyu sildik
    const updatedRec = updatePastSimulationDetails(rec.id, updatedDetails);
    expect(updatedRec).toBeDefined();
    expect(updatedRec?.totalQuestions).toBe(4);
    expect(updatedRec?.correct).toBe(3);
    expect(updatedRec?.incorrect).toBe(0); // yanlış soru silindi
    expect(updatedRec?.net).toBe(3.0); // 3 - 0 = 3.0 Net

    // Silme kontrolü
    deletePastSimulation(rec.id);
    expect(getPastSimulations().length).toBe(0);
  });
});
