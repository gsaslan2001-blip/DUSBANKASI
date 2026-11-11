import type { TriajState } from '../types';

export function emptyTriajState(): TriajState {
  return {
    topics: [], tasks: [], triageHistory: [], dailyGoals: {}, mockExams: [],
    semanticErrors: [], questionLogs: [], topicTaxonomy: [], ankiSnapshots: [],
    focus: {}, notificationReads: [], imports: [],
    parameters: {
      ownerName: '', ownerRole: '', targetGoalTitle: 'DUS', examDate: '',
      targetBasicNet: 36, targetClinicalNet: 72, targetTotalNet: 108,
      adccEliteThreshold: 100, targetFsrsRetention: 90, dailyUnitCapacity: 8,
      idealSpeedMinSec: 50, idealSpeedMaxSec: 60,
      verificationQuestions: 20, studyMode: 'full-time',
      maintenanceDays: { clinical: 7, volatile: 8, mechanism: 12 },
      errorWeights: { Bilgi: 1, Muhakeme: 1.25, Dikkat: 0.8, Çeldirici: 1.4 },
    },
  };
}
