import type { ServiceIconName } from "@/components/ui/Icons";

export interface Service {
  slug: string;
  /** Icon shown next to the service in lists. */
  icon?: ServiceIconName;
  name: string;
  /** One-line summary shown on cards. */
  summary: string;
  /** Longer copy for the service detail page. */
  description: string;
  /** Concrete deliverables or outcomes. */
  includes: string[];
}

export const services: Service[] = [
  {
    slug: "websites",
    icon: "layout",
    name: "Professional Websites",
    summary:
      "Fast, mobile-first websites designed to turn visitors into phone calls and estimate requests.",
    description:
      "We design and build websites for local service businesses that load fast, look professional on a phone, and make it obvious how to call you or request an estimate. Every page is written for the customer, not for the search engine, and structured so Google understands what you do and where.",
    includes: [
      "Custom design, not a theme",
      "Mobile-first layout with click-to-call",
      "Estimate request form delivered to your inbox",
      "A page for each major service",
      "Local SEO structure and schema markup",
      "Launch on your own domain",
    ],
  },
  {
    slug: "local-seo",
    icon: "map-pin",
    name: "Local SEO",
    summary:
      "Service and city pages that help you show up when people nearby search for what you do.",
    description:
      "Most local businesses are invisible for the searches that matter. We build dedicated pages for each service and each city you serve, tune titles and descriptions, and make sure Google can read your business details correctly.",
    includes: [
      "Keyword research for your services and area",
      "Dedicated service and city pages",
      "On-page optimization and schema",
      "Search Console setup and monitoring",
      "Monthly ranking report",
    ],
  },
  {
    slug: "google-business",
    icon: "store",
    name: "Google Business Profile",
    summary:
      "Optimize the listing that shows up in the map results, where most local calls come from.",
    description:
      "Your Google Business Profile often gets more views than your website. We complete and optimize it, add services and photos, publish regular posts, and keep it accurate so it earns the calls it should.",
    includes: [
      "Full profile audit and cleanup",
      "Service and product listings",
      "Photo and post schedule",
      "Review response guidance",
      "Monthly insights report",
    ],
  },
  {
    slug: "lead-capture",
    icon: "inbox",
    name: "Lead Capture",
    summary:
      "Quote and estimate forms that reach you in seconds, with every lead tracked.",
    description:
      "A form that only sends an email is a form that gets missed. We build estimate and quote forms that notify you instantly, confirm receipt to the customer, and record every inquiry so nothing falls through the cracks.",
    includes: [
      "Estimate and quote forms",
      "Instant owner notification",
      "Customer confirmation message",
      "Source tracking for every lead",
      "Spam protection",
    ],
  },
  {
    slug: "review-automation",
    icon: "star",
    name: "Review Automation",
    summary:
      "Automatically ask happy customers for a Google review after every completed job.",
    description:
      "Reviews are the strongest signal a local business has. We set up a simple system that requests a review after each job, reminds customers who have not responded, and reports how your rating is growing.",
    includes: [
      "Automated review requests by text or email",
      "Gentle follow-up reminders",
      "Direct link to your Google review form",
      "Monthly review report",
    ],
  },
  {
    slug: "business-automation",
    icon: "cog",
    name: "Business Automation",
    summary:
      "Small systems that remove the repetitive work your team does by hand every day.",
    description:
      "Copying leads into a spreadsheet, sending appointment reminders, chasing unpaid invoices, following up on quotes. We find the repetitive tasks in your business and build small, reliable automations that handle them.",
    includes: [
      "Process review with you or your office manager",
      "Custom automation built for your workflow",
      "Integration with tools you already use",
      "Documentation and training",
    ],
  },
  {
    slug: "hosting-maintenance",
    icon: "server",
    name: "Hosting & Maintenance",
    summary:
      "Fast hosting, backups, security updates and small changes, handled for you.",
    description:
      "Your website should never be something you have to think about. We host it on fast infrastructure, keep it updated and backed up, and make small content changes when you need them.",
    includes: [
      "Managed hosting and SSL",
      "Automatic backups",
      "Security and dependency updates",
      "Minor content changes each month",
      "Uptime monitoring",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
