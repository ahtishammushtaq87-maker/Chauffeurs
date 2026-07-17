import { apiGet } from "./api";
import { FLEET_SECTION_PAGE_PATHS } from "../data/fleetSections";

function cardToItem(card) {
  return {
    name: card.title,
    desc: card.description,
    image: card.image,
    imageAlt: card.image_alt,
    imageTitle: card.image_title,
  };
}

// The cards of a single fleet "page section", by its fixed slug. Backs the fleet
// sliders on the vehicle-type pages (/fleet/luxury-sedan and friends), so edits
// in Fleet > Fleet Page Sections show up on the next page load.
export async function fetchFleetSection(slug) {
  const { vehicle } = await apiGet(`/fleet/${slug}`);
  return (vehicle.cards || []).map(cardToItem);
}

// The vehicles an editor ticked under Services > (a service) > Premium Fleet.
// Backs the fleet slider on each service page. The API has already resolved each
// selection to whichever fleet card or standalone vehicle it points at, in the
// editor's chosen order.
export async function fetchServiceFleet(serviceSlug) {
  const { service } = await apiGet(`/services/${serviceSlug}`);
  return (service.fleet || []).map((v) => ({
    name: v.name,
    desc: v.excerpt || v.description,
    image: v.image,
    imageAlt: v.image_alt,
    imageTitle: v.image_title,
  }));
}

// Everything the /fleet index lists: the cards of the six vehicle-type sections,
// plus any standalone vehicle added from the dashboard. Sections that back a
// service page (prom-fleet, wedding-fleet, ...) are deliberately excluded — their
// cards are per-page copies of vehicles already listed here, so including them
// would show duplicates. FLEET_SECTION_PAGE_PATHS is the list of what belongs.
export async function fetchFleetItems() {
  const [{ vehicles }, { sections }] = await Promise.all([apiGet("/fleet"), apiGet("/fleet/sections")]);

  const fromSections = sections
    .filter((section) => FLEET_SECTION_PAGE_PATHS[section.slug])
    .flatMap((section) =>
      section.cards.map((card) => ({
        ...cardToItem(card),
        category: section.category,
        path: FLEET_SECTION_PAGE_PATHS[section.slug],
      }))
    );

  const fromVehicles = vehicles.map((v) => ({
    name: v.name,
    desc: v.excerpt || v.description,
    image: v.image,
    imageAlt: v.image_alt,
    imageTitle: v.image_title,
    category: v.category || "More Vehicles",
    path: `/fleet/${v.slug}`,
  }));

  return [...fromSections, ...fromVehicles];
}
