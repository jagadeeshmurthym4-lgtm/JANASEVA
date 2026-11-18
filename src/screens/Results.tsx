import { useEffect, useMemo, useState } from "react";
import "./results.css";
import type { SchemeCategory } from "../navigation";

type IconName =
  | "agriculture"
  | "applications"
  | "education"
  | "explore"
  | "filter"
  | "home"
  | "housing"
  | "healthcare"
  | "employment"
  | "profile"
  | "women";

type Scheme = {
  id: number;
  category: string;
  name: string;
  description: string;
  icon: IconName;
  tone: string;
};

const schemes: Scheme[] = [
  {
    id: 1,
    category: "Education",
    name: "Education Scholarship",
    description: "Financial assistance for eligible students.",
    icon: "education",
    tone: "blue",
  },
  {
    id: 2,
    category: "Agriculture",
    name: "Farmer Support Scheme",
    description: "Support programmes for eligible farmers.",
    icon: "agriculture",
    tone: "green",
  },
  {
    id: 3,
    category: "Women & Child Welfare",
    name: "Women Welfare Scheme",
    description: "Explore available welfare benefits.",
    icon: "women",
    tone: "warm",
  },
  {
    id: 4,
    category: "Employment",
    name: "Employment Support Programme",
    description: "Explore illustrative skills and employment support listings.",
    icon: "employment",
    tone: "blue",
  },
  {
    id: 5,
    category: "Healthcare",
    name: "Healthcare Assistance Scheme",
    description: "Browse sample listings for healthcare support services.",
    icon: "healthcare",
    tone: "green",
  },
  {
    id: 6,
    category: "Housing",
    name: "Housing Support Scheme",
    description: "Explore illustrative housing assistance opportunities.",
    icon: "housing",
    tone: "warm",
  },
];

