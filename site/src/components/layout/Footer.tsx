import Link from "next/link";
import type { NavItem } from "@/content/site.config";

interface FooterProps {
  businessName: string;
  phone: string;
  phoneHref: string;
  email: string;
  city: string;
  state: string;
  hours: string;
  nav: NavItem[];
}

export function Footer({
  businessName,
  phone,
  phoneHref,
  email,
  city,
  state,
  hours,
  nav,
}: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>
        <p>{businessName}</p>
        <p>
          {city}, {state}
        </p>
        <p>
          <a href={phoneHref}>{phone}</a>
        </p>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>{hours}</p>
      </div>
      <nav aria-label="Footer">
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
          <li>
            <Link href="/privacy">Privacy</Link>
          </li>
          <li>
            <Link href="/terms">Terms</Link>
          </li>
        </ul>
      </nav>
      <p>
        &copy; {year} {businessName}. All rights reserved.
      </p>
    </footer>
  );
}
