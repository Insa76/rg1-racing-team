"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Section from "@/components/ui/Section";
import { media } from "@/content/media";

export default function MediaGrid() {
  return (
    <Section size="lg">
      {/* Header */}

      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-primary">
            Gallery
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
  Race
  <br />
  <span className="text-primary">Moments.</span>
</h2>
        </div>

        <p className="max-w-md text-base leading-7 text-white/45 md:text-right">
          Una selección de imágenes de carreras, preparación y momentos que
          forman parte de la historia de RG1.
        </p>
      </div>

      {/* Gallery */}

      <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
        {media.gallery.map((image, index) => {
          const layouts = [
            "lg:col-span-7 lg:row-span-2",
            "lg:col-span-5",
            "lg:col-span-5",
            "lg:col-span-4",
            "lg:col-span-4",
            "lg:col-span-4",
          ];

          const large = index === 0;

          return (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.05,
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-neutral-900
                ${layouts[index] ?? "lg:col-span-4"}
                ${large ? "min-h-[620px]" : "min-h-[300px]"}
              `}
            >
              <Image
                src={image}
                alt={`RG1 Racing Team media ${index + 1}`}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Number */}

              <span className="absolute left-6 top-6 text-[10px] font-semibold tracking-[0.35em] text-white/50">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Hover */}

              <div className="absolute bottom-0 left-0 right-0 flex translate-y-4 items-end justify-between p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-primary">
                    RG1 Media
                  </p>

                  <p className="mt-2 font-semibold uppercase text-white">
                    Race Moment
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md">
                  <ArrowUpRight size={17} className="text-white" />
                </div>
              </div>

              {/* Accent */}

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}