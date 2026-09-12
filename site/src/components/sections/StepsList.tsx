interface Step {
  title: string;
  description: string;
}

interface StepsListProps {
  heading: string;
  steps: Step[];
}

export function StepsList({ heading, steps }: StepsListProps) {
  return (
    <section aria-labelledby="steps-heading">
      <h2 id="steps-heading">{heading}</h2>
      <ol>
        {steps.map((step) => (
          <li key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
