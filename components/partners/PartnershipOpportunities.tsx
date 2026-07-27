"use client";

import { motion } from "framer-motion";
import {
  Bike,
  Camera,
  Users,
  Trophy,
  ArrowUpRight,
} from "lucide-react";

import Section from "@/components/ui/Section";

const opportunities = [
  {
    number: "01",
    title: "Team & Bike",
    subtitle: "Brand Presence",
    description:
      "Integración de marca dentro del entorno competitivo de RG1, incluyendo espacios vinculados a la moto, equipo y presencia deportiva.",
    icon: Bike,
  },
  {
    number: "02",
    title: "Content",
    subtitle: "Media & Storytelling",
    description:
      "Contenido construido alrededor de carreras, preparación, viajes y momentos del equipo para conectar la marca con la audiencia.",
    icon: Camera,
  },
  {
    number: "03",
    title: "Experiences",
    subtitle: "Events & Activation",
    description:
      "Activaciones y experiencias que permiten acercar clientes, comunidades y equipos de marca al universo del motociclismo.",
    icon: Users,
  },
  {
    number: "04",
    title: "Partnership",
    subtitle: "Long-Term Collaboration",
    description:
      "Propuestas estratégicas diseñadas junto a cada empresa para construir relaciones que evolucionen más allá de una temporada.",
    icon: Trophy,
  },
];

export default function PartnershipOpportunities() {
  return (
    <Section size="lg" className="border-y border-white/[0.06]">
      {/* Header */}

      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-primary">
            Partnership Opportunities
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
  Build your
  <br />
  presence
  <br />
  <span className="text-primary">with RG1.</span>
</h2>
        </div>

        <div className="flex items-end">
          <p className="max-w-2xl text-lg leading-8 text-white/45">
            Cada alianza puede construirse de forma diferente. Desde presencia
            dentro del proyecto deportivo hasta contenido, experiencias y
            acciones desarrolladas junto a la marca.
          </p>
        </div>
      </div>

      {/* Opportunities */}

      <div className="mt-24 grid border-l border-t border-white/10 md:grid-cols-2">
        {opportunities.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
              }}
              className="
                group
                relative
                min-h-[390px]
                overflow-hidden
                border-b
                border-r
                border-white/10
                p-8
                transition-colors
                duration-500
                hover:bg-white/[0.025]
                md:p-12
              "
            >
              {/* Number */}

              <span className="absolute right-8 top-8 text-xs font-semibold tracking-[0.35em] text-white/15">
                {item.number}
              </span>

              {/* Icon */}

              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/5">
                <Icon size={23} strokeWidth={1.5} />
              </div>

              {/* Content */}

              <div className="absolute bottom-10 left-8 right-8 md:bottom-12 md:left-12 md:right-12">
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary">
                  {item.subtitle}
                </p>

                <h3
  className="
    font-display
    mt-4
    text-4xl
    
    uppercase
    leading-none
    tracking-[-0.02em]
    text-white
    md:text-5xl
  "
>
  {item.title}
</h3>

                <p className="mt-5 max-w-lg leading-7 text-white/40">
                  {item.description}
                </p>

                <div className="mt-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-white/30 transition-colors group-hover:text-white/60">
                  RG1 Partnership

                  <ArrowUpRight
                    size={15}
                    className="text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>

              {/* Hover line */}

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}