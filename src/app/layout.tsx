import type { Metadata, Viewport } from "next";
import { Noto_Sans } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/** Full Kazakh Cyrillic (ә, ғ, қ, ң, ө, ұ, ү, һ, і) — Gilroy misses these glyphs */
const notoSans = Noto_Sans({
  subsets: ["cyrillic", "cyrillic-ext", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "TMK Limited — создаём ценность в ключевых отраслях",
    template: "%s — TMK Limited",
  },
  description:
    "TMK Limited объединяет ключевые отрасли — от недвижимости до агротехнологий — создавая интегрированные бизнес-решения.",
  icons: {
    icon: "/images/tmk/logo/logo.svg",
    apple: "/images/tmk/logo/logo.svg",
  },
  openGraph: {
    title: "TMK Limited",
    description: "Создаём ценность в ключевых отраслях: от недвижимости до IT",
    locale: "ru_KZ",
    type: "website",
    siteName: "TMK Limited",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`h-full ${notoSans.variable}`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
