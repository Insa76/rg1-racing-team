import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

export default function Achievements() {
  return (
    <Section id="logros" variant="dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <Reveal>
        <Heading
          title="Logros"
          subtitle="Leyenda en pista"
          description="Resultados construidos temporada tras temporada en la élite del motociclismo de velocidad."
        />
        </Reveal>

        <div className="space-y-10">
          <Reveal delay={0.1}>
    <Card number="01" title="Títulos" text="Quintuple Campeón Argentino 004,2005,2011,2016,2021.TriCampeón Brasilero 2025/2024/2023." />
  </Reveal>

  <Reveal delay={0.2}>
    <Card number="02" title="Velocidad" text="Dominio absoluto en BMW 1000cc." />
  </Reveal>

  <Reveal delay={0.3}>
    <Card number="03" title="Pasión" text="Mentalidad competitiva y compromiso total." />
  </Reveal>
        </div>
      </div>
    </Section>
  );
}
