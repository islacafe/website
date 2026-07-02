"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function useParallaxImages(scope = "main") {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    if (!window.matchMedia("(min-width: 768px)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const triggers: ScrollTrigger[] = [];
    const root = document.querySelector(scope) ?? document;

    root.querySelectorAll<HTMLElement>("[data-plx]").forEach((el) => {
      const amt = parseFloat(el.dataset.plx || "0");
      const tween = gsap.fromTo(
        el,
        { yPercent: amt },
        {
          yPercent: -amt,
          ease: "none",
          scrollTrigger: {
            trigger: el.closest("section") ?? el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    });

    return () => triggers.forEach((trigger) => trigger.kill());
  }, [reducedMotion, scope]);
}
