import { create } from 'zustand';

interface ChartBrushState {
  selectedLesson: string | null;
  setSelectedLesson: (lesson: string | null) => void;
}

/** Global cross-chart highlight state. Charts read this to dim non-selected elements. */
export const useChartBrushStore = create<ChartBrushState>(set => ({
  selectedLesson: null,
  setSelectedLesson: lesson => set({ selectedLesson: lesson }),
}));
