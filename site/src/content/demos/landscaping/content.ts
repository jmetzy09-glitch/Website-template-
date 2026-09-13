/**
 * DEMO SITE — fictional copy for Concho Valley Lawn & Landscape.
 * All names, reviews, projects and prices are invented. Photos are Unsplash
 * (see public/images/demos/landscaping/CREDITS.md).
 */

const IMG = "/images/demos/landscaping";

export interface LandscapingService {
  slug: string;
  name: string;
  summary: string;
  description: string[];
  includes: string[];
  image: { src: string; alt: string };
}

export const landscapingServices: LandscapingService[] = [
  {
    slug: "landscape-design",
    name: "Landscape Design & Installation",
    summary: "Front yards and backyards designed for this climate, installed by our own crew.",
    description: [
      "We start with how you actually use your yard, then design planting, beds, borders and lighting that look good in July, not just in April. Every design leans on plants that thrive in Concho Valley heat and clay soil.",
      "Once you approve the plan, the same crew that designed it installs it. No handoffs, no surprises.",
    ],
    includes: ["On-site design consultation", "Planting plan with plant list", "Bed preparation and soil amendment", "Installation by our crew", "30-day plant establishment check"],
    image: { src: `${IMG}/garden-path.jpg`, alt: "Brick garden path lined with flower beds and trees" },
  },
  {
    slug: "lawn-care",
    name: "Lawn Care & Maintenance",
    summary: "Weekly mowing, edging, fertilization and weed control on a plan that fits your yard.",
    description: [
      "A good lawn in West Texas is about timing: the right fertilizer before the heat, pre-emergent before the weeds, and consistent mowing height so the grass shades its own roots.",
      "Choose a monthly plan and we handle the schedule. You just enjoy the yard.",
    ],
    includes: ["Weekly or bi-weekly mowing and edging", "Seasonal fertilization program", "Pre-emergent and post-emergent weed control", "Leaf and debris cleanup", "Bed maintenance on Complete plans and up"],
    image: { src: `${IMG}/mowing-2.jpg`, alt: "Lawn crew mowing and edging a residential backyard" },
  },
  {
    slug: "irrigation",
    name: "Irrigation & Sprinkler Systems",
    summary: "Licensed irrigation design, installation, repair and seasonal tune-ups.",
    description: [
      "Water is the whole game here. A well-designed system puts water where the roots are, at the right time of day, without soaking the sidewalk. We design and install new systems and fix the ones that were never quite right.",
      "Smart controllers adjust to the weather, which usually pays for itself in the first summer.",
    ],
    includes: ["Licensed irrigation design and installation", "Drip conversion for beds", "Smart weather-based controllers", "Leak and coverage repairs", "Spring start-up and winterization"],
    image: { src: `${IMG}/sprinklers-sunset.jpg`, alt: "Sprinklers watering a green lawn at sunset" },
  },
  {
    slug: "xeriscaping",
    name: "Water-Wise Xeriscaping",
    summary: "Native and drought-tolerant landscapes that look intentional and cut the water bill.",
    description: [
      "Xeriscape does not mean a yard full of rocks. Done right, it is agave, Texas sage, red yucca, ornamental grasses and shade trees arranged with gravel and steel edging so it looks designed, not abandoned.",
      "It uses a fraction of the water of turf and looks better in August than most lawns do.",
    ],
    includes: ["Native and adapted plant palettes", "Decomposed granite and river rock", "Steel edging and dry creek beds", "Drip irrigation", "Turf-to-xeriscape conversions"],
    image: { src: `${IMG}/cactus-gravel.jpg`, alt: "Drought-tolerant garden bed with cactus and gravel" },
  },
  {
    slug: "hardscapes",
    name: "Patios & Hardscapes",
    summary: "Paver patios, walkways, retaining walls and outdoor living spaces.",
    description: [
      "The best room in a West Texas house is often outside, after sundown. We build paver and flagstone patios, walkways, seat walls and fire features that hold up to heat and heavy use.",
    ],
    includes: ["Paver and flagstone patios", "Walkways and steps", "Retaining and seat walls", "Fire pits and outdoor kitchens prep", "Landscape lighting"],
    image: { src: `${IMG}/patio-covered.jpg`, alt: "Covered backyard patio with a grill and dining table" },
  },
  {
    slug: "tree-care",
    name: "Tree & Shrub Care",
    summary: "Pruning, shaping, fertilization and removal by people who know West Texas trees.",
    description: [
      "Live oaks, pecans, cedar elms and crape myrtles all want different things. We prune at the right time of year for each, feed them properly, and remove trees safely when that is the only option.",
    ],
    includes: ["Structural and clearance pruning", "Crape myrtle and shrub shaping", "Deep-root fertilization", "Tree removal and stump grinding", "Oak wilt-aware timing"],
    image: { src: `${IMG}/arborist-pruning.jpg`, alt: "Arborist pruning branches in a tree" },
  },
];

export interface LandscapingProject {
  slug: string;
  title: string;
  location: string;
  type: string;
  summary: string;
  image: { src: string; alt: string };
}

