export interface ITip {
  id: number;
  date: string;
  stock_symbol: string;
  buy_price: string | number;
  target_price: string | number;
  confidence: number;
  status: 'PENDING' | 'APPROVED' | 'LIVE' | 'REJECTED';
  ai_insights: string;
  admin_notes: string;
  company_logo_url: string | null;
  created_at: string;
  updated_at: string;
  user_id: string | null;
  share_note: boolean;
}

export interface ITipDisplay {
  id: number;
  symbol: string;
  companyName: string;
  status: 'High' | 'Active';
  buyTrigger: number;
  targetPrice: number;
  confidence: number;
  analysis: string;
  date: string;
}

export interface TipsState {
  tips: ITip[];
  displayTips: ITipDisplay[];
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
}

export interface TipsContextType extends TipsState {
  fetchTips: () => Promise<void>;
  refreshTips: () => Promise<void>;
  getTipById: (id: number) => ITip | undefined;
}