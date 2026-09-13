# Agency Website + Master Template — Plan

## 1. What this is
One codebase that does two jobs:
1. **Your agency site** — sells websites, lead systems, and automation to local service businesses.
2. **The master template** — every client site (roofer, plumber, HVAC, landscaper, auto shop) is a copy of this repo with new content, branding, and photos. No starting over.

Test market: San Angelo, TX. First niche: contractors / home services.

## 2. Stack (decided)
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Vercel hosting (free tier is fine to start)
- Forms: Next.js route handler → Resend (email) now; SMS/CRM hooks later
- Analytics: Google Analytics 4 via a single env var, plus Vercel Analytics
- Images: `next/image`, sources in `public/images`
- No CMS, no database in v1. Content is typed data files.

## 3. The one rule that makes it a template
**No page hard-codes content.** Every page reads from `src/content/`. Cloning for a client means:
1. Copy repo.
2. Edit `site.config.ts` (name, phone, address, hours, colours, logo, service area).
3. Edit `services.ts`, `projects.ts`, `testimonials.ts`, `faq.ts`.
4. Drop in photos.
5. Deploy.

Target: a new client site from clone to live demo in under one working day.

## 4. Project structure
```
site/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Header, Footer, metadata, analytics
│   │   ├── page.tsx                # Home
│   │   ├── services/page.tsx
│   │   ├── services/[slug]/page.tsx   # One page per service (SEO)
│   │   ├── examples/page.tsx       # Demo sites gallery (agency) / Projects (client)
│   │   ├── pricing/page.tsx        # Agency only; hidden via config for clients
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── service-area/page.tsx   # Client sites; city list for local SEO
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── api/lead/route.ts       # Form handler: validate → email → (later) SMS/CRM
│   ├── components/
│   │   ├── layout/   Header, MobileNav, Footer, StickyCallBar
│   │   ├── sections/ Hero, ProblemValue, Services, HowItWorks, Gallery,
│   │   │             WhyUs, Testimonials, Pricing, FAQ, FinalCTA, ServiceArea
│   │   ├── forms/    LeadForm, QuoteForm
│   │   └── ui/       Button, Card, Section, Container, Badge, Icon
│   ├── content/
│   │   ├── site.config.ts          # Brand, contact, colours, nav, feature flags
│   │   ├── services.ts
│   │   ├── projects.ts
│   │   ├── testimonials.ts
│   │   ├── faq.ts
│   │   ├── pricing.ts
│   │   └── pages/home.ts           # Section order + copy for the homepage
│   ├── lib/
│   │   ├── schema.ts               # LocalBusiness / Service JSON-LD builders
│   │   ├── seo.ts                  # Metadata helpers
│   │   └── validate.ts             # Zod schemas for forms
│   └── styles/globals.css          # Tailwind + CSS variables from site.config
├── public/images/
├── WEBSITE_STANDARD.md             # The rulebook (see file)
├── CLAUDE.md                       # Points Claude Code at the standard
└── README.md                       # Clone-for-client checklist
```

## 5. Homepage section order (agency version)
1. Header — logo, nav (Websites · Services · Examples · Pricing · About · Contact), phone, CTA button
2. Hero — "Websites Built to Bring Local Businesses More Customers" + subhead + [Get a Free Website Review] [See Our Work]
3. Problem / Value — six checkmarks: calls, estimate requests, trust, local rank, phones, lead tracking
4. Services — 7 cards (Websites, Local SEO, Google Business, Lead Capture, Review Automation, Business Automation, Hosting & Maintenance)
5. How It Works — 5 steps
6. Demo Websites — Roofing, HVAC, Plumbing, Landscaping cards → /examples
7. Why Us — Fast · Mobile-first · SEO-ready · Conversion focused · Simple pricing · Local support
8. Pricing — Starter $1,995 · Growth $3,495 · Lead Generation $4,995+ (one-time; monthly plans come later)
9. FAQ
10. Final CTA — "Want to see what your business could look like online?"
11. Footer

