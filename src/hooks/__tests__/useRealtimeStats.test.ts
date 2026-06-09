import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import * as React from 'react';
import { useRealtimeStats } from '../useRealtimeStats';
import { supabase } from '../../lib/supabase';

vi.mock('../../lib/supabase', () => ({
  supabase: {
    channel: vi.fn(),
    removeChannel: vi.fn(),
  },
}));

vi.mock('react', () => ({
  useEffect: vi.fn(),
  useRef: vi.fn(),
}));

describe('useRealtimeStats', () => {
  let effectCallback: any;
  let refs: any[] = [];
  let refIndex = 0;

  beforeEach(() => {
    vi.clearAllMocks();
    refs = [];
    refIndex = 0;
    
    vi.mocked(React.useEffect).mockImplementation((cb) => {
      effectCallback = cb;
    });
    
    vi.mocked(React.useRef).mockImplementation((init) => {
      if (refIndex >= refs.length) {
        refs.push({ current: init });
      }
      return refs[refIndex++];
    });

    vi.spyOn(global, 'setTimeout');
    vi.spyOn(global, 'clearTimeout');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should not subscribe if enabled is false', () => {
    useRealtimeStats({ userId: 'u1', deviceId: 'd1', onStatUpdate: vi.fn(), enabled: false });
    
    expect(effectCallback).toBeDefined();
    effectCallback();
    
    expect(supabase.channel).not.toHaveBeenCalled();
  });

  it('should subscribe to user channel if userId is provided', () => {
    const mockChannel = {
      on: vi.fn().mockReturnThis(),
      subscribe: vi.fn().mockReturnThis(),
    };
    vi.mocked(supabase.channel).mockReturnValue(mockChannel as any);

    useRealtimeStats({ userId: 'u1', deviceId: 'd1', onStatUpdate: vi.fn() });
    const cleanup = effectCallback();

    expect(supabase.channel).toHaveBeenCalledWith('stats-u1');
    expect(mockChannel.on).toHaveBeenCalledTimes(2);
    expect(mockChannel.on).toHaveBeenCalledWith('postgres_changes', expect.objectContaining({
      event: 'INSERT', filter: 'user_id=eq.u1'
    }), expect.any(Function));
    
    cleanup();
    expect(supabase.removeChannel).toHaveBeenCalledWith(mockChannel);
  });

  it('should subscribe to device channel if userId is null', () => {
    const mockChannel = {
      on: vi.fn().mockReturnThis(),
      subscribe: vi.fn().mockReturnThis(),
    };
    vi.mocked(supabase.channel).mockReturnValue(mockChannel as any);

    useRealtimeStats({ userId: null, deviceId: 'd2', onStatUpdate: vi.fn() });
    effectCallback();

    expect(supabase.channel).toHaveBeenCalledWith('stats-d2');
    expect(mockChannel.on).toHaveBeenCalledWith('postgres_changes', expect.objectContaining({
      event: 'INSERT', filter: 'device_id=eq.d2'
    }), expect.any(Function));
  });

  it('should ignore payload from same device and process from other device', () => {
    let insertCallback: any;
    const mockChannel = {
      on: vi.fn().mockImplementation((_event, opts, cb) => {
        if (opts.event === 'INSERT') insertCallback = cb;
        return mockChannel;
      }),
      subscribe: vi.fn().mockReturnThis(),
    };
    vi.mocked(supabase.channel).mockReturnValue(mockChannel as any);

    const onStatUpdate = vi.fn();
    useRealtimeStats({ userId: 'u1', deviceId: 'd1', onStatUpdate });
    effectCallback();

    expect(insertCallback).toBeDefined();
    
    // Call with same device_id
    insertCallback({ new: { device_id: 'd1', question_id: 'q1' } });
    expect(onStatUpdate).not.toHaveBeenCalled();

    // Call with different device_id
    insertCallback({ 
      new: { 
        device_id: 'd2', 
        question_id: 'q1', 
        attempts: 2, 
        corrects: 1, 
        last_seen: '2024-06-15', 
        difficulty: 8 
      } 
    });
    
    expect(onStatUpdate).toHaveBeenCalledWith('q1', {
      attempts: 2,
      corrects: 1,
      lastSeen: '2024-06-15',
      wrongChoices: [],
      difficulty: 8
    });
  });

  it('should handle CHANNEL_ERROR and retry', () => {
    vi.useFakeTimers();
    let subscribeCallback: any;
    const mockChannel = {
      on: vi.fn().mockReturnThis(),
      subscribe: vi.fn().mockImplementation((cb) => {
        subscribeCallback = cb;
        return mockChannel;
      }),
    };
    vi.mocked(supabase.channel).mockReturnValue(mockChannel as any);

    useRealtimeStats({ userId: 'u1', deviceId: 'd1', onStatUpdate: vi.fn() });
    effectCallback();

    expect(subscribeCallback).toBeDefined();
    
    // Trigger error
    subscribeCallback('CHANNEL_ERROR');
    
    // 2 seconds for first retry
    vi.advanceTimersByTime(2000);
    expect(supabase.removeChannel).toHaveBeenCalledWith(mockChannel);
    expect(supabase.channel).toHaveBeenCalledTimes(2); // Retried
    
    vi.useRealTimers();
  });
});
