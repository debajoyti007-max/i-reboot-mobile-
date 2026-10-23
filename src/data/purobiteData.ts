export interface SuperfoodItem {
  id: string
  name: string
  subtitle: string
  benefit: string
  highlight: string
}

export interface ProductPack {
  id: string
  name: string
  category: "all" | "single" | "bundle"
  weight: string
  netGrams: number
  price: number
  originalPrice?: number
  badge?: string
  inStock: boolean
  description: string
  servingInfo: string
  features: string[]
  recommended?: boolean
  image: string
}

export interface ReviewItem {
  id: string
  author: string
  location: string
  rating: number
  packPurchased: string
  date: string
  headline: string
  comment: string
  verifiedPurchase: boolean
}

export interface FAQItem {
  id: string
  question: string
  answer: string
  category: "product" | "nutrition" | "shipping" | "storage"
}

export const PUROBITE_CONTACT = {
  brandName: "PuroBite™",
  legalEntity: "PuroBite Handcrafted Foods",
  phoneDisplay: "+91 82507 55958",
  phoneRaw: "+918250755958",
  phoneTel: "tel:+918250755958",
  email: "purobitefoods@gmail.com",
  emailMailto: "mailto:purobitefoods@gmail.com",
  instagramUrl: "https://www.instagram.com/eatpurobite?mdxt=NHBreDZ5Mnk4Mmls",
  instagramHandle: "@eatpurobite",
  facebookUrl: "https://www.facebook.com/share/1SkeVptnc1/",
  facebookHandle: "PuroBite",
  location: "Kolkata, West Bengal, India",
  kitchenAddress: "Artisanal Kitchen, Kolkata, West Bengal 700001, India",
  tagline: "Purity In Every Bite",
  fssaiInfo: "FSSAI Registered Artisanal Kitchen • 100% Vegetarian",
  dispatchTime: "Dispatched within 24–48 hours",
  shelfLife: "6 Months from Handcrafted Date",
  freeShippingThreshold: 699,
}

export const PUROBITE_IMAGES = {
  hero: "./purobite/purobite-hero.jpg",
  front: "./purobite/purobite-front.jpg",
  flatlay: "./purobite/purobite-flatlay.jpg",
  table: "./purobite/purobite-table.jpg",
  infographic: "./purobite/purobite-infographic.jpg",
}

export const GALLERY_VIEWS = [
  {
    id: "hero",
    title: "Artisanal Banana Chew",
    subtitle: "Signature presentation with sun-ripened bananas and whole roasted almonds",
    src: PUROBITE_IMAGES.hero,
    tag: "Signature Pack",
  },
  {
    id: "flatlay",
    title: "8 Whole Superfoods",
    subtitle: "Whole nuts, roasted seeds, and slow-dehydrated bananas",
    src: PUROBITE_IMAGES.flatlay,
    tag: "100% Whole Food",
  },
  {
    id: "front",
    title: "Hand-Packed Kraft Tub",
    subtitle: "Airtight freshness seal in recyclable food-grade kraft packaging",
    src: PUROBITE_IMAGES.front,
    tag: "Airtight Seal",
  },
  {
    id: "table",
    title: "Artisanal Kitchen Texture",
    subtitle: "Natural fruit chewiness and roasted nut crunch",
    src: PUROBITE_IMAGES.table,
    tag: "Handcrafted in Kolkata",
  },
  {
    id: "infographic",
    title: "Nutritional Transparency",
    subtitle: "Official packaging ingredients and macro breakdown",
    src: PUROBITE_IMAGES.infographic,
    tag: "0g Added Sugar",
  },
]

export const PRODUCT_PACKS: ProductPack[] = [
  {
    id: "taster-200g",
    name: "Artisanal Discovery Tub",
    category: "single",
    weight: "200g Fresh Pack",
    netGrams: 200,
    price: 249,
    badge: "Discovery Pack",
    inStock: true,
    description:
      "The ideal portion to discover PuroBite. Perfect for desk fuel, daily midday vitality, or pre-workout energy without sugar spikes.",
    servingInfo: "Approx. 6-8 hearty servings per tub",
    features: [
      "100% Slow-Dehydrated Bananas",
      "All 8 Whole Superfoods Inside",
      "0g Added Cane Sugar • 0% Palm Oil",
      "Airtight Recyclable Kraft Tub (6-Month Freshness)",
    ],
    image: PUROBITE_IMAGES.front,
  },
  {
    id: "signature-350g",
    name: "Signature Gourmet Tub",
    category: "single",
    weight: "350g Handcrafted Pack",
    netGrams: 350,
    price: 399,
    originalPrice: 449,
    badge: "Bestseller",
    recommended: true,
    inStock: true,
    description:
      "Our flagship offering. A generous weekly portion of slow-dehydrated ripe banana chew loaded with whole California almonds and cashews.",
    servingInfo: "Approx. 12-14 hearty servings per tub",
    features: [
      "Generous 350g Handcrafted Portion",
      "Rich in California Almonds & Creamy Cashews",
      "Zero Added Cane Sugar or Syrups",
      "Airtight Aroma-Lock Seal (6-Month Freshness)",
    ],
    image: PUROBITE_IMAGES.hero,
  },
  {
    id: "family-700g",
    name: "Superfood Family Duo Pack",
    category: "bundle",
    weight: "2 × 350g (700g Total)",
    netGrams: 700,
    price: 749,
    originalPrice: 898,
    badge: "Best Value • Save ₹149",
    inStock: true,
    description:
      "Two full 350g tubs. Stock up for home, share with family, or split between desk and gym bag. Unlocks Free Express Delivery.",
    servingInfo: "Approx. 24-28 hearty servings total",
    features: [
      "Two Full 350g Gourmet Tubs (700g Total)",
      "Instant ₹149 Savings vs. Single Tubs",
      "Qualifies for Free Express Shipping Across India",
      "Individually Sealed for Peak Freshness",
    ],
    image: PUROBITE_IMAGES.table,
  },
]

