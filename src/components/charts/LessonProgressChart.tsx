import { useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';

export interface LessonProgressDatum {
  lesson: string;
  progress: number;
  accuracy?: number;
  solved?: number;
  total?: number;
}

interface Props {
  data: LessonProgressDatum[];
}

const BAR_H = 26;
const GAP = 6;
const MARGIN = { top: 4, right: 48, bottom: 4, left: 100 };

export default function LessonProgressChart({ data }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState(600);

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    setWidth(containerRef.current.getBoundingClientRect().width);
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
    svg.attr('role', 'img').attr('aria-label', 'Ders ilerleme grafiği');
    svg.append('title').text('Ders ilerleme grafiği');

    const totalH = data.length * (BAR_H + GAP) + MARGIN.top + MARGIN.bottom;
    const innerW = width - MARGIN.left - MARGIN.right;

    const defs = svg.append('defs');
    defs.append('linearGradient').attr('id', 'bar-grad').attr('x1', '0%').attr('y1', '0%').attr('x2', '100%').attr('y2', '0%')
      .selectAll('stop').data([{ o: '0%', c: '#6f72f2' }, { o: '100%', c: '#8b95f6' }]).join('stop')
      .attr('offset', d => d.o).attr('stop-color', d => d.c).attr('stop-opacity', 0.85);
    defs.append('linearGradient').attr('id', 'bar-grad-high').attr('x1', '0%').attr('y1', '0%').attr('x2', '100%').attr('y2', '0%')
      .selectAll('stop').data([{ o: '0%', c: '#34d399' }, { o: '100%', c: '#6ee7b7' }]).join('stop')
      .attr('offset', d => d.o).attr('stop-color', d => d.c).attr('stop-opacity', 0.85);

    svg.attr('width', width).attr('height', totalH)
      .attr('viewBox', `0 0 ${width} ${totalH}`).attr('preserveAspectRatio', 'xMidYMin meet')
      .style('width', '100%').style('height', `${totalH}px`);

    const g = svg.append('g').attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

    // Background tracks
    g.selectAll('.track').data(data).join('rect')
      .attr('class', 'track').attr('x', 0).attr('y', (_, i) => i * (BAR_H + GAP))
      .attr('width', innerW).attr('height', BAR_H).attr('rx', 6)
      .attr('fill', 'rgba(255,255,255,0.03)');

    // Progress bars (animated)
    g.selectAll('.bar').data(data).join('rect')
      .attr('class', 'bar').attr('x', 0).attr('y', (_, i) => i * (BAR_H + GAP))
      .attr('width', 0).attr('height', BAR_H).attr('rx', 6)
      .attr('fill', d => d.progress >= 80 ? 'url(#bar-grad-high)' : 'url(#bar-grad)')
      .transition().duration(800).delay((_, i) => i * 60).ease(d3.easeCubicOut)
      .attr('width', d => (d.progress / 100) * innerW);

    // Left labels
    g.selectAll('.lbl').data(data).join('text')
      .attr('x', -8).attr('y', (_, i) => i * (BAR_H + GAP) + BAR_H / 2 + 4)
      .attr('text-anchor', 'end').attr('fill', '#8b8b98')
      .attr('font-size', '10px').attr('font-weight', '600').attr('font-family', 'inherit')
      .text(d => d.lesson);

    // Right percentages
    g.selectAll('.pct').data(data).join('text')
      .attr('x', innerW + 6).attr('y', (_, i) => i * (BAR_H + GAP) + BAR_H / 2 + 4)
      .attr('text-anchor', 'start')
      .attr('fill', d => d.progress >= 80 ? '#34d399' : '#8b8b98')
      .attr('font-size', '10px').attr('font-weight', '700').attr('font-family', 'inherit')
      .text(d => `%${d.progress}`);

    // Solved/total labels inside bars
    g.selectAll('.inner').data(data.filter(d => d.progress > 18 && d.solved != null)).join('text')
      .attr('x', d => (d.progress / 100) * innerW - 6).attr('y', (_, i) => i * (BAR_H + GAP) + BAR_H / 2 + 4)
      .attr('text-anchor', 'end').attr('fill', '#fff')
      .attr('font-size', '9px').attr('font-weight', '700').attr('font-family', 'inherit').attr('opacity', 0.9)
      .text(d => `${d.solved}/${d.total}`);
  }, [data, width]);

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <svg ref={svgRef} style={{ display: 'block', width: '100%' }} />
    </div>
  );
}
