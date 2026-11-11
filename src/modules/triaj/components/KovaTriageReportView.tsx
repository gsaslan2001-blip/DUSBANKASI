/**
 * Bilişsel Kova Triyajı Yönetici Raporu (Executive Triage Report)
 * Doktrin: DUS 2027 80/20 Pareto & Neokortikal Depolama Gücü Raporu
 */

import React, { useState } from 'react';
import { useTriajView } from './TriajViewContext';
import type { TopicUnit } from '../types';
import { TriageModal } from './TriageModal';
import {
  Printer,
  Copy,
  Check,
  AlertTriangle,
  AlertOctagon,
  CheckCircle2,
  ShieldCheck,
  ShieldAlert,
  ArrowRight,
  BookOpen
} from './icons';

export const KovaTriageReportView: React.FC = () => {
  const { report, topics, todayStr } = useTriajView();

  const [copied, setCopied] = useState(false);
  const [activeModalTopic, setActiveModalTopic] = useState<TopicUnit | null>(null);

  // Markdown formatında yönetici özeti kopyalama
  const handleCopySummary = () => {
    const md = `
# DUS 2027 BİLİŞSEL KOVA TRİYAJI YÖNETİCİ RAPORU (${todayStr})
- Genel Depolama Gücü Skoru: %${report.overallRetentionIndex} / 100
- Temel Bilimler Depolama İndeksi: %${report.temelRetentionIndex} (40 Soru / %33.3)
- Klinik Bilimler Depolama İndeksi: %${report.klinikRetentionIndex} (80 Soru / %66.7)

## Kova Dağılımı:
- 🟢 Yeşil Kova (Taburcu - Neokortekste Sağlam): ${report.greenBucket} Ünite
- 🟡 Sarı Kova (Müşahede - T+14 Doğrulama): ${report.yellowBucket} Ünite
- 🔴 Kırmızı Kova (Yoğun Bakım - Cumartesi Onarımı): ${report.redBucket} Ünite
- ⚪ T+3 Bekleyen Üniteler: ${report.pendingTriage} Ünite

## Acil Durum Sigortası (PDF Madde 8.4):
- Durum: ${report.redAlarmActive ? '🚨 ALARM (Kırmızı kova >= 3 ünite, yeni konu durdurulmalı!)' : '🟢 GÜVENLİ (Kırmızı kova limit altında)'}

## Acil Aksiyonlar:
${report.urgentTasks.map(t => `- [${t.priority}] ${t.subjectName} - ${t.topicTitle}: ${t.actionType} (${t.targetDate})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* 1. Rapor Başlığı ve Dışa Aktarma Aksiyonları */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <span>Rapor Tarihi: {todayStr}</span>
            <span aria-hidden="true">·</span>
            <span>Ders Bazında Pareto Denetimi</span>
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Bilişsel Kova Triyajı &amp; Depolama Gücü Raporu
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Bjork Yeni Kullanmama Teorisi ve Dunlosky Pratik Testi standartlarına göre hazırlanmıştır.
          </p>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            type="button"
            onClick={handleCopySummary}
            className="px-3.5 py-2 border border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
            <span>{copied ? 'Kopyalandı!' : 'Özeti Kopyala'}</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-xs transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Raporu Yazdır / PDF</span>
          </button>
        </div>
      </div>

      {/* 2. Acil Durum Sigortası Denetim Bandı (Doktrin Madde 8.4) */}
      <div className={`p-4 rounded-xl border flex items-start gap-3.5 ${
        report.redAlarmActive
          ? 'bg-rose-50 border-rose-300 text-rose-950'
          : 'bg-emerald-50 border-emerald-300 text-emerald-950'
      }`}>
        {report.redAlarmActive ? (
          <ShieldAlert className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
        ) : (
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
        )}
        <div className="text-xs">
          <div className="font-bold text-sm">
            {report.redAlarmActive
              ? `🚨 ACİL DURUM SİGORTASI AKTİF: Kırmızı Kovada ${report.redBucket} Ünite Birikti!`
              : '🟢 Bilişsel Akış Sağlıklı: Kırmızı Kova Tolerans Sınırı Altında'}
          </div>
          <p className="mt-1 leading-relaxed opacity-90">
            {report.redAlarmActive
              ? 'Doktrin Madde 8.4 Kuralı: "Bir hafta içinde Kırmızı Kovaya (<%70 doğru) düşen ünite sayısı 3\'ü geçerse, yeni konular durdurulmalıdır." Kırmızı Kovadaki üniteler Cumartesi Onarım Bloğunda temizlenmeden yeni konu hızı artırılmamalıdır.'
              : 'Kırmızı kovadaki ünite sayısı güvenli sınırda (maksimum 2). Yeni konu edinimine ve T+3 gecikmeli geri çağırma döngüsüne normal planda devam edebilirsiniz.'}
          </p>
        </div>
      </div>

      {/* 3. İki Kanatlı Grid KPI Paneli */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Depolama Gücü Skoru */}
        <div className="bg-slate-900 text-white rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              Neokortikal Depolama Gücü
            </div>
            <div className="text-3xl font-extrabold font-mono mt-2 text-emerald-400">
              %{report.overallRetentionIndex}
            </div>
            <div className="text-xs text-slate-400 mt-1">
              DUS Genel Ağırlıklı İndeks
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-300 space-y-1">
            <div className="flex justify-between">
              <span>Temel Bilimler (%33.3):</span>
              <span className="font-mono font-bold text-white">%{report.temelRetentionIndex}</span>
            </div>
            <div className="flex justify-between">
              <span>Klinik Bilimler (%66.7):</span>
              <span className="font-mono font-bold text-white">%{report.klinikRetentionIndex}</span>
            </div>
          </div>
        </div>

        {/* Yeşil Kova */}
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                Yeşil Kova (Taburcu)
              </span>
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-3xl font-extrabold font-mono mt-2 text-emerald-900 flex items-baseline gap-1.5">
              <span>{report.greenBucket}</span>
              <span className="text-sm font-normal text-emerald-700">Ünite</span>
            </div>
            <div className="text-xs text-emerald-800 mt-1 font-medium">
              ≥%85 Başarı (34-40 Doğru)
            </div>
          </div>

          <p className="text-[11px] text-emerald-700 mt-3 pt-3 border-t border-emerald-200 leading-relaxed">
            Şema neokortekste sağlam. 2. Soru Bankası çözülmez, takvimden taburcu edilir.
          </p>
        </div>

        {/* Sarı Kova */}
        <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                Sarı Kova (Müşahede)
              </span>
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
            <div className="text-3xl font-extrabold font-mono mt-2 text-amber-900 flex items-baseline gap-1.5">
              <span>{report.yellowBucket}</span>
              <span className="text-sm font-normal text-amber-700">Ünite</span>
            </div>
            <div className="text-xs text-amber-800 mt-1 font-medium">
              %70-%84 Başarı (28-33 Doğru)
            </div>
          </div>

          <p className="text-[11px] text-amber-700 mt-3 pt-3 border-t border-amber-200 leading-relaxed">
            15 dk yama okundu. 14 gün sonrasına (T+14) 2. Bankadan 20-25 soru doğrulama planlandı.
          </p>
        </div>

        {/* Kırmızı Kova */}
        <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-rose-900 uppercase tracking-wider">
                Kırmızı Kova (Yoğun Bakım)
              </span>
              <AlertOctagon className="w-5 h-5 text-rose-600" />
            </div>
            <div className="text-3xl font-extrabold font-mono mt-2 text-rose-900 flex items-baseline gap-1.5">
              <span>{report.redBucket}</span>
              <span className="text-sm font-normal text-rose-700">Ünite</span>
            </div>
            <div className="text-xs text-rose-800 mt-1 font-medium">
              &lt;%70 Başarı (≤27 Doğru)
            </div>
          </div>

          <p className="text-[11px] text-rose-700 mt-3 pt-3 border-t border-rose-200 leading-relaxed">
            Cumartesi Kova Onarım Bloğuna atandı (25 dk Boş Kağıt yeniden inşa + 30 soru).
          </p>
        </div>
      </div>

      {/* 4. Acil Eylem Listesi (Actionable Urgent Tasks) */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Kova Triyajı Acil Eylem Matrisi</h3>
            <p className="text-xs text-slate-500">
              Cumartesi Onarımları, T+14 Doğrulamaları ve Bekleyen T+3 Geri Çağırma Testleri
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
            {report.urgentTasks.length} Aksiyon
          </span>
        </div>

        {report.urgentTasks.length === 0 ? (
          <div className="py-6 text-center text-xs text-slate-500">
            Bekleyen acil triyaj görevi bulunmuyor. Tüm üniteler güncel veya taburcu!
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {report.urgentTasks.map(task => {
              const targetTopic = topics.find(t => t.id === task.topicId);

              return (
                <div
                  key={task.id}
                  className="py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                        task.bucket === 'RED'
                          ? 'bg-rose-100 text-rose-800 border border-rose-200'
                          : task.bucket === 'YELLOW'
                          ? 'bg-amber-100 text-amber-800 border border-amber-200'
                          : 'bg-indigo-100 text-indigo-800 border border-indigo-200'
                      }`}>
                        {task.actionType}
                      </span>
                      <span className="font-semibold text-slate-500">{task.subjectName}</span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="text-slate-500">Tarih: {task.targetDate}</span>
                    </div>

                    <div className="font-bold text-slate-900 text-sm mt-1">
                      {task.topicTitle}
                    </div>

                    <div className="text-slate-600 text-[11px] mt-0.5">
                      {task.instruction}
                    </div>
                  </div>

                  {targetTopic && (
                    <button
                      type="button"
                      onClick={() => setActiveModalTopic(targetTopic)}
                      className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shrink-0 flex items-center gap-1.5 transition-colors self-end sm:self-auto"
                    >
                      <span>Görevi Uygula</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 5. 15 DUS Dersi Bazında Kova Matrisi & Isı Haritası */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="p-5 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900">
            Ders Bazında Kova ve Kalıcılık Matrisi
          </h3>
          <p className="text-xs text-slate-500">
            Temel ve Klinik branşların ünite dağılımı, kova oranları ve neokortikal kalıcılık skorları
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Kod</th>
                <th className="py-3 px-4">Ders Adı</th>
                <th className="py-3 px-4">Alan</th>
                <th className="py-3 px-4">Bilişsel Doğa</th>
                <th className="py-3 px-4 text-center">Soru Ağırlığı</th>
                <th className="py-3 px-4 text-center">Toplam Ünite</th>
                <th className="py-3 px-4 text-center">🟢 Yeşil</th>
                <th className="py-3 px-4 text-center">🟡 Sarı</th>
                <th className="py-3 px-4 text-center">🔴 Kırmızı</th>
                <th className="py-3 px-4 text-right">Depolama Gücü</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {report.subjectSummaries.map(sub => {
                const isTemel = sub.category === 'TEMEL_BILIMLER';

                return (
                  <tr key={sub.subjectId} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-slate-700">
                      {sub.subjectId}
                    </td>
                    <td className="py-3 px-4 font-bold text-slate-900">
                      {sub.subjectName}
                    </td>
                    <td className="py-3 px-4 text-slate-600">
                      {isTemel ? 'Temel Bilimler' : 'Klinik Bilimler'}
                    </td>
                    <td className="py-3 px-4 text-slate-600">
                      {sub.cognitiveGroup === 'GRUP_A' && 'Grup A (Saf Ezber)'}
                      {sub.cognitiveGroup === 'GRUP_B' && 'Grup B (Mekanizmik)'}
                      {sub.cognitiveGroup === 'GRUP_C' && 'Grup C (Klinik Karar)'}
                    </td>
                    <td className="py-3 px-4 text-center font-mono text-slate-700">
                      {sub.questionWeight} Soru
                    </td>
                    <td className="py-3 px-4 text-center font-mono font-semibold text-slate-900">
                      {sub.totalUnits}
                    </td>
                    <td className="py-3 px-4 text-center font-mono text-emerald-700 font-semibold">
                      {sub.greenCount}
                    </td>
                    <td className="py-3 px-4 text-center font-mono text-amber-700 font-semibold">
                      {sub.yellowCount}
                    </td>
                    <td className="py-3 px-4 text-center font-mono text-rose-700 font-semibold">
                      {sub.redCount}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${
                              sub.retentionRate >= 80
                                ? 'bg-emerald-500'
                                : sub.retentionRate >= 50
                                ? 'bg-amber-500'
                                : 'bg-slate-300'
                            }`}
                            style={{ width: `${sub.retentionRate}%` }}
                          />
                        </div>
                        <span className="font-mono font-bold text-slate-800 w-9 text-right">
                          %{sub.retentionRate}
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. Bilişsel Doktrin Kuralları Kartı */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs text-slate-700 space-y-3">
        <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-indigo-600" />
          <span>DUS Kova Triyajı Operasyonel Anayasası (Değiştirilemez Kurallar)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[11px] leading-relaxed text-slate-600">
          <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-1">
            <strong className="text-slate-900 block font-semibold">1. Yeşil Kovaya Dokunmama Kuralı</strong>
            T+3 testinde %85+ yapan ünite taburcu edilir. 2. Soru Bankası bu ünite için çözülmez, zaman israfıdır! Yalnızca ders bittiğinde branş denemesinde taranır.
          </div>

          <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-1">
            <strong className="text-slate-900 block font-semibold">2. T+14 ve Cumartesi Disiplini</strong>
            Sarı Kova 14 gün sonraya (T+14) 20 soruyla randevulanır. Kırmızı Kova hafta içi programı bozmaz, doğrudan Cumartesi Kova Onarım Bloğuna aktarılır.
          </div>

          <div className="bg-white p-3.5 rounded-lg border border-slate-200 space-y-1">
            <strong className="text-slate-900 block font-semibold">3. Üretim Yanılsamasından Kaçınma</strong>
            Yeni zihin haritası veya özet üretmek yasaktır. Masada sadece 1 ana kitap ve soru motoru kalır; sınavı kazandıran şey geri çağırma pratiğidir.
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeModalTopic && (
        <TriageModal
          topic={activeModalTopic}
          onClose={() => setActiveModalTopic(null)}
        />
      )}
    </div>
  );
};
