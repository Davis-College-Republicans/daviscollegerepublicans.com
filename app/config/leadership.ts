/**
 * Leadership config — PEOPLE (bios) + TENURES (who held which role, when).
 *
 * You never write "terms" by hand. Each tenure is one person in one role for
 * one date range. The site computes the timeline: every date where someone
 * starts or stops becomes a boundary, and each stretch between boundaries is
 * shown with whoever was in office then.
 *
 * Someone leaves / joins:
 *   1. Set `end` on the outgoing tenure.
 *   2. Push a new tenure with `end: null` for the incoming person.
 *   3. Bump LEADERSHIP_LAST_UPDATED.
 *
 * Someone changes role: end the old tenure, add a new one.
 * Bio typo: edit PEOPLE. Don't touch TENURES.
 * Dates are ISO (YYYY-MM-DD). `end: null` = still serving.
 *
 * History before 2026 was not kept in full. The current tenures use
 * 2026-10-01 as the start of the public record, not a sworn-in day.
 * Replace that date when a real start is known. Leave out details the
 * member asked not to publish.
 */

export type Person = {
  slug: string;
  name: string;
  bio: string;
  /** Shown as a "Founder" tag everywhere. */
  founder?: boolean;
  /** One or more public emails. Each is shown as its own mailto link. */
  emails?: readonly string[];
  discordHandle?: string;
  discordUserId?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
  url?: string;
  photoSrc?: string;
};

export type Tenure = {
  personSlug: string;
  role: string;
  /** CSI / AggieLife title on paper (Primary / Secondary / Treasurer). */
  csiTitle?: string;
  start: string;
  end: string | null;
  /** Optional one-liners shown in the timeline next to the join / leave event. */
  startNote?: string;
  endNote?: string;
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
    emails: ["dgbrownlee@ucdavis.edu"],
    discordHandle: "dalekvaderofborg",
    discordUserId: "1338836443572994089",
    instagram: "https://www.instagram.com/davidgbrownlee/",
    twitter: "https://x.com/Davidgbrownlee",
    bio: `
    Hey everyone, I'm David Brownlee. I am a third year student majoring in Political Science & Economics with a previous intended major of History. I am highly influenced by the works of Patrick J. Buchanan, Ayn Rand, and Milton Friedman and have identified myself as a student of right wing economic and social thought for the 5 years. As a self described libertarian nationalist, I take a particular interest in laissez faire economic policies, and the importance of immigration control. My primary extracurricular interests are in history, philosophy, and the military. I also love horror movies, hunting, and woodwork.

    Reach out with any inquiries about the club or potential partnerships!
    `.trim(),
  },
  {
    slug: "vijit-dua",
    name: "Vijit Dua",
    photoSrc: "/team/vijit-dua.webp",
    emails: ["vijdua@ucdavis.edu"],
    discordHandle: "vijitdua",
    discordUserId: "933604018951974924",
    instagram: "https://www.instagram.com/vijitdua/",
    linkedin: "https://www.linkedin.com/in/vijitdua",
    twitter: "https://x.com/vijitdua",
    url: "https://vijitdua.com/links",
    bio: `
    I’m Vijit Dua, a 4th year CS major at UC Davis, international student, coding nerd, music producer, and DCR’s Tech Officer 🤖. I’m a moderate at heart. I used to lean liberal as a freshman, but being called a Nazi for mild disagreements with my own side (I’m Indian, not an Aryan German, not sure how the math works 🤔) and watching people celebrate Charlie Kirk’s death pushed me away from the left to the center. Not that it matters since I'm an international student, but today I lean right on policy, since from my perspective Republicans currently seem more focused on enforcing the law than on identity politics, but that can change and I judge issues case by case. After I wrote an [essay on UC Davis polarization](https://vijitdua.com/blog/WBTZE6mR), DCR was the one group that heard me out, and I love it here.

    Outside the club I bike, run, make music, and code like a nerd. Got ideas for our tech or website? Reach out!
    `.trim(),
  },
];

/** Public record begins in 2026. Earlier terms can be added when someone writes them down. */
const RECORD_START = "2026-10-01";

export const TENURES: Tenure[] = [
  { personSlug: "lucas-featherston", role: "President", start: RECORD_START, end: null },
  { personSlug: "david-brownlee", role: "Communications Officer", start: RECORD_START, end: null },
  { personSlug: "vijit-dua", role: "Tech Officer", start: RECORD_START, end: null },
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
  tenure: Tenure;
};

function toOfficer(t: Tenure): Officer | null {
  const person = getPerson(t.personSlug);
  if (!person) return null;
  return { person, role: t.role, csiTitle: t.csiTitle, tenure: t };
}

function byRole(a: Officer, b: Officer) {
  const ra = ROLE_ORDER.indexOf(a.role);
  const rb = ROLE_ORDER.indexOf(b.role);
  if (ra !== rb) return (ra === -1 ? 99 : ra) - (rb === -1 ? 99 : rb);
  return a.tenure.start.localeCompare(b.tenure.start);
}

/** Active on a given ISO date (default: today). */
export function officersOn(date = todayIso()): Officer[] {
  return TENURES.filter((t) => t.start <= date && (t.end === null || t.end > date))
    .map(toOfficer)
    .filter((o): o is Officer => o !== null)
    .sort(byRole);
}

/** Everyone with `end: null`. */
export function currentOfficers(): Officer[] {
  return TENURES.filter((t) => t.end === null)
    .map(toOfficer)
    .filter((o): o is Officer => o !== null)
    .sort(byRole);
}

/** Every tenure a person has had, newest first. */
export function tenuresFor(slug: string): Officer[] {
  return TENURES.filter((t) => t.personSlug === slug)
    .map(toOfficer)
    .filter((o): o is Officer => o !== null)
    .sort((a, b) => b.tenure.start.localeCompare(a.tenure.start));
}

export function isCurrent(slug: string): boolean {
  return TENURES.some((t) => t.personSlug === slug && t.end === null);
}

export type TimelineSegment = {
  start: string;
  /** null = ongoing */
  end: string | null;
  officers: Officer[];
  isFounding: boolean;
};

/**
 * Split history at every start/end date. Newest segment first.
 * Each segment lists who was in office during it.
 */
export function timeline(): TimelineSegment[] {
  const bounds = new Set<string>();
  for (const t of TENURES) {
    bounds.add(t.start);
    if (t.end) bounds.add(t.end);
  }
  const dates = [...bounds].sort();
  if (dates.length === 0) return [];

  const segs: TimelineSegment[] = [];
  for (let i = 0; i < dates.length; i++) {
    const start = dates[i];
    const end = dates[i + 1] ?? null;
    const officers = TENURES.filter(
      (t) => t.start <= start && (t.end === null || t.end > start),
    )
      .map(toOfficer)
      .filter((o): o is Officer => o !== null)
      .sort(byRole);
    if (officers.length === 0) continue;
    segs.push({ start, end, officers, isFounding: i === 0 });
  }
  return segs.filter((s) => s.end === null || s.end > s.start).reverse();
}

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
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
