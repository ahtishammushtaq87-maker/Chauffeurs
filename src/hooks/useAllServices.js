import { useEffect, useState } from "react";
import { apiGet } from "../lib/api";

// All chauffeur services now live in the database (including the site's
// original 7, migrated on server startup), so this is the single source of
// truth for every services slider across the site.
export function useAllServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    apiGet("/services")
      .then((data) => {
        setServices(
          data.services.map((s) => ({
            title: s.title,
            desc: s.excerpt || s.description,
            image: s.image,
            path: `/services/${s.slug}`,
          }))
        );
      })
      .catch(() => {});
  }, []);

  return services;
}
