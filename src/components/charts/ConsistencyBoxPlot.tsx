
import { useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';

export interface BoxPlotDatum {
  lesson: string;
  values: number[];
}

interface Props {
  data: BoxPlotDatum[];
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

interface BoxStats {
  lesson: string;
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
  iqr: number;
  lowerFence: number;
  upperFence: number;
  outliers: number[];
  color: string;
  values: number[];
}

export default function ConsistencyBoxPlot({ data, height = 240 }: Props) {
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
    svg.attr('role', 'img').attr('aria-label', 'Kutu grafiği — tutarlılık analizi');
    svg.append('title').text('Kutu grafiği — tutarlılık analizi');

    const validData = data.filter(d => d.values.length > 0);
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
        .text('Yeterli veri yok');
      return;
    }

    const innerW = dims.width - MARGIN.left - MARGIN.right;
    const innerH = dims.height - MARGIN.top - MARGIN.bottom;

    svg.attr('width', dims.width).attr('height', dims.height);

    const g = svg
      .append('g')
      .attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

    const allValues = validData.flatMap(d => d.values);
    const globalMin = d3.min(allValues) ?? 0;
    const globalMax = d3.max(allValues) ?? 100;

    const yScale = d3
      .scaleLinear()
      .domain([globalMin - 2, globalMax + 2])
      .range([innerH, 0])
      .nice();

    const xScale = d3
      .scaleBand<string>()
      .domain(validData.map(d => d.lesson))
      .range([0, innerW])
      .padding(0.35);

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

    const boxStats: BoxStats[] = validData.map(d => {
      const sorted = [...d.values].sort((a, b) => a - b);
      const q1 = d3.quantile(sorted, 0.25)!;
      const median = d3.quantile(sorted, 0.5)!;
      const q3 = d3.quantile(sorted, 0.75)!;
      const iqr = q3 - q1;
      const lowerFence = q1 - 1.5 * iqr;
      const upperFence = q3 + 1.5 * iqr;
      const min = d3.min(sorted)!;
      const max = d3.max(sorted)!;
      const outliers = sorted.filter(v => v < lowerFence || v > upperFence);
      return {
        lesson: d.lesson,
        min,
        q1,
        median,
        q3,
        max,
        iqr,
        lowerFence,
        upperFence,
        outliers,
        color: lessonColor(d.lesson),
        values: d.values,
      };
    });

    const tooltip = tooltipRef.current;

    function showTooltip(event: MouseEvent, s: BoxStats) {
      if (!tooltip) return;
      tooltip.innerHTML = [
        `<div style="font-size:11px;font-weight:700;margin-bottom:4px;color:#ececf1">${s.lesson}</div>`,
        `<div style="font-size:10px;color:#8b8b98;line-height:1.6">`,
        `Medyan: %${Math.round(s.median)}<br/>`,
        `Ç1: %${Math.round(s.q1)}<br/>`,
        `Ç3: %${Math.round(s.q3)}<br/>`,
        `Aralık: %${Math.round(s.min)}-%${Math.round(s.max)}<br/>`,
        `IQR: %${Math.round(s.iqr)}`,
        `</div>`,
      ].join('');
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.clientX + 10}px`;
      tooltip.style.top = `${event.clientY - 80}px`;
    }

    function hideTooltip() {
      if (tooltip) tooltip.style.display = 'none';
    }

    function moveTooltip(event: MouseEvent) {
      if (!tooltip) return;
      tooltip.style.left = `${event.clientX + 10}px`;
      tooltip.style.top = `${event.clientY - 80}px`;
    }

    const boxWidth = xScale.bandwidth() * 0.7;
    const boxCenter = (xScale.bandwidth() - boxWidth) / 2;

    // Draw the boxes
    const boxGroups = g
      .selectAll<SVGGElement, BoxStats>('.box-group')
      .data(boxStats)
      .join('g')
      .attr('class', 'box-group')
      .attr('transform', d => `translate(${xScale(d.lesson)! + boxCenter},0)`)
      .on('mouseenter', function (e, d) {
        showTooltip(e, d);
      })
      .on('mouseleave', hideTooltip)
      .on('mousemove', moveTooltip);

    // IQR box (grow from 0 height)
    boxGroups
      .append('rect')
      .attr('x', 0)
      .attr('y', d => yScale(d.q3))
      .attr('width', boxWidth)
      .attr('height', 0)
      .attr('rx', 2)
      .attr('fill', d => d.color)
      .attr('opacity', 0.35)
      .transition()
      .duration(800)
      .delay((_, i) => i * 80)
      .ease(d3.easeCubicOut)
      .attr('y', d => yScale(d.q3))
      .attr('height', d => Math.max(1, yScale(d.q1) - yScale(d.q3)));

    // Median line
    boxGroups
      .append('line')
      .attr('x1', 0)
      .attr('x2', boxWidth)
      .attr('y1', d => yScale(d.median))
      .attr('y2', d => yScale(d.median))
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .attr('opacity', 0.9)
      .attr('stroke-linecap', 'round');

    // Upper whisker
    boxGroups
      .append('line')
      .attr('x1', boxWidth / 2)
      .attr('x2', boxWidth / 2)
      .attr('y1', d => yScale(d.q3))
      .attr('y2', d => yScale(d.q3))
      .attr('stroke', d => d.color)
      .attr('stroke-width', 1.5)
      .attr('opacity', 0.8)
      .transition()
      .duration(600)
      .delay((_, i) => i * 80 + 400)
      .ease(d3.easeCubicOut)
      .attr('y2', d => {
        const whiskerMax = d.values.filter(v => v <= d.upperFence);
        const top = whiskerMax.length > 0 ? d3.max(whiskerMax)! : d.q3;
        return yScale(top);
      });

    // Lower whisker
    boxGroups
      .append('line')
      .attr('x1', boxWidth / 2)
      .attr('x2', boxWidth / 2)
      .attr('y1', d => yScale(d.q1))
      .attr('y2', d => yScale(d.q1))
      .attr('stroke', d => d.color)
      .attr('stroke-width', 1.5)
      .attr('opacity', 0.8)
      .transition()
      .duration(600)
      .delay((_, i) => i * 80 + 400)
      .ease(d3.easeCubicOut)
      .attr('y2', d => {
        const whiskerMin = d.values.filter(v => v >= d.lowerFence);
        const bottom = whiskerMin.length > 0 ? d3.min(whiskerMin)! : d.q1;
        return yScale(bottom);
      });

    // Whisker caps
    boxGroups
      .append('line')
      .attr('class', 'whisker-cap-top')
      .attr('x1', boxWidth * 0.2)
      .attr('x2', boxWidth * 0.8)
      .attr('y1', d => yScale(d.q3))
      .attr('y2', d => yScale(d.q3))
      .attr('stroke', d => d.color)
      .attr('stroke-width', 1.5)
      .attr('opacity', 0.6)
      .transition()
      .duration(600)
      .delay((_, i) => i * 80 + 400)
      .ease(d3.easeCubicOut)
      .attr('y1', d => {
        const whiskerMax = d.values.filter(v => v <= d.upperFence);
        const top = whiskerMax.length > 0 ? d3.max(whiskerMax)! : d.q3;
        return yScale(top);
      })
      .attr('y2', d => {
        const whiskerMax = d.values.filter(v => v <= d.upperFence);
        const top = whiskerMax.length > 0 ? d3.max(whiskerMax)! : d.q3;
        return yScale(top);
      });

    boxGroups
      .append('line')
      .attr('class', 'whisker-cap-bottom')
      .attr('x1', boxWidth * 0.2)
      .attr('x2', boxWidth * 0.8)
      .attr('y1', d => yScale(d.q1))
      .attr('y2', d => yScale(d.q1))
      .attr('stroke', d => d.color)
      .attr('stroke-width', 1.5)
      .attr('opacity', 0.6)
      .transition()
      .duration(600)
      .delay((_, i) => i * 80 + 400)
      .ease(d3.easeCubicOut)
      .attr('y1', d => {
        const whiskerMin = d.values.filter(v => v >= d.lowerFence);
        const bottom = whiskerMin.length > 0 ? d3.min(whiskerMin)! : d.q1;
        return yScale(bottom);
      })
      .attr('y2', d => {
        const whiskerMin = d.values.filter(v => v >= d.lowerFence);
        const bottom = whiskerMin.length > 0 ? d3.min(whiskerMin)! : d.q1;
        return yScale(bottom);
      });

    // Outliers (dots)
    boxStats.forEach((s, i) => {
      if (s.outliers.length === 0) return;
      boxGroups
        .filter(d => d.lesson === s.lesson)
        .selectAll('.outlier')
        .data(s.outliers)
        .join('circle')
        .attr('class', 'outlier')
        .attr('cx', boxWidth / 2 + (Math.random() - 0.5) * boxWidth * 0.5)
        .attr('cy', d => yScale(d))
        .attr('r', 0)
        .attr('fill', s.color)
        .attr('opacity', 0.8)
        .attr('stroke', 'rgba(8,8,10,0.6)')
        .attr('stroke-width', 0.5)
        .transition()
        .duration(400)
        .delay(i * 80 + 600)
        .ease(d3.easeCubicOut)
        .attr('r', 3);
    });

    // X axis labels
    g.append('g')
      .selectAll('text')
      .data(validData)
      .join('text')
      .attr(
        'x',
        d => xScale(d.lesson)! + xScale.bandwidth() / 2,
      )
      .attr('y', innerH + 16)
      .attr('text-anchor', 'middle')
      .attr('fill', '#8b8b98')
      .attr('font-size', '9px')
      .attr('font-weight', '600')
      .attr('font-family', 'inherit')
      .text(d => d.lesson);

    // Sample size labels
    g.append('g')
      .selectAll('text')
      .data(validData)
      .join('text')
      .attr(
        'x',
        d => xScale(d.lesson)! + xScale.bandwidth() / 2,
      )
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
