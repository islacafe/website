type DarkLetterRowsProps = {
  rows: Array<{ letter: string; title: string; body: string }>;
};

export function DarkLetterRows({ rows }: DarkLetterRowsProps) {
  return (
    <div data-rv-group className="mt-10 grid gap-0">
      {rows.map((row, index) => (
        <div
          key={row.letter}
          className={`grid grid-cols-[48px_1fr] items-start gap-4 border-t border-cream-light/16 py-6 sm:grid-cols-[60px_1fr] sm:gap-5 sm:py-[30px] ${index === rows.length - 1 ? "border-b border-cream-light/16" : ""}`}
        >
          <span className="pt-1 font-mono text-[11px] tracking-[0.18em] text-gold sm:text-xs">
            {row.letter}
          </span>
          <div>
            <h3 className="mb-2 font-serif text-[22px] sm:text-[26px]">{row.title}</h3>
            <p className="max-w-[46ch] text-[15px] leading-[1.7] text-cream-light/66">
              {row.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
