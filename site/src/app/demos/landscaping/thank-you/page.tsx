import type { Metadata } from "next";
import { landscapingConfig, landscapingPhoneHref, BASE } from "@/content/demos/landscaping/site.config";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Request Received",
  robots: { index: false, follow: false },
};

export default function LandscapingThankYouPage() {
  const { business } = landscapingConfig;
  return (
    <Section labelledBy="thanks-heading" tone="surface">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Request received</p>
        <h1 id="thanks-heading" className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          Got it. We&apos;ll call within one business day.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          If it is urgent, like a broken sprinkler line flooding the yard, call us now and we&apos;ll get someone out.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={landscapingPhoneHref} variant="primary" size="lg">
            <PhoneIcon width={18} height={18} />
            Call {business.phone}
          </ButtonLink>
          <ButtonLink href={BASE} variant="secondary" size="lg">
            Back to home
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
