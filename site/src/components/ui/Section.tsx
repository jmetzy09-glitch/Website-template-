import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "paper" | "surface" | "accent" | "ink";

interface SectionProps {
  children: ReactNode;
  labelledBy: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
}

const toneClass: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  surface: "bg-surface text-ink",
  accent: "bg-accent text-white",
  ink: "bg-ink text-stone-200",
};

export function Section({
  children,
  labelledBy,
  tone = "paper",
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section aria-labelledby={labelledBy} className={cn("py-16 sm:py-20 lg:py-24", toneClass[tone], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  heading: string;
  intro?: string;
  className?: string;
  /** Use on dark or accent backgrounds. */
  inverted?: boolean;
}

export function SectionHeading({ id, eyebrow, heading, intro, className, inverted }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className={cn("mb-3 text-sm font-semibold uppercase tracking-wider", inverted ? "text-white/80" : "text-accent")}>
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
        {heading}
      </h2>
      {intro ? <p className={cn("mt-4 text-lg leading-relaxed", inverted ? "text-white/85" : "text-ink-muted")}>{intro}</p> : null}
    </div>
  );
}
