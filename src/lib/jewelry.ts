export interface JewelryProduct {
  name: string; slug: string; sku: string;
  shape: string; setting: string;
  category: 'Rings' | 'Necklaces' | 'Earrings' | 'Bracelets';
  image: string;
  /** Enriched fields (present in jewelryData.json, absent on the small featured set). */
  imageYellow?: string;
  carat?: string;
  description?: string;
  bestseller?: boolean;
  metals?: string[];
}

export const jewelryCategories = ['Rings', 'Necklaces', 'Earrings', 'Bracelets'] as const;

/** One representative product per collection for the home 'Worn Like Heirlooms' section. */
export const featuredJewelry: JewelryProduct[] = [
  { name: "Leave Her Speechless Diamond Engagement Ring", slug: "leave-her-speechless-diamond-engagement-ring", sku: "MS118A-6", shape: "Round", setting: "Prong", category: "Rings", image: "https://evertrustjewels.com/images/products/MS118A-6-white.jpg" },
  { name: "Brilliant Four Diamond Pendant", slug: "brilliant-four-diamond-pendant", sku: "SP137", shape: "Round", setting: "Prong", category: "Necklaces", image: "https://evertrustjewels.com/images/products/SP137-white.jpg" },
  { name: "Four Prong Diamond Stud Earrings", slug: "four-prong-diamond-stud-earrings", sku: "ST991", shape: "Round", setting: "Prong", category: "Earrings", image: "https://evertrustjewels.com/images/products/ST991-white.jpg" },
  { name: "Low Profile 4 Prong Round Diamond Tennis Bracelet", slug: "low-profile-4-prong-round-diamond-tennis-bracelet", sku: "SB704", shape: "Round", setting: "Prong", category: "Bracelets", image: "https://evertrustjewels.com/images/products/SB704-white.jpg" },
];
