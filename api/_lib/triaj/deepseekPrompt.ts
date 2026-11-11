import { DEPLOY_DEEPSEEK_MODEL } from '../../../src/modules/triaj/domain/deepseek.js';
import type { DeepSeekPromptInput, DeepSeekReasoningEffort, DeepSeekResult, DeployChatCompletionRequest } from '../../../src/modules/triaj/domain/deepseek.js';

const SYSTEM_DOCTRINE_PROMPT = `Sen DUS 2027 (Diş Hekimliğinde Uzmanlık Sınavı) Bilişsel Kova Triyajı ve 80/20 Pareto Bellek Mimarisinin uzman klinik akademik motorusun.
Yanıtlarında şu kurallara kesinlikle uy:
1. Uzun ansiklopedik özetler yazma; doğrudan sınav kazandıran ayırıcı tanı eşiklerini, sayısal sınırları ve tuzakları maddeler halinde ver.
2. Benzer kavramları (örn. Evre III vs Evre IV, Gama-1 vs Gama-2, Virüs-Reseptör) yan yana zıtlık/kıyas formatında göster.
3. Anki kartı istendiğinde tek satırlık {{c1::...}} Cloze formatında ve gerekiyorsa fonolojik/absürt hafıza çivisi (Mnemonic) ile üret.`;

/**
 * Görev tipine ve ünite bilgilerine göre Deploy.com DeepSeek v4.1 Flash API istek gövdesini oluşturur.
 */
export function buildDeepSeekPayload(
  input: DeepSeekPromptInput
): DeployChatCompletionRequest {
  const subjectLabel = input.subjectCode
    ? `[${input.subjectCode}] ${input.subjectName || 'DUS Dersi'}`
    : input.subjectName || 'DUS Dersi';
  const unitLabel = input.unitTitle || 'Genel Konu';

  let userContent = '';

  switch (input.taskType) {
    case 'TRIAGE_PATCH':
      userContent = [
        `Ders: ${subjectLabel}`,
        `Ünite: ${unitLabel}`,
        input.bucket ? `Mevcut Kova Durumu: ${input.bucket}` : '',
        input.scoreSummary ? `Test Performansı: ${input.scoreSummary}` : '',
        input.userNotes ? `Öğrencinin Hata Notu: ${input.userNotes}` : '',
        '',
        'Görev: Bu ünite için DUS sınavında en sık karıştırılan 3 kritik ayırıcı tanı farkını (Çapraz Kıyas) ve 5 dakikalık nokta atışı yama notunu çok net, kısa maddelerle hazırla.'
      ]
        .filter(Boolean)
        .join('\n');
      break;

    case 'ANKI_CLOZE':
      userContent = [
        `Ders: ${subjectLabel}`,
        `Ünite: ${unitLabel}`,
        input.userNotes ? `Odaklanılacak Hata / Alt Başlık: ${input.userNotes}` : '',
        '',
        'Görev: Bu ünitenin en nankör ezber noktaları için "01-KRITIK-OTOPSI-VE-TABLO" destesine doğrudan kopyalanabilecek 4 adet tek satırlık Anki {{c1::...}} Cloze kartı ve 2 adet akılda kalıcı fonolojik/absürt hafıza çivisi (Mnemonic) üret.'
      ]
        .filter(Boolean)
        .join('\n');
      break;

    case 'UNIT_BLURTING':
      userContent = [
        `Ders: ${subjectLabel}`,
        `Ünite: ${unitLabel}`,
        '',
        'Görev: T+0 Boş Kağıt (Blurting) çalışması sonrası öğrencinin kağıdında mutlaka bulunması gereken 5 altın DUS bilgisini, sayısal eşikleri ve ÖSYM soru tuzaklarını kontrol listesi olarak yaz.'
      ]
        .filter(Boolean)
        .join('\n');
      break;

    case 'CUSTOM':
    default:
      userContent = [
        input.unitTitle ? `Bağlam: ${subjectLabel} — ${unitLabel}` : '',
        input.customPrompt || input.userNotes || 'DUS 2027 için kritik klinik ipucu ver.'
      ]
        .filter(Boolean)
        .join('\n\n');
      break;
  }

  const reasoningEffort: DeepSeekReasoningEffort = input.reasoningEffort || 'none';
  const defaultTokens = reasoningEffort === 'none' ? 800 : 1600;

  return {
    model: DEPLOY_DEEPSEEK_MODEL,
    messages: [
      { role: 'system', content: SYSTEM_DOCTRINE_PROMPT },
      { role: 'user', content: userContent }
    ],
    reasoning_effort: reasoningEffort,
    max_completion_tokens: input.maxCompletionTokens || defaultTokens,
    temperature: typeof input.temperature === 'number' ? input.temperature : 0.4,
    top_p: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
    cache_preference: input.cachePreference || 8,
    stream: false
  };
}

/**
 * Deploy.com chat.completion JSON yanıtını güvenli biçimde ayrıştırır.
 */
export function parseDeepSeekResponse(raw: Record<string, unknown>): DeepSeekResult {
  const choices = Array.isArray(raw?.choices) ? raw.choices : [];
  const firstChoice = (choices[0] as Record<string, unknown>) || {};
  const message = (firstChoice.message as Record<string, unknown>) || {};

  const rawContent = typeof message.content === 'string' ? message.content.trim() : '';
  const rawReasoning =
    typeof message.reasoning_content === 'string' && message.reasoning_content.trim()
      ? message.reasoning_content.trim()
      : null;

  const usageObj = (raw?.usage as Record<string, unknown>) || {};
  const promptDetails = (usageObj.prompt_tokens_details as Record<string, unknown>) || {};
  const completionDetails =
    (usageObj.completion_tokens_details as Record<string, unknown>) || {};

  return {
    id: typeof raw?.id === 'string' ? raw.id : 'deploy-completion',
    model: typeof raw?.model === 'string' ? raw.model : DEPLOY_DEEPSEEK_MODEL,
    content: rawContent || (rawReasoning ? `[Düşünme Özeti]: ${rawReasoning}` : ''),
    reasoningContent: rawReasoning,
    usage: {
      promptTokens: Number(usageObj.prompt_tokens) || 0,
      completionTokens: Number(usageObj.completion_tokens) || 0,
      totalTokens: Number(usageObj.total_tokens) || 0,
      reasoningTokens: Number(completionDetails.reasoning_tokens) || 0,
      cachedTokens: Number(promptDetails.cached_tokens) || 0
    }
  };
}
