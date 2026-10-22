import { currentOfficers, currentRosterStart, fmtRange } from "../config/leadership";
import { TeamMember } from "./team-member";

/** The people in office now. One date range, no past rosters. */
export function LeadershipTimeline(): React.ReactNode {
  const officers = currentOfficers();
  const start = currentRosterStart();
  if (officers.length === 0) return null;

  return (
    <div className="leadership-history">
      <section className="history-term">
        {start ? (
          <h2 className="history-range title-plain">{fmtRange(start, null)}</h2>
        ) : null}
        <ul className="team-list history-team-list">
          {officers.map(({ person, role, csiTitle, start: seatStart }) => (
            <TeamMember
              key={`${person.slug}-${seatStart ?? "current"}`}
              person={person}
              role={role}
              csiTitle={csiTitle}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
