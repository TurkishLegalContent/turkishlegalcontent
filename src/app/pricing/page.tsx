import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for professional SEO content writing services. Starter, Growth, and Enterprise plans for businesses of all sizes.",
};

const plans = [
  {
    name: "Starter",
    subtitle: "For businesses testing professional content",
    price: "$800",
    period: "/month",
    featured: false,
    cta: "Get Started",
    features: [
      "4 blog articles/month (1,000–1,500 words each)",
      "Basic keyword research",
      "Meta titles & descriptions",
      "1 revision per article",
    ],
  },
  {
    name: "Growth",
    subtitle: "For businesses serious about organic growth",
    price: "$1,500",
    period: "/month",
    featured: true,
    cta: "Most Popular",
    features: [
      "8 blog articles/month (1,500–2,500 words each)",
      "Advanced keyword research & content strategy",
      "Meta titles, descriptions & schema markup",
      "Internal linking strategy",
      "2 revisions per article",
      "Monthly performance report",
    ],
  },
  {
    name: "Enterprise",
    subtitle: "For businesses that want a complete content engine",
    price: "Custom",
    period: " pricing",
    featured: false,
    cta: "Contact Us",
    features: [
      "12+ articles/month (2,000–5,000 words)",
      "Full content strategy & editorial calendar",
      "Keyword research, competitor analysis, content gap audit",
      "All SEO metadata & schema",
      "Unlimited revisions",
      "Dedicated account manager",
      "Priority turnaround",
    ],
  },
];

const faqs = [
  {
    question: "What industries do you cover?",
    answer:
      "We write for law firms, healthcare providers, fintech companies, e-commerce businesses, real estate agencies, and SaaS platforms. Our team includes writers with backgrounds in law, finance, medicine, and technology — so we bring genuine subject-matter expertise, not just marketing copywriting.",
  },
  {
    question: "What languages do you write in?",
    answer:
      "We produce content in English and Turkish natively. For other languages commonly needed in our clients' markets — Arabic, Russian, German, and French — we work with vetted native-speaking writers who specialize in the relevant industry verticals.",
  },
  {
    question: "How does the process work?",
    answer:
      "We start with a discovery call to understand your business, audience, and goals. From there, we conduct keyword research and develop a content strategy. Once approved, we move into production: our writers draft each piece, it goes through editorial and SEO review, and you receive a publication-ready article. You review, request revisions if needed, and publish.",
  },
  {
    question: "What's your turnaround time?",
    answer:
      "Standard turnaround is 5–7 business days per article after the content brief is approved. For Starter and Growth plans, articles are delivered on a rolling schedule throughout the month. Enterprise clients with priority turnaround can expect 3–5 business days per article.",
  },
  {
    question: "Do you offer translation services?",
    answer:
      "Yes. We provide professional Turkish–English translation and localization for legal documents, marketing materials, and website content. Translation services are priced separately based on word count and complexity. Contact us for a custom quote.",
  },
];

export default function Pricing() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-navy text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            Pricing
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Choose a plan that fits your content needs. Every plan includes
            SEO-optimized, publication-ready content written by industry specialists.
          </p>
        </div>
        <div className="h-1 bg-gradient-to-r from-gold via-gold/60 to-transparent mt-20" />
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl border p-8 md:p-10 flex flex-col ${
                  plan.featured
                    ? "border-primary shadow-lg ring-2 ring-primary/20"
                    : "border-border hover:shadow-lg transition-shadow duration-300"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-white text-xs font-semibold uppercase tracking-[0.15em] px-5 py-1.5 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h2 className="font-serif text-2xl font-bold mb-2">
                    {plan.name}
                  </h2>
                  <p className="text-text-muted text-sm">
                    {plan.subtitle}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="font-serif text-4xl font-bold">
                    {plan.price}
                  </span>
                  <span className="text-text-muted text-sm">
                    {plan.period}
                  </span>
                  {plan.price !== "Custom" && (
                    <p className="text-text-muted text-xs mt-1">Starting from</p>
                  )}
                </div>

                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-[0.8125rem] text-text-light leading-snug"
                    >
                      <svg
                        className="w-4 h-4 text-gold mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center font-semibold px-8 py-3.5 rounded tracking-wide transition-colors text-sm ${
                    plan.featured
                      ? "bg-gold text-white hover:bg-gold-dark"
                      : "bg-primary text-white hover:bg-primary-dark"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="mt-12 text-center space-y-2">
            <p className="text-text-muted text-sm">
              All prices are indicative. Final pricing depends on industry complexity,
              content depth, and language requirements.
            </p>
            <p className="text-text-muted text-sm">
              One-off projects also available.{" "}
              <Link href="/contact" className="text-primary font-medium hover:underline">
                Contact us
              </Link>{" "}
              for a custom quote.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border" />
      </div>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.15em] mb-3">
              FAQ
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-border pb-8">
                <h3 className="font-serif font-bold text-lg mb-3">
                  {faq.question}
                </h3>
                <p className="text-text-light text-[0.9375rem] leading-[1.85]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-navy to-primary-dark py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us about your content needs and we will put together a proposal
            that fits your goals, timeline, and budget.
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
