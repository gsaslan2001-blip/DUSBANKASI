import { useState, useMemo } from 'react';
import type { Question, QuestionSkeleton } from '../../data';
import type { Theme } from '../../theme';
import { Button } from '../ui/Button';
import {
  GraduationCap,
  MagnifyingGlass,
  Shuffle,
  BookOpen,
  CaretRight,
  Sparkle,
  CheckCircle,
  WarningCircle,
} from '@phosphor-icons/react';
import {
  CANONICAL_LESSONS,
  CANONICAL_UNITS,
  isCikmisQuestion,
  getCikmisCanonicalLesson,
  getCikmisCanonicalUnit,
} from '../../config/canonicalUnits';

interface CikmisSelectionViewProps {
  questions: (Question | QuestionSkeleton)[];
  theme: Theme;
  onSelectUnit: (lesson: string, unit: string, questionIds: string[]) => void;
  onSelectAllForLesson?: (lesson: string, questionIds: string[]) => void;
  onSelectKarmaAll?: (questionIds: string[]) => void;
  onBack: () => void;
  showAlert: (message: string, title?: string) => void;
}

export function CikmisSelectionView({
  questions,
  theme,
  onSelectUnit,
  onSelectAllForLesson,
  onSelectKarmaAll,
  onBack: _onBack,
  showAlert,
}: CikmisSelectionViewProps) {
  // 1. Çıkmış soruları filtrele ve ders/ünite bazında indeksle
  const { cikmisQuestions, lessonMap, totalCikmisCount } = useMemo(() => {
    const cikmis = questions.filter(isCikmisQuestion);
    // lesson -> unit -> id[]
    const map = new Map<string, Map<string, string[]>>();

    for (const q of cikmis) {
      const lesson = getCikmisCanonicalLesson(q);
      const unit = getCikmisCanonicalUnit(q);

      if (!map.has(lesson)) {
        map.set(lesson, new Map());
      }
      const unitMap = map.get(lesson)!;
      if (!unitMap.has(unit)) {
        unitMap.set(unit, []);
      }
      unitMap.get(unit)!.push(q.id);
    }

    return {
      cikmisQuestions: cikmis,
      lessonMap: map,
      totalCikmisCount: cikmis.length,
    };
  }, [questions]);

  // İlk açılışta en çok çıkmış sorusu olan dersi veya ilk dersi seç
  const defaultLesson = useMemo(() => {
    let maxLesson = CANONICAL_LESSONS[0];
    let maxCount = -1;
    for (const l of CANONICAL_LESSONS) {
      const uMap = lessonMap.get(l);
      let count = 0;
      if (uMap) {
        for (const ids of uMap.values()) count += ids.length;
      }
      if (count > maxCount) {
        maxCount = count;
        maxLesson = l;
      }
    }
    return maxLesson;
  }, [lessonMap]);

  const [selectedLesson, setSelectedLesson] = useState<string>(defaultLesson);
  const [search, setSearch] = useState('');

  // Seçili dersin çıkmış soru havuzu
  const selectedLessonUnitsMap = lessonMap.get(selectedLesson);
  const selectedLessonAllIds = useMemo(() => {
    if (!selectedLessonUnitsMap) return [];
    const allIds: string[] = [];
    for (const ids of selectedLessonUnitsMap.values()) {
      allIds.push(...ids);
    }
    return allIds;
  }, [selectedLessonUnitsMap]);

  // Seçili dersin üniteleri (Normal mod kanonik üniteleri + varsa ekstra çıkmış üniteler)
  const unitsForDisplay = useMemo(() => {
    const canonical = CANONICAL_UNITS[selectedLesson] || [];
    const unitList: { name: string; count: number; ids: string[]; isSpecial?: boolean }[] = [];

    // Varsa "Genel Çıkmış Sorular" veya kanonik dışı üniteleri en başa al
    if (selectedLessonUnitsMap) {
      for (const [unitName, ids] of selectedLessonUnitsMap.entries()) {
        if (!canonical.includes(unitName)) {
          unitList.push({
            name: unitName,
            count: ids.length,
            ids,
            isSpecial: true,
          });
        }
      }
    }

    // Kanonik üniteleri ekle
    for (const u of canonical) {
      const ids = selectedLessonUnitsMap?.get(u) || [];
      unitList.push({
        name: u,
        count: ids.length,
        ids,
      });
    }

    // Arama filtresi
    if (!search.trim()) return unitList;
    const q = search.toLowerCase();
    return unitList.filter(item => item.name.toLowerCase().includes(q));
  }, [selectedLesson, selectedLessonUnitsMap, search]);

  const handleUnitClick = (item: { name: string; count: number; ids: string[] }) => {
    if (item.count === 0 || item.ids.length === 0) {
      showAlert(
        `"${item.name}" ünitesi için henüz veritabanında çıkmış soru bulunmuyor. Yeni çıkmış sorular yüklendikçe burada aktifleşecektir.`,
        'Soru Bulunmuyor'
      );
      return;
    }
    onSelectUnit(selectedLesson, item.name, item.ids);
  };

  return (
    <div className="anim-slide-up w-full max-w-5xl mx-auto pb-16">
      {/* Üst Bilgi Kartı */}
      <div className="relative overflow-hidden rounded-[2rem] p-6 sm:p-8 mb-8 border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/15 blur-3xl rounded-full" />
        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-500/10">
              <GraduationCap size={30} weight="fill" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-400">
                  ÖSYM DUS Orijinal
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/20">
                  Çıkmış Modu
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight mt-1 text-white">
                DUS Çıkmış Sorular
              </h1>
              <p className={`${theme.subtext} text-xs sm:text-sm mt-0.5`}>
                Normal moddaki tüm ders ve üniteler altında ÖSYM çıkmış sınav soruları
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {totalCikmisCount > 0 && onSelectKarmaAll && (
              <Button
                onClick={() => onSelectKarmaAll(cikmisQuestions.map(q => q.id))}
                variant="unstyled"
                size="sm"
                className="px-4 py-2.5 rounded-xl font-bold text-xs bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 transition-all flex items-center gap-2"
              >
                <Shuffle size={14} weight="bold" />
                <span>Karma Çıkmış ({totalCikmisCount} Soru)</span>
              </Button>
            )}
            <div className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-right">
              <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Toplam Çıkmış</div>
              <div className="text-lg font-black text-amber-400 leading-tight">{totalCikmisCount} Soru</div>
            </div>
          </div>
        </div>
      </div>

      {/* Ders Seçim Sekmeleri (14+ Ana Ders) */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="text-xs font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-2">
            <BookOpen size={14} weight="bold" />
            <span>Ders Seçin</span>
          </div>
          <span className={`${theme.subtext} text-[11px]`}>
            {CANONICAL_LESSONS.length} Ders Müfredatı
          </span>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {CANONICAL_LESSONS.map(lesson => {
            const isSelected = lesson === selectedLesson;
            const uMap = lessonMap.get(lesson);
            let count = 0;
            if (uMap) {
              for (const ids of uMap.values()) count += ids.length;
            }

            return (
              <button
                key={lesson}
                type="button"
                onClick={() => {
                  setSelectedLesson(lesson);
                  setSearch('');
                }}
                className={`flex-shrink-0 px-4 py-2.5 rounded-2xl font-bold text-xs transition-all flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-amber-500 text-black border-amber-400 shadow-lg shadow-amber-500/20 font-black scale-[1.02]'
                    : `${theme.card} border-white/5 text-neutral-300 hover:border-amber-500/30 hover:text-white`
                }`}
              >
                <span>{lesson}</span>
                {count > 0 ? (
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-black ${
                      isSelected ? 'bg-black/25 text-black' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    }`}
                  >
                    {count}
                  </span>
                ) : (
                  <span className={`text-[10px] ${isSelected ? 'text-black/60' : 'text-neutral-500'}`}>0</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Seçili Ders Başlığı & Hızlı Aksiyon */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 px-1">
        <div>
          <h2 className="text-lg font-black tracking-tight text-white flex items-center gap-2">
            <span>{selectedLesson}</span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-400 border border-amber-500/25">
              {selectedLessonAllIds.length} Çıkmış Soru
            </span>
          </h2>
          <p className={`${theme.subtext} text-xs mt-0.5`}>
            {unitsForDisplay.length} Ünite listeleniyor
          </p>
        </div>

        <div className="flex items-center gap-2">
          {selectedLessonAllIds.length > 0 && onSelectAllForLesson && (
            <Button
              onClick={() => onSelectAllForLesson(selectedLesson, selectedLessonAllIds)}
              variant="unstyled"
              size="sm"
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25 transition-colors flex items-center gap-1.5"
            >
              <Sparkle size={13} weight="fill" />
              <span>Tüm {selectedLesson} Sorularını Çöz ({selectedLessonAllIds.length})</span>
            </Button>
          )}

          {/* Arama Inputu */}
          <div className="relative min-w-[200px]">
            <MagnifyingGlass
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
            />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Ünite ara..."
              className={`w-full pl-8 pr-3 py-1.5 text-xs rounded-xl ${theme.surface} border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500/50 transition-colors`}
            />
          </div>
        </div>
      </div>

      {/* Ünite Listesi */}
      <div className="space-y-2">
        {unitsForDisplay.map((unitItem, index) => {
          const hasQuestions = unitItem.count > 0;

          return (
            <div
              key={unitItem.name}
              onClick={() => handleUnitClick(unitItem)}
              className={`w-full p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 text-left group ${
                hasQuestions
                  ? `${theme.card} border-amber-500/20 hover:border-amber-400/50 hover:bg-amber-500/5 cursor-pointer shadow-sm`
                  : `${theme.card} border-white/[0.04] opacity-60 hover:opacity-80 cursor-pointer`
              }`}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-black ${
                    hasQuestions
                      ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 group-hover:scale-105 transition-transform'
                      : 'bg-white/5 text-neutral-500 border border-white/5'
                  }`}
                >
                  {hasQuestions ? (
                    <CheckCircle size={16} weight="fill" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm font-bold truncate ${
                        hasQuestions
                          ? 'text-white group-hover:text-amber-300 transition-colors'
                          : 'text-neutral-300'
                      }`}
                    >
                      {unitItem.name}
                    </span>
                    {unitItem.isSpecial && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-amber-500/20 text-amber-400 border border-amber-500/30 shrink-0">
                        Özel Havuz
                      </span>
                    )}
                  </div>
                  <div className={`${theme.subtext} text-[11px]`}>
                    {hasQuestions ? (
                      <span className="text-amber-400 font-medium">{unitItem.count} çıkmış soru çözüme hazır</span>
                    ) : (
                      <span>Henüz soru eklenmedi</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {hasQuestions ? (
                  <span className="px-3 py-1 rounded-xl text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1 group-hover:bg-amber-500 group-hover:text-black transition-all">
                    <span>{unitItem.count} Soru</span>
                    <CaretRight size={12} weight="bold" />
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded-xl text-[11px] font-medium text-neutral-500 bg-white/[0.02] border border-white/5 flex items-center gap-1">
                    <WarningCircle size={12} />
                    <span>0 Soru</span>
                  </span>
                )}
              </div>
            </div>
          );
        })}

        {unitsForDisplay.length === 0 && (
          <div className="py-12 text-center text-neutral-500 text-xs">
            Aradığınız kritere uygun ünite bulunamadı.
          </div>
        )}
      </div>
    </div>
  );
}
