import { useCallback, useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { useModalA11y } from '../../../hooks/useModalA11y';
import { currentTaskDate } from '../domain/state';
import { subjectForTopic } from '../domain/catalog';
import { evaluateSaturdayRepair, evaluateT14Verification, evaluateT3Triage } from '../domain/triage';
import { requestDeepSeekCompletion } from '../integrations/deepseek';
import type { TestStage, TopicUnit, TriajTask } from '../types';
import { Sparkles, X } from './icons';
import { stageLabels, useTriajView } from './TriajViewContext';

interface TriageModalProps {
  topic: TopicUnit;
  stage?: TestStage;
  task?: TriajTask;
  onClose: () => void;
}

export function TriageModal({ topic, stage: initialStage, task: initialTask, onClose }: TriageModalProps) {
  const { subjects, tasks, todayStr, onStartTask, save, saving, systemParams, recordManualResult, error: saveError } = useTriajView();
  const task = initialTask ? tasks.find(item => item.id === initialTask.id) : tasks.find(item =>
    item.topicId === topic.id && item.status === 'open' && !item.errorId && (!initialStage || item.stage === initialStage));
  const stage = task?.stage ?? initialStage ?? 'T0_SAMPLING';
  const expected = task?.questionCount ?? 20;
  const firstReview = !task || task.ruleVersion === 'first-review-v2';
  const flexible = stage === 'T0_SAMPLING' && firstReview;
  const [bankCount, setBankCount] = useState(String(task?.questionCount ?? 20));
  const [date, setDate] = useState(stage === 'SATURDAY_REPAIR' && task ? currentTaskDate(task, todayStr) : todayStr);
  const [correct, setCorrect] = useState('');
  const [wrong, setWrong] = useState('');
  const [empty, setEmpty] = useState('');
  const [notes, setNotes] = useState('');
  const [prepDone, setPrepDone] = useState(Boolean(task?.preparationDone));
  const [showManual, setShowManual] = useState(!task);

  useEffect(() => {
    setPrepDone(Boolean(task?.preparationDone));
  }, [task?.preparationDone]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const request = useRef<AbortController | null>(null);
  const close = useCallback(() => { if (!busy && !saving) onClose(); }, [busy, onClose, saving]);
  const dialog = useModalA11y(close);
  useEffect(() => () => request.current?.abort(), []);

  const counts = [correct, wrong, empty].map(Number);
  const total = counts.reduce((sum, count) => sum + count, 0);
  const validTotal = flexible ? total >= 20 : stage === 'T14_VERIFICATION' ? total >= 20 && total <= 25 : total === expected;
  const valid = validTotal && [correct, wrong, empty].every(Boolean) && counts.every(value => Number.isInteger(value) && value >= 0);
  const preview = valid ? (
    stage === 'T3_MAIN' ? evaluateT3Triage(counts[0], total, date)
      : stage === 'T14_VERIFICATION' ? evaluateT14Verification(counts[0], total, date)
      : stage === 'SATURDAY_REPAIR' ? evaluateSaturdayRepair(counts[0], total, date)
      : undefined
  ) : undefined;

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!valid || busy || saving) return;
    setBusy(true);
    const saved = await recordManualResult(topic, stage, { date, correct: counts[0], wrong: counts[1], empty: counts[2], notes }, task?.id);
    setBusy(false);
    if (saved) onClose();
  }

  async function start() {
    if (!task || busy || saving) return;
    setBusy(true);
    setError('');
    try {
      await onStartTask({ ...task, questionCount: flexible ? Number(bankCount) : task.questionCount });
      onClose();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Soru oturumu başlatılamadı.');
    } finally {
      setBusy(false);
    }
  }

  async function generatePatch() {
    request.current?.abort();
    const controller = new AbortController();
    request.current = controller;
    setError('');
    setBusy(true);
    try {
      const subject = subjectForTopic(subjects, topic.subjectId);
      const result = await requestDeepSeekCompletion({
        taskType: 'TRIAGE_PATCH',
        subjectName: subject?.name,
        unitTitle: topic.title,
        scoreSummary: `${correct}/${total}`,
        userNotes: notes,
        reasoningEffort: 'none',
      }, controller.signal);
      if (result.content) {
        setNotes(value => [value, result.content].filter(Boolean).join('\n\n'));
      }
    } catch (reason) {
      if (!controller.signal.aborted) {
        setError(reason instanceof Error ? reason.message : 'Yapay zekâ hizmetine ulaşılamadı.');
      }
    } finally {
      if (!controller.signal.aborted) setBusy(false);
    }
  }

  const preparation = stage === 'T0_SAMPLING'
    ? 'Konuyu çalış ve kitabı kapatıp boş kâğıtla aktif geri çağırma yap.'
    : stage === 'SATURDAY_REPAIR' ? '25 dakika aktif yeniden kurma yap.'
    : stage === 'T14_VERIFICATION' ? 'İşaretli alt başlıklara 5 dakika bak.' : null;
  const available = task?.availableCount;
  const shortage = available !== undefined && available < expected;

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-black/65 p-4">
      <div ref={dialog} role="dialog" aria-modal="true" aria-label="TRİAJ test görevi" tabIndex={-1}
        className="max-h-[calc(100dvh-2rem)] w-full max-w-xl overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-2xl">
        <header className="flex items-start justify-between gap-4 border-b border-slate-200 p-4 sm:p-6">
          <div>
            <p className="text-xs font-semibold text-slate-500">{stageLabels[stage]} · {expected} soru</p>
            <h2 className="mt-1 text-lg font-bold">{topic.title}</h2>
          </div>
          <button type="button" onClick={close} aria-label="Kapat" disabled={busy || saving} className="rounded-lg p-2"><X className="size-5" /></button>
        </header>
        <div className="space-y-4 p-4 sm:p-6">
          {task?.status === 'completed' ? <p role="status">Tamamlandı</p> : (
            <>
              {preparation && (
                <div className="rounded-lg bg-slate-100 p-3 text-sm">
                  {task ? (
                    <label className="flex items-center gap-2">
                      <input type="checkbox" checked={prepDone} disabled={saving}
                        onChange={event => {
                          const preparationDone = event.target.checked;
                          setPrepDone(preparationDone);
                          void save(state => ({
                            ...state,
                            tasks: state.tasks.map(item => item.id === task.id ? { ...item, preparationDone } : item),
                          }));
                        }} />
                      {preparation}
                    </label>
                  ) : <p>{preparation}</p>}
                </div>
              )}
              {flexible && <p className="text-sm text-slate-600">İlk tekrar: konu çalışması ve en az 20 soru tek oturumdur. Sonuç kova atamaz; fiili tarihten üç gün sonrasına 40 soruluk T+3 testi açar.</p>}
              {stage === 'T0_SAMPLING' && !firstReview && <p className="text-sm text-amber-900">Eski 10 soruluk görev korunuyor. Yeni ilk tekrar düzenine geçmek için Dersler ekranında bu planı iptal edip yeniden planlayın.</p>}
              {flexible && <label className="block text-sm font-semibold">Banka soru sayısı (20–120)
                <input type="number" min={20} max={120} value={bankCount} disabled={Boolean(task?.setId)} onChange={event => setBankCount(event.target.value)} className="mt-1 block rounded-md border border-slate-300 bg-slate-50 p-2" />
              </label>}
              {stage === 'T3_MAIN' && <p className="text-sm text-slate-600">Konuyu yeniden okumadan testi çöz. Sonrasında yanlış alt başlıklarına 10–15 dakika bak. İlk tekrar dış kaynakta çözüldüyse soru kimlikleri bilinmediğinden tekrar etmeme garantisi verilemez.</p>}
              {stage === 'ERROR_VERIFICATION' && <p className="text-sm text-slate-600">13 veya daha fazla doğru hata dosyasını kapatır.</p>}
              {shortage && <p role="status" className="rounded-lg bg-amber-50 p-3 text-sm text-amber-900">{available} uygun soru var, {expected - available} soru eksik. Tam testi çözdüysen sonucu elle kaydedebilirsin.</p>}
              {task && (
                <div className="flex flex-wrap gap-2">
                  <button type="button" onClick={() => void start()} disabled={busy || saving || shortage || currentTaskDate(task, todayStr) > todayStr}
                    className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50">
                    {busy ? 'Hazırlanıyor…' : 'Soru Bankasında Başlat'}
                  </button>
                  <button type="button" onClick={() => setShowManual(value => !value)} className="rounded-lg border border-slate-200 px-4 py-2 text-sm">
                    Elle Sonuç Gir
                  </button>
                </div>
              )}
              {showManual && (
                <form onSubmit={submit} className="space-y-3">
                  <label className="block text-sm font-semibold">
                    Test tarihi
                    <input type="date" required value={date} max={todayStr} onChange={event => setDate(event.target.value)}
                      className="mt-1 block rounded-md border border-slate-300 bg-slate-50 p-2" />
                  </label>
                  <p className="text-sm text-slate-600">Toplam {flexible ? 'en az 20' : stage === 'T14_VERIFICATION' ? '20–25' : expected} olmalı. Kullanılmayan alanlara 0 yaz.</p>
                  <div className="grid grid-cols-3 gap-2">
                    {([['Doğru', correct, setCorrect], ['Yanlış', wrong, setWrong], ['Boş', empty, setEmpty]] as const).map(([label, value, setValue]) => (
                      <label key={label} className="text-sm font-semibold">
                        {label}
                        <input type="number" required min="0" max={flexible ? undefined : stage === 'T14_VERIFICATION' ? 25 : expected} value={value}
                          onChange={event => setValue(event.target.value)} className="mt-1 w-full rounded-md border border-slate-300 bg-slate-50 p-2" />
                      </label>
                    ))}
                  </div>
                  {preview && (
                    <div role="status" className="rounded-lg bg-slate-100 p-3 text-sm">
                      {preview.clinicalDiagnosis} {preview.nextScheduledDate && `Sonraki görev ${preview.nextScheduledDate}.`}
                    </div>
                  )}
                  <label className="block text-sm font-semibold">
                    Yama notu
                    <textarea value={notes} onChange={event => setNotes(event.target.value)} rows={3}
                      className="mt-1 w-full rounded-md border border-slate-300 bg-slate-50 p-2" />
                  </label>
                  <button type="button" onClick={() => void generatePatch()} disabled={!valid || busy || saving} className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 disabled:opacity-50">
                    <Sparkles className="size-4" /> Yapay Zekâ ile Yama Önerisi
                  </button>
                  <button type="submit" disabled={!valid || busy || saving} className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50">
                    {busy || saving ? 'Kaydediliyor…' : 'Sonucu Kaydet'}
                  </button>
                </form>
              )}
              {(error || saveError) && <p role="alert" className="text-sm text-rose-700">{error || saveError}</p>}
              {stage === 'T14_VERIFICATION' && !showManual && <p className="text-xs text-slate-500">Plan kotası {task?.questionCount ?? systemParams.verificationQuestions ?? 20} soru.</p>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
