import type { CallToAction } from "@/content/site.config";
import { ButtonLink } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/Icons";

interface StickyCallBarProps {
  phoneHref: string;
  primaryCTA: CallToAction;
}

/** Mobile-only bar pinned to the bottom of the viewport. Hidden on wider screens. */
export function StickyCallBar({ phoneHref, primaryCTA }: StickyCallBarProps) {
  return (
    <div
      role="region"
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-surface/95 p-3 backdrop-blur md:hidden"
    >
      <ButtonLink href={phoneHref} variant="secondary">
        <PhoneIcon width={18} height={18} />
        Call now
      </ButtonLink>
      <ButtonLink href={primaryCTA.href} variant="primary">
        {primaryCTA.shortLabel ?? primaryCTA.label}
      </ButtonLink>
    </div>
  );
}
