export interface ProcessStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  keyMetric: string;
  details: string[];
}

export interface QualityCard {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  metrics: { label: string; value: string }[];
  bulletPoints: string[];
}

export interface CameroonRegion {
  id: string;
  name: string;
  capital: string;
  harvestPeriod: string;
  annualTonnage: string;
  flavorProfile: string;
  highlights: string[];
  coordinates: { x: number; y: number }; // Percentage relative positioning on Cameroon map SVG
}

export interface ImpactStat {
  id: string;
  label: string;
  targetValue: number;
  suffix: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'farms' | 'quality' | 'port' | 'community';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
  location: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: 'Industry News' | 'Company Updates' | 'Market Insights' | 'Sustainability';
  date: string;
  readTime: string;
  summary: string;
  content: string;
  imageUrl: string;
  author: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  interestType: 'buyer' | 'partner' | 'farmer' | 'press' | 'general';
}

export interface SampleRequestData {
  fullName: string;
  companyName: string;
  email: string;
  country: string;
  beanGrade: 'Grade 1 Reddish-Brown' | 'Grade 1 Fermented' | 'Fairtrade / UTZ Certified' | 'Custom Specification';
  sampleQuantityKg: number;
  shippingAddress: string;
  notes: string;
}

export interface CompanyConfig {
  name: string;
  slogan: string;
  headquarters: string;
  address: string;
  phoneMain: string;
  phoneAlt: string;
  emailContact: string;
  emailExport: string;
  founderName: string;
  founderTitle: string;
  mapCoordinates: { lat: number; lng: number };
}
