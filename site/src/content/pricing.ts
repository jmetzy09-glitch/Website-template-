/**
 * Website packages. One-time prices.
 * TODO(owner): confirm price points. Monthly plans are deliberately deferred.
 */
export interface PricingTier {
  slug: string;
  name: string;
  /** Display price, e.g. "$1,995" or "$4,995+". */
  price: string;
  /** Short line under the price. */
  summary: string;
  features: string[];
  /** Mark the tier most customers should pick. */
  recommended?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    slug: "starter",
    name: "Starter Website",
    price: "$1,995",
    summary: "A professional five-page site that gets you found and gets you called.",
    features: [
      "Home, Services, About, Reviews, Contact",
      "Mobile-first design with click-to-call",
      "Estimate request form",
      "Basic local SEO setup",
      "Launch on your domain",
    ],
  },
  {
    slug: "growth",
    name: "Growth Website",
    price: "$3,495",
    summary: "Everything in Starter plus dedicated pages for your priority services and service areas.",
    features: [
      "Everything in Starter",
      "Dedicated pages for your priority services",
      "Service area pages for your priority locations",
      "Project gallery",
      "Google Business Profile setup",
      "Analytics and call tracking",
    ],
    recommended: true,
  },
  {
    slug: "lead-generation",
    name: "Lead Generation Website",
    price: "$4,995+",
    summary: "Built to capture and track every lead, with landing pages and conversion tracking.",
    features: [
      "Everything in Growth",
      "Advanced estimate and quote forms",
      "Conversion tracking for calls and forms",
      "Campaign landing pages for your top services",
      "Expanded service-area content",
      "Google Business Profile integration",
    ],
  },
];
