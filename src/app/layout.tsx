import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/config/siteConfig";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${siteConfig.title} - AllDigiCraft`,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "DigiCraft Editions" }],
  creator: "AllDigiCraft",
  publisher: "DigiCraft",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://AllDigiCraft",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "AllDigiCraft",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Guide PDF Mon Enfant Pleure à l'École — AllDigiCraft",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdProduct = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: siteConfig.title,
    description: siteConfig.description,
    image: "https://AllDigiCraft/assets/ebook-cover.png",
    offers: {
      "@type": "Offer",
      price: siteConfig.pricing.amount.toFixed(2),
      priceCurrency: siteConfig.pricing.currency,
      availability: "https://schema.org/InStock",
      url: "https://AllDigiCraft#commander",
      seller: {
        "@type": "Organization",
        name: "AllDigiCraft",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "148",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <html lang="fr" className={`${displayFont.variable} ${sansFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body className="font-sans antialiased bg-cream text-stone-900 min-h-screen selection:bg-amber-200 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
