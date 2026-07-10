"use client";

import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { TildaIn } from "@/components/motion/TildaIn";
import { useLanguage } from "@/components/LanguageProvider";
import { tmkImages } from "@/lib/site";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contacts" className="relative scroll-mt-24 overflow-hidden bg-navy-deep">
      <div className="absolute inset-0">
        <Image src={tmkImages.contact.bg} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-navy-deep/55" />
      </div>

      <div className="tilda-container relative py-16 md:py-24 lg:flex lg:min-h-[670px] lg:items-center lg:justify-between lg:gap-12 lg:py-16 xl:py-20">
        <div className="hidden lg:flex lg:w-[42%] lg:shrink-0 lg:items-center lg:justify-center">
          <Image src={tmkImages.contact.badge} alt="" width={192} height={94} className="w-40 opacity-90" />
        </div>

        <div className="flex justify-center lg:w-auto lg:justify-end lg:pr-2 xl:pr-6">
          <TildaIn style="zoomin" className="w-full max-w-[505px]">
            <div className="form-panel bg-white p-8 md:p-[34px]">
              <h2 className="section-title text-[1.875rem] md:text-[2.125rem]">{t.contact.title}</h2>
              <p className="mt-4 max-w-[335px] text-base font-normal leading-relaxed text-text-muted">
                {t.contact.description}
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </TildaIn>
        </div>
      </div>
    </section>
  );
}
