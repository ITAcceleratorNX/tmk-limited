"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { PhoneInput } from "@/components/PhoneInput";

export function ContactForm() {
  const { locale, t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    payload.locale = locale;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch {
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
        <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="_website" className="hidden" tabIndex={-1} autoComplete="off" />

          <div>
            <input
              name="name"
              required
              placeholder={`${t.contact.form.name} *`}
              className="form-input"
            />
          </div>

          <PhoneInput id="phone" name="phone" required placeholder={`${t.contact.form.phone} *`} />

          <div>
            <input
              name="email"
              type="email"
              required
              placeholder={`${t.contact.form.email} *`}
              className="form-input"
            />
          </div>

          <div>
            <textarea
              name="message"
              required
              rows={4}
              placeholder={`${t.contact.form.message} *`}
              className="form-input resize-none"
            />
          </div>

          <label className="flex items-start gap-3 text-sm leading-relaxed text-text-muted">
            <input type="checkbox" name="privacy" value="yes" required className="mt-1" />
            <span>
              {t.contact.form.privacyPrefix}{" "}
              <Link href="/policy" className="text-gold hover:underline">
                {t.contact.form.privacyLink}
              </Link>
            </span>
          </label>

          {status === "error" && (
            <p className="text-sm text-red-400">{t.contact.form.error}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary w-full disabled:opacity-60"
          >
            {status === "loading" ? "..." : t.contact.form.submit}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
