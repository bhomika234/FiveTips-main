import { ITip, ITipDisplay } from '../types/tips.types';

/**
 * Maps stock symbols to company names
 */
const STOCK_SYMBOL_NAMES: Record<string, string> = {
  'AAPL': 'Apple Inc',
  'GOOGL': 'Alphabet Inc',
  'GOOG': 'Alphabet Inc',
  'MSFT': 'Microsoft Corporation',
  'AMZN': 'Amazon.com Inc',
  'TSLA': 'Tesla Inc',
  'NFLX': 'Netflix Inc',
  'AMD': 'Advanced Micro Devices',
  // Add more mappings as needed
};

/**
 * Determines display status based on database status and confidence
 */
function getDisplayStatus(status: ITip['status'], confidence: number): 'High' | 'Active' {
  if (status === 'LIVE') {
    return 'Active';
  }
  
  // For APPROVED tips, use confidence to determine display status
  return confidence >= 80 ? 'High' : 'Active';
}

/**
 * Converts database tip to display format for UI components
 */
export function mapTipToDisplay(tip: ITip): ITipDisplay {
  const buyPrice = typeof tip.buy_price === 'string' 
    ? parseFloat(tip.buy_price) 
    : tip.buy_price;
    
  const targetPrice = typeof tip.target_price === 'string' 
    ? parseFloat(tip.target_price) 
    : tip.target_price;

  return {
    id: tip.id,
    symbol: tip.stock_symbol,
    companyName: STOCK_SYMBOL_NAMES[tip.stock_symbol] || tip.stock_symbol,
    status: getDisplayStatus(tip.status, tip.confidence),
    buyTrigger: buyPrice,
    targetPrice: targetPrice,
    confidence: tip.confidence,
    analysis: tip.ai_insights || 'AI analysis not available for this tip.',
    date: tip.date,
  };
}

/**
 * Converts multiple database tips to display format
 */
export function mapTipsToDisplay(tips: ITip[]): ITipDisplay[] {
  return tips.map(mapTipToDisplay);
}

/**
 * Validates if a tip has all required fields for display
 */
export function validateTipForDisplay(tip: ITip): boolean {
  return !!(
    tip.id &&
    tip.stock_symbol &&
    tip.buy_price !== null &&
    tip.target_price !== null &&
    tip.confidence !== null &&
    (tip.status === 'APPROVED' || tip.status === 'LIVE')
  );
}

/**
 * Filters and maps tips that are valid for display
 */
export function getValidDisplayTips(tips: ITip[]): ITipDisplay[] {
  return tips
    .filter(validateTipForDisplay)
    .map(mapTipToDisplay);
}