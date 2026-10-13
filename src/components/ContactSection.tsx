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
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="tilda-container relative py-16 lg:flex lg:min-h-[740px] lg:items-center lg:justify-between lg:gap-12 lg:py-[110px]">
        <div className="hidden lg:flex lg:w-[47.5%] lg:shrink-0 lg:items-center lg:justify-center">
          <Image src={tmkImages.contact.badge} alt="" width={192} height={94} className="w-[192px] lg:-translate-y-[30px]" />
        </div>

        <div className="flex justify-center lg:w-[605px] lg:shrink-0 lg:justify-end">
          <TildaIn style="zoomin" className="w-full">
            <div className="form-panel bg-white p-8 md:p-[40px]">
              <h2 className="section-title">{t.contact.title}</h2>
              <p className="mt-6 max-w-[500px] text-lg font-normal leading-[1.45] text-navy">
                {t.contact.description}
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </TildaIn>
        </div>
      </div>
    </section>
  );
}
