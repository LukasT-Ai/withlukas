import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI automation, custom web development, sales technology, and SEO for small and medium businesses in Atlanta.",
  openGraph: {
    title: "Blog | withlukas",
    description:
      "Insights on AI automation, custom web development, sales technology, and SEO for small and medium businesses.",
    url: "https://www.withlukas.com/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="grid-bg">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Blog</h1>
          <p className="text-zinc-400 mb-12">
            Insights on automation, web development, AI, and growing your
            business with technology.
          </p>

          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-[var(--card)] border border-[var(--card-border)] rounded-2xl p-6 hover:bg-[var(--card-hover)] transition-all duration-300 glow"
              >
                <div className="flex items-center gap-3 mb-2 text-xs text-zinc-500">
                  <time>{post.date}</time>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                  <span>&middot;</span>
                  <span>{post.author}</span>
                </div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-zinc-500 bg-zinc-800/50 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
