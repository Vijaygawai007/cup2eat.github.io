export interface CupProduct {
  id: string;
  name: string;
  tagline: string;
  flavor: string;
  flavorColor: string;
  accentBg: string;
  description: string;
  sizes: ('100ml' | '150ml' | '220ml')[];
  defaultSize: '100ml' | '150ml' | '220ml';
  bestFor: string;
  ingredients: string[];
  calories: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  prices: {
    '12': number; // Taster box
    '50': number; // Cafe starter
    '200': number; // Event bundle
    '1000': number; // Wholesale pallet
  };
}

export interface CartItem {
  productId: string;
  name: string;
  flavor: string;
  size: '100ml' | '150ml' | '220ml';
  packSize: 12 | 50 | 200 | 1000;
  unitPrice: number;
  quantity: number;
  image: string;
}

export interface InstagramReel {
  id: string;
  username: string;
  views: string;
  likes: string;
  title: string;
  caption: string;
  duration: string;
  image: string;
  tags: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
  highlight: string;
  verifiedCafe?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Product' | 'Cafes & B2B' | 'Storage & Health';
}
