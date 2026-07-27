import { LucideIcon } from "lucide-react";

export interface HeroAction {
  label: string;
  href: string;
}

export type HeroIcon =
  | "trophy"
  | "flag"
  | "calendar"
  | "gauge";

export interface HeroStat {
  value: string;
  label: string;
  icon: HeroIcon;
}

export interface HeroData {
  eyebrow: string;

  firstName: string;

  lastName: string;

  tagline: string;

  description: string;

  heroImage: string;

  primaryAction: HeroAction;

  secondaryAction: HeroAction;

  stats: HeroStat[];
}

export interface NextRaceData {
  circuit: string;
  country: string;
  date: string;
  championship: string;
  image: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface SeasonStat {
  label: string;
  value: string;
}

export interface Race {
  round: number;
  circuit: string;
  country: string;
  status: "finished" | "next" | "upcoming";
}

export interface SeasonData {
  year: number;
  stats: SeasonStat[];
  races: Race[];
}

export interface BikeSpec {
  label: string;
  value: string;
}

export interface BikeData {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  specs: BikeSpec[];
}

export interface RacingContent {
  hero: HeroData;
  nextRace: NextRaceData;
}