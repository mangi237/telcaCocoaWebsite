import {
  ProcessStep,
  QualityCard,
  CameroonRegion,
  ImpactStat,
  GalleryItem,
  NewsArticle,
  CompanyConfig,
} from '../types';

export const INITIAL_COMPANY_CONFIG: CompanyConfig = {
  name: "TELCAR COCOA LTD",
  slogan: "Growing Excellence. Delivering Cameroon to the World.",
  headquarters: "Bonaberi, Douala, Cameroon",
  address: "Telcar Headquarters Building, Quartier Industrial, Bonaberi, BP 2420 Douala, Cameroon",
  phoneMain: "+237 233 39 12 00",
  phoneAlt: "+237 233 39 12 01",
  emailContact: "contact@telcarcocoa.cm",
  emailExport: "export@telcarcocoa.cm",
  founderName: "Madame Kate Kanyi-Tometi Fotso",
  founderTitle: "Founder & Chief Executive Officer",
  mapCoordinates: { lat: 4.0815, lng: 9.6842 }, // Bonaberi Douala
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "1. Cocoa Cultivation & Care",
    subtitle: "Nurtured in Cameroon's Fertile Soil",
    description: "High-yield, disease-resistant cocoa trees cultivated under shade-grown agroforestry canopies across Cameroon's richest volcanic soils.",
    iconName: "Sprout",
    keyMetric: "Shade-Grown Agroforestry",
    details: [
      "Ethical farming practices under the Telcar Farmer Academy",
      "Optimal soil pH between 6.0 and 7.5 in volcanic regions",
      "Native canopy trees preserving biodiversity & microclimate"
    ]
  },
  {
    id: 2,
    title: "2. Hand Pod Harvesting",
    subtitle: "Selected at Peak Ripeness",
    description: "Skilled Cameroonian farmers hand-pick ripe golden-orange cocoa pods using traditional tools to prevent damage to tree bark buds.",
    iconName: "Scissors",
    keyMetric: "100% Hand Selected",
    details: [
      "Harvesting occurs twice yearly (Main Crop: Oct–Mar)",
      "Pods sorted on-site to remove defective or under-ripe fruits",
      "Immediate splitting within 24 hours to preserve sugars"
    ]
  },
  {
    id: 3,
    title: "3. Controlled Fermentation",
    subtitle: "Developing Deep Chocolate Flavor",
    description: "Wet cocoa beans with sweet white pulp undergo multi-day box fermentation to develop rich chocolate precursors and signature aroma.",
    iconName: "Flame",
    keyMetric: "5-6 Days Tier Fermentation",
    details: [
      "Tiered wooden sweatboxes ventilated for aerobic turning",
      "Temperature rises naturally to 48°C–50°C to kill seed germ",
      "Critical phase for rich reddish-brown Cameroonian bean color"
    ]
  },
  {
    id: 4,
    title: "4. Sun Drying on Raised Beds",
    subtitle: "Natural Solar Moisture Reduction",
    description: "Fermented beans are spread thinly on elevated bamboo drying tables under intense tropical sunlight, lowering moisture safely to < 7.5%.",
    iconName: "Sun",
    keyMetric: "< 7.5% Moisture Level",
    details: [
      "Elevated tables protect beans from ground moisture & pests",
      "Manual raking every 2 hours for uniform solar drying",
      "Protection covers deployed instantly during sudden rains"
    ]
  },
  {
    id: 5,
    title: "5. Multi-Stage Quality Inspection",
    subtitle: "Stringent Bean Analysis in Douala",
    description: "Beans transported to Telcar's Bonaberi processing center undergo cut-tests, moisture analysis, bean count sorting, and purity audits.",
    iconName: "ShieldCheck",
    keyMetric: "Grade 1 Export Standard",
    details: [
      "Cut-test analysis: < 3% slaty, < 3% mold, < 3% insect damage",
      "Bean count calibration (95 to 105 beans per 100 grams)",
      "Laboratory testing for pesticide-free certification"
    ]
  },
  {
    id: 6,
    title: "6. Jute Bag Packaging & Tagging",
    subtitle: "Full Traceability Protection",
    description: "Inspected cocoa beans are packed in food-grade, breathable natural jute bags stamped with Telcar traceability QR tags and lot codes.",
    iconName: "Package",
    keyMetric: "65.5 kg Standard Jute Bags",
    details: [
      "GrainPro inner liners optional for long-distance ocean freight",
      "Barcoded batch origin tracking down to farmer co-op level",
      "Sealed against humidity during transit to port warehouses"
    ]
  },
  {
    id: 7,
    title: "7. Port Logistics & Shipping",
    subtitle: "Seaport Dispatch from Douala & Kribi",
    description: "Seamless customs clearing and containerized loading at the Autonomous Ports of Douala and Kribi for ocean transport to global buyers.",
    iconName: "Ship",
    keyMetric: "Direct Ocean Freight",
    details: [
      "Dedicated warehousing at Bonaberi industrial port complex",
      "Phytosanitary & Euro-standard export clearance documentation",
      "Real-time vessel tracking provided to international buyers"
    ]
  },
  {
    id: 8,
    title: "8. Global Chocolate Artisans",
    subtitle: "Crafting World-Class Chocolate",
    description: "Cameroon's renowned high-fat, reddish-brown cocoa beans arrive at top chocolatiers in Europe, North America, and Asia for roasting.",
    iconName: "Award",
    keyMetric: "Preferred Worldwide",
    details: [
      "Higher cocoa butter content ideal for premium chocolate bars",
      "Distinctive earthy, fruity, and deep cocoa flavor notes",
      "Long-term supply agreements with world-leading processors"
    ]
  }
];

