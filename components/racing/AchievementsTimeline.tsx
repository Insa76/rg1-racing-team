"use client";

import { motion } from "framer-motion";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

interface Achievement {
  year: string;
  title: string;
  description: string;
}

interface Props {
  data: Achievement[];
}

export default function AchievementsTimeline({ data }: Props) {
  return (
    <Section size="lg">
      <SectionTitle
        eyebrow="Career"
        title="Achievements"
        description="A journey built through dedication, performance and constant evolution on the track."
        display
      />

      <div className="relative mx-auto mt-20 max-w-6xl">
        {/* Línea central desktop */}
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-primary via-white/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12 md:space-y-20">
          {data.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={`${item.year}-${item.title}`}
                initial={{
                  opacity: 0,
                  x: isLeft ? -35 : 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                }}
                className="relative grid md:grid-cols-2"
              >
                {/* Punto timeline */}
                <div className="absolute left-5 top-8 z-20 -translate-x-1/2 md:left-1/2">
                  <div className="relative flex h-5 w-5 items-center justify-center rounded-full border border-primary bg-[#050505]">
                    <div className="h-2 w-2 rounded-full bg-primary" />

                    <div className="absolute h-10 w-10 rounded-full bg-primary/10 blur-md" />
                  </div>
                </div>

                {/* Achievement */}
                <div
                  className={
                    isLeft
                      ? "pl-14 md:col-start-1 md:pr-16 md:pl-0"
                      : "pl-14 md:col-start-2 md:pl-16"
                  }
                >
                  <div
                    className={
                      isLeft
                        ? "md:text-right"
                        : "md:text-left"
                    }
                  >
                    {/* Año */}
                    <span className="text-5xl font-black leading-none text-primary md:text-6xl">
                      {item.year}
                    </span>

                    {/* Línea */}
                    <div
                      className={
                        isLeft
                          ? "mt-6 h-px w-16 bg-primary/50 md:ml-auto"
                          : "mt-6 h-px w-16 bg-primary/50"
                      }
                    />

                    {/* Título */}
                    <h3 className="mt-6 text-2xl font-black uppercase leading-tight text-white md:text-3xl">
                      {item.title}
                    </h3>

                    {/* Descripción */}
                    <p
                      className={
                        isLeft
                          ? "mt-5 max-w-lg leading-7 text-white/50 md:ml-auto"
                          : "mt-5 max-w-lg leading-7 text-white/50"
                      }
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Número decorativo */}
                <div
                  className={
                    isLeft
                      ? "pointer-events-none absolute right-8 top-0 hidden text-[9rem] font-black leading-none text-white/[0.018] md:block"
                      : "pointer-events-none absolute left-8 top-0 hidden text-[9rem] font-black leading-none text-white/[0.018] md:block"
                  }
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}