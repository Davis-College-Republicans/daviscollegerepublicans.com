import { Link } from "react-router";
import type { Route } from "./+types/directory";
import { GITHUB_REPO_URL, pageMeta } from "../config/site";

const PAGES = [
  { to: "/", label: "Home" },
  { to: "/join", label: "Join" },
  { to: "/contact", label: "Contact" },
  { to: "/support", label: "Support" },
  { to: "/links", label: "Links" },
  { to: "/discord", label: "Discord" },
  { to: GITHUB_REPO_URL, label: "Source Code" },
] as const;

export function meta(_: Route.MetaArgs) {
  return pageMeta({
    title: "Site Directory",
    description: "Pages on the Davis College Republicans website.",
    path: "/directory",
  });
}

export default function Directory(): React.ReactNode {
  return (
    <section className="home-section page-narrow">
      <h1>Site Directory</h1>
      <ul className="directory-list">
        {PAGES.map(({ to, label }) => (
          <li key={to}>
            {to.startsWith("/") ? (
              <Link to={to}>{label}</Link>
            ) : (
              <a href={to} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
