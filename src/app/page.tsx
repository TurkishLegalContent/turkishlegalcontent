import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

const services = [
  {
    title: "Legal Content Writing",
    description:
      "Authoritative articles, whitepapers, and regulatory guides crafted by a licensed Turkish attorney.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "SEO Blog Articles",
    description:
      "Keyword-optimized blog posts that rank on search engines and establish your legal authority.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Website Copy",
    description:
      "Persuasive, conversion-focused website copy for law firms and legal businesses.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Product & Category Descriptions",
    description:
      "Detailed, SEO-friendly descriptions for legal tech platforms and service directories.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    title: "Translation & Localization",
    description:
      "Professional Turkish–English legal translation with cultural sensitivity and precision.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    title: "Editorial & SEO Review",
    description:
      "Comprehensive review of your existing content for accuracy, readability, and search performance.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
];

const whyChooseUs = [
  {
    title: "Attorney-Written",
    description: "Every piece is created by a licensed Turkish attorney with real-world legal experience.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "Bilingual (TR & EN)",
    description: "Native-level Turkish and professional English for seamless cross-border communication.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    title: "SEO-Optimized",
    description: "Keyword research, on-page optimization, and content strategy built into every deliverable.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "E-E-A-T Compliant",
    description: "Content that meets Google's Experience, Expertise, Authoritativeness, and Trust standards.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-navy text-white overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-6">
              Professional Legal Content
              <span className="block text-gold mt-2">for the Turkish Market</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed max-w-2xl">
              SEO-optimized legal content in Turkish and English, written by a
              licensed attorney based in Istanbul.
            </p>
            <p className="text-sm text-gray-400 mb-10 tracking-wide uppercase">
              Trusted by law firms and businesses across Turkey and internationally
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gold text-white font-semibold px-8 py-3.5 rounded text-center hover:bg-gold-dark transition-colors tracking-wide"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded text-center hover:bg-white/10 transition-colors tracking-wide"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="h-1 bg-gradient-to-r from-gold via-gold/60 to-transparent" />
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.15em] mb-3">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5">
              Legal Content Services
            </h2>
            <p className="text-text-light max-w-2xl mx-auto text-lg">
              End-to-end content solutions tailored to the Turkish and
              international legal markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group border border-border rounded-lg p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="font-serif font-semibold text-lg mb-3">{service.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-primary font-medium hover:text-primary-dark transition-colors inline-flex items-center gap-2"
            >
              View all services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-bg-warm py-20 md:py-28 border-y border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.15em] mb-3">
              Why Choose Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5">
              Content You Can Trust
            </h2>
            <p className="text-text-light max-w-2xl mx-auto text-lg">
              We combine genuine legal expertise with modern content marketing
              strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-white border border-border rounded-full flex items-center justify-center mx-auto mb-5 text-primary shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.15em] mb-3">
              From Our Blog
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5">
              Latest Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article
                key={post.slug}
                className="group border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Color bar */}
                <div className="h-1 bg-gradient-to-r from-primary to-gold" />
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-primary bg-primary-light px-2.5 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-muted">{post.date}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-3 leading-snug group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary text-sm font-medium inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                  >
                    Read article
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block border-2 border-primary text-primary font-semibold px-8 py-3 rounded hover:bg-primary hover:text-white transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-navy to-primary-dark py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to Elevate Your Content?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you need a single blog post or a comprehensive content strategy,
            we deliver legal content that ranks, converts, and builds trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold text-white font-semibold px-10 py-3.5 rounded hover:bg-gold-dark transition-colors tracking-wide"
            >
              Start a Project
            </Link>
            <Link
              href="/about"
              className="border-2 border-white/30 text-white font-semibold px-10 py-3.5 rounded hover:bg-white/10 transition-colors tracking-wide"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
