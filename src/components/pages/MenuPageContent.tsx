"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { SiteImage } from "@/components/ui/SiteImage";
import { InnerPageCta } from "@/components/inner/InnerPageCta";
import { InnerPageHeader } from "@/components/inner/InnerPageHeader";
import {
  batidoFlatPrice,
  menuCategories,
  menuTagLabels,
  type MenuCategoryData,
  type MenuGroup,
  type MenuItemData,
} from "@/data/inner-pages/menu-data";
import { pickLocalized } from "@/lib/localized";
import { ISLA_CAFE_PHONE } from "@/lib/contact";
import { menuIcon, siteImages } from "@/lib/images";

function ItemPrice({ cat, item }: { cat: MenuCategoryData; item: MenuItemData }) {
  if (cat.priceMode === "size") {
    return <span className="font-mono text-[13px] text-gold-dark">{item.size}</span>;
  }
  return <span className="font-mono text-[14px] text-ink">${item.price}</span>;
}

export function MenuPageContent() {
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState(menuCategories[0].id);

  useEffect(() => {
    const sections = menuCategories
      .map((cat) => document.getElementById(`cat-${cat.id}`))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveTab(visible.target.id.replace("cat-", ""));
        }
      },
      { rootMargin: "-160px 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id: string) => {
    setActiveTab(id);
    document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  const chips =
    locale === "en"
      ? ["☕ Roasted in-house", "🌱 Vegan options", "🕗 Brunch · 9AM–2PM"]
      : ["☕ Tostado en casa", "🌱 Opciones veganas", "🕗 Brunch · 9–14h"];

  const tagText = (tag: NonNullable<MenuItemData["tag"]>) =>
    pickLocalized(locale, menuTagLabels[tag]);

  const renderRow = (cat: MenuCategoryData, item: MenuItemData, isLast: boolean) => {
    const hidePrice = item.group === "Batidos";
    return (
      <div
        key={pickLocalized(locale, item.name)}
        data-rv
        className={`grid items-center gap-x-5 gap-y-1.5 border-t border-border py-[22px] ${
          hidePrice ? "grid-cols-[auto_1fr]" : "grid-cols-[auto_1fr_auto]"
        } ${isLast ? "border-b" : ""}`}
      >
        <SiteImage
          src={menuIcon(item.icon)}
          alt=""
          className="h-[38px] w-[38px] flex-none object-contain"
        />
        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
          <span className="font-serif text-[clamp(21px,2.2vw,25px)] leading-none">
            {pickLocalized(locale, item.name)}
          </span>
          {item.tag && (
            <span className="font-sans text-[11px] font-bold tracking-[0.1em] text-gold-dark uppercase">
              {tagText(item.tag)}
            </span>
          )}
        </div>
        {!hidePrice && <ItemPrice cat={cat} item={item} />}
        {item.desc && (
          <p
            className="mt-1 text-[14.5px] leading-[1.6] text-muted"
            style={{ gridColumn: "2 / -1" }}
          >
            {pickLocalized(locale, item.desc)}
          </p>
        )}
      </div>
    );
  };

  const renderStripFeature = (cat: MenuCategoryData, item: MenuItemData) => (
    <article
      key={pickLocalized(locale, item.name)}
      data-rv
      className="overflow-hidden border border-border bg-cream-card shadow-[0_18px_40px_rgba(43,36,29,0.08)]"
    >
      <div className="relative aspect-[3/2]">
        <SiteImage src={`/images/menu/photos/${item.photo}`} alt="" fill />
      </div>
      <div className="px-4 pt-3.5 pb-4">
        <div className="flex items-center justify-between gap-2.5">
          <span className="font-serif text-[22px] leading-[1.1]">
            {pickLocalized(locale, item.name)}
          </span>
          {cat.priceMode === "size" ? (
            <span className="font-mono text-[12px] text-gold-dark">{item.size}</span>
          ) : (
            <span className="font-mono text-[14px] text-ink">${item.price}</span>
          )}
        </div>
        <div className="mt-1.5 flex items-center gap-2">
          {item.tag && (
            <span className="rounded-full bg-gold-light px-2.5 py-[3px] text-[10px] font-extrabold tracking-[0.12em] text-ink-deep uppercase">
              {tagText(item.tag)}
            </span>
          )}
        </div>
        {item.desc && (
          <p className="mt-2 text-[13px] leading-[1.5] text-muted">
            {pickLocalized(locale, item.desc)}
          </p>
        )}
      </div>
    </article>
  );

  const renderBannerFeature = (cat: MenuCategoryData, item: MenuItemData) => (
    <div
      key={pickLocalized(locale, item.name)}
      data-rv
      className="mt-6 grid grid-cols-[auto_1fr_auto] items-center gap-5 border border-border bg-cream-card p-4 shadow-[0_18px_40px_rgba(43,36,29,0.08)]"
    >
      <div className="relative h-[92px] w-[128px] flex-none overflow-hidden">
        <SiteImage src={`/images/menu/photos/${item.photo}`} alt="" fill />
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="font-serif text-[26px] leading-[1.1]">
            {pickLocalized(locale, item.name)}
          </span>
          {item.tag && (
            <span className="font-sans text-[10px] font-bold tracking-[0.1em] text-gold-dark uppercase">
              {tagText(item.tag)}
            </span>
          )}
        </div>
        {item.desc && (
          <p className="mt-1 text-[14px] leading-[1.55] text-muted">
            {pickLocalized(locale, item.desc)}
          </p>
        )}
      </div>
      <span className="flex-none rounded-full bg-gold-light px-4 py-2.5 font-sans text-[15px] font-extrabold text-ink-deep whitespace-nowrap">
        ${item.price}
      </span>
    </div>
  );

  const renderList = (cat: MenuCategoryData) => {
    const rowItems = cat.items.filter((item) => !item.photo);
    const stripFeatures = cat.items.filter(
      (item) => item.photo && item.tag !== "PARA COMPARTIR",
    );
    const bannerFeatures = cat.items.filter(
      (item) => item.photo && item.tag === "PARA COMPARTIR",
    );

    return (
      <div className={cat.id === "cafe" ? "" : ""}>
        {stripFeatures.length > 0 && (
          <div className="mb-3.5 grid grid-cols-2 gap-[18px]">
            {stripFeatures.map((item) => renderStripFeature(cat, item))}
          </div>
        )}

        {cat.grouped ? (
          <>
            {(["Bebidas", "Batidos"] as MenuGroup[]).map((group) => {
              const groupItems = rowItems.filter((item) => item.group === group);
              if (groupItems.length === 0) return null;
              return (
                <div key={group}>
                  <div className="flex items-baseline gap-2.5 pt-6 pb-0.5 font-mono text-[11px] tracking-[0.18em] text-gold-dark uppercase">
                    <span>{group}</span>
                    {group === "Batidos" && (
                      <>
                        <span className="h-px flex-1 bg-border" />
                        <span className="text-ink">{pickLocalized(locale, batidoFlatPrice)}</span>
                      </>
                    )}
                  </div>
                  {groupItems.map((item, index) =>
                    renderRow(cat, item, index === groupItems.length - 1),
                  )}
                </div>
              );
            })}
          </>
        ) : (
          rowItems.map((item, index) => renderRow(cat, item, index === rowItems.length - 1))
        )}

        {bannerFeatures.map((item) => renderBannerFeature(cat, item))}

        {cat.addOns && cat.addOns.length > 0 && (
          <div className="mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-2 border border-dashed border-gold-pale bg-cream-card px-[18px] py-4">
            <span className="font-mono text-[11px] tracking-[0.14em] text-gold-dark uppercase">
              {pickLocalized(locale, { es: "Extras", en: "Add-ons" })}
            </span>
            {cat.addOns.map((addOn) => (
              <span key={pickLocalized(locale, addOn.name)} className="text-[13.5px] text-muted">
                {pickLocalized(locale, addOn.name)} <span className="text-ink">+${addOn.price}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <InnerPageHeader
        number="02"
        label={pickLocalized(locale, { es: "La carta", en: "The menu" })}
        titleBefore={pickLocalized(locale, {
          es: "Café de especialidad y",
          en: "Specialty coffee and",
        })}
        titleEmphasis={pickLocalized(locale, { es: "brunch", en: "brunch" })}
        titleAfter={pickLocalized(locale, { es: " caribeño.", en: " Caribbean brunch." })}
        intro={pickLocalized(locale, {
          es: "Tostado en casa cada semana, horneado cada mañana. Estos son nuestros básicos — el especial del día siempre está en la pizarra.",
          en: "Roasted in-house every week, baked every morning. These are our staples — today's special is always on the board.",
        })}
        chips={chips}
        bgImage={siteImages.cafeConLeche}
        parallax={false}
        bgOpacity="opacity-[0.16]"
      />

      <div className="sticky top-[72px] z-[50] border-b border-border bg-cream/92 backdrop-blur-[18px] lg:top-[88px]">
        <div className="mx-auto flex max-w-[1240px] gap-1 overflow-x-auto px-[clamp(20px,5vw,64px)] scrollbar-none">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => scrollToCategory(cat.id)}
              className={`shrink-0 border-b-2 px-4 py-4 text-[13px] font-semibold tracking-[0.06em] transition-colors ${
                activeTab === cat.id
                  ? "border-gold-dark text-ink"
                  : "border-transparent text-muted hover:text-ink"
              }`}
            >
              {pickLocalized(locale, cat.tab)}
            </button>
          ))}
        </div>
      </div>

      <div id="carta" className="bg-cream py-[clamp(72px,9vw,120px)]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-[clamp(72px,9vw,120px)] px-[clamp(20px,5vw,64px)]">
          {menuCategories.map((cat, index) => {
            const reverse = index % 2 === 1;
            return (
              <section
                key={cat.id}
                id={`cat-${cat.id}`}
                className="grid scroll-mt-[148px] items-start gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14"
              >
                <div className={`top-[160px] lg:sticky ${reverse ? "lg:order-2" : ""}`}>
                  <p className="font-mono text-[11px] tracking-[0.18em] text-gold-dark uppercase">
                    {pickLocalized(locale, cat.kicker)}
                  </p>
                  <h2 className="mt-3 font-serif text-[clamp(30px,4vw,48px)] leading-[1.08] font-semibold">
                    {pickLocalized(locale, cat.title)}
                  </h2>
                  <p className="mt-4 max-w-[34ch] text-[15px] leading-[1.65] text-muted">
                    {pickLocalized(locale, cat.description)}
                  </p>
                  {cat.heroPhoto && (
                    <div className="relative mt-6 aspect-[4/5] overflow-hidden border border-border shadow-[0_26px_56px_rgba(43,36,29,0.12)]">
                      <SiteImage src={cat.heroPhoto} alt="" fill />
                    </div>
                  )}
                  {cat.heroQuote && (
                    <div className="mt-6 border border-border bg-forest p-[30px] text-cream-light shadow-[0_26px_56px_rgba(43,36,29,0.14)]">
                      <span className="font-mono text-[11px] tracking-[0.2em] text-gold-light uppercase">
                        {pickLocalized(locale, cat.heroQuote.kicker)}
                      </span>
                      <p className="mt-3.5 font-serif text-[26px] leading-[1.25] text-cream-light italic">
                        “{pickLocalized(locale, cat.heroQuote.quote)}”
                      </p>
                    </div>
                  )}
                </div>

                <div className={reverse ? "lg:order-1" : ""}>{renderList(cat)}</div>
              </section>
            );
          })}
        </div>

        <p className="mx-auto mt-16 max-w-[1240px] border-t border-border px-[clamp(20px,5vw,64px)] pt-8 font-mono text-[12px] leading-[1.8] tracking-[0.08em] text-gold-dark uppercase">
          {pickLocalized(locale, {
            es: "Leches vegetales (avena · coco · almendra) sin recargo · Opciones sin gluten disponibles · Precios en USD, no incluyen impuestos · Pregunta al equipo por alérgenos y el especial del día.",
            en: "Plant milks (oat · coconut · almond) at no extra charge · Gluten-free options available · Prices in USD, tax not included · Ask the team about allergens and today's special.",
          })}
        </p>
      </div>

      <div id="pedir">
        <InnerPageCta
          eyebrow={pickLocalized(locale, { es: "¿Antojo?", en: "Craving something?" })}
          titleLines={
            locale === "en"
              ? ["Order for pickup,", "or stop by and we'll serve you", "at the bar."]
              : ["Ordena para recoger,", "o pasa y te lo servimos", "en la barra."]
          }
          primaryLabel={pickLocalized(locale, {
            es: "Ordenar online →",
            en: "Order online →",
          })}
          primaryHref="#"
          secondaryLabel={pickLocalized(locale, { es: "Cómo llegar", en: "Get directions" })}
          meta={`18901 SW 106TH AVE · CUTLER BAY · ${ISLA_CAFE_PHONE}`}
        />
      </div>
    </>
  );
}
