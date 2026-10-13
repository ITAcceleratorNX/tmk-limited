import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    return [
      { source: "/ru", destination: "/" },
      { source: "/en", destination: "/" },
      { source: "/kk", destination: "/" },
      { source: "/about/ru", destination: "/about" },
      { source: "/about/en", destination: "/about" },
      { source: "/about/kk", destination: "/about" },
      { source: "/projects/ru", destination: "/projects" },
      { source: "/projects/en", destination: "/projects" },
      { source: "/projects/kk", destination: "/projects" },
      { source: "/contacts/ru", destination: "/contacts" },
      { source: "/contacts/en", destination: "/contacts" },
      { source: "/contacts/kk", destination: "/contacts" },
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
      { source: "/streamline-logistics/kk", destination: "/projects/streamline" },
      { source: "/kazagris-ventures/kk", destination: "/projects/kazagris" },
      { source: "/qaitadan-creative-partners/kk", destination: "/projects/qaitadan" },
      { source: "/valar-group/kk", destination: "/projects/valar" },
      { source: "/tm-3ki-drilling-llp/kk", destination: "/projects/tm3ki" },
      { source: "/qazconnect-telecom/kk", destination: "/projects/qazconnect" },
      { source: "/table61/kk", destination: "/projects/horeca" },
      { source: "/tmk-technohorizon-llp/kk", destination: "/projects/technohorizon" },
      { source: "/workflow/kk", destination: "/projects/workflow" },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
