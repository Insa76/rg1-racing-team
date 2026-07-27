import Hero from "@/components/sections/Hero";
import ExperienceGateway from "@/components/experience/ExperienceGateway";
import SectionDivider from "@/components/ui/SectionDivider";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />

      <SectionDivider />

      <ExperienceGateway />

      <FinalCTA />
    </>
  );
}