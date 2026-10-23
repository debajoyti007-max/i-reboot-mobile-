export interface IngredientItem {
  id: string
  name: string
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
  badge?: string
  inStock: boolean
  description: string
  servingInfo: string
  features: string[]
  recommended?: boolean
  image: string
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
  upiId: "8250755958@paytm",
  upiPayeeName: "PuroBite Handcrafted Foods",
  email: "purobitefoods@gmail.com",
  emailMailto: "mailto:purobitefoods@gmail.com",
  instagramUrl: "https://www.instagram.com/eatpurobite?mdxt=NHBreDZ5Mnk4Mmls",
  instagramHandle: "@eatpurobite",
  facebookUrl: "https://www.facebook.com/share/1SkeVptnc1/",
  facebookHandle: "PuroBite",
  location: "Kolkata, West Bengal, India",
  tagline: "Purity In Every Bite",
  fssaiInfo: "100% Vegetarian • Handcrafted in Kolkata",
  dispatchTime: "Dispatched within 24–48 hours",
  shelfLife: "6 Months from Handcrafted Date",
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
    subtitle: "Handcrafted with ripe bananas, whole almonds, and cashews",
    src: PUROBITE_IMAGES.hero,
    tag: "Signature Pack",
  },
  {
    id: "infographic",
    title: "What's Inside Our Banana Chew",
    subtitle: "Official packaging ingredients breakdown",
    src: PUROBITE_IMAGES.infographic,
    tag: "Packaging Facts",
  },
  {
    id: "front",
    title: "Hand-Packed Kraft Tub",
    subtitle: "Airtight seal preserving natural crunch and chewiness",
    src: PUROBITE_IMAGES.front,
    tag: "Airtight Seal",
  },
  {
    id: "table",
    title: "Handcrafted in Kolkata",
    subtitle: "Real texture and whole roasted nuts",
    src: PUROBITE_IMAGES.table,
    tag: "Kitchen Batch",
  },
  {
    id: "flatlay",
    title: "Whole Natural Ingredients",
    subtitle: "Nuts, seeds, and slow-dehydrated ripe bananas",
    src: PUROBITE_IMAGES.flatlay,
    tag: "100% Natural",
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
      "A handy 200g portion for your desk, midday snack, or pre-workout replenishment.",
    servingInfo: "Approx. 6-8 servings",
    features: [
      "100% Natural Slow-Dehydrated Bananas",
      "Whole California Almonds & Crunchy Cashews",
      "Roasted Pumpkin & Sesame Seeds",
      "0g Added Cane Sugar • Airtight Kraft Tub",
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
    badge: "Signature Pack",
    recommended: true,
    inStock: true,
    description:
      "Our flagship 350g portion. Packed with slow-dehydrated banana chew, whole roasted almonds, and crunchy cashews.",
    servingInfo: "Approx. 12-14 servings",
    features: [
      "Generous 350g Handcrafted Portion",
      "Loaded with Whole Almonds & Cashews",
      "Zero Added Cane Sugar or Syrups",
      "Airtight Aroma-Lock Seal (6 Months Shelf Life)",
    ],
    image: PUROBITE_IMAGES.hero,
  },
  {
    id: "family-700g",
    name: "Family Duo Pack",
    category: "bundle",
    weight: "2 × 350g (700g Total)",
    netGrams: 700,
    price: 749,
    badge: "2-Tub Pack",
    inStock: true,
    description:
      "Two full 350g tubs. Great for sharing with family or keeping one at home and one at work.",
    servingInfo: "Approx. 24-28 servings total",
    features: [
      "Two Full 350g Gourmet Tubs (700g Total)",
      "Individually Sealed for Freshness",
      "Zero Preservatives • Zero Added Sugar",
      "Direct Kolkata Kitchen Dispatch",
    ],
    image: PUROBITE_IMAGES.table,
  },
]

