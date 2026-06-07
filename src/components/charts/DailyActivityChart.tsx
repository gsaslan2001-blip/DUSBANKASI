import { memo, useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';

export interface DailyActivityDatum {
  date: string;
  correct: number;
  incorrect: number;
}

interface Props {
  data: DailyActivityDatum[];
  onDaySelect?: (date: string | null) => void;
  selectedDay?: string | null;
}

const MARGIN = { top: 8, right: 8, bottom: 28, left: 36 };
const TOOLTIP_OFFSET = 10;

export default memo(DailyActivityChart);

function DailyActivityChart({ data, onDaySelect, selectedDay }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ width: 0, height: 0 });

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const { width } = containerRef.current.getBoundingClientRect();
    setDims({ width, height: 160 });
  }, []);

  useEffect(() => {
    measure();
    const obs = new ResizeObserver(debounce(() => measure(), 150));
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [measure]);

  useEffect(() => {
    if (!svgRef.current || dims.width === 0 || data.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('role', 'img').attr('aria-label', 'Günlük aktivite çubuk grafiği');
    svg.append('title').text('Günlük aktivite çubuk grafiği');

    const { width, height } = dims;
    const innerW = width - MARGIN.left - MARGIN.right;
    const innerH = height - MARGIN.top - MARGIN.bottom;

    const g = svg
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

    const maxVal = d3.max(data, d => d.correct + d.incorrect) || 1;
    const xScale = d3.scaleBand<string>()
      .domain(data.map(d => d.date))
      .range([0, innerW])
      .padding(0.15);
    const yScale = d3.scaleLinear().domain([0, maxVal]).range([innerH, 0]).nice();

    // Grid lines
    g.append('g').selectAll('line')
      .data(yScale.ticks(4))
      .join('line')
      .attr('x1', 0).attr('x2', innerW)
      .attr('y1', d => yScale(d)).attr('y2', d => yScale(d))
      .attr('stroke', 'rgba(255,255,255,0.05)').attr('stroke-dasharray', '2,4');

    // Y axis
    g.append('g').selectAll('text')
      .data(yScale.ticks(4))
      .join('text')
      .attr('x', -6).attr('y', d => yScale(d) + 3)
      .attr('text-anchor', 'end').attr('fill', '#8b8b98')
      .attr('font-size', '8px').attr('font-family', 'inherit')
      .text(d => String(d));

    const stacked = data.map(d => ({
      date: d.date, correct: d.correct, incorrect: d.incorrect,
      total: d.correct + d.incorrect,
    }));

    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, d: typeof stacked[number]) {
      if (!tooltip) return;
      const parts = d.date.split('-');
      tooltip.innerHTML = `<div style="font-size:11px;font-weight:700;margin-bottom:4px;color:#ececf1">${parts[2]}/${parts[1]}/${parts[0]}</div><div style="display:flex;gap:8px;font-size:10px"><span style="color:#34d399">Dogru: ${d.correct}</span><span style="color:#f87171">Yanlis: ${d.incorrect}</span><span style="color:#8b8b98">Toplam: ${d.total}</span></div>`;
      tooltip.style.display = 'block';
      moveTooltip(event);
    }
    function moveTooltip(event: MouseEvent) {
      if (!tooltip) return;
      tooltip.style.left = `${event.clientX + TOOLTIP_OFFSET}px`;
      tooltip.style.top = `${event.clientY - 60}px`;
    }
    function hideTooltip() { if (tooltip) tooltip.style.display = 'none'; }

    type StackedDatum = typeof stacked[number];

    // Incorrect bar (drawn first, on bottom)
    g.selectAll<SVGRectElement, StackedDatum>('.bar-incorrect').data(stacked).join('rect')
      .attr('class', 'bar-incorrect')
      .attr('x', d => xScale(d.date)!)
      .attr('y', d => yScale(d.total))
      .attr('width', xScale.bandwidth())
      .attr('height', 0)
      .attr('fill', '#f87171').attr('opacity', 0.7).attr('rx', 2)
      .on('mouseenter', function (e, d) { d3.select(this).attr('opacity', 1); showTooltip(e, d); })
      .on('mouseleave', function () { d3.select(this).attr('opacity', 0.7); hideTooltip(); })
      .on('mousemove', (e) => moveTooltip(e))
      .on('click', (_e, d) => onDaySelect?.(selectedDay === d.date ? null : d.date));

    // Correct bar (drawn on top of incorrect)
    g.selectAll<SVGRectElement, StackedDatum>('.bar-correct').data(stacked).join('rect')
      .attr('class', 'bar-correct')
      .attr('x', d => xScale(d.date)!)
      .attr('y', innerH)
      .attr('width', xScale.bandwidth())
      .attr('height', 0)
      .attr('fill', '#34d399').attr('opacity', 0.8).attr('rx', 2)
      .on('mouseenter', function (e, d) { d3.select(this).attr('opacity', 1); showTooltip(e, d); })
      .on('mouseleave', function () { d3.select(this).attr('opacity', 0.8); hideTooltip(); })
      .on('mousemove', (e) => moveTooltip(e))
      .on('click', (_e, d) => onDaySelect?.(selectedDay === d.date ? null : d.date));

    // Animate bars
    g.selectAll<SVGRectElement, StackedDatum>('.bar-correct').transition().duration(600).delay((_, i) => i * 20).ease(d3.easeCubicOut)
      .attr('height', d => Math.max(0, innerH - yScale(d.correct)))
      .attr('y', d => yScale(d.correct));
    g.selectAll<SVGRectElement, StackedDatum>('.bar-incorrect').transition().duration(600).delay((_, i) => i * 20).ease(d3.easeCubicOut)
      .attr('height', d => Math.max(0, yScale(d.correct) - yScale(d.total)))
      .attr('y', d => yScale(d.total));

    // Selected day highlight
    if (selectedDay) {
      g.selectAll<SVGRectElement, StackedDatum>('.bar-correct,.bar-incorrect').filter(d => d.date === selectedDay)
        .attr('stroke', '#818cf8').attr('stroke-width', 2);
    }

    // X axis labels for 30 days or fewer
    if (data.length <= 30) {
      const step = Math.ceil(data.length / 10);
      g.selectAll('.x-label').data(data.filter((_, i) => i % step === 0)).join('text')
        .attr('class', 'x-label')
        .attr('x', d => xScale(d.date)! + xScale.bandwidth() / 2)
        .attr('y', innerH + 14).attr('text-anchor', 'middle')
        .attr('fill', '#8b8b98').attr('font-size', '8px').attr('font-family', 'inherit')
        .text(d => { const p = d.date.split('-'); return `${p[2]}/${p[1]}`; });
    }
  }, [data, dims, selectedDay, onDaySelect]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <svg ref={svgRef} style={{ display: 'block', width: '100%' }} />
      <div ref={tooltipRef} style={{ display: 'none', position: 'fixed', pointerEvents: 'none', background: 'rgba(8,8,10,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '8px 12px', zIndex: 100, backdropFilter: 'blur(12px)', boxShadow: '0 8px 24px rgba(0,0,0,0.6)' }} />
    </div>
  );
}
