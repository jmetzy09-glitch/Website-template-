import { Container } from "@/components/ui/Container";

interface TrustItem {
  title: string;
  description: string;
}

interface TrustBarProps {
  items: TrustItem[];
}

/** Compact strip of trust signals directly under the hero. No numbers unless they are real. */
export function TrustBar({ items }: TrustBarProps) {
  return (
    <section aria-label="Why homeowners choose us" className="border-b border-line bg-surface">
      <Container>
        <ul className="grid divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {items.map((item) => (
            <li key={item.title} className="py-5 sm:px-6 sm:first:pl-0 sm:last:pr-0">
              <p className="font-heading text-lg font-bold text-ink">{item.title}</p>
              <p className="mt-1 text-sm text-ink-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
