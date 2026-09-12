/**
 * Homepage composition.
 *
 * The page renders these sections in order. Reorder, remove or add entries
 * here to change the homepage without touching components. Sections that
 * pull shared data (services, projects, pricing, faq) read from the sibling
 * content files.
 */

export type HomeSection =
  | {
      type: "hero";
      headline: string;
      subheadline: string;
    }
  | {
      type: "valueChecklist";
      heading: string;
      items: string[];
    }
  | {
      type: "services";
      heading: string;
      intro?: string;
    }
  | {
      type: "steps";
      heading: string;
      steps: { title: string; description: string }[];
    }
  | {
      type: "projects";
      heading: string;
      intro?: string;
      ctaLabel: string;
    }
  | {
      type: "featureList";
      heading: string;
      subheading?: string;
      items: { title: string; description: string }[];
    }
  | {
      type: "testimonials";
      heading: string;
    }
  | {
      type: "pricing";
      heading: string;
      intro?: string;
    }
  | {
      type: "faq";
      heading: string;
    }
  | {
      type: "cta";
      heading: string;
      body: string;
    };

export const homeSections: HomeSection[] = [
  {
    type: "hero",
    headline: "Websites Built to Bring Local Businesses More Customers",
    subheadline:
      "We design fast, professional websites that turn Google searches and website visitors into phone calls, estimate requests and customers.",
  },
  {
    type: "valueChecklist",
    heading: "Your website should do more than look good.",
    items: [
      "Generate phone calls",
      "Capture estimate requests",
      "Build trust before the first call",
      "Rank for local searches",
      "Work perfectly on phones",
      "Track where every lead comes from",
    ],
  },
  {
    type: "services",
    heading: "What we do",
    intro:
      "The website gets you found. Everything connected to it turns visitors into customers.",
  },
  {
    type: "steps",
    heading: "How it works",
    steps: [
      {
        title: "We learn your business",
        description:
          "A short conversation about your services, your customers and what a good lead looks like.",
      },
      {
        title: "We design your website",
        description:
          "A homepage concept built around your business, not a generic template.",
      },
      {
        title: "You review the concept",
        description: "You tell us what to change. We revise until it feels right.",
      },
      {
        title: "We build and launch it",
        description:
          "Every page, form and phone link tested on a real phone before it goes live.",
      },
      {
        title: "We help you generate leads",
        description:
          "Optional monthly plans for reviews, Google Business Profile, follow-up and reporting.",
      },
    ],
  },
  {
    type: "projects",
    heading: "Demo websites",
    intro: "See what a site built this way looks like for businesses like yours.",
    ctaLabel: "View demo",
  },
  {
    type: "featureList",
    heading: "Built for local businesses. Not generic templates.",
    items: [
      { title: "Fast", description: "Pages load in under two seconds on a phone." },
      {
        title: "Mobile-first",
        description: "Designed on a phone screen first, because that is where your customers are.",
      },
      {
        title: "SEO-ready",
        description: "Structured so Google understands what you do and where you do it.",
      },
      {
        title: "Conversion focused",
        description: "Every page has one clear next step: call or request an estimate.",
      },
      {
        title: "Simple pricing",
        description: "One-time website prices. Monthly plans only if you want them.",
      },
      {
        title: "Local support",
        description: "Based in San Angelo. We answer the phone.",
      },
    ],
  },
  {
    type: "testimonials",
    heading: "What customers say",
  },
  {
    type: "pricing",
    heading: "Pricing",
    intro: "Clear one-time prices. No surprises.",
  },
  {
    type: "faq",
    heading: "Common questions",
  },
  {
    type: "cta",
    heading: "Want to see what your business could look like online?",
    body: "We'll review your current website and show you exactly what we'd improve. No cost, no obligation.",
  },
];
