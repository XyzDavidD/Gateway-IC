import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { FooterSection } from "@/components/footer-section";
import { HeroSection } from "@/components/hero-section";
import { IndustriesSection } from "@/components/industries-section";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--aviation-surface)]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
