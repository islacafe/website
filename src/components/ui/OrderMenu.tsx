"use client";

import { useTranslations } from "next-intl";
import { orderPlatforms } from "@/lib/order";

type OrderMenuProps = {
  variant: "nav" | "footer";
  scrolled?: boolean;
  onNavigate?: () => void;
};

export function OrderMenu({ variant, scrolled = true, onNavigate }: OrderMenuProps) {
  const t = useTranslations("order");
  const platform = orderPlatforms[0];

  if (!platform) {
    return null;
  }

  const linkClass =
    variant === "footer"
      ? "transition-colors duration-300 hover:text-gold-light"
      : "block px-4 py-2.5 text-[13px] font-semibold tracking-[0.04em] text-ink transition-colors hover:bg-cream-light hover:text-gold-dark";

  if (variant === "footer") {
    return (
      <div className="flex flex-col gap-[11px] text-[14.5px] text-cream-light/72">
        <a
          href={platform.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onNavigate?.()}
          className={linkClass}
        >
          {t(platform.key)}
        </a>
      </div>
    );
  }

  const triggerClass = scrolled
    ? "bg-ink text-cream shadow-[0_10px_26px_rgba(43,36,29,0.28)] hover:shadow-[0_16px_34px_rgba(43,36,29,0.38)]"
    : "bg-cream/95 text-ink shadow-[0_10px_26px_rgba(0,0,0,0.18)] hover:bg-cream";

  return (
    <a
      href={platform.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hidden items-center rounded-full px-[22px] py-[11px] text-[12.5px] font-bold tracking-[0.08em] transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 lg:inline-flex ${triggerClass}`}
    >
      {t("menuLabel")}
    </a>
  );
}
