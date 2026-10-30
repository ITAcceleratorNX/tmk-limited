"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { PhoneInput } from "@/components/PhoneInput";
import { leadFormParams, track } from "@/lib/analytics";
import { localizedHref } from "@/lib/i18n";

export function ContactForm({ includeCompany = false, popup = false }: { includeCompany?: boolean; popup?: boolean }) {
  const { locale, t } = useLanguage();
  const pathname = usePathname();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState(t.contact.form.error);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    setErrorMessage(t.contact.form.error);

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.locale = locale;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        setErrorMessage(response.status === 429 ? t.contact.form.rateLimit : t.contact.form.error);
        setStatus("error");
        return;
      }
      track("lead_form", leadFormParams(pathname));
      form.reset();
      setStatus("success");
    } catch {
      setErrorMessage(t.contact.form.error);
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex min-h-[280px] flex-col items-center justify-center text-center"
        >
          <p className="text-base text-text-heading">{t.contact.form.success}</p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm font-semibold text-gold hover:underline"
          >
            OK
          </button>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={handleSubmit} className={popup ? "space-y-[25px]" : "space-y-4"}>
          <input type="text" name="_website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <div className="relative">
            <input
              name="name"
              required
              placeholder={t.contact.form.name}
              className={`form-input ${popup ? "!h-[50px] !py-0 !text-[14px]" : ""}`}
            />
            {!popup && <span aria-hidden className="pointer-events-none absolute right-1 top-4 text-xs text-gold">*</span>}
          </div>

          {includeCompany && (
            <input
              name="company"
              placeholder="Название компании"
              className={`form-input ${popup ? "!h-[50px] !py-0 !text-[14px]" : ""}`}
            />
          )}

          <PhoneInput
            id="phone"
            name="phone"
            required
            placeholder="(000) 000-00-00"
            compact={popup}
            invalidMessage={t.contact.form.invalidPhone}
          />

          <div className="relative">
            <input
              name="email"
              type="email"
              required
              placeholder={t.contact.form.email}
              className={`form-input ${popup ? "!h-[50px] !py-0 !text-[14px]" : ""}`}
            />
            {!popup && <span aria-hidden className="pointer-events-none absolute right-1 top-4 text-xs text-gold">*</span>}
          </div>

          <div className="relative">
            {popup ? (
              <input
                name="message"
                required
                placeholder={t.contact.form.message}
                className="form-input !h-[50px] !py-0 !text-[14px]"
              />
            ) : (
              <textarea
                name="message"
                required
                rows={4}
                placeholder={t.contact.form.message}
                className="form-input resize-none"
              />
            )}
            {!popup && <span aria-hidden className="pointer-events-none absolute right-1 top-4 text-xs text-gold">*</span>}
          </div>

          <label
            className={`flex items-start gap-3 text-text-muted ${popup ? "text-[12px] leading-[16px]" : "text-sm leading-relaxed"}`}
          >
            <input
              type="checkbox"
              name="privacy"
              value="yes"
              required
              defaultChecked
              className={popup ? "mt-0 h-[19px] w-[19px] shrink-0 accent-black" : "mt-1"}
            />
            <span>
              {t.contact.form.privacyPrefix}{" "}
              <Link href={localizedHref("/policy/ru", locale)} className="text-navy underline hover:text-gold">
                {t.contact.form.privacyLink}
              </Link>
            </span>
          </label>

          {status === "error" && <p className="text-sm text-red-400">{errorMessage}</p>}

          <button
            type="submit"
            disabled={status === "loading"}
            className={`btn-primary !bg-navy w-full disabled:opacity-60 ${popup ? "!h-[50px] !text-[14px] !font-semibold" : "!h-[60px]"}`}
          >
            {status === "loading" ? "..." : t.contact.form.submit}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
