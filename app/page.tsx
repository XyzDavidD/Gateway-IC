import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { FooterSection } from "@/components/footer-section";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--aviation-surface)]">
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
