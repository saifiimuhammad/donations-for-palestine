import type { Metadata } from "next";
import "./globals.css";

import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto-condensed", // optional for CSS use
});

export const metadata: Metadata = {
  title: "Trusted Donations for Palestine",
  description: "Helping Pakistanis donate safely to Palestine. Donate now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotoCondensed.variable}>
      <body>{children}</body>
    </html>
  );
}
