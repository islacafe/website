"use client";

import { useTranslations } from "next-intl";
import { SiteImage } from "@/components/ui/SiteImage";
import { CoffeeCupIcon } from "@/components/ui/CoffeeCupIcon";
import { OrderMenu } from "@/components/ui/OrderMenu";
import { Link } from "@/i18n/navigation";
import { FACEBOOK_PROFILE_URL } from "@/lib/contact";
import { innerRoutes, navRouteKeys } from "@/lib/inner-routes";
import { siteImages } from "@/lib/images";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="relative overflow-hidden py-[clamp(60px,7vw,90px)] pb-10 text-cream-light">
      <div className="absolute inset-0 bg-ink-deep" aria-hidden="true">
        <SiteImage
          src={siteImages.footerBg}
          alt=""
          fill
          className="object-cover object-[center_42%]"
        />
      </div>

      <div className="absolute inset-0 bg-ink-deep/72" aria-hidden="true" />

      <div className="relative z-[1] mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
        <div
          data-foot-grid
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]"
        >
          <div>
            <SiteImage
              src={siteImages.logo}
              alt="Isla Café"
              className="mb-[18px] h-[74px] w-[74px] rounded-full object-cover"
            />
            <p className="max-w-[34ch] text-[14.5px] leading-[1.7] text-cream-light/60">
              {t("tagline")}
            </p>
          </div>

          <div>
            <div className="mb-4 text-[11px] font-extrabold tracking-[0.24em] text-gold-muted uppercase">
              {t("explore")}
            </div>
            <div className="flex flex-col gap-[11px] text-[14.5px] text-cream-light/72">
              {navRouteKeys.map((key) => (
                <Link
                  key={key}
                  href={innerRoutes[key]}
                  className="transition-colors duration-300 hover:text-gold-light"
                >
                  {nav(key)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-[11px] font-extrabold tracking-[0.24em] text-gold-muted uppercase">
              {t("order")}
            </div>
            <OrderMenu variant="footer" />
          </div>

          <div>
            <div className="mb-4 text-[11px] font-extrabold tracking-[0.24em] text-gold-muted uppercase">
              {t("follow")}
            </div>
            <div className="flex flex-col gap-[11px] text-[14.5px] text-cream-light/72">
              <a
                href="https://www.instagram.com/islacafemiami/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-gold-light"
              >
                {t("instagram")}
              </a>
              <a
                href={FACEBOOK_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-gold-light"
              >
                {t("facebook")}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-[54px] border-t border-cream-light/12 pt-6">
          <div className="flex flex-wrap justify-between gap-4 font-mono text-[11px] tracking-[0.1em] text-cream-light/45">
            <span>{t("copyright")}</span>
            <span className="inline-flex items-center gap-1.5">
              {t("madeInBefore")}
              <CoffeeCupIcon className="h-[1.05em] w-[1.05em] shrink-0 text-gold-muted" />
              {t("madeInAfter")}
            </span>
          </div>
          <p className="mt-3 text-center text-[11px] tracking-[0.06em] text-cream-light/40">
            {t("developedBy")}{" "}
            <a
              href="https://zenpho.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-light/55 transition-colors duration-300 hover:text-gold-light"
            >
              Zenpho
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