export const landscapingProjects: LandscapingProject[] = [
  {
    slug: "bentwood-front-yard",
    title: "Front yard redesign with new beds",
    location: "Bentwood, San Angelo",
    type: "Design and installation",
    summary: "Replaced tired foundation shrubs with layered beds, a curved brick path and a drip system. Curb appeal in one weekend.",
    image: { src: `${IMG}/garden-path.jpg`, alt: "Brick path winding through new flower beds" },
  },
  {
    slug: "southland-sod",
    title: "New sod and irrigation",
    location: "Southland, San Angelo",
    type: "Sod and irrigation",
    summary: "Graded, amended and laid Bermuda sod over a new six-zone irrigation system with a smart controller.",
    image: { src: `${IMG}/sod-install.jpg`, alt: "Hands pressing fresh sod into prepared soil" },
  },
  {
    slug: "christoval-xeriscape",
    title: "Turf-to-xeriscape conversion",
    location: "Christoval",
    type: "Water-wise landscape",
    summary: "Removed a struggling lawn and replaced it with agave, red yucca, ornamental grasses and decomposed granite. Water bill cut in half.",
    image: { src: `${IMG}/cactus-gravel.jpg`, alt: "Xeriscape bed with cactus and gravel" },
  },
  {
    slug: "college-hills-patio",
    title: "Covered patio and outdoor kitchen prep",
    location: "College Hills, San Angelo",
    type: "Hardscape",
    summary: "Paver patio, seat wall and gas and electrical rough-in for a grill island. Finished with low-voltage lighting.",
    image: { src: `${IMG}/patio-covered.jpg`, alt: "Covered patio with grill and dining area" },
  },
  {
    slug: "wall-weekly-lawn",
    title: "Weekly lawn plan, two acres",
    location: "Wall",
    type: "Maintenance",
    summary: "Complete plan with mowing, edging, fertilization and bed care on a large rural lot. Same crew every Thursday.",
    image: { src: `${IMG}/lawn-wide.jpg`, alt: "Wide manicured green lawn with trees and shrubs" },
  },
  {
    slug: "grape-creek-trees",
    title: "Live oak pruning and crape myrtle shaping",
    location: "Grape Creek",
    type: "Tree care",
    summary: "Structural pruning on three mature live oaks, done in the safe window for oak wilt, plus crape myrtle shaping.",
    image: { src: `${IMG}/arborist-pruning.jpg`, alt: "Arborist pruning a mature tree" },
  },
];

export const landscapingPlans = [
  {
    slug: "essential",
    name: "Essential",
    price: "$149/mo",
    summary: "Mowing, edging and blowing every week during the season.",
    features: ["Weekly mow, edge and blow", "Bi-weekly in winter", "Seasonal fertilization (2x)", "Text the day before we come"],
  },
  {
    slug: "complete",
    name: "Complete",
    price: "$249/mo",
    summary: "Everything in Essential plus weed control and bed care.",
    features: ["Everything in Essential", "Pre-emergent and weed control (4x)", "Bed weeding and edging monthly", "Shrub trimming twice a year", "Irrigation check each spring"],
    recommended: true,
  },
  {
    slug: "estate",
    name: "Estate",
    price: "$399/mo",
    summary: "Full-service care for larger properties and show-piece yards.",
    features: ["Everything in Complete", "Bi-weekly bed care and deadheading", "Seasonal color changes (2x)", "Tree and shrub fertilization", "Priority scheduling and storm cleanup"],
  },
];

export const landscapingTestimonials = [
  {
    quote: "Our front yard went from the worst on the street to the one people slow down for. They designed it, installed it, and it survived its first summer without a hitch.",
    author: "Melissa K.",
    context: "Bentwood, San Angelo",
    rating: 5 as const,
  },
  {
    quote: "We switched to the Complete plan two years ago. Same crew every week, the lawn has never looked better, and I have not touched a mower since.",
    author: "Robert and Jana D.",
    context: "Wall",
    rating: 5 as const,
  },
  {
    quote: "They talked us into xeriscaping the front and I am glad they did. It looks sharp, the water bill dropped, and there is nothing to mow.",
    author: "Tom A.",
    context: "Christoval",
    rating: 5 as const,
  },
];

export const landscapingFaq = [
  { question: "Is the yard consultation really free?", answer: "Yes. We walk the property with you, talk through what you want, and follow up with a written proposal. No obligation." },
  { question: "What grass does best in San Angelo?", answer: "Bermuda for full sun and heavy use, Zoysia for a finer look, and St. Augustine only in real shade with good water. We will tell you which fits your yard." },
  { question: "How much water does a xeriscape actually save?", answer: "Compared to a turf lawn on a sprinkler system, most conversions cut outdoor water use by half or more, and drip irrigation keeps the plants established." },
  { question: "Do I have to sign a contract for a lawn plan?", answer: "Plans are month to month. Pause or cancel any time with a week's notice." },
  { question: "Are you licensed for irrigation work?", answer: "Yes. Irrigation design and installation in Texas requires a state license, and ours is current. Ask to see it." },
  { question: "When should trees be pruned?", answer: "Live oaks and red oaks should only be pruned in the coldest and hottest months to avoid oak wilt. Most other trees do best in late winter. We schedule accordingly." },
];

