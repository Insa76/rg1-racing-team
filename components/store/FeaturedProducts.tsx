"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import Section from "@/components/ui/Section";
import { featuredProducts } from "@/content/store";

export default function FeaturedProducts() {
  return (
    <Section size="lg">
      {/* Header */}

      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.45em] text-primary">
            Featured Selection
          </p>

          <h2
  className="
    font-display
    mt-6
    text-6xl
    font-bold
    uppercase
    leading-[0.9]
    tracking-[-0.03em]
    text-white
    md:text-8xl
  "
>
  Built for
  <br />
  Performance.
</h2>
        </div>

        <p className="max-w-md text-base leading-7 text-white/45 md:text-right">
          Una selección de motos, componentes y productos pensados para quienes
          buscan rendimiento dentro y fuera de la pista.
        </p>
      </div>

      {/* Products */}

      <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProducts.map((product, index) => (
          <motion.article
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.06,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.02]
            "
          >
            {/* Image */}

            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Number */}

              <span className="absolute right-6 top-6 text-[10px] font-semibold tracking-[0.3em] text-white/35">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Category */}

              <span
                className="
                  absolute
                  bottom-6
                  left-6
                  rounded-full
                  border
                  border-white/15
                  bg-black/30
                  px-4
                  py-2
                  text-[9px]
                  uppercase
                  tracking-[0.35em]
                  text-white/70
                  backdrop-blur-md
                "
              >
                {product.category}
              </span>
            </div>

            {/* Content */}

            <div className="p-7 md:p-8">
              <h3
  className="
    font-display
    text-3xl
    
    uppercase
    leading-none
    tracking-[-0.02em]
    text-white
    md:text-4xl
  "
>
  {product.name}
</h3>

              <p className="mt-4 min-h-[56px] text-sm leading-7 text-white/45">
                {product.description}
              </p>

              <button
                type="button"
                className="
                  mt-8
                  flex
                  items-center
                  gap-3
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.35em]
                  text-white/60
                  transition-colors
                  hover:text-white
                "
              >
                Consult Product

                <ArrowUpRight
                  size={16}
                  className="
                    text-primary
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </button>
            </div>

            {/* Bottom accent */}

            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
          </motion.article>
        ))}
      </div>
    </Section>
  );
}