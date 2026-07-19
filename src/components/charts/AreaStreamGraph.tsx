
import { memo, useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';
import { TooltipPortal } from './TooltipPortal';

/** Bir derse ait zaman serisi veri noktasi */
export interface StreamLessonSeries {
  lesson: string;
  values: { date: string; count: number }[];
}

interface Props {
  data: StreamLessonSeries[];
  height?: number;
}

const MARGIN = { top: 8, right: 8, bottom: 32, left: 40 };
const TOOLTIP_OFFSET = 10;

/** Ders -> hex renk eslesmesi (Tailwind 400 tonlari ile uyumlu) */
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

export default memo(AreaStreamGraph);

function AreaStreamGraph({ data, height = 240 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ width: 0, height });

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const { width } = containerRef.current.getBoundingClientRect();
    setDims({ width, height });
  }, [height]);

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
    svg.attr('role', 'img').attr('aria-label', 'Alan akış grafiği — zaman serisi');
    svg.append('title').text('Alan akış grafiği — zaman serisi');

    // --- Empty state ---
    if (data.length === 0 || data.every(d => d.values.length === 0)) {
      svg.attr('width', dims.width).attr('height', dims.height);
      svg.append('text')
        .attr('x', dims.width / 2).attr('y', dims.height / 2)
        .attr('text-anchor', 'middle').attr('fill', '#8b8b98')
        .attr('font-size', '13px').attr('font-family', 'inherit')
        .text('Yeterli veri yok');
      return;
    }

    const { width } = dims;
    const innerW = width - MARGIN.left - MARGIN.right;
    const innerH = dims.height - MARGIN.top - MARGIN.bottom;

    // Tum benzersiz tarihleri topla ve sirala
    const dateSet = new Set<string>();
    for (const series of data) {
      for (const v of series.values) dateSet.add(v.date);
    }
    const allDates = Array.from(dateSet).sort();

    // Ders -> { date -> count } haritasi
    const lessonMap = new Map<string, Map<string, number>>();
    for (const series of data) {
      const m = new Map<string, number>();
      for (const v of series.values) m.set(v.date, v.count);
      lessonMap.set(series.lesson, m);
    }

    // Her tarih icin { date, lessonA: count, lessonB: count, ... } yapisi
    const lessons = data.map(d => d.lesson);
    type StackRow = { date: string } & Record<string, number>;
    const rows: StackRow[] = allDates.map(date => {
      const row: StackRow = { date } as StackRow;
      for (const l of lessons) {
        row[l] = lessonMap.get(l)?.get(date) ?? 0;
      }
      return row;
    });

    // D3 stack
    const stackGen = d3.stack<StackRow>().keys(lessons).order(d3.stackOrderNone).offset(d3.stackOffsetNone);
    const stacked = stackGen(rows);

    const xScale = d3.scalePoint<string>().domain(allDates).range([0, innerW]).padding(0.5);
    const maxY = d3.max(stacked, layer => d3.max(layer, d => d[1])) ?? 1;
    const yScale = d3.scaleLinear().domain([0, maxY]).range([innerH, 0]).nice();

    const areaGen = d3.area<d3.SeriesPoint<StackRow>>()
      .x(d => xScale(d.data.date)!)
      .y0(d => yScale(d[0]))
      .y1(d => yScale(d[1]))
      .curve(d3.curveMonotoneX);

    const g = svg
      .attr('width', width)
      .attr('height', dims.height)
      .append('g')
      .attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

    // Grid lines
    g.append('g').selectAll('line')
      .data(yScale.ticks(4))
      .join('line')
      .attr('x1', 0).attr('x2', innerW)
      .attr('y1', d => yScale(d)).attr('y2', d => yScale(d))
      .attr('stroke', 'rgba(255,255,255,0.05)').attr('stroke-dasharray', '2,4');

    // Y axis labels
    g.append('g').selectAll('text')
      .data(yScale.ticks(4))
      .join('text')
      .attr('x', -6).attr('y', d => yScale(d) + 3)
      .attr('text-anchor', 'end').attr('fill', '#8b8b98')
      .attr('font-size', '8px').attr('font-family', 'inherit')
      .text(d => String(d));

    // X axis labels (her 5. tarih)
    const xTickStep = Math.max(1, Math.floor(allDates.length / 8));
    g.append('g').selectAll('text')
      .data(allDates.filter((_, i) => i % xTickStep === 0))
      .join('text')
      .attr('x', d => xScale(d)!)
      .attr('y', innerH + 16)
      .attr('text-anchor', 'middle').attr('fill', '#8b8b98')
      .attr('font-size', '8px').attr('font-family', 'inherit')
      .text(d => {
        const p = d.split('-');
        return `${p[2]}/${p[1]}`;
      });

    // --- Tooltip helpers ---
    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, date: string) {
      if (!tooltip) return;
      const parts = date.split('-');
      let html = `<div style="font-size:11px;font-weight:700;margin-bottom:6px;color:#ececf1">${parts[2]}/${parts[1]}/${parts[0]}</div>`;
      for (const l of lessons) {
        const cnt = lessonMap.get(l)?.get(date) ?? 0;
        if (cnt === 0) continue;
        html += `<div style="display:flex;align-items:center;gap:6px;font-size:10px;margin-bottom:2px"><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:${lessonColor(l)}"></span><span style="color:#ececf1">${l}</span><span style="color:#8b8b98;margin-left:auto">${cnt}</span></div>`;
      }
      tooltip.innerHTML = html;
      tooltip.style.display = 'block';
      moveTooltip(event);
    }
    function moveTooltip(event: MouseEvent) {
      if (!tooltip) return;
      tooltip.style.left = `${event.clientX + TOOLTIP_OFFSET}px`;
      tooltip.style.top = `${event.clientY - 100}px`;
    }
    function hideTooltip() { if (tooltip) tooltip.style.display = 'none'; }

    // --- Render alanlar ve animasyon ---
    // Soldan saga acilan clipPath
    const clipId = `stream-clip-${Math.random().toString(36).slice(2, 8)}`;
    svg.append('defs').append('clipPath').attr('id', clipId)
      .append('rect')
      .attr('x', MARGIN.left).attr('y', 0)
      .attr('width', 0).attr('height', dims.height)
      .transition().duration(1000).ease(d3.easeCubicOut)
      .attr('width', innerW);

    const areaG = g.append('g').attr('clip-path', `url(#${clipId})`);

    areaG.selectAll('path')
      .data(stacked)
      .join('path')
      .attr('d', areaGen)
      .attr('fill', d => lessonColor(d.key))
      .attr('fill-opacity', 0)
      .attr('stroke', d => lessonColor(d.key))
      .attr('stroke-width', 0.5)
      .attr('stroke-opacity', 0.6)
      .transition().duration(1000).ease(d3.easeCubicOut)
      .attr('fill-opacity', 0.55);

    // Gorunmez genis hit-alani (tarih bazinda tooltip)
    if (allDates.length > 0) {
      const hitBand = innerW / allDates.length;
      const hitHalf = Math.max(hitBand / 2, 8);

      g.append('g').selectAll('rect')
        .data(allDates)
        .join('rect')
        .attr('x', d => (xScale(d) ?? 0) - hitHalf)
        .attr('y', 0)
        .attr('width', hitHalf * 2)
        .attr('height', innerH)
        .attr('fill', 'transparent')
        .on('mouseenter', (e, d) => showTooltip(e, d))
        .on('mousemove', (e) => moveTooltip(e))
        .on('mouseleave', hideTooltip);
    }

    // --- En ust cizgi (outline) animasyonu ---
    // Her ders serisi icin ust sinir cizgisini ciz
    const topLine = d3.line<d3.SeriesPoint<StackRow>>()
      .x(d => xScale(d.data.date)!)
      .y(d => yScale(d[1]))
      .curve(d3.curveMonotoneX);

    areaG.selectAll('.stream-outline')
      .data(stacked)
      .join('path')
      .attr('class', 'stream-outline')
      .attr('d', topLine)
      .attr('fill', 'none')
      .attr('stroke', d => lessonColor(d.key))
      .attr('stroke-width', 1.2)
      .attr('stroke-opacity', 0.9)
      .attr('stroke-dasharray', function (this: SVGPathElement) { return String((this as SVGPathElement).getTotalLength?.() ?? innerW); } as any)
      .attr('stroke-dashoffset', function (this: SVGPathElement) { return String((this as SVGPathElement).getTotalLength?.() ?? innerW); } as any)
      .transition().duration(1200).ease(d3.easeCubicOut)
      .attr('stroke-dashoffset', '0');
  }, [data, dims]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <svg ref={svgRef} style={{ display: 'block', width: '100%' }} />
      <TooltipPortal><div ref={tooltipRef} style={{ display: 'none', position: 'fixed', pointerEvents: 'none', background: 'rgba(8,8,10,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '8px 12px', zIndex: 9999, backdropFilter: 'blur(12px)', boxShadow: '0 8px 24px rgba(0,0,0,0.6)', minWidth: '140px' }} /></TooltipPortal>
    </div>
  );
}
