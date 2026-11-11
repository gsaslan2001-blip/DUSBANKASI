import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { useModalA11y } from '../../../hooks/useModalA11y';
import { BookOpen, Sliders, X } from './icons';
import { useTriajView } from './TriajViewContext';

function SystemDialog({ title, icon, onClose, children }: {
  title: string;
  icon: ReactNode;
  onClose: () => void;
  children: ReactNode;
}) {
  const dialog = useModalA11y(onClose);
  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-black/60 p-4">
      <section ref={dialog} role="dialog" aria-modal="true" aria-label={title} tabIndex={-1}
        className="max-h-[calc(100dvh-2rem)] w-full max-w-2xl overflow-y-auto rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
        <header className="mb-4 flex items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <h2 className="flex items-center gap-2 text-lg font-bold">{icon}{title}</h2>
          <button type="button" onClick={onClose} aria-label="Kapat" className="rounded-md p-2"><X className="size-5" /></button>
        </header>
        {children}
      </section>
    </div>
  );
}

function NumberField({ label, value, min, max, step = 1, onChange }: {
  label: string; value: number; min: number; max: number; step?: number; onChange: (value: number) => void;
}) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <input type="number" required min={min} max={max} step={step} value={Number.isNaN(value) ? '' : value}
        onChange={event => onChange(event.currentTarget.valueAsNumber)}
        className="mt-1 w-full rounded-md border border-slate-300 bg-slate-50 p-2" />
    </label>
  );
}

export function SystemParametersModal({ onClose }: { onClose: () => void }) {
  const { systemParams, updateSystemParams, saving } = useTriajView();
  const [parameters, setParameters] = useState({
    ...systemParams,
    verificationQuestions: systemParams.verificationQuestions ?? 20,
    studyMode: systemParams.studyMode ?? 'full-time',
    maintenanceDays: systemParams.maintenanceDays ?? { clinical: 7, volatile: 8, mechanism: 12 },
  });
  const maintenance = parameters.maintenanceDays;
  const total = Number((parameters.targetBasicNet + parameters.targetClinicalNet).toFixed(2));

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (saving) return;
    if (await updateSystemParams({ ...parameters, targetTotalNet: total })) onClose();
  }

  return (
    <SystemDialog title="Parametreler" icon={<Sliders className="size-5 text-indigo-600" />} onClose={onClose}>
      <form onSubmit={submit} className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm font-medium">
            Sınav tarihi
            <input type="date" value={parameters.examDate} onChange={event => setParameters({ ...parameters, examDate: event.target.value })}
              className="mt-1 w-full rounded-md border border-slate-300 bg-slate-50 p-2" />
          </label>
          <label className="text-sm font-medium">
            Çalışma düzeni
            <select value={parameters.studyMode} onChange={event => setParameters({
              ...parameters, studyMode: event.target.value === 'clinical' ? 'clinical' : 'full-time',
            })} className="mt-1 w-full rounded-md border border-slate-300 bg-slate-50 p-2">
              <option value="full-time">Tam zamanlı</option>
              <option value="clinical">Klinik / Okul</option>
            </select>
          </label>
          <NumberField label="Temel net hedefi" value={parameters.targetBasicNet} min={0} max={40} step={0.25}
            onChange={targetBasicNet => setParameters({ ...parameters, targetBasicNet })} />
          <NumberField label="Klinik net hedefi" value={parameters.targetClinicalNet} min={0} max={80} step={0.25}
            onChange={targetClinicalNet => setParameters({ ...parameters, targetClinicalNet })} />
          <NumberField label="Elit net eşiği" value={parameters.adccEliteThreshold} min={0} max={120} step={0.25}
            onChange={adccEliteThreshold => setParameters({ ...parameters, adccEliteThreshold })} />
          <NumberField label="FSRS hedefi (%)" value={parameters.targetFsrsRetention} min={0} max={100} step={0.1}
            onChange={targetFsrsRetention => setParameters({ ...parameters, targetFsrsRetention })} />
          <NumberField label="Günlük ünite kapasitesi" value={parameters.dailyUnitCapacity} min={1} max={100}
            onChange={dailyUnitCapacity => setParameters({ ...parameters, dailyUnitCapacity })} />
          <NumberField label="T+14 soru kotası" value={parameters.verificationQuestions} min={20} max={25}
            onChange={verificationQuestions => setParameters({ ...parameters, verificationQuestions })} />
          <NumberField label="Volatil temel branş bakımı (gün)" value={maintenance.volatile} min={7} max={10}
            onChange={volatile => setParameters({ ...parameters, maintenanceDays: { ...maintenance, volatile } })} />
          <NumberField label="Mekanizma ağırlıklı branş bakımı (gün)" value={maintenance.mechanism} min={10} max={14}
            onChange={mechanism => setParameters({ ...parameters, maintenanceDays: { ...maintenance, mechanism } })} />
        </div>
        <p className="text-sm text-slate-600">Klinik branş bakım aralığı 7 gün. Toplam net hedefi {Number.isNaN(total) ? '—' : total}.</p>
        <fieldset className="grid gap-3 rounded-lg border border-slate-200 p-3 sm:grid-cols-2">
          <legend className="px-1 text-sm font-semibold">Eski SWSPS Ağırlıkları</legend>
          {(Object.keys(parameters.errorWeights) as (keyof typeof parameters.errorWeights)[]).map(error => (
            <NumberField key={error} label={error} value={parameters.errorWeights[error]} min={0} max={10} step={0.05}
              onChange={value => setParameters({ ...parameters, errorWeights: { ...parameters.errorWeights, [error]: value } })} />
          ))}
        </fieldset>
        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className="rounded-md border border-slate-300 px-3 py-2 text-sm">Vazgeç</button>
          <button type="submit" disabled={saving} className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50">
            {saving ? 'Kaydediliyor…' : 'Parametreleri Kaydet'}
          </button>
        </div>
      </form>
    </SystemDialog>
  );
}