export const QUALITY_CARDS: QualityCard[] = [
  {
    id: "qc-1",
    title: "Rigorous Quality Control",
    tagline: "Uncompromising Standards at Every Processing Stage",
    description: "Our state-of-the-art laboratory in Bonaberi performs rigorous physical, chemical, and organoleptic testing on every batch before approval.",
    iconName: "Microscope",
    metrics: [
      { label: "Moisture Content", value: "< 7.5%" },
      { label: "Bean Count", value: "95–105 / 100g" },
      { label: "Defect Threshold", value: "< 2.5%" }
    ],
    bulletPoints: [
      "Standardized cut-tests for bean fermentation degree and internal coloration",
      "Calibrated electronic moisture analyzers deployed at field buying stations",
      "Full compliance with FCC (Federation of Cocoa Commerce) guidelines"
    ]
  },
  {
    id: "qc-2",
    title: "Careful Bean Selection",
    tagline: "Hand-Sorted Premium Cameroonian Cocoa",
    description: "Cameroon cocoa is famous for its rich reddish-brown coat and high cocoa butter yield. We meticulously grade and sort every single lot.",
    iconName: "Sparkles",
    metrics: [
      { label: "Color Grading", value: "Rich Mahogany Red" },
      { label: "Fat Content", value: "54%–58% Cocoa Butter" },
      { label: "Purity Index", value: "99.8%" }
    ],
    bulletPoints: [
      "Removal of flat, germinated, or broken beans prior to bagging",
      "Strict separation between Main Crop (October–March) and Mid Crop",
      "Homogenous bean size distribution ensuring even roasting for buyers"
    ]
  },
  {
    id: "qc-3",
    title: "Responsible Sourcing",
    tagline: "Empowerment & Eco-Friendly Agriculture",
    description: "In partnership with Cargill and local farmer cooperatives, Telcar pioneers sustainable farming that protects forests and elevates livelihoods.",
    iconName: "HeartHandshake",
    metrics: [
      { label: "Farmer Cooperatives", value: "30,000+ Farmers" },
      { label: "Telcar Farmer Academy", value: "350+ Training Hubs" },
      { label: "Certification", value: "Rainforest Alliance / UTZ" }
    ],
    bulletPoints: [
      "Zero deforestation tolerance with GPS farm boundary mapping",
      "Fair price premiums paid directly to certified cocoa producers",
      "Child labor prevention monitoring and community schooling support"
    ]
  },
  {
    id: "qc-4",
    title: "Premium Export Standards",
    tagline: "Precision Handling from Warehouse to Vessel",
    description: "Our strategic port facilities at Bonaberi and Kribi guarantee optimal humidity control and fast clearance for ocean freight vessels.",
    iconName: "Truck",
    metrics: [
      { label: "Port Capacity", value: "100,000+ MT/Year" },
      { label: "Warehousing", value: "25,000 m² Covered" },
      { label: "Customs Clearance", value: "Fast-Track Priority" }
    ],
    bulletPoints: [
      "Ventilated dry-container stuffing with protective moisture absorbers",
      "Complete phytosanitary certification by Cameroonian Ministry of Agriculture",
      "Direct container vessel shipments to Antwerp, Hamburg, Philadelphia, and Asia"
    ]
  },
  {
    id: "qc-5",
    title: "International Partnerships",
    tagline: "Decades of Global Commerce Trust",
    description: "Through our long-standing joint partnership with Cargill, Telcar connects Cameroonian agriculture to the world's most demanding processors.",
    iconName: "Globe2",
    metrics: [
      { label: "Global Reach", value: "25+ Countries" },
      { label: "Alliance Partner", value: "Cargill Inc." },
      { label: "Supply Reliability", value: "30+ Years Proven" }
    ],
    bulletPoints: [
      "Long-term supply contracts tailored for international chocolate brands",
      "Transparent pricing structure aligned with ICE & London Cocoa Futures",
      "Dedicated account management for multinational cocoa grinders"
    ]
  }
];

