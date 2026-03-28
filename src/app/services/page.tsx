import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional content writing services for law firms, finance, healthcare, technology, real estate, and e-commerce. SEO blog articles, website copy, translation, and editorial review.",
};

const services = [
  {
    title: "Legal Content Writing",
    paragraphs: [
      "Law firms and corporate legal departments operate in a space where every word carries weight. Inaccurate content doesn't just look bad — it erodes trust, invites scrutiny, and can create real liability. That's why we don't outsource legal writing to generalists. Every article, guide, and practice area page we produce is written by a licensed Turkish attorney with hands-on courtroom and advisory experience.",
      "We write practice area pages that actually explain what your firm does in terms potential clients understand. We draft regulatory guides that break down complex Turkish legislation without oversimplifying it. We create client newsletters that your recipients open, read, and forward. And we produce thought leadership articles that position your attorneys as the experts they are — not just in Turkey, but across jurisdictions.",
      "All legal content is written to meet Google's YMYL (Your Money or Your Life) standards and the E-E-A-T framework — Experience, Expertise, Authoritativeness, and Trustworthiness. This isn't a checkbox exercise. It's the difference between content that ranks and content that gets buried.",
    ],
    features: [
      "Practice area pages & attorney bios",
      "Legal articles & thought leadership",
      "Regulatory guides & compliance content",
      "Client newsletters & briefings",
      "YMYL & E-E-A-T compliant writing",
      "Turkish and international law coverage",
    ],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "SEO Blog Articles & Content Strategy",
    paragraphs: [
      "Blog content is the engine behind organic growth — but only when it's built on real keyword research, genuine expertise, and a publishing strategy that compounds over time. We write long-form blog articles for clients across every major sector: law, finance, healthcare, technology, real estate, and e-commerce. Each piece is built to rank, to hold attention, and to convert readers into leads.",
      "Our process starts before a single word is written. We identify the keywords your audience actually searches for, analyze what's currently ranking (and why), and map out a content calendar that fills gaps your competitors have missed. Then we write — in Turkish, English, or both — with the depth and specificity that search engines reward and readers respect.",
      "Every article ships publication-ready: optimized title tags, meta descriptions, header structure, internal links, and formatting included. You don't need to touch a thing before hitting publish.",
    ],
    features: [
      "Keyword research & competitor analysis",
      "Content calendar & topic strategy",
      "Long-form articles in Turkish & English",
      "On-page SEO: meta tags, headings, internal links",
      "Publication-ready delivery",
      "Covers all industries: law, finance, health, tech, real estate, e-commerce",
    ],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Website Copy & Landing Pages",
    paragraphs: [
      "Your website is your firm's best salesperson — it works 24 hours a day, in every time zone, and it's often the first interaction a potential client has with your brand. We write website copy for law firms, clinics, fintech companies, real estate agencies, SaaS platforms, and professional service providers who need their site to do more than just exist.",
      "We handle everything: homepage messaging that communicates who you are in five seconds flat, service pages that answer real questions and drive inquiries, about pages that build credibility without sounding generic, and team bios that actually reflect the people behind the business. Every page is written with conversion in mind — clear CTAs, persuasive structure, and language that speaks directly to your target client.",
      "Need landing pages for campaigns? We write those too, with A/B testable variants and messaging frameworks designed around your specific conversion goals. No templates, no filler, no \"we are passionate about excellence\" — just copy that works.",
    ],
    features: [
      "Homepage, service & about page copy",
      "Team bios & leadership profiles",
      "Landing pages for campaigns & ads",
      "Conversion-focused CTA optimization",
      "A/B testable copy variants",
      "SEO-integrated page structure",
    ],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Product & Category Descriptions",
    paragraphs: [
      "Product pages and category pages are where buying decisions happen — and most businesses leave money on the table by treating them as an afterthought. We write product and category descriptions for e-commerce sites, legal tech platforms, service marketplaces, and B2B directories that need each page to pull its weight in both search rankings and conversions.",
      "We don't write descriptions by reshuffling bullet points from a spec sheet. We study your product, understand what your buyer cares about, and write copy that connects features to outcomes. For category pages, we build SEO-rich introductions that help Google understand your site architecture while giving shoppers a clear path to what they need.",
      "Whether you have 20 products or 2,000, we scale our process to deliver consistent quality and a unified brand voice across every listing.",
    ],
    features: [
      "E-commerce product descriptions",
      "Category page SEO content",
      "Comparison & feature-focused copy",
      "Legal tech & SaaS product pages",
      "Brand voice consistency at scale",
      "Conversion-optimized formatting",
    ],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    title: "Translation & Localization (TR↔EN)",
    paragraphs: [
      "Translation in the legal and business world is not a language exercise — it's a precision operation. A single misinterpreted clause in a contract, an awkward phrasing in a court filing, or a tone-deaf marketing message in a new market can cost far more than the translation itself. We provide Turkish–English translation and localization services backed by legal expertise and native-level command of both languages.",
      "On the legal side, we translate contracts, court decisions, petitions, powers of attorney, corporate resolutions, and regulatory filings with the terminological accuracy that only comes from practicing law in both legal systems. Every legal translation is reviewed for jurisdictional correctness — not just linguistic equivalence.",
      "On the marketing side, we localize websites, brochures, pitch decks, ad copy, and investor materials with cultural sensitivity and brand consistency. Localization isn't just swapping words between languages. It's adapting tone, structure, and cultural references so your message lands the same way in Istanbul as it does in London or New York.",
    ],
    features: [
      "Legal translation: contracts, court filings, petitions",
      "Corporate documents: resolutions, powers of attorney",
      "Marketing localization: websites, brochures, ads",
      "Cultural adaptation & tone matching",
      "Terminology consistency & glossary management",
      "Attorney-reviewed legal accuracy",
    ],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
  },
  {
    title: "Editorial & SEO Review",
    paragraphs: [
      "Already have content on your site? Most businesses do — and most of it is underperforming. Pages that were written years ago with no keyword strategy, blog posts that are technically accurate but unreadable, or landing pages that say all the right things but rank nowhere. We audit, review, and improve existing content in both Turkish and English to turn underperformers into assets.",
      "Our editorial review covers legal and factual accuracy, readability, tone consistency, and structural clarity. Our SEO review goes deeper: we analyze your meta data, heading hierarchy, keyword targeting, schema markup opportunities, and internal link architecture. Then we deliver a prioritized action plan — or we handle the rewrites ourselves.",
      "We also run content gap analyses to identify topics and keywords your competitors rank for that you don't cover at all. This turns a one-time review into an ongoing content roadmap that keeps paying dividends.",
    ],
    features: [
      "Legal & factual accuracy audit",
      "Readability & tone improvement",
      "Technical SEO review: meta, headings, schema",
      "Content gap analysis & competitor benchmarking",
      "Prioritized improvement roadmap",
      "Available for Turkish & English content",
    ],
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
];

const industries = [
  {
    name: "Law Firms",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    name: "Finance & Banking",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 6h20M2 6v12a2 2 0 002 2h16a2 2 0 002-2V6M2 6l10 6 10-6M6 14h.01M10 14h.01" />
      </svg>
    ),
  },
  {
    name: "Healthcare",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: "Technology & SaaS",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    name: "Real Estate",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4m-4 0v-4a1 1 0 011-1h2a1 1 0 011 1v4" />
      </svg>
    ),
  },
  {
    name: "E-Commerce",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-navy text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            Our Services
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5">
            Content Solutions for Every Industry
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            From law firms to e-commerce platforms, we produce content that ranks,
            converts, and builds lasting authority — in Turkish, English, or both.
          </p>
        </div>
        <div className="h-1 bg-gradient-to-r from-gold via-gold/60 to-transparent mt-20" />
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className={`flex flex-col lg:flex-row gap-10 lg:gap-20 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-white mb-7">
                    {service.icon}
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6">
                    {service.title}
                  </h2>
                  <div className="space-y-4">
                    {service.paragraphs.map((p, i) => (
                      <p key={i} className="text-text-light leading-[1.85] text-[0.9375rem]">
                        {p}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2.5 bg-gold text-white font-semibold px-7 py-3 rounded hover:bg-gold-dark transition-colors text-sm tracking-wide"
                    >
                      Get a Quote
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Includes sidebar */}
                <div className="w-full lg:w-[340px] shrink-0">
                  <div className="bg-bg-warm rounded-xl p-7 border border-border-light sticky top-28">
                    <h3 className="font-serif font-bold text-xs uppercase tracking-[0.2em] text-primary mb-5 pb-4 border-b border-border">
                      Includes
                    </h3>
                    <ul className="space-y-3.5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-[0.8125rem] text-text-light leading-snug">
                          <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border" />
      </div>

      {/* Industries We Serve */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.15em] mb-3">
              Who We Work With
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5">
              Industries We Serve
            </h2>
            <p className="text-text-light max-w-2xl mx-auto text-lg">
              Our clients span sectors where credibility, accuracy, and search
              visibility are not optional — they are the foundation of growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group flex flex-col items-center text-center p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {industry.icon}
                </div>
                <span className="font-semibold text-sm text-text">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-navy to-primary-dark py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-5">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Every business is different. Tell us what you need — a single blog
            post, a full website rewrite, or an ongoing content partnership — and
            we will put together a proposal that fits.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-white font-semibold px-10 py-3.5 rounded hover:bg-gold-dark transition-colors tracking-wide"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
