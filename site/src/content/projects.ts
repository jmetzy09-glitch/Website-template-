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
  /** Short capability tags shown on showcases, e.g. "Mobile-first". */
  tags?: string[];
}

export const projects: Project[] = [
  {
    slug: "roofing-demo",
    title: "West Texas Roofing Co.",
    category: "Roofing and storm restoration",
    summary:
      "A conversion-focused site built around free roof inspections and storm-damage leads, with insurance-claim help and financing front and center.",
    image: "/images/examples/roofing-demo.jpg",
    imageAlt: "Homepage of the West Texas Roofing Co. demo website",
    href: "/demos/roofing",
    tags: ["Mobile-first", "Local SEO", "Lead capture", "Insurance and financing pages"],
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
    title: "Concho Valley Lawn & Landscape",
    category: "Landscaping and lawn care",
    summary:
      "A warm, photo-led site with monthly lawn plans, a water-wise xeriscape pitch and a free-consultation form. Same engine as the roofing site, completely different feel.",
    image: "/images/examples/landscaping-demo.jpg",
    imageAlt: "Homepage of the Concho Valley Lawn & Landscape demo website",
    href: "/demos/landscaping",
    tags: ["Mobile-first", "Monthly plans", "Lead capture", "Photo-led design"],
  },
];
