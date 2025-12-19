import Heading from "@/components/ui/Heading";
import { sponsors } from "@/content/sponsors";

export default function Sponsors() {
  const activeSponsors = sponsors.filter(
    (s) => s.active !== false
  );

  return (
    <section
      id="sponsors"
      className="relative py-24 overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/sponsors/sponsors.png')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/100" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-black">
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
                className="max-h-20 mx-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
