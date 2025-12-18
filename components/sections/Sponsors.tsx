"use client";

import { useEffect, useState } from "react";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

interface Sponsor {
  id: number;
  name: string;
  logoUrl: string;
  website?: string;
  tier: "MAIN" | "TECH" | "PARTNER";
}

export default function Sponsors() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    fetch("/api/sponsors")
      .then((res) => res.json())
      .then(setSponsors);
  }, []);

  return (
    <Section id="sponsors" variant="neutral">
      <Heading
        title="Sponsors"
        subtitle="Aliados estratégicos"
        description="Marcas que acompañan un proyecto de alto rendimiento."
      />

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.id}
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-80 hover:opacity-100 transition"
          >
            <img
              src={sponsor.logoUrl}
              alt={sponsor.name}
              className="max-h-16 mx-auto object-contain"
            />
          </a>
        ))}
      </div>
    </Section>
  );
}
