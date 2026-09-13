import Link from "next/link";
import type { ReactNode } from "react";
import type { NavItem } from "@/content/site.config";
import { Container } from "@/components/ui/Container";

interface FooterProps {
  businessName: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  email: string;
  city: string;
  state: string;
  hours: string;
  serviceArea: string[];
  nav: NavItem[];
  /** Privacy, terms, etc. Omit on sites that do not have them yet. */
  legalLinks?: NavItem[];
  /** Small print under the copyright, e.g. a demo disclaimer. */
  note?: string;
  /** Logo lockup to show instead of the plain business name. */
  brand?: ReactNode;
}

export function Footer({
  businessName,
  tagline,
  phone,
  phoneHref,
  email,
  city,
  state,
  hours,
  serviceArea,
  nav,
  legalLinks = [],
  note,
  brand,
}: FooterProps) {
  const year = new Date().getFullYear();
  const links = [...nav, ...legalLinks];
  return (
    <footer className="bg-ink text-stone-300">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          {brand ? <div>{brand}</div> : <p className="font-heading text-xl font-bold text-white">{businessName}</p>}
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-400">{tagline}</p>
          <p className="mt-6 text-sm">
            <a href={phoneHref} className="font-semibold text-white hover:underline">
              {phone}
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a href={`mailto:${email}`} className="hover:underline">
              {email}
            </a>
          </p>
          <p className="mt-1 text-sm text-stone-400">
            {city}, {state}
          </p>
          <p className="mt-1 text-sm text-stone-400">{hours}</p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold uppercase tracking-wider text-stone-400">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-stone-400">Serving</p>
          <ul className="mt-4 space-y-2 text-sm">
            {serviceArea.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="space-y-1 py-5 text-xs text-stone-500">
          <p>
            &copy; {year} {businessName.replace(/\.$/, "")}. All rights reserved.
          </p>
          {note ? <p>{note}</p> : null}
        </Container>
      </div>
    </footer>
  );
}
