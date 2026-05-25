"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const navigation = ["Home", "About", "Services", "Industries"];

const slides = [
  {
    id: "slide-1",
    image: "/homepage1.jpg",
    alt: "Airport runway and private jet at sunset",
    position: "50% 50%",
    title: "Connecting Global Aviation Expertise with Opportunities in the Middle East",
    subtitle:
      "Gateway International Consultancy supports aviation organisations through engineering advisory, training solutions, regulatory support, and strategic partnerships across the Middle East and international markets.",
  },
  {
    id: "slide-2",
    image: "/homepage2.jpg",
    alt: "Business jet at golden hour on the tarmac",
    position: "58% 42%",
    title: "Connecting expertise. Creating opportunities. Building aviation capability across borders.",
    subtitle:
      "We help organisations improve technical capability, expand into new regions, achieve regulatory compliance, and unlock business opportunities.",
  },
] as const;

export function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [floatingMenuOpen, setFloatingMenuOpen] = useState(false);
  const [showFloatingHeader, setShowFloatingHeader] = useState(false);
  const activeSlide = slides[activeIndex];
  const getNavHref = (item: string) => {
    if (item === "Home") return "#home";
    if (item === "About") return "#about";
    if (item === "Services") return "#services";
    if (item === "Industries") return "#industries";
    if (item === "Contact") return "#contact";
    return "#";
  };
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    const target = getNavHref(item);
    if (target === "#") return;

    event.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
    setFloatingMenuOpen(false);
  };
  const handleContactClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
    setFloatingMenuOpen(false);
  };

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const goToSlide = useCallback(
    (nextIndex: number) => {
      setDirection(nextIndex > activeIndex ? 1 : -1);
      setActiveIndex(nextIndex);
    },
    [activeIndex]
  );

  useEffect(() => {
    const checkHeaderVisibility = () => {
      setShowFloatingHeader(window.scrollY > 140);
    };

    checkHeaderVisibility();
    window.addEventListener("scroll", checkHeaderVisibility, { passive: true });
    window.addEventListener("resize", checkHeaderVisibility);
    return () => {
      window.removeEventListener("scroll", checkHeaderVisibility);
      window.removeEventListener("resize", checkHeaderVisibility);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showFloatingHeader ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-x-1 top-1 z-[90] sm:inset-x-1.5 sm:top-1.5 lg:inset-x-2 lg:top-2"
            >
              <div className="mx-auto w-full max-w-[1880px] rounded-[2rem] border border-[#D4DEEA] bg-white px-4 py-3 shadow-[0_8px_24px_rgba(0,26,61,0.12)] sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between font-heading">
                  <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16 md:w-[130px] md:justify-self-start">
                    <Image src="/logo-dark.png" alt="Gateway IC logo" fill className="object-contain md:object-left" sizes="64px" />
                  </div>

                  <nav className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-8 md:flex lg:gap-11">
                    {navigation.map((item) => (
                      <a
                        key={`floating-${item}`}
                        href={getNavHref(item)}
                        onClick={(event) => handleNavClick(event, item)}
                        className="group relative text-[0.96rem] font-medium tracking-[0.02em] text-[#2A3D59] transition-colors duration-300 hover:text-[#001A3D]"
                      >
                        <span>{item}</span>
                        <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-[#001A3D] transition-all duration-300 ease-out group-hover:w-full" />
                      </a>
                    ))}
                  </nav>

                  <div className="hidden w-[130px] justify-end md:flex">
                    <Button
                      onClick={handleContactClick}
                      className="h-10 cursor-pointer rounded-full bg-[#001A3D] px-6 text-[0.93rem] font-medium text-white transition-colors duration-300 hover:bg-[#04244f]"
                    >
                      Contact
                    </Button>
                  </div>

                  <button
                    type="button"
                    aria-label="Open menu"
                    onClick={() => setFloatingMenuOpen((prev) => !prev)}
                    className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#B9C2CF] bg-[#E3E7ED] text-[#20385A] transition-colors duration-300 hover:bg-[#D6DCE6] md:hidden"
                  >
                    {floatingMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </motion.div>

            <AnimatePresence>
              {floatingMenuOpen ? (
                <>
                  <motion.button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setFloatingMenuOpen(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[88] bg-black/35 md:hidden"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="fixed top-20 left-1/2 z-[91] w-[calc(100%-1.5rem)] max-w-[420px] -translate-x-1/2 rounded-[2rem] border border-[#D4DEEA] bg-white/96 p-4 text-[#1E3555] shadow-[0_24px_60px_rgba(0,26,61,0.22)] backdrop-blur-md md:hidden"
                  >
                    <nav className="flex flex-col gap-1">
                      {navigation.map((item) => (
                        <a
                          key={`floating-mobile-${item}`}
                          href={getNavHref(item)}
                          onClick={(event) => handleNavClick(event, item)}
                          className="rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-[#001A3D]/8"
                        >
                          {item}
                        </a>
                      ))}
                    </nav>
                    <Button
                      onClick={handleContactClick}
                      className="mt-3 h-10 w-full cursor-pointer rounded-full bg-[#001A3D] text-white transition-colors hover:bg-[#04244f]"
                    >
                      Contact
                    </Button>
                  </motion.div>
                </>
              ) : null}
            </AnimatePresence>
          </>
        ) : null}
      </AnimatePresence>

      <section id="home" ref={heroRef} className="h-screen bg-[var(--aviation-surface)] p-1 sm:p-1.5 lg:p-2">
      <div className="relative mx-auto h-full w-full max-w-[1880px] overflow-hidden rounded-[1.9rem] border border-white/70 shadow-[0_14px_38px_rgba(0,26,61,0.11)]">
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                x: activeIndex === index ? 0 : direction > 0 ? -26 : 26,
                scale: activeIndex === index ? 1 : 1.02,
              }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
              style={{ zIndex: activeIndex === index ? 2 : 1 }}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover"
                style={{ objectPosition: slide.position }}
                sizes="100vw"
              />
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0 z-[3] bg-black/15" />
        <div className="absolute inset-0 z-[4] bg-gradient-to-b from-[#001A3D]/28 via-[#001A3D]/18 to-[#001A3D]/24" />
        <div className="absolute inset-0 z-[5] bg-[radial-gradient(circle_at_76%_16%,rgba(255,255,255,0.14),transparent_38%)]" />
        <div className="absolute inset-0 z-[6] bg-[linear-gradient(105deg,rgba(0,26,61,0.14)_8%,transparent_55%,rgba(0,26,61,0.11)_100%)]" />

        <div className="relative z-10 flex h-full flex-col px-4 py-4 sm:px-6 sm:py-6 lg:px-9 lg:py-8">
          <motion.header
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
            className="relative flex items-center justify-between font-heading"
          >
            <div className="relative h-20 w-20 sm:h-20 sm:w-20 md:w-[130px]">
              <Image src="/logo.png" alt="Gateway IC logo" fill className="object-contain md:object-left" sizes="80px" />
            </div>

            <nav className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-8 text-white/95 md:flex lg:gap-11">
              {navigation.map((item) => (
                <a
                  key={item}
                  href={getNavHref(item)}
                  onClick={(event) => handleNavClick(event, item)}
                  className="group relative text-[0.98rem] font-medium tracking-[0.02em] text-white/92 transition-colors duration-300 hover:text-white"
                >
                  <span>{item}</span>
                  <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-white/90 transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="hidden w-[130px] justify-end md:flex">
              <Button
                onClick={handleContactClick}
                className="h-11 cursor-pointer rounded-full bg-[#001A3D] px-7 text-[0.98rem] font-medium text-white shadow-[0_10px_24px_rgba(0,26,61,0.36)] transition-colors duration-300 ease-out hover:bg-[#052a61] active:bg-[#001f49]"
              >
                Contact
              </Button>
            </div>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#B9C2CF] bg-[#E3E7ED] text-[#20385A] transition-colors duration-300 hover:bg-[#D6DCE6] md:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </motion.header>

          <AnimatePresence>
            {mobileMenuOpen ? (
              <>
                <motion.button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 z-30 bg-black/35 md:hidden"
                />
                <motion.div
                  initial={{ opacity: 0, y: -14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute top-20 left-1/2 z-40 w-[calc(100%-1.5rem)] max-w-[420px] -translate-x-1/2 rounded-[2rem] border border-[#D4DEEA] bg-white/96 p-4 text-[#1E3555] shadow-[0_24px_60px_rgba(0,26,61,0.22)] backdrop-blur-md md:hidden"
                >
                  <nav className="flex flex-col gap-1">
                    {navigation.map((item) => (
                      <a
                        key={item}
                        href={getNavHref(item)}
                        onClick={(event) => handleNavClick(event, item)}
                        className="rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-[#001A3D]/8"
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                  <Button
                    onClick={handleContactClick}
                    className="mt-3 h-10 w-full cursor-pointer rounded-full bg-[#001A3D] text-white transition-colors hover:bg-[#04244f]"
                  >
                    Contact
                  </Button>
                </motion.div>
              </>
            ) : null}
          </AnimatePresence>

          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, y: 16, x: direction > 0 ? 34 : -34 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: -10, x: direction > 0 ? -34 : 34 }}
                transition={{ duration: 0.62, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <h1 className="max-w-5xl text-balance font-heading font-semibold leading-[1.05] tracking-[-0.02em] text-white text-[1.6rem] sm:text-[2.35rem] lg:text-[3.2rem]">
                  {activeSlide.title}
                </h1>

                <p className="mt-5 max-w-3xl text-pretty text-[0.88rem] leading-relaxed font-normal tracking-[0.01em] text-white/92 sm:text-[1rem] lg:text-[1.15rem] lg:leading-[1.6]">
                  {activeSlide.subtitle}
                </p>

                <div className="mt-7 flex flex-col items-center gap-3">
                  <Button
                    onClick={handleContactClick}
                    className="h-12 cursor-pointer rounded-full bg-white px-9 text-[0.96rem] font-medium tracking-[0.01em] text-[#0B2345] shadow-[0_12px_26px_rgba(0,0,0,0.2)] ring-1 ring-white/70 transition-[background-color,box-shadow,color] duration-300 ease-out hover:bg-[#E7ECF3] hover:text-[#071B37] hover:shadow-[0_16px_30px_rgba(0,0,0,0.24)]"
                  >
                    Let&apos;s discuss your project
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

            <button
              type="button"
              aria-label="Previous slide"
              onClick={goPrev}
              className="absolute left-3 bottom-24 z-20 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/16 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/26 sm:left-4 sm:bottom-28 md:top-1/2 md:bottom-auto md:left-6 md:h-11 md:w-11 md:-translate-y-1/2 lg:left-8"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              aria-label="Next slide"
              onClick={goNext}
              className="absolute right-3 bottom-24 z-20 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/16 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/26 sm:right-4 sm:bottom-28 md:top-1/2 md:bottom-auto md:right-6 md:h-11 md:w-11 md:-translate-y-1/2 lg:right-8"
            >
              <ArrowRight className="h-5 w-5" />
            </button>

          <div className="absolute inset-x-0 bottom-8 z-20 flex items-center justify-center sm:bottom-10">
            <div className="flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                    activeIndex === index ? "w-7 bg-white" : "w-2.5 bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
