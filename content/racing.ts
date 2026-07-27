// content/racing.ts

import { RacingContent } from "@/lib/types/racing";

export const racing: RacingContent = {
  hero: {
  eyebrow: "Brazilian Superbike Championship",

  firstName: "RAMIRO",

  lastName: "GANDOLA",

  tagline: "Professional Superbike Racing Driver",

  description:
    "Representando a Argentina junto a BMW Motorrad en el campeonato más competitivo de Sudamérica.",

  heroImage: "/images/hero/hero-bg1.png",

  primaryAction: {
    label: "Season 2026",
    href: "/racing",
  },

  secondaryAction: {
    label: "Watch Highlights",
    href: "#media",
  },

  stats: [
    {
      value: "08",
      label: "Victories",
      icon: "trophy",
    },
    {
      value: "23",
      label: "Podiums",
      icon: "flag",
    },
    {
      value: "#7",
      label: "Racing Number",
      icon: "calendar",
    },
    {
      value: "BMW",
      label: "M1000RR",
      icon: "gauge",
    },
  ],
},

  nextRace: {
    circuit: "Interlagos",

    country: "Brazil",

    date: "15 August 2026",

    championship: "Brazilian Superbike",

    image: "/images/circuits/interlagos.jpeg",

    cta: {
      label: "View Calendar",
      href: "/racing",
    },
  },
};