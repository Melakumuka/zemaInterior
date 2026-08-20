import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Logo = (p: P) => (
  <svg viewBox="0 0 44 44" {...stroke} {...p}>
    <rect x="3" y="3" width="38" height="38" />
    <path d="M13 14h18L13 31h18" strokeWidth={2} />
  </svg>
);

export const IconArrow = (p: P) => (
  <svg viewBox="0 0 34 14" {...stroke} {...p}>
    <path d="M1 7h30" />
    <path d="M24 1.5 31.5 7 24 12.5" />
  </svg>
);

export const IconArrowUpRight = (p: P) => (
  <svg viewBox="0 0 16 16" {...stroke} {...p}>
    <path d="M3.5 12.5 12.5 3.5" />
    <path d="M5 3.5h7.5V11" />
  </svg>
);

export const IconChevron = (p: P) => (
  <svg viewBox="0 0 16 16" {...stroke} {...p}>
    <path d="m4 2 8 6-8 6" />
  </svg>
);

export const IconPlus = (p: P) => (
  <svg viewBox="0 0 16 16" {...stroke} {...p}>
    <path d="M8 2v12M2 8h12" />
  </svg>
);

export const IconClose = (p: P) => (
  <svg viewBox="0 0 16 16" {...stroke} {...p}>
    <path d="M3 3l10 10M13 3 3 13" />
  </svg>
);

export const IconMenu = (p: P) => (
  <svg viewBox="0 0 28 16" {...stroke} {...p}>
    <path d="M2 3h24" />
    <path d="M8 13h18" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg viewBox="0 0 18 14" {...stroke} {...p}>
    <path d="m2 7.5 4.5 4.5L16 2" />
  </svg>
);

export const IconSpark = (p: P) => (
  <svg viewBox="0 0 20 20" {...stroke} {...p}>
    <path d="M10 1.5v17M2.6 5.75l14.8 8.5M17.4 5.75l-14.8 8.5" />
  </svg>
);

export const IconPhone = (p: P) => (
  <svg viewBox="0 0 20 20" {...stroke} {...p}>
    <path d="M4.5 2.5h3l1.5 4-2 1.5a12 12 0 0 0 5 5L13.5 11l4 1.5v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 2.5 4.7 2 2 0 0 1 4.5 2.5Z" />
  </svg>
);

export const IconMail = (p: P) => (
  <svg viewBox="0 0 20 16" {...stroke} {...p}>
    <rect x="1.5" y="1.5" width="17" height="13" />
    <path d="m2 2.5 8 6.5 8-6.5" />
  </svg>
);

export const IconPin = (p: P) => (
  <svg viewBox="0 0 16 20" {...stroke} {...p}>
    <path d="M8 18.5S1.8 12 1.8 7.2a6.2 6.2 0 0 1 12.4 0C14.2 12 8 18.5 8 18.5Z" />
    <circle cx="8" cy="7.2" r="2.2" />
  </svg>
);

export const IconClock = (p: P) => (
  <svg viewBox="0 0 20 20" {...stroke} {...p}>
    <circle cx="10" cy="10" r="8" />
    <path d="M10 5v5l3.5 2" />
  </svg>
);

export const IconInstagram = (p: P) => (
  <svg viewBox="0 0 20 20" {...stroke} {...p}>
    <rect x="2.5" y="2.5" width="15" height="15" />
    <circle cx="10" cy="10" r="3.6" />
    <circle cx="14.6" cy="5.4" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

export const IconFacebook = (p: P) => (
  <svg viewBox="0 0 20 20" {...stroke} {...p}>
    <path d="M12.8 2.5H11a3 3 0 0 0-3 3v2H5.5v3H8v7h3v-7h2.4l.6-3H11v-1.6c0-.8.5-1.4 1.3-1.4h.5Z" />
  </svg>
);

export const IconLinkedin = (p: P) => (
  <svg viewBox="0 0 20 20" {...stroke} {...p}>
    <rect x="2.5" y="2.5" width="15" height="15" />
    <path d="M6 8.5V14M6 5.8v.4M9.5 14v-3.2a2.2 2.2 0 0 1 4.4 0V14" />
  </svg>
);

export const IconGitHub = (p: P) => (
  <svg viewBox="0 0 20 20" {...stroke} {...p}>
    <path d="M6.5 2.5v10" />
    <circle cx="15" cy="5" r="2.5" />
    <circle cx="6.5" cy="15" r="2.5" />
    <path d="M15 7.5a8.5 8.5 0 0 1-8.5 8.5" />
  </svg>
);

export const IconCompass = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5Z" />
  </svg>
);

export const IconRuler = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <rect x="2.5" y="9" width="19" height="6" transform="rotate(-20 12 12)" />
    <path d="m8 12.8 1 2.6M12 11.4l.7 1.8M16 9.9l1 2.6" />
  </svg>
);

export const IconLayers = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="m12 3 9 4.5-9 4.5-9-4.5Z" />
    <path d="m3 12 9 4.5 9-4.5" />
    <path d="m3 16.5 9 4.5 9-4.5" />
  </svg>
);

export const IconHammer = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <path d="m13 7 4-4 4 4-4 4" />
    <path d="m13 7-1.5 1.5L3 17l4 4 8.5-8.5L17 11" />
    <path d="m14.5 12.5-3-3" />
  </svg>
);

export const IconKey = (p: P) => (
  <svg viewBox="0 0 24 24" {...stroke} {...p}>
    <circle cx="8" cy="8" r="5" />
    <path d="m11.5 11.5 9 9M17 17l2-2M14.5 19.5l2-2" />
  </svg>
);

export const IconQuote = (p: P) => (
  <svg viewBox="0 0 34 26" fill="currentColor" {...p}>
    <path d="M0 26V14.6C0 6.5 4.7 1.3 12.6 0l1.5 3.4C9.3 4.6 6.9 7.3 6.6 10.5H14V26H0Zm20 0V14.6C20 6.5 24.7 1.3 32.6 0l1.4 3.4c-4.8 1.2-7.2 3.9-7.5 7.1H34V26H20Z" />
  </svg>
);

export const SOCIAL_ICONS: Record<string, (p: P) => JSX.Element> = {
  Instagram: IconInstagram,
  Facebook: IconFacebook,
  LinkedIn: IconLinkedin,
};
