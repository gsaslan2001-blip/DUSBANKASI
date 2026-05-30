
import { useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';

export interface TimeHistogramDatum {
  timeSpent: number; // seconds
}

interface Props {
  data: TimeHistogramDatum[];
  bins?: number;
  height?: number;
}

const MARGIN = { top: 12, right: 16, bottom: 36, left: 48 };

export default function TimeHistogram({
  data,
  bins = 15,
  height = 200,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ width: 0, height });

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const { width: w } = containerRef.current.getBoundingClientRect();
    setDims({ width: w, height });
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
    svg.attr('role', 'img').attr('aria-label', 'Zaman histogramı');
    svg.append('title').text('Zaman histogramı');

    if (data.length < 3) {
      svg
        .attr('width', dims.width)
        .attr('height', dims.height)
        .append('text')
        .attr('x', dims.width / 2)
        .attr('y', dims.height / 2)
        .attr('text-anchor', 'middle')
        .attr('fill', '#8b8b98')
        .attr('font-size', '12px')
        .attr('font-family', 'inherit')
        .text('Yeterli veri yok (en az 3 soru gerekli)');
      return;
    }

    const innerW = dims.width - MARGIN.left - MARGIN.right;
    const innerH = dims.height - MARGIN.top - MARGIN.bottom;

    svg.attr('width', dims.width).attr('height', dims.height);

    const g = svg
      .append('g')
      .attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

    // Define gradient for bars
    const defs = svg.append('defs');
    const gradient = defs
      .append('linearGradient')
      .attr('id', 'histogram-grad')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');

    gradient
      .append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#818cf8')
      .attr('stop-opacity', 0.9);

    gradient
      .append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#6366f1')
      .attr('stop-opacity', 0.55);

    // Build the histogram
    const times = data.map(d => d.timeSpent);
    const xMin = 0;
    const xMax = d3.max(times) || 60;

    const binGenerator = d3
      .bin()
      .domain([xMin, xMax])
      .thresholds(bins);

    const histogramBins = binGenerator(times);

    const maxCount = d3.max(histogramBins.map(b => b.length)) || 1;

    const xScale = d3
      .scaleLinear()
      .domain([xMin, xMax])
      .range([0, innerW])
      .nice();

    const yScale = d3
      .scaleLinear()
      .domain([0, maxCount])
      .range([innerH, 0])
      .nice();

    // Grid lines
    g.append('g')
      .selectAll('line')
      .data(yScale.ticks(4))
      .join('line')
      .attr('x1', 0)
      .attr('x2', innerW)
      .attr('y1', d => yScale(d))
      .attr('y2', d => yScale(d))
      .attr('stroke', 'rgba(255,255,255,0.05)')
      .attr('stroke-dasharray', '2,4');

    // Y axis labels
    g.append('g')
      .selectAll('text')
      .data(yScale.ticks(4))
      .join('text')
      .attr('x', -8)
      .attr('y', d => yScale(d) + 3)
      .attr('text-anchor', 'end')
      .attr('fill', '#8b8b98')
      .attr('font-size', '9px')
      .attr('font-family', 'inherit')
      .text(d => String(d));

    // Y axis title
    g.append('text')
      .attr('x', -42)
      .attr('y', innerH / 2)
      .attr('text-anchor', 'middle')
      .attr('transform', `rotate(-90, -42, ${innerH / 2})`)
      .attr('fill', '#8b8b98')
      .attr('font-size', '9px')
      .attr('font-family', 'inherit')
      .text('Soru Sayısı');

    // X axis title
    g.append('text')
      .attr('x', innerW / 2)
      .attr('y', innerH + 28)
      .attr('text-anchor', 'middle')
      .attr('fill', '#8b8b98')
      .attr('font-size', '9px')
      .attr('font-family', 'inherit')
      .text('Süre (sn)');

    const tooltip = tooltipRef.current;

    function showTooltip(event: MouseEvent, bin: d3.Bin<number, number>) {
      if (!tooltip || !bin.length) return;
      const low = Math.round(bin.x0!);
      const high = Math.round(bin.x1!);
      const count = bin.length;
      const avg =
        bin.reduce((s, v) => s + v, 0) / count;
      tooltip.innerHTML = [
        `<div style="font-size:11px;font-weight:700;margin-bottom:4px;color:#ececf1">${low}-${high} sn: ${count} soru</div>`,
        `<div style="font-size:10px;color:#8b8b98;line-height:1.6">`,
        `Ortalama: ${Math.round(avg)} sn<br/>`,
        `En düşük: ${Math.round(d3.min(bin)!)} sn<br/>`,
        `En yüksek: ${Math.round(d3.max(bin)!)} sn`,
        `</div>`,
      ].join('');
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.clientX + 10}px`;
      tooltip.style.top = `${event.clientY - 70}px`;
    }

    function hideTooltip() {
      if (tooltip) tooltip.style.display = 'none';
    }

    function moveTooltip(event: MouseEvent) {
      if (!tooltip) return;
      tooltip.style.left = `${event.clientX + 10}px`;
      tooltip.style.top = `${event.clientY - 70}px`;
    }

    // Draw bars
    const barWidth =
      xScale(histogramBins[1]?.x0 ?? 0) - xScale(histogramBins[0]?.x0 ?? 0);
    const barGap = Math.max(1, barWidth * 0.1);

    g.selectAll<SVGRectElement, d3.Bin<number, number>>('.histobar')
      .data(histogramBins)
      .join('rect')
      .attr('class', 'histobar')
      .attr('x', d => xScale(d.x0!) + barGap / 2)
      .attr('y', innerH)
      .attr('width', Math.max(1, barWidth - barGap))
      .attr('height', 0)
      .attr('rx', 3)
      .attr('fill', 'url(#histogram-grad)')
      .attr('stroke', 'rgba(129,140,248,0.15)')
      .attr('stroke-width', 0.5)
      .on('mouseenter', function (e: MouseEvent, d) {
        d3.select(this)
          .transition()
          .duration(150)
          .attr('opacity', 1)
          .attr('stroke', 'rgba(255,255,255,0.3)')
          .attr('stroke-width', 1);
        showTooltip(e, d);
      })
      .on('mouseleave', function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('opacity', 0.9)
          .attr('stroke', 'rgba(129,140,248,0.15)')
          .attr('stroke-width', 0.5);
        hideTooltip();
      })
      .on('mousemove', moveTooltip)
      .transition()
      .duration(600)
      .delay((_, i) => i * 10)
      .ease(d3.easeCubicOut)
      .attr('y', d => yScale(d.length))
      .attr('height', d => {
        const h = innerH - yScale(d.length);
        return Math.max(0, d.length > 0 ? h : 0);
      });

    // X axis ticks
    const xTicks = xScale.ticks(6);
    g.append('g')
      .selectAll('text')
      .data(xTicks)
      .join('text')
      .attr('x', d => xScale(d))
      .attr('y', innerH + 14)
      .attr('text-anchor', 'middle')
      .attr('fill', '#8b8b98')
      .attr('font-size', '8px')
      .attr('font-family', 'inherit')
      .text(d => String(d));

    // Summary stats line
    // const mean = d3.mean(times) ?? 0;
    const median = d3.median(times) ?? 0;

    // Dashed median line
    g.append('line')
      .attr('x1', xScale(median))
      .attr('x2', xScale(median))
      .attr('y1', 0)
      .attr('y2', innerH)
      .attr('stroke', '#fbbf24')
      .attr('stroke-width', 1)
      .attr('stroke-dasharray', '3,3')
      .attr('opacity', 0.6);

    g.append('text')
      .attr('x', xScale(median) + 4)
      .attr('y', innerH - 4)
      .attr('fill', '#fbbf24')
      .attr('font-size', '8px')
      .attr('font-family', 'inherit')
      .text(`Medyan: ${Math.round(median)} sn`);
  }, [data, dims, bins]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <svg ref={svgRef} style={{ display: 'block', width: '100%' }} />
      <div
        ref={tooltipRef}
        style={{
          display: 'none',
          position: 'fixed',
          pointerEvents: 'none',
          background: 'rgba(8,8,10,0.95)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '10px',
          padding: '8px 12px',
          zIndex: 100,
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
        }}
      />
    </div>
  );
}
