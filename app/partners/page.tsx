import PartnersHero from "@/components/partners/PartnersHero";
import PartnershipValue from "@/components/partners/PartnershipValue";
import PartnerBrands from "@/components/partners/PartnerBrands";
import PartnershipOpportunities from "@/components/partners/PartnershipOpportunities";
import PartnersCTA from "@/components/partners/PartnersCTA";

export const metadata = {
  title: "Partners",
  description:
    "Strategic partnerships with RG1 Racing Team. Motorsport, performance, visibility and brand experiences.",
};

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />

      <PartnershipValue />

      <PartnerBrands />

      <PartnershipOpportunities />

      <PartnersCTA />
    </>
  );
}