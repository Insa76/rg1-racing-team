import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";

const ventures = [
  {
    title: "RG1 Performance",
    text: "Entrenamiento y asesoramiento de alto nivel.",
    label: "Conocer más",
    href: "#",
  },
  {
    title: "Academia RG1",
    text: "Formación para pilotos y equipos.",
    label: "Explorar",
    href: "#",
  },
  {
    title: "Consultoría Deportiva",
    text: "Estrategia, rendimiento y desarrollo.",
    label: "Contacto",
    href: "#",
  },
];

export default function Ventures() {
  return (
    <Section id="emprendimientos" size="lg">
      <Heading
        title="Emprendimientos"
        subtitle="Más allá de la competencia"
        description="Proyectos que nacen de la experiencia, la disciplina y el alto rendimiento."
      />

      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
        {ventures.map((venture) => (
          <Card
            key={venture.title}
            className="h-full"
          >
            <div className="flex min-h-[220px] h-full flex-col">
              <h3 className="font-display text-3xl font-bold uppercase leading-none text-white">
                {venture.title}
              </h3>

              <p className="mt-5 leading-7 text-white/50">
                {venture.text}
              </p>

              <div className="mt-auto pt-10">
                <Link
                  href={venture.href}
                  className="
                    group/link
                    inline-flex
                    items-center
                    gap-3
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-white/60
                    transition-colors
                    hover:text-primary
                  "
                >
                  {venture.label}

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  />
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}