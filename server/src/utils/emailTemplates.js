const GOLD = "#cda949";
const INK = "#0a0a0b";
const INK_FG_MUTED = "#a8a6a2";
const BG_ALT = "#f7f5f0";
const TEXT = "#1c1a17";
const TEXT_MUTED = "#6b655c";
const BORDER = "rgba(23, 20, 13, 0.1)";

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function fieldRow(label, value) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid ${BORDER};font-size:13px;color:${TEXT_MUTED};width:150px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:10px 0;border-bottom:1px solid ${BORDER};font-size:14px;color:${TEXT};vertical-align:top;">${escapeHtml(value)}</td>
    </tr>`;
}

// A responsive, table-based email layout (max-width 600px, stacks fluidly on
// mobile clients) with the Swift Chauffeurs wordmark in the header.
export function wrapEmail({ title, intro, rowsHtml, ctaLabel, ctaUrl }) {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;padding:0;background:${BG_ALT};font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BG_ALT};padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;">
            <tr>
              <td style="background:${INK};padding:28px 32px;text-align:center;">
                <span style="font-family:Georgia,'Playfair Display',serif;font-size:22px;letter-spacing:1px;color:${GOLD};">SWIFT</span>
                <span style="font-family:Georgia,'Playfair Display',serif;font-size:22px;letter-spacing:1px;color:#ffffff;"> CHAUFFEURS</span>
                <div style="margin-top:4px;font-size:11px;letter-spacing:2px;color:${INK_FG_MUTED};text-transform:uppercase;">
                  Nashville's Premier Chauffeur &amp; Limousine Service
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <h1 style="margin:0 0 8px;font-family:Georgia,'Playfair Display',serif;font-size:20px;font-weight:500;color:${TEXT};">
                  ${escapeHtml(title)}
                </h1>
                ${intro ? `<p style="margin:0 0 20px;font-size:14px;line-height:1.6;color:${TEXT_MUTED};">${escapeHtml(intro)}</p>` : ""}
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${rowsHtml}
                </table>
                ${
                  ctaLabel && ctaUrl
                    ? `<div style="margin-top:28px;">
                        <a href="${ctaUrl}" style="display:inline-block;background:${GOLD};color:#17140d;text-decoration:none;font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;padding:13px 26px;border-radius:2px;">
                          ${escapeHtml(ctaLabel)}
                        </a>
                      </div>`
                    : ""
                }
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background:${BG_ALT};text-align:center;">
                <p style="margin:0;font-size:11px;color:${TEXT_MUTED};">
                  This is an automated notification from your Swift Chauffeurs website.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

const dashboardOrigin = () => process.env.CLIENT_ORIGIN || "http://localhost:5173";

export function renderQuoteEmail(q) {
  const rowsHtml = [
    fieldRow("Name", q.name),
    fieldRow("Phone", q.contact_no),
    fieldRow("Email", q.email),
    fieldRow("Passengers", q.passengers),
    fieldRow("Service Type", q.service_type),
    fieldRow("Vehicle", q.vehicle),
    fieldRow("Pickup Date", q.pickup_date),
    fieldRow("Pickup Time", q.pickup_time),
    fieldRow("Hours", q.hours),
    fieldRow("Pickup Address", q.pickup_address),
    fieldRow("Destination", q.destination_address),
    fieldRow("Submitted From", q.source_path),
  ].join("");

  return wrapEmail({
    title: "New Instant Quote Request",
    intro: "Someone just requested an instant quote from your website. Details below:",
    rowsHtml,
    ctaLabel: "View in Dashboard",
    ctaUrl: `${dashboardOrigin()}/admin/quotes`,
  });
}

export function renderAppointmentEmail(a) {
  const name = [a.first_name, a.last_name].filter(Boolean).join(" ");
  const rowsHtml = [
    fieldRow("Name", name),
    fieldRow("Email", a.email),
    fieldRow("Phone", a.phone),
    fieldRow("Interested In", a.interest),
    fieldRow("Heard About Us Via", a.hear_about),
    fieldRow("Message", a.message),
    fieldRow("Submitted From", a.source_path),
  ].join("");

  return wrapEmail({
    title: "New Appointment / Contact Request",
    intro: "Someone just submitted the Get in Touch form on your website. Details below:",
    rowsHtml,
    ctaLabel: "View in Dashboard",
    ctaUrl: `${dashboardOrigin()}/admin/appointments`,
  });
}
