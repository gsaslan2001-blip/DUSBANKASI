import { useRef, useEffect, useMemo } from 'react';
import * as d3 from 'd3';
import { debounce } from '../../lib/chartUtils';

interface DayCount {
  date: string; // YYYY-MM-DD
  count: number;
}

interface ContributionHeatMapProps {
  data: DayCount[];
  weeks?: number;
  width?: number;
  height?: number;
}

const DAY_LABELS = ['Pzt', '', 'Çar', '', 'Cum', '', 'Paz'];

const COLOR_SCALE = d3.scaleThreshold<number, string>()
  .domain([1, 10, 30, 60, 100])
  .range(['#0d0d12', '#1a1848', '#2d2870', '#4a3f96', '#6960c4', '#8b95f6']);

export function ContributionHeatMap({ data, weeks = 20, width: propWidth, height = 140 }: ContributionHeatMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const cellData = useMemo(() => {
    const today = new Date();
    const endDate = new Date(today);
    while (endDate.getDay() !== 6) endDate.setDate(endDate.getDate() + 1);

    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - weeks * 7 + 1);
    while (startDate.getDay() !== 1) startDate.setDate(startDate.getDate() - 1);

    const dateMap = new Map(data.map(d => [d.date, d.count]));

    const cells: { date: string; count: number; week: number; day: number; month: string }[] = [];
    const d = new Date(startDate);
    let prevMonth = '';

    while (d <= endDate) {
      const dateStr = d.toISOString().slice(0, 10);
      const weekNum = Math.floor((d.getTime() - startDate.getTime()) / (7 * 86400000));
      const dayNum = d.getDay() === 0 ? 6 : d.getDay() - 1;
      const month = d.toLocaleDateString('tr-TR', { month: 'short' });

      cells.push({
        date: dateStr,
        count: dateMap.get(dateStr) || 0,
        week: weekNum,
        day: dayNum,
        month: month !== prevMonth ? month : '',
      });
      prevMonth = month;
      d.setDate(d.getDate() + 1);
    }

    return { cells };
  }, [data, weeks]);

  useEffect(() => {
    const draw = () => {
      const svg = d3.select(svgRef.current);
      svg.selectAll('*').remove();

      const { cells } = cellData;
      if (cells.length === 0) return;

      const cellSize = 12;
      const cellPadding = 3;
      const margin = { top: 20, right: 8, bottom: 8, left: 32 };
      const totalWeeks = weeks;
      const w = totalWeeks * (cellSize + cellPadding) + margin.left + margin.right;
      const h = 7 * (cellSize + cellPadding) + margin.top + margin.bottom;

      svg
        .attr('role', 'img')
        .attr('aria-label', `${weeks} haftalık çalışma katkı haritası`)
        .attr('viewBox', `0 0 ${w} ${h}`)
        .attr('width', propWidth || '100%')
        .attr('height', height);

      svg.append('title').text('Katkı Haritası');

      const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

      // Day labels
      g.selectAll('.day-label')
        .data(DAY_LABELS)
        .join('text')
        .attr('class', 'day-label')
        .attr('x', -6)
        .attr('y', (_, i) => i * (cellSize + cellPadding) + cellSize / 2 + 1)
        .attr('text-anchor', 'end')
        .attr('dy', '0.35em')
        .attr('fill', '#71717a')
        .attr('font-size', 9)
        .attr('font-family', 'Satoshi, sans-serif')
        .text(d => d);

      // Cells
      g.selectAll('.cell')
        .data(cells)
        .join('rect')
        .attr('class', 'cell')
        .attr('x', d => d.week * (cellSize + cellPadding))
        .attr('y', d => d.day * (cellSize + cellPadding))
        .attr('width', cellSize)
        .attr('height', cellSize)
        .attr('rx', 3)
        .attr('ry', 3)
        .attr('fill', d => COLOR_SCALE(d.count))
        .attr('stroke', 'rgba(255,255,255,0.03)')
        .attr('stroke-width', 0.5)
        .on('mouseenter', function (_event, d) {
          d3.select(this).attr('stroke', 'rgba(255,255,255,0.3)').attr('stroke-width', 1.5);
          const tooltip = d3.select(tooltipRef.current);
          tooltip.style('display', 'block').html(`
            <div class="text-[11px] font-bold">${d.date}</div>
            <div class="text-[#8b8b98] text-[10px]">${d.count > 0 ? `${d.count} soru` : 'Çalışma yok'}</div>
          `);
        })
        .on('mousemove', function (event) {
          const [mx, my] = d3.pointer(event, svgRef.current);
          d3.select(tooltipRef.current)
            .style('left', `${mx + 12}px`)
            .style('top', `${my - 40}px`);
        })
        .on('mouseleave', function () {
          d3.select(this).attr('stroke', 'rgba(255,255,255,0.03)').attr('stroke-width', 0.5);
          d3.select(tooltipRef.current).style('display', 'none');
        });

      // Month labels
      const seenMonths = new Set<string>();
      const monthCells = cells.filter(c => {
        if (!c.month || seenMonths.has(c.month)) return false;
        seenMonths.add(c.month);
        return true;
      });

      g.selectAll('.month-label')
        .data(monthCells)
        .join('text')
        .attr('class', 'month-label')
        .attr('x', d => d.week * (cellSize + cellPadding))
        .attr('y', -6)
        .attr('fill', '#71717a')
        .attr('font-size', 9)
        .attr('font-family', 'Satoshi, sans-serif')
        .text(d => d.month);

      // Legend
      const legendData = [0, 10, 30, 60, 100] as const;
      const legendG = svg.append('g').attr('transform', `translate(${margin.left},${h - 4})`);

      legendG.selectAll('.legend-cell')
        .data(legendData)
        .join('rect')
        .attr('class', 'legend-cell')
        .attr('x', (_, i) => i * (cellSize + 2))
        .attr('y', -cellSize)
        .attr('width', cellSize - 2)
        .attr('height', cellSize - 2)
        .attr('rx', 2)
        .attr('fill', d => COLOR_SCALE(d));

      legendG.append('text')
        .attr('x', legendData.length * (cellSize + 2) + 4)
        .attr('y', -cellSize / 2)
        .attr('dy', '0.35em')
        .attr('fill', '#71717a')
        .attr('font-size', 9)
        .text('Az');

      legendG.append('text')
        .attr('x', legendData.length * (cellSize + 2) + 28)
        .attr('y', -cellSize / 2)
        .attr('dy', '0.35em')
        .attr('fill', '#71717a')
        .attr('font-size', 9)
        .text('Çok');
    };

    draw();

    const obs = new ResizeObserver(debounce(draw, 120));
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [cellData, propWidth, height, weeks]);

  return (
    <div ref={containerRef} className="relative">
      <svg ref={svgRef} width="100%" height={height} />
      <div
        ref={tooltipRef}
        className="absolute hidden bg-[#18181b] border border-white/[0.08] rounded-lg px-2.5 py-1.5 pointer-events-none z-50 shadow-lg"
        style={{ top: 0, left: 0 }}
      />
    </div>
  );
}
