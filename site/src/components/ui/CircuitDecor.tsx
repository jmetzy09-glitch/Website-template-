import { cn } from "@/lib/cn";

interface CircuitDecorProps {
  className?: string;
}

/**
 * Decorative circuit traces drawn from the logo's language: orthogonal lines
 * with round nodes. Purely decorative, very low contrast, hidden from assistive tech.
 */
export function CircuitDecor({ className }: CircuitDecorProps) {
  const nodes: Array<[number, number]> = [
    [120, 80], [260, 160], [420, 120], [600, 120], [200, 300], [480, 260], [300, 400], [40, 300], [560, 40], [360, 40],
  ];
  return (
    <svg
      viewBox="0 0 640 420"
      className={cn("pointer-events-none absolute", className)}
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M0 80H120V160H260M40 300H200V220H420V120H600M300 420V330H480V260H600M360 0V40H560V0" />
      <g fill="currentColor" stroke="none">
        {nodes.map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" />
        ))}
      </g>
    </svg>
  );
}
