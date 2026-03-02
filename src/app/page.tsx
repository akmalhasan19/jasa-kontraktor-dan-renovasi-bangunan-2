import { Suspense } from "react";
import { TheAtelierHero } from "@/components/sections/TheAtelierHero";
import { TheCraftServices } from "@/components/sections/TheCraftServices";
import { TheGalleryPortfolio } from "@/components/sections/TheGalleryPortfolio";
import { TheBlueprintProcess } from "@/components/sections/TheBlueprintProcess";
import { TestimonialsCta } from "@/components/sections/TestimonialsCta";
import { SectionScrollHandler } from "@/components/shared/SectionScrollHandler";

export default function HomePage() {
  return (
    <>
      {/* Handles /?scrollTo=<sectionId> — navigating from /contact or /book */}
      <Suspense fallback={null}>
        <SectionScrollHandler />
      </Suspense>
      <TheAtelierHero />
      <TheCraftServices />
      <TheGalleryPortfolio />
      <TheBlueprintProcess />
      <TestimonialsCta />
    </>
  );
}
