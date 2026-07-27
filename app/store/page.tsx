import StoreHero from "@/components/store/StoreHero";
import StoreCategories from "@/components/store/StoreCategories";
import FeaturedProducts from "@/components/store/FeaturedProducts";
import PerformanceValue from "@/components/store/PerformanceValue";
import PerformanceCTA from "@/components/store/PerformanceCTA";

export default function StorePage() {
  return (
    <>
      <StoreHero />

      <StoreCategories />

      <FeaturedProducts />

      <PerformanceValue />

      <PerformanceCTA />
    </>
  );
}