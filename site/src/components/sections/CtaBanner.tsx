import type { CallToAction } from "@/content/site.config";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/Icons";

interface CtaBannerProps {
  heading: string;
  body: string;
  cta: CallToAction;
  phone: string;
  phoneHref: string;
}

export function CtaBanner({ heading, body, cta, phone, phoneHref }: CtaBannerProps) {
  return (
    <Section
      labelledBy="cta-heading"
      tone="accent"
      containerClassName="grid gap-8 lg:grid-cols-12 lg:items-center"
    >
      <div className="lg:col-span-8">
        <h2 id="cta-heading" className="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">{body}</p>
      </div>
      <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
        <ButtonLink href={cta.href} variant="inverted" size="lg" className="w-full sm:w-auto">
          {cta.label}
        </ButtonLink>
        <a
          href={phoneHref}
          className="inline-flex min-h-11 items-center justify-center gap-2 font-semibold text-white underline-offset-4 hover:underline sm:justify-start"
        >
          <PhoneIcon width={18} height={18} />
          {phone}
        </a>
      </div>
    </Section>
  );
}
