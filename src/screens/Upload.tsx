import { ChangeEvent, useState } from "react";
import "./upload.css";
import { requiredDocumentsReady, validateUploadFile } from "../uploadValidation";

type UploadStatus = "idle" | "uploading" | "success" | "error";

type UploadState = {
  status: UploadStatus;
  progress: number;
  fileName?: string;
  fileSize?: string;
  message?: string;
};

type DocumentItem = {
  id: string;
  name: string;
  requirement: "Required" | "Optional";
  helper: string;
  icon: "identity" | "income" | "education" | "bank";
};

const documents: DocumentItem[] = [
  {
    id: "aadhaar",
    name: "Aadhaar Card",
    requirement: "Optional",
    helper: "Upload only if the selected scheme specifically requires it.",
    icon: "identity",
  },
  {
    id: "income",
    name: "Income Certificate",
    requirement: "Required",
    helper: "A clear copy of a valid income certificate.",
    icon: "income",
  },
  {
    id: "education",
    name: "Educational Certificate",
    requirement: "Required",
    helper: "Your latest relevant marksheet or certificate.",
    icon: "education",
  },
  {
    id: "bank",
    name: "Bank Passbook",
    requirement: "Optional",
    helper: "A clear copy of the account details page, if requested.",
    icon: "bank",
  },
];

const initialUploads = documents.reduce<Record<string, UploadState>>((uploads, item) => {
  uploads[item.id] = { status: "idle", progress: 0 };
  return uploads;
}, {});

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

function ShieldIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3 5 6v5c0 4.6 2.5 8.1 7 10 4.5-1.9 7-5.4 7-10V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m9 12 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M5 15v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="m6 12 4 4 8-8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.5v6M12 17v.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DocumentIcon({ type }: { type: DocumentItem["icon"] }) {
  if (type === "identity") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="8.5" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M5.5 16c.5-1.8 1.5-2.7 3-2.7s2.5.9 3 2.7M14 10h4M14 14h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "income") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 3h9l4 4v14H6V3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M15 3v5h4M9 12h6M9 16h6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "education") {
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
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 9h18M5 9v9M9.5 9v9M14.5 9v9M19 9v9M3 20h18M4 7l8-4 8 4H4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function UploadScreen({
  onBack,
  onContinue,
}: {
  onBack: () => void;
  onContinue: () => void;
}) {
  const [uploads, setUploads] = useState<Record<string, UploadState>>(initialUploads);
  const [actionMessage, setActionMessage] = useState("");

  function updateUpload(id: string, next: Partial<UploadState>) {
    setUploads((current) => ({
      ...current,
      [id]: { ...current[id], ...next },
    }));
  }

  function handleFile(id: string, event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    const validation = validateUploadFile(file);
    if (!validation.valid) {
      updateUpload(id, {
        status: "error",
        progress: 0,
        fileName: file.name,
        fileSize: formatSize(file.size),
        message: validation.message,
      });
      return;
    }

    updateUpload(id, {
      status: "uploading",
      progress: 8,
      fileName: file.name,
      fileSize: formatSize(file.size),
      message: "Simulating secure upload…",
    });

    let progress = 8;
    const timer = window.setInterval(() => {
      progress = Math.min(progress + 18, 100);
      if (progress === 100) {
        window.clearInterval(timer);
        updateUpload(id, {
          status: "success",
          progress: 100,
          message: "Ready in this prototype",
        });
      } else {
        updateUpload(id, { progress });
      }
    }, 170);
  }

  function removeFile(id: string) {
    setUploads((current) => ({
      ...current,
      [id]: { status: "idle", progress: 0 },
    }));
  }

  function openPicker(id: string) {
    document.getElementById(`file-${id}`)?.click();
  }

  function handleContinue() {
    const requiredReady = requiredDocumentsReady(uploads);
    setActionMessage(
      requiredReady
        ? "Required files are ready for the next prototype step."
        : "Upload the required sample documents before continuing.",
    );
    if (requiredReady) onContinue();
  }

  const successfulCount = Object.values(uploads).filter((item) => item.status === "success").length;

  return (
    <main className="screen-upload app-shell">
      <section className="phone-frame upload-frame" aria-label="Janaseva document upload">
        <header className="upload-header">
          <div className="header-title-row">
            <button className="back-button" type="button" onClick={onBack} aria-label="Go back">
              <ArrowLeftIcon />
            </button>
            <div className="header-copy">
              <p>JANASEVA</p>
              <h1>Upload Documents</h1>
            </div>
            <span className="step-count">Step 3 of 4</span>
          </div>
          <div
            className="progress-track"
            role="progressbar"
            aria-label="Application progress"
            aria-valuemin={1}
            aria-valuemax={4}
            aria-valuenow={3}
          >
            <span />
          </div>
        </header>

        <div className="upload-scroll">
          <section className="upload-intro" aria-labelledby="upload-title">
            <div className="intro-icon">
              <UploadIcon />
            </div>
            <div>
              <p className="section-kicker">PREPARE YOUR APPLICATION</p>
              <h2 id="upload-title">Documents required</h2>
              <p>Upload the documents needed for your selected scheme.</p>
            </div>
          </section>

          <aside className="prototype-note">
            <strong>Prototype upload</strong>
            <p>
              Files stay in this browser session and are not submitted to any government department.
            </p>
          </aside>

          <div className="format-row">
            <span>Accepted: PDF, JPG, PNG</span>
            <span>Maximum: 5 MB each</span>
          </div>

          <section className="document-list" aria-label="Documents to upload">
            {documents.map((document) => {
              const upload = uploads[document.id];
              return (
                <article className={`document-card status-${upload.status}`} key={document.id}>
                  <input
                    className="file-input"
                    id={`file-${document.id}`}
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                    onChange={(event) => handleFile(document.id, event)}
                    aria-label={`Choose file for ${document.name}`}
                  />

                  <div className="document-heading">
                    <span className="document-icon">
                      <DocumentIcon type={document.icon} />
                    </span>
                    <div className="document-title">
                      <div>
                        <h3>{document.name}</h3>
                        <span className={`requirement ${document.requirement.toLowerCase()}`}>
                          {document.requirement}
                        </span>
                      </div>
                      <p>{document.helper}</p>
                    </div>
                  </div>

                  {upload.status === "idle" && (
                    <button
                      className="upload-button"
                      type="button"
                      onClick={() => openPicker(document.id)}
                    >
                      <UploadIcon /> Upload file
                    </button>
                  )}

                  {upload.status === "uploading" && (
                    <div className="upload-state" aria-live="polite">
                      <div className="file-row">
                        <div className="file-copy">
                          <p title={upload.fileName}>{upload.fileName}</p>
                          <span>
                            {upload.fileSize} · Uploading {upload.progress}%
                          </span>
                        </div>
                        <span className="progress-number">{upload.progress}%</span>
                      </div>
                      <div
                        className="file-progress"
                        role="progressbar"
                        aria-label={`${document.name} upload progress`}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={upload.progress}
                      >
                        <span style={{ width: `${upload.progress}%` }} />
                      </div>
                    </div>
                  )}

                  {upload.status === "success" && (
                    <div className="upload-state success-state" aria-live="polite">
                      <div className="status-row">
                        <span className="status-icon success">
                          <CheckIcon />
                        </span>
                        <div className="file-copy">
                          <p title={upload.fileName}>{upload.fileName}</p>
                          <span>
                            {upload.fileSize} · {upload.message}
                          </span>
                        </div>
                      </div>
                      <div className="file-actions">
                        <button type="button" onClick={() => openPicker(document.id)}>
                          Replace
                        </button>
                        <button
                          className="remove-button"
                          type="button"
                          onClick={() => removeFile(document.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  )}

                  {upload.status === "error" && (
                    <div className="upload-state error-state" aria-live="assertive">
                      <div className="status-row">
                        <span className="status-icon error">
                          <ErrorIcon />
                        </span>
                        <div className="file-copy">
                          <p>Upload failed</p>
                          <span>{upload.message}</span>
                        </div>
                      </div>
                      <button
                        className="retry-button"
                        type="button"
                        onClick={() => openPicker(document.id)}
                      >
                        Retry
                      </button>
                    </div>
                  )}
                </article>
              );
            })}
          </section>

          <aside className="privacy-note">
            <span className="privacy-icon">
              <ShieldIcon />
            </span>
            <p>
              <strong>Your privacy matters.</strong>
              Your documents contain personal information. Upload only documents required by the
              scheme and use secure storage.
            </p>
          </aside>
        </div>

        <footer className="upload-actions">
          <p className="action-status" aria-live="polite">
            {actionMessage || `${successfulCount} of ${documents.length} documents ready`}
          </p>
          <button className="continue-button" type="button" onClick={handleContinue}>
            Continue <span aria-hidden="true">→</span>
          </button>
          <button
            className="save-button"
            type="button"
            onClick={() => setActionMessage("Progress saved in this browser prototype.")}
          >
            Save and continue later
          </button>
        </footer>
      </section>
    </main>
  );
}
