import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "inverted";
type Size = "md" | "lg";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Extra attributes such as aria-label. */
  ariaLabel?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_6px_16px_-8px_rgba(37,99,235,0.6)] hover:bg-accent-strong",
  secondary: "border border-ink/20 bg-surface text-ink hover:border-ink/40 hover:bg-paper",
  ghost: "text-accent hover:underline underline-offset-4",
  inverted: "bg-white text-accent hover:bg-stone-100",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 py-2.5 text-base",
  lg: "min-h-12 px-6 py-3 text-base sm:text-lg",
};

function isExternalScheme(href: string) {
  return /^(tel:|mailto:|https?:)/.test(href);
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (isExternalScheme(href)) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
