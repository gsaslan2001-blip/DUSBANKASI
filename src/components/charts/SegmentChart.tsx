import { useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';

export interface SegmentDatum {
  label: string;
  value: number;
  color: string;
}

interface Props {
  segments: SegmentDatum[];
}

const SIZE = 200;
const RADIUS = 80;
const INNER_RADIUS = 54;

export default function SegmentChart({ segments }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [svgSize, setSvgSize] = useState(SIZE);

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.getBoundingClientRect().width;
    setSvgSize(Math.min(w, SIZE));
  }, []);

  useEffect(() => {
    measure();
    const obs = new ResizeObserver(debounce(() => measure(), 150));
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [measure]);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('role', 'img').attr('aria-label', 'Segment grafiği');
    svg.append('title').text('Segment grafiği');

    const total = d3.sum(segments, d => d.value) || 1;
    const r = RADIUS * (svgSize / SIZE);
    const ir = INNER_RADIUS * (svgSize / SIZE);

    const arcGen = d3.arc<d3.PieArcDatum<SegmentDatum>>()
      .innerRadius(ir).outerRadius(r).cornerRadius(3);

    const pieData = d3.pie<SegmentDatum>().sort(null).value(d => d.value)(segments.filter(d => d.value > 0));

    const g = svg.attr('width', svgSize).attr('height', svgSize)
      .attr('viewBox', `0 0 ${svgSize} ${svgSize}`)
      .append('g').attr('transform', `translate(${svgSize / 2},${svgSize / 2})`);

    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, d: SegmentDatum) {
      if (!tooltip) return;
      const pct = Math.round((d.value / total) * 100);
      tooltip.innerHTML = `<div style="display:flex;align-items:center;gap:6px;margin-bottom:2px"><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:${d.color}"></span><span style="font-weight:700;font-size:11px;color:#ececf1">${d.label}</span></div><span style="font-size:10px;color:#8b8b98">${d.value} (%${pct})</span>`;
      tooltip.style.display = 'block';
      moveTooltip(event);
    }
    function moveTooltip(event: MouseEvent) {
      if (!tooltip) return;
      tooltip.style.left = `${event.clientX + 10}px`;
      tooltip.style.top = `${event.clientY - 50}px`;
    }
    function hideTooltip() { if (tooltip) tooltip.style.display = 'none'; }

    g.selectAll('path').data(pieData).join('path')
      .attr('d', arcGen)
      .attr('fill', d => d.data.color)
      .attr('opacity', 0.75)
      .attr('stroke', 'rgba(8,8,10,0.8)').attr('stroke-width', 1.5)
      .on('mouseenter', function (e, d) {
        d3.select(this).transition().duration(200).attr('opacity', 1)
          .attr('transform', () => {
            const mid = (d.startAngle + d.endAngle) / 2;
            return `translate(${Math.sin(mid) * 6},${-Math.cos(mid) * 6})`;
          });
        showTooltip(e, d.data);
      })
      .on('mouseleave', function () {
        d3.select(this).transition().duration(300).attr('opacity', 0.75).attr('transform', 'translate(0,0)');
        hideTooltip();
      })
      .on('mousemove', (e) => moveTooltip(e));

    g.append('text').attr('text-anchor', 'middle').attr('dy', '-0.2em')
      .attr('fill', '#ececf1').attr('font-size', '28px').attr('font-weight', '900').attr('font-family', 'inherit')
      .text(String(total));
    g.append('text').attr('text-anchor', 'middle').attr('dy', '1.2em')
      .attr('fill', '#8b8b98').attr('font-size', '10px').attr('font-weight', '600').attr('font-family', 'inherit')
      .text('TOPLAM');

    g.selectAll('path').attr('opacity', 0)
      .transition().duration(800).delay((_, i) => i * 100).ease(d3.easeCubicOut).attr('opacity', 0.75);
  }, [segments, svgSize]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <svg ref={svgRef} style={{ display: 'block' }} />
      <div ref={tooltipRef} style={{ display: 'none', position: 'fixed', pointerEvents: 'none', background: 'rgba(8,8,10,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '8px 12px', zIndex: 100, backdropFilter: 'blur(12px)', boxShadow: '0 8px 24px rgba(0,0,0,0.6)' }} />
    </div>
  );
}