export const PRODUCT_CATEGORIES = [
  { id: "all", name: "All Tubs", count: 3 },
  { id: "single", name: "Single Tubs", count: 2 },
  { id: "bundle", name: "Value Bundles", count: 1 },
]

export const SUPERFOODS: SuperfoodItem[] = [
  {
    id: "bananas",
    name: "Sun-Ripened Cavendish Bananas",
    subtitle: "Slow-Dehydrated Fruit Base",
    benefit: "Naturally caramelized fruit sweetness with 0g added sugar. Rich in natural potassium and sustained energy.",
    highlight: "0g Added Cane Sugar",
  },
  {
    id: "almonds",
    name: "California Whole Almonds",
    subtitle: "Dry-Roasted Golden",
    benefit: "Delivers an audible crunch, heart-healthy monounsaturated plant fats, and antioxidant Vitamin E.",
    highlight: "Crisp Nut Snap",
  },
  {
    id: "cashews",
    name: "Creamy Whole Cashews",
    subtitle: "Nutrient-Dense Minerals",
    benefit: "Buttery, delicate crumble providing plant protein, bioavailable copper, and essential magnesium.",
    highlight: "Creamy Plant Protein",
  },
  {
    id: "pumpkin",
    name: "Roasted Pumpkin Seeds",
    subtitle: "Pepita Super-Seeds",
    benefit: "Mineral-rich crunch loaded with dietary zinc, magnesium, and plant-derived antioxidants.",
    highlight: "Zinc & Magnesium",
  },
  {
    id: "white-sesame",
    name: "Toasted White Sesame",
    subtitle: "Bone-Nourishing Seeds",
    benefit: "Delicate nutty fragrance supplying natural plant calcium, healthy sesamin lignans, and fiber.",
    highlight: "Natural Plant Calcium",
  },
  {
    id: "black-sesame",
    name: "Heritage Black Sesame",
    subtitle: "Antioxidant Powerhouse",
    benefit: "Deep earthy aroma loaded with concentrated polyphenols, iron, and ancient restorative nutrients.",
    highlight: "Iron & Antioxidants",
  },
  {
    id: "sunflower",
    name: "Golden Sunflower Seeds",
    subtitle: "Skin & Vitality Support",
    benefit: "Supplies natural selenium, dietary fiber, and Vitamin E to support cellular stamina.",
    highlight: "Selenium & Vitality",
  },
  {
    id: "chia-melon",
    name: "Chia & Melon Super-Seeds",
    subtitle: "Prebiotic & Omega Matrix",
    benefit: "Soluble prebiotic fiber that supports smooth gut digestion and provides plant-based Omega-3 ALA.",
    highlight: "Prebiotic Gut Support",
  },
]

