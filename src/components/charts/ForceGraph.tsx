import { useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { TOOLTIP_STYLE, debounce } from '../../lib/chartUtils';
import { useChartBrushStore } from '../../lib/chartBrushStore';

export interface ForceNode {
  id: string;
  name: string;
  value: number;
  group: string;
}

export interface ForceLink {
  source: string;
  target: string;
  value: number;
}

interface Props {
  nodes: ForceNode[];
  links: ForceLink[];
  width?: number;
  height?: number;
}

const LESSON_COLORS: Record<string, string> = {
  'Endodonti': '#38bdf8', 'Protez': '#818cf8', 'Periodontoloji': '#a78bfa',
  'Radyoloji': '#fbbf24', 'Patoloji': '#fb7185', 'Histoloji': '#34d399',
  'Fizyoloji': '#22d3ee', 'Cerrahi': '#fb923c', 'Biyokimya': '#60a5fa',
  'Ortodonti': '#2dd4bf', 'Restoratif': '#facc15', 'Pedodonti': '#f472b6',
  'Mikrobiyoloji': '#4ade80', 'Farmakoloji': '#c084fc',
};

export default function ForceGraph({ nodes, links, width = 500, height = 400 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ width, height });

  const { selectedLesson, setSelectedLesson } = useChartBrushStore();

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const { width: w } = containerRef.current.getBoundingClientRect();
    setDims({ width: w, height: Math.max(240, Math.round(w * 0.75)) });
  }, []);

  useEffect(() => {
    measure();
    const obs = new ResizeObserver(debounce(() => measure(), 150));
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [measure]);

  useEffect(() => {
    if (!svgRef.current || nodes.length < 2 || dims.width === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const { width: w, height: h } = dims;
    svg
      .attr('width', w)
      .attr('height', h)
      .attr('role', 'img')
      .attr('aria-label', 'Ders bağlantıları force-directed grafiği');

    svg.append('title').text('Ders İlişki Grafiği');

    const g = svg.append('g');

    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, d: ForceNode) {
      if (!tooltip) return;
      tooltip.innerHTML = `<div style="font-weight:700;font-size:11px;color:${LESSON_COLORS[d.group] ?? '#ececf1'};margin-bottom:2px">${d.name}</div><span style="font-size:10px;color:#8b8b98">${d.group} · ${d.value} soru</span>`;
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.clientX + 10}px`;
      tooltip.style.top = `${event.clientY - 44}px`;
    }
    function hideTooltip() { if (tooltip) tooltip.style.display = 'none'; }

    const linkData = links.map(l => ({ source: l.source, target: l.target, value: l.value }));
    const rScale = d3.scaleSqrt().domain([1, d3.max(nodes, d => d.value) || 10]).range([6, 28]);

    const simNodes: (ForceNode & d3.SimulationNodeDatum)[] = nodes.map(n => ({ ...n }));
    const simLinks: d3.SimulationLinkDatum<d3.SimulationNodeDatum>[] = linkData.map(l => ({
      source: l.source, target: l.target, value: l.value,
    }));

    const simulation = d3.forceSimulation(simNodes)
      .force('link', d3.forceLink(simLinks).id((d: any) => d.id).distance(60))
      .force('charge', d3.forceManyBody().strength(-120))
      .force('collide', d3.forceCollide().radius(d => rScale((d as any).value) + 4))
      .force('center', d3.forceCenter(w / 2, h / 2))
      .alphaDecay(0.02);

    const link = g.selectAll('.flink').data(simLinks).join('line')
      .attr('class', 'flink')
      .attr('stroke', 'rgba(255,255,255,0.08)')
      .attr('stroke-width', d => Math.max(0.5, Math.min(3, (d as any).value * 0.4)))
      .attr('opacity', 0);

    const node = g.selectAll('.fnode').data(simNodes).join('circle')
      .attr('class', 'fnode')
      .attr('r', d => rScale((d as any).value))
      .attr('fill', d => LESSON_COLORS[(d as any).group] ?? '#818cf8')
      .attr('stroke', 'rgba(8,8,10,0.6)')
      .attr('stroke-width', 1.5)
      .attr('opacity', 0)
      .style('cursor', 'pointer')
      .on('mouseenter', function (e, d) {
        d3.select(this).attr('stroke', '#fff').attr('stroke-width', 2);
        setSelectedLesson((d as any).group);
        showTooltip(e, d as any);
      })
      .on('mouseleave', function () {
        d3.select(this).attr('stroke', 'rgba(8,8,10,0.6)').attr('stroke-width', 1.5);
        setSelectedLesson(null);
        hideTooltip();
      })
      .call(d3.drag<SVGCircleElement, any>()
        .on('start', (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x; d.fy = d.y;
        })
        .on('drag', (event, d) => { d.fx = event.x; d.fy = event.y; })
        .on('end', (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null; d.fy = null;
        }) as any);

    const labels = g.selectAll('.flabel').data(simNodes).join('text')
      .attr('class', 'flabel')
      .text(d => (d as any).name.length > 10 ? (d as any).name.slice(0, 9) + '…' : (d as any).name)
      .attr('text-anchor', 'middle')
      .attr('fill', '#c4c4d0')
      .attr('font-size', '9px')
      .attr('font-weight', '600')
      .attr('font-family', 'inherit')
      .attr('opacity', 0);

    simulation.on('tick', () => {
      link
        .attr('x1', d => (d.source as any).x)
        .attr('y1', d => (d.source as any).y)
        .attr('x2', d => (d.target as any).x)
        .attr('y2', d => (d.target as any).y);
      node.attr('cx', d => d.x!).attr('cy', d => d.y!);
      labels.attr('x', d => d.x!).attr('y', d => d.y! + rScale((d as any).value) + 10);
    });

    simulation.on('end', () => {
      link.transition().duration(600).attr('opacity', 0.5);
      node.transition().duration(400).delay((_, i) => i * 40).attr('opacity', 0.85);
      labels.transition().duration(400).delay(300).attr('opacity', 0.7);
    });

    return () => { simulation.stop(); };
  }, [nodes, links, dims, setSelectedLesson]);

  // React to cross-chart brush selection
  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll<SVGCircleElement, ForceNode & d3.SimulationNodeDatum>('.fnode')
      .attr('opacity', d => {
        if (!selectedLesson) return 0.85;
        return d.group === selectedLesson ? 1 : 0.2;
      });
    svg.selectAll<SVGTextElement, ForceNode & d3.SimulationNodeDatum>('.flabel')
      .attr('opacity', d => {
        if (!selectedLesson) return 0.7;
        return d.group === selectedLesson ? 1 : 0.1;
      });
  }, [selectedLesson]);

  if (nodes.length < 2) {
    return (
      <div ref={containerRef} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 200 }}>
        <span style={{ color: '#8b8b98', fontSize: '12px' }}>En az 2 düğüm gerekli</span>
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <svg ref={svgRef} style={{ display: 'block', width: '100%' }} />
      <div ref={tooltipRef} style={TOOLTIP_STYLE} />
    </div>
  );
}
