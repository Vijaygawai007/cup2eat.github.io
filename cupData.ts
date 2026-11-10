import { CupProduct, InstagramReel, ReviewItem, FAQItem } from '../types';

export const CUP_PRODUCTS: CupProduct[] = [
  {
    id: 'choco-glaze',
    name: 'Belgian Dark Chocolate Glaze',
    tagline: 'Rich 60% cocoa lining that slowly enriches your coffee',
    flavor: 'Dark Chocolate',
    flavorColor: '#4A2810',
    accentBg: '#F5EBE1',
    description: 'Our viral Instagram bestseller! A crisp multi-grain biscuit cup lined internally with rich, heat-resistant Belgian dark chocolate. As you sip your hot latte or cappuccino, the rim stays crispy while the base releases a subtle mocha richness. Finish the drink, then enjoy the ultimate chocolate wafer treat.',
    sizes: ['100ml', '150ml', '220ml'],
    defaultSize: '150ml',
    bestFor: 'Cappuccinos, Hot Mochas, Espresso, Dessert Gelato Bowls',
    ingredients: ['Whole Wheat Flour', 'Rolled Oats', 'Dark Cocoa Mass', 'Plant-Based Glaze', 'Brown Demerara Sugar', 'Chia Fiber', 'Sunflower Lecithin'],
    calories: 98,
    rating: 4.96,
    reviewCount: 428,
    badge: 'Viral Bestseller ⭐',
    image: '/src/assets/images/cup2eat_hero_cup_1794317046023.jpg',
    prices: {
      '12': 499,
      '50': 1599,
      '200': 5499,
      '1000': 21999
    }
  },
  {
    id: 'classic-oat',
    name: 'Artisanal Golden Oat Wafer',
    tagline: 'Wholesome, nutty, lightly toasted buttery crunch',
    flavor: 'Oat & Grains',
    flavorColor: '#B8860B',
    accentBg: '#FAF5EE',
    description: 'Crafted for purists. Stone-baked using toasted oats, golden wheat, and roasted flaxseed. Neutral yet pleasantly nutty with an all-natural moisture barrier that preserves the authentic notes of specialty single-origin coffees and green teas without altering flavor.',
    sizes: ['100ml', '150ml', '220ml'],
    defaultSize: '150ml',
    bestFor: 'Pour-overs, Americano, Filter Coffee, Herbal Teas',
    ingredients: ['Stoneground Whole Wheat', 'Rolled Oat Flakes', 'Barley Malt', 'Flaxseed Meal', 'Natural Plant Wax Barrier', 'Sea Salt'],
    calories: 82,
    rating: 4.88,
    reviewCount: 312,
    badge: 'Barista Choice 🌿',
    image: '/src/assets/images/cup2eat_varieties_1794317072355.jpg',
    prices: {
      '12': 449,
      '50': 1449,
      '200': 4999,
      '1000': 19999
    }
  },
  {
    id: 'royal-elaichi',
    name: 'Royal Elaichi (Cardamom) Chai Cup',
    tagline: 'Infused with fragrant green cardamom for the ultimate Chai experience',
    flavor: 'Cardamom & Spice',
    flavorColor: '#2D5A27',
    accentBg: '#EEF7EE',
    description: 'Specially created for authentic Indian Chai lovers! The wafer biscuit is infused with freshly cracked green cardamom pods and warm spices. When paired with hot Masala Chai or Karak Tea, it creates an unforgettable harmony — dip and bite without biscuits dropping into your cup!',
    sizes: ['100ml', '150ml'],
    defaultSize: '100ml',
    bestFor: 'Karak Chai, Masala Cutting Tea, Ginger Chai, Cardamom Milk',
    ingredients: ['Stoneground Wheat Flour', 'Oat Bran', 'Fresh Green Cardamom Essence', 'Ground Cinnamon', 'Cane Sugar', 'Natural Moisture Seal'],
    calories: 86,
    rating: 4.94,
    reviewCount: 520,
    badge: 'Chai Lover Favorite 🫖',
    image: '/src/assets/images/cup2eat_varieties_1794317072355.jpg',
    prices: {
      '12': 479,
      '50': 1520,
      '200': 5299,
      '1000': 20999
    }
  },
  {
    id: 'vanilla-bourbon',
    name: 'Madagascar Vanilla Bean Crunch',
    tagline: 'Subtle sweet aroma with double-baked waffle crunch',
    flavor: 'Sweet Vanilla',
    flavorColor: '#C49A45',
    accentBg: '#FFFDF5',
    description: 'Baked with pure Madagascar vanilla extract and golden waffle batter. Perfect for cold coffees, affogato, milkshakes, and soft-serve ice cream. Thick waffle walls ensure the cup stays crisp down to the very last scoop.',
    sizes: ['150ml', '220ml'],
    defaultSize: '220ml',
    bestFor: 'Cold Brews, Affogato, Sundaes, Thick Milkshakes, Boba',
    ingredients: ['Unbleached Wheat Flour', 'Rolled Oats', 'Madagascar Vanilla Bean Extract', 'Raw Coconut Sugar', 'Vegetable Fiber Seal'],
    calories: 92,
    rating: 4.91,
    reviewCount: 264,
    badge: 'Dessert Special 🍨',
    image: '/src/assets/images/cup2eat_bite_moment_1794317090543.jpg',
    prices: {
      '12': 479,
      '50': 1549,
      '200': 5399,
      '1000': 21499
    }
  }
];

