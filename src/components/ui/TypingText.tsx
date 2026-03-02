"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { cn } from "@/lib/utils"; // Assuming cn utility is here

interface TypingTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
}

export function TypingText({ text, className, delay = 0, duration = 1.5 }: TypingTextProps) {
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        const ctx = gsap.context(() => {
            let mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                if (!textRef.current) return;

                // Start with empty text on desktop
                textRef.current.innerHTML = "";

                ScrollTrigger.create({
                    trigger: textRef.current,
                    start: "top 85%",
                    animation: gsap.to(textRef.current, {
                        text: {
                            value: text,
                            delimiter: ""
                        },
                        duration: duration,
                        delay: delay,
                        ease: "none"
                    })
                });
            });

            // Native behavior for mobile (just show text)
            mm.add("(max-width: 767px)", () => {
                if (!textRef.current) return;
                textRef.current.innerText = text;
            });

            return () => mm.revert();
        }, textRef);

        return () => ctx.revert();
    }, [text, delay, duration]);

    // Render with initial text so server-side rendering has content, 
    // it will be cleared by GSAP on mount for desktop users.
    return (
        <p ref={textRef} className={cn(className)}>
            {text}
        </p>
    );
}
