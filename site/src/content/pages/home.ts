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
      eyebrow?: string;
      headline: string;
      subheadline: string;
      /** Optional side panel, e.g. what a free review covers. */
      panel?: { heading: string; items: string[]; note?: string };
    }
  | {
      type: "valueChecklist";
      eyebrow?: string;
      heading: string;
      intro?: string;
      items: string[];
    }
  | {
      type: "services";
      eyebrow?: string;
      heading: string;
      intro?: string;
    }
  | {
      type: "steps";
      eyebrow?: string;
      heading: string;
      intro?: string;
      steps: { title: string; description: string }[];
    }
  | {
      type: "projects";
      eyebrow?: string;
      heading: string;
      intro?: string;
      ctaLabel: string;
    }
  | {
      type: "featureList";
      eyebrow?: string;
      heading: string;
      subheading?: string;
      items: { title: string; description: string }[];
    }
  | {
      type: "testimonials";
      eyebrow?: string;
      heading: string;
      intro?: string;
    }
  | {
      type: "pricing";
      eyebrow?: string;
      heading: string;
      intro?: string;
      footnote?: string;
    }
  | {
      type: "faq";
      eyebrow?: string;
      heading: string;
      intro?: string;
    }
  | {
      type: "cta";
      heading: string;
      body: string;
    };

export const homeSections: HomeSection[] = [
  {
    type: "hero",
    eyebrow: "Web design and lead systems for local businesses",
    headline: "Websites Built to Bring Local Businesses More Customers",
    subheadline:
      "We design fast, professional websites that turn Google searches and website visitors into phone calls, estimate requests and customers.",
    panel: {
      heading: "Your free website review covers",
      items: [
        "How your site looks and works on a phone",
        "Whether visitors can call or request an estimate in one tap",
        "How you show up in Google for your services and area",
        "Page speed and the fixes that matter",
      ],
      note: "Takes about 15 minutes. You get a short written summary either way.",
    },
  },
  {
    type: "valueChecklist",
    eyebrow: "What a website is for",
    heading: "Your website should do more than look good.",
    intro:
      "For a local service business the website has one job: turn the people who find you into people who call you.",
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
    eyebrow: "Services",
    heading: "What we do",
    intro:
      "The website gets you found. Everything connected to it turns visitors into customers.",
  },
  {
    type: "steps",
    eyebrow: "Process",
    heading: "How it works",
    intro: "Five steps from first call to a website that brings in leads. Most sites launch in two to three weeks.",
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
          "Optional monthly plans for hosting, Google Business Profile, analytics and reporting.",
      },
    ],
  },
  {
    type: "projects",
    eyebrow: "Examples",
    heading: "Demo websites",
    intro: "See what a site built this way looks like for businesses like yours.",
    ctaLabel: "View demo",
  },
  {
    type: "featureList",
    eyebrow: "Why us",
    heading: "Built for local businesses. Not generic templates.",
    items: [
      { title: "Fast", description: "Built for fast loading and excellent mobile performance." },
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
    eyebrow: "Reviews",
    heading: "What customers say",
  },
  {
    type: "pricing",
    eyebrow: "Pricing",
    heading: "Clear one-time prices. No surprises.",
    intro: "Every package includes design, build, launch and a walkthrough. Optional monthly plans for hosting, Google Business Profile and reporting are available after launch.",
    footnote: "Prices are starting points. Larger sites and custom integrations are quoted after the free review.",
  },
  {
    type: "faq",
    eyebrow: "FAQ",
    heading: "Common questions",
    intro: "Anything else, just call. We answer the phone.",
  },
  {
    type: "cta",
    heading: "Want to see what your business could look like online?",
    body: "We'll review your current website and show you exactly what we'd improve. No cost, no obligation.",
  },
];
