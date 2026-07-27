"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

import Section from "@/components/ui/Section";
import { media } from "@/content/media";

export default function FeaturedMedia() {
  return (
    <Section size="lg">
      {/* Header */}

      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-primary">
            Featured
          </p>

          <h2
  className="
    font-display
    mt-6
    text-6xl
    font-bold
    uppercase
    leading-[0.88]
    tracking-[-0.03em]
    text-white
    md:text-8xl
  "
>
  Latest
  <br />
  Story.
</h2>
        </div>

        <p className="max-w-md text-base leading-7 text-white/45 md:text-right">
          Race weekends, onboard footage and stories from inside the RG1
          project.
        </p>
      </div>

      {/* Feature */}

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="group relative mt-20 overflow-hidden rounded-3xl border border-white/10"
      >
        <div className="relative min-h-[600px] md:min-h-[720px]">
          <Image
            src={media.featured.thumbnail}
            alt={media.featured.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

          {/* Category */}

          <div className="absolute left-7 top-7 flex items-center gap-4 md:left-10 md:top-10">
            <span className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[9px] uppercase tracking-[0.35em] text-white/70 backdrop-blur-md">
              {media.featured.category}
            </span>

            {media.featured.duration && (
              <span className="text-xs tracking-wider text-white/50">
                {media.featured.duration}
              </span>
            )}
          </div>

          {/* Play */}

          <button
            type="button"
            aria-label={`Play ${media.featured.title}`}
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-24
              w-24
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/10
              backdrop-blur-xl
              transition-all
              duration-300
              hover:scale-110
              hover:border-primary/60
              hover:bg-primary
            "
          >
            <Play
              size={34}
              fill="currentColor"
              className="ml-1 text-white"
            />
          </button>

          {/* Bottom */}

          <div className="absolute bottom-0 left-0 right-0 p-7 md:p-12">
            <p className="text-[10px] uppercase tracking-[0.45em] text-primary">
              Featured Story
            </p>

            <h3
  className="
    font-display
    mt-5
    max-w-4xl
    text-5xl
    
    uppercase
    leading-[0.9]
    tracking-[-0.025em]
    text-white
    md:text-7xl
  "
>
  {media.featured.title}
</h3>

            <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-white/50">
              Watch Story

              <ArrowUpRight size={16} className="text-primary" />
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}