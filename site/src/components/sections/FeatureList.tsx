interface Feature {
  title: string;
  description: string;
}

interface FeatureListProps {
  heading: string;
  subheading?: string;
  items: Feature[];
}

export function FeatureList({ heading, subheading, items }: FeatureListProps) {
  return (
    <section aria-labelledby="features-heading">
      <h2 id="features-heading">{heading}</h2>
      {subheading ? <p>{subheading}</p> : null}
      <dl>
        {items.map((item) => (
          <div key={item.title}>
            <dt>{item.title}</dt>
            <dd>{item.description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
