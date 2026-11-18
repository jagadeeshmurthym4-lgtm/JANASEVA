import { useMemo, useState } from "react";
import "./home.css";
import type { SchemeCategory } from "../navigation";

type IconName =
  | "agriculture"
  | "applications"
  | "education"
  | "employment"
  | "explore"
  | "healthcare"
  | "home"
  | "housing"
  | "profile"
  | "search"
  | "women";

const categories: { name: string; icon: IconName }[] = [
  { name: "Education", icon: "education" },
  { name: "Agriculture", icon: "agriculture" },
  { name: "Employment", icon: "employment" },
  { name: "Women & Child Welfare", icon: "women" },
  { name: "Healthcare", icon: "healthcare" },
  { name: "Housing", icon: "housing" },
];

const schemes = [
  {
    category: "Education",
    title: "Student scholarship schemes",
    description: "Explore sample listings for education support and scholarships.",
    icon: "education" as IconName,
    tone: "blue",
  },
  {
    category: "Agriculture",
    title: "Farmer support schemes",
    description: "Browse illustrative examples of agriculture and farmer services.",
    icon: "agriculture" as IconName,
    tone: "green",
  },
  {
    category: "Women & Child Welfare",
    title: "Women welfare schemes",
    description: "Discover sample listings focused on women and family welfare.",
    icon: "women" as IconName,
    tone: "warm",
  },
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
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 4 4" />
        </svg>
      );
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
    case "employment":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5h6v2M3 12h18M10 12v2h4v-2" />
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

function JanasevaMark() {
  return (
    <svg aria-hidden="true" className="brand-mark" viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="15" fill="#12345A" />
      <circle cx="19" cy="18" r="5" fill="white" />
      <circle cx="31.5" cy="20.5" r="3.5" fill="#8ED2B5" />
      <path
        d="M10.5 34.5C11.8 28.8 14.6 26 19 26s7.2 2.8 8.5 8.5"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M27 29.5c1.1-1.8 2.6-2.7 4.5-2.7 3 0 5 2 6 5.9"
        stroke="#8ED2B5"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HomeScreen({
  onEligibility,
  onExploreCategory,
  onNavigate,
}: {
  onEligibility: () => void;
  onExploreCategory: (category?: SchemeCategory) => void;
  onNavigate: (destination: "home" | "explore" | "applications" | "profile") => void;
}) {
  const [search, setSearch] = useState("");

  const visibleSchemes = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return schemes;
    return schemes.filter(
      (scheme) =>
        scheme.title.toLowerCase().includes(query) || scheme.category.toLowerCase().includes(query),
    );
  }, [search]);

  return (
    <main className="screen-home app-shell">
      <section className="phone-frame dashboard-frame" aria-label="Janaseva home dashboard">
        <div className="dashboard-scroll">
          <header className="dashboard-header">
            <div className="dashboard-brand">
              <JanasevaMark />
              <div>
                <p className="brand-name">JANASEVA</p>
                <p className="brand-subtitle">Government schemes, made simple.</p>
              </div>
            </div>
            <button
              className="profile-button"
              type="button"
              aria-label="Open profile"
              onClick={() => onNavigate("profile")}
            >
              <Icon name="profile" size={22} />
            </button>
          </header>

          <section className="greeting" aria-labelledby="dashboard-title">
            <p>Namaste! Welcome back.</p>
            <h1 id="dashboard-title">Find government schemes</h1>
            <label className="search-field">
              <span className="sr-only">Search schemes by name or category</span>
              <Icon name="search" size={21} />
              <input
                type="search"
                placeholder="Search schemes by name or category"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
          </section>

          <section className="eligibility-card" aria-labelledby="eligibility-title">
            <div className="eligibility-copy">
              <span className="card-kicker">PERSONALISED FOR YOU</span>
              <h2 id="eligibility-title">Find schemes you’re eligible for</h2>
              <p>Answer a few simple questions to discover benefits.</p>
              <button type="button" onClick={onEligibility}>
                Check Eligibility <span aria-hidden="true">→</span>
              </button>
            </div>
            <div className="eligibility-art" aria-hidden="true">
              <span className="art-person art-person-one" />
              <span className="art-person art-person-two" />
              <span className="art-check">✓</span>
            </div>
          </section>

          <section className="dashboard-section" aria-labelledby="categories-title">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">BROWSE BY NEED</p>
                <h2 id="categories-title">Categories</h2>
              </div>
              <button className="text-button" type="button" onClick={() => onExploreCategory()}>
                View all
              </button>
            </div>
            <div className="category-grid">
              {categories.map((category) => (
                <button
                  className="category-card"
                  key={category.name}
                  type="button"
                  onClick={() => onExploreCategory(category.name as SchemeCategory)}
                  aria-label={`Browse ${category.name} schemes`}
                >
                  <span className="category-icon">
                    <Icon name={category.icon} size={25} />
                  </span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="dashboard-section featured-section" aria-labelledby="featured-title">
            <div className="section-heading">
              <div>
                <p className="section-eyebrow">ILLUSTRATIVE CONTENT</p>
                <h2 id="featured-title">Featured schemes</h2>
              </div>
              <span className="sample-label">SAMPLE</span>
            </div>

            <div className="scheme-list">
              {visibleSchemes.map((scheme) => (
                <article className="scheme-card" key={scheme.title}>
                  <span className={`scheme-icon ${scheme.tone}`}>
                    <Icon name={scheme.icon} size={25} />
                  </span>
                  <div className="scheme-copy">
                    <p>{scheme.category}</p>
                    <h3>{scheme.title}</h3>
                    <span>{scheme.description}</span>
                  </div>
                  <span className="scheme-arrow" aria-hidden="true">
                    →
                  </span>
                </article>
              ))}
              {visibleSchemes.length === 0 && (
                <div className="empty-state">
                  <Icon name="search" size={23} />
                  <p>No sample listings match “{search}”.</p>
                  <button type="button" onClick={() => setSearch("")}>
                    Clear search
                  </button>
                </div>
              )}
            </div>
            <p className="sample-note">
              Sample content for demonstration only. Verify details on official sources before
              applying.
            </p>
          </section>
        </div>

        <nav className="bottom-nav" aria-label="Main navigation">
          {[
            { name: "Home", icon: "home" as IconName },
            { name: "Explore", icon: "explore" as IconName },
            { name: "My Applications", icon: "applications" as IconName },
            { name: "Profile", icon: "profile" as IconName },
          ].map((item) => (
            <button
              className={item.name === "Home" ? "active" : ""}
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
              aria-current={item.name === "Home" ? "page" : undefined}
            >
              <Icon name={item.icon} size={22} />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </section>
    </main>
  );
}