export const PRODUCT_CATEGORIES = [
  { id: "all", name: "All Tubs", count: 3 },
  { id: "single", name: "Single Tubs", count: 2 },
  { id: "bundle", name: "Bundles", count: 1 },
]

// The 5 real ingredients verified directly on PuroBite packaging infographic
export const REAL_INGREDIENTS: IngredientItem[] = [
  {
    id: "bananas",
    name: "Ripe Cavendish Bananas",
    benefit: "Naturally slow-dehydrated to concentrate fruit sweetness without any added sugar. Natural potassium & steady energy.",
    highlight: "Natural Potassium & Energy",
  },
  {
    id: "almonds",
    name: "Whole California Almonds",
    benefit: "Dry-roasted whole for a satisfying crisp snap. Provides heart-healthy plant fats and antioxidant Vitamin E.",
    highlight: "Healthy Fats & Vitamin E",
  },
  {
    id: "cashews",
    name: "Crunchy Whole Cashews",
    benefit: "Buttery, creamy whole cashew nuts delivering bioavailable plant protein and essential dietary minerals.",
    highlight: "Plant Protein & Minerals",
  },
  {
    id: "pumpkin-seeds",
    name: "Roasted Pumpkin Seeds",
    benefit: "Nutrient-dense green pepitas providing natural dietary zinc, magnesium, and subtle earthy crunch.",
    highlight: "Zinc & Magnesium",
  },
  {
    id: "sesame-seeds",
    name: "Toasted Sesame Seeds",
    benefit: "Traditional toasted seeds rolled across the banana chew for delicate aroma, plant calcium, and dietary fiber.",
    highlight: "Calcium & Fiber",
  },
]

// Real nutrition facts printed on packaging
export const NUTRITION_FACTS = [
  { label: "Energy", value: "385 kcal", sub: "Natural sustained fuel per 100g", highlight: false },
  { label: "Added Cane Sugar", value: "0.0 g", sub: "100% natural fruit sweetness", highlight: true },
  { label: "Dietary Fiber", value: "6.8 g", sub: "Natural fiber from bananas & seeds", highlight: false },
  { label: "Plant Protein", value: "8.2 g", sub: "From whole nuts and seeds", highlight: false },
  { label: "Healthy Fats", value: "13.6 g", sub: "From whole almonds & cashews (0% palm oil)", highlight: false },
  { label: "Natural Potassium", value: "480 mg", sub: "Naturally present in ripe bananas", highlight: true },
]

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How is PuroBite sweetened without added sugar?",
    answer:
      "PuroBite contains 0.0g of added cane sugar, brown sugar, or syrups. The sweetness comes entirely from ripe Cavendish bananas that are slow-dehydrated at low temperatures, which naturally concentrates the fruit's inherent sweetness into a chewy texture.",
    category: "nutrition",
  },
  {
    id: "faq-2",
    question: "What is the shelf life and how should it be stored?",
    answer:
      "Every tub has a shelf life of 6 months from the handcrafted batch date. Store in a cool, dry place away from direct sunlight, and keep the tub lid sealed tightly to maintain the crispness of the roasted nuts and seeds.",
    category: "storage",
  },
  {
    id: "faq-3",
    question: "How do I place an order?",
    answer:
      "You can place an order directly on this website using our WhatsApp button or by calling our Kolkata kitchen at +91 82507 55958. We confirm your delivery address and dispatch fresh tubs via courier within 24–48 hours.",
    category: "shipping",
  },
  {
    id: "faq-4",
    question: "Are there any artificial preservatives or palm oil?",
    answer:
      "No. PuroBite is 100% natural: zero palm oil, zero chemical preservatives, zero artificial colorings, and 100% vegetarian. All fats come naturally from whole roasted almonds and cashews.",
    category: "nutrition",
  },
  {
    id: "faq-5",
    question: "Where is PuroBite prepared?",
    answer:
      "PuroBite is handcrafted in small batches in Kolkata, West Bengal, India, and sealed in food-grade recyclable kraft tubs.",
    category: "product",
  },
]