export const CAMEROON_REGIONS: CameroonRegion[] = [
  {
    id: "south-west",
    name: "South-West Region",
    capital: "Buea / Kumba / Mamfe",
    harvestPeriod: "October – March (Peak)",
    annualTonnage: "75,000+ MT",
    flavorProfile: "Bold cocoa aroma, rich red color, subtle woody and spice notes",
    highlights: [
      "Fertile volcanic soils surrounding Mount Cameroon",
      "Home to major Telcar farmer training academies in Meme & Fako",
      "High density of high-yielding cocoa shade plantations"
    ],
    coordinates: { x: 28, y: 62 }
  },
  {
    id: "centre",
    name: "Centre Region",
    capital: "Yaoundé / Bafia / Monatele",
    harvestPeriod: "September – February",
    annualTonnage: "85,000+ MT",
    flavorProfile: "Balanced acidity, sweet caramel undertones, medium brown shade",
    highlights: [
      "Largest cocoa-producing region by surface area in Cameroon",
      "Dense network of organized farmer cooperatives",
      "Ideal river valley microclimate along the Sanaga river"
    ],
    coordinates: { x: 52, y: 58 }
  },
  {
    id: "south",
    name: "South Region",
    capital: "Ebolowa / Sangmélima / Kribi",
    harvestPeriod: "October – April",
    annualTonnage: "50,000+ MT",
    flavorProfile: "Intense nutty notes, deep cocoa body, excellent butter content",
    highlights: [
      "Proximity to the new Deep Sea Port of Kribi for swift exports",
      "Traditional forest agroforestry systems preserving biodiversity",
      "Expansive shade-grown cocoa cultivation under rainforest canopy"
    ],
    coordinates: { x: 48, y: 78 }
  },
  {
    id: "littoral",
    name: "Littoral Region",
    capital: "Douala / Bonaberi / Nkongsamba",
    harvestPeriod: "September – March",
    annualTonnage: "35,000+ MT",
    flavorProfile: "Classic deep Cameroonian cocoa flavor, ideal for dark chocolate",
    highlights: [
      "Location of Telcar Cocoa Ltd Headquarters & central processing in Bonaberi",
      "Strategic industrial complex with direct access to Port of Douala",
      "Central hub for quality inspection, sorting, and export packaging"
    ],
    coordinates: { x: 36, y: 66 }
  },
  {
    id: "east",
    name: "East Region",
    capital: "Bertoua / Batouri",
    harvestPeriod: "October – February",
    annualTonnage: "25,000+ MT",
    flavorProfile: "Earthy notes, floral aroma, rich golden-brown bean color",
    highlights: [
      "Rapidly expanding high-potential cocoa development zone",
      "Strong community engagement & Telcar sustainability projects",
      "Organic farming practices favored by dense natural shade"
    ],
    coordinates: { x: 72, y: 64 }
  }
];

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: "stat-years",
    label: "Years of Export Excellence",
    targetValue: 30,
    suffix: "+",
    description: "Pioneering Cameroon's agricultural export trade since the mid-1990s.",
    iconName: "Calendar"
  },
  {
    id: "stat-farmers",
    label: "Farmers Connected & Trained",
    targetValue: 30000,
    suffix: "+",
    description: "Empowered through the Telcar Farmer Academy & Cargill Cocoa Promise.",
    iconName: "Users"
  },
  {
    id: "stat-tonnage",
    label: "Annual Export Capacity (MT)",
    targetValue: 100000,
    suffix: "+",
    description: "Consistently ranking among Cameroon's top cocoa exporters.",
    iconName: "TrendingUp"
  },
  {
    id: "stat-countries",
    label: "Global Markets Served",
    targetValue: 25,
    suffix: "+",
    description: "Delivering premium beans to processors across Europe, Americas & Asia.",
    iconName: "Globe"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Sun-Drying Cocoa Beans in Cameroon",
    category: "farms",
    categoryLabel: "Farms & Harvest",
    imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1200&q=80",
    caption: "Fermented cocoa beans spread on elevated solar drying beds for uniform moisture reduction in Cameroon.",
    location: "Meme Division, South-West Region, Cameroon"
  },
  {
    id: "gal-2",
    title: "Telcar Headquarters & Facility",
    category: "quality",
    categoryLabel: "Quality & Facility",
    imageUrl: "https://www.businessincameroon.com/media/k2/items/cache/428178a9c29f27022dcd4bf143525287_XL.jpg",
    caption: "Telcar Cocoa Ltd central processing & administrative headquarters in Bonaberi, Douala.",
    location: "Bonaberi, Douala, Cameroon"
  },
  {
    id: "gal-3",
    title: "Golden Harvest Pods",
    category: "farms",
    categoryLabel: "Farms & Harvest",
    imageUrl: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&q=80",
    caption: "Freshly harvested ripe cocoa pods exhibiting vibrant golden-yellow and reddish husks.",
    location: "Centre Region, Cameroon"
  },
  {
    id: "gal-4",
    title: "Port Logistics & Container Export",
    category: "port",
    categoryLabel: "Port & Logistics",
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    caption: "Ocean freight container stuffing at the Autonomous Port of Douala bound for Europe.",
    location: "Port of Douala, Cameroon"
  },
  {
    id: "gal-5",
    title: "Farmer Academy Graduation",
    category: "community",
    categoryLabel: "Community & Training",
    imageUrl: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=80",
    caption: "Cameroonian cocoa farmers receiving UTZ / Rainforest Alliance sustainability certifications.",
    location: "Kumba Hub, South-West Region"
  },
  {
    id: "gal-6",
    title: "Laboratory Cut-Test Quality Audit",
    category: "quality",
    categoryLabel: "Quality & Facility",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    caption: "Quality inspectors evaluating bean fermentation degree and moisture percentage in Bonaberi.",
    location: "Bonaberi Laboratory, Douala"
  },
  {
    id: "gal-7",
    title: "Jute Bag Stenciling & Barcoding",
    category: "port",
    categoryLabel: "Port & Logistics",
    imageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80",
    caption: "Standardized 65.5kg jute export bags stamped with Telcar trade codes and origin tags.",
    location: "Export Processing Warehouse, Douala"
  },
  {
    id: "gal-8",
    title: "Fine Chocolate Artisans",
    category: "quality",
    categoryLabel: "Quality & Facility",
    imageUrl: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1200&q=80",
    caption: "Cameroon's distinctive cocoa beans transformed into gourmet chocolate by international partners.",
    location: "Global Chocolate Mills, Switzerland & Belgium"
  }
];

