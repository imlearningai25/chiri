export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Steamed' | 'Fried' | 'Specialty' | 'Sides';
  imageUrl: string;
  popular?: boolean;
}

export interface Location {
  id: string;
  day: string;
  time: string;
  name: string;
  address: string;
  coords?: { lat: number; lng: number };
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface SentimentAnalysis {
  summary: string;
  highlightedDishes: string[];
  areasForImprovement: string;
  overallSentiment: 'Positive' | 'Neutral' | 'Negative';
}