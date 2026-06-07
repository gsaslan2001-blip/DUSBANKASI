import { memo, useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';

export interface TrendLineDatum {
  date: string;
  correct: number;
  incorrect: number;
  total: number;
}

interface Props {
  data: TrendLineDatum[];
  height?: number;
}

const MARGIN = { top: 12, right: 12, bottom: 28, left: 36 };
const TOOLTIP_OFFSET = 10;

const SERIES = [
  { key: 'total' as const, label: 'Çözülen', color: '#818cf8', strokeWidth: 2 },
  { key: 'correct' as const, label: 'Doğru', color: '#34d399', strokeWidth: 1.8 },
  { key: 'incorrect' as const, label: 'Yanlış', color: '#f87171', strokeWidth: 1.5 },
];

export default memo(TrendLineChart);

function TrendLineChart({ data, height = 220 }: Props) {
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
    if (!svgRef.current || dims.width === 0 || data.length < 2) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('role', 'img').attr('aria-label', 'Trend çizgi grafiği');
    svg.append('title').text('Trend çizgi grafiği');

    const { width, height: h } = dims;
    const innerW = width - MARGIN.left - MARGIN.right;
    const innerH = h - MARGIN.top - MARGIN.bottom;

    const g = svg.attr('width', width).attr('height', h)
      .append('g').attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

    const xScale = d3.scalePoint<string>()
      .domain(data.map(d => d.date))
      .range([0, innerW]);
    // const dates = data.map(d => d.date);

    const maxVal = d3.max(data, d => Math.max(d.total, d.correct, d.incorrect)) || 1;
    const yScale = d3.scaleLinear().domain([0, maxVal]).range([innerH, 0]).nice();

    // Grid
    g.append('g').selectAll('line')
      .data(yScale.ticks(5))
      .join('line')
      .attr('x1', 0).attr('x2', innerW)
      .attr('y1', d => yScale(d)).attr('y2', d => yScale(d))
      .attr('stroke', 'rgba(255,255,255,0.04)').attr('stroke-dasharray', '2,4');

    g.append('g').selectAll('text')
      .data(yScale.ticks(5))
      .join('text')
      .attr('x', -6).attr('y', d => yScale(d) + 3)
      .attr('text-anchor', 'end').attr('fill', '#8b8b98')
      .attr('font-size', '8px').attr('font-family', 'inherit')
      .text(d => String(d));

    // X labels
    const step = Math.max(1, Math.floor(data.length / 8));
    g.selectAll('.x-label').data(data.filter((_, i) => i % step === 0)).join('text')
      .attr('class', 'x-label').attr('x', d => xScale(d.date)!)
      .attr('y', innerH + 14).attr('text-anchor', 'middle')
      .attr('fill', '#8b8b98').attr('font-size', '8px').attr('font-family', 'inherit')
      .text(d => { const p = d.date.split('-'); return `${p[2]}/${p[1]}`; });

    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, d: TrendLineDatum) {
      if (!tooltip) return;
      const parts = d.date.split('-');
      tooltip.innerHTML = `<div style="font-size:11px;font-weight:700;margin-bottom:4px;color:#ececf1">${parts[2]}/${parts[1]}/${parts[0]}</div><div style="display:flex;gap:8px;font-size:10px"><span style="color:#818cf8">Toplam: ${d.total}</span><span style="color:#34d399">Dogru: ${d.correct}</span><span style="color:#f87171">Yanlis: ${d.incorrect}</span></div>`;
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.clientX + TOOLTIP_OFFSET}px`;
      tooltip.style.top = `${event.clientY - 56}px`;
    }
    function hideTooltip() { if (tooltip) tooltip.style.display = 'none'; }

    // Area for total series
    const areaGen = d3.area<TrendLineDatum>()
      .x(d => xScale(d.date)!).y0(innerH).y1(d => yScale(d.total))
      .curve(d3.curveMonotoneX);
    g.append('path').datum(data).attr('d', areaGen)
      .attr('fill', '#818cf8').attr('fill-opacity', 0)
      .transition().duration(1000).ease(d3.easeCubicOut)
      .attr('fill-opacity', 0.06);

    // Lines
    const lineGen = d3.line<TrendLineDatum>()
      .x(d => xScale(d.date)!).y(d => yScale((d as any)[(d as any).key] ?? 0))
      .curve(d3.curveMonotoneX);

    SERIES.forEach(({ key, color: lineColor, strokeWidth }) => {
      const path = g.append('path').datum(data.map(d => ({ ...d, key }))).attr('d', lineGen as any)
        .attr('fill', 'none').attr('stroke', lineColor).attr('stroke-width', strokeWidth)
        .attr('stroke-linecap', 'round').attr('stroke-linejoin', 'round')
        .attr('stroke-opacity', 0);
      const totalLen = path.node()?.getTotalLength() ?? 0;
      path.attr('stroke-dasharray', totalLen).attr('stroke-dashoffset', totalLen)
        .transition().duration(1200).ease(d3.easeCubicOut)
        .attr('stroke-dashoffset', 0).attr('stroke-opacity', key === 'total' ? 0.8 : 0.45);
    });

    // Hover crosshair
    const crosshair = g.append('line').attr('class', 'crosshair')
      .attr('y1', 0).attr('y2', innerH).attr('x1', -100).attr('x2', -100)
      .attr('stroke', 'rgba(255,255,255,0.15)').attr('stroke-width', 1).attr('stroke-dasharray', '3,3')
      .attr('opacity', 0);

    g.append('rect').attr('width', innerW).attr('height', innerH)
      .attr('fill', 'transparent')
      .on('mousemove', function (event) {
        const [mx] = d3.pointer(event);
        const bisect = d3.bisector((d: TrendLineDatum) => xScale(d.date)!).center;
        const idx = bisect(data, mx);
        if (idx >= 0 && idx < data.length) {
          const d = data[idx];
          crosshair.attr('x1', xScale(d.date)!).attr('x2', xScale(d.date)!).attr('opacity', 1);
          showTooltip(event, d);
        }
      })
      .on('mouseleave', () => { crosshair.attr('opacity', 0); hideTooltip(); });

  }, [data, dims]);

  if (data.length < 2) {
    return (
      <div ref={containerRef} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: height }}>
        <span style={{ color: '#8b8b98', fontSize: '12px' }}>Yeterli veri yok</span>
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <svg ref={svgRef} style={{ display: 'block', width: '100%' }} />
      <div ref={tooltipRef} style={{ display: 'none', position: 'fixed', pointerEvents: 'none', background: 'rgba(8,8,10,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '8px 12px', zIndex: 100, backdropFilter: 'blur(12px)', boxShadow: '0 8px 24px rgba(0,0,0,0.6)' }} />
    </div>
  );
}
