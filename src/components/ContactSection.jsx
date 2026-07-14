import { useState } from "react";
import { useLocation } from "react-router-dom";
import { PhoneIcon, MailIcon, PinIcon } from "./Icons";
import PlaceholderImage from "./PlaceholderImage";
import { dealershipImg } from "../data/content";
import { apiJson } from "../lib/api";

const PHONE_1 = "+1 (615) 882-1722";
const PHONE_2 = "+1 (201) 979-7374";
const EMAIL = "contact@swiftchauffeurs.com";

const inputClasses =
  "w-full rounded-sm border border-border-strong bg-panel px-4 py-3.5 text-sm text-text outline-none transition-colors placeholder:text-text-faint focus:border-gold";

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  interest: "",
  hearAbout: "",
  message: "",
};

export default function ContactSection() {
  const { pathname } = useLocation();
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setStatus("submitting");
    try {
      await apiJson("/appointments", "POST", { ...form, sourcePath: pathname });
      setForm(emptyForm);
      setStatus("success");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <section className="px-6 py-16 md:px-16 lg:px-24">
      <div className="mx-auto grid max-w-(--breakpoint-xl) grid-cols-1 items-stretch gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="eyebrow">Get in Touch</span>
          <h2 className="mb-4 font-serif text-[34px] leading-tight font-medium text-text">
            Let's Find Your
            <br />
            Perfect Car.
          </h2>
          <p className="mb-6.5 max-w-md text-[15px] text-text-muted">
            Have questions or ready to get started? We're here to help.
          </p>

          <ul className="mb-7.5 flex flex-col gap-3.5 text-sm text-text-muted">
            <li className="flex items-center gap-3">
              <PhoneIcon width={18} height={18} className="flex-shrink-0 text-gold" />
              <a href={`tel:${PHONE_1.replace(/[^\d+]/g, "")}`} className="transition-colors hover:text-gold">
                {PHONE_1}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon width={18} height={18} className="flex-shrink-0 text-gold" />
              <a href={`tel:${PHONE_2.replace(/[^\d+]/g, "")}`} className="transition-colors hover:text-gold">
                {PHONE_2}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MailIcon width={18} height={18} className="flex-shrink-0 text-gold" />
              <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-gold">
                {EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <PinIcon width={18} height={18} className="flex-shrink-0 text-gold" />
              Nashville, TN, USA
            </li>
          </ul>

          {status === "success" ? (
            <div className="rounded-sm border border-border-strong bg-panel p-6 text-center">
              <h3 className="mb-2 text-base font-semibold text-text">Message Received</h3>
              <p className="text-sm text-text-muted">Thanks for reaching out — we'll get back to you shortly.</p>
              <button type="button" onClick={() => setStatus("idle")} className="btn btn-outline mt-5">
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <input className={inputClasses} name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
                <input className={inputClasses} name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <input className={inputClasses} type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
                <input className={inputClasses} type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <select className={`${inputClasses} text-text-muted`} name="interest" value={form.interest} onChange={handleChange}>
                  <option value="">I'm Interested In</option>
                  <option value="buying">Buying a Vehicle</option>
                  <option value="selling">Selling / Trading</option>
                  <option value="financing">Financing</option>
                  <option value="service">Service</option>
                </select>
                <select className={`${inputClasses} text-text-muted`} name="hearAbout" value={form.hearAbout} onChange={handleChange}>
                  <option value="">How Did You Hear About Us?</option>
                  <option value="google">Google</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <textarea className={`${inputClasses} resize-y`} name="message" placeholder="Message" rows={5} value={form.message} onChange={handleChange} />
              {error && <p className="text-xs text-red-500">{error}</p>}
              <button type="submit" disabled={status === "submitting"} className="btn btn-gold mt-1 w-full py-4 disabled:opacity-60">
                {status === "submitting" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>

        <div className="relative min-h-80 overflow-hidden rounded border border-border lg:min-h-0 lg:h-full">
          <div className="absolute inset-0">
            <PlaceholderImage src={dealershipImg} label="Dealership Photo" alt="Apex Motors showroom" />
          </div>
          <div className="absolute right-6 bottom-6 left-6 z-10 flex items-start gap-3.5 rounded border border-border-strong bg-bg/75 p-5 text-gold backdrop-blur-md">
            <PinIcon width={18} height={18} className="mt-0.5 flex-shrink-0" />
            <div>
              <p className="mb-2 text-[13px] leading-relaxed text-text">Nashville, TN, USA</p>
              <a
                href="https://maps.google.com/maps?q=Nashville%2C%20TN%2C%20USA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold tracking-wide text-gold uppercase"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
