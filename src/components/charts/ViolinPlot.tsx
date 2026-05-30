import { useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';

export interface ViolinDatum {
  lesson: string;
  values: number[];
}

interface Props {
  data: ViolinDatum[];
  height?: number;
}

const BASE_COLORS: Record<string, string> = {
  Endodonti: '#38bdf8',
  Protez: '#818cf8',
  Periodontoloji: '#a78bfa',
  Radyoloji: '#fbbf24',
  Patoloji: '#fb7185',
  Histoloji: '#34d399',
  Fizyoloji: '#22d3ee',
  Cerrahi: '#fb923c',
  Biyokimya: '#60a5fa',
  Ortodonti: '#2dd4bf',
  Restoratif: '#facc15',
  Pedodonti: '#f472b6',
  Mikrobiyoloji: '#4ade80',
  Farmakoloji: '#c084fc',
};

function lessonColor(name: string): string {
  return BASE_COLORS[name] ?? '#818cf8';
}

const MARGIN = { top: 12, right: 24, bottom: 48, left: 48 };

interface ViolinStats {
  lesson: string;
  density: { y: number; density: number }[];
  median: number;
  count: number;
  color: string;
}

export default function ViolinPlot({ data, height = 240 }: Props) {
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
    svg.attr('role', 'img').attr('aria-label', 'Keman grafiği — dağılım analizi');
    svg.append('title').text('Keman grafiği — dağılım analizi');

    const validData = data.filter(d => d.values.length >= 3);
    if (validData.length === 0) {
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
        .text('Yeterli veri yok (ders başına en az 3 soru gerekli)');
      return;
    }

    const innerW = dims.width - MARGIN.left - MARGIN.right;
    const innerH = dims.height - MARGIN.top - MARGIN.bottom;

    svg.attr('width', dims.width).attr('height', dims.height);

    const g = svg
      .append('g')
      .attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

    const allValues = validData.flatMap(d => d.values);
    const yMin = d3.min(allValues) ?? 0;
    const yMax = d3.max(allValues) ?? 100;

    const yScale = d3
      .scaleLinear()
      .domain([yMin - 2, yMax + 2])
      .range([innerH, 0])
      .nice();

    const xScale = d3
      .scaleBand<string>()
      .domain(validData.map(d => d.lesson))
      .range([0, innerW])
      .padding(0.4);

    // Grid lines
    g.append('g')
      .selectAll('line')
      .data(yScale.ticks(5))
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
      .data(yScale.ticks(5))
      .join('text')
      .attr('x', -8)
      .attr('y', d => yScale(d) + 3)
      .attr('text-anchor', 'end')
      .attr('fill', '#8b8b98')
      .attr('font-size', '9px')
      .attr('font-family', 'inherit')
      .text(d => `%${d}`);

    // Y axis title
    g.append('text')
      .attr('x', -36)
      .attr('y', innerH / 2)
      .attr('text-anchor', 'middle')
      .attr('transform', `rotate(-90, -36, ${innerH / 2})`)
      .attr('fill', '#8b8b98')
      .attr('font-size', '9px')
      .attr('font-family', 'inherit')
      .text('Doğruluk (%)');

    // Build density data for each lesson
    const binCount = 30;
    const violinStats: ViolinStats[] = validData.map(d => {
      const sorted = [...d.values].sort((a, b) => a - b);
      const median = d3.quantile(sorted, 0.5)!;
      const extent = d3.extent(sorted) as [number, number];
      const binWidth = (extent[1] - extent[0]) / binCount;

      // Build histogram bins
      const bins: { y: number; count: number }[] = [];
      for (let i = 0; i < binCount; i++) {
        const binStart = extent[0] + i * binWidth;
        const binEnd = binStart + binWidth;
        const count = sorted.filter(v => v >= binStart && v < binEnd).length;
        bins.push({ y: binStart + binWidth / 2, count });
      }

      const maxCount = d3.max(bins.map(b => b.count)) || 1;

      const density = bins.map(b => ({
        y: b.y,
        density: b.count / maxCount,
      }));

      return {
        lesson: d.lesson,
        density,
        median,
        count: d.values.length,
        color: lessonColor(d.lesson),
      };
    });

    const tooltip = tooltipRef.current;

    function showTooltip(event: MouseEvent, s: ViolinStats) {
      if (!tooltip) return;
      tooltip.innerHTML = [
        `<div style="font-size:11px;font-weight:700;margin-bottom:4px;color:#ececf1">${s.lesson}</div>`,
        `<div style="font-size:10px;color:#8b8b98;line-height:1.6">`,
        `Medyan: %${Math.round(s.median)}<br/>`,
        `N: ${s.count} soru`,
        `</div>`,
      ].join('');
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.clientX + 10}px`;
      tooltip.style.top = `${event.clientY - 60}px`;
    }

    function hideTooltip() {
      if (tooltip) tooltip.style.display = 'none';
    }

    function moveTooltip(event: MouseEvent) {
      if (!tooltip) return;
      tooltip.style.left = `${event.clientX + 10}px`;
      tooltip.style.top = `${event.clientY - 60}px`;
    }

    const maxDensity = d3.max(violinStats.flatMap(s => s.density.map(d => d.density))) || 1;
    const halfBand = xScale.bandwidth() / 2;

    const densityScaleY = d3.scaleLinear().domain([0, maxDensity]).range([0, halfBand]);

    // Draw violin shapes
    const violinGroups = g
      .selectAll<SVGGElement, ViolinStats>('.violin-group')
      .data(violinStats)
      .join('g')
      .attr('class', 'violin-group')
      .attr('transform', d => `translate(${xScale(d.lesson)! + halfBand},0)`)
      .on('mouseenter', function (e, d) {
        showTooltip(e, d);
      })
      .on('mouseleave', hideTooltip)
      .on('mousemove', moveTooltip);

    // Left half of the violin
    violinGroups
      .append('path')
      .attr('class', 'violin-left')
      .attr('fill', d => d.color)
      .attr('opacity', 0.4)
      .attr('stroke', d => d.color)
      .attr('stroke-width', 1)
      .attr('stroke-opacity', 0.6)
      .attr('d', s => {
        const areaGen = d3
          .area<{ y: number; density: number }>()
          .x0(() => 0)
          .x1(d => -densityScaleY(d.density))
          .y(d => yScale(d.y))
          .curve(d3.curveCatmullRom);
        return areaGen(s.density);
      })
      .attr('transform', 'scale(0.01, 1)')
      .transition()
      .duration(800)
      .delay((_, i) => i * 100)
      .ease(d3.easeCubicOut)
      .attr('transform', 'scale(1, 1)');

    // Right half of the violin (mirror)
    violinGroups
      .append('path')
      .attr('class', 'violin-right')
      .attr('fill', d => d.color)
      .attr('opacity', 0.4)
      .attr('stroke', d => d.color)
      .attr('stroke-width', 1)
      .attr('stroke-opacity', 0.6)
      .attr('d', s => {
        const areaGen = d3
          .area<{ y: number; density: number }>()
          .x0(() => 0)
          .x1(d => densityScaleY(d.density))
          .y(d => yScale(d.y))
          .curve(d3.curveCatmullRom);
        return areaGen(s.density);
      })
      .attr('transform', 'scale(0.01, 1)')
      .transition()
      .duration(800)
      .delay((_, i) => i * 100)
      .ease(d3.easeCubicOut)
      .attr('transform', 'scale(1, 1)');

    // Median tick
    violinGroups
      .append('line')
      .attr('x1', -halfBand * 0.35)
      .attr('x2', halfBand * 0.35)
      .attr('y1', d => yScale(d.median))
      .attr('y2', d => yScale(d.median))
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .attr('opacity', 0)
      .attr('stroke-linecap', 'round')
      .transition()
      .duration(400)
      .delay((_, i) => i * 100 + 600)
      .attr('opacity', 0.9);

    // X axis labels
    g.append('g')
      .selectAll('text')
      .data(validData)
      .join('text')
      .attr('x', d => xScale(d.lesson)! + xScale.bandwidth() / 2)
      .attr('y', innerH + 16)
      .attr('text-anchor', 'middle')
      .attr('fill', '#8b8b98')
      .attr('font-size', '9px')
      .attr('font-weight', '600')
      .attr('font-family', 'inherit')
      .text(d => d.lesson);

    // Count labels
    g.append('g')
      .selectAll('text')
      .data(validData)
      .join('text')
      .attr('x', d => xScale(d.lesson)! + xScale.bandwidth() / 2)
      .attr('y', innerH + 30)
      .attr('text-anchor', 'middle')
      .attr('fill', '#71717a')
      .attr('font-size', '8px')
      .attr('font-family', 'inherit')
      .text(d => `n=${d.values.length}`);
  }, [data, dims]);

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
