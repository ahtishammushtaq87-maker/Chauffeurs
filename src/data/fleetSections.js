// Maps each seeded "page section" container's fixed slug to the bespoke fleet
// page it belongs to. Keep in sync with server/src/db/seed.js's pageSections list.
//
// This map does double duty: it is also the list of sections the /fleet index
// draws from (see fetchFleetItems).
//
// Service pages are deliberately absent. Their fleet slider is chosen per page
// under Services > (a service) > Premium Fleet, which picks from the vehicles
// these sections already hold rather than owning copies of them.
export const FLEET_SECTION_PAGE_PATHS = {
  "luxury-sedan-fleet": "/fleet/luxury-sedan",
  "executive-suv-fleet": "/fleet/executive-suv",
  "stretch-limo-fleet": "/fleet/stretch-limousine",
  "party-bus-fleet": "/fleet/party-bus",
  "sprinter-van-fleet": "/fleet/sprinter-van",
  "motor-coach-fleet": "/fleet/motor-coach",
};
