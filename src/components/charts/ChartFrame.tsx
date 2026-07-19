/**
 * ChartFrame + Döner Bezel (Faz 4)
 *
 * Dalgıç saati felsefesi: bezel süs değil, ARAÇTIR. `.double-bezel` çerçevesi
 * burada işlevselleşir — sağ üstteki bezel kadranı sürüklenerek (drag),
 * tıklanarak veya ok tuşlarıyla döndürülür; her detent bir zaman aralığıdır.
 * Chart içeriği değişen aralıkla akar.
 *
 * Tek sarmalayıcıya bir kez yazıldı — bütün chart bölümleri `<ChartFrame bezel={...}>`
 * ile aynı imza etkileşimi kazanır. Erişilebilirlik fallback'i zorunludur:
 * kadran bir buttondur (tık = sonraki detent), ←/→ önceki/sonraki.
 */
import { useRef } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import type { Theme } from '../../theme';
import { SPRING } from '../../lib/motion';

export type BezelStop<T> = { label: string; value: T };

export type BezelProps<T> = {
  stops: ReadonlyArray<BezelStop<T>>;
  value: T;
  onChange: (value: T) => void;
};

const DETENT_DEG = 45;      // her detent'in görsel dönüşü
const DRAG_PX_PER_STEP = 48; // bir detent için gereken yatay sürükleme

function BezelDial<T>({ stops, value, onChange, subtext }: BezelProps<T> & { subtext: string }) {
  const idx = Math.max(0, stops.findIndex(s => s.value === value));
  const rotation = useMotionValue(idx * DETENT_DEG);
  const dragAccum = useRef(0);

  const goTo = (nextIdx: number) => {
    const clamped = ((nextIdx % stops.length) + stops.length) % stops.length;
    if (clamped !== idx) onChange(stops[clamped].value);
    animate(rotation, clamped * DETENT_DEG, SPRING.snappy);
  };

  return (
    <div className="flex items-center gap-2 select-none">
      <span className={`${subtext} text-[10px] font-black uppercase tracking-widest hidden sm:inline`}>
        {stops[idx]?.label}
      </span>
      <motion.button
        type="button"
        role="slider"
        aria-label={`Zaman aralığı: ${stops[idx]?.label}`}
        aria-valuemin={0}
        aria-valuemax={stops.length - 1}
        aria-valuenow={idx}
        aria-valuetext={stops[idx]?.label}
        title={`Zaman aralığı — döndür/tıkla (${stops.map(s => s.label).join(' · ')})`}
        onClick={() => goTo(idx + 1)}
        onKeyDown={e => {
          if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); goTo(idx + 1); }
          if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { e.preventDefault(); goTo(idx - 1); }
        }}
        onPan={(_, info) => {
          // Yatay drag'i detent adımlarına çevir (dikey scroll'la çakışmaz — yalnız x okunur)
          dragAccum.current += info.delta.x;
          rotation.set(idx * DETENT_DEG + (dragAccum.current / DRAG_PX_PER_STEP) * DETENT_DEG);
          if (Math.abs(dragAccum.current) >= DRAG_PX_PER_STEP) {
            const steps = Math.trunc(dragAccum.current / DRAG_PX_PER_STEP);
            dragAccum.current -= steps * DRAG_PX_PER_STEP;
            goTo(idx + steps);
          }
        }}
        onPanEnd={() => {
          dragAccum.current = 0;
          animate(rotation, idx * DETENT_DEG, SPRING.snappy);
        }}
        className="relative w-9 h-9 rounded-full border border-white/15 bg-white/[0.04] hover:border-indigo-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 cursor-ew-resize shrink-0 touch-none"
      >
        {/* Kadran — çentikli bezel halkası, drag ile döner */}
        <motion.svg
          viewBox="0 0 36 36"
          className="absolute inset-0 w-full h-full"
          style={{ rotate: rotation }}
          aria-hidden
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="18" y1="2.5" x2="18" y2={i % 3 === 0 ? '6.5' : '4.5'}
              stroke="currentColor"
              strokeOpacity={i % 3 === 0 ? 0.7 : 0.3}
              strokeWidth="1.4"
              strokeLinecap="round"
              transform={`rotate(${i * 30} 18 18)`}
            />
          ))}
          {/* İndeks üçgeni (saat 12 yönü işaretçisi) */}
          <path d="M 18 8 L 16 11.5 L 20 11.5 Z" fill="#818cf8" />
        </motion.svg>
        <span className="absolute inset-[11px] rounded-full bg-indigo-500/15 border border-indigo-400/20" />
      </motion.button>
    </div>
  );
}

