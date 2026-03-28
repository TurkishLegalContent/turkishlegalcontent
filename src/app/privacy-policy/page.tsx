import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for turkishlegalcontent.com — how we collect, use, and protect your personal data. KVKK and GDPR compliant.",
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-sm">
            Last updated: March 1, 2026
          </p>
        </div>
        <div className="h-1 bg-gradient-to-r from-gold via-gold/60 to-transparent mt-16" />
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose">
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy explains how Turkish Legal Content (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), operated from Istanbul, Turkey, collects, uses, stores, and protects your personal data when you visit or interact with our website at turkishlegalcontent.com (the &quot;Website&quot;).
            </p>
            <p>
              We are committed to protecting your privacy in accordance with the Turkish Personal Data Protection Law No. 6698 (KVKK), the EU General Data Protection Regulation (GDPR), and other applicable data protection legislation.
            </p>

            <h2>2. Data Controller</h2>
            <p>
              The data controller responsible for your personal data is:
            </p>
            <p>
              <strong>Turkish Legal Content</strong><br />
              Maslak Mah. Meydan Sok. Beybi Giz Plaza No:99/1 Kat:27<br />
              Sarıyer / Istanbul, Turkey<br />
              Email: info@turkishlegalcontent.com
            </p>

            <h2>3. Personal Data We Collect</h2>
            <p>
              We collect personal data in the following ways:
            </p>

            <h3>3.1 Contact Form Submissions</h3>
            <p>
              When you submit a message through our contact form, we collect the information you provide, including your full name, email address, subject line, and message content. This data is collected solely for the purpose of responding to your inquiry and is processed on the legal basis of your explicit consent and our legitimate interest in conducting business communications.
            </p>

            <h3>3.2 Cookies and Tracking Technologies</h3>
            <p>
              Our Website uses cookies and similar technologies to improve your browsing experience and to analyze how visitors use our site. The types of cookies we use include:
            </p>
            <ul>
              <li><strong>Essential cookies:</strong> Required for the basic functionality of the Website. These cannot be disabled.</li>
              <li><strong>Analytics cookies:</strong> We use Google Analytics to collect anonymized data about page views, traffic sources, and user behavior. Google Analytics uses cookies to identify unique visitors without collecting personally identifiable information. You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</li>
            </ul>

            <h3>3.3 Server Logs</h3>
            <p>
              Our hosting provider automatically collects standard server log information, including your IP address, browser type, referring pages, and the date and time of each request. This data is used for security monitoring and technical maintenance and is not linked to personally identifiable information.
            </p>

            <h2>4. How We Use Your Data</h2>
            <p>
              We use the personal data we collect for the following purposes:
            </p>
            <ul>
              <li>To respond to your inquiries and provide requested information about our services</li>
              <li>To analyze Website usage and improve our content and user experience</li>
              <li>To maintain the security and integrity of our Website</li>
              <li>To comply with our legal obligations under Turkish and EU law</li>
            </ul>

            <h2>5. Third-Party Services</h2>
            <p>
              We use the following third-party services that may process your data:
            </p>
            <ul>
              <li><strong>Google Analytics:</strong> Web analytics service provided by Google LLC. Data may be transferred to servers in the United States. Google&apos;s privacy policy is available at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.</li>
              <li><strong>Hosting provider:</strong> Our Website is hosted on infrastructure that may process server log data as described above.</li>
            </ul>
            <p>
              We do not sell, rent, or share your personal data with third parties for their marketing purposes.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              Personal data submitted through our contact form is retained for as long as necessary to fulfill the purpose for which it was collected, typically no longer than 24 months after our last communication with you. Analytics data is retained in anonymized form in accordance with Google Analytics default retention settings.
            </p>

            <h2>7. Your Rights Under KVKK</h2>
            <p>
              Under the Turkish Personal Data Protection Law (KVKK), you have the right to:
            </p>
            <ul>
              <li>Learn whether your personal data is being processed</li>
              <li>Request information about the processing of your data</li>
              <li>Learn the purpose of data processing and whether your data is used in accordance with that purpose</li>
              <li>Know the third parties to whom your data is transferred, domestically or abroad</li>
              <li>Request correction of incomplete or inaccurate data</li>
              <li>Request deletion or destruction of your personal data</li>
              <li>Object to any result that arises against you through the analysis of your processed data exclusively by automated systems</li>
              <li>Claim compensation for damages arising from unlawful processing of your data</li>
            </ul>

            <h2>8. Your Rights Under GDPR</h2>
            <p>
              If you are located in the European Economic Area (EEA) or the United Kingdom, you additionally have the right to:
            </p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request rectification of inaccurate personal data</li>
              <li>Request erasure of your personal data (&quot;right to be forgotten&quot;)</li>
              <li>Restrict the processing of your personal data</li>
              <li>Data portability — receive your data in a structured, commonly used format</li>
              <li>Object to the processing of your personal data</li>
              <li>Withdraw consent at any time where processing is based on consent</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>

            <h2>9. International Data Transfers</h2>
            <p>
              Where your data is transferred outside of Turkey or the EEA (for example, through the use of Google Analytics), we ensure that appropriate safeguards are in place, including standard contractual clauses or equivalent mechanisms recognized under applicable law.
            </p>

            <h2>10. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include the use of SSL/TLS encryption for data in transit and secure storage practices for data at rest.
            </p>

            <h2>11. Children&apos;s Privacy</h2>
            <p>
              Our Website is not directed at individuals under the age of 18. We do not knowingly collect personal data from children. If you believe a child has submitted personal data to us, please contact us and we will delete it promptly.
            </p>

            <h2>12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. Any updates will be posted on this page with a revised &quot;Last updated&quot; date. We encourage you to review this page periodically.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to exercise your rights regarding your personal data, please contact us at:
            </p>
            <p>
              <strong>Turkish Legal Content</strong><br />
              Email: info@turkishlegalcontent.com<br />
              Maslak Mah. Meydan Sok. Beybi Giz Plaza No:99/1 Kat:27<br />
              Sarıyer / Istanbul, Turkey
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
