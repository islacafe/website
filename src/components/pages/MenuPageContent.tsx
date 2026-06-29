"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { SiteImage } from "@/components/ui/SiteImage";
import { InnerPageCta } from "@/components/inner/InnerPageCta";
import { InnerPageHeader } from "@/components/inner/InnerPageHeader";
import { menuCategories } from "@/data/inner-pages/menu-data";
import { innerRoutes } from "@/lib/inner-routes";
import { pickLocalized } from "@/lib/localized";
import { siteImages } from "@/lib/images";

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
      ? ["☕ Roasted in-house", "🌱 Vegan options", "🕗 Brunch · 8AM–2PM"]
      : ["☕ Tostado en casa", "🌱 Opciones veganas", "🕗 Brunch · 8–14h"];

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
          {menuCategories.map((cat) => (
            <section
              key={cat.id}
              id={`cat-${cat.id}`}
              className="scroll-mt-[148px] grid items-start gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14"
            >
              <div
                className={`top-[160px] lg:sticky ${cat.reverse ? "lg:order-2" : ""}`}
              >
                <p className="font-mono text-[11px] tracking-[0.18em] text-gold-dark uppercase">
                  {pickLocalized(locale, cat.code)}
                </p>
                <h2 className="mt-3 font-serif text-[clamp(30px,4vw,48px)] leading-[1.08] font-semibold">
                  {pickLocalized(locale, cat.title)}
                </h2>
                <p className="mt-4 max-w-[36ch] text-[15px] leading-[1.65] text-muted">
                  {pickLocalized(locale, cat.description)}
                </p>
                <div className="relative mt-6 aspect-[4/5] overflow-hidden border border-border">
                  <SiteImage
                    src={cat.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className={cat.reverse ? "lg:order-1" : ""}>
                {cat.items.map((item, index) => (
                  <div
                    key={pickLocalized(locale, item.name)}
                    className={`grid grid-cols-[1fr_auto] gap-x-4 border-t border-border py-5 ${index === cat.items.length - 1 ? "border-b" : ""}`}
                  >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-serif text-[25px] leading-none">
                        {pickLocalized(locale, item.name)}
                      </span>
                      {item.badge && (
                        <span className="text-[11px] font-bold tracking-[0.1em] text-gold-dark uppercase">
                          {pickLocalized(locale, item.badge)}
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-[14px] text-muted">{item.price}</span>
                    <p className="col-span-2 mt-1 text-[14.5px] leading-[1.6] text-muted">
                      {pickLocalized(locale, item.description)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
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
          title={pickLocalized(locale, {
            es: "Ordena para recoger, o pasa y te lo servimos en la barra.",
            en: "Order for pickup, or stop by and we'll serve you at the bar.",
          })}
          primaryLabel={pickLocalized(locale, {
            es: "Ordenar online →",
            en: "Order online →",
          })}
          primaryHref="#"
          secondaryLabel={pickLocalized(locale, { es: "Cómo llegar", en: "Get directions" })}
          meta="18901 SW 106TH AVE · CUTLER BAY · (305) 555-0147"
        />
      </div>
    </>
  );
}
