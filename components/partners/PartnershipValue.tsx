"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Users,
  Camera,
  Handshake,
} from "lucide-react";

import Section from "@/components/ui/Section";

const opportunities = [
  {
    number: "01",
    title: "Brand Visibility",
    description:
      "Presencia de marca vinculada a un proyecto de competición y alto rendimiento dentro del motociclismo.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Audience Connection",
    description:
      "Una plataforma para conectar con comunidades vinculadas al motociclismo, la velocidad y la cultura motor.",
    icon: Users,
  },
  {
    number: "03",
    title: "Content & Media",
    description:
      "Generación de contenido alrededor de carreras, preparación, equipo y experiencias durante la temporada.",
    icon: Camera,
  },
  {
    number: "04",
    title: "Brand Experiences",
    description:
      "Oportunidades para desarrollar activaciones y experiencias que conecten la marca con el universo RG1.",
    icon: Handshake,
  },
];

export default function PartnershipValue() {
  return (
    <Section
      id="partnership"
      size="lg"
      className="border-b border-white/[0.06]"
    >
      {/* Intro */}

      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-primary">
            Partnership Platform
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
  More than
  <br />
  a logo on
  <br />
  <span className="text-primary">the bike.</span>
</h2>
        </div>

        <div className="flex items-end">
          <p className="max-w-2xl text-lg leading-8 text-white/45">
            Una alianza con RG1 puede extenderse desde la presencia dentro del
            proyecto deportivo hasta contenido, comunicación, activaciones y
            experiencias construidas junto a cada marca.
          </p>
        </div>
      </div>

      {/* Opportunities */}

      <div className="mt-24 border-t border-white/10">
        {opportunities.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
              className="
                group
                relative
                grid
                gap-6
                border-b
                border-white/10
                py-10
                md:grid-cols-[80px_1fr_1fr_auto]
                md:items-center
                md:py-12
              "
            >
              <span className="text-xs font-semibold tracking-[0.35em] text-white/20">
                {item.number}
              </span>

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
  {item.title}
</h3>

              <p className="max-w-lg leading-7 text-white/40">
                {item.description}
              </p>

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/30
                  transition-all
                  duration-300
                  group-hover:border-primary/40
                  group-hover:text-primary
                "
              >
                <Icon size={21} strokeWidth={1.5} />
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}