import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — TMK Holding",
  description: "Политика конфиденциальности TMK Holding",
  robots: { index: true, follow: true },
};

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
