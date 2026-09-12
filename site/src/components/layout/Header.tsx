import Link from "next/link";
import type { CallToAction, NavItem } from "@/content/site.config";

interface HeaderProps {
  businessName: string;
  phone: string;
  phoneHref: string;
  nav: NavItem[];
  primaryCTA: CallToAction;
}

export function Header({ businessName, phone, phoneHref, nav, primaryCTA }: HeaderProps) {
  return (
    <header>
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div>
        <Link href="/" aria-label={`${businessName} home`}>
          {businessName}
        </Link>
        <nav aria-label="Primary">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href={phoneHref}>{phone}</a>
        <Link href={primaryCTA.href}>{primaryCTA.label}</Link>
      </div>
    </header>
  );
}
