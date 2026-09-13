import Link from "next/link";
import { Container } from "@/components/ui/Container";

interface DemoBannerProps {
  demoBusinessName: string;
  agencyName: string;
  agencyHref: string;
}

/** Thin bar above a demo site so nobody mistakes the fictional company for a real one. */
export function DemoBanner({ demoBusinessName, agencyName, agencyHref }: DemoBannerProps) {
  return (
    <div className="bg-stone-900 text-xs text-stone-300">
      <Container className="flex min-h-8 flex-wrap items-center justify-between gap-x-4 gap-y-1 py-1.5">
        <p>
          <span className="font-semibold text-white">Demo website.</span> {demoBusinessName} is a fictional company.
        </p>
        <Link href={agencyHref} className="font-semibold text-white underline-offset-4 hover:underline">
          Built by {agencyName} &rarr;
        </Link>
      </Container>
    </div>
  );
}