Client version uses the same components with a different section order:
Hero → Trust bar (years, reviews, licensed/insured) → Services → Gallery → Reviews → Service Area → FAQ → Estimate CTA → Footer. Sticky call bar on mobile.

## 6. Feature flags in site.config.ts
```
mode: 'agency' | 'client'
businessType: 'agency' | 'contractor' | 'roofing' | 'hvac' | 'plumbing' | 'landscaping'
showPricing, showServiceArea, showStickyCallBar, showBlog
integrations: { ga4Id, resendTo, smsWebhook?, crmWebhook? }
```
Same code, two personalities. `businessType` is unused in v1 beyond schema type and CTA wording, but it is the hook for per-industry section defaults later.

## 7. Lead form contract (build it once, reuse everywhere)
Fields: name, phone, email, service (select from services.ts), message, honeypot.
Flow: client validation → POST /api/lead → Zod validate → email owner → store nothing in v1 → thank-you page with click-to-call.
Later: the same route fans out to SMS auto-reply, CRM, and missed-call text-back without touching the form.

## 8. Build order
1. `npx create-next-app` with TS + Tailwind + App Router + ESLint. Commit.
2. Write `site.config.ts` and the content files with real agency copy (no lorem ipsum).
3. Build `ui/` primitives and `layout/` (Header, MobileNav, Footer, StickyCallBar).
4. Build sections top-down for the homepage; check on a phone after each one.
5. Lead form + API route + Resend. Test a real submission.
6. Services index + `[slug]` pages, Examples, About, Contact, Pricing, Privacy, Terms, 404.
7. SEO: metadata, Open Graph image, JSON-LD, sitemap, robots.
8. Lighthouse on mobile. Fix until 95 or better across the board.
9. Deploy to Vercel with a real domain.
10. Clone the repo, flip `mode: 'client'`, fill in a fictional roofer. Time it. That is your first demo and proves the template.

## 9. Decisions still open (yours)
- Business name and domain.
- Brand colours and one heading font (body stays a system stack).
- Confirm the three website prices (placeholders: $1,995 / $3,495 / $4,995+). Monthly plans are deferred.
- Email address the lead form sends to.

Placeholders are used until you decide. All four live in `site.config.ts` and `pricing.ts` only.

## 9b. Status (updated 2026-09-13)
Live: https://website-template-eosin-sigma.vercel.app (auto-deploys from `main` on GitHub).

Done: agency site with all pages, brand identity (SVG logo mark, Orbitron wordmark, Manrope headings, navy/blue/sand), lead form + /api/lead, schema and canonicals, sitemap/robots, and two client demos built from the engine:
- /demos/roofing — West Texas Roofing Co. (dark, Barlow Condensed, burnt orange)
- /demos/landscaping — Concho Valley Lawn & Landscape (light, Fraunces serif, green, monthly plans)

Lighthouse mobile (live home): 97 / 96 / 100 / 100. Real phone and email are in `site/src/content/site.config.ts`.

### To resume
1. Open a terminal in `site/` and run `npm run dev`, then visit http://localhost:3000.
2. Copy content, not components: a new demo is `src/content/demos/<name>/`, a root layout under `src/app/demos/<name>/`, and a `.theme-<name>` block in `src/app/globals.css`.
3. `npm run lint && npm run build` before pushing. Pushing to `main` deploys.

### Still open (owner)
- Add `RESEND_API_KEY` in Vercel (Settings > Environment Variables) so the form emails you. `LEAD_TO_EMAIL` is optional; it defaults to the config email.
- Read and edit the about page copy in `src/content/pages/about.ts`.
- Buy a domain, add it in Vercel, and set `seo.siteUrl` in the site config.
- Decide whether "Concho Web Co." is the final name.
- Then: approach prospects. Do not build more demos first.

## 10. Not in v1
CRM, AI assistant, review automation, owner dashboard, SMS, blog. The API route is designed so these plug in later without a rewrite.