export const landscapingHome = {
  hero: {
    eyebrow: "San Angelo and the Concho Valley",
    headline: "Yards that look good in July, not just in April.",
    subheadline:
      "Landscape design, lawn care plans, irrigation and water-wise xeriscaping from a local crew that knows what survives a West Texas summer.",
    image: { src: `${IMG}/lawn-wide.jpg`, alt: "Manicured green lawn with layered shrubs and shade trees" },
    badges: ["Licensed irrigator", "Free consultations", "Month-to-month plans", "Same crew every visit"],
    card: {
      heading: "Your free consultation covers",
      items: ["What your soil and sun will support", "Water use and irrigation fixes", "A written plan with pricing"],
    },
  },
  trust: [
    { title: "Local since 2014", description: "Same crew, same faces, week after week." },
    { title: "Built for the heat", description: "Plants and grasses chosen for Concho Valley conditions." },
    { title: "Licensed irrigation", description: "State-licensed design, install and repair." },
    { title: "Month to month", description: "No long contracts on lawn plans." },
  ],
  services: { eyebrow: "Services", heading: "Everything from the curb to the back fence", intro: "Design, install and maintain. One crew, one number to call." },
  waterWise: {
    eyebrow: "Water-wise landscapes",
    heading: "Less water. Less mowing. A yard that looks designed.",
    body: [
      "West Texas water is expensive and summers are long. A water-wise landscape uses native and adapted plants, gravel and steel edging, and drip irrigation to look intentional year-round while using a fraction of what a lawn needs.",
      "We convert whole front yards or just the strips that never grew grass anyway.",
    ],
    bullets: ["Native and adapted plant palettes", "Drip irrigation on every bed", "Decomposed granite and river rock", "Rebate-eligible designs where available"],
    image: { src: `${IMG}/agave.jpg`, alt: "Agave leaves in bright sunlight" },
  },
  projects: { eyebrow: "Recent work", heading: "Around the Concho Valley", intro: "A few recent yards, from full redesigns to weekly care." },
  plans: {
    eyebrow: "Lawn care plans",
    heading: "Pick a plan. We handle the rest.",
    intro: "Month to month, no contracts. Prices shown are for typical city lots; larger properties are quoted after a visit.",
    footnote: "Demo pricing for illustration. Plans include the seasonal schedule; storm cleanup and one-time projects are quoted separately.",
  },
  process: {
    eyebrow: "How it works",
    heading: "From first visit to finished yard",
    steps: [
      { title: "Walk the yard", description: "A free consultation on site. We listen first." },
      { title: "Written plan", description: "Design, plant list and firm pricing." },
      { title: "Schedule", description: "We pick a date and confirm the day before." },
      { title: "Install", description: "Our crew, our equipment, cleaned up daily." },
      { title: "Keep it thriving", description: "Optional maintenance plan so it stays that way." },
    ],
  },
  reviews: { eyebrow: "Reviews", heading: "What neighbors say" },
  areas: { eyebrow: "Service area", heading: "Serving San Angelo and nearby towns", intro: "Based in San Angelo, on the road anywhere in Tom Green County and neighboring communities." },
  faq: { eyebrow: "FAQ", heading: "Common questions" },
  cta: { heading: "Ready for a yard you don't have to apologize for?", body: "Book a free consultation. We'll walk the property, listen, and send a written plan." },
};

export const landscapingAbout = {
  intro: {
    eyebrow: "About us",
    heading: "A local crew that knows what grows here",
    body: [
      "Concho Valley Lawn & Landscape started in 2014 with one truck, one trailer and a simple idea: yards in West Texas should be designed for West Texas. Too many landscapes here are copied from wetter places and fall apart by August.",
      "Today we are a small crew of people who have worked together for years. We design with heat, wind and clay soil in mind, we water smart, and we show up when we say we will.",
    ],
    bullets: ["Locally owned since 2014", "State-licensed irrigator on staff", "Same crew on every visit", "Fully insured"],
    image: { src: `${IMG}/wheelbarrow.jpg`, alt: "Landscaper pushing a wheelbarrow on a job site" },
  },
  values: {
    eyebrow: "How we work",
    heading: "What you can expect",
    items: [
      { title: "Plants that survive", description: "We choose for this climate first and looks second. It turns out you get both." },
      { title: "Water smart", description: "Drip where it belongs, smart controllers, and no watering the sidewalk." },
      { title: "Show up on time", description: "Scheduled visits with a text the day before." },
      { title: "Clean job sites", description: "Debris hauled, walks blown, gates closed." },
      { title: "Honest scope", description: "If a section of lawn will never grow, we say so and suggest something better." },
      { title: "No contracts", description: "Lawn plans are month to month. We keep customers by doing good work." },
    ],
  },
};
