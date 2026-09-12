/**
 * In agency mode these are demo websites.
 * In client mode these are completed jobs / project gallery entries.
 */
export interface Project {
  slug: string;
  title: string;
  /** Industry or job type. */
  category: string;
  summary: string;
  /** Path under /public. Optional until real imagery exists. */
  image?: string;
  imageAlt?: string;
  /** External demo URL or internal case-study route. */
  href?: string;
}

export const projects: Project[] = [
  {
    slug: "roofing-demo",
    title: "Roofing Company",
    category: "Home Services",
    summary:
      "Storm damage, insurance claims and free inspections, with a sticky call bar on mobile.",
  },
  {
    slug: "hvac-demo",
    title: "HVAC Company",
    category: "Home Services",
    summary:
      "Seasonal service pages, maintenance plan sign-up and 24-hour emergency contact.",
  },
  {
    slug: "plumbing-demo",
    title: "Plumbing Company",
    category: "Home Services",
    summary:
      "Emergency-first layout with instant estimate request and service-area pages.",
  },
  {
    slug: "landscaping-demo",
    title: "Landscaping Company",
    category: "Home Services",
    summary:
      "Photo-led project gallery, seasonal promotions and a simple quote form.",
  },
];
