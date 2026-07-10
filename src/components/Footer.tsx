"use client";

import Image from "next/image";
import Link from "next/link";
import { TildaIn } from "@/components/motion/TildaIn";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig, tmkImages } from "@/lib/site";

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com", icon: "instagram" as const },
  { name: "WhatsApp", href: "https://wa.me/77017771881", icon: "whatsapp" as const },
  { name: "Telegram", href: "https://t.me", icon: "telegram" as const },
];

function SocialIcon({ type }: { type: (typeof socialLinks)[number]["icon"] }) {
  if (type === "whatsapp") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a11.86 11.86 0 0 0 5.76 1.47h.01c6.55 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.44ZM12.07 21.78h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.43-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.98c0 5.45-4.44 9.88-9.89 9.88Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "telegram") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M21.95 2.34a1.5 1.5 0 0 0-1.54-.22L2.6 9.7a1.5 1.5 0 0 0 .08 2.8l4.5 1.55 1.74 5.4a1.5 1.5 0 0 0 2.5.55l2.55-2.55 4.4 3.23a1.5 1.5 0 0 0 2.36-.9l2.7-16.2a1.5 1.5 0 0 0-.48-1.24ZM9.2 13.55l8.55-5.4-6.7 6.55-.2 2.35-1.65-3.5Zm8.95 5.05-4.05-2.98 5.55-8.55-9.95 6.3-4.2-1.45 15.05-6.55-2.4 13.23Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg width="17" height="17" viewBox="0 0 13 13" fill="none" aria-hidden>
      <path
        d="M6.25 4.67C5.38 4.67 4.67 5.38 4.67 6.25 4.67 7.13 5.38 7.83 6.25 7.83 7.12 7.83 7.83 7.13 7.83 6.25 7.83 5.38 7.12 4.67 6.25 4.67Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.42 0.69H4.08C2.21 0.69 0.69 2.21 0.69 4.08V8.42C0.69 10.29 2.21 11.81 4.08 11.81H8.42C10.29 11.81 11.81 10.29 11.81 8.42V4.08C11.81 2.21 10.29 0.69 8.42 0.69ZM6.25 8.67C4.91 8.67 3.83 7.59 3.83 6.25C3.83 4.91 4.91 3.83 6.25 3.83C7.59 3.83 8.67 4.91 8.67 6.25C8.67 7.59 7.59 8.67 6.25 8.67ZM8.92 3.84C8.59 3.84 8.33 3.57 8.33 3.23C8.33 2.9 8.59 2.63 8.92 2.63C9.26 2.63 9.53 2.9 9.53 3.23C9.53 3.57 9.26 3.84 8.92 3.84Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Footer() {
  const { t } = useLanguage();

  const menuLinks = [
    { href: "#top", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "/projects", label: t.nav.projects },
    { href: "#uslugi", label: t.nav.services },
    { href: "#partners", label: t.nav.partners },
    { href: "#contacts", label: t.nav.contacts },
  ];

  return (
    <footer className="bg-bg-footer py-14 text-white md:py-16">
      <div className="tilda-container">
        <div className="grid gap-10 md:grid-cols-4 lg:!grid-cols-[28.8%_26.2%_30.2%_14.8%] lg:gap-0">
          <TildaIn style="zoomin" className="flex flex-col justify-between">
            <Image
              src={tmkImages.footerLogo}
              alt={siteConfig.name}
              width={110}
              height={53}
              className="h-auto w-[110px]"
            />
          </TildaIn>

          <TildaIn style="zoomin" speed="text" delay={0.05}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                {t.nav.menu}
              </p>
              <nav className="mt-4 flex flex-col gap-2 text-sm font-light text-white/70">
                {menuLinks.map((link) => (
                  <a key={link.href} href={link.href} className="hover:text-gold">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </TildaIn>

          <TildaIn style="zoomin" speed="text" delay={0.1}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                {t.contact.footerContact}
              </p>
              <div className="mt-4 space-y-2 text-sm font-light text-white/70">
                <a href={`tel:${siteConfig.phone}`} className="block hover:text-gold">
                  {siteConfig.phoneDisplay}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="block hover:text-gold">
                  {siteConfig.email}
                </a>
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-gold">
                {t.contact.addressLabel}
              </p>
              <div className="mt-4 space-y-1 text-sm font-light text-white/70">
                <p>{t.contact.addressLine1}</p>
                <p>{t.contact.addressLine2}</p>
              </div>
            </div>
          </TildaIn>

          <TildaIn style="zoomin" speed="text" delay={0.15}>
            <div className="flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                {t.footer.hoursLabel}
              </p>
              <div className="mt-4 space-y-1 text-sm font-light text-white/70">
                <p>{t.contact.hoursTime}</p>
                <p>{t.contact.hoursDays}</p>
              </div>

              <div className="mt-auto flex gap-[24px] pt-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center bg-white/10 text-white transition-colors hover:bg-gold/80"
                  >
                    <SocialIcon type={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </TildaIn>
        </div>

        <TildaIn style="zoomin" speed="text" delay={0.2}>
          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm font-light text-white/50 md:flex-row md:items-center md:justify-between">
            <p>{t.footer.copyright}</p>
            <Link href="/policy" className="hover:text-gold">
              {t.footer.privacy}
            </Link>
          </div>
        </TildaIn>
      </div>
    </footer>
  );
}
