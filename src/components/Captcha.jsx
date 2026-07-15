import { useEffect, useRef, useState } from "react";
import { apiGet } from "../lib/api";
import { CheckIcon } from "./Icons";

// Self-hosted "I'm not a robot" verification widget — no external service or
// API key required. The server issues a signed, short-lived math challenge
// (see server/src/utils/captcha.js) and re-verifies the answer when the form
// this widget guards is actually submitted, so it can't be bypassed by
// calling the API directly.
export default function Captcha({ onVerifiedChange }) {
  const [challenge, setChallenge] = useState(null);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [verified, setVerified] = useState(false);
  const [shake, setShake] = useState(false);
  const [loadError, setLoadError] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    onVerifiedChange?.(verified ? { token: challenge?.token, answer } : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verified]);

  const fetchChallenge = async () => {
    setLoading(true);
    setLoadError("");
    try {
      const data = await apiGet("/captcha/challenge");
      setChallenge(data);
    } catch {
      setLoadError("Couldn't load verification. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = async () => {
    if (verified) {
      setVerified(false);
      setChecked(false);
      setAnswer("");
      setChallenge(null);
      return;
    }
    setChecked(true);
    await fetchChallenge();
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handleVerify = (e) => {
    e?.preventDefault();
    if (!challenge || !answer.trim()) return;
    const [aStr, , bStr] = challenge.question.split(" ");
    const expected = Number(aStr) + Number(bStr);
    if (Number(answer.trim()) === expected) {
      setVerified(true);
    } else {
      setShake(true);
      setAnswer("");
      fetchChallenge();
      setTimeout(() => setShake(false), 400);
    }
  };

  return (
    <div className="w-full rounded-sm border border-border-strong bg-bg/60 px-4 py-3.5">
      <button
        type="button"
        onClick={handleToggle}
        aria-pressed={verified}
        className="flex w-full items-center gap-3 text-left"
      >
        <span
          className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-sm border-2 transition-colors ${
            verified ? "border-gold bg-gold" : "border-border-strong bg-bg"
          }`}
        >
          {verified && <CheckIcon width={13} height={13} strokeWidth={3} className="text-[#17140d]" />}
          {loading && !verified && (
            <span className="h-2.5 w-2.5 animate-spin rounded-full border-2 border-text-faint border-t-transparent" />
          )}
        </span>
        <span className="text-sm text-text">{verified ? "Verified — you're not a robot" : "I'm not a robot"}</span>
      </button>

      {loadError && <p className="mt-2 text-xs text-red-500">{loadError}</p>}

      {checked && !verified && challenge && (
        // A plain div, not a <form> — this widget always renders inside another
        // form (quote/contact/login), and nested <form> elements are invalid
        // HTML: the browser silently breaks out of the outer form, turning
        // this "Verify" button into a rogue submit button that fires the
        // outer form early. Enter/click are handled manually instead.
        <div
          className={`mt-3 flex items-center gap-2.5 border-t border-border pt-3 ${shake ? "animate-[shake_0.4s]" : ""}`}
        >
          <label htmlFor="captcha-answer" className="text-xs text-text-muted">
            Quick check — what's {challenge.question}?
          </label>
          <input
            id="captcha-answer"
            ref={inputRef}
            type="text"
            inputMode="numeric"
            autoComplete="off"
            value={answer}
            onChange={(e) => setAnswer(e.target.value.replace(/[^\d]/g, ""))}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleVerify();
              }
            }}
            className="w-14 rounded-sm border border-border-strong bg-bg px-2 py-1 text-center text-sm text-text outline-none focus:border-gold"
          />
          <button type="button" onClick={handleVerify} className="btn btn-outline px-3 py-1.5 text-[11px]">
            Verify
          </button>
        </div>
      )}
    </div>
  );
}
