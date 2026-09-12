export interface Testimonial {
  quote: string;
  author: string;
  /** Company or role, shown under the name. */
  context?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
}

/**
 * Empty until the first real customer. The Reviews section hides itself when
 * this list is empty, so nothing fake is ever shown.
 */
export const testimonials: Testimonial[] = [];
