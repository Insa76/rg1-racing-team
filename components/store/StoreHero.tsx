"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function StoreHero() {
  return (
    <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-[#050505]">
      {/* Background */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_75%_40%,rgba(225,6,0,0.16),transparent_35%)]
        "
      />

      {/* Watermark */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-5%]
          right-[-2%]
          select-none
          text-[22vw]
          font-black
          uppercase
          leading-none
          tracking-[-0.08em]
          text-white/[0.018]
        "
      >
        RG1
      </div>

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Content */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-8 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-primary">
            RG1 Performance
          </p>

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
  Performance
  <br />
  <span className="text-primary">Starts Here.</span>
</h1>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-white/55 md:text-xl">
            Motos, repuestos, accesorios, lubricantes y equipamiento para
            quienes viven el motociclismo dentro y fuera de la pista.
          </p>

          <div className="mt-14 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-white/35">
            <ArrowDown size={18} className="text-primary" />
            Explore Performance
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}