import { useRef, useEffect, useMemo } from 'react';
import * as d3 from 'd3';

export interface DayCount {
  date: string;
  count: number;
}

interface CountSparklineProps {
  data: DayCount[];
  width?: number;
  height?: number;
  days?: number;
}

export function CountSparkline({ data, width: propWidth, height = 60, days = 30 }: CountSparklineProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const sorted = [...data].sort((a, b) => a.date.localeCompare(b.date));
    return sorted.slice(-days);
  }, [data, days]);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    if (filtered.length < 2) {
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

    const margin = { top: 8, right: 8, bottom: 16, left: 8 };
    const w = (propWidth || containerRef.current?.clientWidth || 300) - margin.left - margin.right;
    const h = height - margin.top - margin.bottom;

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    // Scales
    const xScale = d3.scalePoint()
      .domain(filtered.map(d => d.date))
      .range([0, w])
      .padding(0.5);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(filtered, d => d.count) || 1])
      .range([h, 0])
      .nice();

    // Grid
    g.append('g')
      .attr('class', 'grid')
      .call(d3.axisLeft(yScale).ticks(3).tickSize(-w).tickFormat(() => ''))
      .selectAll('line')
      .attr('stroke', 'rgba(255,255,255,0.04)')
      .attr('stroke-dasharray', '3,3');

    // Area gradient
    const defs = svg.append('defs');
    const gradient = defs.append('linearGradient')
      .attr('id', 'sparkline-gradient')
      .attr('x1', '0%').attr('y1', '0%')
      .attr('x2', '0%').attr('y2', '100%');

    gradient.append('stop').attr('offset', '0%').attr('stop-color', '#6f72f2').attr('stop-opacity', 0.3);
    gradient.append('stop').attr('offset', '100%').attr('stop-color', '#6f72f2').attr('stop-opacity', 0.02);

    // Area
    const areaFn = d3.area<DayCount>()
      .x(d => xScale(d.date)!)
      .y0(h)
      .y1(d => yScale(d.count))
      .curve(d3.curveMonotoneX);

    g.append('path')
      .datum(filtered)
      .attr('d', areaFn)
      .attr('fill', 'url(#sparkline-gradient)');

    // Line
    const lineFn = d3.line<DayCount>()
      .x(d => xScale(d.date)!)
      .y(d => yScale(d.count))
      .curve(d3.curveMonotoneX);

    g.append('path')
      .datum(filtered)
      .attr('d', lineFn)
      .attr('fill', 'none')
      .attr('stroke', '#6f72f2')
      .attr('stroke-width', 2)
      .attr('stroke-linecap', 'round');

    // Dots on data points
    g.selectAll('.dot')
      .data(filtered)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d.date)!)
      .attr('cy', d => yScale(d.count))
      .attr('r', 2.5)
      .attr('fill', '#6f72f2')
      .attr('opacity', 0.6)
      .append('title')
      .text(d => `${d.date}: ${d.count} soru`);

    // Last 7 days date labels
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
    </div>
  );
}
