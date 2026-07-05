/**
 * Recommendation Priority Chart — Ders öncelik lollipop chart
 */
import { memo, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

interface Props {
  items: { lesson: string; priority: number; reason: string }[];
  height?: number;
}

export default memo(RecommendationPriorityChart);

function RecommendationPriorityChart({ items, height }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(400);
  const h = height ?? Math.max(140, items.length * 36);

  useEffect(() => {
    const obs = new ResizeObserver(entries => {
      setW(entries[0]?.contentRect.width ?? 400);
    });
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || w <= 0 || items.length === 0) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 8, right: 16, bottom: 8, left: 120 };
    const innerW = w - margin.left - margin.right;
    const innerH = h - margin.top - margin.bottom;

    const sorted = [...items].sort((a, b) => b.priority - a.priority);
    const y = d3.scaleBand().domain(sorted.map(d => d.lesson)).range([0, innerH]).padding(0.25);
    const x = d3.scaleLinear().domain([0, d3.max(sorted, d => d.priority) ?? 10]).range([0, innerW]);

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    // Lollipop sticks
    g.selectAll('line').data(sorted).join('line')
      .attr('x1', 0).attr('x2', d => x(d.priority))
      .attr('y1', d => y(d.lesson)! + y.bandwidth() / 2)
      .attr('y2', d => y(d.lesson)! + y.bandwidth() / 2)
      .attr('stroke', 'rgba(255,255,255,0.08)').attr('stroke-width', 1.5);

    // Lollipop heads
    g.selectAll('circle').data(sorted).join('circle')
      .attr('cx', d => x(d.priority)).attr('cy', d => y(d.lesson)! + y.bandwidth() / 2)
      .attr('r', 5.5)
      .attr('fill', d => d.priority >= 8 ? '#f87171' : d.priority >= 5 ? '#fbbf24' : '#818cf8');

    // Priority values
    g.selectAll('.pval').data(sorted).join('text')
      .attr('class', 'pval')
      .attr('x', d => x(d.priority) + 8).attr('y', d => y(d.lesson)! + y.bandwidth() / 2 + 4)
      .attr('fill', '#ececf1').attr('font-size', 11).attr('font-weight', 700)
      .text(d => d.priority);

    // Lesson labels
    g.selectAll('.llbl').data(sorted).join('text')
      .attr('class', 'llbl')
      .attr('x', -8).attr('y', d => y(d.lesson)! + y.bandwidth() / 2 + 4)
      .attr('text-anchor', 'end').attr('fill', '#8b8b98').attr('font-size', 11)
      .text(d => d.lesson.length > 18 ? d.lesson.slice(0, 17) + '…' : d.lesson);

    // Reason tooltips as subtle text
    g.selectAll('.reason').data(sorted).join('text')
      .attr('class', 'reason')
      .attr('x', d => x(d.priority) + 28).attr('y', d => y(d.lesson)! + y.bandwidth() / 2 + 4)
      .attr('fill', '#8b8b9860').attr('font-size', 9)
      .text(d => d.reason);

  }, [items, w, h]);

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <svg ref={svgRef} width={w} height={h} />
    </div>
  );
}
