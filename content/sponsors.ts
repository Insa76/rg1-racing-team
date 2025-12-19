export type SponsorTier = "MAIN" | "TECH" | "PARTNER";

export interface Sponsor {
  name: string;
  logo: string;
  website?: string;
  tier: SponsorTier;
  active?: boolean;
}

export const sponsors: Sponsor[] = [
  {
    name: "Marca Principal",
    logo: "/images/sponsors/loteria.png",
    website: "https://marca-principal.com",
    tier: "MAIN",
    active: true,
  },
  {
    name: "Sponsor Técnico",
    logo: "/images/sponsors/bmw.png",
    website: "https://sponsor-tecnico.com",
    tier: "TECH",
    active: true,
  },
  {
    name: "Partner Oficial",
    logo: "/images/sponsors/casco.avif",
    tier: "PARTNER",
    active: true,
  },
  {
    name: "Partner Oficial",
    logo: "/images/sponsors/motogp.jpg",
    tier: "PARTNER",
    active: true,
  },
];
