import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-navy text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-300 text-sm hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-medium bg-white/20 px-3 py-1 rounded">
              {post.category}
            </span>
            <span className="text-xs font-medium text-gold uppercase">
              {post.language === "tr" ? "Turkce" : "English"}
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-300 text-sm">
            <span className="font-medium text-white">{post.author}</span>
            <span className="w-1 h-1 rounded-full bg-gray-500" />
            <span>{post.date}</span>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-gold via-gold/60 to-transparent mt-16" />
      </section>

      {/* Content */}
      <section className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.content! }}
          />

          {/* Post Footer */}
          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-text-muted">Written by</p>
              <p className="font-serif font-semibold">{post.author}</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-6 py-2.5 rounded hover:bg-gold-dark transition-colors text-sm tracking-wide"
            >
              Work With Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
