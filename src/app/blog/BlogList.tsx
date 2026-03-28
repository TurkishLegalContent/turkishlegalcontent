"use client";

import Link from "next/link";
import { useState } from "react";
import type { BlogPost } from "@/lib/blog";

interface Props {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogList({ posts, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-bg-gray text-text-light hover:bg-primary-light hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <p className="text-text-muted text-center py-12">
            No posts in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-1 bg-gradient-to-r from-primary to-gold" />
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-primary bg-primary-light px-2.5 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-muted">
                      {post.date}
                    </span>
                    <span className="text-xs font-medium text-gold uppercase">
                      {post.language === "tr" ? "TR" : "EN"}
                    </span>
                  </div>
                  <h2 className="font-serif font-bold text-lg mb-3 leading-snug group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-text-muted text-sm leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-muted">
                      By {post.author}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary text-sm font-medium inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                    >
                      Read
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
