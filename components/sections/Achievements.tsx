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
            <Card>
              <div className="flex items-start gap-6">
                <span className="text-sm font-semibold tracking-[0.3em] text-primary">
                  01
                </span>

                <div>
                  <h3 className="font-display text-3xl font-bold uppercase text-white">
                    Títulos
                  </h3>

                  <p className="mt-4 leading-7 text-white/50">
                    Quíntuple Campeón Argentino 2004, 2005, 2011, 2016 y 2021.
                    Tricampeón Brasileño 2023, 2024 y 2025.
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.2}>
            <Card>
              <div className="flex items-start gap-6">
                <span className="text-sm font-semibold tracking-[0.3em] text-primary">
                  02
                </span>

                <div>
                  <h3 className="font-display text-3xl font-bold uppercase text-white">
                    Velocidad
                  </h3>

                  <p className="mt-4 leading-7 text-white/50">
                    Dominio absoluto en BMW 1000cc.
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.3}>
            <Card>
              <div className="flex items-start gap-6">
                <span className="text-sm font-semibold tracking-[0.3em] text-primary">
                  03
                </span>

                <div>
                  <h3 className="font-display text-3xl font-bold uppercase text-white">
                    Pasión
                  </h3>

                  <p className="mt-4 leading-7 text-white/50">
                    Mentalidad competitiva y compromiso total.
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}