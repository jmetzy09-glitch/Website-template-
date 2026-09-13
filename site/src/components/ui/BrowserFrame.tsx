import Image from "next/image";
import { cn } from "@/lib/cn";

interface BrowserFrameProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Text shown in the fake address bar. */
  url?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Styles the chrome for a dark background. */
  dark?: boolean;
}

/** A website screenshot inside a minimal browser chrome. The product is the imagery. */
export function BrowserFrame({ src, alt, width, height, url, priority, sizes, className, dark = false }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border",
        dark
          ? "border-white/15 bg-white/5 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.7)]"
          : "border-line bg-surface shadow-[0_20px_50px_-20px_rgba(15,27,45,0.35)]",
        className,
      )}
    >
      <div
        className={cn("flex h-8 items-center gap-1.5 border-b px-3", dark ? "border-white/10 bg-white/5" : "border-line bg-paper")}
        aria-hidden="true"
      >
        <span className={cn("h-2.5 w-2.5 rounded-full", dark ? "bg-white/25" : "bg-line")} />
        <span className={cn("h-2.5 w-2.5 rounded-full", dark ? "bg-white/25" : "bg-line")} />
        <span className={cn("h-2.5 w-2.5 rounded-full", dark ? "bg-white/25" : "bg-line")} />
        {url ? (
          <span
            className={cn(
              "ml-3 hidden truncate rounded px-2 py-0.5 text-[0.65rem] sm:inline-block",
              dark ? "bg-white/10 text-white/70" : "bg-surface text-ink-muted",
            )}
          >
            {url}
          </span>
        ) : null}
      </div>
      <Image src={src} alt={alt} width={width} height={height} priority={priority} sizes={sizes} className="block h-auto w-full" />
    </div>
  );
}

interface PhoneFrameProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

/** A phone-width screenshot inside a simple dark bezel. */
export function PhoneFrame({ src, alt, width, height, priority, sizes, className }: PhoneFrameProps) {
  return (
    <div className={cn("overflow-hidden rounded-[1.4rem] border-[5px] border-ink bg-ink shadow-[0_24px_40px_-16px_rgba(15,27,45,0.5)]", className)}>
      <Image src={src} alt={alt} width={width} height={height} priority={priority} sizes={sizes} className="block h-auto w-full" />
    </div>
  );
}

interface PhoneScrollerProps {
  /** A tall, full-page phone screenshot. */
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

/**
 * Phone bezel whose screenshot slowly scrolls, so the mockup shows the whole
 * site rather than just the top. Motion stops under prefers-reduced-motion.
 */
export function PhoneScroller({ src, alt, width, height, priority, sizes, className }: PhoneScrollerProps) {
  return (
    <div
      className={cn(
        "phone-scroll relative aspect-[9/19] overflow-hidden rounded-[1.6rem] border-[6px] border-[#1a2335] bg-[#1a2335] shadow-[0_30px_50px_-18px_rgba(0,0,0,0.6)]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="phone-scroll-img absolute left-0 top-0 block h-auto w-full"
      />
    </div>
  );
}
