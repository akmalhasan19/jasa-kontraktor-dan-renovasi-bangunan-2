"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface GradientTextProps {
    className?: string;
    text: string;
    as?: React.ElementType; // allow 'h2', 'span', 'p' etc
    delay?: number;
    duration?: number;
}

export function GradientText({
    className,
    text,
    as: Component = "span",
    delay = 0,
    duration = 1.5
}: GradientTextProps) {
    const textRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let ctx = gsap.context(() => {
            // Apply GSAP animation ONLY on desktop screens (>= 768px)
            let mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                if (textRef.current) {
                    // Set the initial hidden mask state using Webkit variables 
                    // (shifting the mask out of view to the right)
                    gsap.set(textRef.current, {
                        opacity: 1, // ensure element itself is visible
                        WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 65%)",
                        WebkitMaskSize: "300% 100%",
                        WebkitMaskPosition: "100% 0%"
                    });

                    // Create the ScrollTrigger to animate the mask right-to-left
                    ScrollTrigger.create({
                        trigger: textRef.current,
                        start: "top 90%", // Trigger when element hits bottom 10% of window
                        animation: gsap.to(textRef.current, {
                            WebkitMaskPosition: "0% 0%",
                            duration: duration,
                            ease: "power2.out",
                            delay: delay
                        })
                    });
                }
            });

            return () => mm.revert();
        });

        return () => ctx.revert();
    }, [delay, duration]);

    return (
        <Component
            ref={textRef}
            className={cn(className, "opacity-0 md:opacity-100")}
        >
            {text}
        </Component>
    );
}
