import { Link } from "react-router";
import { GITHUB_REPO_URL, SITE_NAME, SOCIAL_LINKS } from "../config/site";
import { LinkIcon } from "./link-icon";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/leadership", label: "Team" },
  { to: "/join", label: "Join Us" },
  { to: "/contact", label: "Contact" },
  { to: "/support", label: "Support" },
] as const;

const UTILITY_LINKS = [
  { to: "/directory", label: "Site Directory" },
  { to: GITHUB_REPO_URL, label: "Source Code" },
] as const;

const FOOTER_ICONS = ["discord", "instagram", "twitter", "facebook"] as const;

function isInternal(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

function DotNav({
  items,
  ariaLabel,
  className,
}: {
  items: readonly { to: string; label: string }[];
  ariaLabel: string;
  className?: string;
}): React.ReactNode {
  return (
    <nav className={className} aria-label={ariaLabel}>
      {items.map(({ to, label }, index) => (
        <span key={to} className="site-footer-dot-item">
          {index > 0 ? (
            <span className="site-footer-dot" aria-hidden="true">
              ·
            </span>
          ) : null}
          {isInternal(to) ? (
            <Link to={to}>{label}</Link>
          ) : (
            <a href={to} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          )}
        </span>
      ))}
    </nav>
  );
}

function SocialBar(): React.ReactNode {
  const links = FOOTER_ICONS.flatMap((icon) =>
    SOCIAL_LINKS.filter((item) => item.icon === icon),
  );

  return (
    <nav className="site-footer-social" aria-label="Social links">
      {links.map(({ label, href, icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <LinkIcon name={icon} size={20} />
        </a>
      ))}
      <a href="/links" target="_blank" rel="noopener noreferrer" aria-label="Link tree">
        <LinkIcon name="link" size={20} />
      </a>
    </nav>
  );
}

export function SiteFooter(): React.ReactNode {
  const year = new Date().getFullYear();

  const credits = (
    <div className="site-footer-credits">
      <p>
        © {SITE_NAME} {year}
      </p>
      <p className="site-footer-muted">All rights reserved.</p>
    </div>
  );

  const utility = (
    <DotNav
      className="site-footer-utility"
      ariaLabel="Site utilities"
      items={UTILITY_LINKS}
    />
  );

  const reach = (
    <DotNav className="site-footer-reach" ariaLabel="Site pages" items={NAV_LINKS} />
  );

  return (
    <footer className="site-footer">
      <div className="site-footer-mobile">
        {credits}
        {utility}
        {reach}
        <SocialBar />
      </div>

      <div className="site-footer-desktop">
        <div className="site-footer-desktop-left">
          {credits}
          {utility}
        </div>
        <div className="site-footer-desktop-right">
          <SocialBar />
          {reach}
        </div>
      </div>
    </footer>
  );
}
