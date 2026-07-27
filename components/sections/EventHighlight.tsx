"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { NextRaceData } from "@/lib/types/racing";

interface Props {
  data: NextRaceData;
}

export default function EventHighlight({ data }: Props) {
  return (
    <Section id="next-race">
      <SectionTitle
        eyebrow="Next Race"
        title={data.circuit}
        description={data.championship}
      />

      <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">
        <Image
          src={data.image}
          alt={data.circuit}
          width={700}
          height={500}
          className="rounded-3xl"
        />

        <div>
          <div className="space-y-6">
            <div>
              <p className="text-muted">Circuit</p>

              <h3 className="text-3xl font-bold text-secondary">
                {data.circuit}
              </h3>
            </div>

            <div>
              <p className="text-muted">Country</p>

              <h3 className="text-3xl font-bold text-secondary">
                {data.country}
              </h3>
            </div>

            <div>
              <p className="text-muted">Date</p>

              <h3 className="text-3xl font-bold text-secondary">
                {data.date}
              </h3>
            </div>
          </div>

          <div className="mt-10">
            <Button
              href={data.cta.href}
              variant="primary"
            >
              {data.cta.label}
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}