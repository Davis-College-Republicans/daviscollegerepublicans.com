/**
 * Current officers only.
 *
 * This site does not keep a history of past rosters. Add a person to PEOPLE,
 * then add one OFFICERS row for the seat they hold now. `start`, when known,
 * is the ISO date they took that seat (YYYY-MM-DD). Bump LEADERSHIP_LAST_UPDATED.
 *
 * Bio edits stay on PEOPLE. Role changes: update that person's OFFICERS row.
 */

export type Person = {
  slug: string;
  name: string;
  bio: string;
  /** Shown as a "Founder" tag everywhere. */
  founder?: boolean;
  email?: string;
  discordHandle?: string;
  discordUserId?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  url?: string;
  photoSrc?: string;
};

/** One person in one seat, serving now. */
export type OfficerSeat = {
  personSlug: string;
  role: string;
  /** CSI / AggieLife title on paper (Primary / Secondary / Treasurer). */
  csiTitle?: string;
  /** ISO date they took the seat. Omit until known — the range heading stays hidden. */
  start?: string;
};

export const PEOPLE: Person[] = [
  {
    slug: "lucas-featherston",
    name: "Lucas Featherston",
    photoSrc: "/team/lucas-featherston.webp",
    bio: `
    My name is Lucas Featherston. I am a Second Year Plant Sciences Student with an emphasis in Plant Breeding, Genetics, and Genomics. My interests include but are not limited to politics, government, history, political activism, agriculture, genetics, entomology. Politically I would describe myself as a paleoconservative, highly influenced by Pat J. Buchanan, Edmund Burke, and C.S. Lewis. I am a proud Roman Catholic as well! When not studying for an exam or farming I like to spend time outdoors fishing, hiking, and sometimes working on cars.
    `.trim(),
  },
  {
    slug: "david-brownlee",
    name: "David Brownlee",
    photoSrc: "/team/david-brownlee.webp",
    bio: `
    David Brownlee is a third year Political Science and Economics major with an interest in a career in political administration. Highly influenced by the works of Pat Buchanan, Ayn Rand, and Milton Friedman; he has identified himself as a student of right wing economic and social thought for the last 5 years. David's primary interests are in debate, reading, and discussion.     When not discussing politics, you can find him talking about the most recent historical topic he's invested himself into studying.
    `.trim(),
  },
  {
    slug: "vijit-dua",
    name: "Vijit Dua",
    photoSrc: "/team/vijit-dua.webp",
    discordHandle: "vijitdua",
    discordUserId: "933604018951974924",
    url: "https://vijitdua.com",
    bio: `
    Hey everyone! I’m Vijit Dua, a 4th year Comp. Sci. major at UC Davis, international student, nerd, music producer, & DCR’s Tech Officer 🤖.

    I’m a moderate at heart. I leaned liberal as a freshman, but being called a Nazi for mild disagreements with my own side (I’m Indian, not an Aryan German, so I’m not sure how that math works 🤔) pushed me to the center, and watching people celebrate Charlie Kirk’s death, a non-official figure whose only “crime” was having an audience and differing opinions, pushed me further.

    Today I lean right on policy, since Republicans currently seem more focused on enforcing the law than on identity politics, but that can change and I judge issues case by case - I'm still a moderate at heart with no long-term affiliation. But, after I wrote an independent journal piece on UC Davis polarization, DCR was the one group that heard me out, and I love it here. Outside the club I bike, run, make music, and code like a nerd.

    Got ideas for our tech or website? Reach out!
    `.trim(),
  },
];

export const OFFICERS: OfficerSeat[] = [
  { personSlug: "lucas-featherston", role: "President" },
  { personSlug: "david-brownlee", role: "Communications Officer" },
  { personSlug: "vijit-dua", role: "Tech Officer" },
];

export const LEADERSHIP_LAST_UPDATED = "October 22, 2026";

/* ----------------------------------------------------------------------- */
/* Derived — don't edit below for content changes.                          */
/* ----------------------------------------------------------------------- */

const ROLE_ORDER = [
  "President",
  "Co-President",
  "Vice President",
  "Internal Vice President",
  "External Vice President",
  "Treasurer",
  "Secretary",
  "Communications Officer",
  "Tech Officer",
];

export function getPerson(slug: string): Person | undefined {
  return PEOPLE.find((p) => p.slug === slug);
}

export function allPersonSlugs(): string[] {
  return PEOPLE.map((p) => p.slug);
}

export function discordProfileUrl(person: Person): string | undefined {
  if (!person.discordUserId) return undefined;
  return `https://discord.com/users/${person.discordUserId}`;
}

export type Officer = {
  person: Person;
  role: string;
  csiTitle?: string;
  start?: string;
};

function toOfficer(seat: OfficerSeat): Officer | null {
  const person = getPerson(seat.personSlug);
  if (!person) return null;
  return {
    person,
    role: seat.role,
    csiTitle: seat.csiTitle,
    start: seat.start,
  };
}

function byRole(a: Officer, b: Officer) {
  const ra = ROLE_ORDER.indexOf(a.role);
  const rb = ROLE_ORDER.indexOf(b.role);
  if (ra !== rb) return (ra === -1 ? 99 : ra) - (rb === -1 ? 99 : rb);
  return (a.start ?? "").localeCompare(b.start ?? "") || a.person.name.localeCompare(b.person.name);
}

/** Everyone listed in OFFICERS, in role order. */
export function currentOfficers(): Officer[] {
  return OFFICERS.map(toOfficer)
    .filter((o): o is Officer => o !== null)
    .sort(byRole);
}

export function officerFor(slug: string): Officer | undefined {
  return currentOfficers().find((o) => o.person.slug === slug);
}

/**
 * Date the current roster last changed: the latest seat start.
 * Undefined when nobody is listed.
 */
export function currentRosterStart(): string | undefined {
  const starts = currentOfficers()
    .map((o) => o.start)
    .filter((start): start is string => Boolean(start))
    .sort();
  return starts.at(-1);
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function fmtMonth(iso: string): string {
  const [y, m] = iso.split("-").map(Number);
  return `${MONTHS[(m ?? 1) - 1]} ${y}`;
}

export function fmtRange(start: string, end: string | null): string {
  return end ? `${fmtMonth(start)} – ${fmtMonth(end)}` : `${fmtMonth(start)} – Current`;
}
