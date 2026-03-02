import { TheAtelierHero } from "@/components/sections/TheAtelierHero";
import { TheCraftServices } from "@/components/sections/TheCraftServices";
import { TheGalleryPortfolio } from "@/components/sections/TheGalleryPortfolio";
import { TheBlueprintProcess } from "@/components/sections/TheBlueprintProcess";
import { TestimonialsCta } from "@/components/sections/TestimonialsCta";

export default function HomePage() {
  return (
    <>
      <TheAtelierHero />
      <TheCraftServices />
      <TheGalleryPortfolio />
      <TheBlueprintProcess />
      <TestimonialsCta />
    </>
  );
}
