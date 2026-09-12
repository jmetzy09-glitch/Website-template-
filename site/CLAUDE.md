@AGENTS.md

# Project rules

Read `../WEBSITE_STANDARD.md` before any change. It is the rulebook for this site and every site cloned from it. `../PLAN.md` has the architecture and build order.

- All business-specific content lives in `src/content/`. Components take props and never import content directly; only `src/app/` pages and layout do.
- `src/content/site.config.ts` is the single file to edit when cloning for a client.
- Sections are named by variant (`HeroSplit`, `ServicesGrid`), so new layouts are additions, not renames.
- Structure first, decoration last. Do not style a section until it renders correctly from content.
- `ReviewsCards` renders nothing when there are no testimonials. Never add fake reviews.
