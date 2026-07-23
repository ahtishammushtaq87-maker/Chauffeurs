import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BoltIcon, SearchIcon } from "./Icons";
import { apiJson } from "../lib/api";
import { useAddressAutocomplete } from "../hooks/useAddressAutocomplete";

const inputClasses =
  "w-full rounded-sm border border-border-strong bg-bg/60 px-3 py-2.5 text-[13px] text-text outline-none transition-colors placeholder:text-text-faint focus:border-gold sm:px-4 sm:py-3 sm:text-sm";

const addressClasses =
  "w-full rounded-sm border border-border bg-bg/60 px-3 py-2.5 pl-9 text-[13px] text-text outline-none transition-colors placeholder:text-text-faint focus:border-gold sm:px-4 sm:py-3 sm:pl-10 sm:text-sm";

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
  notes: "",
  consent: false,
};

export default function QuoteForm({ submitLabel = "Get My Quote", heading, defaultVehicle = "" }) {
  const { pathname } = useLocation();
  const [form, setForm] = useState(() => ({ ...emptyForm, vehicle: defaultVehicle }));
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const pickupRef = useRef(null);
  const destinationRef = useRef(null);

  const setField = (name) => (value) => setForm((f) => ({ ...f, [name]: value }));
  useAddressAutocomplete(pickupRef, setField("pickupAddress"));
  useAddressAutocomplete(destinationRef, setField("destinationAddress"));

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
    setStatus("submitting");
    try {
      await apiJson("/quotes", "POST", {
        ...form,
        sourcePath: pathname,
      });
      setForm({ ...emptyForm, vehicle: defaultVehicle });
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
    <div className="w-full rounded border border-border-strong bg-panel/85 p-4 backdrop-blur-m sm:p-8">
      <h2 className="mb-4 text-base font-bold tracking-wide text-text uppercase sm:mb-5 sm:text-lg">
        {heading || (
          <>
            Get An <BoltIcon width={16} height={16} className="mb-0.5 inline text-gold" /> <span className="text-gold">Instant Quote</span>
          </>
        )}
      </h2>

      <form className="flex flex-col gap-2.5 sm:gap-3.5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
          <input className={inputClasses} name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
          <input className={inputClasses} name="passengers" placeholder="Passengers" value={form.passengers} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
          <input className={inputClasses} type="tel" name="contactNo" placeholder="Contact No" value={form.contactNo} onChange={handleChange} />
          <input className={inputClasses} type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
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

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3.5">
          <input
            className={`${inputClasses} text-text-muted`}
            type="text"
            name="pickupDate"
            placeholder="Pick-up mm/dd/yy"
            aria-label="Select Pick-up Date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            value={form.pickupDate}
            onChange={handleChange}
          />
          <input
            className={`${inputClasses} text-text-muted`}
            type="text"
            name="pickupTime"
            placeholder="Pickup Time"
            aria-label="Pickup Time"
            onFocus={(e) => (e.target.type = "time")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            value={form.pickupTime}
            onChange={handleChange}
          />
          <input
            className={`${inputClasses} col-span-2 sm:col-span-1`}
            type="number"
            min="0"
            name="hours"
            placeholder="Number of Hours"
            value={form.hours}
            onChange={handleChange}
          />
        </div>

        <div className="relative">
          <SearchIcon width={16} height={16} className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-text-faint sm:left-3.5" />
          <input
            ref={pickupRef}
            className={addressClasses}
            name="pickupAddress"
            placeholder="Enter Pick-up address"
            autoComplete="off"
            value={form.pickupAddress}
            onChange={handleChange}
          />
        </div>
        <div className="relative">
          <SearchIcon width={16} height={16} className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-text-faint sm:left-3.5" />
          <input
            ref={destinationRef}
            className={addressClasses}
            name="destinationAddress"
            placeholder="Enter destination address"
            autoComplete="off"
            value={form.destinationAddress}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="notes" className="mb-1.5 block text-[13px] font-medium text-gold sm:text-sm">
            Any special requests?
          </label>
          <textarea
            id="notes"
            className={`${inputClasses} min-h-20 resize-y`}
            name="notes"
            rows={2}
            placeholder="e.g. It's his/her bachelorette — can we have their name on the screen when they board?"
            value={form.notes}
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
          <Link to="/privacy-policy-swift-chauffeurs" className="text-red-600 hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link to="/terms-conditions" className="text-red-600 hover:underline">
            Terms &amp; Conditions
          </Link>
          .
        </p>

        {error && <p className="text-xs text-red-500">{error}</p>}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={status === "submitting"}
          className="btn btn-gold mt-1.5 w-full py-3 text-sm normal-case text-white disabled:opacity-60 sm:py-4 sm:text-base"
        >
          {status === "submitting" ? "Submitting…" : submitLabel}
        </button>
      </form>
    </div>
  );
}
