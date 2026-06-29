"use client";

import { useEffect } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function useHeaderParallax(enabled = true) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !enabled) return;

    const bg = document.querySelector<HTMLElement>("[data-hdr-bg]");
    if (!bg) return;

    const onScroll = () => {
      bg.style.transform = `translate3d(0, ${window.scrollY * 0.18}px, 0)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled, reducedMotion]);
}
