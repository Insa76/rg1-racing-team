import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";

export default function Ventures() {
  return (
    <Section id="emprendimientos" variant="neutral">
      <Heading
        title="Emprendimientos"
        subtitle="Más allá de la competencia"
        description="Proyectos que nacen de la experiencia, la disciplina y el alto rendimiento."
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <Card
          title="RG1 Performance"
          text="Entrenamiento y asesoramiento de alto nivel."
          cta={{ label: "Conocer más", href: "#" }}
          variant="outlined"
        />
        <Card
          title="Academia RG1"
          text="Formación para pilotos y equipos."
          cta={{ label: "Explorar", href: "#" }}
          variant="outlined"
        />
        <Card
          title="Consultoría Deportiva"
          text="Estrategia, rendimiento y desarrollo."
          cta={{ label: "Contacto", href: "#" }}
          variant="outlined"
        />
      </div>
    </Section>
  );
}
