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
}

/** A website screenshot inside a minimal browser chrome. The product is the imagery. */
export function BrowserFrame({ src, alt, width, height, url, priority, sizes, className }: BrowserFrameProps) {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-line bg-surface shadow-[0_20px_50px_-20px_rgba(28,25,23,0.35)]", className)}>
      <div className="flex h-8 items-center gap-1.5 border-b border-line bg-paper px-3" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        {url ? (
          <span className="ml-3 hidden truncate rounded bg-surface px-2 py-0.5 text-[0.65rem] text-ink-muted sm:inline-block">{url}</span>
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
    <div className={cn("overflow-hidden rounded-[1.4rem] border-[5px] border-ink bg-ink shadow-[0_24px_40px_-16px_rgba(28,25,23,0.5)]", className)}>
      <Image src={src} alt={alt} width={width} height={height} priority={priority} sizes={sizes} className="block h-auto w-full" />
    </div>
  );
}
