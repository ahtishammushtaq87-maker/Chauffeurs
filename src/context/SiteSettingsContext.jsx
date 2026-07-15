import { createContext, useContext, useEffect, useState } from "react";
import { apiGet } from "../lib/api";

// Sensible defaults shown before the first fetch resolves (or if it fails),
// matching what used to be hardcoded across the site.
const DEFAULT_SETTINGS = {
  phone_1: "+1 (615) 882-1722",
  phone_2: "+1 (201) 979-7374",
  email: "contact@swiftchauffeurs.com",
  whatsapp_number: "16158821722",
  address: "Nashville, TN, USA",
  facebook_url: "https://facebook.com",
  instagram_url: "https://instagram.com",
  tiktok_url: "https://tiktok.com",
  logo_url: "",
  favicon_url: "",
};

const SiteSettingsContext = createContext(DEFAULT_SETTINGS);

// Fetched once and shared everywhere (header, footer, WhatsApp button, "Call
// Now" CTAs, legal pages) so editing Settings > Contact & Social Links in the
// dashboard updates the whole site without touching any component code.
export function SiteSettingsProvider({ children }) {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  useEffect(() => {
    apiGet("/settings/site")
      .then(({ settings }) => {
        // Only override a default when the backend actually has a value for
        // it — an empty/unset field (social links not filled in yet, etc.)
        // should keep falling back to DEFAULT_SETTINGS instead of going blank.
        const merged = { ...DEFAULT_SETTINGS };
        for (const key in settings) {
          if (settings[key]) merged[key] = settings[key];
        }
        setSettings(merged);
      })
      .catch(() => {});
  }, []);

  return <SiteSettingsContext.Provider value={settings}>{children}</SiteSettingsContext.Provider>;
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}

export function toTelHref(phone) {
  return `tel:${(phone || "").replace(/[^\d+]/g, "")}`;
}
