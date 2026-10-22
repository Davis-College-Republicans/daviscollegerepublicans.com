import { Link, data } from "react-router";
import type { Route } from "./+types/leadership_.$slug";
import { TeamMember } from "../components/team-member";
import { fmtRange, getPerson, officerFor } from "../config/leadership";
import {
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  metaDescription,
  pageMeta,
} from "../config/site";

export function meta({ params }: Route.MetaArgs) {
  const person = getPerson(params.slug ?? "");
  if (!person) {
    return pageMeta({
      title: "Team",
      description: `The people running ${SITE_NAME}.`,
      path: "/leadership",
    });
  }

  const seat = officerFor(person.slug);
  const role = seat?.role ?? "Member";
  const [first, ...rest] = person.name.split(/\s+/);
  const last = rest.join(" ");
  const bioLead = person.bio.split(/\n\s*\n/)[0] ?? person.bio;
  const description = metaDescription(`${role} at ${SITE_NAME}. ${bioLead}`);
  const sameAs = [person.twitter, person.linkedin, person.instagram, person.url].filter(
    (href): href is string => Boolean(href),
  );

  return [
    ...pageMeta({
      title: person.name,
      description,
      path: `/leadership/${person.slug}`,
      type: "profile",
      image: person.photoSrc,
      imageAlt: person.name,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Person",
        name: person.name,
        url: `${SITE_URL}/leadership/${person.slug}`,
        ...(person.photoSrc ? { image: absoluteUrl(person.photoSrc) } : {}),
        description,
        jobTitle: role,
        affiliation: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        ...(sameAs.length ? { sameAs } : {}),
      },
    }),
    ...(first ? [{ property: "profile:first_name", content: first }] : []),
    ...(last ? [{ property: "profile:last_name", content: last }] : []),
  ];
}

export default function LeadershipPerson({
  params,
}: Route.ComponentProps): React.ReactNode {
  const person = getPerson(params.slug ?? "");
  if (!person) {
    throw data("Not Found", { status: 404 });
  }

  const seat = officerFor(person.slug);

  return (
    <section className="home-section">
      <p className="home-meetings-note">
        <Link className="brand-link" to="/leadership">
          ← Team
        </Link>
      </p>

      <ul className="team-list" style={{ marginTop: "1rem" }}>
        <TeamMember
          person={person}
          role={seat?.role ?? "Member"}
          csiTitle={seat?.csiTitle}
          range={seat ? fmtRange(seat.start, null) : undefined}
          linkName={false}
          heading="h1"
        />
      </ul>
    </section>
  );
}
