export function LinkIcon({
  name,
  size = 22,
}: {
  name: string;
  size?: number;
}): React.ReactNode {
  const common = {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    "aria-hidden": true as const,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "discord":
      return (
        <svg {...common}>
          <path d="M8 9.2c1.2-.4 2.5-.6 4-.6s2.8.2 4 .6" />
          <path d="M8.2 15.2c1.1.5 2.4.8 3.8.8s2.7-.3 3.8-.8" />
          <circle cx="9.1" cy="12.4" r="0.7" fill="currentColor" stroke="none" />
          <circle cx="14.9" cy="12.4" r="0.7" fill="currentColor" stroke="none" />
          <path d="M7.2 7.6A15 15 0 0 1 12 6.5a15 15 0 0 1 4.8 1.1c1.6 2.4 2.1 5 1.9 7.6a12 12 0 0 1-3.6 2.1l-1-1.8" />
          <path d="M9.9 15.5l-1 1.8A12 12 0 0 1 5.3 15.2c-.2-2.6.3-5.2 1.9-7.6" />
        </svg>
      );
    case "member":
      return (
        <svg {...common}>
          <path d="M9 18h6" />
          <path d="M10 21h4" />
          <path d="M12 3a6 6 0 0 0-3.2 11.1V16h6.4v-1.9A6 6 0 0 0 12 3z" />
        </svg>
      );
    case "aggielife":
      return (
        <svg {...common}>
          <path d="M12 4 3 8.5 12 13l9-4.5L12 4z" />
          <path d="M7 10.5V15c0 .4.3.8.7 1L12 18.2l4.3-2.2c.4-.2.7-.6.7-1v-4.5" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path d="M14 8.2h2.2" />
          <path d="M14 8.2v-1A2.2 2.2 0 0 0 11.8 5H11" />
          <path d="M14 8.2h-3.2V21" />
          <path d="M10.8 12.4H15" />
        </svg>
      );
    case "twitter":
      return (
        <svg {...common}>
          <path d="M5 5l14 14" />
          <path d="M19 5 5 19" />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="M10 13a5 5 0 0 0 7.1.1l1.4-1.5a5 5 0 0 0-7.1-7.1L10.2 5.7" />
          <path d="M14 11a5 5 0 0 0-7.1-.1L5.5 12.4a5 5 0 0 0 7.1 7.1l1.2-1.2" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M10 13a5 5 0 0 0 7.1.1l1.4-1.5a5 5 0 0 0-7.1-7.1L10.2 5.7" />
          <path d="M14 11a5 5 0 0 0-7.1-.1L5.5 12.4a5 5 0 0 0 7.1 7.1l1.2-1.2" />
        </svg>
      );
  }
}
