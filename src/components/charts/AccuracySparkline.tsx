import { memo, useRef, useEffect, useMemo } from 'react';
import * as d3 from 'd3';
import { TOOLTIP_STYLE } from '../../lib/chartUtils';
import { TooltipPortal } from './TooltipPortal';

export interface DayCount {
  date: string;
  count: number;
  correct: number;
}

interface CountSparklineProps {
  data: DayCount[];
  width?: number;
  height?: number;
  days?: number;
}

interface AccuracyPoint {
  date: string;
  count: number;
  correct: number;
  /** Günlük başarı yüzdesi (0-100). Çözüm yoksa null → çizgide boşluk bırakılır. */
  accuracy: number | null;
}

export const CountSparkline = memo(CountSparklineBase);

function CountSparklineBase({ data, width: propWidth, height = 60, days = 30 }: CountSparklineProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo<AccuracyPoint[]>(() => {
    const sorted = [...data].sort((a, b) => a.date.localeCompare(b.date));
    return sorted.slice(-days).map(d => ({
      date: d.date,
      count: d.count,
      correct: d.correct,
      accuracy: d.count > 0 ? (d.correct / d.count) * 100 : null,
    }));
  }, [data, days]);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    // Sadece çözüm yapılan günler bir doğruluk değeri taşır.
    const withData = filtered.filter(d => d.accuracy !== null);
    if (withData.length < 2) {
      svg.append('text')
        .attr('x', '50%')
        .attr('y', '50%')
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em')
        .attr('fill', '#71717a')
        .attr('font-size', 11)
        .text('Yeterli veri yok');
      return;
    }

    const margin = { top: 8, right: 8, bottom: 16, left: 30 };
    const w = (propWidth || containerRef.current?.clientWidth || 300) - margin.left - margin.right;
    const h = height - margin.top - margin.bottom;

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    // Scales — y ekseni sabit 0-100% doğruluk ölçeği
    const xScale = d3.scalePoint()
      .domain(filtered.map(d => d.date))
      .range([0, w])
      .padding(0.5);

    const yScale = d3.scaleLinear()
      .domain([0, 100])
      .range([h, 0]);

    // Grid + yüzde etiketleri
    const yAxis = g.append('g')
      .attr('class', 'grid')
      .call(d3.axisLeft(yScale).tickValues([0, 50, 100]).tickSize(-w).tickFormat(d => `${d}%`));
    yAxis.selectAll('line')
      .attr('stroke', 'rgba(255,255,255,0.04)')
      .attr('stroke-dasharray', '3,3');
    yAxis.selectAll('text')
      .attr('fill', '#71717a')
      .attr('font-size', 9)
      .attr('font-family', 'Satoshi, sans-serif');

    // Area gradient
    const defs = svg.append('defs');
    const gradient = defs.append('linearGradient')
      .attr('id', 'sparkline-gradient')
      .attr('x1', '0%').attr('y1', '0%')
      .attr('x2', '0%').attr('y2', '100%');

    gradient.append('stop').attr('offset', '0%').attr('stop-color', '#6f72f2').attr('stop-opacity', 0.3);
    gradient.append('stop').attr('offset', '100%').attr('stop-color', '#6f72f2').attr('stop-opacity', 0.02);

    const defined = (d: AccuracyPoint) => d.accuracy !== null;

    // Area — çözüm yapılmayan günlerde boşluk bırakır
    const areaFn = d3.area<AccuracyPoint>()
      .defined(defined)
      .x(d => xScale(d.date)!)
      .y0(h)
      .y1(d => yScale(d.accuracy ?? 0))
      .curve(d3.curveMonotoneX);

    g.append('path')
      .datum(filtered)
      .attr('d', areaFn)
      .attr('fill', 'url(#sparkline-gradient)');

    // Line
    const lineFn = d3.line<AccuracyPoint>()
      .defined(defined)
      .x(d => xScale(d.date)!)
      .y(d => yScale(d.accuracy ?? 0))
      .curve(d3.curveMonotoneX);

    g.append('path')
      .datum(filtered)
      .attr('d', lineFn)
      .attr('fill', 'none')
      .attr('stroke', '#6f72f2')
      .attr('stroke-width', 2)
      .attr('stroke-linecap', 'round');

    // Styled floating tooltip (native <title> yerine — anında görünür, gecikmesiz)
    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, d: AccuracyPoint) {
      if (!tooltip) return;
      const parts = d.date.split('-');
      const acc = d.accuracy === null ? '—' : `${Math.round(d.accuracy)}%`;
      tooltip.innerHTML =
        `<div style="font-size:11px;font-weight:700;margin-bottom:4px;color:#ececf1">${parts[2]}/${parts[1]}/${parts[0]}</div>` +
        `<div style="font-size:10px;color:#8b8b98">Başarı: <span style="color:#6f72f2;font-weight:600">${acc}</span> · ${d.correct}/${d.count} doğru</div>`;
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.clientX + 10}px`;
      tooltip.style.top = `${event.clientY - 48}px`;
    }
    function hideTooltip() { if (tooltip) tooltip.style.display = 'none'; }

    // Dots — yalnızca çözüm yapılan günler için
    g.selectAll<SVGCircleElement, AccuracyPoint>('.dot')
      .data(withData)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', d => xScale(d.date)!)
      .attr('cy', d => yScale(d.accuracy ?? 0))
      .attr('r', 3)
      .attr('fill', '#6f72f2')
      .attr('opacity', 0.7)
      .style('cursor', 'pointer')
      .on('mouseenter', function (this: SVGCircleElement, event: MouseEvent, d: AccuracyPoint) {
        d3.select(this).attr('r', 5).attr('opacity', 1);
        showTooltip(event, d);
      })
      .on('mousemove', function (this: SVGCircleElement, event: MouseEvent, d: AccuracyPoint) {
        showTooltip(event, d);
      })
      .on('mouseleave', function (this: SVGCircleElement) {
        d3.select(this).attr('r', 3).attr('opacity', 0.7);
        hideTooltip();
      });

    // Alt eksen tarih etiketleri
    const tickData = filtered.filter((_, i) => {
      const step = Math.max(1, Math.floor(filtered.length / 5));
      return i % step === 0 || i === filtered.length - 1;
    });

    g.append('g')
      .attr('transform', `translate(0,${h})`)
      .call(d3.axisBottom(xScale).tickValues(tickData.map(d => d.date)).tickFormat(d => {
        const parts = d.split('-');
        return `${parts[2]}/${parts[1]}`;
      }))
      .selectAll('text')
      .attr('fill', '#71717a')
      .attr('font-size', 9)
      .attr('font-family', 'Satoshi, sans-serif');

    g.selectAll('.domain').attr('stroke', 'rgba(255,255,255,0.05)');
    g.selectAll('.tick line').attr('stroke', 'rgba(255,255,255,0.05)');
  }, [filtered, propWidth, height]);

  return (
    <div ref={containerRef} className="relative">
      <svg ref={svgRef} width="100%" height={height} />
      <TooltipPortal><div ref={tooltipRef} style={TOOLTIP_STYLE} /></TooltipPortal>
    </div>
  );
}
