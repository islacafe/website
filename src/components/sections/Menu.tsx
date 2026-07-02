import { useLocale, useTranslations } from "next-intl";
import { SiteImage } from "@/components/ui/SiteImage";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Link } from "@/i18n/navigation";
import { innerRoutes } from "@/lib/inner-routes";
import { menuPreviewCards } from "@/data/inner-pages/menu-data";
import { menuIcon } from "@/lib/images";
import { pickLocalized } from "@/lib/localized";

export function Menu() {
  const t = useTranslations("menu");
  const locale = useLocale();

  return (
    <section id="menu" className="bg-cream py-[clamp(90px,11vw,150px)]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
        <SectionHeader number={t("number")} label={t("label")} />

        <h2
          data-rv
          className="max-w-[20ch] font-serif text-[clamp(34px,4.4vw,58px)] leading-[1.06] font-semibold text-balance"
        >
          {t("titleLine1")}{" "}
          <em className="text-gold-dark italic">{t("titleEmphasis")}</em>{" "}
          {t("titleLine2")}
        </h2>

        <div
          data-menu-grid
          className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {menuPreviewCards.map((card) => (
            <article
              key={pickLocalized(locale, card.heading)}
              className="overflow-hidden border border-border bg-cream-card transition-[transform,box-shadow,border-color] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[7px] hover:border-gold-dark/50 hover:shadow-[0_26px_60px_rgba(43,36,29,0.12)]"
            >
              <div className="relative aspect-[16/10] border-b border-border">
                <SiteImage src={card.photo} alt="" fill />
              </div>
              <div data-rv className="px-[30px] pt-7 pb-[30px]">
                <span className="mb-4 block font-mono text-xs tracking-[0.2em] text-gold-dark">
                  {pickLocalized(locale, card.heading)}
                </span>
                <div className="flex flex-col gap-5">
                  {card.items.map((item) => (
                    <div
                      key={pickLocalized(locale, item.name)}
                      className="grid grid-cols-[auto_1fr_auto] items-baseline gap-x-3.5"
                    >
                      <SiteImage
                        src={menuIcon(item.icon)}
                        alt=""
                        className="h-[30px] w-[30px] flex-none translate-y-0.5 object-contain"
                      />
                      <div>
                        <span className="font-serif text-[22px] leading-none">
                          {pickLocalized(locale, item.name)}
                        </span>
                        <p className="mt-1 text-[13.5px] leading-[1.6] text-muted">
                          {pickLocalized(locale, item.desc)}
                        </p>
                      </div>
                      {item.size ? (
                        <span className="font-mono text-[13px] text-gold-dark">
                          {item.size}
                        </span>
                      ) : (
                        <span className="font-mono text-[13px] text-muted">
                          ${item.price}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div data-rv className="mt-11 flex justify-center">
          <Link
            href={innerRoutes.menu}
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-cream-card px-7 py-3.5 text-[13px] font-bold tracking-[0.08em] text-ink transition-[border-color,gap] duration-300 hover:gap-[15px] hover:border-gold-dark"
          >
            {t("viewFull")}
          </Link>
        </div>
      </div>
    </section>
  );
}
