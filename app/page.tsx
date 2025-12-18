import Hero from "@/components/sections/Hero";
import Achievements from "@/components/sections/Achievements";
import Sponsors from "@/components/sections/Sponsors";
import Activities from "@/components/sections/Activities";
import Ventures from "@/components/sections/Ventures";
import Contact from "@/components/sections/Contact";
import Gallery from "@/components/sections/Gallery";
import VideoSection from "@/components/sections/VideoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <Achievements />
      <Sponsors />
      <Gallery />
      <Activities />
      <Ventures />
      <Contact />
    </>
  );
}
