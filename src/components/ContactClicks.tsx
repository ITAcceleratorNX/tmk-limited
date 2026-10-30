"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export function ContactClicks() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      const a = target.closest("a[href]");
      if (!a) return;

      const href = a.getAttribute("href") || "";
      const page = window.location.pathname;

      if (href.startsWith("tel:")) track("click_phone", { page });
      else if (/wa\.me|whatsapp\.com|^whatsapp:/i.test(href)) track("click_whatsapp", { page });
      else if (href.startsWith("mailto:")) track("click_email", { page });
      else if (/(^|\/\/)t\.me\//i.test(href)) track("click_telegram", { page });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
