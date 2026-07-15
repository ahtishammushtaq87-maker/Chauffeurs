import { useEffect } from "react";
import { apiGet } from "../lib/api";

// Mounted once at the top of the app (outside Layout) so the favicon updates
// on every route, including /admin, not just the public site.
export default function FaviconManager() {
  useEffect(() => {
    apiGet("/settings/site")
      .then(({ settings }) => {
        if (!settings.favicon_url) return;
        let link = document.querySelector('link[rel="icon"]');
        if (!link) {
          link = document.createElement("link");
          link.rel = "icon";
          document.head.appendChild(link);
        }
        link.href = settings.favicon_url;
      })
      .catch(() => {});
  }, []);

  return null;
}
