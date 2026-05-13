"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const paragraphs = [
  "Gateway International Consultancy was founded by aviation professionals with decades of international experience across aviation engineering, aircraft maintenance, airworthiness, technical training, regulatory compliance, and business development.",
  "After working together across multiple aviation organisations over the past 30 years, our team built long-standing professional relationships across Europe, the Middle East, and international markets.",
  "Through this experience, we identified a recurring challenge: organisations often struggle to access the right technical expertise, training capabilities, regulatory support, and strategic partnerships required to grow across regions.",
  "Gateway was created to bridge that gap.",
  "We connect global aviation expertise with opportunities in the Middle East and beyond through practical advisory services, engineering support, training solutions, and strategic partnerships.",
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 bg-[var(--aviation-surface)] px-1 pb-10 pt-6 sm:px-1.5 sm:pb-12 sm:pt-8 lg:px-2 lg:pb-16 lg:pt-10">
      <div className="mx-auto w-full max-w-[1880px] px-4 sm:px-6 lg:px-9">
        <div className="grid items-stretch gap-7 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative min-h-[320px] overflow-hidden rounded-[1.6rem] border border-[#D4DFEE] lg:min-h-[560px]"
          >
            <Image
              src="/about.jpg"
              alt="Gateway International Consultancy aviation professionals"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001A3D]/44 via-transparent to-[#001A3D]/14" />
            <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-3 py-2 backdrop-blur-sm sm:bottom-5 sm:left-5">
              <p className="text-[0.75rem] font-semibold tracking-[0.08em] text-[#001A3D] uppercase">About Gateway</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.06 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[0.77rem] font-semibold tracking-[0.17em] text-[#5B6D86] uppercase">Who We Are</p>
            <h2 className="mt-3 max-w-2xl text-balance font-heading text-[1.55rem] leading-tight font-semibold tracking-[-0.015em] text-[#0A1D3C] sm:text-[2.1rem] lg:text-[2.55rem]">
              Connecting Global Aviation Expertise With Strategic Regional Growth
            </h2>

            <div className="mt-6 space-y-4">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[0.96rem] leading-relaxed font-normal tracking-[0.004em] text-[#314863] sm:text-[1.02rem]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="mt-6 border-l-2 border-[#001A3D] pl-4 text-[1rem] leading-relaxed font-medium tracking-[0.01em] text-[#0A2347] sm:text-[1.08rem]">
              Connecting expertise. Creating opportunities. Building aviation capability across borders.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