export function GirisRehberiModal({ onClose }: { onClose: () => void }) {
  return (
    <SystemDialog title="Giriş Rehberi" icon={<BookOpen className="size-5 text-indigo-600" />} onClose={onClose}>
      <div className="space-y-4 text-sm leading-relaxed">
        <section>
          <h3 className="font-bold">Ünite Çalışması</h3>
          <p>Konuyu çalış, boş kâğıtla aktif geri çağırma yap ve en az 20 soru çöz. Bu tek ilk tekrar oturumu kova atamaz. T+3’te konuyu okumadan ayrı 40 soruyu çöz ve yanlış alt başlıklara 10–15 dk bak. 34+ doğru yeşil ve taburcu, 28–33 sarı, 0–27 kırmızı.</p>
        </section>
        <section>
          <h3 className="font-bold">Doğrulama ve Onarım</h3>
          <p>Sarıda sonuçtan 14 gün sonra 5 dk işaretli yerlere bak ve 20–25 soru çöz. %85 ve üstü yeşil, %70 altı kırmızı. Ara bantta 14 gün sonraya yeni kontrol açılır. Kırmızıda Cumartesi 25 dk aktif yeniden kur ve 30 soru çöz. 24+ doğru sarı ve 14 gün sonra doğrulama getirir.</p>
        </section>
        <section>
          <h3 className="font-bold">Deneme Yanlışları</h3>
          <p>Aynı gün dikkat kaydı, ayırt edici Cloze veya görsel kart oluştur. Mekanizma ve klinik yorum hataları için deneme tarihinden üç gün sonra 15 soruluk ayrı doğrulama açılır. 13+ doğru dosyayı kapatır.</p>
        </section>
        <section>
          <h3 className="font-bold">Takvim ve Geçmiş</h3>
          <p>Vadesi gelen testlere takvimden veya Bugünün Konusu’ndan gir. Görev satırından tarihi klavye veya dokunmayla seçebilir, fareyle gün hücresine taşıyabilirsin. Onarım Cumartesiye taşınabilir. Elle sonuç girerken doğru, yanlış ve boş sayılarını yaz.</p>
        </section>
        <section>
          <h3 className="font-bold">Deneme Analizi ve SWSPS</h3>
          <p>Net, doğru sayısından yanlışların dörtte birini çıkarır. Eksik analitik branşları deneme ekranında tamamla. SWSPS; tip ağırlığı, küme frekansı, zorluk, unutma riski ve tazeliği kullanır. Hatırlama oranı bilinmeyen kayıtta puan boş görünür.</p>
        </section>
      </div>
    </SystemDialog>
  );
}
