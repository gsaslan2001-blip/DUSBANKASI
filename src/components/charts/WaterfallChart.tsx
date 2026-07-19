
import { memo, useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';
import { TooltipPortal } from './TooltipPortal';

export interface WaterfallDatum {
  week: string;
  count: number;
}

interface Props {
  data: WaterfallDatum[];
  height?: number;
}

const MARGIN = { top: 16, right: 12, bottom: 36, left: 40 };
const BAR_WIDTH_RATIO = 0.55;
const TOOLTIP_OFFSET = 10;

export default memo(WaterfallChart);

function WaterfallChart({ data, height = 220 }: Props) {
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
    if (!svgRef.current || data.length < 2 || dims.width === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();
    svg.attr('role', 'img').attr('aria-label', 'Şelale grafik — kümülatif değer değişimi');
    svg.append('title').text('Şelale grafik — kümülatif değer değişimi');

    const { width: w, height: h } = dims;
    const innerW = w - MARGIN.left - MARGIN.right;
    const innerH = h - MARGIN.top - MARGIN.bottom;

    svg.attr('width', w).attr('height', h).attr('viewBox', `0 0 ${w} ${h}`);

    const g = svg.append('g').attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

    // Build waterfall bars:
    // bar[0] = first value from 0 to count
    // bar[i] = delta from data[i-1].count to data[i].count
    interface WaterfallBar {
      week: string;
      base: number;
      height: number;
      delta: number;
      isStart: boolean;
      color: string;
      label: string;
    }

    const bars: WaterfallBar[] = [];
    for (let i = 0; i < data.length; i++) {
      if (i === 0) {
        bars.push({
          week: data[i].week,
          base: 0,
          height: data[i].count,
          delta: data[i].count,
          isStart: true,
          color: '#818cf8',
          label: String(data[i].count),
        });
      } else {
        const delta = data[i].count - data[i - 1].count;
        const isPositive = delta >= 0;
        bars.push({
          week: data[i].week,
          base: !isPositive ? data[i].count : data[i - 1].count,
          height: Math.abs(delta),
          delta,
          isStart: false,
          color: isPositive ? '#34d399' : '#f87171',
          label: (delta >= 0 ? '+' : '') + String(delta),
        });
      }
    }

    const maxVal = d3.max(bars, (b) => b.base + b.height) || 1;
    const minBottom = d3.min(bars, (b) => b.base) || 0;
    const yMin = Math.min(0, minBottom - 2);
    const yScale = d3.scaleLinear().domain([yMin, maxVal + 2]).range([innerH, 0]).nice();

    const xScale = d3
      .scaleBand<string>()
      .domain(data.map((d) => d.week))
      .range([0, innerW])
      .padding(0.3);

    const barWidth = xScale.bandwidth() * BAR_WIDTH_RATIO;

    // Grid lines
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

    // Zero line
    g.append('line')
      .attr('x1', 0)
      .attr('x2', innerW)
      .attr('y1', yScale(0))
      .attr('y2', yScale(0))
      .attr('stroke', 'rgba(255,255,255,0.1)')
      .attr('stroke-width', 1);

    // Y-axis labels
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
      .text((d) => String(d));

    // X-axis labels
    g.selectAll('.x-lab')
      .data(data)
      .join('text')
      .attr('class', 'x-lab')
      .attr('x', (d) => (xScale(d.week) ?? 0) + xScale.bandwidth() / 2)
      .attr('y', innerH + 14)
      .attr('text-anchor', 'middle')
      .attr('fill', '#8b8b98')
      .attr('font-size', '8px')
      .attr('font-family', 'inherit')
      .text((d) => d.week);

    // Tooltip
    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, b: WaterfallBar) {
      if (!tooltip) return;
      const sign = b.delta >= 0 ? '+' : '';
      tooltip.innerHTML =
        `<div style="font-weight:700;font-size:11px;color:#ececf1;margin-bottom:2px">${b.week}</div>` +
        `<span style="font-size:10px;color:#8b8b98">${data[bars.indexOf(b)]?.count} soru (${sign}${b.delta})</span>`;
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.clientX + TOOLTIP_OFFSET}px`;
      tooltip.style.top = `${event.clientY - 40}px`;
    }
    function hideTooltip() {
      if (tooltip) tooltip.style.display = 'none';
    }
    function moveTooltip(event: MouseEvent) {
      if (!tooltip) return;
      tooltip.style.left = `${event.clientX + TOOLTIP_OFFSET}px`;
      tooltip.style.top = `${event.clientY - 40}px`;
    }

    // Connecting dashed lines between bar tops
    const linePoints: [number, number][] = bars.map((b) => {
      const x = (xScale(b.week) ?? 0) + xScale.bandwidth() / 2;
      const y = yScale(b.base + b.height);
      return [x, y];
    });

    const connectorLine = d3
      .line<[number, number]>()
      .x((d) => d[0])
      .y((d) => d[1]);

    const connector = g
      .append('path')
      .datum(linePoints)
      .attr('d', connectorLine)
      .attr('fill', 'none')
      .attr('stroke', 'rgba(255,255,255,0.12)')
      .attr('stroke-width', 1)
      .attr('stroke-dasharray', (() => {
        if (!linePoints.length) return '';
        const pairs: number[] = [];
        for (let i = 0; i < linePoints.length - 1; i++) {
          const dx = linePoints[i + 1][0] - linePoints[i][0];
          const dy = linePoints[i + 1][1] - linePoints[i][1];
          const dist = Math.sqrt(dx * dx + dy * dy);
          pairs.push(dist);
        }
        return pairs.join(', ') + ', 0';
      })());

    const totalLen = connector.node()?.getTotalLength() ?? 0;
    connector
      .attr('stroke-dasharray', `${totalLen}`)
      .attr('stroke-dashoffset', totalLen)
      .transition()
      .duration(600)
      .delay(300)
      .ease(d3.easeCubicOut)
      .attr('stroke-dashoffset', 0);

    // Bars
    g.selectAll('.wf-bar')
      .data(bars)
      .join('rect')
      .attr('class', 'wf-bar')
      .attr('x', (d) => (xScale(d.week) ?? 0) + (xScale.bandwidth() - barWidth) / 2)
      .attr('y', innerH) // start from bottom for grow animation
      .attr('width', barWidth)
      .attr('height', 0)
      .attr('rx', 2)
      .attr('fill', (d) => d.color)
      .attr('opacity', 0.85)
      .attr('stroke', (d) => d3.color(d.color)?.darker(0.3)?.toString() ?? d.color)
      .attr('stroke-width', 0.5)
      .on('mouseenter', function (event, b) {
        d3.select(this).transition().duration(120).attr('opacity', 1);
        showTooltip(event, b);
      })
      .on('mousemove', (event, _b) => moveTooltip(event))
      .on('mouseleave', function (_event, _b) {
        d3.select(this).transition().duration(150).attr('opacity', 0.85);
        hideTooltip();
      })
      .transition()
      .duration(600)
      .delay((_, i) => i * 25)
      .ease(d3.easeCubicOut)
      .attr('y', (d) => {
        // For increases: bar sits on top of previous value
        // For decreases: bar sits at current value (goes down from prev)
        if (d.delta >= 0 || d.isStart) {
          return yScale(d.base + d.height);
        }
        // decrease bar: base is current count, height goes up to previous
        return yScale(d.base + d.height);
      })
      .attr('height', (d) => innerH - yScale(d.base + d.height));

    // Bar labels
    g.selectAll('.wf-label')
      .data(bars)
      .join('text')
      .attr('class', 'wf-label')
      .attr('x', (d) => (xScale(d.week) ?? 0) + xScale.bandwidth() / 2)
      .attr('y', (d) => yScale(d.base + d.height) - 6)
      .attr('text-anchor', 'middle')
      .attr('fill', '#ececf1')
      .attr('font-size', '8px')
      .attr('font-weight', '700')
      .attr('font-family', 'inherit')
      .attr('opacity', 0)
      .text((d) => d.label)
      .transition()
      .delay(800)
      .duration(300)
      .attr('opacity', 0.9);
  }, [data, dims]);

  if (data.length < 2) {
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
        <span style={{ color: '#8b8b98', fontSize: '12px' }}>En az 2 hafta verisi gerekli</span>
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      <svg ref={svgRef} style={{ display: 'block', width: '100%' }} />
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
