import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { sponsors } from "@/content/sponsors";

export default function Sponsors() {
  const activeSponsors = sponsors.filter(
    (s) => s.active !== false
  );

  return (
    <Section id="sponsors" variant="neutral">
      <Heading
        title="Sponsors"
        subtitle="Aliados estratégicos"
        description="Marcas que acompañan un proyecto de alto rendimiento."
      />

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {activeSponsors.map((sponsor) => (
          <a
            key={sponsor.name}
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="max-h-16 mx-auto object-contain"
            />
          </a>
        ))}
      </div>
    </Section>
  );
}
