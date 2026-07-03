"use client";

import { useLocale } from "next-intl";
import { SiteImage } from "@/components/ui/SiteImage";
import { DarkLetterRows } from "@/components/inner/DarkLetterRows";
import { InnerPageCta } from "@/components/inner/InnerPageCta";
import { InnerPageHeader } from "@/components/inner/InnerPageHeader";
import { InnerSectionLabel } from "@/components/inner/InnerSectionLabel";
import { useParallaxImages } from "@/hooks/useParallaxImages";
import {
  historiaStoryParagraphs,
  historiaValuesRows,
} from "@/data/inner-pages/historia-content";
import { innerRoutes } from "@/lib/inner-routes";
import { pickLocalized } from "@/lib/localized";
import { siteImages, teamIcon } from "@/lib/images";

const teamColors = ["bg-[#9C8466]", "bg-[#5E5042]", "bg-[#B8966B] text-[#221C16]"];

export function HistoriaPageContent() {
  const locale = useLocale();
  useParallaxImages();

  const chips =
    locale === "en"
      ? ["☕ Four friends", "🇨🇺 Cuban heritage", "📍 Cutler Bay"]
      : ["☕ Cuatro amigos", "🇨🇺 Herencia cubana", "📍 Cutler Bay"];

  const team = [
    {
      icon: "bar",
      role: pickLocalized(locale, { es: "Barra & café", en: "Bar & coffee" }),
      bio: pickLocalized(locale, {
        es: "Cortaditos, lattes de especialidad y la mezcla perfecta de tradición cubana y café moderno.",
        en: "Cortaditos, specialty lattes, and the perfect blend of Cuban tradition and modern coffee.",
      }),
    },
    {
      icon: "kitchen",
      role: pickLocalized(locale, { es: "Cocina & brunch", en: "Kitchen & brunch" }),
      bio: pickLocalized(locale, {
        es: "Sabores clásicos cubanos y brunch hecho con ingredientes frescos, cada mañana.",
        en: "Classic Cuban flavors and brunch made with fresh ingredients, every morning.",
      }),
    },
    {
      icon: "bakery",
      role: pickLocalized(locale, { es: "Panadería", en: "Bakery" }),
      bio: pickLocalized(locale, {
        es: "Pastelitos, croissants y dulces horneados del día — hechos a mano antes de abrir.",
        en: "Pastelitos, croissants, and sweets baked daily — handmade before we open.",
      }),
    },
  ];

  return (
    <>
      <InnerPageHeader
        number="01"
        label={pickLocalized(locale, { es: "Nuestra historia", en: "Our story" })}
        titleBefore={pickLocalized(locale, {
          es: "Así nació",
          en: "That's how",
        })}
        titleEmphasis={pickLocalized(locale, { es: "Isla Café", en: "Isla Café" })}
        titleAfter={pickLocalized(locale, { es: ".", en: " was born." })}
        intro={pickLocalized(locale, {
          es: "Todo empezó con cuatro amigos, un sueño compartido y el valor de arriesgarse.",
          en: "It all started with four friends, a shared dream, and the courage to take a chance.",
        })}
        chips={chips}
        bgImage={siteImages.barra}
      />

      <section className="bg-cream-light py-[clamp(80px,10vw,140px)]">
        <div className="mx-auto grid max-w-[1240px] items-center gap-[clamp(36px,5vw,72px)] px-[clamp(20px,5vw,64px)] lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <InnerSectionLabel
              index=""
              label={pickLocalized(locale, { es: "Nuestra historia", en: "Our story" })}
            />
            <h2
              data-rv
              className="max-w-[16ch] font-serif text-[clamp(30px,4.2vw,56px)] leading-[1.08] font-semibold text-balance"
            >
              {pickLocalized(locale, {
                es: "Así nació",
                en: "That's how",
              })}{" "}
              <em className="text-gold-dark italic">Isla Café</em>
              {pickLocalized(locale, { es: ".", en: " was born." })}
            </h2>
            <p data-rv className="mt-6 max-w-[50ch] text-[17px] leading-[1.65] text-muted">
              {pickLocalized(locale, {
                es: "Todo empezó con cuatro amigos, un sueño compartido y el valor de arriesgarse.",
                en: "It all started with four friends, a shared dream, and the courage to take a chance.",
              })}
            </p>
            {historiaStoryParagraphs.map((paragraph) => (
              <p
                key={pickLocalized(locale, paragraph)}
                data-rv
                className="mt-4 max-w-[50ch] text-[17px] leading-[1.65] text-muted"
              >
                {pickLocalized(locale, paragraph)}
              </p>
            ))}
          </div>
          <div
            data-plx="8"
            className="relative mx-auto aspect-[4/3] w-full max-w-[420px] overflow-hidden border border-border shadow-[0_40px_80px_rgba(43,36,29,0.16)] will-change-transform lg:mx-0 lg:max-w-none"
          >
            <SiteImage
              src={siteImages.barra}
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="bg-forest py-[clamp(80px,10vw,140px)] text-cream-light">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
          <InnerSectionLabel
            index="A"
            label={pickLocalized(locale, { es: "Lo que nos guía", en: "What guides us" })}
            dark
          />
          <h2
            data-rv
            className="max-w-[18ch] font-serif text-[clamp(30px,4.2vw,56px)] leading-[1.08] font-semibold text-balance"
          >
            {pickLocalized(locale, {
              es: "Esto es más que una cafetería.",
              en: "This is more than a coffee shop.",
            })}
          </h2>
          <DarkLetterRows
            rows={historiaValuesRows.map((row) => ({
              letter: row.letter,
              title: pickLocalized(locale, row.title),
              body: pickLocalized(locale, row.body),
            }))}
          />
        </div>
      </section>

      <section className="bg-cream-light py-[clamp(70px,9vw,120px)]">
        <div data-rv className="mx-auto max-w-[980px] px-[clamp(20px,5vw,64px)] text-center">
          <span className="font-serif text-[80px] leading-none text-gold-dark/35">"</span>
          <blockquote className="-mt-6 font-serif text-[clamp(28px,4vw,44px)] leading-[1.25] font-medium italic text-balance">
            {pickLocalized(locale, {
              es: "Bienvenidos a Isla Café. Nos alegra mucho que estés aquí.",
              en: "Welcome to Isla Café. We're so glad you're here.",
            })}
          </blockquote>
          <p className="mt-6 text-[13px] font-bold tracking-[0.22em] text-gold-dark uppercase">
            {pickLocalized(locale, { es: "Los fundadores", en: "The founders" })}
          </p>
        </div>
      </section>

      <section className="bg-cream py-[clamp(70px,9vw,120px)]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,64px)]">
          <InnerSectionLabel
            index="B"
            label={pickLocalized(locale, { es: "Las manos detrás", en: "The hands behind" })}
          />
          <div data-rv-group className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
            {team.map((person, index) => (
              <article
                key={person.role}
                className="border border-border bg-cream-card p-8 transition-[transform,box-shadow,border-color] duration-[450ms] hover:-translate-y-[7px] hover:border-gold-dark/50 hover:shadow-[0_26px_60px_rgba(43,36,29,0.12)]"
              >
                <div
                  className={`mb-5 grid h-[60px] w-[60px] place-items-center rounded-full p-3 ${teamColors[index]}`}
                >
                  <SiteImage
                    src={teamIcon(person.icon)}
                    alt=""
                    className="h-full w-full object-contain brightness-0 invert"
                  />
                </div>
                <h3 className="font-serif text-[26px]">{person.role}</h3>
                <p className="mt-4 text-[15px] leading-[1.65] text-muted">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InnerPageCta
        eyebrow={pickLocalized(locale, { es: "Ven a conocernos", en: "Come meet us" })}
        title={pickLocalized(locale, {
          es: "Bienvenidos a Isla Café. Nos alegra mucho que estés aquí.",
          en: "Welcome to Isla Café. We're so glad you're here.",
        })}
        primaryLabel={pickLocalized(locale, { es: "Ver la carta →", en: "View menu →" })}
        primaryHref={innerRoutes.menu}
        secondaryLabel={pickLocalized(locale, { es: "Cómo llegar", en: "Get directions" })}
        meta="18901 SW 106TH AVE · CUTLER BAY · MIAMI"
      />
    </>
  );
}
