import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    return [
      { source: "/ru", destination: "/" },
      { source: "/en", destination: "/" },
      { source: "/kz", destination: "/" },
      { source: "/about/ru", destination: "/about" },
      { source: "/about/en", destination: "/about" },
      { source: "/about/kz", destination: "/about" },
      { source: "/projects/ru", destination: "/projects" },
      { source: "/projects/en", destination: "/projects" },
      { source: "/projects/kz", destination: "/projects" },
      { source: "/contacts/ru", destination: "/contacts" },
      { source: "/contacts/en", destination: "/contacts" },
      { source: "/contacts/kz", destination: "/contacts" },
      { source: "/policy/ru", destination: "/policy" },
      { source: "/policy/en", destination: "/policy" },
      { source: "/policy/kz", destination: "/policy" },
      // legacy Kazakh suffix
      { source: "/kk", destination: "/" },
      { source: "/about/kk", destination: "/about" },
      { source: "/projects/kk", destination: "/projects" },
      { source: "/contacts/kk", destination: "/contacts" },
      { source: "/policy/kk", destination: "/policy" },
      { source: "/streamline-logistics/ru", destination: "/projects/streamline" },
      { source: "/kazagris-ventures/ru", destination: "/projects/kazagris" },
      { source: "/qaitadan-creative-partners/ru", destination: "/projects/qaitadan" },
      { source: "/valar-group/ru", destination: "/projects/valar" },
      { source: "/tm-3ki-drilling-llp/ru", destination: "/projects/tm3ki" },
      { source: "/qazconnect-telecom/ru", destination: "/projects/qazconnect" },
      { source: "/table61/ru", destination: "/projects/horeca" },
      { source: "/tmk-technohorizon-llp/ru", destination: "/projects/technohorizon" },
      { source: "/workflow/ru", destination: "/projects/workflow" },
      { source: "/streamline-logistics/en", destination: "/projects/streamline" },
      { source: "/kazagris-ventures/en", destination: "/projects/kazagris" },
      { source: "/qaitadan-creative-partners/en", destination: "/projects/qaitadan" },
      { source: "/valar-group/en", destination: "/projects/valar" },
      { source: "/tm-3ki-drilling-llp/en", destination: "/projects/tm3ki" },
      { source: "/qazconnect-telecom/en", destination: "/projects/qazconnect" },
      { source: "/table61/en", destination: "/projects/horeca" },
      { source: "/tmk-technohorizon-llp/en", destination: "/projects/technohorizon" },
      { source: "/workflow/en", destination: "/projects/workflow" },
      { source: "/streamline-logistics/kz", destination: "/projects/streamline" },
      { source: "/kazagris-ventures/kz", destination: "/projects/kazagris" },
      { source: "/qaitadan-creative-partners/kz", destination: "/projects/qaitadan" },
      { source: "/valar-group/kz", destination: "/projects/valar" },
      { source: "/tm-3ki-drilling-llp/kz", destination: "/projects/tm3ki" },
      { source: "/qazconnect-telecom/kz", destination: "/projects/qazconnect" },
      { source: "/table61/kz", destination: "/projects/horeca" },
      { source: "/tmk-technohorizon-llp/kz", destination: "/projects/technohorizon" },
      { source: "/workflow/kz", destination: "/projects/workflow" },
    ];
  },
};

export default async function config() {
  if (process.env.ANALYZE !== "true") return nextConfig;
  const { default: bundleAnalyzer } = await import("@next/bundle-analyzer");
  return bundleAnalyzer({ enabled: true })(nextConfig);
}
