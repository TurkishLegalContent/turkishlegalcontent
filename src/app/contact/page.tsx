"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-navy text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            Contact Us
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Ready to start a project? Reach out for a free consultation and
            quote. We typically respond within 24 hours.
          </p>
        </div>
        <div className="h-1 bg-gradient-to-r from-gold via-gold/60 to-transparent mt-20" />
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-serif text-2xl font-bold mb-2">
                Send Us a Message
              </h2>
              <p className="text-text-muted text-sm mb-8">
                Fill out the form below and we&apos;ll get back to you promptly.
              </p>

              {submitted ? (
                <div className="bg-primary-light border border-primary/20 rounded-lg p-10 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif font-bold text-xl mb-2">
                    Message Received
                  </h3>
                  <p className="text-text-light">
                    Thank you for reaching out. We will get back to you within
                    24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full border border-border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full border border-border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full border border-border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full border border-border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your project, content needs, and timeline..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gold text-white font-semibold px-8 py-3.5 rounded hover:bg-gold-dark transition-colors tracking-wide w-full sm:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Email</h3>
                    <a
                      href="mailto:info@turkishlegalcontent.com"
                      className="text-text-light text-sm hover:text-primary transition-colors"
                    >
                      info@turkishlegalcontent.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Phone</h3>
                    <a
                      href="tel:+905323901452"
                      className="text-text-light text-sm hover:text-primary transition-colors"
                    >
                      +90 532 390 14 52
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Office</h3>
                    <p className="text-text-light text-sm leading-relaxed">
                      Maslak Mah. Meydan Sok.<br />
                      Beybi Giz Plaza No:99/1 Kat:27<br />
                      Sarıyer / Istanbul, Turkey
                    </p>
                  </div>
                </div>

              </div>

              {/* Quick note */}
              <div className="mt-10 bg-gold-light border border-gold/20 rounded-lg p-6">
                <h3 className="font-serif font-semibold mb-2 text-sm">
                  Free Consultation
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Not sure what you need? Schedule a free 30-minute consultation
                  to discuss your content goals and receive a tailored proposal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
