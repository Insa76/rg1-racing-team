"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Section from "@/components/ui/Section";
import GradientText from "@/components/ui/GradientText";

import { BikeData } from "@/lib/types/racing";

interface Props {
  data: BikeData;
}

export default function BikeSection({ data }: Props) {
  return (
    <Section size="lg" className="relative overflow-hidden">
      {/* Glow principal */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[180px]" />

      <div className="relative z-10 text-center">
        {/* Watermark */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-56
            -translate-x-1/2
            select-none
            whitespace-nowrap
            text-[18vw]
            font-black
            uppercase
            leading-none
            tracking-[-0.08em]
            text-white/[0.025]
          "
        >
          M1000RR
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.45em] text-primary">
            THE MACHINE
          </p>

          <h2
  className="
    font-display
    text-6xl
    font-bold
    uppercase
    leading-[0.9]
    tracking-[-0.03em]
    md:text-8xl
  "
>
  <GradientText>{data.name}</GradientText>
</h2>

          <p className="mt-6 text-sm uppercase tracking-[0.45em] text-primary/80">
            {data.subtitle}
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted">
            {data.description}
          </p>
        </motion.div>

        {/* Moto */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="relative mx-auto mt-20 max-w-6xl"
        >
          {/* Glow detrás de la moto */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[55%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />

          <Image
            src={data.image}
            alt={data.name}
            width={1600}
            height={900}
            priority
            className="
              relative
              z-10
              w-full
              select-none
              object-contain
              drop-shadow-[0_60px_120px_rgba(0,0,0,.75)]
            "
          />

          {/* Sombra / reflejo */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              h-20
              w-3/4
              -translate-x-1/2
              rounded-full
              bg-black/40
              blur-3xl
            "
          />
        </motion.div>

        {/* Specs */}
        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {data.specs.slice(0, 4).map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
              className="text-center"
            >
              <div className="border-t border-primary/30 pt-5">
                <div className="text-5xl font-black leading-none text-white md:text-6xl xl:text-7xl">
                  {spec.value}
                </div>

                <div className="mt-5 text-[11px] uppercase tracking-[0.45em] text-primary">
                  {spec.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}