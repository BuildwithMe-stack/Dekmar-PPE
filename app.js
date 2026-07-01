const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const assets = {
  gloves: "assets/products/gloves.jpg",
  respirator: "assets/products/respirator.jpg",
  boots: "assets/products/boots.jpg",
  headEye: "assets/products/head-eye.jpg",
  hivis: "assets/products/hivis.jpg",
  hero: "assets/danphis-ppe-hero.jpg"
};

const rates = {
  AUD: 1,
  USD: 0.66,
  KES: 86
};

const state = {
  currency: "AUD",
  view: "grid",
  cart: [],
  wishlist: new Set(),
  compare: new Set(),
  recentlyViewed: [],
  heroIndex: 0
};

const heroSlides = [
  {
    eyebrow: "Premium PPE Distribution",
    title: "Safety equipment built for demanding work.",
    body: "Danphis Enterprises Ltd supplies certified PPE for construction, mining, healthcare, manufacturing, logistics, and public-sector procurement."
  },
  {
    eyebrow: "Hand Protection",
    title: "Gloves matched to chemicals, cuts, grip, and dexterity.",
    body: "Select from nitrile, PVC, coated, heat-resistant, cut-rated, and disposable gloves with structured standards data."
  },
  {
    eyebrow: "Respiratory Protection",
    title: "Respirators for dust, fumes, vapours, and site exposure.",
    body: "Compare cartridges, fit guidance, storage requirements, and compliance information before procurement."
  },
  {
    eyebrow: "Safety Footwear",
    title: "Industrial boots for impact, slip, water, heat, and electrical risk.",
    body: "Choose footwear by standard, sole rating, toe protection, industry, and worksite conditions."
  },
  {
    eyebrow: "Protective Clothing",
    title: "High-visibility workwear for road, rail, warehouse, and night operations.",
    body: "Build compliant kits with jackets, coveralls, disposable PPE, and weather-ready protective clothing."
  }
];

const categories = [
  ["Hand Protection", "Cut, chemical, thermal, grip, and disposable gloves", "icon-shield"],
  ["Eye Protection", "Safety glasses, goggles, splash protection", "icon-shield"],
  ["Respiratory Protection", "Masks, cartridges, respirators, fit kits", "icon-shield"],
  ["Hearing Protection", "Ear plugs, defenders, communications", "icon-shield"],
  ["Protective Clothing", "Hi-vis, coveralls, chemical suits", "icon-shield"],
  ["Safety Footwear", "S1P, S3, EH, waterproof and slip-rated boots", "icon-shield"],
  ["Fall Protection", "Harnesses, lanyards, anchors, rescue kits", "icon-shield"],
  ["Head Protection", "Hard hats, bump caps, accessories", "icon-shield"],
  ["Face Shields", "Grinding, chemical splash, heat and arc options", "icon-shield"],
  ["Chemical Protection", "Gloves, goggles, suits, spill response", "icon-shield"],
  ["Disposable PPE", "Masks, gowns, caps, shoe covers", "icon-shield"],
  ["Emergency Equipment", "First aid, eyewash, rescue, site response", "icon-shield"]
];

const industries = [
  ["Construction", "Impact, dust, height, noise, visibility", ["Hard hats", "Cut gloves", "S3 boots"]],
  ["Mining", "Respirable dust, impact, heat, visibility", ["P3 respiratory", "Hi-vis clothing", "Hearing protection"]],
  ["Manufacturing", "Cut, abrasion, chemicals, machine hazards", ["Cut gloves", "Eye protection", "Safety footwear"]],
  ["Oil & Gas", "Flame, chemicals, confined spaces, respiratory risk", ["FR clothing", "Respirators", "Chemical gloves"]],
  ["Healthcare", "Disposable PPE, splash, infection control", ["Nitrile gloves", "Masks", "Face shields"]],
  ["Warehousing", "Foot protection, visibility, manual handling", ["Safety boots", "Hi-vis", "Grip gloves"]],
  ["Transport", "Roadside visibility, weather, first response", ["Hi-vis jackets", "Road safety", "First aid"]],
  ["Food Processing", "Hygiene, cut, liquid, low-temperature work", ["Disposable PPE", "Cut gloves", "Waterproof boots"]],
  ["Government", "Standardized supply, tenders, documentation", ["Procurement bundles", "Certificates", "Repeat carts"]]
];

const brands = [
  ["Ansell", "Hand and body protection category coverage"],
  ["Honeywell", "Industrial safety and respiratory solutions"],
  ["3M", "Respiratory, hearing, eyewear, and site PPE"],
  ["Uvex", "Eye, hearing, head, and footwear protection"],
  ["Bata Industrials", "Industrial footwear"],
  ["Delta Plus", "Broad PPE catalogue"],
  ["Portwest", "Workwear and high-visibility clothing"],
  ["JSP", "Head, face, and respiratory safety"],
  ["Drager", "Respiratory and gas detection"],
  ["MSA", "Head, fall, and respiratory protection"]
];

