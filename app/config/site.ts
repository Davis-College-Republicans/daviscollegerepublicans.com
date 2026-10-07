/** Club links / public contact info that may change. */
export const SITE_NAME = "Davis College Republicans";

export const DISCORD_INVITE_URL = "https://discord.gg/7npZ52GmUQ";

/** Statewide affiliation — linked from About. */
export const CCR_NAME = "California College Republicans";
export const CCR_URL = "https://cacollegegop.org/";

/** Public inbox. Leave empty to hide email on /contact. */
export const CLUB_EMAIL = "";

/** Footer social bar. Internal paths use client routing; full URLs open externally. */
export const SOCIAL_LINKS = [{ label: "Discord", href: "/discord" }] as const;

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
export const MEETINGS_LAST_UPDATED = "October 6, 2026";

export const MEETINGS_SUMMARY = "Wednesdays · Wellman 226 · 7:00 PM";
