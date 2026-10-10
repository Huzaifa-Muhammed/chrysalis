import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Chrysalis Education (placeholder).",
};

export default function Page() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      sections={["Using our services", "Accounts and enrolment", "Fees and payments", "14-day refund guarantee", "Intellectual property", "Liability", "Governing law"]}
    />
  );
}
