"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Section from "@/components/ui/Section";
import { sponsors } from "@/content/sponsors";

export default function PartnerBrands() {
  const activeSponsors = sponsors.filter(
    (sponsor) => sponsor.active !== false
  );

  const mainSponsors = activeSponsors.filter(
    (sponsor) => sponsor.tier === "MAIN"
  );

  const otherSponsors = activeSponsors.filter(
    (sponsor) => sponsor.tier !== "MAIN"
  );

  return (
    <Section size="lg">
      {/* Header */}

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-primary">
            Our Partners
          </p>

          <h2
  className="
    font-display
    mt-7
    text-6xl
    font-bold
    uppercase
    leading-[0.88]
    tracking-[-0.03em]
    text-white
    md:text-8xl
  "
>
  Driven by
  <br />
  <span className="text-primary">partnership.</span>
</h2>
        </div>

        <div className="flex items-end">
          <p className="max-w-2xl text-lg leading-8 text-white/45">
            Marcas que acompañan el proyecto RG1 y forman parte de una visión
            compartida alrededor del rendimiento, la competición y el
            motociclismo.
          </p>
        </div>
      </div>

      {/* Main Partners */}

      {mainSponsors.length > 0 && (
        <div className="mt-24">
          <p className="mb-8 text-[10px] uppercase tracking-[0.45em] text-white/30">
            Main Partner
          </p>

          <div className="grid gap-6">
            {mainSponsors.map((sponsor, index) => {
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    relative
                    flex
                    min-h-[260px]
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    px-10
                    transition-colors
                    duration-500
                    hover:bg-white/[0.04]
                  "
                >
                  <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />

                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={300}
                    height={150}
                    className="
                      relative
                      z-10
                      max-h-32
                      w-auto
                      max-w-[280px]
                      object-contain
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {sponsor.website && (
                    <ArrowUpRight
                      size={20}
                      className="
                        absolute
                        right-8
                        top-8
                        text-white/20
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-primary
                      "
                    />
                  )}

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                </motion.div>
              );

              if (!sponsor.website) {
                return (
                  <div key={`${sponsor.name}-${index}`}>
                    {content}
                  </div>
                );
              }

              return (
                <a
                  key={`${sponsor.name}-${index}`}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* Technical + Official Partners */}

      {otherSponsors.length > 0 && (
        <div className="mt-16">
          <p className="mb-8 text-[10px] uppercase tracking-[0.45em] text-white/30">
            Technical & Official Partners
          </p>

          <div className="grid grid-cols-2 border-l border-t border-white/10 md:grid-cols-3">
            {otherSponsors.map((sponsor, index) => {
              const content = (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="
                    group
                    relative
                    flex
                    min-h-[190px]
                    items-center
                    justify-center
                    border-b
                    border-r
                    border-white/10
                    bg-white/[0.01]
                    p-8
                    transition-colors
                    duration-300
                    hover:bg-white/[0.035]
                  "
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={180}
                    height={90}
                    className="
                      max-h-20
                      w-auto
                      max-w-[160px]
                      object-contain
                      opacity-65
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:opacity-100
                    "
                  />

                  <span className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[0.3em] text-white/20">
                    {sponsor.tier === "TECH"
                      ? "Technical Partner"
                      : "Official Partner"}
                  </span>

                  {sponsor.website && (
                    <ArrowUpRight
                      size={15}
                      className="absolute right-5 top-5 text-white/15 transition-colors group-hover:text-primary"
                    />
                  )}
                </motion.div>
              );

              if (!sponsor.website) {
                return (
                  <div key={`${sponsor.name}-${index}`}>
                    {content}
                  </div>
                );
              }

              return (
                <a
                  key={`${sponsor.name}-${index}`}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </Section>
  );
}