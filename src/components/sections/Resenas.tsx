"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import {
  formatStarRating,
  GOOGLE_REVIEW_URL,
  googleReviews,
  hasGoogleReviewLink,
} from "@/lib/google-reviews";
import { reviewAvatarColors } from "@/lib/images";

const CAROUSEL_INTERVAL_MS = 5000;

export function Resenas() {
  const t = useTranslations("resenas");
  const { reviews, rating, reviewCount } = googleReviews;
  const reducedMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const reviewUrl = GOOGLE_REVIEW_URL;

  useEffect(() => {
    if (reducedMotion || reviews.length <= 1) {
      return;
    }

    const track = trackRef.current;
    if (!track) return;

    let paused = false;

    const scrollNext = () => {
      if (paused) return;

      const card = track.querySelector("article");
      if (!card) return;

      const step = card.getBoundingClientRect().width + 18;
      const maxScroll = track.scrollWidth - track.clientWidth;

      if (maxScroll <= 0) return;

      if (track.scrollLeft >= maxScroll - 4) {
        track.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      track.scrollBy({ left: step, behavior: "smooth" });
    };

    const timer = setInterval(scrollNext, CAROUSEL_INTERVAL_MS);
    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);
    track.addEventListener("focusin", pause);
    track.addEventListener("focusout", resume);

    return () => {
      clearInterval(timer);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
      track.removeEventListener("focusin", pause);
      track.removeEventListener("focusout", resume);
    };
  }, [reviews.length, reducedMotion]);

  const scrollReviews = (direction: "prev" | "next") => {
    const track = trackRef.current;
    const card = track?.querySelector("article");
    if (!track || !card) return;

    const step = card.getBoundingClientRect().width + 18;
    track.scrollBy({ left: direction === "next" ? step : -step, behavior: "smooth" });
  };

  const stars = formatStarRating(rating);

  const leaveReviewButtonClass =
    "inline-flex items-center justify-center rounded-full border border-cream-light/22 px-4 py-2.5 text-[12px] font-bold tracking-[0.1em] text-cream-light uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-light hover:text-gold-light";

  return (
    <section id="resenas" className="bg-ink-warm py-[clamp(90px,11vw,150px)] text-cream-light">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
        <SectionHeader number={t("number")} label={t("label")} centered dark />

        <div className="mt-[40px]">
          <div
            data-rv
            className="mb-[26px] flex flex-wrap items-center justify-between gap-5"
          >
            <div className="flex flex-wrap items-center gap-4">
              <div className="grid h-9 w-9 flex-none place-items-center rounded-full bg-cream-light font-sans font-extrabold text-ink">
                G
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <strong className="font-serif text-[30px] leading-none font-bold tabular-nums">
                    {rating > 0 ? rating.toFixed(1) : "—"}
                  </strong>
                  <div className="text-[15px] tracking-[2px] text-gold-light">{stars}</div>
                </div>
                <span className="mt-0.5 block text-[13px] text-cream-light/60">
                  {t("googleReviewCount", { count: reviewCount })}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              {hasGoogleReviewLink && (
                <a
                  href={reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("leaveReviewAria")}
                  className={leaveReviewButtonClass}
                >
                  {t("leaveReviewCta")}
                </a>
              )}
              <button
                type="button"
                data-grev-prev
                onClick={() => scrollReviews("prev")}
                className="h-[46px] w-[46px] rounded-full border border-cream-light/22 bg-transparent text-[17px] text-cream-light transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-light hover:text-gold-light"
                aria-label={t("previousReviews")}
              >
                ‹
              </button>
              <button
                type="button"
                data-grev-next
                onClick={() => scrollReviews("next")}
                className="h-[46px] w-[46px] rounded-full border border-cream-light/22 bg-transparent text-[17px] text-cream-light transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-light hover:text-gold-light"
                aria-label={t("nextReviews")}
              >
                ›
              </button>
            </div>
          </div>

          {reviews.length > 0 && (
            <div
              ref={trackRef}
              data-grev-track
              className="scrollbar-none flex gap-[18px] overflow-x-auto scroll-smooth px-1 pt-1 pb-4 [scroll-snap-type:x_mandatory]"
            >
              {reviews.map((review, index) => (
                <article
                  key={review.id}
                  className="flex w-[85vw] flex-none snap-start flex-col gap-3.5 border border-cream-light/12 bg-cream-light/5 p-[26px] sm:w-[calc(50%-9px)]"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`grid h-[42px] w-[42px] place-items-center rounded-full font-bold text-cream-light ${reviewAvatarColors[index % reviewAvatarColors.length]}`}
                    >
                      {review.initial}
                    </div>
                    <div className="min-w-0 flex-1">
                      <strong className="block text-[14.5px]">{review.name}</strong>
                      <span className="text-xs text-cream-light/55">{review.time}</span>
                    </div>
                    <div className="text-[13px] text-gold-light">
                      {formatStarRating(review.rating)}
                    </div>
                  </div>
                  <p className="text-[14.5px] leading-[1.65] text-pretty text-cream-light/78">
                    {review.text}
                  </p>
                </article>
              ))}
            </div>
          )}

          {hasGoogleReviewLink && (
            <div data-rv className="mt-8 flex justify-center sm:hidden">
              <a
                href={reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("leaveReviewAria")}
                className={`${leaveReviewButtonClass} px-6 py-3.5 text-[13px] tracking-[0.08em]`}
              >
                {t("leaveReviewCta")}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
