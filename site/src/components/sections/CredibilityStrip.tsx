import { Container } from "@/components/ui/Container";

interface CredibilityStripProps {
  statement: string;
  items: string[];
}

/** One honest sentence plus what you do. Becomes a logo strip once there are real clients. */
export function CredibilityStrip({ statement, items }: CredibilityStripProps) {
  return (
    <section aria-label="What we do" className="border-b border-line bg-sand">
      <Container className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-ink">{statement}</p>
        <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-ink-muted">
          {items.map((item, i) => (
            <li key={item} className="flex items-center gap-3">
              {i > 0 ? <span aria-hidden="true" className="text-line">|</span> : null}
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
