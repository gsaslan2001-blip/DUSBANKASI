import { addDays as shiftFocusDate, getTodayString } from './triage.js';

export { shiftFocusDate };

export type FocusSegment = '0-3 Saat' | '3-7 Saat' | '8-10 Saat' | '10+ Saat';

export interface RawTickTickFocusRecord {
  id?: string;
  type: 0 | 1;
  startTime: string;
  endTime?: string;
  duration: number;
  note?: string | null;
  tasks?: { title?: string | null }[] | null;
}

export interface ConsolidatedFocusDay {
  date: string;
  dayNameTR: string;
  pomoCount: number;
  pomoMinutes: number;
  stopwatchCount: number;
  stopwatchMinutes: number;
  totalMinutes: number;
  totalHours: number;
  segment: FocusSegment;
  notes: string[];
  sessionsCount: number;
}

export interface TickTickFocusSummary {
  connected: true;
  lastSyncedAt: string;
  todayDate: string;
  activeDate: string;
  activeDayStats: ConsolidatedFocusDay;
  sevenDayStart: string;
  sevenDayAvgHours: number;
  sevenDayTotalMinutes: number;
  periodStart: string;
  periodEnd: string;
  totalTrackedDays: number;
  totalAllTimeHours: number;
  segmentDistribution: Record<FocusSegment, number>;
  dailyLogs: ConsolidatedFocusDay[];
}

const turkishWeekday = new Intl.DateTimeFormat('tr-TR', { timeZone: 'UTC', weekday: 'long' });

export function toTurkeyDateString(isoTime: string | Date) {
  return getTodayString(new Date(isoTime));
}

export function getTurkishDayName(date: string) {
  return turkishWeekday.format(new Date(date + 'T00:00:00Z'));
}

export function classifyFocusSegment(hours: number): FocusSegment {
  if (hours < 3) return '0-3 Saat';
  if (hours < 8) return '3-7 Saat';
  if (hours <= 10) return '8-10 Saat';
  return '10+ Saat';
}

export function createEmptyFocusDay(date: string): ConsolidatedFocusDay {
  return {
    date,
    dayNameTR: getTurkishDayName(date),
    pomoCount: 0,
    pomoMinutes: 0,
    stopwatchCount: 0,
    stopwatchMinutes: 0,
    totalMinutes: 0,
    totalHours: 0,
    segment: '0-3 Saat',
    notes: [],
    sessionsCount: 0,
  };
}

export function consolidateTickTickRecords(records: readonly RawTickTickFocusRecord[]): ConsolidatedFocusDay[] {
  const byDate = new Map<string, { milliseconds: [number, number]; counts: [number, number]; notes: Set<string> }>();
  const seen = new Set<string>();

  for (const record of records) {
    const start = new Date(record.startTime);
    if (!Number.isFinite(start.getTime()) || !Number.isFinite(record.duration) || record.duration <= 0) continue;
    const id = record.id ? `${record.type}:${record.id}` : `${record.type}:${record.startTime}:${record.duration}`;
    if (seen.has(id)) continue;
    seen.add(id);

    const date = toTurkeyDateString(start);
    const entry = byDate.get(date) ?? { milliseconds: [0, 0], counts: [0, 0], notes: new Set<string>() };
    entry.milliseconds[record.type] += record.duration;
    entry.counts[record.type] += 1;
    for (const note of [record.note, ...(record.tasks ?? []).map((task) => task.title)]) {
      if (note?.trim()) entry.notes.add(note.trim());
    }
    byDate.set(date, entry);
  }

  return Array.from(byDate, ([date, { milliseconds, counts, notes }]) => {
    const pomoMinutes = Math.round(milliseconds[0] / 60_000);
    const stopwatchMinutes = Math.round(milliseconds[1] / 60_000);
    const totalMinutes = pomoMinutes + stopwatchMinutes;
    const totalHours = Number((totalMinutes / 60).toFixed(2));
    return {
      date,
      dayNameTR: getTurkishDayName(date),
      pomoCount: counts[0],
      pomoMinutes,
      stopwatchCount: counts[1],
      stopwatchMinutes,
      totalMinutes,
      totalHours,
      segment: classifyFocusSegment(totalHours),
      notes: Array.from(notes),
      sessionsCount: counts[0] + counts[1],
    };
  }).sort((a, b) => b.date.localeCompare(a.date));
}

export function buildTickTickFocusSummary(
  records: readonly RawTickTickFocusRecord[],
  todayDate: string,
  requestedDate = todayDate,
  lastSyncedAt = new Date().toISOString(),
): TickTickFocusSummary {
  const periodStart = shiftFocusDate(todayDate, -89);
  const dailyLogs = consolidateTickTickRecords(records).filter(({ date }) => date >= periodStart && date <= todayDate);
  const sevenDayStart = shiftFocusDate(todayDate, -6);
  const recent = dailyLogs.filter((day) => day.date >= sevenDayStart && day.totalMinutes > 0);
  const sevenDayTotalMinutes = recent.reduce((sum, day) => sum + day.totalMinutes, 0);
  const segmentDistribution: Record<FocusSegment, number> = {
    '0-3 Saat': 0,
    '3-7 Saat': 0,
    '8-10 Saat': 0,
    '10+ Saat': 0,
  };
  let totalMinutes = 0;
  for (const day of dailyLogs) {
    segmentDistribution[day.segment] += 1;
    totalMinutes += day.totalMinutes;
  }
  return {
    connected: true,
    lastSyncedAt,
    todayDate,
    activeDate: requestedDate,
    activeDayStats: dailyLogs.find(({ date }) => date === requestedDate) ?? createEmptyFocusDay(requestedDate),
    sevenDayStart,
    sevenDayTotalMinutes,
    sevenDayAvgHours: recent.length ? Number((sevenDayTotalMinutes / recent.length / 60).toFixed(2)) : 0,
    periodStart,
    periodEnd: todayDate,
    totalTrackedDays: dailyLogs.length,
    totalAllTimeHours: Number((totalMinutes / 60).toFixed(1)),
    segmentDistribution,
    dailyLogs,
  };
}
