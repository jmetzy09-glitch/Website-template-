import type { SiteConfig } from "@/content/site.config";

/**
 * DEMO SITE — fictional company. Everything here is invented for a prospect
 * demonstration and labelled as such on the page.
 */

export const BASE = "/demos/landscaping";

export const landscapingConfig: SiteConfig = {
  mode: "client",
  businessType: "landscaping",

  business: {
    name: "Concho Valley Lawn & Landscape",
    tagline: "Beautiful yards that survive West Texas summers.",
    phone: "(325) 555-0147",
    email: "hello@conchovalleylawn.example",
    address: { city: "San Angelo", state: "TX" },
    serviceArea: ["San Angelo", "Wall", "Miles", "Christoval", "Grape Creek", "Carlsbad", "Veribest", "Mertzon", "Eldorado", "Ballinger"],
    hours: "Mon-Fri 7:00 AM - 6:00 PM, Sat 8:00 AM - 2:00 PM",
    yearFounded: 2014,
  },

  brand: {
    logo: "/images/demos/landscaping/logo.svg",
    accent: "#2f7a3e",
    headingFont: "Fraunces",
  },

  features: {
    pricing: true,
    serviceAreas: true,
    stickyCallBar: true,
    blog: false,
    reviews: true,
    gallery: true,
  },

  conversion: {
    primaryCTA: { label: "Get a Free Yard Consultation", shortLabel: "Free consult", href: `${BASE}/contact` },
    secondaryCTA: { label: "See Our Work", href: `${BASE}/projects` },
  },

  nav: [
    { label: "Services", href: `${BASE}/services` },
    { label: "Lawn Plans", href: `${BASE}/#plans` },
    { label: "Projects", href: `${BASE}/projects` },
    { label: "About", href: `${BASE}/about` },
    { label: "Contact", href: `${BASE}/contact` },
  ],

  seo: {
    siteUrl: "https://example.com",
    defaultTitle: "Landscaping and Lawn Care in San Angelo, TX",
    defaultDescription:
      "Landscape design, lawn care plans, irrigation, sod, patios and water-wise xeriscaping for San Angelo and the Concho Valley. Free yard consultations.",
  },

  integrations: {},
};

export const landscapingPhoneHref = `tel:+1${landscapingConfig.business.phone.replace(/\D/g, "")}`;
