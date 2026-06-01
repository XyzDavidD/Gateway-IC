import type { Metadata } from "next";

import { ContactSection } from "@/components/contact-section";
import { FooterSection } from "@/components/footer-section";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gatewayic.com";

export const metadata: Metadata = {
  title: "Contact | Gateway International Consultancy FZ-LLC",
  description:
    "Contact Gateway International Consultancy FZ-LLC for aviation engineering advisory, training support, regulatory compliance, and strategic partnership opportunities.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Gateway International Consultancy FZ-LLC",
    url: `${siteUrl}/contact`,
    isPartOf: {
      "@type": "WebSite",
      name: "Gateway International Consultancy",
      url: siteUrl,
    },
  };

  return (
    <main className="min-h-screen bg-[var(--aviation-surface)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
