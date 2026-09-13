import type { Metadata } from "next";
import { roofingConfig, roofingPhoneHref, BASE } from "@/content/demos/roofing/site.config";
import { roofingServices } from "@/content/demos/roofing/content";
import { Section } from "@/components/ui/Section";
import { LeadForm } from "@/components/forms/LeadForm";
import { PhoneIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Schedule a Free Roof Inspection",
  description: "Request a free roof inspection in San Angelo and the Concho Valley. We call back within one business hour.",
};

export default function RoofingContactPage() {
  const { business } = roofingConfig;
  const options = [
    ...roofingServices.map((s) => ({ value: s.name, label: s.name })),
    { value: "Not sure / something else", label: "Not sure / something else" },
  ];

  return (
    <Section labelledBy="contact-heading" tone="surface" containerClassName="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">Free inspection</p>
        <h1 id="contact-heading" className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          Schedule a free roof inspection
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          Tell us a little about the roof and we&apos;ll call you back within one business hour to set a time. Storm
          damage? Call the number below and we&apos;ll prioritize you.
        </p>

        <div className="mt-8 border-l-4 border-accent bg-paper p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Call or text</p>
          <a href={roofingPhoneHref} className="mt-1 inline-flex items-center gap-2 font-heading text-3xl font-bold text-ink hover:text-accent">
            <PhoneIcon width={24} height={24} className="text-accent" />
            {business.phone}
          </a>
          <p className="mt-3 text-sm text-ink-muted">{business.hours}</p>
          <p className="mt-1 text-sm text-ink-muted">
            {business.address.city}, {business.address.state}. Serving the Concho Valley.
          </p>
        </div>

        <dl className="mt-8 space-y-4">
          <div className="border-t border-line pt-4">
            <dt className="font-heading text-lg font-bold text-ink">1. We call you back</dt>
            <dd className="mt-1 text-ink-muted">Within one business hour, to find a time that works.</dd>
          </div>
          <div className="border-t border-line pt-4">
            <dt className="font-heading text-lg font-bold text-ink">2. We inspect and photograph</dt>
            <dd className="mt-1 text-ink-muted">Usually 30 to 45 minutes on site. You do not need to be on the roof.</dd>
          </div>
          <div className="border-t border-line pt-4">
            <dt className="font-heading text-lg font-bold text-ink">3. You get a written answer</dt>
            <dd className="mt-1 text-ink-muted">Photos, what we found, and what it would cost. No obligation.</dd>
          </div>
        </dl>
      </div>

      <div className="rounded-md border border-line bg-paper p-6 sm:p-8 lg:col-span-7">
        <h2 className="font-heading text-2xl font-bold text-ink">Request your inspection</h2>
        <p className="mt-1 mb-6 text-sm text-ink-muted">Takes about a minute. We never share your information.</p>
        <LeadForm
          siteKey="demo-roofing"
          services={options}
          submitLabel="Request Free Inspection"
          successHref={`${BASE}/thank-you`}
          showAddress
          messagePlaceholder="Leaking after the last storm, missing shingles, insurance claim questions..."
          reassurance="Or call us directly. We answer the phone."
        />
      </div>
    </Section>
  );
}
