/**
 * Percentile Bar — DUS sıralama yüzdelik + aspirasyon bölgeleri
 */
import { memo, useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';

interface Props {
  percentile: number;
  estimatedRank: number;
  aspirationZone: 'target' | 'competitive' | 'safe' | 'below_threshold';
}

export default memo(PercentileBar);

function PercentileBar({ percentile, estimatedRank }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(400);
  const h = 32;

  useEffect(() => {
    const obs = new ResizeObserver(entries => {
      setW(entries[0]?.contentRect.width ?? 400);
    });
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || w <= 0) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const zones = [
      { start: 0, end: 70, color: '#f8717120', label: '' },
      { start: 70, end: 85, color: '#fbbf2420', label: '' },
      { start: 85, end: 95, color: '#60a5fa20', label: '' },
      { start: 95, end: 100, color: '#34d39920', label: '' },
    ];

    // Zone backgrounds
    for (const z of zones) {
      svg.append('rect')
        .attr('x', `${z.start}%`).attr('y', 6)
        .attr('width', `${z.end - z.start}%`).attr('height', h - 12)
        .attr('fill', z.color).attr('rx', 3);
    }

    // Zone labels
    svg.append('text')
      .attr('x', '97%').attr('y', 28)
      .attr('text-anchor', 'end').attr('fill', '#34d399')
      .attr('font-size', 9).text('TOP 10');
    svg.append('text')
      .attr('x', '72%').attr('y', 12)
      .attr('text-anchor', 'start').attr('fill', '#8b8b98')
      .attr('font-size', 9).text('Yerleşme');

    // Percentile marker
    const pctX = Math.min(98, Math.max(2, percentile));
    svg.append('line')
      .attr('x1', `${pctX}%`).attr('x2', `${pctX}%`)
      .attr('y1', 2).attr('y2', h - 2)
      .attr('stroke', '#ececf1').attr('stroke-width', 2);

    svg.append('circle')
      .attr('cx', `${pctX}%`).attr('cy', h / 2).attr('r', 5)
      .attr('fill', '#ececf1');

    // Label
    svg.append('text')
      .attr('x', `${pctX}%`).attr('y', -4)
      .attr('text-anchor', 'middle').attr('fill', '#ececf1')
      .attr('font-size', 10).attr('font-weight', 700)
      .text(`%${percentile} · Sıralama ~${estimatedRank.toLocaleString('tr-TR')}`);
  }, [w, percentile, estimatedRank]);

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <svg ref={svgRef} width={w} height={h + 8} />
    </div>
  );
}
