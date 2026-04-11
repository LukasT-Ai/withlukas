import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { posts } from "../posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `https://www.withlukas.com/blog/${post.slug}`,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://www.lamintraore.com",
    },
    publisher: {
      "@type": "Organization",
      name: "withlukas",
      url: "https://withlukas.com",
    },
    url: `https://www.withlukas.com/blog/${post.slug}`,
    keywords: post.tags,
  };

  return (
    <main className="grid-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-sm text-blue-500 hover:text-blue-400 transition-colors mb-6 inline-block"
          >
            &larr; All Posts
          </Link>

          <div className="flex items-center gap-3 mb-4 text-xs text-zinc-500">
            <time>{post.date}</time>
            <span>&middot;</span>
            <span>{post.readTime}</span>
            <span>&middot;</span>
            <span>{post.author}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-1.5 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-zinc-500 bg-zinc-800/50 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-[var(--card-border)] flex items-center justify-between">
            <Link
              href="/blog"
              className="text-sm text-blue-500 hover:text-blue-400 transition-colors"
            >
              &larr; Back to all posts
            </Link>
            <Link
              href="/#contact"
              className="bg-blue-500 hover:bg-blue-400 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
