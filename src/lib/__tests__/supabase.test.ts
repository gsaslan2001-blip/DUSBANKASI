import { describe, it, expect, vi, beforeEach } from 'vitest';

const { rpcMock, fromMock } = vi.hoisted(() => {
  const createChain = () => {
    const chain = {
      _table: '',
      _action: '',
      _query: [] as any[],

      select: vi.fn().mockImplementation((...args) => { 
        if (!chain._action) chain._action = 'select'; 
        chain._query.push(['select', args]); 
        return chain; 
      }),
      eq: vi.fn().mockImplementation((...args) => { chain._query.push(['eq', args]); return chain; }),
      order: vi.fn().mockImplementation((...args) => { chain._query.push(['order', args]); return chain; }),
      limit: vi.fn().mockImplementation((...args) => { chain._query.push(['limit', args]); return chain; }),
      maybeSingle: vi.fn().mockImplementation(() => { chain._query.push(['maybeSingle', []]); return chain; }),
      single: vi.fn().mockImplementation(() => { chain._query.push(['single', []]); return chain; }),
      range: vi.fn().mockImplementation((...args) => { chain._query.push(['range', args]); return chain; }),
      insert: vi.fn().mockImplementation((...args) => { chain._action = 'insert'; chain._query.push(['insert', args]); return chain; }),
      update: vi.fn().mockImplementation((...args) => { chain._action = 'update'; chain._query.push(['update', args]); return chain; }),
      delete: vi.fn().mockImplementation((...args) => { chain._action = 'delete'; chain._query.push(['delete', args]); return chain; }),
      upsert: vi.fn().mockImplementation((...args) => { chain._action = 'upsert'; chain._query.push(['upsert', args]); return chain; }),
      or: vi.fn().mockImplementation((...args) => { chain._query.push(['or', args]); return chain; }),
      gt: vi.fn().mockImplementation((...args) => { chain._query.push(['gt', args]); return chain; }),
      is: vi.fn().mockImplementation((...args) => { chain._query.push(['is', args]); return chain; }),
      match: vi.fn().mockImplementation((...args) => { chain._query.push(['match', args]); return chain; }),
      
      then: vi.fn().mockImplementation((resolve) => {
        let res = { data: null, error: null };
        if (globalThis.__supabaseMockQueue && globalThis.__supabaseMockQueue.length > 0) {
           res = globalThis.__supabaseMockQueue.shift();
        } else if (globalThis.__supabaseMockDefault) {
           res = globalThis.__supabaseMockDefault(chain);
        }
        resolve(res);
      }),
    };
    return chain;
  };

  const fromMock = vi.fn().mockImplementation((table) => {
    const chain = createChain();
    chain._table = table;
    if (!globalThis.__chains) globalThis.__chains = [];
    globalThis.__chains.push(chain);
    return chain;
  });

  const rpcMock = vi.fn().mockImplementation(() => {
     let res = { data: null, error: null };
     if (globalThis.__supabaseMockQueue && globalThis.__supabaseMockQueue.length > 0) {
        res = globalThis.__supabaseMockQueue.shift();
     }
     return Promise.resolve(res);
  });

  return { rpcMock, fromMock };
});

vi.mock('@supabase/supabase-js', () => ({
  createClient: () => ({
    rpc: rpcMock,
    from: fromMock,
  }),
}));

vi.mock('../dateUtils', () => ({
  todayStr: () => '2024-06-15',
}));

vi.mock('../idb', () => ({
  getCachedQuestions: vi.fn().mockResolvedValue([]),
  getQuestionsFromContentCache: vi.fn().mockResolvedValue([]),
  saveQuestionsToCache: vi.fn().mockResolvedValue(undefined),
  saveQuestionsToContentCache: vi.fn().mockResolvedValue(undefined),
  deleteQuestionsFromCache: vi.fn().mockResolvedValue(undefined),
}));

import { 
  pushStatsToCloud, saveSessionToCloud, type CloudStat,
  loadTodaysDailyExam, saveDailyExam, markDailyExamCompleted, getNextDayNumber,
  loadSessionFromCloud, deleteSessionFromCloud,
  fetchQuestions, fetchHighYieldQuestions
} from '../supabase';

import * as idb from '../idb';

const DEVICE = 'dev_test';
const STATS: Record<string, CloudStat> = {
  q1: { attempts: 2, corrects: 1, lastSeen: '2024-06-15T10:00:00Z' },
};

beforeEach(() => {
  fromMock.mockClear();
  rpcMock.mockClear();
  globalThis.__chains = [];
  globalThis.__supabaseMockQueue = [];
  globalThis.__supabaseMockDefault = undefined;
  vi.clearAllMocks();
  
  // Prevent retry loops from slowing down tests on errors
  vi.useFakeTimers();
});

