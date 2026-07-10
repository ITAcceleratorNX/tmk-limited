import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import "./globals.css";

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
    <html lang="ru" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