export const INITIAL_NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "news-1",
    title: "Telcar Cocoa Ltd Celebrates New Milestone in Sustainable Farmer Training Across Cameroon",
    category: "Sustainability",
    date: "July 12, 2026",
    readTime: "4 min read",
    summary: "Over 3,500 new cocoa farmers in the South-West and Centre regions have graduated from the Telcar Farmer Academy, receiving certification in eco-friendly agricultural techniques.",
    content: `DOUALA, CAMEROON — Telcar Cocoa Ltd, Cameroon's premier cocoa exporter, has announced the successful completion of another major session of the Telcar Farmer Academy. Held across 40 rural training centers in Meme, Fako, and Sanaga-Maritime, the program equips smallholder farmers with modern agronomic practices.

Participants learned advanced shade management, natural pest control, soil conservation, and proper solar drying techniques to reduce post-harvest losses. Graduates received official Rainforest Alliance and UTZ recognition, enabling them to earn premium prices for their Grade 1 cocoa beans.

Madame Kate Fotso, CEO of Telcar Cocoa Ltd, emphasized: "Empowering Cameroonian farmers with knowledge and sustainable tools is not just good ethics — it is the cornerstone of premium cocoa quality for the global market."`,
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80",
    author: "Telcar Communications Dept"
  },
  {
    id: "news-2",
    title: "Cameroon Cocoa Sector Reaches Record Export Volumes Through Douala and Kribi Seaports",
    category: "Market Insights",
    date: "June 28, 2026",
    readTime: "5 min read",
    summary: "Enhanced port logistics and streamlined customs procedures at the Autonomous Port of Kribi and Douala have accelerated shipment turnaround times for international buyers.",
    content: `BONABERI, DOUALA — As global demand for premium African cocoa continues to expand, Cameroon's export logistics infrastructure has shown remarkable resilience and efficiency. Telcar Cocoa Ltd's strategic facilities in Bonaberi have operated at peak capacity, coordinating direct ocean vessel loadings bound for major European and North American ports.

With the integration of automated barcode tracking on standard 65.5 kg jute bags, international buyers can now trace batch origins directly back to regional buying stations in Ebolowa, Yaoundé, and Kumba.

Industry analysts note that Cameroonian cocoa beans remain highly sought after by chocolate manufacturers due to their superior cocoa butter content and rich mahogany coloring.`,
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80",
    author: "Global Commodities Desk"
  },
  {
    id: "news-3",
    title: "How Telcar Cocoa & Cargill Joint Partnership Drives Technological Sourcing in West Africa",
    category: "Company Updates",
    date: "May 15, 2026",
    readTime: "6 min read",
    summary: "A deep dive into the multi-decade trading partnership between Telcar Cocoa and Cargill, establishing digital traceability and solar drying innovation.",
    content: `DOUALA — Since the mid-1990s, the alliance between Telcar Cocoa Ltd and global agricultural giant Cargill has served as a benchmark for public-private collaboration in African agribusiness.

By combining Telcar's unrivaled local field presence and deep relationship with Cameroonian farming communities with Cargill's global supply chain network, the partnership has introduced solar drying tables, digital mobile payments for farmers, and comprehensive child protection initiatives.

Looking ahead, Telcar plans to expand its solar drying infrastructure across 50 additional cooperatives in the East and South regions ahead of the 2026/2027 main crop season.`,
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    author: "Agribusiness Quarterly"
  }
];
