interface ValueChecklistProps {
  heading: string;
  items: string[];
}

export function ValueChecklist({ heading, items }: ValueChecklistProps) {
  return (
    <section aria-labelledby="value-heading">
      <h2 id="value-heading">{heading}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
