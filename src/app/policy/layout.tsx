import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — TMK Limited",
  description: "Политика конфиденциальности TMK Limited",
  robots: { index: true, follow: true },
};

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
