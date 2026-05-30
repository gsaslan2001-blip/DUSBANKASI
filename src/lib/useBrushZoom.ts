import { useRef, useEffect, useCallback } from 'react';
import * as d3 from 'd3';

/**
 * D3 brush + zoom hook for time-series charts.
 * Provides interactive date range selection and wheel zoom.
 *
 * Usage:
 *   const { brushRef, zoomRef, resetZoom } = useBrushZoom({
 *     onBrush: (domain) => setDateRange(domain),
 *   });
 *   // Attach brushRef to a <g> inside your SVG, and zoomRef to the root <svg>
 */
export function useBrushZoom({
  onBrush,
  height = 40,
}: {
  onBrush: (domain: [Date, Date]) => void;
  height?: number;
}) {
  const brushRef = useRef<SVGGElement>(null);
  const zoomRef = useRef<SVGSVGElement>(null);

  const resetZoom = useCallback(() => {
    if (onBrush) onBrush([new Date(0), new Date()]);
  }, [onBrush]);

  useEffect(() => {
    if (!brushRef.current || !zoomRef.current) return;

    const brushG = d3.select(brushRef.current);
    const zoomSvg = d3.select(zoomRef.current);

    // Brush
    const brush = d3.brushX()
      .extent([[0, 0], [brushRef.current.parentElement?.clientWidth ?? 600, height]])
      .on('end', (event) => {
        if (!event.selection) return;
        const [x0, x1] = event.selection as [number, number];
        // Convert pixel range to date range — caller needs to map
        onBrush([new Date(x0), new Date(x1)]);
      });

    brushG.call(brush);

    // Zoom
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 10])
      .on('zoom', (event) => {
        // Propagate transform to children
        zoomSvg.select('g.main').attr('transform', event.transform);
      });

    zoomSvg.call(zoom);

    return () => {
      brushG.on('.brush', null);
      zoomSvg.on('.zoom', null);
    };
  }, [onBrush, height]);

  return { brushRef, zoomRef, resetZoom };
}
