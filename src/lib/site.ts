export const siteConfig = {
  name: "TMK Holding",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tmk-limited.vercel.app",
  email: "tokpanov.k@tmk-limited.com",
  phone: "+77017771881",
  phoneDisplay: "+7 (701) 777-18-81",
  address: {
    ru: "Казахстан, г. Алматы, ул. Елебекова 10/1",
    en: "10/1 Elebekov St., Almaty, Kazakhstan",
  },
};

export const projectImages: Record<string, string> = {
  "Koktem Grand":   "/images/projects/koktem.jpg",
  "Venus":          "/images/projects/venus.jpg",
  "Teniz Towers":   "/images/projects/teniz.jpg",
  "BTS-проекты":    "/images/projects/bts.jpg",
  "BTS Projects":   "/images/projects/bts.jpg",
};

export function getProjectImage(name: string): string {
  return projectImages[name] ?? "/images/projects/koktem.jpg";
}

export const partnerLogos: Record<string, string> = {
  // Row 1
  "Chevron":       "/images/partners/chevron.png",
  "Coca-Cola":     "/images/partners/coca-cola.png",
  "Beeline":       "/images/partners/beeline.png",
  "Airbus":        "/images/partners/airbus.png",
  "Chanel":        "/images/partners/chanel.png",
  "Kcell":         "/images/partners/kcell.png",
  // Row 2
  "Wildberries":   "/images/partners/wildberries.png",
  "Ozon":          "/images/partners/ozon.png",
  "QazPost":       "/images/partners/qazpost.png",
  "Altyn Bank":    "/images/partners/altyn-bank.svg",
  "Bank RBK":      "/images/partners/bank-rbk.png",
  // Row 3
  "Dostyk Plaza":  "/images/partners/dostyk-plaza.svg",
  "Samsung":       "/images/partners/samsung.png",
  "Esentai Mall":  "/images/partners/esentai-mall.svg",
  "Shymbulak":     "/images/partners/shymbulak.svg",
  "Toyota":        "/images/partners/toyota.png",
};

export function getPartnerLogo(name: string): string | undefined {
  return partnerLogos[name];
}
