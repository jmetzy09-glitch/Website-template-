import type { Testimonial } from "@/content/testimonials";
import { Section, SectionHeading } from "@/components/ui/Section";

interface ReviewsCardsProps {
  eyebrow?: string;
  heading: string;
  intro?: string;
  testimonials: Testimonial[];
}

/** Renders nothing when there are no testimonials, so fake reviews are never shown. */
export function ReviewsCards({ eyebrow, heading, intro, testimonials }: ReviewsCardsProps) {
  if (testimonials.length === 0) return null;
  return (
    <Section labelledBy="reviews-heading" tone="surface">
      <SectionHeading id="reviews-heading" eyebrow={eyebrow} heading={heading} intro={intro} />
      <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <li key={`${t.author}-${t.quote.slice(0, 20)}`}>
            <blockquote className="flex h-full flex-col border-l-4 border-accent bg-paper p-6">
              {t.rating ? (
                <p className="mb-3 text-sm font-semibold text-accent" aria-label={`${t.rating} out of 5 stars`}>
                  {"★".repeat(t.rating)}
                  <span aria-hidden="true" className="text-line">
                    {"★".repeat(5 - t.rating)}
                  </span>
                </p>
              ) : null}
              <p className="text-lg leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 text-sm text-ink-muted">
                <cite className="font-semibold not-italic text-ink">{t.author}</cite>
                {t.context ? <span>, {t.context}</span> : null}
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </Section>
  );
}
