"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";

export default function MediaHero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-[#050505]">
      {/* Background */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_70%_35%,rgba(225,6,0,0.16),transparent_38%)]
        "
      />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Watermark */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-4%]
          right-[-3%]
          select-none
          text-[22vw]
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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-8 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-4">
            <Play size={17} className="text-primary" />

            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-primary">
              RG1 Media
            </p>
          </div>

          <h1
  className="
    font-display
    mt-8
    text-7xl
    font-bold
    uppercase
    leading-[0.82]
    tracking-[-0.04em]
    text-white
    md:text-8xl
    lg:text-[10rem]
  "
>
  Beyond
  <br />
  <span className="text-primary">the race.</span>
</h1>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-white/55 md:text-xl">
            Carreras, preparación, viajes y momentos detrás del casco. El
            universo RG1 contado desde dentro.
          </p>

          <div className="mt-20 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-white/30">
            <ArrowDown size={17} className="text-primary" />
            Explore RG1 Media
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}