"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  const [videoReady, setVideoReady] = useState(false);
  const isHero = variant === "hero";

  const playVideo = useCallback(async () => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    try {
      video.muted = true;
      await video.play();
      setVideoReady(true);
    } catch {
      setVideoReady(false);
    }
  }, [reducedMotion]);

  useEffect(() => {
    if (isHero) return;

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "120px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [isHero]);

  useEffect(() => {
    if (!inView || reducedMotion) {
      videoRef.current?.pause();
      if (reducedMotion) setVideoReady(false);
      return;
    }

    void playVideo();
  }, [inView, reducedMotion, playVideo]);

  const showPoster = reducedMotion || !videoReady;

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
        className={`object-cover transition-opacity duration-500 ${isHero ? "object-[center_42%]" : "object-center"} ${showPoster ? "opacity-100" : "opacity-0"}`}
      />

      {!reducedMotion && (
        <video
          ref={videoRef}
          className={`absolute inset-0 z-[1] h-full w-full object-cover ${isHero ? "object-[center_42%]" : "object-center"} ${videoReady ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
          muted
          loop
          playsInline
          autoPlay={isHero}
          preload={isHero ? "auto" : inView ? "auto" : "none"}
          poster={CAFE_VIDEO_POSTER}
          aria-hidden="true"
          onLoadedData={() => {
            void playVideo();
          }}
          onCanPlay={() => {
            void playVideo();
          }}
        >
          <source src={CAFE_VIDEO} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
