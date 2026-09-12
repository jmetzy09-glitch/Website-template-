import type { Testimonial } from "@/content/testimonials";

interface ReviewsCardsProps {
  heading: string;
  testimonials: Testimonial[];
}

/** Renders nothing when there are no testimonials, so fake reviews are never shown. */
export function ReviewsCards({ heading, testimonials }: ReviewsCardsProps) {
  if (testimonials.length === 0) return null;
  return (
    <section aria-labelledby="reviews-heading">
      <h2 id="reviews-heading">{heading}</h2>
      <ul>
        {testimonials.map((t) => (
          <li key={`${t.author}-${t.quote.slice(0, 20)}`}>
            <blockquote>
              <p>{t.quote}</p>
              <footer>
                <cite>{t.author}</cite>
                {t.context ? <span>, {t.context}</span> : null}
                {t.rating ? <span aria-label={`${t.rating} out of 5 stars`}> {t.rating}/5</span> : null}
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  );
}
