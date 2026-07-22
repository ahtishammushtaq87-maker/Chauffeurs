// One-off importer: pulls every published post from the old WordPress site
// (swiftchauffeurs.com) via its public REST API and mirrors them into this
// project's blog_posts table — exact title, category, excerpt, full body, and
// the real featured image (downloaded into uploads/). Safe to re-run: posts are
// keyed by slug and skipped if already imported.
import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import db from "./index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadsDir = path.join(__dirname, "..", "..", "uploads");
fs.mkdirSync(uploadsDir, { recursive: true });

const SOURCE = "https://swiftchauffeurs.com";
const API = `${SOURCE}/wp-json/wp/v2/posts?per_page=100&_embed=1`;

const slugExists = db.prepare("SELECT 1 FROM blog_posts WHERE slug = ?");
const insertPost = db.prepare(`
  INSERT INTO blog_posts (title, slug, category, excerpt, content, image, image_alt, image_title, author, published, published_at, created_at, updated_at)
  VALUES (@title, @slug, @category, @excerpt, @content, @image, @image_alt, @image_title, @author, @published, @published_at, @published_at, @published_at)
`);

// --- HTML helpers ---------------------------------------------------------
function decodeEntities(s) {
  const named = {
    amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
    ndash: "–", mdash: "—", hellip: "…", rsquo: "’", lsquo: "‘",
    ldquo: "“", rdquo: "”", ldots: "…", copy: "©", reg: "®", trade: "™",
  };
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (m, name) => (name in named ? named[name] : m));
}

// Convert WordPress content HTML into the plain-text, blank-line-separated
// paragraph format the frontend expects (it splits on /\n{2,}/ and renders each
// block as a <p>). Headings and list items become their own blocks; table rows
// are flattened to " | "-joined lines.
function htmlToBlocks(html) {
  let h = html;
  h = h.replace(/<!--[\s\S]*?-->/g, "");
  h = h.replace(/<(script|style)[\s\S]*?<\/\1>/gi, "");
  // List items -> bulleted block
  h = h.replace(/<li[^>]*>/gi, "\n\n• ").replace(/<\/li>/gi, "");
  // Table cells -> separated by | ; rows -> own block
  h = h.replace(/<\/t[dh]>\s*<t[dh][^>]*>/gi, " | ");
  h = h.replace(/<t[dh][^>]*>/gi, "").replace(/<\/t[dh]>/gi, "");
  h = h.replace(/<tr[^>]*>/gi, "\n\n").replace(/<\/tr>/gi, "");
  // Line breaks
  h = h.replace(/<br\s*\/?>/gi, "\n");
  // Block-level closers -> paragraph break
  h = h.replace(/<\/(p|h[1-6]|div|blockquote|ul|ol|table|thead|tbody|section|figure|figcaption)>/gi, "\n\n");
  h = h.replace(/<(p|h[1-6]|div|blockquote|ul|ol|table|thead|tbody|section|figure|figcaption)[^>]*>/gi, "\n\n");
  // Drop anything else (spans, anchors, images, etc.) keeping inner text
  h = h.replace(/<[^>]+>/g, "");
  h = decodeEntities(h);

  return h
    .split(/\n{2,}/)
    .map((b) => b.replace(/[ \t]+/g, " ").replace(/\n+/g, " ").trim())
    .filter(Boolean)
    .join("\n\n");
}

function stripToText(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

async function fetchJson(url) {
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": "blog-importer" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      if (attempt === 4) throw err;
      await new Promise((r) => setTimeout(r, 1500 * attempt));
    }
  }
}

async function downloadImage(url, slug) {
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": "blog-importer" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      let ext = path.extname(new URL(url).pathname).toLowerCase();
      if (!ext || ext.length > 6) ext = ".webp";
      const filename = `blog-${slug}-${crypto.randomBytes(4).toString("hex")}${ext}`;
      fs.writeFileSync(path.join(uploadsDir, filename), buf);
      return `/uploads/${filename}`;
    } catch (err) {
      if (attempt === 4) {
        console.warn(`   ! image download failed (${url}): ${err.message}`);
        return null;
      }
      await new Promise((r) => setTimeout(r, 1500 * attempt));
    }
  }
}

async function main() {
  console.log(`Fetching posts from ${API} ...`);
  const posts = await fetchJson(API);
  if (!Array.isArray(posts)) {
    throw new Error(`Unexpected API response: ${JSON.stringify(posts).slice(0, 200)}`);
  }
  console.log(`Found ${posts.length} posts on the source site.`);

  // Oldest first so newer posts end up with later created_at ordering.
  posts.sort((a, b) => new Date(a.date) - new Date(b.date));

  let imported = 0;
  let skipped = 0;
  for (const p of posts) {
    const slug = p.slug;
    const title = stripToText(p.title?.rendered || "");
    if (!title || !slug) continue;

    if (slugExists.get(slug)) {
      console.log(`- skip (exists): ${slug}`);
      skipped++;
      continue;
    }

    const media = p._embedded?.["wp:featuredmedia"]?.[0];
    const terms = p._embedded?.["wp:term"]?.flat() || [];
    const category = terms.find((t) => t.taxonomy === "category" && t.name !== "Uncategorized")?.name
      || terms.find((t) => t.taxonomy === "category")?.name
      || "";

    const excerpt = stripToText(p.excerpt?.rendered || "").replace(/\s*\[…\].*$/, "").slice(0, 300);
    const content = htmlToBlocks(p.content?.rendered || "");
    const publishedAt = (p.date || new Date().toISOString()).replace("T", " ").slice(0, 19);

    let image = null;
    let imageAlt = "";
    let imageTitle = "";
    if (media?.source_url) {
      console.log(`  downloading image for ${slug} ...`);
      image = await downloadImage(media.source_url, slug);
      imageAlt = stripToText(media.alt_text || "");
      imageTitle = stripToText(media.title?.rendered || title);
    }

    insertPost.run({
      title,
      slug,
      category,
      excerpt,
      content,
      image,
      image_alt: imageAlt,
      image_title: imageTitle,
      author: "Swift Chauffeurs Team",
      published: p.status === "publish" ? 1 : 1,
      published_at: publishedAt,
    });

    imported++;
    console.log(`+ imported: ${title}  [${category || "—"}]  ${publishedAt.slice(0, 10)}`);
  }

  console.log(`\nDone. Imported ${imported}, skipped ${skipped} (already present).`);
}

main().catch((err) => {
  console.error("Import failed:", err);
  process.exit(1);
});
