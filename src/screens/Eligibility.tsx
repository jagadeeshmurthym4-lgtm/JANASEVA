import { FormEvent, useState } from "react";
import "./eligibility.css";
import type { EligibilityProfile } from "../navigation";

const regions = {
  States: [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ],
  "Union Territories": [
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi (NCT)",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ],
};

const incomeRanges = [
  "Below ₹1 lakh",
  "₹1–3 lakh",
  "₹3–6 lakh",
  "Above ₹6 lakh",
  "Prefer not to say",
];

const occupations = ["Student", "Farmer", "Employee", "Self-employed", "Other"];

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

function ChevronDownIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="m7 10 5 5 5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="10" width="14" height="11" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10M12 14.5v2.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PersonIcon() {
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

export default function EligibilityScreen({
  onBack,
  onContinue,
  onHome,
}: {
  onBack: () => void;
  onContinue: (profile: EligibilityProfile) => void;
  onHome: () => void;
}) {
  const [region, setRegion] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [income, setIncome] = useState("");
  const [occupation, setOccupation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    onContinue({ region, age, gender, income, occupation });
  }

  return (
    <main className="screen-eligibility app-shell">
      <section className="phone-frame checker-frame" aria-label="Janaseva eligibility checker">
        <header className="checker-header">
          <div className="header-title-row">
            <button className="back-button" type="button" onClick={onBack} aria-label="Go back">
              <ArrowLeftIcon />
            </button>
            <div>
              <p className="header-eyebrow">JANASEVA</p>
              <h1>Check Your Eligibility</h1>
            </div>
            <span className="step-count">Step 1 of 4</span>
          </div>
          <div
            className="progress-track"
            role="progressbar"
            aria-label="Eligibility check progress"
            aria-valuemin={1}
            aria-valuemax={4}
            aria-valuenow={1}
          >
            <span />
          </div>
        </header>

        <form className="checker-form" onSubmit={handleSubmit}>
          <div className="checker-scroll">
            <section className="form-intro" aria-labelledby="form-title">
              <div className="intro-icon">
                <PersonIcon />
              </div>
              <div>
                <p className="section-kicker">TELL US A LITTLE ABOUT YOURSELF</p>
                <h2 id="form-title">Let’s find schemes for you</h2>
                <p>
                  Answer a few simple questions to discover government schemes that may match your
                  profile.
                </p>
              </div>
            </section>

            <div className="form-section">
              <div className="field-group">
                <label htmlFor="region">State / Union Territory</label>
                <p className="field-help" id="region-help">
                  Select where you currently live.
                </p>
                <div className="select-wrap">
                  <select
                    id="region"
                    name="region"
                    required
                    aria-describedby="region-help"
                    value={region}
                    onChange={(event) => setRegion(event.target.value)}
                  >
                    <option value="" disabled>
                      Select your state or territory
                    </option>
                    {Object.entries(regions).map(([group, items]) => (
                      <optgroup label={group} key={group}>
                        {items.map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  <ChevronDownIcon />
                </div>
              </div>

              <div className="field-group">
                <label htmlFor="age">Age group</label>
                <div className="select-wrap">
                  <select
                    id="age"
                    name="age"
                    required
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                  >
                    <option value="" disabled>
                      Select your age group
                    </option>
                    <option>Under 18 years</option>
                    <option>18–24 years</option>
                    <option>25–39 years</option>
                    <option>40–59 years</option>
                    <option>60 years and above</option>
                  </select>
                  <ChevronDownIcon />
                </div>
              </div>

              <fieldset className="field-group">
                <legend>
                  Gender <span>(optional)</span>
                </legend>
                <div className="choice-row gender-row">
                  {["Woman", "Man", "Non-binary", "Prefer not to say"].map((option) => (
                    <label
                      className={gender === option ? "choice-chip selected" : "choice-chip"}
                      key={option}
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={option}
                        checked={gender === option}
                        onChange={(event) => setGender(event.target.value)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="field-group">
                <legend>Annual family income</legend>
                <p className="field-help">Choose the closest approximate range.</p>
                <div className="choice-grid income-grid">
                  {incomeRanges.map((range) => (
                    <label
                      className={income === range ? "radio-card selected" : "radio-card"}
                      key={range}
                    >
                      <input
                        type="radio"
                        name="income"
                        value={range}
                        required
                        checked={income === range}
                        onChange={(event) => setIncome(event.target.value)}
                      />
                      <span className="radio-indicator" aria-hidden="true">
                        <span />
                      </span>
                      <span>{range}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="field-group">
                <legend>Occupation</legend>
                <div className="choice-grid occupation-grid">
                  {occupations.map((item) => (
                    <label
                      className={occupation === item ? "radio-card selected" : "radio-card"}
                      key={item}
                    >
                      <input
                        type="radio"
                        name="occupation"
                        value={item}
                        required
                        checked={occupation === item}
                        onChange={(event) => setOccupation(event.target.value)}
                      />
                      <span className="radio-indicator" aria-hidden="true">
                        <span />
                      </span>
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <aside className="privacy-note">
                <span className="privacy-icon">
                  <LockIcon />
                </span>
                <p>
                  <strong>Your privacy matters.</strong> Your information is used only to help
                  identify potentially relevant schemes.
                </p>
              </aside>

              <p className="matching-note">
                Results are suggestions only and do not guarantee eligibility. Always confirm
                requirements with the official scheme source.
              </p>
            </div>
          </div>

          <footer className="form-actions">
            <p className="submit-status" aria-live="polite">
              {submitted ? "Profile details saved for the next step." : ""}
            </p>
            <button className="continue-button" type="submit">
              Continue <span aria-hidden="true">→</span>
            </button>
            <button className="home-button" type="button" onClick={onHome}>
              Back to Home
            </button>
          </footer>
        </form>
      </section>
    </main>
  );
}
