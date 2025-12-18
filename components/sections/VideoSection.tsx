"use client";

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-black">
      {/* VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/ramiro.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-white text-3xl md:text-5xl font-heading tracking-wide">
            Precision at Speed
          </h2>

          <p className="mt-4 text-neutral-300 text-base md:text-lg">
            Disciplina, técnica y foco absoluto en cada curva.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
