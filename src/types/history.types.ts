import { ITip, ITipDisplay } from './tips.types';

export interface HistoryFilters {
  dateRange: 'all' | 'thisWeek' | 'thisMonth' | 'thisYear';
  status: 'all' | 'approved' | 'live' | 'rejected';
  search: string;
}

export interface PerformanceMetrics {
  totalTips: number;
  approvedTips: number;
  liveTips: number;
  rejectedTips: number;
  avgConfidence: number;
  approvalRate: number; // percentage
  winRate?: number; // if we track results
}

export interface HistoryState {
  tips: ITip[];
  displayTips: ITipDisplay[];
  filters: HistoryFilters;
  metrics: PerformanceMetrics | null;
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  page: number;
}

export interface HistoryContextType extends HistoryState {
  fetchHistory: (reset?: boolean) => Promise<void>;
  updateFilters: (newFilters: Partial<HistoryFilters>) => void;
  searchTips: (searchTerm: string) => void;
  loadMore: () => Promise<void>;
  refreshMetrics: () => Promise<void>;
  clearError: () => void;
}

export type DateRangeOption = {
  label: string;
  value: HistoryFilters['dateRange'];
  getDates: () => { startDate: string; endDate: string };
};

export type StatusOption = {
  label: string;
  value: HistoryFilters['status'];
  color: string;
  count?: number;
};