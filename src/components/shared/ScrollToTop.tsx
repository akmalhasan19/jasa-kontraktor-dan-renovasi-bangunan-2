"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        // Check if there's a hash in the URL (e.g., /#contact)
        // If there is, let Next.js handle the anchor scrolling.
        // Otherwise, scroll to top on mount (page refresh) and route changes.
        if (!window.location.hash) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant", // Use "instant" to prevent seeing the scroll animation on load
            });
        }
    }, [pathname]);

    return null;
}
