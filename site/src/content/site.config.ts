/**
 * Site configuration.
 *
 * This is the ONE file to edit when cloning this codebase for a new client.
 * Business-specific copy for pages lives in the sibling content files.
 *
 * PLACEHOLDERS still to be decided by the owner are marked with `// TODO(owner)`.
 */

export type SiteMode = "agency" | "client";

export type BusinessType =
  | "agency"
  | "contractor"
  | "roofing"
  | "hvac"
  | "plumbing"
  | "landscaping";

export interface NavItem {
  label: string;
  href: string;
}

export interface CallToAction {
  label: string;
  href: string;
  /** Shorter wording for tight spaces such as the mobile call bar. */
  shortLabel?: string;
}

export interface SiteConfig {
  mode: SiteMode;
  businessType: BusinessType;

  business: {
    name: string;
    tagline: string;
    phone: string;
    email: string;
    address: {
      street?: string;
      city: string;
      state: string;
      zip?: string;
    };
    /** Cities / areas served. Drives the Service Area page and LocalBusiness schema. */
    serviceArea: string[];
    hours: string;
    yearFounded?: number;
  };

  brand: {
    /** Path under /public */
    logo: string;
    /** Hex colour used for the single accent. */
    accent: string;
    /** Google Fonts family name for headings; body always uses the system stack. */
    headingFont: string;
  };

  features: {
    pricing: boolean;
    serviceAreas: boolean;
    stickyCallBar: boolean;
    blog: boolean;
    reviews: boolean;
    gallery: boolean;
  };

  conversion: {
    primaryCTA: CallToAction;
    secondaryCTA: CallToAction;
  };

  nav: NavItem[];

  seo: {
    siteUrl: string;
    defaultTitle: string;
    defaultDescription: string;
  };

  integrations: {
    ga4Id?: string;
    leadToEmail?: string;
  };
}

export const siteConfig: SiteConfig = {
  mode: "agency",
  businessType: "agency",

  business: {
    name: "Concho Web Co.", // TODO(owner): working name until the real one is chosen
    tagline: "Websites built to bring local businesses more customers",
    phone: "(325) 555-0100", // TODO(owner): real phone number
    email: "hello@example.com", // TODO(owner): real email
    address: {
      city: "San Angelo",
      state: "TX",
    },
    serviceArea: ["San Angelo", "Ballinger", "Sonora", "Brady", "Big Spring"],
    hours: "Mon-Fri 8:00 AM - 6:00 PM",
    yearFounded: 2026,
  },

  brand: {
    logo: "/icon.svg",
    accent: "#2563eb",
    headingFont: "Manrope",
  },

  features: {
    pricing: true,
    serviceAreas: false,
    stickyCallBar: true,
    blog: false,
    reviews: true,
    gallery: true,
  },

  conversion: {
    primaryCTA: { label: "Get a Free Website Review", shortLabel: "Free review", href: "/contact" },
    secondaryCTA: { label: "See Our Work", href: "/examples" },
  },

  nav: [
    { label: "Websites", href: "/services/websites" },
    { label: "Services", href: "/services" },
    { label: "Examples", href: "/examples" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  seo: {
    siteUrl: "https://website-template-eosin-sigma.vercel.app", // TODO(owner): replace with the real domain when purchased
    defaultTitle: "Websites for Local Businesses in San Angelo, TX",
    defaultDescription:
      "Fast, professional websites that turn Google searches into phone calls, estimate requests and customers for local service businesses.",
  },

  integrations: {
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID,
    leadToEmail: process.env.LEAD_TO_EMAIL,
  },
};

/** Digits-only phone for tel: links. */
export const phoneHref = `tel:+1${siteConfig.business.phone.replace(/\D/g, "")}`;
