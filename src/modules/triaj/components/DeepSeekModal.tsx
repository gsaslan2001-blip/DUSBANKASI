/**
 * Deploy.com DeepSeek v4.1 Flash (1017) Bilişsel DUS Motoru Modalı
 * Dokümantasyon: https://docs.deploy.com/deepseek-v4-1-flash-1017
 * DusTriaj Referansı: C:\Users\FURKAN\Desktop\Projeler\DusTriaj\src\components\DeepSeekModal.tsx
 */

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useModalA11y } from '../../../hooks/useModalA11y';
import { useTriajView } from './TriajViewContext';
import { subjectForTopic } from '../domain/catalog';
import {
  requestDeepSeekCompletion,
  type DeepSeekTaskType,
  type DeepSeekReasoningEffort,
  type DeepSeekResult,
  DEPLOY_DEEPSEEK_MODEL
} from '../integrations/deepseek';
import {
  X,
  Sparkles,
  Copy,
  Check,
  Save,
  Loader2,
  Cpu,
  BookOpen,
  Layers,
  MessageSquare
} from './icons';

interface DeepSeekModalProps {
  onClose: () => void;
  initialSubjectId?: string;
  initialTopicId?: string;
}

export const DeepSeekModal: React.FC<DeepSeekModalProps> = ({
  onClose,
  initialSubjectId,
  initialTopicId
}) => {
  const { subjects, topics, updateTopic, saving } = useTriajView();
  const dialog = useModalA11y(onClose);
  const request = useRef<AbortController | null>(null);
  const copyTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      request.current?.abort();
      if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
    };
  }, []);

  // Bağlam verilmezse ilk derse düş; sabit bir kod seçme.
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(initialSubjectId ?? subjects[0]?.id ?? '');
  const subjectTopics = useMemo(
    () =>
      topics
        .filter(t => subjectForTopic(subjects, t.subjectId)?.id === selectedSubjectId)
        .sort((a, b) => a.unitNumber - b.unitNumber),
    [topics, subjects, selectedSubjectId]
  );

  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    initialTopicId || subjectTopics[0]?.id || ''
  );
  const [taskType, setTaskType] = useState<DeepSeekTaskType>('TRIAGE_PATCH');
  const [reasoningEffort, setReasoningEffort] = useState<DeepSeekReasoningEffort>('none');
  const [customNotes, setCustomNotes] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<DeepSeekResult | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [savedToUnit, setSavedToUnit] = useState<boolean>(false);
  const [resultTopicId, setResultTopicId] = useState<string>();

  const selectedSubject = subjects.find(s => s.id === selectedSubjectId);
  const selectedTopic = topics.find(t => t.id === selectedTopicId) || subjectTopics[0];

  const handleSubjectChange = (subId: string) => {
    setSelectedSubjectId(subId);
    const firstUnit = topics
      .filter(t => t.subjectId === subId)
      .sort((a, b) => a.unitNumber - b.unitNumber)[0];
    setSelectedTopicId(firstUnit?.id || '');
    setSavedToUnit(false);
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    const controller = new AbortController();
    request.current?.abort();
    request.current = controller;
    setLoading(true);
    setError(null);
    setSavedToUnit(false);
    setResult(null);

    try {
      const response = await requestDeepSeekCompletion({
        taskType,
        subjectCode: selectedSubject?.code,
        subjectName: selectedSubject?.name,
        unitTitle: selectedTopic?.title,
        bucket: selectedTopic?.currentBucket,
        userNotes: customNotes,
        customPrompt: taskType === 'CUSTOM' ? customNotes : undefined,
        reasoningEffort
      }, controller.signal);
      setResultTopicId(selectedTopic?.id);
      setResult(response);
    } catch (err) {
      if (!controller.signal.aborted) {
        setError(
          err instanceof Error ? err.message : 'DeepSeek v4.1 Flash API yanıtı alınamadı.'
        );
      }
    } finally {
      if (!controller.signal.aborted) setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!result?.content) return;
    try {
      await navigator.clipboard.writeText(result.content);
      setCopied(true);
      if (copyTimer.current !== null) window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setError('Panoya erişilemedi.');
    }
  };

  const resultTopic = topics.find(topic => topic.id === resultTopicId);
  const handleSaveToUnit = async () => {
    if (!resultTopic || !result?.content || saving || savedToUnit) return;
    const prefix = resultTopic.clinicalNotes ? `${resultTopic.clinicalNotes}\n\n` : '';
    if (await updateTopic(resultTopic.id, { clinicalNotes: `${prefix}[DeepSeek v4.1 Notu]: ${result.content}` })) {
      setSavedToUnit(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div
        ref={dialog}
        role="dialog"
        aria-modal="true"
        aria-label="DeepSeek v4.1 Bilişsel DUS Motoru"
        tabIndex={-1}
        className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden my-8"
      >
        {/* Başlık — DusTriaj ile birebir */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-300">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold tracking-tight">
                  DUS 2027 Bilişsel AI Motoru (Deploy.com API)
                </h2>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-mono text-[10px]">
                  {DEPLOY_DEEPSEEK_MODEL}
                </span>
              </div>
              <p className="text-[11px] text-slate-300 mt-0.5">
                Nokta atışı 5 dk triyaj yaması, çapraz kıyas tablosu ve tek satırlık Anki Cloze üretici
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleGenerate} className="p-6 space-y-4">
          {/* Ders ve Ünite Seçimi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                DUS Ders Bloğu (14 Kanonik Blok)
              </label>
              <select
                aria-label="AI için DUS Ders Bloğu Seç"
                value={selectedSubjectId}
                onChange={e => handleSubjectChange(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-800"
              >
                {subjects.map(sub => (
                  <option key={sub.id} value={sub.id}>
                    [{sub.code}] {sub.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                İlgili Müfredat Ünitesi ({subjectTopics.length} Ünite)
              </label>
              <select
                aria-label="AI için Müfredat Ünitesi Seç"
                value={selectedTopic?.id || ''}
                onChange={e => {
                  setSelectedTopicId(e.target.value);
                  setSavedToUnit(false);
                }}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-800"
              >
                {subjectTopics.map(u => (
                  <option key={u.id} value={u.id}>
                    #{String(u.unitNumber).padStart(2, '0')} — {u.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Görev Modu Seçimi */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Bilişsel Görev Modu
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setTaskType('TRIAGE_PATCH')}
                className={`p-2.5 rounded-lg border text-left transition-all ${
                  taskType === 'TRIAGE_PATCH'
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-950 font-semibold ring-1 ring-indigo-600'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Triyaj Yaması</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Çapraz Kıyas &amp; 5 dk Yama</div>
              </button>

              <button
                type="button"
                onClick={() => setTaskType('ANKI_CLOZE')}
                className={`p-2.5 rounded-lg border text-left transition-all ${
                  taskType === 'ANKI_CLOZE'
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-950 font-semibold ring-1 ring-indigo-600'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Anki Cloze</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Tek Satır Kart &amp; Mnemonic</div>
              </button>

              <button
                type="button"
                onClick={() => setTaskType('UNIT_BLURTING')}
                className={`p-2.5 rounded-lg border text-left transition-all ${
                  taskType === 'UNIT_BLURTING'
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-950 font-semibold ring-1 ring-indigo-600'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                  <span>T+0 Blurting</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Boş Kağıt Kritik Eşikler</div>
              </button>

              {([['SWSPS_ERROR_AUTOPSY', 'SWSPS Hata Otopsisi'], ['MOCK_EXAM_STRATEGY', 'Deneme Stratejisi']] as const).map(([mode, label]) => (
                <button key={mode} type="button" onClick={() => setTaskType(mode)}
                  className={`p-2.5 rounded-lg border text-left transition-all ${taskType === mode ? 'border-indigo-600 bg-indigo-50 text-indigo-950 font-semibold ring-1 ring-indigo-600' : 'border-slate-200 hover:border-slate-300 text-slate-700'}`}>
                  {label}
                </button>
              ))}

              <button
                type="button"
                onClick={() => setTaskType('CUSTOM')}
                className={`p-2.5 rounded-lg border text-left transition-all ${
                  taskType === 'CUSTOM'
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-950 font-semibold ring-1 ring-indigo-600'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-sky-600" />
                  <span>Serbest Sorgu</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Özel DUS Sorusu Sor</div>
              </button>
            </div>
          </div>

          {/* Ek Bağlam / Hata Notu & Reasoning Effort */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-semibold text-slate-700">
                {taskType === 'CUSTOM'
                  ? 'Sormak İstediğiniz DUS Sorusu / Konu'
                  : 'Karıştırdığınız Alt Başlık veya Yanlış Soru Notu (Opsiyonel)'}
              </label>

              <div className="flex items-center gap-1.5 text-[11px]">
                <span className="text-slate-500">Reasoning Effort:</span>
                <select
                  aria-label="DeepSeek Reasoning Effort"
                  value={reasoningEffort}
                  onChange={e => setReasoningEffort(e.target.value as DeepSeekReasoningEffort)}
                  className="px-2 py-0.5 bg-slate-100 border border-slate-300 rounded font-mono text-[11px] text-slate-800"
                >
                  <option value="none">none (Hızlı &amp; Doğrudan)</option>
                  <option value="low">low (Düşünme Zincirli)</option>
                  <option value="high">high (Derin Analiz)</option>
                </select>
              </div>
            </div>

            <textarea
              rows={2}
              value={customNotes}
              onChange={e => setCustomNotes(e.target.value)}
              placeholder="Örn: Gama-1 ve Gama-2 fazlarının korozyon direncini ve kalay-civa ilişkisini kıyasla..."
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-slate-500 font-mono">
              Endpoint: api-cdn.deploy.com/api/v1/chat/completions
            </span>
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg flex items-center gap-2 shadow-xs transition-colors disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>DeepSeek v4.1 Üretiyor...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>DeepSeek v4.1 Flash ile Üret</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Hata veya Sonuç Çıktısı */}
        {error && (
          <div className="mx-6 mb-6 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs">
            {error}
          </div>
        )}

        {result && (
          <div className="px-6 pb-6 space-y-3">
            <div className="border border-indigo-200 bg-indigo-50/40 rounded-xl p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-indigo-100">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-950">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>DeepSeek v4.1 Flash Çıktısı</span>
                  <span className="text-[10px] font-mono font-normal text-slate-500">
                    ({result.usage.totalTokens} token)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-300 rounded-md text-xs font-semibold text-slate-700 flex items-center gap-1"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Kopyalandı</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Kopyala</span>
                      </>
                    )}
                  </button>

                  {resultTopic && (
                    <button
                      type="button"
                      onClick={handleSaveToUnit}
                      disabled={saving || savedToUnit}
                      className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-xs font-semibold flex items-center gap-1 disabled:opacity-50"
                    >
                      {savedToUnit ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Üniteye Kaydedildi</span>
                        </>
                      ) : (
                        <>
                          <Save className="w-3.5 h-3.5" />
                          <span>Ünite Yama Notuna Ekle</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>

              <div className="text-xs text-slate-800 whitespace-pre-wrap leading-relaxed max-h-64 overflow-y-auto font-sans">
                {result.content}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
