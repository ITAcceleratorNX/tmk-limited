"use client";

import { AnimatePresence, motion } from "framer-motion";
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from "@/components/LanguageProvider";

const POPUP_HASH = "popupru";

interface ContactPopupContextValue {
  openContactPopup: () => void;
  closeContactPopup: () => void;
}

const ContactPopupContext = createContext<ContactPopupContextValue | null>(null);

export function useContactPopup() {
  const ctx = useContext(ContactPopupContext);
  if (!ctx) {
    throw new Error("useContactPopup must be used within ContactPopupProvider");
  }
  return ctx;
}

export function ContactPopupProvider({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const openContactPopup = useCallback(() => {
    setOpen(true);
    if (typeof window !== "undefined" && window.location.hash !== `#${POPUP_HASH}`) {
      window.history.pushState(null, "", `#${POPUP_HASH}`);
    }
  }, []);

  const closeContactPopup = useCallback(() => {
    setOpen(false);
    if (typeof window !== "undefined" && window.location.hash === `#${POPUP_HASH}`) {
      window.history.pushState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  useEffect(() => {
    const syncFromHash = () => {
      setOpen(window.location.hash === `#${POPUP_HASH}`);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContactPopup();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeContactPopup]);

  return (
    <ContactPopupContext.Provider value={{ openContactPopup, closeContactPopup }}>
      {children}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t.contact.title}
            className="fixed inset-0 z-[100] flex items-start justify-center sm:items-center sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black sm:bg-black/70"
              aria-label={t.nav.close}
              onClick={closeContactPopup}
            />
            <button
              type="button"
              onClick={closeContactPopup}
              className="absolute right-[14px] top-[10px] z-20 flex h-[30px] w-[30px] items-center justify-center text-white sm:hidden"
              aria-label={t.nav.close}
            >
              <span aria-hidden className="text-[28px] font-light leading-none">×</span>
            </button>
            <motion.div
              className="relative z-10 mt-[50px] max-h-[calc(100svh-50px)] min-h-[calc(100svh-50px)] w-full overflow-y-auto bg-white shadow-2xl sm:mt-0 sm:min-h-0 sm:max-w-lg sm:max-h-[calc(100svh-32px)]"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <button
                type="button"
                onClick={closeContactPopup}
                className="absolute right-4 top-4 z-10 hidden h-8 w-8 items-center justify-center text-navy/60 transition-colors hover:text-navy sm:flex"
                aria-label={t.nav.close}
              >
                <svg width="23" height="23" viewBox="0 0 23 23" aria-hidden>
                  <g fill="currentColor">
                    <rect
                      transform="translate(11.314 11.314) rotate(-45) translate(-11.314 -11.314)"
                      x="10.31"
                      y="-3.69"
                      width="2"
                      height="30"
                    />
                    <rect
                      transform="translate(11.314 11.314) rotate(-315) translate(-11.314 -11.314)"
                      x="10.31"
                      y="-3.69"
                      width="2"
                      height="30"
                    />
                  </g>
                </svg>
              </button>
              <div className="p-5 sm:p-10">
                <h2 className="text-[28px] font-semibold leading-[34px] text-navy">{t.contact.title}</h2>
                <p className="mt-[6px] text-[12px] font-medium leading-[17px] text-text-muted">
                  {t.contact.description}
                </p>
                <div className="mt-[14px]">
                  <ContactForm includeCompany popup />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ContactPopupContext.Provider>
  );
}
