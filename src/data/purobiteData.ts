export interface SuperfoodItem {
  id: string
  name: string
  subtitle: string
  benefits: string
  nutrients: string[]
  icon: string
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

export interface ReviewItem {
  id: string
  name: string
  role: string
  city: string
  rating: number
  quote: string
  date: string
}

export interface FaqItem {
  question: string
  answer: string
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
  hours: "Monday – Saturday: 9:00 AM – 8:30 PM IST",
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
    title: "Floating Studio Showcase",
    subtitle: "Artisanal Banana Chew on natural stone with ripe bananas and almonds",
    src: PUROBITE_IMAGES.hero,
    tag: "Signature Product",
  },
  {
    id: "flatlay",
    title: "8 Superfoods Flatlay",
    subtitle: "Complete raw superfood spread on deep emerald botanical surface",
    src: PUROBITE_IMAGES.flatlay,
    tag: "100% Clean Ingredients",
  },
  {
    id: "front",
    title: "Eco Kraft Seal Pack",
    subtitle: "Close-up of hand-packed artisanal tub with transparent freshness lid",
    src: PUROBITE_IMAGES.front,
    tag: "Freshly Hand-Packed",
  },
  {
    id: "table",
    title: "Rustic Artisan Kitchen",
    subtitle: "Natural warmth and texture on solid teakwood prep counter",
    src: PUROBITE_IMAGES.table,
    tag: "Small Batch Crafted",
  },
  {
    id: "infographic",
    title: "Nutritional Map & Inside Look",
    subtitle: "Comprehensive ingredient diagram mapping potassium, minerals & fats",
    src: PUROBITE_IMAGES.infographic,
    tag: "Zero Added Sugar",
  },
]

export const SUPERFOODS: SuperfoodItem[] = [
  {
    id: "bananas",
    name: "Sun-Ripened Bananas",
    subtitle: "Slow Dehydrated Whole Fruit",
    benefits: "Natural sustained glycogen release without blood sugar spikes. Loaded with active dietary potassium for cardiovascular balance.",
    nutrients: ["Potassium", "Vitamin B6", "Prebiotic Fiber"],
    icon: "banana",
    highlight: "Naturally Sweet • 0g Cane Sugar",
  },
  {
    id: "almonds",
    name: "Whole California Almonds",
    subtitle: "Crisp Roasted & Nutrient Dense",
    benefits: "Abundant in monounsaturated heart-healthy lipids and alpha-tocopherol (Vitamin E) to combat cellular oxidative stress.",
    nutrients: ["Vitamin E", "Magnesium", "Plant Protein"],
    icon: "nut",
    highlight: "Cellular Vitality & Satiety",
  },
  {
    id: "cashews",
    name: "Creamy Whole Cashews",
    subtitle: "Rich Artisanal Crunch",
    benefits: "Delivers essential amino acids, plant-based iron, and bioavailable copper supporting connective tissue and collagen synthesis.",
    nutrients: ["Copper", "Iron", "Zinc"],
    icon: "sparkles",
    highlight: "Smooth Velvet Texture",
  },
  {
    id: "pumpkin",
    name: "Roasted Pumpkin Seeds",
    subtitle: "Raw Superfood Pepitas",
    benefits: "Powerhouse of bioavailable zinc for immune defense, magnesium for neuromuscular recovery, and natural tryptophan for mood stability.",
    nutrients: ["Zinc", "Magnesium", "Tryptophan"],
    icon: "shield-check",
    highlight: "Metabolic & Immune Shield",
  },
  {
    id: "white-sesame",
    name: "Golden White Sesame",
    subtitle: "Mineral-Rich Toasted Seeds",
    benefits: "One of the richest natural plant sources of calcium, aiding bone mineral density, alongside dietary lignans for metabolic balance.",
    nutrients: ["Bioavailable Calcium", "Copper", "Dietary Fiber"],
    icon: "feather",
    highlight: "High Plant Calcium",
  },
  {
    id: "black-sesame",
    name: "Heritage Black Sesame",
    subtitle: "Antioxidant Powerhouse",
    benefits: "Packed with sesamin and sesamolin antioxidants that fight free radicals, with deep nutty undertones and natural iron.",
    nutrients: ["Sesamin Lignans", "Iron", "Phytosterols"],
    icon: "zap",
    highlight: "Deep Roasted Aroma",
  },
  {
    id: "sunflower",
    name: "Premium Sunflower Seeds",
    subtitle: "Tender Golden Kernels",
    benefits: "Rich in selenium and vitamin E for glowing skin health, cellular membrane integrity, and long-lasting energy reserves.",
    nutrients: ["Selenium", "Vitamin E", "Folate"],
    icon: "sun",
    highlight: "Radiant Skin & Defense",
  },
  {
    id: "chia-melon",
    name: "Chia & Melon Super-Seeds",
    subtitle: "Omega-3 Rich Seed Matrix",
    benefits: "Soluble mucilage fiber that forms a gentle digestive gel, keeping hunger at bay and delivering plant-based Omega-3 ALA.",
    nutrients: ["Omega-3 ALA", "Soluble Fiber", "Antioxidants"],
    icon: "heart-pulse",
    highlight: "Gut Health & Smooth Digestion",
  },
]

