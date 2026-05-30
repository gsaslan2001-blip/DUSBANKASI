
import { useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';

export interface SunburstDatum {
  name: string;
  children?: { name: string; value: number; total: number; color?: string }[];
  color?: string;
}

interface SunburstNode extends d3.HierarchyNode<unknown> {
  data: { name: string; value?: number; total?: number; color?: string; children?: unknown[] };
  x0: number;
  x1: number;
  y0: number;
  y1: number;
}

interface Props {
  data: SunburstDatum[];
  size?: number;
}

const LESSON_COLORS: Record<string, string> = {
  Endodonti: '#38bdf8',
  Protez: '#818cf8',
  Periodontoloji: '#a78bfa',
  Radyoloji: '#fbbf24',
  Patoloji: '#fb7185',
  Histoloji: '#34d399',
  Fizyoloji: '#22d3ee',
};

function getLessonColor(name: string): string {
  return LESSON_COLORS[name] ?? '#818cf8';
}

export default function SunburstChart({ data, size = 320 }: Props) {
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
    if (!svgRef.current || data.length === 0) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('role', 'img').attr('aria-label', 'Güneş patlaması — ders/ünite hiyerarşisi');
    svg.append('title').text('Güneş patlaması — ders/ünite hiyerarşisi');

    const radius = svgSize / 2;
    const innerR = radius * 0.38;
    svg.attr('width', svgSize).attr('height', svgSize).attr('viewBox', `0 0 ${svgSize} ${svgSize}`);

    const g = svg.append('g').attr('transform', `translate(${radius},${radius})`);

    // Determine if any lesson has units
    const hasUnits = data.some((d) => d.children && d.children.length > 0);
    const maxDepth = hasUnits ? 2 : 1;
    const ringW = (radius - innerR) / maxDepth;

    // Build hierarchy and partition
    const root = d3
      .hierarchy<{ name: string; children?: unknown[]; color?: string; value?: number }>({
        name: 'root',
        children: data as unknown[],
      })
      .sum((d) => ((d as { value?: number }).value as number) || 0)
      .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));

    d3.partition().size([2 * Math.PI, radius])(root as any);

    // Override radii: depth determines radial extent
    root.each((d: any) => {
      d.y0 = innerR + (d.depth - 1) * ringW;
      d.y1 = innerR + d.depth * ringW;
    });

    const arcGen = d3
      .arc<SunburstNode>()
      .innerRadius((d) => d.y0)
      .outerRadius((d) => d.y1)
      .startAngle((d) => d.x0)
      .endAngle((d) => d.x1)
      .padAngle(0.015)
      .cornerRadius(2);

    // Totals for center text
    const totalSolved = root.value ?? 0;
    let totalQuestions = 0;
    data.forEach((lesson) => {
      lesson.children?.forEach((unit) => {
        totalQuestions += unit.total;
      });
    });

    // Tooltip handlers
    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, d: any, parentName: string) {
      if (!tooltip) return;
      const name = d.data.name;
      const displayName = parentName ? `${parentName} > ${name}` : name;
      const val = (d.data.value ?? d.value ?? 0) as number;
      const tot = (d.data.total ?? d.value ?? 0) as number;
      const pct = tot > 0 ? Math.round((val / tot) * 100) : 0;
      tooltip.innerHTML =
        `<div style="font-weight:700;font-size:11px;color:#ececf1;margin-bottom:2px">${displayName}</div>` +
        `<span style="font-size:10px;color:#8b8b98">${val}/${tot} soru (%${pct})</span>`;
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.clientX + 12}px`;
      tooltip.style.top = `${event.clientY - 40}px`;
    }
    function hideTooltip() {
      if (tooltip) tooltip.style.display = 'none';
    }
    function moveTooltip(event: MouseEvent) {
      if (!tooltip) return;
      tooltip.style.left = `${event.clientX + 12}px`;
      tooltip.style.top = `${event.clientY - 40}px`;
    }

    // Filter nodes to draw: depth 1 (lessons) and depth 2 (units)
    const drawNodes = root.descendants().filter((d: any) => {
      return d.depth >= 1 && d.depth <= maxDepth;
    }) as SunburstNode[];

    // Draw arcs
    g.selectAll('path')
      .data(drawNodes)
      .join('path')
      .attr('d', (d) => arcGen(d))
      .attr('fill', (d: any) => {
        if (d.depth === 1) {
          return (d.data.color as string) ?? getLessonColor(d.data.name);
        }
        // depth 2 unit: inherit parent color, slightly lighter
        const parentColor = ((d.parent as SunburstNode)?.data?.color as string) ?? getLessonColor((d.parent as SunburstNode)?.data?.name ?? '');
        return d3.color(parentColor)?.brighter(0.6)?.toString() ?? parentColor;
      })
      .attr('stroke', 'rgba(8,8,10,0.65)')
      .attr('stroke-width', 1)
      .attr('opacity', 0)
      .on('mouseenter', function (event, d) {
        d3.select(this).transition().duration(150).attr('stroke', 'rgba(255,255,255,0.35)').attr('stroke-width', 2);
        const parentName = d.depth === 2 ? ((d.parent as SunburstNode)?.data?.name ?? '') : '';
        showTooltip(event, d, parentName);
      })
      .on('mousemove', (event) => moveTooltip(event))
      .on('mouseleave', function () {
        d3.select(this).transition().duration(200).attr('stroke', 'rgba(8,8,10,0.65)').attr('stroke-width', 1);
        hideTooltip();
      })
      .transition()
      .duration(1000)
      .delay((_, i) => i * 40)
      .ease(d3.easeCubicOut)
      .attr('opacity', (d) => (d.depth === 1 ? 1 : 0.8));

    // Center text
    if (totalQuestions > 0) {
      const fontSize = Math.max(10, Math.round(innerR * 0.44));
      const subFontSize = Math.max(8, Math.round(innerR * 0.24));
      g.append('text')
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'central')
        .attr('fill', '#ececf1')
        .style('font-size', `${fontSize}px`)
        .style('font-weight', '900')
        .style('font-family', 'inherit')
        .style('letter-spacing', '-0.5px')
        .text(totalSolved);
      g.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', innerR * 0.38)
        .attr('fill', '#8b8b98')
        .style('font-size', `${subFontSize}px`)
        .style('font-weight', '500')
        .style('font-family', 'inherit')
        .text(`/ ${totalQuestions} soru`);
    }
  }, [data, svgSize]);

  if (data.length === 0) {
    return (
      <div
        ref={containerRef}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: size,
        }}
      >
        <span style={{ color: '#8b8b98', fontSize: '12px' }}>Veri yok</span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}
    >
      <svg ref={svgRef} style={{ display: 'block' }} />
      <div
        ref={tooltipRef}
        style={{
          display: 'none',
          position: 'fixed',
          pointerEvents: 'none',
          background: 'rgba(8,8,10,0.95)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '10px',
          padding: '8px 12px',
          zIndex: 100,
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
        }}
      />
    </div>
  );
}
