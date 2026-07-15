import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import Captcha from "../../components/Captcha";

export default function LoginPage() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [captcha, setCaptcha] = useState(null);

  if (user) {
    return <Navigate to={location.state?.from?.pathname || "/admin"} replace />;
  }

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setError("");
    if (!captcha) {
      setError("Please complete the \"I'm not a robot\" verification.");
      return;
    }
    setSubmitting(true);
    try {
      await login(email, password, captcha);
      navigate(location.state?.from?.pathname || "/admin", { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-svh items-center justify-center bg-bg-alt px-6">
      <div className="w-full max-w-sm rounded-xl border border-border bg-panel p-8">
        <span className="eyebrow">Swift Chauffeurs</span>
        <h1 className="mb-6 font-serif text-2xl font-medium text-text">Dashboard Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-sm border border-border-strong bg-bg px-4 py-3 text-sm text-text outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold tracking-wide text-text-muted uppercase">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-sm border border-border-strong bg-bg px-4 py-3 text-sm text-text outline-none focus:border-gold"
            />
          </div>

          <Captcha onVerifiedChange={setCaptcha} />

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting || !captcha}
            className="btn btn-gold mt-2 w-full disabled:opacity-60"
          >
            {submitting ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