export const PRODUCT_PACKS: ProductPack[] = [
  {
    id: "taster",
    name: "Artisanal Discovery Tub",
    weight: "200g Fresh Pack",
    price: 249,
    description: "The ideal starter portion. Perfect for individual snacking, desk fuel, and post-workout replenishment.",
    features: [
      "100% Natural Slow-Dehydrated Bananas",
      "All 8 Superfoods & Roasted Nuts",
      "Zero Added Sugar & No Preservatives",
      "Recyclable Kraft Tub with Air-Tight Cap",
    ],
  },
  {
    id: "signature",
    name: "Signature Gourmet Tub",
    weight: "350g Handcrafted Pack",
    price: 399,
    originalPrice: 449,
    badge: "Most Popular",
    recommended: true,
    description: "Our flagship box. Generous portion for a full week of guilt-free mindful munching and clean energy.",
    features: [
      "Generous 350g Hand-Rolled Banana Chew",
      "Loaded with Whole Almonds & Cashews",
      "Perfect Pre-Workout & Mid-Day Snack",
      "Complimentary Eco Wooden Serving Tongs",
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
    description: "Double the goodness. Share with your family, gym partner, or stock up for high-intensity training phases.",
    features: [
      "Two Full 350g Gourmet Tubs",
      "Save ₹149 instantly vs single tubs",
      "Free Express Courier in Kolkata Metro",
      "Priority Dispatch Within 24 Hours",
      "PuroBite Clean Eating Gift Packaging",
    ],
  },
]

export const NUTRITION_FACTS = [
  { label: "Energy", value: "385 kcal", sub: "Clean metabolic fuel" },
  { label: "Added Cane Sugar", value: "0.0 g", sub: "100% natural fruit sugar only", highlight: true },
  { label: "Dietary Fiber", value: "6.8 g", sub: "Supports healthy digestion" },
  { label: "Plant Protein", value: "8.2 g", sub: "From whole nuts and seeds" },
  { label: "Healthy Unsaturated Fats", value: "13.6 g", sub: "Heart-friendly Omega lipids" },
  { label: "Potassium", value: "480 mg", sub: "Natural electrolyte balance" },
  { label: "Magnesium & Zinc", value: "94 mg", sub: "Muscle recovery & immunity" },
  { label: "Preservatives / Additives", value: "0.0%", sub: "Pure clean-label guarantee", highlight: true },
]

export const REVIEWS: ReviewItem[] = [
  {
    id: "r1",
    name: "Dr. Anirban Mukherjee",
    role: "Sports Nutritionist & Marathoner",
    city: "Salt Lake, Kolkata",
    rating: 5,
    quote: "Finding an Indian snack that doesn't sneak in maltodextrin, date syrup, or added sugar is rare. PuroBite's Banana Chew has been a staple in my 20km long-run fuel bag. The chewiness and nut crunch are phenomenal.",
    date: "Verified Purchase • 2 weeks ago",
  },
  {
    id: "r2",
    name: "Pooja Singhania",
    role: "Mindful Mother & Yoga Practitioner",
    city: "Alipore, Kolkata",
    rating: 5,
    quote: "My kids used to demand chocolate bars after school. Now they genuinely ask for PuroBite Banana Chew! The ingredients are clean, you can literally see the whole almonds and pumpkin seeds rolled right into it.",
    date: "Verified Purchase • 1 month ago",
  },
  {
    id: "r3",
    name: "Rohan Sengupta",
    role: "Software Engineering Lead",
    city: "New Town, Kolkata",
    rating: 5,
    quote: "The 4 PM slump at the desk used to mean oily samosas or sugary cookies. PuroBite gives that natural caramel-banana hit with zero post-sugar crash. The packaging is premium and delivery in Kolkata was lightning fast.",
    date: "Verified Purchase • 3 weeks ago",
  },
]

export const FAQS: FaqItem[] = [
  {
    question: "Is there really ZERO added sugar or artificial sweeteners?",
    answer:
      "Yes, 100% guaranteed. PuroBite Banana Chew contains zero white sugar, zero brown sugar, zero jaggery, zero corn syrup, and zero artificial sweeteners like sucralose or stevia. The rich caramel notes come solely from the natural fructose of slow-dehydrated ripe bananas.",
  },
  {
    question: "How long does a pack stay fresh and how should I store it?",
    answer:
      "Our Banana Chew has a natural shelf life of 6 months from the date of batch crafting. Keep the tub tightly sealed in a cool, dry place away from direct sunlight. In hot or humid weather, refrigeration preserves the crisp nut crunch and dense chewy texture beautifully.",
  },
  {
    question: "Is PuroBite suitable for vegans and individuals with gluten sensitivity?",
    answer:
      "Yes! PuroBite Banana Chew is completely vegan and made from naturally gluten-free ingredients (ripe bananas, almonds, cashews, pumpkin seeds, sesame, and sunflower seeds). No dairy, eggs, or wheat ingredients are used.",
  },
  {
    question: "How do I place an order and how fast is delivery?",
    answer:
      "You can place an order directly through WhatsApp at +91 82507 55958 or via our website order form. Within Kolkata, deliveries arrive in 24–48 hours. Across other metro cities in India, orders are dispatched within 24 hours via express air courier.",
  },
  {
    question: "Can athletes and gym-goers use this as pre-workout or post-workout fuel?",
    answer:
      "Absolutely. The natural fruit carbohydrates in dehydrated bananas provide rapid glycogen replenishment, while the almonds, cashews, and pumpkin seeds deliver sustained amino acids, potassium, and magnesium to prevent cramping.",
  },
]
