"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  title?: string;
}

export default function SectionDivider({
  title,
}: SectionDividerProps) {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="absolute h-40 w-40 rounded-full bg-red-600/15 blur-3xl" />
      </div>

      {title && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 flex justify-center"
        >
          <span className="rounded-full border border-white/10 bg-black/50 px-6 py-3 text-xs uppercase tracking-[0.35em] text-neutral-400 backdrop-blur">
            {title}
          </span>
        </motion.div>
      )}
    </div>
  );
}