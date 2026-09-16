import { useEffect, useRef, useState, type FormEvent } from "react";

import {
  createFaceAuthSDK,
  isFaceAuthApiError,
  type CapturePhase,
  type FaceAuthSDK,
  type MendixAuthenticateResult,
  type RegisterResult,
} from "@ascentia/face-auth-sdk";

/**
 * Mendix integration stand-in.
 *
 * Mendix page: Employee ID + Authenticate only.
 * SDK: camera, blink, capture, backend verify, Register overlay when not enrolled.
 */
export function App() {
  const sdkRef = useRef<FaceAuthSDK | null>(null);
  const [employeeId, setEmployeeId] = useState("EMP003");
  const [busy, setBusy] = useState(false);
  const [phase, setPhase] = useState<CapturePhase>("idle");
  const [status, setStatus] = useState(
    "Enter Employee ID and tap Authenticate. If not enrolled, SDK shows Employee Register or Admin Kiosk Login.",
  );
  const [authResult, setAuthResult] = useState<MendixAuthenticateResult | null>(
    null,
  );
  const [registerResult, setRegisterResult] = useState<RegisterResult | null>(
    null,
  );

  const apiBaseUrl =
    (import.meta.env.VITE_API_BASE_URL as string | undefined)?.trim() ||
    (import.meta.env.DEV ? "/api" : undefined);

  useEffect(() => {
    const sdk = createFaceAuthSDK({
      apiBaseUrl,
      title: "Face authentication",
      onPhaseChange: setPhase,
      // Do not clear busy here — camera closes before authenticate/register finishes.
    });
    sdkRef.current = sdk;

    return () => {
      void sdk.destroy();
      sdkRef.current = null;
    };
  }, [apiBaseUrl]);

  const onAuthenticate = async (event: FormEvent) => {
    event.preventDefault();
    const sdk = sdkRef.current;
    if (!sdk || busy) {
      return;
    }

    const id = employeeId.trim();
    if (!id) {
      setStatus("Employee ID is required.");
      setAuthResult(null);
      setRegisterResult(null);
      return;
    }

    if (!apiBaseUrl?.trim()) {
      setStatus("Configure VITE_API_BASE_URL (Debian face-auth API origin).");
      setAuthResult(null);
      setRegisterResult(null);
      return;
    }

    setBusy(true);
    setAuthResult(null);
    setRegisterResult(null);
    setStatus("SDK — camera, blink, capture, then POST /authenticate…");

    try {
      const outcome = await sdk.authenticateOrRegister(id);

      if (outcome.outcome === "authenticated") {
        setAuthResult({
          employeeId: outcome.employeeId,
          authenticated: true,
        });
        setStatus(
          "authenticated: true — Mendix may start its login session / navigation.",
        );
        return;
      }

      if (outcome.outcome === "denied") {
        setAuthResult({
          employeeId: outcome.employeeId,
          authenticated: false,
        });
        setStatus(
          "authenticated: false — face did not match enrollment. Mendix denies login.",
        );
        return;
      }

      if (outcome.outcome === "registered") {
        setRegisterResult(outcome.registration);
        setStatus(
          `${outcome.registration.message} (requestId: ${outcome.registration.requestId}, status: ${outcome.registration.status})`,
        );
        return;
      }

      if (outcome.outcome === "admin_kiosk_session_completed") {
        setStatus(
          "Admin kiosk session ended — workers enrolled at kiosk are ACTIVE immediately.",
        );
        return;
      }
    } catch (error) {
      setAuthResult(null);
      setRegisterResult(null);

      if (isFaceAuthApiError(error)) {
        setStatus(`${error.detail} (${error.code})`);
      } else if (
        error instanceof Error &&
        (error as Error & { code?: string }).code === "CANCELLED"
      ) {
        setStatus("Capture or registration cancelled.");
      } else {
        const message =
          error instanceof Error ? error.message : "Authentication failed.";
        setStatus(message);
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="page">
      <main className="card">
        <img
          className="logo "
          src="/brand/ascentia-labs-logo.png"
          alt="Ascentia Labs"
          width={506}
          height={84}
        />
        {/* <p className="eyebrow">Face authentication</p> */}
        <h1 className="title">Sign in</h1>
        <p className="copy">
          Enter your Employee ID and authenticate. If you are not enrolled,
          register for approval or ask an admin to enroll you at the kiosk.
        </p>

        <form className="form" onSubmit={onAuthenticate}>
          <label className="label" htmlFor="employee-id">
            Employee ID <span className="hint">(from Mendix)</span>
          </label>
          <input
            id="employee-id"
            className="input"
            value={employeeId}
            onChange={(event) => setEmployeeId(event.target.value)}
            placeholder="e.g. EMP003 (employee, no enrollment)"
            autoComplete="off"
            disabled={busy}
          />

          <button
            type="submit"
            className="primary"
            data-busy={busy ? "true" : undefined}
            disabled={busy}
          >
            {busy ? "Working…" : "Authenticate"}
          </button>
        </form>

        <p className="meta">
          Capture phase: {phase}
          {apiBaseUrl ? ` · API ${apiBaseUrl}` : " · API not configured"}
        </p>

        {authResult && (
          <div
            className={authResult.authenticated ? "toast toast-success" : "toast toast-denied"}
            role="status"
            aria-live="polite"
          >
            <strong>
              {authResult.authenticated ? "authenticated: true" : "authenticated: false"}
            </strong>
            <span>employeeId: {authResult.employeeId}</span>
          </div>
        )}

        {registerResult && (
          <div className="toast" role="status" aria-live="polite">
            <strong>registration: {registerResult.status}</strong>
            <span>employeeId: {registerResult.employeeId}</span>
            <span>requestId: {registerResult.requestId}</span>
          </div>
        )}

        <p className="status">{status}</p>

        {/* <section className="integration">
          <p className="integration-title">Mendix wiring with custom API base URL (reference)</p>
          <pre className="integration-code">{`import { createFaceAuthSDK } from "@ascentia/face-auth-sdk";

const sdk = createFaceAuthSDK({
  apiBaseUrl: "${apiBaseUrl ?? "https://face-auth-ascentia.onrender.com"}",
  mountNode: document.getElementById("face-auth-root"),
});

const outcome = await sdk.authenticateOrRegister(employeeId);
if (outcome.outcome === "authenticated") {
  // Mendix login session
} else if (outcome.outcome === "registered") {
  // PENDING — wait for admin portal approve
} else if (outcome.outcome === "admin_kiosk_session_completed") {
  // Path B — admin finished batch enroll at kiosk
}
await sdk.destroy();`}</pre>
        </section> */}
      </main>
    </div>
  );
}
