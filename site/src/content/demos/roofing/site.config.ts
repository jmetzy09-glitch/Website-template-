import type { SiteConfig } from "@/content/site.config";

/**
 * DEMO SITE — fictional company. Everything here is invented for a prospect
 * demonstration and labelled as such on the page.
 */

export const BASE = "/demos/roofing";

export const roofingConfig: SiteConfig = {
  mode: "client",
  businessType: "roofing",

  business: {
    name: "West Texas Roofing Co.",
    tagline: "Protecting West Texas homes from hail, wind and everything in between.",
    phone: "(325) 555-0199",
    email: "office@westtexasroofing.example",
    address: { city: "San Angelo", state: "TX" },
    serviceArea: [
      "San Angelo",
      "Christoval",
      "Miles",
      "Wall",
      "Mertzon",
      "Ballinger",
      "Eldorado",
      "Sonora",
      "Sterling City",
      "Big Lake",
      "Brady",
      "Robert Lee",
    ],
    hours: "Mon-Sat 7:00 AM - 6:00 PM. 24-hour storm line.",
    yearFounded: 2009,
  },

  brand: {
    logo: "/images/demos/roofing/logo.svg",
    accent: "#c2410c",
    headingFont: "Barlow Condensed",
  },

  features: {
    pricing: false,
    serviceAreas: true,
    stickyCallBar: true,
    blog: false,
    reviews: true,
    gallery: true,
  },

  conversion: {
    primaryCTA: { label: "Schedule a Free Roof Inspection", shortLabel: "Free inspection", href: `${BASE}/contact` },
    secondaryCTA: { label: "See Recent Work", href: `${BASE}/projects` },
  },

  nav: [
    { label: "Services", href: `${BASE}/services` },
    { label: "Storm Damage", href: `${BASE}/#storm-damage` },
    { label: "Projects", href: `${BASE}/projects` },
    { label: "About", href: `${BASE}/about` },
    { label: "Contact", href: `${BASE}/contact` },
  ],

  seo: {
    siteUrl: "https://example.com",
    defaultTitle: "Roofing Contractor in San Angelo, TX",
    defaultDescription:
      "Roof replacement, repair, hail damage and metal roofing for San Angelo and the Concho Valley. Free inspections, insurance claim help and financing.",
  },

  integrations: {},
};

export const roofingPhoneHref = `tel:+1${roofingConfig.business.phone.replace(/\D/g, "")}`;
