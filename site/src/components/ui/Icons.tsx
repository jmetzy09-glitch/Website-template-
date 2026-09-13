import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...common} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...common} {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.9 2z" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...common} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...common} {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...common} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" {...common} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

/* ---- Service icons ---- */

export function LayoutIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common} {...props}>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function StoreIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common} {...props}>
      <path d="M3 9l1.5-5h15L21 9M3 9v11h18V9M3 9h18M9 20v-6h6v6" />
    </svg>
  );
}

export function InboxIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common} {...props}>
      <path d="M4 4h16v16H4zM4 14h4l2 3h4l2-3h4" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common} {...props}>
      <path d="M12 3l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.4l-5.7 3.1 1.2-6.4L2.8 9.7l6.4-.8z" />
    </svg>
  );
}

export function CogIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </svg>
  );
}

export function ServerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common} {...props}>
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <path d="M7 7.5h.01M7 16.5h.01" strokeWidth="3" />
    </svg>
  );
}

export type ServiceIconName = "layout" | "map-pin" | "store" | "inbox" | "star" | "cog" | "server";

export const serviceIcons: Record<ServiceIconName, (props: IconProps) => React.JSX.Element> = {
  layout: LayoutIcon,
  "map-pin": MapPinIcon,
  store: StoreIcon,
  inbox: InboxIcon,
  star: StarIcon,
  cog: CogIcon,
  server: ServerIcon,
};
