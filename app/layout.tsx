import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Atelier 27",
  image: "https://example.com/logo.png",
  telephone: "+00 000 0000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Culinary Avenue",
    addressLocality: "Metropolis",
    addressRegion: "NY",
    postalCode: "10001",
    addressCountry: "US"
  },
  servesCuisine: ["International", "Fusion"],
  priceRange: "$$",
  url: "https://atelier27.example.com"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://atelier27.example.com"),
  title: "Atelier 27 | International Bistro",
  description:
    "Atelier 27 is an international restaurant crafting modern bistro experiences with global flavors, seasonal ingredients, and five-minute reservations.",
  openGraph: {
    title: "Atelier 27 | International Bistro",
    description:
      "Atelier 27 is an international restaurant crafting modern bistro experiences with global flavors, seasonal ingredients, and five-minute reservations.",
    url: "https://atelier27.example.com",
    siteName: "Atelier 27",
    images: [
      {
        url: "https://atelier27.example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dining table with Atelier 27 signature dishes"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier 27 | International Bistro",
    description:
      "Atelier 27 is an international restaurant crafting modern bistro experiences with global flavors, seasonal ingredients, and five-minute reservations.",
    images: ["https://atelier27.example.com/twitter-card.jpg"],
    site: "@atelier27"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} min-h-screen bg-surface text-ink`}> 
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </div>
        <Toaster position="top-center" richColors theme="light" />
      </body>
    </html>
  );
}
