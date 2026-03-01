import { Images } from "../assets/Images";

export const user = {
  username: "Suneel Kumar",
  firstName: "Suneel",
  lastName: "Kumar",
  email: "suneelsuther@gmail.com",
};

export type IUsers = {
  id: number;
  name: string;
  info: string;
  image: string;
  age: number;
  address: string;
  email: string;
};

export type IStocks = {
  id: number;
  symbol: string;
  companyName: string;
  status: "High" | "Active";
  currentPrice: number;
  buyTrigger: number;
  targetPrice: number;
  targetSell?: number;
  confidence?: number;
  chartDuration?: string;
  analysis: string;
  note: string;
  image?: any;
  entry: number;
  target: number;
  result: "Win" | "Loss";
  changePercent: number;
  date: string; // ISO format: YYYY-MM-DD
};

export const stockList: IStocks[] = [
  {
    id: 0,
    symbol: "AAPL",
    image: Images.apple,
    companyName: "Apple Inc",
    status: "High",
    currentPrice: 201.56,
    buyTrigger: 220.9,
    targetPrice: 445.4,
    entry: 180.9,
    target: 195.0,
    result: "Win",
    changePercent: 20,
    date: "2025-07-03",
    analysis:
      "Based on recent earnings reports, strong market sentiment, and increased trading volume, AAPL shows exceptional upward potential in the next 5–10 trading days. The company’s latest product announcements and favorable analyst upgrades support this bullish outlook, with technical indicators suggesting a breakout above current resistance levels.",
    note: "This is not financial advice. Always consult with a licensed advisor before investing. Past performance does not guarantee future results.",
  },
  {
    id: 1,
    symbol: "MSFT",
    image: Images.microsoft,
    companyName: "Microsoft Post",
    status: "High",
    currentPrice: 201.56,
    buyTrigger: 220.9,
    targetPrice: 445.4,
    entry: 180.9,
    target: 195.0,
    result: "Loss",
    changePercent: 20,
    date: "2025-07-03",
    analysis:
      "Microsoft’s strong cloud performance, combined with positive earnings surprises, positions it well for short-term bullish movement. Technical indicators and sentiment analysis support a possible breakout.",
    note: "This is not financial advice. Always consult with a licensed advisor before investing. Past performance does not guarantee future results.",
  },
  {
    id: 2,
    symbol: "GOOGL",
    image: Images.google,
    companyName: "Alphabet Inc",
    status: "High",
    currentPrice: 201.56,
    buyTrigger: 220.9,
    targetPrice: 445.4,
    entry: 180.9,
    target: 195.0,
    result: "Win",
    changePercent: 20,
    date: "2025-07-03",
    analysis:
      "Alphabet's advertising segment rebound and AI-driven services growth suggest a potential rally. Analysts maintain a bullish stance with near-term resistance likely to be tested.",
    note: "This is not financial advice. Always consult with a licensed advisor before investing. Past performance does not guarantee future results.",
  },
  {
    id: 3,
    symbol: "AAPL",
    image: Images.apple,
    companyName: "Apple Inc",
    status: "High",
    currentPrice: 201.56,
    buyTrigger: 220.9,
    targetPrice: 445.4,
    entry: 180.9,
    target: 195.0,
    result: "Loss",
    changePercent: 20,
    date: "2025-07-03",
    analysis:
      "Apple's continued innovation in hardware and services keeps its valuation strong. Market conditions support sustained upward momentum if current trends continue.",
    note: "This is not financial advice. Always consult with a licensed advisor before investing. Past performance does not guarantee future results.",
  },
  {
    id: 4,
    symbol: "AAPL",
    image: Images.apple,
    companyName: "Apple Inc",
    status: "Active",
    currentPrice: 201.56,
    buyTrigger: 180.0,
    targetPrice: 0,
    targetSell: 180.0,
    confidence: 85,
    chartDuration: "24H",
    entry: 180.9,
    target: 195.0,
    result: "Win",
    changePercent: 20,
    date: "2025-07-03",
    analysis:
      "Based on recent earnings reports, strong market sentiment, and increased trading volume, AAPL shows exceptional upward potential in the next 5–10 trading days. The company’s latest product announcements and favorable analyst upgrades support this bullish outlook, with technical indicators suggesting a breakout above current resistance levels.",
    note: "This is not financial advice. Always consult with a licensed advisor before investing. Past performance does not guarantee future results.",
  },
  {
    id: 5,
    symbol: "AAPL",
    image: Images.apple,
    companyName: "Apple Inc",
    status: "High",
    currentPrice: 201.56,
    buyTrigger: 220.9,
    targetPrice: 445.4,
    entry: 180.9,
    target: 195.0,
    result: "Loss",
    changePercent: 20,
    date: "2025-07-03",
    analysis:
      "Apple continues to show strong fundamentals with revenue growth and strategic buybacks. Technical indicators remain bullish in the near term.",
    note: "This is not financial advice. Always consult with a licensed advisor before investing. Past performance does not guarantee future results.",
  },
  {
    id: 6,
    symbol: "MSFT",
    image: Images.microsoft,
    companyName: "Microsoft Post",
    status: "High",
    currentPrice: 201.56,
    buyTrigger: 220.9,
    targetPrice: 445.4,
    entry: 180.9,
    target: 195.0,
    result: "Win",
    changePercent: 20,
    date: "2025-07-03",
    analysis:
      "Microsoft’s steady expansion in cloud and enterprise solutions fuels investor confidence. Price action indicates potential breakout with sustained momentum.",
    note: "This is not financial advice. Always consult with a licensed advisor before investing. Past performance does not guarantee future results.",
  },
  {
    id: 7,
    symbol: "GOOGL",
    image: Images.google,
    companyName: "Alphabet Inc",
    status: "High",
    currentPrice: 201.56,
    buyTrigger: 220.9,
    targetPrice: 445.4,
    entry: 180.9,
    target: 195.0,
    result: "Win",
    changePercent: 20,
    date: "2025-07-03",
    analysis:
      "Alphabet’s investment in AI, strong advertising growth, and YouTube monetization all contribute to a strong bullish setup over the next 5–10 trading days.",
    note: "This is not financial advice. Always consult with a licensed advisor before investing. Past performance does not guarantee future results.",
  },
  {
    id: 8,
    symbol: "AAPL",
    image: Images.apple,
    companyName: "Apple Inc",
    status: "High",
    currentPrice: 201.56,
    buyTrigger: 220.9,
    targetPrice: 445.4,
    entry: 180.9,
    target: 195.0,
    result: "Win",
    changePercent: 20,
    date: "2025-07-03",
    analysis:
      "Apple’s stability in volatile markets and consistent dividend payouts make it a strong candidate for upward movement. RSI and MACD both show bullish signals.",
    note: "This is not financial advice. Always consult with a licensed advisor before investing. Past performance does not guarantee future results.",
  },
  {
    id: 9,
    symbol: "AAPL",
    image: Images.apple,
    companyName: "Apple Inc",
    status: "High",
    currentPrice: 201.56,
    buyTrigger: 220.9,
    targetPrice: 445.4,
    entry: 180.9,
    target: 195.0,
    result: "Win",
    changePercent: 20,
    date: "2025-07-03",
    analysis:
      "With strong Q2 results and new product launches, Apple’s technicals are showing continued support for bullish movement. Watch for resistance at $220.",
    note: "This is not financial advice. Always consult with a licensed advisor before investing. Past performance does not guarantee future results.",
  },
];
