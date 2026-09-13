/**
 * DEMO SITE — fictional copy for West Texas Roofing Co.
 * All names, reviews and projects are invented. Photos are Unsplash (see public/images/demos/roofing/CREDITS.md).
 */

const IMG = "/images/demos/roofing";

export interface RoofingService {
  slug: string;
  name: string;
  summary: string;
  description: string[];
  includes: string[];
  image: { src: string; alt: string };
}

export const roofingServices: RoofingService[] = [
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    summary: "Full tear-off and replacement with architectural or Class 4 impact-resistant shingles.",
    description: [
      "When a roof is past repair, we replace it right: full tear-off down to the deck, rotten decking replaced, new underlayment, ice-and-water shield in the valleys, and shingles installed to the manufacturer's spec so the warranty holds.",
      "Most homes are finished in one day. We protect your landscaping, run a magnet sweep for nails before we leave, and walk the finished roof with you.",
    ],
    includes: [
      "Full tear-off and deck inspection",
      "Class 4 impact-resistant shingle options",
      "Synthetic underlayment and valley protection",
      "New drip edge, vents and pipe boots",
      "Manufacturer warranty registration",
      "One-day installation on most homes",
    ],
    image: { src: `${IMG}/house-modern.jpg`, alt: "Newly shingled gray roof on a single-story brick home" },
  },
  {
    slug: "roof-repair",
    name: "Roof Repair",
    summary: "Leaks, missing shingles, flashing, pipe boots and wind damage fixed fast.",
    description: [
      "Not every problem needs a new roof. We find the actual source of a leak, which is often flashing, a cracked pipe boot or a lifted shingle, and fix that instead of selling you a replacement.",
      "Repairs are photographed before and after so you can see exactly what was done.",
    ],
    includes: [
      "Leak diagnosis and repair",
      "Missing or wind-lifted shingles",
      "Flashing, chimney and skylight resealing",
      "Pipe boot and vent replacement",
      "Emergency tarping after storms",
    ],
    image: { src: `${IMG}/roofer-drill.jpg`, alt: "Roofer fastening shingles with a drill" },
  },
  {
    slug: "storm-damage",
    name: "Storm & Hail Damage",
    summary: "Free inspections after a storm, honest findings, and help with your insurance claim.",
    description: [
      "Hail in the Concho Valley is not a question of if. After a storm we inspect the roof, document any damage with photos, and tell you plainly whether it is worth a claim.",
      "If it is, we meet your adjuster on site, provide a written scope, and handle the work from tarp to final inspection.",
    ],
    includes: [
      "Free post-storm inspection",
      "Photo documentation for your claim",
      "Adjuster meeting on site",
      "Emergency tarping",
      "Full replacement or repair",
    ],
    image: { src: `${IMG}/roofer-inspection.jpg`, alt: "Roofer on a brick home inspecting hail-damaged shingles" },
  },
  {
    slug: "metal-roofing",
    name: "Metal Roofing",
    summary: "Standing seam and R-panel metal roofs built for West Texas sun, wind and hail.",
    description: [
      "Metal handles our climate better than almost anything: it sheds hail, reflects heat, and lasts 40 years or more. We install standing seam for homes and R-panel for barns, shops and ag buildings.",
      "Available in a range of colors, with proper underlayment and trim so it looks finished, not like a shed.",
    ],
    includes: [
      "Standing seam residential systems",
      "R-panel for shops, barns and outbuildings",
      "Energy-efficient reflective finishes",
      "Metal-over-shingle retrofits where allowed",
      "Trim, flashing and gutter integration",
    ],
    image: { src: `${IMG}/metal-roof-barn.jpg`, alt: "Standing seam metal roof with a cupola" },
  },
  {
    slug: "commercial",
    name: "Commercial Roofing",
    summary: "Metal, TPO and modified bitumen for shops, churches, schools and retail.",
    description: [
      "We roof commercial buildings across the Concho Valley: metal restoration and replacement, TPO and modified bitumen on low-slope roofs, and maintenance programs that catch problems before they close your doors.",
    ],
    includes: [
      "Metal roof restoration and coatings",
      "TPO and modified bitumen low-slope systems",
      "Preventive maintenance plans",
      "Work scheduled around your business hours",
    ],
    image: { src: `${IMG}/commercial-roof.jpg`, alt: "Corrugated metal commercial roof with rooftop units" },
  },
  {
    slug: "gutters",
    name: "Gutters",
    summary: "Seamless gutters, downspouts and guards sized for West Texas downpours.",
    description: [
      "Our rain comes all at once. Seamless aluminum gutters, properly sized downspouts and optional guards keep water away from your foundation and off your fascia.",
    ],
    includes: ["Seamless aluminum gutters", "Oversized downspouts", "Gutter guards", "Fascia repair"],
    image: { src: `${IMG}/gutter.jpg`, alt: "Gutter and downspout along the edge of a roof" },
  },
];

