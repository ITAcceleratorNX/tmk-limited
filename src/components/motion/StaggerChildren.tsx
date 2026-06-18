"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerFast } from "@/lib/motion";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  fast?: boolean;
}

export function StaggerChildren({
  children,
  className,
  fast = false,
}: StaggerChildrenProps) {
  const container = fast ? staggerFast : staggerContainer;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12, margin: "-30px" }}
      variants={container}
    >
      {children}
    </motion.div>
  );
}
