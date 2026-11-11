import { useState } from 'react';
import { useModalA11y } from '../../../hooks/useModalA11y';
import { CANONICAL_UNITS } from '../../../config/canonicalUnits';
import {
  applyLegacyImport, previewLegacyImport, resolveArchivedTopic,
} from '../migration/legacyBackup';
import type { LegacyImportPreview } from '../migration/legacyBackup';
import type { TriajImportRecord } from '../migration/importRecords';
import { triajStateSchema } from '../persistence/triajRepository';
import type { TriajState } from '../types';
import { Download, X } from './icons';
import { useTriajView } from './TriajViewContext';

const kindLabels: Record<TriajImportRecord['kind'], string> = {
  topic: 'Ünite', triageLog: 'Denetim', goal: 'Günlük hedef', exam: 'Deneme', error: 'Hata',
  questionLog: 'Soru günlüğü', taxonomy: 'Taksonomi', ankiSnapshot: 'Anki', parameters: 'Ayar',
  focus: 'Odak', reviewDecision: 'Tekrar kararı',
};
type BackupPreview = { legacy: LegacyImportPreview } | { native: TriajState; archiveVersion: number };

function downloadJson(data: string, fileName: string) {
  const url = URL.createObjectURL(new Blob([data], { type: 'application/json' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function nativeCount(state: TriajState) {
  return [
    ['Ünite', state.topics.length], ['Görev', state.tasks.length], ['Denetim', state.triageHistory.length],
    ['Hedef', Object.keys(state.dailyGoals).length], ['Deneme', state.mockExams.length],
    ['Hata', state.semanticErrors.length], ['Soru günlüğü', state.questionLogs.length],
    ['Taksonomi', state.topicTaxonomy.length], ['Anki', state.ankiSnapshots.length],
    ['Arşiv', state.imports.length], ['Odak', Object.keys(state.focus).length],
  ] as const;
}

function ArchiveItem({ item, canResolve }: { item: TriajImportRecord; canResolve: boolean }) {
  const { save, saving } = useTriajView();
  const [lesson, setLesson] = useState(item.target?.lesson ?? '');
  const [unit, setUnit] = useState(item.target?.unit ?? '');
  const label = typeof item.data.title === 'string' ? item.data.title : item.sourceId;

  return (
    <li className="rounded-lg border border-slate-200 p-3 text-sm">
      <p className="font-semibold">{label} · {kindLabels[item.kind]}</p>
      <p className="text-xs text-slate-600">{item.source} · {item.sourceId}</p>
      {item.reason && <p className="mt-1 text-xs text-slate-600">{item.reason}</p>}
      <details className="mt-1 text-xs text-slate-600">
        <summary className="cursor-pointer">Özgün kayıt</summary>
        <pre className="mt-1 max-h-48 overflow-auto whitespace-pre-wrap break-all">{JSON.stringify(item.data, null, 2)}</pre>
      </details>
      {canResolve && item.canMap && (
        <form className="mt-2 flex flex-wrap items-end gap-2" onSubmit={event => {
          event.preventDefault();
          if (lesson && unit) void save(state => resolveArchivedTopic(state, item.id, lesson, unit));
        }}>
          <label className="text-xs">
            Hedef ders
            <select value={lesson} onChange={event => { setLesson(event.target.value); setUnit(''); }}
              required className="mt-1 block max-w-full rounded border border-slate-200 bg-slate-50 p-2">
              <option value="">Seç</option>
              {Object.keys(CANONICAL_UNITS).map(name => <option key={name}>{name}</option>)}
            </select>
          </label>
          <label className="min-w-0 text-xs">
            Hedef ünite
            <select value={unit} onChange={event => setUnit(event.target.value)}
              required className="mt-1 block w-full max-w-[min(18rem,70vw)] rounded border border-slate-200 bg-slate-50 p-2">
              <option value="">Seç</option>
              {CANONICAL_UNITS[lesson]?.map(name => <option key={name}>{name}</option>)}
            </select>
          </label>
          <button type="submit" disabled={saving || !lesson || !unit} className="rounded bg-indigo-600 px-3 py-2 text-xs font-semibold text-white disabled:opacity-50">
            Eşle
          </button>
        </form>
      )}
    </li>
  );
}

export function BackupDialog({ onClose }: { onClose: () => void }) {
  const { state, todayStr, exportDataJSON, replaceState, resetToInitialData, save, saving } = useTriajView();
  const dialog = useModalA11y(onClose);
  const [preview, setPreview] = useState<BackupPreview | null>(null);
  const [reset, setReset] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const archive = state.imports.filter(item => item.status !== 'applied');

  function download() {
    downloadJson(exportDataJSON(), `TRIAJ-${todayStr}.json`);
  }

  async function openFile(file?: File) {
    if (!file) return;
    setPreview(null);
    setReset(false);
    setMessage('');
    setError('');
    try {
      if (file.size > 25 * 1024 * 1024) throw new Error('Dosya 25 MB sınırını aşıyor.');
      const input: unknown = JSON.parse(await file.text());
      if (input && typeof input === 'object' && 'version' in input && [1, 2].includes(Number(input.version)) && 'payload' in input) {
        // Yedek zarfı sürümü ile DB schema_version ayrı uzaylardır; sessiz yükseltme yapmıyoruz.
        const archiveVersion = Number(input.version);
        setPreview({ native: triajStateSchema.parse(input.payload), archiveVersion });
      } else {
        setPreview({ legacy: previewLegacyImport(input, state) });
      }
    } catch (reason) {
      setError(reason instanceof SyntaxError ? 'Geçerli bir JSON yedeği seçin.' :
        reason instanceof Error ? reason.message : 'Yedek okunamadı.');
    }
  }

  async function apply() {
    if (!preview || saving) return;
    download();
    const saved = 'native' in preview ? await replaceState(preview.native) :
      await save(current => applyLegacyImport(current, preview.legacy));
    if (saved) {
      const upgraded = 'native' in preview && preview.archiveVersion < 2;
      setPreview(null);
      setMessage(upgraded
        ? 'Aktarım kaydedildi. v1 yedeği korunarak plan v2 olarak damgalandı.'
        : 'Aktarım kaydedildi.');
    }
  }

  async function confirmReset() {
    if (saving) return;
    download();
    if (await resetToInitialData()) {
      setReset(false);
      setMessage('Yedek indirildi ve plan sıfırlandı.');
    }
  }

  const legacy = preview && 'legacy' in preview ? preview.legacy : undefined;
  const native = preview && 'native' in preview ? preview.native : undefined;

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-black/60 p-4">
      <section ref={dialog} role="dialog" aria-modal="true" aria-label="Veri ve yedek" tabIndex={-1}
        className="max-h-[calc(100dvh-2rem)] w-full max-w-2xl space-y-4 overflow-y-auto rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
        <header className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Veri ve Yedek</h2>
          <button type="button" onClick={onClose} aria-label="Kapat" className="p-2"><X className="size-5" /></button>
        </header>
        <div className="flex flex-wrap items-end gap-3">
          <button type="button" onClick={download} className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm">
            <Download className="size-4" /> JSON Yedeği İndir
          </button>
          <label className="text-sm">
            Yedek veya Excel aktarım JSON’u
            <input type="file" accept=".json,application/json" disabled={saving} onChange={event => {
              const file = event.currentTarget.files?.[0];
              event.currentTarget.value = '';
              void openFile(file);
            }} className="mt-1 block w-full max-w-72 text-xs" />
          </label>
        </div>
        {error && <p role="alert" className="text-sm text-rose-700">{error}</p>}
        {message && <p role="status" className="text-sm text-emerald-700">{message}</p>}
        {preview && (
          <div className="space-y-3 rounded-lg border border-slate-200 p-3">
            <h3 className="font-bold">Aktarım Önizlemesi</h3>
            {native && (
              <>
                <p className="text-sm">Geri yükleme mevcut planı bu yedekle değiştirir. Önce mevcut planın yedeği indirilir.</p>
                <p className="text-sm">{nativeCount(native).map(([kind, count]) => `${kind} ${count}`).join(' · ')}</p>
              </>
            )}
            {legacy && (
              <>
                <p className="text-sm">{legacy.counts.received} kayıt · {legacy.counts.accepted} kabul · {legacy.counts.duplicates} mükerrer · {legacy.counts.archived} arşiv · {legacy.counts.conflicts} çakışma</p>
                {!!legacy.counts.inactiveTopics && <p className="text-xs text-slate-600">{legacy.counts.inactiveTopics} ilerleme içermeyen ünite satırı.</p>}
                <p className="text-xs text-slate-600">{Object.entries(legacy.counts.byKind).map(([kind, count]) => `${kindLabels[kind as keyof typeof kindLabels]} ${count}`).join(' · ')}</p>
                <ul className="max-h-56 space-y-2 overflow-y-auto">
                  {[...legacy.unresolved, ...legacy.conflicts].map(item => <ArchiveItem key={item.id} item={item} canResolve={false} />)}
                </ul>
              </>
            )}
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => void apply()} disabled={saving} className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white disabled:opacity-50">
                {saving ? 'Kaydediliyor…' : native ? 'Geri Yükle' : 'Aktarımı Kaydet'}
              </button>
              <button type="button" onClick={() => setPreview(null)} className="rounded-lg border border-slate-200 px-3 py-2 text-sm">Vazgeç</button>
            </div>
          </div>
        )}
        {archive.length > 0 && (
          <section className="space-y-2">
            <h3 className="font-bold">Aktarım Arşivi ({archive.length})</h3>
            <ul className="space-y-2">{archive.map(item => <ArchiveItem key={item.id} item={item} canResolve />)}</ul>
          </section>
        )}
        {reset ? (
          <div className="space-y-2 rounded-lg bg-rose-50 p-3 text-rose-900">
            <p className="text-sm">Önce mevcut planın yedeği indirilir. Ardından ilerleme ve ayarlar bu hesap için sıfırlanır.</p>
            <button type="button" onClick={() => void confirmReset()} disabled={saving} className="rounded bg-rose-700 px-3 py-2 text-sm font-semibold text-white disabled:opacity-50">Yedekle ve Sıfırla</button>
            <button type="button" onClick={() => setReset(false)} className="ml-2 px-2 text-sm underline">Vazgeç</button>
          </div>
        ) : <button type="button" onClick={() => { setReset(true); setPreview(null); }} className="text-sm text-rose-700 underline">Planı Sıfırla</button>}
      </section>
    </div>
  );
}
