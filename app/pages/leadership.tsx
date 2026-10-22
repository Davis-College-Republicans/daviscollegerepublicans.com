import type { Route } from "./+types/leadership";
import { LeadershipTimeline } from "../components/leadership-timeline";
import { LEADERSHIP_LAST_UPDATED, currentOfficers } from "../config/leadership";
import { SITE_NAME, pageMeta } from "../config/site";

export function meta(_: Route.MetaArgs) {
  const roster = currentOfficers()
    .map((o) => `${o.person.name}, ${o.role}`)
    .join("; ");
  return pageMeta({
    title: "Team",
    description: roster
      ? `The people running ${SITE_NAME}: ${roster}.`
      : `The people running ${SITE_NAME}.`,
    path: "/leadership",
  });
}

export default function Leadership(): React.ReactNode {
  return (
    <section className="home-section team-page">
      <h1>{`The ${SITE_NAME} Team`}</h1>
      <LeadershipTimeline />
      <div className="support-meta team-record-note">
        <p>Last updated {LEADERSHIP_LAST_UPDATED}.</p>
        <p>
          Officers from before 2026 are only partly listed. Later years stay
          selective too — not every role or personal detail is published.
        </p>
      </div>
    </section>
  );
}