const products = [
  {
    id: "DP-GLO-CHEM-410",
    name: "AcidShield 410 Chemical Glove",
    brand: "Danphis Select",
    model: "AS-410",
    category: "Hand Protection",
    image: assets.gloves,
    price: 34,
    rating: 4.8,
    popularity: 97,
    newest: 9,
    inventory: 428,
    availability: "In stock",
    summary: "Extended cuff nitrile/PVC glove for acids, caustics, oils, and wet handling.",
    industries: ["Mining", "Manufacturing", "Oil & Gas", "Food Processing"],
    hazards: ["Acid splash", "Caustics", "Abrasion", "Wet grip"],
    standards: ["EN 374", "EN 388", "ISO 21420"],
    protectionLevel: "Chemical Level 4",
    colour: "Teal",
    sizes: ["S", "M", "L", "XL", "2XL"],
    material: "Nitrile/PVC blend",
    weight: "160 g",
    packaging: "12 pairs per bag, 72 pairs per carton",
    certification: "EN 374 Type A, EN 388 4121X",
    hazardRating: "Chemical splash, abrasion medium",
    chemicalResistance: "Acids, alkalis, hydrocarbons",
    heatResistance: "Contact heat 100 C short duration",
    cutResistance: "EN 388 level 1",
    electricalRating: "Not electrically rated",
    waterproofRating: "Liquidproof coating",
    uvProtection: "Not applicable",
    enStandards: "EN 374, EN 388, ISO 21420",
    ansiStandards: "ANSI abrasion 3",
    isoStandards: "ISO 21420",
    applications: ["Chemical handling", "Washdown", "Mining maintenance", "Fuel handling"],
    features: ["Textured palm", "Extended cuff", "Liquid barrier", "Reusable construction"],
    benefits: ["Confident wet grip", "Broad chemical coverage", "Reduced cuff ingress"],
    shelfLife: "5 years unopened",
    storage: "Store cool, dry, away from sunlight and ozone",
    cleaning: "Rinse after use and air dry before storage",
    country: "Malaysia",
    manufacturer: "Danphis Select",
    warranty: "12 months against manufacturing defects",
    pros: "Broad chemical resistance, durable, strong wet grip",
    cons: "Lower cut rating than dedicated cut gloves",
    related: ["DP-EYE-GOG-220", "DP-CLO-FR-730", "DP-RESP-HF-620"],
    accessories: ["Chemical splash goggles", "Disposable sleeve protectors"],
    boughtTogether: ["DP-EYE-GOG-220", "DP-CLO-FR-730"]
  },
  {
    id: "DP-GLO-CUT-A5",
    name: "CutGuard A5 Nitrile Grip Glove",
    brand: "Danphis Select",
    model: "CG-A5",
    category: "Hand Protection",
    image: assets.gloves,
    price: 22,
    rating: 4.7,
    popularity: 93,
    newest: 6,
    inventory: 680,
    availability: "In stock",
    summary: "High-dexterity coated glove for sharp edges, assembly, and general fabrication.",
    industries: ["Construction", "Manufacturing", "Warehousing"],
    hazards: ["Cut", "Abrasion", "Oil grip"],
    standards: ["EN 388", "ANSI A5", "ISO 21420"],
    protectionLevel: "Cut A5",
    colour: "Grey/Black",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    material: "HPPE blend with nitrile palm",
    weight: "72 g",
    packaging: "12 pairs per bag, 120 pairs per carton",
    certification: "EN 388 4X42E, ANSI A5",
    hazardRating: "Cut high, abrasion high",
    chemicalResistance: "Limited oil contact only",
    heatResistance: "Not heat rated",
    cutResistance: "ANSI A5, EN E",
    electricalRating: "Not electrically rated",
    waterproofRating: "Palm coating only",
    uvProtection: "Not applicable",
    enStandards: "EN 388, ISO 21420",
    ansiStandards: "ANSI/ISEA 105 A5",
    isoStandards: "ISO 21420",
    applications: ["Metal handling", "Glass handling", "Assembly", "Maintenance"],
    features: ["Seamless liner", "Nitrile microfoam palm", "Reinforced thumb crotch"],
    benefits: ["High cut protection", "Good dexterity", "Breathable back"],
    shelfLife: "5 years unopened",
    storage: "Store dry and away from direct heat",
    cleaning: "Wash at low temperature, air dry",
    country: "Vietnam",
    manufacturer: "Danphis Select",
    warranty: "12 months against manufacturing defects",
    pros: "Strong dexterity, high cut protection, good abrasion life",
    cons: "Not intended for liquid immersion",
    related: ["DP-FOOT-S3-900", "DP-EYE-GOG-220"],
    accessories: ["Glove clips", "Cut risk signage"],
    boughtTogether: ["DP-FOOT-S3-900", "DP-EYE-GOG-220"]
  },
  {
    id: "DP-RESP-HF-620",
    name: "AirSeal 620 Half-Face Respirator",
    brand: "Danphis Select",
    model: "AS-620",
    category: "Respiratory Protection",
    image: assets.respirator,
    price: 96,
    rating: 4.9,
    popularity: 98,
    newest: 10,
    inventory: 164,
    availability: "In stock",
    summary: "Reusable half-face respirator with replaceable particulate and gas filter options.",
    industries: ["Mining", "Construction", "Oil & Gas", "Manufacturing"],
    hazards: ["Dust", "Fumes", "Organic vapours", "Welding fumes"],
    standards: ["AS/NZS 1716", "EN 140", "NIOSH P100"],
    protectionLevel: "P2/P3 compatible",
    colour: "Navy/White",
    sizes: ["S", "M", "L"],
    material: "Medical-grade silicone",
    weight: "138 g mask body",
    packaging: "1 mask body, filters sold separately",
    certification: "AS/NZS 1716, EN 140 compatible",
    hazardRating: "Respirable dust and selected gases with correct cartridges",
    chemicalResistance: "With approved organic vapour cartridges",
    heatResistance: "Not for firefighting or oxygen-deficient atmospheres",
    cutResistance: "Not applicable",
    electricalRating: "Not electrically rated",
    waterproofRating: "Washable mask body",
    uvProtection: "Not applicable",
    enStandards: "EN 140",
    ansiStandards: "NIOSH P100 cartridge dependent",
    isoStandards: "ISO 16975 guidance",
    applications: ["Grinding", "Sanding", "Spraying", "Welding support with correct filters"],
    features: ["Low-profile cartridges", "Soft face seal", "Drop-down harness", "Replaceable valves"],
    benefits: ["Reusable value", "Comfortable fit", "Broad filter flexibility"],
    shelfLife: "5 years for mask body, filter shelf life varies",
    storage: "Store clean in sealed bag away from contaminants",
    cleaning: "Remove filters, wash mask body with mild detergent, air dry",
    country: "China",
    manufacturer: "Danphis Select",
    warranty: "12 months against manufacturing defects",
    pros: "Flexible filter platform, strong face seal, reusable",
    cons: "Requires correct fit test and cartridge selection",
    related: ["DP-EYE-GOG-220", "DP-GLO-CHEM-410", "DP-HEAR-31"],
    accessories: ["P3 particulate filters", "Organic vapour cartridges", "Fit test kit"],
    boughtTogether: ["DP-EYE-GOG-220", "DP-HEAR-31"]
  },
  {
    id: "DP-RESP-WLD-P3",
    name: "WeldAir P3 Fume Respirator Kit",
    brand: "Danphis Select",
    model: "WA-P3",
    category: "Respiratory Protection",
    image: assets.respirator,
    price: 132,
    rating: 4.6,
    popularity: 84,
    newest: 8,
    inventory: 41,
    availability: "Low stock",
    summary: "Compact P3 particulate kit for welding fume and high-dust fabrication tasks.",
    industries: ["Manufacturing", "Construction", "Mining"],
    hazards: ["Welding fumes", "Fine dust", "Metal particulates"],
    standards: ["EN 140", "EN 143 P3", "AS/NZS 1716"],
    protectionLevel: "P3",
    colour: "Navy/White",
    sizes: ["M", "L"],
    material: "Silicone mask body, P3 filter media",
    weight: "210 g with filters",
    packaging: "1 mask, 2 P3 filters, storage bag",
    certification: "P3 particulate kit",
    hazardRating: "High particulate filtration",
    chemicalResistance: "Not for gases unless fitted with gas cartridges",
    heatResistance: "Not for oxygen-deficient environments",
    cutResistance: "Not applicable",
    electricalRating: "Not electrically rated",
    waterproofRating: "Washable mask body",
    uvProtection: "Not applicable",
    enStandards: "EN 140, EN 143",
    ansiStandards: "NIOSH particulate equivalent guidance",
    isoStandards: "ISO 16975 guidance",
    applications: ["Welding", "Grinding", "Metal fabrication", "Demolition dust"],
    features: ["Low-profile filters", "Spark-resistant covers", "Storage pouch"],
    benefits: ["Better clearance under shields", "Reusable mask platform"],
    shelfLife: "5 years unopened for mask body",
    storage: "Seal after use and replace filters per exposure plan",
    cleaning: "Clean mask body only after removing filters",
    country: "China",
    manufacturer: "Danphis Select",
    warranty: "12 months against manufacturing defects",
    pros: "Strong particulate protection, works under many welding shields",
    cons: "Not a gas or vapour solution without other cartridges",
    related: ["DP-EYE-GOG-220", "DP-GLO-CUT-A5"],
    accessories: ["Replacement P3 filters", "Spark filter covers"],
    boughtTogether: ["DP-GLO-CUT-A5", "DP-HEAR-31"]
  },
  {
    id: "DP-FOOT-S3-900",
    name: "TerraGrip 900 S3 Safety Boot",
    brand: "Bata Industrials",
    model: "TG-900",
    category: "Safety Footwear",
    image: assets.boots,
    price: 149,
    rating: 4.8,
    popularity: 95,
    newest: 7,
    inventory: 236,
    availability: "In stock",
    summary: "Water-resistant S3 boot with composite toe, anti-penetration midsole, and slip-resistant outsole.",
    industries: ["Construction", "Warehousing", "Transport", "Manufacturing"],
    hazards: ["Impact", "Slip", "Puncture", "Water"],
    standards: ["EN ISO 20345 S3", "SRC", "ASTM F2413"],
    protectionLevel: "S3 SRC",
    colour: "Black",
    sizes: ["6", "7", "8", "9", "10", "11", "12", "13"],
    material: "Water-resistant leather, PU/rubber sole",
    weight: "710 g per boot size 9",
    packaging: "1 pair per box",
    certification: "EN ISO 20345 S3 SRC",
    hazardRating: "Impact, penetration, slip, water-resistant upper",
    chemicalResistance: "Fuel oil resistant outsole",
    heatResistance: "Outsole to 300 C short duration",
    cutResistance: "Not applicable",
    electricalRating: "Antistatic",
    waterproofRating: "Water-resistant upper",
    uvProtection: "Not applicable",
    enStandards: "EN ISO 20345",
    ansiStandards: "ASTM F2413 guidance",
    isoStandards: "ISO 20345",
    applications: ["Construction sites", "Warehouses", "Maintenance", "Transport yards"],
    features: ["Composite toe", "Puncture-resistant midsole", "Slip-resistant outsole", "Padded ankle"],
    benefits: ["Reduced fatigue", "No metal toe", "Reliable grip"],
    shelfLife: "Use within 3 years of manufacture",
    storage: "Store dry, away from heat and chemicals",
    cleaning: "Brush dirt and wipe with damp cloth",
    country: "Kenya",
    manufacturer: "Bata Industrials",
    warranty: "6 months against manufacturing defects",
    pros: "Comfortable, strong slip rating, broad construction fit",
    cons: "Not fully waterproof for immersion",
    related: ["DP-GLO-CUT-A5", "DP-HIVIS-JKT-510"],
    accessories: ["Gel insoles", "Boot care kit"],
    boughtTogether: ["DP-HIVIS-JKT-510", "DP-GLO-CUT-A5"]
  },
  {
    id: "DP-FOOT-EH-760",
    name: "VoltStep EH Electrical Safety Boot",
    brand: "Danphis Select",
    model: "VS-760",
    category: "Electrical PPE",
    image: assets.boots,
    price: 188,
    rating: 4.5,
    popularity: 76,
    newest: 5,
    inventory: 74,
    availability: "In stock",
    summary: "Electrical hazard boot for utilities, maintenance, and light industrial electrical exposure.",
    industries: ["Government", "Manufacturing", "Construction"],
    hazards: ["Electrical hazard", "Impact", "Slip"],
    standards: ["ASTM F2413 EH", "EN ISO 20345", "SRC"],
    protectionLevel: "EH rated",
    colour: "Black",
    sizes: ["7", "8", "9", "10", "11", "12"],
    material: "Leather upper, dielectric outsole",
    weight: "760 g per boot size 9",
    packaging: "1 pair per box",
    certification: "ASTM F2413 EH",
    hazardRating: "Electrical hazard footwear, impact, slip",
    chemicalResistance: "Oil-resistant outsole",
    heatResistance: "Standard work boot heat exposure",
    cutResistance: "Not applicable",
    electricalRating: "EH rated outsole",
    waterproofRating: "Water-resistant upper",
    uvProtection: "Not applicable",
    enStandards: "EN ISO 20345",
    ansiStandards: "ASTM F2413 EH",
    isoStandards: "ISO 20345",
    applications: ["Utilities", "Electrical maintenance", "Facility work"],
    features: ["EH outsole", "Composite toe", "Padded tongue", "Slip-resistant tread"],
    benefits: ["Electrical hazard coverage", "Metal-free comfort", "Stable sole"],
    shelfLife: "Use within 3 years of manufacture",
    storage: "Store dry and inspect before every use",
    cleaning: "Wipe clean and dry away from direct heat",
    country: "India",
    manufacturer: "Danphis Select",
    warranty: "6 months against manufacturing defects",
    pros: "Electrical hazard rated, durable, comfortable for long shifts",
    cons: "Not a substitute for insulating overshoes or live-line controls",
    related: ["DP-HEAD-ARC-700", "DP-CLO-FR-730"],
    accessories: ["Dielectric overshoes", "Electrical safety signage"],
    boughtTogether: ["DP-CLO-FR-730", "DP-HEAD-ARC-700"]
  },
  {
    id: "DP-HEAD-360",
    name: "CoreGuard Vented Helmet & Goggle Kit",
    brand: "JSP",
    model: "CG-360",
    category: "Head Protection",
    image: assets.headEye,
    price: 58,
    rating: 4.7,
    popularity: 91,
    newest: 6,
    inventory: 318,
    availability: "In stock",
    summary: "Vented hard hat bundled with clear impact goggles for construction and site visitors.",
    industries: ["Construction", "Warehousing", "Government", "Education"],
    hazards: ["Impact", "Flying particles", "Dust"],
    standards: ["EN 397", "ANSI Z89.1", "EN 166"],
    protectionLevel: "Impact Type I",
    colour: "Yellow/Clear",
    sizes: ["Adjustable"],
    material: "HDPE shell, polycarbonate lens",
    weight: "430 g kit",
    packaging: "1 helmet, 1 goggle",
    certification: "EN 397 helmet, EN 166 eyewear",
    hazardRating: "Head impact and eye impact",
    chemicalResistance: "Goggle splash resistant only",
    heatResistance: "Standard site heat exposure",
    cutResistance: "Not applicable",
    electricalRating: "Helmet not dielectric",
    waterproofRating: "Water resistant shell",
    uvProtection: "99.9% lens UV protection",
    enStandards: "EN 397, EN 166",
    ansiStandards: "ANSI Z89.1, ANSI Z87.1 guidance",
    isoStandards: "ISO 16321 guidance",
    applications: ["Construction", "Visitors", "Warehousing", "Maintenance"],
    features: ["Ratchet harness", "Vented shell", "Anti-scratch lens", "Goggle strap compatibility"],
    benefits: ["Simple site issue kit", "Comfortable adjustment", "Reliable impact protection"],
    shelfLife: "Helmet 5 years from manufacture, lens replace if scratched",
    storage: "Store out of direct sunlight and chemicals",
    cleaning: "Clean shell and lens with mild soap and water",
    country: "United Kingdom",
    manufacturer: "JSP",
    warranty: "12 months against manufacturing defects",
    pros: "Simple kit, good site coverage, easy issue control",
    cons: "Vented helmet is not suitable for electrical exposure",
    related: ["DP-GLO-CUT-A5", "DP-HIVIS-JKT-510"],
    accessories: ["Chin strap", "Helmet sweatbands", "Replacement goggles"],
    boughtTogether: ["DP-HIVIS-JKT-510", "DP-GLO-CUT-A5"]
  },
  {
    id: "DP-EYE-GOG-220",
    name: "ClearView 220 Indirect Vent Goggle",
    brand: "Uvex",
    model: "CV-220",
    category: "Eye Protection",
    image: assets.headEye,
    price: 18,
    rating: 4.6,
    popularity: 88,
    newest: 4,
    inventory: 520,
    availability: "In stock",
    summary: "Clear indirect-vent safety goggle for dust, splash, and impact protection.",
    industries: ["Healthcare", "Manufacturing", "Oil & Gas", "Food Processing"],
    hazards: ["Splash", "Dust", "Impact", "UV"],
    standards: ["EN 166", "ANSI Z87.1", "ISO 16321"],
    protectionLevel: "Impact and splash",
    colour: "Clear",
    sizes: ["Universal"],
    material: "Polycarbonate lens, PVC frame",
    weight: "82 g",
    packaging: "1 each, 100 per carton",
    certification: "EN 166 3B, ANSI Z87.1",
    hazardRating: "Splash, dust, impact",
    chemicalResistance: "Splash protection only",
    heatResistance: "Not heat rated",
    cutResistance: "Not applicable",
    electricalRating: "Not electrically rated",
    waterproofRating: "Splash resistant",
    uvProtection: "99.9% UV",
    enStandards: "EN 166",
    ansiStandards: "ANSI Z87.1",
    isoStandards: "ISO 16321",
    applications: ["Chemical splash", "Cleaning", "Dusty work", "Healthcare support"],
    features: ["Indirect vents", "Anti-scratch lens", "Wide elastic strap"],
    benefits: ["Splash coverage", "Fits many face shapes", "Strong value"],
    shelfLife: "5 years unopened",
    storage: "Store clean in pouch away from abrasive dust",
    cleaning: "Wash with mild soap and water, dry with soft cloth",
    country: "Germany",
    manufacturer: "Uvex",
    warranty: "12 months against manufacturing defects",
    pros: "Low cost, strong splash coverage, light",
    cons: "Can fog under high humidity without anti-fog treatment",
    related: ["DP-GLO-CHEM-410", "DP-RESP-HF-620"],
    accessories: ["Lens cleaning wipes", "Goggle storage pouch"],
    boughtTogether: ["DP-GLO-CHEM-410", "DP-RESP-HF-620"]
  },
  {
    id: "DP-HIVIS-JKT-510",
    name: "HiVis Storm 510 Waterproof Jacket",
    brand: "Portwest",
    model: "HS-510",
    category: "Protective Clothing",
    image: assets.hivis,
    price: 118,
    rating: 4.8,
    popularity: 92,
    newest: 8,
    inventory: 142,
    availability: "In stock",
    summary: "Orange waterproof high-visibility jacket for roads, warehousing, construction, and transport.",
    industries: ["Construction", "Transport", "Warehousing", "Government"],
    hazards: ["Low visibility", "Rain", "Wind", "Traffic"],
    standards: ["EN ISO 20471", "ANSI 107", "EN 343"],
    protectionLevel: "Class 3 hi-vis",
    colour: "Orange",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    material: "300D polyester PU-coated fabric",
    weight: "920 g size L",
    packaging: "1 each, 10 per carton",
    certification: "EN ISO 20471 Class 3, EN 343",
    hazardRating: "High visibility and rain",
    chemicalResistance: "Not chemical protective",
    heatResistance: "Not flame resistant",
    cutResistance: "Not applicable",
    electricalRating: "Not electrically rated",
    waterproofRating: "EN 343 waterproof",
    uvProtection: "Fabric blocks direct sun exposure",
    enStandards: "EN ISO 20471, EN 343",
    ansiStandards: "ANSI/ISEA 107 Type R Class 3 guidance",
    isoStandards: "ISO 20471",
    applications: ["Road works", "Transport yards", "Rainy site operations", "Night shift visibility"],
    features: ["Reflective tape", "Storm flap", "Taped seams", "Adjustable cuffs"],
    benefits: ["Better visibility", "All-weather comfort", "Procurement-friendly sizing"],
    shelfLife: "Inspect reflectivity after repeated laundering",
    storage: "Store dry and clean, away from sunlight when not in use",
    cleaning: "Machine wash cold, do not bleach, line dry",
    country: "Bangladesh",
    manufacturer: "Portwest",
    warranty: "6 months against manufacturing defects",
    pros: "Class 3 visibility, waterproof, durable fabric",
    cons: "Not flame resistant",
    related: ["DP-FOOT-S3-900", "DP-HEAD-360"],
    accessories: ["Hi-vis trousers", "Reflective arm bands"],
    boughtTogether: ["DP-FOOT-S3-900", "DP-HEAD-360"]
  },
  {
    id: "DP-CLO-FR-730",
    name: "ArcShield FR Coverall",
    brand: "Delta Plus",
    model: "AS-FR730",
    category: "Protective Clothing",
    image: assets.hivis,
    price: 245,
    rating: 4.5,
    popularity: 79,
    newest: 5,
    inventory: 28,
    availability: "Low stock",
    summary: "Flame-resistant coverall for maintenance, utilities, oil and gas, and electrical support work.",
    industries: ["Oil & Gas", "Manufacturing", "Government"],
    hazards: ["Flame", "Arc flash", "Heat", "Minor splash"],
    standards: ["NFPA 70E", "EN ISO 11612", "IEC 61482"],
    protectionLevel: "FR CAT 2",
    colour: "Navy/Orange",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    material: "FR cotton blend",
    weight: "290 gsm",
    packaging: "1 each",
    certification: "CAT 2 arc rated coverall",
    hazardRating: "Flame and thermal exposure",
    chemicalResistance: "Minor splash only, not chemical suit",
    heatResistance: "EN ISO 11612",
    cutResistance: "Not cut rated",
    electricalRating: "Arc-rated garment, not insulating PPE",
    waterproofRating: "Not waterproof",
    uvProtection: "Fabric coverage",
    enStandards: "EN ISO 11612, IEC 61482",
    ansiStandards: "NFPA 70E guidance",
    isoStandards: "ISO 11612",
    applications: ["Electrical maintenance", "Oil and gas support", "Hot work supervision"],
    features: ["FR fabric", "Reflective trim", "Two-way zip", "Action back"],
    benefits: ["Thermal hazard coverage", "Professional fit", "Visible site presence"],
    shelfLife: "Inspect before each use, replace damaged garments",
    storage: "Store clean and dry, away from contaminants",
    cleaning: "Follow FR laundry instructions, avoid bleach and softeners",
    country: "Tunisia",
    manufacturer: "Delta Plus",
    warranty: "6 months against manufacturing defects",
    pros: "FR and arc coverage, comfortable fabric, visible trim",
    cons: "Needs correct layering and arc risk assessment",
    related: ["DP-FOOT-EH-760", "DP-GLO-CHEM-410"],
    accessories: ["FR balaclava", "Arc face shield"],
    boughtTogether: ["DP-FOOT-EH-760", "DP-HEAD-ARC-700"]
  },
  {
    id: "DP-HEAR-31",
    name: "EchoStop 31 dB Ear Defender",
    brand: "3M",
    model: "ES-31",
    category: "Hearing Protection",
    image: assets.hero,
    price: 42,
    rating: 4.4,
    popularity: 74,
    newest: 3,
    inventory: 196,
    availability: "In stock",
    summary: "Comfortable over-ear defender for high-noise sites, fabrication, construction, and mining.",
    industries: ["Mining", "Construction", "Manufacturing"],
    hazards: ["Noise", "Impact sound"],
    standards: ["EN 352", "ANSI S3.19"],
    protectionLevel: "SNR 31 dB",
    colour: "Black/Orange",
    sizes: ["Adjustable"],
    material: "ABS cups, foam cushions",
    weight: "250 g",
    packaging: "1 each, 20 per carton",
    certification: "EN 352-1",
    hazardRating: "High-noise hearing conservation",
    chemicalResistance: "Not chemical protective",
    heatResistance: "Standard site use",
    cutResistance: "Not applicable",
    electricalRating: "Not electrically rated",
    waterproofRating: "Wipe-clean surface",
    uvProtection: "Not applicable",
    enStandards: "EN 352",
    ansiStandards: "ANSI S3.19",
    isoStandards: "ISO 4869 guidance",
    applications: ["Grinding", "Mining operations", "Road works", "Manufacturing"],
    features: ["Padded headband", "Soft cushions", "Adjustable arms"],
    benefits: ["Strong attenuation", "Comfortable for repeated use"],
    shelfLife: "Replace cushions every 6 months with heavy use",
    storage: "Store clean and dry",
    cleaning: "Wipe cups and replace cushions as needed",
    country: "United States",
    manufacturer: "3M",
    warranty: "12 months against manufacturing defects",
    pros: "Strong noise reduction, easy issue item",
    cons: "Can interfere with some helmets without adapters",
    related: ["DP-RESP-HF-620", "DP-HEAD-360"],
    accessories: ["Replacement hygiene kit", "Helmet adapter arms"],
    boughtTogether: ["DP-HEAD-360", "DP-RESP-HF-620"]
  },
  {
    id: "DP-HEAD-ARC-700",
    name: "VoltGuard Arc Face Shield Kit",
    brand: "MSA",
    model: "VG-700",
    category: "Face Shields",
    image: assets.headEye,
    price: 310,
    rating: 4.6,
    popularity: 70,
    newest: 7,
    inventory: 12,
    availability: "Backorder",
    summary: "Arc-rated face shield and headgear kit for electrical maintenance programmes.",
    industries: ["Government", "Manufacturing", "Oil & Gas"],
    hazards: ["Arc flash", "Heat", "Impact"],
    standards: ["EN 166", "ASTM F2178", "IEC 61482"],
    protectionLevel: "Arc-rated kit",
    colour: "Clear/Tint",
    sizes: ["Universal"],
    material: "Polycarbonate arc-rated visor",
    weight: "540 g kit",
    packaging: "1 shield, headgear, storage bag",
    certification: "Arc-rated face shield kit",
    hazardRating: "Arc flash and impact",
    chemicalResistance: "Not chemical splash primary PPE",
    heatResistance: "Arc thermal exposure per rating",
    cutResistance: "Not applicable",
    electricalRating: "Arc-rated face shield, not insulating PPE",
    waterproofRating: "Wipe-clean visor",
    uvProtection: "99.9% UV",
    enStandards: "EN 166, IEC 61482",
    ansiStandards: "ASTM F2178 guidance",
    isoStandards: "ISO 16321 guidance",
    applications: ["Electrical switching", "Maintenance", "Utilities"],
    features: ["Arc-rated visor", "Adjustable headgear", "Storage bag", "Chin guard"],
    benefits: ["Face and thermal hazard coverage", "Reusable kit", "Tender documentation ready"],
    shelfLife: "Inspect before each use, replace scratched visor",
    storage: "Store in bag away from direct heat and sunlight",
    cleaning: "Use approved lens cleaner and soft cloth",
    country: "United States",
    manufacturer: "MSA",
    warranty: "12 months against manufacturing defects",
    pros: "Arc coverage, robust headgear, strong document pack",
    cons: "Backorder lead time may apply",
    related: ["DP-CLO-FR-730", "DP-FOOT-EH-760"],
    accessories: ["Replacement visor", "FR balaclava"],
    boughtTogether: ["DP-CLO-FR-730", "DP-FOOT-EH-760"]
  }
];

