import { supabase } from '../utils/supabase';
import { ITip } from '../types/tips.types';

export class TipsService {
  /**
   * Fetch all approved tips ordered by creation date (newest first)
   */
  static async fetchApprovedTips(): Promise<ITip[]> {
    try {
      const { data, error } = await supabase
        .from('tips')
        .select('*')
        .eq('status', 'APPROVED')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching tips:', error);
        throw new Error(`Failed to fetch tips: ${error.message}`);
      }

      return data || [];
    } catch (error) {
      console.error('TipsService.fetchApprovedTips error:', error);
      throw error;
    }
  }

  /**
   * Fetch live/active tips
   */
  static async fetchLiveTips(): Promise<ITip[]> {
    try {
      const { data, error } = await supabase
        .from('tips')
        .select('*')
        .eq('status', 'LIVE')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching live tips:', error);
        throw new Error(`Failed to fetch live tips: ${error.message}`);
      }

      return data || [];
    } catch (error) {
      console.error('TipsService.fetchLiveTips error:', error);
      throw error;
    }
  }

  /**
   * Fetch tips for today
   */
  static async fetchTodaysTips(): Promise<ITip[]> {
    try {
      const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
      
      const { data, error } = await supabase
        .from('tips')
        .select('*')
        .eq('date', today)
        .in('status', ['APPROVED', 'LIVE'])
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching today\'s tips:', error);
        throw new Error(`Failed to fetch today's tips: ${error.message}`);
      }

      return data || [];
    } catch (error) {
      console.error('TipsService.fetchTodaysTips error:', error);
      throw error;
    }
  }

  /**
   * Fetch tip by ID
   */
  static async fetchTipById(id: number): Promise<ITip | null> {
    try {
      const { data, error } = await supabase
        .from('tips')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching tip by ID:', error);
        throw new Error(`Failed to fetch tip: ${error.message}`);
      }

      return data;
    } catch (error) {
      console.error('TipsService.fetchTipById error:', error);
      throw error;
    }
  }

  /**
   * Fetch historical tips with pagination
   */
  static async fetchHistoricalTips(limit: number = 50, offset: number = 0): Promise<ITip[]> {
    try {
      const { data, error } = await supabase
        .from('tips')
        .select('*')
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1);

      if (error) {
        console.error('Error fetching historical tips:', error);
        throw new Error(`Failed to fetch historical tips: ${error.message}`);
      }

      return data || [];
    } catch (error) {
      console.error('TipsService.fetchHistoricalTips error:', error);
      throw error;
    }
  }

  /**
   * Fetch tips by date range
   */
  static async fetchTipsByDateRange(startDate: string, endDate: string): Promise<ITip[]> {
    try {
      const { data, error } = await supabase
        .from('tips')
        .select('*')
        .gte('date', startDate)
        .lte('date', endDate)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching tips by date range:', error);
        throw new Error(`Failed to fetch tips by date range: ${error.message}`);
      }

      return data || [];
    } catch (error) {
      console.error('TipsService.fetchTipsByDateRange error:', error);
      throw error;
    }
  }

  /**
   * Fetch tips by status (for performance tracking)
   */
  static async fetchTipsByStatus(status: ITip['status'][]): Promise<ITip[]> {
    try {
      const { data, error } = await supabase
        .from('tips')
        .select('*')
        .in('status', status)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching tips by status:', error);
        throw new Error(`Failed to fetch tips by status: ${error.message}`);
      }

      return data || [];
    } catch (error) {
      console.error('TipsService.fetchTipsByStatus error:', error);
      throw error;
    }
  }

  /**
   * Search tips by symbol or insights
   */
  static async searchTips(searchTerm: string): Promise<ITip[]> {
    try {
      const { data, error } = await supabase
        .from('tips')
        .select('*')
        .or(`stock_symbol.ilike.%${searchTerm}%,ai_insights.ilike.%${searchTerm}%`)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error searching tips:', error);
        throw new Error(`Failed to search tips: ${error.message}`);
      }

      return data || [];
    } catch (error) {
      console.error('TipsService.searchTips error:', error);
      throw error;
    }
  }

  /**
   * Get performance analytics
   */
  static async getPerformanceAnalytics(): Promise<{
    totalTips: number;
    approvedTips: number;
    liveTips: number;
    rejectedTips: number;
    avgConfidence: number;
  }> {
    try {
      const { data, error } = await supabase
        .from('tips')
        .select('status, confidence');

      if (error) {
        console.error('Error fetching performance analytics:', error);
        throw new Error(`Failed to fetch analytics: ${error.message}`);
      }

      const tips = data || [];
      const totalTips = tips.length;
      const approvedTips = tips.filter(tip => tip.status === 'APPROVED').length;
      const liveTips = tips.filter(tip => tip.status === 'LIVE').length;
      const rejectedTips = tips.filter(tip => tip.status === 'REJECTED').length;
      const avgConfidence = tips.reduce((sum, tip) => sum + tip.confidence, 0) / totalTips || 0;

      return {
        totalTips,
        approvedTips,
        liveTips,
        rejectedTips,
        avgConfidence: Math.round(avgConfidence),
      };
    } catch (error) {
      console.error('TipsService.getPerformanceAnalytics error:', error);
      throw error;
    }
  }

  /**
   * Subscribe to real-time updates for tips
   */
  static subscribeToTipsUpdates(callback: (payload: any) => void) {
    const subscription = supabase
      .channel('tips-updates')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'tips'
        },
        callback
      )
      .subscribe();

    return subscription;
  }
}