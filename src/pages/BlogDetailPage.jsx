import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PlaceholderImage from "../components/PlaceholderImage";
import { ChevronLeft, ClockIcon } from "../components/Icons";
import { apiGet } from "../lib/api";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    setStatus("loading");
    apiGet(`/blog/${slug}`)
      .then((data) => {
        setPost(data.post);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, [slug]);

  if (status === "loading") {
    return <div className="px-6 py-24 text-center text-text-muted md:px-16 lg:px-24">Loading…</div>;
  }

  if (status === "error" || !post) {
    return (
      <section className="px-6 py-24 text-center md:px-16 lg:px-24">
        <span className="eyebrow">Blog</span>
        <h1 className="font-serif text-3xl font-medium text-text md:text-4xl">Post Not Found</h1>
        <p className="mt-4 text-[15px] text-text-muted">
          We couldn't find the article you're looking for. It may have been moved or removed.
        </p>
        <Link to="/blog" className="btn btn-gold mt-8">
          Back to Blog
        </Link>
      </section>
    );
  }

  return (
    <section className="px-6 py-16 md:px-16 lg:px-24">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/blog"
          className="mb-8 inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-wide text-gold uppercase transition-opacity hover:opacity-75"
        >
          <ChevronLeft width={14} height={14} /> Back to Blog
        </Link>

        {post.category && <span className="eyebrow">{post.category}</span>}
        <h1 className="font-serif text-3xl leading-tight font-medium text-text md:text-4xl lg:text-[44px]">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-muted">
          <span className="flex items-center gap-2">
            <ClockIcon width={15} height={15} className="text-gold" />
            {formatDate(post.published_at)}
          </span>
          <span>By {post.author}</span>
        </div>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl border border-border">
          <PlaceholderImage src={post.image} alt={post.title} />
        </div>

        <div className="mt-10">
          {post.content
            .split(/\n{2,}/)
            .filter(Boolean)
            .map((paragraph, i) => (
              <p key={i} className="mb-5 text-[15px] leading-relaxed text-text-muted">
                {paragraph}
              </p>
            ))}
        </div>

        <div className="mt-4 rounded-xl border border-border bg-panel px-7 py-9 text-center">
          <h3 className="font-serif text-xl text-text">Ready to Book Your Ride?</h3>
          <p className="mt-2 text-sm text-text-muted">
            Let Swift Chauffeurs handle the details — reach out and we'll tailor the perfect experience.
          </p>
          <Link to="/contact" className="btn btn-gold mt-6 w-fit">
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
