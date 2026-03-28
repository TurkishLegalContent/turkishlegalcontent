import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Turkish Legal Content is a professional legal content platform based in Istanbul, managed by Av. Mirkan Günay Topcu, a licensed Turkish attorney.",
};

const expertise = [
  "Corporate & Commercial Law",
  "Real Estate & Property Law",
  "Foreign Investment & Company Formation",
  "Immigration & Citizenship Law",
  "Finance, Banking & Insurance",
  "Healthcare & Medical Content",
  "Technology, SaaS & AI",
  "E-Commerce & Consumer Protection",
  "Intellectual Property & Data Privacy",
  "Maritime & International Trade",
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We begin by understanding your brand, audience, and content goals through a detailed briefing session.",
  },
  {
    step: "02",
    title: "Research & Strategy",
    description:
      "Our attorney-writer conducts legal research, keyword analysis, and competitive review to shape the content strategy.",
  },
  {
    step: "03",
    title: "Writing & Review",
    description:
      "Content is drafted with legal accuracy and SEO best practices, then reviewed for quality and compliance.",
  },
  {
    step: "04",
    title: "Delivery & Optimization",
    description:
      "Final content is delivered publication-ready, with meta data, formatting, and on-page SEO included.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-navy text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            About Us
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5">
            Who Is Behind<br />Turkish Legal Content?
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Professional legal content, powered by real legal expertise and a
            passion for clear communication.
          </p>
        </div>
        <div className="h-1 bg-gradient-to-r from-gold via-gold/60 to-transparent mt-20" />
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left: Bio */}
            <div className="lg:col-span-3">
              <h2 className="font-serif text-3xl font-bold mb-6">
                Av. Mirkan Günay Topcu
              </h2>
              <div className="w-16 h-1 bg-gold mb-8" />

              <div className="space-y-5 text-text-light leading-relaxed">
                <p>
                  Turkish Legal Content is founded and managed by <strong className="text-text">Av. Mirkan Günay Topcu</strong>,
                  a licensed Turkish attorney and the managing partner at a boutique law firm based in Istanbul.
                </p>
                <p>
                  With years of experience in both legal practice and digital content
                  strategy, Av. Topcu bridges the gap between legal expertise and professional
                  content creation. This unique combination ensures that every piece of content
                  produced is not only legally accurate but also strategically crafted to
                  achieve measurable business results.
                </p>
                <p>
                  Turkish Legal Content serves law firms, corporate legal departments,
                  legal tech companies, and businesses operating in or with Turkey. We
                  understand that legal content demands precision, authority, and
                  trustworthiness — qualities that only come from genuine legal expertise.
                </p>
                <p>
                  Our platform delivers high-quality written materials in both Turkish and
                  English, combining deep legal knowledge with modern SEO and content
                  marketing strategies to help our clients grow their online presence and
                  build lasting authority.
                </p>
              </div>
            </div>

            {/* Right: Expertise */}
            <div className="lg:col-span-2">
              <div className="bg-bg-warm border border-border-light rounded-lg p-8">
                <h3 className="font-serif font-bold text-lg mb-6">
                  Industries & Subjects We Cover
                </h3>
                <ul className="space-y-4">
                  {expertise.map((area) => (
                    <li key={area} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text-light text-sm">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy rounded-lg p-8 mt-6">
                <h3 className="font-serif font-bold text-lg text-white mb-3">
                  Based in Istanbul
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Our office is in the heart of Istanbul&apos;s business district:
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Maslak Mah. Meydan Sok.<br />
                  Beybi Giz Plaza No:99/1 Kat:27<br />
                  Sarıyer / Istanbul, Turkey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-bg-warm border-y border-border-light py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.15em] mb-3">
            Our Mission
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Making Exceptional Legal Content Accessible
          </h2>
          <p className="text-text-light text-lg leading-relaxed max-w-3xl mx-auto">
            We believe that every law firm and business deserves content that educates
            audiences, improves search visibility, and strengthens brand authority — all
            while maintaining the accuracy and professionalism the legal industry demands.
            Our mission is to deliver exactly that, consistently and at scale.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.15em] mb-3">
              Our Process
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="relative">
                <div className="text-5xl font-serif font-bold text-primary/10 mb-3">
                  {item.step}
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-navy to-primary-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-5">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Ready to elevate your legal content? Get in touch for a free
            consultation and discover how we can help your firm grow.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-white font-semibold px-10 py-3.5 rounded hover:bg-gold-dark transition-colors tracking-wide"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
