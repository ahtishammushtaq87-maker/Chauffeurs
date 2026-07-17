import { useEffect, useRef } from "react";
import { loadGooglePlaces } from "../lib/googleMaps";

// Attaches Google Places autocomplete to an existing <input>, so the field keeps
// its own markup and styling. Google writes the picked address straight into the
// DOM node, which a controlled React input would immediately overwrite — hence
// onSelect, which pushes the value back into form state.
export function useAddressAutocomplete(inputRef, onSelect) {
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    let autocomplete;
    let cancelled = false;

    // Enter should pick the highlighted suggestion, not submit the form.
    const onKeyDown = (e) => {
      if (e.key === "Enter" && document.querySelector(".pac-container:not([style*='display: none'])")) {
        e.preventDefault();
      }
    };
    input.addEventListener("keydown", onKeyDown);

    loadGooglePlaces()
      .then((places) => {
        if (cancelled || !inputRef.current) return;
        autocomplete = new places.Autocomplete(input, {
          fields: ["formatted_address", "name"],
          componentRestrictions: { country: "us" },
        });
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          onSelectRef.current(place?.formatted_address || place?.name || input.value);
        });
      })
      .catch(() => {
        // No key, offline, or blocked: the field still works as a plain text input.
      });

    return () => {
      cancelled = true;
      input.removeEventListener("keydown", onKeyDown);
      if (autocomplete && window.google?.maps?.event) {
        window.google.maps.event.clearInstanceListeners(autocomplete);
      }
    };
  }, [inputRef]);
}