function formatMoney(value) {
  const amount = value * rates[state.currency];
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: state.currency,
    maximumFractionDigits: state.currency === "KES" ? 0 : 2
  }).format(amount);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function unique(values) {
  return [...new Set(values.flat().filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function productText(product) {
  return [
    product.id,
    product.name,
    product.brand,
    product.category,
    product.model,
    product.summary,
    product.material,
    product.certification,
    product.protectionLevel,
    ...product.industries,
    ...product.hazards,
    ...product.standards,
    ...product.sizes
  ].join(" ").toLowerCase();
}

function renderStars(rating) {
  return `<span class="rating" aria-label="${rating} out of 5 stars"><svg><use href="#icon-star"></use></svg>${rating}</span>`;
}

function stockClass(product) {
  if (product.availability === "Backorder") return "backorder";
  if (product.availability === "Low stock") return "low";
  return "";
}

function populateSelect(select, values, label) {
  select.innerHTML = `<option value="">${label}</option>${values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("")}`;
}

function initFilters() {
  populateSelect($("#filterCategory"), unique(products.map((p) => p.category)), "All categories");
  populateSelect($("#filterBrand"), unique(products.map((p) => p.brand)), "All brands");
  populateSelect($("#filterIndustry"), unique(products.map((p) => p.industries)), "All industries");
  populateSelect($("#filterProtection"), unique(products.map((p) => p.protectionLevel)), "All protection levels");
  populateSelect($("#filterStandard"), unique(products.map((p) => p.standards)), "All standards");
  populateSelect($("#filterColour"), unique(products.map((p) => p.colour)), "All colours");
  populateSelect($("#filterSize"), unique(products.map((p) => p.sizes)), "All sizes");
  populateSelect($("#filterAvailability"), unique(products.map((p) => p.availability)), "All availability");
}

function getFilters() {
  return {
    category: $("#filterCategory").value,
    brand: $("#filterBrand").value,
    industry: $("#filterIndustry").value,
    protection: $("#filterProtection").value,
    standard: $("#filterStandard").value,
    colour: $("#filterColour").value,
    size: $("#filterSize").value,
    availability: $("#filterAvailability").value,
    price: Number($("#filterPrice").value),
    search: `${$("#catalogueSearch").value} ${$("#globalSearch").value}`.trim().toLowerCase()
  };
}

function filteredProducts() {
  const filters = getFilters();
  const result = products.filter((product) => {
    const priceOk = product.price <= filters.price;
    const searchOk = !filters.search || productText(product).includes(filters.search);
    return (
      priceOk &&
      searchOk &&
      (!filters.category || product.category === filters.category) &&
      (!filters.brand || product.brand === filters.brand) &&
      (!filters.industry || product.industries.includes(filters.industry)) &&
      (!filters.protection || product.protectionLevel === filters.protection) &&
      (!filters.standard || product.standards.includes(filters.standard)) &&
      (!filters.colour || product.colour === filters.colour) &&
      (!filters.size || product.sizes.includes(filters.size)) &&
      (!filters.availability || product.availability === filters.availability)
    );
  });

  const sort = $("#sortProducts").value;
  return result.sort((a, b) => {
    if (sort === "newest") return b.newest - a.newest;
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "popular") return b.popularity - a.popularity;
    if (sort === "rating") return b.rating - a.rating;
    return b.popularity + b.rating - (a.popularity + a.rating);
  });
}

function productCard(product) {
  const compareActive = state.compare.has(product.id) ? " active" : "";
  const wishActive = state.wishlist.has(product.id) ? " active" : "";
  return `
    <article class="product-card" data-id="${product.id}">
      <button class="product-image" type="button" data-action="detail" data-id="${product.id}" aria-label="Open ${escapeHtml(product.name)} details">
        <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy">
        <span class="product-badge">${escapeHtml(product.protectionLevel)}</span>
        <span class="stock-badge ${stockClass(product)}">${escapeHtml(product.availability)}</span>
      </button>
      <div class="product-content">
        <div class="product-kicker"><span>${escapeHtml(product.brand)}</span><span>${escapeHtml(product.id)}</span></div>
        <h3>${escapeHtml(product.name)}</h3>
        <p class="product-summary">${escapeHtml(product.summary)}</p>
        <div class="product-tags">${product.standards.slice(0, 3).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
        <div class="price-row">
          <span class="price">${formatMoney(product.price)}</span>
          ${renderStars(product.rating)}
        </div>
        <div class="product-card-actions">
          <button class="button primary" type="button" data-action="add" data-id="${product.id}"><svg><use href="#icon-cart"></use></svg> Add</button>
          <button class="icon-button${compareActive}" type="button" data-action="compare" data-id="${product.id}" aria-label="Compare ${escapeHtml(product.name)}" title="Compare"><svg><use href="#icon-compare"></use></svg></button>
          <button class="icon-button${wishActive}" type="button" data-action="wish" data-id="${product.id}" aria-label="Save ${escapeHtml(product.name)}" title="Wishlist"><svg><use href="#icon-heart"></use></svg></button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const results = filteredProducts();
  const grid = $("#productGrid");
  grid.classList.toggle("list", state.view === "list");
  grid.innerHTML = results.length
    ? results.map(productCard).join("")
    : `<div class="detail-panel"><h3>No products found</h3><p>Try a different category, standard, hazard, or price range.</p></div>`;
  $("#resultCount").textContent = `${results.length} product${results.length === 1 ? "" : "s"}`;
  $("#priceValue").textContent = $("#filterPrice").value;
  renderProductStrips();
  renderComparisonState();
}

function renderCategoryGrid() {
  $("#categoryGrid").innerHTML = categories.map(([name, description, icon]) => `
    <a class="category-card" href="#shop" data-shop-category="${escapeHtml(name)}">
      <div>
        <span class="category-icon"><svg><use href="#${icon}"></use></svg></span>
        <h3>${escapeHtml(name)}</h3>
      </div>
      <span>${escapeHtml(description)}</span>
    </a>
  `).join("");
}

function renderProductStrips() {
  const newProducts = [...products].sort((a, b) => b.newest - a.newest).slice(0, 4);
  const bestSellers = [...products].sort((a, b) => b.popularity - a.popularity).slice(0, 4);
  $("#newProducts").innerHTML = newProducts.map(miniProduct).join("");
  $("#bestSellers").innerHTML = bestSellers.map(miniProduct).join("");
}

function miniProduct(product) {
  return `
    <button class="mini-product" type="button" data-action="detail" data-id="${product.id}">
      <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy">
      <span>
        <h3>${escapeHtml(product.name)}</h3>
        <p>${escapeHtml(product.protectionLevel)} | ${formatMoney(product.price)}</p>
      </span>
    </button>
  `;
}

function renderIndustries() {
  $("#industryGrid").innerHTML = industries.map(([name, hazards, recommendations]) => `
    <article class="industry-card">
      <h3>${escapeHtml(name)}</h3>
      <p>${escapeHtml(hazards)}</p>
      <ul>${recommendations.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderBrands() {
  $("#brandGrid").innerHTML = brands.map(([name, description]) => `
    <article class="brand-card">
      <div class="brand-mark">${escapeHtml(name[0])}</div>
      <div>
        <h3>${escapeHtml(name)}</h3>
        <p>${escapeHtml(description)}</p>
      </div>
    </article>
  `).join("");
}

function renderProductDetail(product) {
  const relatedProducts = product.related.map(findProduct).filter(Boolean);
  const boughtTogether = product.boughtTogether.map(findProduct).filter(Boolean);
  $("#productDetail").innerHTML = `
    <article class="product-detail">
      <div class="detail-hero">
        <div class="detail-gallery">
          <div class="gallery-main" id="galleryMain">
            <img src="${product.image}" alt="${escapeHtml(product.name)}">
          </div>
          <div class="gallery-actions">
            <button class="button ghost" type="button" id="zoomProduct"><svg><use href="#icon-search"></use></svg> Zoom</button>
            <button class="button ghost" type="button" id="rotateProduct"><svg><use href="#icon-rotate"></use></svg> 360 view</button>
            <button class="button ghost" type="button" id="videoProduct"><svg><use href="#icon-play"></use></svg> Video</button>
          </div>
        </div>
        <div class="detail-summary">
          <p class="eyebrow">${escapeHtml(product.category)}</p>
          <h2>${escapeHtml(product.name)}</h2>
          <p>${escapeHtml(product.summary)}</p>
          <div class="detail-meta">
            <span>${escapeHtml(product.brand)}</span>
            <span>${escapeHtml(product.id)}</span>
            <span>${escapeHtml(product.certification)}</span>
            <span>${product.inventory} units available</span>
          </div>
          <div class="detail-price">
            <strong>${formatMoney(product.price)}</strong>
            ${renderStars(product.rating)}
          </div>
          <div class="drawer-actions">
            <button class="button primary" type="button" data-action="add" data-id="${product.id}"><svg><use href="#icon-cart"></use></svg> Add to cart</button>
            <button class="button secondary" type="button" data-action="compare" data-id="${product.id}"><svg><use href="#icon-compare"></use></svg> Compare</button>
            <button class="button ghost" type="button" data-action="wish" data-id="${product.id}"><svg><use href="#icon-heart"></use></svg> Wishlist</button>
          </div>
          <div>
            <h3>Downloads</h3>
            <div class="download-list">
              <a href="#resources"><svg><use href="#icon-download"></use></svg> Datasheet</a>
              <a href="#resources"><svg><use href="#icon-download"></use></svg> Certificate</a>
              <a href="#resources"><svg><use href="#icon-download"></use></svg> Declaration</a>
              <a href="#resources"><svg><use href="#icon-download"></use></svg> Warranty</a>
            </div>
          </div>
        </div>
      </div>

      <div class="detail-sections">
        <section class="detail-panel">
          <h3>Specifications</h3>
          ${specTable(product)}
        </section>
        <section class="detail-panel">
          <h3>Applications and industries</h3>
          <div class="compliance-list">${product.applications.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
          <h3>Industries</h3>
          <div class="compliance-list">${product.industries.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
          <h3>Hazards protected against</h3>
          <div class="hazard-list">${product.hazards.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
        </section>
        <section class="detail-panel">
          <h3>Features</h3>
          <ul class="feature-list">${product.features.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          <h3>Benefits</h3>
          <ul class="feature-list">${product.benefits.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </section>
        <section class="detail-panel">
          <h3>Care and ownership</h3>
          <table class="spec-table">
            <tbody>
              <tr><th>Material</th><td>${escapeHtml(product.material)}</td></tr>
              <tr><th>Shelf life</th><td>${escapeHtml(product.shelfLife)}</td></tr>
              <tr><th>Storage</th><td>${escapeHtml(product.storage)}</td></tr>
              <tr><th>Cleaning</th><td>${escapeHtml(product.cleaning)}</td></tr>
              <tr><th>Country of origin</th><td>${escapeHtml(product.country)}</td></tr>
              <tr><th>Manufacturer</th><td>${escapeHtml(product.manufacturer)}</td></tr>
              <tr><th>Warranty</th><td>${escapeHtml(product.warranty)}</td></tr>
            </tbody>
          </table>
        </section>
        <section class="assistant-panel">
          <div class="assistant-title"><svg><use href="#icon-bot"></use></svg> Danphis product advisor</div>
          <div class="assistant-examples">
            <button type="button" data-question="What glove is best for handling acids?">What glove is best for handling acids?</button>
            <button type="button" data-question="Can I use this respirator for welding?">Can I use this respirator for welding?</button>
            <button type="button" data-question="Compare this boot with another.">Compare this boot with another.</button>
            <button type="button" data-question="What size should I buy?">What size should I buy?</button>
          </div>
          <form class="assistant-input" id="advisorForm">
            <label class="sr-only" for="advisorQuestion">Ask about this product</label>
            <input id="advisorQuestion" type="search" placeholder="Ask about this product">
            <button class="button primary" type="submit">Ask</button>
          </form>
          <div class="assistant-answer" id="advisorAnswer">I answer from this Danphis product record: standards, hazards, materials, industries, applications, and care data.</div>
        </section>
        <section class="detail-panel">
          <h3>Related products</h3>
          <div class="related-list">${relatedProducts.map(miniProduct).join("")}</div>
        </section>
        <section class="detail-panel">
          <h3>Frequently bought together</h3>
          <div class="related-list">${boughtTogether.map(miniProduct).join("")}</div>
        </section>
        <section class="detail-panel">
          <h3>Customer reviews</h3>
          <p>${product.rating} average rating from ${Math.round(product.popularity * 2.8)} verified procurement and site buyers.</p>
        </section>
        <section class="detail-panel">
          <h3>Questions and answers</h3>
          <p>Common questions cover sizing, standards, cleaning, compatible accessories, and industry suitability for ${escapeHtml(product.name)}.</p>
        </section>
      </div>
    </article>
  `;

  $("#zoomProduct").addEventListener("click", () => $("#galleryMain").classList.toggle("zoom"));
  $("#rotateProduct").addEventListener("click", () => {
    const gallery = $("#galleryMain");
    gallery.classList.remove("rotate");
    window.requestAnimationFrame(() => gallery.classList.add("rotate"));
  });
  $("#videoProduct").addEventListener("click", () => showToast("Product video placeholder is ready for CMS media."));
  $("#advisorForm").addEventListener("submit", (event) => {
    event.preventDefault();
    answerAdvisor(product, $("#advisorQuestion").value);
  });
  $$(".assistant-examples button").forEach((button) => {
    button.addEventListener("click", () => {
      $("#advisorQuestion").value = button.dataset.question;
      answerAdvisor(product, button.dataset.question);
    });
  });
}

function specTable(product) {
  const rows = [
    ["Brand", product.brand],
    ["Model", product.model],
    ["SKU", product.id],
    ["Certification", product.certification],
    ["Material", product.material],
    ["Weight", product.weight],
    ["Protection level", product.protectionLevel],
    ["Colour", product.colour],
    ["Packaging", product.packaging],
    ["Available sizes", product.sizes.join(", ")],
    ["Industry", product.industries.join(", ")],
    ["Hazard rating", product.hazardRating],
    ["Chemical resistance", product.chemicalResistance],
    ["Heat resistance", product.heatResistance],
    ["Cut resistance", product.cutResistance],
    ["Electrical rating", product.electricalRating],
    ["Waterproof rating", product.waterproofRating],
    ["UV protection", product.uvProtection],
    ["EN standards", product.enStandards],
    ["ANSI standards", product.ansiStandards],
    ["ISO standards", product.isoStandards]
  ];
  return `<table class="spec-table"><tbody>${rows.map(([label, value]) => `<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join("")}</tbody></table>`;
}

function answerAdvisor(product, rawQuestion) {
  const question = rawQuestion.trim().toLowerCase();
  if (!question) return;

  let answer;
  if (question.includes("acid") || question.includes("chemical")) {
    const matches = products.filter((item) => item.hazards.some((hazard) => /acid|caustic|splash/i.test(hazard)) || /chemical/i.test(item.protectionLevel));
    answer = `For acid or chemical handling, Danphis data points first to ${matches.map((item) => item.name).slice(0, 2).join(" and ")}. This product record lists ${product.chemicalResistance.toLowerCase()} and standards ${product.standards.join(", ")}.`;
  } else if (question.includes("weld")) {
    const suitable = product.hazards.some((hazard) => /weld|fume/i.test(hazard)) || product.applications.some((app) => /weld/i.test(app));
    answer = suitable
      ? `${product.name} is listed for welding-related use in Danphis data: applications include ${product.applications.join(", ")}. Confirm filter, fit, and site exposure requirements before issue.`
      : `${product.name} is not primarily listed for welding in Danphis data. Compare it with WeldAir P3 Fume Respirator Kit for welding fume tasks.`;
  } else if (question.includes("compare") || question.includes("another")) {
    const peer = products.find((item) => item.category === product.category && item.id !== product.id) || products.find((item) => item.id !== product.id);
    answer = `${product.name} has ${product.protectionLevel}, ${product.weight}, and standards ${product.standards.join(", ")}. A close comparison is ${peer.name}, which has ${peer.protectionLevel}, ${peer.weight}, and standards ${peer.standards.join(", ")}.`;
  } else if (question.includes("size")) {
    answer = `Available Danphis sizes for ${product.name}: ${product.sizes.join(", ")}. For boots, match your usual work boot size and allow sock thickness. For respirators, fit testing should decide final size. For gloves, measure palm circumference and task dexterity needs.`;
  } else if (question.includes("standard") || question.includes("cert")) {
    answer = `${product.name} lists certification ${product.certification}. Standards in the Danphis record are ${product.standards.join(", ")}.`;
  } else {
    answer = `${product.name} is recorded for ${product.industries.join(", ")} and protects against ${product.hazards.join(", ")}. Main features are ${product.features.join(", ")}.`;
  }

  $("#advisorAnswer").textContent = answer;
}

function findProduct(id) {
  return products.find((product) => product.id === id);
}

function openProduct(id) {
  const product = findProduct(id);
  if (!product) return;
  state.recentlyViewed = [id, ...state.recentlyViewed.filter((item) => item !== id)].slice(0, 5);
  renderProductDetail(product);
  openDrawer("#productDrawer");
}

function openDrawer(selector) {
  const drawer = $(selector);
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDrawer(selector) {
  const drawer = $(selector);
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  if (!$(".drawer.open")) document.body.style.overflow = "";
}

function addToCart(id, qty = 1) {
  const item = state.cart.find((line) => line.id === id);
  if (item) item.qty += qty;
  else state.cart.push({ id, qty });
  renderCart();
  showToast("Added to cart.");
}

function updateCartQty(id, delta) {
  const item = state.cart.find((line) => line.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart = state.cart.filter((line) => line.id !== id);
  renderCart();
}

function renderCart() {
  const count = state.cart.reduce((total, line) => total + line.qty, 0);
  $("#cartCount").textContent = count;
  $("#cartItems").innerHTML = state.cart.length
    ? state.cart.map((line) => {
      const product = findProduct(line.id);
      return `
        <article class="cart-line">
          <img src="${product.image}" alt="${escapeHtml(product.name)}">
          <div>
            <h3>${escapeHtml(product.name)}</h3>
            <div class="cart-line-meta">
              <span>${formatMoney(product.price)} each</span>
              <div class="quantity-control">
                <button type="button" data-cart-delta="-1" data-id="${product.id}" aria-label="Decrease ${escapeHtml(product.name)}"><svg><use href="#icon-minus"></use></svg></button>
                <strong>${line.qty}</strong>
                <button type="button" data-cart-delta="1" data-id="${product.id}" aria-label="Increase ${escapeHtml(product.name)}"><svg><use href="#icon-plus"></use></svg></button>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join("")
    : `<p>Your cart is ready for PPE selection.</p>`;

  const subtotal = state.cart.reduce((total, line) => {
    const product = findProduct(line.id);
    return total + product.price * line.qty;
  }, 0);
  const itemCount = state.cart.reduce((total, line) => total + line.qty, 0);
  const shipping = subtotal === 0 ? 0 : subtotal > 500 ? 0 : 24 + itemCount * 3;
  $("#cartSubtotal").textContent = formatMoney(subtotal);
  $("#shippingEstimate").textContent = formatMoney(shipping);
  $("#cartTotal").textContent = formatMoney(subtotal + shipping);
}

function toggleWishlist(id) {
  if (state.wishlist.has(id)) state.wishlist.delete(id);
  else state.wishlist.add(id);
  $("#wishlistCount").textContent = `${state.wishlist.size} saved`;
  renderProducts();
  showToast(state.wishlist.has(id) ? "Saved to wishlist." : "Removed from wishlist.");
}

function toggleCompare(id) {
  if (state.compare.has(id)) {
    state.compare.delete(id);
  } else {
    if (state.compare.size >= 4) {
      showToast("Compare up to four products at once.");
      return;
    }
    state.compare.add(id);
  }
  renderProducts();
}

function renderComparisonState() {
  const count = state.compare.size;
  $("#compareCount").textContent = count;
  $("#compareFloat").hidden = count === 0;
  const selected = [...state.compare].map(findProduct).filter(Boolean);
  $("#comparisonTable").innerHTML = selected.length
    ? comparisonTable(selected)
    : `<p>Select products from the catalogue to compare features, standards, price, ratings, weight, protection level, pros, and cons.</p>`;
}

function comparisonTable(selected) {
  const rows = [
    ["Features", (p) => p.features.join(", ")],
    ["Standards", (p) => p.standards.join(", ")],
    ["Price", (p) => formatMoney(p.price)],
    ["Rating", (p) => `${p.rating}/5`],
    ["Weight", (p) => p.weight],
    ["Protection level", (p) => p.protectionLevel],
    ["Pros", (p) => p.pros],
    ["Cons", (p) => p.cons]
  ];
  return `
    <table class="comparison-table">
      <thead>
        <tr><th>Attribute</th>${selected.map((product) => `<th>${escapeHtml(product.name)}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${rows.map(([label, getter]) => `<tr><th>${label}</th>${selected.map((product) => `<td>${escapeHtml(getter(product))}</td>`).join("")}</tr>`).join("")}
      </tbody>
    </table>
  `;
}

function handleAction(target) {
  const actionButton = target.closest("[data-action]");
  if (!actionButton) return;
  const { action, id } = actionButton.dataset;
  if (action === "detail") openProduct(id);
  if (action === "add") addToCart(id);
  if (action === "wish") toggleWishlist(id);
  if (action === "compare") toggleCompare(id);
}

function applyCategory(category) {
  $("#filterCategory").value = category;
  $("#catalogueSearch").value = "";
  renderProducts();
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function setHeroSlide(index) {
  const slide = heroSlides[index];
  state.heroIndex = index;
  $("#heroEyebrow").textContent = slide.eyebrow;
  $("#heroTitle").textContent = slide.title;
  $("#heroBody").textContent = slide.body;
  $$(".hero-dot").forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
}

function injectStructuredData() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Danphis PPE Catalogue",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        sku: product.id,
        brand: { "@type": "Brand", name: product.brand },
        image: product.image,
        description: product.summary,
        category: product.category,
        offers: {
          "@type": "Offer",
          priceCurrency: "AUD",
          price: product.price,
          availability: product.availability === "Backorder" ? "https://schema.org/BackOrder" : "https://schema.org/InStock"
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: product.rating,
          reviewCount: Math.round(product.popularity * 2.8)
        }
      }
    }))
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(itemList);
  document.head.appendChild(script);
}

function bindEvents() {
  $("#productGrid").addEventListener("click", (event) => handleAction(event.target));
  $("#newProducts").addEventListener("click", (event) => handleAction(event.target));
  $("#bestSellers").addEventListener("click", (event) => handleAction(event.target));
  $("#productDetail").addEventListener("click", (event) => handleAction(event.target));
  $("#cartItems").addEventListener("click", (event) => {
    const button = event.target.closest("[data-cart-delta]");
    if (!button) return;
    updateCartQty(button.dataset.id, Number(button.dataset.cartDelta));
  });

  [
    "#filterCategory",
    "#filterBrand",
    "#filterIndustry",
    "#filterProtection",
    "#filterStandard",
    "#filterColour",
    "#filterSize",
    "#filterAvailability",
    "#filterPrice",
    "#sortProducts",
    "#catalogueSearch",
    "#globalSearch"
  ].forEach((selector) => $(selector).addEventListener("input", renderProducts));

  $("#clearFilters").addEventListener("click", () => {
    $$(".filter-panel select").forEach((select) => { select.value = ""; });
    $("#filterPrice").value = "500";
    $("#catalogueSearch").value = "";
    $("#globalSearch").value = "";
    renderProducts();
  });

  $("#gridView").addEventListener("click", () => {
    state.view = "grid";
    $("#gridView").classList.add("active");
    $("#listView").classList.remove("active");
    renderProducts();
  });
  $("#listView").addEventListener("click", () => {
    state.view = "list";
    $("#listView").classList.add("active");
    $("#gridView").classList.remove("active");
    renderProducts();
  });

  $("#currencySelect").addEventListener("change", (event) => {
    state.currency = event.target.value;
    renderProducts();
    renderCart();
    if ($("#productDrawer").classList.contains("open")) {
      const current = state.recentlyViewed[0];
      if (current) renderProductDetail(findProduct(current));
    }
    renderComparisonState();
  });

  document.addEventListener("click", (event) => {
    const categoryLink = event.target.closest("[data-shop-category]");
    if (categoryLink) applyCategory(categoryLink.dataset.shopCategory);
  });

  $$(".hero-dot").forEach((dot) => {
    dot.addEventListener("click", () => setHeroSlide(Number(dot.dataset.slide)));
  });

  $("#cartButton").addEventListener("click", () => openDrawer("#cartDrawer"));
  $("#closeCartDrawer").addEventListener("click", () => closeDrawer("#cartDrawer"));
  $("#closeProductDrawer").addEventListener("click", () => closeDrawer("#productDrawer"));
  $("#compareFloat").addEventListener("click", () => openDrawer("#comparisonDrawer"));
  $("#closeComparisonDrawer").addEventListener("click", () => closeDrawer("#comparisonDrawer"));
  $$(".drawer").forEach((drawer) => {
    drawer.addEventListener("click", (event) => {
      if (event.target === drawer) closeDrawer(`#${drawer.id}`);
    });
  });

  $("#mobileMenuButton").addEventListener("click", () => {
    $("#mobilePanel").classList.add("open");
    $("#mobilePanel").setAttribute("aria-hidden", "false");
  });
  $("#mobileCloseButton").addEventListener("click", () => {
    $("#mobilePanel").classList.remove("open");
    $("#mobilePanel").setAttribute("aria-hidden", "true");
  });
  $$("#mobilePanel a").forEach((link) => {
    link.addEventListener("click", () => {
      $("#mobilePanel").classList.remove("open");
      $("#mobilePanel").setAttribute("aria-hidden", "true");
    });
  });

  $("#quoteShortcut").addEventListener("click", () => $("#quote").scrollIntoView({ behavior: "smooth" }));
  $("#bulkOrderButton").addEventListener("click", () => {
    $("#b2b").scrollIntoView({ behavior: "smooth" });
    showToast("Upload a procurement list in the B2B form.");
  });
  $("#portalButton").addEventListener("click", () => $("#portal").scrollIntoView({ behavior: "smooth" }));

  ["#procurementForm", "#quoteForm", "#newsletterForm", "#checkoutForm"].forEach((selector) => {
    $(selector).addEventListener("submit", (event) => {
      event.preventDefault();
      event.currentTarget.reset();
      showToast("Submission captured for the Danphis prototype.");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    $$(".drawer.open").forEach((drawer) => closeDrawer(`#${drawer.id}`));
    $("#mobilePanel").classList.remove("open");
  });
}

function init() {
  renderCategoryGrid();
  renderIndustries();
  renderBrands();
  initFilters();
  bindEvents();
  renderProducts();
  renderCart();
  injectStructuredData();
  setInterval(() => setHeroSlide((state.heroIndex + 1) % heroSlides.length), 6200);
}

document.addEventListener("DOMContentLoaded", init);
