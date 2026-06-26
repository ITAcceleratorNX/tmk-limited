"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/Button";
import { PhoneInput } from "@/components/PhoneInput";
import { useLanguage } from "@/components/LanguageProvider";
import type { InterestOption } from "@/lib/i18n";
import { scaleIn } from "@/lib/motion";

const interestOptions: InterestOption[] = [
  "investments",
  "realEstate",
  "marketing",
  "technologies",
  "partnership",
  "other",
];

export function ContactForm() {
  const { locale, t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    setStatus("loading");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.locale = locale;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scaleIn}
      className="form-panel p-8 md:p-10"
    >
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[360px] flex-col items-center justify-center text-center"
            role="status"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center border-2 border-gold text-xl text-gold">
              ✓
            </div>
            <p className="text-base text-text-heading">{t.contact.form.success}</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 text-sm font-semibold text-gold hover:underline"
            >
              OK
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="relative space-y-5"
            exit={{ opacity: 0 }}
          >
            <input
              type="text"
              name="_website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute left-[-9999px] opacity-0"
              aria-hidden="true"
            />

            <div className="grid gap-5 md:grid-cols-2">
              {[
                { id: "name", name: "name", label: t.contact.form.name, type: "text", required: true },
                { id: "email", name: "email", label: t.contact.form.email, type: "email", required: true },
                { id: "company", name: "company", label: t.contact.form.company, type: "text", required: false },
              ].map((field) => (
                <div key={field.id} className={field.id === "company" ? "md:col-span-2 lg:col-span-1" : ""}>
                  <label
                    htmlFor={field.id}
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--form-label)" }}
                  >
                    {field.label} {field.required && "*"}
                  </label>
                  <input
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    className="form-input"
                    placeholder={field.label}
                    autoComplete={field.id === "email" ? "email" : field.id === "name" ? "name" : "organization"}
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--form-label)" }}
                >
                  {t.contact.form.phone} *
                </label>
                <PhoneInput
                  id="phone"
                  name="phone"
                  required
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="interest"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--form-label)" }}
              >
                {t.contact.form.interest} *
              </label>
              <select
                id="interest"
                name="interest"
                required
                defaultValue=""
                className="form-input appearance-none"
              >
                <option value="" disabled>
                  {t.contact.form.interestPlaceholder}
                </option>
                {interestOptions.map((option) => (
                  <option key={option} value={option}>
                    {t.contact.form.interests[option]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="comment"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--form-label)" }}
              >
                {t.contact.form.comment}
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={4}
                className="form-input resize-y"
                placeholder={t.contact.form.comment}
              />
            </div>

            <label className="flex items-start gap-3 text-sm" style={{ color: "var(--form-label)" }}>
              <input
                type="checkbox"
                name="privacy"
                required
                className="mt-0.5 accent-[var(--gold)]"
              />
              <span>
                {t.contact.form.privacyPrefix}{" "}
                <Link href="/policy" className="text-gold underline underline-offset-2 hover:no-underline">
                  {t.contact.form.privacyLink}
                </Link>
              </span>
            </label>

            <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
              {status === "loading" ? "..." : t.contact.form.submit}
            </Button>

            {status === "error" && (
              <p className="text-sm text-red-500" role="alert">
                {t.contact.form.error}
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
