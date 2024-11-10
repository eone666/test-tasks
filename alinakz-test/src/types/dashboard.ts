export interface CurrencyRecord {
  date: number;
  buy: number;
  sell: number;
}

export interface SellsRecord {
  name: string;
  sells: number;
}

export interface StatisticsRecord {
  name: string;
  closed: number;
  new: number;
  current: number;
}

export interface KPIRecord {
  name: string;
  value: number;
}
