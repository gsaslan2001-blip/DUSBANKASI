import { test } from 'vitest';
import assert from 'node:assert/strict';
import {
  evaluateT3Triage,
  evaluateT14Verification,
  evaluateSaturdayRepair,
  addDays,
  getNextSaturday,
  generateNotifications,
  generateTriageReport
} from './triage';
import type { DUSSubject, TopicUnit } from '../types';
import { CANONICAL_UNITS } from '../../../config/canonicalUnits';

test('T+3 Triage correctly assigns GREEN bucket for >= 85% (34-40 correct)', () => {
  const result = evaluateT3Triage(35, 40, '2026-11-10');
  assert.equal(result.bucket, 'GREEN');
  assert.equal(result.priority, 'P4_LOW');
  assert.equal(result.percentage, 88);
  assert.equal(result.scheduleType, 'DISCHARGED');
  assert.equal(result.nextScheduledDate, undefined);
});

test('T+3 Triage correctly assigns YELLOW bucket for 70%-84% (28-33 correct) and schedules T+14', () => {
  const result = evaluateT3Triage(30, 40, '2026-11-10');
  assert.equal(result.bucket, 'YELLOW');
  assert.equal(result.priority, 'P2_HIGH');
  assert.equal(result.percentage, 75);
  assert.equal(result.scheduleType, 'T14_VERIFICATION');
  // 2026-11-10 + 14 days = 2026-11-24
  assert.equal(result.nextScheduledDate, '2026-11-24');
});

test('T+3 Triage correctly assigns RED bucket for < 70% (<= 27 correct) and schedules Saturday repair', () => {
  const result = evaluateT3Triage(24, 40, '2026-11-10'); // 2026-11-10 is Tuesday
  assert.equal(result.bucket, 'RED');
  assert.equal(result.priority, 'P1_CRITICAL');
  assert.equal(result.percentage, 60);
  assert.equal(result.scheduleType, 'SATURDAY_REPAIR');
  // 2026-11-10 Tuesday -> upcoming Saturday is 2026-11-14
  assert.equal(result.nextScheduledDate, '2026-11-14');
});

test('T+14 Verification promotes to GREEN on >= 85%', () => {
  const result = evaluateT14Verification(18, 20, '2026-11-24'); // 90%
  assert.equal(result.bucket, 'GREEN');
  assert.equal(result.scheduleType, 'DISCHARGED');
});

test('T+14 Verification demotes to RED on < 70%', () => {
  const result = evaluateT14Verification(12, 20, '2026-11-24'); // 60%
  assert.equal(result.bucket, 'RED');
  assert.equal(result.scheduleType, 'SATURDAY_REPAIR');
});

test('Saturday Repair promotes to YELLOW on >= 80%', () => {
  const result = evaluateSaturdayRepair(25, 30, '2026-11-14'); // ~83%
  assert.equal(result.bucket, 'YELLOW');
  assert.equal(result.scheduleType, 'T14_VERIFICATION');
  assert.equal(result.nextScheduledDate, '2026-11-28');
});

test('Saturday Repair stays RED on < 80%', () => {
  const result = evaluateSaturdayRepair(20, 30, '2026-11-14'); // ~67%
  assert.equal(result.bucket, 'RED');
  assert.equal(result.scheduleType, 'SATURDAY_REPAIR');
  // Next Saturday from Saturday 2026-11-14 is 2026-11-21
  assert.equal(result.nextScheduledDate, '2026-11-21');
});

test('Date helper addDays works reliably across month bounds', () => {
  assert.equal(addDays('2026-11-10', 3), '2026-11-13');
  assert.equal(addDays('2026-11-25', 10), '2026-12-05');
  assert.equal(addDays('2026-12-25', 10), '2027-01-04');
});

test('getNextSaturday correctly finds Saturday', () => {
  // 2026-11-10 is Tuesday -> Saturday is 2026-11-14
  assert.equal(getNextSaturday('2026-11-10'), '2026-11-14');
  // 2026-11-14 is already Saturday
  assert.equal(getNextSaturday('2026-11-14'), '2026-11-14');
  // 2026-11-15 is Sunday -> Next Saturday is 2026-11-21
  assert.equal(getNextSaturday('2026-11-15'), '2026-11-21');
});

