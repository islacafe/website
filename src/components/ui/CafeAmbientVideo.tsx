"use client";

import { useEffect, useRef, useState } from "react";
import { SiteImage } from "@/components/ui/SiteImage";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const CAFE_VIDEO = "/videos/footer-bg.mp4";
const CAFE_VIDEO_POSTER = "/images/footer-bg-poster.jpg";

type CafeAmbientVideoProps = {
  className?: string;
  variant?: "section" | "hero";
  id?: string;
};

export function CafeAmbientVideo({
  className = "",
  variant = "section",
  id,
}: CafeAmbientVideoProps) {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(variant === "hero");

  useEffect(() => {
    if (variant === "hero") return;

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "120px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [variant]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion || !inView) {
      video?.pause();
      return;
    }

    video.play().catch(() => {});
  }, [inView, reducedMotion]);

  const showVideo = !reducedMotion && inView;
  const isHero = variant === "hero";

  return (
    <div
      ref={containerRef}
      id={id}
      {...(isHero ? { "data-hero-img": true } : { "data-rv": true })}
      className={`relative overflow-hidden bg-ink-deep ${isHero ? "" : "border border-border"} ${className}`}
    >
      <SiteImage
        src={CAFE_VIDEO_POSTER}
        alt=""
        fill
        className={`object-cover ${isHero ? "object-[center_42%]" : "object-center"}`}
      />

      {showVideo && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover ${isHero ? "object-[center_42%]" : "object-center"}`}
          muted
          loop
          playsInline
          preload={isHero ? "auto" : "none"}
          poster={CAFE_VIDEO_POSTER}
          aria-hidden="true"
        >
          <source src={CAFE_VIDEO} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
