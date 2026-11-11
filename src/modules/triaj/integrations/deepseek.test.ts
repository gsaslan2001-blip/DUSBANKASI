import { afterEach, describe, expect, it, vi } from 'vitest';
const { getSession } = vi.hoisted(() => ({ getSession: vi.fn() }));
vi.mock('../../../lib/supabase', () => ({ supabase: { auth: { getSession } } }));
import { getDeepSeekStatus, requestDeepSeekCompletion } from './deepseek';
import { buildDeepSeekPayload } from '../domain/deepseek';
import { deepSeekInput } from '../../../../api/_lib/triaj/deepseek';

afterEach(() => { vi.unstubAllGlobals(); vi.clearAllMocks(); });
describe('authenticated AI client', () => {
  it.each(['SWSPS_ERROR_AUTOPSY', 'MOCK_EXAM_STRATEGY'] as const)('accepts %s and includes its supplied context', (taskType) => {
    const input = deepSeekInput.parse({ taskType, userNotes: 'Örnek analiz bilgisi' });
    expect(buildDeepSeekPayload(input).messages[1].content).toContain('Örnek analiz bilgisi');
  });
  it('sends the account token only to the canonical route', async () => {
    getSession.mockResolvedValue({ data: { session: { access_token: 'synthetic-token' } } });
    const network = vi.fn().mockResolvedValue(Response.json({ content: 'result' }));
    vi.stubGlobal('fetch', network);
    await requestDeepSeekCompletion({ taskType: 'CUSTOM', customPrompt: 'test' });
    expect(network).toHaveBeenCalledTimes(1);
    expect(network.mock.calls[0][0]).toBe('/api/triaj/ai/deepseek');
    expect(new Headers(network.mock.calls[0][1].headers).get('Authorization')).toBe('Bearer synthetic-token');
  });
  it('never reports a failed status request as configured or retries another route', async () => {
    getSession.mockResolvedValue({ data: { session: { access_token: 'synthetic-token' } } });
    const network = vi.fn().mockResolvedValue(Response.json({ error: 'Oturum gerekli', code: 'UNAUTHENTICATED' }, { status: 401 }));
    vi.stubGlobal('fetch', network);
    await expect(getDeepSeekStatus()).rejects.toThrow('Oturum gerekli');
    expect(network).toHaveBeenCalledTimes(1);
  });
  it('does not call the network without a signed-in session', async () => {
    getSession.mockResolvedValue({ data: { session: null } });
    const network = vi.fn();
    vi.stubGlobal('fetch', network);
    await expect(getDeepSeekStatus()).rejects.toThrow('oturum');
    expect(network).not.toHaveBeenCalled();
  });
});
