import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import { JsonLd, legalServiceSchema } from "./components/StructuredData";
import StickyCTA from "./components/StickyCTA";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-fraunces", // keep the CSS var name so existing refs still work
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const BASE_URL = "https://www.jimmullaney.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Jacksonville Family Law & Divorce Lawyer | A. James Mullaney",
    template: "%s | A. James Mullaney",
  },
  description:
    "Jacksonville family law & divorce attorney, 25+ years. Flat-fee uncontested divorce from $2,414 total. Compassionate, efficient guidance. Call 904-858-4334.",
  applicationName: "A. James Mullaney",
  authors: [{ name: "A. James Mullaney" }],
  keywords: [
    "Jacksonville family law attorney",
    "Jacksonville divorce lawyer",
    "uncontested divorce Jacksonville",
    "Florida family court mediator",
    "Jacksonville child support lawyer",
    "Florida parenting plan attorney",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Jacksonville Family Law & Divorce Lawyer | A. James Mullaney",
    description:
      "Jacksonville family law & divorce attorney, 25+ years. Flat-fee uncontested divorce from $2,414 total. Compassionate, efficient guidance.",
    url: BASE_URL,
    siteName: "A. James Mullaney",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/jacksonville-hero.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Jacksonville Family Law & Divorce Lawyer | A. James Mullaney",
    description:
      "Jacksonville family law & divorce attorney, 25+ years. Flat-fee uncontested divorce from $2,414 total. Compassionate, efficient guidance.",
    images: ["/images/jacksonville-hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <JsonLd data={legalServiceSchema} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EJVY8C3R7H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-EJVY8C3R7H');
          `}
        </Script>
      </head>
      <body
        className="min-h-screen"
        style={{ fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif" }}
      >
        {children}
        <StickyCTA />
      </body>
    </html>
  );
}