describe('pushStatsToCloud user_id routing', () => {
  it('uses the merge RPC when userId is provided', async () => {
    const resPromise = pushStatsToCloud(DEVICE, STATS, 'user-123');
    vi.runAllTimers();
    const res = await resPromise;

    expect(rpcMock).toHaveBeenCalledTimes(1);
    expect(fromMock).not.toHaveBeenCalled();

    const [fnName, payload] = rpcMock.mock.calls[0];
    expect(fnName).toBe('upsert_stats_batch');
    expect(payload.rows[0]).toMatchObject({
      user_id: 'user-123',
      device_id: DEVICE,
      question_id: 'q1',
    });
    expect(res).toEqual({ pushed: 1, total: 1, errors: [] });
  });

  it('omits user_id and uses device upsert for anonymous stats', async () => {
    const resPromise = pushStatsToCloud(DEVICE, STATS);
    vi.runAllTimers();
    await resPromise;

    expect(fromMock).toHaveBeenCalledTimes(1);
    expect(rpcMock).not.toHaveBeenCalled();

    const chain = globalThis.__chains[0];
    expect(chain._table).toBe('question_stats');
    expect(chain._action).toBe('upsert');
    
    const upsertArgs = chain._query.find(q => q[0] === 'upsert')[1];
    expect(upsertArgs[1]).toEqual({ onConflict: 'device_id,question_id' });
    expect(Object.prototype.hasOwnProperty.call(upsertArgs[0][0], 'user_id')).toBe(false);
  });
});

describe('active_sessions integration tests (RLS bypass logic)', () => {
  it('saveSessionToCloud calls save_active_session RPC with user_id', async () => {
    const resPromise = saveSessionToCloud(DEVICE, { currentIndex: 31 }, 'user-123');
    vi.runAllTimers();
    await resPromise;

    expect(rpcMock).toHaveBeenCalledTimes(1);
    const [fnName, params] = rpcMock.mock.calls[0];
    expect(fnName).toBe('save_active_session');
    expect(params).toMatchObject({
      p_device_id: DEVICE,
      p_user_id: 'user-123',
      p_session_data: { currentIndex: 31 },
    });
  });

  it('loadSessionFromCloud fetches by user_id if present', async () => {
    globalThis.__supabaseMockQueue.push({ data: { session_data: { test: true } }, error: null });
    const res = await loadSessionFromCloud(DEVICE, 'user-123');
    
    const chain = globalThis.__chains[0];
    expect(chain._table).toBe('active_sessions');
    expect(chain._query).toContainEqual(['eq', ['user_id', 'user-123']]);
    expect(chain._query).not.toContainEqual(['eq', ['device_id', DEVICE]]);
    expect(res).toEqual({ test: true });
  });

  it('loadSessionFromCloud fetches by device_id if user_id missing', async () => {
    globalThis.__supabaseMockQueue.push({ data: { session_data: { test: false } }, error: null });
    const res = await loadSessionFromCloud(DEVICE);
    
    const chain = globalThis.__chains[0];
    expect(chain._table).toBe('active_sessions');
    expect(chain._query).toContainEqual(['eq', ['device_id', DEVICE]]);
    expect(res).toEqual({ test: false });
  });

  it('deleteSessionFromCloud deletes by user_id if present', async () => {
    globalThis.__supabaseMockQueue.push({ data: null, error: null });
    await deleteSessionFromCloud(DEVICE, 'user-456');
    
    const chain = globalThis.__chains[0];
    expect(chain._table).toBe('active_sessions');
    expect(chain._action).toBe('delete');
    expect(chain._query).toContainEqual(['eq', ['user_id', 'user-456']]);
  });
});

describe('daily_exams integration tests', () => {
  it('loadTodaysDailyExam queries by today string, user_id and pending status', async () => {
    globalThis.__supabaseMockQueue.push({ data: { id: 'exam-1' }, error: null });
    const exam = await loadTodaysDailyExam('user-1');
    
    const chain = globalThis.__chains[0];
    expect(chain._table).toBe('daily_exams');
    expect(chain._query).toContainEqual(['eq', ['user_id', 'user-1']]);
    expect(chain._query).toContainEqual(['eq', ['exam_date', '2024-06-15']]);
    expect(chain._query).toContainEqual(['eq', ['status', 'pending']]);
    expect(exam).toEqual({ id: 'exam-1' });
  });

  it('saveDailyExam inserts a new pending exam row', async () => {
    globalThis.__supabaseMockQueue.push({ data: { id: 'exam-new' }, error: null });
    const res = await saveDailyExam('user-1', 5, ['q1', 'q2'], { breakdown: 'ok' });
    
    const chain = globalThis.__chains[0];
    expect(chain._table).toBe('daily_exams');
    expect(chain._query.some(q => q[0] === 'insert')).toBe(true);
    const insertData = chain._query.find(q => q[0] === 'insert')[1][0];
    expect(insertData).toMatchObject({
      user_id: 'user-1',
      day_number: 5,
      exam_date: '2024-06-15',
      question_ids: ['q1', 'q2'],
      status: 'pending'
    });
    expect(res).toEqual({ id: 'exam-new' });
  });

  it('markDailyExamCompleted updates status to completed', async () => {
    globalThis.__supabaseMockQueue.push({ data: null, error: null });
    await markDailyExamCompleted('exam-123');
    
    const chain = globalThis.__chains[0];
    expect(chain._table).toBe('daily_exams');
    expect(chain._query.some(q => q[0] === 'update')).toBe(true);
    const updateData = chain._query.find(q => q[0] === 'update')[1][0];
    expect(updateData).toHaveProperty('status', 'completed');
    expect(updateData).toHaveProperty('completed_at');
    expect(chain._query).toContainEqual(['eq', ['id', 'exam-123']]);
  });

  it('getNextDayNumber returns count + 1', async () => {
    globalThis.__supabaseMockQueue.push({ data: null, count: 5, error: null });
    const nextDay = await getNextDayNumber('user-1');
    
    const chain = globalThis.__chains[0];
    expect(chain._table).toBe('daily_exams');
    expect(chain._query).toContainEqual(['eq', ['user_id', 'user-1']]);
    expect(chain._query.find(q => q[0] === 'select')[1][1]).toMatchObject({ count: 'exact', head: true });
    expect(nextDay).toBe(6);
  });
});

