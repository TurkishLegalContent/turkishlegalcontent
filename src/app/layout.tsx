import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Turkish Legal Content — Professional Legal Content Writing",
    template: "%s | Turkish Legal Content",
  },
  description:
    "Professional legal content writing services for law firms, corporate clients, and businesses in Turkey. SEO-optimized content in Turkish and English by a licensed attorney.",
  keywords: [
    "legal content writing",
    "Turkish legal content",
    "law firm SEO",
    "legal copywriting",
    "Turkish English translation",
    "legal blog writing",
    "attorney content writer",
  ],
  authors: [{ name: "Turkish Legal Content" }],
  icons: {
    icon: "/images/tlc-icon-512.png",
    apple: "/images/tlc-icon-512.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://turkishlegalcontent.com",
    siteName: "Turkish Legal Content",
    title: "Turkish Legal Content — Professional Legal Content Writing",
    description:
      "Professional legal content writing services for law firms, corporate clients, and businesses in Turkey. Written by a licensed attorney.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turkish Legal Content — Professional Legal Content Writing",
    description:
      "Professional legal content writing services for law firms, corporate clients, and businesses in Turkey.",
  },
  metadataBase: new URL("https://turkishlegalcontent.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
