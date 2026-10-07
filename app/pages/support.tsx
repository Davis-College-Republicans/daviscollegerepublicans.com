import { useState } from "react";
import { Link } from "react-router";
import {
  DOMAIN_OWNER_DISCORD_HANDLE,
  DOMAIN_OWNER_NAME,
  GITHUB_REPO_LABEL,
  GITHUB_REPO_URL,
  SITE_NAME,
  TECHNICAL_OWNERS_LAST_UPDATED,
  WEBSITE_MAINTAINER_NAME,
  WEBSITE_MAINTAINER_URL,
  WEBSITE_SUPPORT_DISCORD_HANDLE,
  WEBSITE_SUPPORT_LABEL,
  WEBSITE_SUPPORT_URL,
} from "../config/site";

type Step = "start" | "website" | "discord" | "external";

export default function Support(): React.ReactNode {
  const [step, setStep] = useState<Step>("start");

  return (
    <section className="home-section page-narrow support-page">
      <div className="support-router" aria-live="polite">
        {step === "start" ? (
          <>
            <h1 className="title-plain">What do you need?</h1>
            <div className="support-choices">
              <Link className="support-choice" to="/contact">
                <span>
                  <strong>Contact the club</strong>
                  <small>
                    Membership, meetings, events, or anything else about DCR.
                  </small>
                </span>
                <span aria-hidden="true">→</span>
              </Link>

              <button
                type="button"
                className="support-choice"
                onClick={() => setStep("website")}
              >
                <span>
                  <strong>Something wrong with the website?</strong>
                  <small>
                    Broken links, bugs, typos, security issues, or confusing UI.
                  </small>
                </span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </>
        ) : null}

        {step === "website" ? (
          <>
            <h1 className="title-plain">
              Something wrong with the website?
            </h1>
            <p>Are you currently in the DCR Discord?</p>
            <div className="support-choices">
              <button
                type="button"
                className="support-choice"
                onClick={() => setStep("discord")}
              >
                <span>
                  <strong>Yes</strong>
                  <small>I’m in the DCR Discord.</small>
                </span>
                <span aria-hidden="true">→</span>
              </button>
              <button
                type="button"
                className="support-choice"
                onClick={() => setStep("external")}
              >
                <span>
                  <strong>No</strong>
                  <small>I need another way to report it.</small>
                </span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </>
        ) : null}

        {step === "discord" ? (
          <>
            <h1 className="title-plain">Website problem</h1>
            <p>
              If you’re in the DCR Discord, ping @
              {WEBSITE_SUPPORT_DISCORD_HANDLE} with the issue. He is the
              current club website maintainer
              <a className="support-footnote" href="#technical-owners">
                *
              </a>
              .
            </p>
            <Link className="support-action" to="/discord">
              Open Discord →
            </Link>
          </>
        ) : null}

        {step === "external" ? (
          <>
            <h1 className="title-plain">Website problem</h1>
            <p>
              Send your technical issue to {WEBSITE_MAINTAINER_NAME}, the
              current {SITE_NAME} website maintainer, through:
            </p>
            <a className="support-action" href={WEBSITE_SUPPORT_URL}>
              Visit {WEBSITE_SUPPORT_LABEL} →
            </a>
          </>
        ) : null}

        {step !== "start" ? (
          <button
            type="button"
            className="support-back"
            onClick={() =>
              setStep(step === "website" ? "start" : "website")
            }
          >
            ← Back
          </button>
        ) : null}
      </div>

      <div className="support-meta" id="technical-owners">
        <h2 className="title-plain support-meta-title">
          <span aria-hidden="true">*</span>Current DCR Website Maintainers
        </h2>
        <p>
          Webpage Maintainer:{" "}
          <a href={WEBSITE_MAINTAINER_URL}>{WEBSITE_MAINTAINER_NAME}</a>{" "}
          (Discord{" "}
          <Link to="/discord">@{WEBSITE_SUPPORT_DISCORD_HANDLE}</Link>)
        </p>
        <p>
          Domain Owner: {DOMAIN_OWNER_NAME} (Discord{" "}
          <Link to="/discord">@{DOMAIN_OWNER_DISCORD_HANDLE}</Link>)
        </p>
        <p>
          Source: <a href={GITHUB_REPO_URL}>{GITHUB_REPO_LABEL}</a>
        </p>
        <p className="support-meta-updated">
          Updated {TECHNICAL_OWNERS_LAST_UPDATED}
        </p>
      </div>
    </section>
  );
}
