import Link from "next/link";
import type { CallToAction, NavItem } from "@/content/site.config";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/Icons";
import { MobileNav } from "./MobileNav";

interface HeaderProps {
  businessName: string;
  phone: string;
  phoneHref: string;
  nav: NavItem[];
  primaryCTA: CallToAction;
}

export function Header({ businessName, phone, phoneHref, nav, primaryCTA }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-ink focus:shadow"
      >
        Skip to content
      </a>
      <Container className="relative flex min-h-16 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={`${businessName} home`}
          className="whitespace-nowrap font-heading text-lg font-bold tracking-tight text-ink"
        >
          {businessName}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
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
            className="inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm font-semibold text-ink hover:text-accent md:px-3"
          >
            <PhoneIcon width={18} height={18} />
            <span className="hidden lg:inline">{phone}</span>
            <span className="sr-only lg:hidden">Call {phone}</span>
          </a>
          <div className="hidden sm:block">
            <ButtonLink href={primaryCTA.href} variant="primary">
              {primaryCTA.label}
            </ButtonLink>
          </div>
          <MobileNav nav={nav} phone={phone} phoneHref={phoneHref} primaryCTA={primaryCTA} />
        </div>
      </Container>
    </header>
  );
}
