/**
 * Exam Timeline Chart — Deneme skorlarının zaman içindeki ilerlemesi
 */
import { memo, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

interface Props {
  data: { date: string; score: number; label: string }[];
  bestScore: number;
  avgScore: number;
  trend: 'up' | 'down' | 'flat';
  height?: number;
}

export default memo(ExamTimelineChart);

function ExamTimelineChart({ data, bestScore, avgScore, trend, height = 200 }: Props) {
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
    if (!svgRef.current || w <= 0 || data.length === 0) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 16, right: 24, bottom: 36, left: 40 };
    const innerW = w - margin.left - margin.right;
    const innerH = height - margin.top - margin.bottom;

    const scores = data.map(d => d.score);
    const yMin = Math.max(0, Math.min(...scores) - 10);
    const yMax = Math.min(100, Math.max(...scores) + 10);

    const x = d3.scalePoint().domain(data.map(d => d.label)).range([0, innerW]).padding(0.5);
    const y = d3.scaleLinear().domain([yMin, yMax]).range([innerH, 0]);

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    // Average line
    g.append('line')
      .attr('x1', 0).attr('x2', innerW)
      .attr('y1', y(avgScore)).attr('y2', y(avgScore))
      .attr('stroke', '#8b8b98').attr('stroke-width', 1)
      .attr('stroke-dasharray', '4 3').attr('opacity', 0.4);
    g.append('text').attr('x', innerW).attr('y', y(avgScore) - 4)
      .attr('text-anchor', 'end').attr('fill', '#8b8b98').attr('font-size', 10)
      .text(`ort. ${avgScore}`);

    // Line
    const line = d3.line<typeof data[0]>()
      .x(d => x(d.label)!).y(d => y(d.score))
      .curve(d3.curveMonotoneX);
    g.append('path').datum(data).attr('d', line)
      .attr('fill', 'none').attr('stroke', '#818cf8')
      .attr('stroke-width', 2.5).attr('stroke-linecap', 'round');

    // Area
    const area = d3.area<typeof data[0]>()
      .x(d => x(d.label)!).y0(innerH).y1(d => y(d.score))
      .curve(d3.curveMonotoneX);
    g.append('path').datum(data).attr('d', area)
      .attr('fill', 'url(#examGrad)').attr('opacity', 0.15);

    // Gradient
    const grad = svg.append('defs').append('linearGradient')
      .attr('id', 'examGrad').attr('x1', 0).attr('x2', 0).attr('y1', 0).attr('y2', 1);
    grad.append('stop').attr('offset', '0%').attr('stop-color', '#818cf8');
    grad.append('stop').attr('offset', '100%').attr('stop-color', '#818cf8').attr('stop-opacity', 0);

    // Dots
    g.selectAll('circle').data(data).join('circle')
      .attr('cx', d => x(d.label)!).attr('cy', d => y(d.score)).attr('r', 4)
      .attr('fill', d => d.score === bestScore ? '#fbbf24' : '#818cf8')
      .attr('stroke', '#0d0d12').attr('stroke-width', 1.5);

    // Best score annotation
    const best = data.find(d => d.score === bestScore);
    if (best) {
      g.append('text').attr('x', x(best.label)!).attr('y', y(best.score) - 10)
        .attr('text-anchor', 'middle').attr('fill', '#fbbf24')
        .attr('font-size', 10).attr('font-weight', 700).text(`En iyi: ${bestScore}`);
    }

    // Y axis
    g.append('g').call(d3.axisLeft(y).ticks(4).tickSize(0))
      .selectAll('text').attr('fill', '#8b8b98').attr('font-size', 9);
    g.selectAll('.domain').attr('stroke', 'rgba(255,255,255,0.05)');

    // X axis
    g.append('g').attr('transform', `translate(0,${innerH})`)
      .call(d3.axisBottom(x).tickSize(0))
      .selectAll('text').attr('fill', '#8b8b98').attr('font-size', 9)
      .attr('transform', 'rotate(-25)').attr('text-anchor', 'end');
    g.selectAll('.domain').attr('stroke', 'rgba(255,255,255,0.05)');

    // Trend indicator
    const trendEmoji = trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→';
    const trendColor = trend === 'up' ? '#34d399' : trend === 'down' ? '#f87171' : '#8b8b98';
    g.append('text').attr('x', 4).attr('y', 14)
      .attr('fill', trendColor).attr('font-size', 14).attr('font-weight', 700)
      .text(`${trendEmoji} ${trend === 'up' ? 'Yükseliş' : trend === 'down' ? 'Düşüş' : 'Sabit'}`);
  }, [data, w, height, bestScore, avgScore, trend]);

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <svg ref={svgRef} width={w} height={height} />
    </div>
  );
}
