import { cn } from "@/lib/cn";

interface WordmarkProps {
  /** First line, e.g. "CONCHO". */
  primary: string;
  /** Second line, e.g. "WEB CO." */
  secondary: string;
  inverted?: boolean;
  className?: string;
}

/**
 * Text-only two-line lockup used until the final logo file lands.
 * Wide tracking on the primary line, small letterspaced secondary in the accent colour.
 */
export function Wordmark({ primary, secondary, inverted = false, className }: WordmarkProps) {
  return (
    <span className={cn("flex flex-col leading-none", className)}>
      <span className={cn("font-heading text-xl font-bold tracking-[0.16em]", inverted ? "text-white" : "text-ink")}>{primary}</span>
      <span className={cn("mt-1 text-[0.62rem] font-semibold tracking-[0.34em]", inverted ? "text-stone-300" : "text-accent")}>
        {secondary}
      </span>
    </span>
  );
}
