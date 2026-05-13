import Image from "next/image";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Support", href: "#" },
];

const socialLinks = [
  { label: "Global", href: "#", icon: Globe },
  { label: "Email", href: "#", icon: Mail },
  { label: "Phone", href: "#", icon: Phone },
  { label: "Location", href: "#", icon: MapPin },
];

export function FooterSection() {
  return (
    <footer className="bg-[var(--aviation-surface)] px-1 pb-3 sm:px-1.5 sm:pb-4 lg:px-2 lg:pb-5">
      <div className="mx-auto w-full max-w-[1880px] rounded-[1.9rem] border border-[#D4DEEA] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(0,26,61,0.07)] sm:px-7 sm:py-6 lg:px-8 lg:py-7">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <div className="relative h-16 w-48 sm:h-[4.5rem] sm:w-56">
              <Image src="/logo-dark.png" alt="Gateway IC logo" fill className="object-contain object-left" sizes="224px" />
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2.5 sm:gap-x-7 lg:self-end lg:pb-1">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[0.95rem] font-medium text-[#4A5E7B] transition-colors duration-300 hover:text-[#001A3D]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-6 h-px w-full bg-[#D9E2EF]" />

        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.9rem] text-[#687C98]">© 2026 Gateway International Consultancy. All rights reserved.</p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#D2DDEA] text-[#4F6583] transition-colors duration-300 hover:border-[#B4C6DD] hover:bg-[#F4F8FF] hover:text-[#001A3D]"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
