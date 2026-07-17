import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PlaceholderImage from "./PlaceholderImage";
import { apiGet } from "../lib/api";

// Sidebar list of the newest published posts. `excludeSlug` keeps the article
// you're already reading out of its own sidebar.
export default function RecentBlogs({ excludeSlug, limit = 6 }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    apiGet("/blog")
      .then((data) => setPosts(data.posts || []))
      .catch(() => setPosts([]));
  }, []);

  const items = posts.filter((p) => p.slug !== excludeSlug).slice(0, limit);
  if (items.length === 0) return null;

  return (
    <div className="rounded-xl border border-ink-border bg-ink p-6">
      <h2 className="font-serif text-xl font-medium text-ink-fg">Recent Blogs</h2>
      <ul className="mt-5 flex flex-col divide-y divide-ink-border">
        {items.map((post) => (
          <li key={post.slug} className="py-4 first:pt-0 last:pb-0">
            <Link to={`/blog/${post.slug}`} className="group flex items-start gap-3.5">
              <span className="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-sm">
                <PlaceholderImage src={post.image} alt={post.image_alt || post.title} />
              </span>
              <span className="min-w-0 text-[13px] leading-snug font-medium text-ink-fg transition-colors group-hover:text-gold">
                {post.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
