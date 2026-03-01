import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import { TipsContextType, TipsState, ITip } from '../types/tips.types';
import { TipsService } from '../services/tips.service';
import { getValidDisplayTips } from '../utils/tips.mapper';

// Action types for the reducer
type TipsAction =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: ITip[] }
  | { type: 'FETCH_ERROR'; payload: string }
  | { type: 'CLEAR_ERROR' }
  | { type: 'RESET_STATE' };

// Initial state
const initialState: TipsState = {
  tips: [],
  displayTips: [],
  loading: false,
  error: null,
  lastFetched: null,
};

// Reducer function
function tipsReducer(state: TipsState, action: TipsAction): TipsState {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        loading: true,
        error: null,
      };
    
    case 'FETCH_SUCCESS':
      const displayTips = getValidDisplayTips(action.payload);
      return {
        ...state,
        tips: action.payload,
        displayTips,
        loading: false,
        error: null,
        lastFetched: Date.now(),
      };
    
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    
    case 'RESET_STATE':
      return initialState;
    
    default:
      return state;
  }
}

// Create context
const TipsContext = createContext<TipsContextType | undefined>(undefined);

// Provider component
interface TipsProviderProps {
  children: React.ReactNode;
}

export function TipsProvider({ children }: TipsProviderProps) {
  const [state, dispatch] = useReducer(tipsReducer, initialState);

  // Fetch tips function
  const fetchTips = useCallback(async () => {
    // Don't fetch if already loading
    if (state.loading) return;

    // Optional: Implement cache logic - don't fetch if recent data exists
    const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
    if (state.lastFetched && Date.now() - state.lastFetched < CACHE_DURATION) {
      return;
    }

    dispatch({ type: 'FETCH_START' });
    
    try {
      // Fetch today's tips first, fall back to all approved tips if none for today
      let tips = await TipsService.fetchTodaysTips();
      
      // If no tips for today, get recent approved tips
      if (tips.length === 0) {
        tips = await TipsService.fetchApprovedTips();
        // Limit to 5 most recent tips
        tips = tips.slice(0, 5);
      }
      
      dispatch({ type: 'FETCH_SUCCESS', payload: tips });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch tips';
      dispatch({ type: 'FETCH_ERROR', payload: errorMessage });
    }
  }, [state.loading, state.lastFetched]);

  // Force refresh tips (bypass cache)
  const refreshTips = useCallback(async () => {
    dispatch({ type: 'FETCH_START' });
    
    try {
      let tips = await TipsService.fetchTodaysTips();
      
      if (tips.length === 0) {
        tips = await TipsService.fetchApprovedTips();
        tips = tips.slice(0, 5);
      }
      
      dispatch({ type: 'FETCH_SUCCESS', payload: tips });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to refresh tips';
      dispatch({ type: 'FETCH_ERROR', payload: errorMessage });
    }
  }, []);

  // Get tip by ID
  const getTipById = useCallback((id: number) => {
    return state.tips.find(tip => tip.id === id);
  }, [state.tips]);

  // Set up real-time subscription
  useEffect(() => {
    const subscription = TipsService.subscribeToTipsUpdates((payload) => {
      console.log('Real-time update received:', payload);
      // Refresh tips when there's an update
      refreshTips();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [refreshTips]);

  // Auto-fetch on mount
  useEffect(() => {
    fetchTips();
  }, [fetchTips]);

  const contextValue: TipsContextType = {
    ...state,
    fetchTips,
    refreshTips,
    getTipById,
  };

  return (
    <TipsContext.Provider value={contextValue}>
      {children}
    </TipsContext.Provider>
  );
}

// Custom hook to use the context
export function useTips(): TipsContextType {
  const context = useContext(TipsContext);
  if (context === undefined) {
    throw new Error('useTips must be used within a TipsProvider');
  }
  return context;
}

// Export context for advanced usage
export { TipsContext };