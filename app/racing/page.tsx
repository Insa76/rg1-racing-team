import LandingHero from "@/components/sections/LandingHero";
import EventHighlight from "@/components/sections/EventHighlight";

import SeasonOverview from "@/components/racing/SeasonOverview";
import BikeSection from "@/components/racing/BikeSection";
import AchievementsTimeline from "@/components/racing/AchievementsTimeline";
import MediaShowcase from "@/components/racing/MediaShowcase";
import PartnersShowcase from "@/components/racing/PartnersShowcase";

import { racing } from "@/content/racing";
import { season } from "@/content/season";
import { bike } from "@/content/bike";
import { achievements } from "@/content/achievements";
import { media } from "@/content/media";
import { partners } from "@/content/partners";



export default function RacingPage() {
  return (
    <>
      <LandingHero data={racing.hero} />

      <EventHighlight data={racing.nextRace} />

      <SeasonOverview data={season} />

      <BikeSection data={bike} />

      <AchievementsTimeline data={achievements} />

      <MediaShowcase data={media} />

      <PartnersShowcase data={partners} />
    </>
  );
}