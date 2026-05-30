import { useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';

export interface BulletDatum {
  label: string;
  value: number;
  target: number;
  max: number;
}

interface Props {
  data: BulletDatum[];
  height?: number;
}

const ROW_H = 36;
const MARGIN = { top: 8, right: 16, bottom: 4, left: 100 };
const TOOLTIP_OFFSET = 10;

export default function BulletChart({ data, height }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ width: 0, height: 0 });

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const { width } = containerRef.current.getBoundingClientRect();
    setDims({ width, height: height ?? data.length * (ROW_H + 12) + MARGIN.top + MARGIN.bottom });
  }, [height, data.length]);

  useEffect(() => {
    measure();
    const obs = new ResizeObserver(debounce(() => measure(), 150));
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [measure]);

  useEffect(() => {
    if (!svgRef.current || dims.width === 0 || data.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('role', 'img').attr('aria-label', 'Mertebe grafiği — hedef vs gerçek');
    svg.append('title').text('Mertebe grafiği — hedef vs gerçek');

    const { width, height: h } = dims;
    svg.attr('width', width).attr('height', h);

    const g = svg.append('g').attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

    const globalMax = d3.max(data, d => d.max) || 100;
    const innerW = width - MARGIN.left - MARGIN.right;

    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, d: BulletDatum) {
      if (!tooltip) return;
      const pct = Math.round((d.value / d.target) * 100);
      tooltip.innerHTML = `<div style="font-weight:700;font-size:11px;color:#ececf1;margin-bottom:2px">${d.label}</div><span style="font-size:10px;color:#8b8b98">Gerçek: ${d.value} · Hedef: ${d.target} (%${pct})</span>`;
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

    data.forEach((d, i) => {
      const y = i * (ROW_H + 12);
      const barH = ROW_H * 0.55;
      const barY = y + (ROW_H - barH) / 2;

      // Performance bands
      const bands = [
        { from: 0, to: d.target * 0.6, color: 'rgba(255,255,255,0.03)' },
        { from: d.target * 0.6, to: d.target * 0.9, color: 'rgba(255,255,255,0.05)' },
        { from: d.target * 0.9, to: d.max, color: 'rgba(255,255,255,0.07)' },
      ];
      bands.forEach(b => {
        g.append('rect')
          .attr('x', (b.from / globalMax) * innerW).attr('y', barY)
          .attr('width', 0).attr('height', barH)
          .attr('fill', b.color).attr('rx', 1)
          .transition().duration(600).ease(d3.easeCubicOut)
          .attr('width', ((b.to - b.from) / globalMax) * innerW);
      });

      // Value bar
      g.append('rect')
        .attr('x', 0).attr('y', barY + barH * 0.12)
        .attr('width', 0).attr('height', barH * 0.76)
        .attr('fill', d.value >= d.target ? '#34d399' : '#818cf8').attr('rx', 2)
        .on('mouseenter', (e) => showTooltip(e, d))
        .on('mouseleave', hideTooltip)
        .on('mousemove', (e) => moveTooltip(e))
        .transition().duration(800).delay(i * 50).ease(d3.easeCubicOut)
        .attr('width', (d.value / globalMax) * innerW);

      // Target line
      g.append('line')
        .attr('x1', (d.target / globalMax) * innerW).attr('x2', (d.target / globalMax) * innerW)
        .attr('y1', barY - 3).attr('y2', barY + barH + 3)
        .attr('stroke', '#f87171').attr('stroke-width', 2.5).attr('stroke-linecap', 'round')
        .attr('opacity', 0)
        .transition().delay(400 + i * 50).duration(300)
        .attr('opacity', 0.9);

      // Label
      g.append('text')
        .attr('x', -8).attr('y', y + ROW_H / 2)
        .attr('text-anchor', 'end').attr('dominant-baseline', 'central')
        .attr('fill', '#c4c4d0').attr('font-size', '11px').attr('font-weight', '600')
        .attr('font-family', 'inherit')
        .text(d.label);
    });

  }, [data, dims]);

  if (data.length === 0) {
    return (
      <div ref={containerRef} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 100 }}>
        <span style={{ color: '#8b8b98', fontSize: '12px' }}>Veri yok</span>
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <svg ref={svgRef} style={{ display: 'block', width: '100%' }} />
      <div ref={tooltipRef} style={{ display: 'none', position: 'fixed', pointerEvents: 'none', background: 'rgba(8,8,10,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '8px 12px', zIndex: 100, backdropFilter: 'blur(12px)', boxShadow: '0 8px 24px rgba(0,0,0,0.6)' }} />
    </div>
  );
}
