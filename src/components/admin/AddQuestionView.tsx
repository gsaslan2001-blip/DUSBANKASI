import { useMemo, useState } from 'react';
import { CheckCircle, Warning, Plus, Upload } from '@phosphor-icons/react';
import { addQuestions, type ImportQuestion, type AddQuestionsResult } from '../../lib/supabase';
import type { Question } from '../../data';
import type { Theme } from '../../theme';
import { Button } from '../ui/Button';

type Tab = 'single' | 'bulk';
const OPT_KEYS = ['A', 'B', 'C', 'D', 'E'] as const;
type OptKey = (typeof OPT_KEYS)[number];

export function AddQuestionView({
  questions,
  onDone,
  theme,
}: {
  questions: Question[];
  onDone: () => void;
  theme: Theme;
}) {
  const [tab, setTab] = useState<Tab>('single');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AddQuestionsResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [lesson, setLesson] = useState('');
  const [unit, setUnit] = useState('');
  const [question, setQuestion] = useState('');
  const [opts, setOpts] = useState<Record<OptKey, string>>({ A: '', B: '', C: '', D: '', E: '' });
  const [correct, setCorrect] = useState<OptKey>('A');
  const [explanation, setExplanation] = useState('');
  const [jsonText, setJsonText] = useState('');

  const lessons = useMemo(
    () => Array.from(new Set(questions.map((q) => q.lesson))).sort((a, b) => a.localeCompare(b, 'tr')),
    [questions],
  );
  const units = useMemo(
    () =>
      Array.from(new Set(questions.filter((q) => q.lesson === lesson).map((q) => q.unit))).sort((a, b) =>
        a.localeCompare(b, 'tr'),
      ),
    [questions, lesson],
  );

  const inputCls = `w-full ${theme.inputBg} px-3.5 py-2.5 rounded-xl text-sm border ${theme.border} input-ring`;
  const labelCls = `${theme.subtext} text-[10px] font-bold tracking-widest uppercase block mb-1.5`;

  const submit = async (payload: ImportQuestion[]) => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await addQuestions(payload);
      setResult(res);
      // Tekil modda hızlı ardışık giriş için ders/üniteyi koru, gövdeyi temizle
      if (tab === 'single' && res.written > 0) {
        setQuestion('');
        setOpts({ A: '', B: '', C: '', D: '', E: '' });
        setExplanation('');
        setCorrect('A');
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  };

  const submitSingle = () => {
    if (!lesson.trim() || !unit.trim()) {
      setError('Ders ve ünite zorunludur.');
      return;
    }
    submit([{ lesson: lesson.trim(), unit: unit.trim(), question, options: opts, correctAnswer: correct, explanation }]);
  };

  const submitBulk = () => {
    let parsed: unknown;
    try {
      parsed = JSON.parse(jsonText);
    } catch (e) {
      setError('Geçersiz JSON: ' + (e instanceof Error ? e.message : String(e)));
      return;
    }
    const arr = Array.isArray(parsed)
      ? parsed
      : (parsed as { questions?: ImportQuestion[] })?.questions ?? [];
    if (!Array.isArray(arr) || arr.length === 0) {
      setError('JSON bir soru listesi ya da { "questions": [...] } olmalı.');
      return;
    }
    submit(arr as ImportQuestion[]);
  };

  return (
    <div className="max-w-2xl mx-auto w-full anim-slide-up pb-10">
      <h2 className="text-xl font-black mb-1">Soru Ekle</h2>
      <p className={`${theme.subtext} text-xs mb-5`}>
        Eklenen sorular kalite filtresinden geçer ve otomatik embedding alır (semantik arama + kopya tespiti için).
      </p>

      <div className="flex gap-2 mb-6">
        <Button
          onClick={() => { setTab('single'); setResult(null); setError(null); }}
          variant="unstyled"
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-colors ${tab === 'single' ? theme.accentSoft : `${theme.inputBg} ${theme.subtext}`}`}
        >
          <Plus size={14} /> Tekil
        </Button>
        <Button
          onClick={() => { setTab('bulk'); setResult(null); setError(null); }}
          variant="unstyled"
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-colors ${tab === 'bulk' ? theme.accentSoft : `${theme.inputBg} ${theme.subtext}`}`}
        >
          <Upload size={14} /> Toplu JSON
        </Button>
      </div>

      {tab === 'single' ? (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Ders</label>
              <input list="lesson-options" value={lesson} onChange={(e) => { setLesson(e.target.value); setUnit(''); }} className={inputCls} placeholder="Fizyoloji" />
              <datalist id="lesson-options">{lessons.map((l) => <option key={l} value={l} />)}</datalist>
            </div>
            <div>
              <label className={labelCls}>Ünite</label>
              <input list="unit-options" value={unit} onChange={(e) => setUnit(e.target.value)} className={inputCls} placeholder="Kalp Fizyolojisi" />
              <datalist id="unit-options">{units.map((u) => <option key={u} value={u} />)}</datalist>
            </div>
          </div>

          <div>
            <label className={labelCls}>Soru Kökü</label>
            <textarea value={question} onChange={(e) => setQuestion(e.target.value)} className={`${inputCls} h-24 resize-none font-mono`} placeholder="Soru metni…" />
          </div>

          <div className="space-y-2">
            {OPT_KEYS.map((k) => (
              <div key={k} className="flex items-center gap-2">
                <Button
                  type="button"
                  onClick={() => setCorrect(k)}
                  title="Doğru cevap olarak işaretle"
                  variant="unstyled"
                  className={`w-9 h-9 shrink-0 rounded-lg text-xs font-black transition-colors ${correct === k ? 'bg-emerald-500 text-black' : `${theme.inputBg} ${theme.subtext}`}`}
                >
                  {k}
                </Button>
                <input value={opts[k]} onChange={(e) => setOpts({ ...opts, [k]: e.target.value })} className={inputCls} placeholder={`Şık ${k}`} />
              </div>
            ))}
            <p className={`${theme.subtext} text-[10px]`}>Yeşil harf = doğru cevap (şu an: {correct})</p>
          </div>

          <div>
            <label className={labelCls}>Açıklama</label>
            <textarea value={explanation} onChange={(e) => setExplanation(e.target.value)} className={`${inputCls} h-28 resize-none`} placeholder="Kök neden + klinik bağlam (motivasyonel dil yok)…" />
          </div>

          <Button onClick={submitSingle} disabled={loading} variant="primary" size="lg" className="w-full">
            {loading ? 'Ekleniyor…' : 'SORUYU EKLE'}
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <textarea
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            placeholder='[{"lesson":"Fizyoloji","unit":"Kalp","question":"…","options":{"A":"…","B":"…","C":"…","D":"…","E":"…"},"correctAnswer":"A","explanation":"…"}]'
            className={`w-full h-72 ${theme.inputBg} p-5 rounded-2xl font-mono text-xs resize-none border ${theme.border} input-ring`}
          />
          <Button onClick={submitBulk} disabled={loading} variant="primary" size="lg" className="w-full">
            {loading ? 'Ekleniyor…' : 'YÜKLE'}
          </Button>
        </div>
      )}

      {error && (
        <div className="mt-5 flex items-start gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
          <Warning size={16} weight="thin" className="text-red-400 mt-0.5 shrink-0" />
          <p className="text-red-400 text-xs break-words">{error}</p>
        </div>
      )}

      {result && (
        <div className={`mt-5 p-4 rounded-xl ${theme.cardGlass}`}>
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle size={16} weight="thin" className="text-emerald-400" />
            <p className="text-sm font-bold">{result.written} soru eklendi · {result.rejected.length} reddedildi</p>
          </div>
          {result.rejected.length > 0 && (
            <ul className={`${theme.subtext} text-xs space-y-1 mt-2 max-h-40 overflow-y-auto custom-scrollbar`}>
              {result.rejected.map((r) => (
                <li key={r.index}>#{r.index + 1} → {r.reason}</li>
              ))}
            </ul>
          )}
          <Button onClick={onDone} variant="secondary" size="sm" className="mt-4 w-full">Bitir ve Ana Sayfaya Dön</Button>
        </div>
      )}
    </div>
  );
}
