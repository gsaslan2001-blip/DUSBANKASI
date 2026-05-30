import { useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { TOOLTIP_STYLE, debounce } from '../../lib/chartUtils';

export interface MorphSegment {
  label: string;
  value: number;
  color: string;
}

type Variant = 'donut' | 'bar' | 'line';

interface Props {
  data: MorphSegment[];
  variant?: Variant;
  size?: number;
}

const DONUT_SIZE = 200;
const RADIUS = 76;
const INNER_RADIUS = 50;

export default function MorphingChart({ data, variant = 'donut', size = DONUT_SIZE }: Props) {
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
    const obs = new ResizeObserver(debounce(() => measure(), 120));
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [measure]);

  useEffect(() => {
    if (!svgRef.current || data.length === 0 || svgSize === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const chartHeight = variant === 'bar' ? svgSize * 0.7 : svgSize;
    svg
      .attr('width', svgSize)
      .attr('height', chartHeight)
      .attr('viewBox', `0 0 ${svgSize} ${chartHeight}`)
      .attr('role', 'img')
      .attr('aria-label', `${variant === 'donut' ? 'Halka' : variant === 'bar' ? 'Çubuk' : 'Çizgi'} grafik`);

    svg.append('title').text('Morfik Grafik');

    const total = d3.sum(data, d => d.value) || 1;

    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, d: MorphSegment) {
      if (!tooltip) return;
      const pct = Math.round((d.value / total) * 100);
      tooltip.innerHTML = `<div style="display:flex;align-items:center;gap:6px;margin-bottom:2px"><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:${d.color}"></span><span style="font-weight:700;font-size:11px;color:#ececf1">${d.label}</span></div><span style="font-size:10px;color:#8b8b98">${d.value} (%${pct})</span>`;
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.clientX + 10}px`;
      tooltip.style.top = `${event.clientY - 44}px`;
    }
    function hideTooltip() { if (tooltip) tooltip.style.display = 'none'; }

    const g = svg.append('g');

    if (variant === 'donut') {
      g.attr('transform', `translate(${svgSize / 2},${svgSize / 2})`);
      const arcGen = d3.arc<d3.PieArcDatum<MorphSegment>>()
        .innerRadius(INNER_RADIUS * (svgSize / DONUT_SIZE))
        .outerRadius(RADIUS * (svgSize / DONUT_SIZE))
        .cornerRadius(3);

      const pieData = d3.pie<MorphSegment>().sort(null).value(d => d.value)(data.filter(d => d.value > 0));

      g.selectAll('path').data(pieData).join('path')
        .attr('d', arcGen)
        .attr('fill', d => d.data.color)
        .attr('stroke', 'rgba(8,8,10,0.8)')
        .attr('stroke-width', 1.5)
        .attr('opacity', 0)
        .on('mouseenter', function (e, d) {
          d3.select(this).transition().duration(200).attr('opacity', 1)
            .attr('transform', () => {
              const mid = (d.startAngle + d.endAngle) / 2;
              return `translate(${Math.sin(mid) * 5},${-Math.cos(mid) * 5})`;
            });
          showTooltip(e, d.data);
        })
        .on('mouseleave', function () {
          d3.select(this).transition().duration(300).attr('opacity', 0.8).attr('transform', 'translate(0,0)');
          hideTooltip();
        })
        .transition().duration(800).delay((_, i) => i * 80).ease(d3.easeCubicOut)
        .attr('opacity', 0.8);

      g.append('text').attr('text-anchor', 'middle').attr('dy', '-0.2em')
        .attr('fill', '#ececf1').attr('font-size', '24px').attr('font-weight', '900').attr('font-family', 'inherit')
        .text(String(total));
      g.append('text').attr('text-anchor', 'middle').attr('dy', '1.2em')
        .attr('fill', '#8b8b98').attr('font-size', '10px').attr('font-weight', '600').attr('font-family', 'inherit')
        .text('TOPLAM');

    } else if (variant === 'bar') {
      const barH = (chartHeight - 20) / data.length;
      const maxVal = d3.max(data, d => d.value) || 1;

      g.selectAll('rect').data(data).join('rect')
        .attr('x', 60).attr('y', (_, i) => i * barH + 4)
        .attr('width', 0).attr('height', barH - 8)
        .attr('fill', d => d.color).attr('rx', 3).attr('opacity', 0.8)
        .on('mouseenter', (e, d) => showTooltip(e, d))
        .on('mouseleave', hideTooltip)
        .transition().duration(600).delay((_, i) => i * 50).ease(d3.easeCubicOut)
        .attr('width', d => (d.value / maxVal) * (svgSize - 120));

      g.selectAll('.bar-label').data(data).join('text')
        .attr('class', 'bar-label').attr('x', 56).attr('y', (_, i) => i * barH + barH / 2)
        .attr('text-anchor', 'end').attr('dominant-baseline', 'central')
        .attr('fill', '#c4c4d0').attr('font-size', '10px').attr('font-weight', '600')
        .attr('font-family', 'inherit').text(d => d.label).attr('opacity', 0)
        .transition().delay(200).duration(400).attr('opacity', 1);

    } else if (variant === 'line') {
      const padX = 40;
      const padY = 20;
      const innerW = svgSize - padX * 2;
      const innerH = chartHeight - padY * 2;
      const maxVal = d3.max(data, d => d.value) || 1;

      const xScale = d3.scaleLinear().domain([0, data.length - 1]).range([padX, padX + innerW]);
      const yScale = d3.scaleLinear().domain([0, maxVal]).range([padY + innerH, padY]);

      // Area fill under the line
      const areaGen = d3.area<MorphSegment>()
        .x((_, i) => xScale(i))
        .y0(padY + innerH)
        .y1(d => yScale(d.value))
        .curve(d3.curveMonotoneX);

      // Gradient definition
      const defs = svg.append('defs');
      const grad = defs.append('linearGradient')
        .attr('id', 'morph-line-grad').attr('x1', '0%').attr('x2', '0%').attr('y1', '0%').attr('y2', '100%');
      grad.append('stop').attr('offset', '0%').attr('stop-color', data[0]?.color ?? '#818cf8').attr('stop-opacity', 0.4);
      grad.append('stop').attr('offset', '100%').attr('stop-color', data[0]?.color ?? '#818cf8').attr('stop-opacity', 0.02);

      g.append('path').datum(data)
        .attr('d', areaGen).attr('fill', 'url(#morph-line-grad)').attr('opacity', 0)
        .transition().duration(800).attr('opacity', 1);

      // Line path
      const lineGen = d3.line<MorphSegment>()
        .x((_, i) => xScale(i))
        .y(d => yScale(d.value))
        .curve(d3.curveMonotoneX);

      const path = g.append('path').datum(data)
        .attr('d', lineGen)
        .attr('fill', 'none')
        .attr('stroke', data[0]?.color ?? '#818cf8')
        .attr('stroke-width', 2)
        .attr('stroke-linecap', 'round')
        .attr('stroke-linejoin', 'round');

      // Animate path draw via stroke-dasharray
      const totalLength = (path.node() as SVGPathElement).getTotalLength();
      path
        .attr('stroke-dasharray', totalLength)
        .attr('stroke-dashoffset', totalLength)
        .transition().duration(900).ease(d3.easeCubicOut)
        .attr('stroke-dashoffset', 0);

      // Dots
      g.selectAll('circle').data(data).join('circle')
        .attr('cx', (_, i) => xScale(i))
        .attr('cy', d => yScale(d.value))
        .attr('r', 0)
        .attr('fill', d => d.color)
        .attr('stroke', 'rgba(8,8,10,0.6)')
        .attr('stroke-width', 1.5)
        .on('mouseenter', (e, d) => showTooltip(e, d))
        .on('mouseleave', hideTooltip)
        .transition().duration(500).delay((_, i) => i * 100).ease(d3.easeCubicOut)
        .attr('r', 5);

      // Labels
      g.selectAll('.morph-label').data(data).join('text')
        .attr('class', 'morph-label')
        .attr('x', (_, i) => xScale(i))
        .attr('y', padY + innerH + 14)
        .attr('text-anchor', 'middle')
        .attr('fill', '#c4c4d0').attr('font-size', '9px').attr('font-weight', '600')
        .attr('font-family', 'inherit').text(d => d.label).attr('opacity', 0)
        .transition().delay(300).duration(400).attr('opacity', 1);
    }

  }, [data, variant, svgSize]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <svg ref={svgRef} style={{ display: 'block' }} />
      <div ref={tooltipRef} style={TOOLTIP_STYLE} />
    </div>
  );
}
