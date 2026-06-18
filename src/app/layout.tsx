import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "TMK Holding — инвестиции, недвижимость, маркетинг, технологии",
    template: "%s — TMK Holding",
  },
  description:
    "TMK Holding — экосистема роста для вашего бизнеса. Инвестиции, коммерческая недвижимость, маркетинг и цифровые технологии с 2017 года.",
  keywords: [
    "TMK Holding",
    "TMK Limited",
    "инвестиции",
    "недвижимость",
    "маркетинг",
    "технологии",
    "Алматы",
    "МФЦА",
    "холдинг",
  ],
  icons: {
    icon: "/images/favicon.svg",
    apple: "/images/favicon.svg",
  },
  openGraph: {
    title: "TMK Holding — экосистема роста для вашего бизнеса",
    description:
      "Инвестиции. Недвижимость. Маркетинг. Технологии. TMK Holding с 2017 года.",
    locale: "ru_KZ",
    alternateLocale: ["en_US"],
    type: "website",
    siteName: "TMK Holding",
  },
  twitter: {
    card: "summary_large_image",
    title: "TMK Holding",
    description:
      "Экосистема роста для вашего бизнеса. Инвестиции, недвижимость, маркетинг, технологии.",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${cormorant.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
