import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";

export default function Activities() {
  return (
    <Section id="actividades" variant="dark">
      <Heading
        title="Actividades"
        subtitle="Dentro y fuera de la pista"
        description="Competencias, eventos y participaciones vinculadas al alto rendimiento."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <Card
          title="Temporada Competitiva"
          text="Participación en campeonatos oficiales."
        />
        <Card
          title="Eventos & Exhibiciones"
          text="Presencia en eventos deportivos y comerciales."
        />
        <Card
          title="Entrenamientos"
          text="Preparación constante con foco en resultados."
        />
      </div>
    </Section>
  );
}
