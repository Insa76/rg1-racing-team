// content/season.ts

import { SeasonData } from "@/lib/types/racing";

export const season: SeasonData = {
  year: 2026,

  stats: [
    {
      label: "Rounds",
      value: "10",
    },
    {
      label: "Points",
      value: "184",
    },
    {
      label: "Position",
      value: "3°",
    },
    {
      label: "Podiums",
      value: "5",
    },
  ],

  races: [
    {
      round: 1,
      circuit: "Interlagos",
      country: "Brazil",
      status: "finished",
    },
    {
      round: 2,
      circuit: "Goiânia",
      country: "Brazil",
      status: "finished",
    },
    {
      round: 3,
      circuit: "Curitiba",
      country: "Brazil",
      status: "finished",
    },
    {
      round: 4,
      circuit: "Cascavel",
      country: "Brazil",
      status: "next",
    },
    {
      round: 5,
      circuit: "Londrina",
      country: "Brazil",
      status: "upcoming",
    },
    {
      round: 6,
      circuit: "Velocitta",
      country: "Brazil",
      status: "upcoming",
    },
  ],
};