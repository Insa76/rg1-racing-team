"use client";

import { motion } from "framer-motion";
import {
  Handshake,
  Bike,
  Camera,
  MessageCircle,
  ArrowDownRight,
} from "lucide-react";

import Section from "@/components/ui/Section";

const contactPaths = [
  {
    number: "01",
    title: "Partnerships",
    label: "Brands & Business",
    description:
      "Alianzas estratégicas, sponsorships, activaciones y oportunidades comerciales junto a RG1.",
    icon: Handshake,
    value: "partnership",
  },
  {
    number: "02",
    title: "Performance",
    label: "Motorcycles & Products",
    description:
      "Consultas sobre motos, repuestos, accesorios, lubricantes y productos específicos.",
    icon: Bike,
    value: "performance",
  },
  {
    number: "03",
    title: "Media & Press",
    label: "Content & Communication",
    description:
      "Prensa, entrevistas, producciones audiovisuales, cobertura y colaboraciones de contenido.",
    icon: Camera,
    value: "media",
  },
  {
    number: "04",
    title: "General",
    label: "Talk to RG1",
    description:
      "Para cualquier otra consulta, propuesta o contacto relacionado con RG1 Racing Team.",
    icon: MessageCircle,
    value: "general",
  },
];

export default function ContactPaths() {
  const selectReason = (value: string) => {
    const url = new URL(window.location.href);

    url.searchParams.set("reason", value);

    window.history.replaceState({}, "", url);

    window.dispatchEvent(new Event("contact-reason-change"));

    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Section size="lg">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-primary">
            Get in Touch
          </p>

          <h2 className="mt-7 text-4xl font-black uppercase leading-[0.95] text-white md:text-6xl">
            What can
            <br />
            we build
            <br />
            <span className="text-primary">together?</span>
          </h2>
        </div>

        <div className="flex items-end">
          <p className="max-w-2xl text-lg leading-8 text-white/45">
            Seleccioná el área relacionada con tu consulta. Así podemos dirigir
            el contacto al contexto adecuado desde el primer mensaje.
          </p>
        </div>
      </div>

      <div className="mt-24 grid border-l border-t border-white/10 md:grid-cols-2">
        {contactPaths.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.button
              key={item.value}
              type="button"
              onClick={() => selectReason(item.value)}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
              className="
                group
                relative
                min-h-[350px]
                border-b
                border-r
                border-white/10
                p-8
                text-left
                transition-colors
                duration-500
                hover:bg-white/[0.025]
                md:p-12
              "
            >
              <span className="absolute right-8 top-8 text-xs tracking-[0.35em] text-white/15">
                {item.number}
              </span>

              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/5">
                <Icon size={22} strokeWidth={1.5} />
              </div>

              <div className="absolute bottom-10 left-8 right-8 md:bottom-12 md:left-12 md:right-12">
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary">
                  {item.label}
                </p>

                <div className="mt-4 flex items-end justify-between gap-6">
                  <h3 className="text-3xl font-black uppercase text-white md:text-4xl">
                    {item.title}
                  </h3>

                  <ArrowDownRight
                    size={20}
                    className="
                      shrink-0
                      text-white/25
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:translate-y-1
                      group-hover:text-primary
                    "
                  />
                </div>

                <p className="mt-5 max-w-lg leading-7 text-white/40">
                  {item.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </motion.button>
          );
        })}
      </div>
    </Section>
  );
}