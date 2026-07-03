"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { SiteImage } from "@/components/ui/SiteImage";
import { OrderMenu } from "@/components/ui/OrderMenu";
import { Link, usePathname } from "@/i18n/navigation";
import { ISLA_CAFE_PHONE_TEL } from "@/lib/contact";
import { orderPlatforms } from "@/lib/order";
import { siteImages } from "@/lib/images";
import { innerRoutes, navRouteKeys, type InnerRouteKey } from "@/lib/inner-routes";

type NavProps = {
  variant?: "home" | "inner";
  activePage?: InnerRouteKey;
};

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function Nav({ variant = "home", activePage }: NavProps) {
  const t = useTranslations("nav");
  const order = useTranslations("order");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(variant === "inner");
  const [mobileOpen, setMobileOpen] = useState(false);

  const isInner = variant === "inner";
  const showSolidNav = isInner || scrolled;

  useEffect(() => {
    if (isInner) {
      setScrolled(true);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isInner]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navClass = showSolidNav
    ? "h-[66px] border-b border-ink/8 bg-cream/88 shadow-[0_8px_32px_rgba(43,36,29,0.07)] backdrop-blur-[18px] backdrop-saturate-[1.4]"
    : "h-[72px] border-b border-transparent bg-transparent shadow-none max-lg:h-[72px] lg:h-[88px]";

  const mobileDrawerTop = showSolidNav ? "top-[66px]" : "top-[72px] lg:top-[88px]";

  const linkClass = showSolidNav ? "text-ink" : "text-white/85 hover:text-white";

  const langBorder = showSolidNav ? "border-ink/15" : "border-white/35";
  const inactiveLang = showSolidNav ? "text-ink/70" : "text-white/70";

  const callBtnClass = showSolidNav
    ? "border-ink/15 bg-cream/90 text-ink hover:border-gold-dark hover:text-gold-dark"
    : "border-white/35 bg-ink-deep/20 text-white backdrop-blur-sm hover:border-gold-light hover:text-gold-light";

  return (
    <>
      <nav
        id="islaNav"
        className={`fixed inset-x-0 top-0 z-[100] flex items-center justify-between gap-3 px-4 sm:px-[clamp(20px,4vw,48px)] transition-[height,background,box-shadow,border-color] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${navClass}`}
      >
        <Link href="/#top" data-scroll className="relative z-[2] flex shrink-0 items-center">
          <SiteImage
            src={siteImages.logo}
            alt="Isla Café"
            priority
            className={`rounded-full object-cover transition-[width,height] duration-[450ms] ${showSolidNav ? "h-10 w-10 lg:h-11 lg:w-11" : "h-11 w-11 lg:h-[54px] lg:w-[54px]"}`}
          />
        </Link>

        <div className="hidden items-center gap-[30px] lg:flex" data-nav-links>
          {navRouteKeys.map((key) => {
            const href = innerRoutes[key];
            const isActive =
              key === "home" ? pathname === "/" : activePage === key || pathname === href;

            return (
              <Link
                key={key}
                href={href}
                data-navlink
                className={`px-0 py-1.5 text-[13px] tracking-[0.06em] transition-colors duration-300 ${
                  isActive
                    ? "border-b-[1.5px] border-gold-dark pb-1 font-bold text-gold-dark"
                    : `font-semibold ${linkClass} hover:text-gold-dark`
                }`}
              >
                {t(key)}
              </Link>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <div
            className={`hidden overflow-hidden rounded-full border lg:flex ${langBorder}`}
            data-lang
          >
            <Link
              href={pathname}
              locale="es"
              className={`px-[13px] py-[7px] font-sans text-[11px] font-extrabold tracking-[0.1em] transition-colors ${
                locale === "es" ? "bg-ink text-cream" : `bg-transparent ${inactiveLang}`
              }`}
            >
              ES
            </Link>
            <Link
              href={pathname}
              locale="en"
              className={`px-[13px] py-[7px] font-sans text-[11px] font-extrabold tracking-[0.1em] transition-colors ${
                locale === "en" ? "bg-ink text-cream" : `bg-transparent ${inactiveLang}`
              }`}
            >
              EN
            </Link>
          </div>

          <a
            href={ISLA_CAFE_PHONE_TEL}
            aria-label={t("callAria")}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-[border-color,color,transform] duration-300 hover:-translate-y-0.5 ${callBtnClass}`}
          >
            <PhoneIcon className="h-[17px] w-[17px]" />
          </a>

          <OrderMenu variant="nav" scrolled={showSolidNav} />

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className={`flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border lg:hidden ${showSolidNav ? "border-ink/15 bg-cream/90" : "border-white/35 bg-ink-deep/20 backdrop-blur-sm"}`}
          >
            <span
              className={`block h-0.5 w-5 transition-transform ${showSolidNav ? "bg-ink" : "bg-white"} ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 transition-opacity ${showSolidNav ? "bg-ink" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 transition-transform ${showSolidNav ? "bg-ink" : "bg-white"} ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-[90] bg-ink-deep/50 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className={`fixed inset-x-0 ${mobileDrawerTop} z-[95] max-h-[calc(100svh-72px)] overflow-y-auto border-b border-ink/8 bg-cream/98 px-5 py-5 backdrop-blur-xl lg:hidden`}
          >
            <div className="flex flex-col gap-4">
              {navRouteKeys.map((key) => (
                <Link
                  key={key}
                  href={innerRoutes[key]}
                  onClick={() => setMobileOpen(false)}
                  className={`text-[15px] tracking-[0.06em] ${
                    (key === "home" ? pathname === "/" : activePage === key)
                      ? "font-bold text-gold-dark"
                      : "font-semibold text-ink"
                  }`}
                >
                  {t(key)}
                </Link>
              ))}
              <div className="inline-flex w-fit overflow-hidden rounded-full border border-ink/15">
                <Link
                  href={pathname}
                  locale="es"
                  onClick={() => setMobileOpen(false)}
                  className={`px-[13px] py-[7px] text-[11px] font-extrabold tracking-[0.1em] ${
                    locale === "es" ? "bg-ink text-cream" : "text-ink/70"
                  }`}
                >
                  ES
                </Link>
                <Link
                  href={pathname}
                  locale="en"
                  onClick={() => setMobileOpen(false)}
                  className={`px-[13px] py-[7px] text-[11px] font-extrabold tracking-[0.1em] ${
                    locale === "en" ? "bg-ink text-cream" : "text-ink/70"
                  }`}
                >
                  EN
                </Link>
              </div>
              <a
                href={ISLA_CAFE_PHONE_TEL}
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2.5 text-[15px] font-semibold tracking-[0.04em] text-ink"
              >
                <PhoneIcon className="h-4 w-4 text-gold-dark" />
                {t("callAria")}
              </a>
              <div>
                <div className="mb-2 text-[11px] font-extrabold tracking-[0.24em] text-gold-muted uppercase">
                  {order("menuLabel")}
                </div>
                <div className="flex flex-col gap-2">
                  {orderPlatforms.map((platform) => (
                    <a
                      key={platform.key}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="text-[15px] font-semibold tracking-[0.04em] text-ink"
                    >
                      {order(platform.key)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
