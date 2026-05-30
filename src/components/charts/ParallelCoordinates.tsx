import { useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';

export interface ParallelCoordinatesDatum {
  lesson: string;
  difficulty: number;
  accuracy: number;
  timeSpent: number; // seconds
  count: number;
}

interface Props {
  data: ParallelCoordinatesDatum[];
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
};

const FALLBACK_COLOR = '#818cf8';

function lessonColor(lesson: string): string {
  for (const [key, color] of Object.entries(LESSON_COLORS)) {
    if (lesson.toLowerCase().includes(key.toLowerCase())) return color;
  }
  return FALLBACK_COLOR;
}

interface AxisDef {
  key: string;
  label: string;
  tickFormat: (v: number) => string;
  domain: [number, number] | undefined;
}

function buildAxes(data: ParallelCoordinatesDatum[]): AxisDef[] {
  const difficultyMax = d3.max(data, d => d.difficulty) || 100;
  const timeMax = d3.max(data, d => d.timeSpent) || 300;

  return [
    {
      key: 'lesson',
      label: 'Ders',
      tickFormat: () => '',
      domain: undefined,
    },
    {
      key: 'difficulty',
      label: 'Zorluk',
      tickFormat: v => String(Math.round(v)),
      domain: [0, Math.ceil(difficultyMax / 10) * 10 || 100] as [number, number],
    },
    {
      key: 'accuracy',
      label: 'Doğruluk %',
      tickFormat: v => `%${Math.round(v)}`,
      domain: [0, 100] as [number, number],
    },
    {
      key: 'timeSpent',
      label: 'Süre (dk)',
      tickFormat: v => String(Math.round(v / 60)),
      domain: [0, Math.ceil(timeMax / 60) * 60 || 300] as [number, number],
    },
  ];
}

const MARGIN = { top: 28, right: 20, bottom: 8, left: 20 };
const TOOLTIP_OFFSET = 10;

export function ParallelCoordinates({ data, height = 260 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ width: 0, height });

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const { width } = containerRef.current.getBoundingClientRect();
    setDims({ width, height });
  }, [height]);

  useEffect(() => {
    measure();
    const obs = new ResizeObserver(debounce(() => measure(), 150));
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [measure]);

  useEffect(() => {
    if (!svgRef.current || dims.width === 0 || data.length < 3) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('role', 'img').attr('aria-label', 'Paralel koordinatlar — çok boyutlu analiz');
    svg.append('title').text('Paralel koordinatlar — çok boyutlu analiz');

    const { width, height: h } = dims;
    const innerW = width - MARGIN.left - MARGIN.right;
    const innerH = h - MARGIN.top - MARGIN.bottom;

    const g = svg
      .attr('width', width)
      .attr('height', h)
      .append('g')
      .attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

    const axes = buildAxes(data);
    const axisCount = axes.length;
    const axisX = d3
      .scalePoint<number>()
      .domain(d3.range(axisCount))
      .range([0, innerW]);

    // Lesson scale for first (categorical) axis
    const lessons = data.map(d => d.lesson);
    const lessonScale = d3.scalePoint<string>().domain(lessons).range([0, innerH]);

    // Numeric scales for axes 1-3
    const scales: (d3.ScalePoint<string> | d3.ScaleLinear<number, number>)[] = [lessonScale];
    for (let i = 1; i < axisCount; i++) {
      const ax = axes[i];
      scales.push(
        d3
          .scaleLinear()
          .domain(ax.domain || [0, 100])
          .range([innerH, 0]),
      );
    }

    // Draw axis lines
    for (let i = 0; i < axisCount; i++) {
      const x = axisX(i)!;
      g.append('line')
        .attr('x1', x)
        .attr('x2', x)
        .attr('y1', 0)
        .attr('y2', innerH)
        .attr('stroke', 'rgba(255,255,255,0.08)')
        .attr('stroke-width', 1);

      // Axis label at top
      g.append('text')
        .attr('x', x)
        .attr('y', -10)
        .attr('text-anchor', 'middle')
        .attr('fill', '#c4c4d0')
        .attr('font-size', '10px')
        .attr('font-weight', '700')
        .attr('font-family', 'inherit')
        .text(axes[i].label);

      // Tick marks and labels
      if (i === 0) {
        // Categorical: lesson names
        lessons.forEach(lesson => {
          const y = lessonScale(lesson)!;
          g.append('line')
            .attr('x1', x - 5)
            .attr('x2', x + 5)
            .attr('y1', y)
            .attr('y2', y)
            .attr('stroke', 'rgba(255,255,255,0.12)')
            .attr('stroke-width', 1);
          g.append('text')
            .attr('x', x - 8)
            .attr('y', y + 3)
            .attr('text-anchor', 'end')
            .attr('fill', '#8b8b98')
            .attr('font-size', '7px')
            .attr('font-family', 'inherit')
            .text(lesson.length > 8 ? lesson.slice(0, 7) + '.' : lesson);
        });
      } else {
        const scale = scales[i] as d3.ScaleLinear<number, number>;
        const ticks = scale.ticks(5);
        ticks.forEach(v => {
          const y = scale(v);
          g.append('line')
            .attr('x1', x - 4)
            .attr('x2', x + 4)
            .attr('y1', y)
            .attr('y2', y)
            .attr('stroke', 'rgba(255,255,255,0.1)')
            .attr('stroke-width', 1);
          g.append('text')
            .attr('x', x - 7)
            .attr('y', y + 3)
            .attr('text-anchor', 'end')
            .attr('fill', '#8b8b98')
            .attr('font-size', '7px')
            .attr('font-family', 'inherit')
            .text(axes[i].tickFormat(v));
        });
      }
    }

    // Tooltip helpers
    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, d: ParallelCoordinatesDatum) {
      if (!tooltip) return;
      const mins = Math.round(d.timeSpent / 60);
      tooltip.innerHTML = `<div style="font-weight:700;font-size:11px;color:#ececf1;margin-bottom:4px">${d.lesson}</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:2px 8px;font-size:10px"><span style="color:#8b8b98">Zorluk:</span><span style="color:#ececf1">${d.difficulty}</span><span style="color:#8b8b98">Doğruluk:</span><span style="color:#34d399">%${d.accuracy}</span><span style="color:#8b8b98">Süre:</span><span style="color:#ececf1">${mins} dk</span><span style="color:#8b8b98">Soru:</span><span style="color:#ececf1">${d.count}</span></div>`;
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

    // Build points for each datum
    function getPoints(d: ParallelCoordinatesDatum): [number, number][] {
      return [
        [axisX(0)!, lessonScale(d.lesson)!],
        [axisX(1)!, (scales[1] as d3.ScaleLinear<number, number>)(d.difficulty)],
        [axisX(2)!, (scales[2] as d3.ScaleLinear<number, number>)(d.accuracy)],
        [axisX(3)!, (scales[3] as d3.ScaleLinear<number, number>)(d.timeSpent)],
      ];
    }

    const lineGen = d3
      .line<[number, number]>()
      .x(p => p[0])
      .y(p => p[1]);

    // Draw polylines
    data.forEach(d => {
      const pts = getPoints(d);
      const color = lessonColor(d.lesson);
      const path = g
        .append('path')
        .datum(pts)
        .attr('d', lineGen)
        .attr('fill', 'none')
        .attr('stroke', color)
        .attr('stroke-width', 1.5)
        .attr('stroke-linecap', 'round')
        .attr('stroke-linejoin', 'round')
        .attr('opacity', 0)
        .attr('stroke-dasharray', function () {
          const len = (this as SVGPathElement).getTotalLength?.() ?? 200;
          return `${len} ${len}`;
        })
        .attr('stroke-dashoffset', function () {
          return (this as SVGPathElement).getTotalLength?.() ?? 200;
        });

      // Invisible wider stroke for easier hover hit area
      g.append('path')
        .datum(pts)
        .attr('d', lineGen)
        .attr('fill', 'none')
        .attr('stroke', 'transparent')
        .attr('stroke-width', 12)
        .on('mouseenter', function (event) {
          path.transition().duration(200).attr('opacity', 0.8).attr('stroke-width', 2.5);
          showTooltip(event, d);
        })
        .on('mouseleave', function () {
          path.transition().duration(300).attr('opacity', 0.3).attr('stroke-width', 1.5);
          hideTooltip();
        })
        .on('mousemove', (event) => moveTooltip(event));
    });

    // Animate lines
    g.selectAll<SVGPathElement, [number, number][]>('path[stroke-dasharray]')
      .transition()
      .duration(1000)
      .delay((_, i) => i * 120)
      .ease(d3.easeCubicOut)
      .attr('opacity', 0.3)
      .attr('stroke-dashoffset', 0);
  }, [data, dims]);

  if (data.length < 3) {
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
        <span style={{ color: '#8b8b98', fontSize: '12px' }}>En az 3 veri noktası gerekli</span>
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
