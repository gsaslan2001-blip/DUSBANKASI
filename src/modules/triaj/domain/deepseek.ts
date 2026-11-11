export type DeepSeekTaskType =
  | 'TRIAGE_PATCH'   // T+3 veya Cumartesi Onarımı için 5-10 dk Nokta Atışı Yama & Çapraz Kıyas
  | 'ANKI_CLOZE'     // 01-KRITIK-OTOPSI-VE-TABLO destesi için tek satırlık Cloze & Mnemonic
  | 'UNIT_BLURTING'  // T+0 Boş Kağıt (Blurting) kritik eşikler ve DUS soru tuzakları kontrol listesi
  | 'CUSTOM';        // Serbest DUS sorgusu

export type DeepSeekReasoningEffort = 'none' | 'low' | 'high' | 'max';

export interface DeepSeekMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface DeepSeekPromptInput {
  taskType: DeepSeekTaskType;
  subjectName?: string;
  subjectCode?: string;
  unitTitle?: string;
  bucket?: string;
  scoreSummary?: string;
  userNotes?: string;
  customPrompt?: string;
  reasoningEffort?: DeepSeekReasoningEffort;
  maxCompletionTokens?: number;
  temperature?: number;
  cachePreference?: number;
}

export interface DeployChatCompletionRequest {
  model: string;
  messages: DeepSeekMessage[];
  reasoning_effort: DeepSeekReasoningEffort;
  max_completion_tokens: number;
  temperature: number;
  top_p: number;
  presence_penalty: number;
  frequency_penalty: number;
  cache_preference: number;
  stream: boolean;
}

export interface DeepSeekResult {
  id: string;
  model: string;
  content: string;
  reasoningContent: string | null;
  usage: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    reasoningTokens: number;
    cachedTokens: number;
  };
}

export const DEPLOY_DEEPSEEK_MODEL = 'deepseek-ai/deepseek-v4.1-flash-1017';
export const DEPLOY_BASE_URL = 'https://api-cdn.deploy.com/api/v1';
