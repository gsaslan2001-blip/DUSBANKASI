import { memo, useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { TOOLTIP_STYLE, debounce } from '../../lib/chartUtils';
import { TooltipPortal } from './TooltipPortal';

/** Günlük hedef vs gerçekleşen verisi */
export interface DifferenceDatum {
  date: string;
  target: number;
  actual: number;
}

interface Props {
  data: DifferenceDatum[];
  height?: number;
}

const MARGIN = { top: 16, right: 12, bottom: 28, left: 44 };
const TOOLTIP_OFFSET = 10;

/**
 * Proper difference chart: draws both lines and fills the area between them
 * green where actual > target, red where actual < target.
 * Uses two clipPath regions to split the gradient fill correctly.
 */
export default memo(DifferenceChart);

function DifferenceChart({ data, height = 180 }: Props) {
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

    svg
      .attr('role', 'img')
      .attr('aria-label', 'Hedef vs gerçekleşen fark grafiği');

    svg.append('title').text('Fark Grafiği — Hedef vs Gerçekleşen');

    if (data.length === 0) {
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

    svg.attr('width', width).attr('height', dims.height);

    const allValues = data.flatMap(d => [d.target, d.actual]);
    const yMin = d3.min(allValues) ?? 0;
    const yMax = d3.max(allValues) ?? 1;
    const yPad = (yMax - yMin) * 0.1 || 1;

    const xScale = d3.scalePoint<string>()
      .domain(data.map(d => d.date))
      .range([MARGIN.left, MARGIN.left + innerW])
      .padding(0.5);

    const yScale = d3.scaleLinear()
      .domain([yMin - yPad, yMax + yPad])
      .range([MARGIN.top + innerH, MARGIN.top])
      .nice();

    const defs = svg.append('defs');

    // clipPath for above-target area (actual > target → green)
    const aboveId = 'diff-clip-above';
    const belowId = 'diff-clip-below';

    // Above clip: clip everything below the target line
    defs.append('clipPath').attr('id', aboveId)
      .append('path')
      .datum(data)
      .attr('d', d3.area<DifferenceDatum>()
        .x(d => xScale(d.date)!)
        .y0(MARGIN.top)
        .y1(d => yScale(d.target))
        .curve(d3.curveMonotoneX)(data) ?? '');

    // Below clip: clip everything above the target line
    defs.append('clipPath').attr('id', belowId)
      .append('path')
      .datum(data)
      .attr('d', d3.area<DifferenceDatum>()
        .x(d => xScale(d.date)!)
        .y0(d => yScale(d.target))
        .y1(MARGIN.top + innerH)
        .curve(d3.curveMonotoneX)(data) ?? '');

    const areaActual = d3.area<DifferenceDatum>()
      .x(d => xScale(d.date)!)
      .y0(d => yScale(d.target))
      .y1(d => yScale(d.actual))
      .curve(d3.curveMonotoneX);

    // Green fill: actual > target zone
    svg.append('path').datum(data)
      .attr('d', areaActual)
      .attr('fill', '#34d399')
      .attr('fill-opacity', 0.25)
      .attr('clip-path', `url(#${aboveId})`);

    // Red fill: actual < target zone
    svg.append('path').datum(data)
      .attr('d', areaActual)
      .attr('fill', '#f87171')
      .attr('fill-opacity', 0.25)
      .attr('clip-path', `url(#${belowId})`);

    // Grid lines
    svg.append('g').selectAll('line')
      .data(yScale.ticks(4))
      .join('line')
      .attr('x1', MARGIN.left).attr('x2', MARGIN.left + innerW)
      .attr('y1', d => yScale(d)).attr('y2', d => yScale(d))
      .attr('stroke', 'rgba(255,255,255,0.05)')
      .attr('stroke-dasharray', '2,4')
      .attr('stroke-width', 0.5);

    // Y axis labels
    svg.append('g').selectAll('text')
      .data(yScale.ticks(4))
      .join('text')
      .attr('x', MARGIN.left - 6).attr('y', d => yScale(d) + 3)
      .attr('text-anchor', 'end').attr('fill', '#8b8b98')
      .attr('font-size', '8px').attr('font-family', 'inherit')
      .text(d => String(d));

    // X axis labels
    const xTickStep = Math.max(1, Math.ceil(data.length / 10));
    svg.append('g').selectAll('text')
      .data(data.filter((_, i) => i % xTickStep === 0))
      .join('text')
      .attr('x', d => xScale(d.date)!)
      .attr('y', MARGIN.top + innerH + 14)
      .attr('text-anchor', 'middle').attr('fill', '#8b8b98')
      .attr('font-size', '8px').attr('font-family', 'inherit')
      .text(d => { const p = d.date.split('-'); return `${p[2]}/${p[1]}`; });

    const lineGen = d3.line<DifferenceDatum>().x(d => xScale(d.date)!).curve(d3.curveMonotoneX);

    // Target line (dashed)
    svg.append('path').datum(data)
      .attr('d', lineGen.y(d => yScale(d.target))(data))
      .attr('fill', 'none')
      .attr('stroke', 'rgba(255,255,255,0.35)')
      .attr('stroke-width', 1.5)
      .attr('stroke-dasharray', '4,4')
      .attr('stroke-linecap', 'round');

    // Actual line (solid, animated draw)
    const actualPath = svg.append('path').datum(data)
      .attr('d', lineGen.y(d => yScale(d.actual))(data))
      .attr('fill', 'none')
      .attr('stroke', '#818cf8')
      .attr('stroke-width', 2)
      .attr('stroke-linecap', 'round');

    const pathLen = (actualPath.node() as SVGPathElement).getTotalLength();
    actualPath
      .attr('stroke-dasharray', pathLen)
      .attr('stroke-dashoffset', pathLen)
      .transition().duration(900).ease(d3.easeCubicOut)
      .attr('stroke-dashoffset', 0);

    // Tooltip helpers
    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, d: DifferenceDatum) {
      if (!tooltip) return;
      const parts = d.date.split('-');
      const diff = d.actual - d.target;
      const sign = diff >= 0 ? '+' : '';
      const direction = diff >= 0 ? 'fazla' : 'eksik';
      tooltip.innerHTML = `<div style="font-size:11px;font-weight:700;margin-bottom:4px;color:#ececf1">${parts[2]}/${parts[1]}/${parts[0]}</div><div style="font-size:10px;color:#8b8b98">Hedef: <span style="color:#ececf1">${d.target}</span></div><div style="font-size:10px;color:#8b8b98">Gerçek: <span style="color:#ececf1">${d.actual}</span></div><div style="font-size:10px;margin-top:2px;color:${diff >= 0 ? '#34d399' : '#f87171'}">${sign}${diff} (${direction})</div>`;
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.clientX + TOOLTIP_OFFSET}px`;
      tooltip.style.top = `${event.clientY - 75}px`;
    }
    function moveTooltip(event: MouseEvent) {
      if (!tooltip) return;
      tooltip.style.left = `${event.clientX + TOOLTIP_OFFSET}px`;
      tooltip.style.top = `${event.clientY - 75}px`;
    }
    function hideTooltip() { if (tooltip) tooltip.style.display = 'none'; }

    // Invisible hit area for tooltips — overlay rects per data point
    svg.selectAll('.hit-rect')
      .data(data)
      .join('rect')
      .attr('class', 'hit-rect')
      .attr('x', d => (xScale(d.date) ?? 0) - (innerW / data.length) / 2)
      .attr('y', MARGIN.top)
      .attr('width', innerW / data.length)
      .attr('height', innerH)
      .attr('fill', 'transparent')
      .on('mouseenter', function (e, d) {
        const x = xScale(d.date)!;
        svg.append('line').attr('class', 'hover-line')
          .attr('x1', x).attr('x2', x)
          .attr('y1', MARGIN.top).attr('y2', MARGIN.top + innerH)
          .attr('stroke', 'rgba(255,255,255,0.15)').attr('stroke-width', 1)
          .attr('stroke-dasharray', '3,3').attr('pointer-events', 'none');
        showTooltip(e, d);
      })
      .on('mousemove', moveTooltip)
      .on('mouseleave', () => { svg.selectAll('.hover-line').remove(); hideTooltip(); });

    // Legend
    const legendG = svg.append('g').attr('transform', `translate(${MARGIN.left},${dims.height - 4})`);
    [
      { label: 'Hedef', stroke: 'rgba(255,255,255,0.35)', dash: '4,4' },
      { label: 'Gerçek', stroke: '#818cf8', dash: '' },
    ].forEach((item, i) => {
      const x = i * 70;
      legendG.append('line').attr('x1', x).attr('x2', x + 16).attr('y1', 0).attr('y2', 0)
        .attr('stroke', item.stroke).attr('stroke-width', 1.5)
        .attr('stroke-dasharray', item.dash).attr('stroke-linecap', 'round');
      legendG.append('text').attr('x', x + 20).attr('y', 3)
        .attr('fill', '#71717a').attr('font-size', '9px').attr('font-family', 'inherit')
        .text(item.label);
    });

  }, [data, dims]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <svg ref={svgRef} style={{ display: 'block', width: '100%' }} />
      <TooltipPortal><div ref={tooltipRef} style={TOOLTIP_STYLE} /></TooltipPortal>
    </div>
  );
}
