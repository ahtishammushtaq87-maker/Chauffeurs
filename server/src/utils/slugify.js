export function slugify(text) {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Appends -2, -3, ... until `exists(candidate)` returns false.
export function uniqueSlug(base, exists) {
  const root = slugify(base) || "item";
  let candidate = root;
  let n = 2;
  while (exists(candidate)) {
    candidate = `${root}-${n}`;
    n += 1;
  }
  return candidate;
}
