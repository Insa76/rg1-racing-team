import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";

export default function Activities() {
  return (
    <Section id="actividades" size="lg">
      <Heading
        title="Actividades"
        subtitle="Dentro y fuera de la pista"
        description="Competencias, eventos y participaciones vinculadas al alto rendimiento."
      />

      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
        <Card>
          <h3 className="font-display text-3xl font-bold uppercase leading-none text-white">
            Temporada Competitiva
          </h3>

          <p className="mt-5 leading-7 text-white/50">
            Participación en campeonatos oficiales.
          </p>
        </Card>

        <Card>
          <h3 className="font-display text-3xl font-bold uppercase leading-none text-white">
            Eventos & Exhibiciones
          </h3>

          <p className="mt-5 leading-7 text-white/50">
            Presencia en eventos deportivos y comerciales.
          </p>
        </Card>

        <Card>
          <h3 className="font-display text-3xl font-bold uppercase leading-none text-white">
            Entrenamientos
          </h3>

          <p className="mt-5 leading-7 text-white/50">
            Preparación constante con foco en resultados.
          </p>
        </Card>
      </div>
    </Section>
  );
}