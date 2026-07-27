"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  large?: boolean;
}

export default function ExperienceCard({
  title,
  description,
  image,
  href,
  large = false,
}: ExperienceCardProps) {
  return (
    <Link href={href} className="group block">
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ duration: 0.35 }}
        className={`relative overflow-hidden rounded-[32px] border border-white/10 bg-neutral-900 ${
          large ? "min-h-[620px]" : "min-h-[430px]"
        }`}
      >
        {/* Imagen */}
        <motion.img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.8 }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />

        {/* Contenido */}
        <div className="absolute inset-x-0 bottom-0 p-10 md:p-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-primary">
            RG1 EXPERIENCE
          </p>

          <h3
  className="
    font-display
    text-5xl
    
    uppercase
    leading-none
    tracking-[-0.02em]
    text-white
    md:text-6xl
  "
>
  {title}
</h3>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
            {description}
          </p>

          <motion.div
            className="mt-10 inline-flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.25em] text-white"
            whileHover={{ x: 6 }}
          >
            <span>Explore</span>

            <span className="text-primary transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </motion.div>
        </div>

        {/* Línea inferior */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
      </motion.article>
    </Link>
  );
}