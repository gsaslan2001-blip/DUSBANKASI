import { useCallback, useState } from 'react';
import type { TriajTask } from './types';
import type { ThemeName } from '../../theme';
import './triaj.css';
import { TriajViewProvider, useTriajView } from './components/TriajViewContext';
import { TriajHeader } from './components/TriajHeader';
import type { ActiveTab } from './components/TriajHeader';
import { DailyPlannerView } from './components/DailyPlannerView';
import { SubjectDatabaseView } from './components/SubjectDatabaseView';
import { KovaTriageReportView } from './components/KovaTriageReportView';
import { NotificationCalendarView } from './components/NotificationCalendarView';
import { ExamAndErrorAnalyticsView } from './components/ExamAndErrorAnalyticsView';
import { subjectForTopic } from './domain/catalog';
import { DeepSeekModal } from './components/DeepSeekModal';
import { SystemParametersModal, GirisRehberiModal } from './components/SystemModals';
import { X, Bell, CheckCircle2 } from './components/icons';
import { BackupDialog } from './components/BackupDialog';
import { useModalA11y } from '../../hooks/useModalA11y';

export interface SimulationErrorChoice {
  examId: string;
  questionId: string;
  lesson: string;
  unit: string;
  question: string;
}

interface TriajModuleProps {
  userId: string;
  onBack: () => void;
  onStartTask: (task: TriajTask) => Promise<void>;
  theme?: ThemeName;
  initialTab?: ActiveTab | 'calendar';
  initialTaskId?: string;
  onStartSimulation?: () => void;
  simulationErrors?: SimulationErrorChoice[];
  onFavoriteQuestion?: (id: string) => void;
}

type ContentProps = Omit<TriajModuleProps, 'userId' | 'onStartTask' | 'theme'>;
function TriajContent({ onBack, initialTab, initialTaskId, onStartSimulation, simulationErrors, onFavoriteQuestion }: ContentProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>(initialTab === 'calendar' ? 'notifications' : initialTab ?? 'planner');
  const [isNotificationDrawerOpen, setIsNotificationDrawerOpen] = useState(false);
  const [isDeepSeekModalOpen, setIsDeepSeekModalOpen] = useState(false);
  const [isSystemParamsOpen, setIsSystemParamsOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isBackupOpen, setIsBackupOpen] = useState(false);
  const closeNotifications = useCallback(() => setIsNotificationDrawerOpen(false), []);
  const drawer = useModalA11y(closeNotifications, isNotificationDrawerOpen);
  const { notifications, topics, subjects, markAllNotificationsRead, markNotificationRead } = useTriajView();

  return (
    <div className="bg-[#f5f5f7] text-slate-900 font-sans flex flex-col">
      {/* Üst Navigasyon */}
      <TriajHeader
        onBack={onBack}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenNotifications={() => setIsNotificationDrawerOpen(true)}
        onOpenDeepSeek={() => setIsDeepSeekModalOpen(true)}
        onOpenSystemParams={() => setIsSystemParamsOpen(true)}
        onOpenGuide={() => setIsGuideOpen(true)}
        onOpenBackup={() => setIsBackupOpen(true)}
      />

      {/* Ana Gövde */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-5 lg:px-6 py-4">
        {activeTab === 'planner' && <DailyPlannerView onStartSimulation={onStartSimulation} />}
        {activeTab === 'subjects' && <SubjectDatabaseView />}
        {activeTab === 'notifications' && <NotificationCalendarView initialTaskId={initialTaskId} />}
        {activeTab === 'analytics' && <ExamAndErrorAnalyticsView simulationErrors={simulationErrors} onFavoriteQuestion={onFavoriteQuestion} />}
        {activeTab === 'report' && <KovaTriageReportView />}
      </div>

      {/* Hızlı Bildirim Çekmecesi (Drawer) */}
      {isNotificationDrawerOpen && (
        <div className="fixed inset-0 z-[70] flex justify-end bg-black/50 backdrop-blur-2xs">
          <div ref={drawer} role="dialog" aria-modal="true" aria-label="Aktif TRİAJ bildirimleri" className="bg-white w-full max-w-md h-full shadow-2xl border-l border-slate-200 flex flex-col">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-indigo-600" />
                <h3 className="font-bold text-sm text-slate-900">Aktif Triyaj Bildirimleri</h3>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-0.5 rounded-full font-bold">
                  {notifications.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsNotificationDrawerOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {notifications.length === 0 ? (
                <div className="text-center py-12 text-slate-400 text-xs">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-emerald-500" />
                  Şu an için bekleyen acil triyaj bildiriminiz bulunmuyor.
                </div>
              ) : (
                notifications.map(n => {
                  const targetTopic = topics.find(t => t.id === n.topicId);
                  const sub = targetTopic ? subjectForTopic(subjects, targetTopic.subjectId) ?? null : null;

                  return (
                    <div
                      key={n.id}
                      className={`p-3 rounded-lg border text-xs space-y-1 ${
                        n.priority === 'P1_CRITICAL'
                          ? 'bg-rose-50 border-rose-200 text-rose-950'
                          : n.priority === 'P2_HIGH'
                          ? 'bg-amber-50 border-amber-200 text-amber-950'
                          : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] font-semibold">
                        <span>{sub ? `[${sub.code}] ${sub.name}` : 'Sistem Uyarısı'}</span>
                        <span className="font-mono">{n.dueDate}</span>
                      </div>
                      <div className="font-bold">{n.title}</div>
                      <p className="text-[11px] opacity-90">{n.message}</p>
                      {n.isRead ? <span>Okundu</span> : (
                        <button type="button" onClick={() => markNotificationRead(n.id)} className="underline">Okundu işaretle</button>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-3">
              {notifications.some(n => !n.isRead) && (
                <button type="button" className="text-sm underline" onClick={markAllNotificationsRead}>Tümünü okundu işaretle</button>
              )}
              <button
                type="button"
                onClick={() => {
                  setIsNotificationDrawerOpen(false);
                  setActiveTab('notifications');
                }}
                className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg text-center transition-colors"
              >
                Tüm Takvimi ve Bildirimleri Aç
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Deploy.com DeepSeek v4.1 Flash (1017) Bilişsel DUS Motoru Modalı */}
      {isDeepSeekModalOpen && <DeepSeekModal onClose={() => setIsDeepSeekModalOpen(false)} />}

      {/* Sekme 14: Parametreler_Ayar (SSOT) Modalı */}
      {isSystemParamsOpen && (
        <SystemParametersModal onClose={() => setIsSystemParamsOpen(false)} />
      )}

      {/* Sekme 15: Giris_Rehberi Modalı */}
      {isGuideOpen && <GirisRehberiModal onClose={() => setIsGuideOpen(false)} />}
      {isBackupOpen && <BackupDialog onClose={() => setIsBackupOpen(false)} />}
    </div>
  );
}

export default function TriajModule({ userId, onStartTask, theme = 'light', ...content }: TriajModuleProps) {
  return (
    <section className="triaj-module min-h-full" data-triaj-theme={theme} aria-label="TRİAJ">
      <TriajViewProvider key={userId} onStartTask={onStartTask} onBack={content.onBack}>
        <TriajContent {...content} />
      </TriajViewProvider>
    </section>
  );
}