/**
 * Faz 3 — chart hijyeni: loading/error/empty üç durumu ChartFrame seviyesinde standart.
 * Geriye uyumlu: hiçbiri verilmezse eski davranış (sadece children render) aynen çalışır.
 */
function ChartSkeleton({ minHeight }: { minHeight: number }) {
  return (
    <div
      className="w-full rounded-xl bg-[color:var(--color-surface-2)] overflow-hidden relative"
      style={{ minHeight }}
      aria-hidden
    >
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
    </div>
  );
}

function ChartErrorState({ message, onRetry, minHeight }: { message: string; onRetry?: () => void; minHeight: number }) {
  return (
    <div
      role="alert"
      className="w-full flex flex-col items-center justify-center gap-3 text-center rounded-xl border border-red-500/15 bg-red-500/[0.03]"
      style={{ minHeight }}
    >
      <span className="text-red-400 text-sm font-medium">{message}</span>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="text-xs font-bold uppercase tracking-wide text-red-400 border border-red-500/30 rounded-lg px-3 py-1.5 hover:bg-red-500/10 transition-colors"
        >
          Tekrar dene
        </button>
      )}
    </div>
  );
}

function ChartEmptyState({ message, minHeight }: { message: string; minHeight: number }) {
  return (
    <div
      className="w-full flex items-center justify-center text-center"
      style={{ minHeight, color: 'var(--color-text-secondary)' }}
    >
      <span className="text-sm">{message}</span>
    </div>
  );
}

export type ChartFrameProps<T> = {
  theme: Theme;
  title: string;
  eyebrow?: string;
  /** Başlık satırının sağına eklenecek ekstra içerik (legend vb.). */
  right?: React.ReactNode;
  /** Döner bezel — verilirse çerçeve zaman-aralığı scrubber'ı kazanır. */
  bezel?: BezelProps<T>;
  className?: string;
  /** Ekran okuyucu özeti — verilirse chart bölgesine aynı metin aria-label olarak bağlanır. */
  summary?: string;
  /** true iken children yerine shimmer skeleton gösterilir. */
  loading?: boolean;
  /** Doluysa children yerine hata durumu + (varsa) yeniden dene butonu gösterilir. */
  error?: string | null;
  onRetry?: () => void;
  /** true iken children yerine boş-durum mesajı gösterilir (loading/error'dan sonra kontrol edilir). */
  isEmpty?: boolean;
  emptyMessage?: string;
  /** Skeleton/error/empty durumlarında ayrılacak minimum yükseklik (CLS önleme). */
  minHeight?: number;
  /**
   * true → double-bezel ("dalgıç saati") çerçevesi yerine düz `theme.surface` kartı.
   * CollapsibleSection gibi zaten kart-içinde-kart olan Tier-3 bağlamlarında kullanılır;
   * aksi halde bezel-in-bezel iç içe gölge/köşe yığılması oluşur (görsel gürültü).
   */
  flat?: boolean;
  children: React.ReactNode;
};

export function ChartFrame<T>({
  theme, title, eyebrow, right, bezel, className = '', summary,
  loading = false, error = null, onRetry, isEmpty = false, emptyMessage = 'Henüz yeterli veri yok',
  minHeight = 220, flat = false, children,
}: ChartFrameProps<T>) {
  const body = (
    <>
      <div className="flex items-end justify-between mb-4 gap-3 flex-wrap">
        <div className="flex flex-col gap-1">
          {eyebrow && (
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[color:var(--color-text-secondary)] w-fit mb-0.5">
              {eyebrow}
            </span>
          )}
          <h3 className={flat ? 'text-sm font-bold' : 'text-xl font-bold'}>{title}</h3>
          {summary && <span className="sr-only">{summary}</span>}
        </div>
        <div className="flex items-center gap-4">
          {right}
          {bezel && <BezelDial {...bezel} subtext={theme.subtext} />}
        </div>
      </div>
      <div>
        {loading ? (
          <ChartSkeleton minHeight={minHeight} />
        ) : error ? (
          <ChartErrorState message={error} onRetry={onRetry} minHeight={minHeight} />
        ) : isEmpty ? (
          <ChartEmptyState message={emptyMessage} minHeight={minHeight} />
        ) : (
          children
        )}
      </div>
    </>
  );

  if (flat) {
    return <div className={`${theme.surface} rounded-xl p-5 ${className}`}>{body}</div>;
  }

  return (
    <div className={`double-bezel ${className}`}>
      <div className={`double-bezel-inner ${theme.card} p-6 sm:p-8`}>
        {body}
      </div>
    </div>
  );
}

export default ChartFrame;
