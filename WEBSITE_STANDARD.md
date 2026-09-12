# WEBSITE_STANDARD.md
Rules every site built from this template must follow. Claude Code reads this before any website work.

## Purpose
Sites exist to produce phone calls, estimate requests, and booked jobs for local service businesses. Every decision is judged against that.

## Content
- Never ship lorem ipsum or placeholder text. Use real copy or clearly labelled fictional demo copy.
- Headlines state a customer benefit, not technology. Bad: "Innovative Digital Solutions." Good: "Roof Repairs in San Angelo, Usually Same Week."
- Phone number visible in the header on every page, and in a sticky bar on mobile.
- Primary CTA above the fold on every page: call or request an estimate.
- One page per major service. One page per major service city when the client covers several.
- Show trust signals early: years in business, licence/insurance, review count and rating, real project photos.
- All content lives in `src/content/`. Components never contain business-specific text.

## Mobile
- Design for 390px first, then widen.
- Tap targets at least 44px. Click-to-call and click-to-email links on phone numbers and addresses.
- No horizontal scroll at any width. Test at 360, 390, 768, 1024, 1440.

## Performance
- Lighthouse mobile: Performance, Accessibility, Best Practices, SEO all 95 or better before launch.
- Every image through `next/image` with width, height, and `sizes`. Hero image gets `priority`; the rest lazy.
- Images exported at the largest displayed size, WebP or AVIF, under 200 KB each.
- No client-side JavaScript in a component unless it needs interactivity. Default to server components.
- No animation libraries. Subtle CSS transitions only, and honour `prefers-reduced-motion`.
- Fonts: one heading font at most via `next/font`, body on a system stack.

## SEO
- Unique title (60 chars max) and description (155 chars max) per page via `generateMetadata`.
- Open Graph and Twitter card tags with a real image on every page.
- Canonical URL on every page.
- `LocalBusiness` JSON-LD on the home page; `Service` JSON-LD on service pages; `FAQPage` where an FAQ exists.
- `sitemap.xml` and `robots.txt` generated, not hand-written.
- One `h1` per page. Heading levels never skip.
- Descriptive alt text on every content image. Empty alt on decorative images.

## Accessibility
- Semantic landmarks: header, nav, main, footer, section with headings.
- Colour contrast 4.5:1 or better for text, 3:1 or better for large text and UI.
- Visible focus ring on every interactive element. Skip-to-content link first in the tab order.
- Forms: every input has a label, errors are announced, required fields are marked.
- Keyboard-only walkthrough of the whole site before launch.

## Forms and leads
- Validate on the client and again on the server with the same Zod schema.
- Honeypot field plus basic rate limiting on the API route.
- Every submission emails the owner within seconds and redirects to a thank-you page with a click-to-call button.
- Never lose a lead silently: the API route logs failures and returns a clear error to the user.

## Analytics and tracking
- GA4 ID from environment, injected once in the root layout. Site works with no ID set.
- Fire events for: phone click, email click, form submit, form success.
- Privacy page states what is collected.

## Security
- No secrets in the repo. All keys in `.env.local`, listed in `.env.example`.
- API routes accept only POST with JSON, validate everything, and never echo input back unescaped.
- Dependencies kept current. `npm audit` clean before launch.

## Code
- TypeScript strict. No `any`.
- Components: `ui/` (dumb primitives), `sections/` (page blocks fed by props), `layout/` (chrome). Sections take data as props and never import content directly, so they reuse across sites.
- Tailwind only. Colours and fonts come from CSS variables set in `site.config.ts` so re-branding touches one file.
- ESLint and Prettier pass. No warnings in `next build`.

## Design rule
Do not use common AI/SaaS visual clichés unless explicitly requested. Structure first, decoration last: no styling work until the page renders correctly from content.

Avoid:
- Excessive gradients and gradient blobs
- Glowing or glassmorphism cards
- Oversized rounded rectangles
- Random floating shapes
- Excessive animations
- Huge empty hero sections
- Generic startup-style copy
- Repeating card grids for every section
- Three identical cards with emoji icons
- Centring everything

Prefer:
- Strong typography
- Real photography
- Intentional whitespace
- Clear hierarchy
- Simple grids
- Business-specific visual identity
- Conversion-focused layouts
- Left-aligned copy and one accent colour

## Launch checklist
- [ ] Real domain on Vercel, HTTPS, www redirect
- [ ] Form tested with a real submission and received
- [ ] Phone and email links tested on a phone
- [ ] Lighthouse mobile 95+ on all four categories
- [ ] All pages have unique title/description/OG image
- [ ] JSON-LD validates in Google Rich Results Test
- [ ] 404 page works
- [ ] GA4 events firing
- [ ] Google Business Profile links to the site
- [ ] Search Console verified and sitemap submitted
