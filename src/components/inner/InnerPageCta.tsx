import { Link } from "@/i18n/navigation";
import { GOOGLE_MAPS_PLACE_URL } from "@/lib/contact";
import { innerRoutes } from "@/lib/inner-routes";

type InnerPageCtaProps = {
  eyebrow: string;
  title?: string;
  titleLines?: string[];
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  meta: string;
  externalPrimary?: boolean;
};

export function InnerPageCta({
  eyebrow,
  title,
  titleLines,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  meta,
  externalPrimary = false,
}: InnerPageCtaProps) {
  const primaryClass =
    "inline-flex items-center justify-center rounded-full bg-gold-light px-7 py-3.5 text-[13px] font-bold tracking-[0.08em] text-ink-warm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(43,36,29,0.38)]";
  const secondaryClass =
    "inline-flex items-center justify-center rounded-full border border-cream-light/35 px-7 py-3.5 text-[13px] font-bold tracking-[0.08em] text-cream-light transition-[border-color,color,transform] duration-300 hover:-translate-y-0.5 hover:border-gold-light hover:text-gold-light";

  return (
    <section className="bg-forest py-[clamp(70px,9vw,120px)] text-cream-light">
      <div
        data-cta-grid
        data-rv
        className="mx-auto grid max-w-[1240px] items-end gap-10 px-[clamp(20px,5vw,64px)] lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div>
          <div className="mb-4 text-xs font-extrabold tracking-[0.32em] text-gold-muted uppercase">
            {eyebrow}
          </div>
          <h2 className="max-w-[16ch] font-serif text-[clamp(30px,4.2vw,56px)] leading-[1.08] font-semibold text-balance">
            {titleLines?.length ? (
              titleLines.map((line, index) => (
                <span key={line}>
                  {index > 0 ? <br /> : null}
                  {line}
                </span>
              ))
            ) : (
              title ?? ""
            )}
          </h2>
        </div>
        <div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {externalPrimary ? (
              <a
                href={primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryClass}
              >
                {primaryLabel}
              </a>
            ) : primaryHref.startsWith("http") ? (
              <a href={primaryHref} className={primaryClass}>
                {primaryLabel}
              </a>
            ) : (
              <Link href={primaryHref} className={primaryClass}>
                {primaryLabel}
              </Link>
            )}
            <a
              href={GOOGLE_MAPS_PLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryClass}
            >
              {secondaryLabel}
            </a>
          </div>
          <p className="mt-5 font-mono text-[11px] tracking-[0.14em] text-cream-light/55 uppercase">
            {meta}
          </p>
        </div>
      </div>
    </section>
  );
}

export { innerRoutes };
