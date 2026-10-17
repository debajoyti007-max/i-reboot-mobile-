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
  weight: string
  price: number
  originalPrice?: number
  badge?: string
  description: string
  features: string[]
  recommended?: boolean
}

export const PUROBITE_CONTACT = {
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
  tagline: "Purity In Every Bite",
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
    subtitle: "Stone pedestal showcase with ripe bananas and roasted almonds",
    src: PUROBITE_IMAGES.hero,
    tag: "Signature Pack",
  },
  {
    id: "flatlay",
    title: "8 Raw Superfoods",
    subtitle: "Natural ingredients spread on dark green surface",
    src: PUROBITE_IMAGES.flatlay,
    tag: "100% Whole Food",
  },
  {
    id: "front",
    title: "Hand-Packed Kraft Tub",
    subtitle: "Artisanal tub with clear freshness-lock seal",
    src: PUROBITE_IMAGES.front,
    tag: "Freshly Sealed",
  },
  {
    id: "table",
    title: "Teakwood Kitchen Counter",
    subtitle: "Real texture and natural chewiness",
    src: PUROBITE_IMAGES.table,
    tag: "Handcrafted in Kolkata",
  },
  {
    id: "infographic",
    title: "Inside Our Banana Chew",
    subtitle: "Official packaging ingredients breakdown",
    src: PUROBITE_IMAGES.infographic,
    tag: "Zero Added Sugar",
  },
]

export const SUPERFOODS: SuperfoodItem[] = [
  {
    id: "bananas",
    name: "Sun-Ripened Bananas",
    subtitle: "Slow Dehydrated Base",
    benefit: "Natural fruit sweetness with zero cane sugar. Rich in natural potassium and sustained energy.",
    highlight: "0g Added Sugar",
  },
  {
    id: "almonds",
    name: "California Whole Almonds",
    subtitle: "Crisp Roasted",
    benefit: "Packed with heart-healthy monounsaturated fats and antioxidant Vitamin E.",
    highlight: "Vitamin E & Crunch",
  },
  {
    id: "cashews",
    name: "Whole Crunchy Cashews",
    subtitle: "Creamy Plant Protein",
    benefit: "Buttery texture delivering bioavailable copper, magnesium, and plant protein.",
    highlight: "Creamy & Mineral-Rich",
  },
  {
    id: "pumpkin",
    name: "Roasted Pumpkin Seeds",
    subtitle: "Raw Pepitas",
    benefit: "Mineral dense super-seeds rich in bioavailable zinc and natural magnesium.",
    highlight: "Zinc & Magnesium",
  },
  {
    id: "white-sesame",
    name: "Toasted White Sesame",
    subtitle: "High Calcium Seeds",
    benefit: "Ancient bone-nourishing plant calcium, copper, and essential dietary fiber.",
    highlight: "Natural Calcium",
  },
  {
    id: "black-sesame",
    name: "Heritage Black Sesame",
    subtitle: "Antioxidant Rich",
    benefit: "Deep nutty aroma loaded with rare sesamin antioxidants and plant iron.",
    highlight: "Sesamin Antioxidants",
  },
  {
    id: "sunflower",
    name: "Golden Sunflower Seeds",
    subtitle: "Skin & Vitality",
    benefit: "High natural selenium and vitamin E supporting healthy cellular energy.",
    highlight: "Vitamin E & Selenium",
  },
  {
    id: "chia-melon",
    name: "Chia & Melon Super-Seeds",
    subtitle: "Omega-3 Matrix",
    benefit: "Soluble prebiotic fiber and plant-based Omega-3 ALA for smooth digestion.",
    highlight: "Omega-3 ALA",
  },
]

export const PRODUCT_PACKS: ProductPack[] = [
  {
    id: "taster",
    name: "Artisanal Discovery Tub",
    weight: "200g Fresh Pack",
    price: 249,
    description: "The perfect portion for desk fuel, daily snacking, or pre-workout replenishment.",
    features: [
      "100% Slow-Dehydrated Bananas",
      "All 8 Whole Superfoods",
      "Zero Added Sugar • No Preservatives",
      "Airtight Seal Kraft Tub",
    ],
  },
  {
    id: "signature",
    name: "Signature Gourmet Tub",
    weight: "350g Handcrafted Pack",
    price: 399,
    originalPrice: 449,
    badge: "Bestseller",
    recommended: true,
    description: "Our flagship pack. Generous weekly supply of guilt-free artisanal superfood crunch.",
    features: [
      "Generous 350g Handcrafted Portion",
      "Loaded with Whole Almonds & Cashews",
      "Zero Added Cane Sugar or Syrups",
      "Freshness Locked for 6 Months",
    ],
  },
  {
    id: "duo-family",
    name: "Superfood Family Duo Pack",
    weight: "2 × 350g (700g Total)",
    price: 749,
    originalPrice: 898,
    badge: "Best Value",
    description: "Double pack. Share with family, gym partners, or stock up for clean daily energy.",
    features: [
      "Two Full 350g Gourmet Tubs (700g Total)",
      "Save ₹149 instantly vs single packs",
      "Free Express Courier in Kolkata",
      "Fast 24-hr Dispatch Guarantee",
    ],
  },
]

export const NUTRITION_FACTS = [
  { label: "Energy", value: "385 kcal", sub: "Natural sustained fuel" },
  { label: "Added Cane Sugar", value: "0.0 g", sub: "100% fruit sweetness only", highlight: true },
  { label: "Dietary Fiber", value: "6.8 g", sub: "Prebiotic banana fiber" },
  { label: "Plant Protein", value: "8.2 g", sub: "From whole nuts and seeds" },
  { label: "Healthy Fats", value: "13.6 g", sub: "Almonds & cashews (0% palm oil)" },
  { label: "Natural Potassium", value: "480 mg", sub: "Essential electrolytes", highlight: true },
]
