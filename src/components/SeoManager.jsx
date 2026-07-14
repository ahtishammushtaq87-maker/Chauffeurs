import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { apiGet } from "../lib/api";

const DEFAULT_TITLE = "Swift Chauffeurs | Nashville's Premier Chauffeur & Limousine Service";
const DEFAULT_DESCRIPTION =
  "Premium chauffeur and limousine service in Nashville, TN — airport transfers, weddings, proms, corporate travel, and more.";

function setMetaDescription(content) {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", "description");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

// Applies a per-page title/meta description override (set from the dashboard's
// SEO module) on every route change, falling back to the site defaults.
export default function SeoManager() {
  const { pathname } = useLocation();
  const [overrides, setOverrides] = useState(null);

  useEffect(() => {
    apiGet("/seo")
      .then((data) => {
        const map = {};
        data.items.forEach((item) => {
          map[item.path] = item;
        });
        setOverrides(map);
      })
      .catch(() => setOverrides({}));
  }, []);

  useEffect(() => {
    if (!overrides) return;
    const override = overrides[pathname];
    document.title = override?.title?.trim() || DEFAULT_TITLE;
    setMetaDescription(override?.description?.trim() || DEFAULT_DESCRIPTION);
  }, [pathname, overrides]);

  return null;
}
