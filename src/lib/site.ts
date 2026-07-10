export const siteConfig = {
  name: "TMK Limited",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tmk-limited.com",
  email: "tokpanov.k@tmk-limited.com",
  phone: "+77017771881",
  phoneDisplay: "+7 (701) 777-18-81",
  address: {
    ru: "Казахстан, г. Алматы, ул. Елебекова 10/1",
    en: "10/1 Elebekov St., Almaty, Kazakhstan",
  },
};

export const tmkImages = {
  logo: "/images/tmk/logo/logo.svg",
  footerLogo: "/images/tmk/logo/footer-logo.svg",
  heroSlides: [
    "/images/tmk/hero/slides/Rectangle_162_1_1.png",
    "/images/tmk/hero/slides/IMG_4418_1_1.png",
    "/images/tmk/hero/slides/10184_1.jpg",
    "/images/tmk/hero/slides/image_3_1.png",
    "/images/tmk/hero/slides/image_1.png",
  ],
  about: "/images/tmk/about/about.jpg",
  aboutBadge: "/images/tmk/contact/badge.svg",
  contact: {
    bg: "/images/tmk/contact/bg.png",
    badge: "/images/tmk/contact/badge.svg",
  },
  directions: {
    realEstate: "/images/tmk/directions/real-estate.jpg",
    agriculture: "/images/tmk/directions/agriculture.jpg",
    construction: "/images/tmk/directions/construction.jpg",
    telecom: "/images/tmk/directions/telecom.jpg",
    marketing: "/images/tmk/directions/marketing.jpg",
    horeca: "/images/tmk/directions/horeca.jpg",
  },
  projects: {
    kazagris: "/images/tmk/projects/kazagris.jpg",
    horeca: "/images/tmk/projects/horeca.jpg",
  },
} as const;
