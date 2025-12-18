import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <Section id="contacto" variant="dark">
      <Heading
        title="Contacto"
        subtitle="Trabajemos juntos"
        description="Sponsors, prensa, eventos o propuestas comerciales."
        align="center"
      />

      <div className="mt-14 max-w-xl mx-auto text-center">
        <Button size="lg">Enviar Mensaje</Button>
      </div>
    </Section>
  );
}
