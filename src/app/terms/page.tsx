import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { termsDoc } from "@/content/legal/terms";

export const metadata: Metadata = {
  title: termsDoc.title,
  description: termsDoc.description,
};

export default function Page() {
  return <LegalPage doc={termsDoc} also={{ href: "/privacy", label: "Privacy policy" }} />;
}
