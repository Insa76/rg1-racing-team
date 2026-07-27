"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

interface PartnerLogo {
  name: string;
  image: string;
}

interface PartnerMetric {
  value: string;
  label: string;
}

interface PartnersData {
  title: string;
  description: string;
  logos: PartnerLogo[];
  metrics: PartnerMetric[];
}

interface Props {
  data: PartnersData;
}

export default function PartnersShowcase({ data }: Props) {
  return (
    <Section size="lg">
      <SectionTitle
        eyebrow="Partners"
        title={data.title}
        description={data.description}
        display
      />

      {/* Partner logos */}

      <div className="mt-20 border-y border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {data.logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className="
                group
                relative
                flex
                min-h-[150px]
                items-center
                justify-center
                border-b
                border-white/10
                px-6
                transition-colors
                duration-300
                hover:bg-white/[0.025]
                md:min-h-[180px]
                lg:border-b-0
                lg:border-r
                last:lg:border-r-0
              "
            >
              <Image
                src={logo.image}
                alt={logo.name}
                width={150}
                height={80}
                className="
                  max-h-16
                  w-auto
                  max-w-[130px]
                  object-contain
                  opacity-55
                  grayscale
                  transition-all
                  duration-500
                  group-hover:scale-105
                  group-hover:opacity-100
                  group-hover:grayscale-0
                "
              />

              <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-primary transition-all duration-500 group-hover:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partnership impact */}

      <div className="mt-24">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-primary">
              Partnership Impact
            </p>

            <h3 className="mt-4 text-3xl font-black uppercase text-white md:text-4xl">
              Beyond the Track
            </h3>
          </div>

          <p className="max-w-xl text-sm leading-7 text-white/45 md:text-right">
            Racing creates visibility, content and experiences that connect
            brands with audiences through performance and competition.
          </p>
        </div>

        {/* Metrics */}

        <div className="grid grid-cols-2 border-y border-white/10 lg:grid-cols-4">
          {data.metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="
                relative
                px-4
                py-10
                text-center
                md:py-14
                lg:border-r
                lg:border-white/10
                last:lg:border-r-0
              "
            >
              <div className="text-4xl font-black leading-none text-white md:text-6xl">
                {metric.value}
              </div>

              <p className="mt-4 text-[10px] uppercase tracking-[0.35em] text-white/40 md:text-xs">
                {metric.label}
              </p>

              <div className="absolute left-1/2 top-0 h-px w-8 -translate-x-1/2 bg-primary/70" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}

      <div className="mt-16 flex justify-center">
        <Link
          href="/partners"
          className="
            group
            inline-flex
            items-center
            gap-3
            text-xs
            font-semibold
            uppercase
            tracking-[0.35em]
            text-white/60
            transition-colors
            hover:text-white
          "
        >
          Explore Partnerships

          <ArrowUpRight
            size={17}
            className="text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>
    </Section>
  );
}