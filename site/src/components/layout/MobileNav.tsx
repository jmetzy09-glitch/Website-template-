"use client";

import { useId, useState } from "react";
import Link from "next/link";
import type { CallToAction, NavItem } from "@/content/site.config";
import { ButtonLink } from "@/components/ui/Button";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/Icons";

interface MobileNavProps {
  nav: NavItem[];
  phone: string;
  phoneHref: string;
  primaryCTA: CallToAction;
}

export function MobileNav({ nav, phone, phoneHref, primaryCTA }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-ink hover:bg-paper"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-surface shadow-sm"
      >
        <nav aria-label="Mobile" className="px-4 py-3">
          <ul className="divide-y divide-line">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-base font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2 pb-2">
            <ButtonLink href={primaryCTA.href} variant="primary">
              {primaryCTA.label}
            </ButtonLink>
            <ButtonLink href={phoneHref} variant="secondary">
              <PhoneIcon width={18} height={18} />
              {phone}
            </ButtonLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
