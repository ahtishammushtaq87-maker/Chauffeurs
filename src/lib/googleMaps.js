// Loads the Google Maps JS API (Places library) exactly once, on demand.
// The quote form renders on nearly every page, so this is memoised: the first
// caller injects the <script>, everyone else awaits the same promise.

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

let loader = null;

export function loadGooglePlaces() {
  if (!API_KEY) return Promise.reject(new Error("No Google Maps API key configured"));
  if (window.google?.maps?.places) return Promise.resolve(window.google.maps.places);
  if (loader) return loader;

  loader = new Promise((resolve, reject) => {
    // With loading=async the script's onload can fire before the Places library
    // is ready, so use Google's documented callback instead.
    const CALLBACK = "__initGooglePlaces";
    window[CALLBACK] = () => {
      delete window[CALLBACK];
      window.google?.maps?.places
        ? resolve(window.google.maps.places)
        : reject(new Error("Google Places failed to initialise"));
    };

    const script = document.createElement("script");
    script.src =
      `https://maps.googleapis.com/maps/api/js?key=${API_KEY}` +
      `&libraries=places&loading=async&callback=${CALLBACK}`;
    script.async = true;
    script.onerror = () => {
      loader = null; // let a later attempt retry
      reject(new Error("Google Maps script failed to load"));
    };
    document.head.appendChild(script);
  });

  return loader;
}

export const hasGoogleMapsKey = Boolean(API_KEY);
