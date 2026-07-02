import { SiteImage } from "@/components/ui/SiteImage";

type ParallaxImagePairProps = {
  primarySrc: string;
  secondarySrc: string;
  primaryPriority?: boolean;
  primaryFrameClass?: string;
  secondaryFrameClass?: string;
  desktopSecondaryWidthClass?: string;
  className?: string;
};

const defaultPrimaryFrame =
  "border border-border shadow-[0_40px_80px_rgba(43,36,29,0.16)]";
const defaultSecondaryFrame =
  "border border-border shadow-[0_30px_60px_rgba(43,36,29,0.14)]";

export function ParallaxImagePair({
  primarySrc,
  secondarySrc,
  primaryPriority = false,
  primaryFrameClass = defaultPrimaryFrame,
  secondaryFrameClass = defaultSecondaryFrame,
  desktopSecondaryWidthClass = "w-[52%]",
  className,
}: ParallaxImagePairProps) {
  return (
    <div className={`relative mx-auto w-full max-w-[420px] md:mx-0 md:max-w-none ${className ?? ""}`.trim()}>
      <div className="flex flex-col gap-4 md:hidden">
        <div className={`relative aspect-[3/4] w-full overflow-hidden ${primaryFrameClass}`}>
          <SiteImage src={primarySrc} alt="" fill priority={primaryPriority} />
        </div>
        <div className={`relative aspect-square w-[70%] overflow-hidden ${secondaryFrameClass}`}>
          <SiteImage src={secondarySrc} alt="" fill />
        </div>
      </div>

      <div className="relative hidden min-h-[560px] md:block">
        <div
          data-plx="8"
          className={`absolute top-0 right-0 aspect-[3/4] w-[82%] overflow-hidden will-change-transform sm:w-[84%] ${primaryFrameClass}`}
        >
          <SiteImage src={primarySrc} alt="" fill priority={primaryPriority} />
        </div>
        <div
          data-plx="-12"
          className={`absolute bottom-0 left-0 aspect-square overflow-hidden will-change-transform ${desktopSecondaryWidthClass} ${secondaryFrameClass}`}
        >
          <SiteImage src={secondarySrc} alt="" fill />
        </div>
      </div>
    </div>
  );
}
