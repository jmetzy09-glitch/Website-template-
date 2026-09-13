import type { Metadata } from "next";
import { roofingConfig, roofingPhoneHref, BASE } from "@/content/demos/roofing/site.config";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Request Received",
  robots: { index: false, follow: false },
};

export default function RoofingThankYouPage() {
  const { business } = roofingConfig;
  return (
    <Section labelledBy="thanks-heading" tone="surface">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Request received</p>
        <h1 id="thanks-heading" className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          Got it. We&apos;ll call you within one business hour.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          If your roof is actively leaking or you have storm damage right now, call us and we&apos;ll get a tarp on it today.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={roofingPhoneHref} variant="primary" size="lg">
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
