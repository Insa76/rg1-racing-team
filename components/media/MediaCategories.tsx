"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Play,
  Gauge,
  Eye,
} from "lucide-react";

import Section from "@/components/ui/Section";

const categories = [
  {
    number: "01",
    title: "Race Weekends",
    description:
      "La historia de cada competencia desde la llegada al circuito hasta la bandera a cuadros.",
    icon: Gauge,
  },
  {
    number: "02",
    title: "Onboard",
    description:
      "Velocidad y competición desde la perspectiva más cercana a la pista.",
    icon: Play,
  },
  {
    number: "03",
    title: "Photography",
    description:
      "Momentos, detalles y emociones capturados durante carreras, entrenamientos y eventos.",
    icon: Camera,
  },
  {
    number: "04",
    title: "Behind the Scenes",
    description:
      "Preparación, equipo, viajes y todo lo que sucede cuando las cámaras normalmente no están mirando.",
    icon: Eye,
  },
];

export default function MediaCategories() {
  return (
    <Section size="lg" className="border-y border-white/[0.06]">
      <div>
        <p className="text-xs uppercase tracking-[0.45em] text-primary">
          Explore Content
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
  Inside
  <br />
  <span className="text-primary">RG1.</span>
</h2>
      </div>

      <div className="mt-20 grid border-l border-t border-white/10 md:grid-cols-2">
        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
            <motion.div
              key={category.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
              className="
                group
                relative
                min-h-[330px]
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
              <span className="absolute right-8 top-8 text-xs tracking-[0.35em] text-white/15">
                {category.number}
              </span>

              <Icon
                size={30}
                strokeWidth={1.5}
                className="text-primary"
              />

              <div className="absolute bottom-10 left-8 right-8 md:left-12 md:right-12">
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
  {category.title}
</h3>

                <p className="mt-5 max-w-lg leading-7 text-white/40">
                  {category.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}