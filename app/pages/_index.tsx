import { Link } from "react-router";
import {
    CCR_NAME,
    CCR_URL,
    DISCORD_JOIN_WEBHOOK_URL,
    MEETINGS_LAST_UPDATED,
    MEETINGS_SUMMARY,
    SITE_NAME,
} from "../config/site";

const PILLARS = [
    {
        title: "Connect",
        body: "Make friends by meeting likeminded individuals to create a political and social network at UC Davis.",
        icon: "/icon-connect.webp",
    },
    {
        title: "Debate",
        body: "Open debate amongst its own base is the greatest strength of the Republican Party. Debate with your peers about different values without judgment.",
        icon: "/icon-debate.webp",
    },
    {
        title: "Discover",
        body: "Build up each other’s experience and promote internship opportunities to advance the career of yourself and your peers.",
        icon: "/icon-discover.webp",
    },
    {
        title: "Outreach",
        body: "Through tabling and guest speaker events, practice co-ordinating political events and defending your beliefs in an unpredictable environment.",
        icon: "/icon-outreach.webp",
    },
] as const;

export default function Home(): React.ReactNode {
    return (
        <>
            <section className="home-hero" aria-label="Mission">
                <img
                    className="home-hero-media"
                    src="/hero-club.webp"
                    alt=""
                    width={1920}
                    height={1080}
                />
                <div className="home-hero-scrim" aria-hidden="true" />
                <div className="home-hero-content">
                    <img
                        className="home-hero-logo"
                        src="/DCR.webp"
                        alt=""
                        width={96}
                        height={96}
                    />
                    <p className="home-hero-brand">{SITE_NAME}</p>
                    <p className="home-hero-text">
                        An informative club for conservative politics at UC Davis — run by
                        Republican students for Republican students. <br /><br />
                        We promote free speech and debate, meet weekly for current events and speakers, and hang out off-campus.
                    </p>
                    <div className="home-hero-actions">
                        <Link to="/join" className="home-hero-link home-hero-link-primary">
                            Join us
                        </Link>
                        <a href="#about" className="home-hero-link">
                            Learn more
                        </a>
                    </div>
                </div>
                <a
                    className="home-hero-scroll"
                    href="#about"
                    aria-label="Scroll to about"
                >
                    <span className="home-hero-scroll-icon" aria-hidden="true" />
                </a>
            </section>

            <section id="about" className="home-section">
                <h2>About us</h2>
                <div className="home-about-row">
                    <p className="home-lead">
                        {SITE_NAME} — associated with the{" "}
                        <a
                            className="brand-link"
                            href={CCR_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {CCR_NAME}
                        </a>{" "}
                        — strives to serve as an informative club for conservative
                        politics at UC Davis, run by Republican students for Republican
                        students. In an environment that is often hostile to right wing
                        politics, our club serves to promote free speech and debate to
                        strengthen our public-speaking skills and own opinions. We meet
                        weekly to discuss current events, host speakers, volunteer in the
                        community, and hang out off-campus.
                    </p>
                    <div className="home-about-marks">
                        <Link
                            className="home-about-mark home-about-mark-dcr"
                            to="/"
                            aria-label={SITE_NAME}
                        >
                            <img src="/DCR.webp" alt="" width={160} height={160} />
                        </Link>
                        <a
                            className="home-about-mark home-about-mark-ccr"
                            href={CCR_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={CCR_NAME}
                        >
                            <img
                                src="/ccr-logo.webp"
                                alt=""
                                width={160}
                                height={160}
                            />
                        </a>
                    </div>
                </div>
            </section>

            <section id="meetings" className="home-section">
                <h2>Meetings</h2>
                <p className="home-meetings-when">{MEETINGS_SUMMARY}</p>
                <p className="home-meetings-note">
                    Last updated {MEETINGS_LAST_UPDATED}. <br />
                    Join our{" "}<Link to="/discord">Discord</Link> for the latest updates.
                </p>
            </section>

            <section id="what-we-do" className="home-section">
                <h2>What we do</h2>
                <p className="home-lead">
                    Every meeting, speaker, and event we run comes back to four things.
                </p>
                <ul className="home-pillars">
                    {PILLARS.map((pillar) => (
                        <li key={pillar.title} className="home-pillar">
                            <div className="home-pillar-copy">
                                <h3>{pillar.title}</h3>
                                <p>{pillar.body}</p>
                            </div>
                            <div className="home-pillar-icon">
                                <img src={pillar.icon} alt="" width={160} height={160} />
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="home-section home-join">
                <h2>Become a member</h2>
                <p className="home-lead">
                    {DISCORD_JOIN_WEBHOOK_URL
                        ? "Interested in joining? Fill out our member interest form and we’ll reach out with everything you need to get started."
                        : "Interested in joining? Head to the join page & learn how to get involved and come to a meeting."}
                </p>
                <Link to="/join" className="button-brand">
                    {DISCORD_JOIN_WEBHOOK_URL ? "Member interest form" : "Join the club"}
                </Link>
            </section>
        </>
    );
}
