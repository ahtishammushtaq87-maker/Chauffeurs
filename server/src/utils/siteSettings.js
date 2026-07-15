import db from "../db/index.js";

const getRow = db.prepare("SELECT * FROM site_settings WHERE id = 1");
const upsertRow = db.prepare(`
  INSERT INTO site_settings (id, phone_1, phone_2, email, whatsapp_number, address, facebook_url, instagram_url, tiktok_url, logo_url, favicon_url, updated_at)
  VALUES (1, @phone_1, @phone_2, @email, @whatsapp_number, @address, @facebook_url, @instagram_url, @tiktok_url, @logo_url, @favicon_url, datetime('now'))
  ON CONFLICT(id) DO UPDATE SET
    phone_1 = excluded.phone_1,
    phone_2 = excluded.phone_2,
    email = excluded.email,
    whatsapp_number = excluded.whatsapp_number,
    address = excluded.address,
    facebook_url = excluded.facebook_url,
    instagram_url = excluded.instagram_url,
    tiktok_url = excluded.tiktok_url,
    logo_url = excluded.logo_url,
    favicon_url = excluded.favicon_url,
    updated_at = datetime('now')
`);

export function getSiteSettings() {
  return getRow.get() || null;
}

export function saveSiteSettings(next) {
  const current = getSiteSettings();
  upsertRow.run({
    phone_1: next.phone_1 ?? current?.phone_1 ?? "",
    phone_2: next.phone_2 ?? current?.phone_2 ?? "",
    email: next.email ?? current?.email ?? "",
    whatsapp_number: next.whatsapp_number ?? current?.whatsapp_number ?? "",
    address: next.address ?? current?.address ?? "",
    facebook_url: next.facebook_url ?? current?.facebook_url ?? "",
    instagram_url: next.instagram_url ?? current?.instagram_url ?? "",
    tiktok_url: next.tiktok_url ?? current?.tiktok_url ?? "",
    logo_url: next.logo_url ?? current?.logo_url ?? "",
    favicon_url: next.favicon_url ?? current?.favicon_url ?? "",
  });
  return getSiteSettings();
}