test('generateNotifications triggers RED_LIMIT_ALERT when 3 or more topics are RED', () => {
  const mockTopics: TopicUnit[] = [
    {
      id: 't1',
      subjectId: 'B01',
      unitNumber: 1,
      title: 'Kafatası Kemikleri',
      subtopics: [],
      status: 'TRIAGED',
      currentBucket: 'RED',
      priority: 'P1_CRITICAL',
      discharged: false,
      createdAt: '2026-11-01',
      updatedAt: '2026-11-01'
    },
    {
      id: 't2',
      subjectId: 'B02',
      unitNumber: 1,
      title: 'Epitel Dokusu',
      subtopics: [],
      status: 'TRIAGED',
      currentBucket: 'RED',
      priority: 'P1_CRITICAL',
      discharged: false,
      createdAt: '2026-11-01',
      updatedAt: '2026-11-01'
    },
    {
      id: 't3',
      subjectId: 'B03',
      unitNumber: 1,
      title: 'Aksiyon Potansiyeli',
      subtopics: [],
      status: 'TRIAGED',
      currentBucket: 'RED',
      priority: 'P1_CRITICAL',
      discharged: false,
      createdAt: '2026-11-01',
      updatedAt: '2026-11-01'
    }
  ];

  const notifications = generateNotifications(mockTopics, '2026-11-10');
  const alert = notifications.find(n => n.type === 'RED_LIMIT_ALERT');
  assert.ok(alert, 'Should trigger RED_LIMIT_ALERT');
  assert.equal(alert?.priority, 'P1_CRITICAL');
});

test('generateTriageReport calculates accurate metrics and overall retention index', () => {
  const mockSubjects: DUSSubject[] = [
    {
      id: 'B01',
      code: 'B01',
      name: 'Anatomi',
      category: 'TEMEL_BILIMLER',
      cognitiveGroup: 'GRUP_A',
      questionCount: 6,
      weightPercentage: 5,
      description: 'Test',
      protocol: {
        cognitiveCharacteristics: '',
        t0Method: '',
        t3Method: '',
        questionBankUsage: '',
        ankiProtocol: ''
      },
      colorTheme: 'blue',
      iconName: 'Brain'
    },
    {
      id: 'B09',
      code: 'B09',
      name: 'Protetik Diş Tedavisi',
      category: 'KLINIK_BILIMLER',
      cognitiveGroup: 'GRUP_C',
      questionCount: 10,
      weightPercentage: 8.33,
      description: 'Test',
      protocol: {
        cognitiveCharacteristics: '',
        t0Method: '',
        t3Method: '',
        questionBankUsage: '',
        ankiProtocol: ''
      },
      colorTheme: 'amber',
      iconName: 'Activity'
    }
  ];

  const mockTopics: TopicUnit[] = [
    {
      id: 't1',
      subjectId: 'B01',
      unitNumber: 1,
      title: 'Kafatası',
      subtopics: [],
      status: 'DISCHARGED',
      currentBucket: 'GREEN',
      priority: 'P4_LOW',
      discharged: true,
      createdAt: '2026-11-01',
      updatedAt: '2026-11-01'
    },
    {
      id: 't2',
      subjectId: 'B09',
      unitNumber: 1,
      title: 'Sabit Protezler',
      subtopics: [],
      status: 'TRIAGED',
      currentBucket: 'YELLOW',
      priority: 'P2_HIGH',
      discharged: false,
      createdAt: '2026-11-01',
      updatedAt: '2026-11-01'
    }
  ];

  const report = generateTriageReport(mockSubjects, mockTopics, '2026-11-10');
  assert.equal(report.totalTopics, 2);
  assert.equal(report.greenBucket, 1);
  assert.equal(report.yellowBucket, 1);
  assert.equal(report.redBucket, 0);
  assert.equal(report.redAlarmActive, false);
  assert.ok(report.overallRetentionIndex > 0);
});

test('TRİAJ catalog uses the bank labels including all 261 units', () => {
  assert.equal(Object.values(CANONICAL_UNITS).flat().length, 261);
});