describe('Pagination & Fetch functions (fetchQuestions, fetchHighYieldQuestions)', () => {
  it('fetchHighYieldQuestions uses pagination and stops when row count < PAGE_SIZE', async () => {
    // Return 500 rows on first call (full page)
    const page1 = Array.from({ length: 500 }).map((_, i) => ({ id: `q${i}` }));
    // Return 10 rows on second call (last page)
    const page2 = Array.from({ length: 10 }).map((_, i) => ({ id: `q50${i}` }));
    
    globalThis.__supabaseMockQueue.push({ data: page1, error: null });
    globalThis.__supabaseMockQueue.push({ data: page2, error: null });
    
    const res = await fetchHighYieldQuestions();
    
    expect(globalThis.__chains.length).toBe(2);
    
    const c1 = globalThis.__chains[0];
    expect(c1._query).toContainEqual(['range', [0, 499]]);
    expect(c1._query).toContainEqual(['eq', ['quality_flag', 'high_yield']]);
    
    const c2 = globalThis.__chains[1];
    expect(c2._query).toContainEqual(['range', [500, 999]]);
    
    expect(res.length).toBe(510);
    expect(idb.saveQuestionsToContentCache).toHaveBeenCalledWith(res);
  });

  it('fetchQuestions without cache uses Promise.all pagination for fetchAllQuestions', async () => {
    // Cached is empty -> fetchAllQuestions -> Promise.all([page1, page2])
    const emptyPage = [];
    globalThis.__supabaseMockDefault = () => ({ data: emptyPage, error: null });
    
    // We mock idb to return empty cache
    (idb.getCachedQuestions as any).mockResolvedValueOnce([]);
    
    const promise = fetchQuestions(false);
    vi.runAllTimers();
    const res = await promise;
    
    // fetchAllQuestions calls 2 queries in Promise.all initially
    expect(globalThis.__chains.length).toBeGreaterThanOrEqual(2);
    
    const c1 = globalThis.__chains[0];
    expect(c1._query).toContainEqual(['range', [0, 499]]);
    expect(c1._query).toContainEqual(['or', ['quality_flag.is.null,quality_flag.eq.reviewed_keep,quality_flag.eq.high_yield']]);
    
    const c2 = globalThis.__chains[1];
    expect(c2._query).toContainEqual(['range', [500, 999]]);
    
    expect(res).toEqual([]);
    expect(idb.saveQuestionsToCache).toHaveBeenCalledWith([]);
  });

  it('fetchQuestions with cache uses delta sync', async () => {
    // 1 mock for updated, 1 mock for deleted
    globalThis.__supabaseMockQueue.push({ data: [{ id: 'q1', quality_flag: 'reviewed_keep' }], error: null }); // updated
    globalThis.__supabaseMockQueue.push({ data: [{ record_id: 'q2' }], error: null }); // deleted
    
    (idb.getCachedQuestions as any).mockResolvedValueOnce([{ id: 'q2' }, { id: 'q3' }]);
    // mock localStorage for last sync
    const spyGetItem = vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('2024-06-14T00:00:00Z');
    
    const promise = fetchQuestions(false);
    vi.runAllTimers();
    const res = await promise;
    
    // q2 is deleted, q3 remains, q1 is updated/inserted -> final: q1, q3
    expect(res).toHaveLength(2);
    expect(res.map(r => r.id).sort()).toEqual(['q1', 'q3']);
    
    expect(idb.deleteQuestionsFromCache).toHaveBeenCalledWith(['q2']);
    expect(idb.saveQuestionsToCache).toHaveBeenCalledWith([{ id: 'q1', quality_flag: 'reviewed_keep' }]);
    
    spyGetItem.mockRestore();
  });
});
