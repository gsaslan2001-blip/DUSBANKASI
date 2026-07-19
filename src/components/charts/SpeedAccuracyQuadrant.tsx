/**
 * Hız×Doğruluk Kadranı (Faz 3.3)
 *
 * `computeSpeedAccuracyTradeoff` + `aggregateSpeedAccuracyByLesson` çıktısını
 * görselleştirir: x = ortalama soru başı süre (sn), y = doğruluk (%).
 * Sağ-alt kadran (yavaş VE yanlış) kırmızı vurguludur — plan'ın istediği
 * "yavaş-yanlış kadranı kırmızı vurgulu" kuralı. `DersScatterPlot`'un D3
 * iskeleti buraya taşınmadı, yeniden yazıldı — eksenler ve kadran anlamı
 * farklı (hacim×doğruluk değil, hız×doğruluk), mevcut chart'ın tüketicisini
 * bozmadan yeni bir görsel olarak eklendi (bkz. devir raporu §Faz3 kararları).
 */
import { memo, useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';
import { TooltipPortal } from './TooltipPortal';
import type { SpeedAccuracyLessonPoint } from '../../lib/examAnalytics';

interface Props {
  data: SpeedAccuracyLessonPoint[];
  size?: number;
}

const MARGIN = { top: 12, right: 16, bottom: 40, left: 44 };
const TOOLTIP_OFFSET = 10;

export default memo(SpeedAccuracyQuadrant);

function SpeedAccuracyQuadrant({ data, size = 280 }: Props) {
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
    svg.attr('role', 'img').attr('aria-label', 'Hız-doğruluk kadranı — ders bazlı ortalama süre ve doğruluk');
    svg.append('title').text('Hız-doğruluk kadranı');

    const innerW = svgSize - MARGIN.left - MARGIN.right;
    const innerH = svgSize - MARGIN.top - MARGIN.bottom;

    const g = svg
      .attr('width', svgSize)
      .attr('height', svgSize)
      .append('g')
      .attr('transform', `translate(${MARGIN.left},${MARGIN.top})`);

    const maxTime = d3.max(data, d => d.avgTimeSpent) || 60;
    const xMax = Math.ceil(maxTime / 10) * 10 || 60;
    const xScale = d3.scaleLinear().domain([0, xMax]).range([0, innerW]).nice();
    const yScale = d3.scaleLinear().domain([0, 100]).range([innerH, 0]);
    const maxSample = d3.max(data, d => d.sampleCount) || 1;
    const rScale = d3.scaleSqrt().domain([0, maxSample]).range([6, Math.min(30, innerW / 10)]);

    const avgTime = d3.mean(data, d => d.avgTimeSpent) ?? xMax / 2;
    const avgAcc = 50;

    // Sağ-alt kadran (yavaş + yanlış) — kırmızı vurgu zemini
    g.append('rect')
      .attr('x', xScale(avgTime))
      .attr('y', yScale(avgAcc))
      .attr('width', Math.max(0, innerW - xScale(avgTime)))
      .attr('height', Math.max(0, innerH - yScale(avgAcc)))
      .attr('fill', 'rgba(248,113,113,0.06)');

    const xTicks = xScale.ticks(5);
    const yTicks = yScale.ticks(5);

    g.append('g').selectAll('line').data(xTicks).join('line')
      .attr('x1', d => xScale(d)).attr('x2', d => xScale(d)).attr('y1', 0).attr('y2', innerH)
      .attr('stroke', 'rgba(255,255,255,0.05)').attr('stroke-dasharray', '2,4');
    g.append('g').selectAll('line').data(yTicks).join('line')
      .attr('x1', 0).attr('x2', innerW).attr('y1', d => yScale(d)).attr('y2', d => yScale(d))
      .attr('stroke', 'rgba(255,255,255,0.05)').attr('stroke-dasharray', '2,4');

    g.append('line').attr('x1', 0).attr('x2', innerW).attr('y1', innerH).attr('y2', innerH)
      .attr('stroke', 'rgba(255,255,255,0.1)').attr('stroke-width', 1);
    g.append('line').attr('x1', 0).attr('x2', 0).attr('y1', 0).attr('y2', innerH)
      .attr('stroke', 'rgba(255,255,255,0.1)').attr('stroke-width', 1);

    g.append('g').selectAll('text').data(xTicks).join('text')
      .attr('x', d => xScale(d)).attr('y', innerH + 14).attr('text-anchor', 'middle')
      .attr('fill', '#8b8b98').attr('font-size', '8px').attr('font-family', 'inherit')
      .text(d => `${d}sn`);
    g.append('g').selectAll('text').data(yTicks).join('text')
      .attr('x', -8).attr('y', d => yScale(d) + 3).attr('text-anchor', 'end')
      .attr('fill', '#8b8b98').attr('font-size', '8px').attr('font-family', 'inherit')
      .text(d => `%${d}`);

    g.append('text').attr('x', innerW / 2).attr('y', innerH + 32).attr('text-anchor', 'middle')
      .attr('fill', '#c4c4d0').attr('font-size', '10px').attr('font-weight', '600').attr('font-family', 'inherit')
      .text('Ort. Soru Başı Süre (sn)');
    g.append('text').attr('x', -36).attr('y', innerH / 2).attr('text-anchor', 'middle')
      .attr('transform', `rotate(-90, -36, ${innerH / 2})`)
      .attr('fill', '#c4c4d0').attr('font-size', '10px').attr('font-weight', '600').attr('font-family', 'inherit')
      .text('Doğruluk %');

    g.append('line').attr('x1', 0).attr('x2', innerW).attr('y1', yScale(avgAcc)).attr('y2', yScale(avgAcc))
      .attr('stroke', 'rgba(255,255,255,0.12)').attr('stroke-dasharray', '4,6').attr('stroke-width', 1);
    g.append('line').attr('x1', xScale(avgTime)).attr('x2', xScale(avgTime)).attr('y1', 0).attr('y2', innerH)
      .attr('stroke', 'rgba(255,255,255,0.12)').attr('stroke-dasharray', '4,6').attr('stroke-width', 1);

    const tooltip = tooltipRef.current;
    function showTooltip(event: MouseEvent, d: SpeedAccuracyLessonPoint) {
      if (!tooltip) return;
      const risky = d.avgTimeSpent > avgTime && d.accuracy < avgAcc;
      tooltip.innerHTML = `<div style="font-weight:700;font-size:11px;margin-bottom:4px">${d.lesson}${risky ? ' <span style=\"color:#f87171\">⚠ Yavaş+Yanlış</span>' : ''}</div><div style="display:flex;flex-direction:column;gap:1px;font-size:10px"><span style="color:#8b8b98">Ort. süre: <span style="color:#ececf1">${d.avgTimeSpent} sn</span></span><span style="color:#8b8b98">Doğruluk: <span style="color:#34d399">%${d.accuracy}</span></span><span style="color:#8b8b98">Örneklem: <span style="color:#ececf1">${d.sampleCount} deneme</span></span></div>`;
      tooltip.style.display = 'block';
      tooltip.style.left = `${event.clientX + TOOLTIP_OFFSET}px`;
      tooltip.style.top = `${event.clientY - 70}px`;
    }
    function moveTooltip(event: MouseEvent) {
      if (!tooltip) return;
      tooltip.style.left = `${event.clientX + TOOLTIP_OFFSET}px`;
      tooltip.style.top = `${event.clientY - 70}px`;
    }
    function hideTooltip() { if (tooltip) tooltip.style.display = 'none'; }

    g.selectAll<SVGCircleElement, SpeedAccuracyLessonPoint>('.bubble')
      .data(data)
      .join('circle')
      .attr('class', 'bubble')
      .attr('r', 0)
      .attr('fill', d => (d.avgTimeSpent > avgTime && d.accuracy < avgAcc) ? '#f87171' : '#818cf8')
      .attr('fill-opacity', 0.7)
      .attr('stroke', 'rgba(8,8,10,0.4)')
      .attr('stroke-width', 1.5)
      .attr('transform', d => `translate(${xScale(d.avgTimeSpent)},${yScale(d.accuracy)})`)
      .attr('tabindex', 0)
      .attr('role', 'button')
      .attr('aria-label', d => `${d.lesson}: ortalama ${d.avgTimeSpent} saniye, doğruluk %${d.accuracy}`)
      .on('mouseenter focus', function (event, d) {
        d3.select(this).transition().duration(150).attr('fill-opacity', 0.95).attr('stroke', '#ececf1').attr('stroke-width', 2);
        showTooltip(event as unknown as MouseEvent, d);
      })
      .on('mouseleave blur', function () {
        d3.select(this).transition().duration(250).attr('fill-opacity', 0.7).attr('stroke', 'rgba(8,8,10,0.4)').attr('stroke-width', 1.5);
        hideTooltip();
      })
      .on('mousemove', (event) => moveTooltip(event))
      .transition()
      .duration(600)
      .delay((_, i) => i * 40)
      .ease(d3.easeCubicOut)
      .attr('r', d => rScale(d.sampleCount));
  }, [data, svgSize]);

  if (data.length < 1) {
    return (
      <div ref={containerRef} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: size }}>
        <span style={{ color: '#8b8b98', fontSize: '12px' }}>Yeterli deneme verisi yok</span>
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <svg ref={svgRef} style={{ display: 'block' }} />
      <TooltipPortal>
        <div
          ref={tooltipRef}
          style={{
            display: 'none', position: 'fixed', pointerEvents: 'none',
            background: 'rgba(8,8,10,0.95)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '10px', padding: '8px 12px', zIndex: 9999,
            backdropFilter: 'blur(12px)', boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
          }}
        />
      </TooltipPortal>
    </div>
  );
}