const filters: Array<SchemeCategory | "All"> = [
  "All",
  "Education",
  "Agriculture",
  "Employment",
  "Women & Child Welfare",
  "Healthcare",
  "Housing",
];

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
    case "education":
      return (
        <svg {...common}>
          <path d="m3 9 9-5 9 5-9 5-9-5Z" />
          <path d="M7 12v4.5c2.8 2 7.2 2 10 0V12M21 9v6" />
        </svg>
      );
    case "agriculture":
      return (
        <svg {...common}>
          <path d="M12 21V9" />
          <path d="M12 13c-4.5 0-7-2.5-7-7 4.5 0 7 2.5 7 7ZM12 17c4.5 0 7-2.5 7-7-4.5 0-7 2.5-7 7Z" />
        </svg>
      );
    case "women":
      return (
        <svg {...common}>
          <path d="M12 21v-7M9 18h6" />
          <circle cx="12" cy="8" r="5" />
          <path d="M10 8.5c1.5 1.3 3.3 1.3 4.5-.2" />
        </svg>
      );
    case "employment":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5h6v2M3 12h18M10 12v2h4v-2" />
        </svg>
      );
    case "healthcare":
      return (
        <svg {...common}>
          <path d="M12 21S4 16.4 4 9.7C4 6.4 6 4.5 8.6 4.5c1.5 0 2.7.8 3.4 2 .7-1.2 1.9-2 3.4-2C18 4.5 20 6.4 20 9.7 20 16.4 12 21 12 21Z" />
          <path d="M8 12h2l1-2.2 2 4.4 1-2.2h2" />
        </svg>
      );
    case "housing":
      return (
        <svg {...common}>
          <path d="m3 11 9-8 9 8" />
          <path d="M5.5 9v11h13V9M9.5 20v-6h5v6" />
        </svg>
      );
    case "filter":
      return (
        <svg {...common}>
          <path d="M4 6h16M7 12h10M10 18h4" />
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

function InfoIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 11v6M12 7.5v.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function ResultsScreen({
  onBack,
  onApply,
  initialCategory,
  onNavigate,
}: {
  onBack: () => void;
  onApply: () => void;
  initialCategory: SchemeCategory | "All";
  onNavigate: (destination: "home" | "explore" | "applications" | "profile") => void;
}) {
  const [activeFilter, setActiveFilter] = useState<SchemeCategory | "All">(initialCategory);
  const [showFilters, setShowFilters] = useState(false);
  const [sort, setSort] = useState("recommended");
  const [selectedScheme, setSelectedScheme] = useState<Scheme | null>(null);

  useEffect(() => {
    setActiveFilter(initialCategory);
    setShowFilters(false);
  }, [initialCategory]);

  const visibleSchemes = useMemo(() => {
    const filtered =
      activeFilter === "All"
        ? [...schemes]
        : schemes.filter((scheme) => scheme.category === activeFilter);

    if (sort === "name") {
      return filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "category") {
      return filtered.sort((a, b) => a.category.localeCompare(b.category));
    }
    return filtered;
  }, [activeFilter, sort]);

  return (
    <main className="screen-results app-shell">
      <section className="phone-frame results-frame" aria-label="Janaseva scheme discovery results">
        <header className="results-header">
          <button className="icon-button" type="button" onClick={onBack} aria-label="Go back">
            <ArrowLeftIcon />
          </button>
          <div className="header-copy">
            <p>JANASEVA</p>
            <h1>Schemes for You</h1>
          </div>
          <button
            className="icon-button profile-button"
            type="button"
            aria-label="Open profile"
            onClick={() => onNavigate("profile")}
          >
            <Icon name="profile" size={22} />
          </button>
        </header>

        <div className="results-scroll">
          <section className="results-intro" aria-labelledby="results-title">
            <div className="match-art" aria-hidden="true">
              <span className="match-check">✓</span>
              <span className="match-line line-one" />
              <span className="match-line line-two" />
            </div>
            <div>
              <p className="section-kicker">YOUR PERSONALISED RESULTS</p>
              <h2 id="results-title">
                {activeFilter === "All" ? "We found schemes for you" : `${activeFilter} schemes`}
              </h2>
              <p>Based on the information you provided.</p>
            </div>
          </section>

          <section className="results-tools" aria-label="Filter and sort results">
            <button
              className={
                showFilters || activeFilter !== "All" ? "filter-button active" : "filter-button"
              }
              type="button"
              onClick={() => setShowFilters((current) => !current)}
              aria-expanded={showFilters}
            >
              <Icon name="filter" size={19} />
              Filter
              {activeFilter !== "All" && <span className="filter-count">1</span>}
            </button>
            <label className="sort-control">
              <span>Sort:</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                aria-label="Sort schemes"
              >
                <option value="recommended">Recommended</option>
                <option value="name">Name A–Z</option>
                <option value="category">Category</option>
              </select>
            </label>
          </section>

          {showFilters && (
            <section className="filter-panel" aria-label="Choose a scheme category">
              <p>Filter by category</p>
              <div className="filter-chips">
                {filters.map((filter) => (
                  <button
                    className={activeFilter === filter ? "selected" : ""}
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </section>
          )}

          <div className="results-meta" aria-live="polite">
            <p>
              <strong>{visibleSchemes.length}</strong> potential{" "}
              {visibleSchemes.length === 1 ? "match" : "matches"}
            </p>
            <span>Illustrative samples</span>
          </div>
          {activeFilter !== "All" && (
            <button className="clear-category" type="button" onClick={() => setActiveFilter("All")}>
              <span aria-hidden="true">×</span>
              Remove {activeFilter} filter
            </button>
          )}

          <section className="scheme-list" aria-label="Potential scheme matches">
            {visibleSchemes.map((scheme, index) => (
              <article className={`scheme-card ${scheme.tone}`} key={scheme.id}>
                <div className="card-topline">
                  <span className="sample-badge">SAMPLE {String(index + 1).padStart(2, "0")}</span>
                  <span className="match-badge">
                    <span aria-hidden="true">✓</span> Potential match
                  </span>
                </div>
                <div className="scheme-main">
                  <span className="scheme-icon">
                    <Icon name={scheme.icon} size={27} />
                  </span>
                  <div>
                    <p className="scheme-category">{scheme.category}</p>
                    <h3>{scheme.name}</h3>
                    <p className="scheme-description">{scheme.description}</p>
                  </div>
                </div>
                <button
                  className="details-button"
                  type="button"
                  onClick={() => setSelectedScheme(scheme)}
                >
                  View Details <span aria-hidden="true">→</span>
                </button>
              </article>
            ))}
          </section>

          <aside className="information-note">
            <span className="info-icon">
              <InfoIcon />
            </span>
            <p>
              These are potential matches, not confirmed eligibility. Final eligibility is
              determined by the official scheme authority.
            </p>
          </aside>
        </div>

        <nav className="bottom-nav" aria-label="Main navigation">
          {[
            { name: "Home", icon: "home" as IconName },
            { name: "Explore", icon: "explore" as IconName },
            { name: "My Applications", icon: "applications" as IconName },
            { name: "Profile", icon: "profile" as IconName },
          ].map((item) => (
            <button
              className={item.name === "Explore" ? "active" : ""}
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
              aria-current={item.name === "Explore" ? "page" : undefined}
            >
              <Icon name={item.icon} size={22} />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        {selectedScheme && (
          <div
            className="dialog-backdrop"
            role="presentation"
            onMouseDown={() => setSelectedScheme(null)}
          >
            <section
              className="details-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="dialog-title"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className={`dialog-icon ${selectedScheme.tone}`}>
                <Icon name={selectedScheme.icon} size={28} />
              </div>
              <p className="dialog-kicker">ILLUSTRATIVE SAMPLE</p>
              <h2 id="dialog-title">{selectedScheme.name}</h2>
              <p>{selectedScheme.description}</p>
              <div className="dialog-notice">
                This sample is a potential match only. Check the official scheme source for current
                requirements and final eligibility.
              </div>
              <div className="dialog-actions">
                <button type="button" onClick={onApply}>
                  Apply for this scheme
                </button>
                <button type="button" onClick={() => setSelectedScheme(null)}>
                  Close details
                </button>
              </div>
            </section>
          </div>
        )}
      </section>
    </main>
  );
}
