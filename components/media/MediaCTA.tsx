"use client";

import { motion } from "framer-motion";
import { ArrowRight, Camera } from "lucide-react";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function MediaCTA() {
  return (
    <Section size="lg">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="
          relative
          overflow-hidden
          rounded-[2rem]
          border
          border-white/10
          bg-white/[0.025]
          px-7
          py-20
          md:px-14
          md:py-24
          lg:px-20
        "
      >
        {/* Glow */}

        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[140px]" />

        {/* Watermark */}

        <div
          className="
            pointer-events-none
            absolute
            -bottom-8
            right-0
            select-none
            whitespace-nowrap
            text-[14vw]
            font-black
            uppercase
            leading-none
            tracking-[-0.08em]
            text-white/[0.018]
          "
        >
          MEDIA
        </div>

        {/* Content */}

        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-4">
            <Camera size={18} className="text-primary" />

            <p className="text-xs uppercase tracking-[0.45em] text-primary">
              Media & Press
            </p>
          </div>

          <h2
  className="
    font-display
    mt-8
    text-6xl
    font-bold
    uppercase
    leading-[0.88]
    tracking-[-0.03em]
    text-white
    md:text-7xl
    lg:text-8xl
  "
>
  Tell the
  <br />
  story
  <br />
  <span className="text-primary">with us.</span>
</h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/50">
            Para prensa, producciones audiovisuales, entrevistas, cobertura de
            carreras y colaboraciones de contenido, contactá con RG1 Racing
            Team.
          </p>

          <div className="mt-12">
            <Button href="/contact?reason=media" size="lg">
              Media Contact
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}