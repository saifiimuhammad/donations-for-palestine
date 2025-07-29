import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto-condensed",
});

const MY_URI = "https://yourdomain.com";

export const metadata: Metadata = {
  title: "Trusted Donations for Palestine | Verified Pakistani Charities",
  description:
    "Donate safely to verified Pakistani organizations helping Palestine. Zakat and sadaqah trusted by thousands.",
  keywords: [
    "donate to Palestine",
    "Pakistan charities",
    "zakat donation",
    "sadaqah",
    "Gaza relief",
    "Islamic charity",
    "trusted donation platform",
  ],
  metadataBase: new URL(MY_URI),
  openGraph: {
    title: "Trusted Donations for Palestine",
    description:
      "Verified Pakistani organizations helping Palestinians. Donate securely now.",
    url: MY_URI,
    siteName: "Palestine Donations",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Donate to Palestine",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted Donations for Palestine",
    description:
      "Support Palestine through verified Pakistani charities. Fast, secure donations.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: MY_URI,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={robotoCondensed.variable}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Trusted Palestine Donation Links",
              url: MY_URI,
              description:
                "A curated list of authentic, trusted donation platforms to help Palestine.",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
