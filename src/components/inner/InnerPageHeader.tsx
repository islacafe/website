"use client";

import { SiteImage } from "@/components/ui/SiteImage";
import { useHeaderParallax } from "@/hooks/useHeaderParallax";

type InnerPageHeaderProps = {
  number: string;
  label: string;
  titleBefore: string;
  titleEmphasis: string;
  titleAfter?: string;
  intro: string;
  chips: string[];
  bgImage: string;
  parallax?: boolean;
  bgOpacity?: string;
};

export function InnerPageHeader({
  number,
  label,
  titleBefore,
  titleEmphasis,
  titleAfter = "",
  intro,
  chips,
  bgImage,
  parallax = true,
  bgOpacity = "opacity-20",
}: InnerPageHeaderProps) {
  useHeaderParallax(parallax);

  return (
    <header className="relative overflow-hidden bg-forest text-cream-light">
      <div
        data-hdr-bg
        className="absolute inset-0 will-change-transform"
        aria-hidden
      >
        <SiteImage
          src={bgImage}
          alt=""
          fill
          priority
          className={`object-cover saturate-[0.9] ${bgOpacity}`}
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-[rgba(14,36,24,0.66)] to-[rgba(14,36,24,0.92)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)] pt-[clamp(118px,15vw,168px)] pb-[clamp(70px,9vw,100px)]">
        <div className="mb-[18px] flex items-baseline gap-[18px]">
          <span className="font-mono text-[13px] tracking-[0.18em] text-gold-pale">
            {number}
          </span>
          <span className="text-xs font-extrabold tracking-[0.32em] text-gold-muted uppercase">
            {label}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-gold-dark to-transparent" />
        </div>

        <h1 className="max-w-[18ch] font-serif text-[clamp(44px,6.6vw,92px)] leading-[1.04] font-semibold text-balance">
          {titleBefore}{" "}
          <em className="text-gold-light italic">{titleEmphasis}</em>
          {titleAfter}
        </h1>

        <p className="mt-6 max-w-[56ch] text-[clamp(16px,1.7vw,19px)] leading-[1.65] text-cream-light/78">
          {intro}
        </p>

        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[12px] tracking-[0.12em] text-cream-light/60 uppercase">
          {chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
      </div>
    </header>
  );
}
