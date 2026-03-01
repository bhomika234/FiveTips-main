import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
} from "react";
import {
  HistoryContextType,
  HistoryState,
  HistoryFilters,
  PerformanceMetrics,
} from "../types/history.types";
import { ITip } from "../types/tips.types";
import { TipsService } from "../services/tips.service";
import { getValidDisplayTips } from "../utils/tips.mapper";

// Action types
type HistoryAction =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: ITip[] }
  | { type: "FETCH_ERROR"; payload: string }
  | { type: "UPDATE_FILTERS"; payload: Partial<HistoryFilters> }
  | { type: "UPDATE_METRICS"; payload: PerformanceMetrics }
  | { type: "CLEAR_ERROR" };

// Initial state
const initialState: HistoryState = {
  tips: [],
  displayTips: [],
  filters: {
    dateRange: "all",
    status: "all",
    search: "",
  },
  metrics: null,
  loading: false,
  error: null,
  hasMore: false,
  page: 0,
};

// Utility functions for date filtering
const getDateRange = (range: HistoryFilters["dateRange"]) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  switch (range) {
    case "thisWeek": {
      const firstDayOfWeek = new Date(today);
      firstDayOfWeek.setDate(today.getDate() - today.getDay());
      return {
        startDate: firstDayOfWeek.toISOString().split("T")[0],
        endDate: today.toISOString().split("T")[0],
      };
    }
    case "thisMonth": {
      const firstDayOfMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        1
      );
      return {
        startDate: firstDayOfMonth.toISOString().split("T")[0],
        endDate: today.toISOString().split("T")[0],
      };
    }
    case "thisYear": {
      const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
      return {
        startDate: firstDayOfYear.toISOString().split("T")[0],
        endDate: today.toISOString().split("T")[0],
      };
    }
    case "all":
    default:
      return null;
  }
};

// Reducer
function historyReducer(
  state: HistoryState,
  action: HistoryAction
): HistoryState {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        tips: action.payload,
        displayTips: getValidDisplayTips(action.payload),
        loading: false,
        error: null,
        page: 1,
      };

    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "UPDATE_FILTERS":
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
      };

    case "UPDATE_METRICS":
      return {
        ...state,
        metrics: null,
      };

    // Pagination removed

    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
}

// Create context
const HistoryContext = createContext<HistoryContextType | null>(null);

// Provider component
export function HistoryProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(historyReducer, initialState);

  // Fetch history tips
  const fetchHistory = useCallback(async () => {
    try {
      dispatch({ type: "FETCH_START" });
      // Fetch all tips (server should handle full retrieval)
      const tips = await TipsService.fetchHistoricalTips();
      dispatch({ type: "FETCH_SUCCESS", payload: tips });
    } catch (error) {
      dispatch({
        type: "FETCH_ERROR",
        payload:
          error instanceof Error ? error.message : "Failed to fetch history",
      });
    }
  }, []);

  // Refresh metrics
  const refreshMetrics = useCallback(async () => {
    try {
      const analytics = await TipsService.getPerformanceAnalytics();
      const approvalRate =
        analytics.totalTips > 0
          ? Math.round((analytics.approvedTips / analytics.totalTips) * 100)
          : 0;
      const metrics: PerformanceMetrics = { ...analytics, approvalRate };
      dispatch({ type: "UPDATE_METRICS", payload: metrics });
    } catch (error) {
      console.error("Failed to refresh metrics:", error);
    }
  }, []);

  // Update filters
  const updateFilters = useCallback((newFilters: Partial<HistoryFilters>) => {
    dispatch({ type: "UPDATE_FILTERS", payload: newFilters });
  }, []);

  // Search tips
  const searchTips = useCallback(
    (searchTerm: string) => {
      updateFilters({ search: searchTerm });
    },
    [updateFilters]
  );

  // Load more tips
  const loadMore = useCallback(async () => {
    // No-op: pagination removed
    return Promise.resolve();
  }, []);

  // Clear error
  const clearError = useCallback(() => {
    dispatch({ type: "CLEAR_ERROR" });
  }, []);

  // Initialize data on mount
  // Initial fetch
  React.useEffect(() => {
    fetchHistory();
    refreshMetrics();
  }, []);

  // Derived local filtering & search
  const filteredDisplayTips = React.useMemo(() => {
    let tips = getValidDisplayTips(state.tips);
    const { search, dateRange, status } = state.filters;

    // Date range filter (client side using created_at -> date field mapping)
    if (dateRange !== "all") {
      const range = getDateRange(dateRange);
      if (range) {
        tips = tips.filter((t) => {
          const d = new Date(t.date);
          return d >= new Date(range.startDate) && d <= new Date(range.endDate);
        });
      }
    }
    // Status filter (if mapping available)
    if (status !== "all") {
      tips = tips.filter(
        (t) => t.status.toLowerCase() === status.toLowerCase()
      );
    }
    // Search filter
    if (search.trim()) {
      const term = search.trim().toLowerCase();
      tips = tips.filter(
        (t) =>
          t.symbol.toLowerCase().includes(term) ||
          t.companyName.toLowerCase().includes(term)
      );
    }
    return tips;
  }, [state.tips, state.filters]);


  const contextValue: HistoryContextType = {
    ...state,
    displayTips: filteredDisplayTips,
    hasMore: false,
    fetchHistory,
    updateFilters,
    searchTips,
    loadMore,
    refreshMetrics,
    clearError,
  };

  return (
    <HistoryContext.Provider value={contextValue}>
      {children}
    </HistoryContext.Provider>
  );
}

// Hook to use history context
export function useHistory(): HistoryContextType {
  const context = useContext(HistoryContext);
  if (!context) {
    throw new Error("useHistory must be used within a HistoryProvider");
  }
  return context;
}
