import { useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';

export interface UnitMasteryDatum {
  unit: string;
  mastery: number;
  questionCount: number;
}

interface Props {
  data: UnitMasteryDatum[];
}

const CELL_H = 36;
const GAP = 3;
const MARGIN = { top: 4, right: 8, bottom: 4, left: 8 };

const colorScale = d3.scaleLinear<string>()
  .domain([0, 50, 100])
  .range(['#ef4444', '#f59e0b', '#10b981'])
  .interpolate(d3.interpolateHsl);

export default function UnitHeatMap({ data }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [cols, setCols] = useState(4);

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.getBoundingClientRect().width;
    const c = w < 400 ? 2 : w < 640 ? 3 : w < 900 ? 4 : 5;
    setCols(c);
  }, []);

  useEffect(() => {
    measure();
    const obs = new ResizeObserver(debounce(() => measure(), 150));
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [measure]);

  useEffect(() => {
    if (!svgRef.current || data.length === 0) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('role', 'img').attr('aria-label', 'Ünite ısı haritası — hakimiyet görünümü');
    svg.append('title').text('Ünite ısı haritası — hakimiyet görünümü');

    const containerW = containerRef.current?.getBoundingClientRect().width ?? 600;
    const rows = Math.ceil(data.length / cols);
    const totalH = rows * (CELL_H + GAP) + MARGIN.top + MARGIN.bottom;
    const cellW = (containerW - MARGIN.left - MARGIN.right - (cols - 1) * GAP) / cols;

    svg.attr('viewBox', `0 0 ${containerW} ${totalH}`)
      .attr('preserveAspectRatio', 'xMidYMin meet')
      .style('width', '100%').style('height', `${totalH}px`);

    const g = svg.append('g').attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, d: UnitMasteryDatum) {
      if (!tooltip) return;
      tooltip.innerHTML = `<div style="font-size:11px;font-weight:700;margin-bottom:4px;color:#ececf1;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${d.unit}</div><div style="display:flex;gap:10px;font-size:10px"><span style="color:${colorScale(d.mastery)}">Ustalik: %${d.mastery}</span><span style="color:#8b8b98">${d.questionCount} soru</span></div>`;
      tooltip.style.display = 'block';
      moveTooltip(event);
    }
    function moveTooltip(event: MouseEvent) {
      if (!tooltip) return;
      tooltip.style.left = `${event.clientX + 10}px`;
      tooltip.style.top = `${event.clientY - 50}px`;
    }
    function hideTooltip() { if (tooltip) tooltip.style.display = 'none'; }

    const cells = g.selectAll('g').data(data).join('g')
      .attr('transform', (_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        return `translate(${col * (cellW + GAP)},${row * (CELL_H + GAP)})`;
      });

    cells.append('rect')
      .attr('width', cellW).attr('height', CELL_H).attr('rx', 6)
      .attr('fill', d => colorScale(d.mastery))
      .attr('opacity', d => 0.15 + (d.mastery / 100) * 0.4)
      .attr('stroke', d => colorScale(d.mastery))
      .attr('stroke-opacity', d => 0.2 + (d.mastery / 100) * 0.4).attr('stroke-width', 1)
      .on('mouseenter', function (e, d) {
        d3.select(this).transition().duration(200)
          .attr('stroke-opacity', 1).attr('stroke-width', 2).attr('opacity', 1);
        showTooltip(e, d);
      })
      .on('mouseleave', function () {
        const el = d3.select(this);
        const d = el.datum() as UnitMasteryDatum;
        el.transition().duration(300)
          .attr('stroke-opacity', 0.2 + (d.mastery / 100) * 0.4)
          .attr('stroke-width', 1).attr('opacity', 0.15 + (d.mastery / 100) * 0.4);
        hideTooltip();
      })
      .on('mousemove', (e) => moveTooltip(e));

    cells.append('text')
      .attr('x', 6).attr('y', 14).attr('fill', '#ececf1')
      .attr('font-size', '10px').attr('font-weight', '600').attr('font-family', 'inherit')
      .text(d => { const maxC = Math.floor((cellW - 12) / 6); return d.unit.length > maxC ? d.unit.slice(0, maxC - 1) + '...' : d.unit; });

    cells.append('text')
      .attr('x', 6).attr('y', CELL_H - 6)
      .attr('fill', d => colorScale(d.mastery))
      .attr('font-size', '9px').attr('font-weight', '700').attr('font-family', 'inherit')
      .text(d => `%${d.mastery}`);

    cells.append('text')
      .attr('x', cellW - 4).attr('y', CELL_H - 6).attr('text-anchor', 'end')
      .attr('fill', '#8b8b98').attr('font-size', '8px').attr('font-family', 'inherit')
      .text(d => String(d.questionCount));

    cells.attr('opacity', 0).transition().duration(500).delay((_, i) => i * 30).ease(d3.easeCubicOut).attr('opacity', 1);
  }, [data, cols]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <svg ref={svgRef} style={{ display: 'block', width: '100%' }} />
      <div ref={tooltipRef} style={{ display: 'none', position: 'fixed', pointerEvents: 'none', background: 'rgba(8,8,10,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '8px 12px', zIndex: 100, backdropFilter: 'blur(12px)', boxShadow: '0 8px 24px rgba(0,0,0,0.6)' }} />
    </div>
  );
}
