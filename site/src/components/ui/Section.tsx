import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "paper" | "surface" | "sand" | "accent" | "ink";

interface SectionProps {
  children: ReactNode;
  labelledBy: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  /** Gentle rise-in as the section scrolls into view (CSS scroll-driven, no JS). */
  reveal?: boolean;
}

const toneClass: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  surface: "bg-surface text-ink",
  sand: "bg-sand text-ink",
  accent: "bg-accent text-white",
  ink: "bg-ink text-stone-200",
};

export function Section({
  children,
  labelledBy,
  tone = "paper",
  className,
  containerClassName,
  reveal = true,
}: SectionProps) {
  return (
    <section aria-labelledby={labelledBy} className={cn("py-16 sm:py-20 lg:py-24", toneClass[tone], reveal && "reveal", className)}>
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
  /** Render as the page h1 when this section opens the page. */
  as?: "h1" | "h2";
}

export function SectionHeading({ id, eyebrow, heading, intro, className, inverted, as: Tag = "h2" }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className={cn("mb-3 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wider", inverted ? "text-white/80" : "text-accent")}>
          <span aria-hidden="true" className={cn("h-0.5 w-5 rounded-full", inverted ? "bg-white/70" : "bg-accent")} />
          {eyebrow}
        </p>
      ) : null}
      <Tag id={id} className="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
        {heading}
      </Tag>
      {intro ? <p className={cn("mt-4 text-lg leading-relaxed", inverted ? "text-white/85" : "text-ink-muted")}>{intro}</p> : null}
    </div>
  );
}
