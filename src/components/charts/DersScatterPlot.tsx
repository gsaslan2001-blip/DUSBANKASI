
import { memo, useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';
import { TooltipPortal } from './TooltipPortal';

export interface DersScatterDatum {
  lesson: string;
  solved: number;
  accuracy: number;
  total: number;
}

interface Props {
  data: DersScatterDatum[];
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

const FALLBACK_COLOR = '#818cf8';

function lessonColor(lesson: string): string {
  for (const [key, color] of Object.entries(LESSON_COLORS)) {
    if (lesson.toLowerCase().includes(key.toLowerCase())) return color;
  }
  return FALLBACK_COLOR;
}

const MARGIN = { top: 12, right: 16, bottom: 36, left: 44 };
const TOOLTIP_OFFSET = 10;

export default memo(DersScatterPlot);

function DersScatterPlot({ data, size = 300 }: Props) {
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
    if (!svgRef.current || data.length < 1) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('role', 'img').attr('aria-label', 'Saçılım grafiği — ders performansı');
    svg.append('title').text('Saçılım grafiği — ders performansı');

    const innerW = svgSize - MARGIN.left - MARGIN.right;
    const innerH = svgSize - MARGIN.top - MARGIN.bottom;

    const g = svg
      .attr('width', svgSize)
      .attr('height', svgSize)
      .append('g')
      .attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

    // Scales
    const maxSolved = d3.max(data, d => d.solved) || 100;
    const xMax = Math.ceil(maxSolved / 50) * 50 || 200;
    const xScale = d3.scaleLinear().domain([0, xMax]).range([0, innerW]).nice();
    const yScale = d3.scaleLinear().domain([0, 100]).range([innerH, 0]);

    // Bubble radius scale
    const maxTotal = d3.max(data, d => d.total) || 1;
    const rScale = d3
      .scaleSqrt()
      .domain([0, maxTotal])
      .range([6, Math.min(36, innerW / 10)]);

    // Grid lines
    const xTicks = xScale.ticks(5);
    const yTicks = yScale.ticks(5);

    // Vertical grid
    g.append('g')
      .selectAll('line')
      .data(xTicks)
      .join('line')
      .attr('x1', d => xScale(d))
      .attr('x2', d => xScale(d))
      .attr('y1', 0)
      .attr('y2', innerH)
      .attr('stroke', 'rgba(255,255,255,0.05)')
      .attr('stroke-dasharray', '2,4');

    // Horizontal grid
    g.append('g')
      .selectAll('line')
      .data(yTicks)
      .join('line')
      .attr('x1', 0)
      .attr('x2', innerW)
      .attr('y1', d => yScale(d))
      .attr('y2', d => yScale(d))
      .attr('stroke', 'rgba(255,255,255,0.05)')
      .attr('stroke-dasharray', '2,4');

    // Axes
    // X axis line
    g.append('line')
      .attr('x1', 0)
      .attr('x2', innerW)
      .attr('y1', innerH)
      .attr('y2', innerH)
      .attr('stroke', 'rgba(255,255,255,0.1)')
      .attr('stroke-width', 1);

    // Y axis line
    g.append('line')
      .attr('x1', 0)
      .attr('x2', 0)
      .attr('y1', 0)
      .attr('y2', innerH)
      .attr('stroke', 'rgba(255,255,255,0.1)')
      .attr('stroke-width', 1);

    // X tick labels
    g.append('g')
      .selectAll('text')
      .data(xTicks)
      .join('text')
      .attr('x', d => xScale(d))
      .attr('y', innerH + 14)
      .attr('text-anchor', 'middle')
      .attr('fill', '#8b8b98')
      .attr('font-size', '8px')
      .attr('font-family', 'inherit')
      .text(d => String(d));

    // Y tick labels
    g.append('g')
      .selectAll('text')
      .data(yTicks)
      .join('text')
      .attr('x', -8)
      .attr('y', d => yScale(d) + 3)
      .attr('text-anchor', 'end')
      .attr('fill', '#8b8b98')
      .attr('font-size', '8px')
      .attr('font-family', 'inherit')
      .text(d => `%${d}`);

    // Axis labels
    // X label
    g.append('text')
      .attr('x', innerW / 2)
      .attr('y', innerH + 30)
      .attr('text-anchor', 'middle')
      .attr('fill', '#c4c4d0')
      .attr('font-size', '10px')
      .attr('font-weight', '600')
      .attr('font-family', 'inherit')
      .text('Çözülen Soru');

    // Y label
    g.append('text')
      .attr('x', -36)
      .attr('y', innerH / 2)
      .attr('text-anchor', 'middle')
      .attr('transform', `rotate(-90, -36, ${innerH / 2})`)
      .attr('fill', '#c4c4d0')
      .attr('font-size', '10px')
      .attr('font-weight', '600')
      .attr('font-family', 'inherit')
      .text('Doğruluk %');

    // Quadrant lines
    const avgAccuracy = 50;
    const avgSolved =
      data.length > 0
        ? d3.mean(data, d => d.solved) ?? 50
        : 50;

    // Horizontal quadrant line at accuracy 50%
    g.append('line')
      .attr('x1', 0)
      .attr('x2', innerW)
      .attr('y1', yScale(avgAccuracy))
      .attr('y2', yScale(avgAccuracy))
      .attr('stroke', 'rgba(255,255,255,0.12)')
      .attr('stroke-dasharray', '4,6')
      .attr('stroke-width', 1);

    // Vertical quadrant line at average solved
    g.append('line')
      .attr('x1', xScale(avgSolved))
      .attr('x2', xScale(avgSolved))
      .attr('y1', 0)
      .attr('y2', innerH)
      .attr('stroke', 'rgba(255,255,255,0.12)')
      .attr('stroke-dasharray', '4,6')
      .attr('stroke-width', 1);

    // Tooltip helpers
    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, d: DersScatterDatum & { r: number }) {
      if (!tooltip) return;
      tooltip.replaceChildren();

      const titleDiv = document.createElement('div');
      titleDiv.style.fontWeight = '700';
      titleDiv.style.fontSize = '11px';
      titleDiv.style.color = lessonColor(d.lesson);
      titleDiv.style.marginBottom = '4px';
      titleDiv.textContent = d.lesson;

      const bodyDiv = document.createElement('div');
      bodyDiv.style.display = 'flex';
      bodyDiv.style.flexDirection = 'column';
      bodyDiv.style.gap = '1px';
      bodyDiv.style.fontSize = '10px';

      const createRow = (label: string, val: string, valColor = '#ececf1') => {
        const row = document.createElement('span');
        row.style.color = '#8b8b98';
        row.textContent = `${label}: `;
        const valSpan = document.createElement('span');
        valSpan.style.color = valColor;
        valSpan.textContent = val;
        row.appendChild(valSpan);
        return row;
      };

      bodyDiv.appendChild(createRow('Çözülen', `${d.solved} soru`));
      bodyDiv.appendChild(createRow('Doğruluk', `%${d.accuracy}`, '#34d399'));
      bodyDiv.appendChild(createRow('Toplam', `${d.total} soru`));

      tooltip.appendChild(titleDiv);
      tooltip.appendChild(bodyDiv);
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.clientX + TOOLTIP_OFFSET}px`;
      tooltip.style.top = `${event.clientY - 70}px`;
    }
    function moveTooltip(event: MouseEvent) {
      if (!tooltip) return;
      tooltip.style.left = `${event.clientX + TOOLTIP_OFFSET}px`;
      tooltip.style.top = `${event.clientY - 70}px`;
    }
    function hideTooltip() {
      if (tooltip) tooltip.style.display = 'none';
    }

    // Draw circles with animation
    g.selectAll<SVGCircleElement, DersScatterDatum>('.bubble')
      .data(data)
      .join('circle')
      .attr('class', 'bubble')
      .attr('cx', d => xScale(d.solved))
      .attr('cy', d => yScale(d.accuracy))
      .attr('r', 0)
      .attr('fill', d => lessonColor(d.lesson))
      .attr('fill-opacity', 0.7)
      .attr('stroke', 'rgba(8,8,10,0.4)')
      .attr('stroke-width', 1.5)
      .on('mouseenter', function (event, d) {
        d3.select(this)
          .transition()
          .duration(150)
          .attr('fill-opacity', 0.95)
          .attr('stroke', '#ececf1')
          .attr('stroke-width', 2);
        showTooltip(event, { ...d, r: rScale(d.total) });
      })
      .on('mouseleave', function (_event, _d) {
        d3.select(this)
          .transition()
          .duration(250)
          .attr('fill-opacity', 0.7)
          .attr('stroke', 'rgba(8,8,10,0.4)')
          .attr('stroke-width', 1.5);
        hideTooltip();
      })
      .on('mousemove', (event) => moveTooltip(event))
      .transition()
      .duration(600)
      .delay((_, i) => i * 40)
      .ease(d3.easeCubicOut)
      .attr('r', d => rScale(d.total))
      ;
  }, [data, svgSize]);

  if (data.length < 1) {
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
        <span style={{ color: '#8b8b98', fontSize: '12px' }}>Yeterli veri yok</span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}
    >
      <svg ref={svgRef} style={{ display: 'block' }} />
      <TooltipPortal>
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
            zIndex: 9999,
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
          }}
        />
      </TooltipPortal>
    </div>
  );
}