export interface RoofingProject {
  slug: string;
  title: string;
  location: string;
  roofType: string;
  summary: string;
  image: { src: string; alt: string };
}

export const roofingProjects: RoofingProject[] = [
  {
    slug: "southland-hail-replacement",
    title: "Full replacement after spring hail",
    location: "Southland, San Angelo",
    roofType: "Architectural shingle, Class 4",
    summary: "Insurance claim approved in full. Tear-off, new decking on the north slope, and a Class 4 shingle that earned the homeowner an insurance discount.",
    image: { src: `${IMG}/house-brown.jpg`, alt: "Two-story brick home with a new brown architectural shingle roof" },
  },
  {
    slug: "bentwood-new-roof",
    title: "New roof on a one-story brick home",
    location: "Bentwood, San Angelo",
    roofType: "Architectural shingle",
    summary: "Twenty-year-old three-tab shingles replaced in a single day, with new ridge vents to cool the attic.",
    image: { src: `${IMG}/house-modern.jpg`, alt: "Single-story brick home with new gray shingles" },
  },
  {
    slug: "christoval-standing-seam",
    title: "Standing seam metal on a ranch house",
    location: "Christoval",
    roofType: "Standing seam metal",
    summary: "Galvalume standing seam over a full deck with high-temp underlayment. Built to shrug off hail for decades.",
    image: { src: `${IMG}/metal-roof-barn.jpg`, alt: "Standing seam metal roof with cupola against a gray sky" },
  },
  {
    slug: "college-hills-tearoff",
    title: "Tear-off and re-deck",
    location: "College Hills, San Angelo",
    roofType: "Architectural shingle",
    summary: "Three layers of old shingles removed, rotten decking replaced, and a clean new roof installed over a proper base.",
    image: { src: `${IMG}/removing-shingles.jpg`, alt: "Roofer removing old shingles from a residential roof" },
  },
  {
    slug: "ballinger-commercial-metal",
    title: "Commercial metal roof restoration",
    location: "Ballinger",
    roofType: "Metal restoration coating",
    summary: "Fastener replacement, seam sealing and a reflective coating that extended the roof's life by 15 years at a fraction of replacement cost.",
    image: { src: `${IMG}/commercial-roof.jpg`, alt: "Aerial view of a corrugated metal commercial roof" },
  },
  {
    slug: "miles-three-roofs",
    title: "Three roofs on one street",
    location: "Miles",
    roofType: "Architectural shingle",
    summary: "One hailstorm, three neighbors, one crew. All three homes re-roofed the same week with matching Class 4 shingles.",
    image: { src: `${IMG}/houses-row.jpg`, alt: "Row of homes with new dark architectural shingle roofs" },
  },
];

export const roofingTestimonials = [
  {
    quote:
      "Hail hit us in May and they were on the roof the next morning. They met the adjuster, handled the paperwork, and the new roof was on in a day. Could not have been easier.",
    author: "Dana R.",
    context: "Southland, San Angelo",
    rating: 5 as const,
  },
  {
    quote:
      "Two other companies told me I needed a whole new roof. West Texas Roofing found a cracked pipe boot and fixed it for a fraction of the price. That's who I'll call from now on.",
    author: "Luis M.",
    context: "College Hills",
    rating: 5 as const,
  },
  {
    quote:
      "Put a standing seam metal roof on our place outside Christoval. Crew was polite, cleaned up every day, and the roof looks fantastic.",
    author: "Carol and Jim T.",
    context: "Christoval",
    rating: 5 as const,
  },
];

export const roofingFaq = [
  {
    question: "Is the roof inspection really free?",
    answer:
      "Yes. We inspect the roof, photograph what we find, and give you a straight answer. If it just needs a small repair, we tell you that. There is no obligation.",
  },
  {
    question: "Do you work with insurance companies?",
    answer:
      "Every week. We document damage the way adjusters need to see it, meet them on site, and provide a written scope. You deal with your insurer; we make sure nothing gets missed.",
  },
  {
    question: "How long does a roof replacement take?",
    answer:
      "Most homes are done in one day. Larger or steeper roofs can take two. We schedule around the weather and tell you the plan before we start.",
  },
  {
    question: "What are Class 4 impact-resistant shingles?",
    answer:
      "Shingles tested to withstand a two-inch steel ball dropped from 20 feet without cracking. They stand up to hail far better, and many Texas insurers offer a premium discount for them.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes. We offer financing through a third-party lender with options for most credit situations, so a storm does not have to mean a big check up front.",
  },
  {
    question: "What warranty do I get?",
    answer:
      "A manufacturer warranty on materials, registered in your name, plus our own workmanship warranty on the installation. Both in writing before we start.",
  },
];

