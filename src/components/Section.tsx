"use client";

import { motion } from "framer-motion";
import { AnimateIn } from "@/components/motion/AnimateIn";
import type { MotionVariant } from "@/lib/motion";
import { type ReactNode } from "react";

interface SectionProps {
  id?: string;
  label: string;
  heading: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  dark?: boolean;
  headerVariant?: MotionVariant;
}

export function Section({
  id,
  label,
  heading,
  description,
  children,
  className = "",
  dark = false,
  headerVariant = "fadeUp",
}: SectionProps) {
  return (
    <section
      {...(id ? { id } : {})}
      className={`relative scroll-mt-20 section-pad ${dark ? "bg-bg-elevated" : "bg-bg"} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <AnimateIn
          variant={headerVariant}
          className="mb-14 max-w-3xl md:mb-20"
        >
          <motion.div
            className="gold-line mb-6 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {label}
          </p>
          <h2 className="font-serif text-3xl font-medium leading-[1.15] text-text-heading md:text-5xl lg:text-[3.25rem]">
            {heading}
          </h2>
          {description && (
            <p className="mt-6 text-base leading-relaxed text-text-muted md:text-lg">
              {description}
            </p>
          )}
        </AnimateIn>
        {children}
      </div>
    </section>
  );
}
