"use client";

import Image from "next/image";
import Link from "next/link";
import { TildaIn } from "@/components/motion/TildaIn";
import { useLanguage } from "@/components/LanguageProvider";
import { siteConfig, tmkImages } from "@/lib/site";

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com" },
  { name: "WhatsApp", href: "https://wa.me/77017771881" },
  { name: "Telegram", href: "https://t.me" },
];

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 13 13" fill="none">
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
                    <InstagramIcon />
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
