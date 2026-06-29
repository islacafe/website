type InnerSectionLabelProps = {
  index: string;
  label: string;
  dark?: boolean;
  centered?: boolean;
};

export function InnerSectionLabel({
  index,
  label,
  dark = false,
  centered = false,
}: InnerSectionLabelProps) {
  return (
    <div
      data-rv
      className={`mb-[18px] flex items-baseline gap-[18px] ${centered ? "justify-center" : ""}`}
    >
      <span
        className={`font-mono text-[13px] tracking-[0.18em] ${dark ? "text-gold-pale" : "text-gold-dark"}`}
      >
        {index}
      </span>
      <span
        className={`text-xs font-extrabold tracking-[0.32em] uppercase ${dark ? "text-gold-muted" : "text-muted"}`}
      >
        {label}
      </span>
      {!centered && (
        <span
          className={`h-px flex-1 bg-gradient-to-r ${dark ? "from-gold-dark to-transparent" : "from-gold-pale to-transparent"}`}
        />
      )}
    </div>
  );
}
