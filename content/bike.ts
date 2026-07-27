// content/bike.ts
import { BikeData } from "@/lib/types/racing";

export const bike: BikeData = {
  name: "BMW M1000RR",

  subtitle: "Built for Victory",

  description:
    "La BMW M1000RR representa el máximo nivel de ingeniería de competición. Diseñada para ofrecer el mejor rendimiento en pista, combina potencia, aerodinámica y electrónica de última generación.",

  image: "/images/bike/bmw-m1000rr.jpeg",

  specs: [
    {
      label: "Engine",
      value: "999 cc",
    },
    {
      label: "Power",
      value: "212 HP",
    },
    {
      label: "Top Speed",
      value: "306 km/h",
    },
    {
      label: "Weight",
      value: "192 kg",
    },
    
  ],
};