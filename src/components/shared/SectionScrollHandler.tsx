"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

/**
 * Handles cross-page section scrolling.
 * When navigating from /contact or /book to /?scrollTo=<sectionId>,
 * this component waits for the home page to mount, then smoothly
 * scrolls to the target section.
 */
export function SectionScrollHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (!scrollTo) return;

    // Clean up the URL immediately (no scroll reset)
    router.replace("/", { scroll: false });

    // Allow GSAP animations and section renders to initialise before scrolling
    const timer = setTimeout(() => {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [searchParams, router]);

  return null;
}
