import Link from "next/link";
import type { ReactNode } from "react";
import type { CallToAction, NavItem } from "@/content/site.config";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";
import { MobileNav } from "./MobileNav";

interface HeaderProps {
  businessName: string;
  phone: string;
  phoneHref: string;
  nav: NavItem[];
  primaryCTA: CallToAction;
  /** Where the brand link goes. Demo sites live under a prefix. */
  homeHref?: string;
  tone?: "light" | "dark";
  /** Replaces the plain-text business name, e.g. a wordmark or logo. */
  brand?: ReactNode;
}

export function Header({ businessName, phone, phoneHref, nav, primaryCTA, homeHref = "/", tone = "light", brand }: HeaderProps) {
  const dark = tone === "dark";
  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur",
        dark ? "border-white/10 bg-ink/95 text-white" : "border-line bg-surface/95 text-ink",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-ink focus:shadow"
      >
        Skip to content
      </a>
      <Container className="relative flex min-h-16 items-center justify-between gap-4 lg:min-h-20">
        <Link
          href={homeHref}
          aria-label={`${businessName} home`}
          className={cn("whitespace-nowrap font-heading text-lg font-bold tracking-tight lg:text-xl", dark ? "text-white" : "text-ink")}
        >
          {brand ?? businessName}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    dark ? "text-stone-300 hover:text-white" : "text-ink-muted hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={phoneHref}
            className={cn(
              "inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm font-semibold md:px-3",
              dark ? "text-white hover:text-accent-soft" : "text-ink hover:text-accent",
            )}
          >
            <PhoneIcon width={18} height={18} />
            <span className="hidden lg:inline">{phone}</span>
            <span className="sr-only lg:hidden">Call {phone}</span>
          </a>
          <div className="hidden sm:block">
            <ButtonLink href={primaryCTA.href} variant="primary">
              {primaryCTA.shortLabel && primaryCTA.label.length > 24 ? primaryCTA.shortLabel : primaryCTA.label}
            </ButtonLink>
          </div>
          <MobileNav nav={nav} phone={phone} phoneHref={phoneHref} primaryCTA={primaryCTA} tone={tone} />
        </div>
      </Container>
    </header>
  );
}
