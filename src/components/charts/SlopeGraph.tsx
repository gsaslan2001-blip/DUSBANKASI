import { useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';

/** Iki donem karsilastirmasi icin ders bazli veri noktasi */
export interface SlopeDatum {
  lesson: string;
  accuracy: number;
}

interface Props {
  leftPeriod: SlopeDatum[];
  rightPeriod: SlopeDatum[];
  leftLabel?: string;
  rightLabel?: string;
}

const MARGIN = { top: 32, right: 16, bottom: 8, left: 16 };
const TOOLTIP_OFFSET = 10;
const DOT_R = 6;

/** Ders -> hex renk (AreaStreamGraph ile ayni palette) */
const LESSON_FILL_COLORS: Record<string, string> = {
  'Endodonti': '#38bdf8',
  'Protez': '#818cf8',
  'Periodontoloji': '#a78bfa',
  'Radyoloji': '#fbbf24',
  'Patoloji': '#fb7185',
  'Histoloji': '#34d399',
  'Fizyoloji': '#22d3ee',
  'Cerrahi': '#fb923c',
  'Biyokimya': '#60a5fa',
  'Ortodonti': '#2dd4bf',
  'Restoratif': '#facc15',
  'Pedodonti': '#f472b6',
  'Mikrobiyoloji': '#4ade80',
  'Farmakoloji': '#c084fc',
};

function lessonColor(lesson: string): string {
  return LESSON_FILL_COLORS[lesson] ?? '#6b7280';
}

export default function SlopeGraph({ leftPeriod, rightPeriod, leftLabel = 'Geçen Ay', rightLabel = 'Bu Ay' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ width: 0, height: 0 });

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const { width } = containerRef.current.getBoundingClientRect();
    setDims({ width, height: 240 });
  }, []);

  useEffect(() => {
    measure();
    const obs = new ResizeObserver(debounce(() => measure(), 150));
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [measure]);

  useEffect(() => {
    if (!svgRef.current || dims.width === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('role', 'img').attr('aria-label', 'Eğim grafiği — değişim karşılaştırması');
    svg.append('title').text('Eğim grafiği — değişim karşılaştırması');

    // --- Empty state ---
    if (leftPeriod.length === 0 && rightPeriod.length === 0) {
      svg.attr('width', dims.width).attr('height', dims.height);
      svg.append('text')
        .attr('x', dims.width / 2).attr('y', dims.height / 2)
        .attr('text-anchor', 'middle').attr('fill', '#8b8b98')
        .attr('font-size', '13px').attr('font-family', 'inherit')
        .text('Yeterli veri yok');
      return;
    }

    // Iki listede de bulunan dersleri eslestir
    const leftMap = new Map<string, number>();
    for (const d of leftPeriod) leftMap.set(d.lesson, d.accuracy);
    const rightMap = new Map<string, number>();
    for (const d of rightPeriod) rightMap.set(d.lesson, d.accuracy);

    const allLessons = new Set<string>();
    for (const d of leftPeriod) allLessons.add(d.lesson);
    for (const d of rightPeriod) allLessons.add(d.lesson);

    type Link = { lesson: string; left: number | null; right: number | null };
    const links: Link[] = Array.from(allLessons).map(l => ({
      lesson: l,
      left: leftMap.get(l) ?? null,
      right: rightMap.get(l) ?? null,
    })).filter(l => l.left != null || l.right != null);

    if (links.length === 0) {
      svg.attr('width', dims.width).attr('height', dims.height);
      svg.append('text')
        .attr('x', dims.width / 2).attr('y', dims.height / 2)
        .attr('text-anchor', 'middle').attr('fill', '#8b8b98')
        .attr('font-size', '13px').attr('font-family', 'inherit')
        .text('Karsilastirilabilir veri yok');
      return;
    }

    const { width } = dims;
    const innerW = width - MARGIN.left - MARGIN.right;
    const innerH = dims.height - MARGIN.top - MARGIN.bottom;

    const leftX = MARGIN.left + innerW * 0.12;
    const rightX = MARGIN.left + innerW * 0.88;

    const allValues = links.flatMap(l => [l.left, l.right].filter(v => v != null) as number[]);
    const minVal = d3.min(allValues) ?? 0;
    const maxVal = d3.max(allValues) ?? 100;
    const pad = (maxVal - minVal) * 0.1 || 5;

    const yScale = d3.scaleLinear()
      .domain([Math.max(0, minVal - pad), Math.min(100, maxVal + pad)])
      .range([MARGIN.top + innerH, MARGIN.top])
      .nice();

    // --- Tooltip helpers ---
    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, l: Link) {
      if (!tooltip) return;
      const diff = l.left != null && l.right != null ? l.right - l.left : 0;
      const sign = diff > 0 ? '+' : '';
      const dir = diff > 0 ? 'artti' : diff < 0 ? 'azaldi' : 'degismedi';
      tooltip.innerHTML = `<div style="font-size:11px;font-weight:700;margin-bottom:4px;color:#ececf1">${l.lesson}</div><div style="font-size:10px;color:#ececf1">${leftLabel}: %${l.left != null ? l.left : '—'} → ${rightLabel}: %${l.right != null ? l.right : '—'}</div><div style="font-size:9px;color:#8b8b98;margin-top:2px">(%${sign}${diff.toFixed(1)} ${dir})</div>`;
      tooltip.style.display = 'block';
      moveTooltip(event);
    }
    function moveTooltip(event: MouseEvent) {
      if (!tooltip) return;
      tooltip.style.left = `${event.clientX + TOOLTIP_OFFSET}px`;
      tooltip.style.top = `${event.clientY - 70}px`;
    }
    function hideTooltip() { if (tooltip) tooltip.style.display = 'none'; }

    // --- Label texts ---
    svg.append('text')
      .attr('x', leftX).attr('y', MARGIN.top - 14)
      .attr('text-anchor', 'middle').attr('fill', '#8b8b98')
      .attr('font-size', '10px').attr('font-weight', '600').attr('font-family', 'inherit')
      .text(leftLabel);

    svg.append('text')
      .attr('x', rightX).attr('y', MARGIN.top - 14)
      .attr('text-anchor', 'middle').attr('fill', '#8b8b98')
      .attr('font-size', '10px').attr('font-weight', '600').attr('font-family', 'inherit')
      .text(rightLabel);

    // --- Grid lines (yatay) ---
    svg.append('g').selectAll('line')
      .data(yScale.ticks(5))
      .join('line')
      .attr('x1', MARGIN.left).attr('x2', MARGIN.left + innerW)
      .attr('y1', d => yScale(d)).attr('y2', d => yScale(d))
      .attr('stroke', 'rgba(255,255,255,0.05)').attr('stroke-dasharray', '2,4');

    // --- Baglanti cizgileri ---
    function lineColor(l: Link): string {
      if (l.left == null || l.right == null) return 'rgba(255,255,255,0.15)';
      return l.right >= l.left ? '#34d399' : '#f87171';
    }

    svg.selectAll('.link')
      .data(links)
      .join('line')
      .attr('class', 'link')
      .attr('x1', leftX)
      .attr('x2', leftX) // animasyon baslangici: nokta
      .attr('y1', d => yScale(d.left ?? d.right ?? 0))
      .attr('y2', d => yScale(d.left ?? d.right ?? 0))
      .attr('stroke', d => lineColor(d))
      .attr('stroke-width', 1.5)
      .attr('stroke-opacity', 0.5)
      .transition().duration(600).delay((_, i) => i * 40).ease(d3.easeCubicOut)
      .attr('x2', rightX)
      .attr('y1', d => yScale(d.left ?? d.right ?? 0))
      .attr('y2', d => yScale(d.right ?? d.left ?? 0));

    // --- Sol noktalar ---
    svg.selectAll('.dot-left')
      .data(links)
      .join('circle')
      .attr('class', 'dot-left')
      .attr('cx', leftX)
      .attr('cy', d => yScale(d.left ?? d.right ?? 0))
      .attr('r', DOT_R)
      .attr('fill', d => lessonColor(d.lesson))
      .attr('stroke', 'rgba(8,8,10,0.8)')
      .attr('stroke-width', 1.5)
      .attr('opacity', 0)
      .on('mouseenter', (e, d) => showTooltip(e, d))
      .on('mousemove', (e) => moveTooltip(e))
      .on('mouseleave', hideTooltip)
      .transition().duration(400).delay((_, i) => i * 40 + 200)
      .attr('opacity', 0.9);

    // --- Sag noktalar ---
    svg.selectAll('.dot-right')
      .data(links)
      .join('circle')
      .attr('class', 'dot-right')
      .attr('cx', rightX)
      .attr('cy', d => yScale(d.right ?? d.left ?? 0))
      .attr('r', DOT_R)
      .attr('fill', d => lessonColor(d.lesson))
      .attr('stroke', 'rgba(8,8,10,0.8)')
      .attr('stroke-width', 1.5)
      .attr('opacity', 0)
      .on('mouseenter', (e, d) => showTooltip(e, d))
      .on('mousemove', (e) => moveTooltip(e))
      .on('mouseleave', hideTooltip)
      .transition().duration(400).delay((_, i) => i * 40 + 200)
      .attr('opacity', 0.9);

    // --- Sol konum ders label ---
    svg.selectAll('.label-left')
      .data(links)
      .join('text')
      .attr('class', 'label-left')
      .attr('x', leftX - DOT_R - 8)
      .attr('y', d => yScale(d.left ?? d.right ?? 0) + 3)
      .attr('text-anchor', 'end')
      .attr('fill', '#8b8b98')
      .attr('font-size', '8px').attr('font-family', 'inherit')
      .attr('opacity', 0)
      .text(d => d.lesson)
      .transition().duration(400).delay((_, i) => i * 40 + 600)
      .attr('opacity', 0.75);

    // --- Sag konum deger label (% dogruluk) ---
    svg.selectAll('.label-right')
      .data(links)
      .join('text')
      .attr('class', 'label-right')
      .attr('x', rightX + DOT_R + 8)
      .attr('y', d => yScale(d.right ?? d.left ?? 0) + 3)
      .attr('text-anchor', 'start')
      .attr('fill', '#ececf1')
      .attr('font-size', '8px').attr('font-weight', '600').attr('font-family', 'inherit')
      .attr('opacity', 0)
      .text(d => d.right != null ? `%${d.right}` : '—')
      .transition().duration(400).delay((_, i) => i * 40 + 600)
      .attr('opacity', 0.85);

    // --- Sol konum deger label ---
    svg.selectAll('.label-left-val')
      .data(links)
      .join('text')
      .attr('class', 'label-left-val')
      .attr('x', leftX + DOT_R + 8)
      .attr('y', d => yScale(d.left ?? d.right ?? 0) + 3)
      .attr('text-anchor', 'start')
      .attr('fill', '#8b8b98')
      .attr('font-size', '8px').attr('font-weight', '500').attr('font-family', 'inherit')
      .attr('opacity', 0)
      .text(d => d.left != null ? `%${d.left}` : '—')
      .transition().duration(400).delay((_, i) => i * 40 + 600)
      .attr('opacity', 0.7);
  }, [leftPeriod, rightPeriod, leftLabel, rightLabel, dims]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <svg ref={svgRef} style={{ display: 'block', width: '100%' }} />
      <div ref={tooltipRef} style={{ display: 'none', position: 'fixed', pointerEvents: 'none', background: 'rgba(8,8,10,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '8px 12px', zIndex: 100, backdropFilter: 'blur(12px)', boxShadow: '0 8px 24px rgba(0,0,0,0.6)' }} />
    </div>
  );
}
