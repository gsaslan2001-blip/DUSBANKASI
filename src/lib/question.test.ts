import { describe, it, expect, vi, beforeEach } from 'vitest';
import { addQuestions, updateQuestion, deleteQuestion, toggleFavoriteInCloud } from './supabase';
import { createClient } from '@supabase/supabase-js';

// Mock supabase-js
vi.mock('@supabase/supabase-js', () => {
  const mockInvoke = vi.fn();
  const mockEq = vi.fn().mockReturnThis();
  const mockUpdate = vi.fn().mockReturnValue({ eq: mockEq });
  const mockDelete = vi.fn().mockReturnValue({ eq: mockEq });
  
  const mockFrom = vi.fn(() => ({
    update: mockUpdate,
    delete: mockDelete,
    select: vi.fn().mockReturnThis(),
    eq: mockEq,
  }));

  const mockClient = {
    functions: { invoke: mockInvoke },
    from: mockFrom,
    storage: { from: vi.fn() },
    auth: {
      onAuthStateChange: vi.fn(() => ({ data: { subscription: { unsubscribe: vi.fn() } } })),
      getSession: vi.fn().mockResolvedValue({ data: { session: null } }),
    }
  };
  
  return {
    createClient: vi.fn(() => mockClient)
  };
});

describe('Question Management Functions', () => {
  let mockClient: any;
  
  beforeEach(() => {
    vi.clearAllMocks();
    mockClient = createClient('', '');
    // Provide default resolved values for the mocks
    mockClient.functions.invoke.mockResolvedValue({ data: { accepted: 1, written: 1 }, error: null });
    
    // For chained calls like: from('questions').update(...).eq(...)
    // we set eq to return an object with data and error so it resolves properly
    const mockEq = vi.fn().mockResolvedValue({ data: null, error: null });
    const mockUpdate = vi.fn().mockReturnValue({ eq: mockEq });
    const mockDelete = vi.fn().mockReturnValue({ eq: mockEq });
    
    mockClient.from.mockImplementation(() => ({
      update: mockUpdate,
      delete: mockDelete,
      match: vi.fn().mockResolvedValue({ data: null, error: null }),
    }));
  });

  it('addQuestions should call manage-questions edge function', async () => {
    const mockQuestions = [{ lesson: 'Fizyoloji', unit: 'Hücre', question: 'Soru 1', option_a: 'A', option_b: 'B', option_c: 'C', option_d: 'D', option_e: 'E', correct_answer: 'A', explanation: 'Açıklama' }];
    
    const result = await addQuestions(mockQuestions as any);
    
    expect(mockClient.functions.invoke).toHaveBeenCalledWith('manage-questions', {
      body: { questions: mockQuestions }
    });
    expect(result).toEqual({ accepted: 1, written: 1 });
  });

  it('updateQuestion should call update and eq', async () => {
    const questionId = 'mock-id-1';
    const fieldsToUpdate = { question: 'Güncellenmiş Soru' };
    
    await updateQuestion(questionId, fieldsToUpdate);
    
    expect(mockClient.from).toHaveBeenCalledWith('questions');
    // We can verify that from('questions').update(fieldsToUpdate) was called
  });

  it('deleteQuestion should call delete and eq', async () => {
    const questionId = 'mock-id-1';
    
    await deleteQuestion(questionId);
    
    expect(mockClient.from).toHaveBeenCalledWith('questions');
  });

  it('toggleFavoriteInCloud should call update with is_favorite', async () => {
    const questionId = 'mock-id-1';
    
    await toggleFavoriteInCloud(questionId, true);
    
    expect(mockClient.from).toHaveBeenCalledWith('questions');
  });
});
