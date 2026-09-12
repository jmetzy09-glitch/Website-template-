import type { FaqItem } from "@/content/faq";

interface FaqListProps {
  heading: string;
  items: FaqItem[];
}

export function FaqList({ heading, items }: FaqListProps) {
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading">{heading}</h2>
      {items.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </section>
  );
}