export const roofingHome = {
  hero: {
    eyebrow: "San Angelo and the Concho Valley since 2009",
    headline: "Roofing Built for West Texas Weather",
    subheadline:
      "Roof replacement, storm and hail repair, and metal roofing from a local, family-owned crew. Free inspections. Insurance claims handled. Financing available.",
    image: { src: `${IMG}/hero-carrying-shingles.jpg`, alt: "Roofer carrying a bundle of shingles up a roof on a sunny day" },
    badges: ["Licensed & insured", "Free inspections", "Insurance claim help", "Financing available"],
  },
  trust: [
    { title: "Family owned since 2009", description: "A local crew, not a storm-chasing outfit that leaves town." },
    { title: "Free roof inspections", description: "Photos and a straight answer. No obligation." },
    { title: "Insurance claims handled", description: "We meet your adjuster and write the scope." },
    { title: "Workmanship warranty", description: "In writing, on top of the manufacturer warranty." },
  ],
  services: {
    eyebrow: "Services",
    heading: "Everything above your ceiling",
    intro: "From a single lifted shingle to a full standing seam metal roof, one crew handles it.",
  },
  storm: {
    eyebrow: "Storm and hail damage",
    heading: "Hail hit? Get a free inspection before you call your insurance.",
    body: [
      "Hail damage is not always visible from the ground, and a claim filed without documentation is a claim that gets underpaid. We inspect first, photograph everything, and tell you honestly whether it is worth filing.",
      "If it is, we meet your adjuster on the roof, provide a written scope, and handle the job from emergency tarp to final walk-through.",
    ],
    bullets: ["Same-week inspections after storms", "Photo documentation for your claim", "Adjuster meetings on site", "Emergency tarping available"],
    image: { src: `${IMG}/storm-over-houses.jpg`, alt: "Dark storm clouds rolling over a row of houses" },
  },
  process: {
    eyebrow: "How it works",
    heading: "From inspection to finished roof",
    intro: "Clear steps, a written scope, and no surprises.",
    steps: [
      { title: "Free inspection", description: "We walk the roof, photograph what we find and explain it in plain language." },
      { title: "Written estimate", description: "Itemized scope with material options and a firm price. Insurance scopes included." },
      { title: "Schedule the work", description: "We pick a weather window and confirm the day before." },
      { title: "Installation", description: "Most roofs finished in a day. Landscaping protected, site cleaned, magnet sweep for nails." },
      { title: "Final walk-through", description: "We inspect the finished roof with you and register your warranty." },
    ],
  },
  projects: {
    eyebrow: "Recent work",
    heading: "Roofs we've put on around the Concho Valley",
    intro: "Real neighborhoods, real weather. Here is what the work looks like.",
  },
  insurance: {
    eyebrow: "Insurance and financing",
    heading: "A storm shouldn't mean a big check up front",
    body: [
      "If your roof was damaged by hail or wind, your homeowner's policy likely covers replacement minus your deductible. We help you get the claim right the first time.",
      "For everything else, we offer financing through a third-party lender with options for most credit situations, and Class 4 shingles that can lower your premium going forward.",
    ],
    bullets: ["Claim documentation and adjuster meetings", "Financing for most credit situations", "Class 4 shingles for insurance discounts", "Firm pricing before work begins"],
    image: { src: `${IMG}/roofer-inspection.jpg`, alt: "Roofer standing on a brick home during a hail damage inspection" },
  },
  reviews: {
    eyebrow: "Reviews",
    heading: "What your neighbors say",
  },
  areas: {
    eyebrow: "Service area",
    heading: "Serving San Angelo and the Concho Valley",
    intro: "Based in San Angelo, on the road anywhere within about an hour.",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Common questions",
  },
  cta: {
    heading: "Think your roof took a hit?",
    body: "Schedule a free inspection. We'll tell you the truth about what you need, in writing, with photos.",
  },
};

export const roofingAbout = {
  intro: {
    eyebrow: "About us",
    heading: "A San Angelo crew that answers the phone",
    body: [
      "West Texas Roofing Co. was started in 2009 by two brothers who grew up working roofs in the Concho Valley. After every big hailstorm they watched out-of-town outfits roll in, do rushed work, and disappear before the first leak showed up.",
      "We built the company to be the opposite of that: local, licensed, insured, and still here when the warranty matters. Most of our crew has been with us for years, and most of our work comes from neighbors referring neighbors.",
    ],
    bullets: ["Locally owned and operated", "Same crew, year after year", "Licensed and fully insured", "Written warranties on every job"],
    image: { src: `${IMG}/crew-on-roof.jpg`, alt: "Two roofers in safety harnesses installing shingles" },
  },
  values: {
    eyebrow: "How we work",
    heading: "What you can expect from us",
    items: [
      { title: "Honest inspections", description: "If a repair will do, we say so. We do not sell roofs people do not need." },
      { title: "Firm pricing", description: "The number on the estimate is the number on the invoice." },
      { title: "Clean job sites", description: "Landscaping protected, debris hauled, magnet sweep for nails before we leave." },
      { title: "Weather smart", description: "We watch the forecast and never leave a roof open overnight." },
      { title: "Insurance experience", description: "Hundreds of claims handled with local adjusters." },
      { title: "Still here next year", description: "A warranty is only as good as the company behind it." },
    ],
  },
};
