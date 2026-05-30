import { useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { TOOLTIP_STYLE, debounce } from '../../lib/chartUtils';
import { useChartBrushStore } from '../../lib/chartBrushStore';

export interface BeeswarmDatum {
  lesson: string;
  accuracy: number;
  difficulty: string;
}

interface Props {
  data: BeeswarmDatum[];
  height?: number;
}

const DIFFICULTY_COLORS: Record<string, string> = {
  easy: '#34d399',
  medium: '#fbbf24',
  hard: '#f87171',
};

const MARGIN = { top: 12, right: 24, bottom: 60, left: 48 };
const DOT_RADIUS = 4.5;
/** Switch to Canvas rendering above this threshold to avoid SVG lag. */
const CANVAS_THRESHOLD = 500;

export default function BeeswarmPlot({ data, height = 280 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ width: 0, height });

  const { selectedLesson, setSelectedLesson } = useChartBrushStore();

  const useCanvas = data.length > CANVAS_THRESHOLD;

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const { width: w } = containerRef.current.getBoundingClientRect();
    setDims({ width: w, height });
  }, [height]);

  useEffect(() => {
    measure();
    const obs = new ResizeObserver(debounce(() => measure(), 150));
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [measure]);

  // Shared layout computation
  const layoutRef = useRef<{
    dots: { x: number; y: number; datum: BeeswarmDatum }[];
    xScale: d3.ScaleBand<string>;
    yScale: d3.ScaleLinear<number, number>;
    lessons: string[];
    innerW: number;
    innerH: number;
  } | null>(null);

  useEffect(() => {
    if (dims.width === 0 || data.length === 0) return;

    const innerW = dims.width - MARGIN.left - MARGIN.right;
    const innerH = dims.height - MARGIN.top - MARGIN.bottom;

    const yScale = d3.scaleLinear().domain([0, 100]).range([innerH, 0]);
    const lessons = [...new Set(data.map(d => d.lesson))];
    const xScale = d3.scaleBand<string>().domain(lessons).range([0, innerW]).padding(0.3);

    const grouped = d3.group(data, d => d.lesson);
    const allDots: { x: number; y: number; datum: BeeswarmDatum }[] = [];

    lessons.forEach(lesson => {
      const items = grouped.get(lesson) || [];
      if (!items.length) return;

      const bandCenter = xScale(lesson)! + xScale.bandwidth() / 2;
      const bandWidth = xScale.bandwidth();
      const dotSpacing = DOT_RADIUS * 2 + 1;

      const nodes: d3.SimulationNodeDatum[] = items.map(d => ({
        accuracy: d.accuracy,
        x: bandCenter + (Math.random() - 0.5) * bandWidth * 0.3,
        y: yScale(d.accuracy),
        datum: d,
      }));

      d3.forceSimulation<any>(nodes)
        .force('x', d3.forceX(() => bandCenter).strength(0.05))
        .force('y', d3.forceY(d => yScale((d as any).datum.accuracy)).strength(1))
        .force('collide', d3.forceCollide(dotSpacing).strength(1.5).iterations(4))
        .stop()
        .tick(100);

      for (const n of nodes) {
        const halfB = bandWidth / 2 - DOT_RADIUS;
        allDots.push({
          x: Math.max(-halfB, Math.min(halfB, (n.x ?? 0) - bandCenter)) + bandCenter,
          y: Math.max(DOT_RADIUS, Math.min(innerH - DOT_RADIUS, n.y ?? 0)),
          datum: (n as any).datum,
        });
      }
    });

    layoutRef.current = { dots: allDots, xScale, yScale, lessons, innerW, innerH };
  }, [data, dims]);

  // SVG rendering (<=500 dots)
  useEffect(() => {
    if (useCanvas || !svgRef.current || dims.width === 0 || !layoutRef.current) return;

    const { dots, xScale, yScale, lessons, innerW, innerH } = layoutRef.current;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    if (data.length === 0) {
      svg.attr('width', dims.width).attr('height', dims.height)
        .append('text').attr('x', dims.width / 2).attr('y', dims.height / 2)
        .attr('text-anchor', 'middle').attr('fill', '#8b8b98').attr('font-size', '12px').attr('font-family', 'inherit')
        .text('Yeterli veri yok');
      return;
    }

    svg
      .attr('width', dims.width)
      .attr('height', dims.height)
      .attr('role', 'img')
      .attr('aria-label', 'Ders bazında doğruluk dağılımı beeswarm grafiği');
    svg.append('title').text('Beeswarm — Ders Doğruluk Dağılımı');

    const g = svg.append('g').attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

    g.append('g').selectAll('line')
      .data(yScale.ticks(5)).join('line')
      .attr('x1', 0).attr('x2', innerW)
      .attr('y1', d => yScale(d)).attr('y2', d => yScale(d))
      .attr('stroke', 'rgba(255,255,255,0.05)').attr('stroke-dasharray', '2,4');

    g.append('g').selectAll('text')
      .data(yScale.ticks(5)).join('text')
      .attr('x', -8).attr('y', d => yScale(d) + 3)
      .attr('text-anchor', 'end').attr('fill', '#8b8b98')
      .attr('font-size', '9px').attr('font-family', 'inherit')
      .text(d => `%${d}`);

    g.append('text').attr('x', -36).attr('y', innerH / 2)
      .attr('text-anchor', 'middle').attr('transform', `rotate(-90, -36, ${innerH / 2})`)
      .attr('fill', '#8b8b98').attr('font-size', '9px').attr('font-family', 'inherit')
      .text('Doğruluk (%)');

    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, d: BeeswarmDatum) {
      if (!tooltip) return;
      const label = d.difficulty === 'easy' ? 'Kolay' : d.difficulty === 'medium' ? 'Orta' : 'Zor';
      tooltip.innerHTML = `<div style="font-size:11px;font-weight:700;margin-bottom:4px;color:#ececf1">${d.lesson} — ${label}</div><div style="font-size:10px;color:#8b8b98;line-height:1.6">Doğruluk: %${Math.round(d.accuracy)}</div>`;
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.clientX + 10}px`;
      tooltip.style.top = `${event.clientY - 50}px`;
    }
    function moveTooltip(e: MouseEvent) { if (tooltip) { tooltip.style.left = `${e.clientX + 10}px`; tooltip.style.top = `${e.clientY - 50}px`; } }
    function hideTooltip() { if (tooltip) tooltip.style.display = 'none'; }

    g.selectAll('.beeswarm-dot')
      .data(dots)
      .join('circle')
      .attr('class', 'beeswarm-dot')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', 0)
      .attr('fill', d => DIFFICULTY_COLORS[d.datum.difficulty] || '#8b8b98')
      .attr('opacity', d => !selectedLesson || d.datum.lesson === selectedLesson ? 0.75 : 0.15)
      .attr('stroke', 'rgba(8,8,10,0.4)').attr('stroke-width', 0.5)
      .on('mouseenter', function (e, d) {
        d3.select(this).transition().duration(150).attr('opacity', 1).attr('stroke', '#fff').attr('stroke-width', 1.5).attr('r', DOT_RADIUS + 1.5);
        setSelectedLesson(d.datum.lesson);
        showTooltip(e, d.datum);
      })
      .on('mouseleave', function () {
        d3.select(this).transition().duration(200).attr('opacity', 0.75).attr('stroke', 'rgba(8,8,10,0.4)').attr('stroke-width', 0.5).attr('r', DOT_RADIUS);
        setSelectedLesson(null);
        hideTooltip();
      })
      .on('mousemove', moveTooltip)
      .transition().duration(400).delay((_, j) => j * 3).ease(d3.easeCubicOut)
      .attr('r', DOT_RADIUS);

    // X labels
    g.append('g').selectAll('text').data(lessons).join('text')
      .attr('x', d => xScale(d)! + xScale.bandwidth() / 2).attr('y', innerH + 14)
      .attr('text-anchor', 'middle').attr('fill', '#8b8b98')
      .attr('font-size', '8px').attr('font-weight', '600').attr('font-family', 'inherit')
      .text(d => { const max = Math.floor(xScale.bandwidth() / 7); return d.length > max ? d.slice(0, max - 1) + '…' : d; });

    // Legend
    const legendG = svg.append('g').attr('transform', `translate(${MARGIN.left + innerW - 80},${dims.height - 8})`);
    [{ label: 'Kolay', color: DIFFICULTY_COLORS.easy }, { label: 'Orta', color: DIFFICULTY_COLORS.medium }, { label: 'Zor', color: DIFFICULTY_COLORS.hard }].forEach((item, i) => {
      const x = i * 50;
      legendG.append('circle').attr('cx', x).attr('cy', 0).attr('r', 4).attr('fill', item.color).attr('opacity', 0.75);
      legendG.append('text').attr('x', x + 8).attr('y', 3).attr('fill', '#8b8b98').attr('font-size', '9px').attr('font-family', 'inherit').text(item.label);
    });
  }, [data, dims, useCanvas, selectedLesson, setSelectedLesson]);

  // React to cross-chart brush (SVG path)
  useEffect(() => {
    if (useCanvas || !svgRef.current) return;
    d3.select(svgRef.current)
      .selectAll<SVGCircleElement, { x: number; y: number; datum: BeeswarmDatum }>('.beeswarm-dot')
      .attr('opacity', d => !selectedLesson || d.datum.lesson === selectedLesson ? 0.75 : 0.15);
  }, [selectedLesson, useCanvas]);

  // Canvas rendering (>500 dots)
  useEffect(() => {
    if (!useCanvas || !canvasRef.current || dims.width === 0 || !layoutRef.current) return;
    const { dots, xScale, yScale, lessons, innerW, innerH } = layoutRef.current;
    const canvas = canvasRef.current;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = dims.width * dpr;
    canvas.height = dims.height * dpr;
    canvas.style.width = `${dims.width}px`;
    canvas.style.height = `${dims.height}px`;
    const ctx = canvas.getContext('2d')!;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, dims.width, dims.height);

    ctx.save();
    ctx.translate(MARGIN.left, MARGIN.top);

    // Grid lines
    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 0.5;
    ctx.setLineDash([2, 4]);
    for (const tick of yScale.ticks(5)) {
      const y = yScale(tick);
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(innerW, y); ctx.stroke();
    }
    ctx.setLineDash([]);

    // Dots
    for (const d of dots) {
      const isHighlighted = !selectedLesson || d.datum.lesson === selectedLesson;
      ctx.globalAlpha = isHighlighted ? 0.75 : 0.15;
      ctx.fillStyle = DIFFICULTY_COLORS[d.datum.difficulty] || '#8b8b98';
      ctx.beginPath();
      ctx.arc(d.x, d.y, DOT_RADIUS, 0, 2 * Math.PI);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // X labels
    ctx.fillStyle = '#8b8b98';
    ctx.font = '600 8px inherit';
    ctx.textAlign = 'center';
    for (const lesson of lessons) {
      const x = xScale(lesson)! + xScale.bandwidth() / 2;
      const maxChars = Math.floor(xScale.bandwidth() / 7);
      const label = lesson.length > maxChars ? lesson.slice(0, maxChars - 1) + '…' : lesson;
      ctx.fillText(label, x, innerH + 14);
    }

    ctx.restore();
  }, [data, dims, useCanvas, selectedLesson]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      {useCanvas
        ? <canvas ref={canvasRef} style={{ display: 'block' }} aria-label="Beeswarm ders doğruluk dağılımı" />
        : <svg ref={svgRef} style={{ display: 'block', width: '100%' }} />
      }
      <div ref={tooltipRef} style={TOOLTIP_STYLE} />
    </div>
  );
}
