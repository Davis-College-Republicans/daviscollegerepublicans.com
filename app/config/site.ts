/** Club links / public contact info that may change. */
export const SITE_NAME = "Davis College Republicans";
export const SITE_URL = "https://daviscollegerepublicans.com";
export const SITE_DESCRIPTION =
  "UC Davis College Republicans — weekly meetings, community, and conservative politics for students at UC Davis.";
/** Absolute URL for Open Graph / Discord / Twitter link previews. */
export const SITE_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/** Shared title + description + Open Graph / Twitter tags for link embeds. */
export function pageMeta({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME;
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return [
    { title: fullTitle },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: SITE_OG_IMAGE },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: SITE_NAME },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: SITE_OG_IMAGE },
    { name: "theme-color", content: "#c41230" },
  ];
}

export const DISCORD_INVITE_URL = "https://discord.gg/7npZ52GmUQ";

/** Statewide affiliation — linked from About. */
export const CCR_NAME = "California College Republicans";
export const CCR_URL = "https://cacollegegop.org/";

/** Public inbox. Leave empty to hide email on /contact. */
export const CLUB_EMAIL = "";

/**
 * Club links. Used by the footer icon row and the /links page.
 * Paths starting with "/" stay on this site; full URLs open in a new tab.
 * icon names are rendered by LinkIcon. description is optional (shown on /links).
 */
export const SOCIAL_LINKS = [
  {
    label: "Join our Discord!",
    description: "Discord Server · Free to join",
    href: "/discord",
    icon: "discord",
  },
  {
    label: "Become a Member!",
    href: "/join",
    icon: "member",
  },
  {
    label: "AggieLife",
    description: "Official club page",
    href: "https://aggielife.ucdavis.edu/daviscollegerepublicans/home/",
    icon: "aggielife",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/daviscollegerepublicans/",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/DavisCollegeRepublicans/",
    icon: "facebook",
  },
  { label: "X/Twitter", href: "https://x.com/daviscollegerep", icon: "twitter" },
] as const;

/** Copy around the /links page. The buttons themselves are SOCIAL_LINKS. */
export const LINK_TREE = {
  title: SITE_NAME,
  tagline: "🇺🇸 The Best Party on Campus! 🇺🇸",
  bio: "Check our Instagram for meeting info!",
  avatar: "/DCR.webp",
  links: SOCIAL_LINKS,
} as const;

/** Website (not club) technical support — shown on /support. */
export const WEBSITE_SUPPORT_DISCORD_HANDLE = "vijitdua";
export const WEBSITE_SUPPORT_URL = "https://vijitdua.com/support";
export const WEBSITE_SUPPORT_LABEL = (() => {
  const url = new URL(WEBSITE_SUPPORT_URL);
  return `${url.host}${url.pathname}`.replace(/\/$/, "");
})();

/**
 * Technical Maintainers block on /support (webpage, domain, source).
 * AGENT NOTE / HUMAN NOTE: bump TECHNICAL_OWNERS_LAST_UPDATED when any field below changes.
 */
export const WEBSITE_MAINTAINER_NAME = "Vijit Dua";
export const WEBSITE_MAINTAINER_URL = "https://vijitdua.com";
export const DOMAIN_OWNER_NAME = "David Brownlee";
export const DOMAIN_OWNER_DISCORD_HANDLE = "dalekvaderofborg";
export const GITHUB_REPO_URL =
  "https://github.com/Davis-College-Republicans/daviscollegerepublicans.com";
export const GITHUB_REPO_LABEL = (() => {
  const url = new URL(GITHUB_REPO_URL);
  return `${url.host}${url.pathname}`.replace(/\/$/, "");
})();
export const TECHNICAL_OWNERS_LAST_UPDATED = "Oct 6, 2026";

/**
 * Discord webhooks for /contact and /join.
 * These ship in the client bundle on a static/SSG host — use dedicated
 * webhooks you can rotate. Leave empty to hide the form.
 */
export const DISCORD_CONTACT_WEBHOOK_URL = "";
export const DISCORD_JOIN_WEBHOOK_URL = "";

/** Shown on the Meetings section — bump when the schedule changes. */
export const MEETINGS_LAST_UPDATED = "October 15, 2026";

export const MEETINGS_SUMMARY = "Wednesdays · Wellman 206 · 7:00 PM";
