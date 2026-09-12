import Link from "next/link";
import type { CallToAction } from "@/content/site.config";

interface StickyCallBarProps {
  phoneHref: string;
  primaryCTA: CallToAction;
}

/** Mobile-only bar pinned to the bottom of the viewport. Hidden on wider screens. */
export function StickyCallBar({ phoneHref, primaryCTA }: StickyCallBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 md:hidden" role="region" aria-label="Quick contact">
      <a href={phoneHref}>Call now</a>
      <Link href={primaryCTA.href}>{primaryCTA.label}</Link>
    </div>
  );
}
