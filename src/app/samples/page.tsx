"use client";

import Link from "next/link";
import { useState } from "react";

const samples = [
  {
    title: "Content Marketing for Law Firms: Why Most Legal Blogs Fail (And How to Fix Yours)",
    slug: "content-marketing-for-law-firms",
    category: "Content Strategy",
    words: "4,500+",
    description: "A comprehensive breakdown of why law firm blogs fail and a proven framework for building content programs that generate clients.",
  },
  {
    title: "Why Law Firms Need Professional SEO Content: The Definitive Guide",
    slug: "why-law-firms-need-professional-seo-content",
    category: "Legal",
    words: "5,000+",
    description: "Data-driven analysis of why professional SEO content is the highest-ROI marketing investment for law firms — with real metrics and cost comparisons.",
  },
  {
    title: "SEO Content Strategy for Healthcare Companies in Turkey: A Complete Guide",
    slug: "seo-content-strategy-for-healthcare-companies",
    category: "Healthcare",
    words: "4,000+",
    description: "Complete framework for Turkish healthcare providers to build SEO content strategies that attract international patients and dominate medical tourism search results.",
  },
  {
    title: "SEO Content Strategy for E-Commerce Businesses: How to Turn Product Pages Into Revenue Machines",
    slug: "seo-content-strategy-for-ecommerce",
    category: "E-Commerce",
    words: "4,000+",
    description: "A complete framework for e-commerce businesses to transform product pages, category content, and blogs into organic revenue drivers.",
  },
  {
    title: "Content Marketing for Fintech Companies: Building Trust Through Expert Content",
    slug: "content-marketing-for-fintech-companies",
    category: "Fintech",
    words: "4,000+",
    description: "How fintech companies can use content marketing to build trust, navigate regulatory complexity, and acquire customers through authoritative content.",
  },
  {
    title: "Digital Marketing Content for Real Estate Agencies in Turkey: The Complete Playbook",
    slug: "digital-marketing-content-for-real-estate-agencies",
    category: "Real Estate",
    words: "4,500+",
    description: "The complete content marketing playbook for Turkish real estate agencies — from neighborhood guides to multilingual strategies targeting international buyers.",
  },
  {
    title: "Buying Property in Turkey as a Foreigner: The Complete Legal Guide",
    slug: "buying-property-in-turkey-as-a-foreigner",
    category: "Legal",
    words: "4,700+",
    description: "Licensed Turkish lawyer explains the full legal process of purchasing property in Turkey — from title deed transfer to citizenship by investment.",
  },
  {
    title: "Setting Up a Company in Turkey: Complete Guide for Foreign Entrepreneurs",
    slug: "setting-up-a-company-in-turkey",
    category: "Legal",
    words: "4,500+",
    description: "Step-by-step guide to Turkish company formation — entity types, registration process, tax obligations, and practical considerations for foreign founders.",
  },
];

const categories = ["All", "Legal", "Healthcare", "E-Commerce", "Fintech", "Real Estate", "Content Strategy"];

export default function Samples() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSamples =
    activeCategory === "All"
      ? samples
      : samples.filter((s) => s.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-navy text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            Our Work
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5">
            Content Samples
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            See the quality of our work. Every piece below was researched, written,
            and optimized by our team.
          </p>
        </div>
        <div className="h-1 bg-gradient-to-r from-gold via-gold/60 to-transparent mt-20" />
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
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

          {/* Sample Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSamples.map((sample) => (
              <article
                key={sample.slug}
                className="group border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-1 bg-gradient-to-r from-primary to-gold" />
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-primary bg-primary-light px-2.5 py-1 rounded">
                      {sample.category}
                    </span>
                    <span className="text-xs text-text-muted">
                      {sample.words} words
                    </span>
                  </div>
                  <h2 className="font-serif font-bold text-lg mb-3 leading-snug group-hover:text-primary transition-colors">
                    <Link href={`/blog/${sample.slug}`}>{sample.title}</Link>
                  </h2>
                  <p className="text-text-muted text-sm leading-relaxed mb-5 line-clamp-3">
                    {sample.description}
                  </p>
                  <Link
                    href={`/blog/${sample.slug}`}
                    className="text-primary text-sm font-medium inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                  >
                    Read Sample
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center bg-bg-warm border border-border-light rounded-xl p-10 md:p-14">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              These samples demonstrate our writing quality across industries.
            </h2>
            <p className="text-text-light text-lg mb-8 max-w-2xl mx-auto">
              Need similar content for your business? Let&apos;s discuss your content
              goals and put together a plan that fits.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold text-white font-semibold px-10 py-3.5 rounded hover:bg-gold-dark transition-colors tracking-wide"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
