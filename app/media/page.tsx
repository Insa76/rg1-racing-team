import MediaHero from "@/components/media/MediaHero";
import FeaturedMedia from "@/components/media/FeaturedMedia";
import MediaCategories from "@/components/media/MediaCategories";
import MediaGrid from "@/components/media/MediaGrid";
import MediaCTA from "@/components/media/MediaCTA";

export const metadata = {
  title: "Media",
  description:
    "Videos, fotografías, race weekends y contenido detrás de escena de RG1 Racing Team.",
};

export default function MediaPage() {
  return (
    <>
      <MediaHero />

      <FeaturedMedia />

      <MediaCategories />

      <MediaGrid />

      <MediaCTA />
    </>
  );
}