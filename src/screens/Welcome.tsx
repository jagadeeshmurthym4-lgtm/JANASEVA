import "./welcome.css";

const languages = [
  { id: "kn", name: "ಕನ್ನಡ", detail: "Kannada" },
  { id: "en", name: "English", detail: "English" },
  { id: "hi", name: "हिन्दी", detail: "Hindi" },
] as const;

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

function CitizenIllustration() {
  return (
    <svg
      aria-label="A friendly illustration of Indian citizens using a public service on a phone"
      className="citizen-illustration"
      viewBox="0 0 342 178"
      role="img"
    >
      <defs>
        <filter id="shadow" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="5" floodColor="#12345A" floodOpacity=".10" stdDeviation="5" />
        </filter>
      </defs>

      <path
        d="M25 149c21-24 43-18 61-7 22 14 35 5 53-4 23-12 42-9 63 2 25 14 41 5 57-2 21-10 41-4 57 11"
        fill="#E7F5EE"
      />
      <circle cx="40" cy="50" r="21" fill="#F3F7FA" />
      <circle cx="305" cy="43" r="17" fill="#FFF3D9" />
      <path d="M37 36v28M23 50h28" stroke="#B7DCCA" strokeWidth="3" strokeLinecap="round" />
      <path d="M298 43h14M305 36v14" stroke="#E4B84E" strokeWidth="3" strokeLinecap="round" />

      {/* Service card */}
      <g filter="url(#shadow)">
        <rect x="121" y="17" width="101" height="136" rx="18" fill="white" stroke="#DDE6EC" />
        <rect x="133" y="31" width="77" height="30" rx="9" fill="#EDF4F8" />
        <circle cx="148" cy="46" r="7" fill="#16865B" />
        <path
          d="m145 46 2 2 4-5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="160" y="40" width="37" height="4" rx="2" fill="#12345A" />
        <rect x="160" y="49" width="27" height="3" rx="1.5" fill="#94A8B7" />
        <rect x="133" y="72" width="77" height="23" rx="8" fill="#F7FAFB" />
        <circle cx="146" cy="83.5" r="5" fill="#F2C26B" />
        <rect x="157" y="79" width="39" height="3" rx="1.5" fill="#708999" />
        <rect x="157" y="86" width="27" height="3" rx="1.5" fill="#C5D1D8" />
        <rect x="133" y="105" width="77" height="28" rx="9" fill="#16865B" />
        <rect x="152" y="116" width="39" height="5" rx="2.5" fill="white" opacity=".95" />
      </g>

      {/* Woman */}
      <g>
        <path d="M69 94c4-18 17-27 31-27 15 0 25 10 28 28l-9 13H78L69 94Z" fill="#12345A" />
        <circle cx="101" cy="60" r="17" fill="#B96E45" />
        <path
          d="M85 59c1-18 11-24 21-21 10 2 14 11 12 22-6-3-11-7-15-13-4 7-10 11-18 12Z"
          fill="#263E50"
        />
        <path d="M74 103c7-12 16-18 27-18 14 0 23 8 29 24l-5 41H74v-47Z" fill="#E59045" />
        <path d="M91 86c4 8 14 8 19 0l7 5c-7 15-25 15-33 1l7-6Z" fill="#F3C8A9" />
        <path d="M77 111c11 4 21 10 29 20" stroke="#F7D278" strokeWidth="7" strokeLinecap="round" />
        <circle cx="95" cy="61" r="1.4" fill="#263E50" />
        <circle cx="107" cy="61" r="1.4" fill="#263E50" />
        <path d="M97 69c3 2 6 2 9 0" stroke="#7C3E2D" strokeWidth="1.8" strokeLinecap="round" />
      </g>

      {/* Man */}
      <g>
        <circle cx="248" cy="61" r="17" fill="#995A38" />
        <path
          d="M231 56c1-16 11-22 22-19 8 2 13 10 12 19-8-1-16-5-22-10-2 5-6 8-12 10Z"
          fill="#263E50"
        />
        <path d="M218 108c5-16 15-24 30-24 14 0 25 9 29 25l-2 41h-58l1-42Z" fill="#16865B" />
        <path d="M239 85c4 8 14 8 18 0l7 7c-8 12-24 12-32 0l7-7Z" fill="#E8B18F" />
        <path d="M224 110c-9 2-18 8-24 18" stroke="#995A38" strokeWidth="9" strokeLinecap="round" />
        <path d="M199 128 187 116" stroke="#995A38" strokeWidth="9" strokeLinecap="round" />
        <circle cx="242" cy="61" r="1.4" fill="#263E50" />
        <circle cx="254" cy="61" r="1.4" fill="#263E50" />
        <path d="M244 69c3 2 6 2 9 0" stroke="#713723" strokeWidth="1.8" strokeLinecap="round" />
      </g>

      <path d="M51 151h240" stroke="#BBD8C9" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function WelcomeScreen({
  language,
  onLanguageChange,
  onGetStarted,
}: {
  language: string;
  onLanguageChange: (language: string) => void;
  onGetStarted: () => void;
}) {
  return (
    <main className="screen-welcome app-shell">
      <section className="phone-frame" aria-labelledby="welcome-title">
        <header className="brand-header">
          <div className="brand-lockup">
            <JanasevaMark />
            <div>
              <p className="brand-name">JANASEVA</p>
              <p className="brand-subtitle">Government schemes, made simple.</p>
            </div>
          </div>
          <span className="concept-label">An independent concept project</span>
        </header>

        <section className="welcome-copy">
          <p className="eyebrow">WELCOME TO JANASEVA</p>
          <h1 id="welcome-title">
            Your benefits.
            <br />
            Your language.
          </h1>
          <p className="intro">
            Discover government schemes, check eligibility and understand how to apply.
          </p>
        </section>

        <div className="illustration-wrap">
          <CitizenIllustration />
        </div>

        <fieldset className="language-section">
          <legend>Choose your preferred language</legend>
          <div className="language-grid">
            {languages.map((item) => {
              const selected = language === item.id;
              return (
                <label className={`language-card${selected ? " selected" : ""}`} key={item.id}>
                  <input
                    checked={selected}
                    name="language"
                    onChange={() => onLanguageChange(item.id)}
                    type="radio"
                    value={item.id}
                  />
                  <span className="language-name" lang={item.id}>
                    {item.name}
                  </span>
                  <span className="language-detail">{item.detail}</span>
                  <span className="selection-dot" aria-hidden="true">
                    <span />
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <footer className="bottom-section">
          <button className="start-button" type="button" onClick={onGetStarted}>
            <span>Get Started</span>
            <span aria-hidden="true">→</span>
          </button>
          <p>You can change your language anytime.</p>
        </footer>
      </section>
    </main>
  );
}
