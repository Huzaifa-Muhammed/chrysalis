import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookie Settings",
  description: "Cookie Settings for Chrysalis Education (placeholder).",
};

export default function Page() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Settings"
      sections={["What cookies are", "Cookies we use", "Managing your preferences"]}
    />
  );
}