export const INSTAGRAM_REELS: InstagramReel[] = [
  {
    id: 'reel-1',
    username: '@cup2eat',
    views: '1.4M',
    likes: '84.2K',
    title: 'The "Does It Really Not Leak?" 45-Min Boiling Coffee Test ☕🔥',
    caption: 'Pouring 95°C boiling hot filter coffee into our biscuit cup. Watch what happens after 45 mins! Spoilers: zero leaks, 100% crunch! 😋 #Cup2Eat #ZeroWaste #EatYourDrink',
    duration: '0:38',
    image: '/src/assets/images/cup2eat_hero_cup_1794317046023.jpg',
    tags: ['#EdibleCups', '#SustainableLiving', '#CafeInnovation']
  },
  {
    id: 'reel-2',
    username: '@cup2eat',
    views: '890K',
    likes: '62.1K',
    title: 'That satisfying first crunch after the last sip! 🔊👂',
    caption: 'Turn your sound ON! When your morning caffeine fix comes with a free artisanal dark chocolate cookie at the end. Who needs a bin? #SatisfyingCrunch #EcoLuxury',
    duration: '0:26',
    image: '/src/assets/images/cup2eat_bite_moment_1794317090543.jpg',
    tags: ['#CrunchyVibes', '#ZeroPlastic', '#CoffeeLovers']
  },
  {
    id: 'reel-3',
    username: '@cup2eat',
    views: '2.1M',
    likes: '142K',
    title: 'Replacing 5,000 plastic cups at a Pune Eco-Wedding 🎉🌿',
    caption: 'Guests were stunned! We served Masala Chai & Cardamom Milk in 100% edible cups. Not a single paper cup went into the trash that night! DM us for event bookings.',
    duration: '0:45',
    image: '/src/assets/images/cup2eat_varieties_1794317072355.jpg',
    tags: ['#GreenWedding', '#ZeroWasteWedding', '#EventIdeas']
  },
  {
    id: 'reel-4',
    username: '@cup2eat',
    views: '650K',
    likes: '41.8K',
    title: 'How we bake 10,000 edible cups daily in our eco-bakery 🏭🥣',
    caption: 'Behind the scenes: pure wheat, rolled oats, stone ground flours, zero artificial plastics, zero wax, 100% vegan certified. Clean food for a clean planet.',
    duration: '0:52',
    image: '/src/assets/images/cup2eat_hero_cup_1794317046023.jpg',
    tags: ['#MadeInIndia', '#EcoTech', '#BakingLove']
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Aarav Deshmukh',
    role: 'Founder, Third Wave Cafe & Roastery',
    location: 'Bandra, Mumbai',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    comment: 'Cup2Eat transformed our cafe takeaway experience. Our customers post stories of them eating their cups every single day. We eliminated over 4,000 single-use paper cups in our first month alone, and coffee sales jumped 35%!',
    highlight: '4,000 single-use cups eliminated in month 1',
    verifiedCafe: true
  },
  {
    id: 'rev-2',
    name: 'Pooja Singhania',
    role: 'Luxury Wedding & Event Curator',
    location: 'Delhi NCR',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    comment: 'We used the Royal Elaichi cups at a 600-guest celebrity reception. The aroma of cardamom with hot cutting chai was out of this world. Guests were amazed that they could eat the cup afterward. Zero waste cleanup!',
    highlight: 'Guest favorite at 600-person reception',
    verifiedCafe: true
  },
  {
    id: 'rev-3',
    name: 'Rohan Mehra',
    role: 'Specialty Coffee Connoisseur & Home Barista',
    location: 'Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    comment: 'I was skeptical about leakage or getting soggy, but it held my 90°C Aeropress coffee for 40 minutes with zero sweating or softening. And the dark chocolate lining is heaven when it gently melts. 10/10.',
    highlight: 'Zero leakage after 40 mins at 90°C',
    verifiedCafe: false
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Product',
    question: 'How does the cup stay waterproof and leak-free without plastic or wax?',
    answer: 'Cup2Eat utilizes an innovative proprietary, 100% plant-based thermal glaze composed of natural grain fibers, plant extracts, and vegetable lipids. This creates a natural hydrophobic barrier that withstands boiling temperatures up to 95°C (203°F) for over 45 minutes without softening or leaking.'
  },
  {
    category: 'Product',
    question: 'Does the cup alter the taste of my specialty coffee or tea?',
    answer: 'Not at all! Our Classic Golden Oat cup has a neutral, non-reactive interior that preserves the delicate floral and fruity notes of your brew. If you choose our Belgian Dark Chocolate or Elaichi variants, the flavor is contained within the lining to gently complement, not overpower, your beverage.'
  },
  {
    category: 'Storage & Health',
    question: 'What is the shelf life and storage requirement of Cup2Eat cups?',
    answer: 'Cup2Eat cups have an ambient shelf life of 9 to 12 months when stored in their sealed moisture-barrier bags in a cool, dry place. No refrigeration needed.'
  },
  {
    category: 'Storage & Health',
    question: 'Are Cup2Eat edible cups 100% vegetarian, vegan, and food certified?',
    answer: 'Yes! All Cup2Eat cups are 100% vegetarian, vegan, dairy-free, and non-GMO. They are produced in an FSSAI-certified, ISO-22000 compliant commercial bakery adhering to strict food safety protocols.'
  },
  {
    category: 'Cafes & B2B',
    question: 'Can cafes or events get our custom logo laser-embossed on the cups?',
    answer: 'Yes! For orders of 1,000 cups or more, we offer food-grade laser precision embossing of your cafe logo, wedding initials, or corporate brand crest on the cup exterior at no extra tooling cost.'
  },
  {
    category: 'Cafes & B2B',
    question: 'Do you ship sample boxes and wholesale quantities across India & overseas?',
    answer: 'We ship pan-India with guaranteed damage-free cushioned food-grade carton packaging. Express dispatch within 24-48 hours. International cafe orders are supported via air & sea freight.'
  }
];

export const NUTRITION_INFO = {
  servingSize: '1 Cup (approx. 28g)',
  calories: '88 - 98 kcal',
  totalFat: '2.4g (3% DV)',
  saturatedFat: '0.8g',
  transFat: '0g',
  cholesterol: '0mg',
  sodium: '32mg (1% DV)',
  totalCarbohydrates: '16g (6% DV)',
  dietaryFiber: '3.2g (11% DV)',
  sugars: '2.5g',
  protein: '2.8g (5% DV)',
  highlights: [
    '100% Plant-Based & Vegan',
    'No Preservatives or Artificial Food Colors',
    'High Dietary Fiber from Whole Oats',
    'Zero Palm Oil, Zero High-Fructose Corn Syrup',
    'Zero Added Wax or Synthetic Coatings'
  ]
};
