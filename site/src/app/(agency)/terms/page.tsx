import type { Metadata } from "next";
import { termsPage } from "@/content/pages/legal";
import { LegalDocument } from "@/components/sections/LegalDocument";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms covering use of this website.",
};

export default function TermsPage() {
  return <LegalDocument {...termsPage} />;
}
