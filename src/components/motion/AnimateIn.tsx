"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp, motionVariants, type MotionVariant } from "@/lib/motion";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  variant?: MotionVariant;
  variants?: Variants;
  delay?: number;
  once?: boolean;
  amount?: number;
  as?: "div" | "section" | "article" | "li" | "span" | "p" | "h1" | "h2" | "h3";
}

const tags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  li: motion.li,
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
};

export function AnimateIn({
  children,
  className,
  variant = "fadeUp",
  variants,
  delay = 0,
  once = true,
  amount = 0.2,
  as = "div",
}: AnimateInProps) {
  const Component = tags[as];
  const selected = variants ?? motionVariants[variant];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "-40px" }}
      variants={{
        hidden: selected.hidden,
        visible: {
          ...selected.visible,
          transition: {
            ...(typeof selected.visible === "object" &&
            selected.visible !== null &&
            "transition" in selected.visible
              ? selected.visible.transition
              : {}),
            delay,
          },
        },
      }}
    >
      {children}
    </Component>
  );
}
