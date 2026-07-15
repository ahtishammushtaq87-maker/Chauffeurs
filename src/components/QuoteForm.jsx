import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BoltIcon, SearchIcon } from "./Icons";
import { apiJson } from "../lib/api";
import Captcha from "./Captcha";

const inputClasses =
  "w-full rounded-sm border border-border-strong bg-bg/60 px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-faint focus:border-gold";

const addressClasses =
  "w-full rounded-sm border border-border bg-bg/60 px-4 py-3 pl-10 text-sm text-text outline-none transition-colors placeholder:text-text-faint focus:border-gold";

const serviceTypes = [
  "Point-to-Point",
  "Hourly",
  "Prom",
  "Airport Transfer",
  "Concert Transportation",
  "Wedding Chauffeur",
  "Executive Chauffeur",
  "Birthday",
  "Night Out",
  "Tour",
];

const vehicleOptions = [
  "Luxury Sedan (up to 3 passengers)",
  "Executive SUV (up to 6 passengers)",
  "Stretch Limousine (up to 18 passengers)",
  "Party Bus (up to 15 passengers)",
  "Mercedes Sprinter Van (up to 16 passengers)",
  "Mini Coach (up to 42 passengers)",
  "Motor Coach (up to 56 passengers)",
];

const emptyForm = {
  name: "",
  passengers: "",
  contactNo: "",
  email: "",
  serviceType: "",
  vehicle: "",
  pickupDate: "",
  pickupTime: "",
  hours: "",
  pickupAddress: "",
  destinationAddress: "",
  consent: false,
};

export default function QuoteForm({ submitLabel = "Get My Quote" }) {
  const { pathname } = useLocation();
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [captcha, setCaptcha] = useState(null);

  useEffect(() => {
    if (status !== "success") return;
    const timer = setTimeout(() => setStatus("idle"), 6000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setError("");
    if (!captcha) {
      setError("Please complete the \"I'm not a robot\" verification.");
      return;
    }
    setStatus("submitting");
    try {
      await apiJson("/quotes", "POST", {
        ...form,
        sourcePath: pathname,
        captchaToken: captcha.token,
        captchaAnswer: captcha.answer,
      });
      setForm(emptyForm);
      setCaptcha(null);
      setStatus("success");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="w-full rounded border border-border-strong bg-panel/85 p-6 text-center backdrop-blur-md sm:p-8">
        <h2 className="mb-2 text-lg font-bold tracking-wide text-text uppercase">
          Request <span className="text-gold">Received</span>
        </h2>
        <p className="text-sm text-text-muted">
          Thanks — we've got your details and will be in touch shortly with your quote.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn btn-outline mt-5">
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="w-full rounded border border-border-strong bg-panel/85 p-6 backdrop-blur-md sm:p-8">
      <h2 className="mb-5 text-lg font-bold tracking-wide text-text uppercase">
        Get An <BoltIcon width={16} height={16} className="mb-0.5 inline text-gold" /> <span className="text-gold">Instant Quote</span>
      </h2>

      <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <input className={inputClasses} name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
          <input className={inputClasses} name="passengers" placeholder="Passengers" value={form.passengers} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <input className={inputClasses} type="tel" name="contactNo" placeholder="Contact No" value={form.contactNo} onChange={handleChange} />
          <input className={inputClasses} type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <select className={`${inputClasses} text-text-muted`} name="serviceType" value={form.serviceType} onChange={handleChange}>
            <option value="">Select Service Type</option>
            {serviceTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <select className={`${inputClasses} text-text-muted`} name="vehicle" value={form.vehicle} onChange={handleChange}>
            <option value="">Select Vehicle</option>
            {vehicleOptions.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
          <input
            className={`${inputClasses} text-text-muted`}
            type="date"
            name="pickupDate"
            aria-label="Select Pick-up Date"
            value={form.pickupDate}
            onChange={handleChange}
          />
          <input
            className={`${inputClasses} text-text-muted`}
            type="time"
            name="pickupTime"
            aria-label="Pickup Time"
            value={form.pickupTime}
            onChange={handleChange}
          />
          <input
            className={inputClasses}
            type="number"
            min="0"
            name="hours"
            placeholder="Hours"
            value={form.hours}
            onChange={handleChange}
          />
        </div>

        <div className="relative">
          <SearchIcon width={16} height={16} className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-text-faint" />
          <input
            className={addressClasses}
            name="pickupAddress"
            placeholder="Enter Pick-up address"
            value={form.pickupAddress}
            onChange={handleChange}
          />
        </div>
        <div className="relative">
          <SearchIcon width={16} height={16} className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-text-faint" />
          <input
            className={addressClasses}
            name="destinationAddress"
            placeholder="Enter destination address"
            value={form.destinationAddress}
            onChange={handleChange}
          />
        </div>

        <label className="flex items-start gap-2.5 pt-1 text-xs leading-relaxed text-text-muted">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
            className="mt-0.5 h-4 w-4 flex-shrink-0 accent-gold"
          />
          <span>
            I consent to receive non-marketing text messages from Swift Chauffeurs LLC. Reply HELP for help or STOP
            to opt out.
          </span>
        </label>
        <p className="text-xs text-text-faint">
          View our{" "}
          <Link to="/privacy-policy" className="text-gold hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link to="/terms" className="text-gold hover:underline">
            Terms &amp; Conditions
          </Link>
          .
        </p>

        <Captcha onVerifiedChange={setCaptcha} />

        {error && <p className="text-xs text-red-500">{error}</p>}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={status === "submitting" || !captcha}
          className="btn btn-gold mt-1.5 w-full py-4 disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting…" : submitLabel}
        </button>
      </form>
    </div>
  );
}
