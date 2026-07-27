"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function PerformanceCTA() {
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
            -bottom-10
            right-0
            select-none
            text-[15vw]
            font-black
            uppercase
            leading-none
            tracking-[-0.08em]
            text-white/[0.018]
          "
        >
          RG1
        </div>

        {/* Content */}

        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-4">
            <MessageCircle
              size={18}
              className="text-primary"
            />

            <p className="text-xs uppercase tracking-[0.45em] text-primary">
              Talk to RG1
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
  Looking for
  <br />
  something specific?
</h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/50">
            Consultanos por motos, repuestos, accesorios, lubricantes o
            productos específicos. Te ayudamos a encontrar la opción adecuada
            para tu moto y tus necesidades.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button
  href="/contact?reason=performance"
  size="lg"
>
              Make an Inquiry

              <ArrowRight size={18} />
            </Button>

            <Button
              href="/racing"
              variant="outline"
              size="lg"
            >
              Explore Racing
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}