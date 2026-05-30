
import { useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';

export interface MarimekkoDatum {
  lesson: string;
  solved: number;
  accuracy: number; // 0-100
  total: number;
}

interface Props {
  data: MarimekkoDatum[];
  width?: number;
  height?: number;
}

const LESSON_COLORS: Record<string, string> = {
  Endodonti: '#38bdf8',
  Protez: '#818cf8',
  Periodontoloji: '#a78bfa',
  Radyoloji: '#fbbf24',
  Patoloji: '#fb7185',
  Histoloji: '#34d399',
  Fizyoloji: '#22d3ee',
  Cerrahi: '#fb923c',
  Biyokimya: '#60a5fa',
  Ortodonti: '#2dd4bf',
  Restoratif: '#facc15',
  Pedodonti: '#f472b6',
  Mikrobiyoloji: '#4ade80',
  Farmakoloji: '#c084fc',
};

function lessonColor(name: string): string {
  return LESSON_COLORS[name] ?? '#818cf8';
}

const MARGIN = { top: 8, right: 12, bottom: 48, left: 40 };
const TOOLTIP_OFFSET = 10;

export default function MarimekkoChart({ data, width = 600, height = 280 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ width, height });

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const { width: w } = containerRef.current.getBoundingClientRect();
    setDims({ width: Math.max(w, 200), height });
  }, [height]);

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
    svg.attr('role', 'img').attr('aria-label', 'Marimekko grafik — ders dağılımı');
    svg.append('title').text('Marimekko grafik — ders dağılımı');

    const { width: w, height: h } = dims;
    const innerW = w - MARGIN.left - MARGIN.right;
    const innerH = h - MARGIN.top - MARGIN.bottom;

    svg.attr('width', w).attr('height', h).attr('viewBox', `0 0 ${w} ${h}`);

    const g = svg.append('g').attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

    const totalSolved = d3.sum(data, (d) => d.solved);
    if (totalSolved === 0) return;

    // Y-axis (accuracy 0-100)
    const yScale = d3.scaleLinear().domain([0, 100]).range([innerH, 0]);

    // Y grid lines and labels
    g.append('g')
      .selectAll('line')
      .data(yScale.ticks(5))
      .join('line')
      .attr('x1', 0)
      .attr('x2', innerW)
      .attr('y1', (d) => yScale(d))
      .attr('y2', (d) => yScale(d))
      .attr('stroke', 'rgba(255,255,255,0.04)')
      .attr('stroke-dasharray', '2,4');

    g.append('g')
      .selectAll('text')
      .data(yScale.ticks(5))
      .join('text')
      .attr('x', -6)
      .attr('y', (d) => yScale(d) + 3)
      .attr('text-anchor', 'end')
      .attr('fill', '#8b8b98')
      .attr('font-size', '8px')
      .attr('font-family', 'inherit')
      .text((d) => `%${d}`);

    // X-axis labels: rotated lesson names at bar centers
    function buildBars() {
      const bars: { d: MarimekkoDatum; x: number; colW: number; colH: number; color: string }[] = [];
      let xPos = 0;
      data.forEach((datum) => {
        const colW = (datum.solved / totalSolved) * innerW;
        bars.push({
          d: datum,
          x: xPos,
          colW: Math.max(colW, 0),
          colH: innerH,
          color: lessonColor(datum.lesson),
        });
        xPos += colW;
      });
      return bars;
    }
    const bars = buildBars();

    // X-axis labels with rotation
    g.selectAll('.x-label')
      .data(bars)
      .join('text')
      .attr('class', 'x-label')
      .attr('x', (d) => d.x + d.colW / 2)
      .attr('y', innerH + 10)
      .attr('text-anchor', 'end')
      .attr('transform', (d) => `rotate(-35,${d.x + d.colW / 2},${innerH + 10})`)
      .attr('fill', '#8b8b98')
      .attr('font-size', '9px')
      .attr('font-weight', '600')
      .attr('font-family', 'inherit')
      .text((d) => d.d.lesson);

    // Tooltip
    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, d: MarimekkoDatum) {
      if (!tooltip) return;
      const pct = d.total > 0 ? Math.round((d.solved / d.total) * 100) : 0;
      tooltip.innerHTML =
        `<div style="font-weight:700;font-size:11px;color:#ececf1;margin-bottom:4px">${d.lesson}</div>` +
        `<span style="font-size:10px;color:#8b8b98">%${d.accuracy} doğruluk, ${d.solved}/${d.total} soru çözülmüş (%${pct})</span>`;
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.clientX + TOOLTIP_OFFSET}px`;
      tooltip.style.top = `${event.clientY - 48}px`;
    }
    function hideTooltip() {
      if (tooltip) tooltip.style.display = 'none';
    }
    function moveTooltip(event: MouseEvent) {
      if (!tooltip) return;
      tooltip.style.left = `${event.clientX + TOOLTIP_OFFSET}px`;
      tooltip.style.top = `${event.clientY - 48}px`;
    }

    // Draw bars
    g.selectAll('.mk-bar')
      .data(bars)
      .join('rect')
      .attr('class', 'mk-bar')
      .attr('x', (d) => d.x)
      .attr('y', innerH)
      .attr('width', 0)
      .attr('height', 0)
      .attr('rx', 2)
      .attr('fill', (d) => d.color)
      .attr('stroke', 'rgba(255,255,255,0.06)')
      .attr('stroke-width', 0.5)
      .on('mouseenter', function (event, b) {
        d3.select(this)
          .transition()
          .duration(120)
          .attr('stroke', 'rgba(255,255,255,0.3)')
          .attr('stroke-width', 1.5);
        showTooltip(event, b.d);
      })
      .on('mousemove', (event, _b) => moveTooltip(event))
      .on('mouseleave', function () {
        d3.select(this)
          .transition()
          .duration(150)
          .attr('stroke', 'rgba(255,255,255,0.06)')
          .attr('stroke-width', 0.5);
        hideTooltip();
      })
      // Step 1: grow width from 0
      .transition()
      .duration(400)
      .delay((_, i) => i * 80)
      .ease(d3.easeCubicOut)
      .attr('width', (d) => d.colW)
      // Step 2: grow height from bottom
      .transition()
      .duration(400)
      .ease(d3.easeCubicOut)
      .attr('y', (d) => innerH - (d.d.accuracy / 100) * innerH)
      .attr('height', (d) => (d.d.accuracy / 100) * innerH);

    // Labels inside wide enough columns
    g.selectAll('.mk-inner-label')
      .data(bars.filter((b) => b.colW > 50))
      .join('text')
      .attr('class', 'mk-inner-label')
      .attr('x', (d) => d.x + d.colW / 2)
      .attr('y', (d) => {
        const barTop = innerH - (d.d.accuracy / 100) * innerH;
        return Math.max(innerH - 8, barTop + 12);
      })
      .attr('text-anchor', 'middle')
      .attr('fill', '#ececf1')
      .attr('font-size', '9px')
      .attr('font-weight', '800')
      .attr('font-family', 'inherit')
      .attr('opacity', 0)
      .text((d) => `%${d.d.accuracy}`)
      .transition()
      .delay(900)
      .duration(400)
      .attr('opacity', 0.9);
  }, [data, dims]);

  if (data.length === 0) {
    return (
      <div
        ref={containerRef}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: height,
        }}
      >
        <span style={{ color: '#8b8b98', fontSize: '12px' }}>Veri yok</span>
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <svg ref={svgRef} style={{ display: 'block', width: '100%' }} />
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
