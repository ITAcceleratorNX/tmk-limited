export const siteConfig = {
  name: "TMK Holding",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tmk-limited.com",
  email: "tokpanov.k@tmk-limited.com",
  phone: "+77017771881",
  phoneDisplay: "+7 (701) 777-18-81",
  address: {
    ru: "Казахстан, г. Алматы, ул. Елебекова 10/1",
    en: "10/1 Elebekov St., Almaty, Kazakhstan",
  },
};

export const projectImages: Record<string, string> = {
  "Koktem Grand": "/images/projects/koktem.jpg",
  Venus: "/images/projects/venus.jpg",
  "Teniz Towers": "/images/projects/teniz.jpg",
  "BTS-проекты": "/images/projects/bts.jpg",
  "BTS Projects": "/images/projects/bts.jpg",
};

export function getProjectImage(name: string): string {
  return projectImages[name] ?? "/images/projects/koktem.jpg";
}

export const partnerLogos: Record<string, string> = {
  "Coca-Cola": "/images/partners/coca-cola.svg",
  Kcell: "/images/partners/kcell.svg",
  "BAAS Group": "/images/partners/baas.svg",
  "101 TAXI": "/images/partners/101taxi.svg",
  "Aston Clinic": "/images/partners/aston.svg",
  "Алишер Исаев": "/images/partners/alisher.svg",
  "Alisher Isaev": "/images/partners/alisher.svg",
};

export function getPartnerLogo(name: string): string | undefined {
  return partnerLogos[name];
}
