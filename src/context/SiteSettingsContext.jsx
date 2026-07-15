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
  facebook_url: "",
  instagram_url: "",
  tiktok_url: "",
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
      .then(({ settings }) => setSettings(settings))
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
