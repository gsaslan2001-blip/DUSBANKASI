
import { useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';

export interface TreemapDatum {
  name: string;       // lesson or unit name
  value: number;      // solved count
  total: number;      // total questions
  accuracy?: number;  // 0-100
  color?: string;     // optional override
}

interface Props {
  data: TreemapDatum[];
  width?: number;
  height?: number;
  minOpacity?: number;
  maxOpacity?: number;
}

const BASE_COLORS: Record<string, string> = {
  'Endodonti': '#38bdf8', 'Protez': '#818cf8', 'Periodontoloji': '#a78bfa',
  'Radyoloji': '#fbbf24', 'Patoloji': '#fb7185', 'Histoloji': '#34d399',
  'Fizyoloji': '#22d3ee', 'Cerrahi': '#fb923c', 'Biyokimya': '#60a5fa',
  'Ortodonti': '#2dd4bf', 'Restoratif': '#facc15', 'Pedodonti': '#f472b6',
  'Mikrobiyoloji': '#4ade80', 'Farmakoloji': '#c084fc',
};

function lessonColor(name: string): string {
  return BASE_COLORS[name] ?? '#818cf8';
}

export default function StudyTreemap({ data, width = 600, height = 300, minOpacity = 0.35, maxOpacity = 0.85 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ width, height });

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const { width: w } = containerRef.current.getBoundingClientRect();
    setDims({ width: w, height: Math.max(160, Math.round(w * 0.5)) });
  }, []);

  useEffect(() => {
    measure();
    const obs = new ResizeObserver(debounce(() => measure(), 150));
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [measure]);

  useEffect(() => {
    if (!svgRef.current || data.length === 0 || dims.width === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('role', 'img').attr('aria-label', 'Treemap — çalışma dağılımı');
    svg.append('title').text('Treemap — çalışma dağılımı');

    const { width: w, height: h } = dims;
    svg.attr('width', w).attr('height', h).attr('viewBox', `0 0 ${w} ${h}`);

    const root = d3.treemap<any>()
      .size([w, h])
      .padding(2)
      .round(true)
      (d3.hierarchy<any>({ children: data })
        .sum((d: any) => d.value || 1)
        .sort((a: any, b: any) => (b.value ?? 0) - (a.value ?? 0)));

    const leaves = root.leaves();

    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, d: TreemapDatum) {
      if (!tooltip) return;
      const acc = d.accuracy != null ? `%${d.accuracy}` : '—';
      const cov = d.total > 0 ? Math.round((d.value / d.total) * 100) : 0;
      tooltip.innerHTML = `<div style="font-size:11px;font-weight:700;margin-bottom:3px;color:#ececf1">${d.name}</div><div style="font-size:10px;color:#8b8b98"><span>${d.value}/${d.total} soru (%${cov})</span><br/><span>Doğruluk: ${acc}</span></div>`;
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.clientX + 10}px`;
      tooltip.style.top = `${event.clientY - 56}px`;
    }
    function hideTooltip() { if (tooltip) tooltip.style.display = 'none'; }
    function moveTooltip(event: MouseEvent) {
      if (!tooltip) return;
      tooltip.style.left = `${event.clientX + 10}px`;
      tooltip.style.top = `${event.clientY - 56}px`;
    }



    svg.selectAll('rect').data(leaves).join('rect')
      .attr('x', d => d.x0).attr('y', d => d.y0)
      .attr('width', 0).attr('height', 0)
      .attr('rx', 3)
      .attr('fill', d => {
        const base = d.data.color ?? lessonColor(d.data.name);
        const opacity = minOpacity + (d.data.accuracy != null ? (d.data.accuracy / 100) : 0.5) * (maxOpacity - minOpacity);
        return d3.color(base)?.copy({ opacity })?.toString() ?? base;
      })
      .attr('stroke', 'rgba(8,8,10,0.5)').attr('stroke-width', 1)
      .on('mouseenter', function (e, d) {
        d3.select(this).attr('stroke', 'rgba(255,255,255,0.4)').attr('stroke-width', 2);
        showTooltip(e, d.data);
      })
      .on('mouseleave', function () {
        d3.select(this).attr('stroke', 'rgba(8,8,10,0.5)').attr('stroke-width', 1);
        hideTooltip();
      })
      .on('mousemove', (e) => moveTooltip(e))
      .transition().duration(600).delay((_, i) => i * 30).ease(d3.easeCubicOut)
      .attr('width', d => Math.max(0, d.x1 - d.x0))
      .attr('height', d => Math.max(0, d.y1 - d.y0));

    // Labels on larger blocks
    svg.selectAll('text').data(leaves.filter(l => (l.x1 - l.x0) > 36 && (l.y1 - l.y0) > 20)).join('text')
      .attr('x', d => (d.x0 + d.x1) / 2).attr('y', d => (d.y0 + d.y1) / 2)
      .attr('text-anchor', 'middle').attr('dominant-baseline', 'central')
      .attr('fill', '#ececf1').attr('font-size', '9px').attr('font-weight', '700')
      .attr('font-family', 'inherit').attr('opacity', 0)
      .text(d => {
        const w = d.x1 - d.x0;
        const maxChars = Math.floor(w / 7);
        return d.data.name.length > maxChars ? d.data.name.slice(0, maxChars - 1) + '…' : d.data.name;
      })
      .transition().delay(800).duration(400)
      .attr('opacity', 0.9);

  }, [data, dims, minOpacity, maxOpacity]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <svg ref={svgRef} style={{ display: 'block', width: '100%' }} />
      <div ref={tooltipRef} style={{ display: 'none', position: 'fixed', pointerEvents: 'none', background: 'rgba(8,8,10,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '8px 12px', zIndex: 100, backdropFilter: 'blur(12px)', boxShadow: '0 8px 24px rgba(0,0,0,0.6)' }} />
    </div>
  );
}
