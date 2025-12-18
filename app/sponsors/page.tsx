import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import { sponsors } from "@/content/sponsors";

export const metadata = {
  title: "Sponsors",
  description:
    "Conocé las oportunidades de sponsorship con RG1 Racing Team, proyecto profesional de motociclismo de velocidad.",
};

export default function SponsorsPage() {
  const activeSponsors = sponsors.filter((s) => s.active !== false);

  const mainSponsors = activeSponsors.filter((s) => s.tier === "MAIN");
  const techSponsors = activeSponsors.filter((s) => s.tier === "TECH");
  const partners = activeSponsors.filter((s) => s.tier === "PARTNER");

  return (
    <>
      {/* HERO */}
      <Section variant="dark">
        <Heading
          title="Sponsors"
          subtitle="Alianzas de alto rendimiento"
          description="No vendemos espacio. Construimos asociaciones estratégicas con marcas que buscan visibilidad, posicionamiento y excelencia."
        />
        <div className="mt-10">
          <Button size="lg" href="#contacto">
            Contacto Comercial
          </Button>
        </div>
      </Section>

      {/* WHY RG1 */}
      <Section variant="neutral">
        <Heading
          title="¿Por qué RG1 Racing Team?"
          description="Un proyecto deportivo profesional, competitivo y con visión a largo plazo."
        />
        <ul className="mt-8 space-y-3 text-neutral-700">
          <li>• Múltiple campeón en Brasil</li>
          <li>• Categoría BMW 1000cc</li>
          <li>• Imagen premium y profesional</li>
          <li>• Visibilidad en pista, eventos y medios</li>
          <li>• Enfoque en relaciones duraderas</li>
        </ul>
      </Section>

      {/* SPONSORS */}
      {activeSponsors.length > 0 && (
        <Section variant="neutral">
          <Heading
            title="Marcas que acompañan el proyecto"
            description="Aliados estratégicos que comparten una visión de alto rendimiento."
          />

          {/* MAIN */}
          {mainSponsors.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">
                Sponsor Principal
              </h3>
              <div className="flex flex-wrap gap-10 items-center">
                {mainSponsors.map((sponsor) => (
                  <a
                    key={sponsor.name}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-20 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* TECH */}
          {techSponsors.length > 0 && (
            <div className="mt-16">
              <h3 className="text-lg font-semibold mb-6">
                Sponsors Técnicos
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {techSponsors.map((sponsor) => (
                  <a
                    key={sponsor.name}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-14 mx-auto object-contain opacity-80 hover:opacity-100 transition"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* PARTNERS */}
          {partners.length > 0 && (
            <div className="mt-16">
              <h3 className="text-lg font-semibold mb-6">
                Partners Oficiales
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
                {partners.map((sponsor) => (
                  <a
                    key={sponsor.name}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-12 mx-auto object-contain opacity-70 hover:opacity-100 transition"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}
        </Section>
      )}

      {/* CTA */}
      <Section variant="dark">
        <Heading
          title="Construyamos una alianza"
          description="Hablemos sobre cómo tu marca puede formar parte del proyecto RG1 Racing Team."
          align="center"
        />
        <div className="mt-10 text-center">
          <Button size="lg" href="#contacto">
            Contacto Comercial
          </Button>
        </div>
      </Section>
    </>
  );
}
