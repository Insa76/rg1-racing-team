"use client";

import Section from "@/components/ui/Section";
import ExperienceCard from "./ExperienceCard";

const modules = [
  {
    title: "Racing",
    description:
      "El corazón deportivo de RG1. Temporadas, resultados, calendario, la BMW M1000RR y la historia del equipo.",
    image: "/images/experience/racing.jpg",
    href: "/racing",
    large: true,
  },
  {
    title: "Media",
    description:
      "Cobertura visual, videos, prensa y contenido exclusivo de cada fin de semana de competencia.",
    image: "/images/experience/media.jpg",
    href: "/media",
  },
  {
    title: "Partners",
    description:
      "Conectamos marcas con un proyecto de alto rendimiento dentro del motociclismo profesional.",
    image: "/images/experience/partners.jpg",
    href: "/partners",
  },
  {
    title: "Performance",
    description:
      "Motos, repuestos, accesorios, lubricantes y equipamiento para quienes viven el motociclismo dentro y fuera de la pista.",
    image: "/images/experience/store.jpg",
    href: "/store",
    large: true,
  },
];

export default function ExperienceGateway() {
  return (
    <Section size="lg">
      <div className="mx-auto mb-20 max-w-3xl text-center md:mb-24">
        <p className="mb-5 text-xs uppercase tracking-[0.45em] text-primary">
          OUR ECOSYSTEM
        </p>

        <h2
  className="
    font-display
    text-6xl
    font-bold
    uppercase
    leading-[0.9]
    tracking-[-0.03em]
    text-white
    md:text-8xl
  "
>
  Discover RG1
</h2>

        <p className="mt-8 text-lg leading-8 text-neutral-400 md:text-xl md:leading-9">
          Competición, performance, contenido y alianzas estratégicas forman
          parte de un mismo ecosistema conectado por la cultura del
          motociclismo.
        </p>
      </div>

      <div className="grid gap-8">
        <ExperienceCard {...modules[0]} />

        <div className="grid gap-8 lg:grid-cols-2">
          <ExperienceCard {...modules[1]} />
          <ExperienceCard {...modules[2]} />
        </div>

        <ExperienceCard {...modules[3]} />
      </div>
    </Section>
  );
}