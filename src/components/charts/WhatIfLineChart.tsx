/**
 * What-If Line Chart — "Günde X soru çözersem DUS'ta nerede olurum?" simülasyonu
 */
import { memo, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

interface Props {
  baseline: { day: number; cumulative: number }[];
  scenarios: { label: string; dailyRate: number; data: { day: number; cumulative: number }[] }[];
  height?: number;
}

export default memo(WhatIfLineChart);

function WhatIfLineChart({ baseline, scenarios, height = 200 }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(400);

  useEffect(() => {
    const obs = new ResizeObserver(entries => {
      setW(entries[0]?.contentRect.width ?? 400);
    });
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || w <= 0 || baseline.length === 0) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 16, right: 24, bottom: 28, left: 44 };
    const innerW = w - margin.left - margin.right;
    const innerH = height - margin.top - margin.bottom;

    const allData = [baseline, ...scenarios.map(s => s.data)];
    const maxVal = d3.max(allData.flatMap(d => d), d => d.cumulative) ?? 10000;

    const x = d3.scaleLinear().domain([0, d3.max(baseline, d => d.day) ?? 120]).range([0, innerW]);
    const y = d3.scaleLinear().domain([0, maxVal * 1.05]).range([innerH, 0]);

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    // Grid
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-innerW).tickFormat(() => ''))
      .selectAll('line').attr('stroke', 'rgba(255,255,255,0.04)');
    g.selectAll('.domain').attr('stroke', 'rgba(255,255,255,0.05)');

    const colors = ['#818cf8', '#34d399', '#fbbf24', '#f87171', '#a78bfa'];
    const allLines = [{ label: 'Mevcut Hız', data: baseline, color: '#8b8b98', dashed: true }, ...scenarios.map((s, i) => ({
      label: s.label, data: s.data, color: colors[i % colors.length], dashed: false,
    }))];

    for (const line of allLines) {
      const path = d3.line<{ day: number; cumulative: number }>()
        .x(d => x(d.day)).y(d => y(d.cumulative)).curve(d3.curveMonotoneX);

      g.append('path').datum(line.data).attr('d', path)
        .attr('fill', 'none').attr('stroke', line.color)
        .attr('stroke-width', line.dashed ? 1.5 : 2.5)
        .attr('stroke-dasharray', line.dashed ? '5 4' : '0')
        .attr('stroke-linecap', 'round');
    }

    // Legend
    const legendG = g.append('g').attr('transform', `translate(4, 4)`);
    allLines.forEach((l, i) => {
      const lg = legendG.append('g').attr('transform', `translate(0, ${i * 16})`);
      lg.append('line').attr('x1', 0).attr('x2', 14).attr('y1', 0).attr('y2', 0)
        .attr('stroke', l.color).attr('stroke-width', 2).attr('stroke-dasharray', l.dashed ? '5 4' : '0');
      lg.append('text').attr('x', 18).attr('y', 3)
        .attr('fill', l.color).attr('font-size', 10).text(l.label);
    });

    // X axis
    g.append('g').attr('transform', `translate(0,${innerH})`)
      .call(d3.axisBottom(x).ticks(6).tickFormat(d => `${d}g`))
      .selectAll('text').attr('fill', '#8b8b98').attr('font-size', 9);
    g.selectAll('.domain').attr('stroke', 'rgba(255,255,255,0.05)');

    // Y axis
    g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(0).tickFormat(d => `${(d as number / 1000).toFixed(0)}k`))
      .selectAll('text').attr('fill', '#8b8b98').attr('font-size', 9);
  }, [baseline, scenarios, w, height]);

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <svg ref={svgRef} width={w} height={height} />
    </div>
  );
}
