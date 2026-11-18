import { useEffect, useState } from "react";
import EligibilityScreen from "./screens/Eligibility";
import HomeScreen from "./screens/Home";
import ResultsScreen from "./screens/Results";
import TrackingScreen from "./screens/Tracking";
import UploadScreen from "./screens/Upload";
import WelcomeScreen from "./screens/Welcome";
import { categoryForProfile, type EligibilityProfile, type SchemeCategory } from "./navigation";
import { LanguageRuntime, type Language } from "./i18n";

type Screen = "welcome" | "home" | "eligibility" | "results" | "upload" | "tracking";
type NavigationDestination = "home" | "explore" | "applications" | "profile";

const languageNames: Record<string, string> = {
  kn: "ಕನ್ನಡ",
  en: "English",
  hi: "हिन्दी",
};

function ProfileIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5.5 20c.7-4 2.8-6 6.5-6s5.8 2 6.5 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [profileOpen, setProfileOpen] = useState(false);
  const [exploreCategory, setExploreCategory] = useState<SchemeCategory | "All">("All");
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem("janaseva-language");
    return saved === "en" || saved === "hi" || saved === "kn" ? saved : "kn";
  });

  useEffect(() => {
    window.history.replaceState({ screen: "welcome" }, "", window.location.href);

    const handlePopState = (event: PopStateEvent) => {
      const previousScreen = event.state?.screen as Screen | undefined;
      setProfileOpen(false);
      setScreen(previousScreen || "welcome");
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function navigate(nextScreen: Screen) {
    if (nextScreen === screen) return;
    window.history.pushState({ screen: nextScreen }, "", `#${nextScreen}`);
    setProfileOpen(false);
    setScreen(nextScreen);
  }

  function goBack() {
    if (window.history.state?.screen && screen !== "welcome") {
      window.history.back();
    } else {
      navigate("home");
    }
  }

  function handleNavigation(destination: NavigationDestination) {
    if (destination === "profile") {
      setProfileOpen(true);
      return;
    }
    if (destination === "home") navigate("home");
    if (destination === "explore") openExplore();
    if (destination === "applications") navigate("tracking");
  }

  function openExplore(category?: SchemeCategory) {
    setExploreCategory(category || "All");
    navigate("results");
  }

  function showProfileResults(profile: EligibilityProfile) {
    openExplore(categoryForProfile(profile));
  }

  function updateLanguage(nextLanguage: string) {
    const supported = nextLanguage as Language;
    setLanguage(supported);
    window.localStorage.setItem("janaseva-language", supported);
  }

  return (
    <>
      <LanguageRuntime language={language} />
      {screen === "welcome" && (
        <WelcomeScreen
          language={language}
          onLanguageChange={updateLanguage}
          onGetStarted={() => navigate("home")}
        />
      )}
      {screen === "home" && (
        <HomeScreen
          onEligibility={() => navigate("eligibility")}
          onExploreCategory={openExplore}
          onNavigate={handleNavigation}
        />
      )}
      {screen === "eligibility" && (
        <EligibilityScreen
          onBack={goBack}
          onContinue={showProfileResults}
          onHome={() => navigate("home")}
        />
      )}
      {screen === "results" && (
        <ResultsScreen
          onBack={goBack}
          onApply={() => navigate("upload")}
          initialCategory={exploreCategory}
          onNavigate={handleNavigation}
        />
      )}
      {screen === "upload" && (
        <UploadScreen onBack={goBack} onContinue={() => navigate("tracking")} />
      )}
      {screen === "tracking" && <TrackingScreen onBack={goBack} onNavigate={handleNavigation} />}

      {profileOpen && (
        <div
          className="profile-overlay"
          role="presentation"
          onMouseDown={() => setProfileOpen(false)}
        >
          <section
            className="profile-sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="profile-avatar">
              <ProfileIcon />
            </div>
            <p className="profile-kicker">JANASEVA PROFILE</p>
            <h2 id="profile-title">Your preferences</h2>
            <p className="profile-description">
              Your selected language is kept as you move through the prototype.
            </p>
            <fieldset>
              <legend>Preferred language</legend>
              <div className="profile-languages">
                {Object.entries(languageNames).map(([id, name]) => (
                  <label className={language === id ? "selected" : ""} key={id}>
                    <input
                      type="radio"
                      name="profile-language"
                      value={id}
                      checked={language === id}
                      onChange={() => updateLanguage(id)}
                    />
                    <span lang={id}>{name}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <button className="profile-close" type="button" onClick={() => setProfileOpen(false)}>
              Close profile
            </button>
          </section>
        </div>
      )}
    </>
  );
}
