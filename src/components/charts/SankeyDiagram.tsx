import { useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { TOOLTIP_STYLE, debounce } from '../../lib/chartUtils';

interface SankeyNode {
  name: string;
  color?: string;
  layer?: number; // optional explicit layer; computed via topo-sort if omitted
}

interface SankeyLink {
  source: number;
  target: number;
  value: number;
}

interface Props {
  data: { nodes: SankeyNode[]; links: SankeyLink[] };
  width?: number;
  height?: number;
}

/** Compute layer depth for each node via BFS from sources (nodes with no incoming edges). */
function computeLayers(nodes: SankeyNode[], links: SankeyLink[]): number[] {
  const layers = new Array<number>(nodes.length).fill(-1);
  const inDegree = new Array<number>(nodes.length).fill(0);
  const adj = Array.from({ length: nodes.length }, () => [] as number[]);

  for (const l of links) {
    inDegree[l.target]++;
    adj[l.source].push(l.target);
  }

  const queue: number[] = [];
  for (let i = 0; i < nodes.length; i++) {
    if (inDegree[i] === 0) { layers[i] = 0; queue.push(i); }
  }
  // Fallback: if every node has incoming edges (cycle), assign layer 0 to all
  if (queue.length === 0) return layers.map(() => 0);

  while (queue.length > 0) {
    const cur = queue.shift()!;
    for (const nxt of adj[cur]) {
      if (layers[nxt] < layers[cur] + 1) {
        layers[nxt] = layers[cur] + 1;
        queue.push(nxt);
      }
    }
  }

  // Respect explicit overrides
  nodes.forEach((n, i) => { if (n.layer !== undefined) layers[i] = n.layer; });

  return layers;
}

const TOOLTIP_OFFSET = 10;

export default function SankeyDiagram({ data, width = 600, height = 300 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ width, height });

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const { width: w } = containerRef.current.getBoundingClientRect();
    setDims({ width: w, height: Math.max(180, Math.round(w * 0.5)) });
  }, []);

  useEffect(() => {
    measure();
    const obs = new ResizeObserver(debounce(() => measure(), 150));
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [measure]);

  useEffect(() => {
    if (!svgRef.current || data.nodes.length < 2 || data.links.length === 0 || dims.width === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const { width: w, height: h } = dims;
    svg
      .attr('width', w)
      .attr('height', h)
      .attr('role', 'img')
      .attr('aria-label', 'Ders akış Sankey diyagramı');

    svg.append('title').text('Sankey Diyagramı');

    const { nodes, links } = data;
    const totalValue = d3.sum(links, l => l.value) || 1;
    const nodeWidth = Math.min(w * 0.04, 14);

    const layers = computeLayers(nodes, links);
    const numLayers = d3.max(layers) ?? 0;

    const layerNodes = new Map<number, number[]>();
    layers.forEach((layer, i) => {
      if (!layerNodes.has(layer)) layerNodes.set(layer, []);
      layerNodes.get(layer)!.push(i);
    });

    const maxLayerSize = d3.max(Array.from(layerNodes.values(), l => l.length)) ?? 1;
    const layerGap = w / (numLayers + 2);
    const nodeH = h / (maxLayerSize + 1);

    const nodePos = new Map<number, { x: number; y: number; w2: number; h2: number }>();
    layerNodes.forEach((nodeIndices, layer) => {
      const x = layerGap * (layer + 1) - nodeWidth / 2;
      const totalH = nodeIndices.length * nodeH;
      const startY = (h - totalH) / 2 + nodeH / 2;
      nodeIndices.forEach((ni, i) => {
        const val = d3.sum(links.filter(l => l.source === ni), l => l.value) || 1;
        const nh = Math.max(12, (val / totalValue) * h * 0.7);
        nodePos.set(ni, { x, y: startY + i * nodeH, w2: nodeWidth, h2: nh });
      });
    });

    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, d: SankeyLink) {
      if (!tooltip) return;
      tooltip.innerHTML = `<div style="font-weight:700;font-size:11px;color:#ececf1;margin-bottom:2px">${nodes[d.source].name} → ${nodes[d.target].name}</div><span style="font-size:10px;color:#8b8b98">${d.value} soru</span>`;
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

    const g = svg.append('g');

    // Links — proper data binding
    g.selectAll<SVGPathElement, SankeyLink>('.sankey-link')
      .data(links)
      .join('path')
      .attr('class', 'sankey-link')
      .attr('d', d => {
        const src = nodePos.get(d.source);
        const tgt = nodePos.get(d.target);
        if (!src || !tgt) return '';
        const sx = src.x + src.w2;
        const sy = src.y + src.h2 / 2;
        const tx = tgt.x;
        const ty = tgt.y + tgt.h2 / 2;
        const mx = (sx + tx) / 2;
        return `M ${sx} ${sy} C ${mx} ${sy}, ${mx} ${ty}, ${tx} ${ty}`;
      })
      .attr('fill', 'none')
      .attr('stroke', d => nodes[d.source].color ?? '#818cf8')
      .attr('stroke-width', d => Math.max(1, d.value * 0.5))
      .attr('stroke-linecap', 'round')
      .attr('stroke-opacity', 0)
      .on('mouseenter', (e, d) => showTooltip(e, d))
      .on('mouseleave', hideTooltip)
      .on('mousemove', (e) => moveTooltip(e))
      .transition().duration(1000).delay((_, i) => i * 50)
      .attr('stroke-opacity', 0.35);

    // Nodes — proper data binding
    g.selectAll<SVGRectElement, [number, { x: number; y: number; w2: number; h2: number }]>('.sankey-node')
      .data(Array.from(nodePos.entries()))
      .join('rect')
      .attr('class', 'sankey-node')
      .attr('x', ([, pos]) => pos.x)
      .attr('y', ([, pos]) => pos.y)
      .attr('width', ([, pos]) => pos.w2)
      .attr('height', ([, pos]) => pos.h2)
      .attr('fill', ([ni]) => nodes[ni].color ?? '#818cf8')
      .attr('rx', 2)
      .attr('opacity', 0)
      .transition().duration(500).delay(200)
      .attr('opacity', 0.85);

    // Labels — proper data binding
    g.selectAll<SVGTextElement, [number, { x: number; y: number; w2: number; h2: number }]>('.sankey-label')
      .data(Array.from(nodePos.entries()))
      .join('text')
      .attr('class', 'sankey-label')
      .attr('x', ([, pos]) => pos.x + pos.w2 + 4)
      .attr('y', ([, pos]) => pos.y + pos.h2 / 2)
      .attr('dominant-baseline', 'central')
      .attr('fill', '#c4c4d0')
      .attr('font-size', '9px')
      .attr('font-weight', '600')
      .attr('font-family', 'inherit')
      .text(([ni]) => nodes[ni].name)
      .attr('opacity', 0)
      .transition().delay(400).duration(400)
      .attr('opacity', 0.8);

  }, [data, dims]);

  if (data.nodes.length < 2 || data.links.length === 0) {
    return (
      <div ref={containerRef} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 140 }}>
        <span style={{ color: '#8b8b98', fontSize: '12px' }}>Yeterli veri yok</span>
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
