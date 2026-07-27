"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "framer-motion";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

interface MediaData {
  featured: {
    title: string;
    category: string;
    thumbnail: string;
    duration?: string;
  };
  gallery: string[];
}

interface Props {
  data: MediaData;
}

export default function MediaShowcase({ data }: Props) {
  return (
    <Section size="lg">
      <SectionTitle
        eyebrow="Media"
        title="Behind the Helmet"
        description="Photos, onboard footage and race weekend highlights."
        display
      />

      <div className="mt-20">
        {/* Featured */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="group relative overflow-hidden rounded-3xl border border-white/10"
        >
          <div className="relative min-h-[520px] md:min-h-[650px]">
            <Image
              src={data.featured.thumbnail}
              alt={data.featured.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
            />

            {/* Overlays */}

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

            {/* Top info */}

            <div className="absolute left-6 top-6 flex items-center gap-3 md:left-10 md:top-10">
              <span className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-white/80 backdrop-blur-md">
                {data.featured.category}
              </span>

              {data.featured.duration && (
                <span className="text-xs font-medium tracking-wider text-white/60">
                  {data.featured.duration}
                </span>
              )}
            </div>

            {/* Play */}

            <button
              type="button"
              aria-label={`Play ${data.featured.title}`}
              className="
                absolute
                left-1/2
                top-1/2
                z-20
                flex
                h-20
                w-20
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
                md:h-24
                md:w-24
              "
            >
              <Play
                size={34}
                className="ml-1 text-white"
                fill="currentColor"
              />
            </button>

            {/* Featured title */}

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12">
              <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-primary">
                Featured Story
              </p>

              <h3 className="max-w-3xl text-3xl font-black uppercase leading-tight text-white md:text-5xl lg:text-6xl">
                {data.featured.title}
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Gallery */}

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-6">
          {data.gallery.map((image, index) => {
            const layout =
              index % 6 === 0
                ? "md:col-span-7 md:row-span-2"
                : index % 6 === 1
                  ? "md:col-span-5"
                  : index % 6 === 2
                    ? "md:col-span-5"
                    : index % 6 === 3
                      ? "md:col-span-4"
                      : index % 6 === 4
                        ? "md:col-span-4"
                        : "md:col-span-4";

            return (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(index * 0.06, 0.3),
                }}
                className={layout}
              >
                <div
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-neutral-900
                    ${
                      index % 6 === 0
                        ? "aspect-[4/5] md:h-full md:min-h-[520px]"
                        : "aspect-square"
                    }
                  `}
                >
                  <Image
                    src={image}
                    alt={`RG1 Racing media ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute bottom-5 right-5 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Media CTA */}

        <div className="mt-12 flex justify-center">
          <Link
            href="/media"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.35em]
              text-white/60
              transition-colors
              hover:text-white
            "
          >
            Explore All Media

            <ArrowUpRight
              size={17}
              className="text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </Section>
  );
}