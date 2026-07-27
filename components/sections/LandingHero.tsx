"use client";

import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Button from "@/components/ui/Button";
import { HeroData } from "@/lib/types/racing";

interface Props {
  data: HeroData;
}

export default function LandingHero({ data }: Props) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#050505]">

      {/* Background */}

      <div className="absolute inset-0 -z-50 bg-[#050505]" />

      {/* Atmospheric lights */}

      <div className="absolute right-[-20%] top-[-25%] -z-40 h-[900px] w-[900px] rounded-full bg-primary/20 blur-[180px]" />

      <div className="absolute left-[-15%] bottom-[-20%] -z-40 h-[700px] w-[700px] rounded-full bg-white/[0.03] blur-[180px]" />

      {/* Grid texture */}

      <div
        className="absolute inset-0 -z-30 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      {/* Rider */}

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        className="
  pointer-events-none
  absolute
  bottom-0
  right-[-0%]
  z-20
  hidden
  h-[115vh]
  w-[72vw]
  lg:block
  2xl:right-[-12%]
  2xl:w-[68vw]
"
      >
        {/* Glow behind rider */}

        <div className="absolute bottom-[18%] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />

        {/* Shadow */}

        <div className="absolute bottom-8 left-1/2 h-24 w-[70%] -translate-x-1/2 rounded-full bg-black/70 blur-3xl" />

        <Image
  src={data.heroImage}
  alt={`${data.firstName} ${data.lastName}`}
  fill
  priority
  className="
    object-contain
    object-bottom
    object-right
    scale-[1.15]
    drop-shadow-[0_60px_120px_rgba(0,0,0,.85)]
    select-none
    pointer-events-none
  "
/>
      </motion.div>

      {/* Content */}

      <div className="relative z-30 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="max-w-3xl pt-36 pb-20"
        >

          {/* Eyebrow */}

          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] uppercase tracking-[0.40em] text-primary backdrop-blur">
            {data.eyebrow}
          </span>

          {/* Name */}

          <h1 className="mt-8 leading-[0.82]">

            <span
              className="
  font-display
  block
  text-7xl
  font-bold
  uppercase
  leading-[0.78]
  tracking-[-0.04em]
  text-white
  sm:text-8xl
  lg:text-[9rem]
  xl:text-[11rem]
"
            >
              {data.firstName}
            </span>

            <span
              className="
  font-display
  block
  text-7xl
  font-bold
  uppercase
  leading-[0.78]
  tracking-[-0.04em]
  text-primary
  sm:text-8xl
  lg:text-[9rem]
  xl:text-[11rem]
"
            >
              {data.lastName}
            </span>

          </h1>

          {/* Tagline */}

          <p className="mt-8 max-w-xl text-xl font-light uppercase tracking-[0.22em] text-white/85 lg:text-2xl">
            {data.tagline}
          </p>

          {/* Description */}

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/60">
            {data.description}
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">

            <Button
              href={data.primaryAction.href}
              size="lg"
            >
              {data.primaryAction.label}
            </Button>

            <Button
              href={data.secondaryAction.href}
              variant="outline"
              size="lg"
            >
              {data.secondaryAction.label}
              <ArrowRight size={18} />
            </Button>

          </div>

          {/* Stats */}

          <div className="mt-20 flex flex-wrap gap-y-8 border-t border-white/10 pt-10">

            {data.stats.map((stat, index) => (

              <div
                key={stat.label}
                className="
                  w-1/2
                  pr-8
                  md:w-auto
                  md:min-w-[150px]
                "
              >

                <div className="flex items-end gap-4">

                  <span className="text-5xl font-black leading-none text-white">
                    {stat.value}
                  </span>

                  {index !== data.stats.length - 1 && (
                    <div className="hidden h-12 w-px bg-primary/40 md:block" />
                  )}

                </div>

                <p className="mt-3 text-[11px] uppercase tracking-[0.35em] text-white/45">
                  {stat.label}
                </p>

              </div>

            ))}

          </div>

        </motion.div>

      </div>
            {/* Mobile Rider */}

      <div className="relative mt-12 block h-[420px] w-full lg:hidden">

        <div className="absolute inset-x-0 bottom-0 h-40 rounded-full bg-primary/20 blur-[80px]" />

        <Image
          src={data.heroImage}
          alt={`${data.firstName} ${data.lastName}`}
          fill
          priority
          className="object-contain object-bottom"
        />

      </div>

      {/* Bottom Gradient */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />

      {/* Scroll Indicator */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: .8,
        }}
        className="
absolute
bottom-8
left-1/2
-z-10
hidden
-lg:flex
-flex-col
-items-center
-gap-3
--translate-x-1/2
"
      >

        <div className="flex flex-col items-center gap-3">

          <span className="text-[10px] uppercase tracking-[0.45em] text-white/35">
            Scroll
          </span>

          <ChevronDown
            size={22}
            className="animate-bounce text-primary"
          />

        </div>

      </motion.div>

    </section>
  );
}