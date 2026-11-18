import { useLayoutEffect, useRef, useState } from "react";
import "./tracking.css";

type IconName = "applications" | "explore" | "home" | "profile";

function Icon({ name, size = 24 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "profile":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5.5 20c.7-4 2.8-6 6.5-6s5.8 2 6.5 6" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="m3 11 9-8 9 8" />
          <path d="M5.5 9.5V21h13V9.5M9.5 21v-6h5v6" />
        </svg>
      );
    case "explore":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
        </svg>
      );
    case "applications":
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 3.5h6V6H9zM9 11h6M9 15h4" />
        </svg>
      );
  }
}

function ArrowLeftIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="m15 18-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="m3 9 9-5 9 5-9 5-9-5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7 12v4.5c2.8 2 7.2 2 10 0V12M21 9v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3 2.8 20h18.4L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M12 9v5M12 17.5v.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M9.5 9a2.7 2.7 0 0 1 5.2.9c0 2.1-2.7 2.3-2.7 4M12 17.5v.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const timeline = [
  {
    title: "Application Submitted",
    detail: "15 November 2026",
    status: "Completed",
    type: "complete",
  },
  {
    title: "Documents Received",
    detail: "15 November 2026",
    status: "Completed",
    type: "complete",
  },
  {
    title: "Under Verification",
    detail: "Last updated 18 November 2026",
    status: "Current stage",
    type: "current",
  },
  {
    title: "Final Decision",
    detail: "Waiting for an update",
    status: "Pending",
    type: "pending",
  },
];

const details = [
  ["Application ID", "JAN-2026-00125"],
  ["Submission date", "15 November 2026"],
  ["Selected scheme", "Education Scholarship"],
  ["Current status", "Under Verification"],
  ["Last updated", "18 November 2026"],
];

export default function TrackingScreen({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (destination: "home" | "explore" | "applications" | "profile") => void;
}) {
  const [actionMessage, setActionMessage] = useState("");
  const [showGuidance, setShowGuidance] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    scrollContainerRef.current?.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <main className="screen-tracking app-shell">
      <section className="phone-frame tracking-frame" aria-label="Janaseva application tracking">
        <header className="tracking-header">
          <button className="icon-button" type="button" onClick={onBack} aria-label="Go back">
            <ArrowLeftIcon />
          </button>
          <div className="header-copy">
            <p>JANASEVA</p>
            <h1>My Applications</h1>
          </div>
          <button
            className="icon-button"
            type="button"
            aria-label="Open profile"
            onClick={() => onNavigate("profile")}
          >
            <Icon name="profile" size={22} />
          </button>
        </header>

        <div className="tracking-scroll" ref={scrollContainerRef}>
          <section className="tracking-intro" aria-labelledby="tracking-title">
            <p className="section-kicker">APPLICATION UPDATES</p>
            <h2 id="tracking-title">Track your applications</h2>
            <p>Stay updated on your scheme applications.</p>
          </section>

          <aside className="prototype-banner">
            <span>ILLUSTRATIVE PROTOTYPE</span>
            <p>This sample does not represent or track a real government application.</p>
          </aside>

          <article className="application-card">
            <div className="application-topline">
              <span className="sample-badge">SAMPLE APPLICATION</span>
              <span className="status-badge">Under Verification</span>
            </div>
            <div className="application-main">
              <span className="scheme-icon">
                <EducationIcon />
              </span>
              <div>
                <p>Education</p>
                <h3>Education Scholarship</h3>
                <span>Illustrative scheme name</span>
              </div>
            </div>
            <div className="application-meta">
              <div>
                <span>Application ID</span>
                <strong>JAN-2026-00125</strong>
              </div>
              <div>
                <span>Submitted</span>
                <strong>15 Nov 2026</strong>
              </div>
            </div>
          </article>

          <section className="content-card timeline-card" aria-labelledby="timeline-title">
            <div className="section-heading">
              <div>
                <p className="section-kicker">PROGRESS</p>
                <h2 id="timeline-title">Application status</h2>
              </div>
              <span className="step-badge">Step 3 of 4</span>
            </div>
            <ol className="status-timeline">
              {timeline.map((item) => (
                <li className={item.type} key={item.title}>
                  <span className="timeline-marker" aria-hidden="true">
                    {item.type === "complete" ? "✓" : item.type === "current" ? "3" : "4"}
                  </span>
                  <div className="timeline-copy">
                    <div>
                      <h3>{item.title}</h3>
                      <span className="timeline-status">{item.status}</span>
                    </div>
                    <p>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="content-card details-card" aria-labelledby="details-title">
            <div className="section-heading">
              <div>
                <p className="section-kicker">SAMPLE RECORD</p>
                <h2 id="details-title">Application details</h2>
              </div>
            </div>
            <dl>
              {details.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="attention-card" aria-labelledby="attention-title">
            <div className="attention-heading">
              <span className="alert-icon">
                <AlertIcon />
              </span>
              <div>
                <span>EXAMPLE ERROR STATE</span>
                <h2 id="attention-title">Action Required</h2>
              </div>
            </div>
            <p>Your uploaded document could not be verified.</p>
            <div className="attention-actions">
              <button
                className="review-button"
                type="button"
                onClick={() => setActionMessage("Opening the sample document review flow.")}
              >
                Review Document
              </button>
              <button
                className="retry-button"
                type="button"
                onClick={() => setActionMessage("Verification retry simulated for this prototype.")}
              >
                Try Again
              </button>
            </div>
            <p className="action-message" aria-live="polite">
              {actionMessage}
            </p>
          </section>

          <section className="support-card">
            <span className="help-icon">
              <HelpIcon />
            </span>
            <div>
              <h2>Need help with this application?</h2>
              <p>Read simple guidance about application steps and document checks.</p>
            </div>
            <button type="button" onClick={() => setShowGuidance(true)}>
              View application guidance <span aria-hidden="true">→</span>
            </button>
          </section>

          <p className="official-note">
            For official decisions, refer to the relevant government department.
          </p>
        </div>

        <nav className="bottom-nav" aria-label="Main navigation">
          {[
            { name: "Home", icon: "home" as IconName },
            { name: "Explore", icon: "explore" as IconName },
            { name: "My Applications", icon: "applications" as IconName },
            { name: "Profile", icon: "profile" as IconName },
          ].map((item) => (
            <button
              className={item.name === "My Applications" ? "active" : ""}
              key={item.name}
              type="button"
              onClick={() =>
                onNavigate(
                  item.name === "Home"
                    ? "home"
                    : item.name === "Explore"
                      ? "explore"
                      : item.name === "My Applications"
                        ? "applications"
                        : "profile",
                )
              }
              aria-current={item.name === "My Applications" ? "page" : undefined}
            >
              <Icon name={item.icon} size={22} />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        {showGuidance && (
          <div
            className="dialog-backdrop"
            role="presentation"
            onMouseDown={() => setShowGuidance(false)}
          >
            <section
              className="guidance-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="guidance-title"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <span className="dialog-icon">
                <HelpIcon />
              </span>
              <p className="dialog-kicker">PROTOTYPE GUIDANCE</p>
              <h2 id="guidance-title">Application guidance</h2>
              <p>
                Review status updates carefully, respond only to document requests shown on a
                verified official source, and keep your application ID private.
              </p>
              <div className="dialog-note">
                This guidance is illustrative. Contact the relevant government department for
                official help or decisions.
              </div>
              <button type="button" onClick={() => setShowGuidance(false)}>
                Close guidance
              </button>
            </section>
          </div>
        )}
      </section>
    </main>
  );
}
