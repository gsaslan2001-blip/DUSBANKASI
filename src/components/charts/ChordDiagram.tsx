import { useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';

interface Props {
  matrix: number[][];
  labels: string[];
  size?: number;
  colors?: string[];
}

const DEFAULT_COLORS = ['#38bdf8', '#818cf8', '#a78bfa', '#fbbf24', '#fb7185', '#34d399', '#22d3ee', '#fb923c', '#60a5fa', '#2dd4bf', '#facc15', '#f472b6', '#4ade80', '#c084fc'];

const TOOLTIP_OFFSET = 10;

export default function ChordDiagram({ matrix, labels, size = 350, colors }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [svgSize, setSvgSize] = useState(size);

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.getBoundingClientRect().width;
    setSvgSize(Math.min(w, size));
  }, [size]);

  useEffect(() => {
    measure();
    const obs = new ResizeObserver(debounce(() => measure(), 150));
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [measure]);

  useEffect(() => {
    if (!svgRef.current || labels.length < 2 || svgSize === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('role', 'img').attr('aria-label', 'Akor diyagramı — ders bağlantıları');
    svg.append('title').text('Akor diyagramı — ders bağlantıları');

    const sz = svgSize;
    const innerR = sz * 0.36;
    const outerR = sz * 0.46;
    const cx = sz / 2;
    const cy = sz / 2;

    svg.attr('width', sz).attr('height', sz).attr('viewBox', `0 0 ${sz} ${sz}`);

    const g = svg.append('g').attr('transform', `translate(${cx},${cy})`);

    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, source: string, target: string, value: number) {
      if (!tooltip) return;
      tooltip.innerHTML = `<div style="font-weight:700;font-size:11px;color:#ececf1;margin-bottom:2px">${source} ↔ ${target}</div><span style="font-size:10px;color:#8b8b98">${value} birlikte çalışma</span>`;
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.clientX + TOOLTIP_OFFSET}px`;
      tooltip.style.top = `${event.clientY - 44}px`;
    }
    function hideTooltip() { if (tooltip) tooltip.style.display = 'none'; }
    function moveTooltip(event: MouseEvent) {
      if (!tooltip) return;
      tooltip.style.left = `${event.clientX + TOOLTIP_OFFSET}px`;
      tooltip.style.top = `${event.clientY - 44}px`;
    }

    const n = labels.length;
    const totalPerLabel = labels.map((_, i) => d3.sum(matrix[i]) || 1);

    // Outer arc segments
    const arcGen = d3.arc<d3.PieArcDatum<{ index: number; value: number }>>()
      .innerRadius(innerR).outerRadius(outerR);

    const pieData = labels.map((_, i) => ({ index: i, value: totalPerLabel[i] }));
    const pie = d3.pie<{ index: number; value: number }>().sort(null).value(d => d.value)(pieData);

    const colorScale = (i: number) => (colors ?? DEFAULT_COLORS)[i % (colors ?? DEFAULT_COLORS).length];

    // Outer ring
    g.selectAll('.arc-outer').data(pie).join('path')
      .attr('class', 'arc-outer')
      .attr('d', arcGen)
      .attr('fill', d => colorScale(d.data.index))
      .attr('stroke', 'rgba(8,8,10,0.8)').attr('stroke-width', 1)
      .attr('opacity', 0)
      .transition().duration(600).delay((_, i) => i * 60)
      .attr('opacity', 0.8);

    // Labels on outer ring
    g.selectAll('.arc-label').data(pie).join('text')
      .attr('class', 'arc-label')
      .attr('transform', d => {
        const mid = (d.startAngle + d.endAngle) / 2;
        const r2 = outerR + 16;
        return `translate(${Math.sin(mid) * r2},${-Math.cos(mid) * r2})`;
      })
      .attr('text-anchor', d => ((d.startAngle + d.endAngle) / 2) > Math.PI ? 'end' : 'start')
      .attr('dominant-baseline', 'central')
      .attr('fill', '#c4c4d0').attr('font-size', '9px').attr('font-weight', '600')
      .attr('font-family', 'inherit')
      .text(d => labels[d.data.index].length > 10 ? labels[d.data.index].slice(0, 9) + '…' : labels[d.data.index])
      .attr('opacity', 0)
      .transition().delay(600).duration(400)
      .attr('opacity', 0.8);

    // Inner chords
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const val = matrix[i][j] + matrix[j][i];
        if (val <= 0) continue;

        const si = pie[i];
        const sj = pie[j];
        const angleI1 = si.startAngle + (si.endAngle - si.startAngle) * 0.35;
        const angleI2 = si.startAngle + (si.endAngle - si.startAngle) * 0.65;
        const angleJ1 = sj.startAngle + (sj.endAngle - sj.startAngle) * 0.35;
        const angleJ2 = sj.startAngle + (sj.endAngle - sj.startAngle) * 0.65;

        const srcCP = innerR * 0.6;
        const path = [
          `M ${Math.sin(angleI1) * innerR} ${-Math.cos(angleI1) * innerR}`,
          `C ${Math.sin(angleI1) * srcCP} ${-Math.cos(angleI1) * srcCP}`,
          `${Math.sin(angleJ1) * srcCP} ${-Math.cos(angleJ1) * srcCP}`,
          `${Math.sin(angleJ1) * innerR} ${-Math.cos(angleJ1) * innerR}`,
          `L ${Math.sin(angleJ2) * innerR} ${-Math.cos(angleJ2) * innerR}`,
          `C ${Math.sin(angleJ2) * srcCP} ${-Math.cos(angleJ2) * srcCP}`,
          `${Math.sin(angleI2) * srcCP} ${-Math.cos(angleI2) * srcCP}`,
          `${Math.sin(angleI2) * innerR} ${-Math.cos(angleI2) * innerR}`,
          'Z',
        ].join(' ');

        g.append('path').attr('d', path)
          .attr('fill', colorScale(i)).attr('opacity', 0)
          .attr('stroke', 'rgba(8,8,10,0.6)').attr('stroke-width', 0.5)
          .on('mouseenter', (e) => showTooltip(e, labels[i], labels[j], val))
          .on('mouseleave', hideTooltip)
          .on('mousemove', (e) => moveTooltip(e))
          .transition().duration(600).delay(200 + (i + j) * 40)
          .attr('opacity', 0.25);
      }
    }

  }, [matrix, labels, svgSize, colors]);

  if (labels.length < 2) {
    return (
      <div ref={containerRef} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 200 }}>
        <span style={{ color: '#8b8b98', fontSize: '12px' }}>En az 2 ders gerekli</span>
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <svg ref={svgRef} style={{ display: 'block' }} />
      <div ref={tooltipRef} style={{ display: 'none', position: 'fixed', pointerEvents: 'none', background: 'rgba(8,8,10,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '8px 12px', zIndex: 100, backdropFilter: 'blur(12px)', boxShadow: '0 8px 24px rgba(0,0,0,0.6)' }} />
    </div>
  );
}
