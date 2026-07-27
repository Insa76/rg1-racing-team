"use client";

import { motion } from "framer-motion";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <Section
  id="home"
  size="hero"
  fullWidth
  className="min-h-screen"
>
      {/* Background */}
      <img
        src="/images/hero/hero-bg.png"
        alt="RG1 Racing Team"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-neutral-950 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl"
          >
            <Badge className="mb-8 mt-6">
              PERFORMANCE • COMPETITION • INNOVATION
            </Badge>

            <motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
  className="
    font-display
    text-6xl
    font-bold
    uppercase
    leading-[0.82]
    tracking-[-0.04em]
    text-white
    md:text-8xl
    xl:text-[9rem]
  "
>
  RG1
  <br />
  Racing Team
</motion.h1>

            <motion.p
              className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300 md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              Competición, performance y cultura del motociclismo reunidas
              en un mismo proyecto. RG1 conecta alto rendimiento, marcas,
              contenido y soluciones para quienes viven el mundo de las motos.
            </motion.p>

            {/* Actions */}
            <motion.div
              className="mt-12 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button size="lg" href="/racing">
                Explore Racing
              </Button>

              <Button
                variant="ghost"
                size="lg"
                href="/partners"
              >
                Become a Partner
              </Button>
            </motion.div>

            {/* Ecosystem */}
            <motion.div
              className="mt-20 grid max-w-4xl grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div>
                <p className="text-3xl font-black text-white lg:text-4xl">
                  Racing
                </p>

                <span className="mt-2 block text-xs uppercase tracking-[0.25em] text-neutral-400">
                  Competition
                </span>
              </div>

              <div>
                <p className="text-3xl font-black text-white lg:text-4xl">
                  Performance
                </p>

                <span className="mt-2 block text-xs uppercase tracking-[0.25em] text-neutral-400">
                  Moto Division
                </span>
              </div>

              <div>
                <p className="text-3xl font-black text-white lg:text-4xl">
                  Media
                </p>

                <span className="mt-2 block text-xs uppercase tracking-[0.25em] text-neutral-400">
                  Content
                </span>
              </div>

              <div>
                <p className="text-3xl font-black text-white lg:text-4xl">
                  Partners
                </p>

                <span className="mt-2 block text-xs uppercase tracking-[0.25em] text-neutral-400">
                  Business
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}