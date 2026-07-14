import { useId } from "react";

const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function ChevronDown(props) {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function SearchIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12l4.5 4.5L19 7" />
    </svg>
  );
}

export function CheckCircleIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 5c0 9 7 16 16 16l3-4-6-3-2 2c-3-1-5-3-6-6l2-2-3-6z" />
    </svg>
  );
}

export function HeartIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-7-4.6-10-9.3C.5 8.3 2 4.5 6 4c2.2-.3 3.8 1 6 3 2.2-2 3.8-3.3 6-3 4 .5 5.5 4.3 4 7.7C19 16.4 12 21 12 21z" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

export function GaugeIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M7 9v6M17 9v6" />
    </svg>
  );
}

export function DiamondIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h12l4 6-10 12L2 9z" />
      <path d="M2 9h20M8 3l4 6-4 12M16 3l-4 6 4 12" />
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function AwardIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="5" />
      <path d="M8.5 12.5L7 21l5-2.5L17 21l-1.5-8.5" />
    </svg>
  );
}

export function RefreshIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5" />
    </svg>
  );
}

export function PercentIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 19L19 5" />
      <circle cx="7" cy="7" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

export function BoltIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2L4 14h6l-1 8 9-12h-6z" />
    </svg>
  );
}

export function UsersIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6" />
      <circle cx="17.5" cy="9" r="2.7" />
      <path d="M15.5 14.2c2.7.4 5 2.6 5 5.8" />
    </svg>
  );
}

export function BanIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M5.5 5.5l13 13" />
    </svg>
  );
}

export function CarIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 16V11l2.5-5h13L21 11v5" />
      <path d="M3 16h18v2H3zM6 18v1M18 18v1" />
      <circle cx="7.5" cy="16" r="1.5" />
      <circle cx="16.5" cy="16" r="1.5" />
    </svg>
  );
}

export function TrophyIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0z" />
      <path d="M8 5H4v2a4 4 0 0 0 4 4M16 5h4v2a4 4 0 0 1-4 4" />
      <path d="M12 13v4M9 21h6M9.5 17h5l.5 4h-6z" />
    </svg>
  );
}

export function PeopleIcon(props) {
  return <UsersIcon {...props} />;
}

export function StarIcon({ filled = true, ...props }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M12 2.5l2.9 6.2 6.6.7-5 4.6 1.4 6.6L12 17.3 5.9 20.6l1.4-6.6-5-4.6 6.6-.7z" />
    </svg>
  );
}

export function QuoteIcon(props) {
  return (
    <svg width="30" height="24" viewBox="0 0 30 24" fill="currentColor" {...props}>
      <path d="M0 24V14.4Q0 7.2 3.9 3.6 7.8 0 13.5 0v4.8Q9.6 4.8 7.5 7.5 5.4 10.2 5.4 14.4H12V24ZM16.5 24V14.4Q16.5 7.2 20.4 3.6 24.3 0 30 0v4.8Q26.1 4.8 24 7.5 21.9 10.2 21.9 14.4H28.5V24Z" />
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ChevronLeft(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

export function ChevronRight(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 6l9 7 9-7" />
    </svg>
  );
}

export function PinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function SendIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
    </svg>
  );
}

// Brand-colored badge icons (fixed brand colors, not theme-tinted via currentColor).
export function FacebookIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        d="M15.4 12.5h-2v7.4h-3v-7.4H8.9V10h1.5V8.5c0-1.9 1-3 3.2-3h2v2.5h-1.3c-.5 0-.9.4-.9.9V10h2.2l-.2 2.5z"
        fill="#fff"
      />
    </svg>
  );
}

export function InstagramIcon(props) {
  const gradId = useId();
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" {...props}>
      <defs>
        <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDD55" />
          <stop offset="30%" stopColor="#FF543E" />
          <stop offset="60%" stopColor="#C837AB" />
          <stop offset="100%" stopColor="#5851DB" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#${gradId})`} />
      <rect x="6.3" y="6.3" width="11.4" height="11.4" rx="3.5" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.3" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="16.2" cy="7.8" r="1.1" fill="#fff" />
    </svg>
  );
}

export function XIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.3 3h3l-7.5 8.6L22.5 21h-6.9l-5.4-6.6L3.9 21H.9l8-9.2L1 3h7.1l4.9 6.1L18.3 3zm-1.2 16h1.7L7 5H5.2l11.9 14z" />
    </svg>
  );
}

export function YoutubeIcon(props) {
  return (
    <svg {...base} width="16" height="16" {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
      <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zM9.5 9.5h3.8v1.6h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4V9.5z" />
    </svg>
  );
}

export function PinterestIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.36 9.32-.09-.79-.17-2.01.04-2.88.19-.79 1.22-5.03 1.22-5.03s-.31-.62-.31-1.54c0-1.44.84-2.52 1.87-2.52.88 0 1.31.66 1.31 1.46 0 .89-.57 2.22-.86 3.45-.24 1.03.52 1.87 1.54 1.87 1.85 0 3.09-2.37 3.09-5.18 0-2.14-1.44-3.74-4.06-3.74-2.96 0-4.8 2.21-4.8 4.67 0 .85.25 1.45.64 1.91.18.21.2.3.14.54-.05.18-.16.63-.21.81-.07.26-.27.35-.5.25-1.4-.57-2.05-2.1-2.05-3.82 0-2.84 2.4-6.25 7.15-6.25 3.82 0 6.33 2.76 6.33 5.73 0 3.92-2.16 6.85-5.35 6.85-1.07 0-2.08-.58-2.42-1.24 0 0-.58 2.3-.7 2.74-.21.77-.63 1.55-1.02 2.15A10 10 0 1 0 12 2z" />
    </svg>
  );
}

export function TiktokIcon(props) {
  const notePath =
    "M16.5 2h-3v13.5a2.5 2.5 0 1 1-2.5-2.5c.17 0 .34.02.5.05V9.9a5.6 5.6 0 0 0-.5-.02 5.6 5.6 0 1 0 5.6 5.62V8.3c1.1.79 2.44 1.25 3.9 1.25V6.55c-2.1 0-3.9-1.6-3.9-3.55V2z";
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" {...props}>
      <rect width="24" height="24" rx="6" fill="#000000" />
      <path d={notePath} fill="#25F4EE" transform="translate(-0.6,0.6)" />
      <path d={notePath} fill="#FE2C55" transform="translate(0.6,-0.6)" />
      <path d={notePath} fill="#ffffff" />
    </svg>
  );
}

export function GoogleIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" {...props}>
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  );
}

const iconMap = {
  diamond: DiamondIcon,
  shield: ShieldIcon,
  award: AwardIcon,
  clock: ClockIcon,
  percent: PercentIcon,
  bolt: BoltIcon,
  users: UsersIcon,
  ban: BanIcon,
  car: CarIcon,
  trophy: TrophyIcon,
  people: PeopleIcon,
  star: StarIcon,
  pin: PinIcon,
  heart: HeartIcon,
  check: CheckIcon,
};

export function Icon({ name, ...props }) {
  const Cmp = iconMap[name];
  if (!Cmp) return null;
  return <Cmp {...props} />;
}