export const NUTRITION_FACTS = [
  { label: "Energy", value: "385 kcal", sub: "Natural sustained fuel per 100g", highlight: false },
  { label: "Added Cane Sugar", value: "0.0 g", sub: "100% fruit sweetness only", highlight: true },
  { label: "Dietary Fiber", value: "6.8 g", sub: "Prebiotic banana fiber for digestion", highlight: false },
  { label: "Plant Protein", value: "8.2 g", sub: "From whole nuts and super-seeds", highlight: false },
  { label: "Healthy Fats", value: "13.6 g", sub: "Whole almonds & cashews (0% palm oil)", highlight: false },
  { label: "Natural Potassium", value: "480 mg", sub: "Essential electrolytes from banana", highlight: true },
]

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Ananya Banerjee",
    location: "Kolkata, WB",
    rating: 5,
    packPurchased: "Signature Gourmet Tub (350g)",
    date: "14 Oct 2026",
    headline: "Unbelievable natural sweetness — zero cane sugar!",
    comment:
      "I was skeptical about 0g added sugar, but the slow-dehydrated banana base has a rich, toffee-like caramel flavor. The whole almonds and cashews give a fantastic crunch. Ordering my third tub already!",
    verifiedPurchase: true,
  },
  {
    id: "rev-2",
    author: "Rahul S. Mehta",
    location: "Bengaluru, KA",
    rating: 5,
    packPurchased: "Superfood Family Duo Pack (700g)",
    date: "18 Oct 2026",
    headline: "The cleanest midday energy snack I've found.",
    comment:
      "Commercial energy bars always give me an insulin spike and an afternoon crash. PuroBite gives 4-5 hours of steady stamina with zero bloat. Also love that it arrived in pristine airtight kraft packaging.",
    verifiedPurchase: true,
  },
  {
    id: "rev-3",
    author: "Dr. Priyanka Sengupta",
    location: "Kolkata, WB",
    rating: 5,
    packPurchased: "Signature Gourmet Tub (350g)",
    date: "20 Oct 2026",
    headline: "Whole, recognizable superfoods. Honest craft.",
    comment:
      "You can see every almond, cashew, and sesame seed. No powders, no palm oil, no artificial flavorings. Truly handcrafted in small batches right here in Kolkata.",
    verifiedPurchase: true,
  },
]

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How is PuroBite sweetened if there is zero added sugar?",
    answer:
      "We slow-dehydrate sun-ripened Cavendish bananas at low temperatures. This evaporates water and naturally concentrates the fruit's inherent fructose, creating a chewy caramel texture with 0.0g of added cane sugar, brown sugar, or syrups.",
    category: "nutrition",
  },
  {
    id: "faq-2",
    question: "How long does a tub stay fresh?",
    answer:
      "Every tub has a shelf life of 6 months from the handcrafted batch date. We pack our banana chew in airtight, food-grade recyclable kraft tubs with an internal moisture barrier to preserve peak crunch and chewy texture without any chemical preservatives.",
    category: "storage",
  },
  {
    id: "faq-3",
    question: "How do I place an order and what are the delivery options?",
    answer:
      "You can place an order directly on this website using our 1-Tap WhatsApp Checkout or by calling our Kolkata kitchen hotline (+91 82507 55958). Orders over ₹699 qualify for Free Express Delivery across India. All orders dispatch within 24–48 hours.",
    category: "shipping",
  },
  {
    id: "faq-4",
    question: "Are there any artificial preservatives, palm oil, or gluten?",
    answer:
      "None. PuroBite is 100% clean label: 0% palm oil, zero chemical preservatives, zero artificial food colorings, and 100% vegetarian. All fats come naturally from whole roasted California almonds and cashews.",
    category: "nutrition",
  },
  {
    id: "faq-5",
    question: "How should I store PuroBite once opened?",
    answer:
      "Keep the tub tightly sealed in a cool, dry place away from direct sunlight. Refrigeration is not required, but keeping the lid sealed preserves the satisfying crunch of the roasted nuts and seeds.",
    category: "storage",
  },
  {
    id: "faq-6",
    question: "Is PuroBite suitable for workouts or desk energy?",
    answer:
      "Yes! With 480mg of natural potassium, 8.2g of plant protein, and slow-burning low-glycemic fruit carbohydrates, PuroBite is engineered by nature for sustained physical stamina and mental focus without post-sugar crashes.",
    category: "product",
  },
]

export const WHY_CHOOSE_ITEMS = [
  {
    id: "sugar",
    title: "0g Added Cane Sugar",
    description: "100% natural ripe fruit sweetness. Zero refined sucrose, corn syrups, or artificial sweeteners.",
    icon: "Banana",
    metric: "0.0 g",
  },
  {
    id: "superfoods",
    title: "8 Whole Superfoods",
    description: "California whole almonds, buttery cashews, pumpkin, sesame, sunflower, and prebiotic super-seeds.",
    icon: "Sprout",
    metric: "8 Real",
  },
  {
    id: "oil",
    title: "0% Palm Oil & Trans Fats",
    description: "Zero cheap hydrogenated vegetable oils. Every fat comes exclusively from whole roasted nuts.",
    icon: "ShieldCheck",
    metric: "0.0%",
  },
  {
    id: "craft",
    title: "Small-Batch Kolkata Kitchen",
    description: "Handcrafted in small daily runs. Sealed and dispatched within 24–48 hours for maximum freshness.",
    icon: "Clock",
    metric: "24-48h",
  },
  {
    id: "energy",
    title: "Crash-Free Stamina",
    description: "Low-glycemic complex energy sustained for 4–5 hours. 480mg natural potassium per 100g.",
    icon: "Zap",
    metric: "4-5 Hrs",
  },
  {
    id: "seal",
    title: "6-Month Freshness Lock",
    description: "Hermetically sealed in recyclable kraft tubs with an airtight barrier to protect aroma and crunch.",
    icon: "PackageCheck",
    metric: "6 Months",
  },
]
