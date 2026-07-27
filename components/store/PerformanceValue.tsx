"use client";

import { motion } from "framer-motion";
import {
  Gauge,
  ShieldCheck,
  Wrench,
  MessageCircle,
} from "lucide-react";

import Section from "@/components/ui/Section";

const values = [
  {
    number: "01",
    title: "Performance Experience",
    description:
      "Experiencia nacida en el motociclismo de alto rendimiento aplicada a la selección de motos, componentes y equipamiento.",
    icon: Gauge,
  },
  {
    number: "02",
    title: "Selected Products",
    description:
      "Una propuesta enfocada en productos y soluciones pensadas para rendimiento, confiabilidad y experiencia de conducción.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Technical Support",
    description:
      "Orientación para encontrar el producto adecuado según la moto, el uso y las necesidades de cada motociclista.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Direct Attention",
    description:
      "Contacto directo para consultar disponibilidad, compatibilidad, alternativas y soluciones específicas.",
    icon: MessageCircle,
  },
];

export default function PerformanceValue() {
  return (
    <Section size="lg" className="border-y border-white/[0.06]">
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <p className="text-xs uppercase tracking-[0.45em] text-primary">
            Why RG1 Performance
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
  From the
  <br />
  track to
  <br />
  <span className="text-primary">the street.</span>
</h2>

          <p className="mt-9 max-w-md text-lg leading-8 text-white/45">
            La experiencia en competición forma parte de una manera de entender
            las motos: rendimiento, precisión y confianza en cada elección.
          </p>

          {/* Decorative line */}

          <div className="mt-12 flex items-center gap-4">
            <div className="h-[2px] w-16 bg-primary" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">
              RG1 Performance
            </span>
          </div>
        </motion.div>

        {/* Right */}

        <div className="border-t border-white/10">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                className="
                  group
                  relative
                  grid
                  gap-7
                  border-b
                  border-white/10
                  py-10
                  md:grid-cols-[70px_1fr_auto]
                  md:items-start
                  md:py-12
                "
              >
                {/* Number */}

                <span className="text-xs font-semibold tracking-[0.35em] text-white/20">
                  {item.number}
                </span>

                {/* Content */}

                <div>
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

                  <p className="mt-4 max-w-xl leading-7 text-white/40">
                    {item.description}
                  </p>
                </div>

                {/* Icon */}

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
                    text-white/35
                    transition-all
                    duration-300
                    group-hover:border-primary/40
                    group-hover:text-primary
                  "
                >
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                {/* Hover accent */}

                <div className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}