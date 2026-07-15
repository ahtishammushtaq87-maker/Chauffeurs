import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import PlaceholderImage from "../components/PlaceholderImage";
import { getHeroImage } from "../data/content";
import { apiGet } from "../lib/api";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    apiGet("/blog")
      .then((data) => {
        setPosts(data.posts);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <>
      <PageHero eyebrow="Blog" title="Swift Chauffeurs Blog" image={getHeroImage("/blog")} />

      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="mb-10 text-center">
            <span className="eyebrow">Tips, Guides &amp; News</span>
            <h2 className="font-serif text-3xl font-medium text-text md:text-4xl">Latest From Our Blog</h2>
            <p className="mt-3 text-[15px] text-text-muted">
              Insights on luxury travel, event planning, and getting the most out of your chauffeur service.
            </p>
          </div>

          {status === "loading" && <p className="text-center text-text-muted">Loading…</p>}
          {status === "error" && (
            <p className="text-center text-text-muted">Couldn't load blog posts. Please try again shortly.</p>
          )}
          {status === "ready" && posts.length === 0 && (
            <p className="text-center text-text-muted">No blog posts yet — check back soon.</p>
          )}

          {status === "ready" && posts.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-panel"
                >
                  <div className="relative aspect-[4/3]">
                    <PlaceholderImage src={post.image} alt={post.image_alt || post.title} title={post.image_title} />
                    {post.category && (
                      <span className="absolute top-3 left-3 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[11px] font-semibold tracking-wide text-white uppercase backdrop-blur-sm">
                        {post.category}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-2 text-[11px] tracking-wide text-text-faint uppercase">
                      {formatDate(post.published_at)}
                    </p>
                    <h3 className="font-serif text-lg leading-snug text-text">{post.title}</h3>
                    <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-text-muted">{post.excerpt}</p>
                    <div className="mt-auto pt-5">
                      <Link to={`/blog/${post.slug}`} className="btn btn-outline w-full">
                        View More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
