import { Link } from "react-router";
import { SITE_NAME, SOCIAL_LINKS } from "../config/site";
import { LinkIcon } from "./link-icon";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/links", label: "Links" },
  { to: "/contact", label: "Contact" },
  { to: "/support", label: "Support" },
] as const;

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
  return (
    <nav className="site-footer-social" aria-label="Social links">
      {SOCIAL_LINKS.map(({ label, href, icon }) => {
        const iconNode = <LinkIcon name={icon} size={18} />;
        if (isInternal(href)) {
          return (
            <Link key={href} to={href} aria-label={label}>
              {iconNode}
            </Link>
          );
        }
        return (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            {iconNode}
          </a>
        );
      })}
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

  const reach = (
    <DotNav className="site-footer-reach" ariaLabel="Site pages" items={NAV_LINKS} />
  );

  return (
    <footer className="site-footer">
      <div className="site-footer-mobile">
        {credits}
        {reach}
        <SocialBar />
      </div>

      <div className="site-footer-desktop">
        <div className="site-footer-desktop-left">{credits}</div>
        <div className="site-footer-desktop-right">
          {reach}
          <SocialBar />
        </div>
      </div>
    </footer>
  );
}
