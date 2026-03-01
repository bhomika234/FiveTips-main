import { useTips } from '../context/TipsContext';

/**
 * Custom hook that provides simplified access to tips data with common derived values
 */
export function useTipsData() {
  const {
    displayTips,
    tips,
    loading,
    error,
    fetchTips,
    refreshTips,
    getTipById,
    lastFetched
  } = useTips();

  // Derived values
  const hasData = displayTips.length > 0;
  const isEmpty = !loading && displayTips.length === 0;
  const isError = !!error && displayTips.length === 0;
  const isInitialLoading = loading && displayTips.length === 0;
  
  // Stats
  const totalTips = displayTips.length;
  const highConfidenceTips = displayTips.filter(tip => tip.status === 'High').length;
  const activeTips = displayTips.filter(tip => tip.status === 'Active').length;

  return {
    // Data
    displayTips,
    tips,
    
    // State
    loading,
    error,
    hasData,
    isEmpty,
    isError,
    isInitialLoading,
    
    // Stats
    totalTips,
    highConfidenceTips,
    activeTips,
    
    // Actions
    fetchTips,
    refreshTips,
    getTipById,
    
    // Meta
    lastFetched,
  };
}