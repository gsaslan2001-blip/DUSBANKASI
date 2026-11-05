import { memo, useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';
import { TooltipPortal } from './TooltipPortal';

export interface RadarDatum {
  axis: string;
  value: number; // 0-100
}

interface Props {
  data: RadarDatum[];
  size?: number;
  color?: string;
  fillOpacity?: number;
}

const MARGIN = 40;
const LEVELS = 5;

export default memo(RadarChart);

function RadarChart({ data, size = 280, color = '#818cf8', fillOpacity = 0.18 }: Props) {
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
    if (!svgRef.current || data.length < 3) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('role', 'img').attr('aria-label', 'Radar grafiği — ders performans özeti');
    svg.append('title').text('Radar grafiği — ders performans özeti');

    const r = (svgSize / 2) - MARGIN;
    const cx = svgSize / 2;
    const cy = svgSize / 2;
    const angles = data.map((_, i) => (Math.PI * 2 * i) / data.length - Math.PI / 2);

    svg.attr('width', svgSize).attr('height', svgSize)
      .attr('viewBox', `0 0 ${svgSize} ${svgSize}`);

    const g = svg.append('g').attr('transform', `translate(${cx},${cy})`);

    // Grid circles
    for (let lvl = 1; lvl <= LEVELS; lvl++) {
      const lr = (r * lvl) / LEVELS;
      g.append('circle').attr('r', lr)
        .attr('fill', 'none')
        .attr('stroke', 'rgba(255,255,255,0.06)').attr('stroke-width', 0.5);
      if (lvl % 2 === 0) {
        g.append('text').attr('x', 4).attr('y', -lr + 4)
          .attr('fill', '#8b8b98').attr('font-size', '8px').attr('font-family', 'inherit')
          .text(`${Math.round((lvl / LEVELS) * 100)}`);
      }
    }

    // Axis lines
    for (let i = 0; i < data.length; i++) {
      const x2 = Math.cos(angles[i]) * r;
      const y2 = Math.sin(angles[i]) * r;
      g.append('line').attr('x1', 0).attr('y1', 0).attr('x2', x2).attr('y2', y2)
        .attr('stroke', 'rgba(255,255,255,0.08)').attr('stroke-width', 0.5);
      // Label
      const lx = Math.cos(angles[i]) * (r + 16);
      const ly = Math.sin(angles[i]) * (r + 16);
      g.append('text').attr('x', lx).attr('y', ly)
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'central')
        .attr('fill', '#c4c4d0').attr('font-size', '10px').attr('font-weight', '600')
        .attr('font-family', 'inherit')
        .text(data[i].axis);
    }

    // Data polygon
    const points = data.map((d, i) => {
      const val = Math.max(0, Math.min(100, d.value)) / 100;
      return [Math.cos(angles[i]) * r * val, Math.sin(angles[i]) * r * val] as [number, number];
    });

    const lineGen = d3.line<[number, number]>()
      .x(d => d[0]).y(d => d[1]);

    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, d: RadarDatum) {
      if (!tooltip) return;
      tooltip.replaceChildren();

      const titleDiv = document.createElement('div');
      titleDiv.style.fontWeight = '700';
      titleDiv.style.fontSize = '11px';
      titleDiv.style.color = '#ececf1';
      titleDiv.style.marginBottom = '2px';
      titleDiv.textContent = d.axis;

      const valSpan = document.createElement('span');
      valSpan.style.fontSize = '10px';
      valSpan.style.color = color;
      valSpan.textContent = `%${d.value}`;

      tooltip.appendChild(titleDiv);
      tooltip.appendChild(valSpan);
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.clientX + 10}px`;
      tooltip.style.top = `${event.clientY - 44}px`;
    }
    function hideTooltip() { if (tooltip) tooltip.style.display = 'none'; }

    // Fill area
    g.append('path').datum(points).attr('d', lineGen)
      .attr('fill', color).attr('fill-opacity', 0)
      .attr('stroke', 'none')
      .transition().duration(800).ease(d3.easeCubicOut)
      .attr('fill-opacity', fillOpacity);

    // Stroke
    const path = g.append('path').datum(points).attr('d', lineGen)
      .attr('fill', 'none').attr('stroke', color).attr('stroke-width', 1.5)
      .attr('stroke-opacity', 0.8);
    const totalLen = path.node()?.getTotalLength() ?? 0;
    path.attr('stroke-dasharray', totalLen).attr('stroke-dashoffset', totalLen)
      .transition().duration(1000).ease(d3.easeCubicOut)
      .attr('stroke-dashoffset', 0);

    // Dots
    g.selectAll('.radar-dot').data(data).join('circle')
      .attr('class', 'radar-dot')
      .attr('cx', (_, i) => points[i][0])
      .attr('cy', (_, i) => points[i][1])
      .attr('r', 0).attr('fill', color).attr('opacity', 0)
      .on('mouseenter', function (e, d) {
        d3.select(this).transition().duration(150).attr('r', 5).attr('opacity', 1);
        showTooltip(e, d);
      })
      .on('mouseleave', function () {
        d3.select(this).transition().duration(200).attr('r', 3).attr('opacity', 0.7);
        hideTooltip();
      })
      .transition().duration(600).delay((_, i) => i * 80).ease(d3.easeCubicOut)
      .attr('r', 3).attr('opacity', 0.7);

  }, [data, svgSize, color, fillOpacity]);

  if (data.length < 3) {
    return (
      <div ref={containerRef} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 200 }}>
        <span style={{ color: '#8b8b98', fontSize: '12px' }}>En az 3 veri noktası gerekli</span>
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <svg ref={svgRef} style={{ display: 'block' }} />
      <TooltipPortal><div ref={tooltipRef} style={{ display: 'none', position: 'fixed', pointerEvents: 'none', background: 'rgba(8,8,10,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '8px 12px', zIndex: 9999, backdropFilter: 'blur(12px)', boxShadow: '0 8px 24px rgba(0,0,0,0.6)' }} /></TooltipPortal>
    </div>
  );
}
