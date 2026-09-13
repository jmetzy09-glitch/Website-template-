import { cn } from "@/lib/cn";

interface LogoMarkProps {
  size?: number;
  className?: string;
  /** Use fixed colours (for dark backgrounds) instead of theme tokens. */
  inverted?: boolean;
}

/**
 * Circuit-board "C" mark. Vector recreation of the chosen logo:
 * a rounded navy tile with a blue border, a bold white C with a blue cursor
 * inside it, and circuit traces ending in nodes on all four sides.
 */
export function LogoMark({ size = 40, className, inverted = false }: LogoMarkProps) {
  const tile = inverted ? "#0f1b2d" : "var(--color-ink)";
  const blue = inverted ? "#3b82f6" : "var(--color-accent)";
  const nodes: Array<[number, number]> = [
    [40, 12], [50, 7], [60, 12],
    [40, 88], [50, 93], [60, 88],
    [12, 40], [7, 50], [12, 60],
    [88, 40], [93, 50], [88, 60],
  ];
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      aria-hidden="true"
      focusable="false"
    >
      <g stroke={blue} strokeWidth="2.6" fill="none" strokeLinecap="round">
        <path d="M40 26V14M50 26V9M60 26V14M40 74V86M50 74V91M60 74V86M26 40H14M26 50H9M26 60H14M74 40H86M74 50H91M74 60H86" />
      </g>
      <g fill={blue}>
        {nodes.map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.1" />
        ))}
      </g>
      <rect x="26" y="26" width="48" height="48" rx="11" fill={tile} stroke={blue} strokeWidth="3.2" />
      <path d="M63 39H46a7 7 0 0 0-7 7v8a7 7 0 0 0 7 7h17" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinejoin="round" />
      <path d="M52 46.5l9.5 5.5-9.5 5.5z" fill={blue} />
    </svg>
  );
}

interface LogoProps {
  /** Mark size in px. The wordmark scales with it. */
  size?: number;
  inverted?: boolean;
  /** Show the tagline under the wordmark (footer, print). */
  tagline?: string;
  className?: string;
}

/** Mark plus the CONCHO / WEB CO. wordmark. */
export function Logo({ size = 40, inverted = false, tagline, className }: LogoProps) {
  const primarySize = Math.round(size * 0.5);
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark size={size} inverted={inverted} />
      <span className="flex flex-col leading-none">
        <span
          className={cn("font-brand font-extrabold tracking-[0.08em]", inverted ? "text-white" : "text-ink")}
          style={{ fontSize: primarySize }}
        >
          CONCHO
        </span>
        <span className="mt-1 flex items-center gap-2">
          <span aria-hidden="true" className={cn("h-px w-3", inverted ? "bg-stone-500" : "bg-accent/60")} />
          <span
            className={cn("font-brand font-semibold tracking-[0.34em]", inverted ? "text-stone-300" : "text-accent")}
            style={{ fontSize: Math.max(9, Math.round(size * 0.24)) }}
          >
            WEB CO.
          </span>
          <span aria-hidden="true" className={cn("h-px w-3", inverted ? "bg-stone-500" : "bg-accent/60")} />
        </span>
        {tagline ? (
          <span
            className={cn("mt-2 text-[0.6rem] font-medium uppercase tracking-[0.22em]", inverted ? "text-stone-400" : "text-ink-muted")}
          >
            {tagline}
          </span>
        ) : null}
      </span>
    </span>
  );
}
