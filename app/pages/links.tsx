import { Link } from "react-router";
import type { Route } from "./+types/links";
import { LinkIcon } from "../components/link-icon";
import { LINK_TREE, pageMeta } from "../config/site";

export function meta(_: Route.MetaArgs) {
  return pageMeta({
    title: "Links",
    description: `${LINK_TREE.title} — Discord, membership, and social links.`,
    path: "/links",
  });
}

function isInternal(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export default function LinksPage(): React.ReactNode {
  return (
    <section className="home-section link-tree">
      <img
        className="link-tree-avatar"
        src={LINK_TREE.avatar}
        alt=""
        width={96}
        height={96}
      />
      <h1>{LINK_TREE.title}</h1>
      <p className="link-tree-tagline">{LINK_TREE.tagline}</p>
      <p className="link-tree-bio">{LINK_TREE.bio}</p>

      <ul className="link-tree-list">
        {LINK_TREE.links.map((item) => {
          const body = (
            <>
              <span className="link-tree-icon">
                <LinkIcon name={"icon" in item ? item.icon : ""} />
              </span>
              <span className="link-tree-copy">
                <span className="link-tree-label">{item.label}</span>
                {"description" in item && item.description ? (
                  <span className="link-tree-desc">{item.description}</span>
                ) : null}
              </span>
            </>
          );

          return (
            <li key={item.href}>
              {isInternal(item.href) ? (
                <Link className="link-tree-row" to={item.href}>
                  {body}
                </Link>
              ) : (
                <a
                  className="link-tree-row"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {body}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
