import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on Turkish law, legal content strategy, and SEO for law firms. Read our latest articles in English and Turkish.",
};

export default function Blog() {
  const posts = getAllPosts();
  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-navy text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            Our Blog
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5">
            Insights & Articles
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Expert perspectives on Turkish law, legal content strategy, and SEO
            for legal professionals.
          </p>
        </div>
        <div className="h-1 bg-gradient-to-r from-gold via-gold/60 to-transparent mt-20" />
      </section>

      <BlogList posts={posts} categories={categories} />
    </>
  );
}
