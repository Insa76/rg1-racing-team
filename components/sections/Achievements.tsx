import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

export default function Achievements() {
  return (
    <Section id="logros" size="lg">
      <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <Reveal>
          <Heading
            title="Logros"
            subtitle="Leyenda en pista"
            description="Resultados construidos temporada tras temporada en la élite del motociclismo de velocidad."
          />
        </Reveal>

        <div className="space-y-10">
          <Reveal delay={0.1}>
            <Card
              number="01"
              title="Títulos"
              text="Quíntuple Campeón Argentino 2004, 2005, 2011, 2016 y 2021. Tricampeón Brasileño 2023, 2024 y 2025."
            />
          </Reveal>

          <Reveal delay={0.2}>
            <Card
              number="02"
              title="Velocidad"
              text="Dominio absoluto en BMW 1000cc."
            />
          </Reveal>

          <Reveal delay={0.3}>
            <Card
              number="03"
              title="Pasión"
              text="Mentalidad competitiva y compromiso total."
            />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}