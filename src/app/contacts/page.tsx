"use client";

import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ContactPopupProvider } from "@/components/ContactPopupProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import { siteConfig, tmkImages } from "@/lib/site";

function ContactsContent() {
  const { locale, t } = useLanguage();
  const { map } = siteConfig;
  const mapSrc = `https://yandex.ru/map-widget/v1/?ll=${map.lon}%2C${map.lat}&z=${map.zoom}&pt=${map.lon},${map.lat},pm2dbl`;

  return (
    <ContactPopupProvider>
      <Header />
      <main className="pt-[90px] lg:pt-[84px]">
        <section className="tilda-container pb-[49px] pt-[68px] lg:pt-[54px]">
          <p className="text-sm text-gold"><Link href={`/${locale}`} className="text-text-muted">{t.nav.home}</Link><span className="mx-5">/</span>{t.nav.contacts}</p>
          <h1 className="mt-4 text-[2.25rem] font-normal uppercase leading-[1.1] text-navy lg:mt-[50px] lg:text-[3.75rem]">{t.nav.contacts}</h1>
        </section>

        <section className="relative min-h-[630px] bg-[#e6e4df]">
          <iframe
            title={t.contact.mapTitle}
            src={mapSrc}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allowFullScreen
          />
          <div className="tilda-container relative pointer-events-none flex min-h-[630px] items-start pt-8">
            <div className="pointer-events-auto w-full max-w-[450px] border border-gold bg-navy p-3 text-white">
              <div className="min-h-[425px] border border-[#67778b] px-7 py-6">
                <Image src={tmkImages.footerLogo} alt="TMK Limited" width={65} height={39} className="w-[65px]" />
                <p className="mt-9 text-xs uppercase text-gold">{t.nav.contacts}</p>
                <a href={`tel:${siteConfig.phone}`} className="mt-3 block text-[30px] font-medium leading-tight">{siteConfig.phoneDisplay}</a>
                <a href={`mailto:${siteConfig.email}`} className="mt-3 block text-base text-white/60">{siteConfig.email}</a>
                <p className="mt-8 text-xs uppercase text-gold">{t.contact.addressLabel}</p>
                <p className="mt-4 text-lg leading-[1.55]">{t.contact.addressLine1}<br />{t.contact.addressLine2}, 050051</p>
                <p className="mt-8 text-xs uppercase text-gold">{t.contact.hoursLabel}</p>
                <p className="mt-4 text-lg">{t.contact.hoursTime}</p>
                <p className="mt-1 text-sm text-white/60">{t.contact.hoursDays}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="tilda-container grid gap-10 py-24 lg:grid-cols-2">
          <div>
            <p className="section-label">{t.nav.contacts}</p>
            <h2 className="section-title">{t.contact.title}</h2>
            <p className="mt-6 max-w-[500px] text-lg leading-[1.5]">{t.contact.description}</p>
            <p className="mt-10 text-base">{t.contact.altContact}</p>
            <a className="mt-6 block text-xl text-navy" href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
            <a className="mt-3 block text-lg text-navy" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
          <div className="bg-[#ecedf0] p-8 lg:p-10"><ContactForm includeCompany /></div>
        </section>
      </main>
      <Footer />
    </ContactPopupProvider>
  );
}

export default function ContactsPage() {
  return <LanguageProvider><ContactsContent /></LanguageProvider>;
}
